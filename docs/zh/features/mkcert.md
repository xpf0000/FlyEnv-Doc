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

mkcert 是用于创建本地可信开发证书的小型开源工具：它会创建自己的根 CA；将该 CA 安装到系统信任库后，它签发的证书即可被浏览器接受，不会出现警告。FlyEnv 集成了 [mkcert](https://github.com/FiloSottile/mkcert)，将整个过程变成点击式工作流：安装二进制文件、信任一次根 CA，然后为任意[本地站点](/zh/features/local-sites-https)生成证书，无需使用命令行。

![FlyEnv MkCert 模块概览截图](https://oss.macphpstudy.com/image/features/mkcert-1.webp)

## 版本管理

**版本管理器**选项卡用于安装和更新 mkcert 二进制文件。

- **静态构建：** 从 FlyEnv 的在线版本列表安装官方 mkcert 发布版本，文件直接下载自项目的 GitHub Releases。
- **Homebrew：** 在 macOS 和 Linux 上，通过 `brew install mkcert` 安装的版本会被检测，并与托管构建一起列出。
- **自定义目录：** 将 FlyEnv 指向包含你自己 `mkcert` 二进制文件的文件夹，系统也会扫描该目录。
- **开箱即用：** 下载的二进制文件会解压到 FlyEnv 自有目录；在 macOS 上自动移除隔离属性并设置可执行权限。

![FlyEnv MkCert 版本管理器及静态、Homebrew 构建截图](https://oss.macphpstudy.com/image/features/mkcert-2.webp)

## 本地 CA 和证书

**证书**选项卡是模块的核心。它显示 mkcert **CA 根目录路径**（实时读取 `mkcert -CAROOT` 的结果，点击即可在文件管理器中打开文件夹），并提供“安装 CA”操作，在 FlyEnv 内置终端中运行 `mkcert -install`，将本地根 CA 注册到系统信任库，使浏览器信任它签发的证书。

- **二进制文件选择：** 选择已安装的 mkcert 构建来执行命令；FlyEnv 优先使用自身环境路径中的版本。
- **透明执行：** CA 安装和证书生成都会在内置终端中可见地运行，你可以准确看到 mkcert 的操作。

## 站点证书生成

证书选项卡会列出你在 FlyEnv 中创建的站点，每个站点都显示证书和密钥路径，并提供“生成”操作。

- **覆盖域名和别名：** 生成的证书通过 `mkcert -cert-file … -key-file …` 包含站点域名和你配置的每个别名。
- **托管存储：** 证书和密钥写入 FlyEnv 自有的 `CA` 目录，每个站点使用一个文件夹。
- **自动启用 SSL：** 如果站点尚未启用 HTTPS，FlyEnv 会在生成完成后使用新证书自动启用，无需手动修改[站点设置](/zh/guide/host)。[Nginx](/zh/features/nginx)、[Apache](/zh/features/apache) 和 [Caddy](/zh/features/caddy) 的站点虚拟主机会直接引用这些证书文件。

![FlyEnv 为站点生成 HTTPS 证书截图](https://oss.macphpstudy.com/image/features/mkcert-3.webp)

<FeatureRelatedLinks locale="zh" slug="mkcert" />

## 兼容性说明

- mkcert 是一次性命令行工具，不是后台服务：无需启动或停止，模块也没有配置文件编辑器或日志查看器。
- 生成的证书是本地可信开发证书，仅用于你自己的电脑，不适用于生产环境或其他设备。
- 信任根 CA（`mkcert -install`）会修改系统信任库并请求系统密码，mkcert 会在内置终端中处理。
- 安装源因平台而异：所有平台提供静态构建，macOS 和 Linux 另提供 Homebrew。请参阅[下载页面](/zh/download)了解 FlyEnv 支持的平台。
