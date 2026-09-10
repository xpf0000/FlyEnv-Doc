---
layout: doc
titleTemplate: false
title: 'FlyEnv MariaDB：本地开发模块与配置指南'
description: '运行 MariaDB 版本，管理可视化配置和日志，并使用 phpMyAdmin 等数据库工具。'
head:
  - - meta
    - name: description
      content: '运行 MariaDB 版本，管理可视化配置和日志，并使用 phpMyAdmin 等数据库工具。'
  - - meta
    - property: og:title
      content: 'FlyEnv MariaDB：本地开发模块与配置指南'
  - - meta
    - property: og:description
      content: '运行 MariaDB 版本，管理可视化配置和日志，并使用 phpMyAdmin 等数据库工具。'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/zh/features/mariadb
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/zh/features/mariadb
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# 使用 FlyEnv 进行 MariaDB 本地开发

MariaDB 是一个开源关系型数据库，最初从 MySQL 分叉而来，并与 MySQL 保持广泛兼容。因此，[WordPress](/zh/solutions/wordpress) 和大多数面向 MySQL 编写的应用都可以无需修改直接运行。许多团队将它作为 MySQL 的直接替代品。FlyEnv 将 MariaDB 变成可在一个窗口中管理的本地服务：安装多个版本，使用可编辑的 `my-<version>.cnf` 运行 `mariadbd`，查看错误日志和慢查询日志，并通过 phpMyAdmin 或内置的管理面板访问数据。所有操作都基于真正的 MariaDB 二进制文件，因此本地测试结果与部署环境一致。

![FlyEnv MariaDB 模块概览截图](https://oss.macphpstudy.com/image/features/mariadb-1.webp)

## MariaDB 版本管理

在 **MariaDB → 版本管理器** 中安装并并行保留多个 MariaDB 版本，然后选择服务要运行的版本。

- **按平台提供安装源：** macOS 使用 Homebrew（`mariadb`、`mariadb@x.y`）和 MacPorts，Linux 使用 Homebrew，Windows 使用静态在线列表中的现成软件包。
- **自定义版本：** 添加包含你自己 MariaDB 安装的目录；FlyEnv 会扫描该目录，并将这些版本与托管版本一起列出。
- **一个当前服务版本：** 服务选项卡一次只运行选定版本的 MariaDB 服务；启动另一个版本会停止之前的版本。

![FlyEnv MariaDB 版本管理器及安装来源截图](https://oss.macphpstudy.com/image/features/mariadb-2.webp)

## 服务与配置

FlyEnv 在前台运行真正的 `mariadbd` 二进制文件（不是 `mariadbd-safe`），并传入 `--defaults-file=my-<version>.cnf --port=...`。端口默认为 3306，取自配置文件。在 Windows 上，服务通过 `mariadb-admin.exe ... shutdown` 正常停止。

每个版本在 FlyEnv 的 MariaDB 目录下都有独立的 `my-<major.minor>.cnf`，可在 **配置文件** 选项卡中编辑：

- **常用设置表单：** 通过可视化表单调整 `[mariadbd]` 部分中经常修改的选项，无需手动编辑文件。
- **原始编辑器：** 切换到完整源码视图，编辑表单未覆盖的其他选项。

![FlyEnv MariaDB 配置文件及常用设置表单截图](https://oss.macphpstudy.com/image/features/mariadb-3.webp)

## 日志

两个专用选项卡——**日志** 和 **慢日志**——会在 FlyEnv 中显示服务器的 `error.log` 和 `slow.log`。当某个版本拒绝启动时，先查看错误日志；在配置中启用慢查询日志后，慢日志会记录每个超过长查询阈值的查询，便于使用真实数据分析本地应用性能。

![FlyEnv MariaDB 错误日志和慢日志查看器截图](https://oss.macphpstudy.com/image/features/mariadb-4.webp)

## phpMyAdmin

服务工具栏中的 **phpMyAdmin** 按钮可一步创建完整的 phpMyAdmin 站点：FlyEnv 下载 phpMyAdmin，使用你的 Web 服务器和 PHP 版本创建本地站点，并在浏览器中打开。它连接正在运行的 MariaDB 服务，因此你无需手动安装任何组件，就能使用熟悉的 Web 界面浏览表和执行查询。

![FlyEnv 从 MariaDB 模块设置 phpMyAdmin 截图](https://oss.macphpstudy.com/image/features/mariadb-5.webp)

## 管理面板

日常工作无需离开应用；按版本提供的 **管理** 面板可直接操作正在运行的服务器。

- **添加数据库：** 从数据库列表创建新数据库。
- **Root 密码：** 修改此实例的 root 密码；全新安装的默认 root 密码为 `root`。[数据库用户和密码指南](/zh/guide/database-user-password) 中有更多说明。
- **备份：** 使用 `mariadb-dump` 将任意数据库导出到你选择的备份目录，直接在面板中完成。

<FeatureRelatedLinks locale="zh" slug="mariadb" />

## 兼容性说明

MariaDB 模块一次只运行一个版本；与 [MySQL 模块](/zh/features/mysql) 不同，它不支持同时运行多个实例的分组功能。FlyEnv 管理本地 MariaDB 运行时、配置文件和数据目录，但不保证每个 MariaDB 版本都能在所有操作系统或安装源上使用。版本管理器提供的版本取决于你的平台（macOS 使用 Homebrew 和 MacPorts，Linux 使用 Homebrew，Windows 使用静态软件包）以及这些来源发布的内容。phpMyAdmin 还要求 FlyEnv 的 Web 服务器和 [PHP](/zh/features/php) 版本正在运行。请以应用内版本列表和[下载页面](/zh/download)作为你电脑上可安装版本的权威依据。
