---
layout: doc
titleTemplate: false
title: 'FlyEnv Erlang：本地开发模块与配置指南'
description: '通过 Homebrew、MacPorts 或静态包安装 Erlang/OTP，并为不同项目绑定所需版本。'
head:
  - - meta
    - name: description
      content: '通过 Homebrew、MacPorts 或静态包安装 Erlang/OTP，并为不同项目绑定所需版本。'
  - - meta
    - property: og:title
      content: 'FlyEnv Erlang：本地开发模块与配置指南'
  - - meta
    - property: og:description
      content: '通过 Homebrew、MacPorts 或静态包安装 Erlang/OTP，并为不同项目绑定所需版本。'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/zh/features/erlang
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/zh/features/erlang
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# 使用 FlyEnv 进行本地 Erlang 开发

Erlang/OTP 是一种面向高并发、容错系统的函数式编程语言和运行时平台，常用于电信基础设施、消息传递平台以及其他必须在高负载下保持可用的服务。FlyEnv 的 Erlang 模块将本地 Erlang/OTP 开发集中在一个界面中：安装多个 Erlang 版本，决定终端中的 `erl` 命令解析到哪个版本，并为每个项目绑定自己的运行时。模块包含三个标签页——Erlang 项目、服务和版本管理器——分别用于版本安装、路径控制和项目运行时管理。

![FlyEnv Erlang 模块概览截图](https://oss.macphpstudy.com/image/features/erlang-1.webp)

## Erlang 版本管理

从 **Erlang → 版本管理器** 并行安装 Erlang/OTP 版本，让它们同时可用。

- **macOS：**可从 Homebrew（`erlang` 公式和带版本号的 `erlang@<ver>` 公式）或 MacPorts 安装；FlyEnv 还会自动扫描 MacPorts 库目录中的现有 Erlang 安装。这能满足大多数本地需求，包括在项目旁运行基于 Erlang 的服务，例如 [RabbitMQ](/zh/features/rabbitmq)。
- **Linux：**可从 Homebrew 安装；MacPorts 仅适用于 macOS。macOS 或 Linux 没有静态软件包源。
- **Windows：**从在线静态软件包列表安装，每个软件包都包含 `bin/erl.exe` 可执行文件。
- **自定义目录：**将 FlyEnv 指向包含你自己 Erlang 构建的任意目录，该版本会与托管版本一起显示在列表中。
- **自动检测版本：**在 macOS 和 Linux 上，每个安装都会通过 `erl -version` 探测；在 Windows 上则从安装目录名称读取版本。

![FlyEnv Erlang 版本管理器及 Homebrew、MacPorts 来源截图](https://oss.macphpstudy.com/image/features/erlang-2.webp)

## 命令行版本切换

**服务**标签页实际上不包含服务进程——Erlang 在 FlyEnv 中没有守护进程。该标签页是已安装版本表，用于管理版本和路径。

- **终端版本切换：**选择终端 `erl` 命令要解析到的已安装版本。FlyEnv 随后更新你的 `PATH`，添加或移除该版本的 bin 目录，并标记当前路径条目是由 FlyEnv 还是其他工具设置。[系统 PATH 环境指南](/zh/guide/setup-system-path-environment)详细说明了路径编辑方式。
- **按版本设置别名和备注：**为每个安装分配简短别名和备注，便于在列表中区分相似构建。
- **日常维护：**表格会显示每个版本的安装路径，不再需要的版本可直接从表格中删除。

## 项目级 Erlang 运行时

在 **Erlang → 项目**中注册每个项目文件夹，并将其绑定到指定 Erlang 版本，而不是依赖当前 PATH 中碰巧存在的版本。

- **按项目配置运行时：**版本选择会存储在项目目录中的 `.flyenv` 文件内，因此从 FlyEnv 启动的终端和编辑器会自动使用正确的 Erlang。有关机制说明，请参阅[项目级运行时环境指南](/zh/guide/project-level-runtime-environment)和[按项目配置运行时特性](/zh/features/per-project-runtimes)。
- **作为服务运行：**可以选择直接从 FlyEnv 运行项目，并设置自定义启动命令、通过 `http://127.0.0.1:<port>` 链接公开的 TCP 端口、内联或从文件读取的环境变量，以及 macOS 和 Linux 上的 sudo 标志。侧边栏开关可以一次启动或停止所有启用了服务的 Erlang 项目。
- **打开内置工具：**从项目行跳转到系统终端，并加载项目环境。

![FlyEnv Erlang 项目列表及按项目 Erlang 版本绑定截图](https://oss.macphpstudy.com/image/features/erlang-3.webp)

<FeatureRelatedLinks locale="zh" slug="erlang" />

## 兼容性说明

FlyEnv 管理 Erlang 版本安装、路径切换和项目运行时；除了各 Erlang/OTP 构建本身提供的内容外，不额外捆绑构建工具或框架工具，模块也没有自己的配置文件编辑器或日志查看器。可用安装源因平台而异：macOS 使用 Homebrew 和 MacPorts，Linux 使用 Homebrew，Windows 使用静态构建。因此，支持的软件包请以[下载页面](/zh/download)和当前发行说明为准。
