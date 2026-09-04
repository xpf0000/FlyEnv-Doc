---
layout: doc
titleTemplate: false
title: 'Codex CLI Manager: Sessions, Plugins and MCP | FlyEnv'
description: 'Install Codex, edit config.toml visually, resume sessions, and manage plugins and MCP servers from FlyEnv.'
head:
  - - meta
    - name: description
      content: 'Install Codex, edit config.toml visually, resume sessions, and manage plugins and MCP servers from FlyEnv.'
  - - meta
    - property: og:title
      content: 'Codex CLI Manager: Sessions, Plugins and MCP | FlyEnv'
  - - meta
    - property: og:description
      content: 'Install Codex, edit config.toml visually, resume sessions, and manage plugins and MCP servers from FlyEnv.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://www.flyenv.com/features/codex
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://www.flyenv.com/features/codex
---

# Codex CLI in FlyEnv

FlyEnv gives the Codex CLI a management console: one-click installation through the official setup script, a visual form for `config.toml`, a Sessions table that resumes past conversations in your terminal, plus plugin and MCP server management. For the bigger picture of driving AI assistants from FlyEnv, see [how FlyEnv works with AI](/guide/flyenv-work-with-ai).

![FlyEnv Codex module overview](https://oss.macphpstudy.com/image/features/codex-1.webp)

## Installation

Codex is a command-line client, not a background service — FlyEnv does not start, stop or daemonize it, and there is no port or process to watch. The **Service** tab shows whether Codex is installed and which version is on your machine.

- **Official install script, run for you:** installation is a one-shot action that runs the vendor's own script — `curl -fsSL https://chatgpt.com/codex/install.sh | sh` on macOS and Linux, `irm https://chatgpt.com/codex/install.ps1 | iex` on Windows — inside FlyEnv's embedded terminal, so you watch the real output. FlyEnv's proxy environment is applied to the install automatically.
- **Automatic detection:** FlyEnv finds the `codex` binary on your `PATH` and in common install locations (Homebrew and standard bin directories, npm/yarn/pnpm/bun globals on macOS and Linux; npm and WinGet locations on Windows), so an installation you already have shows up without reinstalling.
- **Command cheat-sheet:** a copy-to-clipboard reference of everyday commands — `codex exec`, `codex review`, `codex login` and more — is built into the page.

## Configuration

The **Config File** tab edits Codex's configuration directly; there is nothing to restart afterwards.

- **Visual form for `config.toml`:** adjust `~/.codex/config.toml` from a form instead of writing TOML by hand — model, `model_reasoning_effort`, `approval_policy` and `sandbox_mode` are all editable fields.
- **Raw editors:** the full `config.toml` source and `auth.json` are both editable as plain text for anything the form does not cover.
- **Custom home respected:** if you point Codex elsewhere with `CODEX_HOME`, FlyEnv reads and writes the configuration from that location instead.

![Visual config.toml form for Codex](https://oss.macphpstudy.com/image/features/codex-2.webp)

## Sessions

The **Sessions** tab reads Codex's history from the date-segmented `.jsonl` files under `~/.codex/sessions/` and groups them by working directory, so conversations from each project stay together.

- **Resume where you left off:** pick a session and FlyEnv opens your system terminal in the session's directory with `codex resume <id>` — or jump straight back into the most recent one with `codex resume --last`.
- **Start new conversations:** run `codex` for any listed working directory from the same table.
- **Housekeeping:** delete old sessions from the list when you no longer need them.

Sessions always run in an external system terminal window, never inside FlyEnv itself — FlyEnv prepares the command and the working directory, then hands the conversation over to your terminal.

![Codex Sessions table grouped by project](https://oss.macphpstudy.com/image/features/codex-3.webp)

## Plugins

The **Plugins** tab shows the plugins Codex reports, listing both available and installed entries via `codex plugin list --available --json`. From the same tab you can install plugins in the embedded terminal and manage the ones already installed. Unlike a full plugin marketplace, Codex exposes no marketplace sources to add or remove, so FlyEnv manages plugins directly against the CLI.

## MCP servers

The **MCP** tab manages the Model Context Protocol servers Codex can call, with list, add and remove actions.

- **Written into `config.toml`:** HTTP MCP servers you add are stored under `mcp_servers` in `~/.codex/config.toml`, keeping everything in one configuration file.
- **Remote client enabled automatically:** adding an HTTP server also turns on `features.rmcp_client = true` so Codex can reach remote MCP endpoints.

![Managing Codex MCP servers](https://oss.macphpstudy.com/image/features/codex-4.webp)

## Compatibility Notes

Codex runs as an interactive CLI in your own terminal; FlyEnv manages its installation, configuration, session history, plugins and MCP servers, but the conversations themselves always happen in the external system terminal, on all supported platforms. Installation uses the vendor's official script, so what gets installed — and whether the install succeeds — depends on that script and your network. Detection covers `PATH` plus common install locations; an unusually placed binary may need a standard install first. There is no multi-version management for Codex, and the configuration paths described above follow `CODEX_HOME` when it is set. For the platforms FlyEnv itself supports, check the [Download page](/download).
