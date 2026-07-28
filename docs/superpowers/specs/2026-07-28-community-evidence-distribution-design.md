# Community Evidence Distribution Design

## Goal

Turn FlyEnv's existing collection of public developer articles into a reusable evidence library. The Community page becomes the complete discovery hub; the homepage uses a few source-backed stories to help unfamiliar visitors evaluate FlyEnv; relevant guides use one tightly matched story to connect product guidance with a real developer workflow.

This design does not create a new submission flow or change the community-license process. The source articles remain on their original platforms and FlyEnv continues to link to them.

## Why this change

The Community page currently centralizes stories, but most of their value stays inside a card archive. The homepage's `Loved by Developers Worldwide` block instead shows six unattributed, generic quotations. That gives new visitors little evidence of who used FlyEnv, what they used it for, or where the feedback originated.

The last-28-day Search Console data supports a trust-and-discovery role for the English Community page: it had 897 impressions, 5 clicks, a 0.56% CTR, and an average position of 11.38, while visitors who arrived had a 69.23% engagement rate and a 2 minute 27 second average engagement time. The page should become clearer in search and more useful as a path to official guides and downloads; it should not try to compete with task-focused guides for every technical query.

## Product position

The page's job is to answer the question a new visitor has before downloading:

> How do developers like me use FlyEnv in real local-development work?

It is an index of public developer stories and a social-proof layer for the official documentation. It is not a replacement for the source article, a collection of first-party case studies, or an SEO page intended to rank for every feature query.

## Principles

1. **Preserve attribution.** Every displayed story identifies the author, original platform, publication date, source language, and original URL.
2. **Do not distort the source.** Keep the original title. Any localized or editorial wording is visibly labelled as a summary, not presented as a quotation or original headline.
3. **Use evidence where it helps a decision.** A story appears on the homepage or a guide only when its scenario directly matches the surrounding product claim.
4. **Keep source articles primary.** "Read the original story" always links to the author's public article. FlyEnv does not duplicate complete articles.
5. **Do not invent a contribution workflow.** The content is already supplied as public work in the established community-license process. Calls to action may link to the existing license/contribution explanation, but must not promise a new submission form or automatic feature placement.
6. **Make statistics data-derived.** Article, author, language, and platform counts come from the same post datasets used to render the cards.

## Shared evidence data

Keep the existing English and Chinese JSON datasets as the source of truth. Each item continues to contain the source metadata already used on the Community page:

- `title`, `url`, `author`, `platform`, `language`, `date`
- `summary`, `tags`, `cover`, `quality_score`, and `relevance_score`

Add only the editorial metadata needed to reuse a qualified story in other parts of the site:

- `useCases`: controlled scenario IDs, such as `xampp-migration`, `laragon-migration`, `multiple-runtime-versions`, `linux-local-development`, `laravel-local-development`, `docker-alternative`, and `local-services`.
- `relatedGuides`: locale-appropriate internal guide paths whose task directly matches the story.
- `featuredPlacements`: zero or more of `home`, `community-hero`, and `guide`.
- `editorialSummary`: a concise, locale-specific explanation of why the story is useful. This replaces a generic SEO rewrite when the story is displayed outside the archive.
- `quote`: optional short, exact public excerpt and optional translation. It is shown only after source verification; no quote field means no quote is rendered.

An item may be included in the Community archive without being selected for the homepage or guide placements. Selection requires a named author or stable public identity, a reachable original source, a specific development scenario, and a summary that can be supported by that source.

## Page designs

### Community page: evidence hub

The Community page remains the full archive, but the order changes from a visual card directory to a discovery path.

1. **Intent-led hero.** The hero introduces public developer stories and names the primary scenarios: migration from XAMPP or Laragon, multi-version runtimes, local services, Laravel/PHP, Linux, and cross-platform work.
2. **Scenario map.** The first content section groups two or three selected stories under high-intent scenarios. Each card shows source attribution, a concise editorial summary, the original story, and one related official guide.
3. **Featured story.** Keep one high-quality featured story, chosen from data rather than hard-coded copy.
4. **Complete archive.** Retain chronological browsing and filtering, but make every archived entry available in server-rendered HTML or in crawlable pagination. A search bot must not depend on a client-side "Load More" click to discover half of the archive.
5. **Accurate contribution CTA.** Replace the current misleading `Submit Your Article` action with a link such as `Learn about community contributions and licensing`, pointing to the existing correctly formed license URL. The CTA does not claim that a form or guaranteed feature placement exists.

The English page title becomes `FlyEnv Community Stories & Developer Tutorials`; the Chinese title becomes `FlyEnv 社区故事、教程与开发者评测`. Both versions receive a canonical URL and reciprocal English/Chinese alternate links in page HTML, in addition to the existing sitemap alternates.

### Homepage: source-backed trust section

Replace `AppComment`'s six generic testimonial blocks with a three-card community-proof section. Keep the existing open-source/GitHub section separate because GitHub metrics and developer stories establish different forms of trust.

The English section is titled `How Developers Use FlyEnv` with the supporting line `Public stories from developers using FlyEnv across local PHP, Laravel, Linux, and multi-service workflows.` The Chinese section receives equivalent natural Chinese copy.

Each card contains:

- scenario label, such as `Moving from Laragon`, `Managing multiple PHP versions`, or `Linux local development`
- a short verified quotation when one is available; otherwise the editorial summary
- author, platform, and publication date
- `Read the original story` external link
- `See the related guide` internal link

The section has one final internal link to the Community hub. The first release selects three stories that deliberately cover different visitor concerns: migration, multi-project/multi-version management, and Linux/cross-platform local work. The source records, rather than handwritten Vue markup, determine the cards.

### Official guides: one relevant community proof block

Add a compact `From the community` block near the end of a guide only when a selected story matches that guide's task. It contains the source-backed summary or quote, attribution, an external original-story link, and a link to the Community page.

The initial mapping is:

| Guide | Required story scenario |
| --- | --- |
| FlyEnv vs Docker & XAMPP | XAMPP, Laragon, or Docker migration |
| Project-Level Version Isolation | multiple PHP/Node runtime versions |
| Manage Node.js & PHP Versions | multiple runtime versions |
| Run Laravel on FlyEnv | Laravel local development |
| Local Email Testing with Mailpit | local-services or Mailpit workflow |
| Cloudflare Tunnel for Local Development | local-site or tunnel workflow |
| Build a Local Offline AI Agent | local AI workflow |

A guide without a strong, source-verifiable story renders no block. One strong example is more credible than a repeated generic recommendation on every page.

## Information flow

```text
Public original article
        |
        v
Community post dataset -- selected metadata --> Homepage proof card
        |                                          |
        |                                          +--> Related official guide
        v
Community scenario hub ---------------------------> Related official guide
        |                                          |
        +--> Original article                       +--> Download / Quick Start
```

This deliberately creates both paths: a visitor can begin with third-party evidence and move to documentation, or begin with a guide and see a relevant real-world example.

## Measurement

Track the following events without adding invasive analytics:

- `community_story_source_click`: a click from the Community archive or scenario map to the original article
- `community_story_guide_click`: a Community story click to an official guide
- `home_community_story_source_click`: a homepage proof-card click to the original article
- `home_community_story_guide_click`: a homepage proof-card click to an official guide
- `guide_community_story_source_click`: a guide proof-block click to the original article
- `community_hub_click`: a homepage or guide click to the Community hub

Report the `/community.html` landing page separately from all-site organic traffic. Compare full 28-day windows after deployment with the preceding equivalent window, and track impressions, CTR, average position, Community-to-guide clicks, and Community-assisted download visits. The initial success target is to raise Community CTR from 0.56% to at least 1.5% at similar impressions; reaching the all-site 2.43% CTR would produce about 22 clicks per 28 days at the current 897 impressions, versus the current 5.

## Constraints and risks

- Do not reproduce full third-party articles; keep excerpts short and link to the source.
- Verify every source URL, author, date, original title, quote, and claim before it appears in a featured placement.
- Use translations only as labelled editorial summaries or translated excerpts. Preserve the original language in attribution.
- Avoid automated score-only selection. Scores can assist editorial review but cannot substitute for source verification and scenario relevance.
- Do not use one story for unrelated guides simply to increase coverage.
- Structured data remains an `ItemList` that mirrors visible selected records. It aids understanding but is not promised to create a Google rich result.

## Out of scope for the first release

- New community submission forms, moderation tooling, or license workflow changes
- First-party rewrites of public articles into standalone FlyEnv case-study pages
- A separate page for every tag or source platform
- Paid promotion or outreach campaigns

## Rollout sequence

1. Audit and enrich the existing post records; select the first three homepage stories and the first guide mappings.
2. Create shared presentation components and replace the homepage testimonial component.
3. Reorganize the Community page around scenarios while preserving the full archive.
4. Add compact proof blocks to only the mapped official guides.
5. Add metadata, canonical/alternate links, corrected CTA destination, tracking, and regression tests.
6. Build, inspect rendered HTML, deploy, request indexing for the two Community URLs, and review the first complete 28-day window.
