---
layout: doc
titleTemplate: false
title: 'FlyEnv ZincSearch：本地开发模块与配置指南'
description: '运行 ZincSearch，管理环境变量配置，并打开 4080 端口的内置 Web UI。'
head:
  - - meta
    - name: description
      content: '运行 ZincSearch，管理环境变量配置，并打开 4080 端口的内置 Web UI。'
  - - meta
    - property: og:title
      content: 'FlyEnv ZincSearch：本地开发模块与配置指南'
  - - meta
    - property: og:description
      content: '运行 ZincSearch，管理环境变量配置，并打开 4080 端口的内置 Web UI。'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/zh/features/zincsearch
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/zh/features/zincsearch
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# 锌搜索在飞 Env

ZincSearch 是一个使用 [Go](/zh/features/go) 编写的开源搜索引擎，是用于全文索引和日志搜索的轻量级 [Elasticsearch](/zh/features/elasticsearch) 替代品，与 [Meilisearch](/zh/features/meilisearch) 和 [Typesense](/zh/features/typesense) 属于同一系列。它以单个二进制文件运行并内置 Web 控制台，适合小型项目和本地开发。FlyEnv 将其作为托管的本地搜索服务运行：从版本管理器安装版本，使用可编辑的 `zincsearch.env` 启动服务器，并一键打开 ZincSearch Web 界面。系统会写入默认设置——服务器监听 `127.0.0.1:4080`，并创建初始管理员账户，数据保存在 FlyEnv 自有目录中。

![FlyEnv ZincSearch 模块概览截图](https://oss.macphpstudy.com/image/features/zincsearch-1.webp)

## 版本管理

在 **ZincSearch → 版本管理器** 中安装并并行保留多个 ZincSearch 版本。

- **仅提供静态源：** ZincSearch 在所有平台（macOS、Linux 和 Windows）都从静态在线列表安装。软件包是官方 GitHub 发布的二进制文件，按操作系统从发布下载 URL 获取归档。本模块不提供 Homebrew 或 MacPorts 源。
- **修复 macOS 隔离属性：** 在 macOS 安装静态构建后，FlyEnv 会移除隔离属性，使二进制文件无需 Gatekeeper 拦截即可启动。
- **自定义版本：**添加包含你自己 ZincSearch 构建的任意目录；FlyEnv 会扫描该目录，并将这些二进制文件与托管版本一起列出。
- **按版本环境文件：**FlyEnv 会在每个已安装二进制文件旁自动创建 `.env` 文件，使每个版本拥有独立的环境默认值。

![FlyEnv ZincSearch 版本管理器及静态在线列表截图](https://oss.macphpstudy.com/image/features/zincsearch-2.webp)

## 服务与配置

“服务”选项卡会以普通二进制进程启动所选 ZincSearch 版本，并从 `<BaseDir>/zincsearch/zincsearch.env` 解析环境变量。首次运行时，FlyEnv 会写入合理的默认值：`ZINC_FIRST_ADMIN_USER=admin`、`ZINC_FIRST_ADMIN_PASSWORD=admin`、`ZINC_SERVER_ADDRESS=127.0.0.1`、`ZINC_SERVER_PORT=4080`，数据目录位于 `<BaseDir>/zincsearch/data`。

“配置文件”选项卡是用于编辑 `zincsearch.env` 的纯文本编辑器，可直接修改环境条目中的绑定地址、端口、管理员凭据或数据路径，并提供 `zincsearch.env.default` 副本供参考。请注意，该配置是全局配置：所有已安装 ZincSearch 版本共享同一个 `zincsearch.env`。

![FlyEnv 在配置文件选项卡中编辑 zincsearch.env 截图](https://oss.macphpstudy.com/image/features/zincsearch-3.webp)

## Web 界面

ZincSearch 自带 Web 界面，FlyEnv 会直接提供访问入口：服务运行时，服务选项卡显示 **ZincSearch UI** 按钮，可在浏览器中打开控制台。地址从 env 文件解析，因此会使用你配置的主机和端口，默认是 `http://127.0.0.1:4080/`。使用 `zincsearch.env` 中的管理员凭据登录后，即可管理索引、执行搜索并检查文档。

## 日志

ZincSearch 在 FlyEnv 中提供两个独立日志选项卡——**日志**和**错误日志**。它们会打开按版本划分的启动日志 `zincsearch-<version>-start-out.log` 和 `zincsearch-<version>-start-error.log`，因此当版本启动失败时，可以轻松区分标准输出和启动错误。

<FeatureRelatedLinks locale="zh" slug="zincsearch" />

## 兼容性说明

FlyEnv 管理本地 ZincSearch 二进制文件、环境文件和数据目录，但不控制上游项目发布的 ZincSearch 版本。由于 ZincSearch 仅提供静态源，可安装版本取决于官方 GitHub Releases 为操作系统提供的内容。默认管理员凭据（`admin` / `admin`）仅用于本地开发；在将服务器暴露到电脑之外前，请在 `zincsearch.env` 中修改。请以应用内版本列表和[下载页面](/zh/download)作为可安装版本的权威依据，并查看[演示](/zh/demos)了解 FlyEnv 模块使用示例。
