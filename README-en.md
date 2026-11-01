# dsh-superagent-bridge

[English](README-en.md) · [简体中文](README.md)

[![npm](https://img.shields.io/npm/v/dsh-superagent-bridge.svg)](https://www.npmjs.com/package/dsh-superagent-bridge)
[![license](https://img.shields.io/npm/l/dsh-superagent-bridge.svg)](./LICENSE)

A DeepSeek Harness (DSH) plugin for the **dsh-superagent service side**: it exposes Superagent's own management panel as a **standalone page over plain HTTP**, so [dsh-superagent-panel](https://github.com/deepseekv41flash/dsh-superagent-panel) can embed it in DSH NEXT through a same-origin proxy iframe.

## Why it exists

[Embedding dsh-superagent directly in DSH NEXT](https://github.com/deepseekv41flash/superagent-playground) hits two walls:

1. The DSH NEXT page runs on `dsh-app://app`, and Chromium **silently refuses** to frame `http://127.0.0.1:3082` (no load/error event);
2. With a same-origin reverse proxy the page loads, but the **DSH client event connection** cannot attach under the proxied origin and the UI keeps saying "not responding / reconnecting" — the proxy is not at fault; the client connection layer is bound to the `dsh-app://app` page.

So this plugin turns the problem around: the service itself serves a page that needs **no DSH event connection**. It is simply a standalone build of the original panel's React app — every byte of data comes from `/orchestrator/api/*` over plain HTTP polling, so any browser that can reach port 3082 can open it.

```text
GET  /superagent-bridge/         page shell (mounts app.js, injects theme, handles open-session)
GET  /superagent-bridge/app.js   panel ESM (React bundled), defaults to this package's dist/standalone.js
```

The page rewrites `/orchestrator/api/*` to `../orchestrator/api/*`, so through the DSH NEXT same-origin proxy the calls land on `<proxy>/orchestrator/api/*` and the proxy forwards them to 3082. This plugin does not forward API calls and never holds the token.

## Prerequisites

- dsh-superagent set up from the prototype, service running under profile `superagent` (or your own name) on port 3082.
- [dsh-superagent-panel](https://github.com/deepseekv41flash/dsh-superagent-panel) installed in DSH NEXT (it owns the sidebar entry and the same-origin proxy).

## Install

Install into the **profile that runs the service**, then restart the service (not DSH NEXT):

```bash
dsh plugin --profile superagent add dsh-superagent-bridge
# add "dsh-superagent-bridge" to that profile's dsh.profile.bundles, then:
node scripts/dsh-superagent.mjs restart --profile superagent
```

Check: `curl http://127.0.0.1:3082/superagent-bridge/` returns HTML and
`curl http://127.0.0.1:3082/superagent-bridge/app.js` returns ESM.

## Where dist/standalone.js comes from

It is built from `src/client/standalone.tsx` in a fork of
[dsh-superagent-prototype](https://github.com/deepseek-ai/dsh-superagent-prototype) (tsdown, `format=esm`,
`platform=browser`, React bundled, `process.env.NODE_ENV` fixed to `production`). The exact build recipe and
required patches are in [superagent-playground](https://github.com/deepseekv41flash/superagent-playground),
patch `2-standalone-embed.patch`:

```bash
# inside the fork checkout
npx tsdown              # writes lib/standalone.js (~546 KB)
cp lib/standalone.js <this repo>/dist/standalone.js
```

The npm package already ships `dist/standalone.js`. To point somewhere else, set
`DSH_SUPERAGENT_STANDALONE=/path/to/standalone.js`.

## Page behaviour

- **Dark fallback theme**: the standalone document cannot see the host's CSS variables; when the outer panel posts
  `superagent-bridge:theme` the page applies the `--dsw-alias-*` values, otherwise it keeps a built-in dark palette.
- **Open main Session**: buttons post `superagent-bridge:open-session` to the parent window; the outer panel calls
  `uiWorkspace.openSession`, so navigation stays inside DSH NEXT.
- **Query parameter**: `?lang=zh|en` picks the built-in dictionary (default `zh`).

## Layout

```text
dsh-superagent-bridge/
├── package.json              # dsh.bundle.patch
├── cordis.patch.yml          # bundle layer: insert id=dsh-superagent-bridge
├── lib/index.js              # /superagent-bridge/ and /superagent-bridge/app.js
├── dist/standalone.js        # prebuilt panel ESM (React bundled)
├── scripts/check.sh          # build-free validation: syntax, exports, dist, npm payload
└── scripts/dev-proxy.mjs     # dev helper: a local copy of the same-origin proxy for a plain browser
```

## Verified (2026-11-01, Windows 11)

| Item | Result |
|---|---|
| `GET /superagent-bridge/` | 200, HTML shell |
| `GET /superagent-bridge/app.js` | 200, ESM (`export { mount, translator }`) |
| Plain Chrome + local proxy | Six tabs, detail pages, search, glossary all work; no console errors |
| Embedded in DSH NEXT | Loads through the `dsh-superagent-panel` proxy and matches the host theme |
| API paths | Page requests land on `<proxy>/orchestrator/api/*` with 200; start/stop, settings and pause/resume work |

## Limitations

- The "Deployment" settings group is read-only: it depends on the DSH Plugin Manager config-form service, unavailable in a standalone page.
- The panel polls `/orchestrator/api/state` every 5 s (original panel behaviour) and briefly shows an offline error while the service restarts.

## License

MIT. `dist/standalone.js` contains:
- the dsh-superagent prototype front end (MIT, Copyright (c) 2026 DeepSeek Harness Team);
- React / React DOM / scheduler (MIT, Meta Platforms, Inc.).

See [THIRD-PARTY-NOTICES.md](THIRD-PARTY-NOTICES.md).
