# Contributing to Felicity Battery Cards

## Prerequisites

- Node 20+
- A running [mcp-fsolar](https://github.com/RicardoSantos/mcp-fsolar) instance reachable from your machine
- Home Assistant instance (for visual testing)

## Development setup

```bash
git clone https://github.com/RicardoSantos/ha-fsolar
cd ha-fsolar
npm ci
node build.mjs          # dev build with source maps → ha-fsolar.js
```

Point Home Assistant at your local build by adding to Lovelace resources:

```yaml
resources:
  - url: /local/ha-fsolar.js
    type: module
```

Copy `ha-fsolar.js` into `config/www/` after each build, or symlink the file there for a faster loop.

For continuous rebuilds while you work:

```bash
node build.mjs --watch
```

## Code conventions

- **TypeScript strict mode** — no `any`, no implicit returns
- **LitElement web components** — one class per card, one class per card editor
- **esbuild** bundles everything into a single `ha-fsolar.js` at the repo root
- No external runtime dependencies — the bundle must be self-contained

## Adding a new card

1. Create `src/my-card.ts` extending `LitElement`
2. Create `src/my-card-editor.ts` with the visual config editor
3. Register both in `src/index.ts`:
   ```ts
   customElements.define('my-card', MyCard);
   customElements.define('my-card-editor', MyCardEditor);
   ```
4. Append to `window.customCards` in `src/index.ts`:
   ```ts
   window.customCards.push({
     type: 'my-card',
     name: 'My Card',
     description: 'Short description shown in the card picker',
   });
   ```
5. Add configuration schema documentation to `README.md`

## Commit messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add per-cell voltage tooltips
fix: SSE reconnect after network drop
docs: update configuration examples
chore: bump esbuild to 0.25
```

Subject line: lowercase, no trailing period, imperative mood.

## Pull request checklist

- `node build.mjs --minify` succeeds with no errors
- `ha-fsolar.js` in the repo root is updated (commit it)
- Screenshots or screen recordings attached if UI changed
- `hacs.json` left untouched (it must contain only `name`)
- All commit messages follow Conventional Commits

## Release process

Releases are fully automated via GitHub Actions:

1. Ensure `ha-fsolar.js` in main is built from the latest source
2. Tag a release: `git tag v1.2.3 && git push origin v1.2.3`
3. The `release.yml` workflow builds a minified bundle and attaches it to the GitHub release

HACS users receive the update automatically on the next HACS refresh.
