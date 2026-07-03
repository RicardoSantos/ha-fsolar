import { css } from 'lit';

export const fleetStyles = css`
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
  .header-right {
    display: flex;
    align-items: center;
    gap: 12px;
    font-family: 'Courier New', monospace;
    font-size: 0.8rem;
    color: #c9d1d9;
  }
  .badge {
    font-size: 0.65rem;
    font-weight: 700;
    padding: 2px 6px;
    border-radius: 4px;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }
  .badge-cache { background: #ffd700; color: #000; }
  .badge-stale { background: #ff8c00; color: #000; }

  /* ── Sub-header ── */
  .sub-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 6px 16px;
    background: #0d1117;
    font-size: 0.75rem;
    color: #7a8491;
    border-bottom: 1px solid #30363d;
  }
  .soc-summary span { margin-right: 8px; }
  .soc-summary .soc-val { color: #00ff88; font-weight: 600; }

  /* ── Discharge banner ── */
  .discharge-banner {
    background: linear-gradient(90deg, #1a1000, #241800);
    border-bottom: 1px solid #ffd70040;
    padding: 6px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.75rem;
    color: #ffd700;
  }
  .discharge-banner .label { font-weight: 700; letter-spacing: 0.05em; }
  .discharge-stats { color: #c9d1d9; }
  .discharge-stats strong { color: #ffd700; }

  /* ── Battery grid ── */
  .batteries {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    padding: 12px;
  }

  /* ── Per-battery card ── */
  .battery-card {
    background: #161b22;
    border: 1px solid #30363d;
    border-radius: 8px;
    padding: 12px;
    min-width: 240px;
    flex: 1 1 240px;
  }
  .battery-card.charging { border-color: #00ff8840; }
  .battery-card.discharging { border-color: #ffd70040; }
  .battery-card.warn { border-color: #ff8c0060; }

  /* ── Battery header (compact single line) ── */
  .bat-header {
    display: flex;
    align-items: center;
    gap: 4px;
    margin-bottom: 5px;
    flex-wrap: nowrap;
    overflow: hidden;
  }
  .bat-alias {
    font-weight: 700;
    font-size: 0.85rem;
    color: #00bcd4;
    margin-right: 2px;
    white-space: nowrap;
  }
  .state-badge {
    font-size: 0.58rem;
    font-weight: 700;
    padding: 1px 4px;
    border-radius: 3px;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    white-space: nowrap;
  }
  .badge-chg  { background: #00ff8822; color: #00ff88; border: 1px solid #00ff8844; }
  .badge-dchg { background: #ffd70022; color: #ffd700; border: 1px solid #ffd70044; }
  .badge-idle { background: #55555522; color: #999;    border: 1px solid #55555544; }
  .badge-bal  { background: #ffd70033; color: #ffd700; border: 1px solid #ffd70066; }
  .badge-health-good { background: #00ff8822; color: #00ff88; border: 1px solid #00ff8844; }
  .badge-health-warn { background: #ffd70022; color: #ffd700; border: 1px solid #ffd70044; }
  .badge-health-bad  { background: #ff444422; color: #ff4444; border: 1px solid #ff444444; }
  .soc-inline {
    font-size: 1.3rem;
    font-weight: 700;
    font-family: 'Courier New', monospace;
    margin-left: auto;
    white-space: nowrap;
  }
  .soc-kwh-inline {
    font-size: 0.72rem;
    color: #7a8491;
    font-family: 'Courier New', monospace;
    white-space: nowrap;
  }

  /* ── SOC bar row (bar + time inline) ── */
  .soc-bar-row {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 4px;
  }
  .soc-bar-track {
    flex: 1;
    height: 4px;
    background: #30363d;
    border-radius: 2px;
    overflow: hidden;
    min-width: 0;
  }
  .soc-bar-fill {
    height: 100%;
    border-radius: 2px;
    transition: width 0.4s ease;
  }
  .time-est {
    font-size: 0.65rem;
    color: #7a8491;
    font-family: 'Courier New', monospace;
    white-space: nowrap;
    flex-shrink: 0;
  }
  .time-est strong { color: #c9d1d9; }
  .time-est .eta { color: #00bcd4; }

  /* ── Stats single line ── */
  .stats-line {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    font-size: 0.72rem;
    font-family: 'Courier New', monospace;
    color: #c9d1d9;
    margin-bottom: 6px;
    gap: 0;
  }
  .stats-line .sep { color: #555e6b; }

  /* ── Cells section ── */
  .cells-header {
    font-size: 0.62rem;
    color: #7a8491;
    margin-bottom: 3px;
    font-family: 'Courier New', monospace;
    display: flex;
    justify-content: space-between;
  }
  .cells-grid {
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    gap: 2px;
    margin-bottom: 4px;
    position: relative;
  }
  .cell-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    user-select: none;
  }
  .cell-mv-label {
    font-size: 0.5rem;
    color: #555e6b;
    font-family: 'Courier New', monospace;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.2s;
  }
  .cell-col:hover .cell-mv-label { color: #c9d1d9; }
  .cell-bar {
    width: 100%;
    min-height: 16px;
    border-radius: 2px 2px 0 0;
    transition: opacity 0.2s, filter 0.2s;
    position: relative;
  }
  .cell-col:hover .cell-bar { filter: brightness(1.3); }
  .cell-num {
    font-size: 0.5rem;
    color: #555e6b;
    font-family: 'Courier New', monospace;
    margin-top: 1px;
  }

  /* ── Cell tooltip ── */
  .cell-tooltip {
    position: absolute;
    z-index: 10;
    background: #21262d;
    border: 1px solid #30363d;
    border-radius: 6px;
    padding: 10px 12px;
    font-size: 0.75rem;
    min-width: 200px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.6);
    pointer-events: none;
  }
  .tooltip-title {
    font-weight: 700;
    font-family: 'Courier New', monospace;
    color: #c9d1d9;
    margin-bottom: 4px;
  }
  .tooltip-role {
    font-weight: 700;
    margin-bottom: 6px;
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }
  .tooltip-role.lowest { color: #ff4444; }
  .tooltip-role.highest { color: #4fc3f7; }
  .tooltip-row {
    color: #7a8491;
    line-height: 1.5;
  }
  .tooltip-row strong { color: #c9d1d9; }

  /* ── Module temps ── */
  .modules-row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3px;
    margin-top: 6px;
  }
  .module-cell {
    background: #0d1117;
    border-radius: 3px;
    padding: 3px 4px;
    text-align: center;
  }
  .module-label {
    font-size: 0.58rem;
    color: #555e6b;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }
  .module-temp {
    font-size: 0.72rem;
    font-family: 'Courier New', monospace;
    color: #c9d1d9;
  }
  .module-delta {
    font-size: 0.58rem;
    color: #7a8491;
    font-family: 'Courier New', monospace;
  }

  /* ── Footer ── */
  .bat-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 4px;
    margin-top: 6px;
    padding-top: 4px;
    border-top: 1px solid #30363d;
    font-size: 0.6rem;
    color: #555e6b;
    font-family: 'Courier New', monospace;
  }

  /* ── Loading / Error ── */
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
  .error-msg {
    color: #ff4444;
    font-size: 0.85rem;
  }
  .retry-btn {
    background: #21262d;
    border: 1px solid #30363d;
    color: #c9d1d9;
    border-radius: 6px;
    padding: 6px 14px;
    cursor: pointer;
    font-size: 0.8rem;
    transition: background 0.15s;
  }
  .retry-btn:hover { background: #30363d; }
  .connecting-msg { color: #7a8491; font-size: 0.85rem; }
`;
