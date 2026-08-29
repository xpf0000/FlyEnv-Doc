# Demos Capability Cards Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the Demos catalog cards communicate FlyEnv capabilities through stable, localized card-native covers while retaining optional YouTube imagery and existing playback behavior.

**Architecture:** Keep `docs/data/demos.ts` as the single source of demo content and platform routing. Extend only the `AppDemos` presentation layer with a reusable cover structure and category tone map; the remote YouTube image stays a lazy, non-essential layer behind that structure. Add source-level regression checks to protect the cover contract and existing lazy playback/accessibility behavior.

**Tech Stack:** Vue 3 `<script setup lang="ts">`, scoped CSS, VitePress, Node test runner, Playwright smoke checks, Yarn.

---

### Task 1: Lock the native cover contract in tests

**Files:**
- Modify: `tests/demos-catalog.test.mjs:70-112`
- Test: `tests/demos-catalog.test.mjs`

- [ ] **Step 1: Add a failing presentation-contract test**

Append a test after the existing lazy playback test that reads `docs/components/AppDemos/index.vue` and asserts the shared cover structure is present:

```js
test('demo cards provide native localized covers independent of remote thumbnails', () => {
  const source = read('docs/components/AppDemos/index.vue')

  for (const required of [
    'demo-cover-native',
    'demo-cover-thumbnail',
    'demo-cover-scrim',
    'demo-cover-brand',
    'demo-cover-category',
    'demo-cover-topic',
    'demo-cover-tags',
    'coverToneClass',
    'demo-cover-tone-getting-started',
    'demo-cover-tone-projects',
    'demo-cover-tone-runtimes',
    'demo-cover-tone-databases-services',
    'demo-cover-tone-developer-tools',
    'demo-cover-tone-ai-mcp'
  ]) {
    assert.ok(source.includes(required), `missing ${required}`)
  }

  assert.match(source, /v-for="tag in demoCopy\(demo\)\.tags\.slice\(0, 4\)"/)
  assert.match(source, /class="demo-cover-thumbnail"/)
  assert.match(source, /class="demo-cover-native"/)
  assert.match(source, /class="demo-cover-scrim"/)
  assert.match(source, /class="demo-cover-topic"/)
})
```

The trailing whitespace after the final assertion should be removed before committing.

- [ ] **Step 2: Run the focused test and verify it fails**

Run: `node --test tests/demos-catalog.test.mjs`

Expected: the existing tests pass and the new test fails with `missing demo-cover-native` (or the first missing cover token).

- [ ] **Step 3: Commit the test contract**

```bash
git add tests/demos-catalog.test.mjs
git commit --only tests/demos-catalog.test.mjs -m "test: define native demos cover contract"
```

### Task 2: Implement localized capability covers

**Files:**
- Modify: `docs/components/AppDemos/index.vue:45-76`
- Modify: `docs/components/AppDemos/index.vue:90-124`
- Modify: `docs/components/AppDemos/index.vue:286-355`
- Modify: `docs/components/AppDemos/index.vue:705-790`

- [ ] **Step 1: Replace the featured cover markup**

Inside the featured card's existing `.demo-cover` button, keep the button and image URL but add the native layer before the play control:

```vue
<img
  class="demo-cover-thumbnail"
  :src="thumbnailUrl(demo)"
  alt=""
  width="480"
  height="270"
  loading="lazy"
  @error="hideBrokenThumbnail"
/>
<span class="demo-cover-scrim" aria-hidden="true"></span>
<span class="demo-cover-native" :class="coverToneClass(demo.category)">
  <span class="demo-cover-brand" aria-hidden="true">FlyEnv</span>
  <span class="demo-cover-category">{{ categoryLabel(demo.category) }}</span>
  <span class="demo-cover-topic">{{ demoCopy(demo).title }}</span>
  <span class="demo-cover-tags" aria-hidden="true">
    <span v-for="tag in demoCopy(demo).tags.slice(0, 4)" :key="tag">{{ tag }}</span>
  </span>
</span>
<span class="demo-play" aria-hidden="true"></span>
```

Do not change the button's localized `:aria-label` or click handler.

- [ ] **Step 2: Apply the same cover markup to regular catalog cards**

Make the identical replacement in the second `.demo-cover` button. Keeping both instances identical avoids a featured-only accessibility or fallback difference.

- [ ] **Step 3: Add the category tone map and helper**

After the `categoryValues` declaration, add a presentation-only map and helper:

```ts
const coverToneClasses: Record<DemoCategory, string> = {
  'getting-started': 'demo-cover-tone-getting-started',
  projects: 'demo-cover-tone-projects',
  runtimes: 'demo-cover-tone-runtimes',
  'databases-services': 'demo-cover-tone-databases-services',
  'developer-tools': 'demo-cover-tone-developer-tools',
  'ai-mcp': 'demo-cover-tone-ai-mcp'
}

function coverToneClass(category: DemoCategory) {
  return coverToneClasses[category]
}
```

This must not add fields to `Demo` or duplicate localized data.

- [ ] **Step 4: Replace thumbnail-dependent cover CSS with layered native CSS**

Keep `.demo-cover` at `aspect-ratio: 16 / 9`, then use these rules in the existing cover section:

```css
.demo-cover {
  background: #e7edf5;
  isolation: isolate;
}

.demo-cover-thumbnail,
.demo-cover-scrim,
.demo-cover-native {
  inset: 0;
  position: absolute;
}

.demo-cover-thumbnail {
  height: 100%;
  object-fit: cover;
  opacity: 0.18;
  transition: opacity 180ms ease, transform 180ms ease;
  width: 100%;
  z-index: 0;
}

.demo-cover-thumbnail.is-unavailable {
  opacity: 0;
}

.demo-cover-scrim {
  background: rgba(255, 255, 255, 0.7);
  z-index: 1;
}

.demo-cover-native {
  background: var(--cover-tint);
  border-top: 4px solid var(--cover-accent);
  color: var(--cover-ink);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 18px;
  z-index: 2;
}

.demo-cover-brand {
  color: var(--cover-accent);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.demo-cover-category {
  color: var(--cover-accent);
  font-size: 12px;
  font-weight: 700;
  margin-top: auto;
  overflow-wrap: anywhere;
}

.demo-cover-topic {
  font-size: clamp(17px, 2vw, 27px);
  font-weight: 760;
  line-height: 1.15;
  margin-top: 6px;
  max-width: 90%;
  overflow-wrap: anywhere;
}

.demo-cover-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 12px;
}

.demo-cover-tags span {
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.76);
  border-radius: 4px;
  color: var(--cover-ink);
  font-size: 11px;
  line-height: 1.25;
  max-width: 100%;
  overflow-wrap: anywhere;
  padding: 4px 6px;
}

.demo-cover-tone-getting-started { --cover-accent: #1d4ed8; --cover-tint: rgba(219, 234, 254, 0.9); --cover-ink: #172554; }
.demo-cover-tone-projects { --cover-accent: #047857; --cover-tint: rgba(209, 250, 229, 0.9); --cover-ink: #064e3b; }
.demo-cover-tone-runtimes { --cover-accent: #b45309; --cover-tint: rgba(254, 243, 199, 0.9); --cover-ink: #78350f; }
.demo-cover-tone-databases-services { --cover-accent: #4338ca; --cover-tint: rgba(224, 231, 255, 0.9); --cover-ink: #312e81; }
.demo-cover-tone-developer-tools { --cover-accent: #be185d; --cover-tint: rgba(252, 231, 243, 0.9); --cover-ink: #831843; }
.demo-cover-tone-ai-mcp { --cover-accent: #7c3aed; --cover-tint: rgba(237, 233, 254, 0.9); --cover-ink: #4c1d95; }

.demo-cover:hover .demo-cover-thumbnail {
  opacity: 0.24;
  transform: scale(1.025);
}

.demo-cover:hover .demo-cover-thumbnail.is-unavailable {
  opacity: 0;
}
```

Keep the existing `.demo-play` styles and focus rules. For mobile, reduce native cover padding to `14px` and cap `.demo-cover-topic` at `font-size: 20px` so localized titles do not crowd the play control.

- [ ] **Step 5: Run the focused tests**

Run: `node --test tests/demos-catalog.test.mjs tests/analytics-tracking.test.mjs`

Expected: all focused tests pass, including the new cover contract; no iframe, URL-state, or platform assertions regress.

- [ ] **Step 6: Commit the component change**

```bash
git add docs/components/AppDemos/index.vue
git commit --only docs/components/AppDemos/index.vue -m "feat: add native capability covers to demos"
```

### Task 3: Verify all locales and production build

**Files:**
- Verify: `docs/demos.md`
- Verify: `docs/zh/demos.md`
- Verify: `docs/id/demos.md`
- Verify: `docs/components/AppDemos/index.vue`
- Verify: `docs/data/demos.ts`

- [ ] **Step 1: Run the production build**

Run: `yarn docs:build`

Expected: VitePress exits with code 0. Existing syntax-highlighting, Browserslist, and chunk-size warnings may remain; record them without changing unrelated files.

- [ ] **Step 2: Run the browser smoke checks**

Start the preview server with `yarn docs:preview --host 127.0.0.1 --port 4173` (use another free port if needed), then check `/demos.html`, `/zh/demos.html`, `/id/demos.html` at desktop and a 390px-wide viewport. Confirm:

- 80 cards render and each cover contains native topic/category content before image loading.
- A blocked or failed `i.ytimg.com` request leaves the native cover visible without layout shift.
- Search and category URL state still work; initial iframes remain zero.
- Opening a demo creates one iframe, Escape closes it, and focus returns to the triggering cover.
- Chinese selects a mapped Bilibili URL and falls back to YouTube for an unmapped demo; English and Indonesian select YouTube.

- [ ] **Step 3: Run the final focused test command**

Run: `node --test tests/demos-catalog.test.mjs tests/analytics-tracking.test.mjs`

Expected: all tests pass. Do not claim the full test suite is clean if unrelated baseline Community tests still fail.

- [ ] **Step 4: Commit only if verification required a follow-up fix**

```bash
git add docs/components/AppDemos/index.vue tests/demos-catalog.test.mjs
git commit --only docs/components/AppDemos/index.vue tests/demos-catalog.test.mjs -m "fix: polish demos capability card verification"
```
