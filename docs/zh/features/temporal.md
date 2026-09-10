---
layout: doc
titleTemplate: false
title: 'FlyEnv Temporal：本地开发模块与配置指南'
description: '运行基于 SQLite 的本地 Temporal Server，自动创建 Namespace，并管理 Web UI。'
head:
  - - meta
    - name: description
      content: '运行基于 SQLite 的本地 Temporal Server，自动创建 Namespace，并管理 Web UI。'
  - - meta
    - property: og:title
      content: 'FlyEnv Temporal：本地开发模块与配置指南'
  - - meta
    - property: og:description
      content: '运行基于 SQLite 的本地 Temporal Server，自动创建 Namespace，并管理 Web UI。'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/zh/features/temporal
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/zh/features/temporal
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# 使用 FlyEnv 进行本地 Temporal 开发

Temporal 是持久化工作流编排平台：它保存工作流状态，使长时间、多步骤流程能够经受崩溃、重试和部署。应用可以将 Saga、定时任务等业务流程编写为代码，而不必手动拼接 [队列](/zh/features/rabbitmq) 和 [Cron 任务](/zh/features/cron-jobs)。FlyEnv 将本地 Temporal 设置变成一键服务：安装 `temporal-server`，生成基于 SQLite 的即用配置，首次启动后创建 `default` 命名空间，并可将 Temporal Web UI 作为托管伴随进程启动；所有服务均绑定到 `127.0.0.1`，适合安全的本地开发。

![FlyEnv Temporal 模块概览和服务选项卡](https://oss.macphpstudy.com/image/features/temporal-1.webp)

## 版本管理

从 **Temporal → 版本管理器** 安装多个 Temporal 服务器版本并行保留。

- **静态在线构建：** FlyEnv 从在线版本列表获取适用于操作系统和架构的 `temporal-server` 发布包，自动解压、修复执行权限，并在安装后运行 `--version` 检查。
- **自定义目录：** 指定包含自有 `temporal-server` 二进制文件的目录，与托管安装一起列出。
- **同时只运行一个版本：** 可从服务选项卡或侧边栏开关启动、停止和重启所选版本；切换版本前必须先停止正在运行的版本。

![FlyEnv Temporal 版本管理器及静态在线版本列表](https://oss.macphpstudy.com/image/features/temporal-2.webp)

## 服务与配置

启动 Temporal 时会运行 `temporal-server`，并使用 FlyEnv 首次创建的按版本配置文件 `config/temporal-v<version>.yaml`。

- **开箱即用的 SQLite 持久化：** 生成的配置使用 SQLite 双存储：`default.db` 保存主数据，`visibility.db` 保存可见性数据；模式自动设置，无需外部数据库。
- **仅本地端口：** 前端 gRPC 监听 **7233**，HTTP 监听 7243，matching 监听 7235，history 监听 7234，pprof 监听 7936；所有服务均绑定 `127.0.0.1`。
- **自动创建命名空间：** 服务器启动后，FlyEnv 使用最新已安装的 Temporal CLI 注册 `default` 命名空间，并在服务器完成启动期间重试数次。
- **服务器/UI 双配置：** 配置文件选项卡包含两个子选项卡：**服务器**编辑 `config/temporal-v<version>.yaml`，**UI**编辑 `config/temporal-ui.yaml`；均使用原始 YAML 编辑器，并保留 `.default` 副本作参考。仅在文件缺失时创建，不会覆盖你的修改。

![FlyEnv Temporal 配置文件选项卡及服务器和 UI 子选项卡](https://oss.macphpstudy.com/image/features/temporal-3.webp)

## 临时 WebUI

服务选项卡包含 **Temporal UI** 按钮，将官方 Temporal Web UI 作为独立进程管理。

- **按需下载：** Web UI 由独立 `ui-server` 二进制文件提供，与任何 Temporal 服务器版本无关。首次打开时，FlyEnv 查询 GitHub 上最新的 `temporalio/ui-server` 发布，并下载适合平台（macOS、Linux 或 Windows；amd64 或 arm64）的资源。
- **托管生命周期：** FlyEnv 使用独立 pid 文件和配置（`temporal-ui.yaml`：端口 **8233**、gRPC 端点 `127.0.0.1:7233`）启动 `ui-server`，然后在浏览器打开 `http://127.0.0.1:8233/`。
- **随服务器停止：** 关闭 Temporal 服务时也会停止 UI 进程，不会留下后台进程。
- UI 服务器安装或启动期间，按钮会显示加载和错误状态。

![从 FlyEnv 在浏览器打开的 Temporal Web 界面](https://oss.macphpstudy.com/image/features/temporal-4.webp)

## 日志

**日志**选项卡提供四个查看器，用于区分服务器和 UI 输出：

- **服务器输出** — 正在运行的 `temporal-server` 标准输出。
- **服务器错误** — 服务器错误流，启动失败时应首先查看。
- **UI 输出** — `ui-server` 进程的标准输出。
- **UI 错误** — Web UI 错误流，UI 无法连接 7233 gRPC 端点时很有用。

![FlyEnv Temporal 日志查看器及服务器和 UI 日志选择](https://oss.macphpstudy.com/image/features/temporal-5.webp)

<FeatureRelatedLinks locale="zh" slug="temporal" />

## 兼容性说明

Temporal 模块仅通过静态在线构建安装，macOS、Windows 和 Linux 均不提供 Homebrew 或 MacPorts 源，具体版本取决于平台和架构发布内容。下载 Web UI 的 `ui-server` 需要访问 GitHub 发布页面。所有服务器和 UI 端口绑定 `127.0.0.1`，如需其他地址请修改 YAML 配置。自动创建命名空间依赖 FlyEnv 中已安装 Temporal CLI。

如果更喜欢一体化开发服务器，FlyEnv 独立的 **Temporal CLI** 模块可运行 `temporal server start-dev`，这是 Temporal 内置开发模式，带集成 Web UI（默认端口 7233/8233，SQLite 文件 `dev.db`），无需单独下载 UI。Node.js、Python 或 Go 编写的 Worker 连接 7233 前端端点；[无需 Docker 部署 Node.js、Python 和 Go 服务](/zh/guide/deploy-nodejs-python-go-without-docker)介绍如何在服务器旁本地运行。请查看[演示](/zh/demos)了解服务模块，并从[下载页面](/zh/download)获取最新构建。
