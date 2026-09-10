---
layout: doc
titleTemplate: false
title: 'FlyEnv DNS 服务器：本地开发模块与配置指南'
description: '使用 FlyEnv 内置的 53 端口 DNS 服务器解析全部本地域名，无需逐条编辑 hosts 文件。'
head:
  - - meta
    - name: description
      content: '使用 FlyEnv 内置的 53 端口 DNS 服务器解析全部本地域名，无需逐条编辑 hosts 文件。'
  - - meta
    - property: og:title
      content: 'FlyEnv DNS 服务器：本地开发模块与配置指南'
  - - meta
    - property: og:description
      content: '使用 FlyEnv 内置的 53 端口 DNS 服务器解析全部本地域名，无需逐条编辑 hosts 文件。'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/zh/features/dns-server
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/zh/features/dns-server
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# 内置 DNS 服务器在 FlyEnv

FlyEnv 自带 DNS 服务器，直接在应用内部使用 Node.js 实现，无需安装外部二进制文件，也无需管理版本。它监听 53 端口，并响应你在 FlyEnv 中创建的每个站点域名；系统指向该服务器后，本地域名无需修改 hosts 文件即可使用。服务标签页中的实时查询日志会显示每次解析请求。

![FlyEnv DNS Server 模块及运行在 53 端口的服务截图](https://oss.macphpstudy.com/image/features/dns-server-1.webp)

## 如何工作

收到查询后，服务器会在由多个来源构建的单个内存映射中查找名称，只有所有来源都不匹配时才向互联网查询：

- **FlyEnv 站点域名：**[本地站点](/zh/features/local-sites-https)中的每个主机名和别名都会自动解析到你的主要本地 IP 地址。列表会实时监视，因此新建站点后立即生效，无需重启或手动添加映射。
- **系统 hosts 文件：**操作系统 hosts 文件中的条目会加入同一个映射；该文件最多每 60 秒重新读取一次，因此外部修改会自动生效。
- **`dns.json` 中的静态映射：**配置文件中的 `resolveIP` 映射可将指定名称固定到你选择的地址。
- **冲突顺序：**同一名称出现在多个来源时，站点域名优先于 hosts 文件，hosts 文件优先于 `resolveIP`。服务器先匹配精确名称；如果没有匹配，再尝试映射中的 `*.test` 等通配符模式，因此单条规则即可覆盖整个域名后缀。
- **上游转发：**既不匹配精确名称也不匹配通配符的请求会转发到公共解析器，默认使用 1.1.1.1 和 8.8.8.8（中文环境的默认列表还包括 AliDNS 和 114DNS）。这样服务器可以作为计算机唯一的 DNS，而不会影响正常浏览。如果你需要的是广告拦截 DNS 解析，[Numa](/zh/features/numa) 模块提供了这种本地 DNS 功能。

将操作系统的 DNS 设置指向 FlyEnv 绑定的本地地址，以上设置就会对整个系统生效。[主机管理指南](/zh/guide/host)介绍了站点相关的配置方式。

## 实时查询日志

服务标签页不仅可以启动或停止服务器，也可作为服务器的流量监视器。

- **查询表格：**每次查询都会显示为一行，包含请求的主机、解析到的 IP 和返回的 TTL。
- **完整生命周期控制：**在日志旁边的同一工具栏中启动、停止或重启服务器。
- **一键清除：**调试特定域名时，可随时清空表格以获得干净的视图。

由于日志会随查询实时更新，这是确认浏览器或设备确实使用 FlyEnv 作为解析器的最快方式。

![FlyEnv 实时 DNS 查询日志，显示每次查询的主机、解析 IP 和 TTL 截图](https://oss.macphpstudy.com/image/features/dns-server-1.webp)

## 配置

DNS 服务器将设置保存在单个 JSON 文件 `dns.json` 中（旁边的 `dns.default.json` 是出厂参考配置）。配置文件标签页提供两种修改方式：

- **绑定 IP 下拉框：**唯一的可视化设置，用于选择服务器监听的本地地址。默认值 `0.0.0.0` 接受所有网络接口上的查询；如果网络中的其他设备也需要解析你的站点域名，应使用该值。选择特定 IP 则会将监听限制在对应接口。
- **原始 JSON 编辑器：**其他设置都直接编辑文件，包括将单个名称固定到指定地址的 `resolveIP` 静态映射。

![FlyEnv DNS 配置选项卡及绑定 IP 下拉框和 dns.json 编辑器截图](https://oss.macphpstudy.com/image/features/dns-server-2.webp)

<FeatureRelatedLinks locale="zh" slug="dns-server" />

## 兼容性说明

内置 DNS 服务器可运行于 macOS、Windows 和 Linux，在 53 端口同时提供 UDP 和 TCP 服务。53 端口在类 Unix 系统中属于特权端口，因此服务器运行时可能需要提升权限，具体取决于平台；同一时间也不能由其他解析器（例如另一个本地 DNS 工具）占用该端口。如果绑定失败，启动服务器时会直接报告错误。服务器仅在运行期间响应查询，查询历史会实时显示在服务标签页中，不会写入日志文件。具体版本的行为请以内置模块和[下载页面](/zh/download)中的发行说明为准。
