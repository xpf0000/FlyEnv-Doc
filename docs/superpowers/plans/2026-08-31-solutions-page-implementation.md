# English Solutions Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add an English, project-first `/solutions/` directory where visitors can filter and search local development stacks supported by FlyEnv.

**Architecture:** Static, typed solution metadata in `docs/data/solutions.ts` supplies every category button and card. `AppSolutions/en.vue` owns client-side discovery state with Vue `ref` and `computed`, while `docs/solutions.md` supplies crawlable document metadata and mounts the component. The root VitePress navigation links to the new English route.

**Tech Stack:** VitePress 1, Vue 3 Composition API, TypeScript, Tailwind CSS 3, Node built-in test runner.

**Spec:** `docs/superpowers/specs/2026-08-31-solutions-page-design.md`

## Global Constraints

- Build only the English `/solutions/` directory in this change.
- Do not create `/solutions/{slug}` pages or card links until the detail pages exist.
- Do not imply templates, a marketplace, one-click project installation, or a fake FlyEnv client interface.
- Reuse existing official `/assets/demo-logos/` assets and use Simple Icons CDN marks only for projects missing a local asset; add no dependencies or generated imagery.
- Keep the full project directory in static HTML; filters may only narrow it client-side.
- Use the existing light FlyEnv visual language: restrained blue accents, soft borders, and no automatic animation.
- Preserve all unrelated working-tree changes.

## File Map

- Create `docs/data/solutions.ts`: English solution-category types, filter labels, and the 20-item static project catalogue.
- Create `docs/components/AppSolutions/en.vue`: Hero, project-to-runtime visual, discovery controls, grid, help steps, final CTA, and scoped styles.
- Create `docs/solutions.md`: VitePress page frontmatter, SEO metadata, JSON-LD, and component mount.
- Modify `docs/.vitepress/config.mts`: Add one root-locale `Solutions` navigation link.
- Create `tests/solutions-page.test.mjs`: Static regression checks for the data source, page metadata, navigation, filtering/accessibility hooks, and the deliberate absence of future detail-route links.

---

### Task 1: Create the Static Solutions Data Source

**Files:**
- Create: `docs/data/solutions.ts`
- Create: `tests/solutions-page.test.mjs`

**Interfaces:**
- Produces `SolutionCategory`, `Solution`, `solutionCategories`, and `solutions` from `docs/data/solutions.ts`.
- `Solution` has `name: string`, `slug: string`, `category: SolutionCategory`, `description: string`, `logo: string`, and `stack: string[]`.
- `solutionCategoryLabels` maps every `SolutionCategory` to the label used in cards and search matching.
- `AppSolutions/en.vue` consumes the named `solutionCategories` and `solutions` exports in Task 2.

- [ ] **Step 1: Write the failing data-catalogue test**

```js
import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import test from 'node:test'
import { fileURLToPath } from 'node:url'

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const read = (path) => readFileSync(resolve(projectRoot, path), 'utf8')

test('Solutions data defines a project-first catalogue across every supported category', () => {
  const dataPath = resolve(projectRoot, 'docs/data/solutions.ts')
  assert.ok(existsSync(dataPath), 'docs/data/solutions.ts should exist')

  const source = read('docs/data/solutions.ts')
  for (const category of ['frameworks', 'cms', 'ecommerce', 'erp', 'crm', 'developer-tools', 'data-analytics']) {
    assert.match(source, new RegExp(`'${category}'`))
  }
  for (const name of ['WordPress', 'Laravel', 'Django', 'ERPNext', 'Gitea', 'Metabase']) {
    assert.match(source, new RegExp(`name: '${name}'`))
  }
  assert.ok((source.match(/slug: '/g) || []).length >= 20, 'catalogue should contain at least 20 solutions')
  assert.match(source, /logo: '\/assets\/demo-logos\//)
  assert.match(source, /stack: \[/)
})
```

- [ ] **Step 2: Run the data-catalogue test to verify it fails**

Run: `node --test tests/solutions-page.test.mjs`

Expected: FAIL because `docs/data/solutions.ts` does not exist.

- [ ] **Step 3: Implement the typed English catalogue**

```ts
export type SolutionCategory =
  | 'frameworks'
  | 'cms'
  | 'ecommerce'
  | 'erp'
  | 'crm'
  | 'developer-tools'
  | 'data-analytics'

export interface Solution {
  name: string
  slug: string
  category: SolutionCategory
  description: string
  logo: string
  stack: string[]
}

export const solutionCategoryLabels: Record<SolutionCategory, string> = {
  frameworks: 'Frameworks',
  cms: 'CMS & Websites',
  ecommerce: 'E-commerce',
  erp: 'ERP & Business Apps',
  crm: 'CRM',
  'developer-tools': 'Developer Tools',
  'data-analytics': 'Data & Analytics'
}

export const solutionCategories = [
  { value: 'all', label: 'All' },
  { value: 'frameworks', label: 'Frameworks' },
  { value: 'cms', label: 'CMS & Websites' },
  { value: 'ecommerce', label: 'E-commerce' },
  { value: 'erp', label: 'ERP & Business Apps' },
  { value: 'crm', label: 'CRM' },
  { value: 'developer-tools', label: 'Developer Tools' },
  { value: 'data-analytics', label: 'Data & Analytics' }
] as const
```

Add exactly these 20 entries with their existing logo paths and stack tags: Laravel, Django, FastAPI, Spring Boot, WordPress, Drupal, Ghost, Nextcloud, Magento, PrestaShop, OpenCart, ERPNext, Odoo, SuiteCRM, EspoCRM, Gitea, Strapi, Directus, Matomo, and Metabase. Use the local official asset when present; otherwise use the matching `https://cdn.simpleicons.org/<slug>` source.

- [ ] **Step 4: Run the data-catalogue test to verify it passes**

Run: `node --test tests/solutions-page.test.mjs`

Expected: PASS for `Solutions data defines a project-first catalogue across every supported category`.

- [ ] **Step 5: Commit the focused data and test changes**

```bash
git add docs/data/solutions.ts tests/solutions-page.test.mjs
git commit --only -m "feat: add solutions catalogue data" -- docs/data/solutions.ts tests/solutions-page.test.mjs
```

### Task 2: Implement the Searchable English Directory Route

**Files:**
- Create: `docs/components/AppSolutions/en.vue`
- Create: `docs/solutions.md`
- Modify: `docs/.vitepress/config.mts`
- Modify: `tests/solutions-page.test.mjs`

**Interfaces:**
- Consumes `solutionCategories`, `solutionCategoryLabels`, and `solutions` from `../../data/solutions`.
- Produces `/solutions/` with title `Solutions - Run Popular Development Projects Locally | FlyEnv`.
- Produces `filteredSolutions`, a computed array filtered by category and the normalized name, description, category label, and stack text.

- [ ] **Step 1: Extend the failing route-and-interaction test**

```js
test('English Solutions route exposes accessible discovery controls without future detail links', () => {
  const pagePath = resolve(projectRoot, 'docs/solutions.md')
  const componentPath = resolve(projectRoot, 'docs/components/AppSolutions/en.vue')
  assert.ok(existsSync(pagePath), 'docs/solutions.md should exist')
  assert.ok(existsSync(componentPath), 'docs/components/AppSolutions/en.vue should exist')

  const page = read('docs/solutions.md')
  const component = read('docs/components/AppSolutions/en.vue')
  const config = read('docs/.vitepress/config.mts')

  assert.match(page, /title: 'Solutions - Run Popular Development Projects Locally \| FlyEnv'/)
  assert.match(page, /Run popular frameworks, CMS platforms, e-commerce apps, ERP systems and developer tools locally with FlyEnv/)
  assert.match(page, /<AppSolutions \/>/)
  assert.match(config, /\{ text: 'Solutions', link: '\/solutions' \}/)
  for (const hook of ['computed', 'filteredSolutions', 'aria-pressed', 'aria-live="polite"', 'type="search"', 'Search projects...']) {
    assert.ok(component.includes(hook), `missing ${hook}`)
  }
  assert.doesNotMatch(component, /\/solutions\/\$\{|href="\/solutions\//)
  assert.match(component, /href="#solutions-catalog"/)
  assert.match(component, /href="\/download"/)
})
```

- [ ] **Step 2: Run the full Solutions test file to verify the route test fails**

Run: `node --test tests/solutions-page.test.mjs`

Expected: the data-catalogue test passes and the new route test fails because the page and component do not exist.

- [ ] **Step 3: Implement the page component and route**

In `AppSolutions/en.vue`:

```ts
import { computed, ref } from 'vue'
import { solutionCategories, solutionCategoryLabels, solutions } from '../../data/solutions'
import type { SolutionCategory } from '../../data/solutions'

type FilterValue = 'all' | SolutionCategory

const activeCategory = ref<FilterValue>('all')
const searchQuery = ref('')
const categoryLabel = (category: SolutionCategory) => solutionCategoryLabels[category]

const filteredSolutions = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()
  return solutions.filter((solution) => {
    const categoryMatches = activeCategory.value === 'all' || solution.category === activeCategory.value
    const searchable = [solution.name, solution.description, categoryLabel(solution.category), ...solution.stack]
      .join(' ')
      .toLowerCase()
    return categoryMatches && (!query || searchable.includes(query))
  })
})
```

Render a semantic `main` with:

- Hero label `SOLUTIONS`, the required H1, the specified project-first description, an anchor to `#solutions-catalog`, and `/download` CTA.
- A decorative, aria-hidden project-to-FlyEnv-to-runtime visual using WordPress, Laravel, Django, ERPNext, Gitea, PHP, Python, Node.js, MySQL, PostgreSQL, Redis, and Nginx logos.
- A native filter `button` for every `solutionCategories` entry, `:aria-pressed`, an explicitly labelled `type="search"` input, a polite live result-count element, and an empty-state reset button.
- A static `article` grid, without anchors or buttons, showing logo, H3, category badge, one- or two-line description, and stack tags.
- `How FlyEnv Helps` as an ordered four-step list with `Choose a project`, `Set up the environment`, `Start the stack`, and `Develop locally`.
- The required final CTA with `/download` and `/guide/getting-started` anchors.
- Scoped CSS for a stable desktop split, 4/3/2/1 card grid, mobile category scroll row, and reduced visual content in the hero at less than 768px. Use only CSS hover/focus transitions.

In `docs/solutions.md`, use `layout: home`, add the title and meta description from the specification, a canonical `https://flyenv.com/solutions.html`, an English `CollectionPage` JSON-LD entry, import `AppSolutions`, and render `<AppSolutions />`.

In `docs/.vitepress/config.mts`, add `{ text: 'Solutions', link: '/solutions' }` in the `root.themeConfig.nav` array. Do not modify Chinese or Indonesian navigation.

- [ ] **Step 4: Run the full Solutions test file to verify it passes**

Run: `node --test tests/solutions-page.test.mjs`

Expected: PASS with both Solutions tests green.

- [ ] **Step 5: Commit the route, component, navigation, and test changes**

```bash
git add docs/components/AppSolutions/en.vue docs/solutions.md docs/.vitepress/config.mts tests/solutions-page.test.mjs
git commit --only -m "feat: add English Solutions directory" -- docs/components/AppSolutions/en.vue docs/solutions.md docs/.vitepress/config.mts tests/solutions-page.test.mjs
```

### Task 3: Verify the Page in the Built Site

**Files:**
- Verify: `docs/data/solutions.ts`
- Verify: `docs/components/AppSolutions/en.vue`
- Verify: `docs/solutions.md`
- Verify: `docs/.vitepress/config.mts`
- Verify: `tests/solutions-page.test.mjs`

**Interfaces:**
- Verifies `/solutions/` renders with no VitePress build failure and is usable at desktop and mobile dimensions.

- [ ] **Step 1: Run the focused regression test**

Run: `node --test tests/solutions-page.test.mjs`

Expected: PASS with 2 tests and 0 failures.

- [ ] **Step 2: Run the complete test suite**

Run: `node --test tests/*.test.mjs`

Expected: PASS with 0 failures.

- [ ] **Step 3: Build the documentation site**

Run: `yarn docs:build`

Expected: VitePress completes with exit code 0 and includes `solutions.html` in `docs/.vitepress/dist/`.

- [ ] **Step 4: Inspect responsive page behavior**

Run: `yarn docs:dev --host 127.0.0.1 --port 4173`

Use Playwright to capture `/solutions/` at `1440x1100` and `390x844`. Verify all cards are visible, controls remain usable, no text overlaps, desktop cards are four columns at wide width, and mobile cards are one column with horizontally scrollable categories.

- [ ] **Step 5: Inspect runtime interactions**

In the running page, select `Frameworks`, search `Laravel`, then clear search and select `All`. Verify the live result summary changes and the unfiltered catalogue returns. Confirm every solution card is static and no click targets navigate to unimplemented detail routes.

## Plan Self-Review

- Spec coverage: Task 1 owns the catalogue and category model; Task 2 owns page structure, metadata, accessibility, responsive behavior, CTA behavior, and deliberate absence of detail routes; Task 3 covers the build and desktop/mobile interaction checks.
- Placeholder scan: no tasks contain deferred implementation language; all required names, file paths, commands, and interface names are concrete.
- Type consistency: Task 1 exports `SolutionCategory`, `solutionCategories`, and `solutions`; Task 2 imports those exact names and uses `FilterValue = 'all' | SolutionCategory`.
