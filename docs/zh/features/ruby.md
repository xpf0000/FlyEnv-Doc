---
layout: doc
titleTemplate: false
title: 'FlyEnv Ruby：本地开发模块与配置指南'
description: '安装和切换 Ruby、设置终端 ruby 命令，并通过项目级运行时启动 Ruby 项目。'
head:
  - - meta
    - name: description
      content: '安装和切换 Ruby、设置终端 ruby 命令，并通过项目级运行时启动 Ruby 项目。'
  - - meta
    - property: og:title
      content: 'FlyEnv Ruby：本地开发模块与配置指南'
  - - meta
    - property: og:description
      content: '安装和切换 Ruby、设置终端 ruby 命令，并通过项目级运行时启动 Ruby 项目。'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/zh/features/ruby
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/zh/features/ruby
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# 使用 FlyEnv 进行本地 Ruby 开发

Ruby 是一种动态、面向对象的编程语言，以 Web 开发闻名，尤其通过 Ruby on Rails 框架广泛使用。FlyEnv 的 Ruby 模块将本地 Ruby 开发集中在一个界面中：安装多个 Ruby 版本，决定终端 `ruby` 命令解析的版本，并为每个项目绑定独立运行时。模块包含 Ruby 项目、服务和版本管理器三个选项卡，专注于版本安装、路径控制和项目运行时。

![FlyEnv Ruby 模块概览截图](https://oss.macphpstudy.com/image/features/ruby-1.webp)

## Ruby 版本管理

在 **Ruby → 版本管理器** 中并行安装 Ruby 版本，并同时保留所有版本可用。

- **macOS：** 从 Homebrew（`ruby` 配方和版本化的 `ruby@x.y` 配方）或 MacPorts 安装；FlyEnv 还会自动扫描 MacPorts 库目录中的现有 Ruby 安装。
- **Linux：** 从 Homebrew 安装。
- **Windows：**从静态在线列表安装 RubyInstaller 软件包。
- **自定义目录：**将 FlyEnv 指向包含你自己 Ruby 构建的任意目录，系统会将其与托管版本一起列出。

![FlyEnv Ruby 版本管理器及 Homebrew、MacPorts 来源截图](https://oss.macphpstudy.com/image/features/ruby-2.webp)

## 命令行版本切换

尽管名称如此，“服务”选项卡并不运行服务；Ruby 是解释器，不存在需要 FlyEnv 管理的守护进程。该选项卡是已安装版本表格，作用是控制路径。

- **终端版本切换：**在此选择版本后，终端中的 `ruby` 命令会解析到对应安装；FlyEnv 会将该版本的 bin 目录加入你的 `PATH`（或在切换时移除），并标明当前 PATH 条目由 FlyEnv 还是其他工具设置。[系统 PATH 环境指南](/zh/guide/setup-system-path-environment)详细介绍了这一机制。
- **按版本设置别名和备注：**为每个安装设置简短别名和备注，以便区分相似构建。
- **清理版本：**每一行都会显示版本安装路径，并提供删除不再需要版本的操作。

## 项目级 Ruby 运行时

在 **Ruby → 项目** 中注册每个项目文件夹，并为其绑定特定 Ruby 版本，而不是依赖 PATH 中碰巧存在的版本。

- **按项目运行时：**版本选择存储在项目目录的 `.flyenv` 文件中，因此从 FlyEnv 启动的终端和编辑器会自动使用正确的 Ruby。[项目级运行时环境指南](/zh/guide/project-level-runtime-environment)和[项目级运行时功能](/zh/features/per-project-runtimes)介绍了其工作机制，[演示](/zh/demos)展示了项目运行时的实际用法。
- **作为服务运行：**可直接从 FlyEnv 使用自定义启动命令运行项目，配置 TCP 端口（以 `http://127.0.0.1:<port>` 链接公开）、内联或文件中的环境变量，以及 macOS 和 Linux 上的 sudo 标志。侧边栏开关可一次启动或停止所有启用服务的 Ruby 项目。
- **打开工具：**从项目行跳转到系统终端，或在加载项目环境的情况下使用 RubyMine 打开项目。

![FlyEnv Ruby 项目列表及按项目绑定 Ruby 版本截图](https://oss.macphpstudy.com/image/features/ruby-3.webp)

<FeatureRelatedLinks locale="zh" slug="ruby" />

## 兼容性说明

FlyEnv 管理 Ruby 版本安装、路径切换和项目运行时；除每个 Ruby 构建自身提供的内容外，不额外捆绑 gem、bundler 或框架工具。可用安装来源因平台而异，macOS 和 Linux 没有静态源；请以[下载页面](/zh/download)和当前发行说明作为受支持软件包的依据。
