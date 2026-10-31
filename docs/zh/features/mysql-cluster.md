---
layout: doc
titleTemplate: false
title: 'MySQL 集群插件：多实例、主从复制与组复制 | FlyEnv'
description: '使用 FlyEnv MySQL 集群插件同时运行多个本地实例，一键创建 GTID 主从复制与单主 Group Replication，并管理各实例的配置、日志和数据库。'
---

# FlyEnv MySQL 集群插件

MySQL 集群插件可以同时运行多个本地 MySQL 实例，每个实例都有独立的端口、Socket 或 Windows 命名管道、数据目录、配置和日志。既可以为不同项目创建独立数据库，也可以搭建 GTID 主从复制组或单主 Group Replication。

在 **[设置 → 插件市场](/zh/features/plugin-market)** 中安装 **MySQL Cluster**，即可使用 **MySQL 实例**、**服务** 和 **版本** 三个标签页。插件支持 macOS、Windows 和 Linux；实际可安装的数据库版本取决于平台与安装源。

![MySQL 集群实例列表，同时展示不同版本的独立实例和正在运行的主从复制组](https://oss.macphpstudy.com/image/features/plugin/mysql-cluster-instances.webp)

## 视频演示

观看 FlyEnv 如何创建本地 MySQL 主从环境，再通过 DbGate 和独立的订单演示应用，验证数据同步、复制积压与恢复追平。

<iframe style="width: 100%; aspect-ratio: 16 / 9;" src="https://player.bilibili.com/player.html?bvid=BV1QtHw67EE9&page=1&autoplay=0" title="用 FlyEnv 轻松搭建本地 MySQL 主从复制环境" loading="lazy" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

也可以前往 [Bilibili](https://www.bilibili.com/video/BV1QtHw67EE9/) 或 [YouTube](https://www.youtube.com/watch?v=ExFupRsveuM) 观看。

## 复用已安装的 MySQL 版本

**版本** 页沿用 FlyEnv 现有的 MySQL 安装源。可以在这里安装版本，也可以在创建实例时直接选择已有安装。多个实例可以共用一套数据库程序，但各自使用独立的数据文件；不同独立实例也可以选择不同的 MySQL 版本。

**服务** 页展示数据库安装，实例的启停操作则在 **MySQL 实例** 页完成。某个安装版本仍被集群中运行的实例使用时，需要先停止这些实例，才能通过插件卸载该版本。

## 创建独立实例

点击 **创建**，将模式设为 **独立实例**。填写 **集群名称**、选择 **MySQL 版本**、设置初始 **Root 密码**，然后检查自动生成的实例设置：

- **实例名称** 和 **TCP 端口**：区分并连接不同数据库。
- **Socket**（macOS/Linux）或 **命名管道**（Windows）：为每个实例提供独立的本地连接地址。
- **数据目录**：可以直接输入，也可以点击文件夹按钮选择。

表单会校验名称、端口冲突、Socket 或命名管道冲突，以及数据目录是否重叠。独立实例支持具备 `--initialize-insecure` 的 MySQL 5.7 安装和受支持的更新版本。

![创建独立 MySQL 实例，设置版本、端口、Socket 和数据目录](https://oss.macphpstudy.com/image/features/plugin/mysql-cluster-create-standalone.webp)

创建时会初始化一个新的空数据库，不会导入、克隆或覆盖已有数据库。编辑前需先停止实例；数据目录一旦初始化，就不能通过此表单更换，该实例所用的引擎版本也不能直接替换。

## 一键创建 GTID 主从复制

选择 **主从复制** 模式，选定 MySQL 安装并设置从节点数量。插件会创建一个主节点和 **1 至 15 个从节点**，自动配置 GTID 复制、复制账号、只读从节点和复制通道。

所有成员必须使用 **同一套安装**，版本要求为 **MySQL 8.0.13 或更高版本**。创建前，请检查每个成员自动生成的名称、端口、Socket 或命名管道和数据目录。

![MySQL 主从复制创建窗口，包含从节点数量和各成员的连接设置](https://oss.macphpstudy.com/image/features/plugin/mysql-cluster-create-replication.webp)

实例列表会标明主从角色，并展示复制延迟。日常启动、停止和重启按进程状态判断，不需要 Root 凭据。重启后，MySQL 会自动续接已保存的复制通道；如果需要明确配置或修复复制，例如修改了主节点端口，可在启动全部成员后点击 **配置 / 恢复复制**，并提供各成员当前的 Root 凭据。

普通主从复制不会在主节点停止后自动提升从节点。

## 单主 Group Replication

选择 **Group Replication**，可以创建 **3、5、7 或 9 个本地节点**。该模式要求 **MySQL 8.0.27 或更高版本**，且安装包中实际包含 Group Replication 插件。FlyEnv 使用单主模式与 XCom 通信；各节点的 SQL 端口和 GR 通信端口不能冲突。

![MySQL Group Replication 创建窗口，设置节点数量及独立的 SQL 和 GR 通信端口](https://oss.macphpstudy.com/image/features/plugin/mysql-cluster-create-group-replication.webp)

运行中的组由 MySQL 自动选主。FlyEnv 展示成员角色，并提供 **配置 / 恢复复制**，用于成员离组或全组停止后的显式恢复。恢复前需启动全部成员并提供 Root 凭据。插件会比较各成员的事务历史；如果历史分叉或无法确认成员状态，就会拒绝不安全的引导操作。重启后尚未加入组的节点仍保持只读。

这些复制组用于本地开发，所有节点仍然共用一台机器，无法抵御整机故障。插件不提供 MySQL Router 或统一连接入口，需要连接相应成员的端口；它也不会创建 NDB Cluster 或跨机器部署。

## 实例控制与数据管理

通过列表行上的按钮启动、停止或重启单个实例，也可以通过组头部控制全部成员。侧栏开关可批量启动或停止插件管理的所有实例。**状态** 列表示进程是否运行，复制是否健康需要另外确认。

每个实例的操作菜单提供：

- **编辑配置**：下次重启后生效；插件管理的实例身份和复制选项受到保护。
- **错误日志** 和 **慢查询日志**：查看该实例的运行情况。
- **连接信息**：也可以直接点击 Socket 地址复制。
- **数据管理**：查看数据库和用户，创建数据库并授权、修改密码、添加备注、设置备份目录，以及导出选中的数据库。

管理写入需要在可写的主节点或当前 PRIMARY 节点上执行，不会绕过其他成员的只读限制。Root 凭据按实例隔离；新密码默认只保留在当前会话，除非你明确选择在本机记住凭据。

### 在浏览器中打开 DbGate

有实例运行时，实例视图标题旁会出现 DbGate 图标，点击即可打开浏览器面板。需要先安装可用的 **Node.js** 运行时，但不要求在侧栏显示 Node.js 模块。首次打开时会按需安装 DbGate，后续直接复用 FlyEnv 的全局安装。

![DbGate 浏览器面板连接本地 MySQL 实例并打开数据表](https://oss.macphpstudy.com/image/features/plugin/mysql-cluster-dbgate.webp)

该面板与 MongoDB、MariaDB Cluster 共用。停止最后一个 MySQL Cluster 实例时会关闭全局面板，其他模块需要时可以重新打开。

## 删除管理记录，保留数据库文件

确认删除实例或复制组后，插件会先停止相关成员，再移除管理记录。**数据库文件会保留**，配置与日志也仍可检查。通过插件卸载数据库安装，同样会保留实例数据。操作中断后，应先检查已保存的文件和各成员的处理结果，再决定是否重试。

MariaDB 多实例与 GTID 复制请使用 **[MariaDB 集群插件](/zh/features/mariadb-cluster)**；管理插件本身请返回 **[插件市场](/zh/features/plugin-market)**。
