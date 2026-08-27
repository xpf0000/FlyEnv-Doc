# FlyEnv Demos Catalog Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish a localized FlyEnv Demos catalog that makes all 80 approved YouTube demonstrations discoverable by task, supports privacy-safe filtering and lazy playback, and routes visitors to verified FlyEnv documentation.

**Architecture:** Keep the catalog as curated, checked-in public TypeScript data in `docs/data/demos.ts`; it must never import, read, or expose the private Analytics report. Render the three locale routes with one SSR-compatible Vue catalog component, where the component controls filters, URL state, tracking, thumbnails, and an on-demand player dialog. Use existing VitePress navigation, `trackEvent`, and source-contract test conventions, then confirm runtime behavior in Playwright.

**Tech Stack:** VitePress 1, Vue 3 Composition API, TypeScript, Tailwind CSS/component-scoped CSS, Node built-in test runner, Playwright, Yarn.

---

## File Structure

| Path | Responsibility |
| --- | --- |
| `docs/data/demos.ts` | Public catalog types, six category definitions, 80 curated records, verified Bilibili mappings, and locale-safe access helpers. |
| `docs/components/AppDemos/index.vue` | SSR-rendered catalog UI, category/search state, URL synchronization, thumbnail fallback, dialog lifecycle, internal-link and platform tracking. |
| `docs/demos.md` | English catalog route, localized SEO metadata, canonical/alternate links, and component composition. |
| `docs/zh/demos.md` | Simplified Chinese catalog route and localized metadata. |
| `docs/id/demos.md` | Indonesian catalog route and localized metadata. |
| `docs/.vitepress/config.mts` | Adds the localized first-level navigation entries. |
| `docs/utils/analytics.ts` | Recognizes Indonesian paths and classifies Demos pages. |
| `docs/.vitepress/theme/index.js` | Emits `demos_nav_click` for a Demos navigation link while preserving existing delegated `video_click` tracking. |
| `tests/demos-catalog.test.mjs` | Static catalog completeness, schema, route, component, analytics, and accessibility contracts. |
| `tests/analytics-tracking.test.mjs` | Extends the shared analytics-context contract for Demos page type and Indonesian locale. |

## Catalog Ledger

The `youtubeId` values below are the complete public catalog source of truth. The implementation must create one `Demo` object for each line, with that exact ID and category; a record may be rendered in Featured and All Demos but may appear only once in `demos` data. Use a slug derived from the task, not the platform ID, for `id`. `publishedAt` is the ISO publication date from the report, retained as internal ordering data only; the v1 UI does not show it or any private performance metric.

### `getting-started`

| YouTube ID | English source title | Required public link / guide relationship |
| --- | --- | --- |
| `TA2NA0JeGdo` | FlyEnv Feature Overview \| Native Local Development Without Docker | `/guide/what-is-flyenv` |
| `FHJ8nrQ2aj4` | PhpWebStudy. All-in-one Web Server / Database Server / PHP environment GUI Application | no verified guide required |
| `vjZPrYqJavA` | New in FlyEnv 4.18.0: Neo4j, pgAdmin 4, DbGate and Redis Commander | `/guide/what-is-flyenv` |
| `f9emR2HFk9M` | PhpWebStudy-PHP and Web Development environment management tools for Mac | no verified guide required |
| `QbuUkztmwLs` | FlyPHPServer Demo | `/flyphpserver` |
| `rufRCVIeqj8` | Install Apache+PHP+Mysql+PhpMyAdmin on Windows11 using PhpWebStudy | no verified guide required |
| `TwpnOXZ8cPo` | Use PhpWebStudy to quickly build an Apache + PHP + Mysql + PhpMyAdmin environment in 3 minutes | no verified guide required |

### `projects`

| YouTube ID | English source title | Required public link / guide relationship |
| --- | --- | --- |
| `5NqSag8c4YY` | Deploy PHP Apps Without Docker in FlyEnv: Laravel Octane, RoadRunner, Swoole & Workerman | `/guide/deploy-php-projects-without-docker` |
| `ZhvJ8a9Fp_4` | Run ERPNext Locally with FlyEnv | no verified guide required |
| `hKIx2LdNz0Y` | Self-Host Gitea Locally with FlyEnv - MySQL, HTTPS and One-Click Startup | `/guide/host` |
| `Sd03V_wxh1k` | Run OpenMRS Locally with Tomcat: Native Local Setup with FlyEnv | no verified guide required |
| `s6PHRiioyuc` | Run Nextcloud Locally with FlyEnv — Full PHP Stack on One Switch | `/guide/run-laravel-use-flyenv` |

### `runtimes`

| YouTube ID | English source title | Required public link / guide relationship |
| --- | --- | --- |
| `47I5nZK3rjo` | Zero Config Dev Environment! FlyEnv Installs PHP/Python/Go/NodeJS/Java in Seconds on Windows 11 | `/guide/getting-started` |
| `OYP1IOoJOtI` | Run Multiple PHP Versions Simultaneously: The Ultimate PHP Manager for Modern Devs \| FlyEnv | `/guide/manage-multiple-node-php-versions` |
| `lu68kw8_3dY` | Bun Local Runtime Setup with FlyEnv: Manage Versions, Projects, and Local Services | `/guide/project-level-runtime-environment` |
| `SHK12kXApTM` | Ditch Docker for Local Dev: Run Node, Python & Go as Native Services \| FlyEnv Guide | `/guide/deploy-nodejs-python-go-without-docker` |
| `Pt_I3NDciZw` | FlyEnv Node.js: Per-Project Versions, Services & Nginx Proxy | `/guide/project-level-runtime-environment` |
| `dhy0nJYsfQQ` | Python Version Management on Windows, Simplified: No More Environment Variable Mess! \| FlyEnv | `/guide/manage-multiple-node-php-versions` |
| `Cpq6i9T6IK4` | Auto-Switch Environments per Project? FlyEnv Magic for NodeJS/PHP/Go/Python/Java/Ruby (No Setup!) | `/guide/project-level-runtime-environment` |

### `databases-services`

| YouTube ID | English source title | Required public link / guide relationship |
| --- | --- | --- |
| `5gW3WHh8_Jw` | PostgreSQL Local Setup with FlyEnv and pgAdmin \| Start, Connect, Manage | `/guide/database-user-password` |
| `t7nKL45FdVk` | Run Apache Natively on Windows/macOS/Linux: No Docker, Full Speed! \| FlyEnv | `/guide/parse-html-as-php-multi-servers` |
| `NuaYnRiD3AY` | Caddy Local Setup on Windows - Caddyfile, PHP-FPM and MySQL with FlyEnv | `/guide/parse-html-as-php-multi-servers` |
| `MJ9OQBOBXMg` | Install and Run MinIO Locally with FlyEnv (No Docker) — FlyEnv Native Setup Demo | no verified guide required |
| `0qfnkr5V7eE` | Run Numa Locally with FlyEnv \| Install, Enable & Monitor | no verified guide required |
| `E_jetPnVxBo` | Temporal Local Development in One Click — FlyEnv Native Service | no verified guide required |
| `lCEEocXdt_M` | RustFS Local Development in One Click — FlyEnv Native Service | no verified guide required |
| `3ePJYddWYmQ` | Native Local ClickHouse in 2 Minutes (No Docker, No Config) - FlyEnv | no verified guide required |
| `idjLaMh2RMw` | Run Redis Locally and Manage Data in Redis Commander - Local Redis Setup with FlyEnv | no verified guide required |
| `uOf2cWk3AtU` | ZincSearch Local Setup in FlyEnv Without Docker \| Install Versions, Run Service & Open UI | no verified guide required |
| `vPD3lXo1vr0` | Meilisearch Local Setup in FlyEnv Without Docker \| Install, Run & Open Mini Dashboard | no verified guide required |
| `ahetMNLLS7s` | Qdrant Local Setup in FlyEnv \| Versions, Config, Logs, and Dashboard | no verified guide required |
| `B9Eo2Y-aXWQ` | Elasticsearch with FlyEnv — Native Local Setup Demo | no verified guide required |
| `ymbyrr5zGkI` | RabbitMQ Local Setup on Windows - Install, Start and Manage with FlyEnv | no verified guide required |
| `mvmbRi6KsgI` | FlyEnv MariaDB Module: Install, Switch Versions, Create Databases | `/guide/database-user-password` |
| `D4MkA25Ofd0` | FlyEnv + Mailpit: Local Email Testing & SMTP Capture Demo (No Docker) | `/guide/local-email-testing-mailpit` |
| `2sfoWGW9rm4` | PostgreSQL + pgAdmin 4 Local Database Stack in FlyEnv | `/guide/database-user-password` |
| `8ceC7QqY4UA` | Native Local Nacos for Service Discovery and Config In FlyEnv — No Docker | no verified guide required |
| `xsw8BQxii10` | Native Local etcd Setup Without Docker - Install, Start and Monitor with FlyEnv | `/guide/user-customizable-modules` |
| `80psOMuDK9I` | Temporal CLI with FlyEnv — Native Local Setup Demo | no verified guide required |
| `uWWHAqxhVyk` | Master Local MySQL: Native Performance, Root Password Reset & Database Management \| FlyEnv | `/guide/database-user-password` |
| `zfdNZFRt3k4` | FlyEnv [Nginx] Module: High-Performance Nginx Made Simple. Native Setup & One-Click Management | `/guide/parse-html-as-php-multi-servers` |
| `wPjgwVeA6lw` | MongoDB Local Setup with FlyEnv \| Compass Connection Demo | `/guide/database-user-password` |
| `3Uo22iqty9k` | Native Local Typesense in 2 Minutes (No Docker, No Config) - FlyEnv | no verified guide required |
| `pa0QFgpu17w` | Run Consul Locally Without Docker - FlyEnv Consul Module Demo | no verified guide required |
| `u9xjPN-VWT4` | FlyEnv [Redis] Module: High-Performance Native Redis for Developers. Instant Setup & Easy Management | no verified guide required |
| `mriHvqJmU1g` | MongoDB + DbGate on Windows - Local Multi-Version Setup with FlyEnv | `/guide/database-user-password` |
| `DByCl9MyYrg` | Run Neo4j Locally with Its Browser Admin Panel - Local Neo4j Setup with FlyEnv | no verified guide required |

### `ai-mcp`

| YouTube ID | English source title | Required public link / guide relationship |
| --- | --- | --- |
| `RmSl4jgmEyI` | CLIProxyAPI Local AI Gateway - Providers, OAuth & API Keys in FlyEnv | `/guide/ai-coding-workspace-mcp` |
| `frprHkD1_rQ` | FlyEnv AI CLI + MCP End-to-End Demo: From MySQL to a Live PHP CRUD Site | `/guide/ai-coding-workspace-mcp` |
| `L-W1JNqWPEw` | Need to Continue an OpenCode Task? See How To Resume an OpenCode Session In One Click | `/guide/flyenv-work-with-ai` |
| `Jg7zfJTOZCM` | Need to Continue a Claude Code Task? Pick Up Where You Left Off | `/guide/flyenv-work-with-ai` |
| `YnA1B3qmDJU` | Build a 100% Free Self-Hosted AI Workflow: n8n + Ollama (No Docker!) via FlyEnv | `/guide/build-local-ai-workflow-by-n8n` |
| `uFVZHMGORGM` | See How To Resume an Existing Kimi Session! Pick Up Where You Left Off | `/guide/flyenv-work-with-ai` |
| `yPk9HQJRvb8` | Build a Offline Local AI Agent in 3 Min with FlyEnv (No Code!) | `/guide/build-local-offline-ai-agent` |
| `j7_B-VzIyEU` | Build a 100% Local AI Agent: OpenClaw + Ollama Setup via FlyEnv In 5 Minutes | `/guide/openclaw` |
| `KChv2gvgKjw` | Codex Session Interrupted? Pick Up Where You Left Off | `/guide/flyenv-work-with-ai` |

### `developer-tools`

| YouTube ID | English source title | Required public link / guide relationship |
| --- | --- | --- |
| `sdbIbnIYoYY` | FlyEnv System Env Tool for macOS, Linux & Windows. Manage Environment Variables Like a Pro | `/guide/setup-system-path-environment` |
| `X8W1FcwWc00` | FlyEnv [SSL Certificate Generator] Tool: Local SSL Made Easy. Wildcard Certificates Instantly | `/guide/host` |
| `qpgUJZmS6Ig` | FlyEnv [Base64 Encoder & Decoder] Tool: Real-Time Base64 Encoder & Decoder | no verified guide required |
| `yYSwnYC7V9M` | FlyEnv Code Playground And Code Library. Execute code snippets in multiple languages instantly | `/guide/code-playground-and-code-library` |
| `iPGTefjNWI8` | FlyEnv [RSA Key Pair Generator] Tool: Secure 512-4096 bit RSA Key Pair in Seconds | no verified guide required |
| `LFazRyd_G3o` | FlyEnv [HTML Entity Encoder/Decoder] Tool: Real-Time HTML Entity Encoder & Decoder, Prevent XSS | no verified guide required |
| `NSQNBS7zHqU` | FlyEnv [Token Generator] Tool: Instant Secure Token Generator: Custom Random Strings (1-512 bits) | no verified guide required |
| `NiJW09NCa_0` | FlyEnv [Encrypt/Decrypt String] Tool: Real-Time String Encryption Tool: AES, TripleDES, Rabbit & RC4 | no verified guide required |
| `2QxmRRVR15Q` | FlyEnv [Chmod Calculator] Tool: Visual Chmod Calculator. Master Linux File Permissions Instantly | no verified guide required |
| `BYu3sNxuRF0` | FlyEnv [Timestamp Conversion] Tool: Ultimate Timestamp Converter: One-Click Date-Time Transformation | no verified guide required |
| `jZmnlraSHvs` | FlyEnv [QR Code Generator] Tool: Professional QR Code Generator. Custom Colors & High-Res Export | no verified guide required |
| `2KZK97EP8is` | FlyEnv [MIME Type] Tool: Instant MIME Type & File Extension Lookup: The Ultimate Developer Reference | no verified guide required |
| `cCXvWoJ4ayM` | FlyEnv New Screen Capture Tool (Even Hidden Windows). Capture Anything, Anywhere! | no verified guide required |
| `DiYIv_SoTDY` | Every HTTP Status Code Explained: The Ultimate Developer Cheat Sheet \| FlyEnv Tools | no verified guide required |
| `x36kdgUI16k` | FlyEnv [Hash String] Tool: All-in-One Hash Generator: MD5, SHA1, SHA3, RIPEMD160 & Multi-Encoding | no verified guide required |
| `oiVFGe4GhkY` | FlyEnv Regex Tool: Regex Made Easy, Interactive Cheat Sheet & Real-Time Tester \| FlyEnv Tools | no verified guide required |
| `Y17Tvrc9fsQ` | FlyEnv [Process Kill]: Advanced Process Killer. Search, Inspect, and Terminate Processes Like a Pro | no verified guide required |
| `4kyrX0-QPgM` | FlyEnv [Port Kill] Tool: Kill Port Conflicts Instantly: Find & Stop Apps Occupying Your Ports | no verified guide required |
| `DIX4lTgBP4c` | FlyEnv JSON Parse Tool: Convert JSON,JS, PHP Array,XML,YAML,Go Struct,Java,Kotlin to each other | no verified guide required |
| `Zb5YPO5BTaY` | FlyEnv [Base64 File Converter] Tool: Image to Base64 & Back: Instant File Converter for Developers | no verified guide required |
| `ViKMVkh3TL8` | Build Custom etcd Module in 3 Min(Step-by-Step Guide) \| FlyEnv Advanced Tutorial | `/guide/user-customizable-modules` |
| `dyT5GzuOrBc` | Why is your Website Slow? Deep Dive with URL Timing Analyzer \| FlyEnv Tools | no verified guide required |
| `67cwHqygWFM` | Instant File Metadata & Hash Checker: MD5, SHA-1, SHA-256 & Timestamps \| FlyEnv Tools | no verified guide required |
| `MqjFsqrpI0I` | FlyEnv’s New Batch Image Processor is Here. Resize, Compress & Watermark in Seconds | no verified guide required |

The six featured IDs are fixed for v1: `TA2NA0JeGdo`, `5gW3WHh8_Jw`, `NuaYnRiD3AY`, `ZhvJ8a9Fp_4`, `idjLaMh2RMw`, and `RmSl4jgmEyI`.

### Verified Chinese Bilibili Ledger

Only records in this table receive a `platforms.bilibili` URL. Each value was already explicitly published by an existing Chinese FlyEnv guide or module-listing; use `https://www.bilibili.com/video/<bvid>/`. All other Chinese cards must state that playback will open YouTube, rather than suggesting a Bilibili copy exists. Before adding a mapping, open its current guide context and confirm that its task title matches the YouTube record; do not infer a mapping from the software name alone.

| YouTube ID | Bilibili BVID | Existing source |
| --- | --- | --- |
| `TA2NA0JeGdo` | `BV1eCNR6FE2k` | `docs/zh/guide/what-is-flyenv.md` |
| `RmSl4jgmEyI` | `BV1biGG6nEYz` | `docs/zh/guide/what-is-flyenv.md` |
| `frprHkD1_rQ` | `BV1AyM761EpZ` | `docs/zh/guide/ai-coding-workspace-mcp.md` |
| `OYP1IOoJOtI` | `BV1r6Z7BwE8p` | `docs/zh/guide/what-is-flyenv.md` |
| `NuaYnRiD3AY` | `BV129uF6BExw` | `docs/zh/guide/what-is-flyenv.md` |
| `MJ9OQBOBXMg` | `BV1cd3b6mEc8` | `docs/zh/guide/what-is-flyenv.md` |
| `0qfnkr5V7eE` | `BV1SeGG6DEHS` | `docs/zh/guide/what-is-flyenv.md` |
| `E_jetPnVxBo` | `BV1TD3c67Eei` | `docs/zh/guide/what-is-flyenv.md` |
| `lCEEocXdt_M` | `BV1Zc386VE4o` | `docs/zh/guide/what-is-flyenv.md` |
| `lu68kw8_3dY` | `BV1GtGG6dE6y` | `docs/zh/guide/what-is-flyenv.md` |
| `3ePJYddWYmQ` | `BV1S43w6QEvS` | `docs/zh/guide/what-is-flyenv.md` |
| `SHK12kXApTM` | `BV1cFEp67E2v` | `docs/zh/guide/deploy-nodejs-python-go-without-docker.md` |
| `uOf2cWk3AtU` | `BV1Hu3463Ej7` | `docs/zh/guide/what-is-flyenv.md` |
| `vPD3lXo1vr0` | `BV1EV346BEqi` | `docs/zh/guide/what-is-flyenv.md` |
| `sdbIbnIYoYY` | `BV1i6oQYdE1g` | `docs/zh/guide/setup-system-path-environment.md` |
| `ahetMNLLS7s` | `BV16Q3P6VEPA` | `docs/zh/guide/what-is-flyenv.md` |
| `B9Eo2Y-aXWQ` | `BV1if3P6BEBR` | `docs/zh/guide/what-is-flyenv.md` |
| `YnA1B3qmDJU` | `BV1qGXFBfE7U` | `docs/zh/guide/build-local-ai-workflow-by-n8n.md` |
| `ymbyrr5zGkI` | `BV1XiMZ6GEdw` | `docs/zh/guide/what-is-flyenv.md` |
| `mvmbRi6KsgI` | `BV1NfEx6eE3V` | `docs/zh/guide/what-is-flyenv.md` |
| `D4MkA25Ofd0` | `BV1CxEz6YEgx` | `docs/zh/guide/what-is-flyenv.md` |
| `xsw8BQxii10` | `BV1eKGV6fEB5` | `docs/zh/guide/what-is-flyenv.md` |
| `80psOMuDK9I` | `BV1Xc3v6UEEW` | `docs/zh/guide/what-is-flyenv.md` |
| `uWWHAqxhVyk` | `BV1vuZ4B5EAg` | `docs/zh/guide/what-is-flyenv.md` |
| `zfdNZFRt3k4` | `BV1jKZ4BjEgk` | `docs/zh/guide/what-is-flyenv.md` |
| `Pt_I3NDciZw` | `BV1pzEs6tE2X` | `docs/zh/guide/what-is-flyenv.md` |
| `dhy0nJYsfQQ` | `BV1hvZxBBEJk` | `docs/zh/guide/what-is-flyenv.md` |
| `wPjgwVeA6lw` | `BV182E26AELB` | `docs/zh/guide/what-is-flyenv.md` |
| `3Uo22iqty9k` | `BV1AT346CEFc` | `docs/zh/guide/what-is-flyenv.md` |
| `j7_B-VzIyEU` | `BV1ciwMzUEGH` | `docs/zh/guide/openclaw.md` |
| `yYSwnYC7V9M` | `BV14Je6zhECW` | `docs/zh/guide/code-playground-and-code-library.md` |
| `u9xjPN-VWT4` | `BV1YaZxBzENJ` | `docs/zh/guide/what-is-flyenv.md` |
| `ViKMVkh3TL8` | `BV1XxjzzdE3e` | `docs/zh/guide/user-customizable-modules.md` |
| `Cpq6i9T6IK4` | `BV1Ez5EzzEk5` | `docs/zh/guide/project-level-runtime-environment.md` |

### Task 1: Curated Catalog Data and Completeness Contract

**Files:**
- Create: `docs/data/demos.ts`
- Create: `tests/demos-catalog.test.mjs`

- [ ] **Step 1: Write the failing catalog contract**

Create `tests/demos-catalog.test.mjs` with the full 80-ID fixture from the Catalog Ledger (use a `Set` of all ledger IDs), then add these assertions:

```js
test('the public demo catalog contains the complete approved YouTube set exactly once', () => {
  const source = read('docs/data/demos.ts')
  const ids = Array.from(source.matchAll(/youtubeId: '([A-Za-z0-9_-]{11})'/g), (match) => match[1])

  assert.equal(ids.length, 80)
  assert.equal(new Set(ids).size, 80)
  assert.deepEqual(new Set(ids), expectedYoutubeIds)
})

test('each demo has a valid category, localized copy, tags, and public YouTube playback', () => {
  const source = read('docs/data/demos.ts')
  for (const category of [
    'getting-started',
    'projects',
    'runtimes',
    'databases-services',
    'developer-tools',
    'ai-mcp'
  ]) assert.match(source, new RegExp(`category: '${category}'`))
  assert.equal((source.match(/featured: true/g) || []).length, 6)
  assert.match(source, /locales: \{ en: \{ title: .+summary: .+tags: \[/s)
  assert.match(source, /zh: \{ title: .+summary: .+tags: \[/s)
  assert.match(source, /id: \{ title: .+summary: .+tags: \[/s)
  assert.match(source, /youtube: 'https:\/\/www\.youtube\.com\/watch\?v='/)
})
```

- [ ] **Step 2: Run the catalog test to verify it fails**

Run: `node --test tests/demos-catalog.test.mjs`

Expected: FAIL with `ENOENT` for `docs/data/demos.ts`.

- [ ] **Step 3: Add complete public catalog data**

Create `docs/data/demos.ts` using this exact public model. Keep all ID/title/category rows in the ledger as literal records; do not read `reports/`, import JSON from the Analytics repository, or add private metrics such as views, retention, likes, watch duration, or average view duration.

```ts
export type DemoCategory =
  | 'getting-started'
  | 'projects'
  | 'runtimes'
  | 'databases-services'
  | 'developer-tools'
  | 'ai-mcp'

export type DemoLocale = 'en' | 'zh' | 'id'

export interface DemoCopy {
  title: string
  summary: string
  tags: string[]
}

export interface Demo {
  id: string
  youtubeId: string
  category: DemoCategory
  publishedAt: string
  featured: boolean
  locales: Record<DemoLocale, DemoCopy>
  platforms: { youtube: string; bilibili?: string }
  relatedGuides: string[]
  relatedModules: string[]
}

export const demoCategories: Record<DemoLocale, Record<DemoCategory, string>> = {
  en: {
    'getting-started': 'Getting started', projects: 'Projects', runtimes: 'Runtimes',
    'databases-services': 'Databases & services', 'developer-tools': 'Developer tools', 'ai-mcp': 'AI & MCP'
  },
  zh: {
    'getting-started': '开始使用', projects: '项目实践', runtimes: '运行时',
    'databases-services': '数据库与服务', 'developer-tools': '开发工具', 'ai-mcp': 'AI 与 MCP'
  },
  id: {
    'getting-started': 'Mulai cepat', projects: 'Proyek', runtimes: 'Runtime',
    'databases-services': 'Database & layanan', 'developer-tools': 'Alat developer', 'ai-mcp': 'AI & MCP'
  }
}
```

For every record, make `platforms.youtube` exactly `https://www.youtube.com/watch?v=<youtubeId>`. Give each locale a natural title, a one-sentence task-oriented summary, and one to three public stack/task tags. Use empty `relatedGuides` and `relatedModules` when the ledger has no verified relationship; never invent product modules or guide paths. Set `relatedModules: ['/flyphpserver']` only for `QbuUkztmwLs`; translate it to `/zh/flyphpserver` and `/id/flyphpserver` later in the component by prepending the active locale prefix to English relative product links. Mark exactly the six specified featured IDs with `featured: true`.

Add Bilibili URLs only for the Verified Chinese Bilibili Ledger. The Bilibili object does not require an iframe URL: it must be the public `https://www.bilibili.com/video/<bvid>/` page URL, because the player function constructs its own embedded URL only after a click.

- [ ] **Step 4: Add data access helpers and complete localization values**

Append these helpers after the complete `demos` array. The component must not need to branch over a partial locale object, and a bad locale must use English rather than crash SSR.

```ts
export function getDemoCopy(demo: Demo, locale: DemoLocale) {
  return demo.locales[locale] || demo.locales.en
}

export function getDemoPlatform(demo: Demo, locale: DemoLocale) {
  if (locale === 'zh' && demo.platforms.bilibili) return 'bilibili' as const
  return 'youtube' as const
}

export function getDemoEmbedUrl(demo: Demo, platform: 'youtube' | 'bilibili') {
  if (platform === 'bilibili' && demo.platforms.bilibili) {
    const bvid = demo.platforms.bilibili.split('/').filter(Boolean).at(-1)
    return `https://player.bilibili.com/player.html?bvid=${bvid}&page=1`
  }
  return `https://www.youtube-nocookie.com/embed/${demo.youtubeId}?rel=0`
}
```

Declare `export const demos: Demo[]` as a literal array before these helpers, with all 80 literal records in descending `publishedAt` order. There must be no comments, factories, generated imports, or omissions in place of records. Preserve the existing module-page links in `docs/components/AppModules/index.vue` and `docs/components/AppModules/zh.vue`; this catalog is an additional discovery path.

- [ ] **Step 5: Run the catalog data test to verify it passes**

Run: `node --test tests/demos-catalog.test.mjs`

Expected: PASS with the 80 unique IDs, six categories, six featured records, and three locale-copy sections detected.

- [ ] **Step 6: Commit catalog data and its contract**

```bash
git add docs/data/demos.ts tests/demos-catalog.test.mjs
git commit -m "feat: add curated demos catalog data"
```

### Task 2: SSR Catalog, Filters, Lazy Player, and Tracking Controls

**Files:**
- Create: `docs/components/AppDemos/index.vue`
- Modify: `tests/demos-catalog.test.mjs`

- [ ] **Step 1: Add failing component interaction contracts**

Append the following test after Task 1 tests. It makes the expected interactive and accessibility controls concrete without requiring a new test runner.

```js
test('the demos component keeps players lazy and implements shareable, accessible discovery controls', () => {
  const source = read('docs/components/AppDemos/index.vue')

  for (const required of [
    'onMounted', 'URLSearchParams', 'history.replaceState', 'aria-pressed', 'aria-live="polite"',
    'loading="lazy"', 'role="dialog"', 'aria-modal="true"', 'keydown', 'Escape',
    'document.activeElement', 'getDemoEmbedUrl', 'demos_filter_change', 'demos_search',
    'demos_play', 'demos_platform_open', 'demos_guide_click'
  ]) assert.ok(source.includes(required), `missing ${required}`)

  assert.match(source, /<iframe\s+v-if="selectedDemo"/)
  assert.doesNotMatch(source, /<iframe[^>]+src="https:\/\/www\.youtube/i)
  assert.match(source, /query_length: searchQuery\.value\.trim\(\)\.length/)
  assert.doesNotMatch(source, /query:\s*searchQuery/)
})
```

- [ ] **Step 2: Run the component contract to verify it fails**

Run: `node --test tests/demos-catalog.test.mjs`

Expected: FAIL with `ENOENT` for `docs/components/AppDemos/index.vue`.

- [ ] **Step 3: Build the static-first catalog markup**

Create `docs/components/AppDemos/index.vue`. Accept the locale as a required prop, derive all displayed strings from a `copy` object for `en`, `zh`, and `id`, and import `demos`, `demoCategories`, `getDemoCopy`, `getDemoEmbedUrl`, and `getDemoPlatform` from `../../data/demos`. The markup must render all cards in SSR output; do not wrap the catalog in `ClientOnly`.

Use this card and control structure, filling out the localized labels in the same component:

```vue
<section class="demos-library">
  <div class="demos-shell">
    <header class="demos-masthead">
      <p class="demos-kicker">{{ t.kicker }}</p>
      <h1>{{ t.title }}</h1>
      <p>{{ t.intro }}</p>
    </header>

    <section class="demos-controls" :aria-label="t.controlsLabel">
      <div class="demos-filter-row" role="group" :aria-label="t.categoryLabel">
        <button v-for="filter in filters" :key="filter.value" type="button"
          :aria-pressed="activeCategory === filter.value" @click="selectCategory(filter.value)">
          {{ filter.label }} <span>{{ filter.count }}</span>
        </button>
      </div>
      <label class="demos-search-label">
        <span>{{ t.searchLabel }}</span>
        <input v-model="searchQuery" type="search" :placeholder="t.searchPlaceholder" @input="scheduleSearchTracking" />
      </label>
    </section>

    <p class="demos-result-summary" aria-live="polite">{{ resultSummary }}</p>
    <section v-if="showFeatured" :aria-labelledby="featuredHeadingId">
      <h2 :id="featuredHeadingId">{{ t.featuredTitle }}</h2>
      <div class="demos-featured-grid">
        <article v-for="demo in featuredDemos" :key="demo.id" class="demo-card demo-card-featured">
          <button type="button" class="demo-cover" :aria-label="playLabel(demo)" @click="openDemo(demo, 'featured', $event.currentTarget)">
            <img :src="thumbnailUrl(demo)" :alt="''" width="480" height="270" loading="lazy" @error="hideBrokenThumbnail" />
            <span class="demo-play" aria-hidden="true">&#9654;</span>
          </button>
          <p class="demo-category">{{ categoryLabel(demo.category) }}</p>
          <h3>{{ demoCopy(demo).title }}</h3>
          <p>{{ demoCopy(demo).summary }}</p>
        </article>
      </div>
    </section>
    <section :aria-labelledby="catalogHeadingId">
      <div v-if="visibleDemos.length" class="demos-grid">
        <article v-for="(demo, index) in visibleDemos" :key="demo.id" class="demo-card">
          <button type="button" class="demo-cover" :aria-label="playLabel(demo)" @click="openDemo(demo, 'catalog', $event.currentTarget)">
            <img :src="thumbnailUrl(demo)" :alt="''" width="480" height="270" loading="lazy" @error="hideBrokenThumbnail" />
            <span class="demo-play" aria-hidden="true">&#9654;</span>
          </button>
          <p class="demo-category">{{ categoryLabel(demo.category) }}</p>
          <h3>{{ demoCopy(demo).title }}</h3>
          <p>{{ demoCopy(demo).summary }}</p>
          <ul class="demo-tags"><li v-for="tag in demoCopy(demo).tags" :key="tag">{{ tag }}</li></ul>
          <a v-for="guide in localizedGuideLinks(demo)" :key="guide.href" :href="guide.href" @click="trackGuide(demo, guide.href)">{{ guide.label }}</a>
        </article>
      </div>
      <div v-else class="demos-empty"><h3>{{ t.emptyTitle }}</h3><button type="button" @click="resetDiscovery">{{ t.reset }}</button></div>
    </section>
  </div>
</section>
```

Use a stable 16:9 `.demo-cover` with an opaque neutral fallback color and fixed `img` object-fit behavior. Do not add local assets in this task, do not add rounded-card-in-card wrappers, and do not use a gradient or decorative orb. A thumbnail request is lazy, but it is not a player request.

- [ ] **Step 4: Implement filters, search, URL state, and public-only events**

Add the following behavior in `<script setup lang="ts">`:

```ts
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import { trackEvent } from '../../utils/analytics'
import { demos, demoCategories, getDemoCopy, getDemoEmbedUrl, getDemoPlatform } from '../../data/demos'
import type { Demo, DemoCategory, DemoLocale } from '../../data/demos'

const props = defineProps<{ locale: DemoLocale }>()
const copy = {
  en: {
    kicker: 'FlyEnv demonstrations', title: 'See the local task before you build it',
    intro: 'Browse practical FlyEnv workflows for runtimes, services, projects, AI, and developer tools.',
    controlsLabel: 'Browse FlyEnv demonstrations', categoryLabel: 'Filter by category', searchLabel: 'Search demos',
    searchPlaceholder: 'Search a task, stack, or tool', all: 'All demos', featuredTitle: 'Featured demonstrations',
    catalogTitle: 'All demonstrations', emptyTitle: 'No demonstrations match this search', reset: 'Clear filters',
    play: 'Play demo', relatedLink: 'Open related guide', close: 'Close video player',
    resultSummary: (count: number) => `${count} ${count === 1 ? 'demo' : 'demos'} found`,
    watchOn: (platform: DemoPlatform) => `Watch on ${platform === 'youtube' ? 'YouTube' : 'Bilibili'}`,
    openOn: (platform: DemoPlatform) => `Open on ${platform === 'youtube' ? 'YouTube' : 'Bilibili'}`
  },
  zh: {
    kicker: 'FlyEnv 演示', title: '在开始前先看真实的本地开发任务',
    intro: '浏览 FlyEnv 管理运行时、服务、项目、AI 和开发工具的实际工作流。',
    controlsLabel: '浏览 FlyEnv 演示', categoryLabel: '按分类筛选', searchLabel: '搜索演示',
    searchPlaceholder: '搜索任务、技术栈或工具', all: '全部演示', featuredTitle: '精选演示',
    catalogTitle: '全部演示', emptyTitle: '没有匹配的演示', reset: '清除筛选',
    play: '播放演示', relatedLink: '打开相关指南', close: '关闭视频播放器',
    resultSummary: (count: number) => `找到 ${count} 个演示`,
    watchOn: (platform: DemoPlatform) => `切换到 ${platform === 'youtube' ? 'YouTube' : 'Bilibili'}`,
    openOn: (platform: DemoPlatform) => `在 ${platform === 'youtube' ? 'YouTube' : 'Bilibili'} 打开`
  },
  id: {
    kicker: 'Demo FlyEnv', title: 'Lihat tugas lokal sebelum Anda membangunnya',
    intro: 'Telusuri alur kerja FlyEnv untuk runtime, layanan, proyek, AI, dan alat developer.',
    controlsLabel: 'Telusuri demo FlyEnv', categoryLabel: 'Filter berdasarkan kategori', searchLabel: 'Cari demo',
    searchPlaceholder: 'Cari tugas, stack, atau alat', all: 'Semua demo', featuredTitle: 'Demo pilihan',
    catalogTitle: 'Semua demo', emptyTitle: 'Tidak ada demo yang cocok', reset: 'Hapus filter',
    play: 'Putar demo', relatedLink: 'Buka panduan terkait', close: 'Tutup pemutar video',
    resultSummary: (count: number) => `${count} demo ditemukan`,
    watchOn: (platform: DemoPlatform) => `Tonton di ${platform === 'youtube' ? 'YouTube' : 'Bilibili'}`,
    openOn: (platform: DemoPlatform) => `Buka di ${platform === 'youtube' ? 'YouTube' : 'Bilibili'}`
  }
} satisfies Record<DemoLocale, Record<string, string | ((platform: DemoPlatform) => string) | ((count: number) => string)>>

const t = computed(() => copy[props.locale])
const demoCategoryValues: DemoCategory[] = [
  'getting-started', 'projects', 'runtimes', 'databases-services', 'developer-tools', 'ai-mcp'
]
const activeCategory = ref<'all' | DemoCategory>('all')
const searchQuery = ref('')
type DemoPosition = 'featured' | 'catalog'
type DemoPlatform = 'youtube' | 'bilibili'

const selectedDemo = ref<Demo | null>(null)
const selectedPlatform = ref<DemoPlatform>('youtube')
const playerTrigger = ref<HTMLElement | null>(null)
let searchTimer: ReturnType<typeof window.setTimeout> | undefined
const featuredHeadingId = 'demos-featured-heading'
const catalogHeadingId = 'demos-catalog-heading'

const filters = computed(() => [{ value: 'all' as const, label: t.value.all, count: demos.length }].concat(
  demoCategoryValues.map((value) => ({
    value,
    label: demoCategories[props.locale][value],
    count: demos.filter((demo) => demo.category === value).length
  }))
))

const visibleDemos = computed(() => {
  const query = searchQuery.value.trim().toLocaleLowerCase()
  return demos.filter((demo) => {
    const copy = getDemoCopy(demo, props.locale)
    const haystack = `${copy.title} ${copy.summary} ${copy.tags.join(' ')} ${demoCategories[props.locale][demo.category]}`.toLocaleLowerCase()
    return (activeCategory.value === 'all' || demo.category === activeCategory.value) && (!query || haystack.includes(query))
  })
})

function selectCategory(category: 'all' | DemoCategory) {
  activeCategory.value = category
  syncDiscoveryUrl()
  trackEvent('demos_filter_change', { category, result_count: visibleDemos.value.length })
}

function scheduleSearchTracking() {
  syncDiscoveryUrl()
  if (searchTimer) window.clearTimeout(searchTimer)
  searchTimer = window.setTimeout(() => {
    trackEvent('demos_search', {
      query_length: searchQuery.value.trim().length,
      result_count: visibleDemos.value.length
    })
  }, 250)
}

function demoCopy(demo: Demo) {
  return getDemoCopy(demo, props.locale)
}

function thumbnailUrl(demo: Demo) {
  return `https://i.ytimg.com/vi/${demo.youtubeId}/hqdefault.jpg`
}

function categoryLabel(category: DemoCategory) {
  return demoCategories[props.locale][category]
}

function playLabel(demo: Demo) {
  return `${t.value.play}: ${demoCopy(demo).title}`
}

function localizedGuideLinks(demo: Demo) {
  const prefix = props.locale === 'en' ? '' : `/${props.locale}`
  return demo.relatedGuides.concat(demo.relatedModules).map((href) => ({
    href: `${prefix}${href}`,
    label: t.value.relatedLink
  }))
}

function openDemo(demo: Demo, position: DemoPosition, trigger: EventTarget | null) {
  playerTrigger.value = trigger instanceof HTMLElement ? trigger : null
  selectedDemo.value = demo
  selectedPlatform.value = getDemoPlatform(demo, props.locale)
  trackEvent('demos_play', { demo_id: demo.id, category: demo.category, position, platform: selectedPlatform.value })
  nextTick(() => dialogCloseButton.value?.focus())
}

function hideBrokenThumbnail(event: Event) {
  const image = event.currentTarget as HTMLImageElement
  image.style.opacity = '0'
}

const featuredDemos = computed(() => demos.filter((demo) => demo.featured))
const showFeatured = computed(() => activeCategory.value === 'all' && !searchQuery.value.trim())
const resultSummary = computed(() => t.value.resultSummary(visibleDemos.value.length))
const embedUrl = computed(() => selectedDemo.value ? getDemoEmbedUrl(selectedDemo.value, selectedPlatform.value) : '')
const currentPlatformUrl = computed(() => selectedDemo.value ? selectedDemo.value.platforms[selectedPlatform.value] : '')
const alternatePlatform = computed<DemoPlatform | null>(() => {
  if (!selectedDemo.value?.platforms.bilibili) return null
  return selectedPlatform.value === 'youtube' ? 'bilibili' : 'youtube'
})

function syncDiscoveryUrl() {
  if (typeof window === 'undefined') return
  const url = new URL(window.location.href)
  const query = searchQuery.value.trim()
  if (activeCategory.value === 'all') url.searchParams.delete('category')
  else url.searchParams.set('category', activeCategory.value)
  if (query) url.searchParams.set('q', query)
  else url.searchParams.delete('q')
  window.history.replaceState({}, '', url)
}

function resetDiscovery() {
  activeCategory.value = 'all'
  searchQuery.value = ''
  syncDiscoveryUrl()
}

onMounted(() => {
  const params = new URLSearchParams(window.location.search)
  const category = params.get('category')
  if (category && demoCategoryValues.includes(category as DemoCategory)) activeCategory.value = category as DemoCategory
  searchQuery.value = params.get('q') || ''
})
```

In `onMounted`, read only `category` and `q` from `window.location.search`, accepting a category only when it is one of the six type values. `syncDiscoveryUrl()` must create `new URL(window.location.href)`, delete empty parameters, set a non-`all` `category`, set a trimmed `q`, and call `window.history.replaceState({}, '', url)`. `showFeatured` is true only while category is `all` and `searchQuery` is empty; Featured cards call `openDemo(demo, 'featured', $event.currentTarget)`, all cards call `openDemo(demo, 'catalog', $event.currentTarget)`, and the `position` event dimension is exactly one of those values.

- [ ] **Step 5: Implement lazy playback and keyboard-safe dialog lifecycle**

Use one Teleport dialog after the catalog. Its iframe must exist only when `selectedDemo` exists. On the same click that selects a demo, choose the platform with `getDemoPlatform(selectedDemo, props.locale)`, record only stable public identifiers, then focus the dialog close button on the next tick.

```vue
<Teleport to="body">
  <div v-if="selectedDemo" class="demo-dialog-backdrop" @mousedown.self="closeDialog">
    <section ref="dialogElement" class="demo-dialog" role="dialog" aria-modal="true" :aria-label="demoCopy(selectedDemo).title" @keydown="trapDialogFocus">
      <button ref="dialogCloseButton" type="button" class="demo-dialog-close" :aria-label="t.close" @click="closeDialog"><span aria-hidden="true">&times;</span></button>
      <iframe v-if="selectedDemo" :src="embedUrl" :title="demoCopy(selectedDemo).title" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <div class="demo-dialog-actions">
        <button v-if="alternatePlatform" type="button" class="demo-platform-switch" @click="selectPlatform(alternatePlatform)">{{ t.watchOn(alternatePlatform) }}</button>
        <a :href="currentPlatformUrl" target="_blank" rel="noopener noreferrer" @click="trackPlatform(selectedDemo, selectedPlatform)">{{ t.openOn(selectedPlatform) }}</a>
      </div>
    </section>
  </div>
</Teleport>
```

Add the complete dialog helper set below. `dialogFocusableElements()` intentionally selects only the close button, platform switch, and platform link in the dialog, so every Tab key remains within the interaction boundary. Do not attach a raw search value, title, or external URL to these new custom events. The existing delegated click handler still emits generic `video_click` for the external platform anchor.

```ts
const dialogElement = ref<HTMLElement | null>(null)
const dialogCloseButton = ref<HTMLButtonElement | null>(null)

function selectPlatform(platform: DemoPlatform) {
  if (!selectedDemo.value) return
  selectedPlatform.value = platform
}

function trackPlatform(demo: Demo, platform: DemoPlatform) {
  trackEvent('demos_platform_open', { demo_id: demo.id, category: demo.category, platform })
}

function trackGuide(demo: Demo, target: string) {
  trackEvent('demos_guide_click', { demo_id: demo.id, category: demo.category, target })
}

function dialogFocusableElements() {
  return Array.from(dialogElement.value?.querySelectorAll<HTMLElement>('button:not([disabled]), a[href]') || [])
}

function trapDialogFocus(event: KeyboardEvent) {
  if (event.key !== 'Tab') return
  const elements = dialogFocusableElements()
  if (!elements.length) return
  const first = elements[0]
  const last = elements[elements.length - 1]
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault()
    last.focus()
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault()
    first.focus()
  }
}

function closeDialog() {
  selectedDemo.value = null
  selectedPlatform.value = 'youtube'
  nextTick(() => playerTrigger.value?.focus())
}

function handleDialogKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') closeDialog()
}

watch(selectedDemo, (demo) => {
  if (typeof document === 'undefined') return
  if (demo) document.addEventListener('keydown', handleDialogKeydown)
  else document.removeEventListener('keydown', handleDialogKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleDialogKeydown)
  if (searchTimer) window.clearTimeout(searchTimer)
})
```

With no Bilibili mapping, Chinese playback defaults to YouTube and the dialog labels it as YouTube.

- [ ] **Step 6: Add constrained responsive styling**

Put component-scoped CSS after the script. Implement a three-column catalog grid at desktop widths, two columns for the intermediate width, and one column below `640px`; featured uses two columns and collapses to one. Keep the control/filter row horizontally scrollable on small screens and use a stable `16 / 9` cover aspect ratio, 40px minimum control height, visible `:focus-visible` outline, 8px-or-less card corners, and no viewport-relative font sizing. Ensure the dialog surface fits inside `min(960px, calc(100vw - 32px))` and its player preserves 16:9.

- [ ] **Step 7: Run component contracts to verify they pass**

Run: `node --test tests/demos-catalog.test.mjs`

Expected: PASS with no iframe literal URL in static markup, required a11y hooks, URL state, and all five catalog-specific events.

- [ ] **Step 8: Commit the reusable catalog component**

```bash
git add docs/components/AppDemos/index.vue tests/demos-catalog.test.mjs
git commit -m "feat: add interactive demos catalog"
```

### Task 3: Localized Routes, Metadata, Navigation, and Shared Analytics Context

**Files:**
- Create: `docs/demos.md`
- Create: `docs/zh/demos.md`
- Create: `docs/id/demos.md`
- Modify: `docs/.vitepress/config.mts`
- Modify: `docs/utils/analytics.ts`
- Modify: `docs/.vitepress/theme/index.js`
- Modify: `tests/demos-catalog.test.mjs`
- Modify: `tests/analytics-tracking.test.mjs`

- [ ] **Step 1: Write failing route, navigation, and shared-context contracts**

Add the following source contracts. Match the surrounding `node:test` style and use the existing project-root `read()` helper.

```js
test('all three Demos routes have localized metadata and compose the shared catalog', () => {
  const expected = [
    ['docs/demos.md', './components/AppDemos/index.vue', 'locale="en"', 'FlyEnv Demos'],
    ['docs/zh/demos.md', '../components/AppDemos/index.vue', 'locale="zh"', 'FlyEnv 演示'],
    ['docs/id/demos.md', '../components/AppDemos/index.vue', 'locale="id"', 'Demo FlyEnv']
  ]
  for (const [path, component, locale, title] of expected) {
    const source = read(path)
    assert.ok(source.includes(component))
    assert.ok(source.includes(locale))
    assert.ok(source.includes(title))
    assert.match(source, /rel: canonical/)
    assert.match(source, /hreflang: en/)
    assert.match(source, /hreflang: zh-CN/)
    assert.match(source, /hreflang: id-ID/)
  }
})

test('all site locales expose Demos in primary navigation and delegated analytics', () => {
  const config = read('docs/.vitepress/config.mts')
  const theme = read('docs/.vitepress/theme/index.js')
  for (const [label, link] of [['Demos', '/demos'], ['演示', '/zh/demos'], ['Demo', '/id/demos']]) {
    assert.ok(config.includes(`{ text: '${label}', link: '${link}' }`))
  }
  assert.match(theme, /demos_nav_click/)
  assert.match(theme, /primary_nav/)
})
```

Append to `tests/analytics-tracking.test.mjs`:

```js
test('analytics context identifies Indonesian and Demos routes', () => {
  const source = read('docs/utils/analytics.ts')
  assert.match(source, /if \(pathname === '\/id' \|\| pathname\.startsWith\('\/id\/'\)\) return 'id'/)
  assert.match(source, /pathname\.includes\('\/demos'\).*return 'demos'/s)
})
```

- [ ] **Step 2: Run the new contracts to verify they fail**

Run: `node --test tests/demos-catalog.test.mjs tests/analytics-tracking.test.mjs`

Expected: FAIL because the three route shells and Demos-specific navigation/context behavior do not exist yet.

- [ ] **Step 3: Create the English route shell with complete metadata**

Create `docs/demos.md` with this frontmatter and composition. Keep all internal URLs relative except canonical and alternate URLs.

```md
---
layout: home
title: FlyEnv Demos: Local Development Tasks, Stacks and Tools
head:
  - - meta
    - name: description
      content: 'Browse FlyEnv demonstrations for local runtimes, databases, services, project stacks, AI and developer tools on macOS, Windows and Linux.'
  - - link
    - rel: canonical
      href: https://flyenv.com/demos.html
  - - link
    - rel: alternate
      hreflang: en
      href: https://flyenv.com/demos.html
  - - link
    - rel: alternate
      hreflang: zh-CN
      href: https://flyenv.com/zh/demos.html
  - - link
    - rel: alternate
      hreflang: id-ID
      href: https://flyenv.com/id/demos.html
  - - script
    - type: application/ld+json
    - |
      {"@context":"https://schema.org","@type":"CollectionPage","name":"FlyEnv Demos","inLanguage":"en","description":"Task-oriented FlyEnv product demonstrations for local development.","url":"https://flyenv.com/demos.html"}
---

<script setup>
import AppDemos from './components/AppDemos/index.vue'
</script>

<AppDemos locale="en" />
```

- [ ] **Step 4: Create the Chinese and Indonesian route shells**

Create `docs/zh/demos.md` and `docs/id/demos.md` with the same structural fields as the English route, changing all of the following values exactly:

| Field | Chinese | Indonesian |
| --- | --- | --- |
| `title` | `FlyEnv 演示：本地开发任务、技术栈与工具` | `Demo FlyEnv: Tugas, Stack, dan Alat Pengembangan Lokal` |
| Description | `按任务浏览 FlyEnv 演示：在 macOS、Windows 和 Linux 上管理运行时、数据库、服务、项目技术栈、AI 与开发工具。` | `Telusuri demo FlyEnv untuk runtime, database, layanan, stack proyek, AI, dan alat developer lokal di macOS, Windows, serta Linux.` |
| Canonical | `https://flyenv.com/zh/demos.html` | `https://flyenv.com/id/demos.html` |
| CollectionPage name | `FlyEnv 演示` | `Demo FlyEnv` |
| `inLanguage` | `zh-CN` | `id-ID` |
| Import | `../components/AppDemos/index.vue` | `../components/AppDemos/index.vue` |
| Component prop | `locale="zh"` | `locale="id"` |

Each shell includes all three alternates with the same URLs as the English route. Do not add 80 individual video URLs or any report metrics to the metadata.

- [ ] **Step 5: Add navigation and shared event context**

Insert a Demos item after the Guide item in each existing `nav` array in `docs/.vitepress/config.mts`:

```ts
{ text: 'Demos', link: '/demos' }
{ text: '演示', link: '/zh/demos' }
{ text: 'Demo', link: '/id/demos' }
```

Update `docs/utils/analytics.ts` with a three-way locale classifier and a Demos page type, retaining all existing behavior:

```ts
function getLocale(pathname: string) {
  if (pathname === '/zh' || pathname.startsWith('/zh/')) return 'zh'
  if (pathname === '/id' || pathname.startsWith('/id/')) return 'id'
  return 'en'
}

function getPageType(pathname: string) {
  if (pathname === '/' || pathname === '/zh' || pathname === '/zh/' || pathname === '/id' || pathname === '/id/') return 'home'
  if (pathname.includes('/demos')) return 'demos'
  if (pathname.includes('/guide/')) return 'guide'
  if (pathname.includes('/download')) return 'download'
  if (pathname.includes('/license')) return 'license'
  return 'page'
}
```

In `docs/.vitepress/theme/index.js`, add the Demos path classifier before the generic `/guide/` classifier and specialize its surface without changing generic external video behavior:

```js
if (/\/demos(?:\.html)?(?:[?#]|$)/.test(href)) return 'demos_nav_click'

const surface = anchor.dataset.analyticsSurface || (eventName === 'demos_nav_click' ? 'primary_nav' : 'site')
trackEvent(eventName, {
  target: anchor.href || anchor.getAttribute('href') || '',
  link_text: (anchor.textContent || '').trim().slice(0, 100),
  surface
})
```

The `locale` dimension continues to come from `trackEvent` context. Do not add raw user query input to any navigation or catalog event.

- [ ] **Step 6: Run route and analytics contracts to verify they pass**

Run: `node --test tests/demos-catalog.test.mjs tests/analytics-tracking.test.mjs`

Expected: PASS for all catalogue, route, navigation, Indonesian locale, Demos page type, and delegated-event checks.

- [ ] **Step 7: Commit routes and analytics integration**

```bash
git add docs/demos.md docs/zh/demos.md docs/id/demos.md docs/.vitepress/config.mts docs/utils/analytics.ts docs/.vitepress/theme/index.js tests/demos-catalog.test.mjs tests/analytics-tracking.test.mjs
git commit -m "feat: publish localized demos routes"
```

### Task 4: Production Build and Browser Acceptance

**Files:**
- Modify only if a check exposes a real defect: the exact source file responsible for that defect

- [ ] **Step 1: Run the complete source-contract suite**

Run: `node --test tests/*.test.mjs`

Expected: PASS. Do not change unrelated existing tests, and do not stage unrelated user changes when correcting a Demos failure.

- [ ] **Step 2: Build the complete documentation site**

Run: `yarn docs:build`

Expected: exit code 0 and generated routes for `demos`, `zh/demos`, and `id/demos` in `docs/.vitepress/dist/`.

- [ ] **Step 3: Inspect all three locales before interaction**

Start the production preview in one terminal:

```bash
yarn docs:preview --host 127.0.0.1 --port 4173
```

In a second terminal, use Playwright's Node API against `http://127.0.0.1:4173/demos.html`, `http://127.0.0.1:4173/zh/demos.html`, and `http://127.0.0.1:4173/id/demos.html`. For each route, assert 80 cards exist in the all-catalog grid before filtering, exactly zero `iframe` elements exist, and the primary nav has the localized Demos label. Capture desktop (`1440x1100`) and mobile (`390x844`) screenshots for the English route.

```js
import { chromium } from 'playwright'
const browser = await chromium.launch({ headless: true })
const page = await browser.newPage({ viewport: { width: 1440, height: 1100 } })
await page.goto('http://127.0.0.1:4173/demos.html', { waitUntil: 'networkidle' })
console.assert(await page.locator('.demos-grid .demo-card').count() === 80)
console.assert(await page.locator('iframe').count() === 0)
await page.screenshot({ path: '/tmp/flyenv-demos-desktop.png', fullPage: true })
await browser.close()
```

- [ ] **Step 4: Verify filters, URL state, localized platform defaults, and dialog keyboard behavior**

Use Playwright to perform the following exact checks:

1. Click `AI & MCP`, assert every visible `.demo-card` exposes its AI/MCP category, the URL contains `category=ai-mcp`, and the result summary changes.
2. Search `postgresql`, assert the URL contains `q=postgresql`, result count is non-zero, and `document.location.search` does not leak the result set or private data.
3. Reload the filtered URL and assert the category button has `aria-pressed="true"` and the search field retains `postgresql`.
4. On `/demos.html`, open `TA2NA0JeGdo`; assert exactly one iframe appears, its `src` contains `youtube-nocookie.com/embed/TA2NA0JeGdo`, then press Escape and assert zero iframes and focus restored to the initiating cover button.
5. On `/zh/demos.html`, open `TA2NA0JeGdo`; assert its iframe uses `player.bilibili.com` and its public platform link contains `bilibili.com/video/BV1eCNR6FE2k`.
6. On `/zh/demos.html`, open `idjLaMh2RMw`; assert its iframe uses `youtube-nocookie.com`, demonstrating the required unmapped Chinese fallback.
7. With the English dialog open, press Tab repeatedly and assert focus never leaves the dialog; click the external platform link and assert it has `target="_blank"` and `rel` including `noopener`.
8. At `390x844`, assert cards are one column, filter buttons scroll within their row, card titles do not overflow horizontally, dialog bounds stay inside the viewport, and controls retain a visible focus style.

- [ ] **Step 5: Inspect screenshots and correct only demonstrated Demos defects**

Review the desktop and mobile screenshots using the image viewer. Correct text overlap, unbounded control widths, keyboard-focus loss, unexpected iframe creation, incorrect localized platform selection, or missing cards in the owning Demos file. Repeat Steps 1 through 4 after each correction.

- [ ] **Step 6: Commit verification corrections only when changes were necessary**

```bash
git add docs/data/demos.ts docs/components/AppDemos/index.vue docs/demos.md docs/zh/demos.md docs/id/demos.md docs/.vitepress/config.mts docs/utils/analytics.ts docs/.vitepress/theme/index.js tests/demos-catalog.test.mjs tests/analytics-tracking.test.mjs
git commit -m "fix: polish demos catalog verification findings"
```

Skip this commit when Steps 1 through 5 required no source changes. Do not commit `docs/.vitepress/dist/`, temporary screenshots, or unrelated worktree changes.

## Final Acceptance Checklist

- [ ] `docs/data/demos.ts` contains exactly the 80 ledger YouTube IDs once each, six valid categories, six featured records, all three localized card-copy blocks, public YouTube URLs, and only explicit Bilibili mappings.
- [ ] The catalog is server-rendered on `/demos/`, `/zh/demos/`, and `/id/demos/`; cards have localized title, summary, category, tags, and only verified internal product paths.
- [ ] Search and category filters work together, update an accessible result count and the shareable `category`/`q` URL parameters, and do not send raw searches to analytics.
- [ ] No player iframe exists before a visitor opens a demo; the dialog traps focus, closes on Escape, restores focus, and removes the iframe when closed.
- [ ] English and Indonesian default to YouTube; Chinese defaults to Bilibili only when the explicit mapping exists and otherwise names and opens YouTube.
- [ ] Navigation emits `demos_nav_click` with `surface: 'primary_nav'`; catalog events use exactly the approved stable dimensions; generic delegated outbound video events remain available.
- [ ] `node --test tests/*.test.mjs` and `yarn docs:build` pass, and desktop/mobile Playwright checks have been inspected.
