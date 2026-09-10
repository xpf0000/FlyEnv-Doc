---
layout: doc
titleTemplate: false
title: 'FlyEnv 本地站点与 HTTPS：本地开发模块与配置指南'
description: '使用 FlyEnv Host 创建自定义域名站点，配置端口、反向代理和本地可信 HTTPS 证书。'
head:
  - - meta
    - name: description
      content: '使用 FlyEnv Host 创建自定义域名站点，配置端口、反向代理和本地可信 HTTPS 证书。'
  - - meta
    - property: og:title
      content: 'FlyEnv 本地站点与 HTTPS：本地开发模块与配置指南'
  - - meta
    - property: og:description
      content: '使用 FlyEnv Host 创建自定义域名站点，配置端口、反向代理和本地可信 HTTPS 证书。'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/zh/features/local-sites-https
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/zh/features/local-sites-https
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# FlyEnv 中的本地站点、自定义域名和 HTTPS

Host 模块会将本地项目映射到便于浏览器访问的地址，并配置为其提供服务的 Web 服务器。站点条目可以包含文档根目录、别名、各服务器端口、可选的 PHP 版本、重写规则、反向代理规则以及 HTTPS 证书设置。

## 网站条目控制的内容

- **域名和别名：** 选择主机名，例如 `myapp.test`；同一项目需要多个本地名称时添加别名。
- **文档根目录：** 将静态站点或 PHP 应用指向应提供服务的目录。框架通常使用 `public` 目录。
- **服务器端口：** 为 Nginx、Apache、Caddy 或 FrankenPHP 配置 HTTP 和 HTTPS 端口；高级设置可分别公开每个服务器的端口。
- **PHP 绑定：** 为 PHP 站点选择已安装的 PHP 版本；如果不需要 PHP 处理器，也可以将其保留为静态站点。
- **重写规则：** 对于通过前端控制器路由的框架，编辑自动生成的 Nginx 重写配置。
- **反向代理：** 将 `/api` 等路径映射到 `http://127.0.0.1:3000` 等本地服务 URL。
- **HTTPS：** 启用自动 SSL 生成本地证书，或为自定义配置提供证书和密钥文件。

当站点需要本地名称时，FlyEnv 会将配置的主机映射写入操作系统 hosts 文件；也可以使用[内置 DNS 服务器](/zh/features/dns-server)，完全无需修改 hosts 文件即可解析站点域名。首次设置可能要求输入管理员密码，这是因为需要辅助程序权限。

## 可预测的本地站点工作流

1. 启动项目所需的 Web 服务器和运行时，例如 Nginx 与 PHP-FPM。
2. 打开 **Host** 并选择 **添加站点**。
3. 输入本地域名和正确的文档根目录；Laravel 及许多 PHP 框架应使用项目的 `public` 目录。
4. 选择 PHP 版本或静态站点模式，并设置服务器端口。
5. 当项目需要 HTTPS、安全 Cookie、OAuth 回调或要求安全来源的浏览器 API 时，启用自动 SSL。
6. 如果项目使用前端控制器或独立应用服务，添加重写规则或反向代理目标。
7. 保存站点，启动选定的服务，然后从 Host 列表打开站点链接。

[主机指南](/zh/guide/host)提供截图和逐字段设置说明，还介绍别名、带明确端口的 `localhost`、重写模板及故障排查。

## 将项目服务连接到域名

Host 不必亲自启动应用进程。让语言模块负责运行进程，再将请求代理到其本地端口：

| 应用服务 | 本地监听地址 | Host 规则 |
| --- | --- | --- |
| Node.js / NestJS | `127.0.0.1:3000` | `https://api.test` → `http://127.0.0.1:3000` |
| PHP Worker 或 RoadRunner | `127.0.0.1:8787` | `https://worker.test` → `http://127.0.0.1:8787` |
| 静态前端 | Web 服务器文档根目录 | `https://frontend.test` → 项目根目录 |

有关项目服务端实现，请参阅 [Node.js 特性页](/zh/features/nodejs)；有关 PHP-FPM 和 Worker 选项，请参阅 [PHP 特性页](/zh/features/php)。

## HTTPS 和证书

需要时，自动 SSL 会创建 FlyEnv 本地证书颁发机构，为站点别名签发证书，并将证书和密钥与站点配置一同保存。[MkCert](/zh/features/mkcert) 集成也可生成受本地信任的开发证书。如果浏览器或操作系统未自动信任 CA，请按照[主机指南](/zh/guide/host)中的平台证书说明操作。

不要将本地证书视为网站获得公共信任的证明：这些证书仅用于本地开发和测试。若要公开预览，可将本地服务与 [Cloudflare Tunnel](/zh/guide/cloudflare-tunnel-local-development) 配合，或将其部署到面向外部流量的环境中。

<FeatureRelatedLinks locale="zh" slug="local-sites-https" />

## 兼容性说明

站点功能的兼容性取决于 FlyEnv 中安装的 Web 服务器和运行时；要让证书受信任，还必须将 FlyEnv CA 安装到系统中。请在自己的机器上验证别名、端口和 HTTPS 的行为，并以[下载页面](/zh/download)及当前发行说明作为支持软件包的依据。
