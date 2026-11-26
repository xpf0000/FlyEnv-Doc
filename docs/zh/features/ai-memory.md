---
layout: doc
titleTemplate: false
title: 'AI Memory 插件：为 AI 编程助手提供持久化本地记忆 | FlyEnv'
description: '通过 MCP 为 AI 编程助手提供持久化本地记忆。管理全局偏好与项目知识，浏览 3D 记忆星图，配置客户端连接，并备份和恢复记忆数据。'
---

# FlyEnv 中的 AI Memory

AI Memory 为 AI 编程助手提供共享的记忆存储，让用户偏好、项目知识和开发决策能够跨会话保留。你可以让下一次对话继续遵循已有的编码规范，保存某个架构选择背后的原因，或让另一个已连接的客户端读取此前助手保存的知识。

记忆保存在 FlyEnv 的本地插件数据目录中，全局偏好与项目知识分别存放在不同范围。插件提供 3D 记忆星图、搜索与编辑、客户端接入配置、备份恢复，以及记忆工具的调用记录。

从 **[设置 → 插件市场](/zh/features/plugin-market)** 安装 **AI Memory**，然后打开它的侧边栏入口。无需额外下载运行时，也无需启动某个软件版本。助手通过 FlyEnv 的 **[MCP 服务器](/zh/features/mcp-server)** 访问已保存的记忆。

![FlyEnv 中的 AI Memory，展示项目的交互式 3D 记忆星图和记忆分类](https://oss.macphpstudy.com/image/features/plugin/ai-memory-map.webp)

## 全局偏好与项目知识分别管理

适用于多个项目的信息，例如你偏好的语言或编码风格，可以存入 **全局**。某个项目的架构、配置细节、决策和可复用修复，则存入该项目的记忆。客户端的全局连接可以跨项目使用，但不会将各项目的记忆集合混在一起。

项目记忆关联到已确认的项目根目录。两个互不相关的项目即使文件夹名称相同，也会保持独立。在管理页中，选择已有项目或指定项目文件夹，即可操作对应的记忆集合。

插件将记忆正文和元数据保存在源码仓库之外。你可以通过项目指令引导助手的行为，而不必将记忆内容本身加入代码仓库。

![AI Memory 范围选择器，包含全局、已保存项目和指定项目路径的入口](https://oss.macphpstudy.com/image/features/plugin/ai-memory-project-selection.webp)

## 浏览 3D 记忆星图

**记忆** 页将所选集合展示为交互式 3D 星图。记忆按类型分组，包括偏好、事实、事件、流程、项目状态、决策、观察和笔记。连线表示共同的主题或标签，帮助你探索相关知识。

你可以拖动旋转、放大或缩小、暂停旋转或减少动态效果。选择分类可以浏览其中的记录，再选择一条记忆，在星图旁打开详情。列表视图也提供了另一种定位和打开记录的方式。

通过关键词搜索可以缩小结果范围。助手的搜索会匹配标题、摘要、主题和标签；读取完整 Markdown 正文是单独的操作。因此，请为记忆填写便于检索的标题和摘要。

![AI Memory 偏好分类，展示记录列表、相关记忆连线和所选记忆的详情](https://oss.macphpstudy.com/image/features/plugin/ai-memory-detail.webp)

## 创建、编辑和维护记忆

点击 **新建记忆** 可以手动添加记录，也可以让已连接的助手通过 MCP 保存。每条记忆包含类型、标题、摘要、主题、标签、Markdown 正文和来源信息。

打开记录后，可以阅读正文、查看来源和版本，或进行编辑。更新会保留版本历史和修改原因。**归档** 会让记忆退出默认的活跃结果，但保留内容以便日后恢复。**永久删除** 则在确认后删除该记录及其历史。

每条记忆正文最多支持 16 KiB 的 UTF-8 文本。建议每条记录聚焦一个有用的事实、决策或流程，让助手只读取相关知识，无需加载整段对话。

![AI Memory 新建记忆对话框，包含标题、摘要、Markdown 正文、类型、主题、标签和来源字段](https://oss.macphpstudy.com/image/features/plugin/ai-memory-new-memory.webp)

## 接入 AI 编程助手

打开 **Agent 接入**，选择已安装的客户端。支持一键配置的客户端包括 **[Claude Code](/zh/features/claude-code)**、**[Antigravity CLI](/zh/features/antigravity-cli)**、**[Codex](/zh/features/codex)**、**[GitHub Copilot CLI](/zh/features/github-copilot-cli)**、**[OpenCode](/zh/features/opencode)** 和 **[Kimi](/zh/features/kimi)**。

一键接入会按需启动本地 MCP 服务器、启用五个记忆工具、为所选客户端注册全局 MCP 连接并安装全局记忆指令。你可以查看每一步的结果并重试未完成的步骤，也可以在高级设置中为特定项目安装指令。

![AI Memory Agent 接入页，展示六种支持的客户端、通用设置和 Codex 的三个自动配置步骤](https://oss.macphpstudy.com/image/features/plugin/ai-memory-connect-agent.webp)

对于其他 MCP 客户端，选择 **通用设置**。复制 HTTP 配置；如果客户端要求 stdio，则使用对应选项。将记忆指令加入客户端支持的指令文件或系统提示词中。stdio 连接需要本机 Node.js 和 FlyEnv 的桥接脚本。

设置后，从项目已确认的绝对根目录开启新会话。请第一个客户端保存一条项目测试记忆，例如「冒烟测试命令是 `npm test`」，并报告返回的 ID 和版本号。在第二个已连接的客户端中为同一项目根目录开启新会话，要求它搜索「冒烟测试」并读取该条目。核对 ID 和版本号，并在 **调用记录** 中确认两次操作。

FlyEnv 的开发者预览版验收验证了 Codex 与 Kimi 之间的双向共享，并在重启 FlyEnv 后读回了一条已保存的记录。接入操作会写入连接配置和指令。能否保存及找回有用知识，取决于助手收到的指令和实际工具调用。

## 五个持久记忆 MCP 工具

AI Memory 为 FlyEnv 的 MCP 服务器增加五个工具：

- **`flyenv_memory_search`：** 在全局或项目范围中查找匹配的记忆摘要。
- **`flyenv_memory_get`：** 读取完整记忆，也可以读取指定版本。
- **`flyenv_memory_store`：** 保存新记忆及其来源信息。
- **`flyenv_memory_update`：** 根据预期版本更新已有记录，并注明修改原因。
- **`flyenv_memory_forget`：** 永久删除记录及其历史。

项目搜索可以通过 `include_global=true` 同时查找全局记忆。读取时使用各条结果返回的作用域。如果更新发生冲突，先读取最新版本，再决定如何修改。如果写入超时或返回 `unknown`，请用相同的 `request_id` 和原参数重试，确认写入结果。

在 FlyEnv 的 MCP 设置中管理工具启用状态和审批策略。助手使用工具期间，需要保持 FlyEnv 运行、插件启用，并确保 MCP 服务器可用。不同客户端使用相同范围和项目根目录时，可以访问同一份已保存的记忆。

![FlyEnv MCP 工具页中的 AI Memory 分组，展示五个记忆工具的开关和审批策略](https://oss.macphpstudy.com/image/features/plugin/ai-memory-mcp-tools.webp)

## 备份、恢复与项目目录迁移

打开 **维护 → 立即备份**，创建带有完整性校验的完整备份文件夹。需要将记忆迁移到另一台电脑时，复制整个备份文件夹，再在兼容的 AI Memory 安装中选择 **从备份恢复**。

恢复会替换当前记忆集合，并在开始前自动备份现有数据。记忆备份包含全局和项目记录；项目源码与 AI 客户端配置需要单独管理。

项目搬家后，可以在维护页的 **项目目录** 中选择新文件夹。重新关联只会更新已记录的路径，保留项目身份、记忆和版本历史。目录仍可用的项目，也可以通过 **查看全部项目 → 更换目录** 进行迁移。

如果所选目录已有项目记忆，FlyEnv 会询问两份集合是否属于同一项目。你可以合并两份集合并保留所有记录和版本，也可以保持独立并重新选择目录。合并不会覆盖或自动去重记忆。

![AI Memory 维护页，包含备份、恢复、项目关联检查、项目目录和数据文件夹入口](https://oss.macphpstudy.com/image/features/plugin/ai-memory-maintenance.webp)

## 查看助手的调用活动

**调用记录** 页展示当前 FlyEnv 会话中的记忆工具活动及结果。使用助手后刷新列表，再展开记录，即可查看请求和返回详情。

该视图在内存中最多保留 200 条详细记录，不包含完整记忆正文。退出 FlyEnv 后，调用记录会清空；已保存的记忆会继续保留在磁盘上。本地存储说明的是插件保存数据的位置：通过 MCP 读取的内容，仍会传递给你选择的 AI 客户端。 客户端可能会将读取的内容发送给模型服务商。验证连接时请使用不含敏感信息的测试条目。

![AI Memory 调用记录页，展示本次会话的工具活动、结果、耗时和刷新按钮](https://oss.macphpstudy.com/image/features/plugin/ai-memory-call-records.webp)

通过 **[MCP 服务器](/zh/features/mcp-server)** 了解 FlyEnv 的其他环境工具，或返回 **[特性总览](/zh/features#plugins)** 浏览其他插件。
