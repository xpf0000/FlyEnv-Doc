# FlyEnv 内容清单与搜索意图

路线以当前构建 canonical 为准。下列路径默认五语，对应页面在 en 根目录及 zh、id、es、vi 前缀。目录索引保留尾斜杠。末尾按实际 Markdown 文件列出全量路由。

| 主题 / 意图 | 主页面 | 支撑页面与读者下一步 | 决策 |
| --- | --- | --- | --- |
| FlyEnv 品牌与统一工作空间 | `/` | What is FlyEnv、Compare、Demos → Download | 保留首屏与视觉，补行动路径 |
| 工具通用选型 | `/compare/` | 选具体竞品 → Download / Quick Start | 吸收 N01 |
| Laragon / Windows 迁移及跨桌面 | `/compare/laragon` | PHP 扩展、Host、Startup Groups → 试迁 | 原位优化 |
| ServBay / 技术栈、平台、授权 | `/compare/servbay` | Startup Groups、License → 试迁 | 原位优化 |
| Herd / Laravel 与配套服务 | `/compare/herd` | Laravel Guide、Laravel Solution → 下载 | 原位核对 |
| XAMPP / 传统 PHP 栈 | `/compare/xampp` | PHP、Host、PHP 原生运行 → 下载 | 原位核对 |
| MAMP / MAMP PRO 桌面 PHP | `/compare/mamp` | PHP、WordPress Solution → 下载 | 原位核对 |
| Docker / 原生与容器选择 | `/compare/docker` | PHP 及 Node/Python/Go 原生运行指南 → 下载 | 保留范围与隔离边界 |
| 三类原生/容器工作流交叉评估 | `/guide/flyenv-vs-docker-xampp` | 三方情境入口 → 两个专门 Compare | 保留历史 URL；避免继续扩同类对比 |
| 下载、首跑、产品概念 | `/download`、`/guide/getting-started`、`/guide/what-is-flyenv` | 包选择 → 首次站点；概念页 → 工作流 | 各自保留 |
| Free/Pro 与获得方式；激活/迁移 | `/license`；`/guide/about-license` | 购买意向 → 客户端申请/激活；社区贡献 | 各自保留；sponsor 为旧入口 |
| 项目版本绑定；具体配置；多版本管理 | `/features/per-project-runtimes`；`/guide/project-level-runtime-environment`；`/guide/manage-multiple-node-php-versions` | 绑定与验证 → 对应运行时 / 演示 | 不新增多版本页 |
| 项目服务复用 | `/features/startup-groups` | Launcher 生命周期 → Laravel / ERPNext 示例及 Demos | 复用 ERPNext 真实演示，N02 缺可重建项目素材 |
| HTTPS、反代、证书 | `/guide/host` | `/features/local-sites-https`、mkcert、各反向代理 Guide → 本地 HTTPS 验证 | 吸收 N05 |
| 安装可选能力 | `/features/plugin-market` | Plugin 内页、Demos → 安装插件与版本 | 保留 |
| PHP 版本及 Web 执行、扩展、混淆 | `/features/php`；`/guide/php-extensions-install`；`/guide/php-code-obfuscation` | PHP 启动/扩展验证与限制 → Laravel Guide | 保留三条意图 |
| Laravel 操作；Laravel 环境组成 | `/guide/run-laravel-use-flyenv`；`/solutions/laravel` | PHP、数据库、Node 前端构建、启动组 → 实操或下载 | N04 复用此组合，暂不拆分新 URL |
| Java JDK；搭建；Spring Boot 全栈 | `/features/java`；`/guide/set-up-java-development-environment`；`/solutions/spring-boot` | JDK → Maven/Gradle → 真实站点 | 保留现有入口 |
| ERPNext；FastAPI 项目 | `/solutions/erpnext`；`/solutions/fastapi` | 依赖、环境、访问验证 → Demos 或 Download | 不另建 ERPNext SEO 页 |
| 项目原生运行步骤 | `/guide/deploy-php-projects-without-docker`；`/guide/deploy-nodejs-python-go-without-docker` | 依赖/端口/HTTPS → 对比部署模型 | 不复制 Docker Compare |
| AI Memory 能力与跨客户端记忆 | `/features/ai-memory` | 插件安装 → MCP 配置及验证 | 现有 Feature 说明 Codex/Kimi 实证，N03 待指定双端验证 |
| 工作环境 MCP 能力；操作 | `/features/mcp-server`；`/guide/ai-coding-workspace-mcp` | 工具权限/审计与实际项目 → Demos | 分开两个 MCP 服务 |
| 本地推理、Agent 和自动化 | `/features/ollama`；`/guide/build-local-offline-ai-agent`；`/guide/build-local-ai-workflow-by-n8n` | 本地模型、Agent、工作流与依赖 | N06 暂无独立已验证基础设施场景 |
| CLIProxyAPI GUI | `/features/cliproxyapi` | 内置版本/配置、本地上游管理 UI → 下载 | P2 单主题试验 |
| Mailpit 管理和 SMTP 验证 | `/features/mailpit`；`/guide/local-email-testing-mailpit` | 配置 SMTP → 查收测试邮件 | 互链 |
| 第三方 AI CLI 与 Agent | `/features/kimi`、`/features/hermes-agent`、`/features/antigravity-cli` | 安装、终端与上游文档 | 小批维护 |
| 视频、模块库、项目库、社区 | `/demos`、`/features`、`/solutions`、`/community` | 发现内容 → 具体视频、模块、方案或参与 | 保留各自交互 |

N07 先使用 Laragon 和 XAMPP 的试迁段；只有后续数据和更完整的实测素材支持独立的迁移教程时再新增。

## 全量路由

共 171 个内容路径族，基线 853 个、P0 补齐后 855 个 Markdown 路由。表中语言列按 en/zh/id/es/vi 排序。

| 路径 | 语言 |
| --- | --- |
| `/` | en, zh, id, es, vi |
| `/404` | en, zh, id, es, vi（ZH/ID 在 P0 补齐，noindex） |
| `/community` | en, zh, id, es, vi |
| `/compare/` | en, zh, id, es, vi |
| `/compare/docker` | en, zh, id, es, vi |
| `/compare/herd` | en, zh, id, es, vi |
| `/compare/laragon` | en, zh, id, es, vi |
| `/compare/mamp` | en, zh, id, es, vi |
| `/compare/servbay` | en, zh, id, es, vi |
| `/compare/xampp` | en, zh, id, es, vi |
| `/demos` | en, zh, id, es, vi |
| `/download` | en, zh, id, es, vi |
| `/features` | en, zh, id, es, vi |
| `/features/ai-memory` | en, zh, id, es, vi |
| `/features/antigravity-cli` | en, zh, id, es, vi |
| `/features/apache` | en, zh, id, es, vi |
| `/features/bun` | en, zh, id, es, vi |
| `/features/caddy` | en, zh, id, es, vi |
| `/features/claude-code` | en, zh, id, es, vi |
| `/features/cli-terminal` | en, zh, id, es, vi |
| `/features/clickhouse` | en, zh, id, es, vi |
| `/features/cliproxyapi` | en, zh, id, es, vi |
| `/features/cloudflare-tunnel` | en, zh, id, es, vi |
| `/features/cloudflared` | en, zh, id, es, vi |
| `/features/codex` | en, zh, id, es, vi |
| `/features/command-shortcuts` | en, zh, id, es, vi |
| `/features/consul` | en, zh, id, es, vi |
| `/features/cron-jobs` | en, zh, id, es, vi |
| `/features/dameng` | en, zh, id, es, vi |
| `/features/deno` | en, zh, id, es, vi |
| `/features/dns-server` | en, zh, id, es, vi |
| `/features/dotnet` | en, zh, id, es, vi |
| `/features/elasticsearch` | en, zh, id, es, vi |
| `/features/erlang` | en, zh, id, es, vi |
| `/features/etcd` | en, zh, id, es, vi |
| `/features/flutter` | en, zh, id, es, vi |
| `/features/frankenphp` | en, zh, id, es, vi |
| `/features/ftp-server` | en, zh, id, es, vi |
| `/features/github-copilot-cli` | en, zh, id, es, vi |
| `/features/go` | en, zh, id, es, vi |
| `/features/gradle` | en, zh, id, es, vi |
| `/features/hermes-agent` | en, zh, id, es, vi |
| `/features/java` | en, zh, id, es, vi |
| `/features/kafka` | en, zh, id, es, vi |
| `/features/kimi` | en, zh, id, es, vi |
| `/features/llama-cpp` | en, zh, id, es, vi |
| `/features/local-sites-https` | en, zh, id, es, vi |
| `/features/mailpit` | en, zh, id, es, vi |
| `/features/mariadb` | en, zh, id, es, vi |
| `/features/mariadb-cluster` | en, zh, id, es, vi |
| `/features/mcp-server` | en, zh, id, es, vi |
| `/features/meilisearch` | en, zh, id, es, vi |
| `/features/memcached` | en, zh, id, es, vi |
| `/features/minio` | en, zh, id, es, vi |
| `/features/mkcert` | en, zh, id, es, vi |
| `/features/mongodb` | en, zh, id, es, vi |
| `/features/mssql` | en, zh, id, es, vi |
| `/features/mysql` | en, zh, id, es, vi |
| `/features/mysql-cluster` | en, zh, id, es, vi |
| `/features/n8n` | en, zh, id, es, vi |
| `/features/neo4j` | en, zh, id, es, vi |
| `/features/nginx` | en, zh, id, es, vi |
| `/features/nodejs` | en, zh, id, es, vi |
| `/features/ntp-server` | en, zh, id, es, vi |
| `/features/numa` | en, zh, id, es, vi |
| `/features/ollama` | en, zh, id, es, vi |
| `/features/openclaw` | en, zh, id, es, vi |
| `/features/opencode` | en, zh, id, es, vi |
| `/features/opensearch` | en, zh, id, es, vi |
| `/features/per-project-runtimes` | en, zh, id, es, vi |
| `/features/php` | en, zh, id, es, vi |
| `/features/plugin-market` | en, zh, id, es, vi |
| `/features/podman` | en, zh, id, es, vi |
| `/features/postgresql` | en, zh, id, es, vi |
| `/features/python` | en, zh, id, es, vi |
| `/features/qdrant` | en, zh, id, es, vi |
| `/features/r-nacos` | en, zh, id, es, vi |
| `/features/rabbitmq` | en, zh, id, es, vi |
| `/features/redis` | en, zh, id, es, vi |
| `/features/ruby` | en, zh, id, es, vi |
| `/features/rust` | en, zh, id, es, vi |
| `/features/rustfs` | en, zh, id, es, vi |
| `/features/samwaf` | en, zh, id, es, vi |
| `/features/startup-groups` | en, zh, id, es, vi |
| `/features/temporal` | en, zh, id, es, vi |
| `/features/tomcat` | en, zh, id, es, vi |
| `/features/typesense` | en, zh, id, es, vi |
| `/features/user-modules` | en, zh, id, es, vi |
| `/features/zig` | en, zh, id, es, vi |
| `/features/zincsearch` | en, zh, id, es, vi |
| `/flyphpserver` | en, zh, id, es, vi |
| `/guide/about-flyenv-helper` | en, zh, id, es, vi |
| `/guide/about-license` | en, zh, id, es, vi |
| `/guide/ai-coding-workspace-mcp` | en, zh, id, es, vi |
| `/guide/build-local-ai-workflow-by-n8n` | en, zh, id, es, vi |
| `/guide/build-local-offline-ai-agent` | en, zh, id, es, vi |
| `/guide/cloudflare-tunnel-local-development` | en, zh, id, es, vi |
| `/guide/code-playground-and-code-library` | en, zh, id, es, vi |
| `/guide/database-user-password` | en, zh, id, es, vi |
| `/guide/deploy-nodejs-python-go-without-docker` | en, zh, id, es, vi |
| `/guide/deploy-php-projects-without-docker` | en, zh, id, es, vi |
| `/guide/dynamically-load-I18n-language-packs` | en, zh, id, es, vi |
| `/guide/flyenv-vs-docker-xampp` | en, zh, id, es, vi |
| `/guide/flyenv-work-with-ai` | en, zh, id, es, vi |
| `/guide/getting-started` | en, zh, id, es, vi |
| `/guide/host` | en, zh, id, es, vi |
| `/guide/local-email-testing-mailpit` | en, zh, id, es, vi |
| `/guide/manage-multiple-node-php-versions` | en, zh, id, es, vi |
| `/guide/openclaw` | en, zh, id, es, vi |
| `/guide/parse-html-as-php-multi-servers` | en, zh, id, es, vi |
| `/guide/php-code-obfuscation` | en, zh, id, es, vi |
| `/guide/php-debug-with-xdebug` | en, zh, id, es, vi |
| `/guide/php-extensions-install` | en, zh, id, es, vi |
| `/guide/php-icu4c-issues` | en, zh, id, es, vi |
| `/guide/podman-module` | en, zh, id, es, vi |
| `/guide/project-level-runtime-environment` | en, zh, id, es, vi |
| `/guide/reverse-proxy-nestjs-multi-servers` | en, zh, id, es, vi |
| `/guide/run-laravel-use-flyenv` | en, zh, id, es, vi |
| `/guide/set-up-java-development-environment` | en, zh, id, es, vi |
| `/guide/setup-system-path-environment` | en, zh, id, es, vi |
| `/guide/use-proxy` | en, zh, id, es, vi |
| `/guide/user-customizable-modules` | en, zh, id, es, vi |
| `/guide/what-is-flyenv` | en, zh, id, es, vi |
| `/guide/windows-site-performance-optimization` | en, zh, id, es, vi |
| `/license` | en, zh, id, es, vi |
| `/payment-success` | en, zh, id, es, vi |
| `/privacy` | en, zh, id, es, vi |
| `/refund-policy` | en, zh, id, es, vi |
| `/solutions` | en, zh, id, es, vi |
| `/solutions/adonisjs` | en, zh, id, es, vi |
| `/solutions/apache-superset` | en, zh, id, es, vi |
| `/solutions/aspnet-core` | en, zh, id, es, vi |
| `/solutions/directus` | en, zh, id, es, vi |
| `/solutions/django` | en, zh, id, es, vi |
| `/solutions/drupal` | en, zh, id, es, vi |
| `/solutions/erpnext` | en, zh, id, es, vi |
| `/solutions/espocrm` | en, zh, id, es, vi |
| `/solutions/express` | en, zh, id, es, vi |
| `/solutions/fastapi` | en, zh, id, es, vi |
| `/solutions/flask` | en, zh, id, es, vi |
| `/solutions/ghost` | en, zh, id, es, vi |
| `/solutions/gin` | en, zh, id, es, vi |
| `/solutions/gitea` | en, zh, id, es, vi |
| `/solutions/hono` | en, zh, id, es, vi |
| `/solutions/keycloak` | en, zh, id, es, vi |
| `/solutions/laravel` | en, zh, id, es, vi |
| `/solutions/magento` | en, zh, id, es, vi |
| `/solutions/matomo` | en, zh, id, es, vi |
| `/solutions/medusa` | en, zh, id, es, vi |
| `/solutions/metabase` | en, zh, id, es, vi |
| `/solutions/nestjs` | en, zh, id, es, vi |
| `/solutions/nextcloud` | en, zh, id, es, vi |
| `/solutions/nextjs` | en, zh, id, es, vi |
| `/solutions/node-red` | en, zh, id, es, vi |
| `/solutions/nuxt` | en, zh, id, es, vi |
| `/solutions/odoo` | en, zh, id, es, vi |
| `/solutions/opencart` | en, zh, id, es, vi |
| `/solutions/payload` | en, zh, id, es, vi |
| `/solutions/pocketbase` | en, zh, id, es, vi |
| `/solutions/prestashop` | en, zh, id, es, vi |
| `/solutions/quarkus` | en, zh, id, es, vi |
| `/solutions/react-vite` | en, zh, id, es, vi |
| `/solutions/ruby-on-rails` | en, zh, id, es, vi |
| `/solutions/spring-boot` | en, zh, id, es, vi |
| `/solutions/strapi` | en, zh, id, es, vi |
| `/solutions/suitecrm` | en, zh, id, es, vi |
| `/solutions/sveltekit` | en, zh, id, es, vi |
| `/solutions/vue-vite` | en, zh, id, es, vi |
| `/solutions/wordpress` | en, zh, id, es, vi |
| `/sponsor` | en, zh, id, es, vi |
| `/terms` | en, zh, id, es, vi |
