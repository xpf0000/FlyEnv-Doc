---
layout: doc
titleTemplate: false
title: 'MariaDB 集群插件：多实例与 GTID 主从复制 | FlyEnv'
description: '通过 FlyEnv MariaDB 集群插件，在不同端口同时运行多个本地实例，一键创建 GTID 主从复制组，并独立管理配置、日志和数据库。'
---

# FlyEnv MariaDB 集群插件

MariaDB 集群插件可以在不同端口同时运行多个 MariaDB 实例。你可以为不同项目保留各自的独立数据库，也可以创建 GTID 主从复制组；每个成员都有独立的配置、日志和数据目录。

在 **[设置 → 插件市场](/zh/features/plugin-market)** 中安装 **MariaDB Cluster**。模块提供 **MariaDB 实例**、**服务** 和 **版本** 三个标签页，支持 macOS、Windows 和 Linux；实际可安装的数据库版本取决于平台与安装源。

![FlyEnv 插件市场中的 MariaDB Cluster 插件及安装控制](https://oss.macphpstudy.com/image/features/plugin/mariadb-cluster-market.webp)

## 用已安装版本运行多个实例

通过 **版本** 页使用 FlyEnv 现有的安装源安装 MariaDB，然后在创建实例时选择安装版本。插件要求 **MariaDB 10.4 或更高版本**。多个实例可以共用一套数据库程序，但使用独立的数据目录；不同独立实例可以选择不同版本。MySQL 安装不能作为 MariaDB 引擎使用。

**服务** 页展示已安装的数据库，插件所创建实例的启动、停止和重启操作在 **MariaDB 实例** 页完成。某个版本仍被运行中的实例使用时，插件会阻止卸载。

![MariaDB 集群实例列表，同时展示独立数据库和主从复制组](https://oss.macphpstudy.com/image/features/plugin/mariadb-cluster-instances.webp)

## 创建独立数据库

点击 **创建**，选择 **独立实例** 模式，填写 **集群名称**、选择 **MariaDB 版本** 并设置初始 **Root 密码**。检查生成的 **实例名称**、**TCP 端口**、macOS/Linux 上的 **Socket** 或 Windows 上的 **命名管道**，以及 **数据目录**。数据路径可以直接输入，也可以通过文件夹按钮选择。

必填项缺失、名称重复、端口或本地连接地址冲突、数据目录重叠等问题，都会在对应字段旁给出具体原因。每个实例必须有独立的数据目录和连接地址。

![MariaDB 独立实例创建窗口，包含版本、Root 密码和实例设置](https://oss.macphpstudy.com/image/features/plugin/mariadb-cluster-create-standalone.webp)

插件只创建 **新的本地空数据库**，不会导入或克隆已有数据库。编辑前需先停止实例；名称、端口和本地连接地址可以修改，但已初始化的数据目录、引擎版本和拓扑不能通过表单替换。尚未初始化的空数据目录可以修改。

## 一主多从的 GTID 复制

选择 **主从复制**，将从节点数量设为 **1 至 15 个**。所有成员必须使用 **同一套 MariaDB 安装**。确认前，请检查各成员自动生成的端口、Socket 或命名管道和数据目录。

FlyEnv 会配置 GTID 复制、复制账号、只读从节点和复制通道。实例列表展示主从角色、进程状态和复制延迟。

![MariaDB 主从复制创建窗口，设置从节点数量及各成员的端口和目录](https://oss.macphpstudy.com/image/features/plugin/mariadb-cluster-create-replication.webp)

MariaDB 在重启后会续接已保存的复制通道。如果需要明确配置或恢复复制，先启动全部成员，再点击 **配置 / 恢复复制**，并提供当前的 Root 凭据。日常进程启动、停止和重启无需登录数据库。

插件提供独立实例和 GTID 主从复制两种模式，不配置 Galera，不会自动提升从节点，也不提供路由器或统一连接端口。所有成员都在同一台机器上，本地复制组无法抵御整机故障。如果需要 MySQL 单主 Group Replication，请使用 **[MySQL 集群插件](/zh/features/mysql-cluster)**。

## 每个实例独立启停、配置与日志

通过列表行按钮控制单个数据库，或在组头部批量启动、停止、重启所有成员。侧栏开关控制全部 MariaDB Cluster 实例。受影响的按钮会显示操作进度；**状态** 列只表示进程状态，复制健康需要另外确认。

操作菜单可打开当前实例的配置、错误日志、慢查询日志、连接信息和 **数据管理**。配置修改在下次重启时生效，插件管理的实例身份和复制选项受到保护。点击 Socket 地址即可复制，供本地客户端连接。

数据管理支持查看数据库和用户、创建数据库并授权、修改密码、添加备注、设置备份目录，以及导出选中的数据库。写入应在主节点执行，插件会保留从节点的只读限制。凭据按实例隔离，可以明确选择在本机记住；否则，新实例的 Root 密码只保留在当前会话。

### 使用 DbGate 浏览数据库

有实例运行时，点击实例视图标题旁的 DbGate 图标，即可打开 FlyEnv 共用的浏览器数据库面板。需要已安装可用的 **Node.js** 运行时，但 Node.js 模块可以保持隐藏。全局 DbGate 不存在时会自动进入安装流程；已安装则直接复用。

MariaDB Cluster 与 MongoDB、MySQL Cluster 共用该面板。停止最后一个 MariaDB Cluster 实例时会关闭全局面板，其他模块需要时可以重新打开。

## 删除后保留数据库文件

确认删除实例或复制组后，插件会先停止相关成员，再移除管理记录。**数据库文件会保留**，配置与日志也仍可检查。通过插件卸载引擎，同样会保留实例数据库。操作中断后，请先检查保存的文件和各成员的结果，再重试。

常规的单服务工作流请参阅内置 **[MariaDB 模块](/zh/features/mariadb)**；更新、禁用或卸载插件集成请返回 **[插件市场](/zh/features/plugin-market)**。
