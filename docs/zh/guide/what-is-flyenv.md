---
title: '什么是 FlyEnv？一站式原生本地开发环境'
head:
  - - meta
    - name: description
      content: '了解 FlyEnv 如何在 Windows、macOS 和 Linux 上统一管理语言运行时、Web 服务器、数据库、项目环境、插件和 AI 开发工具。'
---

# 什么是 FlyEnv？

FlyEnv 是适用于 Windows、macOS 和 Linux 的开源**一站式原生本地开发环境**。

它把语言运行时、Web 服务器、数据库、本地服务、开发工具和 AI 开发功能集中到一个可扩展的桌面工作台。

你可以选择项目所需的软件，配置各自的环境，并把依赖服务编入可重复使用的启动组，免去逐个安装和管理工具的麻烦。日常本地开发时，FlyEnv 直接在电脑上运行服务，无需容器。

**告别分散的工具，把开发集中在一个工作台。**

[下载 FlyEnv](/zh/download) · [快速上手](/zh/guide/getting-started) · [观看演示](/zh/demos)

<div id="开发者为什么会用它"></div>

## FlyEnv 解决什么问题

现在的开发环境通常需要 Web 服务器和数据库之外的工具。

一个典型的 Web 应用可能用 PHP 写后端，用 Node.js 构建前端，用 MySQL 保存数据，用 Redis 做缓存，用 Mailpit 测试邮件，再用 Nginx 提供 Web 服务。同一台电脑上的另一个项目，则可能需要完全不同的运行时版本和服务。

单个工具各有所长，难的是一起管理它们。你得安装不同版本、编辑配置文件、记住端口、切换项目、配置本地 HTTPS，还要知道每个项目需要启动哪些服务。

FlyEnv 把这些日常操作放在一起。项目继续使用原有的语言、数据库和 Web 服务器，由 FlyEnv 协调它们组成可用的开发环境。

<div id="平台支持"></div>

## FlyEnv 如何工作

FlyEnv 是连接项目和本机软件的工作台。

```text
你的项目
  Laravel · WordPress · Node.js · Python · Java · AI
                         │
                   FlyEnv 工作台
                         │
  ┌──────────────────────────────────────────────┐
  │ 项目环境                                     │
  │ 运行时版本 · 本地站点 · HTTPS                │
  ├──────────────────────────────────────────────┤
  │ 启动组                                       │
  │ 整理并启动项目依赖服务                       │
  ├──────────────────────────────────────────────┤
  │ 模块管理                                     │
  │ 安装 · 配置 · 运行 · 更新                    │
  ├──────────────────────┬───────────────────────┤
  │ 插件市场             │ AI 工具与 MCP         │
  │ 扩展工作台           │ 连接 AI 智能体        │
  └──────────────────────┴───────────────────────┘
                         │
          Windows · macOS · Linux
```

*FlyEnv 工作台概念示意，展示各部分如何协作。*

FlyEnv 的工作方式有四个特点。

### 在本机原生运行服务

FlyEnv 管理原生运行时和本地服务。你可以继续使用操作系统上的常用工具，直接查看和修改配置文件、检查日志和端口。这套流程无需容器。

### 按需安装软件

从小型 PHP 或 Node.js 环境开始就可以。项目需要数据库、缓存、Web 服务器或其他工具时，再按需安装。

### 为每个项目选择合适的运行时

不同项目可能需要不同的语言版本。FlyEnv 可以安装同一种语言的多个版本，并在支持的语言和工作流中按项目选择运行时，减少反复修改全局环境的需要。

参阅[项目级运行时](/zh/features/per-project-runtimes)和[项目级运行时配置指南](/zh/guide/project-level-runtime-environment)。

项目级版本管理只负责选择运行时版本。需要容器级的安全边界或文件系统隔离时，应使用对应的容器方案。

### 一起启动项目依赖

除了语言运行时，项目还可能需要 Web 服务器、数据库、缓存和其他后台服务。

[启动组](/zh/features/startup-groups)可以把受管理的服务编入可重复使用的组，统一启动或停止。给项目配置好一个启动组，就能省去每天手动重复相同的启停操作。

<div id="flyenv-实际上能做什么"></div>

## 随项目扩展的工作台 {#what-flyenv-actually-does}

FlyEnv 可以管理小型本地 Web 技术栈，也能承接更多开发场景。按项目需要安装和使用相应的模块即可。

| 类别 | 示例 |
| --- | --- |
| 语言运行时 | PHP、Node.js、Python、Java、Go、Rust |
| Web 服务器与站点 | Nginx、Apache、Caddy、FrankenPHP、本地域名和 HTTPS |
| 数据库与本地服务 | MySQL、PostgreSQL、MariaDB、Redis、RabbitMQ、Mailpit |
| 项目工作流 | 项目级运行时、启动组、自定义模块 |
| AI 开发 | AI 编程 CLI、MCP Server、Ollama、CLIProxyAPI、AI Memory 插件 |
| 可选插件 | Kafka、OpenSearch、MySQL Cluster、llama.cpp、Command Shortcuts |

表格列出的是常见例子。各模块的软件版本、支持平台和授权要求可能不同，完整列表见[功能总览](/zh/features)。

### 使用插件扩展工作台

按需安装软件和[插件市场](/zh/features/plugin-market)有不同的用途。

- 按需安装软件让你选择项目所需的运行时和服务。
- 插件市场让你为 FlyEnv 添加可选集成，例如专用管理界面和工具。

例如，你可以先安装 PHP、Nginx 和 MySQL。新应用需要时，再加上 Node.js 和 Redis。遇到新的开发需求，也可以安装 Kafka、OpenSearch 或 AI Memory。

你可以通过官方目录或可信的第三方源管理插件。安装和更新插件需要有效的 FlyEnv 授权。具体要求和平台支持见各插件的功能页面。

**按需扩展，保留简洁的日常工作台。**

你可以让日常工作台只保留常用工具，等项目有新的要求时再扩展。

<div id="真正的强项-当所有能力协同工作时"></div>

## 一个实际的开发流程 {#the-real-power-when-everything-works-together}

以使用 Vue 前端的 Laravel 应用为例，它的本地环境可以这样配置。

| 组件 | 在项目中的用途 |
| --- | --- |
| PHP 8.4 | 后端运行时 |
| Node.js | 前端开发和构建工具 |
| Nginx 和 PHP-FPM | 提供 PHP 应用的 Web 服务 |
| MySQL | 应用数据库 |
| Redis | 缓存和队列 |
| Mailpit | 本地邮件测试 |
| `https://myapp.test` | 启用 HTTPS 的本地应用地址 |

这是一套示例配置。实际使用时，请选择适合自己项目的版本和服务。

使用 FlyEnv 时，可以按以下步骤准备环境。

1. 安装所需的软件版本。
2. 配置项目的 PHP 和 Node.js 环境。
3. 准备数据库，并更新应用的环境配置。
4. 创建本地站点，配置自定义域名和 HTTPS。
5. 把受管理的服务加入启动组。
6. 按项目要求执行应用的初始化和开发命令。

以后回到这个项目时，可以直接复用启动组。在同一个工作台中访问本地站点、管理依赖并检查服务日志。

框架仍按自己的要求执行初始化和开发命令。FlyEnv 让命令所依赖的本地环境更容易准备、管理和复用。

参阅[在 FlyEnv 中运行 Laravel](/zh/guide/run-laravel-use-flyenv)，了解[本地站点与 HTTPS](/zh/features/local-sites-https)，或浏览其他[项目解决方案](/zh/solutions)。

<div id="_13-分钟了解-flyenv-核心功能"></div>

### 13 分钟了解 FlyEnv 核心功能 {#watch-flyenv-s-core-features-in-13-minutes}

这段演示介绍 FlyEnv 的模块安装、版本管理、服务控制、启动组、本地站点和开发工具。

<div style="position: relative; width: 100%; aspect-ratio: 16 / 9; overflow: hidden; border-radius: 8px; background: #111827;">
  <iframe src="https://www.youtube.com/embed/TA2NA0JeGdo" title="FlyEnv 功能总览：无需 Docker 的原生本地开发" style="position: absolute; inset: 0; width: 100%; height: 100%; border: 0;" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

[在 YouTube 上观看](https://www.youtube.com/watch?v=TA2NA0JeGdo) · [浏览更多短演示](/zh/demos)

<div id="为什么-ai-让-本地环境-的定义变了"></div>

## 让 AI 智能体接入本地开发 {#why-ai-changes-the-definition-of-a-local-environment}

AI 编程智能体在实际项目中除了读取源码，还可能需要知道当前使用的运行时、数据库、本地站点地址、服务状态、配置和日志。

FlyEnv 在同一个本地工作台中支持这些场景。传统开发流程可以继续独立使用。

### AI 编程 CLI 管理

FlyEnv 可以和其他开发工具一起管理受支持的 AI 编程客户端，包括 Claude Code、Codex、OpenCode 和 Kimi。

### 内置 MCP Server

[FlyEnv MCP Server](/zh/features/mcp-server)让兼容的智能体以结构化方式读取受管理的环境信息并执行部分操作。智能体能查看或修改什么，取决于可用工具和审批设置。

因此，智能体除了编写代码，也可以协助准备环境、检查服务或排查本地应用问题。

### 共享 AI Memory

可选的 [AI Memory 插件](/zh/features/ai-memory)为已连接的智能体提供持久的本地存储，可以跨会话保存和检索有用信息。开发偏好、项目决策、配置步骤和可复用的修复方法都可以保存，全局记忆和项目记忆分别管理。

两个已连接的客户端使用对应的记忆集合时，一个客户端的智能体可以读取另一个客户端保存的知识。实际保存和检索取决于客户端收到的指令及发出的工具调用。

**AI 编写代码，FlyEnv 帮它运行项目所需的服务。**

设置方法见 [FlyEnv AI 工作台与 MCP 指南](/zh/guide/ai-coding-workspace-mcp)。

<div id="flyenv-与-docker、xampp-类工具的区别"></div>

## FlyEnv 与其他工具的区别 {#how-flyenv-differs-from-docker-and-xampp-style-stacks}

FlyEnv 专注于可扩展的原生本地开发。这套方式可以适配不同框架，也允许按项目选择软件与服务。

| 开发方式 | 主要侧重点 |
| --- | --- |
| 传统集成环境 | 用熟悉的一组组件快速搭起本地 Web 技术栈 |
| 基于容器的环境 | 隔离、可复现的容器环境与部署流程 |
| FlyEnv | 在一个原生工作台中管理项目运行时、本地服务、站点和开发工具 |

如果你正在使用 XAMPP、Laragon、MAMP、Laravel Herd 或 ServBay，也可以用 FlyEnv 按照项目需求组织和扩展本地环境。

FlyEnv 可以和 Docker 一起使用。日常开发可直接用本机服务。需要容器隔离、可复现镜像或和部署环境保持一致时，容器仍然有用。

浏览[工具比较](/zh/compare/)，或阅读 [FlyEnv 与 Docker、XAMPP 的比较](/zh/guide/flyenv-vs-docker-xampp)。

<div id="由社区共建-并由社区驱动"></div>

## 开源与灵活授权 {#built-and-driven-by-its-community}

FlyEnv 公开开发。社区提出的需求、问题报告、翻译和 Pull Request 会影响产品方向，并帮助它支持更多开发流程。

你可以在 GitHub [查看源码](https://github.com/xpf0000/FlyEnv)、[提出功能需求](https://github.com/xpf0000/FlyEnv/issues)或[提交 Pull Request](https://github.com/xpf0000/FlyEnv/pulls)。

核心本地开发功能可以免费使用。付费授权解除适用的免费版限制，并解锁需要授权的功能。FlyEnv 提供一次性付费授权，也可以通过符合条件的社区贡献或内容分享申请授权。

当前条款和获取方式见[许可证页面](/zh/license)。

## 常见问题 {#常见问题}

### FlyEnv 只适合 PHP 开发者吗？

FlyEnv 支持多种运行时，PHP 是其中之一。它也支持使用 Node.js、Python、Java、Go 等语言的开发流程，并可搭配数据库和本地服务。

### 使用 FlyEnv 需要 Docker 吗？

FlyEnv 的原生服务无需 Docker。如果项目需要容器，可以在同一台电脑上同时使用 FlyEnv 和 Docker。

### 必须安装所有支持的工具吗？

按项目需求安装即可。以后需要新工具时，可以再安装软件或通过可选插件扩展工作台。

### 不同项目可以使用不同的运行时版本吗？

可以。对于支持的语言和工作流，可以安装多个版本，并按项目选择运行时。详见[运行时配置指南](/zh/guide/project-level-runtime-environment)。

### 不用 AI 编程工具也能使用 FlyEnv 吗？

可以。AI 编程客户端、MCP 集成和 AI Memory 均为可选功能。你可以仅使用 FlyEnv 的本地开发功能。

### FlyEnv 免费且开源吗？

FlyEnv 是开源软件，核心开发功能免费。部分工具和更高的使用额度需要授权，当前政策见[许可证页面](/zh/license)。

<div id="下一步"></div>

<div id="flyenv-适合谁"></div>

## 开始使用 {#next-steps}

按你的目标选择下一步。

| 我想…… | 对应入口 |
| --- | --- |
| 安装 FlyEnv 并搭好第一个本地环境 | [下载](/zh/download)和[快速上手](/zh/guide/getting-started) |
| 确认常用工具是否受支持 | [功能总览](/zh/features) |
| 在本机运行已有应用 | [解决方案](/zh/solutions) |
| 看看 FlyEnv 实际怎么用 | [演示](/zh/demos) |
| 从其他开发环境切换过来 | [工具比较](/zh/compare/) |
| 给工作台增加功能 | [插件市场](/zh/features/plugin-market) |
| 连接 AI 编程智能体 | [AI 工作台与 MCP 指南](/zh/guide/ai-coding-workspace-mcp) |

从一个项目和它需要的工具开始。随着开发流程演进，再扩展 FlyEnv 工作台。
