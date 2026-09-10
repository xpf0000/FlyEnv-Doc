---
layout: doc
titleTemplate: false
title: 'FlyEnv RustFS：本地开发模块与配置指南'
description: '运行 RustFS，管理可视化配置和各版本数据目录，并打开 RustFS Console。'
head:
  - - meta
    - name: description
      content: '运行 RustFS，管理可视化配置和各版本数据目录，并打开 RustFS Console。'
  - - meta
    - property: og:title
      content: 'FlyEnv RustFS：本地开发模块与配置指南'
  - - meta
    - property: og:description
      content: '运行 RustFS，管理可视化配置和各版本数据目录，并打开 RustFS Console。'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/zh/features/rustfs
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/zh/features/rustfs
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# 本地基于 FlyEnv 的 RustFS 对象存储系统  

RustFS 是一个使用 Rust 编写、提供 S3 兼容 API 的开源分布式对象存储系统。它适合希望在自有基础设施上运行对象存储的场景；在开发期间，也可作为无需容器或云账户的本地 S3 替代品。FlyEnv 将 RustFS 作为托管的本地服务运行，无需编写 Shell 脚本即可使用存储。你可以在应用中安装 RustFS 构建，通过分组设置表单配置 `rustfs.conf`，为每个版本保留独立数据目录，并一键在浏览器中打开 RustFS 控制台。

![FlyEnv RustFS 模块概览截图](https://oss.macphpstudy.com/image/features/rustfs-1.webp)

## 版本管理

在 **RustFS → 版本管理器** 中安装并保留多个 RustFS 构建，然后选择服务要运行的版本。

- **仅提供静态源：** RustFS 版本来自 FlyEnv 在线列表中的现成构建，Windows、macOS 和 Linux 均使用 zip 归档。本模块不提供 Homebrew 或 MacPorts 安装源。
- **自定义目录：** 将 FlyEnv 指向包含你自己 RustFS 二进制文件的文件夹，系统会将其与托管构建一起列出。
- **单个运行实例：**固定的 pid 文件确保该模块一次只运行一个 RustFS 服务器。

![FlyEnv RustFS 版本管理器及静态在线构建列表截图](https://oss.macphpstudy.com/image/features/rustfs-2.webp)

## 服务与配置

服务选项卡会以 `rustfs server` 启动所选构建，并将 `rustfs/rustfs.conf` 中的 `RUSTFS_*` 键转换为参数，同时将环境值传递给进程。侧边栏开关（系统托盘中也有对应开关）可启动或停止服务。

- **按版本数据目录：**每个构建都会将对象存储在自己的数据路径中（默认为 FlyEnv RustFS 文件夹下的 `rustfs/data`）。可从服务工具栏选择其他文件夹，且该选择会按版本记忆。
- **可视化设置表单：**配置文件选项卡按网络、安全、常规、高级和性能分组，提供约 19 个 `RUSTFS_*` 键的设置，包括服务器地址、服务器域名、访问密钥和秘密密钥（或密钥文件）、控制台启用状态和地址、OBS 端点、TLS 路径、区域、KMS 模式（本地或 vault）以及缓冲配置。
- **纯文本编辑器：**切换到 `rustfs.conf` 的完整文本视图，可编辑表单未展示的键；修改会在下次启动时生效。

![FlyEnv RustFS 配置文件及分组 RUSTFS_* 设置表单截图](https://oss.macphpstudy.com/image/features/rustfs-3.webp)

## 控制台

RustFS 自带 Web 控制台，FlyEnv 会为你连接其地址。控制台端口从配置中的 `RUSTFS_CONSOLE_ADDRESS` 解析，默认为 `http://127.0.0.1:9001/`；服务工具栏中的控制台按钮可直接在浏览器中打开。随后使用配置中的访问凭据登录，即可在官方 RustFS Web 界面中管理存储桶、对象和访问策略，无需其他工具。

![FlyEnv 从服务选项卡在浏览器中打开 RustFS 控制台截图](https://oss.macphpstudy.com/image/features/rustfs-4.webp)

## 日志

RustFS 在 FlyEnv 中提供两个专用日志选项卡：**日志**显示按版本记录的 `start-out` 输出，**错误日志**显示对应的 `start-error` 文件。当构建因端口占用、数据目录无法读取或 TLS 路径错误等原因拒绝启动时，错误日志会首先显示原因。

<FeatureRelatedLinks locale="zh" slug="rustfs" />

## 兼容性说明

该模块一次只运行一个 RustFS 实例，即单个版本、数据目录和控制台地址，因此请从服务选项卡切换构建，不要尝试并行运行服务器。可安装构建取决于静态在线列表针对你的操作系统发布的内容；Homebrew 和 MacPorts 不是 RustFS 的安装来源。FlyEnv 负责本地进程、`rustfs.conf` 文件和按版本数据目录；存储桶、对象以及 S3 兼容 API 背后的所有内容均由 RustFS 自身负责。支持 S3 的应用（例如 [Nextcloud](/zh/solutions/nextcloud) 外部存储或 [Strapi](/zh/solutions/strapi) 上传）可在开发期间指向此端点；FlyEnv 还提供 [MinIO](/zh/features/minio) 作为另一种 S3 兼容对象存储模块。请查看[下载页面](/zh/download)了解当前版本，并浏览[演示](/zh/demos)查看模块实际运行效果。
