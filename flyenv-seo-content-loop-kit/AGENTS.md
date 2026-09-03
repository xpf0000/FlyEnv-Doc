# AGENTS.md — FlyEnv SEO Content Production

## Mission

Expand FlyEnv's organic search coverage by turning verified product capabilities into high-quality, independently useful pages.

This phase contains only:

- Feature pages
- Comparison pages

Do not expand the scope unless explicitly instructed.

## Required reading order

Before making SEO-content changes:

1. `docs/seo-content-project.md`
2. `.skills/seo-content/SKILL.md`
3. `docs/site-information-architecture.md`
4. `docs/seo-technical-requirements.md`
5. `docs/content-style.md`
6. the relevant inventory and spec template

## Source of truth

For FlyEnv product claims, prefer evidence in this order:

1. current source code
2. current official FlyEnv docs
3. current README / module metadata
4. current release notes
5. existing verified website content

Never treat a roadmap item, issue discussion, TODO, or old marketing copy as a current product capability unless independently verified.

## External research

Comparison pages require current research from official competitor sources whenever web access is available.

Prefer:

- official product site
- official documentation
- official GitHub repository
- official pricing / license pages

Record research date and sources in `seo/research/competitors/<competitor>.md`.

If current competitor facts cannot be verified, flag the uncertainty instead of guessing.

## ServBay reference policy

ServBay may be studied as a structural and SEO reference.

Allowed:
- page architecture
- information hierarchy
- comparison dimensions
- FAQ patterns
- internal-link patterns
- topic coverage depth

Not allowed:
- copying sentences
- close paraphrasing
- reproducing unique headings mechanically
- importing competitor conclusions as FlyEnv conclusions

All FlyEnv pages must be independently written.

## Iteration limits

Default maximum per implementation iteration:

- 3 new pages
- or 2 new pages + 1 major existing-page improvement

Do not mass-produce pages.

## Definition of done

A page is complete only when all applicable checks pass:

- facts verified
- content is not thin or near-duplicate
- title and meta description are unique
- one clear H1
- internal links are present and valid
- canonical strategy is correct
- build passes
- SEO validation passes
- navigation/index updated when required
- inventory status updated
- research/spec artifacts saved
