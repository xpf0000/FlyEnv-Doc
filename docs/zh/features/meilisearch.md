---
layout: doc
titleTemplate: false
title: 'FlyEnv Meilisearch：本地开发模块与配置指南'
description: '运行 Meilisearch，使用可视化表单管理配置和数据目录，并打开搜索控制台。'
head:
  - - meta
    - name: description
      content: '运行 Meilisearch，使用可视化表单管理配置和数据目录，并打开搜索控制台。'
  - - meta
    - property: og:title
      content: 'FlyEnv Meilisearch：本地开发模块与配置指南'
  - - meta
    - property: og:description
      content: '运行 Meilisearch，使用可视化表单管理配置和数据目录，并打开搜索控制台。'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/zh/features/meilisearch
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/zh/features/meilisearch
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# FlyEnv 中的 Meilisearch

Meilisearch 是一个轻量的开源搜索引擎，通过 REST API 提供快速且容错拼写错误的全文搜索。当完整部署 [Elasticsearch](/zh/features/elasticsearch) 过于庞大时，网站或应用常选择它来驱动搜索框；同类轻量引擎还包括 [Typesense](/zh/features/typesense) 和 [ZincSearch](/zh/features/zincsearch)。FlyEnv 将其作为托管的本地服务运行：从版本管理器安装版本，使用可编辑的 `meilisearch.toml` 启动真正的 `meilisearch` 二进制文件，并从服务选项卡打开内置搜索仪表板。每个版本都有独立的数据工作目录，配置既可通过原始编辑器修改，也可通过包含约 30 项设置的可视化表单管理。

![FlyEnv Meilisearch 模块概览及服务选项卡截图](https://oss.macphpstudy.com/image/features/meilisearch-1.webp)

## 版本管理

在 **Meilisearch → 版本管理器** 中安装并并行保留多个版本，然后选择服务要运行的版本。

- **按平台提供安装源：** macOS 和 Linux 提供静态构建与 Homebrew（`meilisearch`）；Windows 使用静态下载的 `meilisearch.exe`，FlyEnv 会复制到目标位置并执行 `--version` 验证。
- **自定义版本：** 添加包含你自己 Meilisearch 二进制文件的目录；FlyEnv 会扫描并将其与托管版本一起列出。
- **按版本划分工作目录：** 服务选项卡为每个版本提供可编辑的工作目录字段，默认值为 `<BaseDir>/meilisearch/<major.minor>`，确保不同版本的数据彼此分离。

![FlyEnv Meilisearch 版本管理器及安装来源截图](https://oss.macphpstudy.com/image/features/meilisearch-2.webp)

## 服务与配置

FlyEnv 使用 `meilisearch --config-file-path <BaseDir>/meilisearch/meilisearch.toml` 启动服务，并将该版本的工作目录作为进程目录。默认模板使用 `http_addr = "localhost:7700"`、`db_path = "./data.ms"` 和 `env = "development"`。

**配置文件**选项卡通过以下两种方式编辑 `meilisearch.toml`（旁边保留 `meilisearch.default.toml` 作为默认参考）：

- **可视化表单：** 将约 30 项设置映射到 TOML 文件，包括 `db_path`、`env`、`http_addr`、`master_key`、SSL 选项、转储和快照、`log_level`、指标等，无需手动编辑文件即可修改。
- **原始编辑器：** 切换到完整源码视图，编辑表单未覆盖的选项。

![FlyEnv Meilisearch 映射到 meilisearch.toml 的可视化配置表单截图](https://oss.macphpstudy.com/image/features/meilisearch-3.webp)

## 仪表盘（7700）

服务运行时，服务选项卡会显示 Web 界面按钮，在浏览器中打开 `http://127.0.0.1:<port from meilisearch.toml>/` 的 Meilisearch 仪表板，默认端口为 `7700`。这是 Meilisearch 内置的界面，可用于对本地索引尝试搜索请求，在无需先配置应用的情况下检查索引和查询行为。

![FlyEnv 从服务选项卡在 7700 端口打开 Meilisearch 控制台截图](https://oss.macphpstudy.com/image/features/meilisearch-4.webp)

## 日志

**日志**选项卡可直接在 FlyEnv 中打开每个版本的启动日志。启动错误日志（`meilisearch-<version>-start-error.log`）是版本无法运行时的首要检查位置，例如 `meilisearch.toml` 中的端口已被占用；进程输出也会记录在此。

![FlyEnv Meilisearch 启动错误日志查看器截图](https://oss.macphpstudy.com/image/features/meilisearch-5.webp)

<FeatureRelatedLinks locale="zh" slug="meilisearch" />

## 兼容性说明

FlyEnv 管理本地 Meilisearch 运行时、`meilisearch.toml` 和每个版本的工作目录，但不保证所有版本都能在每个操作系统或安装源上使用。macOS 和 Linux 提供静态源与 Homebrew，Windows 仅使用静态下载。与按主版本保存配置文件的 [Redis](/zh/features/redis) 等模块不同，Meilisearch 为所有已安装版本共用一个 `meilisearch.toml`；配置更改会影响当前运行的版本。请以应用内版本列表和[下载页面](/zh/download)为准，并查看[演示](/zh/demos)了解模块使用示例。
