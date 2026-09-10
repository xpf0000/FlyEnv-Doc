---
layout: doc
titleTemplate: false
title: 'FlyEnv OpenClaw：本地开发模块与配置指南'
description: '在 FlyEnv 中安装 OpenClaw，将 Gateway 作为系统服务管理，并使用命令面板执行常用操作。'
head:
  - - meta
    - name: description
      content: '在 FlyEnv 中安装 OpenClaw，将 Gateway 作为系统服务管理，并使用命令面板执行常用操作。'
  - - meta
    - property: og:title
      content: 'FlyEnv OpenClaw：本地开发模块与配置指南'
  - - meta
    - property: og:description
      content: '在 FlyEnv 中安装 OpenClaw，将 Gateway 作为系统服务管理，并使用命令面板执行常用操作。'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/zh/features/openclaw
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/zh/features/openclaw
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# FlyEnv 中的 OpenClaw

OpenClaw 是一个开源个人 AI 助手，可直接运行在你的电脑上。它将 WhatsApp、Telegram 等聊天渠道连接到编程代理，让你可以随时向助手发送消息。FlyEnv 为 OpenClaw CLI 提供简洁的控制面板：通过官方脚本安装 OpenClaw，将网关注册并管理为真正的操作系统服务，并把约 110 个 CLI 子命令按类别展示在内置终端中。该模块保持轻量，FlyEnv 直接调用你手动使用的同一个 `openclaw` 二进制文件。需要按任务操作时，请参阅 [OpenClaw 指南](/zh/guide/openclaw)；想了解 FlyEnv 中 AI 助手的整体用法，请参阅 [在 FlyEnv 中使用 AI](/zh/guide/flyenv-work-with-ai)。

![FlyEnv OpenClaw 模块的服务选项卡和网关状态](https://oss.macphpstudy.com/image/features/openclaw-1.webp)

## 安装

OpenClaw 通过 FlyEnv 内置终端中的官方安装脚本安装，你可以直接看到安装程序的真实输出，而不是只看进度条。

- **仅使用官方脚本：** 在 macOS 和 Linux 上运行 `curl -fsSL https://openclaw.ai/install.sh | bash`；Windows 上运行对应的 PowerShell 安装命令（`iwr ... install.ps1 | iex`）。FlyEnv 不会自行下载二进制文件。
- **没有版本管理器：** OpenClaw 模块不提供版本列表或多版本切换，已安装版本直接读取 `openclaw --version`。
- **侧边栏网关开关：** OpenClaw 侧边栏条目带有网关开关。只有 CLI 和网关都安装后开关才会启用，避免显示机器无法执行的操作。

## 网关管理

网关是 OpenClaw 中唯一长期运行的部分。FlyEnv 将它注册到操作系统，而不是自行守护一个进程。

- **注册为操作系统服务：** 安装网关时运行 `openclaw gateway install --force`，然后注册为系统服务：macOS 使用 LaunchAgent（通过 `launchctl bootstrap` 管理 `ai.openclaw.gateway.plist`），Linux 使用用户级 systemd 单元（通过 `systemctl --user enable/start` 管理 `openclaw-gateway.service`）。因此即使 FlyEnv 未运行，网关也能在重启后继续工作。
- **在面板中启动、停止和查看状态：** 侧边栏开关和服务选项卡会执行 `openclaw gateway start/stop`；如果 CLI 无法正常停止，还会回退到终止进程。
- **实时状态和面板链接：** FlyEnv 解析 `openclaw gateway status` 的输出，显示当前状态并提取面板 URL，然后在外部浏览器中打开。

![FlyEnv OpenClaw 网关控制和服务状态](https://oss.macphpstudy.com/image/features/openclaw-2.webp)

## 命令面板

服务选项卡包含按类别组织的命令面板，覆盖约 110 个 OpenClaw 命令和 13 个类别：基本信息、配置、网关、代理、浏览器、渠道、节点与设备、模型、技能、系统、会话、备份与更新以及插件。模型类别可与 [Ollama](/zh/features/ollama) 等本地模型运行时自然配合；如果希望网关无需云端模型即可回答，请参阅[本地离线 AI 代理指南](/zh/guide/build-local-offline-ai-agent)。

- **在内置终端运行：** 每个命令都在 FlyEnv 的内置 xterm 中执行，完整 CLI 输出始终可见并可滚动查看。
- **预填参数：** 需要参数的命令会自动写入终端，你补充参数后即可运行。
- **直接映射 CLI：** 面板与真实 OpenClaw CLI 一一对应，不会重新实现命令；点击的命令就是你可以手动输入的命令。

![FlyEnv 中按类别组织的 OpenClaw 命令面板](https://oss.macphpstudy.com/image/features/openclaw-3.webp)

## 配置

**配置文件**选项卡直接编辑 OpenClaw 自己的文件，不提供设置表单，只提供原始编辑器。

- **`~/.openclaw/openclaw.json`：** OpenClaw 的主配置文件，可直接编辑源文本。
- **macOS 网关服务文件：** 生成的 `ai.openclaw.gateway.plist` 也可在此直接编辑。
- 修改会写回 OpenClaw CLI 实际读取的同一个文件，因此在 FlyEnv 外手动修改不会与另一份副本冲突。

![FlyEnv OpenClaw 配置文件编辑器](https://oss.macphpstudy.com/image/features/openclaw-4.webp)

<FeatureRelatedLinks locale="zh" slug="openclaw" />

## 兼容性说明

OpenClaw 模块只是 CLI 的轻量封装，不是独立的后台服务模块，也没有托盘入口。唯一持续运行的进程是网关；注册后由操作系统的服务管理器负责。macOS 依赖 `launchctl`，Linux 依赖用户级 systemd；Windows 没有操作系统服务注册步骤，网关完全通过 `openclaw gateway start/stop` 控制。FlyEnv 不提供 OpenClaw 日志查看器，运行时信息来自 `openclaw gateway status` 和 CLI 自身输出；模块也没有版本管理器，官方安装脚本提供什么版本就运行什么版本。当前支持情况请查看[下载页面](/zh/download)。FlyEnv 也用相同方式管理另一个基于网关的个人助手，请参阅 [Hermes Agent](/zh/features/hermes-agent) 模块。
