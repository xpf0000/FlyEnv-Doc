# Additional Module Video Links Design

## Goal

Expose the six newly supplied FlyEnv module walkthroughs from the module-card showcase and the "What Is FlyEnv" module catalogue in both supported languages.

## Approach

Reuse the established video-card pattern. Each supported card becomes an external anchor with its locale's video URL, descriptive title, existing card classes, and the existing play-overlay affordance. No module grouping, image, layout, or ordering changes are required.

The English card showcase and English catalogue link to YouTube. The Chinese equivalents link to Bilibili. The catalogue makes only the applicable module names clickable; surrounding module names and table structure remain intact.

## Modules and Destinations

| Module | English destination | Chinese destination |
| --- | --- | --- |
| Etcd | `https://youtu.be/xsw8BQxii10` | `https://www.bilibili.com/video/BV1eKGV6fEB5/` |
| Consul | `https://youtu.be/pa0QFgpu17w` | `https://www.bilibili.com/video/BV1vNGV68EF4/` |
| Nacos | `https://youtu.be/8ceC7QqY4UA` | `https://www.bilibili.com/video/BV1XuGV6oECA/` |
| CLIProxyAPI | `https://youtu.be/RmSl4jgmEyI` | `https://www.bilibili.com/video/BV1biGG6nEYz/` |
| Numa | `https://youtu.be/0qfnkr5V7eE` | `https://www.bilibili.com/video/BV1SeGG6DEHS/` |
| Bun | `https://youtu.be/lu68kw8_3dY` | `https://www.bilibili.com/video/BV1GtGG6dE6y/` |

## Files and Responsibilities

- `docs/components/AppModules/index.vue`: make the six English module cards link to their YouTube walkthroughs and use the supplied English video titles.
- `docs/components/AppModules/zh.vue`: make the same Chinese module cards link to their Bilibili walkthroughs and use the supplied Chinese video titles.
- `docs/guide/what-is-flyenv.md`: link the six applicable English module names to YouTube in their existing category rows.
- `docs/zh/guide/what-is-flyenv.md`: link the same Chinese module names to Bilibili in the corresponding category rows.

## Error Handling and Validation

This is static documentation content with no new runtime paths or error states. Validation consists of checking all twelve supplied URLs occur in their locale-specific files, confirming the cards retain their existing external-link behaviour, and running the production VitePress build.

## Out of Scope

- New module documentation pages, embedded video players, analytics changes, or shared data-model refactors.
- Changes to unrelated cards, module categories, icons, layout, or the user-maintained `task/task88.md`.
