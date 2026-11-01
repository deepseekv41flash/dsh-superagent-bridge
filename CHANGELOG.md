# Changelog

## 0.1.1 — 2026-11-01

首个发布版本：把 dsh-superagent 的管理面板以**独立页面**暴露给 DSH NEXT 内嵌。

- `GET /superagent-bridge/`：页面外壳（深色兜底主题、`?lang=zh|en`、主题消息、open-session 消息）。
- `GET /superagent-bridge/app.js`：预构建面板 ESM；默认 `dist/standalone.js`，
  可用 `DSH_SUPERAGENT_STANDALONE` 覆盖，未随包构建时回退到 checkout 的 `lib/standalone.js`。
- 独立页面把 `/orchestrator/api/*` 改写成 `../orchestrator/api/*`，经 DSH NEXT 的同源代理命中服务，
  不经过本插件转发，也不持有 token。
- 新增 `scripts/dev-proxy.mjs`：本地复刻一条同源代理，便于用普通浏览器验证面板。
- 零构建：`lib/` 是源码也是运行时产物；`dist/standalone.js` 为预构建前端。

验证环境：Windows 11，dsh-superagent（原型 fork）跑在 3082；普通 Chrome 经本地代理与 DSH NEXT 内嵌两条链路
均实测可用（六页签、详情页、搜索、术语表、启停/设置）。

已知限制：「部署」设置组只读；服务重启期间轮询会短暂报离线。
