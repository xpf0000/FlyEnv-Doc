---
layout: doc
titleTemplate: false
title: 'FlyEnv 达梦 DM8 插件：安装与数据库初始化'
description: '在 x64 Windows 和 Ubuntu 22.04 上通过 FlyEnv 安装达梦 DM8、初始化数据库，并管理服务、配置文件和日志。'
---

# 在 FlyEnv 中使用达梦 DM8

达梦 DM8 插件将数据库安装、初始化和原生服务控制整合到 FlyEnv。模块提供 **服务**、**版本管理**、**配置文件** 和 **日志** 标签页，还能查询实例版本与许可证信息。

从 **[设置 → 插件市场](/zh/features/plugin-market)** 安装 **达梦 DM8**。插件支持 **原生 x64 Windows** 和 **Ubuntu 22.04 x64**；当前版本不支持 macOS、ARM64 或其他 Linux 发行版本。

## 选择安装目录

打开 **版本管理**，点击 **安装**，选择或输入最终的程序安装目录。路径中的每一级文件夹，包括所有父目录，都只能使用 **英文字母、数字和下划线**。安装程序不支持空格、中文、点号或连字符。

目标目录必须为空。FlyEnv 会先检查安装位置和可用空间，再下载官方安装包。确认对话框后才开始下载，取消则不会下载。安装完成后，FlyEnv 会将所选路径自动加入 **自定义版本目录**，让数据库出现在服务列表中。

数据库数据与程序目录分开，保存在 FlyEnv 数据目录中。程序安装路径的限制，不要求你重命名 FlyEnv 数据目录。

![达梦 DM8 版本管理中已安装的 Windows x64 版本](https://oss.macphpstudy.com/image/features/plugin/dameng-versions.png)

## 初始化数据库

启动尚未初始化的安装项时，会打开初始化对话框。也可以从服务操作菜单选择 **初始化数据库**。取消初始化不会启动数据库。

对话框包含以下设置：

- **SYSDBA 与 SYSAUDITOR 密码：** 分别对应数据库管理员与审计账户，两项都必须填写，各自提供 **生成** 按钮。
- **端口：** 数据库监听端口。
- **页大小、簇大小、字符集和大小写敏感：** 建库时确定的选项，不能通过对现有数据重新初始化来修改。
- **开发资源设置：** 缓冲区与重做日志大小，并显示初始存储空间估算。

请在确认前检查这些值。FlyEnv 只初始化一次数据库，成功后继续启动；不会为了应用新的建库设置而覆盖现有数据库。

## 服务控制与会话凭据

在 **服务** 页启动、停止或重启由插件管理的安装项。Windows 使用原生 DM8 服务，Ubuntu 则以当前用户运行数据库。

![达梦 DM8 服务页中的 Windows 运行实例、程序路径与服务控制按钮](https://oss.macphpstudy.com/image/features/plugin/dameng-service.png)

密码只保留在当前 FlyEnv 会话中。重启 FlyEnv 后，按提示重新输入 **当前 SYSDBA 密码**，或从服务工具栏打开 **会话凭据 / 初始化默认值**。这里填写的密码用于启动检查和信息查询，不会修改数据库账户。

![达梦 DM8 的会话凭据与初始化默认值对话框](https://oss.macphpstudy.com/image/features/plugin/dameng-session-settings.png)

**版本 / 许可证信息** 会查询运行中数据库的版本和许可证到期时间。查询前，请先启动实例并提供当前 SYSDBA 密码。

## 配置、日志与移除

**配置文件** 页编辑已初始化实例的 `dm.ini`，**日志** 页提供数据库及启动诊断信息。如果安装或初始化报告结果不完整，请先检查文件和日志，再决定是否在同一目录重试。

![达梦 DM8 dm.ini 编辑器中的实例配置和数据路径](https://oss.macphpstudy.com/image/features/plugin/dameng-configuration.png)

在 **版本管理** 中移除已安装版本时，会先停止实例，再运行官方卸载程序，并保留数据库文件。禁用或卸载 FlyEnv 插件，也不会删除数据库程序和数据。

## 平台要求

Windows 安装和服务注册需要 **UAC 批准**。Ubuntu 安装需要桌面会话，以及 **udisks2**、`udisksctl` 和 `findmnt`，用于挂载官方安装介质；尚未提供无桌面环境的安装方式。当前插件管理一个由其安装的实例，不保证能与外部 DM8 安装共存。

返回 **[插件市场](/zh/features/plugin-market)** 了解其他可选模块，或比较 FlyEnv 的 **[SQL Server](/zh/features/mssql)** 集成。
