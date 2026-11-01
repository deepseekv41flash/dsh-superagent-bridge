// 本地验证代理：模拟 DSH NEXT 侧的同源反向代理，用来在普通 Chrome 里检查桥接面板。
// 用法：node scripts/dev-proxy.mjs，然后打开 http://127.0.0.1:48300/proxy/superagent-bridge/?lang=zh
import http from 'node:http'

const PREFIX = '/proxy'
const TARGET = { host: '127.0.0.1', port: 3082 }

const server = http.createServer((req, res) => {
  const path = req.url.startsWith(PREFIX) ? req.url.slice(PREFIX.length) : req.url
  const headers = { ...req.headers, host: `${TARGET.host}:${TARGET.port}` }
  for (const name of ['origin', 'referer', 'sec-fetch-site', 'sec-fetch-mode', 'sec-fetch-dest']) delete headers[name]
  const upstream = http.request({ ...TARGET, path, method: req.method, headers }, response => {
    res.writeHead(response.statusCode ?? 502, response.headers)
    response.pipe(res)
  })
  upstream.on('error', error => {
    if (!res.headersSent) res.writeHead(502, { 'content-type': 'application/json; charset=utf-8' })
    res.end(JSON.stringify({ error: String(error) }))
  })
  req.pipe(upstream)
})

server.listen(48300, '127.0.0.1', () => console.log('verify proxy on http://127.0.0.1:48300/proxy/'))
