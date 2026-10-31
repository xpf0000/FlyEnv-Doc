---
layout: doc
titleTemplate: false
title: 'FlyEnv 快捷命令插件：按文件夹保存与执行常用命令'
description: '用文件夹卡片整理常用终端命令，拖动调整顺序，并通过 FlyEnv 快捷命令插件在对应目录的系统终端中执行。'
---

# FlyEnv 快捷命令

快捷命令把常用终端命令与执行目录放在一起管理。每个文件夹都有一张卡片，显示目录路径和已保存的命令，无需反复查找目录、输入相同命令，就能启动项目任务。

从 **[设置 → 插件市场](/zh/features/plugin-market)** 安装 **快捷命令**，然后打开侧边栏入口。它直接使用 macOS、Windows 或 Linux 上已有的系统终端，无需安装服务运行时。

![快捷命令的文件夹卡片、已保存命令、执行按钮和文件夹操作](https://oss.macphpstudy.com/image/features/plugin/command-shortcuts-folder-cards.png)

## 视频演示

观看如何按项目文件夹保存常用命令，在系统终端中运行，并拖动调整文件夹和命令的顺序。

<iframe style="width: 100%; aspect-ratio: 16 / 9;" src="https://player.bilibili.com/player.html?bvid=BV1QKJR6xEGQ&page=1&autoplay=0" title="按项目保存命令，一键在终端运行" loading="lazy" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

也可以前往 [Bilibili](https://www.bilibili.com/video/BV1QKJR6xEGQ/) 或 [YouTube](https://www.youtube.com/watch?v=Iz60XAzo7Us) 观看。

## 添加文件夹与命令

点击 **添加文件夹**，填写名称，并选择或输入现有文件夹的绝对路径。卡片图标会自动使用文件夹名称的第一个字符。

在文件夹卡片中点击 **添加命令**，填写说明和命令内容。命令支持多行；同一张卡片中可以保存多个任务，例如启动开发服务器、构建和测试。

通过编辑按钮，可以修改文件夹名称或路径，也可以调整命令说明和内容。命令会在卡片当前关联的文件夹中执行。

![快捷命令的编辑命令对话框，包含说明、命令内容和 Windows PowerShell 提示](https://oss.macphpstudy.com/image/features/plugin/command-shortcuts-edit-command.png)

## 在系统终端中执行

点击命令右侧的 **在终端执行**，即可打开系统终端、进入文件夹路径并执行该命令。FlyEnv 会在交接前检查目录；如果目录切换失败，则不会执行命令。

请使用对应平台 Shell 的命令语法：

- **macOS：** Terminal 的默认 Shell。
- **Windows：** PowerShell。
- **Linux：** 可用且受支持的系统终端中的 Bash。

命令输出、交互提示和退出状态都在终端窗口中查看。FlyEnv 的交接通知表示请求已发送给终端；命令本身是否执行成功，需要查看终端结果。

命令只会在点击执行按钮时运行。打开的终端由你管理，离开模块或退出 FlyEnv 都不会终止它们。

## 只打开目录，不执行命令

点击黄色文件夹路径，可在系统文件管理器中打开目录。卡片底部的 **在终端打开** 则只打开终端并进入该目录，不执行预设命令。即使卡片中还没有命令，也可以使用此操作。

## 调整顺序与维护列表

拖动文件夹标题旁的手柄，可以调整卡片顺序；拖动命令旁的手柄，可以调整同一文件夹内的命令顺序。两种顺序都会自动保存，拖动不会将命令移动到其他文件夹。

删除命令只会移除保存的条目。删除文件夹需要确认，并会移除卡片及其中保存的命令，磁盘文件不会被删除。插件升级会保留文件夹记录、命令内容和顺序；禁用或卸载插件时，也不会主动清除这些记录。

如果需要成组启动工作区服务，可以使用 **[启动组](/zh/features/startup-groups)**；如果需要为命令提供服务生命周期管理，可以使用 **[自定义模块](/zh/features/user-modules)**。快捷命令适合手动启动、在终端中交互的任务。
