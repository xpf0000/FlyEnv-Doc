# Demos Capability Cards Design

## Goal

Turn the Demos page into a dependable FlyEnv capability catalog rather than a copy of a YouTube channel. A visitor should understand the task, category, and technology stack from the card even when third-party thumbnail resources are unavailable.

## Scope

- Update `AppDemos` card covers for both featured and regular cards.
- Keep the existing six-category taxonomy, localized title/summary/tag content, search, URL filters, related links, analytics, and lazy modal playback.
- Keep card content free of duration and platform metadata.
- Preserve the current platform rule: Chinese uses Bilibili when a mapping exists and falls back to YouTube; English and Indonesian use YouTube by default.
- Use the existing YouTube thumbnail only as optional supporting imagery after it loads successfully.

Out of scope:

- Rebuilding or replacing the 80 source video thumbnails on YouTube or Bilibili.
- Adding per-video duration, view counts, retention data, or new platform fields.
- Creating 80 individual SEO detail pages.
- Fabricating detailed product screenshots or fake UI inside CSS covers.

## Card Design

Each cover is a stable 16:9 visual surface with a card-native identity:

- A restrained category treatment identifies the capability family.
- A short topic label is derived from the localized demo title, with the full title remaining in the HTML card body.
- Up to four existing technology tags appear as compact, readable chips.
- A small FlyEnv wordmark/monogram treatment anchors the brand consistently.
- The play control remains the only action in the cover and retains its accessible localized label.

The cover uses a neutral light base and one consistent blue accent already established by the Demos page. Category treatments vary through low-contrast solid tints and borders, not gradients, glows, decorative blobs, or dense fake screenshots. Featured covers receive more visual weight through spacing and type scale, while regular covers stay quiet and scannable.

When the remote YouTube image loads, it may appear as a low-opacity background layer with a subtle readability scrim. If it errors, the cover-native content remains fully visible and the card layout does not shift. The remote image must never be required for meaning or interaction.

## Component and Data Behavior

- Keep `Demo` and `DemoCopy` types unchanged.
- Add a presentation-only category configuration in `AppDemos` (or a colocated style map) for cover accent/tint classes. Do not duplicate category labels or titles in the data source.
- Render cover copy from `demoCopy(demo)` and `categoryLabel(demo.category)` so EN, ZH, and ID remain localized.
- Render tags from the existing localized tag array, capped visually to four items without mutating source data.
- Keep `thumbnailUrl`, `hideBrokenThumbnail`, `openDemo`, `selectPlatform`, and modal iframe behavior intact except for the cover layering needed by the new visual treatment.
- Keep all existing analytics event names and payloads unchanged.

## Responsive and Accessibility Requirements

- Preserve the current two-column featured grid, three-column desktop catalog grid, two-column tablet grid, and one-column mobile fallback.
- Keep a fixed aspect ratio for covers so failed images, long localized text, and hover states cannot resize cards.
- Cover text must remain readable at mobile widths; clamp or wrap topic labels within the cover rather than allowing overflow.
- Maintain keyboard focus styles, `aria-label`, lazy image loading, dialog focus trap, Escape close, and focus restoration.
- Ensure the play button and cover contrast meet WCAG AA against both the native cover and a loaded thumbnail.

## Verification

1. Run the focused catalog and analytics tests.
2. Build the VitePress site with `yarn docs:build`.
3. In a browser, verify EN, ZH, and ID routes render all 80 cards; check one successful and one failed thumbnail state; verify mobile layout and modal playback.
4. Confirm Chinese playback selects Bilibili for mapped demos and YouTube for unmapped demos; EN/ID select YouTube.

