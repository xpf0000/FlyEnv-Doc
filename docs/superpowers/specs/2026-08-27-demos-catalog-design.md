# FlyEnv Demos Catalog Design

**Status:** Proposed design approved; implementation and the final 80-video mapping are pending review.

## Purpose

FlyEnv has a substantial demonstration library, but its discovery paths are fragmented across module cards,
guides, YouTube, and Bilibili. This design creates a first-class catalog that helps a visitor answer
"Can I run this with FlyEnv?" before they have to know which product module provides the capability.

The catalog is a capability and task directory with videos as its primary proof. It is not a replica of a
video platform and is not a prerequisite for creating individual SEO landing pages.

## Evidence and Constraints

The 2026-08-27 private YouTube report covers 80 of the channel's 83 published videos for 2026-07-28 through
2026-08-26. It records 1,018 views and 1,044 watch minutes. YouTube Search accounts for 365 views (35.9%)
and external URLs for 248 views (24.4%). This supports adding a website discovery and referral surface.

The current documentation references 64 of those 80 YouTube videos. The remaining 16 include recent useful
content such as Redis Commander, PostgreSQL + pgAdmin 4, OpenCode, OpenMRS, and Nextcloud demos. The catalog
must cover all 80, not merely the entries already embedded in guides or module cards.

The private report is a planning source only. It must not be copied into the public documentation repository,
served to site visitors, or used to display private performance metrics.

The report stores title and publication date but does not store a video runtime. `averageViewDuration` is an
analytics metric, not the published duration, and must never be displayed as one. Version one therefore does
not display duration. A future analytics change may request YouTube `contentDetails.duration` when duration
becomes a public catalog requirement.

Recent video performance is not statistically comparable with older videos. For example, the Redis and
PostgreSQL stack demos had only three observable days in this report. Editorial selection must therefore
combine product coverage, task clarity, engagement, and sufficient observation time rather than sorting the
public page by raw views.

## Scope

### Included in Version One

- Public catalog routes at `/demos/`, `/zh/demos/`, and `/id/demos/`.
- A localized first-level navigation entry: `Demos`, `演示`, and `Demo`.
- All 80 reported YouTube videos, each represented exactly once in the English source catalog.
- Category filters, client-side keyword search, tags, featured demos, and links to relevant guides or modules.
- A lazy-loaded player dialog: no YouTube or Bilibili iframe before an explicit visitor action.
- Locale-aware platform choice: English and Indonesian default to YouTube; Chinese defaults to Bilibili when
  a mapped Bilibili video exists and otherwise falls back to YouTube.
- Event tracking for discovery and video actions.

### Explicitly Deferred

- Eighty individual video-detail pages.
- A mandatory redesign of every YouTube or Bilibili thumbnail.
- Displaying private views, retention, likes, or other channel analytics on the public site.
- A recommendation algorithm or automatic reordering by recent views.
- A Bilibili analytics integration. The available evidence is YouTube-only.

## Content Model

Create a checked-in public catalog, for example `docs/data/demos.ts`. It is curated application data, not an
import of the private analytics report.

```ts
type DemoCategory =
  | 'getting-started'
  | 'projects'
  | 'runtimes'
  | 'databases-services'
  | 'developer-tools'
  | 'ai-mcp'

type DemoLocale = {
  title: string
  summary: string
  tags: string[]
}

type Demo = {
  id: string
  youtubeId: string
  category: DemoCategory
  locales: {
    en: DemoLocale
    zh: DemoLocale
    id: DemoLocale
  }
  platforms: {
    youtube: string
    bilibili?: string
  }
  publishedAt: string
  featured: boolean
  cover?: { kind: 'youtube-thumbnail' | 'local'; src?: string }
  relatedGuides: string[]
  relatedModules: string[]
}
```

Every entry requires a stable internal `id`, an official YouTube ID, a category, the public YouTube URL,
localized card copy, and at least one discoverable tag. Bilibili is optional because the site does not yet
have a verified 80-video one-to-one mapping. The Chinese page must label a YouTube fallback accurately instead
of implying that a Bilibili version exists.

The mapping work starts from the 80 report video IDs, reconciles the 64 existing documentation references,
and manually verifies the other 16. Entries with no relevant guide remain valid catalog entries; they do not
receive invented related links.

## Information Architecture

The public route has four sections:

1. **Intro and discovery controls.** A concise task-oriented title, a short description, six category filters,
   and search. Filters and search operate together. Search matches the localized title, summary, category, and
   tags.
2. **Featured demos.** Six editorially selected entries displayed as a two-column layout on large screens. The
   initial candidates are Feature Overview, PostgreSQL + pgAdmin, Caddy + PHP + MySQL, ERPNext, Redis + Redis
   Commander, and CLIProxyAPI. The exact card copy and related links are verified during catalog mapping.
3. **All demos.** The complete filtered catalog, normally three columns on desktop, two on tablet, and one on
   mobile. It is a single searchable result set, not pagination that hides topics on later pages.
4. **Related product paths.** A card links only to its verified module or guide. This makes the video directory
   a route into product documentation rather than a terminal external link.

Each card uses a 16:9 visual area, title, concise stack/task tags, and category. The image is intentionally
low-information: it identifies the theme while HTML text carries the complete title and stack. Version one may
use a lazy YouTube thumbnail for non-featured entries; the six featured entries can gain local branded covers
in a later, independent asset pass.

The browser URL stores the active category and search term so a filtered catalog can be shared. The control
area reports the number of matching demos accessibly. Mobile filter controls scroll horizontally without
wrapping into unstable multi-line buttons.

## Playback and Platform Behavior

Selecting a card opens an accessible dialog with a player surface and an explicit platform link. The dialog
must trap focus, close with Escape, restore focus to its initiating card, and dispose of its iframe on close.
It must not autoplay before the visitor selects a demo.

The default platform is derived from the current locale:

| Locale | Default | Fallback |
| --- | --- | --- |
| English | YouTube | Not applicable |
| Simplified Chinese | Bilibili when mapped | YouTube |
| Indonesian | YouTube | Not applicable |

Where both platforms are present, the non-default platform is a compact secondary control inside the dialog,
not a second large call-to-action on every catalog card.

## SEO and Internal Links

The catalog is one high-quality aggregation page, not a replacement for task-specific guides. Its card titles,
summaries, tags, and module/guide links are server-rendered with the page so crawlers can understand the
catalog without executing the filter UI. The page has localized title and description metadata and belongs in
the VitePress sitemap.

The catalog does not create thin pages for all videos. After two measurement cycles, the six to ten videos with
both clear task intent and meaningful catalog engagement may receive detailed pages. Each such page needs a
unique task statement, verification steps, module links, related demos, and the lazy video player.

Canonical host normalization is a separate SEO concern. Search Console reports both `flyenv.com` and
`www.flyenv.com` paths; the Demos work uses relative internal links and must not silently broaden into a host
migration.

## Analytics

Reuse `trackEvent` and retain the generic outbound `video_click` behavior. Add catalog-specific events with
only public, non-sensitive dimensions:

| Event | Required dimensions | Meaning |
| --- | --- | --- |
| `demos_nav_click` | `surface`, `locale` | A visitor enters from primary navigation. |
| `demos_filter_change` | `category`, `result_count` | A category is selected. |
| `demos_search` | `query_length`, `result_count` | Search is used without recording the raw query. |
| `demos_play` | `demo_id`, `category`, `position`, `platform` | A player is requested. |
| `demos_platform_open` | `demo_id`, `category`, `platform` | The visitor opens YouTube or Bilibili. |
| `demos_guide_click` | `demo_id`, `category`, `target` | A related guide or module is selected. |

The catalog route is added to the site's page-type classifier. Event names, dimensions, and default platform
behavior receive focused automated tests.

## Delivery Sequence

1. Build and review the 80-entry public catalog mapping. Reconcile English YouTube IDs, existing Chinese
   Bilibili links, localized card copy, tags, and only verified related links.
2. Implement the data module and reusable catalog component. Add the three localized route shells and metadata.
3. Add navigation, lazy dialog playback, filters, URL state, event tracking, and card-image fallback behavior.
4. Add tests for catalog completeness, category validity, unique IDs, platform fallback, filters, analytics
   dimensions, and no initial iframe creation. Run the production documentation build.
5. Inspect desktop and mobile pages with Playwright. Confirm no text overflow, keyboard dialog behavior, correct
   locale platform defaults, and that all images and cards render.
6. After launch, observe two 28-day windows before revising featured status or authoring individual demo pages.

## Acceptance Criteria

- The English catalog contains exactly the 80 approved report video IDs, without duplicates.
- Every catalog entry has public YouTube playback, category, localized copy, and at least one tag.
- The Chinese catalog uses Bilibili only where an explicit mapping exists and otherwise shows YouTube.
- No video iframe appears before a visitor requests playback.
- Search and category combinations update matching cards, result count, URL state, and keyboard-accessible UI.
- The page builds in all three locales and appears in their primary navigation.
- Catalog-specific analytics events include stable demo and placement identifiers.
- A production build and desktop/mobile browser checks pass before release.

## Measurement and Next Decisions

The first goal is not a vanity increase in public view counts. The initial baseline is catalog entry rate,
filter/search use, player requests, external platform opens, and related-guide clicks. Compare those events and
the next two private YouTube reporting windows by topic. Promote or demote featured entries manually only after
enough observation time; never infer a quality ranking from a three-day video sample.
