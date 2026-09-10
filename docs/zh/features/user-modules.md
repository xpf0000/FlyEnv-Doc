---
layout: doc
titleTemplate: false
title: 'FlyEnv 用户模块：本地开发模块与配置指南'
description: '将任意命令或脚本封装为 FlyEnv 托管模块，提供独立侧边栏入口、配置和日志查看器。'
head:
  - - meta
    - name: description
      content: '将任意命令或脚本封装为 FlyEnv 托管模块，提供独立侧边栏入口、配置和日志查看器。'
  - - meta
    - property: og:title
      content: 'FlyEnv 用户模块：本地开发模块与配置指南'
  - - meta
    - property: og:description
      content: '将任意命令或脚本封装为 FlyEnv 托管模块，提供独立侧边栏入口、配置和日志查看器。'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/zh/features/user-modules
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/zh/features/user-modules
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# 自定义模块在 FlyEnv

FlyEnv 内置许多模块，但无法覆盖开发者可能在本地运行的每种工具。自定义模块可以补足这一点：只需描述一次自己的服务，FlyEnv 就会提供侧边栏入口、带启动/停止/重启控制的服务页面，以及用于配置和日志文件的选项卡，使用体验与内置模块一致。

![FlyEnv 自定义模块及其侧边栏入口](https://oss.macphpstudy.com/image/features/user-modules-1.webp)

## 创建模块

自定义模块在**设置 → 模块**中定义。创建的每个模块都会成为 FlyEnv 侧边栏中的独立入口并拥有自己的页面。

- **标识：** 设置模块名称和图标，便于在侧边栏识别。
- **服务开关：** 决定模块是否作为托管服务运行。启用后，FlyEnv 会添加生命周期控制并跟踪每个项目的进程。
- **单实例模式：** 设置后同一时间只运行一个项目，适合绑定固定端口的工具。启动项目时会先自动停止其他项目，并记住最近启动的项目。
- **配置和日志文件列表：** 预先声明模块的配置文件和日志文件，每个文件都会成为模块页面中的一个选项卡。

从侧边栏隐藏自定义模块会停止其运行中的服务，不会留下孤立进程。[自定义模块指南](/zh/guide/user-customizable-modules)以 [etcd](/zh/features/etcd) 为例介绍完整流程。

![FlyEnv 在设置→模块中定义自定义模块](https://oss.macphpstudy.com/image/features/user-modules-2.webp)

## 执行项列表

一个模块包含一个或多个执行项，即组成服务的独立命令，例如同一工具的不同版本或配置。服务选项卡会列出这些项目，并提供启动、停止和重启按钮。

每个执行项包含：

- **命令或文件：** 可直接输入 shell 命令行，或从磁盘选择由 FlyEnv 执行的脚本文件。
- **名称和备注：** 让相似项目在列表中易于区分。
- **运行与 sudo：** 对需要提升权限的命令，FlyEnv 会请求密码；需要交互式提权时可回退为“在终端中打开”。
- **PID 文件路径：** pid 文件用于跟踪项目状态并正常停止；Unix 上会向记录的 pid 发送 SIGTERM，随后发送 SIGINT。
- **项目配置和日志文件：** 每个项目可附加自己的配置和日志文件，并从操作弹窗打开。

项目通常在后台无界面运行；需要可见会话时，FlyEnv 可在真实终端窗口中启动（macOS 使用 Terminal.app，Linux 使用终端脚本），与应用其他部分使用相同的[终端集成](/zh/features/cli-terminal)。

![FlyEnv 添加执行项并设置命令、sudo 和 pid 文件](https://oss.macphpstudy.com/image/features/user-modules-3.webp)

## 配置与日志标签页

模块页面根据声明动态生成：包含项目列表的**服务**选项卡，以及每个配置文件和日志文件各自的选项卡。

- **配置选项卡：** 在 FlyEnv 原始编辑器中打开每个声明的文件，无需在磁盘中查找即可调整服务配置。
- **日志选项卡：** 直接在应用中查看每个声明的日志文件。
- **内置输出捕获：** 对每个启动项目，FlyEnv 自动将标准输出和标准错误记录到 `<BaseDir>/module-customer/<id>.out.log` 和 `.error.log`，即使未声明日志文件也始终有日志可查。

![FlyEnv 自定义模块页面中的配置和日志选项卡](https://oss.macphpstudy.com/image/features/user-modules-4.webp)

<FeatureRelatedLinks locale="zh" slug="user-modules" />

## 兼容性说明

自定义模块封装你提供的命令和脚本；FlyEnv 不会安装或管理底层工具，也没有版本管理器、在线下载源或管理员 Web 界面。因此二进制文件必须已存在于机器上，并能通过[系统 PATH](/zh/guide/setup-system-path-environment)解析或使用绝对路径引用。服务状态依赖你配置的 pid 文件，命令必须确实将 pid 写入该路径。终端启动方式因平台而异（macOS 使用 AppleScript，Linux 使用 shell 脚本），提权行为遵循操作系统规则。自定义模块支持 FlyEnv 运行的所有平台，具体能力取决于命令或脚本本身；支持的操作系统请查看[下载页面](/zh/download)。
