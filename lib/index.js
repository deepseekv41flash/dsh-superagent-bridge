/**
 * dsh-superagent-bridge —— 装在 dsh-superagent 服务侧（它自己的 DSH profile）的桥接插件。
 *
 * 目的：把 dsh-superagent 自己的管理面板（React 应用）以**独立页面**的形式暴露出来。
 * 它只用 HTTP 调 `/orchestrator/api/*`，不依赖 DSH 客户端的事件长连接，因此可以被
 * DSH NEXT 的同源代理 iframe 内嵌（直接内嵌 DSH 应用会卡在长连接上）。
 *
 * 路由（前缀 /superagent-bridge）：
 *   GET /        独立页面外壳（挂载 dist/standalone.js 导出的 mount()）
 *   GET /app.js  预构建的面板 ESM（React 已打包；默认取本包 dist/standalone.js）
 *
 * 面板的 API 调用不经过这里：页面把 `/orchestrator/api/*` 改写成 `../orchestrator/api/*`，
 * 向上走 DSH NEXT 侧那个同源代理（它本来就把整个服务反向代理进来）。
 */
import { existsSync, readFileSync, statSync } from 'node:fs'
import { homedir } from 'node:os'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

export const name = 'dsh-superagent-bridge'
export const inject = ['webServer']

const PREFIX = '/superagent-bridge'
const PACKAGE_ROOT = dirname(dirname(fileURLToPath(import.meta.url)))
/** 服务端 checkout：用于未随包携带预构建 ESM 时回退到 `lib/standalone.js`。 */
const REPO = process.env.DSH_SUPERAGENT_REPO ?? join(homedir(), 'src', 'dsh-superagent-prototype')
const STANDALONE = process.env.DSH_SUPERAGENT_STANDALONE
  ?? (existsSync(join(PACKAGE_ROOT, 'dist', 'standalone.js'))
    ? join(PACKAGE_ROOT, 'dist', 'standalone.js')
    : join(REPO, 'lib', 'standalone.js'))

/** 外层 DSH NEXT 页面通过代理注入的主题令牌；这些是同源 iframe 里唯一拿不到的东西。 */
const PAGE = `<!doctype html>
<html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Superagent</title>
<style>
:root{color-scheme:dark;
--dsw-alias-bg-base:#151517;--dsw-alias-bg-layer-1:#1c1c20;--dsw-alias-bg-layer-2:#232327;--dsw-alias-bg-layer-3:#2a2a2e;
--dsw-alias-bg-mask-1:rgba(0,0,0,.5);--dsw-alias-bg-module-platform:#1c1c20;
--dsw-alias-label-primary:#e6e6e6;--dsw-alias-label-secondary:#b4b4ba;--dsw-alias-label-tertiary:#9a9aa2;
--dsw-alias-label-caption:#8b8b93;--dsw-alias-label-dimmed:#6b6b73;--dsw-alias-label-primary-foreground:#ffffff;
--dsw-alias-border-l2:#2f2f34;--dsw-alias-border-l3:#3a3a40;--dsw-alias-border-l4:#45454c;
--dsw-alias-brand-primary:#4d9fff;--dsw-alias-link:#58a6ff;
--dsw-alias-state-success-primary:#3fb950;--dsw-alias-state-warn-primary:#d29922;--dsw-alias-state-error-primary:#f85149;
--dsw-alias-state-idle-primary:#8b949e;--dsw-alias-state-business-primary:#58a6ff;
--dsw-alias-interactive-bg-hover:#26262b;--dsw-alias-interactive-bg-active:#2d2d33;
--dsw-alias-button-primary-fill:#4d9fff;--dsw-alias-button-primary-hover:#5aa8ff;
--dsw-alias-button-ghost-active-fill:#2d2d33;--dsw-alias-button-ghost-active-border:#3a3a40;
--dsw-alias-toast-bg:#2d2d33;--dsw-alias-tooltip-bg:#2d2d33;--dsw-static-neutral-bluish-00:#ffffff;
--dsw-elevation-prominent:0 8px 30px rgba(0,0,0,.45);--dsw-elevation-soft:0 2px 8px rgba(0,0,0,.25);
--dsw-shadow-lv3:0 8px 30px rgba(0,0,0,.45);--dsw-mask-blur:blur(8px)}
html,body,#root{height:100%}
body{margin:0;background:var(--dsw-alias-bg-base);color:var(--dsw-alias-label-primary);
font:13px/1.5 "Segoe UI",system-ui,-apple-system,sans-serif;-webkit-font-smoothing:antialiased}
#fallback{display:flex;height:100%;align-items:center;justify-content:center;padding:24px;color:var(--dsw-alias-label-secondary);font-size:13px}
#fallback code{color:var(--dsw-alias-state-error-primary)}
</style></head><body>
<div id="root"><div id="fallback">正在加载 Superagent 面板…</div></div>
<script type="module">
const root = document.getElementById('root')
const lang = new URLSearchParams(location.search).get('lang') === 'en' ? 'en' : 'zh'
window.addEventListener('message', event => {
  const data = event.data
  if (!data || data.type !== 'superagent-bridge:theme' || !data.vars) return
  for (const [name, value] of Object.entries(data.vars)) if (value) document.documentElement.style.setProperty(name, value)
})
import('./app.js')
  .then(module => { root.textContent = ''; module.mount(root, { lang }) })
  .catch(error => {
    root.innerHTML = '<div id="fallback">面板加载失败：<code>' + String(error && error.message || error) + '</code></div>'
  })
if (window.parent && window.parent !== window) window.parent.postMessage({ type: 'superagent-bridge:request-theme' }, '*')
</script>
</body></html>`

let cached = { mtimeMs: -1, bytes: null }
/** Read the standalone bundle, re-reading only when the file changed. */
function standalone() {
  const stat = statSync(STANDALONE)
  if (!cached.bytes || cached.mtimeMs !== stat.mtimeMs) cached = { mtimeMs: stat.mtimeMs, bytes: readFileSync(STANDALONE) }
  return cached.bytes
}

export function apply(ctx) {
  ctx.effect(() => ctx.webServer.register({
    kind: 'prefix',
    path: PREFIX,
    handler: async (req, res) => {
      const rest = String(req.url ?? '').slice(PREFIX.length) || '/'
      const path = rest.split('?')[0] || '/'
      const send = (code, type, body) => {
        res.writeHead(code, { 'content-type': type, 'cache-control': 'no-store' })
        res.end(body)
      }
      if (path === '/' || path === '/index.html') return send(200, 'text/html; charset=utf-8', PAGE)
      if (path === '/app.js' || path === '/app.mjs') {
        try { return send(200, 'application/javascript; charset=utf-8', standalone()) }
        catch (error) {
          return send(404, 'application/json; charset=utf-8', JSON.stringify({
            error: 'standalone bundle missing', path: STANDALONE, detail: error instanceof Error ? error.message : String(error),
            hint: '把面板 ESM 放到本包的 dist/standalone.js，或用 DSH_SUPERAGENT_STANDALONE 指定路径',
          }))
        }
      }
      return send(404, 'application/json; charset=utf-8', JSON.stringify({ error: 'unknown route', url: req.url }))
    },
  }), 'dsh-superagent-bridge: panel')
}
