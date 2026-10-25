---
layout: doc
titleTemplate: false
title: 'FlyEnv SQL Server 插件：Windows 与 Ubuntu 数据库管理'
description: '在 x64 Windows 和 Ubuntu 上通过 FlyEnv 安装、管理 Microsoft SQL Server，使用原生服务控制、平台设置和数据库日志。'
---

# 在 FlyEnv 中使用 SQL Server

SQL Server 插件将 Microsoft 数据库引擎接入 FlyEnv，提供 **服务**、**版本管理** 和 **日志** 标签页。从 **[设置 → 插件市场](/zh/features/plugin-market)** 安装 **SQL Server** 后，即可从侧边栏进入模块，安装和管理数据库软件。

插件支持 **x64 Windows** 和 **x64 Ubuntu 22.04 或 24.04**，不提供 macOS 或 ARM64 运行时。Windows 与 Ubuntu 的安装及服务运行方式有所不同。

## 版本管理

打开 **版本管理**，刷新可用版本列表，安装适合当前平台的版本。

- **Windows：** 列表提供部分 SQL Server 发行版本的 Express 和 Developer 版本。FlyEnv 下载 Microsoft 官方安装介质，并调用 SQL Server Setup 安装命名实例。
- **Ubuntu：** FlyEnv 读取适用于当前 Ubuntu 版本的 Microsoft 软件包仓库，校验软件包后，将引擎解包到受管理的运行时目录。只有相应仓库可用，版本才会出现在列表中。

安装进度会显示在模块内。完成后，实例会出现在 **服务** 页；安装完成不代表数据库已启动。

![Windows 上的 SQL Server 版本列表及 Express、Developer 安装选项](https://oss.macphpstudy.com/image/features/plugin/sql-server-versions.png)

## Windows 服务与配置

FlyEnv 使用原生 Windows 服务控制来启动和停止所选实例。通过插件安装的实例采用 **手动** 启动方式，只在需要时启动。安装及服务准备可能需要 Windows 管理员批准；如界面提示重启系统，请先重启，再启动新安装的实例。

服务操作菜单中的 **配置管理** 会打开所选版本对应的 SQL Server Configuration Manager。使用这一原生工具管理 SQL Server 服务和网络配置。插件中针对 Ubuntu 的 `sa` 密码与端口表单不用于 Windows 安装。

对于符合条件、由插件管理的实例，可以使用 **修复权限** 恢复 FlyEnv 控制服务和读取日志所需的访问权限。如果日志查看器报告拒绝访问，执行此操作后再刷新日志。

## Ubuntu 设置与首次启动

Ubuntu 通过 **Bubblewrap** 运行解包后的引擎，将其可写系统文件和数据库文件保存在 FlyEnv 数据目录中。启动前需要安装 `bubblewrap` 软件包，并确保系统允许非特权用户命名空间。

点击 **服务** 页中的设置按钮，填写初始 **sa 密码** 和 **端口**，默认端口为 **1433**。密码至少 8 位，且应包含大写字母、小写字母、数字、符号中的至少三类。如果尚未设置初始密码，FlyEnv 会在安装过程中要求填写。

此密码用于首次启动时初始化内置 `sa` 账户。之后修改该设置不会重置已有数据库账户的密码。安装好的引擎可通过服务控件启动、停止和重启。

## 日志与运行时移除

**日志** 页跟随所选实例的数据库错误日志。Ubuntu 上若引擎日志尚未生成，则显示启动输出或错误日志，便于排查首次启动失败、配置错误和权限问题。

Ubuntu 的 **版本管理** 可以在确认并停止服务后，移除由插件管理的解包运行时；数据库文件单独存放。Windows 上的软件移除使用 SQL Server 自带的安装工具。

插件支持某个平台，并不意味着所有 SQL Server 版本都能在该平台的所有系统版本上运行。请以本机应用内的版本列表和安装诊断信息为准。返回 **[插件市场](/zh/features/plugin-market)** 可管理插件本身。
