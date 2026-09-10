---
layout: doc
titleTemplate: false
title: 'FlyEnv Go：本地开发模块与配置指南'
description: '通过静态包、Homebrew 或 GVM 安装和切换 Go，并使用项目级运行时启动 Go 项目。'
head:
  - - meta
    - name: description
      content: '通过静态包、Homebrew 或 GVM 安装和切换 Go，并使用项目级运行时启动 Go 项目。'
  - - meta
    - property: og:title
      content: 'FlyEnv Go：本地开发模块与配置指南'
  - - meta
    - property: og:description
      content: '通过静态包、Homebrew 或 GVM 安装和切换 Go，并使用项目级运行时启动 Go 项目。'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/zh/features/go
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/zh/features/go
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# 使用 FlyEnv 进行本地开发 (Go)

Go 是一种编译型、静态类型编程语言，常用于网络服务、命令行工具和云基础设施软件。FlyEnv 在一个应用中管理本地 Go 开发：并行安装多个 Go 版本，决定终端中的 `go` 命令解析到哪个版本，在 macOS 和 Linux 上集成 GVM，并为每个项目绑定独立的 Go 运行时。Go 模块包含 Go 项目、服务、版本管理器、新项目和 GVM 五个选项卡，覆盖版本安装、路径控制、项目运行时和项目创建。

![FlyEnv Go 模块概览截图](https://oss.macphpstudy.com/image/features/go-1.webp)

## Go 版本管理

从 **Go → 版本管理器** 并行安装多个 Go 版本，并让它们同时可用。
[gradle.md](gradle.md)

- **所有平台的静态构建：** FlyEnv 从 go.dev 发布列表下载官方 Go 版本：macOS 和 Linux 使用 `.tar.gz`，Windows 使用 zip，然后解压到自己的管理目录。
- **包管理器来源：** macOS 可通过 Homebrew 或 MacPorts 安装 `go` 公式；Linux 可使用 Homebrew 作为额外来源。
- **自定义目录：** 将包含你自己 Go 构建的目录交给 FlyEnv，构建会显示在管理版本旁边。
- **GVM 发现：** 在 macOS 和 Linux 上，FlyEnv 会自动查找通过 GVM 安装的 Go 版本，并与管理版本一起列出。

![FlyEnv Go 版本管理器及静态、Homebrew、MacPorts 来源截图](https://oss.macphpstudy.com/image/features/go-2.webp)

在 macOS 和 Linux 上，专用的 **GVM** 选项卡可直接集成现有 GVM 安装：FlyEnv 会从 `~/.gvm` 或 `GVM_ROOT` 检测 GVM；若未安装，可在内置终端中一键安装，并列出 GVM 管理的版本及安装、使用操作。

![FlyEnv GVM 选项卡列出由 GVM 管理的 Go 版本截图](https://oss.macphpstudy.com/image/features/go-3.webp)

## 命令行版本切换

对于 Go 来说，**服务**这一名称容易误导：此选项卡不会启动或停止任何进程，因为 FlyEnv 不运行 Go 守护进程。这里提供的是已安装版本及路径管理表。

- **终端版本切换：** 选择终端 `go` 命令解析到的已安装版本。FlyEnv 通过添加或移除版本 bin 目录修改 `PATH`，并标记每个条目由 FlyEnv 还是其他工具创建。
- **版本别名和备注：** 为每个安装添加简短别名和自由备注，方便在列表中区分相似构建。
- **维护：** 表格直接显示安装路径，也可在此删除不再需要的版本。

## 项目级运行环境

在 **Go → 项目**中注册项目文件夹并绑定特定 Go 版本，而不是依赖 PATH 中碰巧存在的版本。[项目级运行时环境指南](/zh/guide/project-level-runtime-environment)详细介绍了该机制。

- **项目级运行时：** 版本选择存储在项目目录的 `.flyenv` 文件中，因此从 FlyEnv 启动的终端和编辑器会自动使用正确的 Go 工具链。
- **作为服务运行：** 可在 FlyEnv 中直接运行项目，使用自定义启动命令或运行文件，暴露 `http://127.0.0.1:<port>` 地址，并以内联或 env 文件设置环境变量；macOS 和 Linux 还可启用 sudo。若要通过本地域名和 HTTPS 访问端口，请参阅[反向代理指南](/zh/guide/reverse-proxy-nestjs-multi-servers)了解 Nginx、Apache 和 Caddy 配置。
- **打开工具：** 从项目行跳转到系统终端，或在 GoLand 中打开项目并加载其环境。
- **新项目模板：** 无需离开应用即可创建普通 `go mod init` 模块，或基于 Gin、Echo、Fiber、Iris、GoFrame、Buffalo 的项目。[Gitea 解决方案](/zh/solutions/gitea)展示了通过 FlyEnv 网站管理提供生产级 Go 应用。

![FlyEnv Go 项目列表及按项目 Go 版本绑定截图](https://oss.macphpstudy.com/image/features/go-4.webp)

若要将这些项目作为持久后台服务运行，请参阅[无需 Docker 部署 Node.js、Python 和 Go 项目指南](/zh/guide/deploy-nodejs-python-go-without-docker)。

<FeatureRelatedLinks locale="zh" slug="go" />

## 兼容性说明

FlyEnv 管理 Go 版本安装、PATH 切换和项目运行时，但不会额外捆绑 Go 构建或模块生态之外的框架工具。可用安装来源因平台而异：GVM 选项卡和自动发现仅在 macOS、Linux 上提供，Windows 使用静态构建。请以[下载页面](/zh/download)和当前发行说明为支持软件包来源。
