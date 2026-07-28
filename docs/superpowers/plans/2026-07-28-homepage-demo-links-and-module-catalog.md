# Homepage Demo Links and Module Catalog Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (- [ ]) syntax for tracking.

**Goal:** Link the four existing localized Core Modules cards to their matching demos and replace the short What Is FlyEnv capability tables with the complete supported-module catalog.

**Architecture:** Convert only the Qdrant, ClickHouse, Elasticsearch, and Temporal cards in the existing locale-specific AppModules components to the linked-video anchor pattern. Replace the two localized Markdown capability tables in place; do not add routes, components, or a Temporal CLI card.

**Tech Stack:** Vue 3 single-file components, VitePress Markdown, Tailwind CSS, Node.js built-in test runner.

---

### Task 1: Add failing coverage for all localized demo cards

**Files:**
- Modify: tests/homepage-core-modules.test.mjs
- Test: tests/homepage-core-modules.test.mjs

- [ ] **Step 1: Replace the existing expectCard helper and four tests with this code**

~~~js
function escapeRegExp(value) {
  return value.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')
}

function expectVideoCard(source, card) {
  const moduleClass = escapeRegExp('shrink-0 select-text text-[#3c3c43] dark:text-[#dfdff6]')
  const pattern =
    '<a\\s+title="' +
    escapeRegExp(card.title) +
    '"\\s+href="' +
    escapeRegExp(card.href) +
    '"\\s+target="_blank"\\s+' +
    'class="group hover:scale-105 transition-all duration-300 relative no-underline overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"\\s*>' +
    '[\\s\\S]*?<span class="' +
    escapeRegExp(card.categoryClass) +
    '">' +
    escapeRegExp(card.category) +
    '</span>' +
    '[\\s\\S]*?<div class="' +
    escapeRegExp(card.iconClass) +
    '">\\s*<img src="../SVG/' +
    escapeRegExp(card.icon) +
    '.svg" />' +
    '[\\s\\S]*?<span class="' +
    moduleClass +
    '">' +
    escapeRegExp(card.moduleName) +
    '</span>' +
    '[\\s\\S]*?<SVGUse class="w-16 opacity-20 transition-all duration-300 group-hover:opacity-65" :svg="import(\\'../SVG/play.svg\\?raw\\')" />'

  assert.match(source, new RegExp(pattern))
}

const englishCards = [
  ['Native Local ClickHouse in 2 Minutes (No Docker, No Config) - FlyEnv', 'https://youtu.be/3ePJYddWYmQ', 'Database', 'ClickHouse', 'aspect-square flex shrink-0 overflow-hidden items-center justify-center w-full p-4', 'ClickHouse'],
  ['Temporal Local Development in One Click — FlyEnv Native Service', 'https://youtu.be/E_jetPnVxBo', 'Service Governance', 'Temporal', 'aspect-square flex shrink-0 overflow-hidden items-center justify-center w-full p-4', 'Temporal', true],
  ['Elasticsearch Local Setup with FlyEnv | Versions, Logs, and Service Controls', 'https://youtu.be/B9Eo2Y-aXWQ', 'Search Engine', 'Elasticsearch', 'aspect-square flex shrink-0 overflow-hidden items-center justify-center w-full p-6', 'Elasticsearch'],
  ['Qdrant Local Setup in FlyEnv | Versions, Config, Logs, and Dashboard', 'https://youtu.be/ahetMNLLS7s', 'Database', 'qdrant', 'aspect-square w-full flex shrink-0 overflow-hidden items-center justify-center p-4', 'Qdrant']
]

const chineseCards = [
  ['不用 Docker，在本地一键跑起 ClickHouse - FlyEnv 原生本地环境', 'https://www.bilibili.com/video/BV1S43w6QEvS/', '数据库', 'ClickHouse', 'aspect-square flex shrink-0 overflow-hidden items-center justify-center w-full p-4', 'ClickHouse'],
  ['不用 Docker，本地一键运行 Temporal — FlyEnv 原生本地环境', 'https://www.bilibili.com/video/BV1TD3c67Eei/', '服务治理', 'Temporal', 'aspect-square flex shrink-0 overflow-hidden items-center justify-center w-full p-4', 'Temporal', true],
  ['Elasticsearch 本地一键配置｜FlyEnv 演示', 'https://www.bilibili.com/video/BV1if3P6BEBR/', 'Search Engine', 'Elasticsearch', 'aspect-square flex shrink-0 overflow-hidden items-center justify-center w-full p-6', 'Elasticsearch'],
  ['Qdrant 本地一键配置｜FlyEnv 演示', 'https://www.bilibili.com/video/BV16Q3P6VEPA/', '数据库', 'qdrant', 'aspect-square w-full flex shrink-0 overflow-hidden items-center justify-center p-4', 'Qdrant']
]

function toCard(values) {
  return {
    title: values[0],
    href: values[1],
    category: values[2],
    icon: values[3],
    iconClass: values[4],
    moduleName: values[5],
    categoryClass: values[6]
      ? 'shrink-0 select-text truncate text-[#3c3c43] dark:text-[#dfdff6]'
      : 'shrink-0 select-text text-[#3c3c43] dark:text-[#dfdff6]'
  }
}

for (const values of englishCards) {
  const card = toCard(values)
  test('English Core Modules links ' + card.moduleName + ' to its demo', () => {
    expectVideoCard(sourceFile('docs/components/AppModules/index.vue'), card)
  })
}

for (const values of chineseCards) {
  const card = toCard(values)
  test('Chinese Core Modules links ' + card.moduleName + ' to its demo', () => {
    expectVideoCard(sourceFile('docs/components/AppModules/zh.vue'), card)
  })
}
~~~

- [ ] **Step 2: Run the focused test to prove the new contract is red**

Run: node --test tests/homepage-core-modules.test.mjs

Expected: FAIL. All eight assertions report that the current static div cards lack the expected anchor, title, external link, and play overlay.

### Task 2: Convert the eight cards to the localized linked-video pattern

**Files:**
- Modify: docs/components/AppModules/index.vue:127-144,369-377,675-682
- Modify: docs/components/AppModules/zh.vue:127-144,369-377,675-682
- Test: tests/homepage-core-modules.test.mjs

- [ ] **Step 1: Convert each English static div to this ClickHouse anchor pattern**

~~~vue
<a
  title="Native Local ClickHouse in 2 Minutes (No Docker, No Config) - FlyEnv"
  href="https://youtu.be/3ePJYddWYmQ"
  target="_blank"
  class="group hover:scale-105 transition-all duration-300 relative no-underline overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
>
  <span class="shrink-0 select-text text-[#3c3c43] dark:text-[#dfdff6]">Database</span>
  <div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center w-full p-4">
    <img src="../SVG/ClickHouse.svg" />
  </div>
  <span class="shrink-0 select-text text-[#3c3c43] dark:text-[#dfdff6]">ClickHouse</span>
  <div class="absolute inset-0 flex items-center justify-center z-20">
    <SVGUse class="w-16 opacity-20 transition-all duration-300 group-hover:opacity-65" :svg="import('../SVG/play.svg?raw')" />
  </div>
</a>
~~~

Apply the same markup to Qdrant, Elasticsearch, and Temporal, using the exact English values in the englishCards list in Task 1. Preserve their existing icon container classes. The Temporal category class is shrink-0 select-text truncate text-[#3c3c43] dark:text-[#dfdff6].

- [ ] **Step 2: Convert each Chinese static div to the same anchor pattern**

Apply the markup above in docs/components/AppModules/zh.vue to Qdrant, ClickHouse, Elasticsearch, and Temporal. Use the exact Chinese titles, Bilibili URLs, categories, icons, and icon classes in the chineseCards list in Task 1. The Temporal category class is shrink-0 select-text truncate text-[#3c3c43] dark:text-[#dfdff6].

- [ ] **Step 3: Run the focused test to prove the card implementation is green**

Run: node --test tests/homepage-core-modules.test.mjs

Expected: PASS with 8 passing subtests and 0 failures.

- [ ] **Step 4: Commit the isolated card change**

~~~bash
git add docs/components/AppModules/index.vue docs/components/AppModules/zh.vue tests/homepage-core-modules.test.mjs
git commit -m "docs: link core module demos"
~~~

### Task 3: Add failing coverage for the two complete module catalogs

**Files:**
- Modify: tests/homepage-core-modules.test.mjs
- Test: tests/homepage-core-modules.test.mjs

- [ ] **Step 1: Append these catalog assertions**

~~~js
function expectDocumentIncludes(path, terms) {
  const source = sourceFile(path)
  for (const term of terms) {
    assert.ok(source.toLowerCase().includes(term.toLowerCase()), path + ' should include ' + term)
  }
}

test('English What Is FlyEnv page lists the full on-demand module catalog', () => {
  expectDocumentIncludes('docs/guide/what-is-flyenv.md', [
    'install only the software you need',
    'AI Coding & MCP',
    'AI Integration & Automation',
    'Containers',
    'Network Tunnel',
    'Web Servers',
    'Databases',
    'Email Server',
    'Programming Languages & Runtime',
    'Cache & Message Queue',
    'Service Governance',
    'Search Engine',
    'Object Storage',
    'Automation & Scheduling',
    'Utilities',
    'Custom modules',
    'All modules support multi-version co-existence',
    'Custom modules can be added as services or commands',
    'Custom domains, HTTPS/SSL, reverse proxy, logs, and site-level runtime settings',
    'FlyEnv MCP Server'
  ])
})

test('Chinese What Is FlyEnv page lists the full on-demand module catalog', () => {
  expectDocumentIncludes('docs/zh/guide/what-is-flyenv.md', [
    '只安装当前工作流需要的软件',
    'AI 编程与 MCP',
    'AI 集成与自动化',
    '容器',
    '网络隧道',
    'Web 服务器',
    '数据库',
    '邮件服务器',
    '编程语言与运行时',
    '缓存与消息队列',
    '服务治理',
    '搜索引擎',
    '对象存储',
    '自动化与调度',
    '实用工具',
    '自定义模块',
    '所有模块均支持多版本共存',
    '自定义模块可以作为服务或常用命令添加',
    '自定义域名、HTTPS/SSL、反向代理、日志和站点级运行时设置',
    'FlyEnv MCP Server'
  ])
})
~~~

- [ ] **Step 2: Run the focused test to prove the catalog contract is red**

Run: node --test tests/homepage-core-modules.test.mjs

Expected: FAIL. The two catalog tests identify the absent on-demand, multi-version, custom-module, and complete-category text.

### Task 4: Replace the short capability tables with localized supported-module catalogs

**Files:**
- Modify: docs/guide/what-is-flyenv.md:17-28
- Modify: docs/zh/guide/what-is-flyenv.md:17-28
- Test: tests/homepage-core-modules.test.mjs

- [ ] **Step 1: Replace the English content from its section heading to the video heading with this exact Markdown**

~~~md
## What FlyEnv Actually Does

FlyEnv lets you install only the software you need and manage it from one native desktop workspace:

| Module category | Supported modules |
| --- | --- |
| AI Coding & MCP | FlyEnv MCP Server, Claude Code, Codex, OpenCode, Kimi, Antigravity CLI, GitHub Copilot CLI |
| AI Integration & Automation | Hermes Agent, OpenClaw, n8n, Ollama, CliProxyAPI |
| Containers | Podman |
| Network Tunnel | Cloudflared, Cloudflare Tunnel |
| Web Servers | FrankenPHP, Apache, Nginx, Caddy, Tomcat |
| Databases | MySQL, MariaDB, PostgreSQL, MongoDB, Qdrant, ClickHouse |
| Email Server | Mailpit |
| Programming Languages & Runtime | .NET, Flutter, PHP, Composer, PHP-CLI, PHP-FPM, RoadRunner, Swoole CLI, Go, Node.js, Python, Java, Maven, Gradle, SDKMAN, Erlang, Ruby, Rust, Rustup, Bun, Deno, Zig |
| Cache & Message Queue | Redis, Memcached, RabbitMQ |
| Service Governance | Consul, Etcd, R-Nacos, Temporal, Temporal CLI |
| Search Engine | Elasticsearch, Meilisearch, Typesense, ZincSearch |
| Object Storage | RustFS, Minio |
| Automation & Scheduling | Cron Jobs |
| Utilities | Git, MkCert, DNS Server, FTP Server, Static HTTP Server |
| Custom modules | Custom modules can be added as services or commands and work like built-in modules. |

All modules support multi-version co-existence, so projects can use the versions they need without a separate manager for each runtime or service.

Alongside these modules, FlyEnv manages local sites with custom domains, HTTPS/SSL, reverse proxy, logs, and site-level runtime settings. It also brings AI coding clients and the FlyEnv MCP Server into the same workspace, giving AI clients structured access to managed services, sites, configs, logs, and selected actions.

Instead of stitching together Docker, version managers, shell aliases, host-file edits, and separate AI client setup, you work from one local desktop workspace.
~~~

- [ ] **Step 2: Replace the Chinese content from its section heading to the video heading with this exact Markdown**

~~~md
## FlyEnv 实际上能做什么

FlyEnv 让你只安装当前工作流需要的软件，并在一个原生桌面工作区中统一管理：

| 模块分类 | 支持的软件 |
| --- | --- |
| AI 编程与 MCP | FlyEnv MCP Server、Claude Code、Codex、OpenCode、Kimi、Antigravity CLI、GitHub Copilot CLI |
| AI 集成与自动化 | Hermes Agent、OpenClaw、n8n、Ollama、CliProxyAPI |
| 容器 | Podman |
| 网络隧道 | Cloudflared、Cloudflare Tunnel |
| Web 服务器 | FrankenPHP、Apache、Nginx、Caddy、Tomcat |
| 数据库 | MySQL、MariaDB、PostgreSQL、MongoDB、Qdrant、ClickHouse |
| 邮件服务器 | Mailpit |
| 编程语言与运行时 | .NET、Flutter、PHP、Composer、PHP-CLI、PHP-FPM、RoadRunner、Swoole CLI、Go、Node.js、Python、Java、Maven、Gradle、SDKMAN、Erlang、Ruby、Rust、Rustup、Bun、Deno、Zig |
| 缓存与消息队列 | Redis、Memcached、RabbitMQ |
| 服务治理 | Consul、Etcd、R-Nacos、Temporal、Temporal CLI |
| 搜索引擎 | Elasticsearch、Meilisearch、Typesense、ZincSearch |
| 对象存储 | RustFS、Minio |
| 自动化与调度 | Cron Jobs |
| 实用工具 | Git、MkCert、DNS Server、FTP Server、Static HTTP Server |
| 自定义模块 | 自定义模块可以作为服务或常用命令添加，并像内置模块一样工作。 |

所有模块均支持多版本共存，因此不同项目可以使用各自需要的运行时和服务版本，无需为每种软件分别维护版本管理工具。

除这些模块外，FlyEnv 还统一管理本地站点的自定义域名、HTTPS/SSL、反向代理、日志和站点级运行时设置；也把 AI 编程客户端和 FlyEnv MCP Server 放进同一工作区，让 AI 客户端能够结构化访问受管理的服务、站点、配置、日志和部分操作能力。

你不需要再把 Docker、版本管理器、shell 别名、hosts 修改和 AI 客户端配置拼成一套散乱流程，而是直接在一个本地桌面工作区里完成。
~~~

- [ ] **Step 3: Run the focused test to prove the documentation implementation is green**

Run: node --test tests/homepage-core-modules.test.mjs

Expected: PASS with 10 passing subtests and 0 failures.

- [ ] **Step 4: Build the VitePress site**

Run: yarn docs:build

Expected: exit code 0 and localized pages in docs/.vitepress/dist.

- [ ] **Step 5: Commit the catalog change**

~~~bash
git add docs/guide/what-is-flyenv.md docs/zh/guide/what-is-flyenv.md tests/homepage-core-modules.test.mjs
git commit -m "docs: expand supported module catalog"
~~~

## Plan self-review

- Spec coverage: Tasks 1-2 add exactly the four approved demo links in both locales, preserve the existing card treatment, and do not create a Temporal CLI card. Tasks 3-4 reproduce every README module category in both localized What Is FlyEnv sections and retain local-site, AI, and MCP explanations.
- Placeholder scan: complete; every URL, localized title, document string, file path, and verification command is specified.
- Consistency: the eight card contracts in Task 1 are the exact data used by Task 2. The catalog phrases asserted in Task 3 occur verbatim in Task 4.
