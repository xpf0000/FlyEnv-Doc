---
layout: doc
titleTemplate: false
title: 'FlyEnv Kimi：本地开发模块与配置指南'
description: '在 FlyEnv 中安装 Kimi CLI，可视化编辑配置、恢复和导出会话、查看日志并管理 MCP 服务器。'
head:
  - - meta
    - name: description
      content: '在 FlyEnv 中安装 Kimi CLI，可视化编辑配置、恢复和导出会话、查看日志并管理 MCP 服务器。'
  - - meta
    - property: og:title
      content: 'FlyEnv Kimi：本地开发模块与配置指南'
  - - meta
    - property: og:description
      content: '在 FlyEnv 中安装 Kimi CLI，可视化编辑配置、恢复和导出会话、查看日志并管理 MCP 服务器。'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/zh/features/kimi
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/zh/features/kimi
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Kimi CLI 在 FlyEnv 中

Kimi 是 Moonshot AI 推出的命令行编程代理，由 Kimi 模型驱动。FlyEnv 为 Kimi 编程 CLI 提供专属管理页面：从服务卡片安装，通过可视化表单编辑 `config.toml`，恢复或导出历史会话，在应用内直接读取 Kimi 的日志文件，以及管理 HTTP/SSE MCP 服务器。它是 FlyEnv 管理的多个 AI 编程客户端之一，与 [Claude Code](/zh/features/claude-code) 和 [OpenCode](/zh/features/opencode) 并列；[AI 助手工作流指南](/zh/guide/flyenv-work-with-ai)介绍了这些模块如何融入日常开发。

![FlyEnv Kimi 模块，包含服务、配置文件、日志、会话和 MCP 选项卡截图](https://oss.macphpstudy.com/image/features/kimi-1.webp)

## 安装

Kimi 不是后台服务，不存在需要启动或停止的守护进程，也没有版本管理器。该模块会在你的 PATH 和常见安装位置检测已有安装，并在服务卡片中显示检测到的版本。

- **一键安装：**FlyEnv 在内置终端中运行官方安装脚本，你可以实时查看输出；macOS 和 Linux 使用 `curl -fsSL https://code.kimi.com/kimi-code/install.sh | bash`，Windows 使用 `irm https://code.kimi.com/kimi-code/install.ps1 | iex`。
- **命令速查：**服务卡片提供可复制的快捷命令，例如 `kimi --plan`、`kimi --yolo`、`kimi vis` 和 `kimi provider list/add/remove`，常用调用始终只需单击即可执行。
- **从 FlyEnv 启动：**会话会在系统外部终端中打开，FlyEnv 将 `kimi`、`kimi --session "<id>"` 或 `kimi --continue` 交给操作系统终端，而不是在自身托管聊天。

## 配置

**配置文件**选项卡编辑 Kimi 配置主目录（`~/.kimi-code/`，可通过 `KIMI_CODE_HOME` 更改）下的文件：`config.toml`、`tui.toml` 和 `mcp.json`。

- **`config.toml` 可视化表单：**通过表单字段调整最重要的默认值，包括 `default_permission_mode`、`default_thinking`、`default_plan_mode` 和 `telemetry`，无需手动编辑 TOML。
- **纯文本编辑器：**每个文件也可以在完整源代码编辑器中打开，以编辑表单未涵盖的内容。

![FlyEnv 使用可视化表单编辑 Kimi config.toml 默认值截图](https://oss.macphpstudy.com/image/features/kimi-2.webp)

## 会话

**会话**选项卡读取 `~/.kimi-code/sessions/` 中的会话存储，并列出每个记录的对话，按工作目录分组。

- **从上次位置继续：**选择会话后，FlyEnv 会在系统外部终端中使用 `kimi --session "<id>"` 打开；`kimi --continue` 可直接回到最近的会话。
- **导出：**Kimi 是 FlyEnv 中唯一内置导出操作的 AI 客户端；它会在内置终端中运行 `kimi export "<id>"`，便于保存或分享会话记录。
- **整理会话：**直接从表格删除不再需要的会话。

![FlyEnv Kimi 会话选项卡按工作目录分组并提供恢复、导出操作截图](https://oss.macphpstudy.com/image/features/kimi-3.webp)

## 日志

Kimi 是 FlyEnv 中唯一提供专用**日志**选项卡的 AI 编程 CLI 模块。它会将 `~/.kimi-code/logs/` 下的每个 `*.log` 文件收集到共享日志查看器中，因此 CLI 出现异常时，你可以直接在此读取日志输出，无需在配置目录中查找。

## MCP 服务器

**MCP**选项卡列出为 Kimi 注册的服务器，并允许添加或移除条目；[MCP 与 AI 工作区指南](/zh/guide/ai-coding-workspace-mcp)介绍了 MCP 服务器如何扩展 AI 编程工具。Kimi 仅接受 HTTP/SSE MCP 服务器，stdio 服务器会按设计被拒绝；FlyEnv 会将新增内容写入配置主目录中的 `mcp.json`，CLI 读取的也是同一文件。FlyEnv 自带的 [MCP Server](/zh/features/mcp-server) 可从其客户端配置选项卡一键在此注册自身。

![FlyEnv 管理 Kimi 的 HTTP/SSE MCP 服务器截图](https://oss.macphpstudy.com/image/features/kimi-4.webp)

<FeatureRelatedLinks locale="zh" slug="kimi" />

## 兼容性说明

Kimi 模块管理 CLI 的文件和配置，但不会将 Kimi 作为后台服务运行；交互式会话始终在系统自己的终端中进行，而不是在 FlyEnv 内部。安装通过供应商官方脚本完成，因此具体平台的可用性取决于脚本支持范围；请查看[下载页面](/zh/download)了解 FlyEnv 覆盖的平台。由于 Kimi 本身不读取 stdio MCP 配置文件，MCP 支持仅限于 HTTP 和 SSE 传输。
