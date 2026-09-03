---
name: seo-content
description: Controlled SEO content production for FlyEnv Feature and Compare pages.
---

# FlyEnv SEO Content Skill

## Purpose
Continuously identify, specify, create, validate, and improve high-value FlyEnv Feature and Compare pages without producing thin, fabricated, or near-duplicate SEO content.

## Phase 1 allowed content
Allowed:
- `/features`
- `/features/:feature`
- `/compare/:competitor`
- necessary navigation/index updates
- natural internal-link updates

Not allowed without explicit approval:
- new Solutions
- new generic How-to articles
- bulk localization
- programmatic keyword variants
- unapproved comparison targets

## Operating loop
1. **Discover** — read inventory/state, inspect repository, identify next approved item.
2. **Research** — FlyEnv claims from local truth; competitor claims from current official sources.
3. **Specify** — define intent, evidence, sections, links, risks.
4. **Write / Implement** — create page and reuse existing assets/components.
5. **Fact-check** — verify every meaningful claim; separate current features from roadmap.
6. **Duplicate check** — compare against Feature/Solution/Guide/Compare content.
7. **Technical SEO check** — title, description, H1, canonical, links, sitemap, clean URL.
8. **Build / Crawl** — run production build and available SEO/broken-link checks; fix failures.
9. **State update** — update inventory and save research/spec artifacts.

## Product grounding
Never invent FlyEnv capabilities.
A meaningful FlyEnv claim must be supported by current local evidence such as source code, current docs, README, release notes, or current verified site content.
If uncertain, omit or flag it.
Never describe roadmap/TODO functionality as available.

## Competitor grounding
Prefer current official competitor sources.
Never use random comparison blogs as primary evidence, old FlyEnv copy as the only source, or assumptions based on product category.
Save research date and evidence.

## ServBay policy
ServBay is a reference for information architecture and topic coverage only.
Study page decomposition, comparison dimensions, FAQ strategy, internal linking, and content depth.
Never copy, close-paraphrase, mirror unique headings mechanically, or import conclusions.

## Writing rules
Write for developers. Be factual, practical, and specific.
Avoid generic AI filler. No minimum word count. Do not keyword-stuff.

## Feature-page behavior
Feature pages should primarily explain FlyEnv's real workflow for that capability and connect to relevant Guides, Solutions, Demos, Features, and Getting Started/Download.
Different modules may require different sections.

## Compare-page behavior
One principal competitor per page.
Tone must be balanced, evidence-based, and non-hostile.
Where appropriate include short answer, quick comparison, meaningful detailed sections, where competitor fits, where FlyEnv fits, migration considerations, FAQ, and related links.
Do not make a table where FlyEnv wins every row.

## Iteration size
Default maximum: 3 new pages per iteration.
First Compare iteration: 1 page.

## Failure behavior
If validation fails, fix and rerun.
If a fact cannot be verified, do not guess.
If two planned pages would be near-duplicates, pause and propose consolidation.
If a Feature lacks enough independent user/search value, mark it `no-page` with rationale instead of forcing a page.

## Completion criteria
A page can become `done` only when spec exists, evidence exists, content is independently useful, build passes, technical SEO checks pass, links are valid, and inventory is updated.
