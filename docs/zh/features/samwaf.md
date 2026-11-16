---
layout: doc
titleTemplate: false
title: 'SamWaf 插件：保护本地站点的 Web 应用防火墙 | FlyEnv'
description: '在 FlyEnv 中安装和运行 SamWaf，管理防火墙版本、编辑 YAML 配置、查看日志，并打开 Web 管理面板，为本地站点配置防护。'
---

# FlyEnv 中的 SamWaf

SamWaf 为你的本地开发工作区增加 Web 应用防火墙。它以反向代理的方式部署在网站前方，检查传入请求，并应用你配置的防护规则。你可以将它与本地 Web 服务器配合使用，测试网站防护、检查访问流量，再将这些经验用于部署环境。

FlyEnv 插件将 SamWaf 的版本管理、服务控制、配置文件和运行日志集中在同一个模块中。网站添加、防护规则和请求分析则在 SamWaf 自带的 Web 管理面板中完成。

从 **[设置 → 插件市场](/zh/features/plugin-market)** 安装 **SamWaf**，然后打开侧边栏中的 **SamWaf**。插件支持 macOS、Windows 和 Linux；可下载的运行时取决于你的操作系统和处理器架构。

## 安装运行时并启动防火墙

打开 **版本管理**，下载适合当前电脑的 SamWaf 发行版。FlyEnv 会列出上游项目中与当前平台匹配的稳定版安装包，优先从 GitHub 获取，并以 Gitee 作为备用来源。

安装后返回 **服务**，选择已安装的版本并启动。你也可以在这里停止或重启防火墙，并查看运行状态。插件还将 SamWaf 加入 FlyEnv 的托盘服务控制中。

每个已安装版本的配置、数据和日志分别保存在其安装目录下。更换版本时，请将这些文件作为该次安装的一部分一并考虑；安装另一个程序版本不会自动迁移网站设置。

![FlyEnv 中的 SamWaf 服务页，显示已安装版本、运行状态和服务控制按钮](https://oss.macphpstudy.com/image/features/plugin/samwaf-service.webp)

## 打开 Web 管理面板

SamWaf 启动后，点击 **服务** 页中的 Web 面板图标。FlyEnv 会读取所选版本配置中的管理端口，并在浏览器中打开面板。默认地址为 `http://127.0.0.1:26666`。

首次安装时，SamWaf 会为 `admin` 账户生成随机初始密码。第一次打开面板时，FlyEnv 会显示该密码。请登录后立即修改密码。初始凭据也保存在该版本安装目录下的 `data/initial_password.txt` 中。

FlyEnv 的初始配置将管理访问限制在本机回环地址。管理端口与你为受保护网站选择的 HTTP 或 HTTPS 端口相互独立。

## 将 SamWaf 放在本地站点前方

在 SamWaf 的 Web 面板中添加需要保护的网站，并将上游地址指向应用现有的访问地址。传入请求必须先到达 SamWaf 的监听入口；在 FlyEnv 中创建站点，不会自动让流量经过防火墙。

例如，受保护的本地域名可以先将请求发送到 SamWaf，再由它把允许通过的流量转发给另一个端口上的后端。后端可以由 **[Nginx](/zh/features/nginx)**、**[Apache](/zh/features/apache)** 或 **[Caddy](/zh/features/caddy)** 提供服务。请为防火墙和后端使用不同的监听地址或端口，避免端口冲突和代理循环。FlyEnv 的 **[本地站点与 HTTPS](/zh/features/local-sites-https)** 模块负责管理后端站点的域名及 Web 服务器设置。

通过 SamWaf 面板可以管理网站防护规则并查看请求。SamWaf 提供 SQL 注入和 XSS 检测、IP 白名单与黑名单、自定义规则及防护日志。网站和规则的具体操作请参阅 [SamWaf 文档](https://doc.samwaf.com/)。

## 编辑配置并查看日志

**配置文件** 页会在 FlyEnv 的 YAML 编辑器中打开所选版本的 `conf/config.yml`。该文件包含管理端口（`local_port`）、管理访问 IP 白名单、数据库、缓存和日志设置。FlyEnv 会在需要时创建初始配置，并保留已有文件的内容。

初始配置使用 SQLite 和内存缓存，无需额外的数据库或缓存服务即可启动。各网站的具体设置仍在 SamWaf 面板中管理。

![FlyEnv 中的 SamWaf YAML 配置编辑器，显示数据库、缓存、管理端口和安全设置](https://oss.macphpstudy.com/image/features/plugin/samwaf-configuration.webp)

打开 **日志** 页可以查看运行日志。如果主日志尚未生成，页面会改为显示启动输出或启动错误。版本启动失败或面板无法访问时，可以通过这些日志排查；网站请求及防护记录则在 SamWaf 的 Web 面板中查看。

返回 **[插件市场](/zh/features/plugin-market)** 更新 FlyEnv 集成，或浏览 **[特性总览](/zh/features#plugins)** 中的其他可选模块。
