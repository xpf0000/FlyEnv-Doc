# 全模块特性内页批量制作 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 为 `docs/features.md` 首页剩余 61 个模块卡片各创建一个英文特性详情页，统一骨架与 PHP 页调性，配占位截图，首页卡片全部指向新内页。

**Architecture:** 纯 VitePress markdown 页面（`layout: doc`），无新组件。事实来源为调研工件 `flyenv-seo-content-loop-kit/seo/research/modules/2026-09-04-feature-pages-module-survey.txt`；页面契约由数据驱动测试 `tests/feature-pages.test.mjs` 锁定（manifest: slug → 关键术语 + 最少图片数）。写页面工作由并行 coder 子代理完成，每批后更新首页 href 并跑测试+构建。

**Tech Stack:** VitePress markdown frontmatter、node:test、Yarn。

**Spec:** `docs/superpowers/specs/2026-09-04-all-feature-pages-design.md`

---

## 全局规则（写入每个写作者代理的 prompt，不得违反）

1. 只写调研报告中核实的能力；不确定的不写。调研报告路径：`flyenv-seo-content-loop-kit/seo/research/modules/2026-09-04-feature-pages-module-survey.txt`（用 Grep 定位模块小节）。
2. **禁止出现许可证/付费/试用相关内容**：页面不得匹配 `/licen[cs]e|trial/i`。
3. 平台限制如实标注（如 ClickHouse/Typesense/Pure-FTPd 仅 macOS+Linux；Memcached 无配置/日志；Elasticsearch 全平台仅 Static 源）。
4. 语言模块的 "Service" 标签页是版本/PATH/别名管理，不是运行中的服务，文案不得误导。
5. 风格对齐 `docs/features/php.md`：H1 Title Case 自然语；intro 一段能力摘要；功能 H2 区块（短描述 + 要点列表 + 截图）；末节固定为 `## Compatibility Notes`。
6. 截图：占位图 `https://oss.macphpstudy.com/image/features/<slug>-N.webp`，从 1 连续编号；Hero 1 张 + 每个主要功能节 1 张；每图配描述性 alt（描述应截的真实界面）。
7. frontmatter 模板（唯一 title/description；canonical 与 og:url 一致）：

```yaml
---
layout: doc
titleTemplate: false
title: '<title> | FlyEnv'
description: '<description>'
head:
  - - meta
    - name: description
      content: '<description>'
  - - meta
    - property: og:title
      content: '<title> | FlyEnv'
  - - meta
    - property: og:description
      content: '<description>'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://www.flyenv.com/features/<slug>
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://www.flyenv.com/features/<slug>
---
```

8. 每页至少 2 个内部链接（`/guide/`、`/solutions/`、`/features/`、`/download`、`/demos` 中任意），优先链接 manifest 中列出的相关 guide。
9. 页面必须包含 manifest 为该页列出的全部关键术语（测试逐字断言，大小写不敏感）。
10. 遵循 AGENTS.md 的 Feature/Guide 边界：写产品模块自身的功能与操作，不写教程式扩展内容。

---

### Task 1: 共享测试与页面契约 manifest

**Files:**
- Create: `tests/feature-pages.test.mjs`

- [ ] **Step 1: 写测试文件（完整内容如下）**

```javascript
import assert from 'node:assert/strict'
import fs from 'node:fs'
import test from 'node:test'

// slug -> { terms: 页面必含关键术语, minImages: 最少占位图数 }
const manifest = {
  php: { terms: ['PHP-FPM', 'php.ini', 'Composer', 'WordPress'], minImages: 13 },
  nodejs: { terms: ['Version Manager', 'Run as service', 'reverse'], minImages: 0 },
  'local-sites-https': { terms: ['HTTPS', 'domain', 'reverse'], minImages: 0 },
  python: { terms: ['Homebrew', 'MacPorts', '.flyenv', 'FastAPI', 'Django'], minImages: 5 },
  java: { terms: ['JDK', 'SDKMAN', 'Maven', '.flyenv'], minImages: 5 },
  go: { terms: ['GVM', 'Version Manager', '.flyenv', 'Projects'], minImages: 4 },
  ruby: { terms: ['Ruby', 'Version Manager', 'Projects', 'PATH'], minImages: 3 },
  rust: { terms: ['rustup', 'Version Manager', 'PATH', 'Projects'], minImages: 3 },
  dotnet: { terms: ['.NET', 'Version Manager', 'PATH', 'Projects'], minImages: 3 },
  zig: { terms: ['Zig', 'Homebrew', 'Projects'], minImages: 3 },
  bun: { terms: ['Bun', 'Static', 'Projects'], minImages: 3 },
  deno: { terms: ['Deno', 'Homebrew', 'Projects'], minImages: 3 },
  erlang: { terms: ['Erlang', 'Homebrew', 'MacPorts'], minImages: 3 },
  gradle: { terms: ['Gradle', 'SDKMAN', 'Version Manager'], minImages: 2 },
  flutter: { terms: ['Flutter', 'doctor', 'Android SDK', 'pub'], minImages: 6 },
  nginx: { terms: ['nginx.conf', 'gzip', 'reverse proxy', 'vhost'], minImages: 5 },
  apache: { terms: ['httpd', 'KeepAlive', 'vhost', 'Homebrew'], minImages: 4 },
  caddy: { terms: ['Caddyfile', 'watch', 'reverse proxy'], minImages: 4 },
  tomcat: { terms: ['CATALINA_BASE', 'server.xml', 'web.xml', 'Java'], minImages: 5 },
  frankenphp: { terms: ['FrankenPHP', 'Caddyfile', 'php_server'], minImages: 4 },
  mysql: { terms: ['mysqld', 'phpMyAdmin', 'Group', 'mysqldump', 'slow'], minImages: 7 },
  mariadb: { terms: ['mariadbd', 'phpMyAdmin', 'MacPorts'], minImages: 5 },
  postgresql: { terms: ['pgAdmin', 'initdb', 'data directory', 'pgvector'], minImages: 5 },
  mongodb: { terms: ['mongod', 'DbGate', 'mongosh'], minImages: 4 },
  clickhouse: { terms: ['ClickHouse', 'CH-UI', '8123', 'macOS and Linux'], minImages: 4 },
  neo4j: { terms: ['Neo4j', 'Java', '7687', 'Browser'], minImages: 4 },
  qdrant: { terms: ['Qdrant', '6333', 'dashboard'], minImages: 3 },
  redis: { terms: ['redis-server', 'Redis Commander', 'requirepass', 'maxmemory'], minImages: 4 },
  memcached: { terms: ['memcached', '11211'], minImages: 2 },
  rabbitmq: { terms: ['RabbitMQ', '15672', 'management', 'Erlang'], minImages: 4 },
  elasticsearch: { terms: ['elasticsearch.yml', 'jvm.options', '9200'], minImages: 4 },
  meilisearch: { terms: ['Meilisearch', '7700', 'meilisearch.toml', 'dashboard'], minImages: 4 },
  typesense: { terms: ['Typesense', '8108', 'macOS and Linux'], minImages: 3 },
  zincsearch: { terms: ['ZincSearch', '4080'], minImages: 3 },
  mailpit: { terms: ['Mailpit', '1025', '8025', 'SMTP'], minImages: 4 },
  minio: { terms: ['MinIO', 'Console', '9001', 'S3-compatible'], minImages: 4 },
  rustfs: { terms: ['RustFS', 'S3-compatible', 'console'], minImages: 4 },
  consul: { terms: ['Consul', '8500', 'data directory'], minImages: 4 },
  etcd: { terms: ['etcd', '2379', 'etcd.yaml'], minImages: 3 },
  'r-nacos': { terms: ['R-Nacos', '8848', 'console'], minImages: 3 },
  temporal: { terms: ['Temporal', '7233', 'namespace', 'SQLite'], minImages: 5 },
  numa: { terms: ['Numa', 'DNS', '5380', 'ad-blocking'], minImages: 4 },
  ollama: { terms: ['Ollama', 'Model', '11434', 'pull'], minImages: 5 },
  n8n: { terms: ['n8n', '5678', 'npm', 'Users'], minImages: 5 },
  cliproxyapi: { terms: ['CLIProxyAPI', '8317', 'management'], minImages: 4 },
  'claude-code': { terms: ['Claude Code', 'Plugins', 'Sessions', 'MCP'], minImages: 5 },
  codex: { terms: ['Codex', 'config.toml', 'Sessions', 'MCP'], minImages: 4 },
  opencode: { terms: ['OpenCode', 'Stats', 'Providers', 'Sessions'], minImages: 4 },
  kimi: { terms: ['Kimi', 'Sessions', 'export', 'MCP'], minImages: 4 },
  'antigravity-cli': { terms: ['Antigravity', 'Skills', 'agy', 'Sessions'], minImages: 4 },
  'github-copilot-cli': { terms: ['Copilot', 'Skills', 'Sessions', 'npm'], minImages: 4 },
  openclaw: { terms: ['OpenClaw', 'gateway', 'command'], minImages: 3 },
  'hermes-agent': { terms: ['Hermes', 'gateway', 'Skills', 'Sessions'], minImages: 4 },
  'mcp-server': { terms: ['MCP', 'Streamable HTTP', '7682', 'Audit Log', 'Tools'], minImages: 5 },
  'dns-server': { terms: ['DNS', 'port 53', 'hosts', 'query'], minImages: 3 },
  'ftp-server': { terms: ['Pure-FTPd', 'ftp-srv', 'account', 'port 21'], minImages: 4 },
  'startup-groups': { terms: ['Startup Groups', 'default group', 'tray'], minImages: 3 },
  'cron-jobs': { terms: ['cron', 'crontab', 'Task Scheduler', 'run history'], minImages: 4 },
  'per-project-runtimes': { terms: ['.flyenv', 'shell hook', 'PATH', 'IDE'], minImages: 4 },
  'user-modules': { terms: ['custom module', 'sudo', 'pid'], minImages: 4 },
  'cli-terminal': { terms: ['terminal', 'shell', 'PowerShell', 'environment variables'], minImages: 3 },
  podman: { terms: ['Podman', 'machine', 'Compose', 'Image', 'Container'], minImages: 5 },
  cloudflared: { terms: ['cloudflared', 'Homebrew', 'PATH'], minImages: 2 },
  'cloudflare-tunnel': { terms: ['Cloudflare Tunnel', 'API Token', 'CNAME', 'ingress'], minImages: 4 }
}

const escapeRegExp = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

for (const [slug, { terms, minImages }] of Object.entries(manifest)) {
  test(`feature page /features/${slug} meets the contract`, () => {
    const page = fs.readFileSync(new URL(`../docs/features/${slug}.md`, import.meta.url), 'utf8')

    // frontmatter contract
    assert.match(page, /layout: doc/)
    assert.match(page, /titleTemplate: false/)
    assert.match(page, /rel: canonical/)
    const canonicalCount = (page.match(new RegExp(`https://www\\.flyenv\\.com/features/${slug}`, 'g')) ?? []).length
    assert.ok(canonicalCount >= 2, 'og:url and canonical both point at the page URL')

    // unique title & description across meta tags
    const titleMatch = page.match(/^title: '(.+)'$/m)
    const descMatch = page.match(/^description: '(.+)'$/m)
    assert.ok(titleMatch, 'frontmatter title present')
    assert.ok(descMatch, 'frontmatter description present')
    assert.ok(page.includes(`content: '${titleMatch[1]}'`), 'og:title repeats title')
    assert.ok(page.includes(`content: '${descMatch[1]}'`), 'description metas repeat description')

    // exactly one H1
    assert.equal((page.match(/^# /gm) ?? []).length, 1, 'exactly one H1')

    // placeholder screenshots: slug-matched, numbered from 1 without gaps
    const images = [
      ...page.matchAll(
        /!\[[^\]]+\]\(https:\/\/oss\.macphpstudy\.com\/image\/features\/([a-z0-9-]+)-(\d+)\.webp\)/g
      )
    ]
    assert.ok(images.length >= minImages, `at least ${minImages} screenshots`)
    images.forEach((m, i) => {
      assert.equal(m[1], slug, 'image slug matches page slug')
      assert.equal(Number(m[2]), i + 1, 'image numbers are sequential from 1')
    })

    // structure
    assert.match(page, /## Compatibility Notes/)

    // no license/trial marketing blockers
    assert.doesNotMatch(page, /licen[cs]e|trial/i)

    // at least two internal links
    const links = page.match(/\]\(\/(guide|solutions|features|download|demos)[^)]*\)/g) ?? []
    assert.ok(links.length >= 2, 'at least two internal links')

    // key terms
    for (const term of terms) {
      assert.match(page, new RegExp(escapeRegExp(term), 'i'), `contains "${term}"`)
    }
  })
}
```

- [ ] **Step 2: 运行确认失败**

Run: `node --test tests/feature-pages.test.mjs`
Expected: FAIL（61 个新页面文件不存在；php 页含 "license" 违反负向断言）

- [ ] **Step 3: Commit**

```bash
git add tests/feature-pages.test.mjs
git commit -m "test: add data-driven contract test for all feature pages"
```

---

### Task 2: 移除 PHP 页的许可证内容

**Files:**
- Modify: `docs/features/php.md`
- Modify: `tests/php-feature-page.test.mjs`

- [ ] **Step 1: 删除 php.md 中的许可证句子**

删除整段（Project-level PHP isolation 节内）：

```
Registering more than two projects requires a FlyEnv license.
```

- [ ] **Step 2: 同步 `tests/php-feature-page.test.mjs`**

在 `documents platform differences and limits` 测试中删除 `assert.match(page, /license/i)` 一行，改为：

```javascript
assert.doesNotMatch(page, /licen[cs]e|trial/i)
```

- [ ] **Step 3: 运行两个测试文件确认通过**

Run: `node --test tests/php-feature-page.test.mjs tests/feature-pages.test.mjs`
Expected: php 相关测试全部 PASS；其余 60 个新页面测试仍 FAIL（文件不存在，预期）

- [ ] **Step 4: Commit**

```bash
git add docs/features/php.md tests/php-feature-page.test.mjs
git commit -m "docs: remove license note from php feature page"
```

---

### Task 3~10: 8 个批次的页面生产

**每个批次的统一步骤：**

- [ ] **Step A: 并行派发写作者子代理**（Agent 工具，`subagent_type: "coder"`，每页一个代理，同批全部并行）。每个代理的 prompt 用下面的完整模板，替换尖括号内容：

````
你在 FlyEnv 文档站仓库（/Users/x/Desktop/WorkSpace/GitHub/FlyEnv-Doc）工作。任务：创建英文特性详情页 docs/features/<slug>.md。

事实来源（必须遵守，禁止虚构）：
- 调研报告 flyenv-seo-content-loop-kit/seo/research/modules/2026-09-04-feature-pages-module-survey.txt —— 用 Grep 找到 "<模块名>" 小节，只写其中核实的能力。
- 风格参照 docs/features/php.md（先读它）。

页面契约（测试逐字断言）：
- frontmatter：layout: doc + titleTemplate: false + 唯一 title '<title> | FlyEnv' + description '<description>' + 完整 head（og:title/og:description 与 title/description 逐字一致；og:url 与 canonical 均为 https://www.flyenv.com/features/<slug>；og:image 为 https://oss.macphpstudy.com/image/app-icon.png）
- 恰好一个 H1：<H1>
- intro：一段能力摘要（2-4 句），紧跟 Hero 图
- 功能区块（按顺序）：<sections>
- 末节：## Compatibility Notes（平台限制与事实边界）
- 图片：https://oss.macphpstudy.com/image/features/<slug>-1.webp 起连续编号，共约 <N> 张；每张配描述性 alt（描述应截的真实界面）
- 必含术语（大小写不敏感）：<terms>
- 至少 2 个内部链接：<links>
- 禁止出现 license/licence/trial 等词；禁止写教程式扩展内容；语言模块的 Service 标签页是版本/PATH 管理而非运行服务（适用时）

完成后运行 `node --test tests/feature-pages.test.mjs` —— 只要求 <slug> 那一个测试通过即可（其他页面的失败是预期）。不要做 git 提交。
````

- [ ] **Step B: 抽查**——随机读 1-2 个生成页面，核对 frontmatter、图片编号、术语、无许可证词。
- [ ] **Step C: 更新首页卡片 href**——在 `docs/features.md` 中把该批卡片的 `href` 按下表改为新内页（`name`/`detail`/`logo` 不动）。
- [ ] **Step D: 运行测试**：`node --test 'tests/*.test.mjs'`。Expected: 该批页面测试全 PASS；允许 3 个既有 community 测试失败（community-content-refresh / community-evidence-distribution / analytics-tracking，与本次无关）。
- [ ] **Step E: 构建**：`yarn docs:build` 通过。
- [ ] **Step F: Commit**：`git add docs/features/ docs/features.md && git commit -m "docs: add feature pages - <批次名>"`。

**批次 3（原型 A，语言运行时 11 页）**，各页契约：

| slug | H1 | title（不含 `| FlyEnv`） | description | N图 | sections | terms | links |
|---|---|---|---|---|---|---|---|
| python | Local Python Development with FlyEnv | Python Version Manager and Project Runtimes | Install and switch Python versions, bind a runtime to each project, and scaffold FastAPI or Django projects in FlyEnv. | 5 | Version management; Command-line switching; Projects; New project templates; Compatibility Notes | Homebrew, MacPorts, .flyenv, FastAPI, Django | /guide/project-level-runtime-environment, /guide/deploy-nodejs-python-go-without-docker |
| java | Local Java Development with FlyEnv | Java JDK Manager and Maven Versions | Install JDKs from static builds, Homebrew, MacPorts or SDKMAN, manage Maven versions, and bind a Java runtime per project. | 5 | Version management (JDK); Maven versions; Command-line switching; Projects; Compatibility Notes | JDK, SDKMAN, Maven, .flyenv | /guide/set-up-java-development-environment, /solutions/spring-boot |
| go | Local Go Development with FlyEnv | Go Version Manager and Project Runtimes | Install and switch Go versions with static builds, Homebrew or GVM, and run Go projects with per-project runtimes. | 4 | Version management (含 GVM); Command-line switching; Projects; Compatibility Notes | GVM, Version Manager, .flyenv, Projects | /guide/deploy-nodejs-python-go-without-docker, /guide/project-level-runtime-environment |
| ruby | Local Ruby Development with FlyEnv | Ruby Version Manager for Local Development | Install and switch Ruby versions, set the terminal ruby binary, and run Ruby projects with per-project runtimes. | 3 | Version management; Command-line switching; Projects; Compatibility Notes | Ruby, Version Manager, Projects, PATH | /guide/project-level-runtime-environment, /download |
| rust | Local Rust Development with FlyEnv | Rust Toolchain Manager for Local Development | Install Rust toolchains, switch the active cargo and rustc with rustup or PATH, and run Rust projects locally. | 3 | Version management (rustup); Command-line switching; Projects; Compatibility Notes | rustup, Version Manager, PATH, Projects | /guide/project-level-runtime-environment, /download |
| dotnet | Local .NET Development with FlyEnv | .NET SDK Manager for Local Development | Install and switch .NET SDK versions and bind a runtime to each project in FlyEnv. | 3 | Version management; Command-line switching; Projects; Compatibility Notes | .NET, Version Manager, PATH, Projects | /guide/project-level-runtime-environment, /download |
| zig | Local Zig Development with FlyEnv | Zig Version Manager for Local Development | Install and switch Zig versions from static builds, Homebrew or MacPorts, and scope one to each project. | 3 | Version management; Command-line switching; Projects; Compatibility Notes | Zig, Homebrew, Projects | /guide/project-level-runtime-environment, /download |
| bun | Local Bun Development with FlyEnv | Bun Version Manager and Project Runtimes | Install Bun versions from static builds, switch the active binary, and run Bun projects as managed services. | 3 | Version management (Static only); Command-line switching; Projects; Compatibility Notes | Bun, Static, Projects | /guide/project-level-runtime-environment, /download |
| deno | Local Deno Development with FlyEnv | Deno Version Manager and Project Runtimes | Install Deno versions from static builds or Homebrew, switch the active binary, and run Deno projects locally. | 3 | Version management; Command-line switching; Projects; Compatibility Notes | Deno, Homebrew, Projects | /guide/project-level-runtime-environment, /download |
| erlang | Local Erlang Development with FlyEnv | Erlang/OTP Version Manager for Local Development | Install Erlang/OTP versions from Homebrew, MacPorts or static builds, and bind one to each project. | 3 | Version management; Command-line switching; Projects; Compatibility Notes | Erlang, Homebrew, MacPorts | /guide/project-level-runtime-environment, /download |
| gradle | Gradle Version Management with FlyEnv | Gradle Version Manager with SDKMAN Support | Install and switch Gradle versions from static builds, Homebrew, MacPorts or SDKMAN, and set the terminal default. | 2 | Version management; Command-line switching; Compatibility Notes（无 Projects 标签页，如实说明） | Gradle, SDKMAN, Version Manager | /guide/set-up-java-development-environment, /download |

首页 href 改动（批次 3）：Python `/guide/deploy-nodejs-python-go-without-docker`→`/features/python`；Java `/guide/set-up-java-development-environment`→`/features/java`；Go/Erlang/Ruby/Rust/.NET/Zig/Bun/Deno/Flutter/Gradle 的 `/demos`→对应 `/features/<slug>`（注意 Flutter/Gradle 属于批次 4 的页面，但其 href 也在 languages 类目，统一在本步改；对应页面在批次 4 创建）。

**批次 4（原型 B + H，Flutter 与特殊集成 4 页）**：

| slug | H1 | title | description | N图 | sections | terms | links |
|---|---|---|---|---|---|---|---|
| flutter | Flutter Development with FlyEnv | Flutter SDK Manager, Doctor and Android Toolchain | Manage Flutter SDK versions, run Flutter Doctor, create and edit projects, and fix your Android toolchain in FlyEnv. | 6 | Version management; SDK status and Doctor; Command Center; Project creation and editing; Android toolchain; Compatibility Notes | Flutter, doctor, Android SDK, pub | /guide/project-level-runtime-environment, /download |
| podman | Podman Container Management with FlyEnv | Podman Machines, Compose and Containers | Manage Podman machines, generate Compose stacks, and pull images and run containers from FlyEnv. | 5 | Machine management; Compose projects and stack generator; Images; Containers; Compatibility Notes | Podman, machine, Compose, Image, Container | /guide/podman-module, /download |
| cloudflared | Cloudflared in FlyEnv | Cloudflared Binary Manager | Install and switch cloudflared versions and keep the binary on your PATH for the Cloudflare Tunnel module. | 2 | Version management; Command-line switching; Relationship to Cloudflare Tunnel; Compatibility Notes | cloudflared, Homebrew, PATH | /features/cloudflare-tunnel, /guide/cloudflare-tunnel-local-development |
| cloudflare-tunnel | Cloudflare Tunnel with FlyEnv | Cloudflare Tunnel Manager for Local Sites | Create Cloudflare-managed tunnels, map public hostnames to local services, and inspect per-tunnel logs in FlyEnv. | 4 | Tunnel setup (API Token/Account/Zone); DNS rules to local services; Logs; Compatibility Notes | Cloudflare Tunnel, API Token, CNAME, ingress | /guide/cloudflare-tunnel-local-development, /features/local-sites-https |

首页 href 改动（批次 4）：Podman `/guide/podman-module`→`/features/podman`；Cloudflared `/demos`→`/features/cloudflared`；Cloudflare Tunnel `/guide/cloudflare-tunnel-local-development`→`/features/cloudflare-tunnel`。

**批次 5（原型 C，Web 服务器 5 页）**：

| slug | H1 | title | description | N图 | sections | terms | links |
|---|---|---|---|---|---|---|---|
| nginx | Nginx in FlyEnv | Nginx Version Manager and Local Site Server | Install and switch Nginx versions, edit nginx.conf visually, and serve local sites with rewrite rules and reverse proxies. | 5 | Version management; Service management; Configuration (visual + raw); Site integration; Logs; Compatibility Notes | nginx.conf, gzip, reverse proxy, vhost | /features/local-sites-https, /guide/reverse-proxy-nestjs-multi-servers |
| apache | Apache in FlyEnv | Apache Version Manager and Local Site Server | Run Apache from Homebrew, MacPorts or static builds, edit per-version config, and serve local sites. | 4 | Version management; Service management; Configuration; Site integration; Logs; Compatibility Notes（macOS/Linux 无 Static 源） | httpd, KeepAlive, vhost, Homebrew | /features/local-sites-https, /guide/parse-html-as-php-multi-servers |
| caddy | Caddy in FlyEnv | Caddy Version Manager with Automatic HTTPS | Run Caddy with a managed Caddyfile, per-site ports, automatic internal HTTPS and reverse proxies. | 4 | Version management; Service management (`--watch` auto-reload); Configuration; Site integration; Logs; Compatibility Notes | Caddyfile, watch, reverse proxy | /features/local-sites-https, /download |
| tomcat | Tomcat in FlyEnv | Tomcat Version Manager and Java Site Hosting | Run Tomcat versions with per-version CATALINA_BASE, edit server.xml and web.xml, and host Java sites directly. | 5 | Version management; Service management (CATALINA_BASE, JAVA_HOME); Configuration (server.xml/web.xml); Site integration (Tomcat host entries in server.xml); Logs; Compatibility Notes | CATALINA_BASE, server.xml, web.xml, Java | /features/local-sites-https, /solutions/spring-boot |
| frankenphp | FrankenPHP in FlyEnv | FrankenPHP Version Manager and PHP App Server | Run FrankenPHP versions and serve PHP sites directly with per-site ports and automatic HTTPS, no PHP-FPM required. | 4 | Version management; Service management; Configuration (Caddyfile; Windows php.ini); Site integration (php_server vhosts); Logs; Compatibility Notes | FrankenPHP, Caddyfile, php_server | /features/php, /guide/deploy-php-projects-without-docker |

首页 href 改动（批次 5）：FrankenPHP `/guide/deploy-php-projects-without-docker`→`/features/frankenphp`；Nginx/Apache/Caddy/Tomcat `/guide/host`→对应 `/features/<slug>`。

**批次 6（原型 D，数据库 7 页）**：

| slug | H1 | title | description | N图 | sections | terms | links |
|---|---|---|---|---|---|---|---|
| mysql | Local MySQL Development with FlyEnv | Local MySQL Server with Version Manager | Run MySQL versions with visual config, logs, phpMyAdmin, database management and multi-instance groups. | 7 | Version management; Service and configuration (visual form); Logs (error + slow); phpMyAdmin; Manage drawer (databases/root password/mysqldump backup); Group multi-instance; Compatibility Notes | mysqld, phpMyAdmin, Group, mysqldump, slow | /guide/database-user-password, /solutions/laravel |
| mariadb | Local MariaDB Development with FlyEnv | Local MariaDB Server with Version Manager | Run MariaDB versions with visual config, logs, phpMyAdmin and database management tools. | 5 | Version management; Service and configuration; Logs; phpMyAdmin; Manage drawer; Compatibility Notes | mariadbd, phpMyAdmin, MacPorts | /guide/database-user-password, /download |
| postgresql | Local PostgreSQL Development with FlyEnv | Local PostgreSQL Server with pgAdmin 4 | Run PostgreSQL versions with a managed data directory, automatic initdb, pgAdmin 4 and pgvector extension install. | 5 | Version management; Service and data directory; Configuration; Logs; pgAdmin 4; pgvector extension; Compatibility Notes | pgAdmin, initdb, data directory, pgvector | /guide/database-user-password, /solutions/django |
| mongodb | Local MongoDB Development with FlyEnv | Local MongoDB Server with DbGate UI | Run MongoDB versions with a managed config and data directory, plus a one-click DbGate web UI. | 4 | Version management; Service and configuration; Logs; DbGate; Compatibility Notes | mongod, DbGate, mongosh | /guide/database-user-password, /solutions/strapi |
| clickhouse | Local ClickHouse Development with FlyEnv | Local ClickHouse Server with CH-UI | Run ClickHouse on macOS and Linux with managed config.xml/users.xml and a one-click CH-UI client. | 4 | Version management (Static only); Service and configuration; Logs; CH-UI; Compatibility Notes（仅 macOS/Linux，显著标注） | ClickHouse, CH-UI, 8123, macOS and Linux | /download, /demos |
| neo4j | Local Neo4j Development with FlyEnv | Local Neo4j Server with Browser and Java Binding | Run Neo4j versions bound to a compatible FlyEnv Java runtime, with managed config and Neo4j Browser. | 4 | Version management (≥5.23.0, Static only); Java version binding; Service and configuration; Logs; Neo4j Browser; Compatibility Notes | Neo4j, Java, 7687, Browser | /download, /demos |
| qdrant | Local Qdrant Development with FlyEnv | Local Qdrant Vector Database with Dashboard | Run Qdrant versions with a managed config and the built-in web dashboard for local vector search. | 3 | Version management (Static only); Service and configuration; Logs; Dashboard; Compatibility Notes | Qdrant, 6333, dashboard | /download, /demos |

首页 href 改动（批次 6）：MySQL/PostgreSQL/MariaDB/MongoDB `/guide/database-user-password`→对应 `/features/<slug>`；Qdrant/ClickHouse/Neo4j `/demos`→对应 `/features/<slug>`。

**批次 7（原型 E 前半，9 页）**：

| slug | H1 | title | description | N图 | sections | terms | links |
|---|---|---|---|---|---|---|---|
| redis | Local Redis Development with FlyEnv | Local Redis Server with Redis Commander UI | Run Redis versions with visual config, logs, and a one-click Redis Commander web UI. | 4 | Version management; Service and configuration (visual: port/requirepass/maxmemory…); Logs; Redis Commander; Compatibility Notes | redis-server, Redis Commander, requirepass, maxmemory | /guide/getting-started, /solutions/laravel |
| memcached | Memcached in FlyEnv | Local Memcached Service Manager | Install and run Memcached versions from Homebrew, MacPorts or static builds with one click. | 2 | Version management; Service management; Compatibility Notes（无配置文件与日志，如实说明；默认端口 11211） | memcached, 11211 | /download, /demos |
| rabbitmq | RabbitMQ in FlyEnv | Local RabbitMQ Server with Management UI | Run RabbitMQ versions with managed config, the management plugin UI, and per-version logs. | 4 | Version management; Service and configuration; Management UI (15672); Logs; Compatibility Notes（Windows 依赖 Erlang） | RabbitMQ, 15672, management, Erlang | /download, /demos |
| elasticsearch | Elasticsearch in FlyEnv | Local Elasticsearch with Version and Config Manager | Run Elasticsearch versions and edit elasticsearch.yml, jvm.options and log4j2.properties per version. | 4 | Version management (Static only); Service management; Configuration (三个文件); Logs; Compatibility Notes | elasticsearch.yml, jvm.options, 9200 | /download, /demos |
| meilisearch | Meilisearch in FlyEnv | Local Meilisearch Server with Visual Config | Run Meilisearch versions with a rich visual config form, per-version data directory and the search dashboard. | 4 | Version management; Service and configuration (visual form ~30 项); Dashboard (7700); Logs; Compatibility Notes | Meilisearch, 7700, meilisearch.toml, dashboard | /download, /demos |
| typesense | Typesense in FlyEnv | Local Typesense Server for macOS and Linux | Run Typesense versions on macOS and Linux with a managed config file and logs. | 3 | Version management; Service and configuration; Logs; Compatibility Notes（仅 macOS/Linux，显著标注） | Typesense, 8108, macOS and Linux | /download, /demos |
| zincsearch | ZincSearch in FlyEnv | Local ZincSearch Server with Web UI | Run ZincSearch versions with env-based config and the built-in web UI on port 4080. | 3 | Version management (Static only); Service and configuration; Web UI; Logs; Compatibility Notes | ZincSearch, 4080 | /download, /demos |
| mailpit | Local Email Testing with FlyEnv | Local Email Testing with Mailpit SMTP and Web UI | Capture outgoing email locally with Mailpit: SMTP on 1025, web UI on 8025, visual config and logs. | 4 | Version management; Service and configuration (visual ~45 项 MP_*); Web UI; Logs; Compatibility Notes | Mailpit, 1025, 8025, SMTP | /guide/local-email-testing-mailpit, /solutions/laravel |
| minio | Local Object Storage with FlyEnv | Local S3-Compatible Object Storage with MinIO | Run MinIO versions with visual config, per-version data directory and the MinIO Console on 9001. | 4 | Version management; Service and configuration (visual ~30 项); MinIO Console; Logs; Compatibility Notes | MinIO, Console, 9001, S3-compatible | /download, /demos |

首页 href 改动（批次 7）：Redis/Memcached/RabbitMQ/Elasticsearch/Meilisearch/Typesense/ZincSearch/Mailpit `/demos`→对应 `/features/<slug>`；Minio `/demos`→`/features/minio`。

**批次 8（原型 E 后半，9 页）**：

| slug | H1 | title | description | N图 | sections | terms | links |
|---|---|---|---|---|---|---|---|
| rustfs | Local RustFS Object Storage with FlyEnv | Local S3-Compatible Object Storage with RustFS | Run RustFS versions with visual config, per-version data directory and the RustFS console. | 4 | Version management (Static only); Service and configuration (visual ~19 项); Console; Logs; Compatibility Notes | RustFS, S3-compatible, console | /download, /demos |
| consul | Consul in FlyEnv | Local Consul Service Discovery with Web UI | Run Consul versions as a local server agent with a managed data directory and the built-in web UI. | 4 | Version management; Service and configuration (data dir editable); Web UI (8500); Logs; Compatibility Notes | Consul, 8500, data directory | /download, /demos |
| etcd | Etcd in FlyEnv | Local etcd Key-Value Store Manager | Run etcd versions with a managed etcd.yaml and per-version logs on ports 2379/2380. | 3 | Version management; Service and configuration; Logs; Compatibility Notes | etcd, 2379, etcd.yaml | /download, /demos |
| r-nacos | R-NACOS in FlyEnv | Local R-NACOS Service Discovery Console | Run R-NACOS versions with env-based config and the built-in console for service discovery and configuration. | 3 | Version management (含 Homebrew tap); Service and configuration; Console (10848); Logs; Compatibility Notes | R-Nacos, 8848, console | /download, /demos |
| temporal | Local Temporal Development with FlyEnv | Local Temporal Server with Web UI | Run a SQLite-backed local Temporal server with auto-created namespaces and a managed Web UI. | 5 | Version management; Service and configuration (Server/UI 双配置); Temporal Web UI (按需下载 ui-server); Logs (4 个); Compatibility Notes（另说明 Temporal CLI 的 start-dev 模式） | Temporal, 7233, namespace, SQLite | /download, /demos |
| numa | Numa DNS in FlyEnv | Local DNS Server and Ad-Blocking with Numa | Run Numa as a local DNS server with a web UI, ad-blocking lists and upstream forwarding. | 4 | Version management; Service and configuration (numa.toml); Web UI (5380); Logs; Compatibility Notes | Numa, DNS, 5380, ad-blocking | /features/dns-server, /download |
| ollama | Run Ollama Locally with FlyEnv | Run Ollama Locally with Model Management | Install and run Ollama versions, pull and run models from the library, and tune OLLAMA_* settings visually. | 5 | Version management; Service and configuration (visual); Model management (local list + online library + pull/run in terminal); Logs; Compatibility Notes | Ollama, Model, 11434, pull | /guide/build-local-offline-ai-agent, /features/n8n |
| n8n | Local n8n Automation with FlyEnv | Local n8n Automation Server with User Management | Install n8n versions via npm, run the server with managed env config, and manage users directly. | 5 | Version management (npm 安装，需 Node.js); Service and configuration (n8n.env 可视化); Users management (SQLite); Dashboard; Logs; Compatibility Notes | n8n, 5678, npm, Users | /guide/build-local-ai-workflow-by-n8n, /features/ollama |
| cliproxyapi | CLIProxyAPI in FlyEnv | CLIProxyAPI Local AI Gateway Manager | Run CLIProxyAPI versions as a local AI gateway with managed config.yaml, env backends and a management UI. | 4 | Version management; Service and configuration (config.yaml + Env 标签页); Management UI (8317); Logs; Compatibility Notes | CLIProxyAPI, 8317, management | /download, /demos |

首页 href 改动（批次 8）：RustFS/R-NACOS/Consul/Etcd/Temporal `/demos`→对应 `/features/<slug>`；Numa `/demos`→`/features/numa`；n8n `/guide/build-local-ai-workflow-by-n8n`→`/features/n8n`；Ollama `/guide/build-local-offline-ai-agent`→`/features/ollama`；CLIProxyAPI `/demos`→`/features/cliproxyapi`。

**批次 9（原型 F，AI CLI 客户端 8 页）**。所有页必须写明：非后台服务；安装在内嵌终端执行官方脚本；会话在外部系统终端中运行。

| slug | H1 | title | description | N图 | sections | terms | links |
|---|---|---|---|---|---|---|---|
| claude-code | Claude Code in FlyEnv | Claude Code Manager: Sessions, Plugins and MCP | Install Claude Code, edit settings visually, resume sessions, manage plugins and MCP servers from FlyEnv. | 5 | Installation; Configuration (visual settings.json); Sessions; Plugins (含 marketplace); MCP servers; Compatibility Notes | Claude Code, Plugins, Sessions, MCP | /guide/flyenv-work-with-ai, /features/mcp-server |
| codex | Codex CLI in FlyEnv | Codex CLI Manager: Sessions, Plugins and MCP | Install Codex, edit config.toml visually, resume sessions, and manage plugins and MCP servers from FlyEnv. | 4 | Installation; Configuration (visual config.toml); Sessions; Plugins; MCP servers; Compatibility Notes | Codex, config.toml, Sessions, MCP | /guide/flyenv-work-with-ai, /features/mcp-server |
| opencode | OpenCode in FlyEnv | OpenCode Manager: Sessions, Stats and Providers | Install OpenCode, edit its config, browse sessions, review model stats and providers from FlyEnv. | 4 | Installation; Configuration (raw JSONC); Sessions; Stats; Providers; MCP servers; Compatibility Notes | OpenCode, Stats, Providers, Sessions | /guide/flyenv-work-with-ai, /features/mcp-server |
| kimi | Kimi CLI in FlyEnv | Kimi CLI Manager: Sessions, Logs and MCP | Install Kimi CLI, edit config visually, resume and export sessions, read logs and manage MCP servers. | 4 | Installation; Configuration (visual config.toml); Sessions (含 export); Logs; MCP servers (HTTP/SSE); Compatibility Notes | Kimi, Sessions, export, MCP | /guide/flyenv-work-with-ai, /features/mcp-server |
| antigravity-cli | Antigravity CLI in FlyEnv | Antigravity CLI Manager: Sessions and Skills | Install Antigravity CLI, edit settings visually, resume conversations, and browse skills with Markdown preview. | 4 | Installation; Configuration (visual); Sessions; Skills (含 Markdown 预览); MCP servers; Compatibility Notes | Antigravity, Skills, agy, Sessions | /guide/flyenv-work-with-ai, /features/mcp-server |
| github-copilot-cli | GitHub Copilot CLI in FlyEnv | GitHub Copilot CLI Manager: Sessions and Skills | Install GitHub Copilot CLI via npm, edit config, resume sessions, and manage skills and MCP servers. | 4 | Installation; Configuration (raw JSON); Sessions; Skills; MCP servers; Compatibility Notes | Copilot, Skills, Sessions, npm | /guide/flyenv-work-with-ai, /features/mcp-server |
| openclaw | OpenClaw in FlyEnv | OpenClaw Gateway and Command Center | Install OpenClaw, manage its gateway as an OS service, and run its command palette from FlyEnv. | 3 | Installation; Gateway management; Command palette (~110 命令); Configuration; Compatibility Notes | OpenClaw, gateway, command | /guide/openclaw, /download |
| hermes-agent | Hermes Agent in FlyEnv | Hermes Agent Gateway, Skills and Sessions | Install Hermes, manage its gateway, browse and install skills from multiple sources, and manage sessions. | 4 | Installation; Gateway management; Configuration (config.yaml/.env/SOUL.md); Skills (在线浏览多来源); Sessions; Logs; Compatibility Notes | Hermes, gateway, Skills, Sessions | /guide/flyenv-work-with-ai, /download |

首页 href 改动（批次 9）：Claude Code/Codex/OpenCode/Kimi/Antigravity CLI/GitHub Copilot CLI/Hermes Agent/OpenClaw `/guide/flyenv-work-with-ai`→对应 `/features/<slug>`（OpenClaw 当前是 `/guide/flyenv-work-with-ai`，同样改）。

**批次 10（原型 G，内建能力 8 页）**：

| slug | H1 | title | description | N图 | sections | terms | links |
|---|---|---|---|---|---|---|---|
| mcp-server | FlyEnv MCP Server | FlyEnv MCP Server for AI Coding Tools | Expose your local environment to AI coding tools over Streamable HTTP with per-tool policies and an audit log. | 5 | Service options (host/port/token/auto-start); Client Config (6 个 CLI 一键注册); Tools (18 个工具 + 审批策略); Audit Log; Compatibility Notes（需 FlyEnv 运行中） | MCP, Streamable HTTP, 7682, Audit Log, Tools | /guide/ai-coding-workspace-mcp, /features/claude-code |
| dns-server | Built-in DNS Server in FlyEnv | Built-in DNS Server for Local Domains | Resolve all FlyEnv site domains without editing the hosts file using the built-in DNS server on port 53. | 3 | How resolution works (站点域名 + hosts + 静态映射 + 上游转发); Live query log; Configuration (bind IP, dns.json); Compatibility Notes | DNS, port 53, hosts, query | /features/local-sites-https, /guide/host |
| ftp-server | FTP Server in FlyEnv | Local FTP Server with Account Management | Run a local FTP server with managed accounts: Pure-FTPd on macOS/Linux or the built-in ftp-srv everywhere. | 4 | 两种实现及平台差异; Account management (用户名/密码/根目录); Configuration (pure-ftpd.conf); Compatibility Notes | Pure-FTPd, ftp-srv, account, port 21 | /download, /guide/host |
| startup-groups | Startup Groups in FlyEnv | Startup Groups: Start Your Stack Together | Group services and project runtimes into ordered startup groups, with a default group, tray control and auto-start. | 3 | Creating groups (成员类型); Ordered start/stop; Default group + auto-start + tray; Compatibility Notes | Startup Groups, default group, tray | /guide/getting-started, /features |
| cron-jobs | Cron Jobs in FlyEnv | Cron Jobs with System Scheduler Integration | Schedule commands with real OS schedulers (crontab / Task Scheduler), run history, and a system task overview. | 4 | Creating jobs (表达式校验 + 预设); OS scheduler integration; Run history and run-now; System Tasks 标签页; Compatibility Notes | cron, crontab, Task Scheduler, run history | /guide/getting-started, /download |
| per-project-runtimes | Per-Project Runtimes in FlyEnv | Per-Project Runtimes and Environment Isolation | Bind each project to its own runtime version; terminals and IDEs inherit it via the .flyenv file and shell hook. | 4 | How .flyenv works; Shell hook (zsh/bash/PowerShell); IDE and terminal integration; Per-site version selection; Compatibility Notes | .flyenv, shell hook, PATH, IDE | /guide/project-level-runtime-environment, /features/php |
| user-modules | Custom Modules in FlyEnv | Custom Modules: Define Your Own Services | Turn any command or script into a managed FlyEnv module with its own sidebar entry, config and log viewers. | 4 | Creating a module (Settings → Modules); Exec items (command/file, sudo, pid); Config and log tabs; Compatibility Notes | custom module, sudo, pid | /guide/user-customizable-modules, /download |
| cli-terminal | Terminal Integration in FlyEnv | Terminal and Shell Integration | FlyEnv meets your terminal: shell hooks for project environments, open-in-terminal actions and embedded terminals. | 3 | Shell hook and PATH integration; Open in Terminal (macOS AppleScript/Linux script/Windows PowerShell); Embedded xterm terminals; System environment variables tool; Compatibility Notes | terminal, shell, PowerShell, environment variables | /guide/setup-system-path-environment, /features/per-project-runtimes |

首页 href 改动（批次 10）：MCP Server `/guide/ai-coding-workspace-mcp`→`/features/mcp-server`；Startup Groups `/guide/getting-started`→`/features/startup-groups`；Per-Project Runtimes `/guide/project-level-runtime-environment`→`/features/per-project-runtimes`；Cron Jobs `/guide/getting-started`→`/features/cron-jobs`；User Modules `/guide/user-customizable-modules`→`/features/user-modules`；CLI & Terminal `/guide/code-playground-and-code-library`→`/features/cli-terminal`；DNS Server `/demos`→`/features/dns-server`；FTP Server `/demos`→`/features/ftp-server`。

**同时在本批次修改 `tests/features-page.test.mjs`**：`links users to verified workflows` 断言数组中的 `'/guide/ai-coding-workspace-mcp'` 替换为 `'/features/mcp-server'`（该链接从首页消失；`/guide/getting-started`、`/demos`、`/download` 仍存在于底部 CTA）。

---

### Task 11: 全量验证

**Files:** 无改动，仅验证。

- [ ] **Step 1: 全量测试**

Run: `node --test 'tests/*.test.mjs'`
Expected: 64 个 feature 页契约测试全 PASS；仅 3 个既有 community 相关失败保持不变。

- [ ] **Step 2: 生产构建**

Run: `yarn docs:build`
Expected: 构建成功，无 dead link 报错。

- [ ] **Step 3: 抽查构建产物**

Run（构建后）:
```bash
for p in python mysql mcp-server claude-code; do
  f="docs/.vitepress/dist/features/$p.html"
  grep -c '<link rel="canonical" href="https://www.flyenv.com/features/'$p'">' "$f"
done
```
Expected: 每个输出 1。

- [ ] **Step 4: 最终 Commit（如有修复）**

```bash
git add -A docs/features docs/features.md tests
git commit -m "docs: complete feature pages rollout"
```

---

## Self-Review 记录

- **Spec 覆盖**：61 页 = 批次 3(11) + 4(4) + 5(5) + 6(7) + 7(9) + 8(9) + 9(8) + 10(8) = 61 ✓；许可证禁令（Task 2 + 测试负向断言 + 写作者规则 2）✓；首页 href 更新每批列出 ✓；features-page.test.mjs 断言修复在批次 10 ✓；调研工件引用在全局规则 1 ✓。
- **占位符扫描**：写作者 prompt 模板完整；每页 title/description/H1/图片数/节/术语/链接均在批次表中给出，无 TBD。
- **一致性**：manifest（Task 1）的 terms/minImages 与各批次表逐页一致；slug 与 canonical 一致；Flutter/Gradle 的 href 在批次 3 改、页面在批次 4 建，已注明。
