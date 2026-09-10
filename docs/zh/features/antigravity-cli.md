---
layout: doc
titleTemplate: false
title: 'FlyEnv Antigravity CLI：本地开发模块与配置指南'
description: '在 FlyEnv 中安装 Antigravity CLI，可视化编辑设置、恢复会话，并以 Markdown 预览浏览技能。'
head:
  - - meta
    - name: description
      content: '在 FlyEnv 中安装 Antigravity CLI，可视化编辑设置、恢复会话，并以 Markdown 预览浏览技能。'
  - - meta
    - property: og:title
      content: 'FlyEnv Antigravity CLI：本地开发模块与配置指南'
  - - meta
    - property: og:description
      content: '在 FlyEnv 中安装 Antigravity CLI，可视化编辑设置、恢复会话，并以 Markdown 预览浏览技能。'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/zh/features/antigravity-cli
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/zh/features/antigravity-cli
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Antigravity CLI 在 FlyEnv 中

Antigravity CLI（`agy`）是 Google 的终端式 AI 编程代理，也是 Antigravity IDE 的命令行伴侣。FlyEnv 为它提供完整的控制面板：通过内置终端安装 `agy` 二进制文件，在可视化表单中调整设置，从按工作目录分组的会话列表中恢复历史对话，并浏览用户技能和内置技能的 Markdown 预览。该模块属于 FlyEnv 的 AI 工具集，详见 [FlyEnv 如何与 AI 编程工具协作](/zh/guide/flyenv-work-with-ai)。

![FlyEnv 模块概览](https://oss.macphpstudy.com/image/features/antigravity-cli-1.webp)

## 安装

Antigravity CLI 不是后台服务，FlyEnv 也不随附其二进制文件。安装是“服务”卡片上的一次性操作：FlyEnv 会打开内置终端并运行厂商官方安装脚本——macOS 和 Linux 使用 `curl -fsSL https://antigravity.google/cli/install.sh | bash`，Windows 使用对应的 PowerShell 脚本，同时应用 FlyEnv 代理环境以确保在代理网络下顺利下载。

- **自动检测：** FlyEnv 会在你的 `PATH` 及常见安装目录中查找已有的 `agy` 二进制文件（macOS/Linux 的 `/usr/local/bin`、`/opt/homebrew/bin`、`~/.local/bin` 以及 npm/yarn/pnpm/bun 全局 bin 目录；Windows 的 `%APPDATA%\npm`、WinGet Links 和 `~/.local/bin`），然后在服务卡片上显示检测到的版本。
- **命令速查：** 服务卡片提供常用 `agy` 命令的复制按钮，例如 `agy plugin list`、`agy plugin import`、`agy install` 和 `agy models`。

## 配置

**配置文件**标签页编辑 Antigravity CLI 实际读取的文件。主设置文件位于 `~/.gemini/antigravity-cli/settings.json`，MCP 服务器单独保存在 `~/.gemini/config/mcp_config.json`。

- **常用设置的可视化表单：** 通过表单字段调整模型、终端沙箱开关和工具权限级别，无需手动编辑 JSON。
- **原始编辑器：** 切换到完整文件视图，编辑表单未公开的任意键值。
- **共享 Gemini 配置根目录：** Antigravity CLI 从 Gemini CLI 配置目录读取设置；如果通过 `GEMINI_HOME` 环境变量迁移该目录，FlyEnv 也会跟随该覆盖路径。

![版本管理器界面](https://oss.macphpstudy.com/image/features/antigravity-cli-2.webp)

## 会话

**会话**标签页列出历史对话，无需记住 ID 即可返回之前的会话。

- **按工作目录分组：** 对话按运行所在文件夹组织，每个条目显示 ID 和最后修改时间。由于 Antigravity 以 protobuf 存储消息负载，标题和首条提示词只能尽力恢复。
- **在自己的终端中恢复：** 运行或恢复会话会打开系统终端（不是 FlyEnv 内的面板），并在正确目录中预填 `agy --conversation <id>`；继续最近会话则使用 `agy --continue`。
- **清理删除：** 直接从列表中删除过时对话。

![服务与配置界面](https://oss.macphpstudy.com/image/features/antigravity-cli-3.webp)

## 技能

**技能**标签页直接浏览磁盘上的技能文件夹。与 [GitHub Copilot CLI](/zh/features/github-copilot-cli) 模块不同，后者通过 CLI 查询技能列表，而 Antigravity 的列表直接读取文件系统。

- **用户技能和内置技能：** 你在 `antigravity-cli/skills` 中的技能会与 `antigravity-cli/builtin/skills` 中的内置技能一起列出，后者带有“内置”标签。
- **Markdown 预览抽屉：** 打开技能后，会在抽屉中以代码、预览和分栏视图渲染 Markdown，便于在使用或编辑前阅读说明。
- **打开技能目录：** 需要直接添加或编辑文件时，点击按钮即可在文件管理器中打开技能文件夹。

![站点与工具界面](https://oss.macphpstudy.com/image/features/antigravity-cli-4.webp)

## MCP 服务器

**MCP**标签页管理 Antigravity CLI 连接的模型上下文协议服务器，配置读写于 `~/.gemini/config/mcp_config.json`。[MCP 与 AI 工作空间指南](/zh/guide/ai-coding-workspace-mcp)介绍了 MCP 服务器在 AI 编程工作空间中的作用。你可以查看当前服务器、添加新服务器或删除不再需要的条目，无需手动编辑 JSON。FlyEnv 自带的 [MCP Server](/zh/features/mcp-server) 可从其 Client Config 标签页一键注册到此列表。

![项目列表](https://oss.macphpstudy.com/image/features/antigravity-cli-5.webp)

<FeatureRelatedLinks locale="zh" slug="antigravity-cli" />

## 兼容性说明

FlyEnv 中的 Antigravity CLI 是 `agy` 命令行工具的桌面伴侣，支持 macOS、Windows 和 Linux；不同平台的安装脚本和检测路径如上所述。它不是服务：没有启动/停止生命周期、端口或版本管理器，FlyEnv 只管理官方安装程序或包管理器放置在机器上的 `agy` 版本。对话始终在外部系统终端中打开，FlyEnv 负责列出和启动会话，但不托管聊天本身。会话详情受 Antigravity 存储格式（SQLite 数据库与 protobuf 负载）限制，因此 FlyEnv 可以可靠显示 ID、工作目录和修改时间，标题则仅尽力恢复。当前 FlyEnv 构建和平台安装包请查看[下载页面](/zh/download)。FlyEnv 以相同方式管理其他 AI 编程 CLI，参见 [Claude Code](/zh/features/claude-code) 和 [Codex](/zh/features/codex) 模块。
