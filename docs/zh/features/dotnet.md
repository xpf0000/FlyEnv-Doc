---
layout: doc
titleTemplate: false
title: 'FlyEnv .NET：本地开发模块与配置指南'
description: '在 FlyEnv 中安装和切换 .NET SDK 版本，并为不同项目绑定所需运行时。'
head:
  - - meta
    - name: description
      content: '在 FlyEnv 中安装和切换 .NET SDK 版本，并为不同项目绑定所需运行时。'
  - - meta
    - property: og:title
      content: 'FlyEnv .NET：本地开发模块与配置指南'
  - - meta
    - property: og:description
      content: '在 FlyEnv 中安装和切换 .NET SDK 版本，并为不同项目绑定所需运行时。'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/zh/features/dotnet
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/zh/features/dotnet
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# 使用 FlyEnv 进行本地 .NET 开发

.NET 是微软的开源开发者平台，用于构建 Web、桌面、移动和云应用，主要编程语言为 C#。FlyEnv 在一个界面中管理本地 .NET SDK：并排安装多个 SDK 版本、切换 `dotnet` 命令，并为每个项目绑定特定 SDK，使终端和编辑器使用正确的运行时。该模块包含“.NET 项目”“服务”和“版本管理器”三个标签页。

![FlyEnv 模块概览](https://oss.macphpstudy.com/image/features/dotnet-1.webp)

## .NET SDK 版本管理

从 **.NET → 版本管理器** 并排安装多个 .NET SDK 版本，并可随时在它们之间切换。


- **Microsoft 发布元数据：** 与其他语言模块不同，.NET 静态列表直接从 Microsoft 官方发布元数据获取，按通道选择最新 SDK，并为各平台（`win-x64`、`osx-arm64`、`osx-x64`、`linux-arm64`、`linux-x64`）生成下载 URL。
- **Homebrew 源：** 在 macOS 和 Linux 上，也可从 Homebrew 的 `dotnet` 公式安装由该包管理器维护的 SDK。
- **准确的版本检测：** FlyEnv 使用 `dotnet --version` 读取每个安装；如果失败则解析 `dotnet --info`，确保列表版本与磁盘上的 SDK 一致。
- **macOS 隔离属性处理：** 在 macOS 上静态安装后，FlyEnv 会移除隔离属性，使 SDK 无需 Gatekeeper 提示即可运行。

![版本管理器界面](https://oss.macphpstudy.com/image/features/dotnet-2.webp)

## 命令行版本切换

**服务**标签页是 .NET 的已安装版本表。尽管名称如此，它管理的是版本、PATH 条目和别名，而不是后台进程。

- **PATH 切换：** 设置终端 `dotnet` 命令解析到的 .NET SDK。FlyEnv 会在 `PATH` 中添加或移除该版本目录，并标记当前条目是由 FlyEnv 还是其他工具设置；[系统 PATH 环境指南](/zh/guide/setup-system-path-environment)详细说明了这一机制。
- **版本别名和备注：** 为每个安装设置简短别名和备注，便于在列表中区分相似 SDK。
- **自定义版本：** 将 FlyEnv 指向包含自定义 .NET SDK 构建的任意目录，即可与受管版本一起列出。

## 项目级 .NET 运行时

在 **.NET → 项目** 中注册每个项目文件夹，并绑定独立的 .NET SDK，或继续使用系统版本。完整流程请参阅[项目级运行环境指南](/zh/guide/project-level-runtime-environment)和[项目级运行时特性](/zh/features/per-project-runtimes)。

- **项目级运行时：** 版本选择保存在项目目录内的 `.flyenv` 文件中，因此从 FlyEnv 启动的终端和编辑器会自动加载正确的 SDK。
- **作为服务运行：** 通过自定义启动命令或运行文件、TCP 端口、环境变量和可选 sudo 标志将项目标记为服务；侧边栏开关可一次启动或停止所有启用服务的 .NET 项目。
- **在 VS Code 中打开：** 从项目行直接跳转到 VS Code，并加载项目环境。

![服务与配置界面](https://oss.macphpstudy.com/image/features/dotnet-3.webp)

<FeatureRelatedLinks locale="zh" slug="dotnet" />

## 兼容性说明

安装源取决于平台：所有操作系统均提供静态构建，macOS 和 Linux 还支持 Homebrew；Windows 仅使用静态（zip）源。FlyEnv 管理本地运行时和 PATH 配置，请根据已安装构建版本核对项目 SDK 要求，并以[下载页面](/zh/download)和当前发行说明作为受支持软件包的依据。
