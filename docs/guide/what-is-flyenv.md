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

With FlyEnv you can manage all of this from one app:

| Area | What FlyEnv handles |
| --- | --- |
| Runtimes | PHP, Node.js, Python, Go, Java, and other local runtimes |
| Services | MySQL, MariaDB, PostgreSQL, Redis, MongoDB, Mailpit, queues, search tools, and more |
| Local sites | Custom domains, HTTPS/SSL, reverse proxy, logs, and site-level runtime settings |
| AI workflow | Claude Code, Codex, OpenCode, Kimi, GitHub Copilot CLI, Antigravity CLI, and related local AI tooling |
| MCP | Structured access to services, sites, configs, logs, and selected actions through the FlyEnv MCP Server |

Instead of stitching together Docker, version managers, shell aliases, host-file edits, and separate AI client setup, you work from one local desktop workspace.

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
