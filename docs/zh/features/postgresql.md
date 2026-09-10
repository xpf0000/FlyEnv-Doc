---
layout: doc
titleTemplate: false
title: 'FlyEnv PostgreSQL：本地开发模块与配置指南'
description: '运行 PostgreSQL，自动初始化数据目录，并使用 pgAdmin 4 和 pgvector 扩展安装工具。'
head:
  - - meta
    - name: description
      content: '运行 PostgreSQL，自动初始化数据目录，并使用 pgAdmin 4 和 pgvector 扩展安装工具。'
  - - meta
    - property: og:title
      content: 'FlyEnv PostgreSQL：本地开发模块与配置指南'
  - - meta
    - property: og:description
      content: '运行 PostgreSQL，自动初始化数据目录，并使用 pgAdmin 4 和 pgvector 扩展安装工具。'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/zh/features/postgresql
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/zh/features/postgresql
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# 使用 FlyEnv 进行本地 PostgreSQL 开发

PostgreSQL 是开源关系数据库，以严格的 SQL 标准支持和丰富的扩展生态著称。需要复杂查询、强事务或 pgvector 等扩展的应用通常会选择它。FlyEnv 将 PostgreSQL 作为本地托管服务集中管理：并行安装多个版本，首次启动时用 `initdb` 初始化数据目录，直接编辑 `postgresql.conf`，并在应用内查看 `pg.log`。内置 pgAdmin 4 启动器可一键打开完整 Web 控制台，扩展抽屉可安装 pgvector 以支持向量搜索。

![FlyEnv PostgreSQL 模块概览](https://oss.macphpstudy.com/image/features/postgresql-1.webp)

## 版本管理

安装 和 keep 多个 PostgreSQL 版本 并行 从 **PostgreSQL → 版本管理器**.

- **各平台安装源：** macOS 使用 Homebrew（`postgresql@x`）和 MacPorts（`postgresqlN-server`），Linux 使用 Homebrew，Windows 使用静态在线软件包列表。
- **自定义版本：** 添加包含自有 PostgreSQL 安装的目录，FlyEnv 扫描后会与托管版本一起列出。

![FlyEnv PostgreSQL 版本管理器和安装源](https://oss.macphpstudy.com/image/features/postgresql-2.webp)

## 服务和数据目录项

服务选项卡将选定版本作为本地 PostgreSQL 服务器运行。macOS 和 Linux 在前台启动真实的 `postgres -D <data directory>`；Windows 使用 `pg_ctl -D ... -l pg.log start` 启动。端口从 `postgresql.conf` 读取，默认值为 5432。

每个版本都有独立数据目录，默认位于 FlyEnv PostgreSQL 目录下的 `postgresql<major>`，可在服务工具栏按版本修改路径。首次启动且数据目录为空时，FlyEnv 自动运行 `initdb -U root` 创建集群，超级用户为 `root`，使用 UTF-8 编码和系统区域设置。命令未指定密码，因此初始 root 用户无密码；默认凭据说明请参阅[数据库用户和密码指南](/zh/guide/database-user-password)。

![FlyEnv PostgreSQL 服务选项卡及可编辑数据目录](https://oss.macphpstudy.com/image/features/postgresql-3.webp)

将应用连接到 `127.0.0.1:5432`。[Django](/zh/solutions/django) 和 [Strapi](/zh/solutions/strapi) 解决方案展示了连接 PostgreSQL 的完整本地技术栈。

## 配置

**配置文件**选项卡打开位于数据目录中的版本 `postgresql.conf`。FlyEnv 提供完整原始编辑器，不使用可视化表单，并保留 `postgresql.conf.default` 副本以便随时恢复。端口、监听地址和性能参数都在此文件中调整。

![FlyEnv 在配置文件选项卡编辑 postgresql.conf](https://oss.macphpstudy.com/image/features/postgresql-4.webp)

## 日志

**日志**选项卡直接在 FlyEnv 中打开数据目录的 `pg.log`，版本启动失败时应首先查看。pgAdmin 自身日志（`pgadmin4.log` 及其启动输出和错误日志）也会显示在旁边，便于从同一位置诊断 Web 控制台问题。

![FlyEnv PostgreSQL pg.log 日志查看器](https://oss.macphpstudy.com/image/features/postgresql-5.webp)

## pgAdmin 4

服务工具栏中的 **pgAdmin 4** 按钮可一步设置完整 Web 控制台。pgAdmin 4 是 Python 应用，首次使用时 FlyEnv 会将 `pgadmin4` 安装到当前选定的 FlyEnv [Python](/zh/features/python) 版本，并显示“正在安装 Web 面板”提示。随后在 5050 端口启动 `pgAdmin4.py`（失败会重试），自动注册正在运行的 PostgreSQL 服务器并在浏览器打开控制台。

![FlyEnv 启动的 pgAdmin 4 Web 控制台](https://oss.macphpstudy.com/image/features/postgresql-6.webp)

## 扩展（pgvector）

服务行中的**扩展**操作会打开抽屉安装 pgvector，这是用于向量存储和相似度搜索的 PostgreSQL 扩展，适合 AI 和嵌入工作负载（专用向量数据库请参阅 [Qdrant 模块](/zh/features/qdrant)）。FlyEnv 从 Git 仓库克隆最新 pgvector 标签，并在内置终端运行 `sudo make` / `make install`，你可以看到真实构建输出。安装流程面向 macOS（使用 `sudo` 和 zsh shell）。

![FlyEnv 扩展抽屉内置终端运行 pgvector 安装](https://oss.macphpstudy.com/image/features/postgresql-7.webp)

<FeatureRelatedLinks locale="zh" slug="postgresql" />

## 兼容性说明

FlyEnv 管理本地 PostgreSQL 运行时、配置文件和数据目录，但不保证每个 PostgreSQL 版本都能在所有操作系统或安装源上使用。版本管理器中的版本取决于平台和来源发布的内容（macOS 使用 Homebrew/MacPorts，Linux 使用 Homebrew，Windows 使用静态软件包）。pgAdmin 4 需要选定 FlyEnv Python 版本，pgvector 安装流程面向 macOS。实际可安装内容请以内置版本列表和[下载页面](/zh/download)为准。
