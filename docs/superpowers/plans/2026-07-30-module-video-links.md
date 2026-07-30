# Module Video Links Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the supplied English and Chinese walkthroughs discoverable from the five module cards and the two “What is FlyEnv?” module tables.

**Architecture:** Reuse the existing clickable-video card markup already used by Elasticsearch and Mailpit. English content links to YouTube; Chinese content links to Bilibili. ZincSearch is not currently rendered in either module component, so add it as a matching card in the existing search-engine group.

**Tech Stack:** Vue 3 single-file components, VitePress Markdown, Tailwind CSS, Node.js assertions, Yarn.

---

## File map

- `docs/components/AppModules/index.vue`: English clickable cards for Meilisearch, Typesense, ZincSearch, RustFS, and Minio.
- `docs/components/AppModules/zh.vue`: Chinese clickable cards for the same five modules.
- `docs/public/home/zincsearch.png`: Supplied image rendered by the new ZincSearch card as `/home/zincsearch.png`.
- `docs/guide/what-is-flyenv.md`: YouTube links in the English search-engine and object-storage table rows.
- `docs/zh/guide/what-is-flyenv.md`: Bilibili links in the Chinese search-engine and object-storage table rows.
- `docs/superpowers/specs/2026-07-30-module-video-links-design.md`: Correct the scope wording to reflect ZincSearch’s new card.

### Task 1: Establish the required link matrix before editing

**Files:**

- Test: Inline Node.js assertion over the four target source files; this repository has no documentation-content test runner.

- [ ] **Step 1: Run the failing link-matrix assertion**

Run:

```bash
node --input-type=module -e "import { readFileSync } from 'node:fs'; const checks = [['docs/components/AppModules/index.vue','https://youtu.be/vPD3lXo1vr0'],['docs/components/AppModules/index.vue','https://youtu.be/3Uo22iqty9k'],['docs/components/AppModules/index.vue','https://youtu.be/uOf2cWk3AtU'],['docs/components/AppModules/index.vue','https://youtu.be/MJ9OQBOBXMg'],['docs/components/AppModules/index.vue','https://youtu.be/lCEEocXdt_M'],['docs/components/AppModules/zh.vue','https://www.bilibili.com/video/BV1EV346BEqi/'],['docs/components/AppModules/zh.vue','https://www.bilibili.com/video/BV1AT346CEFc/'],['docs/components/AppModules/zh.vue','https://www.bilibili.com/video/BV1Hu3463Ej7/'],['docs/components/AppModules/zh.vue','https://www.bilibili.com/video/BV1cd3b6mEc8/'],['docs/components/AppModules/zh.vue','https://www.bilibili.com/video/BV1Zc386VE4o/'],['docs/guide/what-is-flyenv.md','https://youtu.be/vPD3lXo1vr0'],['docs/guide/what-is-flyenv.md','https://youtu.be/3Uo22iqty9k'],['docs/guide/what-is-flyenv.md','https://youtu.be/uOf2cWk3AtU'],['docs/guide/what-is-flyenv.md','https://youtu.be/MJ9OQBOBXMg'],['docs/guide/what-is-flyenv.md','https://youtu.be/lCEEocXdt_M'],['docs/zh/guide/what-is-flyenv.md','https://www.bilibili.com/video/BV1EV346BEqi/'],['docs/zh/guide/what-is-flyenv.md','https://www.bilibili.com/video/BV1AT346CEFc/'],['docs/zh/guide/what-is-flyenv.md','https://www.bilibili.com/video/BV1Hu3463Ej7/'],['docs/zh/guide/what-is-flyenv.md','https://www.bilibili.com/video/BV1cd3b6mEc8/'],['docs/zh/guide/what-is-flyenv.md','https://www.bilibili.com/video/BV1Zc386VE4o/']]; for (const [file, url] of checks) { if (!readFileSync(file, 'utf8').includes(url)) throw new Error(`missing ${url} in ${file}`) }"
```

Expected: Fail with the first missing Meilisearch URL, proving the supplied video matrix is not already present.

### Task 2: Add English video entry points

**Files:**

- Modify: `docs/components/AppModules/index.vue:396-413,613-631`
- Modify: `docs/guide/what-is-flyenv.md:31-32`

- [ ] **Step 1: Replace the two static search cards, add ZincSearch, and make both object-storage cards clickable**

Use the existing clickable Elasticsearch card class and play-overlay structure. Keep `Search Engine` and `Object Storage` as category labels, use the existing icon paths, and use these exact English video metadata values:

```ts
const englishVideos = {
  meilisearch: ['Meilisearch Local Setup in FlyEnv Without Docker | Install, Run & Open Mini Dashboard', 'https://youtu.be/vPD3lXo1vr0'],
  typesense: ['Native Local Typesense in 2 Minutes (No Docker, No Config) - FlyEnv', 'https://youtu.be/3Uo22iqty9k'],
  zincSearch: ['ZincSearch Local Setup in FlyEnv Without Docker | Install Versions, Run Service & Open UI', 'https://youtu.be/uOf2cWk3AtU'],
  minio: ['Install and Run MinIO Locally with FlyEnv (No Docker) — FlyEnv Native Setup Demo', 'https://youtu.be/MJ9OQBOBXMg'],
  rustfs: ['RustFS Local Development in One Click — FlyEnv Native Service', 'https://youtu.be/lCEEocXdt_M']
}
```

The new ZincSearch card uses `/home/zincsearch.png`, appears after Typesense, and follows the same `<a>` structure as the existing Meilisearch and Typesense cards after conversion.

- [ ] **Step 2: Link the English module table entries**

Replace the relevant rows with:

```markdown
| Search Engine | [Elasticsearch](https://youtu.be/B9Eo2Y-aXWQ), [Meilisearch](https://youtu.be/vPD3lXo1vr0), [Typesense](https://youtu.be/3Uo22iqty9k), [ZincSearch](https://youtu.be/uOf2cWk3AtU) |
| Object Storage | [RustFS](https://youtu.be/lCEEocXdt_M), [Minio](https://youtu.be/MJ9OQBOBXMg) |
```

### Task 3: Add Chinese video entry points

**Files:**

- Modify: `docs/components/AppModules/zh.vue:396-413,613-631`
- Modify: `docs/zh/guide/what-is-flyenv.md:31-32`

- [ ] **Step 1: Replace the two static search cards, add ZincSearch, and make both object-storage cards clickable**

Use the existing clickable Chinese Elasticsearch card style and the same card structure as Task 2. Keep the displayed category and product names unchanged, and use these exact Chinese video metadata values:

```ts
const chineseVideos = {
  meilisearch: ['不用 Docker，FlyEnv Meilisearch 本地部署演示：安装、启动与 Mini Dashboard', 'https://www.bilibili.com/video/BV1EV346BEqi/'],
  typesense: ['两分钟搞定本地 Typesense - FlyEnv 原生本地环境，无需 Docker 和手动配置', 'https://www.bilibili.com/video/BV1AT346CEFc/'],
  zincSearch: ['FlyEnv ZincSearch 本地部署演示 | 一键安装、多版本共存、原生启动 | 无需 Docker 和手动配置', 'https://www.bilibili.com/video/BV1Hu3463Ej7/'],
  minio: ['FlyEnv MinIO 本地部署演示：一键安装、多版本、原生启动 | 不用 Docker 也不用手动配置', 'https://www.bilibili.com/video/BV1cd3b6mEc8/'],
  rustfs: ['FlyEnv两分钟搞定本地 RustFS | 一键安装、多版本共存、原生启动 | 无需 Docker 和手动配置', 'https://www.bilibili.com/video/BV1Zc386VE4o/']
}
```

- [ ] **Step 2: Link the Chinese module table entries**

Replace the relevant rows with:

```markdown
| 搜索引擎 | [Elasticsearch](https://www.bilibili.com/video/BV1if3P6BEBR/)、[Meilisearch](https://www.bilibili.com/video/BV1EV346BEqi/)、[Typesense](https://www.bilibili.com/video/BV1AT346CEFc/)、[ZincSearch](https://www.bilibili.com/video/BV1Hu3463Ej7/) |
| 对象存储 | [RustFS](https://www.bilibili.com/video/BV1Zc386VE4o/)、[Minio](https://www.bilibili.com/video/BV1cd3b6mEc8/) |
```

### Task 4: Verify the static content and production build

**Files:**

- Verify: `docs/components/AppModules/index.vue`
- Verify: `docs/components/AppModules/zh.vue`
- Verify: `docs/guide/what-is-flyenv.md`
- Verify: `docs/zh/guide/what-is-flyenv.md`

- [ ] **Step 1: Re-run the Task 1 Node assertion**

Expected: Exit code `0`, proving every required URL appears in its intended locale’s component and guide page.

- [ ] **Step 2: Build the documentation site**

Run:

```bash
yarn docs:build
```

Expected: Exit code `0` and VitePress reports a generated production site.

- [ ] **Step 3: Check the patch and commit only task-owned files**

Run:

```bash
git diff --check
git diff -- docs/components/AppModules/index.vue docs/components/AppModules/zh.vue docs/guide/what-is-flyenv.md docs/zh/guide/what-is-flyenv.md docs/superpowers/specs/2026-07-30-module-video-links-design.md docs/superpowers/plans/2026-07-30-module-video-links.md
```

Expected: No whitespace errors; the diff contains only the five module video cards, dual-language table links, and the workflow documents.

- [ ] **Step 4: Commit the task-owned documentation changes**

```bash
git add docs/components/AppModules/index.vue docs/components/AppModules/zh.vue docs/guide/what-is-flyenv.md docs/zh/guide/what-is-flyenv.md docs/superpowers/specs/2026-07-30-module-video-links-design.md docs/superpowers/plans/2026-07-30-module-video-links.md
git commit -m "docs: link module video walkthroughs"
```
