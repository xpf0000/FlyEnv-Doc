---
layout: doc
titleTemplate: false
title: 'FlyEnv Cloudflared：本地开发模块与配置指南'
description: '安装和切换 cloudflared 版本，将命令加入 PATH，并供 Cloudflare Tunnel 模块使用。'
head:
  - - meta
    - name: description
      content: '安装和切换 cloudflared 版本，将命令加入 PATH，并供 Cloudflare Tunnel 模块使用。'
  - - meta
    - property: og:title
      content: 'FlyEnv Cloudflared：本地开发模块与配置指南'
  - - meta
    - property: og:description
      content: '安装和切换 cloudflared 版本，将命令加入 PATH，并供 Cloudflare Tunnel 模块使用。'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/zh/features/cloudflared
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/zh/features/cloudflared
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Cloudflared 在 FlyEnv 中

cloudflared 是 Cloudflare Tunnel 的开源命令行客户端，通过守护进程将本地服务连接到 Cloudflare 边缘节点，从而可以使用公共主机名访问。FlyEnv 的 Cloudflared 模块负责管理 `cloudflared` 命令行二进制文件：并排安装多个版本、决定终端使用的版本，并从自定义目录注册自己的构建。它在 FlyEnv 中的主要作用是为 [Cloudflare Tunnel 模块](/zh/features/cloudflare-tunnel)提供运行隧道所需的二进制文件；模块本身不运行守护进程，也没有配置文件和日志，仅包含“服务”和“版本管理器”两个标签页。

![FlyEnv Cloudflared 模块概览](https://oss.macphpstudy.com/image/features/cloudflared-1.webp)

## Cloudflared 版本管理

从 **Cloudflared → 版本管理器** 并行安装多个 cloudflared 版本，并让它们同时可用。

- **静态在线列表：** 直接下载官方 cloudflared 构建：macOS 使用 `.tgz` 归档（FlyEnv 会自动解压并移除隔离属性），Windows 使用 `.exe`，Linux 使用普通二进制文件。
- **Homebrew：** 在 macOS 和 Linux 上，也可从 Homebrew 安装 cloudflared，与静态构建并列显示。
- **自定义目录：** 将 FlyEnv 指向包含自定义 cloudflared 构建的任意文件夹，该版本会与受管版本一起出现在已安装列表中。

![Cloudflared 版本管理器界面](https://oss.macphpstudy.com/image/features/cloudflared-2.webp)

## 命令行版本切换

**服务**标签页不会运行后台服务；这里的 cloudflared 只是二进制文件，因此 FlyEnv 不管理守护进程。该标签页实际是一个已安装版本表，用于控制路径。

- **终端版本切换：** 在此选择版本后，会将该安装的二进制文件注册到你的 `PATH`（或移除已有条目），终端中的 `cloudflared` 命令就会解析到所选版本；机制与[系统 PATH 环境指南](/zh/guide/setup-system-path-environment)相同。
- **版本别名：** 为相似构建设置简短别名，便于在列表中区分。
- **清理维护：** 每行显示版本的安装路径，并提供删除不再需要版本的操作。

<FeatureRelatedLinks locale="zh" slug="cloudflared" />

## 兼容性说明

该模块专注于二进制文件和路径：它提供并切换 cloudflared 版本，但不会创建或运行隧道。隧道实例、DNS 规则及每条隧道的日志由独立的 [Cloudflare Tunnel 模块](/zh/features/cloudflare-tunnel)管理；添加隧道时，该模块会要求你从这里安装的 cloudflared 版本中选择一个。要了解如何通过隧道暴露[本地站点](/zh/features/local-sites-https)，请参阅[Cloudflare Tunnel 本地开发指南](/zh/guide/cloudflare-tunnel-local-development)。
