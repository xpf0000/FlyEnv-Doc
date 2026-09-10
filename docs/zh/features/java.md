---
layout: doc
titleTemplate: false
title: 'FlyEnv Java：本地开发模块与配置指南'
description: '安装和管理 JDK、Maven 与 SDKMAN 版本，并为不同项目绑定所需 Java 运行时。'
head:
  - - meta
    - name: description
      content: '安装和管理 JDK、Maven 与 SDKMAN 版本，并为不同项目绑定所需 Java 运行时。'
  - - meta
    - property: og:title
      content: 'FlyEnv Java：本地开发模块与配置指南'
  - - meta
    - property: og:description
      content: '安装和管理 JDK、Maven 与 SDKMAN 版本，并为不同项目绑定所需 Java 运行时。'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/zh/features/java
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/zh/features/java
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# 使用 FlyEnv 进行本地 Java 开发

Java 是一种基于 JVM 的通用编程语言，广泛用于企业后端、Android 应用和大型服务，Maven 是其标准构建工具之一。FlyEnv 在一个应用中管理本地堆栈的 Java 环境：从多个来源安装多个 JDK 版本，使用专用 Maven 版本管理器，在终端级别切换版本，并按项目绑定 Java 运行时。Java 模块包含四个选项卡：Java 项目、服务、版本管理器和 Maven。

![FlyEnv Java 模块概览截图](https://oss.macphpstudy.com/image/features/java-1.webp)

## 多版本管理安装

在 **Java → 版本管理器** 中并行安装多个 JDK，并随时在它们之间切换。

- **多个安装来源：**在 macOS 上可选择静态 `.tar.gz` JDK 构建、Homebrew（`jdk`/`openjdk` 配方）、MacPorts JDK 端口和 SDKMAN；Linux 支持静态构建、Homebrew 和 SDKMAN；Windows 则从静态在线列表以 zip 压缩包形式安装 JDK。版本管理器标题栏直接链接到 Microsoft OpenJDK 下载页面。
- **自动发现：**在 macOS 上，FlyEnv 会扫描 `/Library/Java/JavaVirtualMachines` 和 `~/.sdkman/candidates/java`，因此通过系统或 SDKMAN 安装的 JDK 会自动出现在列表中，无需手动设置。
- **自定义版本：**将 FlyEnv 指向包含你自己 JDK 构建的任意目录，即可将其与托管版本一起列出。
- **按版本设置别名和备注：**为每个安装设置简短别名和备注，以便在列表中区分相似构建。

![FlyEnv Java 版本管理器及安装来源截图](https://oss.macphpstudy.com/image/features/java-2.webp)

![FlyEnv 从系统和 SDKMAN 目录发现的 JDK 安装截图](https://oss.macphpstudy.com/image/features/java-3.webp)

## Maven 版本管理

Java 模块中的 **Maven** 选项卡本身就是完整的版本管理器，因此你的构建工具可以与 JDK 一起进行版本管理。

- 并行安装并保留多个 Maven 版本。
- Maven 安装来源包括 Homebrew、MacPorts、静态构建和 SDKMAN，具体取决于你的平台。
- 从自定义目录添加你自己的 Maven 安装。
- 使用 Gradle 的团队可以通过专用的 [Gradle 模块](/zh/features/gradle)获得相同的多来源版本管理。

![FlyEnv Java 模块中的 Maven 版本管理器截图](https://oss.macphpstudy.com/image/features/java-4.webp)

## 命令行版本切换

**服务**选项卡列出每个已安装的 JDK。对于 Java，它管理版本和终端环境，而不是运行中的后台服务表格，因为 JDK 本身不运行守护进程。

- **设置终端版本：**选择终端中 `java` 和 `javac` 命令解析到的 JDK。FlyEnv 会在你的 `PATH` 中添加或移除该版本的 bin 目录，并标明当前条目是由 FlyEnv 还是其他工具设置。
- **命令别名和备注：**为每个版本设置简短别名并添加备注，以便区分相似构建。
- **自定义搜索目录：**扩展 FlyEnv 查找现有 JDK 安装的位置。

## 项目级 Java 运行时

不同项目通常需要不同的 JDK。在 **Java → Java 项目** 中注册每个项目文件夹，并为其绑定专属 Java 版本。

- **按项目运行时：**绑定的 JDK 存储在项目目录中的 `.flyenv` 文件里，因此从 FlyEnv 启动的终端和编辑器会自动使用正确的 Java。
- **作为服务运行：**可直接从 FlyEnv 使用自定义运行命令或运行文件启动项目，并配置项目端口、可选 sudo、在终端运行选项，以及内联或从 env 文件提供的环境变量。
- **项目配置和日志：**按项目注册自定义配置文件和日志文件，并使用内置查看器查看。
- **在 IDE 中打开：**从项目行直接跳转到 IntelliJ IDEA，并加载项目环境。

完整设置流程请参阅 [Java 开发环境指南](/zh/guide/set-up-java-development-environment)；[Spring Boot 解决方案](/zh/solutions/spring-boot)展示了项目级 JDK 如何融入完整框架堆栈。对于 servlet 容器部署，[Tomcat 模块](/zh/features/tomcat)可使用此处管理的 JDK 运行 WAR 应用，[Metabase 解决方案](/zh/solutions/metabase)则是现成 Java 应用堆栈的示例。

![FlyEnv Java 项目列表及按项目 JDK 绑定截图](https://oss.macphpstudy.com/image/features/java-5.webp)

<FeatureRelatedLinks locale="zh" slug="java" />

## 兼容性说明

FlyEnv 管理本地 JDK 和 Maven 版本及其环境配置，但不保证每个 JDK 发行版、Maven 版本或第三方工具都能在所有操作系统上使用。可用安装来源因 macOS、Linux 和 Windows 而异，通过 SDKMAN 管理的 JDK 还取决于你自己的 SDKMAN 安装。请根据已安装的 JDK 验证项目需求，并以[下载页面](/zh/download)和当前发行说明作为受支持软件包的依据。
