---
layout: doc
titleTemplate: false
title: 'FlyEnv Typesense：本地开发模块与配置指南'
description: '在 macOS 和 Linux 上运行 Typesense，并管理配置文件和服务日志。'
head:
  - - meta
    - name: description
      content: '在 macOS 和 Linux 上运行 Typesense，并管理配置文件和服务日志。'
  - - meta
    - property: og:title
      content: 'FlyEnv Typesense：本地开发模块与配置指南'
  - - meta
    - property: og:description
      content: '在 macOS 和 Linux 上运行 Typesense，并管理配置文件和服务日志。'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/zh/features/typesense
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/zh/features/typesense
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# 类型搜索在FlyEnv中

Typesense 是一个专注于快速、容错拼写错误搜索的开源搜索引擎，提供简单 API，常用于站点搜索和即时搜索体验。它是 [Elasticsearch](/zh/features/elasticsearch) 的轻量替代品，与 [Meilisearch](/zh/features/meilisearch) 和 [ZincSearch](/zh/features/zincsearch) 属于同一系列。FlyEnv 在 macOS 和 Linux 上将其作为托管的本地搜索服务器运行：从静态列表或 Homebrew 安装版本，使用 FlyEnv 管理的配置文件启动 `typesense-server`，并在应用内查看日志。Typesense 模块仅在 macOS 和 Linux 上可用。

![FlyEnv Typesense 模块概览截图](https://oss.macphpstudy.com/image/features/typesense-1.webp)

## 版本管理

在 **Typesense → 版本管理器** 中安装并行保留多个 Typesense 版本，然后选择服务要运行的版本。

- **安装源：** 静态在线列表，以及使用 `typesense/tap/typesense-server` 配方和其 `@x.y` 版本变体的 Homebrew。
- **自定义版本：** 将 FlyEnv 指向包含你自己 `typesense-server` 二进制文件的目录，系统会将其与托管版本一起列出。
- **启动和停止：**可从服务选项卡或侧边栏开关（系统托盘中也可用）控制运行中的版本。

![FlyEnv Typesense 版本管理器及静态、Homebrew 来源截图](https://oss.macphpstudy.com/image/features/typesense-2.webp)

## 服务与配置

FlyEnv 会使用 `--config=<BaseDir>/typesense/typesense-server.ini --log-dir=<BaseDir>/typesense/log` 参数启动真正的 `typesense-server` 二进制文件，因此配置文件是该服务唯一的权威依据。

- **自动生成配置：**首次启动时，FlyEnv 会写入默认的 `typesense-server.ini`，其中包含 `api-port = 8108`、`api-key = xyz`、FlyEnv 自有 Typesense 文件夹下的数据目录以及 `enable-cors = true`，因此服务器开箱即用即可在 8108 端口响应。
- **配置文件选项卡：**提供用于编辑 `typesense-server.ini` 的纯文本编辑器，并在旁边保留 `typesense-server.ini.default` 作为原始参考。所有已安装 Typesense 版本共享同一配置。

![FlyEnv 在配置编辑器中编辑 typesense-server.ini 截图](https://oss.macphpstudy.com/image/features/typesense-3.webp)

## 日志

**日志**选项卡会直接在 FlyEnv 中打开服务器的日志文件 `typesense/log/typesense.log`。由于 FlyEnv 在启动时将日志目录传给 `typesense-server`，你运行的每个版本都会写入同一位置；当版本启动失败或搜索请求异常时，这里是首要排查位置。

<FeatureRelatedLinks locale="zh" slug="typesense" />

## 兼容性说明

**Typesense 模块仅在 macOS 和 Linux 上可用，在 Windows 上不会显示。**FlyEnv 管理本地运行时、配置文件和日志目录；它不提供 Typesense 管理界面，模块也没有项目集成，你需要自行让应用的 Typesense 客户端连接配置的端口（默认为 8108）。每个构建的具体功能取决于上游 Typesense 版本。请查看[下载页面](/zh/download)了解当前 FlyEnv 版本，并参阅[演示](/zh/demos)了解 FlyEnv 服务模块的实际操作。
