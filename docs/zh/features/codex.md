---
layout: doc
titleTemplate: false
title: 'FlyEnv Codex：本地开发模块与配置指南'
description: '在 FlyEnv 中安装 Codex，可视化编辑 config.toml、恢复会话，并管理插件和 MCP 服务器。'
head:
  - - meta
    - name: description
      content: '在 FlyEnv 中安装 Codex，可视化编辑 config.toml、恢复会话，并管理插件和 MCP 服务器。'
  - - meta
    - property: og:title
      content: 'FlyEnv Codex：本地开发模块与配置指南'
  - - meta
    - property: og:description
      content: '在 FlyEnv 中安装 Codex，可视化编辑 config.toml、恢复会话，并管理插件和 MCP 服务器。'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/zh/features/codex
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/zh/features/codex
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Codex CLI 在 FlyEnv 中

Codex 是 OpenAI 的开源终端编程代理，可根据自然语言任务和修改要求在项目中运行并审查代码。FlyEnv 为 Codex CLI 提供管理控制台：通过官方设置脚本一键安装、使用可视化表单编辑 `config.toml`、在会话表中恢复终端历史对话，并管理插件和 MCP 服务器。关于在 FlyEnv 中驱动 AI 助手的整体用法，请参阅 [FlyEnv 如何与 AI 协作](/zh/guide/flyenv-work-with-ai)。

![FlyEnv Codex 模块概览截图](https://oss.macphpstudy.com/image/features/codex-1.webp)

## 安装

Codex 是命令行客户端，不是后台服务；FlyEnv 不会启动、停止或将其守护化，也没有需要监视的端口或进程。**服务**选项卡显示 Codex 是否已安装及机器上的版本。

- **官方安装脚本并代为运行：** 安装是一次性操作，在 FlyEnv 内置终端中运行厂商脚本：macOS/Linux 使用 `curl -fsSL https://chatgpt.com/codex/install.sh | sh`，Windows 使用 `irm https://chatgpt.com/codex/install.ps1 | iex`，可实时查看输出。安装过程会自动应用 FlyEnv 代理环境。
- **自动检测：** FlyEnv 在 `PATH` 和常见安装位置查找 `codex`（macOS/Linux 的 Homebrew 和标准 bin 目录，以及 npm/yarn/pnpm/bun 全局目录；Windows 的 npm 和 WinGet 目录），已有安装无需重装即可显示。
- **命令速查：** 页面提供可复制的常用命令参考，包括 `codex exec`、`codex review`、`codex login` 等。

## 配置

**配置文件**选项卡直接编辑 Codex 配置，修改后无需重启。

- **`config.toml` 可视化表单：** 通过表单调整 `~/.codex/config.toml`，无需手写 TOML；模型、`model_reasoning_effort`、`approval_policy` 和 `sandbox_mode` 均可编辑。
- **原始编辑器：** 完整 `config.toml` 源文件和 `auth.json` 都可作为纯文本编辑，以修改表单未覆盖的内容。
- **遵循自定义主目录：** 如果通过 `CODEX_HOME` 指定其他目录，FlyEnv 会从该位置读写配置。

![FlyEnv Codex config.toml 可视化配置表单截图](https://oss.macphpstudy.com/image/features/codex-2.webp)

## 会话

**会话**选项卡读取 `~/.codex/sessions/` 下按日期分段的 `.jsonl` 文件，并按工作目录分组，让每个项目的对话集中显示。

- **恢复上次进度：** 选择会话后，FlyEnv 在会话目录打开系统终端并运行 `codex resume <id>`；使用 `codex resume --last` 可直接恢复最近会话。
- **开始新对话：** 在同一表格中选择任意工作目录运行 `codex`。
- **清理：** 不再需要时从列表删除旧会话。

会话始终在外部系统终端窗口中运行，而不是 FlyEnv 内部；FlyEnv 准备命令和工作目录后，将对话交给你的终端。

![FlyEnv Codex 按项目分组的会话表截图](https://oss.macphpstudy.com/image/features/codex-3.webp)

## 插件

**插件**选项卡显示 Codex 报告的插件，通过 `codex plugin list --available --json` 列出可用和已安装条目。你可以在同一选项卡中通过内置终端安装插件并管理已安装插件。Codex 不提供可添加或移除的插件市场源，因此 FlyEnv 直接通过 CLI 管理插件。

![FlyEnv 管理 Codex 插件截图](https://oss.macphpstudy.com/image/features/codex-4.webp)

## MCP 服务器

**MCP**选项卡管理 Codex 可调用的模型上下文协议服务器，并提供列出、添加和移除操作。有关 MCP 如何接入本地 AI 编程环境，请参阅 [MCP 与 AI 工作区指南](/zh/guide/ai-coding-workspace-mcp)。

- **写入 `config.toml`：** 添加的 HTTP MCP 服务器保存在 `~/.codex/config.toml` 的 `mcp_servers` 下，所有设置集中于一个配置文件。
- **自动启用远程客户端：** 添加 HTTP 服务器还会打开 `features.rmcp_client = true`，让 Codex 能访问远程 MCP 端点。
- **一键注册 FlyEnv：** FlyEnv 自带的 [MCP Server](/zh/features/mcp-server) 可从客户端配置选项卡注册到此列表。

![FlyEnv 管理 Codex MCP 服务器截图](https://oss.macphpstudy.com/image/features/codex-5.webp)

<FeatureRelatedLinks locale="zh" slug="codex" />

## 兼容性说明

Codex 作为交互式 CLI 在你的终端中运行；FlyEnv 管理其安装、配置、会话历史、插件和 MCP 服务器，但对话本身始终在外部系统终端中进行，支持所有 FlyEnv 平台。安装使用厂商官方脚本，能否安装成功及安装内容取决于脚本和网络。检测覆盖 `PATH` 与常见安装位置，位置特殊的二进制文件可能需要先放入标准目录。Codex 不支持多版本管理，配置路径在设置 `CODEX_HOME` 时遵循该目录。FlyEnv 支持的平台请查看[下载页面](/zh/download)；其他 AI 编程 CLI 的管理方式相同，参见 [Claude Code](/zh/features/claude-code) 和 [Kimi](/zh/features/kimi)。
