---
layout: doc
titleTemplate: false
title: 'FlyEnv Mailpit：本地开发模块与配置指南'
description: '用 Mailpit 在本地捕获测试邮件，管理 SMTP 1025、Web UI 8025、可视化配置和日志。'
head:
  - - meta
    - name: description
      content: '用 Mailpit 在本地捕获测试邮件，管理 SMTP 1025、Web UI 8025、可视化配置和日志。'
  - - meta
    - property: og:title
      content: 'FlyEnv Mailpit：本地开发模块与配置指南'
  - - meta
    - property: og:description
      content: '用 Mailpit 在本地捕获测试邮件，管理 SMTP 1025、Web UI 8025、可视化配置和日志。'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/zh/features/mailpit
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/zh/features/mailpit
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# FlyEnv 本地邮件测试

Mailpit 是一个面向开发者的开源 SMTP 测试工具：它充当虚拟邮件服务器，捕获应用发送的邮件并显示在 Web 收件箱中，因此测试邮件不会到达真实收件人。FlyEnv 将其作为托管的本地服务运行：从版本管理器安装版本，一键启动二进制文件，应用通过 SMTP 发送的每封邮件都会进入 Mailpit Web 收件箱。SMTP 监听器默认使用 1025 端口，Web 界面使用 8025 端口；配置和日志都可直接在应用内编辑和查看。

![FlyEnv Mailpit 模块概览截图](https://oss.macphpstudy.com/image/features/mailpit-1.webp)

## 版本管理

在 **Mailpit → 版本管理器** 中安装并并行保留多个 Mailpit 版本。

- **按平台提供安装源：** macOS 和 Linux 使用静态构建与 Homebrew（`mailpit`），Windows 使用官方 `axllent/mailpit` 发布归档的静态在线列表。
- **自定义版本：** 添加包含你自己 Mailpit 安装的目录；FlyEnv 会扫描该目录，并将这些版本与托管版本一起列出。
- **安装处理：** 在 macOS 上，FlyEnv 安装后会清除隔离属性，使二进制文件无需 Gatekeeper 提示即可运行；每个版本通过执行 `mailpit version` 进行识别。

![FlyEnv Mailpit 版本管理器及安装来源截图](https://oss.macphpstudy.com/image/features/mailpit-2.webp)

## 服务与配置

**服务**选项卡可以启动和停止选定的 Mailpit 版本。FlyEnv 启动原始 `mailpit` 二进制文件，并将 `mailpit.conf` 中的每一行 `MP_*` 作为环境变量传入，因此你编辑的文件就是进程实际接收的配置。默认模板监听 SMTP 的 `0.0.0.0:1025`、Web 界面的 `0.0.0.0:8025` 和 POP3 的 `0.0.0.0:1110`，最多保留 500 封邮件（`MP_MAX_MESSAGES`）。

配置位于 **配置文件** 选项卡，可用两种视图编辑同一个 `mailpit.conf`：

- **可视化表单：** 调整约 45 个 `MP_*` 设置，无需手动编辑文件，包括数据库和存储限制、Web 界面绑定/TLS/身份验证、SpamAssassin、SMTP 绑定/TLS/身份验证/中继、POP3 和邮件标签。
- **原始编辑器：** 切换到完整源码视图，编辑表单未覆盖的选项；旁边保留 `mailpit.conf.default` 作为参考模板。

该配置由所有已安装的 Mailpit 版本共享，因此切换版本时端口和限制保持不变。

![FlyEnv Mailpit 配置文件及可视化 MP_* 设置表单截图](https://oss.macphpstudy.com/image/features/mailpit-3.webp)

## Web 界面

服务运行时，服务选项卡会显示“在浏览器中打开”按钮，直接跳转到 Mailpit Web 界面。FlyEnv 从配置中的 `MP_UI_BIND_ADDR` 解析端口，并打开 `http://127.0.0.1:<port>/`，默认端口为 8025。你可以在其中查看每封捕获邮件的标头、HTML 和纯文本内容以及附件。

要捕获邮件，请将应用的 SMTP 设置指向 `127.0.0.1:1025`。[本地邮件测试指南](/zh/guide/local-email-testing-mailpit)介绍完整配置流程；[Laravel 解决方案](/zh/solutions/laravel)展示常见框架项目如何将邮件程序连接到 Mailpit；[WordPress](/zh/solutions/wordpress) 站点也可以通过 SMTP 插件以相同方式转发通知邮件。

![FlyEnv 从服务选项卡打开 Mailpit Web 界面截图](https://oss.macphpstudy.com/image/features/mailpit-4.webp)

## 日志

**日志**选项卡可直接在 FlyEnv 中打开 Mailpit 日志。日志路径由配置中的 `MP_LOG_FILE` 设置决定，默认是 FlyEnv Mailpit 目录下的 `mailpit.log`，因此查看器始终跟踪正在运行的服务实际写入的文件。当服务无法启动或邮件未按预期到达时，应首先查看这里。

![FlyEnv Mailpit 日志查看器截图](https://oss.macphpstudy.com/image/features/mailpit-5.webp)

<FeatureRelatedLinks locale="zh" slug="mailpit" />

## 兼容性说明

FlyEnv 管理本地 Mailpit 运行时、`mailpit.conf` 配置和日志文件，但不会自动将 Mailpit 连接到你的项目或 [PHP](/zh/features/php) 设置；请自行将每个应用的 SMTP 主机和端口指向 `127.0.0.1:1025`。版本管理器提供的版本取决于你的平台（macOS 和 Linux 使用静态构建与 Homebrew，Windows 使用静态发布归档）以及这些来源发布的内容。Mailpit 使用一份由所有已安装版本共享的全局配置，而不是按版本划分的配置文件。请以应用内版本列表和[下载页面](/zh/download)作为你电脑上可安装版本的权威依据。
