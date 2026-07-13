# Felicity Battery Cards

Real-time Lovelace dashboard cards for **Felicity Solar** battery systems, powered by [mcp-fsolar](https://github.com/RicardoSantos/mcp-fsolar).

![Fleet card — charging](docs/images/fleet_blue.jpg)

![Fleet card — discharging](docs/images/fleet_discharging.jpg)

![History card](docs/images/fleet_daily.jpg)

## Cards

### ⚡ Felicity Fleet Card

Live fleet overview with per-battery panels showing:
- SOC, voltage, current, power — updated live via SSE
- 16-cell voltage bars with colour-coded health (green/blue/red/orange)
- Cell hover tooltips: LiFePO4 %, pack spread, module temp
- FULL IN / EMPTY IN time estimates
- Module temperature grid
- Charge/discharge/balance state badges

### 📊 Felicity History Card

24-hour and daily trend analysis:
- **RECENT**: Cell Δ (mV) line chart + Max Temp chart + cell deviation heatmap (16 cells × N batteries)
- **DAILY**: Pack voltage range (avg cell mV low→high per day) + Max Cell Δ bar chart
- **LIFETIME**: Cycle count, SOH, full charges, under-voltage events

## Requirements

- [mcp-fsolar](https://github.com/RicardoSantos/mcp-fsolar) **v1.0.42+** running and reachable from HA
- Home Assistant 2023.1+
