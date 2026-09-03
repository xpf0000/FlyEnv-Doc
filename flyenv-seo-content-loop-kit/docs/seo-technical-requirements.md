# SEO Technical Requirements

## URL format

Preferred canonical form:

```text
/features/php
/compare/xampp
```

Avoid canonical URLs ending in `.html`.

If the static build emits `.html`, hosting should internally resolve clean URLs.

## Canonical

Every indexable page should output one correct self-canonical URL.

Do not allow `.html` and non-`.html` versions to compete as separate canonical pages.

## HTTP status

No internal navigation link may resolve to 4xx/5xx.

Run a broken-link check after page generation.

## Sitemap

All intended indexable Feature and Compare pages must appear in the sitemap.

Do not include draft pages, duplicate URL variants, or broken pages.

## Hreflang

Only add hreflang when real translated equivalents exist.
Hreflang pairs must be reciprocal and must reference canonical URLs.
Do not manufacture translation equivalents.

## Structured data

Use structured data only where appropriate and truthful.

Never fabricate:
- aggregate ratings
- reviews
- pricing
- awards
- usage counts

A Semrush warning is not sufficient reason to invent schema data.

## Head metadata

Every new page requires:
- unique `<title>`
- unique meta description
- one H1
- Open Graph title/description where supported
- canonical

## Links

Use descriptive anchor text.
Avoid empty links.
Icon-only links must have an accessible name such as `aria-label`.
VitePress-generated heading permalinks do not need to be modified solely to satisfy a crawler's "no anchor text" warning.

## Robots and llms.txt

Do not block Feature/Compare pages from normal crawling.
If the site maintains `/llms.txt`, update its important-entry list when appropriate, but do not treat llms.txt as a ranking requirement.

## JavaScript dependence

SEO-critical page content should exist in rendered static HTML whenever possible.

## Validation

At minimum run:
1. production build
2. broken-link check
3. metadata/canonical check
4. sitemap presence check

If Unlighthouse or another crawler is available, run it after the local preview/build.
