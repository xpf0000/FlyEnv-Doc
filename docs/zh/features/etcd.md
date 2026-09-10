---
layout: doc
titleTemplate: false
title: 'FlyEnv Etcd：本地开发模块与配置指南'
description: '在 FlyEnv 中运行 etcd，管理各版本的 etcd.yaml、2379/2380 端口和运行日志。'
head:
  - - meta
    - name: description
      content: '在 FlyEnv 中运行 etcd，管理各版本的 etcd.yaml、2379/2380 端口和运行日志。'
  - - meta
    - property: og:title
      content: 'FlyEnv Etcd：本地开发模块与配置指南'
  - - meta
    - property: og:description
      content: '在 FlyEnv 中运行 etcd，管理各版本的 etcd.yaml、2379/2380 端口和运行日志。'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/zh/features/etcd
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/zh/features/etcd
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Etcd 在 FlyEnv 中

etcd 是一个分布式、强一致性的键值存储，Kubernetes 也使用它保存集群状态。它是服务发现、分布式配置和领导者选举的标准构建块。FlyEnv 将 etcd 作为托管本地服务运行：安装一个或多个 etcd 版本，从侧边栏或系统托盘启动选定版本，直接编辑 `etcd.yaml` 配置，并在应用内查看按版本启动日志。生成的默认配置在 2379 端口监听客户端流量、在 2380 端口监听节点流量，可直接用于本地服务发现和分布式配置。

![FlyEnv etcd 模块概览截图](https://oss.macphpstudy.com/image/features/etcd-1.webp)

## 版本管理

从 **Etcd → 版本管理器** 并行安装多个 etcd 版本，然后选择服务运行的版本。

- **安装来源：** 所有平台均提供静态在线 etcd 软件包列表；macOS 和 Linux 还提供 Homebrew `etcd` 公式。
- **自定义版本：** 指向包含你自己 etcd 构建的目录，FlyEnv 会扫描并列在管理版本旁边。
- **一次运行一个版本：** 一个版本运行时无法启动另一个版本；请先停止当前版本。

![FlyEnv etcd 版本管理器及静态、Homebrew 来源截图](https://oss.macphpstudy.com/image/features/etcd-2.webp)

## 服务与配置

服务选项卡控制运行中的 etcd 进程。FlyEnv 使用 `--config-file etcd.yaml` 启动真实 `etcd` 二进制，因此服务器行为完全由该配置文件驱动。

- **默认配置：**首次启动时，FlyEnv 会写入 `etcd.yaml`：客户端请求监听 `0.0.0.0:2379`，节点通信监听 `0.0.0.0:2380`，对外通告地址为 `127.0.0.1`，日志级别为 `info` 并输出到 stdout。已有文件不会被覆盖，只有在配置缺失时 FlyEnv 才会生成。
- **原始编辑器：**“配置文件”选项卡会直接打开 `etcd.yaml`，并在旁边保留 `.default` 副本，便于随时与原始配置比较或恢复。
- **无隐藏层：**etcd 会原样读取 `etcd.yaml`，因此集群、TLS、配额等任意设置都按照上游文档的定义生效。

![FlyEnv etcd 服务和配置截图](https://oss.macphpstudy.com/image/features/etcd-3.webp)

## 日志

**日志**和**错误日志**选项卡为每个已安装版本提供独立查看器：`etcd-<version>-start-out.log`记录服务器 stdout，`etcd-<version>-start-error.log`记录 stderr。版本无法启动时，应首先检查错误日志；2379 端口冲突或格式错误的 `etcd.yaml` 都会立即显示。

![FlyEnv 按版本 etcd 启动和错误日志查看器截图](https://oss.macphpstudy.com/image/features/etcd-4.webp)

<FeatureRelatedLinks locale="zh" slug="etcd" />

## 兼容性说明

- etcd 模块在 macOS 上不提供 MacPorts 安装来源；请改用静态列表、Homebrew 或自定义目录。
- FlyEnv 仅管理 etcd 进程、`etcd.yaml` 和日志文件，不捆绑 etcd 浏览器或管理面板；键检查和数据操作需通过 `etcdctl` 或你自己的客户端。
- 提供的 etcd 版本取决于平台以及在线列表和 Homebrew 发布的内容；请在应用内版本管理器或[下载页面](/zh/download)查看可安装版本。
- 其他 FlyEnv 模块可基于运行中的 etcd：[MinIO](/zh/features/minio) 配置提供分布式部署的 etcd 调优项，[Consul](/zh/features/consul) 和 [R-Nacos](/zh/features/r-nacos) 等模块覆盖相邻的服务发现与配置需求。请参阅 [demos](/zh/demos) 了解真实本地堆栈中的 etcd。
