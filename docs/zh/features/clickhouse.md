---
layout: doc
titleTemplate: false
title: 'FlyEnv ClickHouse：本地开发模块与配置指南'
description: '在 macOS 和 Linux 上运行 ClickHouse，管理配置文件、日志，并一键打开 CH-UI 客户端。'
head:
  - - meta
    - name: description
      content: '在 macOS 和 Linux 上运行 ClickHouse，管理配置文件、日志，并一键打开 CH-UI 客户端。'
  - - meta
    - property: og:title
      content: 'FlyEnv ClickHouse：本地开发模块与配置指南'
  - - meta
    - property: og:description
      content: '在 macOS 和 Linux 上运行 ClickHouse，管理配置文件、日志，并一键打开 CH-UI 客户端。'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/zh/features/clickhouse
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/zh/features/clickhouse
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# 使用 FlyEnv 开发本地 ClickHouse

ClickHouse 是开源的列式数据库，针对超大数据集提供高速分析查询，可补充 [PostgreSQL](/zh/features/postgresql) 等行式数据库。它常用于日志分析、指标和事件数据场景，在这些场景中需要在几秒内完成数十亿行聚合，并可由 [Metabase](/zh/solutions/metabase) 等 BI 工具提供上层查询。FlyEnv 在 macOS 和 Linux 上将 ClickHouse 作为受管本地服务运行：从在线列表安装版本，以自动生成的配置启动服务器，提供可编辑的配置文件、日志查看器和一键式 CH-UI Web 客户端。ClickHouse 模块仅支持 macOS 和 Linux。

![FlyEnv 模块概览](https://oss.macphpstudy.com/image/features/clickhouse-1.webp)

## 版本管理（ClickHouse）

从 **ClickHouse → 版本管理器** 安装 ClickHouse 版本，并可随时在版本之间切换。

- **仅静态在线列表：** 版本来自 FlyEnv 在线下载列表；ClickHouse 不提供 Homebrew 或 MacPorts 源。macOS 下载为裸二进制文件，Linux 则从 `clickhouse-common-static` 归档中提取二进制文件。
- **自定义版本：** 将 FlyEnv 指向包含自定义 `clickhouse` 二进制文件的目录，即可与受管版本一起列出。
- **单个运行版本：** 可从服务标签页、侧边栏开关（或系统托盘）启动、停止和重启版本；同一时间只能运行一个 ClickHouse 版本。

![版本管理器界面](https://oss.macphpstudy.com/image/features/clickhouse-2.webp)

## 服务与配置

ClickHouse 以多调用二进制文件发布，FlyEnv 使用受管配置通过 `clickhouse server` 启动它。

- **自动生成配置：** 首次启动时，FlyEnv 会在 ClickHouse 目录创建 `config.xml` 和 `users.xml`，预配置 HTTP 端口 8123、原生 TCP 端口 9000 以及仅回环地址 127.0.0.1 的监听。
- **一个编辑器中的两个配置文件：** 配置文件标签页可在 `config.xml` 和 `users.xml` 之间切换，每个文件都以完整 XML 源代码编辑器打开，可直接编辑端口、路径、用户和配置。FlyEnv 各数据库模块的默认账户请参阅[数据库用户和密码指南](/zh/guide/database-user-password)。

![服务与配置界面](https://oss.macphpstudy.com/image/features/clickhouse-3.webp)

## 日志

日志标签页可切换 FlyEnv 为 ClickHouse 服务捕获的日志文件：主服务器日志、服务器错误日志、启动 stdout 和 stderr 日志，以及 CH-UI 客户端启动日志。文件变更时查看器会自动刷新，工具栏还可在文件管理器中打开、按需重新加载或清空文件，因此启动失败或慢查询都易于追踪。

![站点与工具界面](https://oss.macphpstudy.com/image/features/clickhouse-4.webp)

## CH-UI

CH-UI 是基于 Web 的 ClickHouse 客户端，FlyEnv 可为你完成设置。

- **一键设置：** CH-UI 按钮会从 GitHub 发布版本下载 CH-UI 二进制文件，并在端口 3488 上运行。
- **预配置连接：** FlyEnv 添加名为“FlyEnv ClickHouse”的连接并指向运行中的实例，然后在浏览器中打开 CH-UI，无需手动输入主机或端口。

<FeatureRelatedLinks locale="zh" slug="clickhouse" />

## 兼容性说明

ClickHouse 模块仅适用于 macOS 和 Linux，在 Windows 上不会显示。FlyEnv 管理本地运行时及其生成的配置；每个 ClickHouse 构建的具体功能取决于上游发行版。当前 FlyEnv 版本请查看[下载页面](/zh/download)，服务模块的实际演示请参阅[演示页面](/zh/demos)。
