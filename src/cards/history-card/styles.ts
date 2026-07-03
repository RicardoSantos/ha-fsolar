import { css } from 'lit';

export const historyStyles = css`
  :host {
    display: block;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }
  .card {
    background: var(--ha-card-background, #0d1117);
    border-radius: 12px;
    overflow: hidden;
    color: #c9d1d9;
  }

  /* ── Header ── */
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px 8px;
    border-bottom: 1px solid #30363d;
    background: #161b22;
  }
  .header-title {
    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #00bcd4;
  }

  /* ── Tabs ── */
  .tabs {
    display: flex;
    gap: 0;
    background: #161b22;
    border-bottom: 1px solid #30363d;
    padding: 0 16px;
  }
  .tab {
    padding: 8px 16px;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    cursor: pointer;
    color: #555e6b;
    border-bottom: 2px solid transparent;
    transition: color 0.15s, border-color 0.15s;
    user-select: none;
  }
  .tab:hover { color: #c9d1d9; }
  .tab.active { color: #00bcd4; border-bottom-color: #00bcd4; }
  .tab-count {
    font-size: 0.65rem;
    background: #30363d;
    border-radius: 3px;
    padding: 1px 4px;
    margin-left: 4px;
    font-weight: 400;
    color: #7a8491;
  }

  /* ── Charts row ── */
  .charts-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    padding: 12px;
  }
  @media (max-width: 600px) {
    .charts-row { grid-template-columns: 1fr; }
  }
  .chart-panel {
    background: #161b22;
    border: 1px solid #30363d;
    border-radius: 8px;
    overflow: hidden;
  }
  .chart-title {
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #555e6b;
    padding: 8px 12px 4px;
    border-bottom: 1px solid #30363d;
  }
  .chart-container {
    padding: 8px;
  }

  /* ── Deviation heatmap ── */
  .heatmap-section {
    padding: 12px;
    border-top: 1px solid #30363d;
  }
  .heatmap-title {
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #555e6b;
    margin-bottom: 12px;
  }
  .heatmap-bat {
    margin-bottom: 12px;
  }
  .heatmap-bat-label {
    font-size: 0.75rem;
    font-weight: 700;
    margin-bottom: 6px;
    font-family: 'Courier New', monospace;
  }
  .heatmap-cells {
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    gap: 2px;
    align-items: end;
  }
  .dev-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 0.5rem;
    font-family: 'Courier New', monospace;
  }
  .dev-label-pos { color: #00bcd4; height: 12px; display: flex; align-items: flex-end; }
  .dev-bar-pos {
    width: 100%;
    background: #00bcd4;
    min-height: 1px;
    border-radius: 1px 1px 0 0;
  }
  .dev-midline {
    width: 100%;
    height: 1px;
    background: #30363d;
  }
  .dev-bar-neg {
    width: 100%;
    background: #ff8c00;
    min-height: 1px;
    border-radius: 0 0 1px 1px;
  }
  .dev-label-neg { color: #ff8c00; height: 12px; display: flex; align-items: flex-start; }
  .dev-cell-num { color: #555e6b; margin-top: 2px; }

  /* ── Lifetime tab ── */
  .lifetime-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 10px;
    padding: 12px;
  }
  .lifetime-card {
    background: #161b22;
    border: 1px solid #30363d;
    border-radius: 8px;
    padding: 12px;
  }
  .lifetime-bat-name {
    font-size: 0.8rem;
    font-weight: 700;
    color: #00bcd4;
    margin-bottom: 8px;
  }
  .lifetime-stat {
    margin-bottom: 4px;
  }
  .lifetime-stat-label {
    font-size: 0.6rem;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: #555e6b;
  }
  .lifetime-stat-value {
    font-size: 0.85rem;
    font-family: 'Courier New', monospace;
    color: #c9d1d9;
  }

  /* ── State panels ── */
  .state-panel {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 48px 24px;
    gap: 12px;
    text-align: center;
  }
  .spinner {
    width: 32px;
    height: 32px;
    border: 3px solid #30363d;
    border-top-color: #00bcd4;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }
  @keyframes spin { to { transform: rotate(360deg); } }
  .error-msg { color: #ff4444; font-size: 0.85rem; }
  .retry-btn {
    background: #21262d; border: 1px solid #30363d;
    color: #c9d1d9; border-radius: 6px; padding: 6px 14px;
    cursor: pointer; font-size: 0.8rem;
  }
  .retry-btn:hover { background: #30363d; }
  .empty-msg { color: #555e6b; font-size: 0.85rem; }
`;
