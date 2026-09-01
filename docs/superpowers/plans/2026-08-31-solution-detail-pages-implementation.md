# English Solution Detail Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish English, project-specific FlyEnv local-environment pages for every project in the existing 20-item Solutions catalogue.

**Architecture:** Keep project-specific facts in a typed data source keyed by the existing catalogue slug. A shared Vue component renders the authoring-rule structure from that data during VitePress static-site generation, while one Markdown route per project supplies its unique SEO frontmatter. The existing catalogue gains a restrained detail-page link for every card.

**Tech Stack:** VitePress 1, Vue 3 Composition API, TypeScript, Tailwind CSS 3, Node built-in test runner.

**Spec:** `task/laravel-solution.md`, `task/magento-solution.md`, and `task/solution-page-rules.md`.

## Global Constraints

- Create English pages only for the 20 current `solutions` entries.
- Use `Run {Project} Locally with FlyEnv` for each document title and H1.
- Describe typical local stacks, never version-independent mandatory requirements.
- Link to official project resources and leave project installation commands to upstream documentation.
- Do not generate, embed, or imply fake project screenshots, FlyEnv screens, demos, marketplaces, templates, or one-click installs.
- Omit demo and running-project sections until real matching assets exist.
- Use only Tailwind utilities for new presentation and add no dependencies.
- Preserve all unrelated working-tree changes.

## File Map

- Create `docs/data/solution-details.ts`: typed project-specific detail content keyed by existing solution slug.
- Create `docs/components/AppSolutionDetail/en.vue`: SSR-safe shared detail-page layout.
- Create `docs/solutions/*.md`: 20 SEO frontmatter documents that mount the shared component with their slug.
- Modify `docs/components/AppSolutions/en.vue`: add a card-level detail link and analytics attribute.
- Modify `tests/solutions-page.test.mjs`: cover the 20 detail routes, shared component, internal links, and the removal of the deliberate detail-route exclusion.

---

### Task 1: Define the detail-page route contract

**Files:**
- Modify: `tests/solutions-page.test.mjs`

**Interfaces:**
- Consumes the 20 literals in `docs/data/solutions.ts`.
- Requires each `docs/solutions/{slug}.md` route to mount `<AppSolutionDetail slug="{slug}" />`.
- Requires `docs/components/AppSolutionDetail/en.vue` and `docs/data/solution-details.ts` to exist.

- [ ] Add a test that names every catalogue slug and asserts that its Markdown route exists, has the prescribed title, and passes the matching slug to the shared component.
- [ ] Add checks that the shared component exposes the rule-required sections and the catalogue renders `/solutions/${solution.slug}` links.
- [ ] Run `node --test tests/solutions-page.test.mjs` and confirm the test fails because routes and component are absent.

### Task 2: Create project-specific detail data and renderer

**Files:**
- Create: `docs/data/solution-details.ts`
- Create: `docs/components/AppSolutionDetail/en.vue`

**Interfaces:**
- `SolutionDetail` extends a project through `summary`, `resources`, `stack`, `help`, `setupSteps`, `capabilities`, `relatedSlugs`, and optional existing guide link.
- `solutionDetails` is a `Record<string, SolutionDetail>` keyed by existing catalogue slugs.
- `AppSolutionDetail` receives `slug: string`, resolves both data sources, and renders static HTML without browser-only APIs.

- [ ] Add all 20 entries with verified official Website, GitHub, and Documentation links where each exists.
- [ ] Keep every service claim qualified as typical, optional, project-configured, or release-dependent when relevant.
- [ ] Render the fixed rule order: hero, project description/resources, typical stack, project-specific FlyEnv help, high-level setup, example stack, capabilities, related solutions, and factual CTA.
- [ ] Add `!list-none` and `!mt-0` to list patterns affected by the VitePress global list styling.

### Task 3: Add static English page routes

**Files:**
- Create: `docs/solutions/laravel.md`
- Create: `docs/solutions/django.md`
- Create: `docs/solutions/fastapi.md`
- Create: `docs/solutions/spring-boot.md`
- Create: `docs/solutions/wordpress.md`
- Create: `docs/solutions/drupal.md`
- Create: `docs/solutions/ghost.md`
- Create: `docs/solutions/nextcloud.md`
- Create: `docs/solutions/magento.md`
- Create: `docs/solutions/prestashop.md`
- Create: `docs/solutions/opencart.md`
- Create: `docs/solutions/erpnext.md`
- Create: `docs/solutions/odoo.md`
- Create: `docs/solutions/suitecrm.md`
- Create: `docs/solutions/espocrm.md`
- Create: `docs/solutions/gitea.md`
- Create: `docs/solutions/strapi.md`
- Create: `docs/solutions/directus.md`
- Create: `docs/solutions/matomo.md`
- Create: `docs/solutions/metabase.md`

**Interfaces:**
- Each route declares a unique `title`, `description`, Open Graph description, canonical URL, and keyword string.
- Each route imports `../components/AppSolutionDetail/en.vue` and mounts the component with its literal slug.

- [ ] Create each route with `layout: doc` and only its route-specific SEO metadata plus component mount.
- [ ] Ensure every description names its project and naturally references local development, where helpful, Windows, macOS, and Linux.
- [ ] Run the focused test and confirm all route contracts pass.

### Task 4: Connect the catalogue and verify output

**Files:**
- Modify: `docs/components/AppSolutions/en.vue`
- Modify: `tests/solutions-page.test.mjs`

**Interfaces:**
- Each solution card includes `href="/solutions/${solution.slug}"` and `data-analytics-event="solution_detail_click"`.
- The shared detail component can create related links with the same route format.

- [ ] Add a subdued `View solution` link to every catalogue card without changing filter or search behavior.
- [ ] Run `node --test tests/solutions-page.test.mjs`.
- [ ] Run `yarn docs:build`.
- [ ] Use Playwright at desktop and mobile viewports to inspect Laravel, Magento, a Python page, and a self-hosted-service page; verify headings, official links, no overflow, and no empty screenshot/demo placeholder.
