---
layout: doc
titleTemplate: false
title: 'FlyEnv MinIO：本地开发模块与配置指南'
description: '运行 MinIO，管理可视化配置和各版本数据目录，并打开 9001 端口的 MinIO Console。'
head:
  - - meta
    - name: description
      content: '运行 MinIO，管理可视化配置和各版本数据目录，并打开 9001 端口的 MinIO Console。'
  - - meta
    - property: og:title
      content: 'FlyEnv MinIO：本地开发模块与配置指南'
  - - meta
    - property: og:description
      content: '运行 MinIO，管理可视化配置和各版本数据目录，并打开 9001 端口的 MinIO Console。'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/zh/features/minio
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/zh/features/minio
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# FlyEnv 本地对象存储

MinIO 是一个支持 Amazon S3 API 的开源对象存储服务器。当应用在开发和测试期间需要 S3 兼容存储、又无需创建真实云存储桶时，开发者可以使用它。FlyEnv 将 MinIO 作为托管的本地服务运行，无需 Docker 或手动设置即可提供存储。你可以在应用中安装 MinIO 版本，通过可视化设置表单编辑 `minio.conf`，为每个版本指定独立数据目录，并一键在浏览器中打开 MinIO Console。

![FlyEnv MinIO 模块概览截图](https://oss.macphpstudy.com/image/features/minio-1.webp)

## 版本管理

在 **MinIO → 版本管理器** 中安装并保留多个 MinIO 版本，然后选择服务要运行的版本。

- **安装源：** 静态在线列表中的现成 MinIO 构建，以及提供 MinIO 的平台上的 Homebrew。
- **自定义版本：** 添加包含你自己 MinIO 安装的目录；FlyEnv 会将这些版本与托管版本一起列出。
- **安装处理：** 在 macOS 上安装后，FlyEnv 会修复二进制文件权限（`chmod 0755`）并清除隔离属性，使服务器可以立即启动。

![FlyEnv MinIO 版本管理器及安装来源截图](https://oss.macphpstudy.com/image/features/minio-2.webp)

## 服务与配置

服务选项卡会以前台真实进程启动选定的 MinIO 版本——运行 `minio server <dataDir>`，并根据你的配置构建 `--address`、`--console-address` 和 `--certs-dir` 参数。固定的 pid 文件确保模块只有一个运行实例；侧边栏开关（系统托盘中也可用）可启动或停止服务。

- **按版本划分数据目录：** 每个 MinIO 版本将对象存储在自己的目录中（默认为 FlyEnv MinIO 文件夹下的 `minio/data`）。可通过服务工具栏的文件夹选择器更改，设置会按版本记忆。
- **可视化常用设置表单：** 配置文件选项卡通过分组表单编辑 `minio/minio.conf`，约 30 个设置涵盖网络、安全、存储、集群、性能和常规选项，包括 `MINIO_ADDRESS`、`MINIO_CONSOLE_ADDRESS`、`MINIO_ROOT_USER` 和 `MINIO_ROOT_PASSWORD`（默认 `minioadmin`/`minioadmin`）、证书目录、浏览器开关、纠删码类别、[etcd](/zh/features/etcd) 和 API 调优选项。
- **原始编辑器：** 切换到 `minio.conf` 的完整源码视图，编辑表单未覆盖的选项；`MINIO_*` 行会在下次启动时应用到服务器。

![FlyEnv MinIO 配置文件及常用设置表单截图](https://oss.macphpstudy.com/image/features/minio-3.webp)

## MinIO 控制台

MinIO 自带 Web Console，FlyEnv 会为你连接它。控制台地址默认规范化为 `127.0.0.1:9001`（可在配置中通过 `MINIO_CONSOLE_ADDRESS` 调整），服务工具栏中的 Console 按钮可直接在浏览器打开，无需额外安装或查找端口。使用配置中的 root 凭据登录后，即可通过官方 MinIO Web 界面管理存储桶、对象和访问策略。

![FlyEnv MinIO 控制台截图](https://oss.macphpstudy.com/image/features/minio-4.webp)

## 日志

**日志**选项卡可直接在 FlyEnv 中打开每个版本的日志文件：`minio-<version>-start-out.log` 记录标准输出，`minio-<version>-start-error.log` 记录错误。当版本无法启动时，应首先查看错误日志，端口冲突和数据目录问题会立即显示在其中。

![FlyEnv MinIO 按版本日志查看器截图](https://oss.macphpstudy.com/image/features/minio-5.webp)

<FeatureRelatedLinks locale="zh" slug="minio" />

## 兼容性说明

MinIO 模块一次只运行一个实例——一个版本、一个数据目录和一个控制台地址。因此应在服务选项卡中切换版本或数据目录，而不要启动多个服务器。版本管理器提供的版本取决于静态在线列表以及 Homebrew 为你平台发布的内容；MacPorts 不提供 MinIO 安装源。FlyEnv 管理本地 MinIO 进程、配置文件和数据目录；存储桶内容、访问策略以及 S3 兼容 API 中的其他内容由 MinIO 自身负责。支持 S3 API 的应用（例如 [Strapi](/zh/solutions/strapi) 站点的上传提供程序或 [Nextcloud](/zh/solutions/nextcloud) 实例的外部存储）都可以在开发期间指向此本地端点。如果偏好 Rust 实现，也可使用 [RustFS](/zh/features/rustfs) 作为替代的 S3 兼容模块。请以应用内版本列表和[下载页面](/zh/download)为准，并查看[演示](/zh/demos)了解模块使用流程。
