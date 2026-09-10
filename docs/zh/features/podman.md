---
layout: doc
titleTemplate: false
title: 'FlyEnv Podman：本地开发模块与配置指南'
description: '在 FlyEnv 中管理 Podman Machine、生成 Compose 服务栈、拉取镜像并运行容器。'
head:
  - - meta
    - name: description
      content: '在 FlyEnv 中管理 Podman Machine、生成 Compose 服务栈、拉取镜像并运行容器。'
  - - meta
    - property: og:title
      content: 'FlyEnv Podman：本地开发模块与配置指南'
  - - meta
    - property: og:description
      content: '在 FlyEnv 中管理 Podman Machine、生成 Compose 服务栈、拉取镜像并运行容器。'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/zh/features/podman
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/zh/features/podman
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# 使用 FlyEnv 管理 Podman 容器

Podman 是开源容器引擎，用于构建和运行 OCI 容器，兼容 Docker 镜像和 Compose 文件，并支持无需后台守护进程的 rootless 模式。FlyEnv 将 Podman 变成可视化工作区：创建和调整 Podman machine、从堆栈库生成 Compose 项目、从官方目录拉取镜像，以及运行和检查容器，无需记忆 CLI 参数。FlyEnv 会自动检测系统 Podman；在 macOS 和 Linux 上若有 Homebrew，还可从内置终端一键安装。分步操作请参阅 [Podman 模块指南](/zh/guide/podman-module)，容器方式与 FlyEnv 原生模块的比较请参阅 [FlyEnv 与 Docker、XAMPP 对比](/zh/guide/flyenv-vs-docker-xampp)。

![FlyEnv Podman 模块概览和 machine 列表](https://oss.macphpstudy.com/image/features/podman-1.webp)

## 机器管理

左侧面板列出每个 Podman machine，并提供添加、编辑、启动、停止和删除操作。每个 machine 都有自己的 Dashboard、Compose、Image 和 Container 选项卡。

- **添加和编辑 machine：** 设置 machine 名称、CPU 数量（1–16 核）、内存（512–32768 MB）、磁盘大小以及是否设为默认。
- **Rootful 模式：** 工作负载需要时，可将 machine 以 rootful 模式运行。
- **macOS 上的 Rosetta：** 在 Apple Silicon 上启用 Rosetta，以运行 x86_64 镜像。
- **远程连接详情：** 为每个 machine 配置 SSH 身份路径和远程用户名。
- **Linux 原生运行：** Linux 上 Podman 无需虚拟机，因此隐藏 machine 操作，容器直接在主机运行。
- **轻松设置：** FlyEnv 检测系统 `podman` 二进制文件；如果缺失且 macOS 或 Linux 有 Homebrew，安装按钮会在内置终端执行 brew 安装。

![FlyEnv 添加 Podman machine 并设置 CPU、内存和磁盘](https://oss.macphpstudy.com/image/features/podman-2.webp)

## 构建项目和堆栈生成器

**Compose**选项卡管理现有 docker-compose 项目，FlyEnv 保存项目列表并检查运行状态，还提供 **Compose Build** 生成器，通过按服务填写表单组装堆栈，无需手写 YAML。

生成器覆盖约 29 种技术堆栈，包括 [PHP](/zh/features/php)、[Nginx](/zh/features/nginx)、Apache、Caddy、[MySQL](/zh/features/mysql)、MariaDB、PostgreSQL、MongoDB、Redis、Memcached、RabbitMQ、Elasticsearch、Meilisearch、MinIO、Consul、Etcd、Mailpit、NodeJS、Bun、Deno、Go、Java、Python、Ruby、Rust、Perl、Erlang 和 Tomcat。每个服务都有独立表单，只需配置堆栈公开的选项。Compose 操作要求已安装 `docker-compose` 或 `docker compose` 插件。

![FlyEnv Compose Build 生成器和按服务划分的堆栈表单](https://oss.macphpstudy.com/image/features/podman-3.webp)

## 镜像

**Image**选项卡是基于官方镜像目录的可视化拉取工具。

- **官方镜像目录：** 无需离开应用即可浏览标准官方镜像。
- **在线获取标签：** 在线获取每个镜像的标签，可选择确切版本，不必猜测标签名称。
- **一键拉取：** 将选定镜像和标签直接拉取到 machine 的本地镜像存储。

![FlyEnv 从官方目录和在线标签拉取镜像](https://oss.macphpstudy.com/image/features/podman-4.webp)

## 容器

**Container**选项卡管理所选 machine 的日常容器生命周期。

- **创建容器：** 通过表单从已拉取镜像创建容器，无需输入冗长的 `podman run` 命令。
- **检查和预览：** 查看每个容器的配置和状态。
- **内置终端 exec：** 使用 FlyEnv 的[内置终端](/zh/features/cli-terminal)打开运行中容器内的 shell，在容器所在环境中调试。

![FlyEnv 容器列表及检查和终端 exec 操作](https://oss.macphpstudy.com/image/features/podman-5.webp)

<FeatureRelatedLinks locale="zh" slug="podman" />

## 兼容性说明

FlyEnv 通过系统 `podman` CLI 操作 Podman，不提供 Podman 版本管理器，也不捆绑运行时。macOS 和 Linux 有 Homebrew 时可一键安装，Windows 用户需自行安装 Podman。Podman machine 操作适用于 macOS 和 Windows；Linux 上无需虚拟机即可原生运行。平台支持详情请查看[下载页面](/zh/download)和当前发行说明。
