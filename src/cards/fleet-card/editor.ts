import { LitElement, html, css } from 'lit';
import { property, state } from 'lit/decorators.js';
import type { FleetCardConfig } from './types';

export class FelicityFleetCardEditor extends LitElement {
  static styles = css`
    .editor { padding: 12px; }
    .field  { margin-bottom: 12px; }
    label   { display: block; font-size: 0.8rem; color: var(--secondary-text-color, #999); margin-bottom: 4px; }
    input, select {
      width: 100%; box-sizing: border-box;
      background: var(--input-fill-color, #1c1c1c);
      border: 1px solid var(--divider-color, #444);
      border-radius: 4px; padding: 6px 8px;
      color: var(--primary-text-color, #fff);
      font-size: 0.9rem;
    }
    input[type=range] { border: none; background: transparent; padding: 0; }
    .row { display: flex; gap: 8px; align-items: center; }
    .hint { font-size: 0.7rem; color: var(--secondary-text-color, #888); margin-top: 2px; }
    .toggle-row { display: flex; align-items: center; gap: 8px; font-size: 0.85rem; }
    input[type=checkbox] { width: auto; }
  `;

  @property({ attribute: false }) public hass!: Record<string, unknown>;
  @state() private _config: FleetCardConfig = { type: 'custom:felicity-fleet-card', url: '' };

  setConfig(config: FleetCardConfig) {
    this._config = config;
  }

  private _changed(key: keyof FleetCardConfig, value: unknown) {
    const ev = new CustomEvent('config-changed', {
      detail: { config: { ...this._config, [key]: value } },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(ev);
    this._config = { ...this._config, [key]: value } as FleetCardConfig;
  }

  render() {
    return html`
      <div class="editor">
        <div class="field">
          <label>Server URL *</label>
          <input type="url" .value=${this._config.url ?? ''}
            placeholder="http://192.168.1.x:3010"
            @change=${(e: Event) => this._changed('url', (e.target as HTMLInputElement).value)} />
          <div class="hint">Base URL of your mcp-fsolar instance</div>
        </div>

        <div class="field">
          <label>API Key (optional)</label>
          <input type="password" .value=${this._config.api_key ?? ''}
            placeholder="leave empty if no auth"
            @change=${(e: Event) => this._changed('api_key', (e.target as HTMLInputElement).value || undefined)} />
        </div>

        <div class="field">
          <label>Update mode</label>
          <select .value=${this._config.mode ?? 'sse'}
            @change=${(e: Event) => this._changed('mode', (e.target as HTMLSelectElement).value)}>
            <option value="sse">SSE (live push)</option>
            <option value="poll">Poll (interval)</option>
          </select>
        </div>

        ${this._config.mode === 'poll' ? html`
          <div class="field">
            <label>Poll interval: ${this._config.poll_interval ?? 30}s</label>
            <input type="range" min="10" max="300" step="5"
              .value=${String(this._config.poll_interval ?? 30)}
              @input=${(e: Event) => this._changed('poll_interval', Number((e.target as HTMLInputElement).value))} />
          </div>
        ` : ''}

        <div class="field">
          <label>Card title</label>
          <input type="text" .value=${this._config.title ?? ''}
            placeholder="⚡ FELICITY PACK"
            @change=${(e: Event) => this._changed('title', (e.target as HTMLInputElement).value || undefined)} />
        </div>

        <div class="field">
          <label class="toggle-row">
            <input type="checkbox" ?checked=${this._config.show_trend !== false}
              @change=${(e: Event) => this._changed('show_trend', (e.target as HTMLInputElement).checked)} />
            Show trend row
          </label>
        </div>

        <div class="field">
          <label class="toggle-row">
            <input type="checkbox" ?checked=${this._config.show_module_temps !== false}
              @change=${(e: Event) => this._changed('show_module_temps', (e.target as HTMLInputElement).checked)} />
            Show module temperatures
          </label>
        </div>
      </div>
    `;
  }
}
