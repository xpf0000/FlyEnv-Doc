---
layout: doc
titleTemplate: false
title: 'FlyEnv Apache：本地开发模块与配置指南'
description: '通过 Homebrew、MacPorts 或静态包在 FlyEnv 中运行 Apache，编辑各版本配置并托管本地站点。'
head:
  - - meta
    - name: description
      content: '通过 Homebrew、MacPorts 或静态包在 FlyEnv 中运行 Apache，编辑各版本配置并托管本地站点。'
  - - meta
    - property: og:title
      content: 'FlyEnv Apache：本地开发模块与配置指南'
  - - meta
    - property: og:description
      content: '通过 Homebrew、MacPorts 或静态包在 FlyEnv 中运行 Apache，编辑各版本配置并托管本地站点。'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/zh/features/apache
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/zh/features/apache
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Apache 在 FlyEnv 中

Apache HTTP 服务器（`httpd`）是历史悠久的开源 Web 服务器，常用于经典 LAMP 栈以及需要 `.htaccess` 或模块化配置的场景。FlyEnv 将 Apache 作为受管本地 Web 服务器：从包管理器或静态下载列表安装多个构建版本，就地编辑各版本配置，并通过按站点生成的 vhost 文件提供本地站点。`httpd` 服务由 FlyEnv 控制以前台启动，每次启动都会重新生成端口、日志和模块配置。如果你从 XAMPP 这类软件包迁移而来，可阅读 [FlyEnv 与 XAMPP 对比](/zh/compare/xampp)了解这种受管方式的差异。

![FlyEnv 模块概览](https://oss.macphpstudy.com/image/features/apache-1.webp)

## Apache 版本管理

从 **Apache → 版本管理器** 并排安装 Apache 构建版本，并可随时切换正在运行的版本。

- **包管理器源：** macOS 可从 Homebrew（`httpd` 公式）或 MacPorts 安装 Apache；Linux 使用 Homebrew。FlyEnv 会检测这些包管理器已管理的安装。
- **Windows 静态构建：** Windows 安装列表直接下载 Apache Lounge 构建版本。
- **自定义版本：** 将自有 Apache 构建目录添加到 FlyEnv，系统会检测其中的二进制文件并与其他安装一起列出。

![版本管理器界面](https://oss.macphpstudy.com/image/features/apache-2.webp)

## 服务管理

在 FlyEnv 中，Apache 是单实例服务：可以安装多个版本，但同一时间只能运行一个，以确保站点端口分配明确。

- **按版本生命周期：** 可从服务标签页、侧边栏开关或系统托盘启动、停止和重启正在运行的 Apache 版本。
- **前台运行：** macOS 使用 FlyEnv 自有配置文件及明确的 pid 和日志路径启动 `httpd`；Linux 通过 FlyEnv root 辅助程序运行；Windows 使用版本配置启动服务器。已有版本运行时，服务标签页会阻止启动其他版本，需先停止当前版本再切换。
- **PATH 集成：** 服务表显示每个安装的路径、环境状态、别名和版本备注。

## 配置

每个已安装的 Apache 版本都有独立的主配置文件，自动生成并按版本保存，因此不同构建不会互相覆盖设置。

- **按版本配置文件：** 配置根据该版本的 `httpd -V` 输出生成，与 FlyEnv 的其他 Apache 数据一同保存，并以具体二进制文件区分。
- **常用设置表单：** 可在可视化表单中调整 `Timeout`、`KeepAlive`、`KeepAliveTimeout`、`MaxKeepAliveRequests` 和 `LimitRequestBody` 等常用指令，无需手动编辑文件。
- **完整源代码编辑器：** 对表单未涵盖的内容使用原始编辑器，也可一键恢复默认配置。
- **自动启用模块：** 生成配置时，FlyEnv 会强制启用本地站点所需的 headers、deflate、proxy、proxy_fcgi、ssl、rewrite 和 access_compat 模块，并写入 vhost include 目录。
- **启动时重写 Listen 指令：** FlyEnv 收集每个站点的 Apache 端口，在每次服务启动时于受管标记之间重写 `Listen` 指令，避免站点端口变更后残留旧监听器。

![服务与配置界面](https://oss.macphpstudy.com/image/features/apache-3.webp)

## 站点集成

Host 模块中的每个 Apache 站点都有独立 vhost 文件和端口字段（默认 80/443），因此 Apache 可与 Nginx 或 Caddy 在各自端口上同时提供同一站点。PHP 站点通过 proxy_fcgi 模块交给 [PHP 模块](/zh/features/php)中已安装的 PHP-FPM 版本；[WordPress](/zh/solutions/wordpress) 等经典栈开箱即用。[主机指南](/zh/guide/host)介绍站点创建，[本地站点、自定义域名与 HTTPS](/zh/features/local-sites-https)介绍域名、HTTPS 证书和 vhost 检查，[多服务器将 HTML 解析为 PHP 指南](/zh/guide/parse-html-as-php-multi-servers)展示 Apache 如何与其他服务器共同提供一个站点。

![站点与工具界面](https://oss.macphpstudy.com/image/features/apache-4.webp)

## 日志

**错误日志**和**访问日志**标签页显示共享的 Apache 错误及访问日志，并内置搜索和刷新功能。每个站点还有自己的站点日志，可从 Host 模块查看，因此繁忙站点不会淹没其他日志。

<FeatureRelatedLinks locale="zh" slug="apache" />

## 兼容性说明

Apache 在 macOS 和 Linux 上**没有静态安装源**；这些平台支持 Homebrew（macOS/Linux）、MacPorts（macOS）或你注册的自定义目录。静态在线构建列表（Apache Lounge 软件包）仅适用于 Windows。在 Linux 上使用 80/443 等特权端口需要 FlyEnv root 辅助程序。平台和版本支持情况请查看[下载页面](/zh/download)及当前发行说明。
