# FlyEnv SEO Reference (2026)

This file keeps the useful parts of `Guide-Task1.md` and replaces the stale parts with current Google Search guidance.

## Keep

- Write for the developer's problem first, then introduce FlyEnv as the practical fix.
- Use the terms developers actually search for in titles, headings, and body copy, but keep the wording natural.
- Prefer concise, scannable tutorials with steps, tables, code blocks, and concrete comparisons.
- Add descriptive internal links and a relevant CTA at the end of the page.

## Update

### `title` + meta description still matter, but not because of fixed length rules

- Keep VitePress frontmatter with a useful page title and description.
- Replace the old `150-160 characters` rule with: write a concise summary that matches the page intent.
- Google may generate its own title links and snippets based on the page, query, and on-page content, so visible headings and body copy must stay aligned with the frontmatter.

### Keywords should be natural, not forced

- Keep long-tail query coverage such as `without Docker`, `alternative`, `offline local`, and `how to fix` only when the page actually answers those intents.
- Do not repeat exact-match phrases in every H2 or paragraph.

### FAQ is for readers, not guaranteed rich results

- Keep FAQ sections only when they answer real follow-up questions.
- Drop the old assumption that FAQ exists to win Google snippets or FAQ rich results.
- Google sharply limited FAQ rich results in 2023; most software documentation sites should treat FAQ as content support, not SERP markup strategy.

### Structured data is optional and must match visible content

- Only mention or implement structured data when the site actually supports it and the markup matches what users see on the page.
- Do not add structured data claims inside Markdown as a proxy for SEO work.

## Avoid

- Search-engine-first writing that adds little original value
- Commodity intros that could describe any product
- Clicky titles that the page body does not fulfill
- Over-optimizing for one exact query while ignoring the reader's real task

## Official Source Notes

- Google Search Central SEO Starter Guide: write helpful, reliable, people-first content and make title links descriptive.
  - https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Title links: Google uses page titles as a source but can rewrite them; avoid boilerplate and make headings descriptive.
  - https://developers.google.com/search/docs/appearance/title-link
- Snippets and meta descriptions: Google may use or replace your description; there is no guaranteed snippet length.
  - https://developers.google.com/search/docs/appearance/snippet
- Structured data general guidance: markup must match visible content and only helps when the content is eligible.
  - https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
- FAQ rich result reduction announcement: FAQ rich results were limited to well-known, authoritative government and health sites.
  - https://developers.google.com/search/blog/2023/08/howto-faq-changes
- AI features in Search: no extra technical requirement beyond normal Search essentials and preview controls.
  - https://developers.google.com/search/docs/appearance/ai-features
