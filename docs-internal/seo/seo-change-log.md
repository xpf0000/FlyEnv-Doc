# FlyEnv SEO 变更与验收记录

任务书日期 2026-11-25。P0、P1、P2 的生产发布日期均待填。

## P0-A 基线与技术核对

- 本地 `yarn docs:build` 成功。独立 VitePress SEO 审计扫描 853 HTML、840 可索引、13 noindex、840 sitemap 条目，0 错误及警告。`node --test tests/*.test.mjs` 原 47 项通过。产物逐页复扫 840 个可索引页均有一个 H1。全站静态 href 审计发现 Laravel 五语 Symfony 死链与 404 语言入口缺失。
- 当前 VitePress `cleanUrls`、集中 SEO hooks 与 `robots.txt`、`llms.txt` 产物正常。当前页面没有新的 index 批次或 URL 迁移。补齐 ZH/ID 的 noindex 404 路由，与 ES/VI 的做法一致。Laravel 相关项目卡片去掉未发布的 Symfony 链接，现有 WordPress 与 Magento 仍可达。新增构建输出测试先在基线上复现失败。
- 线上核对日期 2026-11-25。根域 `macphpstudy.com`、`www.macphpstudy.com`、`www.flyenv.com` 均一次跳到 flyenv.com。三别名抽样旧下载/许可地址返回 301 到 flyenv.com 的同路径。主站旧 `/download.html`、`/license.html`、`/zh/download.html` 和五语旧 `/guide/about-license.html` 返回 200，canonical 指向对应 clean URL；`/sponsor.html` 返回 200，noindex 且页面已有到 License 的 meta refresh。不存在的抽样路径返回实际 404。
- 稳定部署后，CDN 管理员可先为抽样历史地址配置同语言、同意图 301/308，例如 `/zh/download.html → /zh/download`、各语 `/guide/about-license.html → /guide/about-license`、`/sponsor.html → /license`。支付 URL 的业务参数按路由要求保留。部署前用 `curl -IL` 比较首跳状态和 Location 后跟到终点，GET 核对 200/self canonical，复测 desktop 客户端帮助入口与随机 404。此轮没有部署这些配置。
- 构建原有提示包括 caddy/env 代码语言回退、过期的 Browserslist 数据以及大于 500 kB 的 chunk。仓库没有 lint/typecheck script。直接运行 `tsc --noEmit -p tsconfig.build.json` 有基线错误，详见下方最终验证。

## P0-B 内容及转化路径

- 对比页保留原有 URL 与主设计组件。
- 首页、下载和 License 保留已发布页面与功能。

## P0-C 埋点

- 旧 HTML 内联 `gtag('config')` 改为已有分析封装里的生产路由初始化。五语上下文、URL 清理、公开 UTM 白名单、SPA 规范路径、历史导航兼容、新导航与购买意向事件详见 [事件规范](analytics-event-spec.md)。
- 购包和支付的验证使用浏览器路由替身，不发送真实下载、GA 或支付请求。GA4 属性级自动事件与数据遮盖尚未变更。

### 首页、下载与许可的源码验证

- 五语首页 Hero 和元数据回到统一的原生工作区定位，保留 AI CLI/MCP。下载、GitHub、原有售价及核心区块继续沿用，补本语言首站指南和选型的文字入口。
- 五语下载卡片继续使用原来八个官方 Release 安装包。URL 与基线和 GitHub 资产逐一相同，区分 Windows x64 安装版与便携版、macOS 两种架构以及 Linux DEB/RPM 两种架构。卡片后补本语言上手指南；未验证旧网盘镜像内文件的版本。 [v4.21.1 资产](https://github.com/xpf0000/FlyEnv/releases/expanded_assets/v4.21.1)
- 五语 License 首页补核心开发免费、10 美元一次付费、单台活跃设备以及 Paddle 购买后在应用内申请的区分。申请方式、购买返回路由与政策沿用现有逻辑。真实下发速度未测。
- 五语快速入门提供 Nginx、PHP、最小入口文件和 HTTPS 的可见结果，修正 Windows 包类型和模块，数据库按项目需要加入。概念介绍页说明按需安装、项目版本和启动组，保有独立阅读意图。
- 25 页前置元数据及 8 个 Vue SFC 的静态检查通过。旧 AppDownButton 旧版下载 URL 当前未在实际文档入口引用，记录供维护者识别。
### P0 Compare 集群

2026-11-25 核对官方资料和相邻 FlyEnv 源码。保留 35 个已有页面的 Markdown、标题、主 URL、导航和 SEO 元数据。沿用现有首屏、图示、表格、FAQ 和下载卡片，在各语言页面的同一阅读位置加入有来源的项目试迁、回退、FlyEnv 指南及演示入口。

| 页面 | 主要更新 | 核对依据 |
| --- | --- | --- |
| `/compare/laragon` | 修正 Laragon 只能全局切换的旧说法。说明 Laragon Windows 便携工作流、Quick App、Multi-Stack Profiles、Procfile、Auto SSL，FlyEnv 站点 PHP、CLI 运行时和启动组。Laravel + PHP/Node.js 试迁覆盖 SQL、独立域名、端口、HTTPS、切回原 Profile 和 macOS/Linux 文件及扩展差异。删除无来源的 MCP、对象存储和启动组缺失判断。 | [Profiles](https://laragon.org/docs/profile)、[8.9.0 Full 安装包](https://laragon.org/download)、[Quick-add](https://laragon.org/docs/quick-add)、[Auto SSL](https://laragon.org/docs/auto-ssl)、[定价](https://laragon.org/pricing) |
| `/compare/servbay` | 确认 macOS 与 Windows 正式下载、Free/Pro/Team、七天 Pro 试用及官网所列年度价格。用付费网站分组替换未经核实的启动组缺失判断，区分本地 CA、已有证书和 ACME。PHP/PostgreSQL 示例涵盖 `pg_dump`、`pdo_pgsql`、独立恢复、端口、HTTPS 和还原原站。表格和 FAQ 区分 FlyEnv 的 BSD-3-Clause 源代码授权与应用可选授权。 | [下载](https://www.servbay.com/download)、[定价及功能矩阵](https://www.servbay.com/pricing)、[包和服务](https://support.servbay.com/basic-usage/services-and-packages/service-and-package-management)、[PostgreSQL](https://support.servbay.com/database-management/getting-started/postgresql-management-and-usage) |
| `/compare/herd` | 用 Herd 2.0 的按站点 PHP、Herd Studio、Laravel Cloud 与 herd.yml 说明 Laravel 专用工作流。修正 Node.js 仅属 Pro 的旧说法和过时的 PHP 版本范围，去除与新版不匹配的能力缺失判定。Laravel + MySQL + Redis 试迁明确 CLI/站点绑定、配置缓存和回退。 | [Herd 2.0](https://herd.laravel.com/blog/introducing-herd-2)、[站点和服务](https://herd.laravel.com/)、[Windows 与方案](https://herd.laravel.com/windows) |
| `/compare/xampp` | 细化 Apache/MariaDB 的 PHP 项目试迁、同引擎核对、SQL 导入、伪静态、HTTPS、端口冲突和首启验证。FlyEnv 的 PHP-FPM 是界面模块名称，Windows 处理网页请求用 `php-cgi.exe` FastCGI worker，macOS/Linux 用 `php-fpm`。 | [Apache Friends 下载与组件](https://www.apachefriends.org/download.html)、[Windows FAQ](https://www.apachefriends.org/faq_windows.html)、[FlyEnv v4.21.1](https://github.com/xpf0000/FlyEnv/releases/tag/v4.21.1)、FlyEnv `a158622d` 的 `src/fork/BaseManager.ts:264`、`src/fork/module/Php.win/index.ts:541-550` 和 `src/render/components/PHPFPM/Module.ts:7` |
| `/compare/mamp` | 区分免费 MAMP 与商业 MAMP PRO，核对 macOS/Windows、Apache/Nginx、MySQL、按站点 PHP/SSL 和 Windows CGI 模式。移除声称 MAMP PRO 无 MCP 的旧行，保留 WordPress 选型并给出可回退的文件/数据库/URL 试迁。 | [macOS 版本](https://www.mamp.info/en/mac/)、[Windows 版本](https://www.mamp.info/en/windows/)、[PRO 站点与 SSL](https://documentation.mamp.info/en/MAMP-PRO-Mac/Sites/Site/)、[PRO Windows PHP 模式](https://documentation.mamp.info/en/MAMP-PRO-Windows/Languages/PHP/) |
| `/compare/docker` | 区分宿主机二进制和 Docker Compose 的共享镜像、容器网络、CI 与部署一致性。说明镜像层和虚拟机的资源差异，未引用未经测量的收益数字。Node.js + PostgreSQL 试迁保留 Compose 文件和卷，直到验证后端请求。 | [Compose 的用途](https://docs.docker.com/compose/intro/features-uses/)、[Docker Desktop on Linux](https://docs.docker.com/desktop/setup/install/linux/)、[Docker Desktop 授权](https://docs.docker.com/subscription-billing/desktop-license/) |
| `/compare/` | 吸收 N01，按 PHP/Laravel/WordPress、Windows/桌面多运行时、共享容器三种场景组织全部六个对比入口。速查表增加 FlyEnv 和自身的 Getting Started，并把各工具的平台、主要栈、许可证/团队容器需求写入适用条件。无需新增专题 URL。 | 现有导航和集群页面、上列官方资料 |

定向验证通过。九个 Vue 组件的脚本和模板可以编译。SSR 渲染 35 个语言页面并核对每页单个 H1、各语下载和 Demos、汇总页六个对比卡片和本语言 Getting Started、正文日期及原 Markdown 恒等。所有新增站内目标存在五语文件，`git diff --check` 通过。试迁步骤为按源码、现有 FlyEnv 指南和官方文档整理的读者验证方案，项目和竞品未在本机进行端到端实际迁移，未新增截图或基准数据。

### P0 批次验收

- `yarn docs:build` 成功，52 项全仓测试通过。855 个 HTML 页面中 840 个可索引、15 个 noindex。独立 SEO 审计 0 错误、0 警告，静态站内地址及锚点复扫均无失效目标，所有可索引页各有一个 H1。
- Chrome 对五语首页、Laragon、ServBay、下载、许可及 Demos 做了 30 个页面和视口检查。用本地产物模拟生产 origin 并拦截 GA 和 Paddle，校验首载、导航、前进、后退、刷新、源路径、单次包点击、合成查询的清理、GPC 和本语言模拟回跳。初次预览复用了旧构建资源列表，重启后验证通过。
- 首次 P0 验证后将 Laragon Full 数据库行收窄为随包 MySQL，补官方 Full 安装包来源，同时修复外部下载归类和本地尾斜杠变体。后续集成构建包含这两项。

## P1 现有 Feature、Guide、Solution 和 Demos

- 80 个原生开发页面（16 个主题 × 五语）保留原 H1、元数据及素材。项目版本与多版本指南加入两项目选择与 PATH 验证，分别覆盖 zsh/Bash 和 PowerShell。Startup Groups 说明启动失败的可选继续、无效成员、已运行成员、逆序停止和共享服务影响。Host、Local Sites & HTTPS 与 Gitea 演示互通，Plugin Market 区分模块与运行时安装。
- PHP Feature、扩展、部署和 Laravel 指南核对 Windows PHP-FPM 界面与底层 CGI worker、PECL/PIE、终端与网页进程的验证，说明 Laravel 的独立依赖与可选 Octane。PHP 混淆保持独立输出和动态引用复测，四段不同 PHP 代码通过语法和执行检查。Java Feature 与 Guide 区分 JDK、Wrapper、JAR 与 WAR。两篇原生部署指南保留流程并补验证步骤，旧 Docker/XAMPP 综合 Guide 链到两个专门对比页。
- 30 个 AI 页面（6 个主题 × 五语）保留元数据与素材。AI Memory 补全 scope/ID/revision 核验与隐私边界，引用可证的 Codex 和 Kimi 配对。MCP 明确同意、工具策略、遮盖和审计，已有 CRUD 演示连到具体环境步骤。Ollama、Offline AI 与 n8n 区分本机推理、预先下载、npm、代理地址及发布/测试 webhook。相关段落按客户端源文件与上游文档核对，未重跑完整服务或真实 Agent 会话。
- 五语 Mailpit Guide 补 Laravel 本地 SMTP、配置清理、示例收件及浏览器核对。Mailpit Feature 保留管理意图和互链。关闭 relay/forwarding、选用回环绑定、注意现代 Laravel 的 `MAIL_SCHEME`。五语 mkcert Feature 区分证书域名、信任存储与 CA 公钥/私钥。PHP 示例语法验证通过。 [Mailpit 运行参数](https://mailpit.axllent.org/docs/configuration/runtime-options/) [Laravel 邮件配置](https://raw.githubusercontent.com/laravel/laravel/12.x/config/mail.php) [mkcert 信任配置](https://github.com/FiloSottile/mkcert#installing-the-ca-on-other-systems)
- 五语 Demos 保留搜索、分类、延迟播放器和原有事件。新的 `?video=<id>` 定位一个已有视频卡片，保留用户点击才播放的动作，并加本语言下载/方案入口。对比页等使用精确视频入口。Demos 的 `CollectionPage` 和 `ItemList` 直接指向实际视频平台。移除视频库的 `VideoObject`，因库页面按发现组织，iframe 也只在交互后生成。五个代表性缩略图及三个播放器 URL 返回 200；浏览器用拦截验证播放器源和交互。平台媒体流、字幕和实际视频索引待频道后台及 GSC 检查。 [Google 视频 SEO](https://developers.google.com/search/docs/appearance/video)
- P1 构建成功，52 项全仓测试通过。独立 SEO 审计 855 HTML、840 可索引、0 错误/警告，全站静态链接与锚点复扫无缺失。Chrome 检查五语视频入口、无预加载 iframe、键盘打开退出及焦点恢复、搜索原文未进埋点、ERPNext 回链、语言切换、无 JS 关键内容和真实 404。P1 审查修订在最终构建一并确认。

### P1 现有 Solution 优化

- ERPNext 保留原 URL 和标题，五语 description、正文及说明按已有 Frappe Bench 重新定位。点明 Frappe 的 Linux/macOS 支持和 Windows 上的 Ubuntu in WSL 建议。已有 macOS 录屏展示 Nginx 1.28.0 → Redis 8.6.0 → MariaDB 11.8.8 → 已配置的 ERPNext Python 项目，启动期间短暂 502，随后可打开 Invoicing。页面用本语言 `/demos?video=erpnext-local-project` 指向这段证据，用 Startup Groups Feature 和 Frappe 安装要求支撑站点与 Bench 的分工。启动组录屏不证明干净安装、后台队列、调度器或 Windows 原生 ERPNext。 [Frappe 平台与版本要求](https://docs.frappe.io/framework/user/en/installation) [Bench Procfile](https://docs.frappe.io/framework/user/en/bench/resources/bench-procfile)
- Laravel 保留原来专门的请求拓扑、配置路径、真实启动组截图和现有 Guide，补充 `composer.json` → CLI/Host PHP → `public` → HTTPS 数据库路由验证，以及队列 Worker 和调度器的独立确认。用项目依赖替代旧版 PHP 兼容示例。新增入口指向 Startup Groups、项目运行时，以及针对 Octane 类服务的 `/demos?video=php-project-services`。已保留 P0 移除失效 Symfony 入口的更改。 [Laravel 队列](https://laravel.com/framework/docs/13.x/queues)
- Spring Boot 以兼容 JDK 和仓库 Maven/Gradle Wrapper、可执行 JAR 内嵌服务、独立 WAR/Tomcat、应用端口及 Spring profile 划分真实工作流。请求已知 API，Actuator 健康入口仅在启用暴露时适用。配现有 Java Feature/Guide 和 Spring Boot 要求，无专属视频或实测项目截图。 [Spring Boot 系统要求](https://docs.spring.io/spring-boot/system-requirements.html)
- FastAPI 以选择解释器、项目虚拟环境、应用的实际 ASGI 入口和 Uvicorn 回环监听进行说明。以 HTTP 状态及 JSON 验证真实 API，交互文档存在时再检查 `/docs`。仅把项目所用数据库、Redis 和可选 Host 反代纳入说明，链接 Python Feature 和已有原生服务指南。无专属视频或实测项目截图。 [FastAPI ASGI 启动文档](https://fastapi.tiangolo.com/deployment/manually/)

范围为现有四页五语，无新增公开页面。保留各项目已有 Guide 边界和源码可证的运行方式。独立 Vue SSR 20 页通过，核对每页一个 H1、五语具体步骤、按钮和来源、ERPNext 演示和 Laravel 选定演示的确切链接，以及 Laravel P0 失效路由移除。所有新增站内路径均有对应语言源文件，两个演示 ID 与目录实现相符，`git diff --check` 通过。未实跑新的 Spring Boot、FastAPI、Laravel 或 ERPNext 项目环境。

## P2 CLIProxyAPI 单主题试验

- 五语 `/features/cliproxyapi` 保持 URL、资源、侧栏和内链。试验 title、description、H1 及入口定位为 CLIProxyAPI GUI，写清 FlyEnv 的桌面安装、启停、配置和日志与上游浏览器管理面板的分工。沿用真实截图、下载路径和指定演示。原默认模板绑定所有接口；仅本机使用示例绑定 `127.0.0.1`，保持远程管理关闭并使用配置中的管理密钥。上游 `MANAGEMENT_PASSWORD` 可能覆盖远程管理开关，本机示例保持该变量未设置。 [上游 Web UI](https://help.router-for.me/management/webui) [上游管理 API](https://help.router-for.me/management/apiv8)
- Kimi、Hermes Agent、Antigravity CLI 保留现有入口和 SEO 信号。当前文案已说明厂商安装、终端或 Gateway 的职责。待上游版本与支持细节实测后按需维护。CLIProxyAPI 先按 [28 天口径](seo-monitoring-baseline.md) 观察再决定是否扩大。

## 未新增的内容与剩余事项

- N01 纳入 Compare 汇总，N04 的 PHP/Node.js 意图由 Laravel、项目运行时和多版本指南共同支撑，N05 复用 Host。N06 复用 Offline AI/n8n 现有入口。N07 先以 Laragon/XAMPP 试迁段承接，避免迁移主题重叠。
- N02 的 ERPNext 公开视频可以核验已配项目重启，缺少可重建项目和 Bench 前置记录，暂留在 Startup Groups 与 ERPNext。N03 题目指定 Claude Code + Codex，而已有真实双端记录为 Codex + Kimi，暂留在 AI Memory Feature。
- 无新增可索引页面和 URL 迁移。新增 ZH/ID 404 工具路由和 Demos 查询入口，原 canonical、下载渠道、购买逻辑、客户端与部署配置保持既有路径与实现。
- 生产发布、GA4 管理台操作与真实测量、CDN 永久跳转、客户端 UTM、支付和安装归因均待外部验证。详见 [GA4 事件规范](analytics-event-spec.md) 和 [实施计划](seo-implementation-plan.md)。


## 构建产物逐页元数据对照

生产构建对比基线，20 个索引页的 title 或 description 有改动。下面列出全部差异。现有 canonical 逐页一致。

- `/`
  - title · FlyEnv - Open Source Local Development Environment for AI Agents → FlyEnv - Open Source Native Local Development Environment
  - description · FlyEnv is an open-source local development workspace for AI agents on macOS, Windows, and Linux, with runtimes, databases, web servers, sites, HTTPS, and MCP. → FlyEnv is an open-source native workspace for local development on macOS, Windows and Linux. Manage runtimes, databases, HTTPS sites and AI coding tools with MCP.
- `/es/`
  - title · FlyEnv - Entorno de Desarrollo Local Open Source para Agentes de IA → FlyEnv - Entorno de Desarrollo Local Nativo de Código Abierto
  - description · FlyEnv es un espacio de trabajo de desarrollo local open source para agentes de IA en macOS, Windows y Linux, con runtimes, bases de datos, servidores web, sitios, HTTPS y MCP. → FlyEnv es un entorno de desarrollo local nativo y de código abierto para macOS, Windows y Linux. Gestiona runtimes, bases de datos, sitios HTTPS y herramientas de IA con MCP.
- `/es/features/cliproxyapi`
  - title · Gestor de gateway de IA local CLIProxyAPI | FlyEnv → Interfaz de CLIProxyAPI para gestionar el proxy local | FlyEnv
  - description · Ejecuta versiones de CLIProxyAPI como un gateway de IA local con config.yaml gestionado, backends env y una interfaz de administración. → Instala y cambia de versión de CLIProxyAPI en FlyEnv, edita config.yaml, inicia el proxy local y abre su panel de administración.
- `/es/guide/getting-started`
  - title · Guía de inicio rápido de FlyEnv: en funcionamiento en 5 minutos | FlyEnv → Guía de inicio rápido de FlyEnv para ejecutar tu primer sitio local | FlyEnv
  - description · Guía completa de configuración de FlyEnv para macOS, Windows y Linux. Instálalo, configura tu primer sitio y empieza a desarrollar en menos de 5 minutos con gestión automática de versiones. → Instala FlyEnv en macOS, Windows o Linux y abre tu primer sitio HTTPS local con Nginx, PHP y Auto SSL.
- `/es/solutions/erpnext`
  - description · Ejecuta ERPNext en local con Python, MariaDB, Redis, Nginx y HTTPS usando FlyEnv en Windows, macOS y Linux. → Gestiona un stack ERPNext/Frappe existente con MariaDB, Redis, Nginx y los grupos de inicio de FlyEnv. Mira cómo se reinicia y comprueba en macOS.
- `/features/cliproxyapi`
  - title · CLIProxyAPI Local AI Gateway Manager | FlyEnv → CLIProxyAPI GUI: Install and Manage the Local Proxy | FlyEnv
  - description · Run CLIProxyAPI versions as a local AI gateway with managed config.yaml, env backends and a management UI. → Install and switch CLIProxyAPI versions in FlyEnv, edit config.yaml, start the local proxy and open its upstream management panel.
- `/guide/getting-started`
  - title · FlyEnv Quick Start Guide: Get Running in 5 Minutes | FlyEnv → FlyEnv Quick Start Guide: Run Your First Local Site | FlyEnv
  - description · Complete FlyEnv setup guide for macOS, Windows, and Linux. Install, configure your first site, and start developing in under 5 minutes with automatic version management. → Install FlyEnv on macOS, Windows, or Linux and use Nginx, PHP, and Auto SSL to open your first local HTTPS site.
- `/id/`
  - title · FlyEnv - Lingkungan Pengembangan Lokal Open Source untuk Agen AI → FlyEnv - Lingkungan Pengembangan Lokal Native dan Open Source
  - description · FlyEnv adalah workspace pengembangan lokal open source untuk agen AI di macOS, Windows, dan Linux, dengan runtime, database, server web, situs, HTTPS, dan MCP. → FlyEnv adalah ruang kerja open source untuk pengembangan lokal native di macOS, Windows, dan Linux. Kelola runtime, database, situs HTTPS, dan alat coding AI melalui MCP.
- `/id/features/cliproxyapi`
  - title · Manajer Gateway AI Lokal CLIProxyAPI | FlyEnv → GUI CLIProxyAPI: Pasang dan Kelola Proksi Lokal | FlyEnv
  - description · Jalankan versi CLIProxyAPI sebagai gateway AI lokal dengan config.yaml, backend env, dan UI manajemen terkelola. → Pasang dan ganti versi CLIProxyAPI di FlyEnv, edit config.yaml, jalankan proksi lokal, lalu buka panel manajemen bawaan CLIProxyAPI.
- `/id/guide/getting-started`
  - title · Panduan Mulai Cepat FlyEnv: Siap Digunakan dalam 5 Menit | FlyEnv → Panduan Mulai Cepat FlyEnv untuk Menjalankan Situs Lokal Pertama | FlyEnv
  - description · Panduan lengkap FlyEnv untuk macOS, Windows, dan Linux. Pasang aplikasi, konfigurasi situs pertama, dan mulai mengembangkan dengan manajemen versi otomatis. → Pasang FlyEnv di macOS, Windows, atau Linux, lalu gunakan Nginx, PHP, dan Auto SSL untuk membuka situs HTTPS lokal pertama Anda.
- `/id/solutions/erpnext`
  - description · ERPNext biasanya memadukan Python, MariaDB, Redis, Nginx, dan layanan Frappe. FlyEnv mengelolanya sebagai satu stack lokal. → Kelola stack ERPNext/Frappe yang sudah ada dengan MariaDB, Redis, Nginx, dan Startup Groups FlyEnv. Lihat restart dan verifikasi situs di macOS.
- `/solutions/erpnext`
  - description · Run ERPNext locally with Python, MariaDB, Redis, Nginx and HTTPS using FlyEnv on Windows, macOS and Linux. → Manage an existing ERPNext/Frappe stack with MariaDB, Redis, Nginx and FlyEnv Startup Groups. See a recorded macOS restart and verify the site.
- `/vi/`
  - title · FlyEnv - Môi trường phát triển local mã nguồn mở cho AI agent → FlyEnv - Môi trường phát triển local native mã nguồn mở
  - description · FlyEnv là một workspace phát triển local mã nguồn mở cho AI agent trên macOS, Windows, và Linux, với runtime, cơ sở dữ liệu, web server, site, HTTPS, và MCP. → FlyEnv là workspace phát triển local native mã nguồn mở cho macOS, Windows và Linux. Quản lý runtime, cơ sở dữ liệu, site HTTPS và công cụ lập trình AI qua MCP.
- `/vi/features/cliproxyapi`
  - title · Trình quản lý AI Gateway local CLIProxyAPI | FlyEnv → GUI CLIProxyAPI: Cài và quản lý proxy local | FlyEnv
  - description · Chạy các phiên bản CLIProxyAPI như một AI gateway local với config.yaml được quản lý, backend env và giao diện quản lý. → Cài và chuyển phiên bản CLIProxyAPI trong FlyEnv, chỉnh config.yaml, chạy proxy local và mở bảng điều khiển của CLIProxyAPI.
- `/vi/guide/getting-started`
  - title · Hướng dẫn bắt đầu nhanh FlyEnv: Chạy được trong 5 phút | FlyEnv → Hướng dẫn bắt đầu nhanh với FlyEnv để chạy site local đầu tiên | FlyEnv
  - description · Hướng dẫn thiết lập FlyEnv hoàn chỉnh cho macOS, Windows và Linux. Cài đặt, cấu hình site đầu tiên, và bắt đầu phát triển trong vòng 5 phút với quản lý phiên bản tự động. → Cài FlyEnv trên macOS, Windows hoặc Linux, rồi dùng Nginx, PHP và Auto SSL để mở site HTTPS local đầu tiên.
- `/vi/solutions/erpnext`
  - description · Chạy ERPNext local với Python, MariaDB, Redis, Nginx và HTTPS bằng FlyEnv trên Windows, macOS và Linux. → Quản lý stack ERPNext/Frappe có sẵn với MariaDB, Redis, Nginx và Startup Groups của FlyEnv. Xem cách khởi động lại và kiểm tra site trên macOS.
- `/zh/`
  - title · FlyEnv - 面向 AI 智能体的开源本地开发环境 → FlyEnv - 开源原生本地开发环境
  - description · FlyEnv 是适用于 macOS、Windows 和 Linux 的开源本地开发环境，专为 AI 智能体打造。通过 FlyEnv MCP 管理 PHP、Node.js、Python、数据库、Web 服务器、本地站点和 HTTPS。 → FlyEnv 是适用于 macOS、Windows 和 Linux 的开源原生本地开发环境。统一管理运行时、数据库和 HTTPS 站点，通过 MCP 接入 AI 编程工具。
- `/zh/features/cliproxyapi`
  - title · FlyEnv CLIProxyAPI：本地开发模块与配置指南 → CLIProxyAPI 图形界面：安装与管理本地代理 | FlyEnv
  - description · 在 FlyEnv 中将 CLIProxyAPI 作为本地 AI 网关运行，管理配置、环境后端和管理界面。 → 在 FlyEnv 中安装与切换 CLIProxyAPI 版本、编辑 config.yaml、启动本地代理并打开上游管理面板。
- `/zh/guide/getting-started`
  - title · FlyEnv 快速入门指南：5 分钟快速上手 | FlyEnv → FlyEnv 快速入门指南：运行第一个本地站点 | FlyEnv
  - description · 完整的 FlyEnv 安装配置指南，支持 macOS、Windows 和 Linux。在 5 分钟内完成安装、配置第一个站点并开始开发，支持自动版本管理。 → 在 macOS、Windows 或 Linux 上安装 FlyEnv，用 Nginx、PHP 和自动 SSL 打开第一个本地 HTTPS 站点。
- `/zh/solutions/erpnext`
  - description · ERPNext 通常结合 Python、MariaDB、Redis、Nginx 和相关 Frappe 服务。FlyEnv 可将其作为本地技术栈统一管理。 → 用 FlyEnv 启动组管理已有 ERPNext/Frappe 环境的 MariaDB、Redis 和 Nginx，查看 macOS 录屏中的重启和站点验证。

## 最终验收

- P0、P1、P2 三次使用 `yarn docs:build` 成功。最终 `yarn test:seo` 15/15、`node --test tests/*.test.mjs` 52/52、`git diff --check` 通过。
- 生产产物扫描 855 HTML、840 个 sitemap/canonical、15 个 noindex。独立 SEO 审计 0 错误、0 警告。840 个可索引页各一个 H1，站内链接和锚点 0 缺失。附加检查通过 918 个本地资源路径与 75 个本地化视频直达目标。与原产物相比，840 个 canonical 原样保留；仅增加两个 noindex 404 资源。
- 最终 Chrome 复测通过。五语关键转化页面、包选项、隔离验证的 GA 指令、Paddle 模拟回跳、GPC、前进后退、五语播放器按需加载、键盘操作、五语 CLIProxyAPI 页面、回环示例与精确演示入口均覆盖。外部 ServBay 下载链接没有触发 FlyEnv 的意图事件，带尾斜杠的 ID 许可链接只触发一次许可导航。真实供应商数据和支付操作未发送。Chrome 对播放器使用网络替身，公开视频 URL 可到达，但字幕及实际媒体连续播放未独立核验。
- 仓库没有 lint/typecheck script。尝试 `yarn eslint docs/utils/analytics.ts docs/.vitepress/theme/index.js`，ESLint 8 未发现旧 `.eslintrc.mjs`；显式 `-c .eslintrc.mjs` 仍因传统配置加载器按 YAML 处理而失败。尝试 `yarn tsc --noEmit -p tsconfig.build.json`，保留基线的 TS5023（`tsconfig.json:21` 的 include 位置）和 TS2740（`docs/data/solution-details.ts:73` 的部分映射声明类型）。无新增类型诊断。构建原有高亮、Browserslist 和 chunk 大小提示仍存在。
- 源码变更保留在当前工作区。未提交、推送或发布。运营记录中的各批发布日期待填。

## 评审收尾与复跑

- Laravel 的首页面包屑复用页面已有的本地化链接逻辑。ERPNext、Spring Boot、FastAPI 的技术栈角色按稳定组件 key 绑定。
- `tests/seo-content.test.mjs` 验证五语 Laravel 面包屑、六页五语试迁段及链接、三个 Solution 的五语角色和工作流。它使用生产构建输出。
- `tests/browser/seo.test.mjs` 直接将生产构建文件映射到隔离浏览器里的官网 origin。浏览器请求由本地文件和 GA、Paddle、播放器替身处理，测试不会访问生产服务。
- 复跑顺序为 `yarn docs:build`、`node --test tests/*.test.mjs`、`yarn test:seo`、`git diff --check HEAD`。若本机未安装 Playwright Chromium，先运行 `yarn playwright install chromium`，再运行 `yarn test:seo:browser`。可用已有 Chrome 时运行 `PLAYWRIGHT_CHROMIUM_CHANNEL=chrome yarn test:seo:browser`。
- 实际暂存区由维护者管理。按 `git diff --cached --name-status` 和 `git diff --name-status` 核对同一任务的新增文件、接入方、数据和五语路由，避免把评审文档或其他工作误带入。完整候选快照从基线加上本任务文件构造，使用独立 Git 索引与检出目录做构建和测试。

- 评审复验的临时索引包含 193 个变更路径，已比对其检出目录与候选索引一致。候选 tree 为 `349d54a0206d1d0c725069ae12b2b0db6cba2f33`。以下验收结果在构建与测试完成后写入日志。原暂存区的 12 个文件和内容一致，评审文档未纳入候选。
- 从该候选检出执行 `yarn docs:build` 成功，`node --test tests/*.test.mjs` 55/55、`yarn test:seo` 15/15、`PLAYWRIGHT_CHROMIUM_CHANNEL=chrome yarn test:seo:browser` 19/19。Playwright 覆盖五语 Laravel 面包屑的桌面与移动点击、下载导航及真实包卡片分类、外部下载排除、许可尾斜杠、购买按钮加载防重、五语 Demos 深链及焦点恢复、DNT/GPC 和支付返回页。
- 评审列出的 10 个文件及新增测试通过 Prettier。独立 SEO 审计检查 855 个 HTML、840 个可索引页和 15 个 noindex，0 错误、0 警告。静态扫描通过 918 个资源及 75 个视频直达目标，站内链接和锚点无缺失。复跑独立 SEO 审计时，从候选目录运行 VitePress SEO 审计技能中的 `scripts/audit-seo.mjs --dist docs/.vitepress/dist --site https://flyenv.com --json`。
- TypeScript 仍报告原有 TS5023 和 TS2740，未增加诊断。GA4 管理台及生产依赖仍按 [事件规范](analytics-event-spec.md) 验收。未提交、推送或部署。

## GitHub 推送

2026-11-26 将官网源码和测试的 188 个文件提交至 master，远端已核对为 `0ae8632c1f19374cc2e3833a35cc1d5ac1ca8e8b`。发布前复跑生产构建、55 项 Node 测试、19 项 Chrome 测试及 855 页 SEO 审计，均通过。公开仓库的提交范围限于官网源码和测试，内部运营文档和评审记录保留在本地。GitHub 当前没有 Pages 或 Actions 发布流程。推送后检查 flyenv.com 的 CLIProxyAPI 和 Laragon 两页仍返回 11 月 23 日版本。官网部署入口、实际发布日期及 GA4 发布前验收待确认。

## 比较页和 Demos 视觉回访

- 五语言比较页移除文档导航侧栏。比较汇总及六个详情的首屏突出各自对应的 FlyEnv 优势。新增插件市场实拍，可切换插件目录和 MySQL Cluster 模块，附本地化功能链接和有效授权条件。
- 桌面比较表增加 18px 表头垂直间距并突出 FlyEnv 列。窄屏以整行展示能力名，下方并列两款产品，保留表格语义。试迁卡片提供指南、演示、编号步骤和回退说明，参考资料移至可展开区域。
- 五语言 Demos 使用宽屏布局。1440px 视口目录宽约 1325px，1920px 视口宽 1720px，常规目录最多四栏。实际 Chrome 检查了桌面、320px 和 390px 移动视口及深色模式。生产预览中复核了插件截图键盘切换、中文插件市场链接和 Demos 搜索。
- `yarn docs:build`、55 项 Node 测试（含 15 项 SEO 产物测试）、21 项 Chrome 测试和 `git diff --check HEAD` 均通过。Chrome 覆盖 35 个比较路由，以及 Demos 宽度、直达、播放器和焦点恢复。独立 SEO 审计检查 855 个 HTML、840 个可索引页，0 错误、0 警告。
- 本轮源码在本地工作区，预览端口 4187。提交、推送和线上发布待执行。

按后续反馈，Demos 内容边缘对齐解决方案首页。Chrome 实测 1440px 和 1920px 视口下，两页的有效内容宽度均为 1104px，390px 视口下均为 310px。更新后的回归测试覆盖五种语言和六种视口。生产构建、55 项 Node 测试及 21 项 Chrome 测试通过。

Demos 卡片按目录实际宽度排布。1104px 的桌面目录为三列，平板常见宽度为两列，手机为一列。精选和普通目录共用网格规则，五语 768px 平板使用站内折叠菜单。
