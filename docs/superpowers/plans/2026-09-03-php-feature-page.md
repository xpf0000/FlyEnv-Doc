# PHP 特性详情页重构 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 把 `docs/features/php.md` 重写为功能画廊式页面：8 个核心 PHP 功能区块各配占位截图（php-1.webp ~ php-13.webp），外加"更多工具"小节、关联运行时交叉链接和边界说明。

**Architecture:** 单一 markdown 文件重写（`layout: doc`），无新 Vue 组件。事实依据来自设计文档 `docs/superpowers/specs/2026-09-03-php-feature-page-design.md`（已批准）。采用 TDD：先写结构断言测试，再写页面内容使测试通过。

**Tech Stack:** VitePress markdown、node:test（测试风格对齐 `tests/features-page.test.mjs`）、Yarn。

**Spec 关键决策（已确认，不可扩大范围）：**
- 只改 `docs/features/php.md`，不动 `docs/zh/`、不动 `docs/features.md`。
- 占位图 URL：`https://oss.macphpstudy.com/image/features/php-N.webp`，N = 1~13，按页面顺序。
- 不承诺源码中不存在的能力：无 Drupal/Nextcloud 模板、无全局 Xdebug 开关、PHP 不监听 TCP 端口。
- 模板清单恰好 10 个：WordPress、Laravel、Yii2、ThinkPHP、Symfony、CodeIgniter、CakePHP、Slim、ClassicPress、Contao。

---

### Task 1: 编写失败的结构测试

**Files:**
- Create: `tests/php-feature-page.test.mjs`

- [ ] **Step 1: 写测试文件**

创建 `tests/php-feature-page.test.mjs`，完整内容如下：

```javascript
import assert from 'node:assert/strict'
import fs from 'node:fs'
import test from 'node:test'

const page = fs.readFileSync(new URL('../docs/features/php.md', import.meta.url), 'utf8')
const oss = 'https://oss.macphpstudy.com/image/features'

test('php feature page keeps its SEO frontmatter contract', () => {
  assert.match(page, /layout: doc/)
  assert.match(page, /titleTemplate: false/)
  assert.match(page, /https:\/\/www\.flyenv\.com\/features\/php/)
  assert.match(page, /rel: canonical/)
})

test('php feature page covers all core feature sections', () => {
  for (const heading of [
    '## PHP version management',
    '## PHP-FPM service management',
    '## php.ini configuration',
    '## Extension management',
    '## Project-level PHP isolation',
    '## Composer management',
    '## Quick project creation',
    '## More PHP tools',
    '## Related runtimes',
    '## Boundaries'
  ]) {
    assert.match(page, new RegExp(heading.replace(/[.*]/g, '\\$&')))
  }
})

test('php feature page embeds 13 placeholder screenshots in order', () => {
  const matches = [...page.matchAll(/!\[[^\]]+\]\(https:\/\/oss\.macphpstudy\.com\/image\/features\/php-(\d+)\.webp\)/g)]
  assert.deepEqual(matches.map((m) => Number(m[1])), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])
})

test('php feature page lists exactly the supported project templates', () => {
  for (const tpl of [
    'WordPress', 'Laravel', 'Yii2', 'ThinkPHP', 'Symfony',
    'CodeIgniter', 'CakePHP', 'Slim', 'ClassicPress', 'Contao'
  ]) {
    assert.match(page, new RegExp(tpl))
  }
  assert.doesNotMatch(page, /Drupal|Nextcloud/)
})

test('php feature page documents platform differences and limits', () => {
  assert.match(page, /FastCGI/)
  assert.match(page, /MacPorts/)
  assert.match(page, /disable_functions/)
  assert.match(page, /\.flyenv/)
  assert.match(page, /license/i)
})

test('php feature page keeps cross-links to related docs', () => {
  for (const link of [
    '/guide/deploy-php-projects-without-docker',
    '/guide/php-extensions-install',
    '/features/local-sites-https',
    '/download'
  ]) {
    assert.match(page, new RegExp(link.replaceAll('/', '\\/')))
  }
})
```

- [ ] **Step 2: 运行测试确认失败**

Run: `node --test tests/php-feature-page.test.mjs`
Expected: FAIL（"covers all core feature sections" 和 "embeds 13 placeholder screenshots" 等断言失败，因为页面还没有这些 H2 和图片）

- [ ] **Step 3: Commit**

```bash
git add tests/php-feature-page.test.mjs
git commit -m "test: add php feature page structure assertions"
```

---

### Task 2: 重写页面 — frontmatter、Hero、版本管理、PHP-FPM、php.ini、扩展

**Files:**
- Modify: `docs/features/php.md`（整体重写，本任务写入前半部分；Task 3 追加后半部分）

- [ ] **Step 1: 用以下内容整体替换 `docs/features/php.md`**

注意：此步骤结束后页面只有前半部分，Task 1 的测试仍然失败（后半部分的区块和图片缺失），这是预期状态。

```markdown
---
layout: doc
titleTemplate: false
title: 'PHP Version Manager, PHP-FPM and Composer Tools | FlyEnv'
description: 'Install and switch PHP versions, manage PHP-FPM, php.ini and extensions, isolate project runtimes, manage Composer and create WordPress or Laravel projects in FlyEnv.'
head:
  - - meta
    - name: description
      content: 'Install and switch PHP versions, manage PHP-FPM, php.ini and extensions, isolate project runtimes, manage Composer and create WordPress or Laravel projects in FlyEnv.'
  - - meta
    - property: og:title
      content: 'PHP Version Manager, PHP-FPM and Composer Tools | FlyEnv'
  - - meta
    - property: og:description
      content: 'Install and switch PHP versions, manage PHP-FPM, php.ini and extensions, isolate project runtimes, manage Composer and create WordPress or Laravel projects in FlyEnv.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://www.flyenv.com/features/php
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://www.flyenv.com/features/php
---

# PHP development in FlyEnv

FlyEnv turns PHP into a managed part of your local stack: install as many PHP versions as your projects need, run PHP-FPM per version, edit `php.ini` and extensions without touching the terminal, bind a runtime to each project, and scaffold common PHP applications in a few clicks.

![FlyEnv PHP module overview](https://oss.macphpstudy.com/image/features/php-1.webp)

## PHP version management

Install multiple PHP versions side by side from **PHP → Version Manager** and switch between them at any time.

- **Multiple install sources:** Static builds on every platform, plus Homebrew (macOS and Linux) and MacPorts (macOS) for PHP installations managed by those package managers.
- **Custom versions:** point FlyEnv at any directory that contains your own PHP build; it scans for the `php` and `php-fpm` binaries and lists them next to the managed versions.
- **CLI version switching:** set which PHP version your terminal `php` command resolves to. FlyEnv adds or removes the version's bin directory in your `PATH` and marks whether the current entry was set by FlyEnv or by another tool.
- **Per-version alias and remark:** give each installation a short alias and note so similar builds stay distinguishable in the list.

![PHP Version Manager with install sources](https://oss.macphpstudy.com/image/features/php-2.webp)

![PHP service table with version, path, env and alias columns](https://oss.macphpstudy.com/image/features/php-3.webp)

## PHP-FPM service management

PHP-FPM is a dedicated module in FlyEnv, built for serving sites through Nginx, Apache or Caddy.

- **Per-version lifecycle:** start, stop or restart each PHP-FPM version individually, or use the sidebar switch (also available in the system tray) to start or stop all installed versions at once.
- **Socket-based on macOS and Linux:** each version listens on its own unix socket, so several PHP-FPM versions can run simultaneously and each site can be routed to a different one. FlyEnv regenerates the web-server integration config when a version starts.
- **Editable `php-fpm.conf`:** open and edit the FPM pool configuration per version (macOS and Linux), with FPM log and slow-log viewers built in.
- **Windows runs as FastCGI:** PHP serves the web server through FastCGI, and the number of FastCGI worker processes (`PHP_FCGI_CHILDREN`, 1–64) is adjustable per version.

![PHP-FPM module with per-version service controls](https://oss.macphpstudy.com/image/features/php-4.webp)

![Editing php-fpm.conf for a PHP version](https://oss.macphpstudy.com/image/features/php-5.webp)

## php.ini configuration

Every installed PHP version has its own `php.ini`, editable from the version's action menu.

- **Common settings form:** toggle or adjust frequently changed directives — `memory_limit`, `max_execution_time`, `upload_max_filesize`, `post_max_size`, `max_file_uploads`, `display_errors`, `log_errors`, `error_reporting`, `short_open_tag`, `date.timezone`, CA bundle paths and more — without editing the file by hand.
- **Full source editor:** switch to the raw file view for anything the form does not cover, with one-click restore to the default configuration.
- **`disable_functions` manager:** harden a version by disabling dangerous functions from a searchable checklist of roughly 170 common entries; changes are written back into `php.ini`.

![php.ini common settings form](https://oss.macphpstudy.com/image/features/php-6.webp)

![Managing disable_functions with a searchable checklist](https://oss.macphpstudy.com/image/features/php-7.webp)

## Extension management

Open **Extensions** from any PHP version to see what is loaded and install what is missing. The [extension installation guide](/guide/php-extensions-install) walks through a full example.

- **Loaded extensions:** a searchable list of the modules the version currently loads.
- **Homebrew and MacPorts PHP:** browse the extension formulae available for that PHP version, install or uninstall them in the embedded terminal, and copy a ready-made `extension=xxx.so` snippet — or a complete Xdebug configuration template — straight into `php.ini`.
- **Windows:** enable or disable the DLLs already present in the extension directory, or download extensions from the online library with one click.
- **Quick navigation:** jump directly to `php.ini` or open the extension directory in the file manager.

![Loaded extension list for a PHP version](https://oss.macphpstudy.com/image/features/php-8.webp)

![Installing a PHP extension from Homebrew](https://oss.macphpstudy.com/image/features/php-9.webp)
```

- [ ] **Step 2: 运行测试确认仍失败（预期）**

Run: `node --test tests/php-feature-page.test.mjs`
Expected: FAIL（缺少 Project-level PHP isolation、Composer、Quick project creation 等 H2 和 php-10~13 图片；此时 php-1~9 图片断言已部分满足但整体仍失败）

- [ ] **Step 3: Commit**

```bash
git add docs/features/php.md
git commit -m "docs: rewrite php feature page part 1 - versions, fpm, ini, extensions"
```

---

### Task 3: 追加页面后半部分 — 项目隔离、Composer、快捷创建、更多工具、关联运行时、边界

**Files:**
- Modify: `docs/features/php.md`（在 Task 2 内容末尾追加）

- [ ] **Step 1: 在 `docs/features/php.md` 末尾追加以下内容**

```markdown
## Project-level PHP isolation

Different projects often need different PHP versions. In **PHP → Projects**, register each project folder and bind it to its own PHP binary — or keep it on the system version.

- **Per-project runtime:** double-click a project to switch its PHP version; the choice is stored in a `.flyenv` file inside the project directory, so terminals and editors launched from FlyEnv pick up the right PHP automatically.
- **Open-in tools:** jump from a project row into Terminal, PowerShell, VSCode, PhpStorm, WebStorm or Sublime with the project environment loaded.
- **Per-site PHP version:** each site in **Host** selects its own PHP-FPM version (or stays a static site), and the site list shows which version serves which site.

Registering more than two projects requires a FlyEnv license.

![PHP projects list with per-project PHP version binding](https://oss.macphpstudy.com/image/features/php-10.webp)

## Composer management

The **Composer** tab manages Composer like any other versioned tool in FlyEnv.

- Install and keep multiple Composer versions, from static builds or Homebrew depending on your platform.
- Add your own Composer installations from custom directories.
- Bind a specific Composer version to a project together with its PHP version, so dependency installs use a consistent toolchain.

![Composer version manager](https://oss.macphpstudy.com/image/features/php-11.webp)

## Quick project creation

**PHP → New Project** scaffolds common PHP applications without leaving the app. Supported templates: WordPress, Laravel, Yii2, ThinkPHP, Symfony, CodeIgniter, CakePHP, Slim, ClassicPress and Contao.

1. Pick a template and choose the framework version, the PHP version and the Composer version.
2. FlyEnv runs the Composer creation command in its embedded terminal, so you see the real output.
3. When the project is ready, create a matching site in one click — the web-server rewrite rules for that framework are pre-filled.

![PHP project template grid](https://oss.macphpstudy.com/image/features/php-12.webp)

![Creating a Laravel project with version selection](https://oss.macphpstudy.com/image/features/php-13.webp)

## More PHP tools

- **Log viewers:** open the PHP error log, the PHP-FPM log or the FPM slow log per version, with search and refresh built in.
- **phpMyAdmin:** from the MySQL or MariaDB module, set up phpMyAdmin in one step — FlyEnv downloads it and creates a local site served by your highest installed PHP version.
- **PHP Obfuscator:** a Tools-page utility that obfuscates PHP source code with a chosen PHP version, useful before handing code to third parties.

## Related runtimes

For application-server style PHP, FlyEnv has dedicated modules that complement the classic PHP-FPM setup:

- **FrankenPHP** — PHP bundled with a modern web-serving model.
- **RoadRunner** — PHP workers, Laravel Octane and fileserver presets.
- **Swoole CLI** — Native Swoole, Hyperf, EasySwoole, Laravel Octane and custom script presets.

The [PHP deployment guide](/guide/deploy-php-projects-without-docker) explains how to choose between them. For browser-facing sites, continue with [Local Sites, Custom Domains & HTTPS](/features/local-sites-https); framework-specific stacks are covered in the [Laravel](/solutions/laravel) and [WordPress](/solutions/wordpress) solutions.

## Boundaries

FlyEnv manages the local runtime and process configuration; it does not guarantee that every PHP extension, framework version or third-party binary is available on every operating system. Verify the project's requirements against the installed PHP build, and treat the [Download page](/download) and current release notes as the source for supported packages.
```

- [ ] **Step 2: 运行测试确认全部通过**

Run: `node --test tests/php-feature-page.test.mjs`
Expected: PASS（6 个测试全部通过）

- [ ] **Step 3: Commit**

```bash
git add docs/features/php.md
git commit -m "docs: rewrite php feature page part 2 - projects, composer, quick create, tools"
```

---

### Task 4: 全量验证

**Files:** 无改动，仅验证。

- [ ] **Step 1: 跑全部测试**

Run: `node --test tests/`
Expected: 全部测试套件通过（含既有 `features-page.test.mjs` 等，确认没有破坏其他页面约束）

- [ ] **Step 2: 生产构建**

Run: `yarn docs:build`
Expected: 构建成功，无 dead link 报错（VitePress 默认检查站内链接）；输出在 `docs/.vitepress/dist/`

- [ ] **Step 3: 人工抽查渲染结果（可选但推荐）**

Run: `yarn docs:preview` 后浏览器打开 `http://localhost:4173/features/php`，确认 13 张占位图按顺序渲染、锚点目录完整。

---

## Self-Review 记录

- **Spec 覆盖**：spec 表格 10 个区块 + 13 张图 → Task 2/3 的页面内容逐一对应；frontmatter 微调、交叉链接保留、平台差异标注、许可证提示均已包含；测试断言锁定关键契约（H2、图片顺序、模板清单、禁用 Drupal/Nextcloud、平台关键词、交叉链接）。
- **占位符扫描**：无 TBD/TODO；所有步骤含完整可执行内容。
- **一致性**：测试断言的 H2 文案与 Task 2/3 页面内容逐字一致；图片编号 1–13 顺序一致。
