# dsh-superagent-bridge

[English](README-en.md) · [简体中文](README.md)

[![npm](https://img.shields.io/npm/v/dsh-superagent-bridge.svg)](https://www.npmjs.com/package/dsh-superagent-bridge)
[![license](https://img.shields.io/npm/l/dsh-superagent-bridge.svg)](./LICENSE)

一个 DSH（DeepSeek Harness）插件，装在 **dsh-superagent 服务那一侧**：把 Superagent 自己的管理面板作为**独立页面**用普通 HTTP 暴露出来，供 [dsh-superagent-panel](https://github.com/deepseekv41flash/dsh-superagent-panel) 在 DSH NEXT 里通过同源代理 iframe 内嵌。

## 为什么需要它

[DSH NEXT 直接内嵌 dsh-superagent](https://github.com/deepseekv41flash/superagent-playground) 会撞两堵墙：

1. DSH NEXT 页面在 `dsh-app://app` 下，Chromium **静默拒绝**嵌入 `http://127.0.0.1:3082`（没有 load/error 事件）；
2. 换成同源反向代理后，页面能加载，但 **DSH 客户端的事件长连接**在该代理源下建立不起来，界面一直显示
   「没有响应 / 重新连接中」——这不是代理写错了，而是客户端连接层绑定在 `dsh-app://app` 这套页面上。

所以本插件反过来：让服务自己提供一个**不依赖 DSH 长连接**的页面。它只是原面板 React 应用的独立构建产物——
所有数据都走 `/orchestrator/api/*` 的普通 HTTP 轮询，任何一个能访问 3082 的浏览器都能打开它。

```text
GET  /superagent-bridge/         页面外壳（挂载 app.js，注入主题、处理 open-session）
GET  /superagent-bridge/app.js   面板 ESM（React 已打包），默认取本包 dist/standalone.js
```

页面把 `/orchestrator/api/*` 改写成 `../orchestrator/api/*`，因此经 DSH NEXT 的同源代理时，
请求落在 `<proxy>/orchestrator/api/*` 上，由代理转给 3082——本插件不转发 API，也不持有 token。

## 前置

- dsh-superagent 已按原型搭好，服务在 profile `superagent`（或你自己的名字）里运行，端口 3082。
- DSH NEXT 侧装有 [dsh-superagent-panel](https://github.com/deepseekv41flash/dsh-superagent-panel)（负责同源代理与入口）。

## 安装

在**跑服务那个 profile** 里安装，然后重启 dsh-superagent 服务（不是 DSH NEXT）：

```bash
dsh plugin --profile superagent add dsh-superagent-bridge
# 并把 "dsh-superagent-bridge" 加进该 profile 的 dsh.profile.bundles，重启服务：
node scripts/dsh-superagent.mjs restart --profile superagent
```

验证：`curl http://127.0.0.1:3082/superagent-bridge/` 返回 HTML，
`curl http://127.0.0.1:3082/superagent-bridge/app.js` 返回 ESM。

## dist/standalone.js 从哪来

它由 [dsh-superagent-prototype](https://github.com/deepseek-ai/dsh-superagent-prototype) fork 里的
`src/client/standalone.tsx` 打包而来（tsdown，`format=esm`、`platform=browser`、React 打进包、
`process.env.NODE_ENV` 固化为 `production`）。构建步骤与所需补丁见
[superagent-playground](https://github.com/deepseekv41flash/superagent-playground) 的补丁 `2-standalone-embed.patch`：

```bash
# 在 fork checkout 里
npx tsdown              # 产出 lib/standalone.js（约 546 KB）
cp lib/standalone.js <本仓库>/dist/standalone.js
```

不想自己构建也可以：npm 包里已经带好 `dist/standalone.js`。要换路径时设环境变量
`DSH_SUPERAGENT_STANDALONE=/path/to/standalone.js`。

## 页面行为

- **深色兜底主题**：独立文档拿不到宿主 CSS 变量；外层发来 `superagent-bridge:theme` 消息时逐项写入
  `--dsw-alias-*`，没发来时用内置深色值，不会白屏。
- **打开主 Session**：页面里的按钮发 `superagent-bridge:open-session` 给父窗口，由外层面板调用
  `uiWorkspace.openSession`，不会跳出 DSH NEXT。
- **查询参数**：`?lang=zh|en` 选择内置字典（默认 `zh`）。

## 文件结构

```text
dsh-superagent-bridge/
├── package.json              # dsh.bundle.patch
├── cordis.patch.yml          # bundle 层：insert id=dsh-superagent-bridge
├── lib/index.js              # /superagent-bridge/ 与 /superagent-bridge/app.js
├── dist/standalone.js        # 预构建的面板 ESM（React 已打包）
├── scripts/check.sh          # 零构建校验：语法 + 导出 + dist + npm 载荷
└── scripts/dev-proxy.mjs     # 开发辅助：本地复刻一条同源代理，用普通浏览器检查面板
```

## 已验证（2026-11-01，Windows 11）

| 项 | 结果 |
|---|---|
| `GET /superagent-bridge/` | 200，HTML 外壳 |
| `GET /superagent-bridge/app.js` | 200，ESM（`export { mount, translator }`） |
| 普通 Chrome + 本地代理 | 六个页签、详情页、搜索、术语表全部可用；控制台无 error |
| DSH NEXT 内嵌 | 经 `dsh-superagent-panel` 的同源代理加载，主题注入后与宿主一致 |
| API 路径 | 页面请求落在 `<proxy>/orchestrator/api/*`，200；启停/设置/暂停恢复等写操作可用 |

## 限制

- 「部署」设置组只读：它依赖 DSH Plugin Manager 的 config form 服务，独立页面不可用。
- 面板每 5 秒轮询 `/orchestrator/api/state`（原面板行为），服务重启期间会短暂显示离线错误。

## 许可

MIT。`dist/standalone.js` 包含：
- dsh-superagent 原型前端（MIT，Copyright (c) 2026 DeepSeek Harness Team）；
- React / React DOM / scheduler（MIT，Meta Platforms, Inc.）。

完整声明见 [THIRD-PARTY-NOTICES.md](THIRD-PARTY-NOTICES.md)。
