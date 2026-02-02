# 什么是 FlyEnv？

FlyEnv 是一款一体化全栈环境管理工具。帮助开发者快速设置本地开发环境。

它通过 **极速多版本切换**、**全栈技术支持** 和 **无缝跨平台体验**，简化开发流程。无论你是使用 PHP、NodeJS、Java、Go 还是 Python，FlyEnv 都能通过一条命令集成所有必要工具，消除配置烦恼，让你专注于真正重要的事情——**创造，而非调试**。

简而言之，FlyEnv 提供了一个完整的运行环境，帮助用户开发和调试诸如 Laravel、WordPress、Yii2、FastAdmin、NestJS、SpringBoot、Gin、Beego、Django、Flask 等应用程序。

**项目详细分析和技术细节**: [https://deepwiki.com/xpf0000/FlyEnv](https://deepwiki.com/xpf0000/FlyEnv)

## 核心功能

### 软件安装
FlyEnv 提供 **一键安装** 功能，支持多种软件，包括：

- **AI 集成**: Ollama.
- **Web 服务器**: Apache, Nginx, Caddy, Tomcat, Consul.
- **数据库**: MySQL, MariaDB, PostgreSQL, MongoDB, Qdrant.
- **邮件服务器**: Mailpit.
- **编程语言 & 运行时**: PHP (Composer), Java (Maven, Gradle), NodeJS, Python, Go, Erlang, Ruby, Rust (Rustup), Zig, Bun, Deno.
- **数据队列与缓存**: Redis, Memcached, RabbitMQ, etcd.
- **搜索引擎**: Elasticsearch, Meilisearch, Typesense
- **对象存储**: Minio.
- **其他**: DNS Server, FTP Server, Static HTTP Server.

所有软件均支持 **多版本安装**。例如：
- PHP：支持 5.x 到最新的 8.x 版本。
- MySQL：支持 5.x 到 9.x 版本。

新版本发布后，无需等待 FlyEnv 更新即可自动使用。

#### 平台特定安装
- **Windows**：所有软件均从官方源下载。
- **macOS**：FlyEnv 提供三种安装方式：
    1. 官方安装包（如果可用）。
    2. 使用 Homebrew 安装。
    3. 使用 Macports 安装。

对于已本地安装的软件，FlyEnv 允许添加自定义路径，避免重复下载。同时，它会自动检测 Homebrew 和 Macports 的安装。

### 软件服务管理
FlyEnv 允许你管理所有已安装软件服务的启动和停止。例如：
- 启动/停止 PHP-FPM、MySQL、Apache、Redis 等服务。
- 直接在 FlyEnv 的内置编辑器中修改配置文件。
- 快速定位并打开配置文件。

### 本地网站托管
- **一键创建站点**：FlyEnv 自动为 Apache、Nginx、Tomcat 等 Web 服务器生成配置文件。
- **自定义域名**：使用任意域名访问本地站点，并支持 HTTPS。
- **日志管理**：轻松查看和分析站点访问日志。

### 环境变量设置
- 一键将任何支持的软件添加到环境变量中。
- 设置别名（如 PHP74、PHP82），方便在终端中使用。

### 容器/镜像/Docker-Compose管理
对于部分需求难以通过常规方式满足的情况, FlyEnv还提供了容器解决方案. 可以管理镜像, 容器, 快速构建和运行docker-compose.
[Podman模块使用指南](/zh/guide/podman-module)

### 其他工具
FlyEnv 包含许多实用的开发者工具，例如：
1. **JSON 解析**：支持 JSON、JavaScript 对象、PHP 数组、XML、YAML 等格式的相互转换。
2. **端口与进程管理**：通过端口号或命令终止进程。
3. **项目模板**：快速创建 Laravel、WordPress、Yii2、Next.js、Vue、NestJS 等项目。

## 为什么选择 FlyEnv？

### 与 Docker 相比
Docker 功能强大，但许多开发者只需要一个开箱即用的 PHP、NodeJS、Java、Go 或 Python 运行环境。FlyEnv **更直观、更轻量**：
- 无需虚拟容器——所有模块均以原生静态二进制运行。
- 性能更快，资源占用更低（尤其在 macOS 和 Windows 上）。
- 配置文件和日志文件更易于查看和修改。

### 与 MAMP Pro、Laravel Herd、XAMPP 等相比
FlyEnv **更灵活、更新更及时**：
- 支持多种安装源（Homebrew、Macports、APT、DNF、官方二进制文件等）。
- 版本更新及时——无需等待 FlyEnv 升级。
- 配置文件和设置更接近实际生产环境，便于部署。

## 自定义与优化
- **隐藏未使用的模块**：FlyEnv 允许在设置中隐藏不需要的模块，减少界面杂乱。
- **网络问题**：如果因网络限制导致安装缓慢，可以手动安装软件，并在 FlyEnv 中添加自定义路径。
- **配置优化**：FlyEnv 默认使用通用配置。如果项目需要特定模块或扩展，请提交 GitHub Issue 或留言反馈，我们将进行优化。

## 社区驱动的改进
FlyEnv 的设计理念是与社区共同成长。许多功能旨在覆盖基础需求，高级用户的反馈对我们非常重要。通过共同努力，我们可以：
- 增加更多软件支持。
- 改进工具和性能。
- 让开发更轻松，让你有更多时间陪伴家人，实现人生目标。

## 开始使用 FlyEnv
[立即下载](/zh/download) FlyEnv，体验全新的开发效率。

## 讨论

[相较于同类软件，FlyEnv有哪些技术层面的局限性?](https://github.com/xpf0000/FlyEnv/discussions/262)
