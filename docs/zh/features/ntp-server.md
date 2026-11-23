---
layout: doc
titleTemplate: false
title: 'NTP Server 插件 — 本地 NTP 校时与时间模拟测试 | FlyEnv'
description: '在 FlyEnv 中运行本地 NTP 服务器，让测试客户端读取经上游校准的实时时间、持续走时的偏移时间，或冻结在指定时刻的时间。'
---

# FlyEnv 中的 NTP Server

如果待测应用或设备通过 NTP 获取时间，可以用 NTP Server 插件提供测试时钟。让时钟快 7 天，检查设备如何处理过期情况，也可以把每次响应冻结在同一时刻，复现与日期有关的故障。模拟时间通过 NTP 响应返回，运行 FlyEnv 的电脑仍使用正常的系统时间。

## 安装插件并启动服务

1. 在 **[设置 → 插件市场](/zh/features/plugin-market)** 安装 **NTP Server**，然后从 FlyEnv 的侧边栏打开该模块。
2. 打开 **版本管理**，安装一个服务器版本。FlyEnv 提供适用于 Windows、macOS 和 Linux 的 x64 与 ARM64 构建，并使用 SHA-256 校验每个下载包。
3. 在 **配置文件** 中设置时钟模式和监听地址、端口。保存后，在 **服务** 中选择已安装的版本并启动。服务运行期间保存配置会重启服务，使新设置生效。

![FlyEnv 插件市场的官方插件列表显示 NTP Server 已安装](https://oss.macphpstudy.com/image/features/plugin/ntp-server-plugin-market.webp)

在 **服务** 中可以查看运行状态、停止或重启服务器。插件本身的更新在插件市场中管理。

## 设置返回给客户端的时间

在 **配置文件** 中切换到 **常用设置**，选择 **时钟模式**。切回 JSON 编辑器可以直接修改同一份配置。

- **实时** 返回当前时间。默认启用 **上游校时**。可以在 **上游服务器** 中输入主机名或 `主机:端口`，多项用逗号分隔。未完成上游校时时，服务可能会报告时钟未同步，部分客户端会忽略这种响应。
- **时间偏移** 为当前时钟加上一个固定偏移量，时间仍持续向前。可以输入正负整数秒，或选择 **+7 天**、**−2 小时**、**+365 天**。
- **冻结时间** 让每次请求都收到同一个时刻。按本机时区选择日期和时间，FlyEnv 会将该时刻以 UTC 保存。

![NTP Server 常用设置显示时间偏移模式、偏移预设、监听地址和 UDP 端口](https://oss.macphpstudy.com/image/features/plugin/ntp-server-configuration.webp)

点击 **恢复实时** 会切换编辑器中的时钟模式，保存配置后生效。部分系统 NTP 客户端会拒绝跨度过大的时间差或重复出现的时间戳。可以使用能查看 NTP 响应时间戳的测试客户端验证两种模拟模式。

## 连接本机或局域网客户端

服务默认在 `0.0.0.0` 上监听 UDP 端口 `12300`。服务启动后，点击 **服务** 页的绿色网络图标，打开 **NTP 服务使用方法**，查看当前配置的地址和端口。

![NTP Server 服务页显示正在运行的版本和用于查看连接信息的绿色按钮](https://oss.macphpstudy.com/image/features/plugin/ntp-server-service.webp)

- **在运行 FlyEnv 的电脑上**，按默认配置连接 `127.0.0.1` 的 UDP 端口 `12300`。如果只允许本机访问，请将 **监听 IP 限制** 设为 `127.0.0.1`。
- **从局域网内另一台设备连接时**，将服务绑定到 FlyEnv 电脑的局域网 IP，或保留默认的全部 IPv4 网卡监听。在客户端填写该电脑的局域网 IP 和配置的 UDP 端口。
- **如果客户端要求使用标准 NTP 端口**，将 **UDP 端口** 设为 `123`，并确认所选网卡上的该端口可用。

## 查看请求和启动错误

在 **配置文件** 中，用 **记录客户端请求** 控制是否记录客户端请求及返回的时间。在 **日志 → 服务日志** 中可以确认测试客户端是否连到了服务，以及服务返回了什么时间戳。如果服务启动失败，可以打开 **日志 → 启动错误** 查看原因，例如端口已被占用。

![NTP Server 服务日志显示启动时间、时钟模式和 UDP 监听地址](https://oss.macphpstudy.com/image/features/plugin/ntp-server-log.webp)

FlyEnv 将 `config.json`、`ntp.log` 和 `ntp-start-error.log` 保存在数据目录下的 `server/ntp-server` 中。重新安装服务器程序会保留已有配置。

可以在 [NTP Server 项目文档](https://github.com/xpf0000/ntp-server#local-test-clock-and-flyenv-configuration) 中查看服务程序的 JSON 时钟设置。
