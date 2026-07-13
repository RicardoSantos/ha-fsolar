import { LitElement, html, nothing } from 'lit';
import { property, state, query } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import ApexCharts from 'apexcharts';
import type { HistoryCardConfig } from './types';
import { historyStyles } from './styles';
import { FsolarApi, type Battery, type Snapshot, type DailyRawSnapshot } from '../../shared/api';
import { batteryColour } from '../../shared/colours';

type Tab = 'recent' | 'daily' | 'lifetime';

export class FelicityHistoryCard extends LitElement {
  static styles = historyStyles;

  @property({ attribute: false }) public hass!: Record<string, unknown>;
  @state() private _config: HistoryCardConfig | null = null;
  @state() private _tab: Tab = 'recent';
  @state() private _loading = true;
  @state() private _error: string | null = null;

  @state() private _batteries: Battery[] = [];
  @state() private _snapshots: Snapshot[] = [];
  @state() private _dailySnapshots: DailyRawSnapshot[] = [];

  @query('#delta-chart')  private _deltaChartEl?: HTMLElement;
  @query('#temp-chart')   private _tempChartEl?: HTMLElement;
  @query('#daily-delta-chart') private _dailyDeltaChartEl?: HTMLElement;
  @query('#daily-temp-chart')  private _dailyTempChartEl?: HTMLElement;

  private _api: FsolarApi | null = null;
  private _deltaChart: ApexCharts | null = null;
  private _tempChart: ApexCharts | null = null;
  private _dailyDeltaChart: ApexCharts | null = null;
  private _dailyTempChart: ApexCharts | null = null;

  setConfig(config: HistoryCardConfig) {
    if (!config.url) throw new Error('url is required');
    this._config = config;
    this._tab = config.default_tab ?? 'recent';
    this._api = new FsolarApi(config.url, config.api_key);
  }

  static getConfigElement() {
    return document.createElement('felicity-history-card-editor');
  }

  static getStubConfig() {
    return { type: 'custom:felicity-history-card', url: 'http://localhost:3010' };
  }

  connectedCallback() {
    super.connectedCallback();
    this._fetchAll();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._destroyCharts();
  }

  private _destroyCharts() {
    this._deltaChart?.destroy();
    this._tempChart?.destroy();
    this._dailyDeltaChart?.destroy();
    this._dailyTempChart?.destroy();
    this._deltaChart = null;
    this._tempChart = null;
    this._dailyDeltaChart = null;
    this._dailyTempChart = null;
  }

  private async _fetchAll() {
    if (!this._api) return;
    this._loading = true;
    try {
      const [batteries, intradayRes, dailyRes] = await Promise.all([
        this._api.batteries(),
        this._api.snapshotsIntraday(),
        this._api.snapshotsDaily(),
      ]);
      this._batteries = batteries.batteries;
      this._snapshots = intradayRes.snapshots;
      this._dailySnapshots = dailyRes.snapshots;
      this._error = null;
    } catch (err) {
      this._error = (err as Error).message === 'AUTH_FAILED' ? 'Auth failed' : (err as Error).message;
    } finally {
      this._loading = false;
    }
  }

  private _retry() {
    this._fetchAll();
  }

  updated() {
    if (this._tab === 'recent' && this._snapshots.length > 0) {
      this._renderRecentCharts();
    }
    if (this._tab === 'daily' && this._dailySnapshots.length > 0) {
      this._renderDailyCharts();
    }
  }

  private _renderRecentCharts() {
    if (!this._deltaChartEl || !this._tempChartEl) return;

    const batAliases = [...new Set(this._snapshots.flatMap((s) => s.batteries.map((b) => b.alias)))];
    const timestamps = this._snapshots.map((s) => new Date(s.ts).getTime());

    const baseOpts: ApexCharts.ApexOptions = {
      chart: {
        type: 'line', height: 160, background: '#161b22', toolbar: { show: false },
        animations: { enabled: false },
        zoom: { enabled: false },
      },
      stroke: { width: 2, curve: 'smooth' },
      grid: { borderColor: '#30363d', strokeDashArray: 2 },
      xaxis: { type: 'datetime', labels: { style: { colors: '#555e6b', fontSize: '0.6rem' } } },
      yaxis: { labels: { style: { colors: '#555e6b', fontSize: '0.6rem' } } },
      legend: { labels: { colors: '#c9d1d9' }, fontSize: '11px' },
      tooltip: { theme: 'dark' },
    };

    // Cell Δ chart
    const deltaSeries = batAliases.map((alias, i) => ({
      name: alias,
      color: batteryColour(i),
      data: this._snapshots.map((s, si) => {
        const bat = s.batteries.find((b) => b.alias === alias);
        return [timestamps[si], bat?.cellDelta ?? null];
      }) as [number, number | null][],
    }));

    const deltaOpts: ApexCharts.ApexOptions = {
      ...baseOpts,
      series: deltaSeries,
      annotations: {
        yaxis: [
          { y: 30,  borderColor: '#00ff88', label: { text: '30mV', style: { color: '#000', background: '#00ff88' } } },
          { y: 80,  borderColor: '#ffd700', label: { text: '80mV',  style: { color: '#000', background: '#ffd700' } } },
          { y: 150, borderColor: '#ff4444', label: { text: '150mV', style: { color: '#fff', background: '#ff4444' } } },
        ],
      },
      yaxis: { ...baseOpts.yaxis, title: { text: 'mV', style: { color: '#555e6b' } } },
    };

    if (this._deltaChart) {
      this._deltaChart.updateOptions(deltaOpts, true, false);
    } else {
      this._deltaChart = new ApexCharts(this._deltaChartEl, deltaOpts);
      this._deltaChart.render();
    }

    // Max temp chart
    const tempSeries = batAliases.map((alias, i) => ({
      name: alias,
      color: batteryColour(i),
      data: this._snapshots.map((s, si) => {
        const bat = s.batteries.find((b) => b.alias === alias);
        return [timestamps[si], bat?.tempMax ?? null];
      }) as [number, number | null][],
    }));

    const tempOpts: ApexCharts.ApexOptions = {
      ...baseOpts,
      series: tempSeries,
      yaxis: { ...baseOpts.yaxis, title: { text: '°C', style: { color: '#555e6b' } } },
    };

    if (this._tempChart) {
      this._tempChart.updateOptions(tempOpts, true, false);
    } else {
      this._tempChart = new ApexCharts(this._tempChartEl, tempOpts);
      this._tempChart.render();
    }
  }

  /** Group daily raw snapshots by date; pair min-voltage and max-voltage entries. */
  private _groupDailyByDate(): Map<string, { minSnap: DailyRawSnapshot; maxSnap: DailyRawSnapshot }> {
    const byDate = new Map<string, DailyRawSnapshot[]>();
    for (const snap of this._dailySnapshots) {
      const date = snap.ts.slice(0, 10);
      if (!byDate.has(date)) byDate.set(date, []);
      byDate.get(date)!.push(snap);
    }
    const result = new Map<string, { minSnap: DailyRawSnapshot; maxSnap: DailyRawSnapshot }>();
    for (const [date, snaps] of byDate) {
      // T11:59:59 = min pack voltage, T12:00:01 = max pack voltage
      const minSnap = snaps.find((s) => s.ts.includes('T11:59:59')) ?? snaps[0];
      const maxSnap = snaps.find((s) => s.ts.includes('T12:00:01')) ?? snaps[snaps.length - 1];
      result.set(date, { minSnap, maxSnap });
    }
    return result;
  }

  private _renderDailyCharts() {
    if (!this._dailyDeltaChartEl || !this._dailyTempChartEl) return;

    const grouped = this._groupDailyByDate();
    const dates   = [...grouped.keys()].sort();
    const batAliases = [...new Set(this._dailySnapshots.flatMap((s) => s.batteries.map((b) => b.alias)))];

    const baseOpts: ApexCharts.ApexOptions = {
      chart: { background: '#161b22', toolbar: { show: false }, animations: { enabled: false } },
      dataLabels: { enabled: false },
      grid: { borderColor: '#30363d' },
      xaxis: { type: 'datetime', labels: { style: { colors: '#555e6b', fontSize: '0.6rem' } } },
      yaxis: { labels: { style: { colors: '#555e6b', fontSize: '0.6rem' } } },
      legend: { labels: { colors: '#c9d1d9' }, fontSize: '11px' },
      tooltip: { theme: 'dark' },
    };

    // Pack voltage range (rangeBar): low = avg cell mV at day's low; high = avg cell mV at day's high
    const rangeSeries = batAliases.map((alias, i) => ({
      name: alias,
      color: batteryColour(i),
      data: dates.map((date) => {
        const { minSnap, maxSnap } = grouped.get(date)!;
        const minBat = minSnap.batteries.find((b) => b.alias === alias);
        const maxBat = maxSnap.batteries.find((b) => b.alias === alias);
        if (!minBat || !maxBat) return null;
        const avgLow  = minBat.voltages.length
          ? Math.round(minBat.voltages.reduce((a, v) => a + v, 0) / minBat.voltages.length)
          : (minBat.cellMin ?? 0);
        const avgHigh = maxBat.voltages.length
          ? Math.round(maxBat.voltages.reduce((a, v) => a + v, 0) / maxBat.voltages.length)
          : (maxBat.cellMax ?? 0);
        return { x: new Date(date + 'T12:00:00Z').getTime(), y: [avgLow, avgHigh] };
      }).filter((d): d is { x: number; y: [number, number] } => d !== null),
    }));

    const rangeOpts: ApexCharts.ApexOptions = {
      ...baseOpts,
      chart: { ...baseOpts.chart, type: 'rangeBar', height: 160 },
      plotOptions: { bar: { horizontal: false, columnWidth: '60%' } },
      series: rangeSeries,
      yaxis: {
        ...baseOpts.yaxis,
        title: { text: 'avg cell mV', style: { color: '#555e6b' } },
        min: 3000, max: 3700,
      },
      tooltip: {
        theme: 'dark',
        y: { formatter: (val: number) => `${val} mV` },
      },
    };

    if (this._dailyDeltaChart) {
      this._dailyDeltaChart.updateOptions(rangeOpts, true, false);
    } else {
      this._dailyDeltaChart = new ApexCharts(this._dailyDeltaChartEl, rangeOpts);
      this._dailyDeltaChart.render();
    }

    // Max cell delta per day (bar): max across min and max entries
    const deltaSeries = batAliases.map((alias, i) => ({
      name: alias,
      color: batteryColour(i),
      data: dates.map((date) => {
        const { minSnap, maxSnap } = grouped.get(date)!;
        const minBat = minSnap.batteries.find((b) => b.alias === alias);
        const maxBat = maxSnap.batteries.find((b) => b.alias === alias);
        const delta = Math.max(minBat?.cellDelta ?? 0, maxBat?.cellDelta ?? 0);
        return [new Date(date + 'T12:00:00Z').getTime(), delta || null];
      }) as [number, number | null][],
    }));

    const deltaOpts: ApexCharts.ApexOptions = {
      ...baseOpts,
      chart: { ...baseOpts.chart, type: 'bar', height: 160 },
      series: deltaSeries,
      yaxis: { ...baseOpts.yaxis, title: { text: 'mV', style: { color: '#555e6b' } } },
    };

    if (this._dailyTempChart) {
      this._dailyTempChart.updateOptions(deltaOpts, true, false);
    } else {
      this._dailyTempChart = new ApexCharts(this._dailyTempChartEl, deltaOpts);
      this._dailyTempChart.render();
    }
  }

  private _renderDeviationHeatmap() {
    if (!this._snapshots.length || !this._batteries.length) {
      return html`<div class="empty-msg">No snapshot data</div>`;
    }

    const avgDevFromBatteries = this._batteries.map((bat, bi) => {
      const avg = bat.cellVoltages.length
        ? bat.cellVoltages.reduce((s, v) => s + v, 0) / bat.cellVoltages.length
        : 0;
      const devs = bat.cellVoltages.map((v) => v - avg);
      return { alias: bat.alias, colour: batteryColour(bi), devs };
    });

    const maxAbsDev = Math.max(...avgDevFromBatteries.flatMap((b) => b.devs.map(Math.abs)), 1);

    return avgDevFromBatteries.map((bat) => html`
      <div class="heatmap-bat">
        <div class="heatmap-bat-label" style=${styleMap({ color: bat.colour })}>${bat.alias}</div>
        <div class="heatmap-cells">
          ${bat.devs.map((dev, ci) => {
            const posH = dev > 0 ? Math.round((dev / maxAbsDev) * 40) : 0;
            const negH = dev < 0 ? Math.round((-dev / maxAbsDev) * 40) : 0;
            return html`
              <div class="dev-col">
                <div class="dev-label-pos">${dev > 0 ? Math.round(dev) : ''}</div>
                <div class="dev-bar-pos" style=${styleMap({ height: `${posH}px` })}></div>
                <div class="dev-midline"></div>
                <div class="dev-bar-neg" style=${styleMap({ height: `${negH}px` })}></div>
                <div class="dev-label-neg">${dev < 0 ? Math.round(dev) : ''}</div>
                <div class="dev-cell-num">${ci + 1}</div>
              </div>
            `;
          })}
        </div>
      </div>
    `);
  }

  private _renderRecentTab() {
    if (!this._snapshots.length) {
      return html`<div class="state-panel"><span class="empty-msg">No intraday snapshots yet</span></div>`;
    }
    return html`
      <div class="charts-row">
        <div class="chart-panel">
          <div class="chart-title">Cell Δ (mV) · Last 23h</div>
          <div class="chart-container"><div id="delta-chart"></div></div>
        </div>
        <div class="chart-panel">
          <div class="chart-title">Max Temp (°C) · Last 23h</div>
          <div class="chart-container"><div id="temp-chart"></div></div>
        </div>
      </div>
      <div class="heatmap-section">
        <div class="heatmap-title">
          Cell Deviation · Avg of ${this._snapshots.length} snapshots
        </div>
        ${this._renderDeviationHeatmap()}
      </div>
    `;
  }

  private _renderDailyTab() {
    if (!this._dailySnapshots.length) {
      return html`<div class="state-panel"><span class="empty-msg">No daily snapshots yet</span></div>`;
    }
    return html`
      <div class="charts-row">
        <div class="chart-panel">
          <div class="chart-title">Pack Voltage Range (avg cell mV) · Daily</div>
          <div class="chart-container"><div id="daily-delta-chart"></div></div>
        </div>
        <div class="chart-panel">
          <div class="chart-title">Max Cell Δ (mV) · Daily</div>
          <div class="chart-container"><div id="daily-temp-chart"></div></div>
        </div>
      </div>
    `;
  }

  private _renderLifetimeTab() {
    if (!this._batteries.length) {
      return html`<div class="state-panel"><span class="empty-msg">No data</span></div>`;
    }
    return html`
      <div class="lifetime-grid">
        ${this._batteries.map((bat) => html`
          <div class="lifetime-card">
            <div class="lifetime-bat-name">${bat.alias}</div>
            <div class="lifetime-stat">
              <div class="lifetime-stat-label">Cycles</div>
              <div class="lifetime-stat-value">${bat.batCycleIndex ?? '—'}</div>
            </div>
            <div class="lifetime-stat">
              <div class="lifetime-stat-label">Full charges</div>
              <div class="lifetime-stat-value">${bat.batFullCount ?? '—'}</div>
            </div>
            <div class="lifetime-stat">
              <div class="lifetime-stat-label">SOH</div>
              <div class="lifetime-stat-value">${bat.soh}%</div>
            </div>
            <div class="lifetime-stat">
              <div class="lifetime-stat-label">Capacity</div>
              <div class="lifetime-stat-value">${bat.capacityAh} Ah</div>
            </div>
            <div class="lifetime-stat">
              <div class="lifetime-stat-label">Under-voltage events</div>
              <div class="lifetime-stat-value">${bat.batUnderVoltageCount ?? '—'}</div>
            </div>
            <div class="lifetime-stat">
              <div class="lifetime-stat-label">Warnings</div>
              <div class="lifetime-stat-value">${bat.warningCount}</div>
            </div>
          </div>
        `)}
      </div>
    `;
  }

  render() {
    if (!this._config) return html`<div class="card"><div class="state-panel"><span>No config</span></div></div>`;

    if (this._loading) {
      return html`
        <div class="card">
          <div class="state-panel">
            <div class="spinner"></div>
            <span style="color:#7a8491">Loading history…</span>
          </div>
        </div>
      `;
    }

    if (this._error) {
      return html`
        <div class="card">
          <div class="state-panel">
            <span class="error-msg">⚠ ${this._error}</span>
            <button class="retry-btn" @click=${this._retry}>Retry</button>
          </div>
        </div>
      `;
    }

    const title = this._config.title ?? '📊 BATTERY HISTORY';

    return html`
      <div class="card">
        <div class="header">
          <span class="header-title">${title}</span>
        </div>

        <div class="tabs">
          <div class="tab ${this._tab === 'recent' ? 'active' : ''}"
            @click=${() => { this._destroyCharts(); this._tab = 'recent'; }}>
            Recent
            <span class="tab-count">${this._snapshots.length}</span>
          </div>
          <div class="tab ${this._tab === 'daily' ? 'active' : ''}"
            @click=${() => { this._destroyCharts(); this._tab = 'daily'; }}>
            Daily
            <span class="tab-count">${new Set(this._dailySnapshots.map((s) => s.ts.slice(0, 10))).size}d</span>
          </div>
          <div class="tab ${this._tab === 'lifetime' ? 'active' : ''}"
            @click=${() => { this._tab = 'lifetime'; }}>
            Lifetime
          </div>
        </div>

        ${this._tab === 'recent'   ? this._renderRecentTab()   : nothing}
        ${this._tab === 'daily'    ? this._renderDailyTab()    : nothing}
        ${this._tab === 'lifetime' ? this._renderLifetimeTab() : nothing}
      </div>
    `;
  }
}
