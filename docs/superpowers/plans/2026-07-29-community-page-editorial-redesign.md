# Community Page Editorial Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the noisy Community dashboard with a responsive editorial library that makes independent FlyEnv stories easy to discover and retains a clear `Join the Community` section.

**Architecture:** Keep the two pages and their static JSON datasets intact. Rebuild `AppCommunityPosts` as the page’s content library, preserving the existing `posts` and `locale` contract while deriving all display values locally. Restyle the two supporting components and remove the redundant scenario-map placement from both Markdown pages. A small static Node test protects the intended page composition.

**Tech Stack:** VitePress 1, Vue 3 Composition API, TypeScript, scoped CSS, Node.js built-in test runner, Playwright.

---

## File structure

- Create `tests/community-page-redesign.test.mjs` — checks both locale pages use the redesigned library and keep the Community join and contribution surfaces.
- Modify `docs/components/AppCommunityPosts/index.vue` — editorial masthead, lead article, accessible filters, article library, dataset-derived counters, and light/dark responsive styles.
- Modify `docs/components/AppCommunityChannels/index.vue` — accurate Community destination cards in the shared visual language.
- Modify `docs/components/AppCommunityCTA/index.vue` — contribution close without unsupported engagement claims.
- Modify `docs/community.md` and `docs/zh/community.md` — simplify component order and remove `ScenarioMap` imports.

### Task 1: Add a page-composition regression test

**Files:**
- Create: `tests/community-page-redesign.test.mjs`
- Test: `tests/community-page-redesign.test.mjs`

- [ ] **Step 1: Write the failing test**

```js
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import test from 'node:test'

const read = (path) => readFileSync(resolve(process.cwd(), path), 'utf8')

for (const page of ['docs/community.md', 'docs/zh/community.md']) {
  test(`${page} composes the editorial community library`, () => {
    const source = read(page)
    assert.match(source, /import AppCommunityPosts/)
    assert.match(source, /<AppCommunityPosts :posts="posts"/)
    assert.match(source, /<AppCommunityChannels title=/)
    assert.match(source, /<AppCommunityCTA :posts="posts"/)
    assert.doesNotMatch(source, /AppCommunityScenarioMap/)
  })
}

test('the post library has the editorial interaction hooks', () => {
  const source = read('docs/components/AppCommunityPosts/index.vue')
  for (const hook of ['community-library', 'story-masthead', 'aria-pressed', 'showMore']) {
    assert.ok(source.includes(hook), `missing ${hook}`)
  }
})
```

- [ ] **Step 2: Run the new test before implementation**

Run: `node --test tests/community-page-redesign.test.mjs`

Expected: the two locale tests fail because both pages still import `AppCommunityScenarioMap`; the component-hook test fails because the new library does not exist yet.

### Task 2: Rebuild the content surface around real developer stories

**Files:**
- Modify: `docs/components/AppCommunityPosts/index.vue`
- Test: `tests/community-page-redesign.test.mjs`

- [ ] **Step 1: Replace the existing template with the editorial hierarchy**

Render these semantic regions in this exact order:

```vue
<section class="community-library">
  <header class="story-masthead">...</header>
  <section v-if="leadPost" class="lead-story">...</section>
  <nav class="story-filters" :aria-label="t.filterLabel">...</nav>
  <section class="story-library" :aria-live="'polite'">...</section>
</section>
```

The masthead must contain a localized title, a plain-language explanation that public stories are gathered in one place, and four counters derived from the input data. The lead story must use a real post, its external URL, source, author, date, summary, and no more than two tags. The library must not repeat the lead post while `all` is selected.

- [ ] **Step 2: Add typed, derived view state**

Use this data shape and state logic:

```ts
interface Post {
  id: string
  title: string
  url: string
  author?: string
  platform: string
  language: string
  date: string
  summary: string
  tags: string[]
  featured?: boolean
  quality_score?: number
  relevance_score?: number
}

const activeFilter = ref('all')
const showMore = ref(false)
const orderedPosts = computed(() => [...props.posts].sort((a, b) => b.date.localeCompare(a.date)))
const leadPost = computed(() => orderedPosts.value[0])
const filteredPosts = computed(() => {
  const source = activeFilter.value === 'all'
    ? orderedPosts.value.filter((post) => post.id !== leadPost.value?.id)
    : orderedPosts.value.filter((post) => post.tags.includes(activeFilter.value))
  return showMore.value ? source : source.slice(0, 9)
})

function selectFilter(value: string) {
  activeFilter.value = value
  showMore.value = false
}
```

Define only filters represented by existing tag data; render each as a native button with `:aria-pressed="activeFilter === filter.value"` and call `selectFilter(filter.value)`.

- [ ] **Step 3: Implement locale helpers and safe fallbacks**

Provide English and Chinese labels for all headings, actions, filter labels, empty states, and dates. Compute article, author, language, and platform counts with `Set`; filter blank authors. Render an unknown platform as text, rather than injecting HTML. Use `new Intl.DateTimeFormat` with the page locale. Use `target="_blank" rel="noopener noreferrer ugc"` for all article links.

- [ ] **Step 4: Implement the shared visual system**

Use scoped CSS custom properties with a warm white/ink base and one teal accent. The desktop masthead must be asymmetric (copy left, a typographic count panel right), while mobile becomes one column below 768px. Use rules and negative space for grouping; only the lead story and each article should have a bordered surface. Avoid emoji, rainbow gradients, fabricated metrics, and colored “type badge” taxonomy. Add `:focus-visible`, a conservative hover translation, and this motion fallback:

```css
@media (prefers-reduced-motion: reduce) {
  .community-library *,
  .community-library *::before,
  .community-library *::after {
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
  }
}
```

- [ ] **Step 5: Run the regression test**

Run: `node --test tests/community-page-redesign.test.mjs`

Expected: the component-hook test passes; locale composition tests still fail until Task 4 removes `ScenarioMap`.

### Task 3: Bring community destinations and the closing invitation into the same system

**Files:**
- Modify: `docs/components/AppCommunityChannels/index.vue`
- Modify: `docs/components/AppCommunityCTA/index.vue`

- [ ] **Step 1: Rebuild the channel component around accurate calls to action**

Keep the existing four destination names and URLs. Remove numerical status text such as member counts and online counts because it is not live data. Each card needs an icon, name, localized “Open community”/“进入社区” action label, and the existing external-link safety attributes when an URL exists. The QQ card must be explicitly marked as “Group number: 540738893”/“群号：540738893” and remain non-clickable because no join URL is provided.

- [ ] **Step 2: Restyle channels**

Use a four-column grid at desktop, two columns on compact screens, and one column below 480px. Give the section a subtle top rule, retain the supplied `title` as the visible `h2`, and use the same ink/teal tokens, focus state, and dark-mode overrides as the story library.

- [ ] **Step 3: Simplify the contribution CTA**

Keep the locale-aware existing license route. Change the message to explain that a public FlyEnv article can be surfaced here for other developers, then show only dataset-derived author/language/platform coverage. Use a neutral bordered close rather than a multi-color gradient banner, and retain the external-arrow affordance in the action.

### Task 4: Assemble the two localized pages

**Files:**
- Modify: `docs/community.md`
- Modify: `docs/zh/community.md`
- Test: `tests/community-page-redesign.test.mjs`

- [ ] **Step 1: Remove the redundant scenario-map imports and render calls**

For both pages, remove:

```vue
import AppCommunityScenarioMap from '../components/AppCommunityEvidence/ScenarioMap.vue'
<AppCommunityScenarioMap :posts="posts" :evidence="communityEvidence.zh" locale="zh" />
```

Use the locale-correct relative import in the English page, and also remove the now-unused `communityEvidence` import. Leave this component sequence:

```vue
<AppCommunityPosts :posts="posts" locale="en" />
<AppCommunityChannels title="Join the Community" locale="en" />
<AppCommunityCTA :posts="posts" locale="en" />
```

Use the existing Chinese titles and `locale="zh"` on the Chinese page.

- [ ] **Step 2: Run the static tests**

Run: `node --test tests/community-page-redesign.test.mjs tests/community-content-refresh.test.mjs`

Expected: all Community tests pass.

### Task 5: Build and inspect the shipped pages

**Files:**
- Verify: `docs/.vitepress/dist/community.html`
- Verify: `docs/.vitepress/dist/zh/community.html`

- [ ] **Step 1: Build VitePress**

Run: `yarn docs:build`

Expected: VitePress completes successfully and writes both locale pages.

- [ ] **Step 2: Run a Playwright visual audit**

Start the preview server and use a temporary Playwright script to capture `community-en-light.png`, `community-en-dark.png`, `community-en-mobile.png`, `community-zh-light.png`, and `community-zh-mobile.png`. At each locale, click an available topic filter and assert that the visible story count changes or the selected state changes; assert no browser console error occurs. Capture at 1440×1100 and 390×844.

- [ ] **Step 3: Review screenshots and correct visual defects**

Inspect every capture for clipped copy, contrast problems, inconsistent dark-mode backgrounds, horizontal overflow, unclear action targets, empty cards, and a lost `Join the Community` heading. Make focused CSS/template corrections, then rerun the relevant screenshot capture and `yarn docs:build`.

- [ ] **Step 4: Verify scope and commit only redesign files**

Run: `git status --short` and confirm existing `task/` and `.superpowers/` changes remain untouched. Stage only the five implementation files and the new regression test, then commit:

```bash
git add tests/community-page-redesign.test.mjs \
  docs/components/AppCommunityPosts/index.vue \
  docs/components/AppCommunityChannels/index.vue \
  docs/components/AppCommunityCTA/index.vue \
  docs/community.md docs/zh/community.md \
  docs/superpowers/plans/2026-07-29-community-page-editorial-redesign.md
git commit -m "feat: redesign community story library"
```

## Plan self-review

- **Spec coverage:** Task 2 covers the masthead, data-derived lead proof, filterable article library, localized copy, responsive behavior, and motion/accessibility. Task 3 preserves and corrects the Join section plus closing CTA. Task 4 removes the competing ScenarioMap hierarchy. Task 5 covers visual verification in both locales, theme variants, desktop and mobile.
- **Placeholder scan:** No unresolved placeholder, ambiguous implementation instruction, or invented data remains in the plan.
- **Type consistency:** `Post`, `activeFilter`, `showMore`, `orderedPosts`, `leadPost`, `filteredPosts`, and `selectFilter` use the same names throughout the plan.
