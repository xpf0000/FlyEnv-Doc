---
layout: doc
titleTemplate: false
title: 'FlyEnv Deno：本地开发模块与配置指南'
description: '通过静态包或 Homebrew 安装 Deno 版本、切换当前命令，并在本地运行 Deno 项目。'
head:
  - - meta
    - name: description
      content: '通过静态包或 Homebrew 安装 Deno 版本、切换当前命令，并在本地运行 Deno 项目。'
  - - meta
    - property: og:title
      content: 'FlyEnv Deno：本地开发模块与配置指南'
  - - meta
    - property: og:description
      content: '通过静态包或 Homebrew 安装 Deno 版本、切换当前命令，并在本地运行 Deno 项目。'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/zh/features/deno
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/zh/features/deno
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# 使用 FlyEnv 进行本地开发 (Deno)

Deno 是一个基于 V8 的 JavaScript 和 TypeScript 运行时，由 [Node.js](/zh/features/nodejs) 原作者创建，内置 TypeScript 支持并采用默认拒绝权限模型。它适用于服务器、脚本和工具场景，提供单个自包含二进制文件。FlyEnv 的 Deno 模块专注于版本安装、终端版本解析和项目级运行时绑定，包含项目、服务和版本管理器三个选项卡，不提供配置文件或日志查看器。

![FlyEnv Deno 模块概览截图](https://oss.macphpstudy.com/image/features/deno-1.webp)

## 版本管理 (Deno)

从 **Deno → 版本管理器** 并行安装多个 Deno 版本，并让它们同时可用。

- **静态构建：** 所有平台均有 Deno 软件包在线列表；FlyEnv 将每个版本下载到自己的应用目录（`deno/<version>`），并自动移除 macOS 隔离属性。
- **Homebrew（macOS 和 Linux）：** 安装 `deno` 公式。Homebrew 仅发布无版本公式，因此没有可选的 `deno@x.y` 变体。
- **自定义目录：** 指向包含你自己 Deno 构建的目录；FlyEnv 通过运行 `deno --version` 检测版本，并将其列在管理版本旁边。

![FlyEnv Deno 版本管理器及静态、Homebrew 安装来源截图](https://oss.macphpstudy.com/image/features/deno-2.webp)

## 命令行版本切换

**服务**选项卡不会启动进程——Deno 是运行时二进制而非守护进程，此处显示的是版本和路径管理表。

- **终端版本切换：** 选择终端 `deno` 命令解析到的版本。FlyEnv 在 `PATH` 中添加或移除版本 bin 目录，并标明路径条目由 FlyEnv 还是其他工具创建。[系统 PATH 环境指南](/zh/guide/setup-system-path-environment)详细介绍了路径编辑。
- **版本别名和备注：** 为每个安装添加简短别名和备注，方便区分相似构建。
- **维护：** 表格显示每个版本的安装路径，并可删除不再需要的版本。

## 项目级别 Deno 运行时

在 **Deno → 项目**中注册项目文件夹并绑定特定 Deno 版本，而不是依赖 PATH 中碰巧存在的版本。

- **项目级运行时：** 版本选择存储在项目目录的 `.flyenv` 文件中，因此从 FlyEnv 启动的终端和编辑器会自动使用正确的 Deno。请参阅[项目级运行时环境指南](/zh/guide/project-level-runtime-environment)和[项目级运行时功能](/zh/features/per-project-runtimes)。
- **作为服务运行：** 可在 FlyEnv 中使用自定义启动命令直接运行项目；项目链接为 `http://127.0.0.1:<port>`，不提供反向代理或网站集成。
- **打开工具：** 从项目行跳转到终端或编辑器，并加载项目环境。

![FlyEnv Deno 项目列表及按项目 Deno 版本绑定截图](https://oss.macphpstudy.com/image/features/deno-3.webp)

<FeatureRelatedLinks locale="zh" slug="deno" />

## 兼容性说明

FlyEnv 管理 Deno 版本安装、PATH 切换和项目运行时，但不会额外捆绑各 Deno 构建提供之外的工具；模块没有配置编辑器、日志查看器或管理面板。安装来源因平台而异：Homebrew 仅在 macOS 和 Linux 上提供，Windows 使用静态构建和自定义目录。请以[下载页面](/zh/download)和当前发行说明为支持软件包来源。
