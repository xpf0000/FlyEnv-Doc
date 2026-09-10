---
layout: doc
titleTemplate: false
title: 'FlyEnv FrankenPHP：本地开发模块与配置指南'
description: '运行 FrankenPHP 并直接托管 PHP 站点，支持独立端口和自动 HTTPS，无需 PHP-FPM。'
head:
  - - meta
    - name: description
      content: '运行 FrankenPHP 并直接托管 PHP 站点，支持独立端口和自动 HTTPS，无需 PHP-FPM。'
  - - meta
    - property: og:title
      content: 'FlyEnv FrankenPHP：本地开发模块与配置指南'
  - - meta
    - property: og:description
      content: '运行 FrankenPHP 并直接托管 PHP 站点，支持独立端口和自动 HTTPS，无需 PHP-FPM。'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/zh/features/frankenphp
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/zh/features/frankenphp
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# 在 FlyEnv 中集成 FrankenPHP

FrankenPHP 是一个基于 [Caddy](/zh/features/caddy) 构建的现代 PHP 应用服务器：它内置完整的 PHP 运行时，可直接提供 PHP 应用，无需单独运行 PHP-FPM 进程。FlyEnv 将其作为独立模块管理：你可以安装多个 FrankenPHP 版本，将它们作为服务启动和停止，编辑 Caddyfile，并在应用内查看日志。你的站点开箱即用即可获得独立端口和自动 HTTPS，无需配置 PHP-FPM。

![FlyEnv 中的 FrankenPHP 模块概览截图](https://oss.macphpstudy.com/image/features/frankenphp-1.webp)

## 版本管理 (FrankenPHP)

在**版本管理器**选项卡中安装并行保留多个 FrankenPHP 版本。

- **安装来源：**macOS、Linux 和 Windows 提供静态构建，macOS 和 Linux 还支持 Homebrew；FlyEnv 会自动添加 `dunglas/frankenphp` tap，确保公式可用。FrankenPHP 不使用 MacPorts 和 SDKMAN。
- **macOS 和 Linux 静态安装：**FlyEnv 下载单个 FrankenPHP 二进制文件，将其复制到目标位置、标记为可执行，并清除 macOS 隔离属性以便运行。
- **Windows 静态安装：**FrankenPHP 以包含完整 PHP 运行时的压缩包提供。安装期间，FlyEnv 会根据模板自动生成 `php.ini`，只启用捆绑 `ext/` 目录中实际存在的扩展。
- **PHP 和 Caddy 版本列：**版本表会解析 `frankenphp --version`，并显示每个已安装构建所嵌入的 PHP 版本和 Caddy 版本，让你始终清楚每个 FrankenPHP 版本携带的具体运行时。
- **按版本操作：**可在文件管理器中打开版本目录；在 Windows 上，还可以通过与 [PHP 模块](/zh/features/php) 相同的配置对话框编辑捆绑的 `php.ini`。

![FlyEnv FrankenPHP 版本管理器及 PHP、Caddy 版本列截图](https://oss.macphpstudy.com/image/features/frankenphp-2.webp)

## 服务管理

**服务**选项卡会列出每个已安装的 FrankenPHP 版本，并提供启动、停止和重启控制，同时显示上述 PHP 和 Caddy 版本信息。

- FlyEnv 使用 `frankenphp run --config <baseDir>/frankenphp/Caddyfile --pidfile …` 启动版本，通过 pidfile 跟踪进程，从而可以正常停止。
- 在 Linux 上需要提升权限时，服务会通过 FlyEnv 的 root helper 启动。
- FrankenPHP 通过内置的 Caddy 引擎直接提供 PHP 站点，无需安装、配置或持续运行 PHP-FPM 进程。

![FlyEnv FrankenPHP 服务选项卡及运行中版本截图](https://oss.macphpstudy.com/image/features/frankenphp-3.webp)

## 配置

**配置文件**选项卡用于编辑 FrankenPHP 运行所使用的全局 Caddyfile。

- **纯文本编辑器：**Caddyfile 以纯文本方式编辑，FlyEnv 不会将其包装为表单。
- **基于模板：**文件由模板生成（提供英文和中文模板），并从 `vhost/frankenphp/*` 导入每个站点的 vhost，使站点配置与全局设置保持分离。
- **Windows `php.ini`：**由于 Windows FrankenPHP 构建包含自己的 PHP 运行时，可从版本操作菜单使用 PHP 模块的配置对话框打开并调整该版本的 `php.ini`。

![FlyEnv FrankenPHP 日志查看器截图](https://oss.macphpstudy.com/image/features/frankenphp-4.webp)

## 站点集成

在 **Host** 中创建的 PHP 类型站点会自动获得使用 `php_server` 指令的 FrankenPHP vhost，因此它们会作为真正的 FrankenPHP 应用运行，而不是仅提供静态文件；[Laravel 解决方案](/zh/solutions/laravel) 展示了在此类配置上运行完整框架堆栈的示例。

- **按站点端口：**每个站点都有专用 FrankenPHP 端口（`port.frankenphp`），因此 FrankenPHP 可以与 [Nginx](/zh/features/nginx)、Apache 或 Caddy 并行提供同一站点。此功能启用前创建的站点会回退到共享 Caddy 端口。
- **自动 HTTPS：**vhost 包含 `tls internal`，无需额外设置即可为每个站点提供本地可信证书；站点域名和证书详见[本地站点、自定义域名与 HTTPS](/zh/features/local-sites-https)。
- **按站点反向代理：**站点也可以通过其 FrankenPHP vhost 反向代理到另一个本地服务。
- **vhost 自动修复：**FrankenPHP 版本启动时，FlyEnv 会在启动进程前重新生成缺失的站点 vhost。

如需更全面地了解何时应选择 FrankenPHP 而不是 PHP-FPM、RoadRunner 或 Swoole，请参阅 [PHP 部署指南](/zh/guide/deploy-php-projects-without-docker)。

## 日志

**日志**选项卡会跟踪 `frankenphp.log`，并列出 FrankenPHP 基础目录中的每个 `frankenphp-*.log` 文件，因此可以在一个界面中查看版本和站点专属日志。

![FlyEnv FrankenPHP 日志查看器截图](https://oss.macphpstudy.com/image/features/frankenphp-5.webp)

<FeatureRelatedLinks locale="zh" slug="frankenphp" />

## 兼容性说明

FlyEnv 负责管理 FrankenPHP 运行时、配置和站点集成，但不保证每个 FrankenPHP 版本或捆绑的 PHP 扩展都能在所有操作系统上使用。此模块不使用 MacPorts 和 SDKMAN 作为安装来源，FrankenPHP 也不提供管理面板；项目仍需自行根据已安装构建验证框架和扩展要求。请以[下载页面](/zh/download)和当前发行说明为支持软件包的依据。
