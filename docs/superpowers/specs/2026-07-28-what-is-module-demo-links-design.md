# What Is FlyEnv Module Demo Links Design

## Goal

Add video-demo links to the supported modules listed in the English and Chinese "What FlyEnv Actually Does" tables, using the existing locale-specific homepage card links as the source of truth.

## Link Source and Presentation

Use the same Markdown link presentation as the "Supported Modules (On-Demand)" section in `E:\Github\FlyEnv\README.md`: replace the visible module name with `[Module](video-url)` inside its existing table cell. No new components, route links, hover overlays, or manually invented URLs are introduced.

The URLs must come directly from the matching `AppModules` component:

| Modules | English table source | Chinese table source |
| --- | --- | --- |
| OpenClaw, n8n, Ollama | `docs/components/AppModules/index.vue` YouTube URLs | `docs/components/AppModules/zh.vue` Bilibili URLs |
| Apache, Nginx | `docs/components/AppModules/index.vue` YouTube URLs | `docs/components/AppModules/zh.vue` Bilibili URLs |
| MySQL, MariaDB, PostgreSQL, MongoDB, Qdrant, ClickHouse | `docs/components/AppModules/index.vue` YouTube URLs | `docs/components/AppModules/zh.vue` Bilibili URLs |
| Mailpit | `docs/components/AppModules/index.vue` YouTube URL | `docs/components/AppModules/zh.vue` Bilibili URL |
| PHP, Node.js, Python | `docs/components/AppModules/index.vue` YouTube URLs | `docs/components/AppModules/zh.vue` Bilibili URLs |
| Redis | `docs/components/AppModules/index.vue` YouTube URL | `docs/components/AppModules/zh.vue` Bilibili URL |
| Elasticsearch | `docs/components/AppModules/index.vue` YouTube URL | `docs/components/AppModules/zh.vue` Bilibili URL |
| Temporal | `docs/components/AppModules/index.vue` YouTube URL | `docs/components/AppModules/zh.vue` Bilibili URL |

The two tables retain plain text for every module without an `AppModules` video link. In particular, no link is added for Temporal CLI because it is not currently a linked homepage card.

## Scope

Modify only these existing Markdown table rows:

- AI Integration & Automation / AI 集成与自动化
- Web Servers / Web 服务器
- Databases / 数据库
- Email Server / 邮件服务器
- Programming Languages & Runtime / 编程语言与运行时
- Cache & Message Queue / 缓存与消息队列
- Service Governance / 服务治理
- Search Engine / 搜索引擎

All category labels, unlinked modules, the multi-version statement, the custom-module description, and the local-sites, AI, and MCP explanation remain unchanged.

## Validation

- Add source-content tests for all 18 English and 18 Chinese Markdown links, asserting their exact URLs from the respective `AppModules` components.
- Add assertions that unlinked neighbouring modules and Temporal CLI remain plain text.
- Run the focused Node test and `yarn docs:build`.
