---
layout: doc
titleTemplate: false
title: 'PHP 版本管理器、PHP-FPM 和 Composer 工具 | FlyEnv'
description: '在 FlyEnv 中安装和切换 PHP 版本，管理 PHP-FPM、php.ini 和扩展，隔离项目运行时，管理 Composer，并创建 WordPress 或 Laravel 项目。'
head:
  - - meta
    - name: description
      content: '在 FlyEnv 中安装和切换 PHP 版本，管理 PHP-FPM、php.ini 和扩展，隔离项目运行时，管理 Composer，并创建 WordPress 或 Laravel 项目。'
  - - meta
    - property: og:title
      content: 'PHP 版本管理器、PHP-FPM 和 Composer 工具 | FlyEnv'
  - - meta
    - property: og:description
      content: '在 FlyEnv 中安装和切换 PHP 版本，管理 PHP-FPM、php.ini 和扩展，隔离项目运行时，管理 Composer，并创建 WordPress 或 Laravel 项目。'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/zh/features/php
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/zh/features/php
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# 使用 FlyEnv 进行本地 PHP 开发

PHP 是一种用于构建动态网站和 Web 应用的服务器端脚本语言，既可用于 WordPress 站点，也可用于 Laravel、Symfony 等框架上的应用。FlyEnv 在一个应用中管理本地技术栈中 PHP 相关的一切：多个 PHP 版本、按版本管理的 PHP-FPM、可视化的 `php.ini` 与扩展管理、项目级运行时、Composer，以及常见 PHP 应用的一键脚手架创建。

![FlyEnv PHP 模块概览](https://oss.macphpstudy.com/image/features/php-1.webp)

## PHP 版本管理

通过 **PHP → 版本管理器** 并行安装多个 PHP 版本，并可随时在它们之间切换。

- **多个安装来源：** 所有平台均提供静态构建；此外，macOS 和 Linux 可通过 Homebrew 安装，macOS 还可通过 MacPorts 安装由这些包管理器管理的 PHP。
- **自定义版本：** 让 FlyEnv 指向包含自有 PHP 构建的任意目录；它会扫描 `php` 与 `php-fpm` 二进制文件，并将它们与受管理版本一起列出。
- **CLI 版本切换：** 设置终端中 `php` 命令解析到的 PHP 版本。FlyEnv 会在 `PATH` 中添加或移除该版本的 bin 目录，并标明当前条目由 FlyEnv 还是其他工具设置。
- **按版本设置别名和备注：** 为每个安装设置简短别名和备注，使列表中相似的构建也能清晰区分。

![带有安装来源的 PHP 版本管理器](https://oss.macphpstudy.com/image/features/php-2.webp)

![包含版本、路径、环境和别名列的 PHP 服务表](https://oss.macphpstudy.com/image/features/php-3.webp)

## PHP-FPM 服务管理

PHP-FPM 是 FlyEnv 的专用模块，用于通过 Nginx、Apache 或 Caddy 为站点提供服务。

- **按版本管理生命周期：** 可单独启动、停止或重启每个 PHP-FPM 版本；也可使用侧边栏开关（系统托盘中同样可用）一次启动或停止所有已安装版本。
- **macOS 和 Linux 使用 Socket：** 每个版本监听自己的 Unix socket，因此多个 PHP-FPM 版本可同时运行，且每个站点都可路由到不同版本。版本启动时，FlyEnv 会重新生成 Web 服务器集成配置。
- **可编辑 `php-fpm.conf`：** 可按版本打开和编辑 FPM 池配置（macOS 和 Linux），并内置 FPM 日志和慢日志查看器。
- **Windows 以 FastCGI 运行：** PHP 通过 FastCGI 为 Web 服务器提供服务，且每个版本的 FastCGI 工作进程数（`PHP_FCGI_CHILDREN`，1–64）均可调整。

![带有按版本服务控制的 PHP-FPM 模块](https://oss.macphpstudy.com/image/features/php-4.webp)

![编辑某个 PHP 版本的 php-fpm.conf](https://oss.macphpstudy.com/image/features/php-5.webp)

## php.ini 配置

每个已安装的 PHP 版本都有自己的 `php.ini`，可从该版本的操作菜单中编辑。

- **常用设置表单：** 无需手动编辑文件，即可开关或调整常被修改的指令——`memory_limit`、`max_execution_time`、`upload_max_filesize`、`post_max_size`、`max_file_uploads`、`display_errors`、`log_errors`、`error_reporting`、`short_open_tag`、`date.timezone`、CA 证书包路径等。
- **完整源文件编辑器：** 对表单未涵盖的项目可切换到原始文件视图，并可一键还原为默认配置。
- **`disable_functions` 管理器：** 通过包含约 170 个常见条目的可搜索清单禁用危险函数，以加固某个版本；修改会写回 `php.ini`。

![php.ini 常用设置表单](https://oss.macphpstudy.com/image/features/php-6.webp)

![通过可搜索清单管理 disable_functions](https://oss.macphpstudy.com/image/features/php-7.webp)

## 扩展管理

从任意 PHP 版本打开 **扩展**，即可查看已加载内容并安装缺失项。[扩展安装指南](/zh/guide/php-extensions-install) 提供了完整示例。

- **已加载扩展：** 可搜索地列出该版本当前加载的模块。
- **Homebrew 和 MacPorts PHP：** 浏览该 PHP 版本可用的扩展 formula，在内置终端中安装或卸载它们，并将现成的 `extension=xxx.so` 片段——或完整的 Xdebug 配置模板——直接复制到 `php.ini`。
- **Windows：** 启用或禁用扩展目录中已有的 DLL，也可一键从在线库下载扩展。
- **快速导航：** 直接跳转到 `php.ini`，或在文件管理器中打开扩展目录。

![某个 PHP 版本已加载的扩展列表](https://oss.macphpstudy.com/image/features/php-8.webp)

![从 Homebrew 安装 PHP 扩展](https://oss.macphpstudy.com/image/features/php-9.webp)

## 项目级 PHP 隔离

不同项目通常需要不同的 PHP 版本。在 **PHP → 项目** 中注册每个项目文件夹，并将其绑定到专属 PHP 二进制文件——也可以继续使用系统版本。

- **按项目设置运行时：** 双击项目即可切换其 PHP 版本；选择会保存在项目目录中的 `.flyenv` 文件里，因此从 FlyEnv 启动的终端和编辑器会自动使用正确的 PHP。
- **在工具中打开：** 从项目行直接打开已加载项目环境的 Terminal、PowerShell、VSCode、PhpStorm、WebStorm 或 Sublime。
- **按站点设置 PHP 版本：** **Host** 中的每个站点选择自己的 PHP-FPM 版本（或保持为静态站点），站点列表会显示哪个版本为哪个站点提供服务。

![具有按项目 PHP 版本绑定的 PHP 项目列表](https://oss.macphpstudy.com/image/features/php-10.webp)

## Composer 管理

**Composer** 标签将 Composer 视作 FlyEnv 中其他带版本工具一样进行管理。

- 根据平台从静态构建或 Homebrew 安装并保留多个 Composer 版本。
- 从自定义目录添加自己的 Composer 安装。
- 将特定 Composer 版本与项目及其 PHP 版本绑定，使依赖安装始终使用一致的工具链。

![Composer 版本管理器](https://oss.macphpstudy.com/image/features/php-11.webp)

## 快速创建项目

**PHP → 新建项目** 可在不离开应用的情况下为常见 PHP 应用创建脚手架。支持的模板包括：WordPress、Laravel、Yii2、ThinkPHP、Symfony、CodeIgniter、CakePHP、Slim、ClassicPress 和 Contao。

1. 选择模板，并选择框架版本、PHP 版本和 Composer 版本。
2. FlyEnv 会在内置终端中运行 Composer 创建命令，因此你能看到真实输出。
3. 项目准备好后，可一键创建匹配的站点——该框架的 Web 服务器重写规则已预先填入。

![PHP 项目模板网格](https://oss.macphpstudy.com/image/features/php-12.webp)

![使用版本选择创建 Laravel 项目](https://oss.macphpstudy.com/image/features/php-13.webp)

## 更多 PHP 工具

- **日志查看器：** 可按版本打开 PHP 错误日志、PHP-FPM 日志或 FPM 慢日志，内置搜索和刷新。
- **phpMyAdmin：** 在 MySQL 或 MariaDB 模块中一步设置 phpMyAdmin——FlyEnv 会下载它，并创建由已安装最高 PHP 版本提供服务的本地站点。
- **PHP 混淆器：** 工具页面中的实用工具，可使用选定 PHP 版本混淆 PHP 源代码，适合在将代码交付给第三方前使用。

## PHP 应用服务器

对于应用服务器风格的 PHP，FlyEnv 提供专用模块，用以补充经典 PHP-FPM 设置：

- **FrankenPHP** — 内置现代 Web 服务模型的 PHP。
- **RoadRunner** — PHP 工作进程、Laravel Octane 和文件服务器预设。
- **Swoole CLI** — 原生 Swoole、Hyperf、EasySwoole、Laravel Octane 以及自定义脚本预设。

[PHP 部署指南](/zh/guide/deploy-php-projects-without-docker) 说明如何在它们之间选择。面向浏览器的站点请继续阅读[本地站点、自定义域名与 HTTPS](/zh/features/local-sites-https)；框架专用技术栈请参阅 [Laravel](/zh/solutions/laravel) 和 [WordPress](/zh/solutions/wordpress) 解决方案。

<FeatureRelatedLinks locale="zh" slug="php" />

## 兼容性说明

FlyEnv 管理本地运行时和进程配置；它不保证每个 PHP 扩展、框架版本或第三方二进制文件在每个操作系统上都可用。请根据已安装的 PHP 构建验证项目要求，并以[下载页面](/zh/download)和当前发行说明为受支持软件包的依据。
