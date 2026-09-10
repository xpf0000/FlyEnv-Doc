---
layout: doc
titleTemplate: false
title: 'FlyEnv Nginx：本地开发模块与配置指南'
description: '安装和切换 Nginx，编辑 nginx.conf，并通过重写规则和反向代理托管本地站点。'
head:
  - - meta
    - name: description
      content: '安装和切换 Nginx，编辑 nginx.conf，并通过重写规则和反向代理托管本地站点。'
  - - meta
    - property: og:title
      content: 'FlyEnv Nginx：本地开发模块与配置指南'
  - - meta
    - property: og:description
      content: '安装和切换 Nginx，编辑 nginx.conf，并通过重写规则和反向代理托管本地站点。'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/zh/features/nginx
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/zh/features/nginx
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Nginx 在 FlyEnv 中

Nginx 是一个开源 Web 服务器和反向代理，既可直接提供站点，也可将流量转发到 PHP-FPM 等应用服务器。FlyEnv 将 Nginx 作为本地技术堆栈中的托管组件：并行安装多个版本，从侧边栏或系统托盘运行其中一个后台服务，并通过可视化表单或完整源码编辑器修改 `nginx.conf`。你在 FlyEnv 中创建的每个 PHP 类型站点都会获得独立生成的 Nginx 虚拟主机配置、按站点分配的端口、针对框架的重写规则和反向代理支持。[Host 指南](/zh/guide/host)介绍完整站点流程。

![FlyEnv Nginx 模块概览截图](https://oss.macphpstudy.com/image/features/nginx-1.webp)

## 版本管理 (Nginx)

在 **Nginx → 版本管理器** 中安装多个 Nginx 版本并行保留。

- **多个安装源：** 所有平台提供静态构建，macOS 和 Linux 还提供 Homebrew，macOS 另提供 MacPorts。
- **自定义版本：** 注册包含你自己 Nginx 构建的目录；FlyEnv 会定位其中的二进制文件，并与托管版本一起显示。
- **共享配置：** 所有已安装版本使用同一个 `nginx.conf`，切换版本不会丢失设置。

![FlyEnv Nginx 版本管理器及安装来源截图](https://oss.macphpstudy.com/image/features/nginx-2.webp)

## 服务管理

Nginx 在 FlyEnv 中是真正的后台服务，而不只是版本列表。

- **一次运行一个版本：** 可安装多个版本，但同时只能运行一个；服务选项卡会阻止在已有版本运行时启动另一个版本。
- **侧边栏和托盘控制：** 从侧边栏模块开关启动或停止 Nginx，也可直接在系统托盘操作，无需打开主窗口。
- **启动时自动修复配置：** FlyEnv 会修复配置中的 `user` 指令和临时路径，并为站点使用的每个 PHP 版本重新生成 `enable-php-<version>.conf` include，确保 PHP-FPM 集成始终匹配当前设置。

![FlyEnv Nginx 服务表及启动、停止控制截图](https://oss.macphpstudy.com/image/features/nginx-3.webp)

## 配置

**配置文件**选项卡提供两种方式编辑共享的 `nginx.conf`。

- **常用设置表单：** 无需接触文件即可调整常用指令，包括 `keepalive_timeout`、`gzip`、`gzip_min_length`、`gzip_comp_level`、`client_max_body_size`、`server_names_hash_bucket_size`、`server_names_hash_max_size` 以及客户端标头和正文缓冲区大小。
- **完整源码编辑器：** 切换到原始编辑器修改表单未覆盖的选项，并一键恢复默认配置。

![FlyEnv 使用常用设置表单编辑 nginx.conf 截图](https://oss.macphpstudy.com/image/features/nginx-4.webp)

## 站点集成

FlyEnv 的 Host 模块没有单一默认 Web 服务器：PHP 类型站点会同时在四种 Web 服务器——Nginx、[Apache](/zh/features/apache)、[Caddy](/zh/features/caddy) 和 [FrankenPHP](/zh/features/frankenphp)——中生成虚拟主机配置，由当前运行的服务器提供站点。站点创建流程请参阅 [Host 指南](/zh/guide/host)。

- **按站点虚拟主机和端口：** 每个 PHP 类型站点都有独立生成的 Nginx 虚拟主机文件和端口（默认 80/443），与 Apache、Caddy 或 FrankenPHP 使用的端口相互独立，因此同一站点可同时由多个 Web 服务器提供服务，详见[多服务器将 HTML 解析为 PHP 指南](/zh/guide/parse-html-as-php-multi-servers)。其他类型站点有所不同：Node、Java、Go 和 Python 站点通过反向代理访问，Tomcat 站点配置位于 `server.xml`。[本地站点、自定义域名和 HTTPS](/zh/features/local-sites-https)介绍域名与 HTTPS。
- **自动重写规则：** FlyEnv 会检测 [WordPress](/zh/solutions/wordpress)、[Laravel](/zh/solutions/laravel) 和 Yii 项目，并在站点虚拟主机中预填匹配的 URL 重写规则。
- **按站点反向代理：** 可为站点添加反向代理规则，将路径转发到本地应用服务器；[NestJS 多服务器反向代理指南](/zh/guide/reverse-proxy-nestjs-multi-servers)提供完整示例。
- **通过 PHP-FPM 提供 PHP：** PHP 站点通过按版本的 PHP-FPM include 提供服务，每个站点可从 [PHP 模块](/zh/features/php)已安装的版本中选择自己的 PHP 版本。

## 日志

Nginx 模块页面包含专用的**错误日志**和**访问日志**选项卡，用于查看服务器级日志。每个站点还会写入自己的访问和错误日志，你可以在 Host 模块的站点日志查看器中打开它们，调试单个域名时无需翻阅全局日志。

![FlyEnv Nginx 错误日志和访问日志查看器截图](https://oss.macphpstudy.com/image/features/nginx-5.webp)

<FeatureRelatedLinks locale="zh" slug="nginx" />

## 兼容性说明

FlyEnv 管理 Nginx 二进制文件、进程生命周期和生成的配置。所有已安装版本共享一个 `nginx.conf`，因此无论启动哪个版本，通过可视化表单或原始编辑器做出的更改都会生效；依赖仅在新版本中存在的指令前请注意这一点。可用安装源因平台而异（MacPorts 仅限 macOS，Windows 使用静态构建）。请根据已安装的 Nginx 构建验证站点要求，并以[下载页面](/zh/download)和当前发行说明作为支持软件包的依据。
