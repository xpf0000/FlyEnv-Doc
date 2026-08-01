# Additional Module Video Links Implementation Plan

> For agentic workers: REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox syntax for tracking.

**Goal:** Link the six newly supplied module walkthroughs from the English and Chinese module cards and from both “What Is FlyEnv” catalogues.

**Architecture:** Convert only the six existing static cards into the established external-video card markup. Use YouTube for English and Bilibili for Chinese, then make the matching module names in the current Markdown table rows clickable. The existing R-NACOS label remains unchanged while it points to the supplied Nacos video, because that is the card and catalogue entry already present in the documentation.

**Tech Stack:** Vue 3 single-file components, VitePress Markdown, Tailwind CSS, inline Node.js static-content assertions, Yarn.

---

## File map

- docs/components/AppModules/index.vue: English clickable cards for Bun, Numa, CLIProxyAPI, R-NACOS, Consul, and Etcd.
- docs/components/AppModules/zh.vue: Chinese clickable cards for the same six existing cards.
- docs/guide/what-is-flyenv.md: YouTube links for CLIProxyAPI, Bun, R-Nacos, Consul, Etcd, and Numa in their existing rows.
- docs/zh/guide/what-is-flyenv.md: Bilibili links for the same six module names in corresponding rows.

### Task 1: Establish the required link matrix before editing

**Files:**

- Test: inline Node.js assertion over the four target source files; this repository has no documentation-content test runner.

- [ ] **Step 1: Run the failing link-matrix assertion**

Run:

    node --input-type=module -e "import { readFileSync } from 'node:fs'; const checks = [['docs/components/AppModules/index.vue','https://youtu.be/xsw8BQxii10'],['docs/components/AppModules/index.vue','https://youtu.be/pa0QFgpu17w'],['docs/components/AppModules/index.vue','https://youtu.be/8ceC7QqY4UA'],['docs/components/AppModules/index.vue','https://youtu.be/RmSl4jgmEyI'],['docs/components/AppModules/index.vue','https://youtu.be/0qfnkr5V7eE'],['docs/components/AppModules/index.vue','https://youtu.be/lu68kw8_3dY'],['docs/components/AppModules/zh.vue','https://www.bilibili.com/video/BV1eKGV6fEB5/'],['docs/components/AppModules/zh.vue','https://www.bilibili.com/video/BV1vNGV68EF4/'],['docs/components/AppModules/zh.vue','https://www.bilibili.com/video/BV1XuGV6oECA/'],['docs/components/AppModules/zh.vue','https://www.bilibili.com/video/BV1biGG6nEYz/'],['docs/components/AppModules/zh.vue','https://www.bilibili.com/video/BV1SeGG6DEHS/'],['docs/components/AppModules/zh.vue','https://www.bilibili.com/video/BV1GtGG6dE6y/'],['docs/guide/what-is-flyenv.md','https://youtu.be/xsw8BQxii10'],['docs/guide/what-is-flyenv.md','https://youtu.be/pa0QFgpu17w'],['docs/guide/what-is-flyenv.md','https://youtu.be/8ceC7QqY4UA'],['docs/guide/what-is-flyenv.md','https://youtu.be/RmSl4jgmEyI'],['docs/guide/what-is-flyenv.md','https://youtu.be/0qfnkr5V7eE'],['docs/guide/what-is-flyenv.md','https://youtu.be/lu68kw8_3dY'],['docs/zh/guide/what-is-flyenv.md','https://www.bilibili.com/video/BV1eKGV6fEB5/'],['docs/zh/guide/what-is-flyenv.md','https://www.bilibili.com/video/BV1vNGV68EF4/'],['docs/zh/guide/what-is-flyenv.md','https://www.bilibili.com/video/BV1XuGV6oECA/'],['docs/zh/guide/what-is-flyenv.md','https://www.bilibili.com/video/BV1biGG6nEYz/'],['docs/zh/guide/what-is-flyenv.md','https://www.bilibili.com/video/BV1SeGG6DEHS/'],['docs/zh/guide/what-is-flyenv.md','https://www.bilibili.com/video/BV1GtGG6dE6y/']]; for (const [file, url] of checks) { if (!readFileSync(file, 'utf8').includes(url)) throw new Error('missing ' + url + ' in ' + file) }"

Expected: fail with the first missing Etcd URL, proving the new link matrix is not already present.

### Task 2: Add the English video entry points

**Files:**

- Modify: docs/components/AppModules/index.vue at the existing Bun, Numa, CLIProxyAPI, R-NACOS, Consul, and Etcd cards.
- Modify: docs/guide/what-is-flyenv.md rows AI Integration & Automation, Programming Languages & Runtime, Service Governance, and Utilities.

- [ ] **Step 1: Convert the six English static cards into standard video cards**

Replace only each target card’s outer div with an anchor that preserves its current category text, visual element, display name, and position. Use the existing clickable-card class, target="_blank", and the existing play overlay. The common wrapper is:

    <a
      title="VIDEO_TITLE"
      href="VIDEO_URL"
      target="_blank"
      class="group hover:scale-105 transition-all duration-300 relative no-underline overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <!-- preserve current category, visual, and module name -->
      <div class="absolute inset-0 flex items-center justify-center z-20">
        <SVGUse class="w-16 opacity-20 transition-all duration-300 group-hover:opacity-65" :svg="import('../SVG/play.svg?raw')" />
      </div>
    </a>

Set the title and href exactly as follows:

    Etcd: Native Local etcd Setup Without Docker - Install, Start and Monitor with FlyEnv
    https://youtu.be/xsw8BQxii10
    Consul: Run Consul Locally Without Docker - FlyEnv Consul Module Demo
    https://youtu.be/pa0QFgpu17w
    R-NACOS: Native Local Nacos for Service Discovery and Config In FlyEnv — No Docker
    https://youtu.be/8ceC7QqY4UA
    CLIProxyAPI: CLIProxyAPI Local AI Gateway - Providers, OAuth & API Keys in FlyEnv
    https://youtu.be/RmSl4jgmEyI
    Numa: Run Numa Locally with FlyEnv | Install, Enable & Monitor
    https://youtu.be/0qfnkr5V7eE
    Bun: Bun Local Runtime Setup with FlyEnv: Manage Versions, Projects, and Local Services
    https://youtu.be/lu68kw8_3dY

Change only the category and name spans inside these new anchors to text-[#3c3c43] dark:text-[#dfdff6] so they retain readable link-card colors.

- [ ] **Step 2: Link the matching English catalogue entries**

Update only the six named module entries in the current rows:

    AI Integration & Automation: link CLIProxyAPI to https://youtu.be/RmSl4jgmEyI
    Programming Languages & Runtime: link Bun to https://youtu.be/lu68kw8_3dY
    Service Governance: link Consul to https://youtu.be/pa0QFgpu17w, Etcd to https://youtu.be/xsw8BQxii10, and R-Nacos to https://youtu.be/8ceC7QqY4UA
    Utilities: link Numa to https://youtu.be/0qfnkr5V7eE

Retain all existing links, wording, row order, and table formatting.

### Task 3: Add the Chinese video entry points

**Files:**

- Modify: docs/components/AppModules/zh.vue at the corresponding six existing cards.
- Modify: docs/zh/guide/what-is-flyenv.md rows AI 集成与自动化, 编程语言与运行时, 服务治理, and 实用工具.

- [ ] **Step 1: Convert the six Chinese static cards into standard video cards**

Apply the same anchor and overlay structure as Task 2, preserving the Chinese card labels, icons, wordmark, names, and order. Set these exact title and href pairs:

    Etcd: 本地运行 etcd 不用手动配置 一键安装、原生启动、实时日志：FlyEnv etcd 模块演示
    https://www.bilibili.com/video/BV1eKGV6fEB5/
    Consul: FlyEnv Consul 模块：本地一键启动服务发现与 KV 管理
    https://www.bilibili.com/video/BV1vNGV68EF4/
    R-NACOS: 不用 Docker，本地原生运行 Nacos — FlyEnv 一键安装与控制台演示
    https://www.bilibili.com/video/BV1XuGV6oECA/
    CLIProxyAPI: CLIProxyAPI 本地管理中心演示：供应商、OAuth、API Key 一站式管理
    https://www.bilibili.com/video/BV1biGG6nEYz/
    Numa: FlyEnv Numa 模块演示：本地安装、启动与状态监控
    https://www.bilibili.com/video/BV1SeGG6DEHS/
    Bun: Bun 本地开发环境怎么配？用 FlyEnv 一次管理 | Bun多版本共存与项目配置演示
    https://www.bilibili.com/video/BV1GtGG6dE6y/

- [ ] **Step 2: Link the matching Chinese catalogue entries**

Update only these six entries in the current rows:

    AI 集成与自动化: link CLIProxyAPI to https://www.bilibili.com/video/BV1biGG6nEYz/
    编程语言与运行时: link Bun to https://www.bilibili.com/video/BV1GtGG6dE6y/
    服务治理: link Consul to https://www.bilibili.com/video/BV1vNGV68EF4/, Etcd to https://www.bilibili.com/video/BV1eKGV6fEB5/, and R-Nacos to https://www.bilibili.com/video/BV1XuGV6oECA/
    实用工具: link Numa to https://www.bilibili.com/video/BV1SeGG6DEHS/

Retain all existing links, wording, row order, and table formatting.

### Task 4: Verify static content and the production build

**Files:**

- Verify: docs/components/AppModules/index.vue
- Verify: docs/components/AppModules/zh.vue
- Verify: docs/guide/what-is-flyenv.md
- Verify: docs/zh/guide/what-is-flyenv.md

- [ ] **Step 1: Re-run the Task 1 Node assertion**

Expected: exit code 0, proving every supplied URL appears in its intended locale component and guide page.

- [ ] **Step 2: Verify the new cards keep external-video markup**

Run:

    rg -n 'title="(Native Local etcd|Run Consul|Native Local Nacos|CLIProxyAPI Local|Run Numa|Bun Local|本地运行 etcd|FlyEnv Consul|不用 Docker，本地原生运行 Nacos|CLIProxyAPI 本地|FlyEnv Numa|Bun 本地)' docs/components/AppModules/index.vue docs/components/AppModules/zh.vue

Expected: twelve matching title attributes, one for each locale-specific card.

- [ ] **Step 3: Build the documentation site**

Run:

    yarn docs:build

Expected: exit code 0 and VitePress reports a generated production site.

- [ ] **Step 4: Check the patch**

Run:

    git diff --check
    git diff -- docs/components/AppModules/index.vue docs/components/AppModules/zh.vue docs/guide/what-is-flyenv.md docs/zh/guide/what-is-flyenv.md docs/superpowers/plans/2026-08-01-module-video-links-task88.md

Expected: no whitespace errors; the diff contains only the six new locale-aware video cards, the two catalogue updates, and this implementation plan.

- [ ] **Step 5: Commit the task-owned documentation changes**

    git add docs/components/AppModules/index.vue docs/components/AppModules/zh.vue docs/guide/what-is-flyenv.md docs/zh/guide/what-is-flyenv.md docs/superpowers/plans/2026-08-01-module-video-links-task88.md
    git commit -m "docs: add module video links"
