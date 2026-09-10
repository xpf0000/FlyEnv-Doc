---
layout: doc
titleTemplate: false
title: 'FlyEnv Bun：本地开发模块与配置指南'
description: '在 FlyEnv 中安装 Bun 版本、切换当前命令，并将 Bun 项目作为托管服务运行。'
head:
  - - meta
    - name: description
      content: '在 FlyEnv 中安装 Bun 版本、切换当前命令，并将 Bun 项目作为托管服务运行。'
  - - meta
    - property: og:title
      content: 'FlyEnv Bun：本地开发模块与配置指南'
  - - meta
    - property: og:description
      content: '在 FlyEnv 中安装 Bun 版本、切换当前命令，并将 Bun 项目作为托管服务运行。'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/zh/features/bun
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/zh/features/bun
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# 本地 Bun 开发使用 FlyEnv

Bun 是一个 JavaScript 和 TypeScript 运行时，同时将包管理器、打包器和测试运行器集成在单个可执行文件中。它可作为 [Node.js](/zh/features/nodejs) 的替代方案，用于服务器、脚本和前端工具。FlyEnv 的 Bun 模块在一个界面中覆盖本地 Bun 开发所需功能：从静态构建安装 Bun 版本、决定终端 `bun` 命令使用的版本，并为每个项目绑定独立运行时。模块包含“项目”“服务”和“版本管理器”三个标签页，分别用于版本安装、PATH 控制和项目运行时管理。

![FlyEnv 模块概览](https://oss.macphpstudy.com/image/features/bun-1.webp)

## Bun 版本管理

从 **Bun → 版本管理器** 并排安装多个 Bun 版本，并让它们同时可用。

- **仅静态构建：** Bun 在所有平台（macOS、Linux 和 Windows）均从静态在线列表安装。其他运行时可用的 Homebrew 和 MacPorts 源不适用于 Bun。
- **自定义目录：** 将 FlyEnv 指向包含自定义 Bun 构建的任意目录，该版本会与受管版本一起列出。
- **受管安装位置：** 版本解压到 FlyEnv 应用目录下的 `bun/<version>/`，每个安装通过实际执行 `bun --version` 检测。
- **安装后设置：** 安装版本后，FlyEnv 会运行 `bun completions` 以启用 Shell 补全；在 macOS 上还会移除下载二进制文件的隔离属性。

![版本管理器界面](https://oss.macphpstudy.com/image/features/bun-2.webp)

## 命令行版本切换

此处不会运行服务：FlyEnv 没有 Bun 守护进程，因此“服务”标签页实际上是用于 PATH 管理的已安装版本表。

- **终端版本切换：** 选择终端 `bun` 命令要解析的已安装版本。FlyEnv 会在选择版本时将其 bin 目录加入 `PATH`，切换离开时移除，并显示当前 PATH 条目由 FlyEnv 还是其他工具设置。[系统 PATH 环境指南](/zh/guide/setup-system-path-environment)介绍了 PATH 管理方法。
- **版本别名和备注：** 为每个安装设置简短别名和备注，便于在列表中区分相似构建。
- **清理维护：** 每行显示版本的安装位置，可从表格中移除不再需要的版本。

## 项目级 Bun 运行时

在 **Bun → 项目** 中注册每个项目文件夹，并绑定特定 Bun 版本，而不是依赖 PATH 中当前碰巧存在的版本。

- **项目级运行时：** 版本选择保存在项目目录内的 `.flyenv` 文件中，因此从 FlyEnv 启动的终端和编辑器会自动加载正确的 Bun。机制详见[项目级运行环境指南](/zh/guide/project-level-runtime-environment)和[项目级运行时特性](/zh/features/per-project-runtimes)。
- **作为服务运行：** 可选择直接从 FlyEnv 运行项目，设置自定义启动命令或运行文件、TCP 端口（以 `http://127.0.0.1:<port>` 链接暴露）、环境变量（内联或文件提供）以及 macOS/Linux 上的 sudo 标志。
- **在工具中打开：** 从项目行跳转到系统终端或编辑器，并加载项目环境。

![服务与配置界面](https://oss.macphpstudy.com/image/features/bun-3.webp)

<FeatureRelatedLinks locale="zh" slug="bun" />

## 兼容性说明

FlyEnv 管理 Bun 版本安装、PATH 切换和项目运行时；Bun 模块本身没有额外的模块级配置文件、日志查看器或管理面板，具体能力由 Bun 二进制文件提供。所有平台的安装均来自静态构建，支持的软件包请以[下载页面](/zh/download)和当前发行说明为准。
