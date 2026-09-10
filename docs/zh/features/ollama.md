---
layout: doc
titleTemplate: false
title: 'FlyEnv Ollama：本地开发模块与配置指南'
description: '安装和运行 Ollama、从模型库拉取和运行模型，并可视化调整 OLLAMA_* 环境设置。'
head:
  - - meta
    - name: description
      content: '安装和运行 Ollama、从模型库拉取和运行模型，并可视化调整 OLLAMA_* 环境设置。'
  - - meta
    - property: og:title
      content: 'FlyEnv Ollama：本地开发模块与配置指南'
  - - meta
    - property: og:description
      content: '安装和运行 Ollama、从模型库拉取和运行模型，并可视化调整 OLLAMA_* 环境设置。'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/zh/features/ollama
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/zh/features/ollama
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# 使用 FlyEnv 本地运行 Ollama

Ollama 是一个开源工具，用于在自己的电脑上运行大型语言模型，并通过本地 API 向任意应用提供服务。当你需要在本地（包括完全离线）使用聊天、代码或嵌入模型时，它是常见选择。FlyEnv 将 Ollama 作为一等本地服务管理：从静态构建或 Homebrew 安装 Ollama，一键启动 `ollama serve`，通过可视化表单调整 `OLLAMA_*` 环境设置，并在专用的**模型**选项卡中管理模型——浏览在线库、拉取新模型并在内置终端运行。模型拉取后，可参考[本地离线 AI 代理指南](/zh/guide/build-local-offline-ai-agent)继续使用。

![FlyEnv Ollama 模块概览及服务控制截图](https://oss.macphpstudy.com/image/features/ollama-1.webp)

## 版本管理

**版本管理器**选项卡用于并行安装和保留多个 Ollama 版本，并选择服务运行的版本。

- **静态下载：** 通过 FlyEnv 版本 API 获取现成的 Ollama 归档（`.zip` / `.tgz`），支持 macOS、Linux 和 Windows。
- **Homebrew：** 在提供 Homebrew 的平台安装 `ollama` 配方，并与静态构建一起管理。
- **自定义目录：** 将 FlyEnv 指向包含你自己 Ollama 安装的文件夹；系统会扫描 `ollama`（或 `ollama.exe`）二进制文件，并与托管版本一起列出。
- **运行一个版本：** 服务模型一次只运行一个 Ollama 版本，因此 API 端点始终对应明确的构建。

![FlyEnv Ollama 版本管理器及静态、Homebrew 来源截图](https://oss.macphpstudy.com/image/features/ollama-2.webp)

## 服务与配置

FlyEnv 以分离方式启动 `ollama serve`，并通过 pid 文件跟踪，以便干净地启动和停止。侧边栏开关和系统托盘入口可控制服务，无需打开模块页面。服务器默认监听标准 Ollama API 端口 `0.0.0.0:11434`。

环境变量读取自 FlyEnv 基础目录中的 `ollama.conf`，每个以 `OLLAMA_` 开头的行都会传递给服务器进程。**配置文件**选项卡提供两种编辑方式：

- **常用设置表单：** 通过可视化表单调整 `OLLAMA_DEBUG`、`OLLAMA_HOST` 和 `OLLAMA_KEEP_ALIVE` 等常用变量，无需手动编辑文件。
- **原始编辑器：** 切换到完整源码视图编辑表单未覆盖的选项；旁边保留 `ollama.conf.default` 作为默认参考。

![FlyEnv Ollama 配置文件及 OLLAMA_* 常用设置表单截图](https://oss.macphpstudy.com/image/features/ollama-3.webp)

## 模型管理

**模型**选项卡用于拉取、列出和运行模型。

- **本地列表：** 从 `ollama list` 读取电脑上已有的模型。
- **模型库：** 从 FlyEnv API 获取可用模型的在线目录并缓存到本地，使会话之间的浏览保持快速。
- **在终端拉取和运行：** 从模型库拉取新模型或运行本地列表中的模型；命令在 FlyEnv 内置终端执行，你可以看到真实下载进度和聊天输出。复制命令按钮会将准确的 `ollama` 命令放入剪贴板，便于在其他位置使用。
- **硬件报告：** 内置报告显示电脑的 GPU、CPU 和 RAM，帮助判断模型大小是否能顺畅运行。

![FlyEnv Ollama 模型选项卡及本地模型和在线库截图](https://oss.macphpstudy.com/image/features/ollama-4.webp)

![FlyEnv 在内置终端中拉取 Ollama 模型截图](https://oss.macphpstudy.com/image/features/ollama-5.webp)

运行在 11434 端口的 Ollama 服务也能与其他 FlyEnv 模块配合：在 [n8n](/zh/features/n8n) 工作流中调用本地 API，将本地模型的嵌入存入 [Qdrant](/zh/features/qdrant) 向量数据库，或通过 [CLIProxyAPI](/zh/features/cliproxyapi) 在 OpenAI 兼容端点后运行基于 CLI 的 AI 账户。[FlyEnv 使用 AI 助手指南](/zh/guide/flyenv-work-with-ai)介绍这些组件如何组成更完整的工作区。

## 日志

**日志**选项卡可直接在 FlyEnv 中打开按版本划分的服务器日志：`ollama-<version>-start-out.log` 记录标准输出，`ollama-<version>-start-error.log` 记录错误。当版本无法启动或 11434 端口上的 API 停止响应时，应首先查看这些日志。

<FeatureRelatedLinks locale="zh" slug="ollama" />

## 兼容性说明

FlyEnv 管理本地 Ollama 运行时、配置文件和模型工作流，但不会捆绑模型；每次拉取都从上游 Ollama 模型库下载，需要网络连接和足够磁盘空间。macOS、Linux 和 Windows 提供静态安装；Homebrew 是否可用取决于平台，版本管理器显示的版本反映这些来源发布的内容。Ollama 一次只运行一个版本，`ollama.conf` 中的配置更改会在下次服务启动时生效。
