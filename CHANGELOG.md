# Changelog

All notable changes to Felicity Battery Cards are documented here.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).
Versions follow [Semantic Versioning](https://semver.org/).

---

## [1.0.7] — 2026-07-13

### Changed
- **Fleet card — balancing indicator**: trend row now shows `X% ⚡` only when the balancing flag was active in fewer than 90% of snapshots. Hides completely when always-on (Felicity batteries keep bit 6 permanently set — it is not meaningful as a trend signal)
- **History card — DAILY tab**: replaced the old pre-aggregated `DailySnapshot` format (socMin/Max, cellDeltaMax) with the new raw 2-entries-per-day format from mcp-fsolar v1.0.42
  - New chart 1: **Pack Voltage Range** — ApexCharts `rangeBar` showing avg cell mV at the day's lowest and highest pack voltage
  - New chart 2: **Max Cell Δ** — max cell delta across both daily entries
  - Tab count corrected: now shows unique days instead of raw entry count (was 2× the days)
- **History card — `_batteries` fix**: was incorrectly assigning the whole `/batteries` response object instead of `.batteries`

### Requires
- mcp-fsolar **v1.0.42+** (DailySnapshotStore stores 2 real min+max snapshots per day)

---

## [1.0.1] — 2026-06-28

### Fixed
- Renamed bundle to `ha-fsolar.js` to match repository name required by HACS auto-detection

---

## [1.0.0] — 2026-06-27

### Added
- **felicity-fleet-card** — live fleet overview with SOC, power, 16-cell voltage grid, module temperatures, trend row, and SSE/poll modes
- **felicity-history-card** — 24-hour and daily trend analysis with Recent, Daily, and Lifetime tabs
- HACS Dashboard category support (`hacs.json`)
- GitHub Actions: HACS validation, build, and release workflows
- esbuild TypeScript bundler configuration (`build.mjs`)
