---
layout: doc
titleTemplate: false
title: 'FlyEnv 启动组：本地开发模块与配置指南'
description: '将服务和项目运行时组成有序启动组，设置默认组，并通过托盘或自动启动控制。'
head:
  - - meta
    - name: description
      content: '将服务和项目运行时组成有序启动组，设置默认组，并通过托盘或自动启动控制。'
  - - meta
    - property: og:title
      content: 'FlyEnv 启动组：本地开发模块与配置指南'
  - - meta
    - property: og:description
      content: '将服务和项目运行时组成有序启动组，设置默认组，并通过托盘或自动启动控制。'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/zh/features/startup-groups
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/zh/features/startup-groups
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# 启动组在 FlyEnv 中

A real 项目通常不只需要一个服务——例如 [Laravel](/zh/solutions/laravel) 应用需要同时运行数据库、缓存和应用运行时。启动组可将这些组件组合为命名组，并按你选择的顺序通过一次操作全部启动或停止。你可以将一个组标记为默认组，由侧边栏开关、托盘菜单和应用自动启动统一控制。如果你刚开始使用 FlyEnv，[入门指南](/zh/guide/getting-started)介绍了先安装和启动单个模块的流程。

![FlyEnv 启动组页面和组卡片网格](https://oss.macphpstudy.com/image/features/startup-groups-1.webp)

## 创建组

从侧边栏打开 **启动组** 并添加组；每个组以卡片显示，包含启动/停止开关、成员开关，以及编辑、删除和设为默认等操作。

A 组成员只有两种类型：

- **服务版本：** 服务模块中已安装的版本，如数据库、Web 服务器和队列等。PHP-FPM 也属于此类：它映射到已安装的 PHP 版本，因此特定 PHP-FPM 版本可与 [Nginx](/zh/features/nginx) 和 [MySQL](/zh/features/mysql) 一起加入组。
- **项目运行时：** 启用了“作为服务运行”的语言模块项目，例如 Node.js、Python、Go 或其他应用，拥有自己的运行命令和端口，通过[按项目运行时](/zh/features/per-project-runtimes)管理。

选择成员时，组编辑器会检查冲突；如果两个条目来自同一模块或要占用相同端口，系统会发出警告，在点击启动前就能发现错误组合。

![FlyEnv 组编辑器选择服务版本和项目运行时成员](https://oss.macphpstudy.com/image/features/startup-groups-2.webp)

## 有序开始与停止

- **按列表顺序启动。** FlyEnv 从上到下启动，已在运行的成员会跳过。无法使用的成员会标为无效，其余成员继续处理。
- **选择如何处理启动失败。** 默认情况下，启动操作报错后会停止后续启动。开启「某个成员启动失败时继续启动其他成员」后，FlyEnv 会尝试启动其余成员。
- **按倒序停止。** 某个成员停止失败后，FlyEnv 仍会尝试停止其他成员。启动组也可以停止组启动前已经运行的成员，因此停止共享的 Nginx 或 Redis 可能影响其他组。

[ERPNext 演示](/zh/demos?video=erpnext-local-project)中的 macOS 启动组依次列出 Nginx、Redis、MariaDB 和 Python ERPNext 项目。视频展示服务重启及浏览器恢复访问 ERPNext。FlyEnv 按顺序执行各成员的启动操作，可通过访问应用地址确认项目是否就绪。

## 默认组、自动启动与托盘控制

只能有一个组作为默认组，它会成为 FlyEnv 全局控制的目标。

- **侧边栏开关：** 主侧边栏中的组启动/停止按钮控制默认组。如果未设置默认组，按钮会回退到一次启动或停止所有服务的传统行为。
- **启动时自动运行：** 在设置中启用“自动启动服务”后，FlyEnv 启动时会自动启动默认组，你开始工作时整个技术堆栈已经就绪。
- **托盘控制：** 系统托盘菜单列出所有组，每个组都有独立的启动/停止开关，无需打开主窗口即可停止整个堆栈或切换堆栈。

![FlyEnv 托盘菜单列出启动组及启动和停止操作](https://oss.macphpstudy.com/image/features/startup-groups-3.webp)

<FeatureRelatedLinks locale="zh" slug="startup-groups" />

## 兼容性说明

启动组调用当前平台可用模块的启停操作。请先安装服务版本并配置项目，再加入组。在侧栏设置中隐藏「启动组」时，FlyEnv 会先尝试停止组内服务。停止失败时会保留该入口。
