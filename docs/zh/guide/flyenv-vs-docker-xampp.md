---
title: 'FlyEnv vs Docker & XAMPP：本地开发该怎么选'
head:
  - - meta
    - name: description
      content: '对比 FlyEnv、Docker 和 XAMPP 这类本地开发方案，看看原生运行时、AI 编程 CLI 和 MCP 如何改变现代本地工作流。'
---

# FlyEnv vs Docker & XAMPP：本地开发该怎么选

现在选择本地开发方案，已经不只是决定怎么跑 PHP 或 MySQL。你还要决定多运行时、本地服务、HTTPS 站点，以及 AI 编程客户端要如何一起工作。

如果你觉得 Docker 对日常应用开发偏重，而 XAMPP 对现代多运行时项目又太固定，那么 FlyEnv 处在另一条路径上：它是一个面向运行时、服务、AI 编程 CLI 和 MCP 的原生本地工作区。

## 先说结论

| 如果你的重点是... | 更适合的方案 |
| --- | --- |
| 容器一致性与完整容器编排 | Docker Desktop |
| 简单固定的 PHP/MySQL 沙盒 | XAMPP 或类似集成包 |
| 原生多运行时本地开发，加上 AI 与 MCP 工作流 | FlyEnv |

## 高层对比

| 维度 | Docker Desktop | XAMPP / MAMP 这类集成包 | FlyEnv |
| --- | --- | --- | --- |
| 运行模型 | 容器优先 | 固定打包技术栈 | 原生本地版本 |
| 项目级版本切换 | 通常依赖手工配置或脚本 | 能力有限或偏全局 | 内置 |
| 本地站点与 SSL | 代理与证书多为手工配置 | 基础能力或范围较窄 | 可管理域名、SSL、日志和站点设置 |
| 服务控制 | 围绕容器配置与 compose | 基础打包服务控制 | 统一服务面板 |
| AI 编程工作流 | AI 客户端需手工接入 | 大多与本地技术栈分离 | AI 编程 CLI 与项目在同一工作区 |
| MCP 到本地上下文 | 需要自己搭 | 通常没有 | 内置 FlyEnv MCP Server |
| 日常使用开销 | 更高，默认就是容器 | 更低，但灵活性更弱 | 更适合原生日常开发 |
| 更适合什么 | 容器化拓扑 | 基础或偏旧的 PHP 工作流 | 现代多运行时本地开发 |

## Docker 仍然更适合的场景

当你更看重这些能力时，Docker 仍然更强：

- 贴近生产的容器拓扑
- 明确的服务隔离
- 围绕 `docker compose` 或 Kubernetes 的既有流程
- 团队已经完全容器优先

如果你的团队本来就是按容器来思考一切，FlyEnv 并不是要替代这套心智模型。

## XAMPP 类方案仍然适合的场景

XAMPP、MAMP 以及类似集成包，仍然适合这些情况：

- 你只需要一个简单的 PHP/MySQL 沙盒
- 你在维护一些老一点的 PHP 项目
- 几乎不需要版本切换
- 不需要 AI 客户端接入，也不需要多运行时协同

它们的问题不是不能用，而是通常覆盖不了现在更完整的本地开发链路。

## FlyEnv 更适合的场景

当你的本地开发更接近下面这些情况时，FlyEnv 往往更合适：

- 你要在多个项目和不同运行时版本之间来回切换
- 你的技术栈不只是 PHP
- 你希望把本地域名、HTTPS、日志和服务控制放在一起
- 你会让 Claude Code、Codex 这类 AI 客户端对接真实本地服务
- 你希望通过 MCP 接入本地上下文，而不是手工维护每个集成

所以，FlyEnv 不只是 Docker 的替代品，也不只是 XAMPP 的替代品。它更像是把现代本地开发闭环收进一个工作区。

## AI 让这个对比维度变了

这是很多旧式对比文章没有覆盖到的一点。

AI 编程客户端不仅需要仓库代码，还需要：

- 正确的运行时版本
- 正在运行的数据库、缓存和本地服务
- 站点 URL、配置文件和日志
- 一种可控的本地环境访问方式

FlyEnv 用同一个应用把这两层拼起来：

1. **本地技术栈管理层**：运行时、服务、站点和项目级切换
2. **AI 桥接层**：支持的 AI 编程 CLI 模块，以及内置的 FlyEnv MCP Server

这意味着 AI 客户端和本地环境可以对准同一个项目上下文，而不是让你自己去手工拼接。

如果你想看完整流程，可以继续读 [FlyEnv AI 工作区与 MCP 指南](/zh/guide/ai-coding-workspace-mcp)。

## 从 Docker 或 XAMPP 切到 FlyEnv 难吗

大多数情况下，迁移路径很直接：

1. 安装 FlyEnv。
2. 安装项目需要的运行时和服务版本。
3. 在 FlyEnv 里重建本地站点、域名和 SSL。
4. 把 FlyEnv 指向你现有的项目目录。
5. 如果你使用 AI 客户端，再通过 FlyEnv MCP Server 接入。

你不需要先把一切容器化，也不需要继续局限在单一打包的 PHP 环境里。

## 常见问题

**Q：FlyEnv 能替代 Docker 吗？**

A：对很多本地开发流程来说可以。如果你的重点是完整容器拓扑和容器编排，Docker 仍然有更明确的优势。

**Q：FlyEnv 只是另一个 XAMPP 替代品吗？**

A：它和 XAMPP 在本地站点、服务这部分有交集，但 FlyEnv 还覆盖多运行时管理、项目级版本切换、AI 编程 CLI 模块和内置 MCP。

**Q：我能把 AI 编程客户端接到 FlyEnv 吗？**

A：可以。FlyEnv 能直接管理支持的 AI 编程 CLI，也能通过 FlyEnv MCP Server 暴露本地上下文。

**Q：FlyEnv 可以免费使用吗？**

A：核心环境管理能力可以在无许可证情况下使用。当前评估版会对部分高级流程设置限制，详细规则请查看 [许可证指南](/zh/guide/about-license)。

## 下一步

- [下载 FlyEnv](/zh/download)
- 从 [快速入门指南](/zh/guide/getting-started) 开始
- 先了解产品定位： [什么是 FlyEnv？](/zh/guide/what-is-flyenv)
- 完整接入 AI 工作流： [FlyEnv AI 工作区与 MCP 指南](/zh/guide/ai-coding-workspace-mcp)
