---
layout: doc
titleTemplate: false
title: 'FlyEnv MySQL：本地开发模块与配置指南'
description: '运行 MySQL，管理可视化配置、日志、phpMyAdmin、数据库操作和多实例分组。'
head:
  - - meta
    - name: description
      content: '运行 MySQL，管理可视化配置、日志、phpMyAdmin、数据库操作和多实例分组。'
  - - meta
    - property: og:title
      content: 'FlyEnv MySQL：本地开发模块与配置指南'
  - - meta
    - property: og:description
      content: '运行 MySQL，管理可视化配置、日志、phpMyAdmin、数据库操作和多实例分组。'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/zh/features/mysql
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/zh/features/mysql
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# 使用 FlyEnv 进行本地 MySQL 开发

MySQL 是一个开源关系型数据库，多年来一直是 [WordPress](/zh/solutions/wordpress)、Laravel 及众多其他 Web 技术栈的默认选择。FlyEnv 将 MySQL 变成可在一个窗口中管理的本地服务：安装多个版本，使用可编辑的 `my-<version>.cnf` 运行 `mysqld`，查看错误和慢查询日志，并通过 phpMyAdmin 或内置管理面板访问数据。当一个服务器不够用时，分组功能可并行运行多个 MySQL 实例，每个实例拥有独立的版本、端口和数据目录。

![FlyEnv MySQL 模块概览截图](https://oss.macphpstudy.com/image/features/mysql-1.webp)

## 管理 MySQL 版本

在 **MySQL → 版本管理器** 中安装并并行保留多个 MySQL 版本，然后选择服务要运行的版本。

- **按平台提供安装源：** macOS 使用 Homebrew（`mysql`、`mysql@x.y`）和 MacPorts（`mysqlN-server`），Linux 使用 Homebrew，Windows 使用静态在线列表中的现成软件包。
- **自定义版本：** 添加包含你自己 MySQL 安装的目录；FlyEnv 会扫描并将这些版本与托管版本一起列出。
- **一个当前服务版本：** 服务选项卡将选定版本作为主 MySQL 服务运行；额外并发实例由下方介绍的分组功能管理。

![FlyEnv MySQL 版本管理器及安装来源截图](https://oss.macphpstudy.com/image/features/mysql-2.webp)

## 服务与配置

FlyEnv 在前台运行真正的 `mysqld` 二进制文件（不是 `mysqld_safe`），并传入 `--defaults-file=my-<version>.cnf --port=...`。端口默认为 3306，取自配置文件。在 Windows 上，服务通过 `mysqladmin.exe ... shutdown` 正常停止。

每个版本在 FlyEnv 的 MySQL 目录下都有独立的 `my-<major.minor>.cnf`，可在**配置文件**选项卡中编辑：

- **常用设置表单：** 通过可视化表单调整端口、`key_buffer_size`、`innodb_buffer_pool_size` 等经常修改的选项，无需手动编辑文件。
- **原始编辑器：** 切换到完整源码视图，编辑表单未覆盖的其他选项。

![FlyEnv MySQL 配置文件及常用设置表单截图](https://oss.macphpstudy.com/image/features/mysql-3.webp)

## 日志

**日志**和**慢日志**选项卡可直接在 FlyEnv 中打开服务器的 `error.log` 和 `slow.log`。当版本无法启动时，先查看错误日志；在配置中启用慢查询日志后，慢日志会显示超过长查询阈值的查询，便于使用真实数据分析本地应用性能。

![FlyEnv MySQL 错误日志查看器截图](https://oss.macphpstudy.com/image/features/mysql-4.webp)

## phpMyAdmin

服务工具栏中的 **phpMyAdmin** 按钮可一步创建完整的 phpMyAdmin 站点：FlyEnv 下载 phpMyAdmin，使用你的 Web 服务器和 PHP 版本创建 `phpmyadmin.test` 本地站点，并在浏览器中打开。它连接正在运行的 MySQL 服务，因此你无需手动安装任何组件，就能使用熟悉的 Web 界面浏览表和执行查询。

![FlyEnv 从 MySQL 模块设置 phpMyAdmin 截图](https://oss.macphpstudy.com/image/features/mysql-5.webp)

## 数据库管理

日常工作无需离开应用；按版本提供的**管理**面板可直接操作正在运行的服务器。

- **添加数据库：** 从数据库列表创建新数据库。
- **Root 密码：** 修改此实例的 root 密码；全新安装的默认 root 密码为 `root`。[数据库用户和密码指南](/zh/guide/database-user-password)中有更多说明。
- **备份：** 使用 `mysqldump` 将任意数据库导出到你选择的备份目录，直接在面板中完成。

## 多个实例与组

**分组**选项卡可在主服务旁并行运行多个 MySQL 实例。每个实例使用选定的 MySQL 版本、独立端口和数据目录，并保留各自配置和日志；因此固定使用 MySQL 5.7 的项目可以与 MySQL 8.x 实例并行运行，互不影响数据。侧边栏标题中的分组电源开关（系统托盘中也可用）可同时启动或停止主服务和所有分组实例。

![FlyEnv MySQL 组选项卡及多个并发实例截图](https://oss.macphpstudy.com/image/features/mysql-6.webp)

当需要在本地匹配生产环境时，分组功能非常实用，例如 [Laravel](/zh/solutions/laravel) 项目要求特定的 MySQL 主版本。

<FeatureRelatedLinks locale="zh" slug="mysql" />

## 兼容性说明

FlyEnv 管理本地 MySQL 运行时、配置文件和数据目录，但不保证每个 MySQL 版本都能在所有操作系统或安装源上使用。版本管理器提供的版本取决于你的平台（macOS 使用 Homebrew 和 MacPorts，Linux 使用 Homebrew，Windows 使用静态软件包）以及这些来源发布的内容。如果你的技术栈使用 MariaDB 作为 MySQL 的直接替代品，[MariaDB 模块](/zh/features/mariadb)提供相同的单窗口工作流。请以应用内版本列表和[下载页面](/zh/download)作为你电脑上可安装版本的权威依据。
