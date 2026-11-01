#!/bin/bash
# dsh-superagent-bridge ships no build step: lib/index.js is dependency-free ESM and
# dist/standalone.js is a prebuilt browser ESM (the Superagent panel React app).
# This script validates both and the npm payload.
set -euo pipefail
cd "$(cd "$(dirname "$0")/.." && pwd)"

node --check lib/index.js

node --input-type=module -e "
const m = await import('./lib/index.js')
if (m.name !== 'dsh-superagent-bridge') throw new Error('unexpected name export: ' + m.name)
if (!Array.isArray(m.inject) || !m.inject.includes('webServer')) throw new Error('inject must declare webServer')
if (typeof m.apply !== 'function') throw new Error('apply export missing')
console.log('dsh-superagent-bridge: lib/index.js OK — name=' + m.name)
"

node --input-type=module -e "
import { statSync, readFileSync } from 'node:fs'
const stat = statSync('dist/standalone.js')
if (stat.size < 100_000) throw new Error('dist/standalone.js looks truncated: ' + stat.size + ' bytes')
const source = readFileSync('dist/standalone.js', 'utf8')
if (!source.includes('mount') || !source.includes('/orchestrator/api/')) throw new Error('dist/standalone.js is not the expected panel bundle')
console.log('dsh-superagent-bridge: dist/standalone.js OK — ' + stat.size + ' bytes')
"

npm pack --dry-run >/dev/null
echo 'dsh-superagent-bridge: npm package payload OK'
