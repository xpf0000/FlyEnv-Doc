---
layout: doc
titleTemplate: false
title: 'FlyEnv MongoDB：本地开发模块与配置指南'
description: '运行 MongoDB，管理配置文件和数据目录，并使用 DbGate Web UI 浏览数据库。'
head:
  - - meta
    - name: description
      content: '运行 MongoDB，管理配置文件和数据目录，并使用 DbGate Web UI 浏览数据库。'
  - - meta
    - property: og:title
      content: 'FlyEnv MongoDB：本地开发模块与配置指南'
  - - meta
    - property: og:description
      content: '运行 MongoDB，管理配置文件和数据目录，并使用 DbGate Web UI 浏览数据库。'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/zh/features/mongodb
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/zh/features/mongodb
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# 使用 FlyEnv 进行本地 MongoDB 开发

MongoDB 是一个开源文档数据库，以类似 JSON 的文档存储记录，而不是使用表格中的行。它适合内容平台和 API 后端等具有灵活或不断变化数据模型的应用。FlyEnv 将 MongoDB 作为托管的本地服务运行：从版本管理器安装版本，使用生成的 `mongodb-<version>.conf` 启动 `mongod`，为每个版本保留独立数据目录，并在应用内查看服务器日志。点击 DbGate 按钮即可一键添加完整的 Web 界面，用于浏览和查询数据库。

![FlyEnv MongoDB 模块概览截图](https://oss.macphpstudy.com/image/features/mongodb-1.webp)

## 版本管理

在 **MongoDB → 版本管理器** 中安装并并行保留多个 MongoDB 版本，然后选择服务要运行的版本。

- **按平台提供安装源：** macOS 使用 Homebrew（`mongodb-community`、`mongodb-enterprise@x`）和 MacPorts，Linux 使用 Homebrew，Windows 使用静态在线列表中的现成 `mongod.exe` 软件包。
- **自定义版本：** 添加包含你自己 MongoDB 安装的目录；FlyEnv 会扫描并将这些版本与托管版本一起列出。
- **一次运行一个版本：** 服务选项卡将选定版本作为 MongoDB 服务启动；启动另一个版本会停止之前的版本。
- **Windows 额外组件：** 除 `mongod.exe` 外，FlyEnv 还会下载 **mongosh** shell，并通过 `db.shutdownServer()` 优雅地关闭服务器。

![FlyEnv MongoDB 版本管理器及 Homebrew、MacPorts 来源截图](https://oss.macphpstudy.com/image/features/mongodb-2.webp)

## 服务与配置

FlyEnv 启动真正的 `mongod` 二进制文件，并传入 `--config mongodb-<version>.conf --logpath mongodb-<version>.log --pidfilepath ...`。配置文件根据模板生成，仅将 MongoDB 绑定到 localhost（`127.0.0.1` 和 `::1`），不设置显式端口，因此服务器监听默认的 **27017**。每个版本在 FlyEnv MongoDB 文件夹下使用自己的 `data-<version>` 目录，版本之间不会共享数据文件。

**配置文件**选项卡会在原始 YAML 编辑器中打开该版本的 `mongodb-<version>.conf`，因此每个 `mongod` 选项都可直接编辑。

![FlyEnv 在纯文本 YAML 编辑器中编辑 mongodb.conf 截图](https://oss.macphpstudy.com/image/features/mongodb-3.webp)

## 日志

**日志**选项卡可直接在 FlyEnv 中打开正在运行版本的 `mongodb-<version>.log`。由于 FlyEnv 启动时显式传入 `--logpath`，服务器日志始终写入已知位置；当版本无法启动或连接被拒绝时，应首先查看这里。

## DbGate

服务工具栏中的 **DbGate** 按钮可一步创建完整的 Web 界面。它要求在 FlyEnv 的 [Node 模块](/zh/features/nodejs) 中选择 Node 版本：FlyEnv 使用该版本通过 npm 安装 `dbgate-serve` 到自有目录，然后在 3000 端口提供 DbGate（必要时会扫描空闲端口）。访问受 HTTP 基本身份验证保护，登录用户名为 `flyenv`，生成的密码会嵌入 FlyEnv 在浏览器中打开的 URL。[数据库用户和密码指南](/zh/guide/database-user-password)介绍 FlyEnv 各数据库模块的凭据处理方式。

![FlyEnv 从 MongoDB 模块打开 DbGate Web 界面截图](https://oss.macphpstudy.com/image/features/mongodb-4.webp)

<FeatureRelatedLinks locale="zh" slug="mongodb" />

## 兼容性说明

FlyEnv 管理本地 MongoDB 运行时、生成的配置和按版本划分的数据目录，但不保证每个 MongoDB 版本都能在所有操作系统或安装源上使用。版本管理器提供的版本取决于你的平台（macOS 使用 Homebrew 和 MacPorts，Linux 使用 Homebrew，Windows 使用静态软件包）以及这些来源发布的内容。DbGate 还依赖通过 FlyEnv 安装的 Node 版本。请以应用内版本列表和[下载页面](/zh/download)作为你电脑上可安装版本的权威依据。要构建基于本地数据库的完整应用堆栈，请参阅 [Strapi](/zh/solutions/strapi) 解决方案，并观看[演示](/zh/demos)了解模块运行情况。
