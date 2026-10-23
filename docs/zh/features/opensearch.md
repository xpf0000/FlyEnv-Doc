---
layout: doc
titleTemplate: false
title: 'FlyEnv OpenSearch 插件：本地搜索与 Dashboards'
description: '通过 FlyEnv 安装 OpenSearch 版本、管理本地搜索服务、编辑配置，并启动版本匹配的 OpenSearch Dashboards。'
---

# 在 FlyEnv 中使用 OpenSearch

[OpenSearch](https://docs.opensearch.org/latest/install-and-configure/install-opensearch/index/) 是搜索与分析引擎。FlyEnv 插件提供版本管理、服务控制、配置编辑和日志查看，还包含本地开发模式，以及集成的 OpenSearch Dashboards 启动入口。

从 **[设置 → 插件市场](/zh/features/plugin-market)** 安装 **OpenSearch**，然后从侧边栏打开模块。模块包含 **服务**、**版本管理**、**配置文件** 和 **日志** 标签页。

## 版本管理

通过 **版本管理** 安装并保留多个 OpenSearch 版本，再到 **服务** 页选择要运行的版本。

- **macOS：** 通过 Homebrew 安装。由于 OpenSearch 不发布官方 macOS 发行包，此平台不显示静态包标签页。
- **Linux 与 Windows：** 使用可用的静态发行包，版本与架构取决于上游发布的文件。
- **自定义安装：** 模块可以扫描已配置目录中的现有 OpenSearch 安装。

![FlyEnv 中的 OpenSearch 版本列表及已安装和可安装版本](https://oss.macphpstudy.com/image/features/plugin/opensearch-versions.png)

使用 FlyEnv 标准服务控件即可启动、停止或重启所选版本。侧边栏开关和托盘菜单也能查看、控制服务状态。

![OpenSearch 服务页中的运行实例和服务控制按钮](https://oss.macphpstudy.com/image/features/plugin/opensearch-service.png)

## 在 FlyEnv 中编辑配置

**配置文件** 页会打开所选安装项的三个文件：

- **`opensearch.yml`：** 节点、集群、网络和安全设置。
- **`jvm.options`：** JVM 设置，包括堆内存配置。
- **`log4j2.properties`：** 日志配置。

FlyEnv 会识别归档安装和 Homebrew 安装的配置位置，确保编辑器打开服务实际使用的文件。Homebrew 版本可能通过其链接目录共享配置。保存需要重启才能生效的设置后，请重启 OpenSearch。

![OpenSearch 配置编辑器中的 opensearch.yml、jvm.options 和 log4j2.properties 标签页](https://oss.macphpstudy.com/image/features/plugin/opensearch-configuration.png)

## 本地开发模式

**`opensearch.yml`** 的常用设置界面提供 **本地开发模式** 开关。开启后会禁用 OpenSearch 安全插件，使用无需身份验证的 HTTP；使用默认 HTTP 端口的节点可通过 9200 端口访问。

FlyEnv 会注释掉随包提供的安全设置，并保留这些内容，以便关闭该模式时恢复。界面会提供重启操作，让变更生效。

请仅在可信的本地开发网络中使用此模式。关闭后会重新启用安全插件；安全模式下的启动仍需满足对应 OpenSearch 版本的要求，包括某些版本所需的初始管理员密码。

## 打开匹配版本的 Dashboards

在本地开发模式下启动有效的 OpenSearch 版本后，点击 **服务** 页中的 **打开 Dashboards**。FlyEnv 会验证运行中的后端，按需安装匹配版本的 Dashboards，启动后在浏览器中打开界面。

Linux 和 Windows 使用上游 Dashboards 发行包。macOS 则通过 Homebrew 查找匹配版本，并需要 Node.js 来准备 Dashboards。找不到匹配版本时，插件会报告问题，而不会启动不匹配的版本。

Dashboards 绑定本机地址，默认使用 5601 端口，或选择其他可用端口。它的生命周期跟随 OpenSearch：停止后端时，受管理的 Dashboards 也会停止。

当前启动集成只支持通过 HTTP 连接本地开发模式，不支持需要身份验证或启用 TLS 的 OpenSearch 集群。

## 日志与兼容性

**日志** 页根据 `path.logs` 和 `cluster.name` 查找节点日志，也支持 Homebrew 的目录布局。节点启动失败或修改配置后出现错误时，可以在这里排查。

插件适用于 macOS、Windows 和 Linux；运行时和 Dashboards 的可用性仍取决于平台与所选版本。此模块管理本地服务及配套界面，不用于部署生产集群。

你也可以比较 FlyEnv 的 [Elasticsearch](/zh/features/elasticsearch) 集成，或返回[插件市场](/zh/features/plugin-market)探索其他可选模块。
