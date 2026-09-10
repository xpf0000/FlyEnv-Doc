---
layout: doc
titleTemplate: false
title: 'FlyEnv FTP 服务器：本地开发模块与配置指南'
description: '使用托管账号运行本地 FTP 服务：macOS/Linux 使用 Pure-FTPd，其他平台可用内置 ftp-srv。'
head:
  - - meta
    - name: description
      content: '使用托管账号运行本地 FTP 服务：macOS/Linux 使用 Pure-FTPd，其他平台可用内置 ftp-srv。'
  - - meta
    - property: og:title
      content: 'FlyEnv FTP 服务器：本地开发模块与配置指南'
  - - meta
    - property: og:description
      content: '使用托管账号运行本地 FTP 服务：macOS/Linux 使用 Pure-FTPd，其他平台可用内置 ftp-srv。'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/zh/features/ftp-server
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/zh/features/ftp-server
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# FTP 服务器在 FlyEnv

FlyEnv 提供两种运行本地 FTP 服务器的方式，并通过同一账户表统一管理：Pure-FTPd 是 macOS 和 Linux 上可安装、受管理的服务，ftp-srv 则是捆绑的基于 Node 的服务器，可在包括 Windows 在内的所有平台运行。无论使用哪种方式，每个账户都拥有独立根目录，服务器运行时会显示可复制的 `ftp://` 地址，无需手动设置守护进程。请从[下载页面](/zh/download)获取包含这两个模块的最新版本。

![FlyEnv FTP 服务器模块概览截图](https://oss.macphpstudy.com/image/features/ftp-server-1.webp)

## 两个实现，一个账户表

这两个模块都会以服务形式显示在 FlyEnv 侧边栏中，你可以启动、停止并固定到系统托盘；与其他服务一样，它们也可以加入[启动组](/zh/features/startup-groups)，让 FTP 服务器与其余开发堆栈一起启动。两者的区别在于服务器二进制文件的来源及支持的平台。

- **Pure-FTPd（仅限 macOS 和 Linux）：**FlyEnv 为你安装、启动并跟踪真正的 `pure-ftpd` 守护进程。其页面包含服务、版本管理器和配置文件三个选项卡。版本来自 Homebrew 和 MacPorts，也支持包含你自行构建的 Pure-FTPd 的自定义目录。一次只能运行一个版本。
- **ftp-srv（所有平台）：**包括 Windows 在内的跨平台选项。服务器是捆绑的 `ftp-srv` npm 库，在 FlyEnv 应用自身的 [Node.js](/zh/features/nodejs) 运行时中运行，因此无需安装任何内容，也没有版本管理器；该页面仅提供服务选项卡。
- **相同的账户流程：**无论使用哪种实现，服务选项卡都会显示相同的用户名、密码和根目录表，因此切换实现不会改变工作方式。

![FlyEnv Pure-FTPd 服务选项卡中的 FTP 账户表截图](https://oss.macphpstudy.com/image/features/ftp-server-1.webp)

## 账户管理

每个 FTP 账户在服务选项卡表格中占一行，可通过“添加”和“编辑”对话框创建或修改凭据。

- **用户名、密码和根目录：**每个账户都有独立的凭据和根文件夹。表格中的值支持点击复制，也可以在文件管理器中直接打开根目录。
- **Pure-FTPd 下的虚拟用户：**账户是通过 `pure-pw useradd` 创建的 Pure-FTPd 虚拟用户，uid 和 gid 取自你选择作为根目录的文件夹，并存储在服务器的 PureDB（`pureftpd.pdb`）中；它们不是操作系统账户。FlyEnv 还会将账户列表同步到 `pureftpd.json` 以供自身记录。
- **ftp-srv 下的 JSON 账户：**凭据存储在 FlyEnv 数据目录中的 `ftp-srv.json`，并由服务器登录处理程序验证。在 Windows 上，旧版 `pureftpd.json` 条目会自动迁移。
- **运行时可复制地址：**运行中的标题会显示可复制的 `ftp://<ip>:<port>` 链接，并提供 IP 选择器，用于选择要提供给客户端的本地地址。

![FlyEnv 添加 FTP 账户并设置用户名、密码和根目录截图](https://oss.macphpstudy.com/image/features/ftp-server-2.webp)

## 配置

Pure-FTPd 使用 `pure-ftpd.conf` 文件运行，该文件由 FlyEnv 根据模板生成，守护进程也会据此启动。

- **纯文本配置编辑器：**配置文件选项卡会在完整编辑器中打开 `pure-ftpd.conf`，并在旁边保留 `.default` 副本作为参考。此模块没有可视化设置表单。
- **配置中的端口：**监听端口从 `Bind …,port` 指令解析，默认为 21。模板还预设了 39000–40000 的被动端口范围。
- **ftp-srv 没有可编辑的服务器设置文件：**捆绑的服务器固定监听 21 端口，使用 49152–65535 的被动端口，并动态选择 PASV 地址：回环客户端使用 127.0.0.1，否则使用主要局域网 IP。它唯一保存的 JSON 是 `ftp-srv.json`，由服务选项卡表格管理的账户存储，而不是供你手动编辑的配置文件。

![FlyEnv 在配置文件选项卡中编辑 pure-ftpd.conf 截图](https://oss.macphpstudy.com/image/features/ftp-server-3.webp)

<FeatureRelatedLinks locale="zh" slug="ftp-server" />

## 兼容性说明

FlyEnv 负责管理本地 FTP 运行时、账户和配置文件；具体可用功能取决于你的平台。**Pure-FTPd 仅限 macOS 和 Linux**，其可安装版本取决于 Homebrew 或 MacPorts 发布的内容。**ftp-srv 可在 FlyEnv 支持的所有平台运行**，因此是 Windows 上唯一的选项，但不提供版本管理和可编辑的服务器配置。Pure-FTPd 以提升的权限（`sudo`）启动，并将日志输出写入 syslog，因此 FlyEnv 不提供其应用内日志查看器；ftp-srv 也不提供日志文件。两种实现默认都监听 21 端口，因此同一时间只能有一个为该端口提供服务。你可以将账户根目录指向任意位置，例如将其设为通过 [Host](/zh/guide/host) 管理的站点文件夹，作为[本地站点](/zh/features/local-sites-https)配置的一部分。
