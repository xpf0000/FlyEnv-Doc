---
layout: doc
titleTemplate: false
title: 'GitHub Copilot CLI Manager: Sessions and Skills | FlyEnv'
description: 'Install GitHub Copilot CLI via npm, edit config, resume sessions, and manage skills and MCP servers.'
head:
  - - meta
    - name: description
      content: 'Install GitHub Copilot CLI via npm, edit config, resume sessions, and manage skills and MCP servers.'
  - - meta
    - property: og:title
      content: 'GitHub Copilot CLI Manager: Sessions and Skills | FlyEnv'
  - - meta
    - property: og:description
      content: 'Install GitHub Copilot CLI via npm, edit config, resume sessions, and manage skills and MCP servers.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://www.flyenv.com/features/github-copilot-cli
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://www.flyenv.com/features/github-copilot-cli
---

# GitHub Copilot CLI in FlyEnv

GitHub Copilot CLI is GitHub's AI coding agent for the terminal, part of the Copilot product family. FlyEnv gives it a dedicated management page: one-click installation, a raw editor for its JSON config files, a Sessions browser with resume and cleanup, a Skills list with per-skill actions, and MCP server management. Copilot stays a normal terminal tool — FlyEnv organizes everything around it. For the broader workflow of driving FlyEnv from AI assistants, see [FlyEnv Work With AI](/guide/flyenv-work-with-ai).

![GitHub Copilot CLI module overview in FlyEnv showing the Service card with install command, detected version and quick command cheat-sheet](https://oss.macphpstudy.com/image/features/github-copilot-cli-1.webp)

## Installation

The **GitHub Copilot CLI → Service** tab detects an existing `copilot` binary and shows its version, or offers a one-click install when none is found.

- **Single cross-platform command:** installation runs `npm install -g @github/copilot`, the same command on macOS, Linux and Windows, so a working Node.js/npm setup is the only prerequisite — FlyEnv's [Node.js version management](/guide/manage-multiple-node-php-versions) can provide one if needed.
- **Embedded terminal:** the npm command runs in FlyEnv's built-in terminal, with FlyEnv's proxy environment variables applied, so you watch the real install output instead of a silent progress bar.
- **Existing installs recognized:** FlyEnv scans `PATH` plus common global install locations — npm, yarn, pnpm, bun and volta global bin directories among them — so a Copilot CLI you installed yourself is picked up without reinstalling.
- **Command cheat-sheet:** copyable shortcuts for everyday commands such as `copilot login`, `copilot init`, `copilot skill list` and `copilot mcp list` sit right on the Service card.

![Installing GitHub Copilot CLI with npm in FlyEnv's embedded terminal](https://oss.macphpstudy.com/image/features/github-copilot-cli-2.webp)

## Configuration

The **Config File** tab edits Copilot CLI's configuration as raw JSON — there is no visual settings form for this module.

- **Two files:** `~/.copilot/config.json` for the main configuration and `~/.copilot/mcp-config.json` for MCP server definitions, both opened in the full editor.
- **Custom home respected:** if you relocate the Copilot home with the `COPILOT_CONFIG_DIR` environment variable, FlyEnv follows it and edits the files at their real location.
- **Nothing is rewritten for you:** FlyEnv opens the files as they are on disk; Copilot CLI itself owns their schema and defaults.

## Sessions

Copilot Sessions are read from the CLI's own SQLite store at `~/.copilot/session-store.db`, so titles and prompts are displayed cleanly, grouped by working directory.

- **Resume where you left off:** the run and resume actions open your system's external terminal in the session's working directory and launch `copilot --resume` or `copilot --continue` — the interactive conversation itself always happens in that terminal, not inside FlyEnv.
- **Clean deletion:** removing a session also removes its `session-state/<id>` directory, so no orphaned state is left behind.

![Sessions table grouped by working directory with run, resume and delete actions](https://oss.macphpstudy.com/image/features/github-copilot-cli-3.webp)

## Skills

The **Skills** tab lists the Skills known to Copilot CLI by querying the CLI directly with `copilot skill list --json`, with each skill's name suffixed by its source — unlike the [Antigravity CLI](/features/antigravity-cli) module, which reads its skill folders straight from disk, this list always comes from the CLI itself.

- **Per-skill actions:** open the skill's directory, reveal the skill file in your file manager, or preview its contents without leaving FlyEnv.
- **Always current:** because the list comes from the CLI rather than a cached snapshot, newly added Skills appear as soon as `copilot skill list` sees them.

![Skills tab listing Copilot skills with source labels and open, reveal and preview actions](https://oss.macphpstudy.com/image/features/github-copilot-cli-4.webp)

## MCP servers

The **MCP** tab manages the MCP servers Copilot CLI connects to, backed by the `~/.copilot/mcp-config.json` file.

- **List, add, remove:** see the currently registered servers and add or remove entries from the UI; changes are written back to the MCP config file.
- **Works with FlyEnv's own MCP server:** the [FlyEnv MCP Server](/features/mcp-server) module can register itself into Copilot CLI's MCP list, letting Copilot inspect and operate your local services and sites.
- **Verify in the terminal:** the `copilot mcp list` quick command on the Service card is the fastest way to confirm what the CLI actually loaded.

![MCP servers tab listing registered servers with add and remove actions](https://oss.macphpstudy.com/image/features/github-copilot-cli-5.webp)

## Compatibility Notes

GitHub Copilot CLI is not a background service: FlyEnv adds no start/stop switch, port or process lifecycle for it, and every interactive session runs in an external system terminal. Installation is npm-based and identical on macOS, Linux and Windows, which means Node.js with npm must be present first — if you need one, install it from FlyEnv's [Node.js module](/features/nodejs) or grab FlyEnv itself from the [Download page](/download). Configuration is exposed as raw JSON only; there is no visual form, and questions about individual keys belong to Copilot CLI's own documentation. Session data lives in the CLI's SQLite store under `~/.copilot` (or wherever `COPILOT_CONFIG_DIR` points), and FlyEnv only reads and deletes what Copilot CLI has written there.
