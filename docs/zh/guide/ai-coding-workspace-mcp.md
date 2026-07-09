---
title: '用 FlyEnv 搭建本地 AI 编程工作区与 MCP（Claude Code、Codex 等）'
head:
  - - meta
    - name: description
      content: 用 FlyEnv 搭建本地 AI 编程工作区。把运行时、服务、Claude Code、Codex 和 FlyEnv MCP Server 放进同一个原生本地工作流。
---

# 用 FlyEnv 搭建本地 AI 编程工作区与 MCP（Claude Code、Codex 等）

Claude Code、Codex 这类 AI 编程客户端可以读取仓库代码，但这还不等于真正的本地开发环境。它们还需要看到项目实际依赖的运行时版本、本地服务、站点 URL、日志和受管理配置。

FlyEnv 把这层缺失的本地上下文收敛成一个原生工作流：它既管理项目真正运行的技术栈，也能启动 AI 编程 CLI，并通过内置的 **FlyEnv MCP Server** 把同一套环境暴露给 AI 客户端。

## 为什么 AI 客户端需要真实的本地环境

当 AI 客户端能直接对准你平时开发使用的本地上下文时，它才真正有用：

- 当前激活的 PHP、Node.js 或 Python 版本
- MySQL、Redis 或 Web 服务是否正在运行
- 本地站点 URL、受管文件、配置和日志
- 一套安全、结构化的本地技术栈访问方式

FlyEnv 的做法，就是把运行时层和 AI 访问层放到同一个工作区里。

| AI 真正需要的能力 | 传统 shell 拼装方式 | FlyEnv 提供的能力 |
|-------------------|----------------------|--------------------|
| 正确的运行时版本 | 手动切换，容易漂移 | 项目级运行时切换 |
| 正在运行的本地服务 | 手动启动和排查 | 同一个应用里直接管理服务 |
| 本地站点、配置和日志 | 分散在终端和文件夹里 | 通过 MCP 结构化暴露站点细节和受管文件 |
| 安全的机器控制边界 | 要么权限过大，要么完全不可用 | 工具开关、审批策略和审计日志 |

## FlyEnv 为本地 MCP 工作流补上了什么

FlyEnv 把这个问题拆成两层来解决：

1. **本地技术栈层**：在一个桌面应用里管理运行时、服务、本地域名、SSL 和项目级版本切换。
2. **AI 桥接层**：通过 MCP 把同一套本地环境暴露给 AI 客户端，并提供 token、工具开关、审批策略和审计日志。

这就是首页里那句 **“在一个地方管理本地运行时、服务、AI 编程 CLI 和 MCP 桥接”** 背后的实际工作流。

## 第 1 步：在同一个工作区里管理 AI 编程 CLI

在 FlyEnv 里，AI 编程 CLI 已经是和本地运行时、服务并列的一类模块。目前工作区可管理：

- Claude Code
- Codex
- OpenCode
- Kimi Code CLI
- GitHub Copilot CLI
- Antigravity CLI

这样你就不需要把项目运行环境、AI 客户端安装和 shell 配置拆成几套独立流程来维护。

## 第 2 步：启动 FlyEnv MCP Server

打开 FlyEnv 的 **MCP Server** 面板，可以配置：

- **Host**
- **Port**
- **Token**
- **Auto Start**
- **Allow remote access**
- **Enabled Tools**
- 高风险工具的 **Approval policy**

FlyEnv 默认按本地开发场景设计：

- 默认监听 `127.0.0.1`
- 使用 bearer token 做客户端鉴权
- 工具可以逐个开启或关闭
- 所有 MCP 调用会记录到 **审计日志**

这样既能满足本地 AI 工作流的可用性，也能避免默认暴露过大的控制面。

## 第 3 步：接入 Claude Code、Codex、OpenCode 等客户端

FlyEnv 目前支持两种接入方式。

### HTTP MCP

FlyEnv 可以直接在 UI 里生成 HTTP MCP 配置片段，并支持以下客户端的配置输出和一键注册：

- Claude Code
- Antigravity CLI
- Codex
- GitHub Copilot CLI
- OpenCode
- Kimi

Claude Code 风格的配置示例：

```json
{
  "mcpServers": {
    "flyenv": {
      "type": "http",
      "url": "http://127.0.0.1:7682",
      "headers": {
        "Authorization": "Bearer <your-token>"
      }
    }
  }
}
```

Codex 配置示例：

```toml
[features]
rmcp_client = true

[mcp_servers.flyenv]
url = "http://127.0.0.1:7682"

[mcp_servers.flyenv.http_headers]
Authorization = "Bearer <your-token>"
```

### 方式 B：通过 stdio MCP Bridge 接桌面客户端

对于偏向本地 stdio MCP server 的客户端，FlyEnv 也提供 bridge 脚本。应用里可以生成给这些客户端使用的 stdio 配置：

- Cursor
- Cline
- Windsurf
- Claude Desktop

stdio 配置示例：

```json
{
  "mcpServers": {
    "flyenv": {
      "command": "node",
      "args": ["<FlyEnv>/mcp/flyenv-mcp-stdio.mjs"],
      "env": {
        "FLYENV_MCP_URL": "http://127.0.0.1:7682",
        "FLYENV_MCP_TOKEN": "<your-token>"
      }
    }
  }
}
```

实际使用时，大多数情况直接复制 FlyEnv UI 生成的配置片段即可，不需要从零手写。

## 第 4 步：决定 AI 可以调用哪些能力

FlyEnv 的 MCP 面板不只是开关，它还允许你精细控制 AI 的能力边界。

常见的读取和检查类工具包括：

- 列出 FlyEnv 管理的服务和已安装版本
- 查看某个服务的运行状态
- 列出本地站点
- 解析站点对应的运行时、URL 和受管理文件
- 列出已知配置文件和日志文件
- 列出可下载安装的服务版本
- 返回数据库或缓存服务的连接信息

影响更高的工具包括：

- 启动、停止、重启服务
- 创建或更新站点
- 删除站点
- 安装服务版本

针对这些高风险能力，FlyEnv 提供了：

- **工具级开关**
- **审批模式**
- **审计日志**

这样你可以让 AI 具备真实可用的本地环境访问能力，而不是默认放开所有操作。

## 第 5 步：跑通一个实用的本地 AI 编程工作流

常见的使用流程如下：

1. 在 FlyEnv 中打开项目。
2. 让 FlyEnv 自动切换到该项目需要的运行时版本。
3. 启动项目依赖的本地服务。
4. 在同一个工作区里启动或配置你偏好的 AI 编程 CLI。
5. 启动 FlyEnv MCP Server。
6. 通过生成的配置片段或 UI 里的 “Add to Client” 动作，把 FlyEnv MCP 接到对应客户端。
7. 让 AI 读取与你自己开发时一致的服务、站点、配置和日志。

FlyEnv 和纯 shell 工作流的差异就在这里：运行时、服务、AI CLI 和 MCP 连接都对准同一个本地上下文。

## 端到端演示视频

如果你想看一遍真实项目里的完整流程，这个演示会把 MySQL、本地 PHP CRUD 站点、AI CLI 和 MCP 桥接串起来走一遍。

<iframe style="width: 100%; aspect-ratio: 16 / 9;" src="//player.bilibili.com/player.html?bvid=BV1AyM761EpZ&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

## 为什么这类本地 AI 工作流不一定要先上 Docker

如果你的目标是搭建本地 AI 编程工作区，很多场景并不需要先把整套流程容器化。FlyEnv 已经可以管理原生运行时和本地服务，再把这套环境通过 MCP 结构化暴露给 AI 客户端。

对于想减少 Docker、shell 脚本和客户端配置拼装成本的团队来说，这通常是更轻的一条路径。

## 本地 MCP 的安全建议

对大多数本地开发场景，建议保留这些默认值：

- MCP 保持监听在 `127.0.0.1`
- 保留 token 鉴权
- 只开启真正需要的工具
- 对高风险操作开启审批

只有在你明确理解网络暴露范围并确实需要远程接入时，再开启 remote access。

## 常见问题（FAQ）

**Q：FlyEnv 能作为本地 AI 编程场景里的 Docker 替代方案吗？**

A：在很多本地开发流程里可以。FlyEnv 直接管理原生运行时、服务、本地站点和 MCP 接入，不一定需要容器优先的工作流。

**Q：哪些 AI 客户端可以接入 FlyEnv MCP Server？**

A：FlyEnv 可以为 Claude Code、Codex、OpenCode、Kimi、GitHub Copilot CLI、Antigravity CLI 生成 HTTP MCP 配置，也可以为 Cursor、Cline、Windsurf、Claude Desktop 生成 stdio bridge 配置。

**Q：我能限制 AI agent 在本机上做什么吗？**

A：可以。FlyEnv 提供工具级开关、高风险操作审批模式，以及 MCP 调用审计日志。

## 下一步

如果你想把本地运行时、服务、AI 编程 CLI 和 MCP 放进同一套工作流，可以先安装 FlyEnv，启动 MCP Server，再把你常用的 AI 客户端接进来。

[下载 FlyEnv](/download)，开始搭建本地 AI 编程工作区。

## 相关阅读

- 想看更偏生产力方法论的文章： [AI 编程助手效率翻倍工作流](/zh/guide/flyenv-work-with-ai)
- 想跑本地 LLM： [本地离线 AI 智能体](/zh/guide/build-local-offline-ai-agent)
- 想叠加自动化： [使用 n8n 构建本地 AI 工作流](/zh/guide/build-local-ai-workflow-by-n8n)
