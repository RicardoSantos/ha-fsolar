# Felicity Battery Cards for Home Assistant

[![HACS](https://img.shields.io/badge/HACS-Custom-41BDF5.svg)](https://hacs.xyz)
[![Release](https://img.shields.io/github/v/release/RicardoSantos/ha-fsolar)](https://github.com/RicardoSantos/ha-fsolar/releases)

Real-time Lovelace dashboard cards for **Felicity Solar** battery systems, powered by [mcp-fsolar](https://github.com/RicardoSantos/mcp-fsolar).

![Fleet card — charging](https://raw.githubusercontent.com/RicardoSantos/ha-fsolar/main/docs/images/fleet_blue.jpg)

---

## Cards

### ⚡ Felicity Fleet Card

Live fleet overview showing all your batteries at a glance:

- **Live SOC** with progress bar and colour-coded state
- **FULL IN / EMPTY IN** time estimates based on current power
- **16-cell voltage grid** with colour coding:
  - 🟢 Green: within ±10 mV of average
  - 🔵 Blue: highest cell in pack (sets charge ceiling)
  - 🔴 Red: lowest cell in pack (limits capacity)
  - 🟠 Orange: health outlier
- **Cell tooltip**: LiFePO₄ %, pack spread, module temp, delta vs average
- **Module temperature** grid (M1–M4)
- **Stats row**: Power, Current, Voltage, Temp, SOH, Cell Δ
- **Trend row**: delta trajectory + cycle count + balancing indicator
- **Charging state badges**: CHG / DCHG / IDLE / BAL
- Live updates via **SSE** (push) or polling

![Fleet card — discharging](https://raw.githubusercontent.com/RicardoSantos/ha-fsolar/main/docs/images/fleet_discharging.jpg)

### 📊 Felicity Battery History

24-hour and daily trend analysis:

- **RECENT tab**: Cell Δ line chart + Max Temp chart + cell deviation heatmap
- **DAILY tab**: Max cell delta and temperature charts per day
- **LIFETIME tab**: Cycle count, SOH, full charge count, under-voltage events

![History card](https://raw.githubusercontent.com/RicardoSantos/ha-fsolar/main/docs/images/fleet_daily.jpg)

---

## Requirements

- [mcp-fsolar](https://github.com/RicardoSantos/mcp-fsolar) **v1.0.37+** running and reachable from Home Assistant
- Home Assistant **2023.1+**
- HACS **1.6+**

---

## Installation

### Via HACS (recommended)

1. Open HACS → Dashboard
2. Click the ⋮ menu → **Custom repositories**
3. Add `https://github.com/RicardoSantos/ha-fsolar` with category **Dashboard**
4. Find **Felicity Battery Cards** and install
5. Clear browser cache and reload

### Manual

1. Download `ha-fsolar.js` from the [latest release](https://github.com/RicardoSantos/ha-fsolar/releases/latest)
2. Copy to `config/www/ha-fsolar.js`
3. Add to Lovelace resources:
   ```yaml
   resources:
     - url: /local/ha-fsolar.js
       type: module
   ```

---

## Configuration

### Fleet Card

```yaml
type: custom:felicity-fleet-card
url: http://192.168.1.100:3010   # mcp-fsolar base URL
api_key: your-secret-key          # optional
mode: sse                         # sse (default) or poll
poll_interval: 30                 # seconds, only used when mode: poll
title: "⚡ FELICITY PACK"         # optional header override
show_trend: true                  # show trend row (default: true)
show_module_temps: true           # show module temperature grid (default: true)
```

### History Card

```yaml
type: custom:felicity-history-card
url: http://192.168.1.100:3010
api_key: your-secret-key          # optional
default_tab: recent               # recent | daily | lifetime
title: "📊 BATTERY HISTORY"
```

---

## mcp-fsolar setup

The cards connect to [mcp-fsolar](https://github.com/RicardoSantos/mcp-fsolar) — a local Node.js server that reads your Felicity Solar batteries over WiFi and exposes a REST API.

Quick start:
```bash
npx fsolar-mcp
```

Or run persistently:
```bash
npm install -g fsolar-mcp
FELICITY_HOST=192.168.1.x FORECAST_MODE=http fsolar-mcp
```

See the [mcp-fsolar README](https://github.com/RicardoSantos/mcp-fsolar#readme) for full setup.

---

## LiFePO₄ cell tooltip

The cell tooltip shows **LiFePO₄ charge %** calculated from the cell's voltage using the characteristic flat discharge curve:

| Cell mV | Charge % |
|---------|----------|
| 3000    | 0%       |
| 3280    | 40%      |
| 3300    | 60%      |
| 3320    | 80%      |
| 3400    | 95%      |
| 3450    | 99%      |

---

## License

MIT © Ricardo Santos
