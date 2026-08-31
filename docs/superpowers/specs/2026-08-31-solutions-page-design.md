# English Solutions Page Design

## Scope

Create the English `/solutions/` directory page only. Do not create solution detail pages or link cards to future `/solutions/{slug}` routes. Chinese and Indonesian localizations are explicitly deferred until the English implementation has been reviewed.

## Goal

Position FlyEnv as the local development environment behind projects people want to run. The page leads with projects such as WordPress, Laravel, Django, ERPNext, and Gitea, then shows their runtime and service dependencies. It must not imply one-click project installation, a marketplace, or templates in the FlyEnv desktop app.

## Existing Context

- The site is VitePress with Vue 3 and Tailwind CSS 3.
- The current English navigation has no Solutions destination. Add one English `Solutions` item without modifying Chinese or Indonesian navigation in this task.
- Official logos for the proposed projects and services already exist under `/assets/demo-logos/`; no generated or fabricated product visuals are needed.
- Existing UI uses pale backgrounds, FlyEnv blue and violet accents, light borders, and compact rounded cards. This page will use the same visual language while keeping a white, developer-tool orientation.

## Page Structure

1. Hero: a left-aligned label, H1, explanatory copy, a button that scrolls to the catalogue, and a secondary `/download` link. The right side is a responsive project-to-FlyEnv-to-services visual using the existing official logo assets.
2. Discovery controls: horizontally scrollable category buttons on small screens, a labelled full-text search field, and an accessible empty result state.
3. Catalogue: a semantic heading and responsive grid of static solution cards. Cards show logo, name, category, description, and subdued stack tags. Cards are not links in V1 because there are no detail pages yet.
4. Help steps: four concise, ordered project-environment steps.
5. Final CTA: download and documentation links, styled within the established blue-violet FlyEnv CTA treatment.

## Components and Data

- `docs/data/solutions.ts` owns English solution metadata and category labels. It includes at least 20 entries across Frameworks, CMS & Websites, E-commerce, ERP & Business Apps, CRM, Developer Tools, and Data & Analytics.
- `docs/components/AppSolutions/en.vue` owns the page experience. It imports the data, filters it using Vue `computed`, and uses `ref` only for the selected category and search text.
- `docs/solutions.md` provides the route, page title, meta description, canonical metadata, and component composition.
- `docs/.vitepress/config.mts` adds only the English navigation destination for `/solutions`.

## Interaction and Accessibility

- Search matches project name, description, category label, and stack tags without requiring a search button.
- Category filters are native buttons, expose their active state with `aria-pressed`, and remain keyboard operable.
- The search input has a visible label and an `aria-label`.
- Every logo has relevant alt text. The hero connection lines are decorative and hidden from assistive technology.
- The result count is announced with an `aria-live` region.
- Cards do not pretend to be interactive until their routes exist.

## Responsive Behavior

- Desktop hero uses a text and visual split; small screens show content first, then a simplified visual with fewer project and runtime marks.
- The grid uses four columns at `xl`, three at `lg`, two at `md`, and one below `md`.
- Categories use one horizontal scroll row on mobile, while search remains full width.

## Visual Direction

Design read: a developer-tool catalogue for technical users, with restrained product-page styling based on the existing FlyEnv light theme.

- Design variance: 4. The hero has a purposeful split but catalogue layout is regular for scanning.
- Motion intensity: 3. Only hover and focus transitions; no automatic motion.
- Visual density: 6. The page contains a useful project directory while retaining the whitespace of the reference.
- Accent: FlyEnv blue. Category badges use very low-saturation tints without becoming the primary visual signal.
- Shape: 12px card and control corners, with pill treatment reserved for small tags and category filters.

## SEO and Analytics

- Title: `Solutions - Run Popular Development Projects Locally | FlyEnv`.
- Meta description: `Run popular frameworks, CMS platforms, e-commerce apps, ERP systems and developer tools locally with FlyEnv on Windows, macOS and Linux.`
- The full directory is rendered in the static HTML; filtering only narrows an already rendered data set.
- Browse, download, documentation, category-filter, and search interactions include the established analytics data attributes or shared tracker events where appropriate.

## Validation

1. Add a focused Node test before implementation. It verifies the route metadata, English nav link, data-source shape and category coverage, component search/filter hooks, absence of future detail-route links, and key accessibility hooks.
2. Run the new test red before implementation, then green afterward.
3. Run the full test suite and `yarn docs:build`.
4. Start the VitePress server and inspect desktop and mobile Solutions screenshots. Check search, filters, CTA anchors, and layout for overflow or overlap.

## Explicitly Out of Scope

- Solution detail pages and `/solutions/{slug}` navigation.
- Chinese and Indonesian Solution pages.
- A marketplace, templates, installation flow, or fake FlyEnv client interface.
- New third-party dependencies or generated imagery.
