---
layout: doc
titleTemplate: false
title: 'FlyEnv Kafka 插件：本地 KRaft Broker 与主题管理'
description: '在 FlyEnv 中安装 Kafka 版本、绑定 Java 运行时、运行本地 KRaft Broker，并管理主题、配置文件和日志。'
---

# 在 FlyEnv 中使用 Kafka

[Apache Kafka](https://kafka.apache.org/documentation/) 是事件流平台，应用可以通过主题发布和消费记录。FlyEnv 的 Kafka 插件将本地 Broker 纳入工作区，提供版本管理、Java 选择、主题操作，以及配置和日志界面。

从 **[设置 → 插件市场](/zh/features/plugin-market)** 安装 **Kafka**，然后打开侧边栏中的模块。模块包含 **服务**、**版本管理**、**主题**、**配置文件** 和 **日志** 标签页。

## Kafka 版本与 Java 绑定

**版本管理** 从 Apache 下载服务器和归档服务器安装 Kafka 发行包。你可以保留多个版本，并在 **服务** 页选择要运行的版本。模块也会扫描已配置的自定义安装目录。

![FlyEnv 中的 Kafka 版本列表及安装状态和安装按钮](https://oss.macphpstudy.com/image/features/plugin/kafka-versions.png)

服务列表中的每个 Kafka 安装项都有独立的 **选择 Java** 控件。插件会列出检测到的 Java 17 及以上运行时，并记住该安装项的绑定。如果没有兼容的运行时，**安装兼容的 Java** 会打开 [Java 模块](/zh/features/java)。

更换 Java 绑定前需要停止服务。启动时，插件会检查 Java 可执行文件及主版本号；所选 JDK 还需满足对应 Kafka 版本的要求。

![Kafka 服务页中的已安装 Broker、Java 运行时选择器和启动按钮](https://oss.macphpstudy.com/image/features/plugin/kafka-service.png)

## 本地 KRaft Broker

使用标准服务控件即可启动、停止或重启 Kafka。FlyEnv 会准备同时承担 Broker 和 Controller 角色的单节点 KRaft 环境，无需另行运行 ZooKeeper。

- **客户端地址：** 生成的配置公布 `127.0.0.1:9092` 作为连接地址。
- **Controller 监听地址：** 生成的配置使用 `127.0.0.1:9093`。
- **存储初始化：** 尚未初始化时，FlyEnv 会生成集群 UUID 并格式化 KRaft 存储。
- **按版本保存文件：** 配置、数据和日志位于所选版本的实例目录中。

默认配置将内部主题的副本数设为 1，适合本地应用开发。将应用的生产者和消费者连接到公布的客户端地址即可。

## 主题管理

**主题** 页使用 **服务** 页选中的 Kafka 版本及其绑定的 Java 运行时。使用前请先启动 Broker。

- **刷新列表：** 查看本地 Broker 上的主题名称。
- **创建主题：** 输入名称并选择 1～100 个分区；插件以副本数 1 创建主题。
- **删除：** 确认后删除列表中的主题。

该界面提供主题的创建、查看和删除功能。消息的生产和消费由你的应用或 Kafka 自带工具完成。

## 配置与日志

**配置文件** 页直接编辑实例的 `server.properties`，并提供生成的 `server-default.properties` 作为默认配置参考。在此调整监听地址或 Broker 设置后，重启服务使变更生效。

![Kafka server.properties 编辑器中的本地 KRaft 监听地址和存储设置](https://oss.macphpstudy.com/image/features/plugin/kafka-configuration.png)

**日志** 页优先打开 `server.log`，不存在时则显示启动错误或输出日志。Broker 无法启动、Java 运行时不兼容，或应用连接失败时，可以先查看这些文件。

## 兼容性说明

插件适用于 macOS、Windows 和 Linux，负责管理本地 KRaft Broker，不用于部署分布式生产集群。Kafka 与 JDK 的具体兼容性仍取决于所安装的版本；插件的 Java 选择器要求至少 Java 17。

前往[插件市场](/zh/features/plugin-market)了解其他可选模块，或查看 FlyEnv 的 [RabbitMQ](/zh/features/rabbitmq) 消息队列集成。
