---
layout: doc
titleTemplate: false
title: 'FlyEnv MkCert：本地开发模块与配置指南'
description: '安装 mkcert、信任本地 CA，并为 FlyEnv 本地域名生成浏览器信任的 HTTPS 证书。'
head:
  - - meta
    - name: description
      content: '安装 mkcert、信任本地 CA，并为 FlyEnv 本地域名生成浏览器信任的 HTTPS 证书。'
  - - meta
    - property: og:title
      content: 'FlyEnv MkCert：本地开发模块与配置指南'
  - - meta
    - property: og:description
      content: '安装 mkcert、信任本地 CA，并为 FlyEnv 本地域名生成浏览器信任的 HTTPS 证书。'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/zh/features/mkcert
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/zh/features/mkcert
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# 使用 FlyEnv 管理本地 HTTPS 证书

mkcert 会创建用于开发的本地证书颁发机构。浏览器需要信任这个 CA，证书也必须覆盖所访问的域名。FlyEnv 集成了 [mkcert](https://github.com/FiloSottile/mkcert)，可安装 CA 并为[本地站点](/zh/features/local-sites-https)生成证书。

![FlyEnv MkCert 模块概览截图](https://oss.macphpstudy.com/image/features/mkcert-1.webp)

## 版本管理

**版本管理器**选项卡用于安装和更新 mkcert 二进制文件。

- **静态构建：** 从 FlyEnv 的在线版本列表安装官方 mkcert 发布版本，文件直接下载自项目的 GitHub Releases。
- **Homebrew：** 在 macOS 和 Linux 上，通过 `brew install mkcert` 安装的版本会被检测，并与托管构建一起列出。
- **自定义目录：** 将 FlyEnv 指向包含你自己 `mkcert` 二进制文件的文件夹，系统也会扫描该目录。
- **开箱即用：** 下载的二进制文件会解压到 FlyEnv 自有目录；在 macOS 上自动移除隔离属性并设置可执行权限。

![FlyEnv MkCert 版本管理器及静态、Homebrew 构建截图](https://oss.macphpstudy.com/image/features/mkcert-2.webp)

## 本地 CA 和证书

**证书**选项卡显示 mkcert 的 **CA 根目录路径**，结果来自 `mkcert -CAROOT`，点击即可打开文件夹。“安装 CA”会在 FlyEnv 内置终端中运行 `mkcert -install`，将本地根 CA 注册到当前机器支持的信任存储。

- **二进制文件选择：** 选择已安装的 mkcert 构建来执行命令；FlyEnv 优先使用自身环境路径中的版本。
- **透明执行：** CA 安装和证书生成都会在内置终端中可见地运行，你可以准确看到 mkcert 的操作。

## 站点证书生成

证书选项卡会列出你在 FlyEnv 中创建的站点，每个站点都显示证书和密钥路径，并提供“生成”操作。

- **覆盖域名和别名：** 生成的证书通过 `mkcert -cert-file … -key-file …` 包含站点域名和你配置的每个别名。
- **托管存储：** 证书和密钥写入 FlyEnv 自有的 `CA` 目录，每个站点使用一个文件夹。
- **自动启用 SSL：** 如果站点尚未启用 HTTPS，FlyEnv 会在生成完成后使用新证书自动启用，无需手动修改[站点设置](/zh/guide/host)。[Nginx](/zh/features/nginx)、[Apache](/zh/features/apache) 和 [Caddy](/zh/features/caddy) 的站点虚拟主机会直接引用这些证书文件。

![FlyEnv 为站点生成 HTTPS 证书截图](https://oss.macphpstudy.com/image/features/mkcert-3.webp)

如果浏览器提示域名不匹配或证书不受信任，按 [Host 指南](/zh/guide/host) 检查域名解析、证书名称和浏览器信任设置。请将 CA 私钥留在本机。

<FeatureRelatedLinks locale="zh" slug="mkcert" />

## 兼容性说明

- mkcert 是一次性命令行工具，不是后台服务：无需启动或停止，模块也没有配置文件编辑器或日志查看器。
- 如需在另一台开发设备上建立信任，将公有的 `rootCA.pem` 安装到该设备的信任存储。请妥善保管 `rootCA-key.pem`，证书仅用于开发。
- 信任根 CA（`mkcert -install`）会修改信任存储，内置终端可能提示授予管理员权限。
- 安装源因平台而异：所有平台提供静态构建，macOS 和 Linux 另提供 Homebrew。请参阅[下载页面](/zh/download)了解 FlyEnv 支持的平台。
