# Featured MCP Priority Design

## Goal

Make the Featured AI entry demonstrate FlyEnv's MCP-enabled development workflow rather than a conventional local AI gateway. The six cards should form a deliberate first-visit capability overview, independent of their upload dates.

## Scope

- Replace `cliproxyapi-gateway` with `ai-cli-mcp-crud` in Featured.
- Preserve the six Featured roles: product overview, multi-runtime setup, complete project, database management, native local stack, and AI/MCP workflow.
- Add a stable `featuredRank` so the visual order reflects that progression instead of `publishedAt`.
- Add concise, specific EN, ZH, and ID summaries for the MCP card.
- Keep CLIProxyAPI in the AI & MCP category, searchable and playable; it is not being removed from the catalog.

Out of scope:

- Reclassifying catalog categories or changing the other 71 demos.
- Changing video URLs, Bilibili mappings, playback behavior, card layout, or analytics.
- Selecting Featured videos by view counts, recency, or other volatile channel metrics.

## Featured Order

1. `flyenv-feature-overview`: product-wide orientation.
2. `zero-config-runtimes`: install and switch multiple runtimes from one workspace.
3. `erpnext-local-project`: a complete real-world project stack.
4. `postgresql-pgadmin`: database plus management UI.
5. `caddy-php-mysql`: a native web-service stack.
6. `ai-cli-mcp-crud`: an AI CLI and MCP workflow that operates a local PHP/MySQL project.

The MCP card summaries are:

- EN: `Use an AI CLI and MCP to build and manage a local PHP and MySQL project.`
- ZH: `使用 AI CLI 与 MCP 构建并管理本地 PHP 和 MySQL 项目。`
- ID: `Gunakan AI CLI dan MCP untuk membangun serta mengelola proyek PHP dan MySQL lokal.`

## Implementation

`DemoSource` accepts an optional `featuredRank`, and the public `Demo` exposes the rank for rendering. The data source assigns ranks 1 through 6 only to the Featured records. `AppDemos` filters Featured records and sorts them by ascending rank before rendering. Records without a rank cannot appear in Featured.

The normal category grids continue excluding all `featured` records on their default limited view. Consequently, replacing the AI Featured record keeps the default category density unchanged: the MCP demo is promoted to the top section and CLIProxyAPI returns to the category list.

## Verification

1. Add a focused catalog test asserting the exact six IDs, their ranks, and the MCP-specific localized summaries.
2. Run the new test first and confirm it fails before the production change.
3. Run `node --test tests/demos-catalog.test.mjs` after implementation.
4. Run `yarn docs:build` to validate the VitePress production build.
