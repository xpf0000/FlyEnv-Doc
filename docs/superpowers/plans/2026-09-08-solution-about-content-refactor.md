# Solution About Content Refactor Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace generic generated About content with technology-specific local-development content for every published Solution except Next.js.

**Architecture:** `docs/data/solution-use-cases.ts` remains the typed source consumed by `AppSolutionDetail/en.vue`, but exports explicit records for each slug and locale rather than deriving prose from a family template. The shared renderer and its existing About layout remain unchanged.

**Tech Stack:** VitePress 1, Vue 3, TypeScript, Node built-in test runner.

**Spec:** `task/solutinos1.md`

## Global Constraints

- Preserve the existing Next.js records byte-for-byte in intent and do not change their content.
- Preserve the current Solution page layout, routes, Hero, stack, FlyEnv-help, CTA, and CSS.
- Supply manually authored, technology-specific content for the remaining 39 slugs in English, Chinese, and Indonesian.
- Do not describe an optional service as a required dependency.
- Do not use a profile/template/generator function to create final About prose.
- Preserve unrelated working-tree changes and do not commit without an explicit request.

---

### Task 1: Define a regression contract for non-templated About content

**Files:**
- Modify: `tests/solutions-page.test.mjs`

**Interfaces:**
- Consumes `solutionAboutContentByLocale` from `docs/data/solution-use-cases.ts`.
- Requires 40 published slugs across `en`, `zh`, and `id`.
- Requires the 39 non-Next.js records to have 1-2 descriptive paragraphs, 4-7 capabilities, 3-5 use cases, and 3-6 local-environment items.

- [ ] **Step 1: Write the failing test**

```js
assert.doesNotMatch(read('docs/data/solution-use-cases.ts'), /const (profiles|templates|createContent|generatedContent)/)
assert.ok(about.paragraphs?.length >= 1)
assert.ok(about.localEnvironment.items.length >= 3 && about.localEnvironment.items.length <= 6)
```

- [ ] **Step 2: Run the focused test to verify it fails**

Run: `node --test tests/solutions-page.test.mjs`

Expected: FAIL because the existing file derives records from `profiles`, `templates`, and `createContent`.

### Task 2: Replace generated records with authored technical content

**Files:**
- Modify: `docs/data/solution-use-cases.ts`

**Interfaces:**
- Produces `solutionAboutContentByLocale: Record<SolutionAboutLocale, Record<SolutionSlug, SolutionAboutContent>>`.
- Keeps the existing `SolutionAboutContent` and `LocalEnvironmentItem` shapes so `AppSolutionDetail/en.vue` needs no change.
- Keeps `nextjsAboutContentByLocale` as the reference content.

- [ ] **Step 1: Remove the generic profile and template generation path**

Delete `SolutionFamily`, `SolutionProfile`, `profiles`, `templates`, `localEnvironmentItems`, `createContent`, and `generatedContent`.

- [ ] **Step 2: Add explicit English records for every non-Next.js slug**

For each record, state what the technology is, its distinct development model, 4-7 recognizable capabilities, 3-5 realistic use cases, and only the relevant local processes. Include framework-specific workflows such as Laravel Artisan/queues/scheduler/Vite, Django `manage.py`/migrations/Celery/static-media, Magento Composer/OpenSearch/cron/static content, WordPress themes/plugins/uploads/WP-CLI, and NestJS modules/DI/ORM/BullMQ or broker only where applicable.

- [ ] **Step 3: Add equivalent Chinese and Indonesian records**

Translate each explicit record without reverting to generic family wording. Preserve official command and product names, and keep qualifiers for optional services.

- [ ] **Step 4: Run the focused test to verify it passes**

Run: `node --test tests/solutions-page.test.mjs`

Expected: PASS with every route and locale represented and no generated-content implementation symbols.

### Task 3: Check technical distinctness and build output

**Files:**
- Verify: `docs/data/solution-use-cases.ts`
- Verify: `docs/components/AppSolutionDetail/en.vue`
- Verify: `tests/solutions-page.test.mjs`

**Interfaces:**
- Verifies the existing Vue renderer accepts all explicit records during static-site generation.

- [ ] **Step 1: Add representative content assertions**

```js
assert.match(aboutContentByLocale.en.laravel.localEnvironment.items.map((item) => item.title).join(' '), /Artisan|Queue|Scheduler|Vite/)
assert.match(aboutContentByLocale.en.django.localEnvironment.items.map((item) => item.description).join(' '), /manage.py|Celery|static|media/i)
assert.match(aboutContentByLocale.en.magento.localEnvironment.items.map((item) => item.title).join(' '), /OpenSearch|Cron|Static/)
```

- [ ] **Step 2: Run test, lint, and build**

Run: `node --test tests/solutions-page.test.mjs`

Run: `yarn eslint docs/data/solution-use-cases.ts docs/components/AppSolutionDetail/en.vue tests/solutions-page.test.mjs`

Run: `yarn docs:build`

Expected: all commands exit 0.

- [ ] **Step 3: Perform the required cross-page review**

Compare Laravel, Django, NestJS, WordPress, and Magento in all rendered records. Confirm their capabilities, use cases, and local-environment labels contain distinct technical concepts and that Next.js remains unchanged.

## Plan Self-Review

- Spec coverage: Task 1 makes the former generic approach fail, Task 2 replaces every generated record, and Task 3 validates technical recognition, supported locales, static generation, and the required cross-category comparison.
- Placeholder scan: each task names its files, contract, verification command, and specific representative concepts.
- Type consistency: every record retains the existing `SolutionAboutContent` shape consumed by the current component.
