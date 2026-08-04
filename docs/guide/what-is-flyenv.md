---
title: 'What Is FlyEnv? Native Local Stack, AI Coding CLI, and MCP Workspace'
head:
  - - meta
    - name: description
      content: 'FlyEnv is a native desktop workspace for local runtimes, services, HTTPS sites, AI coding CLIs, and the FlyEnv MCP Server on macOS, Windows, and Linux.'
---

# What Is FlyEnv? Native Local Stack, AI Coding CLI, and MCP Workspace

Modern local development is no longer just PHP and MySQL. A real project usually needs multiple runtimes, local services, HTTPS sites, and now AI coding clients that must see the same local environment you use yourself.

FlyEnv is a native desktop workspace that brings those pieces together. It manages local runtimes and services, switches versions per project, launches AI coding CLIs, and exposes your managed local context through the built-in **FlyEnv MCP Server**.

## What FlyEnv Actually Does

FlyEnv lets you install only the software you need and manage it from one native desktop workspace:

| Module category | Supported modules                                                                                                                                                                                                                                                    |
| --- |----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| AI Coding & MCP | [FlyEnv MCP Server](https://youtu.be/frprHkD1_rQ), Claude Code, Codex, OpenCode, Kimi, Antigravity CLI, GitHub Copilot CLI                                                                                                                                                                       |
| AI Integration & Automation | Hermes Agent, [OpenClaw](https://youtu.be/j7_B-VzIyEU), [n8n](https://youtu.be/YnA1B3qmDJU), [Ollama](https://youtu.be/yPk9HQJRvb8), [CLIProxyAPI](https://youtu.be/RmSl4jgmEyI)                                                                                       |
| Containers | Podman                                                                                                                                                                                                                                                               |
| Network Tunnel | Cloudflared, Cloudflare Tunnel                                                                                                                                                                                                                                       |
| Web Servers | FrankenPHP, [Apache](https://youtu.be/t7nKL45FdVk), [Nginx](https://youtu.be/zfdNZFRt3k4), [Caddy](https://youtu.be/NuaYnRiD3AY), Tomcat                                                                                                                                  |
| Databases | [MySQL](https://youtu.be/uWWHAqxhVyk), [MariaDB](https://youtu.be/mvmbRi6KsgI), [PostgreSQL](https://youtu.be/5gW3WHh8_Jw), [MongoDB](https://youtu.be/wPjgwVeA6lw), [Qdrant](https://youtu.be/ahetMNLLS7s), [ClickHouse](https://youtu.be/3ePJYddWYmQ)              |
| Email Server | [Mailpit](https://youtu.be/D4MkA25Ofd0)                                                                                                                                                                                                                              |
| Programming Languages & Runtime | .NET, Flutter, [PHP](https://youtu.be/OYP1IOoJOtI), Composer, PHP-CLI, PHP-FPM, RoadRunner, Swoole CLI, Go, [Node.js](https://youtu.be/Pt_I3NDciZw), [Python](https://youtu.be/dhy0nJYsfQQ), Java, Maven, Gradle, SDKMAN, Erlang, Ruby, Rust, Rustup, [Bun](https://youtu.be/lu68kw8_3dY), Deno, Zig |
| Cache & Message Queue | [Redis](https://youtu.be/u9xjPN-VWT4), Memcached, [RabbitMQ](https://youtu.be/ymbyrr5zGkI)                                                                                                                                                                           |
| Service Governance | [Consul](https://youtu.be/pa0QFgpu17w), [Etcd](https://youtu.be/xsw8BQxii10), [R-Nacos](https://youtu.be/8ceC7QqY4UA), [Temporal](https://youtu.be/E_jetPnVxBo), [Temporal CLI](https://youtu.be/80psOMuDK9I) |
| Search Engine | [Elasticsearch](https://youtu.be/B9Eo2Y-aXWQ), [Meilisearch](https://youtu.be/vPD3lXo1vr0), [Typesense](https://youtu.be/3Uo22iqty9k), [ZincSearch](https://youtu.be/uOf2cWk3AtU)                                                                                    |
| Object Storage | [RustFS](https://youtu.be/lCEEocXdt_M), [Minio](https://youtu.be/MJ9OQBOBXMg)                                                                                                                                                                                        |
| Automation & Scheduling | Cron Jobs                                                                                                                                                                                                                                                            |
| Utilities | Git, MkCert, DNS Server, FTP Server, Static HTTP Server, [Numa](https://youtu.be/0qfnkr5V7eE) |
| Custom modules | Custom modules can be added as services or commands and work like built-in modules.                                                                                                                                                                                  |

All modules support multi-version co-existence, so projects can use the versions they need without a separate manager for each runtime or service.

Alongside these modules, FlyEnv manages local sites with custom domains, HTTPS/SSL, reverse proxy, logs, and site-level runtime settings. It also brings AI coding clients and the FlyEnv MCP Server into the same workspace, giving AI clients structured access to managed services, sites, configs, logs, and selected actions.

Instead of stitching together Docker, version managers, shell aliases, host-file edits, and separate AI client setup, you work from one local desktop workspace.

## Watch FlyEnv's Core Features in 13 Minutes

This walkthrough focuses on FlyEnv's core local-development workflow: choosing the modules you need, installing and switching versions, managing services, creating reusable startup groups, configuring local sites, and using built-in developer tools.

<iframe style="width: 100%; aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/TA2NA0JeGdo" title="FlyEnv Feature Overview - Native Local Development Without Docker" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

For AI coding CLI and MCP features, continue with the [FlyEnv AI Workspace & MCP Guide](/guide/ai-coding-workspace-mcp).

## Why Developers Use It

| Common local-dev problem | Typical workaround | What FlyEnv changes |
| --- | --- | --- |
| Version conflicts between projects | `nvm`, `pyenv`, manual PHP switching, custom shell glue | Project-level runtime switching from one workspace |
| Too many local tools to manage | One app for runtimes, another for databases, another for sites | Runtimes, services, sites, and utilities in one place |
| Local HTTPS and custom domains take time | Manual proxy, certificate, and hosts-file setup | Managed local sites with domains, SSL, and logs |
| AI clients can read code but not real local context | Hand-built config, scripts, or broad shell access | Managed AI CLIs plus MCP access to local context |
| Container-first local stacks feel heavy for daily work | Docker for everything | Native local workflow without container-first overhead |

## The Real Power: When Everything Works Together

Any one FlyEnv capability is useful on its own. A version switcher. A service dashboard. Local domains and SSL. A tunnel tool. AI coding CLI management. MCP access to the local stack.

You can find versions of those features in other tools. What is harder to find is **all of them in one place, sharing the same projects, sites, and workflow**. That is where FlyEnv stops being "a convenient utility" and becomes "the place you actually work."

Picture a normal day:

1. Install or manage the runtimes and services your project needs.
2. Let FlyEnv attach the right versions to the current project.
3. Run local sites with domains, SSL, reverse proxy rules, logs, and dependent services from the same workspace.
4. Launch Claude Code, Codex, or another supported AI coding CLI against that same project context.
5. Expose the managed local stack through the FlyEnv MCP Server so the AI can inspect services, configs, logs, and selected actions.

What used to be separate tools, config files, and shell glue turns into one continuous local flow:

> **Install -> Configure -> Run -> Proxy -> Tunnel -> Debug -> Connect AI -> Ship**

That continuity is the real strength. The time savings do not come from a single fast feature. They come from not having to keep leaving the workspace.

## How FlyEnv Differs from Docker and XAMPP-Style Stacks

| Approach | Best at | Tradeoff compared with FlyEnv |
| --- | --- | --- |
| Docker Desktop | Container parity and multi-service container orchestration | More setup and more container overhead for everyday local app work |
| XAMPP / MAMP-style bundles | Simple fixed PHP/MySQL sandbox | Narrower multi-version, multi-runtime, and AI workflow support |
| FlyEnv | Native multi-runtime local development plus AI and MCP workflow | Less focused on reproducing full container topology than Docker |

If your local work mostly means building and debugging apps against real local runtimes and services, FlyEnv is designed for that path first.

## Why AI Changes the Definition of a Local Environment

AI coding clients do not just need repository files. They also need:

- the active PHP, Node.js, or Python version
- the running local databases, caches, and web services
- site URLs, logs, and managed config files
- a controlled way to inspect or operate on that environment

FlyEnv keeps the runtime layer and the AI access layer in the same place:

- project-level runtime switching
- AI coding CLI modules in the same workspace
- built-in MCP with token auth, tool toggles, approval modes, and audit logs

If you want the full AI setup walkthrough, read the [FlyEnv AI Workspace & MCP Guide](/guide/ai-coding-workspace-mcp).

## Built and Driven by Its Community

FlyEnv does not grow only from an internal roadmap. A large share of its modules, fixes, translations, and documentation improvements come from community requests and direct pull requests.

That matters for a practical reason: the feature you are missing today may already be on its way. FlyEnv is built around a modular architecture, which makes it easier to extend with new runtimes, services, AI tools, and related integrations without rewriting the whole app.

So if FlyEnv does not yet cover a local tool or workflow you need, the next step is clear:

- Open a request on GitHub
- Contribute a pull request

The product is shaped in public, and that is part of why it can move across so many local development scenarios.

## Who FlyEnv Is For

- Developers switching between multiple local projects and runtime versions
- Teams that want native local environments without hand-built shell glue
- Developers using Claude Code, Codex, or other AI clients against real local services
- People who want a lighter daily workflow than a container-first setup

## Platform Support

FlyEnv runs natively on:

- macOS
- Windows
- Linux

## Frequently Asked Questions

**Q: Is FlyEnv only for PHP?**

A: No. FlyEnv is built for multi-runtime local work, including PHP, Node.js, Python, databases, local sites, and related tooling.

**Q: Does FlyEnv replace Docker?**

A: For many day-to-day local development workflows, yes. If you need full container topology or production-like container orchestration, Docker can still make sense.

**Q: Can AI coding clients connect to FlyEnv?**

A: Yes. FlyEnv can manage supported AI coding CLIs directly and expose local context through the FlyEnv MCP Server.

## Next Steps

- [Download FlyEnv](/download)
- Follow the [Quick Start Guide](/guide/getting-started)
- Compare approaches in [FlyEnv vs Docker & XAMPP](/guide/flyenv-vs-docker-xampp)
- Set up the full AI workflow in [FlyEnv AI Workspace & MCP Guide](/guide/ai-coding-workspace-mcp)
