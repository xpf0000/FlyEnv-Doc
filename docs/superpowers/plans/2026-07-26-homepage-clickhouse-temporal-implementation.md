# Homepage ClickHouse and Temporal Modules Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add ClickHouse to the Database cards and Temporal to the Service Governance cards on both localized homepages.

**Architecture:** `AppCoreModule` already renders the Database (`type === 1`) and Service Governance (`type === 11`) collections. Add static cards to those existing collections in each locale-specific `AppModules` component; the cards load the supplied local SVGs and need no new component, route, or external link.

**Tech Stack:** Vue 3 Single-File Components, VitePress, Tailwind CSS, Node.js built-in test runner.

---

### Task 1: Capture the required localized Core Module cards

**Files:**
- Create: `tests/homepage-core-modules.test.mjs`
- Test: `tests/homepage-core-modules.test.mjs`

- [ ] **Step 1: Write the failing test**

Create `tests/homepage-core-modules.test.mjs` with the following content:

```js
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import test from 'node:test'
import { fileURLToPath } from 'node:url'

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')

function sourceFile(path) {
  return readFileSync(resolve(projectRoot, path), 'utf8')
}

function expectCard(source, category, moduleName, icon, categoryClass = 'shrink-0 select-text') {
  assert.match(
    source,
    new RegExp(
      `<span class="${categoryClass}">${category}</span>\\s*` +
        '<div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center w-full p-4">\\s*' +
        `<img src="../SVG/${icon}.svg" />\\s*` +
        '</div>\\s*' +
        `<span class="shrink-0 select-text">${moduleName}</span>`
    )
  )
}

test('English Core Modules includes ClickHouse as a database', () => {
  expectCard(sourceFile('docs/components/AppModules/index.vue'), 'Database', 'ClickHouse', 'ClickHouse')
})

test('English Core Modules includes Temporal as service governance', () => {
  expectCard(
    sourceFile('docs/components/AppModules/index.vue'),
    'Service Governance',
    'Temporal',
    'Temporal',
    'shrink-0 select-text truncate'
  )
})

test('Chinese Core Modules includes ClickHouse as a database', () => {
  expectCard(sourceFile('docs/components/AppModules/zh.vue'), '数据库', 'ClickHouse', 'ClickHouse')
})

test('Chinese Core Modules includes Temporal as service governance', () => {
  expectCard(
    sourceFile('docs/components/AppModules/zh.vue'),
    '服务治理',
    'Temporal',
    'Temporal',
    'shrink-0 select-text truncate'
  )
})
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `node --test tests/homepage-core-modules.test.mjs`

Expected: FAIL. The assertions for the ClickHouse and Temporal card markup fail because neither card has been added to `AppModules` yet.

### Task 2: Add the ClickHouse and Temporal cards in both locales

**Files:**
- Modify: `docs/components/AppModules/index.vue:127-136,637-665`
- Modify: `docs/components/AppModules/zh.vue:127-136,637-665`
- Test: `tests/homepage-core-modules.test.mjs`

- [ ] **Step 1: Add the English cards**

In the `type === 1` block in `docs/components/AppModules/index.vue`, append this card after the existing Qdrant card:

```vue
<div
  class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
>
  <span class="shrink-0 select-text">Database</span>
  <div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center w-full p-4">
    <img src="../SVG/ClickHouse.svg" />
  </div>
  <span class="shrink-0 select-text">ClickHouse</span>
</div>
```

In the `type === 11` block, append this card after the existing Etcd card:

```vue
<div
  class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
>
  <span class="shrink-0 select-text truncate">Service Governance</span>
  <div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center w-full p-4">
    <img src="../SVG/Temporal.svg" />
  </div>
  <span class="shrink-0 select-text">Temporal</span>
</div>
```

- [ ] **Step 2: Add the Chinese cards**

In the matching `type === 1` block in `docs/components/AppModules/zh.vue`, append this card after Qdrant:

```vue
<div
  class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
>
  <span class="shrink-0 select-text">数据库</span>
  <div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center w-full p-4">
    <img src="../SVG/ClickHouse.svg" />
  </div>
  <span class="shrink-0 select-text">ClickHouse</span>
</div>
```

In the matching `type === 11` block, append this card after Etcd:

```vue
<div
  class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
>
  <span class="shrink-0 select-text truncate">服务治理</span>
  <div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center w-full p-4">
    <img src="../SVG/Temporal.svg" />
  </div>
  <span class="shrink-0 select-text">Temporal</span>
</div>
```

- [ ] **Step 3: Run the focused test to verify it passes**

Run: `node --test tests/homepage-core-modules.test.mjs`

Expected: PASS. All four locale-and-category assertions pass.

- [ ] **Step 4: Build the documentation site**

Run: `yarn docs:build`

Expected: VitePress completes with exit code 0 and produces `docs/.vitepress/dist/`.

- [ ] **Step 5: Verify the generated site includes both SVGs**

Run:

```bash
find docs/.vitepress/dist/assets -maxdepth 1 -type f -name 'ClickHouse.*.svg'
rg --no-ignore -l 'paint0_linear_1452_5317' docs/.vitepress/dist/index.html docs/.vitepress/dist/zh/index.html
```

Expected: the first command lists a hashed ClickHouse SVG. The second lists both homepage HTML files because Temporal's smaller SVG is inlined by VitePress and retains its unique gradient identifier.

- [ ] **Step 6: Commit the scoped implementation**

Run:

```bash
git add docs/components/AppModules/index.vue docs/components/AppModules/zh.vue \
  docs/components/SVG/ClickHouse.svg docs/components/SVG/Temporal.svg \
  tests/homepage-core-modules.test.mjs
git commit -m "docs: add ClickHouse and Temporal homepage modules"
```

Expected: one commit containing only the two Core Module component changes, the two supplied SVG assets, and the focused regression test.

## Plan self-review

- Spec coverage: Task 2 adds ClickHouse to Database, Temporal to Service Governance, preserves the existing static-card pattern, references the supplied SVGs, and validates the production build.
- Placeholder scan: complete; no deferred work or unspecified implementation details remain.
- Consistency: the exact CSS classes and relative SVG paths asserted in Task 1 match the markup specified in Task 2.
