# Third-party notices

`dsh-superagent-bridge` itself is MIT-licensed (see [LICENSE](LICENSE)).
The prebuilt `dist/standalone.js` bundles third-party code and a front-end build of the
dsh-superagent prototype. Their notices follow.

## dsh-superagent (prototype)

- Source: https://github.com/deepseek-ai/dsh-superagent-prototype
- License: MIT — Copyright (c) 2026 DeepSeek Harness Team
- What is bundled: the management panel React application (`src/client/*`) and the small
  standalone entry added by patch `2-standalone-embed.patch` (see
  https://github.com/deepseekv41flash/superagent-playground), bundled into `dist/standalone.js`.

## React, React DOM, scheduler

- Source: https://github.com/facebook/react
- License: MIT — Copyright (c) Meta Platforms, Inc. and affiliates.
- What is bundled: React 18.3.1, React DOM 18.3.1, scheduler 0.23.2, compiled with
  `process.env.NODE_ENV` fixed to `production`.

Each project's MIT license text is reproduced in the respective upstream repository. If you
redistribute `dist/standalone.js`, keep this file together with it.
