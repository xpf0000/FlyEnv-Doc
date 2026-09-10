---
layout: doc
titleTemplate: false
title: 'FlyEnv GitHub Copilot CLI：本地开发模块与配置指南'
description: '通过 npm 安装 GitHub Copilot CLI，编辑配置、恢复会话，并管理技能和 MCP 服务器。'
head:
  - - meta
    - name: description
      content: '通过 npm 安装 GitHub Copilot CLI，编辑配置、恢复会话，并管理技能和 MCP 服务器。'
  - - meta
    - property: og:title
      content: 'FlyEnv GitHub Copilot CLI：本地开发模块与配置指南'
  - - meta
    - property: og:description
      content: '通过 npm 安装 GitHub Copilot CLI，编辑配置、恢复会话，并管理技能和 MCP 服务器。'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/zh/features/github-copilot-cli
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/zh/features/github-copilot-cli
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# GitHub Copilot CLI 在 FlyEnv 中

GitHub Copilot CLI 是 GitHub 面向终端的 AI 编程代理，属于 Copilot 产品家族。FlyEnv 为它提供专属管理页面：一键安装、用于 JSON 配置文件的纯文本编辑器、支持恢复和清理的会话浏览器、带有逐项操作的技能列表，以及 MCP 服务器管理。Copilot 仍是普通的终端工具，FlyEnv 负责将这些功能集中组织起来。若要了解通过 AI 助手驱动 FlyEnv 的完整工作流程，请参阅 [FlyEnv 与 AI 协作](/zh/guide/flyenv-work-with-ai)。

![FlyEnv GitHub Copilot CLI 模块概览，显示带有安装命令、检测到的版本和命令速查的服务卡片截图](https://oss.macphpstudy.com/image/features/github-copilot-cli-1.webp)

## 安装

**GitHub Copilot CLI → 服务**选项卡会检测现有的 `copilot` 二进制文件并显示其版本；如果未找到，则提供一键安装选项。

- **单个跨平台命令：**安装会运行 `npm install -g @github/copilot`，macOS、Linux 和 Windows 使用相同命令，因此唯一前提是可用的 Node.js/npm 环境；如有需要，可通过 FlyEnv 的 [Node.js 版本管理](/zh/guide/manage-multiple-node-php-versions) 提供。
- **内置终端：**npm 命令在 FlyEnv 内置终端中运行，并应用 FlyEnv 的代理环境变量，你可以看到真实的安装输出，而不是无提示的进度条。
- **识别已有安装：**FlyEnv 会扫描 `PATH` 以及常见的全局安装位置，包括 npm、yarn、pnpm、bun 和 volta 的全局 bin 目录，因此你自行安装的 Copilot CLI 无需重新安装即可被发现。
- **命令速查：**服务卡片直接提供可复制的日常命令快捷方式，例如 `copilot login`、`copilot init`、`copilot skill list` 和 `copilot mcp list`。

## 配置

**配置文件**选项卡以纯 JSON 方式编辑 Copilot CLI 的配置；此模块没有可视化设置表单。

- **两个文件：**`~/.copilot/config.json` 用于主配置，`~/.copilot/mcp-config.json` 用于 MCP 服务器定义，二者都可在完整编辑器中打开。
- **遵循自定义 home：**如果通过 `COPILOT_CONFIG_DIR` 环境变量迁移 Copilot home，FlyEnv 会跟随该位置并在文件的实际路径编辑它们。
- **不会替你重写：**FlyEnv 按磁盘上的原样打开文件；文件的架构和默认值由 Copilot CLI 自身负责。

![FlyEnv 配置页面截图](https://oss.macphpstudy.com/image/features/github-copilot-cli-2.webp)

## 会话

Copilot 会话从 CLI 自己的 SQLite 存储 `~/.copilot/session-store.db` 中读取，因此标题和提示词可以清晰显示，并按工作目录分组。

- **从上次位置继续：**“运行”和“恢复”操作会在会话工作目录中打开系统外部终端，并启动 `copilot --resume` 或 `copilot --continue`；交互式对话始终在该终端中进行，而不是在 FlyEnv 内部。
- **彻底删除：**移除会话时也会删除其 `session-state/<id>` 目录，不会留下孤立状态。

![FlyEnv 按工作目录分组的会话表，包含运行、恢复和删除操作截图](https://oss.macphpstudy.com/image/features/github-copilot-cli-3.webp)

## 技能

**技能**选项卡通过直接调用 `copilot skill list --json` 查询 Copilot CLI 已知的技能，并在每个技能名称后标注其来源；不同于会直接从磁盘读取技能文件夹的 [Antigravity CLI](/zh/features/antigravity-cli) 模块，此列表始终来自 CLI 本身。

- **逐项技能操作：**打开技能目录，在文件管理器中显示技能文件，或直接预览其内容，无需离开 FlyEnv。
- **始终最新：**由于列表来自 CLI 而非缓存快照，只要 `copilot skill list` 能看到新添加的技能，它们就会立即出现。

![FlyEnv 技能选项卡，列出带来源标签的 Copilot 技能及打开、显示和预览操作截图](https://oss.macphpstudy.com/image/features/github-copilot-cli-4.webp)

## MCP 服务器

**MCP**选项卡管理 Copilot CLI 连接的 MCP 服务器，数据由 `~/.copilot/mcp-config.json` 文件提供。

- **列出、添加、移除：**查看当前注册的服务器，并在界面中添加或移除条目；更改会写回 MCP 配置文件。
- **支持 FlyEnv 自带的 MCP 服务器：**[FlyEnv MCP Server](/zh/features/mcp-server) 模块可以将自身注册到 Copilot CLI 的 MCP 列表，让 Copilot 检查和操作你的本地服务与站点。
- **在终端中验证：**服务卡片上的 `copilot mcp list` 快捷命令是确认 CLI 实际加载内容的最快方式。

![FlyEnv MCP 服务器选项卡，列出已注册服务器及添加、移除操作截图](https://oss.macphpstudy.com/image/features/github-copilot-cli-5.webp)

<FeatureRelatedLinks locale="zh" slug="github-copilot-cli" />

## 兼容性说明

GitHub Copilot CLI 不是后台服务：FlyEnv 不会为它提供启动/停止开关、端口或进程生命周期管理，每个交互式会话都在系统外部终端中运行。安装基于 npm，在 macOS、Linux 和 Windows 上使用相同流程，因此必须先准备好带 npm 的 Node.js；如需安装，可从 FlyEnv 的 [Node.js 模块](/zh/features/nodejs) 获取，或从[下载页面](/zh/download)下载 FlyEnv。配置仅以纯 JSON 形式提供，没有可视化表单，具体键值问题应参考 Copilot CLI 官方文档。会话数据存储在 CLI 的 `~/.copilot` 目录（或 `COPILOT_CONFIG_DIR` 指定的位置）下，FlyEnv 只会读取和删除 Copilot CLI 写入的内容。
