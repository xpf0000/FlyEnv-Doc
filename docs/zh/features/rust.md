---
layout: doc
titleTemplate: false
title: 'FlyEnv Rust：本地开发模块与配置指南'
description: '安装 Rust Toolchain，通过 rustup 或 PATH 切换 cargo 和 rustc，并在本地运行 Rust 项目。'
head:
  - - meta
    - name: description
      content: '安装 Rust Toolchain，通过 rustup 或 PATH 切换 cargo 和 rustc，并在本地运行 Rust 项目。'
  - - meta
    - property: og:title
      content: 'FlyEnv Rust：本地开发模块与配置指南'
  - - meta
    - property: og:description
      content: '安装 Rust Toolchain，通过 rustup 或 PATH 切换 cargo 和 rustc，并在本地运行 Rust 项目。'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/zh/features/rust
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/zh/features/rust
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# 使用 FlyEnv 进行本地 Rust 开发

Rust 是一种注重内存安全和性能的系统编程语言，常用于命令行工具、系统组件、WebAssembly 和高性能服务。[RustFS 对象存储](/zh/features/rustfs)就是 FlyEnv 管理的 Rust 服务之一。FlyEnv 的 Rust 模块将本地 Rust 开发集中在一个界面中：并行安装 Rust 工具链，管理 rustup 工具链和目标平台，决定终端 `cargo` 与 `rustc` 命令解析的工具链，并为每个项目绑定独立工具链。模块包含 Rust 项目、服务、版本管理器和 Rustup 四个选项卡，覆盖安装、路径控制、rustup 集成和项目运行时。

![FlyEnv Rust 模块概览截图](https://oss.macphpstudy.com/image/features/rust-1.webp)

## Rust 工具链管理

在 **Rust → 版本管理器** 中安装 Rust 工具链，并同时保留多个可用版本。

- **macOS：** 从静态在线列表安装独立的 `.tar.xz` 安装包，或使用 Homebrew（`rust` 配方）；Rust 模块不提供 MacPorts 源。
- **Linux：** 从静态在线列表或 Homebrew 安装。
- **Windows：** 从静态在线列表安装。
- **rustup 工具链：** FlyEnv 会自动发现 rustup 在 `RUSTUP_HOME` / `~/.rustup/toolchains` 下安装的工具链，以及 FlyEnv 自有应用目录中的工具链，将两者统一显示。
- **自定义目录：** 将 FlyEnv 指向包含你自己 Rust 工具链的目录，系统会将其与托管版本一起列出。

专用的 **Rustup** 选项卡会检测已有 rustup 安装（遵循 `CARGO_HOME` 和 `RUSTUP_HOME`），或在内置终端中提供一键安装。你可以在此安装、设置默认或移除 rustup 工具链，也可添加或移除编译目标平台。

![FlyEnv Rust 版本管理器及 rustup 工具链管理截图](https://oss.macphpstudy.com/image/features/rust-2.webp)

## 命令行版本切换

**服务**选项卡名称只是历史约定；Rust 在 FlyEnv 中没有后台进程，因此这里不会启动或停止任何服务。该选项卡实际是已安装工具链与路径管理的表格。

- **终端版本切换：** 选择终端 `cargo` 和 `rustc` 命令解析的工具链。切换时会将工具链 bin 目录添加到 `PATH` 或移除，并标记该条目由 FlyEnv 还是其他工具设置。[系统 PATH 环境指南](/zh/guide/setup-system-path-environment)介绍底层机制。
- **按版本设置别名和备注：** 为每个工具链设置简短别名和备注，便于在列表中区分相似构建。
- **日常维护：** 表格列出每个工具链的安装路径，可直接删除不再使用的工具链。

## 项目级 Rust 工具链

在 **Rust → 项目** 中注册项目文件夹并绑定特定 Rust 工具链，而不是依赖 PATH 中碰巧存在的版本。

- **按项目设置工具链：** 版本选择保存在项目目录中的 `.flyenv` 文件里，因此从 FlyEnv 启动的终端和编辑器会自动使用正确的 Rust。请参阅[项目级运行时环境指南](/zh/guide/project-level-runtime-environment)和[按项目运行时功能](/zh/features/per-project-runtimes)了解机制。
- **作为服务运行：** 可选地从 FlyEnv 直接运行项目，设置自定义启动命令、通过 `http://127.0.0.1:<port>` 暴露的 TCP 端口、内联或文件中的环境变量，以及 macOS 和 Linux 上的 sudo 标志。侧边栏开关可同时启动或停止所有启用服务的 Rust 项目。
- **内置工具：** 从项目行跳转到系统终端，或在加载项目环境的情况下用 RustRover 打开项目。

![FlyEnv Rust 项目列表及按项目工具链绑定截图](https://oss.macphpstudy.com/image/features/rust-3.webp)

<FeatureRelatedLinks locale="zh" slug="rust" />

## 兼容性说明

FlyEnv 管理 Rust 工具链安装、rustup 集成、路径切换和项目运行时；除各工具链自身提供的功能外，模块不提供配置文件编辑器或日志查看器。可用安装源因平台而异，请以[下载页面](/zh/download)和当前发行说明作为支持软件包的依据。
