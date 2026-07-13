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
- **Trend row**: delta trajectory + cycle count + balancing % (shown only when <90% of snapshots have balancing active — hides the permanent Felicity bit-6 flag)
- **Charging state badges**: CHG / DCHG / IDLE / BAL
- Live updates via **SSE** (push) or polling

![Fleet card — discharging](https://raw.githubusercontent.com/RicardoSantos/ha-fsolar/main/docs/images/fleet_discharging.jpg)

### 📊 Felicity Battery History

24-hour and daily trend analysis:

- **RECENT tab**: Cell Δ line chart + Max Temp chart + cell deviation heatmap
- **DAILY tab**: Pack voltage range bar chart (avg cell mV low→high per day) + Max Cell Δ bar chart; requires mcp-fsolar v1.0.42+
- **LIFETIME tab**: Cycle count, SOH, full charge count, under-voltage events

![History card](https://raw.githubusercontent.com/RicardoSantos/ha-fsolar/main/docs/images/fleet_daily.jpg)

---

## Requirements

- [mcp-fsolar](https://github.com/RicardoSantos/mcp-fsolar) **v1.0.42+** running and reachable from Home Assistant
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

The cards connect to [mcp-fsolar](https://github.com/RicardoSantos/mcp-fsolar) — a local Node.js server that reads your Felicity Solar batteries over the Felicity cloud API and exposes a REST API on your local network.

### Prerequisites

- **Node.js 18+** on a machine that stays on (NAS, Raspberry Pi, server, or any always-on Linux/Windows/macOS host)
- A **Felicity Solar cloud account** (the email and password you use in the Felicity app)

### Install and run

```bash
npm install -g fsolar-mcp
```

Start the server with your credentials. Replace `your@email.com` and `yourpassword` with your Felicity account credentials, and set `FELICITY_CORS_ORIGIN` to your Home Assistant origin so the cards can reach the API from the browser:

```bash
FELICITY_USER=your@email.com \
FELICITY_PASS=yourpassword \
FELICITY_CORS_ORIGIN=http://homeassistant.local:8123 \
fsolar-mcp
```

The server starts on port `3010` by default. Verify it's working:

```bash
curl http://localhost:3010/batteries
```

### Run persistently with systemd (Linux / NAS)

Create `/etc/systemd/system/fsolar-mcp.service`:

```ini
[Unit]
Description=fsolar-mcp battery REST API
After=network.target

[Service]
ExecStart=/usr/bin/npx fsolar-mcp
Restart=always
RestartSec=10
Environment=FELICITY_USER=your@email.com
Environment=FELICITY_PASS=yourpassword
Environment=FELICITY_CORS_ORIGIN=http://homeassistant.local:8123
Environment=SNAPSHOT_DIR=/var/lib/fsolar-mcp

[Install]
WantedBy=multi-user.target
```

```bash
sudo systemctl enable --now fsolar-mcp
```

### Run with Docker

```yaml
# docker-compose.yml
services:
  fsolar-mcp:
    image: node:20-alpine
    command: npx fsolar-mcp
    restart: unless-stopped
    ports:
      - "3010:3010"
    environment:
      FELICITY_USER: your@email.com
      FELICITY_PASS: yourpassword
      FELICITY_CORS_ORIGIN: http://homeassistant.local:8123
      SNAPSHOT_DIR: /data
    volumes:
      - fsolar_data:/data

volumes:
  fsolar_data:
```

```bash
docker compose up -d
```

### Optional: API key

To restrict access to the server, set `FELICITY_API_KEY`. The cards support it via the `api_key` config option:

```bash
FELICITY_API_KEY=your-secret-key fsolar-mcp
```

```yaml
type: custom:felicity-fleet-card
url: http://192.168.1.x:3010
api_key: your-secret-key
```

### Card URL

In your Lovelace card configuration, set `url` to the mcp-fsolar server address **as seen from the Home Assistant frontend** (i.e. from the browser, not from the HA server itself):

```yaml
url: http://192.168.1.x:3010   # IP of the machine running fsolar-mcp
```

If the machine running mcp-fsolar is the same as your HA host, use its LAN IP — not `localhost` (the browser would resolve `localhost` as the browser machine, not the server).

### Key environment variables

| Variable | Default | Description |
|---|---|---|
| `FELICITY_USER` | **required** | Felicity Solar account email |
| `FELICITY_PASS` | **required** | Felicity Solar account password |
| `FELICITY_PORT` | `3010` | HTTP server port |
| `FELICITY_CORS_ORIGIN` | localhost only | Set to your HA origin (`http://homeassistant.local:8123`) so the cards work from the browser |
| `FELICITY_API_KEY` | — | When set, all requests require `X-API-Key: <key>` |
| `SNAPSHOT_DIR` | system temp | Directory for persistent snapshot JSON files — set to a permanent path so history survives restarts |
| `FELICITY_DAILY_DAYS` | `90` | Daily snapshot retention (days) |

See the [full mcp-fsolar README](https://github.com/RicardoSantos/mcp-fsolar#readme) for all options.

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
