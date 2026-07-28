# Community Content Refresh Design

## Goal

Refresh the FlyEnv Community pages with five recent, source-reviewed community stories. Keep article metadata factual and avoid repeating performance, licensing, or feature claims that cannot be corroborated by the source review and current project context.

## Scope

- Add four non-Chinese stories to the English community dataset:
  - I Putu Sutha Satyawan's Medium comparison after long-term XAMPP use.
  - Rafy Aulia Akbar's Medium account of moving a Laravel workflow from Laragon.
  - Azka Thoyyib's Medium Linux Mint and PHP-version-management walkthrough.
  - Hadiid Andri Yulison's LinkedIn report on using FlyEnv on Linux Mint.
- Add one Chinese story to the Chinese community dataset:
  - 西雨东晴's Juejin overview of local multi-project environment management.
- Update the visible JSON-LD `ItemList` on each community page so the structured data represents the newly curated entries.
- Preserve the existing Community page component, layout, filtering, scoring behavior, and all current articles.

## Data Design

Each new JSON entry will use the existing `Post` shape:

- Stable URL-derived `id`, original `title`, canonical `url`, `author`, `platform`, `language`, and ISO `date`.
- A concise `summary` and optional display-oriented `seoTitle` and `seoSummary` that describe the article's real subject without adding unsupported product claims.
- Tags constrained to existing filter values where applicable, plus topical tags already used by the dataset.
- `featured: false` and scores below the current feature threshold, so this content appears through normal latest-post sorting and cannot replace the existing featured story.

The English page receives the three Medium articles and the LinkedIn story. The Chinese page receives the Juejin story. Dates control the existing latest-post ordering; no component code is needed.

## Structured Data

Each page's frontmatter `ItemList` will list the new entries for its locale. Each `TechArticle` item will match the rendered data for headline, author, publisher, and publication date. The descriptions will be neutral summaries rather than marketing or benchmark claims.

## Exclusions

The remaining five submitted sources are intentionally not added:

- The second Juejin article and both CSDN articles include multiple uncorroborated statements about product licensing, project automation, service behavior, or resource measurements.
- The Persian Xcode Studio article is primarily generic SEO copy and makes unsupported product-specific claims.
- The final Medium article is a short promotional overview containing unsupported performance figures.

This is a content-quality decision, not a claim that the linked pages are unavailable: all ten submitted pages were retrieved and reviewed in full through the provided proxy.

## Verification

1. Parse both JSON files and assert that each selected URL occurs exactly once.
2. Verify each community Markdown file includes the selected locale URLs and the matching JSON-LD publication details.
3. Run the production VitePress build to catch data-import, frontmatter, and rendering failures.

## Error Handling

There is no runtime request path: the Community page imports static JSON at build time. Invalid JSON or malformed frontmatter will fail the production build. URLs remain external and continue to use the component's existing `noopener noreferrer ugc` link behavior.
