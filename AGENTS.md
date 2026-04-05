# AGENTS.md

## Project

VitePress documentation site (Spanish, ASIR educational materials). Source lives in `newsite/`.

## Commands

```
npm run docs:dev    # dev server
npm run docs:build  # production build
npm run docs:preview # preview build output
```

## Architecture

- Config: `newsite/.vitepress/config.mts`
- Custom theme: `newsite/.vitepress/theme/index.js` — extends DefaultTheme with mermaid.js diagram rendering (dynamic import, dark-mode aware, re-renders on route/theme change)
- Doc sections: `programacion/`, `sql/`, `linux/`, `redes/` under `newsite/`
- Static assets: `newsite/img/`, `newsite/logo100.png`

## Quirks

- VitePress v2 alpha (`^2.0.0-alpha.16`) — check for breaking changes if upgrading
- Several sidebar entries have stale placeholder links to `/plugins/development/` — these are incomplete and should be wired to real pages when content is added
- No tests, lint, or typecheck setup — this is a pure docs site
