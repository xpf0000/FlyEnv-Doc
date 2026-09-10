---
layout: doc
titleTemplate: false
title: 'FlyEnv Neo4j：本地开发模块与配置指南'
description: '运行 Neo4j，为其绑定兼容的 FlyEnv Java 运行时，并管理配置和 Neo4j Browser。'
head:
  - - meta
    - name: description
      content: '运行 Neo4j，为其绑定兼容的 FlyEnv Java 运行时，并管理配置和 Neo4j Browser。'
  - - meta
    - property: og:title
      content: 'FlyEnv Neo4j：本地开发模块与配置指南'
  - - meta
    - property: og:description
      content: '运行 Neo4j，为其绑定兼容的 FlyEnv Java 运行时，并管理配置和 Neo4j Browser。'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/zh/features/neo4j
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/zh/features/neo4j
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# 使用 FlyEnv 开发本地 Neo4j

Neo4j 是一个开源图数据库，以节点和关系而非表格存储数据，并使用 Cypher 语言查询；它的数据模型不同于 [MongoDB](/zh/features/mongodb) 等文档数据库。它适合实体之间关系很重要的场景，如社交图谱、知识图谱、推荐和欺诈检测。FlyEnv 将 Neo4j 作为托管的本地服务运行：从静态在线列表安装版本，从 FlyEnv 的 Java 模块为每个版本绑定兼容的 Java 运行时，编辑 `neo4j.conf` 并查看日志，所有操作都在 Neo4j 模块的**服务 / 版本管理器 / 配置文件 / 日志**选项卡中完成。服务启动后，点击 **Neo4j Browser** 按钮即可打开数据库自带的 Web 界面。

![FlyEnv Neo4j 模块概览截图](https://oss.macphpstudy.com/image/features/neo4j-1.webp)

## 版本管理

在 **Neo4j → 版本管理器** 中安装 Neo4j 版本。

- **仅提供静态在线列表：** Neo4j 从 FlyEnv 静态软件包列表安装，Windows 使用 zip 归档，其他平台使用 tar.gz。此模块不提供 Homebrew 或 MacPorts 安装源。
- **支持版本：** 仅支持 Neo4j **5.23.0 及更高版本**，不支持更早版本。
- **自定义版本：** 添加包含你自己 Neo4j 安装的目录，FlyEnv 会扫描并将这些版本与托管版本一起列出。

![FlyEnv Neo4j 版本管理器及静态在线列表截图](https://oss.macphpstudy.com/image/features/neo4j-2.webp)

## Java 版本绑定

Neo4j 运行在 JVM 上，因此每个已安装版本都需要 Java 运行时。服务表格包含专用的 **Java 列**，可为每个 Neo4j 版本选择 JDK，使用 FlyEnv [Java 模块](/zh/features/java)管理的 Java 安装。

- **按版本设置 JAVA_HOME：** 选定的 JDK 会绑定到该 Neo4j 版本，并在服务启动时作为 `JAVA_HOME` 传入。
- **兼容性策略：** Neo4j 5.x 运行于 Java 17 或 21；Neo4j 2025.x 要求 Java 21 或 25。启动服务前请绑定兼容的 JDK；[Java 开发环境指南](/zh/guide/set-up-java-development-environment)介绍如何在 FlyEnv 中安装 JDK。

![FlyEnv Neo4j 服务表及按版本 Java 列截图](https://oss.macphpstudy.com/image/features/neo4j-3.webp)

## 服务与配置

FlyEnv 在前台启动 Neo4j，运行 `neo4j console`（Windows 通过 PowerShell 执行 `neo4j.ps1 console`），并为选定版本设置 `JAVA_HOME` 和 `NEO4J_CONF`。每个版本在 FlyEnv Neo4j 目录下都有独立实例目录。

- **每个实例的 `neo4j.conf`：** **配置文件**选项卡在原始编辑器中打开从发行版复制的实例 `conf/neo4j.conf`，并提供官方 Neo4j 文档链接。
- **从配置读取端口：** HTTP 端口（默认 **7474**）、HTTPS 端口（7473）和 Bolt 端口（默认 **7687**）实时读取自 `neo4j.conf`，因此 FlyEnv 显示的端口始终与服务器实际绑定的一致。

![FlyEnv 在纯文本配置编辑器中编辑 neo4j.conf 截图](https://oss.macphpstudy.com/image/features/neo4j-4.webp)

## 日志

**日志**选项卡可在服务器日志文件之间切换：包括启动输出和启动错误，以及 Neo4j 自己的 `neo4j.log` 和 `debug.log`。当版本无法启动时，应首先查看启动日志，例如不兼容的 Java 绑定会立即显示在其中。

## Neo4j Browser

Neo4j 自带 Web 界面，FlyEnv 不会替代它：服务工具栏中的 **Neo4j Browser** 按钮会在外部浏览器打开 `http://127.0.0.1:<http port>`，你可以在其中针对运行中的实例执行 Cypher 查询并检查图数据。请参阅[演示](/zh/demos)了解该工作流。

<FeatureRelatedLinks locale="zh" slug="neo4j" />

## 兼容性说明

FlyEnv 管理本地 Neo4j 运行时、每个实例的配置和 Java 绑定，但不保证每个 Neo4j 版本都能在所有操作系统上使用。仅支持 Neo4j 5.23.0 及更高版本，安装来自静态在线列表（Windows 使用 zip，macOS 和 Linux 使用 tar.gz）。每个版本都需要兼容的 JDK——Neo4j 5.x 使用 Java 17/21，Neo4j 2025.x 使用 Java 21/25——这些 JDK 通过 FlyEnv Java 模块安装。请以应用内版本列表和[下载页面](/zh/download)作为你电脑上可安装版本的权威依据。
