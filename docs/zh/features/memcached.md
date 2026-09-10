---
layout: doc
titleTemplate: false
title: 'FlyEnv Memcached：本地开发模块与配置指南'
description: '通过 Homebrew、MacPorts 或静态包安装 Memcached，并在 FlyEnv 中启动和停止服务。'
head:
  - - meta
    - name: description
      content: '通过 Homebrew、MacPorts 或静态包安装 Memcached，并在 FlyEnv 中启动和停止服务。'
  - - meta
    - property: og:title
      content: 'FlyEnv Memcached：本地开发模块与配置指南'
  - - meta
    - property: og:description
      content: '通过 Homebrew、MacPorts 或静态包安装 Memcached，并在 FlyEnv 中启动和停止服务。'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/zh/features/memcached
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/zh/features/memcached
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# FlyEnv 中的 Memcached

Memcached 是一个开源的内存键值缓存，通常将数据库查询结果、渲染片段或会话数据保存在 RAM 中，以加速 Web 应用；它是 [Redis](/zh/features/redis) 更简单、仅用于缓存的同类工具。FlyEnv 将其作为托管的本地服务运行：从版本管理器安装一个或多个版本，在服务选项卡中启动和停止守护进程，并在默认的 11211 端口访问缓存，无需手动操作包管理器或启动脚本。

![FlyEnv Memcached 模块概览截图](https://oss.macphpstudy.com/image/features/memcached-1.webp)

## 版本管理

在 **Memcached → 版本管理器** 中安装 Memcached。可用安装源取决于你的平台：

- **macOS：** Homebrew 的 `memcached` 配方和 MacPorts 构建。
- **Linux：** Homebrew 配方。
- **Windows：** 来自 `nono303/memcached` GitHub 发布的静态 zip；FlyEnv 会提取匹配的 `libevent-2.1/x64` 或 `cygwin/x64` 构建。
- **自定义版本：** 添加包含你自己 Memcached 安装的目录；FlyEnv 会扫描其中的 `memcached`（或 `memcached.exe`）二进制文件，并将其与托管版本一起列出。

![FlyEnv Memcached 版本管理器及安装来源截图](https://oss.macphpstudy.com/image/features/memcached-2.webp)

## 服务管理

服务选项卡会在前台启动选定版本的真实 `memcached` 二进制文件，并使用 FlyEnv 管理的 pid 文件（`memcached -P .../memcached.pid -vv`），因此应用中的生命周期状态始终反映实际进程。启动时不会传入端口参数，守护进程会监听 Memcached 上游默认的 11211 端口。

- **一键启动和停止：** 可从服务选项卡、侧边栏开关或系统托盘控制服务，与 FlyEnv 中其他服务模块一致。
- **运行时详细输出：** 守护进程以 `-vv` 运行，连接 11211 端口的客户端可获得标准 memcached 服务器，同时活动信息会写入进程自身的输出流。
- **切换版本：** 选择任意已安装版本作为服务运行版本；每个版本的安装彼此独立。

守护进程在 11211 端口运行后，可将应用指向它作为对象缓存：[WordPress](/zh/solutions/wordpress)（通过 object-cache drop-in）和 [Magento](/zh/solutions/magento) 等 PHP 技术栈都支持将 Memcached 用作缓存或会话后端，因此本地 Memcached 实例很适合复现生产环境的缓存行为。

你可以结合[演示](/zh/demos)中的本地应用使用正在运行的服务，或在[下载页面](/zh/download)获取适用于你平台的 FlyEnv。

<FeatureRelatedLinks locale="zh" slug="memcached" />

## 兼容性说明

- Memcached 模块**不提供配置文件编辑**：Memcached 完全通过命令行参数配置，FlyEnv 使用内置参数集启动，而不是生成配置文件。
- 模块**没有日志查看选项卡**：`-vv` 会将输出写入 stdout/stderr，不会写入日志文件，因此应用内没有可跟踪的日志。
- 服务始终监听**默认端口 11211**；FlyEnv 不会传入端口覆盖参数。
- 模块没有管理面板，也没有项目或站点集成，仅负责管理守护进程。可用版本取决于平台安装源，具体以[下载页面](/zh/download)列出的内容为准。
