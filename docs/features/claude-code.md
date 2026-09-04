---
layout: doc
titleTemplate: false
title: 'Claude Code Manager: Sessions, Plugins and MCP | FlyEnv'
description: 'Install Claude Code, edit settings visually, resume sessions, manage plugins and MCP servers from FlyEnv.'
head:
  - - meta
    - name: description
      content: 'Install Claude Code, edit settings visually, resume sessions, manage plugins and MCP servers from FlyEnv.'
  - - meta
    - property: og:title
      content: 'Claude Code Manager: Sessions, Plugins and MCP | FlyEnv'
  - - meta
    - property: og:description
      content: 'Install Claude Code, edit settings visually, resume sessions, manage plugins and MCP servers from FlyEnv.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://www.flyenv.com/features/claude-code
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://www.flyenv.com/features/claude-code
---

# Claude Code in FlyEnv

FlyEnv gives Claude Code a graphical control center: one-click installation through the official script, a visual editor for `settings.json`, a Sessions browser that resumes past conversations, full plugin and marketplace management, and MCP server configuration — all from the **Claude Code** module in the sidebar. FlyEnv fits naturally into an AI-assisted workflow; see [how FlyEnv works with AI tools](/guide/flyenv-work-with-ai) for the bigger picture.

![Claude Code module in FlyEnv with the Service tab and install terminal](https://oss.macphpstudy.com/image/features/claude-code-1.webp)

## Installation

Claude Code is a command-line client, not a background service — there is no daemon to start or stop, and the module has no version manager. FlyEnv handles setup as a one-shot task.

- **Official install script:** clicking install runs the vendor's own script — `curl -fsSL https://claude.ai/install.sh | bash` on macOS and Linux, `irm https://claude.ai/install.ps1 | iex` on Windows — inside FlyEnv's embedded terminal, so you watch the real output as it happens. FlyEnv's proxy environment is applied to the install automatically.
- **Automatic detection:** if Claude Code is already installed, FlyEnv finds it by scanning `PATH` plus the usual install locations — `/usr/local/bin`, `/opt/homebrew/bin`, `~/.local/bin` and the global bin folders of npm, yarn, pnpm, bun and volta on macOS and Linux; `%APPDATA%\npm`, WinGet Links and `~/.local/bin` on Windows — and shows the detected version.
- **Command cheat-sheet:** the Service tab carries a quick-reference of useful commands such as `claude doctor`, `claude update` and `claude setup-token`, each with a copy-to-clipboard button.

## Configuration

The **Config File** tab edits Claude Code's settings directly, combining a visual form with a full raw editor.

- **Common settings form:** adjust the frequently touched `settings.json` fields — theme, model, `includeCoAuthoredBy` and `cleanupPeriodDays` — from form controls instead of editing JSON by hand.
- **Raw JSON editor:** switch to the source view for anything the form does not cover; changes are written back to the real files.
- **All config files in reach:** FlyEnv opens `~/.claude/settings.json`, `settings.local.json`, `plugins/known_marketplaces.json` and `~/.claude.json` from the same place. If you relocate Claude Code's home with `CLAUDE_CONFIG_DIR`, FlyEnv follows that override.

![Claude Code settings.json visual form with theme and model fields](https://oss.macphpstudy.com/image/features/claude-code-2.webp)

## Sessions

The **Sessions** tab reads Claude Code's history from the `~/.claude/projects` directory, parsing every project's `.jsonl` transcript files.

- **Grouped by project:** sessions are organized by working directory, so conversations for each codebase stay together.
- **Resume in one click:** picking a session opens your external system terminal in that project folder and runs `claude --resume <id>` — or `claude --continue` for the most recent conversation. Sessions always run in the system terminal, not inside FlyEnv.
- **Cleanup:** delete sessions you no longer need directly from the list.

![Sessions table grouped by working directory with resume actions](https://oss.macphpstudy.com/image/features/claude-code-3.webp)

## Plugins

The **Plugins** tab is a full plugin manager built on Claude Code's own plugin system, including marketplace support.

- **Available and installed:** FlyEnv queries `claude plugin list --available --json` to show what each marketplace offers alongside what you already have.
- **Install with real output:** plugin installation runs in the embedded terminal, so download and setup progress is visible.
- **Lifecycle actions:** enable, disable or uninstall installed plugins without touching the command line.
- **Marketplace management:** add new plugin marketplaces or remove existing ones; the registered list is kept in `known_marketplaces.json` under the Claude Code home.

![Plugins tab listing marketplace plugins with install and enable actions](https://oss.macphpstudy.com/image/features/claude-code-4.webp)

## MCP servers

The **MCP** tab manages the Model Context Protocol servers stored in the `mcpServers` section of `~/.claude.json`.

- **List and remove:** see every configured MCP server and delete entries you no longer use.
- **HTTP and SSE servers:** remote servers are added by writing the definition straight into `~/.claude.json`.
- **Stdio servers:** local command-based servers are registered through `claude mcp add`, so they are created exactly the way the CLI expects.

![MCP server list with add and remove controls](https://oss.macphpstudy.com/image/features/claude-code-5.webp)

## Compatibility Notes

Claude Code in FlyEnv is a management layer over the CLI, not a hosted runtime. The module is not a background service — FlyEnv does not run Claude Code for you; interactive sessions are always launched in an external system terminal with the project directory as the working directory. Installation goes through Anthropic's official scripts inside the embedded terminal, and there is no multi-version management. Session history is read from the `~/.claude/projects` JSONL transcripts, so only sessions Claude Code itself has recorded can appear; configuration edits apply to the standard files under `~/.claude` (or the directory named by `CLAUDE_CONFIG_DIR`). Platform coverage follows the FlyEnv build you are running — check the [Download page](/download) for the current release per operating system.
