---
layout: doc
titleTemplate: false
title: 'FlyEnv R-NACOS：本地开发模块与配置指南'
description: '运行 R-NACOS，管理环境变量配置，并使用内置控制台进行服务发现和配置管理。'
head:
  - - meta
    - name: description
      content: '运行 R-NACOS，管理环境变量配置，并使用内置控制台进行服务发现和配置管理。'
  - - meta
    - property: og:title
      content: 'FlyEnv R-NACOS：本地开发模块与配置指南'
  - - meta
    - property: og:description
      content: '运行 R-NACOS，管理环境变量配置，并使用内置控制台进行服务发现和配置管理。'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/zh/features/r-nacos
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/zh/features/r-nacos
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# R-NACOS 在 FlyEnv 中

R-NACOS 是用 Rust 编写的开源服务注册与配置中心，兼容阿里 Java 微服务生态使用的 Nacos 协议，适用于基于[本地 Java 环境](/zh/guide/set-up-java-development-environment)运行的 [Spring Boot](/zh/solutions/spring-boot) 服务。微服务可用它注册和发现实例，并发布客户端在运行时监听的动态配置。FlyEnv 将 R-NACOS 作为本地托管服务运行：从静态构建或 Homebrew 安装版本，使用生成的 `rnacos.env` 启动 `rnacos`，在内置编辑器中修改配置，并一键打开 R-NACOS 控制台。FlyEnv 可从[下载页面](/zh/download)获取，操作演示请查看[演示](/zh/demos)。

![FlyEnv R-Nacos 模块概览，包含服务、版本管理器、配置文件和日志选项卡](https://oss.macphpstudy.com/image/features/r-nacos-1.webp)

## 版本管理

从 **R-Nacos → 版本管理器** 并行安装多个版本，然后选择服务要运行的版本。

- **静态在线构建：** 版本列表来自 FlyEnv 在线目录，按操作系统和架构提供软件包；macOS 安装后会自动移除隔离属性。
- **Homebrew 与自动添加 tap：** 在 macOS 和 Linux 上，如果缺少 `r-nacos/r-nacos`，FlyEnv 会自动添加该 tap，无需手动操作终端。
- **自定义目录：** 指定包含自有 `rnacos` 二进制文件的目录，它会与托管版本一起显示。
- **同时只运行一个版本：** 另一个 R-NACOS 版本运行时无法启动新版本，端口始终对应唯一且明确的构建。

![FlyEnv R-Nacos 版本管理器及静态和 Homebrew 安装源](https://oss.macphpstudy.com/image/features/r-nacos-2.webp)

## 服务与配置

FlyEnv 以 `rnacos -e rnacos.env` 启动真实二进制文件，解析 env 文件并将每个条目注入进程环境，同时强制 `RNACOS_DATA_DIR` 指向 FlyEnv 的数据目录，让所有托管版本使用统一的存储位置。

- **生成 env 模板：** 默认 `rnacos.env` 记录标准端口（HTTP API 为 8848、gRPC 为 9848、控制台为 10848）、默认控制台账号 `admin/admin` 和 `RUST_LOG` 日志级别。
- **原始编辑器：** **配置文件**选项卡直接以 `.env` 格式编辑 `rnacos.env`，保留模板作为恢复参考，并链接到官方 R-Nacos 环境变量文档。
- **不会覆盖手动修改：** 只有文件不存在时 FlyEnv 才会生成 env 文件；自定义后会保持你的版本不变。

![FlyEnv R-Nacos 配置文件](https://oss.macphpstudy.com/image/features/r-nacos-3.webp)

## 控制台 (10848)

R-Nacos 自带 Web 控制台，FlyEnv 将其接入服务选项卡。服务运行时，控制台按钮会在浏览器打开 `http://127.0.0.1:10848/rnacos/`；使用 `rnacos.env` 中的账号（默认 `admin/admin`）登录后即可注册实例、查看服务健康状态以及发布或编辑配置。

![从 FlyEnv 在浏览器打开的 R-Nacos 控制台](https://oss.macphpstudy.com/image/features/r-nacos-4.webp)

## 日志

**日志**选项卡可切换按版本保存的启动输出：`rnacos-<version>-start-out.log` 和 `rnacos-<version>-start-error.log`。版本启动失败或客户端无法连接 8848 端口时，应首先查看错误日志。

<FeatureRelatedLinks locale="zh" slug="r-nacos" />

## 兼容性说明

FlyEnv 管理本地 R-NACOS 运行时、env 文件和数据目录，但不保证每个 R-NACOS 版本都能在所有操作系统或安装源上使用。Homebrew 适用于 macOS 和 Linux，静态构建覆盖各平台；此模块未启用 MacPorts。若技术栈需要 HashiCorp 工具而不是 Nacos 协议，也可使用 [Consul](/zh/features/consul)。控制台按钮使用独立的 10848 端口，即使你在 `rnacos.env` 中修改了端口，也需在配置地址手动打开控制台。实际可安装版本请以内置列表和[下载页面](/zh/download)为准。
