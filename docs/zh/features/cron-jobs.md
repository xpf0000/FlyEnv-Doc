---
layout: doc
titleTemplate: false
title: 'FlyEnv Cron 任务：本地开发模块与配置指南'
description: '通过 crontab 或 Windows 任务计划程序调度命令，并在 FlyEnv 中查看执行历史和系统任务。'
head:
  - - meta
    - name: description
      content: '通过 crontab 或 Windows 任务计划程序调度命令，并在 FlyEnv 中查看执行历史和系统任务。'
  - - meta
    - property: og:title
      content: 'FlyEnv Cron 任务：本地开发模块与配置指南'
  - - meta
    - property: og:description
      content: '通过 crontab 或 Windows 任务计划程序调度命令，并在 FlyEnv 中查看执行历史和系统任务。'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/zh/features/cron-jobs
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/zh/features/cron-jobs
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# FlyEnv Cron 任务

FlyEnv 的 **Cron Jobs** 模块将操作系统自带的调度器转换为可视化工具：你可以定义任务名称、五字段 cron 表达式、Shell 命令和工作目录，FlyEnv 会在 macOS/Linux 上将任务安装到当前用户的 `crontab`，或在 Windows 上安装到 Task Scheduler。每次执行都会由自动生成的脚本包装，记录输出、退出代码和耗时，因此每个任务都能直接查看运行历史，无需额外设置。该模块以控制台类型入口显示在侧边栏中；刚安装 FlyEnv 后，可参考[快速入门指南](/zh/guide/getting-started)了解如何从侧边栏打开模块。

![FlyEnv 定时任务选项卡列出计划任务及其表达式、命令截图](https://oss.macphpstudy.com/image/features/cron-jobs-1.webp)

## 创建任务

在 Cron Jobs 标签页点击**添加**，打开任务编辑器。

- **名称和启用开关：**每个任务都有显示名称，可随时启用或停用，无需删除任务。
- **表达式与实时验证：**五字段 cron 表达式会在输入时即时检查，并显示计划含义预览、快捷预设标签和计划辅助选择器，无需记忆字段顺序。
- **命令预设：**命令文本框提供常见技术栈的起始示例，包括 `php artisan schedule:run`（经典的 [Laravel](/zh/solutions/laravel) 调度入口；周边设置请参阅 [在 FlyEnv 中运行 Laravel](/zh/guide/run-laravel-use-flyenv)）、node、python 和 bash，你可以再按项目需求调整。
- **工作目录和作用域：**任务可以是全局任务，也可以绑定到特定站点；对于站点作用域的任务，工作目录会自动填充为[本地站点](/zh/features/local-sites-https)列表中该站点的根目录。
- **调度前测试运行：**任务编辑器中的测试运行按钮会立即在工作目录执行命令，并显示捕获的输出、退出代码和耗时，让引号或路径错误在任务交给调度器前就暴露出来。

![FlyEnv 定时任务编辑器及表达式验证、预设标签和命令文本框截图](https://oss.macphpstudy.com/image/features/cron-jobs-2.webp)

## OS 调度器集成

FlyEnv 不会运行自己的后台守护进程，而是将任务安装到操作系统已有的调度器中，因此即使关闭 FlyEnv，任务仍会继续运行。

- **macOS 和 Linux：**任务会写入当前用户的 crontab，并放在 `# FlyEnv Cron Start/End <id>` 标记块中，便于将 FlyEnv 条目与手动添加的内容区分开。
- **Windows：**每个任务都会变成名为 `FlyEnv-Cron-<id>` 的 Task Scheduler 条目，并调用经过 Base64 编码的 PowerShell 包装器。
- **生成的包装脚本：**调度器条目不会直接调用你的命令，而是运行包装脚本，将 stdout、stderr、退出代码和耗时记录为 JSON Lines 日志，并持有锁文件，避免耗时较长的运行与下一次运行重叠。

## 运行历史与立即执行

无论按计划触发还是手动启动，每次执行都会留下记录。

- **每个任务的运行历史：**每个任务保留最近 50 次运行，可在任务行中查看捕获的输出、退出代码和耗时。
- **立即运行：**每行的手动触发按钮会通过同一包装脚本立即执行任务，这是无需等待下一次调度即可确认计划是否正常的最快方式。
- **失败可见性：**包装脚本记录退出代码和 stderr，因此失败的命令会显示在运行历史中，而不会消失在你很少查看的系统日志里。

![FlyEnv 定时任务运行历史，显示每次运行的输出、退出代码和耗时截图](https://oss.macphpstudy.com/image/features/cron-jobs-3.webp)

## 系统任务标签页

第二个标签页 **System Tasks** 是真实操作系统调度器的只读窗口。

- 它会列出计算机上实际存在的条目：macOS/Linux 上的用户 crontab 行，以及 Windows 上注册的任务。
- FlyEnv 创建的条目会标记为 FlyEnv 所有，因此你可以一眼看出哪些任务属于该模块，哪些来自其他软件。
- FlyEnv 所有的条目可以直接在此标签页删除，无需打开 `crontab -e` 或 Windows Task Scheduler 控制台即可完成清理。

![FlyEnv 系统任务选项卡显示操作系统调度器条目及 FlyEnv 任务标签截图](https://oss.macphpstudy.com/image/features/cron-jobs-4.webp)

<FeatureRelatedLinks locale="zh" slug="cron-jobs" />

## 兼容性说明

该模块编辑当前操作系统用户的调度器：macOS 和 Linux 上的用户 crontab，以及 Windows 上的 Task Scheduler。因此任务会以你的用户账号及其权限运行；表达式遵循经典的五字段 cron 格式，不支持秒字段，也不支持 `@reboot` 样式的扩展。任务定义存储在 FlyEnv 自己的 `cron-jobs.json` 中；每个任务的运行历史上限为 50 条。某个 FlyEnv 版本支持的平台和安装包，请以[下载页面](/zh/download)为准。
