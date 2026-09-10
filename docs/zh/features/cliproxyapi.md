---
layout: doc
titleTemplate: false
title: 'FlyEnv CLIProxyAPI：本地开发模块与配置指南'
description: '在 FlyEnv 中将 CLIProxyAPI 作为本地 AI 网关运行，管理配置、环境后端和管理界面。'
head:
  - - meta
    - name: description
      content: '在 FlyEnv 中将 CLIProxyAPI 作为本地 AI 网关运行，管理配置、环境后端和管理界面。'
  - - meta
    - property: og:title
      content: 'FlyEnv CLIProxyAPI：本地开发模块与配置指南'
  - - meta
    - property: og:description
      content: '在 FlyEnv 中将 CLIProxyAPI 作为本地 AI 网关运行，管理配置、环境后端和管理界面。'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/zh/features/cliproxyapi
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/zh/features/cliproxyapi
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# CLIProxyAPI 在 FlyEnv 中

CLIProxyAPI 是开源本地代理，将 Gemini CLI、[Claude Code](/zh/features/claude-code) 和 [Codex](/zh/features/codex) 等基于 CLI 的 AI 工具置于标准 OpenAI、Gemini 和 Claude 兼容 API 端点之后。它让需要托管模型 API 的应用像调用普通 HTTP 服务一样使用这些 CLI 账户，并在一个本地网关中统一多个提供商。FlyEnv 将 CLIProxyAPI 作为托管本地 AI 网关运行：从版本管理器安装版本，在侧边栏或模块页面启动 `cli-proxy-api`，在应用内编辑 `config.yaml` 和后端环境文件，并在浏览器打开内置管理面板。启动输出按版本捕获到日志文件，启动失败时易于诊断。

![FlyEnv 中的 CLIProxyAPI 模块概览截图](https://oss.macphpstudy.com/image/features/cliproxyapi-1.webp)

## 版本管理

从 **CLIProxyAPI → 版本管理器** 并行安装多个版本，然后选择服务运行的版本。

- **静态下载：** 在线列表提供链接到项目 GitHub 发布页的 `.zip` 和 `.tgz` 软件包，并按你的平台和架构获取。
- **Homebrew：** 有 Homebrew 的系统会显示 `cliproxyapi` 公式作为安装源；此模块不提供 MacPorts。
- **自定义目录：** 添加包含自有 `cli-proxy-api` 或 `cliproxyapi` 二进制文件的文件夹，FlyEnv 会与托管版本一起列出。
- **macOS 隔离属性处理：** 静态安装后，FlyEnv 会从二进制文件移除隔离属性，使其无需 Gatekeeper 提示即可启动。

![FlyEnv CLIProxyAPI 版本管理器及静态、Homebrew 来源截图](https://oss.macphpstudy.com/image/features/cliproxyapi-2.webp)

## 服务与配置

服务选项卡以 `cli-proxy-api -config <config.yaml>` 启动选定版本，指向 FlyEnv CLIProxyAPI 目录中的 `config.yaml`，并从 `cliproxyapi.env` 加载环境变量。同一时间只运行一个版本，进程 ID 保存在同目录下的 pid 文件中；侧边栏开关（系统托盘也可用）可启动和停止服务。

- **配置文件选项卡：** 为 `config.yaml` 提供原始编辑器。新设置会从内置模板初始化，文件在修改前已包含可用默认值。
- **Env 选项卡：** 为 `cliproxyapi.env` 提供原始编辑器，保存 CLIProxyAPI 启动时读取的后端变量：`GITSTORE_*` 用于 Git 存储、`PGSTORE_*` 用于 PostgreSQL、`OBJECTSTORE_*` 用于对象存储，以及管理面板使用的 `MANAGEMENT_PASSWORD`。

![FlyEnv 编辑 CLIProxyAPI config.yaml 截图](https://oss.macphpstudy.com/image/features/cliproxyapi-3.webp)

## 管理界面在端口 8317

服务运行时，服务选项卡显示按钮，可在浏览器打开 CLIProxyAPI 内置管理面板 `http://127.0.0.1:<port>/management.html`。FlyEnv 从 `config.yaml` 读取端口，默认模板为 8317。将面板暴露给本地以外环境前，请在 Env 选项卡设置 `MANAGEMENT_PASSWORD`。

![FlyEnv 从服务选项卡打开 CLIProxyAPI 管理面板截图](https://oss.macphpstudy.com/image/features/cliproxyapi-4.webp)

## 日志

日志选项卡显示每个版本捕获的输出：`cliproxyapi-<version>-start-out.log` 和 `cliproxyapi-<version>-start-error.log`，可在两种流之间切换。版本拒绝启动或管理页面无响应时，应首先查看错误日志。

![FlyEnv CLIProxyAPI 启动日志查看器及输出、错误切换截图](https://oss.macphpstudy.com/image/features/cliproxyapi-5.webp)

<FeatureRelatedLinks locale="zh" slug="cliproxyapi" />

## 兼容性说明

FlyEnv 管理 CLIProxyAPI 二进制文件、启动命令及模块目录中的文件；网关行为（路由规则、提供商支持和模型兼容性）取决于安装的 CLIProxyAPI 版本，请查看项目 GitHub 发布说明。安装源取决于平台以及是否存在 Homebrew。若还想在同一台机器运行完全自托管模型，[Ollama](/zh/features/ollama) 模块会通过自己的本地 API 提供服务；[FlyEnv 使用 AI 助手指南](/zh/guide/flyenv-work-with-ai)介绍更广泛的本地 AI 场景。[下载页面](/zh/download)列出各平台当前 FlyEnv 构建，[演示](/zh/demos)展示实际运行效果。
