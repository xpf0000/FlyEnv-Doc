---
title: 'Local AI Coding Workspace with MCP, Claude Code and Codex'
head:
  - - meta
    - name: description
      content: Build a local AI coding workspace with FlyEnv. Manage runtimes, services, Claude Code, Codex, and the FlyEnv MCP server in one native local workflow.
---

# Build a Local AI Coding Workspace with MCP for Claude Code, Codex, and More

Claude Code, Codex, and other AI coding clients can read your repository, but that is only part of a real development environment. They still need the runtime versions, local services, site URLs, logs, and managed config your project actually depends on.

FlyEnv turns that missing layer into one native local workflow. It manages the stack your project actually runs on, launches AI coding CLIs, and exposes that same environment through the built-in **FlyEnv MCP Server**.

## Why AI Clients Need the Real Local Environment

An AI client is much more useful when it can work against the same local context you use yourself:

- the active PHP, Node.js, or Python version
- whether MySQL, Redis, or web services are running
- local site URLs, managed files, configs, and logs
- a safe, structured way to inspect or operate on that stack

FlyEnv does that by keeping the runtime layer and the AI access layer in the same workspace.

| What the AI needs | Typical shell-only setup | What FlyEnv adds |
|-------------------|--------------------------|------------------|
| Correct runtime version | Manual switching and drift | Project-level runtime switching |
| Running services | Start everything by hand | Service management in the same app |
| Local sites, configs, and logs | Scattered across terminals and files | Structured MCP access to site details and managed files |
| Safe machine control | Too much shell access or no access at all | Tool toggles, approvals, and audit logs |

## What FlyEnv Adds to a Local MCP Workflow

FlyEnv closes the gap in two layers:

1. **Local stack layer:** manage runtimes, services, local domains, SSL, and project-level switching from one desktop app.
2. **AI bridge layer:** expose that same environment to AI clients through MCP, with token auth, tool controls, approval policies, and audit logs.

This is the workflow behind the homepage promise: **"Manage local runtimes, services, AI coding CLIs, and the MCP bridge in one place."**

## Step 1: Manage AI Coding CLIs in One Workspace

In the FlyEnv app, AI coding CLIs are first-class modules alongside local runtimes and services. Today the workspace can manage:

- Claude Code
- Codex
- OpenCode
- Kimi Code CLI
- GitHub Copilot CLI
- Antigravity CLI

That means you can keep the project runtime and the AI client in one place instead of stitching together separate installers and shell profiles by hand.

## Step 2: Start the FlyEnv MCP Server

Open the **MCP Server** panel in FlyEnv and configure:

- **Host**
- **Port**
- **Token**
- **Auto Start**
- **Allow remote access**
- **Enabled Tools**
- **Approval policy** for higher-risk tools

By default, FlyEnv is designed for local development:

- it listens on `127.0.0.1`
- it uses a bearer token for client auth
- it lets you turn tools on or off individually
- it keeps an **audit log** of MCP activity

This gives you a practical local default without exposing your machine more broadly than necessary.

## Step 3: Connect Claude Code, Codex, OpenCode, and Other Clients

FlyEnv supports two connection patterns.

### Option A: HTTP MCP

FlyEnv can generate HTTP MCP config snippets directly in the app. The UI currently supports config output and one-click registration for:

- Claude Code
- Antigravity CLI
- Codex
- GitHub Copilot CLI
- OpenCode
- Kimi

Example Claude Code-style config:

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

Example Codex config:

```toml
[features]
rmcp_client = true

[mcp_servers.flyenv]
url = "http://127.0.0.1:7682"

[mcp_servers.flyenv.http_headers]
Authorization = "Bearer <your-token>"
```

### Option B: Use the stdio MCP Bridge for Desktop Clients

For clients that prefer local stdio MCP servers, FlyEnv also exposes a bridge script. The app can generate a stdio snippet for clients such as:

- Cursor
- Cline
- Windsurf
- Claude Desktop

Example stdio config:

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

FlyEnv generates these snippets for you, so in most cases you do not need to hand-write config from scratch.

## Step 4: Decide What the AI Is Allowed to Do

FlyEnv's MCP panel is not just an on/off switch. It also lets you scope what the AI can access.

Typical read and inspection tools include:

- listing FlyEnv-managed services and installed versions
- checking one service's status
- listing local sites
- resolving a site's runtime, URLs, and managed files
- listing known config files and log files
- listing downloadable service versions
- reading database or cache connection details

Higher-impact tools include:

- starting, stopping, or restarting services
- creating or updating a site
- deleting a site
- installing a service version

For those higher-risk tools, FlyEnv supports:

- **tool-level enable/disable**
- **approval mode**
- **audit logging**

That lets you keep AI agents useful without handing them an unrestricted control surface by default.

## Step 5: Run a Practical Local AI Coding Workflow

Use an existing PHP and MySQL site in FlyEnv. The demo below follows a PHP CRUD app from database setup to a live page. You can check any registered PHP site with the same read-only calls.

1. Start your selected web server, the PHP service for your site, and MySQL. Open the registered site once to confirm it loads before you connect an agent.
2. Start the [FlyEnv MCP Server](/features/mcp-server), connect your client, and confirm it lists `list_sites`, `resolve_site_runtime`, and `resolve_site_urls`. Leave write tools disabled for this check.
3. Ask the agent to call `list_sites` and use the exact site name it returns as `siteName` in both `resolve_site_runtime` and `resolve_site_urls`. Compare the reported PHP version with the Host settings, then open the returned URL in a browser to verify the app loads.
4. In FlyEnv, review these operations in **MCP Server → Audit Log**. For a site that fails to load, check the web server and PHP status before you change the site configuration.

## Watch the End-to-End Demo

If you want to see this workflow in a real project, this demo walks from MySQL setup to a live PHP CRUD site by using FlyEnv, an AI CLI, and the MCP bridge together.

<iframe style="width: 100%; aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/frprHkD1_rQ" title="FlyEnv AI CLI + MCP End-to-End Demo: From MySQL to a Live PHP CRUD Site" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Watch the [PHP and MySQL CRUD demo](/demos?video=ai-cli-mcp-crud) in the FlyEnv demo library.

## Why This Works Well Without Docker-First Overhead

If your goal is a local AI coding workspace, you do not always need to start by containerizing the workflow. FlyEnv already manages native runtimes and local services, then gives AI clients structured MCP access to that stack.

For teams that want a lighter alternative to wiring Docker, shell scripts, and client config together by hand, that is often the simpler path.

## Security Notes for Local MCP Setups

For most setups, keep these defaults:

- keep MCP on `127.0.0.1`
- keep the token enabled
- enable only the tools you need
- use approval for risky operations

Only turn on remote access if you understand the network exposure and explicitly need it.

An HTTP `401` means the client sent an invalid token or omitted it. Refresh the client configuration after regenerating the token. If a browser client receives `403`, check its exact origin and whether remote access is disabled. If a tool is missing from the client, check the switch in FlyEnv and reconnect the client. A cancelled confirmation leaves that tool call unexecuted.

Use the [AI Memory plugin](/features/ai-memory) if you also want a connected coding agent to save project decisions for a later session. It adds its own tools to the same MCP server.

## Frequently Asked Questions (FAQ)

**Q: Does FlyEnv work as a Docker alternative for local AI coding?**

A: In many local development workflows, yes. FlyEnv manages native runtimes, services, local sites, and MCP access without requiring a container-first setup.

**Q: Which AI clients can connect to the FlyEnv MCP Server?**

A: FlyEnv can generate HTTP MCP config for Claude Code, Codex, OpenCode, Kimi, GitHub Copilot CLI, and Antigravity CLI, plus stdio bridge config for clients such as Cursor, Cline, Windsurf, and Claude Desktop.

**Q: Can I limit what an AI agent can change on my machine?**

A: Yes. FlyEnv supports tool-level enable/disable controls, approval mode for riskier actions, and audit logs for MCP activity.

## Next Steps

Set up the full workflow by installing FlyEnv, starting the MCP Server, and connecting your preferred AI coding client to the same local stack your project already uses.

[Download FlyEnv](/download) to build a local AI coding workspace with runtimes, services, AI CLIs, and MCP in one place.

## Related Guides

- Need the broader productivity article? Read [AI Coding Assistant Workflow](/guide/flyenv-work-with-ai)
- Want a local LLM workflow? Read [Build Local Offline AI Agent](/guide/build-local-offline-ai-agent)
- Want automation on top of local AI? Read [Self-Hosted AI Workflows with n8n](/guide/build-local-ai-workflow-by-n8n)
