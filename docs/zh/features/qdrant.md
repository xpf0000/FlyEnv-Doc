---
layout: doc
titleTemplate: false
title: 'FlyEnv Qdrant：本地开发模块与配置指南'
description: '运行 Qdrant，管理配置文件，并通过内置 Web Dashboard 开发和调试本地向量搜索。'
head:
  - - meta
    - name: description
      content: '运行 Qdrant，管理配置文件，并通过内置 Web Dashboard 开发和调试本地向量搜索。'
  - - meta
    - property: og:title
      content: 'FlyEnv Qdrant：本地开发模块与配置指南'
  - - meta
    - property: og:description
      content: '运行 Qdrant，管理配置文件，并通过内置 Web Dashboard 开发和调试本地向量搜索。'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/zh/features/qdrant
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/zh/features/qdrant
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# 使用 FlyEnv 进行本地 Qdrant 开发

Qdrant 是开源向量数据库，用于存储嵌入向量并快速查找最相似的向量。它常用于语义搜索、推荐和检索增强生成（RAG）应用，也常与 [Ollama](/zh/features/ollama) 等本地模型运行器搭配；[本地离线 AI 代理指南](/zh/guide/build-local-offline-ai-agent)展示了完整示例。FlyEnv 将 Qdrant 作为本地托管服务运行：从在线列表安装版本、在侧边栏启动或停止，并在内置编辑器中修改每个版本的 YAML 配置。每个实例都有自动生成的配置、独立日志，以及运行在 6333 端口的 Web 控制台，无需手动设置。

![FlyEnv Qdrant 模块概览截图](https://oss.macphpstudy.com/image/features/qdrant-1.webp)

## 版本管理（Qdrant）

从 **Qdrant → 版本管理器** 并行安装多个 Qdrant 版本，并让它们同时保持可用。

- **静态在线列表：** Qdrant 仅通过 FlyEnv 的静态源分发，macOS、Linux 和 Windows 均可下载 zip 或 tar.gz 压缩包。此模块不提供 Homebrew 或 MacPorts。
- **自定义目录：** 指定包含自有 Qdrant 二进制文件的目录，它会与托管版本一起显示。
- **同时只运行一个版本：** 可以安装多个版本，但同一时间只运行一个 Qdrant 实例；启动新版本会停止之前的版本。

![FlyEnv Qdrant 版本管理器及静态在线版本列表](https://oss.macphpstudy.com/image/features/qdrant-2.webp)

## 服务与配置

**服务**选项卡显示运行实例列表，可启动或停止版本、选择当前版本并打开安装目录。FlyEnv 直接以托管进程启动 `qdrant` 二进制文件，因此各平台的启动和停止方式一致。

每个已安装版本都有独立配置。首次使用时，FlyEnv 根据模板生成 `config/config.yaml` 并放在该版本二进制文件旁。配置按版本隔离，修改一个版本的 YAML 不会影响其他版本。**配置文件**选项卡提供原始 YAML 编辑器，模板默认将 REST 和 Web 端口设为 6333。

![FlyEnv Qdrant 配置截图](https://oss.macphpstudy.com/image/features/qdrant-3.webp)

## 日志

每个已安装版本会写入两个日志文件，可直接在 FlyEnv 中查看：

- **日志选项卡：** 版本的标准启动输出（`qdrant-<version>-start-out.log`）。
- **错误日志选项卡：** 版本的错误输出（`qdrant-<version>-start-error.log`）。

按版本拆分标准输出和错误日志，便于准确了解某个 Qdrant 构建在启动或处理请求时输出的内容。

![FlyEnv Qdrant 日志截图](https://oss.macphpstudy.com/image/features/qdrant-4.webp)

## Web 控制台

Qdrant 版本运行时，服务选项卡会显示控制台按钮，在浏览器中打开 `http://127.0.0.1:6333/dashboard`。

FlyEnv 会自动完成设置：启动或安装时从 GitHub 下载官方 qdrant-web-ui，并通过 `QDRANT__SERVICE__STATIC_CONTENT_DIR` 让 Qdrant 提供静态文件。这样控制台可直接访问 6333 端口的实例，无需单独 Web 服务器或手动下载资源。

![从 FlyEnv 打开的 Qdrant Web 控制台](https://oss.macphpstudy.com/image/features/qdrant-5.webp)

<FeatureRelatedLinks locale="zh" slug="qdrant" />

## 兼容性说明

FlyEnv 管理 Qdrant 版本安装、服务生命周期、按版本配置和日志，以及内置控制台；集合、快照和 API 密钥仍由 Qdrant 自身管理。PostgreSQL 用户可通过 pgvector 在关系数据库中实现类似向量搜索，请参阅 [PostgreSQL 模块](/zh/features/postgresql)。控制台按钮始终指向默认 6333 端口，如需使用该按钮请保留此端口。可安装的软件包以[下载页面](/zh/download)和当前发行说明为准，也可查看[演示](/zh/demos)。
