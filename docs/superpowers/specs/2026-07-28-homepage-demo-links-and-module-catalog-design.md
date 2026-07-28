# Homepage Demo Links and Module Catalog Design

## Goal

Make the English and Chinese homepage Core Modules cards link to their newly available localized video demos, and make the "What FlyEnv Actually Does" section accurately describe FlyEnv's current supported-module catalog.

## Scope

### Homepage Core Modules

Convert the existing cards for ClickHouse, Temporal, Elasticsearch, and Qdrant into the same linked-video card pattern already used by demonstrated modules such as MySQL and Apache:

| Module | English homepage | Chinese homepage |
| --- | --- | --- |
| ClickHouse | `https://youtu.be/3ePJYddWYmQ` | `https://www.bilibili.com/video/BV1S43w6QEvS/` |
| Temporal | `https://youtu.be/E_jetPnVxBo` | `https://www.bilibili.com/video/BV1TD3c67Eei/` |
| Elasticsearch | `https://youtu.be/B9Eo2Y-aXWQ` | `https://www.bilibili.com/video/BV1if3P6BEBR/` |
| Qdrant | `https://youtu.be/ahetMNLLS7s` | `https://www.bilibili.com/video/BV16Q3P6VEPA/` |

Each linked card will retain its existing category label, icon, and module name; add the established `group` hover treatment, external target, localized accessible title, dark-mode text colors, and play overlay. Cards open demos in a new tab.

Temporal CLI will not be added because it has no existing Core Modules card and is outside the approved scope.

### What Is FlyEnv Pages

Update both localized pages:

- `docs/guide/what-is-flyenv.md`
- `docs/zh/guide/what-is-flyenv.md`

Replace the current short capability table in "What FlyEnv Actually Does" / "FlyEnv 实际上能做什么" with a compact, localized supported-module catalog based on `E:\Github\FlyEnv\README.md`'s "Supported Modules (On-Demand)" section. The catalog will list these groups:

1. AI Coding & MCP
2. AI Integration & Automation
3. Containers
4. Network Tunnel
5. Web Servers
6. Databases
7. Email Server
8. Programming Languages & Runtime
9. Cache & Message Queue
10. Service Governance
11. Search Engine
12. Object Storage
13. Automation & Scheduling
14. Utilities
15. Custom modules

Both pages will introduce the catalog as on-demand installation, state that modules can coexist in multiple versions, and preserve the existing explanation that FlyEnv also manages local sites, AI workflows, and MCP-provided access to managed local context.

## Architecture

The existing locale-specific `AppModules` components remain the sole presentation layer for homepage cards. Only the four cards that now have demos are converted from `div` to `a`; no shared abstractions or runtime behavior are introduced.

The existing Markdown pages remain self-contained localized documentation. Their section content is expanded in place, with no new routes or data source.

## Validation

- Extend the Node source-content regression test to assert all four localized demo links and their localized titles/card markup.
- Add assertions that both What Is FlyEnv pages include the complete supported-module groups and the multi-version/custom-module statements.
- Run the focused Node test and `yarn docs:build` to verify static-site compilation.
