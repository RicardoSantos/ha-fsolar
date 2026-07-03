import { LitElement, html, css } from 'lit';
import { property, state } from 'lit/decorators.js';
import type { HistoryCardConfig } from './types';

export class FelicityHistoryCardEditor extends LitElement {
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
    .hint { font-size: 0.7rem; color: var(--secondary-text-color, #888); margin-top: 2px; }
  `;

  @property({ attribute: false }) public hass!: Record<string, unknown>;
  @state() private _config: HistoryCardConfig = { type: 'custom:felicity-history-card', url: '' };

  setConfig(config: HistoryCardConfig) {
    this._config = config;
  }

  private _changed(key: keyof HistoryCardConfig, value: unknown) {
    const ev = new CustomEvent('config-changed', {
      detail: { config: { ...this._config, [key]: value } },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(ev);
    this._config = { ...this._config, [key]: value } as HistoryCardConfig;
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
            @change=${(e: Event) => this._changed('api_key', (e.target as HTMLInputElement).value || undefined)} />
        </div>

        <div class="field">
          <label>Default tab</label>
          <select .value=${this._config.default_tab ?? 'recent'}
            @change=${(e: Event) => this._changed('default_tab', (e.target as HTMLSelectElement).value)}>
            <option value="recent">Recent (last 23h)</option>
            <option value="daily">Daily</option>
            <option value="lifetime">Lifetime</option>
          </select>
        </div>

        <div class="field">
          <label>Card title</label>
          <input type="text" .value=${this._config.title ?? ''}
            placeholder="📊 BATTERY HISTORY"
            @change=${(e: Event) => this._changed('title', (e.target as HTMLInputElement).value || undefined)} />
        </div>
      </div>
    `;
  }
}
