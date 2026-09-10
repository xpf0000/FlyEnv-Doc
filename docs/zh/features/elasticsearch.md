---
layout: doc
titleTemplate: false
title: 'FlyEnv Elasticsearch：本地开发模块与配置指南'
description: '运行 Elasticsearch 版本，并分别编辑 elasticsearch.yml、JVM 和日志配置。'
head:
  - - meta
    - name: description
      content: '运行 Elasticsearch 版本，并分别编辑 elasticsearch.yml、JVM 和日志配置。'
  - - meta
    - property: og:title
      content: 'FlyEnv Elasticsearch：本地开发模块与配置指南'
  - - meta
    - property: og:description
      content: '运行 Elasticsearch 版本，并分别编辑 elasticsearch.yml、JVM 和日志配置。'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/zh/features/elasticsearch
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/zh/features/elasticsearch
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Elasticsearch 在 FlyEnv 中

Elasticsearch 是构建于 Apache Lucene 之上的分布式搜索与分析引擎，可用于大型数据集的全文搜索、日志分析和聚合，也是本地 [Magento](/zh/solutions/magento) 技术栈所需的搜索引擎。如果完整集群超出项目需求，更轻量的 [Meilisearch](/zh/features/meilisearch)、[Typesense](/zh/features/typesense) 和 [ZincSearch](/zh/features/zincsearch) 模块也能提供即时搜索能力。FlyEnv 在 macOS、Windows 和 Linux 上将 Elasticsearch 作为托管本地服务运行：可并行安装多个版本，在同一窗口中启动和停止，并直接编辑每个版本自己的 `elasticsearch.yml`、`jvm.options` 和 `log4j2.properties`，无需在安装目录中查找。运行节点的日志也能直接在应用内打开。

![FlyEnv Elasticsearch 模块概览截图](https://oss.macphpstudy.com/image/features/elasticsearch-1.webp)

## 版本管理

从 **Elasticsearch → 版本管理器** 并行安装和保留多个 Elasticsearch 版本。

- **所有平台的静态软件包：**Elasticsearch 在 macOS、Windows 和 Linux 上都从 FlyEnv 的在线静态软件包列表安装；该模块不使用 Homebrew 或 MacPorts 源。
- **托管安装位置：**每个版本都会从 tar.gz 或 zip 压缩包解压到 FlyEnv 自己的 `elasticsearch/v<version>/` 目录，与计算机上的其他安装相互隔离。
- **自定义版本：**将 FlyEnv 指向包含你自己的 Elasticsearch 安装的任意目录；程序会扫描 `bin/elasticsearch` 二进制文件（Windows 上为 `elasticsearch.bat`），并将这些版本与托管版本一起列出。

![FlyEnv Elasticsearch 版本管理器及静态软件包列表截图](https://oss.macphpstudy.com/image/features/elasticsearch-2.webp)

## 服务管理

**服务**标签页会列出每个已安装版本，并提供按版本启动、停止和重启的控制项。侧边栏开关（系统托盘中也可用）可以启动或停止当前版本，无需打开模块页面。

- **一次运行一个版本：**启动某个版本时，会停止其他正在运行的 Elasticsearch 版本，避免多个节点争用相同端口。
- **真实的 Elasticsearch 进程：**FlyEnv 会启动该版本自己的 `bin/elasticsearch` 和 pid 文件，将 `ES_HOME` 与 `ES_PATH_CONF` 设置为该版本目录，使其使用随附配置启动。
- **上游默认端口：**由于 FlyEnv 不会生成自己的配置，新安装会使用 Elasticsearch 默认端口响应请求：HTTP 使用 9200，传输协议使用 9300，直到你手动修改配置。

![FlyEnv Elasticsearch 服务选项卡及运行中的版本截图](https://oss.macphpstudy.com/image/features/elasticsearch-3.webp)

## 配置

Elasticsearch 在 FlyEnv 中提供三个专用编辑器标签页：**elasticsearch.yml**、**jvm.options** 和 **log4j2.properties**，分别打开所选版本 `config/` 目录中的对应文件。

- **按版本保存文件：**编辑只会作用于特定版本随附的配置，因此调整一个安装不会影响其他版本。
- **完整源文件编辑：**编辑器直接操作原始文件，涵盖所有 Elasticsearch、JVM 和日志设置，而不是局限于少数选项。
- **不会意外重新生成：**FlyEnv 从不重写这些文件；你保存的内容就是节点下次启动时读取的内容。

![FlyEnv 编辑已安装版本的 elasticsearch.yml 截图](https://oss.macphpstudy.com/image/features/elasticsearch-4.webp)

## 日志

**日志**标签页会在 FlyEnv 中打开节点的日志输出。主视图显示该版本自己的 `logs/elasticsearch.log`，节点启动失败或集群变更异常时应首先查看此文件。节点写入的服务器、弃用和垃圾回收日志（`elasticsearch_server.json`、`elasticsearch_deprecation.json`、`gc.log`）也会与主日志一起提供查看。

![FlyEnv Elasticsearch 日志查看器显示节点日志截图](https://oss.macphpstudy.com/image/features/elasticsearch-5.webp)

<FeatureRelatedLinks locale="zh" slug="elasticsearch" />

## 兼容性说明

FlyEnv 管理本地 Elasticsearch 运行时以及每个版本随附的配置文件；它不提供管理面板，也不保证每个 Elasticsearch 版本都会针对所有操作系统或 CPU 架构发布。版本管理器列表反映的是你的平台实际可用的静态软件包。Elasticsearch 可运行于 macOS、Windows 和 Linux。请从[下载页面](/zh/download)获取应用，并在[演示](/zh/demos)中查看模块的实际操作。
