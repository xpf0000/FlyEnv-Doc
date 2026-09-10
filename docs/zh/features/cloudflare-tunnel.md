---
layout: doc
titleTemplate: false
title: 'FlyEnv Cloudflare Tunnel：本地开发模块与配置指南'
description: '在 FlyEnv 中创建 Cloudflare Tunnel，将公共主机名映射到本地服务并查看隧道日志。'
head:
  - - meta
    - name: description
      content: '在 FlyEnv 中创建 Cloudflare Tunnel，将公共主机名映射到本地服务并查看隧道日志。'
  - - meta
    - property: og:title
      content: 'FlyEnv Cloudflare Tunnel：本地开发模块与配置指南'
  - - meta
    - property: og:description
      content: '在 FlyEnv 中创建 Cloudflare Tunnel，将公共主机名映射到本地服务并查看隧道日志。'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/zh/features/cloudflare-tunnel
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/zh/features/cloudflare-tunnel
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# FlyEnv 中的 Cloudflare Tunnel

Cloudflare Tunnel 是 Cloudflare 提供的服务，可通过仅出站连接的隧道将本地服务连接到公共主机名，无需在路由器上进行端口转发或拥有公共 IP，因此非常适合演示和远程访问开发环境。FlyEnv 的 Cloudflare Tunnel 模块无需修改路由器或防火墙，即可将本地服务暴露到公共主机名。只需连接一次 Cloudflare 账户，添加将子域名映射到本地 `host:port` 目标的 DNS 规则，FlyEnv 会通过 Cloudflare API 自动创建隧道、写入 CNAME 记录并推送入口规则。每条隧道都作为独立的受管进程运行，并拥有自己的日志。

![FlyEnv Cloudflare Tunnel 模块概览](https://oss.macphpstudy.com/image/features/cloudflare-tunnel-1.webp)

## 隧道配置

从侧边栏打开 **Cloudflare Tunnel** 并添加隧道。设置对话框需要填写以下四项：

- **cloudflared 二进制文件：** 隧道进程使用 `cloudflared` 可执行文件，因此必须先安装至少一个 [Cloudflared 模块](/zh/features/cloudflared)版本。从下拉菜单选择版本；如果尚未安装，FlyEnv 会提示先完成安装。
- **API Token：** 具备账户隧道和 DNS 管理权限的 Cloudflare API 令牌，FlyEnv 使用它访问 Cloudflare API v4。
- **Account ID：** 拥有该区域的 Cloudflare 账户 ID。
- **Zone / Zone ID：** 隧道将使用其 DNS 记录和子域名的域名区域。

启动时，FlyEnv 会在账户中查找名为 `FlyEnv-Tunnel-<token hash>` 的远程隧道；如果不存在则自动创建，然后以脱离终端的后台进程运行 `cloudflared tunnel run --token <token>`。无需维护本地隧道配置文件：所有配置都保存在 Cloudflare，并完全通过 API 管理。

![版本管理器界面](https://oss.macphpstudy.com/image/features/cloudflare-tunnel-2.webp)

## DNS 规则到本地服务

每条隧道记录都可展开为 DNS 规则表。每条规则将公共主机名映射到本地服务：

- **子域名和区域：** 公共主机名，例如 `demo.example.com`。
- **协议和目标：** 使用 `http` 或 `https`；对于 `https` 目标，可使用 [MkCert 模块](/zh/features/mkcert)生成的证书；同时填写应接收流量的本地 `host:port`，通常是 [本地站点与 HTTPS](/zh/features/local-sites-https) 模块中的站点。

保存规则后，FlyEnv 会通过 Cloudflare API 同步写入两部分配置：创建或更新代理 CNAME 记录，将主机名指向 `<tunnelId>.cfargotunnel.com`；并推送隧道入口规则，将每个主机名路由到对应的 `http(s)://host:port` 目标，同时设置 `Host` 标头，最后以 404 规则处理未匹配的请求。编辑或删除规则时，CNAME 和入口条目也会相应更新。

![服务与配置界面](https://oss.macphpstudy.com/image/features/cloudflare-tunnel-3.webp)

要完整了解如何通过 [主机指南](/zh/guide/host) 创建并暴露站点，请参阅 [使用 Cloudflare Tunnel 进行本地开发指南](/zh/guide/cloudflare-tunnel-local-development)。

## 隧道日志

每条隧道都会在 FlyEnv 数据目录中保存自己的输出日志和错误日志，并与 pid 文件放在一起。内置日志查看器按隧道列出日志文件，您无需离开应用即可确认与 Cloudflare 边缘节点的连接是否建立，并诊断 DNS 或入口规则问题。

![站点与工具界面](https://oss.macphpstudy.com/image/features/cloudflare-tunnel-4.webp)

<FeatureRelatedLinks locale="zh" slug="cloudflare-tunnel" />

## 兼容性说明

Cloudflare Tunnel 模块支持 macOS、Windows 和 Linux。它需要 Cloudflared 模块提供 `cloudflared` 二进制文件，以及具备所选区域隧道和 DNS 管理权限的 Cloudflare API 令牌。由于全部配置存储在 Cloudflare 中，直接在 Cloudflare 控制台修改同一隧道可能会影响 FlyEnv 管理的内容；建议将 FlyEnv 作为这些隧道的唯一配置来源。支持的平台和安装包请查看[下载页面](/zh/download)及发行说明。
