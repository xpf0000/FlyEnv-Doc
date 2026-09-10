---
layout: doc
titleTemplate: false
title: 'FlyEnv CLI 与终端：本地开发模块与配置指南'
description: '将 FlyEnv 接入常用终端，通过 Shell Hook 加载项目环境，并使用外部或内嵌终端执行任务。'
head:
  - - meta
    - name: description
      content: '将 FlyEnv 接入常用终端，通过 Shell Hook 加载项目环境，并使用外部或内嵌终端执行任务。'
  - - meta
    - property: og:title
      content: 'FlyEnv CLI 与终端：本地开发模块与配置指南'
  - - meta
    - property: og:description
      content: '将 FlyEnv 接入常用终端，通过 Shell Hook 加载项目环境，并使用外部或内嵌终端执行任务。'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/zh/features/cli-terminal
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/zh/features/cli-terminal
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# 终端集成在 FlyEnv 中

FlyEnv 不附带独立终端应用，而是连接你已在使用的终端。Shell 钩子会在你 `cd` 到项目时加载正确的项目环境；服务和项目可一键在真实终端窗口中启动；长时间安装任务会在应用内嵌的 xterm 终端中运行；工具页面还提供环境变量文件和 PATH 条目的编辑工具。

![FlyEnv 项目列表及绑定的运行时版本和终端操作截图](https://oss.macphpstudy.com/image/flyenv-version-switch.webp)

## Shell hook 和 PATH 集成

FlyEnv 安装轻量 Shell 钩子，让日常终端自动获取项目环境。macOS 和 Linux 从 `~/.zshrc` 或 `~/.bashrc` 加载辅助脚本 `flyenv.sh`；Windows 则接入 PowerShell 配置文件，同时支持经典 Windows PowerShell 和跨平台的 `pwsh`。

- **按目录激活：** 钩子响应目录变化。进入 FlyEnv 管理的项目文件夹时，会加载项目的 `.flyenv` 文件；FlyEnv 同步白名单之外的目录不会受到影响。
- **`.flyenv` 环境文件：** 每个注册项目的根目录都有 `.flyenv` 文件，将绑定运行时的 bin 目录置于 `PATH` 前面；macOS/Linux 使用 `export PATH="..."`，Windows 使用 `$env:PATH = ...`。每行带有项目 ID 标签，更改绑定时 FlyEnv 可幂等地重写文件。创建绑定的方法请参阅[项目级运行时](/zh/features/per-project-runtimes)。
- **按版本控制路径：** 在语言模块版本表中选择占用 `PATH` 的已安装版本，表格会标记当前条目由 FlyEnv 还是其他工具设置。
- **分步设置路径：** [系统 PATH 环境指南](/zh/guide/setup-system-path-environment)提供完整流程和截图。

![FlyEnv 版本表及 PATH 开关，显示由 FlyEnv 设置的条目截图](https://oss.macphpstudy.com/image/features/cli-terminal-2.webp)

## 在终端中打开项目

有时进程需要在真实终端窗口中运行，以便查看输出、响应提示，或在 FlyEnv 关闭后继续运行。项目和服务都可以这样启动。

- **项目：** 在语言项目中启用“在终端中运行”，其运行命令或文件会在系统终端窗口打开，以项目目录为工作目录并应用项目环境。
- **平台原生启动：** macOS 通过 AppleScript 驱动 Terminal.app，Linux 通过内置辅助脚本启动，Windows 创建运行内联脚本的 PowerShell 窗口；操作相同，但实现遵循平台。
- **自定义模块和提权启动：** [自定义服务模块](/zh/features/user-modules)同样支持终端启动；需要 sudo 的项目可回退为在终端中打开命令，让系统密码提示正常工作。

![FlyEnv 的“在终端中打开”功能截图](https://oss.macphpstudy.com/image/features/cli-terminal-3.webp)

## 嵌入式 xterm 终端

对于一次性、交互式任务，FlyEnv 在自己的窗口中嵌入基于 xterm 的终端会话，你无需离开应用即可看到真实命令输出。

- **一键安装：** 运行时和工具通过官方安装程序在内置终端中初始化，例如 Rust 使用 rustup、Go 使用 GVM，macOS/Linux 上的 Podman 使用 Homebrew，AI 命令行工具使用厂商脚本，并自动注入 FlyEnv 代理环境。
- **软件包操作：** 构建 [PostgreSQL](/zh/features/postgresql) 的 pgvector 扩展、拉取和运行 [Ollama](/zh/features/ollama) 模型，或通过 npm 安装 [n8n](/zh/features/n8n)，真实输出都会流入内嵌查看器。
- **命令面板：** [OpenClaw](/zh/features/openclaw) 和 [Hermes](/zh/features/hermes-agent) 等网关模块提供分类命令面板，条目在内置终端执行，并预填所需参数。
- **Podman 操作：** 容器 exec 会话以及镜像或容器操作会在专用内置终端对话框中打开。

## 系统环境变量工具页

工具页面包含系统环境变量工具，界面遵循平台差异，让通常隐藏在系统对话框或分散 Shell 文件中的设置，能够与运行时在同一窗口访问。

- **Windows——路径编辑器：** 表格列出 `PATH` 中的目录，可添加、编辑、删除和调整顺序后保存；与上文版本表开关配合使用。需要修改更多设置时，快捷按钮可打开操作系统自带环境变量对话框。
- **macOS 和 Linux——直接编辑 Shell 文件：** 工具列出实际定义环境变量的启动文件，如 `~/.zshrc`、`~/.bashrc`、`/etc/paths` 及相关文件，并可在编辑器中打开或在文件管理器中显示。
- **与 Shell 钩子配合：** 此处编辑的文件和 PATH 条目提供基础环境层，`.flyenv` 文件和 Shell 钩子在其上处理项目级环境。

![FlyEnv 工具页面中的系统环境变量编辑器截图](https://oss.macphpstudy.com/image/features/cli-terminal-4.webp)

<FeatureRelatedLinks locale="zh" slug="cli-terminal" />

## 兼容性说明

FlyEnv 的终端集成是一组分布在应用各处的能力，而不是独立终端模块。Shell 钩子通过 macOS/Linux 的 Shell rc 文件接入 zsh 和 bash；Windows 接入 Windows PowerShell 和 `pwsh` 配置文件，其他 Shell 不会接入。自动加载 `.flyenv` 仅适用于 FlyEnv 注册并列入白名单的项目目录。“在终端中打开”使用平台自带终端——macOS 的 Terminal.app、Linux 的终端辅助脚本、Windows 的 PowerShell——外观和行为遵循操作系统。嵌入式 xterm 会话仅用于上述安装、运行和 exec 任务，不是通用 Shell。可用功能请以[下载页面](/zh/download)和应用在你平台上的实际行为为准。
