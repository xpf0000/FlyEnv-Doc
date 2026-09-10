---
layout: doc
titleTemplate: false
title: 'Antigravity CLI Manager: Sessions and Skills | FlyEnv'
description: 'Install Antigravity CLI, edit settings visually, resume conversations, and browse skills with Markdown preview.'
head:
  - - meta
    - name: description
      content: 'Install Antigravity CLI, edit settings visually, resume conversations, and browse skills with Markdown preview.'
  - - meta
    - property: og:title
      content: 'Antigravity CLI Manager: Sessions and Skills | FlyEnv'
  - - meta
    - property: og:description
      content: 'Install Antigravity CLI, edit settings visually, resume conversations, and browse skills with Markdown preview.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/features/antigravity-cli
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/features/antigravity-cli
---

<script setup>
import FeatureRelatedLinks from '../components/FeatureRelatedLinks.vue'
</script>

# Antigravity CLI in FlyEnv

Antigravity CLI (`agy`) is Google's terminal-based AI coding agent, the command-line companion to the Antigravity IDE. FlyEnv gives it a proper control panel: install the `agy` binary through an embedded terminal, adjust its settings from a visual form, pick up previous conversations from a grouped Sessions list, and browse user and builtin Skills with a rendered Markdown preview. The module is part of FlyEnv's AI tooling set — see [how FlyEnv works with AI coding tools](/guide/flyenv-work-with-ai) for the bigger picture.

![Antigravity CLI module overview in FlyEnv](https://oss.macphpstudy.com/image/features/antigravity-cli-1.webp)

## Installation

Antigravity CLI is not a background service and FlyEnv does not ship its binaries. Installation is a one-shot action on the **Service** card: FlyEnv opens its embedded terminal and runs the vendor's official install script — `curl -fsSL https://antigravity.google/cli/install.sh | bash` on macOS and Linux, or the equivalent PowerShell script on Windows — with FlyEnv's proxy environment applied so the download works behind a proxy.

- **Automatic detection:** FlyEnv finds an existing `agy` binary on your `PATH` and in the usual install locations (`/usr/local/bin`, `/opt/homebrew/bin`, `~/.local/bin` and the npm/yarn/pnpm/bun global bins on macOS and Linux; `%APPDATA%\npm`, WinGet Links and `~/.local/bin` on Windows), then shows the detected version on the Service card.
- **Command cheat-sheet:** the Service card includes copy-to-clipboard buttons for useful `agy` commands such as `agy plugin list`, `agy plugin import`, `agy install` and `agy models`.

## Configuration

The **Config File** tab edits the files Antigravity CLI actually reads. The main settings file lives at `~/.gemini/antigravity-cli/settings.json`, and MCP servers are kept separately in `~/.gemini/config/mcp_config.json`.

- **Visual form for common settings:** adjust the model, the terminal sandbox toggle and the tool permission level from form fields instead of hand-editing JSON.
- **Raw editor:** switch to the full file view for any key the form does not expose.
- **Shared Gemini config root:** Antigravity CLI reads from the Gemini CLI configuration directory; if you relocate it with the `GEMINI_HOME` environment variable, FlyEnv follows that override.

![Visual settings form for Antigravity CLI](https://oss.macphpstudy.com/image/features/antigravity-cli-2.webp)

## Sessions

The **Sessions** tab lists your past conversations so you can get back into one without remembering its id.

- **Grouped by working directory:** conversations are organized under the folder they ran in, and each entry shows its id and last-modified time. Because Antigravity stores message payloads as protobuf, the title and first prompt are recovered on a best-effort basis.
- **Resume in your own terminal:** running or resuming a session opens your system terminal — not a panel inside FlyEnv — with `agy --conversation <id>` (or `agy --continue` for the latest one) already typed in the right directory.
- **Clean removal:** delete outdated conversations straight from the list.

![Sessions grouped by working directory](https://oss.macphpstudy.com/image/features/antigravity-cli-3.webp)

## Skills

The **Skills** tab browses the skill folders on disk directly — unlike the [GitHub Copilot CLI](/features/github-copilot-cli) module, whose Skills tab queries the CLI itself, Antigravity's list is read straight from the filesystem.

- **User and builtin skills:** your own skills from `antigravity-cli/skills` are listed alongside the builtin ones from `antigravity-cli/builtin/skills`, the latter marked with a builtin tag.
- **Markdown preview drawer:** opening a skill renders its Markdown in a drawer with code, preview and split views, so you can read a skill's instructions formatted before deciding to use or edit it.
- **Open the skills directory:** one button jumps to the skills folder in your file manager when you want to add or edit files directly.

![Skill](https://oss.macphpstudy.com/image/features/antigravity-cli-4.webp)

## MCP servers

The **MCP** tab manages the Model Context Protocol servers that Antigravity CLI connects to, read from and written to `~/.gemini/config/mcp_config.json` — the [MCP and AI workspace guide](/guide/ai-coding-workspace-mcp) explains the role MCP servers play in an AI coding workspace. List the servers currently configured, add a new one, or remove entries you no longer need — no manual JSON editing required. FlyEnv's own [MCP Server](/features/mcp-server) can register itself into this list with one click from its Client Config tab.

![MCP servers](https://oss.macphpstudy.com/image/features/antigravity-cli-5.webp)

<FeatureRelatedLinks slug="antigravity-cli" />

## Compatibility Notes

Antigravity CLI in FlyEnv is a desktop companion for the `agy` command-line tool, available on macOS, Windows and Linux; the install script and detection paths differ per platform as described above. It is not a service: there is no start/stop lifecycle, no port and no version manager — FlyEnv manages whatever `agy` version the official installer or your package manager placed on the machine. Conversations always open in an external system terminal; FlyEnv lists and launches them but does not host the chat itself. Session details are limited by Antigravity's storage format (SQLite databases with protobuf payloads), so FlyEnv can reliably show the id, working directory and modification time while titles are best-effort. For the current FlyEnv build and platform packages, check the [Download page](/download). FlyEnv manages other AI coding CLIs the same way — see the [Claude Code](/features/claude-code) and [Codex](/features/codex) modules.
