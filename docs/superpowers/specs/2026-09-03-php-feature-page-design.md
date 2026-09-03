# PHP 特性详情页重构设计

日期：2026-09-03
状态：设计已获用户批准
目标文件：`docs/features/php.md`（仅英文页，本次不做中文页）

## 背景

现有 `docs/features/php.md` 是纯文字叙事页，无截图，对 FlyEnv 的 PHP 功能覆盖笼统。用户要求把 FlyEnv 实际提供的 PHP 功能完整列出并配截图（先用占位图）。

功能事实来源：FlyEnv 源码 `/Users/x/Desktop/WorkSpace/GitHub/FlyEnv`（版本 4.17.0，`src/render/components/PHP/`、`PHPFPM/`、`Host/CreateProject/` 等）。

## 用户已确认的决策

1. **范围**：8 个核心功能（版本管理、PHP-FPM 服务管理、php.ini 配置、扩展管理、自定义 PHP 版本、项目级环境隔离、Composer 管理、快捷创建项目）为主功能区块；日志查看、disable_functions 管理、phpMyAdmin 入口、PHP 混淆工具合并为一个"更多工具"小节；FrankenPHP / RoadRunner / Swoole CLI 保持底部交叉链接。
2. **语言**：只更新英文页 `docs/features/php.md`，不动 `docs/zh/`。
3. **截图密度**：重点功能（版本管理、FPM、php.ini、扩展、快捷创建）可配 2 张，其余 1 张，共 13 张。
4. **结构方案**：功能画廊式——8 个核心功能各自成 H2 区块（标题 + 短描述 + 要点列表 + 截图），现有叙事内容拆解融入，不单列。

## Frontmatter / SEO

- 保留 `layout: doc`、`titleTemplate: false` 及现有整套 head meta（canonical、og:* 结构不变）。
- title / description 微调，覆盖新增关键词：php.ini、extensions、Composer、WordPress/Laravel quick project creation。
- og:url / canonical 保持 `https://www.flyenv.com/features/php`。

## 页面结构与截图映射

占位图 URL 规则：`https://oss.macphpstudy.com/image/features/php-N.webp`，N 按页面出现顺序 1–13 编号。每张图配描述性 alt 文本（SEO + 后续替换对照）。图片用标准 markdown 语法，不加自定义 Vue 组件。

| 顺序 | 区块（H2） | 内容要点（源自源码核实） | 截图 |
|---|---|---|---|
| — | `# PHP development in FlyEnv`（H1 Hero） | 一个面板管理所有 PHP 版本、FPM、配置、扩展与项目 | php-1：PHP 模块总览 |
| 1 | `## PHP version management` | 多版本并存安装；安装源按平台：Static（全平台）/ Homebrew / MacPorts（macOS）；自定义版本目录扫描添加（`ServiceManager/customPath.vue`）；CLI 版本切换（PATH 写入）与每版本别名 | php-2：Version Manager 列表；php-3：Service 表格（env/alias 列） |
| 2 | `## PHP-FPM service management` | 按版本启动/停止/重启；侧边栏与系统托盘一键全部启停；macOS/Linux 走 unix socket（`/tmp/phpwebstudy-php-cgi-<ver>.sock`），与 Nginx/Apache/Caddy 站点集成；php-fpm.conf 编辑；Windows 为 FastCGI 且可调 workers 数（1–64） | php-4：PHP-FPM 页；php-5：php-fpm.conf 编辑器 |
| 3 | `## php.ini configuration` | 常用项可视化表单（memory_limit、upload_max_filesize、timezone 等约 17 项）+ Monaco 源码编辑器（可从 php.ini.default 恢复）；disable_functions 可视化管理（约 170 个危险函数可勾选检索） | php-6：php.ini 抽屉；php-7：禁用函数管理 |
| 4 | `## Extension management` | 已加载扩展列表（`php -m`）；Homebrew / MacPorts 一键安装；Xdebug ini 模板一键复制（port 9003）；Windows：本地 DLL 启用/禁用 + 在线扩展库下载；跳转 php.ini / 打开扩展目录 | php-8：扩展抽屉（已加载列表）；php-9：brew 安装 / 在线库 |
| 5 | `## Project-level PHP isolation` | PHP Projects：每个项目绑定独立 PHP 版本，写入 `.flyenv` 环境文件；一键在 Terminal / VSCode / PhpStorm 等打开；Host 站点按站点选择 PHP 版本；注明超过 2 个项目需许可证 | php-10：项目列表绑定版本 |
| 6 | `## Composer management` | Composer 版本安装/切换（Local / Static / Homebrew，按平台）；自定义目录；项目级 Composer 绑定 | php-11：Composer 标签页 |
| 7 | `## Quick project creation` | 10 个模板：WordPress、Laravel、Yii2、ThinkPHP、Symfony、CodeIgniter、CakePHP、Slim、ClassicPress、Contao（注意：无 Drupal、无 Nextcloud）；可选框架版本 + PHP 版本 + Composer 版本；内置终端执行 composer 创建；完成后一键创建站点（预填 rewrite 规则） | php-12：模板网格；php-13：创建对话框 |
| 8 | `## More PHP tools`（无截图） | 日志查看器（PHP 错误日志 / FPM 日志 / FPM 慢日志）；phpMyAdmin 快捷入口（位于 MySQL/MariaDB 模块，非 PHP 页）；PHP 代码混淆工具（Tools 页） | — |
| 9 | `## Related runtimes` | FrankenPHP、RoadRunner、Swoole CLI 定位说明 + 指向 `/guide/deploy-php-projects-without-docker` | — |
| 10 | `## Boundaries` | 精简保留现有边界说明（平台差异、不保证所有扩展/框架版本在所有 OS 可用）+ Download / solutions 链接 | — |

## 内容规则

- 语气对齐 `docs/features/nodejs.md`：陈述事实、不夸大，明确标注平台差异（FastCGI workers 仅 Windows、MacPorts 仅 macOS、php-fpm.conf 编辑仅 macOS/Linux 等）。
- 不承诺源码中不存在的能力（如无 Drupal/Nextcloud 模板、无全局 Xdebug 开关、PHP 不监听 TCP 端口）。
- 保留并复用现有页面中的有效交叉链接（solutions/laravel、solutions/wordpress、guide/php-extensions-install、features/local-sites-https 等）。

## 验证

- `yarn docs:build` 通过。
- `node --test tests/` 全绿（现有测试只约束 `docs/features.md` 总览页，不直接约束本页，但不能破坏）。

## 不做的事（YAGNI）

- 不做中文页。
- 不新增 Vue 组件、不改 doc 布局。
- 不改动 FrankenPHP / Swoole CLI / RoadRunner 各自模块的文档。
- 截图本次只用占位 URL，不实际截取/上传。
