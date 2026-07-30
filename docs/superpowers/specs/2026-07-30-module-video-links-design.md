# Module Video Links Design

## Goal

Expose the new Meilisearch, Typesense, ZincSearch, MinIO, and RustFS walkthroughs everywhere FlyEnv lists these modules.

## Scope

- Convert the four existing affected cards in `docs/components/AppModules/index.vue` into the existing English video-card pattern, then add a matching ZincSearch card, with the supplied YouTube URLs and English video titles.
- Convert the same four existing cards in `docs/components/AppModules/zh.vue` into the existing Chinese video-card pattern, then add a matching ZincSearch card, with the supplied Bilibili URLs and Chinese video titles.
- Link each of the five module names in the matching rows of `docs/guide/what-is-flyenv.md` and `docs/zh/guide/what-is-flyenv.md` to its locale-appropriate video.
- Use the supplied `docs/public/home/zincsearch.png` asset for the new ZincSearch card in both locales.

## Non-goals

- No new page, video embed, navigation change, or card layout change.
- No changes to modules without a supplied video URL.

## Verification

Run the VitePress production build and inspect the four edited files to confirm all five module names use the supplied URL for their locale.
