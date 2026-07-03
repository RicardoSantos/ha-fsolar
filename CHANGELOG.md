# Changelog

All notable changes to Felicity Battery Cards are documented here.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).
Versions follow [Semantic Versioning](https://semver.org/).

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
