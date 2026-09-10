---
layout: doc
titleTemplate: false
title: 'FlyEnv MCP 服务器：本地开发模块与配置指南'
description: '通过 Streamable HTTP 将本地环境开放给 AI 编程工具，并配置工具权限和审计日志。'
head:
  - - meta
    - name: description
      content: '通过 Streamable HTTP 将本地环境开放给 AI 编程工具，并配置工具权限和审计日志。'
  - - meta
    - property: og:title
      content: 'FlyEnv MCP 服务器：本地开发模块与配置指南'
  - - meta
    - property: og:description
      content: '通过 Streamable HTTP 将本地环境开放给 AI 编程工具，并配置工具权限和审计日志。'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/zh/features/mcp-server
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/zh/features/mcp-server
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# FlyEnv MCP 服务器

FlyEnv 内置的 MCP 服务器允许 AI 编程助手通过受控接口操作你的本地技术堆栈：列出和控制服务、检查日志和配置、读取站点及数据库连接信息。服务器默认在 `127.0.0.1:7682` 上通过 Streamable HTTP 提供 MCP 服务，使用 Bearer 令牌进行身份验证，并公开 18 个带有独立审批策略的工具。每次调用都会写入审计日志，让你始终了解助手执行了哪些操作。[AI 编程工作区指南](/zh/guide/ai-coding-workspace-mcp) 展示了在真实项目中的完整设置。

![FlyEnv MCP Server 模块概览截图](https://oss.macphpstudy.com/image/features/mcp-server-1.webp)

## 服务选项

服务器直接运行在 FlyEnv 应用内部，无需额外安装；**服务**选项卡仅用于控制监听方式和启动时机。

- **绑定主机和端口：** 默认地址为 `127.0.0.1:7682`，端口可设置为 1024 至 65535 之间的任意值。除非明确启用远程访问，否则会拒绝非回环地址绑定，并先弹出警告对话框。
- **Bearer 令牌身份验证：** 客户端每次请求都必须提供生成的令牌。点击一次即可重新生成令牌，同时撤销所有现有客户端。
- **启动时自动运行：** 每次 FlyEnv 打开时服务器都可自动启动，避免助手指向失效的端点。
- **独立服务：** FlyEnv MCP 服务器不会加入全局“全部启动”组，因此批量启动技术堆栈时不会意外启动 AI 接口。
- **stdio 桥接：** 对于偏好 stdio 的客户端，FlyEnv 会将 `flyenv-mcp-stdio.mjs` 桥接脚本复制到数据目录，可由外部 [Node.js](/zh/features/nodejs) 运行时执行。

![FlyEnv 服务选项卡中的主机、端口和令牌选项截图](https://oss.macphpstudy.com/image/features/mcp-server-1.webp)

## 客户端配置

**客户端配置**选项卡可将服务器连接到 FlyEnv 已管理的六个 AI CLI 工具：Claude Code、Antigravity CLI、Codex、GitHub Copilot CLI、OpenCode 和 Kimi。

- **一键注册：** 每个工具旁的“添加到客户端”按钮会将 `flyenv` 服务器条目直接写入该 CLI 自己的 MCP 配置，无需手动编辑文件；支持 [Codex](/zh/features/codex)、[OpenCode](/zh/features/opencode) 和 [Kimi](/zh/features/kimi)。
- **可复制代码片段：** 提供 HTTP 和 stdio 两种形式的 JSON 或 TOML 代码块，可粘贴到自行配置的客户端或 FlyEnv 未管理的工具中。
- **与托管 CLI 配套：** 每个助手都有自己的 FlyEnv 模块；请参阅 [Claude Code](/zh/features/claude-code)，了解其安装、会话和插件管理示例。

![FlyEnv 客户端配置选项卡及六个 CLI 的一键注册截图](https://oss.macphpstudy.com/image/features/mcp-server-2.webp)

## 工具

**工具**选项卡列出服务器公开的 18 个工具，并决定助手可以使用哪些工具。

- **读取工具**——用于清单和检查：`list_services`、`service_status`、`list_sites`、`resolve_site_runtime`、`resolve_site_urls`、`get_database_connection_info`、`get_service_exec_info`、`get_managed_file_map`、`list_log_files`、`list_config_files` 和 `list_online_versions`。
- **操作工具**——修改你的环境：`start_service`、`stop_service`、`restart_service`、`create_site`、`update_site`、`delete_site` 和 `install_service`。
- **按工具启用开关：** 可关闭任意单个工具，使客户端完全无法调用它。
- **高风险工具的审批策略：** 7 个生命周期、站点写入和安装工具都带有自动/确认策略；默认是确认，敏感操作会等待你的批准，除非你主动放宽策略。

![FlyEnv 工具选项卡及逐项工具开关和批准策略截图](https://oss.macphpstudy.com/image/features/mcp-server-3.webp)

## 审计日志

**审计日志**选项卡实时查看 FlyEnv MCP 数据目录中的 `audit.log`，其中以 JSON Lines 格式记录服务器处理的每次工具调用。

- **完整调用历史：** 每条记录都会捕获运行的工具及其参数，为 AI 助手访问过的所有内容提供可审查轨迹；这对日常[使用 AI 助手](/zh/guide/flyenv-work-with-ai)至关重要。
- **敏感信息遮罩：** 令牌和密码在写入日志前会被遮罩，因此查看或分享文件不会泄露凭据。

![FlyEnv 审计日志选项卡显示记录的工具调用截图](https://oss.macphpstudy.com/image/features/mcp-server-4.webp)

<FeatureRelatedLinks locale="zh" slug="mcp-server" />

## 兼容性说明

FlyEnv MCP 服务器运行在应用主进程中，这决定了它的边界：仅在 FlyEnv 运行期间存在，退出应用会使所有连接客户端的端点关闭。它在 macOS、Windows 和 Linux 上行为一致，没有平台差异。stdio 桥接依赖外部 Node.js 运行时来执行生成的 `flyenv-mcp-stdio.mjs` 脚本。除非主动启用，否则远程访问始终关闭；绑定到回环地址以外的地址必须明确选择，并会经过警告对话框。
