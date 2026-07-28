# What Is FlyEnv Module Demo Links Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (- [ ]) syntax for tracking.

**Goal:** Add the existing locale-specific AppModules video links to every matching module name in the two What Is FlyEnv supported-module tables.

**Architecture:** Keep the tables as Markdown. Replace only the 18 approved module names per locale with README-style Markdown links, using URLs already present in AppModules; all unlinked names, category labels, and explanatory content remain untouched.

**Tech Stack:** VitePress Markdown and Node.js built-in test runner.

---

### Task 1: Add failing tests for all table demo links

**Files:**
- Modify: tests/homepage-core-modules.test.mjs
- Test: tests/homepage-core-modules.test.mjs

- [ ] **Step 1: Append the exact link contract below**

~~~js
const englishModuleLinks = [
  ['OpenClaw', 'https://youtu.be/j7_B-VzIyEU'],
  ['n8n', 'https://youtu.be/YnA1B3qmDJU'],
  ['Ollama', 'https://youtu.be/yPk9HQJRvb8'],
  ['Apache', 'https://youtu.be/t7nKL45FdVk'],
  ['Nginx', 'https://youtu.be/zfdNZFRt3k4'],
  ['MySQL', 'https://youtu.be/uWWHAqxhVyk'],
  ['MariaDB', 'https://youtu.be/mvmbRi6KsgI'],
  ['PostgreSQL', 'https://youtu.be/5gW3WHh8_Jw'],
  ['MongoDB', 'https://youtu.be/wPjgwVeA6lw'],
  ['Qdrant', 'https://youtu.be/ahetMNLLS7s'],
  ['ClickHouse', 'https://youtu.be/3ePJYddWYmQ'],
  ['Mailpit', 'https://youtu.be/D4MkA25Ofd0'],
  ['PHP', 'https://youtu.be/OYP1IOoJOtI'],
  ['Node.js', 'https://youtu.be/Pt_I3NDciZw'],
  ['Python', 'https://youtu.be/dhy0nJYsfQQ'],
  ['Redis', 'https://youtu.be/u9xjPN-VWT4'],
  ['Elasticsearch', 'https://youtu.be/B9Eo2Y-aXWQ'],
  ['Temporal', 'https://youtu.be/E_jetPnVxBo']
]

const chineseModuleLinks = [
  ['OpenClaw', 'https://www.bilibili.com/video/BV1ciwMzUEGH/'],
  ['n8n', 'https://www.bilibili.com/video/BV1qGXFBfE7U/'],
  ['Ollama', 'https://www.bilibili.com/video/BV13UZcYGEhu/'],
  ['Apache', 'https://www.bilibili.com/video/BV1wqZ7BNErL/'],
  ['Nginx', 'https://www.bilibili.com/video/BV1jKZ4BjEgk/'],
  ['MySQL', 'https://www.bilibili.com/video/BV1vuZ4B5EAg/'],
  ['MariaDB', 'https://www.bilibili.com/video/BV1NfEx6eE3V/'],
  ['PostgreSQL', 'https://www.bilibili.com/video/BV19oE36BELa/'],
  ['MongoDB', 'https://www.bilibili.com/video/BV182E26AELB/'],
  ['Qdrant', 'https://www.bilibili.com/video/BV16Q3P6VEPA/'],
  ['ClickHouse', 'https://www.bilibili.com/video/BV1S43w6QEvS/'],
  ['Mailpit', 'https://www.bilibili.com/video/BV1CxEz6YEgx/'],
  ['PHP', 'https://www.bilibili.com/video/BV1r6Z7BwE8p/'],
  ['Node.js', 'https://www.bilibili.com/video/BV1pzEs6tE2X/'],
  ['Python', 'https://www.bilibili.com/video/BV1hvZxBBEJk/'],
  ['Redis', 'https://www.bilibili.com/video/BV1YaZxBzENJ/'],
  ['Elasticsearch', 'https://www.bilibili.com/video/BV1if3P6BEBR/'],
  ['Temporal', 'https://www.bilibili.com/video/BV1TD3c67Eei/']
]

function expectMarkdownLinks(path, links) {
  const source = sourceFile(path)
  for (const [label, href] of links) {
    const link = '[' + label + '](' + href + ')'
    assert.ok(source.includes(link), path + ' should include ' + link)
  }
}

function expectPlainModuleNames(path, names) {
  const source = sourceFile(path)
  for (const name of names) {
    assert.ok(!source.includes('[' + name + ']('), path + ' should keep ' + name + ' plain')
  }
}

test('English What Is FlyEnv table uses English AppModules demo links', () => {
  expectMarkdownLinks('docs/guide/what-is-flyenv.md', englishModuleLinks)
  expectPlainModuleNames('docs/guide/what-is-flyenv.md', ['Podman', 'FrankenPHP', 'Temporal CLI'])
})

test('Chinese What Is FlyEnv table uses Chinese AppModules demo links', () => {
  expectMarkdownLinks('docs/zh/guide/what-is-flyenv.md', chineseModuleLinks)
  expectPlainModuleNames('docs/zh/guide/what-is-flyenv.md', ['Podman', 'FrankenPHP', 'Temporal CLI'])
})
~~~

- [ ] **Step 2: Run the focused test to verify it fails**

Run: node --test tests/homepage-core-modules.test.mjs

Expected: FAIL. The two new subtests report that the first missing Markdown links, OpenClaw in each locale, are absent from the supported-module tables.

### Task 2: Link the English table to English AppModules demos

**Files:**
- Modify: docs/guide/what-is-flyenv.md:22-31
- Test: tests/homepage-core-modules.test.mjs

- [ ] **Step 1: Replace the eight English table rows with these exact rows**

~~~md
| AI Integration & Automation | Hermes Agent, [OpenClaw](https://youtu.be/j7_B-VzIyEU), [n8n](https://youtu.be/YnA1B3qmDJU), [Ollama](https://youtu.be/yPk9HQJRvb8), CliProxyAPI |
| Web Servers | FrankenPHP, [Apache](https://youtu.be/t7nKL45FdVk), [Nginx](https://youtu.be/zfdNZFRt3k4), Caddy, Tomcat |
| Databases | [MySQL](https://youtu.be/uWWHAqxhVyk), [MariaDB](https://youtu.be/mvmbRi6KsgI), [PostgreSQL](https://youtu.be/5gW3WHh8_Jw), [MongoDB](https://youtu.be/wPjgwVeA6lw), [Qdrant](https://youtu.be/ahetMNLLS7s), [ClickHouse](https://youtu.be/3ePJYddWYmQ) |
| Email Server | [Mailpit](https://youtu.be/D4MkA25Ofd0) |
| Programming Languages & Runtime | .NET, Flutter, [PHP](https://youtu.be/OYP1IOoJOtI), Composer, PHP-CLI, PHP-FPM, RoadRunner, Swoole CLI, Go, [Node.js](https://youtu.be/Pt_I3NDciZw), [Python](https://youtu.be/dhy0nJYsfQQ), Java, Maven, Gradle, SDKMAN, Erlang, Ruby, Rust, Rustup, Bun, Deno, Zig |
| Cache & Message Queue | [Redis](https://youtu.be/u9xjPN-VWT4), Memcached, RabbitMQ |
| Service Governance | Consul, Etcd, R-Nacos, [Temporal](https://youtu.be/E_jetPnVxBo), Temporal CLI |
| Search Engine | [Elasticsearch](https://youtu.be/B9Eo2Y-aXWQ), Meilisearch, Typesense, ZincSearch |
~~~

- [ ] **Step 2: Run the focused test to verify the English link contract passes while the Chinese one remains red**

Run: node --test tests/homepage-core-modules.test.mjs

Expected: 11 passing subtests and 1 failing Chinese table-link subtest.

### Task 3: Link the Chinese table to Chinese AppModules demos

**Files:**
- Modify: docs/zh/guide/what-is-flyenv.md:22-31
- Test: tests/homepage-core-modules.test.mjs

- [ ] **Step 1: Replace the eight Chinese table rows with these exact rows**

~~~md
| AI 集成与自动化 | Hermes Agent、[OpenClaw](https://www.bilibili.com/video/BV1ciwMzUEGH/)、[n8n](https://www.bilibili.com/video/BV1qGXFBfE7U/)、[Ollama](https://www.bilibili.com/video/BV13UZcYGEhu/)、CliProxyAPI |
| Web 服务器 | FrankenPHP、[Apache](https://www.bilibili.com/video/BV1wqZ7BNErL/)、[Nginx](https://www.bilibili.com/video/BV1jKZ4BjEgk/)、Caddy、Tomcat |
| 数据库 | [MySQL](https://www.bilibili.com/video/BV1vuZ4B5EAg/)、[MariaDB](https://www.bilibili.com/video/BV1NfEx6eE3V/)、[PostgreSQL](https://www.bilibili.com/video/BV19oE36BELa/)、[MongoDB](https://www.bilibili.com/video/BV182E26AELB/)、[Qdrant](https://www.bilibili.com/video/BV16Q3P6VEPA/)、[ClickHouse](https://www.bilibili.com/video/BV1S43w6QEvS/) |
| 邮件服务器 | [Mailpit](https://www.bilibili.com/video/BV1CxEz6YEgx/) |
| 编程语言与运行时 | .NET、Flutter、[PHP](https://www.bilibili.com/video/BV1r6Z7BwE8p/)、Composer、PHP-CLI、PHP-FPM、RoadRunner、Swoole CLI、Go、[Node.js](https://www.bilibili.com/video/BV1pzEs6tE2X/)、[Python](https://www.bilibili.com/video/BV1hvZxBBEJk/)、Java、Maven、Gradle、SDKMAN、Erlang、Ruby、Rust、Rustup、Bun、Deno、Zig |
| 缓存与消息队列 | [Redis](https://www.bilibili.com/video/BV1YaZxBzENJ/)、Memcached、RabbitMQ |
| 服务治理 | Consul、Etcd、R-Nacos、[Temporal](https://www.bilibili.com/video/BV1TD3c67Eei/)、Temporal CLI |
| 搜索引擎 | [Elasticsearch](https://www.bilibili.com/video/BV1if3P6BEBR/)、Meilisearch、Typesense、ZincSearch |
~~~

- [ ] **Step 2: Run the focused test to verify all link contracts pass**

Run: node --test tests/homepage-core-modules.test.mjs

Expected: PASS with 12 passing subtests and 0 failures.

- [ ] **Step 3: Build the VitePress site**

Run: yarn docs:build

Expected: exit code 0 and both localized What Is FlyEnv pages render the Markdown table links.

- [ ] **Step 4: Commit the scoped documentation change without including pre-staged user files**

~~~bash
git add docs/guide/what-is-flyenv.md docs/zh/guide/what-is-flyenv.md tests/homepage-core-modules.test.mjs
git commit --only -m "docs: link supported module demos" -- docs/guide/what-is-flyenv.md docs/zh/guide/what-is-flyenv.md tests/homepage-core-modules.test.mjs
~~~

## Plan self-review

- Spec coverage: Task 1 asserts all 18 homepage-sourced links in each locale and confirms that unlinked neighbours and Temporal CLI stay unlinked. Tasks 2-3 use the exact URLs from AppModules and leave every other table term unchanged.
- Placeholder scan: complete; every test link, table row, file path, and verification command is specified.
- Consistency: module names in both expected-link lists match the exact Markdown labels inserted by Tasks 2-3, including Node.js rather than the component card label NodeJS.

