---
layout: doc
titleTemplate: false
title: 'FlyEnv n8n：本地开发模块与配置指南'
description: '通过 npm 安装 n8n，使用环境变量配置运行服务，并直接管理 n8n 用户。'
head:
  - - meta
    - name: description
      content: '通过 npm 安装 n8n，使用环境变量配置运行服务，并直接管理 n8n 用户。'
  - - meta
    - property: og:title
      content: 'FlyEnv n8n：本地开发模块与配置指南'
  - - meta
    - property: og:description
      content: '通过 npm 安装 n8n，使用环境变量配置运行服务，并直接管理 n8n 用户。'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/zh/features/n8n
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/zh/features/n8n
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# 使用 FlyEnv 进行 n8n 本地自动化

n8n 是一个开源工作流自动化工具，提供基于节点的可视化编辑器，用于连接 API、数据库和服务。团队可以自托管它来构建集成与自动化（从数据同步到 AI 流程），无需使用托管自动化平台。FlyEnv 将 n8n 作为托管的本地自动化服务器运行：从 npm registry 选择并安装版本，在内置终端中启动 `n8n start`，通过可视化环境配置运行参数，并在 Users 选项卡中管理账户，无需打开数据库工具。服务器默认监听 5678 端口，FlyEnv 还可通过健康端点识别你在应用外启动的 n8n 实例。

![FlyEnv n8n 模块概览及服务控制截图](https://oss.macphpstudy.com/image/features/n8n-1.webp)

## 版本管理

与提供二进制下载的模块不同，**n8n → 版本管理器**选项卡通过软件包 registry 工作，因此必须先安装可用的 [Node.js](/zh/features/nodejs) 和 npm。

- **Registry 版本列表：** FlyEnv 直接从 `registry.npmjs.org` 获取最近 20 个稳定 n8n 版本，列表始终跟随上游发布。
- **在内置终端中安装：** 安装版本会在 FlyEnv 内置终端中运行 `npm install -g n8n@<version>`，你可以看到真实的 npm 输出，而不是进度条。
- **广泛检测已安装版本：** FlyEnv 也能识别其他工具安装的 n8n，会扫描常见的 npm 全局目录（`/usr/local/bin`、`/opt/homebrew/bin`、`~/.nvm`、`~/.volta` 和 Windows 上的 `%APPDATA%\npm`）以及 `PATH`。

![FlyEnv n8n 版本管理器列出 npm 注册表中的版本截图](https://oss.macphpstudy.com/image/features/n8n-2.webp)

## 服务与配置

启动服务会运行 `n8n start`，并读取 FlyEnv 自有 `n8n.env` 文件中的所有环境变量，因此运行时行为可通过你控制的文件完全复现。

- **常用键可视化表单：** 调整 `N8N_PORT`、`N8N_HOST`、`N8N_PROTOCOL` 和 `N8N_PATH`，选择 `DB_TYPE`，设置 `N8N_USER_FOLDER` 和 `N8N_ENCRYPTION_KEY`，定义 `WEBHOOK_URL`，调整日志级别和输出，切换 `EXECUTIONS_PROCESS`/`EXECUTIONS_MODE`，以及开关 `N8N_METRICS`，全程无需手动编辑文件。
- **原始编辑器：** `n8n.env` 的完整源码视图可编辑表单未显示的变量。
- **自动设置所有者：** 设置 `N8N_OWNER_EMAIL` 和 `N8N_OWNER_PASSWORD` 且尚无数据库时，服务器启动后 FlyEnv 会自动完成初始所有者注册。
- **重置所有者：** 当你有意重新开始时，危险区域操作可删除 `database.sqlite`。
- **托管生命周期：** 通过侧边栏和系统托盘开关启动或停止服务器；运行状态根据 `/healthz` 端点确认。在 Windows 上，FlyEnv 会通过 pid 文件、端口监听器和命令匹配可靠地终止进程。

![FlyEnv n8n.env 环境变量可视化编辑器截图](https://oss.macphpstudy.com/image/features/n8n-3.webp)

## 用户管理

**Users** 选项卡直接操作 n8n 的 `database.sqlite`，因此即使服务器停止也能管理账户。

- **定位数据：** 手动选择 n8n 数据目录，或让 FlyEnv 自动扫描 n8n 保存 SQLite 数据库的候选位置。
- **完整账户控制：** 列出、创建和删除用户，更改用户角色、停用账户以及重置密码（包括所有者密码）。
- **正确的密码哈希：** 使用 bcrypt 写入密码，与 n8n 自身的存储方式完全一致，因此离线修复的账户会在下次服务器启动时生效。

![FlyEnv n8n 用户选项卡列出 SQLite 数据库中的账户截图](https://oss.macphpstudy.com/image/features/n8n-4.webp)

## 仪表盘

服务运行时，服务选项卡中的仪表板按钮会根据配置拼接的地址在浏览器打开 n8n 编辑器；协议、主机、端口和路径都读取自 `n8n.env`，因此自定义 `N8N_PATH` 或非默认端口会自动反映在链接中。你可以在其中针对本地技术堆栈构建工作流：SMTP 节点可指向 [Mailpit](/zh/features/mailpit)，确保测试期间通知工作流不会发送真实邮件；[本地 AI 工作流指南](/zh/guide/build-local-ai-workflow-by-n8n)展示 n8n 如何与 [Ollama 模块](/zh/features/ollama)提供的模型协同工作。

![FlyEnv 从 FlyEnv 打开的 n8n 编辑器仪表板截图](https://oss.macphpstudy.com/image/features/n8n-5.webp)

## 日志

每个已安装版本都有独立的启动日志——`n8n-<version>-start-out.log` 和 `n8n-<version>-start-error.log`——可在 FlyEnv 的日志选项卡中查看。当版本无法启动或健康检查始终失败时，应首先查看这两个文件。

<FeatureRelatedLinks locale="zh" slug="n8n" />

## 兼容性说明

FlyEnv 管理本地 n8n 进程、环境文件和用户数据库，但不会捆绑 n8n 本身。安装或更新版本需要电脑上已有 Node.js 和 npm，并会访问公共 npm registry；具体 n8n 版本的工作流行为由 n8n 自身要求决定。FlyEnv 也不会控制它未启动的 n8n 实例——它通过健康端点检测外部启动的服务器并显示为运行中，但生命周期操作仅适用于 FlyEnv 管理的安装。关于你的平台随应用提供的内容，请参阅[下载页面](/zh/download)。
