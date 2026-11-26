---
layout: doc
titleTemplate: false
title: 'AI Memory Plugin: Persistent Local Memory for Coding Agents | FlyEnv'
description: 'Give AI coding agents persistent local memory through MCP. Manage global and project knowledge, explore a 3D memory map, connect clients and back up your data.'
---

# AI Memory in FlyEnv

AI Memory gives your AI coding agents a shared place to save preferences, project knowledge and development decisions across sessions. Keep a coding convention available to your next conversation, preserve the reason behind an architecture choice, or let another connected client retrieve what a previous agent saved.

Memories are stored locally in FlyEnv's plugin data directory, with global preferences and project knowledge kept in separate scopes. The plugin provides a 3D memory map, search and editing, client connection setup, backup and restore, and a record of memory tool activity.

Install **AI Memory** from **[Settings → Plugin Market](/features/plugin-market)**, then open its sidebar entry. It has no separate runtime to download or service version to start. Agents access the stored memories through FlyEnv's **[MCP Server](/features/mcp-server)**.

![AI Memory in FlyEnv showing a project's interactive 3D memory map and memory categories](https://oss.macphpstudy.com/image/features/plugin/ai-memory-map.webp)

## Keep preferences global and project knowledge separate

Use **Global** for information that applies across projects, such as your preferred language or coding style. Choose a project for its own architecture, setup details, decisions and reusable fixes. A global client connection works across projects; it does not combine their memory collections.

Project memories are associated with a confirmed project root directory. Two unrelated projects with the same folder name stay separate. In the management view, select an existing project or choose a project folder to work with that collection.

The plugin stores memory content and metadata outside your source repository. You can use project instructions to guide an agent's behavior without adding the stored memories themselves to your codebase.

![AI Memory scope selector with Global, saved projects and a project path option](https://oss.macphpstudy.com/image/features/plugin/ai-memory-project-selection.webp)

## Browse a 3D memory map

The **Memories** tab displays the selected collection as an interactive 3D map. Memories are grouped by type: preferences, facts, events, procedures, project states, decisions, observations and notes. Connections indicate shared topics or tags, helping you explore related knowledge.

Drag to rotate, zoom in or out, pause the orbit or reduce motion. Select a category to browse its records, then choose a memory to open its details alongside the map. The list view gives you another way to locate and open a record.

Search by keywords to narrow the collection. Agent search matches titles, summaries, topics and tags; reading the full Markdown content is a separate operation. Give each memory a useful title and summary so it can be found later.

![AI Memory preference category with a record list, related memory connections and the selected memory's details](https://oss.macphpstudy.com/image/features/plugin/ai-memory-detail.webp)

## Create, edit and maintain memories

Use **New memory** to add a record yourself, or let a connected agent save it through MCP. A memory includes a type, title, summary, topic, tags, Markdown content and source information.

Open a record to read its content, inspect its source and revision, or edit it. Updates retain revision history and a change reason. **Archive** removes a memory from normal active results while preserving it for later restoration. **Delete permanently** removes the record and its history after confirmation.

Each memory body supports up to 16 KiB of UTF-8 text. Keep records focused on one useful fact, decision or procedure so agents can retrieve the relevant knowledge without loading an entire conversation.

![AI Memory New memory dialog with title, summary, Markdown content, type, topic, tags and source fields](https://oss.macphpstudy.com/image/features/plugin/ai-memory-new-memory.webp)

## Connect your coding agent

Open **Connect an agent** and choose an installed client. One-click setup is available for **[Claude Code](/features/claude-code)**, **[Antigravity CLI](/features/antigravity-cli)**, **[Codex](/features/codex)**, **[GitHub Copilot CLI](/features/github-copilot-cli)**, **[OpenCode](/features/opencode)** and **[Kimi](/features/kimi)**.

One-click setup starts the local MCP server if needed, enables the five memory tools, registers the global MCP connection for the selected client and installs global memory instructions. Review each step and retry any unfinished one. In the advanced settings you can also install instructions for a specific project.

![AI Memory Connect an agent page with six supported clients, generic settings and three automatic setup steps for Codex](https://oss.macphpstudy.com/image/features/plugin/ai-memory-connect-agent.webp)

For other MCP clients, choose **Generic settings**. Copy the HTTP configuration or use the stdio option when required by your client. Add the memory instructions to the client's supported instruction file or system prompt. The stdio connection requires local Node.js and FlyEnv's bridge.

After setup, open a new session from your project's confirmed absolute root. Ask the first client to save a sample project fact, such as “The smoke test command is `npm test`,” and report the returned ID and revision. In a fresh session in a second connected client, use the same project root and ask it to search for “smoke test” and retrieve the record. Check that the ID and revision match and confirm both calls in **Call Records**.

FlyEnv's developer-preview acceptance test verified this handoff in both directions between Codex and Kimi and read a saved record again after restarting FlyEnv. Client setup writes connection settings and instructions. Saving and recalling useful knowledge depends on the agent's instructions and actual tool calls.

## Five MCP tools for persistent memory

AI Memory adds five tools to FlyEnv's MCP server:

- **`flyenv_memory_search`:** find matching memory summaries in a global or project scope.
- **`flyenv_memory_get`:** read a complete memory, including a selected revision.
- **`flyenv_memory_store`:** save a new memory with its source.
- **`flyenv_memory_update`:** revise an existing record with a reason and expected revision.
- **`flyenv_memory_forget`:** permanently delete a record and its history.

Project searches can use `include_global=true` to include global memories. Read each match using its returned scope. If an update reports a conflict, read the latest revision before deciding what to change. If a write times out or returns `unknown`, replay the same request with the same `request_id` and parameters to confirm what happened.

Manage tool availability and approval policies in FlyEnv's MCP settings. Keep FlyEnv running with the plugin enabled and the MCP server available while agents use the tools. Different connected clients can access the same stored collection when they use the same scope and project root.

![FlyEnv MCP Tools tab showing the AI Memory group, five memory tool switches and approval policies](https://oss.macphpstudy.com/image/features/plugin/ai-memory-mcp-tools.webp)

## Back up, restore and reconnect moved projects

Open **Maintenance → Back up now** to create a complete backup folder with integrity checks. To move memories to another computer, copy the entire backup folder and choose **Restore from backup** in a compatible AI Memory installation.

Restore replaces the current memory collections and first saves a backup of the existing data. Memory backups include global and project records; your project source files and AI client configurations are separate.

When a project has moved, use **Project directories** in Maintenance to choose its new folder. Reassociation keeps the project identity, memories and revision history while updating its stored path. Available projects can also be moved through **Show all projects → Change folder**.

If the selected folder already has project memories, FlyEnv asks whether the collections belong to the same project. You can combine them while preserving every record and revision, or keep them separate and choose another directory. Combining does not overwrite or automatically deduplicate memories.

![AI Memory Maintenance page with backup, restore, project link checks, project directories and the data folder](https://oss.macphpstudy.com/image/features/plugin/ai-memory-maintenance.webp)

## Review agent activity

The **Call Records** tab shows memory tool activity and results for the current FlyEnv session. Refresh the list after using an agent, then expand a record to inspect request and response details.

The view keeps up to 200 detailed entries in memory and excludes full memory bodies. These records clear when FlyEnv exits; saved memories persist on disk. Local storage describes where the plugin keeps data: content retrieved through MCP is still passed to your chosen AI client. Your client may send retrieved content to its model provider. Use a harmless test record when checking your connection.

![AI Memory Call Records tab showing session tool activity, results, durations and a refresh button](https://oss.macphpstudy.com/image/features/plugin/ai-memory-call-records.webp)

Use **[MCP Server](/features/mcp-server)** for FlyEnv's broader environment tools, or return to the **[features overview](/features#plugins)** to explore other plugins.
