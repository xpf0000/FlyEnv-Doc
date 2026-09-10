---
layout: doc
titleTemplate: false
title: 'FlyEnv Hermes Agent：本地开发模块与配置指南'
description: '在 FlyEnv 中安装 Hermes、管理 Gateway、从多个来源浏览和安装技能，并维护会话。'
head:
  - - meta
    - name: description
      content: '在 FlyEnv 中安装 Hermes、管理 Gateway、从多个来源浏览和安装技能，并维护会话。'
  - - meta
    - property: og:title
      content: 'FlyEnv Hermes Agent：本地开发模块与配置指南'
  - - meta
    - property: og:description
      content: '在 FlyEnv 中安装 Hermes、管理 Gateway、从多个来源浏览和安装技能，并维护会话。'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/zh/features/hermes-agent
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/zh/features/hermes-agent
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# 飞Env中的 Hermes Agent

Hermes 是 Nous Research 开源的自主 AI 代理：一个由终端驱动、拥有独立网关进程、可扩展技能系统和持久会话的代理。FlyEnv 通过专属模块封装 Hermes agent CLI：使用官方脚本一次性安装，启动/停止 Hermes 网关，直接编辑配置文件，管理技能并跨多个来源在线浏览，以及查看和清理会话。该模块包含五个选项卡：服务、配置文件、日志、技能和会话。关于 FlyEnv 如何融入 AI 辅助工作流，请参阅 [FlyEnv 与 AI 协作](/zh/guide/flyenv-work-with-ai)。你还可以将 Hermes 与 [Ollama](/zh/features/ollama) 等本地模型运行时配合使用，正如[本地离线 AI 代理指南](/zh/guide/build-local-offline-ai-agent)所示，无需云端模型即可运行完整堆栈。

![FlyEnv Hermes 模块概览，包含服务、配置文件、日志、技能和会话选项卡截图](https://oss.macphpstudy.com/image/features/hermes-agent-1.webp)

## 安装

Hermes 通过供应商脚本安装，该脚本在 FlyEnv 内置终端中执行，你可以实时看到输出。

- **每个平台一个命令：**在 macOS 和 Linux 上，FlyEnv 运行 `curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash`；在 Windows 上运行对应的 PowerShell 命令 `irm .../install.ps1 | iex`。
- **没有版本管理器：**Hermes 没有在线版本列表，也不支持并行版本切换。安装完成后，服务选项卡会显示检测到的版本。
- **支持的平台：**Hermes 可安装在 macOS、Windows 和 Linux 上，这些也是 FlyEnv 在[下载页面](/zh/download)提供的平台。

## 网关管理

Hermes 模块的侧边栏开关以及服务选项卡中的控制按钮，都会直接通过 CLI 驱动 Hermes 网关。

- **启动和停止：**切换开关时，FlyEnv 会运行 `hermes gateway start` 和 `hermes gateway stop`。
- **实时状态：**服务选项卡显示已安装版本和网关状态，状态通过解析 `hermes gateway status` 的输出获得。
- **命令面板：**服务选项卡还提供按类别组织的命令面板，涵盖聊天/会话、网关、配置、模型认证、技能/插件、记忆/工具、MCP、系统/日志、备份/更新、仪表板/TUI 和配置档案等 12 个类别、约 78 条 Hermes 命令，每条命令都在内置终端中执行。MCP 类别可与 FlyEnv 自带的 [MCP Server](/zh/features/mcp-server) 配合使用，让支持 MCP 的代理访问你的本地服务。

![FlyEnv Hermes 服务选项卡，显示版本、网关状态和分类命令面板截图](https://oss.macphpstudy.com/image/features/hermes-agent-2.webp)

## 配置

配置文件选项卡会从你的 home 目录打开 Hermes 配置文件，并在纯文本编辑器中按文件类型提供语法高亮。

- **`~/.hermes/config.yaml`：**Hermes 主配置，以 YAML 格式编辑。
- **`~/.hermes/.env`：**代理使用的环境变量，以 env 文件格式编辑。
- **`~/.hermes/SOUL.md`：**代理人格文件，以 Markdown 格式编辑。

![FlyEnv 在配置编辑器中编辑 ~/.hermes/config.yaml 截图](https://oss.macphpstudy.com/image/features/hermes-agent-3.webp)

## 技能

技能选项卡同时管理代理的本地技能和在线技能。

- **已安装技能：**通过开关启用或禁用技能；禁用操作会将条目写入 `config.yaml` 的 `skills.disabled`，还可以从同一列表更新、卸载或重置技能。
- **检查和定位：**检查对话框显示技能详情，单击即可在文件管理器中打开技能目录。
- **在线浏览：**在六个来源中在线浏览技能，支持分页和关键字搜索；来源包括官方来源、skills.sh、well-known、GitHub、ClawHub 和 LobeHub，可选择安装所需技能。

![FlyEnv 跨多个来源在线浏览 Hermes 技能并进行搜索截图](https://oss.macphpstudy.com/image/features/hermes-agent-4.webp)

## 会话

会话选项卡列出 `hermes sessions list` 报告的会话，并在 FlyEnv 内解析为表格。删除会话时会在内置终端中运行相应命令，因此操作及其结果始终可见。

![FlyEnv Hermes 会话选项卡，列出会话及删除操作截图](https://oss.macphpstudy.com/image/features/hermes-agent-5.webp)

## 日志

日志选项卡会直接读取 `~/.hermes/logs/` 下的文件，并为每个 `*.log` 文件提供查看器。如果磁盘上没有日志文件，FlyEnv 会改为运行 `hermes logs <type> -n <lines>`，从 CLI 获取最近的输出。

<FeatureRelatedLinks locale="zh" slug="hermes-agent" />

## 兼容性说明

Hermes 不是由 FlyEnv 管理的后台服务：该模块不会注册守护进程或托盘进程，侧边栏开关仅通过 `hermes` CLI 控制网关。安装是在内置终端中一次性运行供应商官方脚本，macOS 和 Linux 使用 shell 脚本，Windows 使用 PowerShell；FlyEnv 不提供版本列表或多版本管理。配置、日志和技能都位于 home 目录下的 `~/.hermes`，由代理自身负责；FlyEnv 只编辑和显示这些文件，不定义其架构。当前提供的平台和版本以[下载页面](/zh/download)及应用本身显示为准。FlyEnv 也以相同方式管理另一个基于网关的个人助理，请参阅 [OpenClaw](/zh/features/openclaw) 模块。
