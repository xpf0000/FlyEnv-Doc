---
layout: doc
titleTemplate: false
title: 'FlyEnv OpenCode：本地开发模块与配置指南'
description: '在 FlyEnv 中安装 OpenCode、编辑配置、浏览会话，并查看模型统计和服务提供商。'
head:
  - - meta
    - name: description
      content: '在 FlyEnv 中安装 OpenCode、编辑配置、浏览会话，并查看模型统计和服务提供商。'
  - - meta
    - property: og:title
      content: 'FlyEnv OpenCode：本地开发模块与配置指南'
  - - meta
    - property: og:description
      content: '在 FlyEnv 中安装 OpenCode、编辑配置、浏览会话，并查看模型统计和服务提供商。'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/zh/features/opencode
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/zh/features/opencode
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# OpenCode 在 FlyEnv 中运行

OpenCode 是开源 AI 编程代理，在终端中运行并支持多种模型提供商，因此不会被单一厂商的模型绑定。FlyEnv 为 OpenCode 提供专用管理页面，包含服务、配置文件、会话、MCP、统计和提供商六个选项卡，是 AI 编程工具中最完整的界面。你可以在此安装 CLI、编辑 JSONC 配置、浏览和恢复历史会话、查看按模型统计、检查已认证提供商以及管理 MCP 服务器。它可自然融入 [FlyEnv 的 AI 辅助工作流](/zh/guide/flyenv-work-with-ai)。

![FlyEnv OpenCode 模块，包含服务、配置文件、会话、MCP、统计和提供商选项卡](https://oss.macphpstudy.com/image/features/opencode-1.webp)

## 安装

OpenCode 是 AI 编程 CLI，不是后台服务，因此无需启动、停止或管理端口。FlyEnv 会自动检测现有安装，找不到时提供一键安装。

- **所有平台一条命令：** 安装均运行 `npm install -g opencode-ai`，macOS、Windows 和 Linux 相同。
- **内置终端执行：** 安装命令在 FlyEnv 内置终端中运行，你可查看真实输出；同时应用 FlyEnv 代理环境变量，代理网络下也能下载。
- **自动检测：** FlyEnv 在 `PATH` 和常见安装位置查找 `opencode`，包括 macOS/Linux 的系统 bin 目录及 npm、yarn、pnpm、bun、Volta 全局目录，以及 Windows 的 npm 或 WinGet 位置。自行安装的 OpenCode 无需重装即可识别。
- **可复制快捷命令：** 服务选项卡提供命令速查，如 `opencode models`、`opencode upgrade`、`opencode agent list` 等，每条命令都有复制按钮。

## 配置

OpenCode 将设置保存在 `~/.config/opencode/opencode.jsonc`（带注释的 JSON 文件）。FlyEnv 支持 XDG 规范；如果你的环境使用 `opencode.json`，则会回退到该文件。

- **原始 JSONC 编辑器：** 配置文件选项卡在完整源代码编辑器中打开真实文件，不提供可视化表单，编辑内容就是 OpenCode 实际读取的内容。
- **保留注释：** 文件采用 JSONC 格式，编辑时会保留其中的注释。

![FlyEnv OpenCode 配置页面截图](https://oss.macphpstudy.com/image/features/opencode-2.webp)

## 会话

会话选项卡通过 CLI 获取历史 OpenCode 对话：FlyEnv 运行 `opencode session list --format json` 并渲染结果。

- **按项目分组：** 会话按工作目录组织，同一代码库的对话会归在一起。
- **运行、恢复和删除：** 在项目文件夹启动新会话、恢复指定会话、继续最近会话，或删除不再需要的会话。
- **外部终端：** 会话始终在系统自己的终端窗口中打开，从会话工作目录运行 `opencode`、`opencode --session <id>` 或 `opencode --continue`，不会嵌在面板中，完整交互界面可正常工作。

![FlyEnv OpenCode 会话选项卡按工作目录分组并提供恢复和删除操作](https://oss.macphpstudy.com/image/features/opencode-3.webp)

## Stats

统计选项卡将 OpenCode 使用报告转换为易读表格。FlyEnv 运行 `opencode stats --models`，可选 `--days N` 时间范围，解析 CLI 表格输出并移除 ANSI 颜色码。

- **按模型统计：** 查看每个模型处理的工作量。
- **可调时间范围：** 缩小到最近几天，观察当前使用趋势。

![FlyEnv OpenCode 统计选项卡显示按模型划分的使用表](https://oss.macphpstudy.com/image/features/opencode-4.webp)

## 服务提供商

提供商选项卡显示 OpenCode 已完成身份验证的模型提供商。FlyEnv 从 OpenCode 凭据存储 `~/.local/share/opencode/auth.json` 读取，因此列表始终反映 CLI 实际可用的提供商。

- **一览已认证提供商：** 无需手动打开文件即可确认 API 密钥或登录是否生效。
- **始终同步：** 数据直接来自 OpenCode 身份验证文件，在 CLI 中添加提供商后，FlyEnv 下次读取即可显示。

![FlyEnv OpenCode 提供商选项卡列出已认证的模型提供商](https://oss.macphpstudy.com/image/features/opencode-5.webp)

## MCP 服务器

MCP 选项卡管理 OpenCode 连接的模型上下文协议服务器。[MCP 与 AI 工作区指南](/zh/guide/ai-coding-workspace-mcp)介绍可添加到 AI 编程环境的 MCP 服务器。FlyEnv 直接在 JSONC 配置文件中读写 MCP 条目，解析时去除注释并确保手动编辑的文件保持有效。

- **列出、添加和移除：** 查看已配置 MCP 服务器，添加或移除条目，无需手动查找配置。
- **原生配置存储：** 修改写入 `opencode.jsonc`，FlyEnv 与手动编辑共享唯一权威文件。
- **一键注册 FlyEnv：** FlyEnv 自带的 [MCP Server](/zh/features/mcp-server) 可从客户端配置选项卡将自身注册到此列表。

![FlyEnv OpenCode MCP 服务器截图](https://oss.macphpstudy.com/image/features/opencode-6.webp)

<FeatureRelatedLinks locale="zh" slug="opencode" />

## 兼容性说明

OpenCode 不是后台服务，FlyEnv 不会启动、停止或监控它，侧边栏服务开关按设计对该模块禁用。所有平台均在 FlyEnv 内置终端运行 `npm install -g opencode-ai` 安装，因此需要可用的 Node.js/npm 环境（可从 FlyEnv 的 [Node.js 模块](/zh/features/nodejs)安装）。检测依赖二进制文件位于 `PATH` 或 FlyEnv 扫描的标准位置。会话、统计和提供商数据来自 OpenCode CLI 及其文件，准确性取决于已安装版本；升级 OpenCode 可能改变选项卡报告内容。交互操作在外部系统终端中进行，而非 FlyEnv 内。支持平台和当前版本请查看[下载页面](/zh/download)。
