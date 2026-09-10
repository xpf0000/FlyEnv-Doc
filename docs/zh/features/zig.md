---
layout: doc
titleTemplate: false
title: 'FlyEnv Zig：本地开发模块与配置指南'
description: '通过静态包、Homebrew 或 MacPorts 安装和切换 Zig，并为不同项目绑定版本。'
head:
  - - meta
    - name: description
      content: '通过静态包、Homebrew 或 MacPorts 安装和切换 Zig，并为不同项目绑定版本。'
  - - meta
    - property: og:title
      content: 'FlyEnv Zig：本地开发模块与配置指南'
  - - meta
    - property: og:description
      content: '通过静态包、Homebrew 或 MacPorts 安装和切换 Zig，并为不同项目绑定版本。'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/zh/features/zig
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/zh/features/zig
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# 使用 FlyEnv 进行本地 Zig 开发

Zig 是通用系统编程语言和工具链，支持手动内存管理与内置交叉编译。它适用于系统组件、嵌入式目标和性能敏感工具，传统上这些场景会选择 C 或 C++；它与 FlyEnv 同样管理的 [Rust](/zh/features/rust) 属于同一系统编程领域。FlyEnv 的 Zig 模块在一个界面中整理本地工具链：并行安装多个 Zig 版本，决定终端 `zig` 命令使用的版本，并为每个项目绑定独立编译器版本。模块包含项目、服务和版本管理器三个选项卡，分别用于版本安装、路径控制和项目工具链。

![FlyEnv Zig 模块概览截图](https://oss.macphpstudy.com/image/features/zig-1.webp)

## Zig 版本管理

从 **Zig → 版本管理器** 并行安装多个 Zig 版本并同时保留。FlyEnv 通过运行 `zig version` 检测每个安装，因此列表始终反映真实可用的工具链。

- **所有平台的静态构建：** 从在线列表选择 macOS、Linux 或 Windows 的 Zig 构建，解压到 FlyEnv 自有的 `zig/<version>` 目录。macOS 解压后会清除隔离属性，二进制文件无需 Gatekeeper 提示即可运行。
- **macOS 包管理器：** 除静态源外，还可通过 Homebrew（`zig` 和带版本的 `zig@<version>` 公式）或 MacPorts 安装。
- **自定义目录：** 指定包含自有 Zig 构建的目录，它会与托管版本一起显示。

![FlyEnv Zig 版本管理器及静态、Homebrew 和 MacPorts 安装源](https://oss.macphpstudy.com/image/features/zig-2.webp)

## 命令行版本切换

**服务**选项卡管理版本和路径而非进程：Zig 是编译器工具链，FlyEnv 不运行 Zig 守护进程。该选项卡实际显示的是已安装版本表。

- **终端版本切换：** 选择终端 `zig` 命令使用的已安装版本。FlyEnv 会在 `PATH` 中添加或删除该版本目录，并标记当前路径项是由 FlyEnv 还是其他工具创建；详情请参阅[系统 PATH 环境指南](/zh/guide/setup-system-path-environment)。
- **按版本设置别名和备注：** 为每个安装设置简短别名和可选备注，便于区分相似构建。
- **日常维护：** 表格显示安装路径，删除不再需要的版本只需一键完成。

## 项目级 Zig 工具链

在 **Zig → 项目**中注册项目文件夹并绑定特定 Zig 版本，不再依赖 PATH 中碰巧存在的版本。

- **按项目工具链：** 版本选择写入项目目录中的 `.flyenv` 文件，因此从 FlyEnv 启动的终端和编辑器会自动使用正确的 Zig。机制详情请参阅[项目级运行时环境指南](/zh/guide/project-level-runtime-environment)和[项目级运行时](/zh/features/per-project-runtimes)。
- **作为服务运行：** 可选择通过自定义启动命令直接从 FlyEnv 运行项目，并公开 `http://127.0.0.1:<port>` TCP 端口，环境变量可内联或从文件提供。侧边栏开关可一次启动或停止所有启用服务的 Zig 项目。

![FlyEnv Zig 项目列表及按项目绑定的 Zig 版本](https://oss.macphpstudy.com/image/features/zig-3.webp)

<FeatureRelatedLinks locale="zh" slug="zig" />

## 兼容性说明

FlyEnv 管理 Zig 版本安装、路径切换和项目工具链，但不会额外捆绑构建系统或包管理工具。安装源因平台而异：Homebrew 和 MacPorts 仅适用于 macOS，Windows 使用静态在线列表。支持的软件包请以[下载页面](/zh/download)和当前发行说明为准。
