---
layout: doc
titleTemplate: false
title: 'FlyEnv Gradle：本地开发模块与配置指南'
description: '通过静态包、Homebrew、MacPorts 或 SDKMAN 安装和切换 Gradle，并设置终端默认版本。'
head:
  - - meta
    - name: description
      content: '通过静态包、Homebrew、MacPorts 或 SDKMAN 安装和切换 Gradle，并设置终端默认版本。'
  - - meta
    - property: og:title
      content: 'FlyEnv Gradle：本地开发模块与配置指南'
  - - meta
    - property: og:description
      content: '通过静态包、Homebrew、MacPorts 或 SDKMAN 安装和切换 Gradle，并设置终端默认版本。'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/zh/features/gradle
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/zh/features/gradle
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# 使用 FlyEnv 管理 Gradle 版本

Gradle 是一种主要用于 Java、Kotlin 和 Android 项目的构建自动化工具，负责编译、依赖管理、测试和打包，也是 [Spring Boot](/zh/solutions/spring-boot) 等框架背后的标准构建工具。FlyEnv 可在一台机器上保留多个 Gradle 版本，并切换终端使用的版本。Gradle 模块专注于两件事：从多个来源安装版本，以及控制 shell 解析到的 `gradle` 二进制文件。它不运行后台服务，因此无需启动或停止任何进程。

![FlyEnv Gradle 模块概览截图](https://oss.macphpstudy.com/image/features/gradle-1.webp)

## Gradle 版本管理

打开 **Gradle → 版本管理器**，即可并行安装和管理 Gradle 发行版。

- **多个安装来源：**macOS、Linux 和 Windows 提供静态构建，macOS 还支持 Homebrew 和 MacPorts，macOS 与 Linux 支持 SDKMAN；可选择机器上已有的工具来源。
- **SDKMAN 发现：**FlyEnv 会自动扫描 `~/.sdkman/candidates/gradle`，因此通过 SDKMAN 安装的版本会与 FlyEnv 管理的版本一起显示，无需手动设置。
- **自定义版本：**将 FlyEnv 指向包含你自己 Gradle 发行版的任意目录；系统会检测 `bin/gradle` 二进制文件（Windows 上为 `gradle.bat`），并将其与托管版本一起列出。
- **干净安装：**静态构建会解压到 FlyEnv 自有应用目录下的 `gradle/<version>/`，通过 `gradle --version` 验证，并在解压后自动移除 macOS 隔离属性。

![FlyEnv Gradle 版本管理器及静态、Homebrew、MacPorts 和 SDKMAN 来源截图](https://oss.macphpstudy.com/image/features/gradle-2.webp)

## 命令行版本切换

**服务**选项卡实际上是已安装版本表格；尽管名称如此，Gradle 并不是运行中的服务，因此该选项卡管理的是版本和路径，而非进程。

- **终端默认版本：**设置终端中 `gradle` 命令解析到的已安装版本。FlyEnv 会在你的 `PATH` 中添加或移除该版本的 `bin` 目录，并标明当前条目是由 FlyEnv 还是其他工具设置。
- **按版本别名：**为每个安装设置简短别名，以便在列表中区分相似构建。
- **按版本备注：**为任意版本添加自由格式备注，记录其用途。
- **轻松移除：**直接从表格删除不再需要的版本。

Gradle 需要 `PATH` 中存在 [Java](/zh/features/java) 运行时；[Java 环境设置指南](/zh/guide/set-up-java-development-environment)介绍如何通过 FlyEnv 安装 JDK。FlyEnv 应用本身可从[下载页面](/zh/download)获取。

<FeatureRelatedLinks locale="zh" slug="gradle" />

## 兼容性说明

Gradle 页面仅涵盖版本和路径管理，本身不提供项目绑定。按项目的运行时绑定由各语言模块提供，请参阅[项目级运行时环境指南](/zh/guide/project-level-runtime-environment)。可用安装来源因操作系统而异，请以已安装 FlyEnv 构建中的版本管理器显示内容为准。
