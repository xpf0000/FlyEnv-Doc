# Community Page Editorial Redesign

## Goal

Turn the FlyEnv Community pages into a clear, attractive reference library for public developer stories. A newcomer should quickly understand that FlyEnv has been independently discussed across platforms, find the most relevant stories, and see where to join the active community.

## Context and decision

The current page duplicates hierarchy across a scenario map, a large dashboard-style archive, category cards, several post groups, a channel grid, and a CTA. Its rainbow gradients, emoji labels, and repeated card treatments make a valuable evidence set feel noisy rather than credible.

Three directions were considered:

1. **Polish the existing dashboard.** Keeps all current sections but refines spacing and colors. This has the least code risk, but retains the competing hierarchy that obscures the stories.
2. **Editorial evidence library (selected).** Reframe the page as a restrained publication: a strong introductory masthead, one current lead story, a compact topical index, and a readable story grid. It best supports discovery and trust without changing the static content model.
3. **Social-feed layout.** Make every post look like a timeline update. This feels familiar but makes durable articles and videos appear equally disposable, so it weakens the page’s reference value.

The selected design is an editorial evidence library with a modern developer-tool finish. It will use an ink-and-paper palette with one teal accent, asymmetrical hero composition, thin rules, deliberate hover feedback, and compact metadata. It avoids fabricated metrics, decorative emojis, and generic rainbow/AI-gradient treatments.

## Page structure

1. **Masthead** — An asymmetric, full-width introduction explains the purpose: public stories from developers are gathered here so their experiences are easier to discover. It includes live, dataset-derived counts for stories, authors, languages, and platforms.
2. **Lead story** — A visually distinct latest/most-relevant article serves as immediate social proof. Its source, author, date, translated summary, and tags are all derived from the imported static dataset. The external reading action remains clearly labelled.
3. **Browse by problem** — A horizontally flowing set of filter controls maps existing tags to real developer journeys: switching from another stack, multi-version runtimes, PHP/Laravel, local services, cross-platform work, and video. It filters the content library without a route change.
4. **Story library** — A dense but breathable responsive grid presents the remaining posts in newest-first order. Each row/card shows source, content type, title, author/date/language, concise summary, and at most two tags. “Show more” expands the initial set for large data sets; an empty state is explicit.
5. **Join the Community** — Preserved as a named, visually coherent section. It presents the existing GitHub Discussions, Facebook Group, Discord, and QQ destinations with accurate links and no invented live-member claims.
6. **Contribution close** — A modest closing invitation explains that a public write-up can be surfaced in this library, with a link to the existing contribution/licensing guidance.

## Components and data flow

- `docs/components/AppCommunityPosts/index.vue` becomes the single community-content surface. It receives the unchanged `posts` array and locale prop, computes counts, ordered posts, lead story, filter categories, and display labels locally.
- `docs/components/AppCommunityChannels/index.vue` keeps its external destinations but adopts the shared ink/paper visual system. Since live channel counts are not available, claims such as “200+ online” will be removed.
- `docs/components/AppCommunityCTA/index.vue` becomes a compact contribution invitation consistent with the page, retaining the locale-aware licensing link and dataset-derived source coverage.
- `docs/community.md` and `docs/zh/community.md` remove the separate scenario-map import and render the new content library followed by the preserved Join section and closing CTA.
- No JSON, SEO metadata, canonical URLs, schema data, or external URLs are changed. Existing posts continue to drive both locales.

## Interaction and responsiveness

- Filter buttons work with keyboard focus and use `aria-pressed`; selecting a filter updates only the story list.
- External article and community links retain `target="_blank"` and `rel="noopener noreferrer ugc"` where applicable.
- The desktop masthead uses a two-column asymmetric composition. At less than 768px it becomes a single vertical flow; the metrics become a two-column grid, filters horizontally scroll, and the lead story stacks its source panel below the content.
- Hover feedback is limited to a short border/color/translate transition on links and cards. `prefers-reduced-motion` removes transforms and transition duration.
- Light and dark VitePress modes stay within the same palette family rather than switching section theme mid-page.

## Copy and localization

Both locales have native page copy for headings, descriptions, filters, empty states, and actions. Article titles and summaries stay as supplied by the locale-specific dataset. The English masthead uses “Stories from developers, gathered in one place”; the Chinese equivalent uses “来自开发者的真实经验，集中在这里”.

## Verification

1. Add a small Node test that statically checks the two Community Markdown pages render the redesigned component sequence and no longer render the scenario map.
2. Run the targeted Community regression test plus the existing content-refresh test.
3. Run `yarn docs:build`.
4. Launch VitePress and capture desktop and mobile screenshots for English and Chinese pages with Playwright. Verify the light and dark variants visually, open one filter state in each locale, and inspect the browser console for page errors.
5. Check changed-file scope so existing unrelated files remain untouched.

## Error handling

There is no runtime network request. Empty data produces an intentional empty library state, and an unknown platform falls back to a text source label. Derived counts use sets and tolerate absent author values. Invalid static JSON continues to fail at build time.

## Scope boundaries

This redesign does not alter the article datasets, data curation, schema markup, global navigation, or the page’s external contribution policy. It does not add a CMS, remote search, analytics, or fabricated engagement data.
