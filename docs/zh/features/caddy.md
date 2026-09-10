---
layout: doc
titleTemplate: false
title: 'FlyEnv Caddy：本地开发模块与配置指南'
description: '在 FlyEnv 中运行 Caddy，管理 Caddyfile、站点端口、内部 HTTPS 和反向代理。'
head:
  - - meta
    - name: description
      content: '在 FlyEnv 中运行 Caddy，管理 Caddyfile、站点端口、内部 HTTPS 和反向代理。'
  - - meta
    - property: og:title
      content: 'FlyEnv Caddy：本地开发模块与配置指南'
  - - meta
    - property: og:description
      content: '在 FlyEnv 中运行 Caddy，管理 Caddyfile、站点端口、内部 HTTPS 和反向代理。'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/zh/features/caddy
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/zh/features/caddy
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Caddy 在 FlyEnv 中

Caddy 是一个通过单个 Caddyfile 配置、内置自动 HTTPS 的开源 Web 服务器。FlyEnv 将 Caddy 纳入本地开发栈：从多个来源安装版本，以服务方式运行并自动重新加载配置，同时为创建的每个 PHP 类型站点生成 vhost。每个站点拥有独立 Caddy 端口、自动内部 HTTPS 和按站点配置的反向代理规则，统一写入受管 Caddyfile。

![FlyEnv 模块概览](https://oss.macphpstudy.com/image/features/caddy-1.webp)

## Caddy 版本管理

从 **Caddy → 版本管理器** 安装并保留所需版本。

- **多个安装源：** 所有平台均可从 FlyEnv 在线版本列表获取静态构建；Windows 条目链接到 GitHub 发布版本，macOS/Linux 支持 Homebrew，macOS 还支持 MacPorts。
- **自定义版本：** 将 FlyEnv 指向包含自行编译或外部安装 Caddy 二进制文件的目录，该版本会与受管版本一起显示。
- **单个运行版本：** 可以安装多个版本，但同一时间只能运行一个 Caddy 服务。

![版本管理器界面](https://oss.macphpstudy.com/image/features/caddy-2.webp)

## 服务管理

Caddy 由 FlyEnv 监督并以前台进程运行，启动命令为 `caddy run --config <baseDir>/caddy/Caddyfile --watch`；Linux 上通过 FlyEnv 的 root 辅助程序启动，以便绑定特权端口。

- **自动重新加载：** `--watch` 标志会在配置变更时让 Caddy 自动重载，因此编辑 Caddyfile 或站点 vhost 无需手动重启即可生效。
- **侧边栏和托盘控制：** 可在侧边栏模块开关中启动或停止 Caddy，也可直接从系统托盘操作，无需打开主窗口。
- **启动时修复 vhost：** 服务启动时，FlyEnv 会为站点重建缺失的 vhost，新添加或恢复的站点可立即提供服务。

![服务与配置界面](https://oss.macphpstudy.com/image/features/caddy-3.webp)

## 配置

Caddy 使用单个全局 **Caddyfile**，由 FlyEnv 根据模板生成：设置 SSL 存储目录和日志文件，并以 `import vhost/caddy/*` 行结尾以载入每个站点的 vhost。

- **源代码编辑器：** **配置文件**标签页直接在完整编辑器中修改 Caddyfile；没有可视化设置表单，因此可自由使用完整语法。
- **自动加载：** 由于服务以 `--watch` 运行，保存文件后 Caddy 就会应用新配置。

## 站点集成

Caddy 可以为 FlyEnv Host 模块中创建的站点提供服务。只有 PHP 类型站点会生成 Caddy vhost，并连接到 [PHP 模块](/zh/features/php)中的 PHP-FPM 版本；Node、Java、Go 和 Python 站点通过反向代理访问，[多服务器反向代理指南](/zh/guide/reverse-proxy-nestjs-multi-servers)展示了这一模式；Tomcat 站点则配置在 `server.xml` 中。

- **按站点端口：** 每个 PHP 类型站点拥有独立 Caddy 端口（默认 80/443），与 [Nginx](/zh/features/nginx)、Apache 或 [FrankenPHP](/zh/features/frankenphp) 使用的端口互不影响，因此同一站点可同时由多个 Web 服务器提供服务。
- **自动 HTTPS：** 站点 vhost 使用 `tls internal`，Caddy 会自动签发并信任本地证书；也可指向自定义证书文件，例如由 [MkCert 模块](/zh/features/mkcert)生成的证书。域名和 HTTPS 详见[本地站点、自定义域名与 HTTPS](/zh/features/local-sites-https)。
- **按站点反向代理：** 为站点添加反向代理规则，将路径转发到本地应用服务器；FlyEnv 会将规则写入站点 Caddy vhost。

![站点与工具界面](https://oss.macphpstudy.com/image/features/caddy-4.webp)

## 日志

Caddy 模块页面包含一个**日志**标签页，显示服务器级日志 `caddy/caddy.log`。站点还会保存自己的访问和错误日志，可在 Host 模块每个站点的日志查看器中打开，便于隔离单个域名的流量。模块没有内置管理面板，日志标签页和受管 Caddyfile 构成全部运维界面。

<FeatureRelatedLinks locale="zh" slug="caddy" />

## 兼容性说明

FlyEnv 管理 Caddy 二进制文件、进程生命周期和生成的配置；不能保证每个 Caddy 插件或自定义构建都能在所有操作系统上使用。Caddyfile 以原始文本编辑，没有可视化表单；服务以 `--watch` 运行，保存后的更改会立即加载，因此请在依赖前验证配置。可用安装源因平台而异（MacPorts 仅支持 macOS，Windows 仅提供静态源）。支持的软件包请以[下载页面](/zh/download)和当前发行说明为准。
