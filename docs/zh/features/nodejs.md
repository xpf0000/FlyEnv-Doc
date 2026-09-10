---
layout: doc
titleTemplate: false
title: 'FlyEnv Node.js：本地开发模块与配置指南'
description: '安装 Node.js、为项目绑定运行时，并通过端口、日志和本地反向代理运行 Node 服务。'
head:
  - - meta
    - name: description
      content: '安装 Node.js、为项目绑定运行时，并通过端口、日志和本地反向代理运行 Node 服务。'
  - - meta
    - property: og:title
      content: 'FlyEnv Node.js：本地开发模块与配置指南'
  - - meta
    - property: og:description
      content: '安装 Node.js、为项目绑定运行时，并通过端口、日志和本地反向代理运行 Node 服务。'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/zh/features/nodejs
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/zh/features/nodejs
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# 在 FlyEnv 中开发 Node.js

Node.js 是基于 V8 引擎构建的 JavaScript 运行时，可在浏览器之外运行 JavaScript，主要用于 Web 服务器、API 和命令行工具。FlyEnv 的 Node.js 模块将版本管理与项目服务工作流结合起来。选择项目所需的运行时，从项目目录运行命令，并在其他本地服务旁查看端口、环境变量和日志。

## 管理 Node.js 版本

**版本管理器**选项卡列出 FlyEnv 可用的版本以及电脑上已安装的版本。在 macOS 和 Linux 上，FlyEnv 可使用已配置的 `fnm` 或 `nvm` 工具，应用也提供默认的托管运行时工作流。在 Windows 上，当前版本使用 FlyEnv 内置安装流程，而不是操作外部 NVM 或 FNM 安装。

在将运行时分配给项目之前，请使用版本列表完成安装。具体二进制文件和软件包是否可用取决于操作系统及发布元数据，请以当前 FlyEnv 构建中的列表为准，不要假设某个版本可跨平台使用。

## 绑定运行时到项目

在 **Node.js → 项目** 中添加项目路径并选择已安装的二进制文件。FlyEnv 的项目模型会保存选定的二进制路径和版本；进入该目录时，Shell 集成会加载项目环境。当旧版客户端和现代应用需要不同 Node.js 版本时，这一功能非常有用。

 [项目级运行时指南](/zh/guide/project-level-runtime-environment)介绍设置和 Shell 行为，也涵盖采用相同隔离模型的 PHP、Python、Go、Ruby 和 Java 项目。

## 运行一个 Node.js 应用作为托管服务

当应用需要持续运行时，在项目编辑器中启用**作为服务运行**。配置：

- `npm run dev`、`npm run start` 或项目文档中指定的命令；
- TCP 端口，例如 `3000`；
- 直接设置或通过 env 文件提供环境变量；
- 可选的配置文件和日志文件路径；
- 进程创建 PID 文件时使用的路径。

FlyEnv 在项目列表中提供启动和停止控件，并可显示项目输出和错误日志。命令从项目路径运行，因此依赖安装和构建步骤仍由项目负责。

对于自定义技术堆栈，同一项目服务模型也可运行脚本文件或其他可执行文件。它不限于 Express 或 Next.js；关键要求是有效的启动命令和应用可在本地监听的端口。

## 将 Node.js 托管在本地域名下

Node 进程可以监听 `127.0.0.1:3000`，同时由 FlyEnv Host 提供浏览器访问地址。添加站点，将反向代理规则配置到项目端口，并在需要安全来源时启用 HTTPS。这样应用进程生命周期由 Node.js 模块管理，域名和服务器配置由 Host 管理。

相关链接：

- [NestJS 和 Node.js 反向代理设置](/zh/guide/reverse-proxy-nestjs-multi-servers)——配置 Nginx、Apache 或 Caddy。
- [本地站点、自定义域名和 HTTPS](/zh/features/local-sites-https)——了解站点根目录、端口、证书和别名。
- [无需 Docker 部署 Node.js、Python 和 Go](/zh/guide/deploy-nodejs-python-go-without-docker)——完整的项目服务流程。
- [Directus 解决方案](/zh/solutions/directus) 和 [Strapi 解决方案](/zh/solutions/strapi)——Node 驱动本地堆栈示例。

## 查看工作流

 [Node 项目运行时演示](/zh/demos)展示版本选择、项目服务和 Nginx 协同工作。[原生 Node.js、Python 和 Go 服务演示](/zh/demos)展示多个运行时使用相同的服务控制。

<FeatureRelatedLinks locale="zh" slug="nodejs" />

## 兼容性说明

Node.js 包管理器、框架 CLI 和生产进程管理器仍是独立工具。FlyEnv 管理本地运行时选择和进程入口，但不会替代 `package.json` 脚本、锁文件或生产部署平台。请使用[下载页面](/zh/download)安装适用于操作系统的当前 FlyEnv 版本。
