---
layout: doc
titleTemplate: false
title: 'FlyEnv Claude Code：本地开发模块与配置指南'
description: '在 FlyEnv 中安装 Claude Code，可视化编辑设置、恢复会话，并管理插件和 MCP 服务器。'
head:
  - - meta
    - name: description
      content: '在 FlyEnv 中安装 Claude Code，可视化编辑设置、恢复会话，并管理插件和 MCP 服务器。'
  - - meta
    - property: og:title
      content: 'FlyEnv Claude Code：本地开发模块与配置指南'
  - - meta
    - property: og:description
      content: '在 FlyEnv 中安装 Claude Code，可视化编辑设置、恢复会话，并管理插件和 MCP 服务器。'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/zh/features/claude-code
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/zh/features/claude-code
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Claude 代码在FlyEnv中

Claude Code 是 Anthropic 推出的命令行 AI 编程代理：它会读取代码库、编辑文件并在终端中执行命令来完成开发任务。FlyEnv 为 Claude Code 提供图形化控制中心：通过官方脚本一键安装，在可视化编辑器中修改 `settings.json`，浏览并恢复历史会话，管理插件和市场，以及配置 MCP 服务器，全部集中在侧边栏的 **Claude Code** 模块中。要了解 AI 辅助工作流，请参阅 [FlyEnv 与 AI 工具协作](/zh/guide/flyenv-work-with-ai)。

![FlyEnv Claude Code 模块的服务选项卡和安装终端截图](https://oss.macphpstudy.com/image/features/claude-code-1.webp)

## 安装

Claude Code 是命令行客户端，不是后台服务：没有需要启动或停止的守护进程，模块也不提供版本管理器。FlyEnv 将安装作为一次性设置任务处理。

- **官方安装脚本：** 点击安装后，FlyEnv 会在内置终端中运行厂商脚本：macOS 和 Linux 使用 `curl -fsSL https://claude.ai/install.sh | bash`，Windows 使用 `irm https://claude.ai/install.ps1 | iex`，你可以实时查看安装输出。FlyEnv 会自动将代理环境应用于安装过程。
- **自动检测：** 如果已安装 Claude Code，FlyEnv 会扫描 `PATH` 及常见安装位置——macOS 和 Linux 的 `/usr/local/bin`、`/opt/homebrew/bin`、`~/.local/bin` 以及 npm、yarn、pnpm、bun、volta 全局 bin 目录；Windows 的 `%APPDATA%\npm`、WinGet Links 和 `~/.local/bin`——并显示检测到的版本。
- **命令速查：** 服务选项卡提供 `claude doctor`、`claude update` 和 `claude setup-token` 等常用命令，每条都有复制按钮。

## 配置

**配置文件**选项卡可直接编辑 Claude Code 的设置，同时提供可视化表单和完整的原始编辑器。

- **常用设置表单：** 通过表单控件调整 `settings.json` 中常用的主题、模型、`includeCoAuthoredBy` 和 `cleanupPeriodDays` 字段，无需手动编辑 JSON。
- **原始 JSON 编辑器：** 切换到源文件视图编辑表单未覆盖的内容，修改会写回真实文件。
- **集中访问所有配置：** FlyEnv 可在同一位置打开 `~/.claude/settings.json`、`settings.local.json`、`plugins/known_marketplaces.json` 和 `~/.claude.json`。如果通过 `CLAUDE_CONFIG_DIR` 更改 Claude Code 主目录，FlyEnv 会跟随该路径。

![FlyEnv Claude Code settings.json 可视化表单及主题、模型字段截图](https://oss.macphpstudy.com/image/features/claude-code-2.webp)

## 会话

**会话**选项卡从 `~/.claude/projects` 目录读取 Claude Code 历史记录，并解析每个项目的 `.jsonl` 转录文件。

- **按项目分组：** 会话按工作目录组织，同一代码库的对话会归在一起。
- **一键恢复：** 选择会话后，FlyEnv 在项目目录打开外部系统终端并运行 `claude --resume <id>`；最近会话使用 `claude --continue`。会话始终在系统终端中运行，不在 FlyEnv 面板内运行。
- **清理：** 直接从列表删除不再需要的会话。

![FlyEnv 按工作目录分组的会话表及恢复操作截图](https://oss.macphpstudy.com/image/features/claude-code-3.webp)

## 插件

**插件**选项卡基于 Claude Code 自带插件系统，提供完整的插件和市场管理。

- **可用和已安装：** FlyEnv 查询 `claude plugin list --available --json`，同时显示各市场提供的插件和你已安装的插件。
- **安装并查看真实输出：** 插件安装在内置终端中运行，下载和设置进度清晰可见。
- **生命周期操作：** 无需命令行即可启用、禁用或卸载已安装插件。
- **市场管理：** 添加或移除插件市场；注册列表保存在 Claude Code 主目录下的 `known_marketplaces.json`。

![FlyEnv 插件选项卡列出市场插件及安装、启用操作截图](https://oss.macphpstudy.com/image/features/claude-code-4.webp)

## MCP 服务器

**MCP**选项卡管理 `~/.claude.json` 中 `mcpServers` 部分保存的模型上下文协议服务器，详见 [MCP 与 AI 工作区指南](/zh/guide/ai-coding-workspace-mcp)。

- **列出和移除：** 查看已配置的 MCP 服务器，删除不再使用的条目。
- **HTTP 和 SSE 服务器：** 远程服务器通过直接写入 `~/.claude.json` 添加。
- **Stdio 服务器：** 基于本地命令的服务器通过 `claude mcp add` 注册，创建方式与 CLI 要求完全一致。
- **一键注册 FlyEnv：** FlyEnv 自带的 [MCP Server](/zh/features/mcp-server) 可从客户端配置选项卡注册到此列表。

![FlyEnv MCP 服务器列表及添加、移除控制截图](https://oss.macphpstudy.com/image/features/claude-code-5.webp)

<FeatureRelatedLinks locale="zh" slug="claude-code" />

## 兼容性说明

FlyEnv 中的 Claude Code 是 CLI 的管理层，不是托管运行时。该模块不是后台服务，FlyEnv 不会代你运行 Claude Code；交互会话始终在以项目目录为工作目录的外部系统终端中启动。安装通过内置终端运行 Anthropic 官方脚本，不提供多版本管理。会话历史读取自 `~/.claude/projects` 中的 JSONL 转录，因此仅显示 Claude Code 自身记录的会话；配置修改作用于 `~/.claude` 下的标准文件（或 `CLAUDE_CONFIG_DIR` 指定的目录）。平台支持取决于当前 FlyEnv 构建，请查看[下载页面](/zh/download)。FlyEnv 也以相同方式管理其他 AI 编程 CLI，参见 [Codex](/zh/features/codex)、[OpenCode](/zh/features/opencode) 和 [Kimi](/zh/features/kimi)。
