---
layout: doc
titleTemplate: false
title: 'FlyEnv Numa：本地开发模块与配置指南'
description: '将 Numa 作为本地 DNS 服务器运行，使用 Web UI 管理广告拦截列表和上游转发。'
head:
  - - meta
    - name: description
      content: '将 Numa 作为本地 DNS 服务器运行，使用 Web UI 管理广告拦截列表和上游转发。'
  - - meta
    - property: og:title
      content: 'FlyEnv Numa：本地开发模块与配置指南'
  - - meta
    - property: og:description
      content: '将 Numa 作为本地 DNS 服务器运行，使用 Web UI 管理广告拦截列表和上游转发。'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/zh/features/numa
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/zh/features/numa
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# 在 FlyEnv 中的 Numa DNS

Numa 是一个第三方 DNS 服务器（由 razvandimescu 开发，见 [numa.rs](https://numa.rs/)），可在本地解析查询、转发到上游解析器，并阻止广告和跟踪域名，适合在自己的电脑或网络中建立私密且可过滤的 DNS 层。FlyEnv 将其作为托管的本地服务运行：在 Numa 模块中安装版本、一键启动服务器、编辑 TOML 配置、打开内置 Web 界面并查看日志，广告拦截列表和上游转发均可直接使用。

![FlyEnv Numa 模块概览及服务控制截图](https://oss.macphpstudy.com/image/features/numa-1.webp)

## 版本管理

在 **Numa → 版本管理器** 中安装和切换 Numa 版本。

- **静态在线列表：** 使用项目 GitHub Releases 的预构建归档，macOS 和 Linux 为 `.tgz`，Windows 为 `.zip`，安装到 FlyEnv 应用目录。
- **Homebrew：** 在 macOS 和 Linux 上，FlyEnv 通过自定义 tap `razvandimescu/tap` 安装 Numa。
- **自定义目录：** 将 FlyEnv 指向包含你自己 Numa 构建的文件夹，系统会将其中二进制文件与托管版本一起列出。

![FlyEnv Numa 版本管理器及静态、Homebrew 来源截图](https://oss.macphpstudy.com/image/features/numa-2.webp)

## 服务与配置

FlyEnv 以 `numa <numa.toml>` 启动 Numa，通过固定 pid 文件跟踪单个实例，因此一次只运行一个版本。Linux 需要提升权限启动进程（绑定 DNS 端口需要权限），macOS 以普通进程运行，Windows 通过 CMD 运行。

**配置文件**选项卡在原始 TOML 编辑器中编辑 `numa/numa.toml`，不提供可视化表单。旁边保留干净的 `numa.default.toml` 用于参考或恢复；默认模板已针对英文和中文本地化。默认设置包括：

- **DNS 监听器：** `0.0.0.0:53`，将系统或浏览器 DNS 指向本机即可通过 Numa 路由所有查询。
- **Web 界面 / API：** `api_port = 5380`。
- **内置 HTTP 代理：** 使用 80/443 端口和本地域名后缀 `numa`；这些端口也可能被 [Nginx](/zh/features/nginx) 等 Web 服务器占用，同时运行时请重新映射一方。
- **广告拦截列表：** 默认模板启用 HaGeZi 拦截列表。
- **上游转发：** 通过 9.9.9.9 和 1.1.1.1 转发，并以 8.8.8.8 作为后备，同时启用响应缓存和 `[mobile]` 部分。

![FlyEnv 在纯文本 TOML 配置编辑器中编辑 numa.toml 截图](https://oss.macphpstudy.com/image/features/numa-3.webp)

## Web UI (5380)

Numa 自带管理界面，由服务器本身提供。服务运行时，服务选项卡会显示“在浏览器中打开”按钮，启动 `http://127.0.0.1:<api_port>`，默认端口为 5380。FlyEnv 实时读取 `numa.toml` 中的端口，因此修改 `api_port` 后按钮会自动跟随配置。

![FlyEnv 在浏览器中打开 5380 端口的 Numa Web 界面截图](https://oss.macphpstudy.com/image/features/numa-4.webp)

## 日志

**日志**选项卡显示按版本划分的启动错误日志 `numa/numa-<version>-start-error.log`，Numa 版本无法启动时应首先查看这里。FlyEnv 还会索引在 Numa 目录中找到的每个 `numa-*.log` 文件，之前运行的日志也可访问。

![FlyEnv Numa 日志截图](https://oss.macphpstudy.com/image/features/numa-5.webp)

<FeatureRelatedLinks locale="zh" slug="numa" />

## 兼容性说明

Numa 支持 macOS、Linux 和 Windows。Linux 服务绑定 53 端口需要提升权限。此模块不提供 MacPorts 安装源，请改用静态列表或 Homebrew。配置编辑器仅支持原始 TOML，Web 界面是 Numa 自带界面，其功能和布局由上游项目决定。FlyEnv 还提供[内置 DNS 服务器](/zh/features/dns-server)，可解析你为项目配置的[本地站点域名](/zh/guide/host)，无需额外安装。要查看平台可安装的 Numa 版本，请从[下载页面](/zh/download)获取 FlyEnv 后检查应用中的版本管理器；[演示页面](/zh/demos)汇总了实操流程。
