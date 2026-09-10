---
layout: doc
titleTemplate: false
title: 'FlyEnv RabbitMQ：本地开发模块与配置指南'
description: '运行 RabbitMQ，管理配置、Management Plugin Web UI 和各版本日志。'
head:
  - - meta
    - name: description
      content: '运行 RabbitMQ，管理配置、Management Plugin Web UI 和各版本日志。'
  - - meta
    - property: og:title
      content: 'FlyEnv RabbitMQ：本地开发模块与配置指南'
  - - meta
    - property: og:description
      content: '运行 RabbitMQ，管理配置、Management Plugin Web UI 和各版本日志。'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/zh/features/rabbitmq
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/zh/features/rabbitmq
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# 在 FlyEnv 中运行 RabbitMQ

RabbitMQ 是开源消息代理：应用通过 AMQP 等协议发送消息，由 RabbitMQ 路由到队列供其他服务异步消费。它常用于解耦服务、后台任务、任务队列和事件驱动工作流，例如 [Laravel](/zh/solutions/laravel) 应用的队列驱动；对于更轻量的队列需求，[Redis](/zh/features/redis) 也可作为队列后端。FlyEnv 将 RabbitMQ 作为本地托管代理运行：从版本管理器安装版本，使用生成的环境配置启动代理，默认启用管理插件，并按主版本查看服务器日志；这些操作都集中在 RabbitMQ 模块的服务、版本管理器、配置文件和日志选项卡中。

![FlyEnv RabbitMQ 模块概览](https://oss.macphpstudy.com/image/features/rabbitmq-1.webp)

## 版本管理

从 **RabbitMQ → 版本管理器** 安装并保留多个版本，然后选择服务运行的版本。

- **各平台安装源：** macOS 使用 Homebrew（`rabbitmq`）和 MacPorts（`rabbitmq-server`），Linux 使用 Homebrew，Windows 使用静态软件包。
- **自定义版本：** 添加包含自有 RabbitMQ 安装的目录，FlyEnv 扫描后会与托管版本一起列出。
- **单个当前服务版本：** 服务选项卡将选定的一个版本作为主 RabbitMQ 代理运行。

![FlyEnv RabbitMQ 版本管理器和安装源](https://oss.macphpstudy.com/image/features/rabbitmq-2.webp)

## 服务与配置

FlyEnv 使用 `rabbitmq-server -detached` 启动代理，将 `RABBITMQ_CONF_ENV_FILE` 指向生成的 `rabbitmq-<major>.conf`（Windows 上为 `rabbitmq-<major>.bat`）。配置会固定节点为 `NODE_IP_ADDRESS=127.0.0.1` 和 `NODENAME=rabbit@localhost`，并指定日志和 mnesia 目录。代理通过 [Erlang](/zh/features/erlang) 的 epmd 守护化运行，FlyEnv 通过监视节点 pid 文件判断是否启动成功。AMQP 默认监听 5672 端口。

每个主版本在 FlyEnv 的 RabbitMQ 目录下都有独立文件，可从**配置文件**选项卡的原始编辑器修改：

- **`rabbitmq-<major>.conf` / `.bat`：** 代理启动时使用的环境配置。
- **`rabbitmq-<major>-default.conf`：** 该主版本的默认配置。
- **`enabled_plugins-<major>`：** 启用插件列表，FlyEnv 写入 `[rabbitmq_management].` 以启用管理插件。

![FlyEnv RabbitMQ 配置文件编辑器](https://oss.macphpstudy.com/image/features/rabbitmq-3.webp)

## 管理界面 (15672)

管理插件会自动启用：FlyEnv 将 `[rabbitmq_management].` 写入 `enabled_plugins-<major>`，并在 macOS 上运行 `rabbitmq-plugins enable rabbitmq_management`，代理启动后控制台即可使用。

- **一键访问：** 代理运行时，服务选项卡显示按钮，可打开 `http://localhost:15672/` 管理界面。
- **上游控制台：** 队列、交换机、连接和用户均在 RabbitMQ 自带管理界面中管理，FlyEnv 不额外提供管理员界面。

![FlyEnv RabbitMQ 服务选项卡中的管理界面按钮](https://oss.macphpstudy.com/image/features/rabbitmq-4.webp)

## 日志

**日志**选项卡直接在 FlyEnv 中打开 `log-<major>/rabbit@localhost.log`。日志按主版本保存，每条已安装 RabbitMQ 版本都有独立日志文件；版本启动失败或队列行为异常时应首先查看这里。

![FlyEnv RabbitMQ 服务器日志查看器](https://oss.macphpstudy.com/image/features/rabbitmq-5.webp)

<FeatureRelatedLinks locale="zh" slug="rabbitmq" />

## 兼容性说明

在 Windows 上，RabbitMQ 需要 Erlang：FlyEnv 从环境变量、`PATH` 或应用目录解析 `ERLANG_HOME`，并自动启动 `epmd.exe`；如果 epmd 未运行，版本探测会因“no epmd”错误失败，因此必须先安装 Erlang。RabbitMQ 支持 macOS、Windows 和 Linux，但安装源不同：macOS 使用 Homebrew 和 MacPorts，Linux 仅使用 Homebrew，Windows 使用静态软件包。配置按主版本隔离，FlyEnv 不提供上游管理控制台之外的管理员界面，也没有项目集成。实际可安装内容请以内置版本列表和[下载页面](/zh/download)为准，并查看[演示](/zh/demos)。
