---
layout: doc
titleTemplate: false
title: 'FlyEnv Redis：本地开发模块与配置指南'
description: '运行 Redis，管理可视化配置和日志，并使用 Redis Commander Web UI 浏览数据。'
head:
  - - meta
    - name: description
      content: '运行 Redis，管理可视化配置和日志，并使用 Redis Commander Web UI 浏览数据。'
  - - meta
    - property: og:title
      content: 'FlyEnv Redis：本地开发模块与配置指南'
  - - meta
    - property: og:description
      content: '运行 Redis，管理可视化配置和日志，并使用 Redis Commander Web UI 浏览数据。'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/zh/features/redis
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/zh/features/redis
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# 使用 FlyEnv 进行本地 Redis 开发

Redis 是开源内存数据存储，常用于 Web 应用的缓存、会话存储、队列后端或发布/订阅通道；如果只需要轻量缓存，也可以使用 [Memcached](/zh/features/memcached)。FlyEnv 将 Redis 作为本地托管服务集中管理：安装多个版本，使用自动生成的按版本配置运行 `redis-server`，通过可视化表单调整端口和内存设置，查看服务器日志，并一键在 Redis Commander Web 界面中浏览键值。刚开始使用 FlyEnv 时，可阅读[入门指南](/zh/guide/getting-started)了解模块安装和启动流程。

![FlyEnv Redis 模块概览截图](https://oss.macphpstudy.com/image/features/redis-1.webp)

## 版本管理

从 **Redis → 版本管理器** 并行安装并保留多个版本，然后选择服务运行的版本。

- **各平台安装源：** macOS 使用 Homebrew（`redis`、`redis@x.y`）和 MacPorts，Linux 使用 Homebrew，Windows 使用静态构建列表。
- **自定义版本：** 添加包含自有 Redis 安装的目录，FlyEnv 扫描其中的 `redis-server` 后与托管版本一起列出。
- **同时只运行一个版本：** 启动某个版本会停止其他运行中的 Redis 版本，服务始终对应唯一且明确的构建。

![FlyEnv Redis 版本管理器和安装源](https://oss.macphpstudy.com/image/features/redis-2.webp)

## 服务与配置

FlyEnv 使用生成的配置文件（`redis-server redis-<major>.conf`）启动真实 `redis-server` 二进制文件，并通过 pid 文件跟踪进程以便正常启动和停止。默认配置监听 6379 端口，每个主版本的数据保存在独立的 `db-<major>` 目录。

每个主版本都有独立的 `redis-<major>.conf`，可从**配置文件**选项卡修改：

- **常用设置表单：** 通过可视化表单调整端口、超时、maxclients、数据库数量、`requirepass` 和 `maxmemory` 等常用选项，无需手动编辑文件。
- **原始编辑器：** 切换到完整源文件视图编辑表单未覆盖的选项；旁边保留 `redis-<major>-default.conf` 作为默认配置参考。

![FlyEnv Redis 配置文件及常用设置表单](https://oss.macphpstudy.com/image/features/redis-3.webp)

## 日志

**日志**选项卡直接在 FlyEnv 中打开服务器的 `redis-<major>.log`；版本启动失败或行为异常时应首先查看这里。Redis Commander 辅助进程的输出会单独记录，不会与 Redis 服务器日志混在一起。

## Redis Commander

Redis 运行时，服务工具栏会显示 **Redis Commander** 按钮，打开用于浏览键、编辑值和执行命令的完整 Web 界面。

- **一键设置：** 首次打开时，FlyEnv 使用 npm 安装 `redis-commander` 并自动启动，无需手动准备工具。它使用 FlyEnv 中选定的 [Node.js](/zh/features/nodejs) 版本，因此[管理多个 Node.js 版本](/zh/guide/manage-multiple-node-php-versions)也会决定 Web 界面使用的运行时。
- **预配置连接：** Redis Commander 自动连接正在运行的服务器，端口和 `requirepass` 密码从当前 Redis 配置读取。
- **默认安全：** UI 仅监听 127.0.0.1 并启用 HTTP 身份验证，FlyEnv 通过一次性自动登录链接打开浏览器。Redis 服务停止时 Redis Commander 也会自动停止。

它适合本地框架开发，例如在 [Laravel](/zh/solutions/laravel) 项目运行时检查缓存和队列键。

![从 FlyEnv 打开的 Redis Commander Web 界面](https://oss.macphpstudy.com/image/features/redis-4.webp)

<FeatureRelatedLinks locale="zh" slug="redis" />

## 兼容性说明

FlyEnv 管理本地 Redis 运行时、配置文件和数据目录，但不保证每个 Redis 版本都能在所有操作系统或安装源上使用。版本管理器中的列表取决于平台和安装源发布的内容：macOS 使用 Homebrew 和 MacPorts，Linux 使用 Homebrew，Windows 使用静态构建。配置按主版本隔离（`redis-<major>.conf`），因此 Redis 7 和 Redis 8 的端口、`requirepass`、`maxmemory` 等设置互不影响。首次启动 Redis Commander 前，必须在 FlyEnv 中安装并选定 Node.js 版本。实际可安装内容请以内置版本列表和[下载页面](/zh/download)为准。
