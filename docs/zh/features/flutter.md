---
layout: doc
titleTemplate: false
title: 'FlyEnv Flutter：本地开发模块与配置指南'
description: '管理 Flutter SDK、运行 Flutter Doctor、创建和编辑项目，并修复 Android 工具链配置。'
head:
  - - meta
    - name: description
      content: '管理 Flutter SDK、运行 Flutter Doctor、创建和编辑项目，并修复 Android 工具链配置。'
  - - meta
    - property: og:title
      content: 'FlyEnv Flutter：本地开发模块与配置指南'
  - - meta
    - property: og:description
      content: '管理 Flutter SDK、运行 Flutter Doctor、创建和编辑项目，并修复 Android 工具链配置。'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/zh/features/flutter
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/zh/features/flutter
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# 使用 FlyEnv 进行 Flutter 开发

Flutter 是 Google 的开源 UI 工具包，可使用单个 Dart 代码库构建跨平台移动、Web 和桌面应用。FlyEnv 在一个模块中覆盖完整的本地 Flutter 设置：从 Google 官方发布列表安装和切换 Flutter SDK 版本、解析 Flutter Doctor 快照、通过命令中心运行日常 Flutter 和 Dart 命令、引导创建和编辑项目，并提供带自动修复功能的 Android 工具链检查器。

![FlyEnv 模块概览](https://oss.macphpstudy.com/image/features/flutter-1.webp)

## Flutter SDK 版本管理

**版本管理器**标签页仅从静态源安装 Flutter SDK；Flutter 不提供 Homebrew 或 MacPorts 源。

- **官方发布列表：** 版本直接从托管于 `storage.googleapis.com/flutter_infra_release` 的 Google 官方 `releases_{macos,linux,windows}.json` 文件获取，而非第三方索引。
- **Stable 和 beta 通道：** 通道选择器可按 stable 和 beta 过滤列表；macOS 列表会识别架构，为 Apple Silicon 和 Intel 设备提供对应归档。
- **Git 检出处理：** 解压 SDK 归档后，FlyEnv 会在 SDK 目录中运行 `git init`，因为 Flutter 要求 SDK 位于 Git 检出目录中。
- **PATH 切换：** “服务”标签页列出检测到的 SDK，你可以将版本添加到终端 `PATH` 或移除，并查看当前条目由 FlyEnv 还是其他工具设置。

![版本管理器界面](https://oss.macphpstudy.com/image/features/flutter-2.webp)

## SDK 状态与 Flutter Doctor

**常规**标签页是 Flutter 环境的仪表板。

- **状态卡片：** 一眼查看 Flutter 版本、内置 Dart 版本、当前通道、Android SDK 状态和已连接 ADB 设备数量。
- **SDK 详情面板：** 显示 SDK 版本、通道和来源（从 `PATH`、默认位置、自定义目录中找到，或由 FlyEnv 安装），以及已扫描的搜索目录。发现范围包括 `PATH`、`FLUTTER_ROOT`、`~/development/flutter`、`~/flutter`、`/opt/flutter`、`/usr/local/flutter`、scoop 和 AppData 等常见 Windows 位置、自定义目录及 FlyEnv 自有 SDK 目录。
- **Flutter Doctor 快照：** 解析 `flutter doctor -v` 输出，无需打开终端即可查看完整诊断。

![服务与配置界面](https://oss.macphpstudy.com/image/features/flutter-3.webp)

## 命令中心

在**常规**标签页中，命令中心可针对所选 SDK 或项目目录运行日常命令，并在共享控制台中显示真实 stdout 和 stderr（保留最近 120 KB 输出）。

- **Flutter SDK：** 运行 `flutter upgrade`，列出可用通道并在 stable、beta 和 master 之间切换。
- **Pub 工具：** 在选定项目目录运行 `pub get`、`pub upgrade`、`pub outdated` 和 `pub deps`。
- **构建：** 运行 `flutter build apk --debug` 或 `--release`、`flutter build web`、`flutter build windows` 和 `flutter clean`。
- **质量检查：** 运行 `flutter analyze`、`flutter test` 和 `dart format`。
- **Doctor：** 需要新诊断时，可从同一控制台重新运行 Flutter Doctor。

![站点与工具界面](https://oss.macphpstudy.com/image/features/flutter-4.webp)

## 项目创建和编辑

**Flutter 项目**标签页列出你的项目，并为每个项目绑定独立的 Flutter 版本，遵循其他语言模块相同的[项目级运行环境](/zh/guide/project-level-runtime-environment)模型。

**创建项目**可在无需离开应用的情况下生成新的 Flutter 项目：

1. 设置项目名称、输出目录、组织名称和模板（`app`、`package`、`plugin`、`module` 或 `skeleton`），还可选择固定具体的 Flutter 版本。
2. 配置各平台标识：Android 包名称、iOS Bundle ID、Web 应用名称和桌面 Bundle ID。
3. 在项目真正创建前搜索 pub.dev 并添加依赖（包括开发依赖）。
4. 为各个平台附加 Firebase 配置文件并设置应用图标；完成后的项目会自动加入项目列表。

**编辑项目**会以相同设置重新打开现有项目：更新其标识和包名，使用过时包报告管理 `pubspec.yaml` 依赖，比较当前与最新版本并标记可升级项，还可替换 Firebase 文件或应用图标。

![项目列表](https://oss.macphpstudy.com/image/features/flutter-5.webp)

## Android 工具链

Android 标签页会检查 Flutter 构建所需的全部组件，并帮助你修复缺失项。

- **环境变量：** 显示当前 `ANDROID_HOME`、`ANDROID_SDK_ROOT` 和 `JAVA_HOME` 值。[系统 PATH 环境指南](/zh/guide/setup-system-path-environment)介绍 FlyEnv 如何管理工具的环境变量和 PATH 条目。
- **就绪检查：** 检查 Android SDK、平台工具、ADB、命令行工具、构建工具、JDK 和 Gradle，并在缺失或配置错误时给出修复提示。FlyEnv 的 [Java](/zh/features/java) 和 [Gradle](/zh/features/gradle) 模块可安装和管理这两项依赖。
- **自动修复：** 一键设置 SDK 环境变量，并将平台工具添加到你的 `PATH`。
- **ADB 设备：** 列出已连接设备，并提供设置目标设备、断开设备或查看信息的操作。
- **快捷操作：** 在选定项目上运行 `flutter run`、`flutter build apk` 或 `flutter build appbundle`，目标为当前选择的设备。

![设置界面](https://oss.macphpstudy.com/image/features/flutter-6.webp)

<FeatureRelatedLinks locale="zh" slug="flutter" />

## 兼容性说明

Flutter 模块管理 SDK 安装、环境变量和命令执行；它不捆绑 Android SDK、JDK 或设备模拟器，也不保证每个 Flutter 或 Dart 版本都能在所有操作系统上构建。命令输出显示在常规标签页控制台中，而不是日志查看器。支持的平台和软件包请查看[下载页面](/zh/download)及当前发行说明。
