---
layout: doc
titleTemplate: false
title: 'FlyEnv 插件市场：按需添加模块'
description: '通过 FlyEnv 插件市场安装和管理 MySQL 与 MariaDB 集群、Kafka、llama.cpp、OpenSearch、SQL Server、达梦 DM8 和快捷命令，按需扩展开发环境。'
---

# FlyEnv 插件市场

插件市场让你按需扩展 FlyEnv 工作区。安装项目需要的工具后，就能与现有运行时和服务一起管理。插件可以在应用中提供独立的服务控制、版本管理、配置编辑器，以及针对特定功能的操作界面。

打开 **设置 → 插件市场**，即可浏览官方插件、管理已安装插件，或添加第三方源。

![FlyEnv 插件市场中的官方插件及安装、重新安装和更新按钮](https://oss.macphpstudy.com/image/features/plugin/plugin-market-official.png)

## 可用插件

这些可选模块涵盖本地服务、AI 推理和日常终端任务：

- **[MySQL 集群](/zh/features/mysql-cluster)：** 在不同端口运行独立实例，一键创建 GTID 主从复制组或单主 Group Replication。
- **[MariaDB 集群](/zh/features/mariadb-cluster)：** 运行多个独立实例，创建 GTID 主从复制组，并分别管理配置、日志和数据库。
- **[Kafka](/zh/features/kafka)：** 运行本地 KRaft Broker，绑定 Java 运行时，并在 FlyEnv 中创建或删除主题。
- **[llama.cpp](/zh/features/llama-cpp)：** 管理推理运行时、下载 GGUF 模型，通过兼容 OpenAI 的本地 API 提供模型服务。
- **[OpenSearch](/zh/features/opensearch)：** 管理搜索服务、编辑配置，并启动版本匹配的 OpenSearch Dashboards 供本地开发使用。
- **[SQL Server](/zh/features/mssql)：** 在 x64 Windows 和受支持的 Ubuntu 版本上安装、控制 Microsoft SQL Server，并使用对应平台的设置与日志界面。
- **[达梦 DM8](/zh/features/dameng)：** 在 x64 Windows 或 Ubuntu 22.04 上安装 DM8、初始化数据库，并管理服务、配置和日志。
- **[快捷命令](/zh/features/command-shortcuts)：** 用文件夹卡片整理常用命令、调整顺序，并在对应目录的系统终端中执行。

各插件的特性页会说明它提供的操作，以及底层软件的平台要求。

### 数据库集群插件

MySQL Cluster 和 MariaDB Cluster 在内置数据库模块之外提供专门的实例管理界面。复用已安装的数据库版本，为新建的本地实例设置独立端口和数据目录，再通过插件控制单个成员或整组启停。MySQL Cluster 还提供 Group Replication；MariaDB Cluster 提供独立实例与主从复制。

![FlyEnv 官方插件列表中的 MySQL Cluster 和 MariaDB Cluster](https://oss.macphpstudy.com/image/features/plugin/plugin-market-clusters.webp)

## 先安装插件，再安装运行时

在 **官方** 标签页刷新列表，然后点击插件卡片上的 **安装**。卡片会显示插件说明、作者和版本。安装和更新插件需要有效的 [FlyEnv 授权](/zh/license)。

安装并启用后，插件会在侧边栏中添加对应模块。服务类插件还需要进入模块，安装它所管理的软件，例如 Kafka 发行包、llama.cpp 运行时或数据库引擎。插件包与软件运行时各有自己的版本；更新插件，更新的是软件与 FlyEnv 的集成部分。快捷命令直接使用已有的系统终端，无需另外安装服务运行时。

插件变更通常会直接应用到界面和后端，无需重启应用。如果某项变更需要重启才能完成，FlyEnv 会给出重启提示。

## 更新与管理已安装插件

有新版本时，插件卡片会显示 **更新**；对于已安装的版本，则可选择 **重新安装**。在 **已安装** 标签页中，可以查看已安装版本和启用状态。

- **启用：** 将插件模块加入工作区。
- **禁用：** 停止插件管理的服务，并从界面中移除当前模块，但保留插件安装文件。
- **卸载：** 确认后停止插件管理的服务，并删除插件安装文件。

这些操作管理的是 FlyEnv 插件本身。运行时和模型仍需在各模块中单独管理。

## 第三方源

在 **第三方源** 标签页中，可以添加插件注册表 JSON 文件的 URL。添加后即可发现源内的插件、查看说明并选择安装，也可以在这里移除已配置的源。

第三方插件能够访问本地文件、进程和网络。因此，首次从尚未确认过的第三方源安装时，FlyEnv 会显示警告并要求确认。请使用你信任的来源。

## 插件与自定义模块

如果需要带有专用界面和模块操作的完整集成，可以选择插件。如果只想配置自己的命令或脚本、关联配置和日志文件，并管理其生命周期，则可以使用 **[自定义模块](/zh/features/user-modules)**，无需编写插件。

两者都能扩展工作区；插件市场负责发现和维护打包好的集成模块。返回[特性总览](/zh/features#plugins)，查看当前可用的插件。
