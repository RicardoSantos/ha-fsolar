import { LitElement, html, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import type { FleetCardConfig } from './types';
import { fleetStyles } from './styles';
import { FsolarApi, type Battery, type HealthResponse, type HealthEntry } from '../../shared/api';
import { C, C_BLUE, cellColour, deltaColour, socColour } from '../../shared/colours';
import { formatW, formatA, formatV, formatMv, formatKwh, formatTimeRemaining, formatEta, formatTemp, formatDbm } from '../../shared/formatters';
import { voltageToSocPct } from '../../shared/lifepo4';

interface TooltipInfo {
  cellIdx: number;
  batSn: string;
  x: number;
  y: number;
}

export class FelicityFleetCard extends LitElement {
  static styles = fleetStyles;

  @property({ attribute: false }) public hass!: Record<string, unknown>;
  @state() private _config: FleetCardConfig | null = null;
  @state() private _batteries: Battery[] = [];
  @state() private _health: HealthResponse = {};
  @state() private _loading = true;
  @state() private _error: string | null = null;
  @state() private _stale = false;
  @state() private _tooltip: TooltipInfo | null = null;

  private _api: FsolarApi | null = null;
  private _sseCleanup: (() => void) | null = null;
  private _pollTimer: ReturnType<typeof setInterval> | null = null;
  private _lastFetch = 0;

  setConfig(config: FleetCardConfig) {
    if (!config.url) throw new Error('url is required');
    this._config = { mode: 'sse', poll_interval: 30, show_trend: true, show_module_temps: true, ...config };
    this._api = new FsolarApi(config.url, config.api_key);
  }

  static getConfigElement() {
    return document.createElement('felicity-fleet-card-editor');
  }

  static getStubConfig() {
    return { type: 'custom:felicity-fleet-card', url: 'http://localhost:3010' };
  }

  connectedCallback() {
    super.connectedCallback();
    this._startDataFlow();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._stopDataFlow();
  }

  private _startDataFlow() {
    if (!this._api || !this._config) return;
    this._fetchAll();
    if (this._config.mode === 'sse') {
      this._sseCleanup = this._api.subscribeSSE((_evt) => {
        this._fetchAll();
      }, () => {
        if (this._config?.mode === 'sse') {
          setTimeout(() => this._startSSE(), 5000);
        }
      });
    } else {
      const interval = (this._config.poll_interval ?? 30) * 1000;
      this._pollTimer = setInterval(() => this._fetchAll(), interval);
    }
  }

  private _startSSE() {
    if (!this._api) return;
    this._sseCleanup?.();
    this._sseCleanup = this._api.subscribeSSE((_evt) => {
      this._fetchAll();
    }, () => {
      setTimeout(() => this._startSSE(), 5000);
    });
  }

  private _stopDataFlow() {
    this._sseCleanup?.();
    this._sseCleanup = null;
    if (this._pollTimer) {
      clearInterval(this._pollTimer);
      this._pollTimer = null;
    }
  }

  private async _fetchAll() {
    if (!this._api) return;
    try {
      const [batteries, health] = await Promise.all([
        this._api.batteries(),
        this._api.health(),
      ]);
      this._batteries = batteries;
      this._health = health;
      this._loading = false;
      this._error = null;
      this._stale = Date.now() - this._lastFetch > 120_000 && this._lastFetch > 0;
      this._lastFetch = Date.now();
    } catch (err) {
      const msg = (err as Error).message;
      if (msg === 'AUTH_FAILED') {
        this._error = 'Auth failed — check api_key';
      } else {
        this._error = `Server unreachable: ${msg}`;
      }
      this._loading = false;
      if (this._lastFetch > 0) this._stale = true;
    }
  }

  private _retry() {
    this._loading = true;
    this._error = null;
    this._fetchAll();
  }

  private _packStats() {
    if (!this._batteries.length) return null;
    const totalKwh  = this._batteries.reduce((s, b) => s + b.remainingKwh, 0);
    const totalW    = this._batteries.reduce((s, b) => s + b.power, 0);
    const totalA    = this._batteries.reduce((s, b) => s + b.current, 0);
    const allVoltages = this._batteries.flatMap((b) => b.cellVoltages);
    const packMinMv = Math.min(...allVoltages);
    const packMaxMv = Math.max(...allVoltages);
    const avgMv     = allVoltages.length ? allVoltages.reduce((s, v) => s + v, 0) / allVoltages.length : 0;

    const packMinIdx = allVoltages.indexOf(packMinMv);
    const packMaxIdx = allVoltages.indexOf(packMaxMv);

    return { totalKwh, totalW, totalA, packMinMv, packMaxMv, avgMv, packMinIdx, packMaxIdx };
  }

  private _packMinMaxPerBattery() {
    const all: { sn: string; idx: number; mv: number }[] = [];
    for (const b of this._batteries) {
      b.cellVoltages.forEach((mv, idx) => all.push({ sn: b.sn, idx, mv }));
    }
    if (!all.length) return { minSn: '', minIdx: 0, maxSn: '', maxIdx: 0 };
    const min = all.reduce((a, b) => b.mv < a.mv ? b : a);
    const max = all.reduce((a, b) => b.mv > a.mv ? b : a);
    return { minSn: min.sn, minIdx: min.idx, maxSn: max.sn, maxIdx: max.idx };
  }

  private _timeRemaining(bat: Battery): { label: string; etaStr: string; direction: 'full' | 'empty' | null } {
    const powerW = Math.abs(bat.power);
    if (powerW < 5) return { label: '—', etaStr: '', direction: null };

    if (bat.chargingState === 'charging') {
      const remainingKwh = bat.ratedEnergyKwh
        ? (bat.ratedEnergyKwh * (1 - bat.soc / 100))
        : (bat.capacityAh * (1 - bat.soc / 100) * bat.voltage / 1000);
      const hours = remainingKwh / (powerW / 1000);
      return {
        label: `FULL IN ${formatTimeRemaining(hours)}`,
        etaStr: `→ 100% ${formatEta(hours)}`,
        direction: 'full',
      };
    } else {
      const hours = bat.remainingKwh / (powerW / 1000);
      const targetSoc = 5;
      return {
        label: `EMPTY IN ${formatTimeRemaining(hours)}`,
        etaStr: `→ ${targetSoc}% ${formatEta(hours)}`,
        direction: 'empty',
      };
    }
  }

  private _healthEntry(sn: string): HealthEntry | null {
    return this._health[sn] ?? null;
  }

  private _showTooltip(batSn: string, cellIdx: number, e: MouseEvent) {
    const rect = (this.shadowRoot as ShadowRoot).host.getBoundingClientRect();
    const target = e.currentTarget as HTMLElement;
    const targetRect = target.getBoundingClientRect();
    this._tooltip = {
      cellIdx,
      batSn,
      x: targetRect.left - rect.left + targetRect.width / 2,
      y: targetRect.top - rect.top - 4,
    };
  }

  private _hideTooltip() {
    this._tooltip = null;
  }

  private _renderTooltip() {
    if (!this._tooltip) return nothing;
    const { batSn, cellIdx } = this._tooltip;
    const bat = this._batteries.find((b) => b.sn === batSn);
    if (!bat) return nothing;

    const mv = bat.cellVoltages[cellIdx] ?? 0;
    const allMv = bat.cellVoltages;
    const avg = allMv.length ? allMv.reduce((s, v) => s + v, 0) / allMv.length : 0;
    const delta = mv - avg;
    const health = this._healthEntry(batSn);
    const outliers = health?.outliers ?? [];

    const { minSn, minIdx, maxSn, maxIdx } = this._packMinMaxPerBattery();
    const isPackMin = batSn === minSn && cellIdx === minIdx;
    const isPackMax = batSn === maxSn && cellIdx === maxIdx;

    const module = bat.modules.find((m) => m.cells.includes(cellIdx + 1));
    const moduleSpread = module ? module.max - module.min : null;
    const moduleTemp = module?.temp ?? null;
    const packSpread = bat.cellVoltageMax != null && bat.cellVoltageMin != null
      ? bat.cellVoltageMax - bat.cellVoltageMin
      : null;
    const lifePo4 = voltageToSocPct(mv);
    const isOutlier = outliers.includes(cellIdx);

    const role = isPackMin ? 'lowest' : isPackMax ? 'highest' : isOutlier ? 'outlier' : '';
    const roleText = isPackMin
      ? 'LOWEST IN PACK'
      : isPackMax
        ? 'HIGHEST IN PACK'
        : isOutlier
          ? 'OUTLIER'
          : null;
    const roleHint = isPackMin
      ? 'weakest cell limits capacity'
      : isPackMax
        ? 'sets the charging ceiling'
        : null;

    const style = styleMap({
      left: `${this._tooltip.x}px`,
      top: `${this._tooltip.y}px`,
      transform: 'translate(-50%, -100%)',
    });

    return html`
      <div class="cell-tooltip" style=${style}>
        <div class="tooltip-title">CELL ${cellIdx + 1} · ${formatMv(mv)}</div>
        ${roleText ? html`<div class="tooltip-role ${role}">${roleText}</div>` : nothing}
        <div class="tooltip-row">
          <strong>${delta >= 0 ? '+' : ''}${Math.round(delta)} mV vs avg</strong>
          ${roleHint ? html` · ${roleHint}` : nothing}
        </div>
        ${module ? html`<div class="tooltip-row">Module ${module.index} spread: <strong>${formatMv(moduleSpread ?? 0)}</strong></div>` : nothing}
        ${moduleTemp != null ? html`<div class="tooltip-row">Module ${module!.index} temp: <strong>${formatTemp(moduleTemp)}</strong></div>` : nothing}
        ${packSpread != null ? html`<div class="tooltip-row">Pack spread: <strong>${formatMv(packSpread)}</strong></div>` : nothing}
        <div class="tooltip-row">LiFePO4 charge: <strong>${lifePo4}%</strong></div>
        <div class="tooltip-row">Avg: <strong>${formatMv(avg)}</strong></div>
      </div>
    `;
  }

  private _renderBattery(bat: Battery, _idx: number) {
    const health  = this._healthEntry(bat.sn);
    const outliers = health?.outliers ?? [];
    const { minSn, minIdx, maxSn, maxIdx } = this._packMinMaxPerBattery();

    const allMv = bat.cellVoltages;
    const avg   = allMv.length ? allMv.reduce((s, v) => s + v, 0) / allMv.length : 0;

    const socColor    = socColour(bat.soc);
    const deltaColor  = bat.cellDelta != null ? deltaColour(bat.cellDelta) : C.grey;
    const timeEst     = this._timeRemaining(bat);
    const healthStatus = health?.cellDeltaStatus ?? 'unknown';
    const socStatus    = health?.socStatus ?? 'unknown';

    const stateClass = bat.chargingState === 'charging'
      ? 'charging'
      : bat.chargingState === 'discharging'
        ? 'discharging'
        : '';
    const warnClass = (bat.warningCount > 0 || healthStatus === 'warn' || healthStatus === 'bad') ? ' warn' : '';

    const trend = health?.trend ?? null;
    const trendClass = trend?.includes('improving') ? 'trend-improving'
      : trend?.includes('worsening') ? 'trend-worsening'
        : 'trend-stable';

    const showModuleTemps = this._config?.show_module_temps !== false;
    const showTrend = this._config?.show_trend !== false;

    const cellBarHeight = (mv: number) => {
      const min = Math.min(...allMv, 0);
      const max = Math.max(...allMv, 1);
      const norm = max === min ? 0.7 : 0.4 + 0.55 * ((mv - min) / (max - min));
      return Math.max(8, Math.round(norm * 52));
    };

    return html`
      <div class="battery-card ${stateClass}${warnClass}">
        <!-- Header -->
        <div class="bat-header">
          <span class="bat-alias">${bat.alias}</span>
          ${this._renderHealthBadge(healthStatus, socStatus)}
          ${bat.chargingState === 'charging'   ? html`<span class="state-badge badge-chg">▲ CHG</span>`  : nothing}
          ${bat.chargingState === 'discharging'? html`<span class="state-badge badge-dchg">▼ DCHG</span>` : nothing}
          ${bat.chargingState === 'standby'    ? html`<span class="state-badge badge-idle">◼ IDLE</span>` : nothing}
          ${bat.isBalancing                    ? html`<span class="state-badge badge-bal">⚡ BAL</span>` : nothing}
        </div>

        <!-- SOC -->
        <div class="soc-row">
          <span class="soc-pct" style=${styleMap({ color: socColor })}>${bat.soc}%</span>
          <span class="soc-kwh">${formatKwh(bat.remainingKwh)}</span>
        </div>
        <div class="soc-bar-track">
          <div class="soc-bar-fill" style=${styleMap({
            width: `${bat.soc}%`,
            background: `linear-gradient(90deg, ${socColor}88, ${socColor})`,
          })}></div>
        </div>
        <div class="time-est">
          ${timeEst.direction === 'full'
            ? html`<strong>FULL IN</strong> ${timeEst.label.replace('FULL IN ', '')} <span class="eta">${timeEst.etaStr}</span>`
            : timeEst.direction === 'empty'
              ? html`<strong>EMPTY IN</strong> ${timeEst.label.replace('EMPTY IN ', '')} <span class="eta">${timeEst.etaStr}</span>`
              : html`<strong>${timeEst.label}</strong>`}
        </div>

        <!-- Stats -->
        <div class="stats-row">
          <div class="stat">
            <span class="stat-label">Power</span>
            <span class="stat-value" style=${styleMap({ color: bat.power > 5 ? '#00ff88' : bat.power < -5 ? '#ffd700' : C.dim })}>
              ${formatW(bat.power)}
            </span>
          </div>
          <div class="stat">
            <span class="stat-label">Current</span>
            <span class="stat-value">${formatA(bat.current)}</span>
          </div>
          <div class="stat">
            <span class="stat-label">Voltage</span>
            <span class="stat-value">${formatV(bat.voltage)}</span>
          </div>
          <div class="stat">
            <span class="stat-label">Temp</span>
            <span class="stat-value" style=${styleMap({ color: bat.tempMax > 35 ? C.orange : bat.tempMax > 40 ? C.red : C.text })}>
              ${formatTemp(bat.tempMax)}
            </span>
          </div>
          <div class="stat">
            <span class="stat-label">SOH</span>
            <span class="stat-value" style=${styleMap({ color: bat.soh < 80 ? C.orange : bat.soh < 60 ? C.red : C.text })}>
              ${bat.soh}%
            </span>
          </div>
          <div class="stat">
            <span class="stat-label">Cell Δ</span>
            <span class="stat-value" style=${styleMap({ color: deltaColor })}>
              ${bat.cellDelta != null ? formatMv(bat.cellDelta) : '—'}
            </span>
          </div>
        </div>

        <!-- Trend -->
        ${showTrend ? html`
          <div class="trend-row">
            <span class="${trendClass}">${trend ?? '—'}</span>
            ${bat.batCycleIndex != null ? html`<span class="cycle-count">· ${bat.batCycleIndex}×</span>` : nothing}
            ${bat.isBalancing ? html`<span class="bal-icon">⚡</span>` : nothing}
          </div>
        ` : nothing}

        <!-- Cells -->
        ${allMv.length > 0 ? html`
          <div class="cells-header">
            <span>
              ${formatMv(Math.min(...allMv))} – ${formatMv(Math.max(...allMv))} · avg ${formatMv(avg)}
            </span>
            <span style="color:${deltaColor}">Δ ${bat.cellDelta != null ? formatMv(bat.cellDelta) : '—'}</span>
          </div>
          <div class="cells-grid" style="position:relative">
            ${allMv.map((mv, ci) => {
              const colour = cellColour(
                ci, mv, avg,
                bat.sn === minSn ? minIdx : -1,
                bat.sn === maxSn ? maxIdx : -1,
                outliers,
              );
              const realColour = ci === minIdx && bat.sn === minSn ? C.red
                : ci === maxIdx && bat.sn === maxSn ? C_BLUE
                  : colour;
              const barH = cellBarHeight(mv);
              return html`
                <div class="cell-col"
                  @mouseenter=${(e: MouseEvent) => this._showTooltip(bat.sn, ci, e)}
                  @mouseleave=${this._hideTooltip}>
                  <span class="cell-mv-label" style=${styleMap({ color: realColour })}>${Math.round(mv)}</span>
                  <div class="cell-bar" style=${styleMap({
                    height: `${barH}px`,
                    background: realColour,
                    opacity: realColour === C.grey ? '0.4' : '0.85',
                  })}></div>
                  <span class="cell-num">${ci + 1}</span>
                </div>
              `;
            })}
            ${this._tooltip?.batSn === bat.sn ? this._renderTooltip() : nothing}
          </div>
        ` : nothing}

        <!-- Module temps -->
        ${showModuleTemps && bat.modules.length > 0 ? html`
          <div class="modules-row">
            ${bat.modules.map((m) => html`
              <div class="module-cell">
                <div class="module-label">M${m.index}</div>
                <div class="module-temp">${m.temp != null ? formatTemp(m.temp) : '—'}</div>
                <div class="module-delta" style=${styleMap({ color: deltaColour(m.delta) })}>Δ${formatMv(m.delta)}</div>
              </div>
            `)}
          </div>
        ` : nothing}

        <!-- Footer -->
        <div class="bat-footer">
          <span>${bat.model}</span>
          <span>${formatDbm(bat.wifiSignal)}</span>
        </div>
      </div>
    `;
  }

  private _renderHealthBadge(cellDeltaStatus: string, socStatus: string) {
    const worst = (cellDeltaStatus === 'bad' || socStatus === 'bad') ? 'bad'
      : (cellDeltaStatus === 'warn' || socStatus === 'warn') ? 'warn'
        : 'good';
    return html`<span class="state-badge badge-health-${worst}">
      ${worst === 'good' ? '✓' : worst === 'warn' ? '!' : '✗'} HEALTH
    </span>`;
  }

  private _renderDischargeBanner() {
    const discharging = this._batteries.filter((b) => b.chargingState === 'discharging');
    if (!discharging.length) return nothing;

    const hour = new Date().getHours();
    const isNight = hour >= 20 || hour < 6;
    const totalKwh = this._batteries.reduce((s, b) => s + b.remainingKwh, 0);
    const ratedKwh = this._batteries.reduce((s, b) => s + (b.ratedEnergyKwh ?? b.remainingKwh / (b.soc / 100)), 0);
    const totalW   = Math.abs(this._batteries.reduce((s, b) => s + b.power, 0));
    const avgSoc   = this._batteries.reduce((s, b) => s + b.soc, 0) / this._batteries.length;
    const cRate    = ratedKwh > 0 ? (totalW / 1000 / ratedKwh).toFixed(2) : '—';

    const hoursToSunrise = isNight
      ? hour >= 20 ? (24 - hour + 6) : (6 - hour)
      : 0;

    return html`
      <div class="discharge-banner">
        <div class="label">
          ${isNight ? `☀ SUNRISE EST. IN ${hoursToSunrise.toFixed(1)}H` : '▼ DISCHARGING'}
        </div>
        <div class="discharge-stats">
          <strong>${Math.round(avgSoc)}% SOC</strong> ·
          ≈ ${formatKwh(totalKwh)} ·
          ${formatW(-totalW)} · ${cRate}C
        </div>
      </div>
    `;
  }

  render() {
    if (!this._config) return html`<div class="card"><div class="state-panel"><span>No config</span></div></div>`;

    if (this._loading && !this._batteries.length) {
      return html`
        <div class="card">
          <div class="state-panel">
            <div class="spinner"></div>
            <span class="connecting-msg">Connecting to mcp-fsolar…</span>
          </div>
        </div>
      `;
    }

    if (this._error && !this._batteries.length) {
      return html`
        <div class="card">
          <div class="state-panel">
            <span class="error-msg">⚠ ${this._error}</span>
            <button class="retry-btn" @click=${this._retry}>Retry</button>
          </div>
        </div>
      `;
    }

    const stats = this._packStats();
    const title = this._config.title ?? '⚡ FELICITY PACK';

    const allDeltas = this._batteries.map((b) => b.cellDelta ?? 0);
    const maxDelta  = allDeltas.length ? Math.max(...allDeltas) : 0;

    return html`
      <div class="card" @mouseleave=${this._hideTooltip}>
        <!-- Header -->
        <div class="header">
          <span class="header-title">${title}</span>
          <div class="header-right">
            ${stats ? html`
              <span>${formatKwh(stats.totalKwh)}</span>
              <span>${formatW(stats.totalW)}</span>
              <span>${stats.totalA.toFixed(1)} A</span>
            ` : nothing}
            ${this._stale ? html`<span class="badge badge-stale">STALE</span>` : nothing}
            ${this._error ? html`<span class="badge badge-cache">CACHE</span>` : nothing}
          </div>
        </div>

        <!-- Sub-header -->
        <div class="sub-header">
          <div class="soc-summary">
            ${this._batteries.map((b) => html`
              <span><span class="soc-val">${b.alias} ${b.soc}%</span></span>
            `)}
            <span style="color:${deltaColour(maxDelta)}">Δ${Math.round(maxDelta)}mV</span>
          </div>
          <span style="color:#555e6b">${this._config?.mode?.toUpperCase() ?? 'SSE'}</span>
        </div>

        <!-- Discharge banner (when any battery discharging) -->
        ${this._renderDischargeBanner()}

        <!-- Error overlay (data is stale) -->
        ${this._error && this._batteries.length ? html`
          <div style="background:#ff444411;padding:6px 16px;font-size:0.75rem;color:#ff8888;border-bottom:1px solid #ff444430">
            ⚠ ${this._error} — showing last known data
            <button class="retry-btn" style="margin-left:8px;padding:2px 8px;font-size:0.7rem" @click=${this._retry}>Retry</button>
          </div>
        ` : nothing}

        <!-- Battery panels -->
        <div class="batteries">
          ${this._batteries.map((bat, idx) => this._renderBattery(bat, idx))}
        </div>
      </div>
    `;
  }
}
