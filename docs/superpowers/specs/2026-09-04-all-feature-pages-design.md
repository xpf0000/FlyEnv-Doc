# 全模块特性内页批量制作设计

日期：2026-09-04
状态：设计已获用户批准
范围：英文版，`docs/features/` 下新增 61 个特性详情页

## 背景与目标

特性首页 `docs/features.md` 共 64 个模块卡片，其中 3 个已有内页（php、nodejs、local-sites-https）。本设计为其余 **61 个卡片**各做一个特性详情页，调性与风格延续已定稿的 `docs/features/php.md`（含 chat31.md 评审修订：H1 自然化、intro 为能力摘要、功能区块配截图、末节的兼容性说明用 `Compatibility Notes`）。

## 已确认的决策

1. **范围**：首页列出的全部模块，每卡片一页，共 61 页；英文版先行，不做中文页。
2. **事实来源**：FlyEnv 源码调研报告 `flyenv-seo-content-loop-kit/seo/research/modules/2026-09-04-feature-pages-module-survey.txt`（10 个 explore 子代理对 61 个模块逐一核实，含组件文件引用）。
3. **分类依据**：按 FlyEnv 应用自身的模块类目（`src/render/core/type.ts` 的 `AppModuleTypeEnum` 及各模块 `Module.ts` 的 `moduleType`），不按首页的 7 个营销类目。
4. **features.yaml 不维护**：用户明确跳过 SEO kit 清单的状态更新；调研报告文件作为事实工件留存。
5. **覆盖 kit 迭代限制**：kit AGENTS.md 的"每迭代最多 3 页"限制被用户显式覆盖。

## 模块原型聚类（8 种）

| 原型 | 模块 | slug 列表 |
|---|---|---|
| A. 语言运行时 (11) | Python、Java、Go、Ruby、Rust、.NET、Zig、Bun、Deno、Erlang、Gradle | python, java, go, ruby, rust, dotnet, zig, bun, deno, erlang, gradle |
| B. Flutter (1) | Flutter | flutter |
| C. Web 服务器 (5) | Nginx、Apache、Caddy、Tomcat、FrankenPHP | nginx, apache, caddy, tomcat, frankenphp |
| D. 数据库 (7) | MySQL、MariaDB、PostgreSQL、MongoDB、ClickHouse、Neo4j、Qdrant | mysql, mariadb, postgresql, mongodb, clickhouse, neo4j, qdrant |
| E. 版本化服务 (18) | Redis、Memcached、RabbitMQ、Elasticsearch、Meilisearch、Typesense、ZincSearch、Mailpit、Minio、RustFS、Consul、Etcd、R-NACOS、Temporal、Numa、Ollama、n8n、CLIProxyAPI | redis, memcached, rabbitmq, elasticsearch, meilisearch, typesense, zincsearch, mailpit, minio, rustfs, consul, etcd, r-nacos, temporal, numa, ollama, n8n, cliproxyapi |
| F. AI CLI 客户端 (8) | Claude Code、Codex、OpenCode、Kimi、Antigravity CLI、GitHub Copilot CLI、OpenClaw、Hermes | claude-code, codex, opencode, kimi, antigravity-cli, github-copilot-cli, openclaw, hermes-agent |
| G. 内建能力 (8) | MCP Server、DNS Server、FTP Server、Startup Groups、Cron Jobs、Per-Project Runtimes、User Modules、CLI & Terminal | mcp-server, dns-server, ftp-server, startup-groups, cron-jobs, per-project-runtimes, user-modules, cli-terminal |
| H. 特殊集成 (3) | Podman、Cloudflared、Cloudflare Tunnel | podman, cloudflared, cloudflare-tunnel |

合计 61 个 slug。

## 统一页面骨架

```markdown
---
layout: doc
titleTemplate: false
title: '<独特标题，含模块名与核心能力关键词> | FlyEnv'
description: '<独特描述，覆盖该页主要功能关键词>'
head: [description/og:title/og:description/og:type/og:url/og:image/canonical 全套，og:url 与 canonical 为 https://www.flyenv.com/features/<slug>]
---

# <H1：自然语，如 Local MySQL Development with FlyEnv / Nginx in FlyEnv>

<一段能力摘要（1 段，2-4 句）>

![<描述性 alt>](https://oss.macphpstudy.com/image/features/<slug>-1.webp)

## <功能 H2 区块 × N：按原型模板裁剪到模块真实功能>

![...](.../<slug>-2.webp) ...

## Compatibility Notes

<平台限制、事实边界>
```

### 各原型的 H2 区块模板

- **A. 语言运行时**：`Version management`（安装源按模块实际）→ `Command-line version switching`（PATH/别名/自定义目录）→ `Projects`（.flyenv、run-as-service、端口、环境变量、IDE 打开）→ 模块亮点（Python 项目模板 / Java Maven 标签页 / Go GVM 等，有才写）→ Compatibility Notes。Gradle 无 Projects 标签页则不写该节。
- **B. Flutter**：版本管理 → SDK 状态与 Doctor → Command Center → 项目创建/编辑 → Android 工具链 → Compatibility Notes。
- **C. Web 服务器**：`Version management` → `Service management`（单版本运行）→ `Configuration`（可视化表单单独说明，Apache/Caddy/FrankenPHP 为纯源码编辑器）→ `Site integration`（vhost、每站点端口、自动 HTTPS、rewrite/反代）→ `Logs` → Compatibility Notes。
- **D. 数据库**：版本管理 → 服务与配置 → 日志 → 管理面板（phpMyAdmin/pgAdmin/DbGate/CH-UI/Neo4j Browser/Qdrant Dashboard）→ 模块亮点（MySQL Group 多实例、PostgreSQL 数据目录+pgvector、Neo4j Java 版本绑定等）→ Compatibility Notes。
- **E. 版本化服务**：版本管理 → 服务与配置（有可视化表单则注明）→ 日志 → Web UI（有才写）→ 模块亮点（如 Mailpit 的 SMTP/POP3 端口、n8n 的 Users 管理、Ollama 的 Model 标签页）→ Compatibility Notes。薄模块（Memcached 无配置无日志、Cloudflared 仅安装）如实窄写。
- **F. AI CLI 客户端**：`Installation`（xterm 一键安装）→ `Configuration`（可视化/纯源码按实际）→ `Sessions`（恢复/删除/导出按实际）→ `MCP servers` → 差异标签页（Plugins/Skills/Stats/命令面板，有才写）→ Compatibility Notes。明确写"会话在外部系统终端运行"。
- **G. 内建能力**：无版本管理节；按各自真实 UI 结构定节（MCP Server：服务选项/客户端配置/工具策略/审计日志；DNS Server：解析行为/查询日志/与站点域名联动；FTP Server：pure-ftpd + ftp-srv 双实现与账号管理；Startup Groups：成员类型/顺序启停/默认组；Cron Jobs：系统调度器写入/运行历史/系统任务标签页；Per-Project Runtimes：.flyenv 机制/shell hook/IDE 集成；User Modules：自定义模块/执行项/日志；CLI & Terminal：shell hook、open-in-terminal、内嵌 xterm、系统环境变量工具）。
- **H. 特殊集成**：Podman（机器管理/Compose 生成器约 29 种栈/镜像与容器）；Cloudflared（安装+PATH，注明被 Cloudflare Tunnel 依赖）；Cloudflare Tunnel（API Token 配置/DNS 规则/每隧道日志）。

## 截图规则

- 占位图 URL：`https://oss.macphpstudy.com/image/features/<slug>-N.webp`，每页从 1 开始连续编号。
- 密度：Hero 1 张 + 每个主要功能节 1 张；薄模块 2-3 张，厚模块 6-10 张。
- 每张图配描述性 alt 文本（说明应截的真实界面，供后续替换）。

## 内容红线

- 只写调研报告中核实的能力；不确定的不写。
- 平台限制必须标注：ClickHouse、Typesense、Pure-FTPd 仅 macOS+Linux；Memcached 无配置文件和日志；Elasticsearch 全平台仅 Static 源；Cloudflared 无服务生命周期等。
- **不出现任何许可证/付费/试用相关内容**（用户明确要求）：内页只阐述功能，具体限制由应用在用户实际触发时自行提示。已有的 `docs/features/php.md` 中 "Registering more than two projects requires a FlyEnv license." 一句也要删除，并同步更新 `tests/php-feature-page.test.mjs` 中的 `/license/i` 断言。
- 语言模块的 "Service" 标签页是版本/PATH 管理而非运行中的服务，文案避免误导。
- 不延伸教程内容（Xdebug、.user.ini、框架配置等留给 Guide，遵循 AGENTS.md 的 Feature/Guide 边界规则）。

## 首页与测试联动

1. `docs/features.md`：61 个卡片的 `href` 改为对应 `/features/<slug>`；卡片 `name`/`detail`/`logo` 不动（`features-page.test.mjs` 的模块名单断言依赖 name）。
2. `tests/features-page.test.mjs`：`links users to verified workflows` 断言中的 `/guide/ai-coding-workspace-mcp` 等若因卡片改链而消失，同步更新断言（`/guide/getting-started` 和 `/demos` 在底部 CTA 仍存在）。
3. 新建 `tests/feature-pages.test.mjs`：数据驱动遍历全部 64 个 feature 页（含已有 3 页），断言：frontmatter 含 title/description/canonical 且 canonical 与 slug 一致；恰好一个 H1；图片 URL 匹配 `features/<slug>-N.webp` 且从 1 连续编号；含 `## Compatibility Notes`；每页至少 2 个内部链接（`/guide/`、`/solutions/`、`/features/`、`/download`、`/demos` 之一）；**不出现许可证相关词**（`/licen[cs]e|trial/i` 负向断言）。每页的关键术语断言用一张 manifest 表（slug → 必含词数组）。

## 执行批次（8 批，按原型）

| 批次 | 原型 | 页数 |
|---|---|---|
| 1 | A. 语言运行时 | 11 |
| 2 | B. Flutter + H. 特殊集成 | 4 |
| 3 | C. Web 服务器 | 5 |
| 4 | D. 数据库 | 7 |
| 5 | E. 版本化服务 前 9 | 9 |
| 6 | E. 版本化服务 后 9 | 9 |
| 7 | F. AI CLI 客户端 | 8 |
| 8 | G. 内建能力 | 8 |

每批流程：coder 子代理按调研报告写页面（每页一个子代理或每批若干并行）→ 更新该批卡片 href → 跑 `node --test` + `yarn docs:build` → 提交。全部批次完成后统一跑全量验证。

## 验证（Definition of Done）

- `node --test 'tests/*.test.mjs'` 全绿（除 3 个既有 community 相关失败，与本次无关）。
- `yarn docs:build` 通过。
- 抽查若干构建产物 HTML：唯一 title/description、单 H1、canonical 正确。

## 不做的事（YAGNI）

- 不做中文页、不改 `docs/zh/`。
- 不更新 `flyenv-seo-content-loop-kit/seo/inventory/features.yaml` 状态（用户指示跳过）。
- 不为 61 页各写独立 spec 文件（本设计文档 + 调研报告即为工件）。
- 不动已有内页 nodejs/local-sites-https；php.md 仅删除许可证一句（见内容红线）。
- 不加自定义 Vue 组件，页面纯 markdown。
