---
title: 'What Is FlyEnv? An All-in-One Native Local Development Environment'
head:
  - - meta
    - name: description
      content: 'Learn how FlyEnv brings language runtimes, web servers, databases, project environments, plugins and AI development tools together in one native workspace for Windows, macOS and Linux.'
---

# What is FlyEnv?

FlyEnv is an open-source, all-in-one **native local development environment** for Windows, macOS and Linux.

It brings language runtimes, web servers, databases, local services, developer tools and AI development capabilities together in one extensible desktop workspace.

Instead of installing and managing each tool separately, you can choose the software your projects need, configure their environments and organize their dependencies into reusable startup groups. For everyday local development, FlyEnv runs services directly on your machine without requiring containers.

**From scattered tools to one workspace.**

[Download FlyEnv](/download) · [Quick Start Guide](/guide/getting-started) · [Watch Demos](/demos)

## Why FlyEnv Exists

A development environment is no longer just a web server and a database.

A typical web application might use PHP for its backend, Node.js for its frontend, MySQL for storage, Redis for caching, Mailpit for email testing and Nginx for serving the application. Another project on the same computer might require entirely different runtime versions and services.

Each of these tools is useful on its own. The difficult part is managing them together: installing versions, editing configuration files, keeping track of ports, switching between projects, setting up local HTTPS and remembering which services need to be running.

FlyEnv brings these everyday tasks into a single management layer. It does not replace the underlying languages, databases or web servers. It helps you use them together as a working development environment.

## How FlyEnv Works

Think of FlyEnv as a workspace between your projects and the software running on your computer.

```text
Your projects
  Laravel · WordPress · Node.js · Python · Java · AI
                         │
                  FlyEnv workspace
                         │
  ┌──────────────────────────────────────────────┐
  │ Project environments                         │
  │ Runtime versions · Local sites · HTTPS       │
  ├──────────────────────────────────────────────┤
  │ Startup Groups                               │
  │ Organize and start project dependencies      │
  ├──────────────────────────────────────────────┤
  │ Module management                            │
  │ Install · Configure · Run · Update           │
  ├──────────────────────┬───────────────────────┤
  │ Plugin Market        │ AI tools & MCP        │
  │ Extend the workspace │ Connect AI agents     │
  └──────────────────────┴───────────────────────┘
                         │
          Windows · macOS · Linux
```

*Conceptual model of the FlyEnv workspace, rather than an implementation-level architecture diagram.*

Four principles shape the way FlyEnv works:

### Run services natively

FlyEnv manages native runtimes and local services. You can work with their configuration files, logs and network ports directly, using the same tools you normally use on your operating system. A container layer is not required for this workflow.

### Install only what you need

You do not need to install every supported runtime or service. Start with a small PHP or Node.js environment, then add databases, caches, web servers and other tools when a project requires them.

### Use the right runtime for each project

Different projects can require different language versions. FlyEnv supports multiple installed versions and project-level runtime selection for supported languages, reducing the need to repeatedly change your global environment.

See [Per-Project Runtimes](/features/per-project-runtimes) and the [project-level runtime guide](/guide/project-level-runtime-environment).

Project-level version management is not the same as container-level security or filesystem isolation.

### Start project dependencies together

A project's environment is more than its runtime. It may also need a web server, database, cache and other background services.

[Startup Groups](/features/startup-groups) let you organize managed services into reusable groups and start or stop them together. Configure a group for your project instead of repeating the same sequence of manual operations every day.

## A Workspace That Grows With You {#what-flyenv-actually-does}

FlyEnv can support a small local web stack or a much broader development workflow. The workspace grows according to what you choose to install and use.

| Category | Examples |
| --- | --- |
| Language runtimes | PHP, Node.js, Python, Java, Go, Rust |
| Web servers and sites | Nginx, Apache, Caddy, FrankenPHP, local domains and HTTPS |
| Databases and local services | MySQL, PostgreSQL, MariaDB, Redis, RabbitMQ, Mailpit |
| Project workflows | Project-level runtimes, Startup Groups, custom modules |
| AI development | AI coding CLIs, MCP Server, Ollama, CLIProxyAPI, AI Memory plugin |
| Optional plugins | Kafka, OpenSearch, MySQL Cluster, llama.cpp, Command Shortcuts |

These are representative examples, not a complete inventory. Software versions, platform availability and licensing requirements vary by module. Explore the [Features overview](/features) for the current list.

### Extend your workspace with plugins

On-demand software installation and the [Plugin Market](/features/plugin-market) solve two different problems:

- On-demand installation lets you choose which runtimes and services to install.
- The Plugin Market lets you add optional integrations to FlyEnv itself, including dedicated management panels and specialized tools.

For example, you might start with PHP, Nginx and MySQL. Later, you could add Node.js and Redis for a new application, or install Kafka, OpenSearch or AI Memory when your work calls for them.

Plugins can be managed from the official catalog or trusted third-party sources. Installing and updating plugins requires an active FlyEnv license. Check the individual plugin pages for requirements and platform support.

**Broad in capability. Focused in experience.**

You can keep a small everyday workspace without giving up the ability to expand it later.

## A Real Development Workflow {#the-real-power-when-everything-works-together}

Consider a Laravel application with a Vue frontend. Its local environment might look like this:

| Component | Role in the project |
| --- | --- |
| PHP 8.4 | Backend runtime |
| Node.js | Frontend development and build tools |
| Nginx and PHP-FPM | Serve the PHP application |
| MySQL | Application database |
| Redis | Caching and queues |
| Mailpit | Local email testing |
| `https://myapp.test` | Local application URL with HTTPS |

This is an illustrative configuration. Choose versions and services that match your own project.

With FlyEnv, the workflow is straightforward:

1. Install the required software versions.
2. Configure the project's PHP and Node.js environments.
3. Prepare the database and update the application's environment configuration.
4. Create a local site with a custom domain and HTTPS.
5. Organize the managed services into a Startup Group.
6. Run the application's setup and development commands as required by the project.

Once configured, the service group can be reused whenever you return to the project. You can access its local site, manage its dependencies and inspect service logs from the same workspace.

The goal is not to eliminate every framework-specific setup command. It is to make the surrounding development environment easier to prepare, manage and reuse.

Read [Run Laravel on FlyEnv](/guide/run-laravel-use-flyenv), learn about [Local Sites & HTTPS](/features/local-sites-https), or explore other [project solutions](/solutions).

### Watch FlyEnv's core features in 13 minutes {#watch-flyenv-s-core-features-in-13-minutes}

This overview demonstrates module installation, version management, service controls, Startup Groups, local sites and developer tools in FlyEnv.

<div style="position: relative; width: 100%; aspect-ratio: 16 / 9; overflow: hidden; border-radius: 8px; background: #111827;">
  <iframe src="https://www.youtube.com/embed/TA2NA0JeGdo" title="FlyEnv Feature Overview - Native Local Development Without Docker" style="position: absolute; inset: 0; width: 100%; height: 100%; border: 0;" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

[Watch on YouTube](https://www.youtube.com/watch?v=TA2NA0JeGdo) · [Explore more short demos](/demos)

## Built for the AI Era {#why-ai-changes-the-definition-of-a-local-environment}

AI coding agents need more than access to source code. To work effectively on a real project, they may need to understand its active runtimes, databases, local URLs, service state, configuration and logs.

FlyEnv extends the same local development workspace to support these workflows, without making AI a requirement for traditional development.

### AI coding CLI management

FlyEnv helps manage supported coding clients, including Claude Code, Codex, OpenCode and Kimi, alongside your development tools.

### Built-in MCP Server

The [FlyEnv MCP Server](/features/mcp-server) gives compatible agents structured access to managed environment information and selected operations. Available tools and approval settings determine what an agent can inspect or change.

This makes it possible for an agent to help prepare an environment, inspect a service or troubleshoot a local application instead of stopping at writing code.

### Shared AI Memory

The optional [AI Memory plugin](/features/ai-memory) gives connected agents a persistent local place to save and retrieve useful knowledge across sessions. Store development preferences, project decisions, setup procedures and reusable fixes, with global and project memories kept in separate scopes.

An agent can retrieve knowledge saved by another connected client when both use the appropriate memory collection. Actual saving and retrieval depend on the client's instructions and tool calls.

**AI writes your code. FlyEnv helps it run your stack.**

For setup instructions, read the [FlyEnv AI Workspace & MCP Guide](/guide/ai-coding-workspace-mcp).

## How FlyEnv Compares with Other Tools {#how-flyenv-differs-from-docker-and-xampp-style-stacks}

FlyEnv focuses on an extensible native development workflow rather than a single framework, a predefined software bundle or a container-first setup.

| Development model | Main focus |
| --- | --- |
| Traditional bundled stacks | Getting a local web stack running with a familiar set of components |
| Container-based environments | Isolated, reproducible container environments and deployment workflows |
| FlyEnv | Managing project runtimes, local services, websites and development tools in one native workspace |

If you currently use XAMPP, Laragon, MAMP, Laravel Herd or ServBay, FlyEnv offers another way to organize and extend your local environment as your projects change.

FlyEnv can also be used alongside Docker. Native local services are convenient for many everyday tasks; containers remain valuable when you need container isolation, reproducible images or deployment parity.

Explore the [Compare pages](/compare/) or read [FlyEnv vs Docker & XAMPP](/guide/flyenv-vs-docker-xampp) for a more detailed explanation.

## Open Source and Flexible Licensing {#built-and-driven-by-its-community}

FlyEnv is developed in the open. Community requests, bug reports, translations and pull requests help shape the product and expand the range of workflows it supports.

You can inspect the [source code on GitHub](https://github.com/xpf0000/FlyEnv), [request a feature](https://github.com/xpf0000/FlyEnv/issues) or [contribute a pull request](https://github.com/xpf0000/FlyEnv/pulls).

Core local development capabilities are available for free. A paid license removes applicable free-version limits and unlocks licensed features. FlyEnv offers a one-time licensing model and ways to earn a license through qualifying community contributions or content sharing.

See the [License page](/license) for current terms and available options.

## Frequently Asked Questions

### Is FlyEnv only for PHP developers?

No. PHP is one of many supported runtimes. FlyEnv also supports development workflows involving Node.js, Python, Java, Go and other languages, along with databases and local services.

### Do I need Docker to use FlyEnv?

No. FlyEnv's native services do not require Docker. You can still use Docker alongside FlyEnv for projects that need containers.

### Do I have to install every supported tool?

No. Install what you need and add more when your projects require it. Optional plugins let you extend the workspace further.

### Can different projects use different runtime versions?

Yes, for supported languages and workflows. You can install multiple versions and configure project-level runtime selection. See the [runtime guide](/guide/project-level-runtime-environment) for details.

### Can I use FlyEnv without AI coding tools?

Yes. AI coding clients, MCP integrations and AI Memory are optional capabilities. FlyEnv can be used purely as a local development environment.

### Is FlyEnv free and open source?

FlyEnv is open source and provides free core development capabilities. Some tools and higher usage limits require a license. The [License page](/license) explains the current policy.

## Getting Started {#next-steps}

Choose the next step that matches what you want to do:

| I want to… | Where to go |
| --- | --- |
| Install FlyEnv and set up my first environment | [Download](/download) and [Quick Start](/guide/getting-started) |
| Check whether my tools are supported | [Features](/features) |
| Run an existing application | [Solutions](/solutions) |
| See the product in action | [Demos](/demos) |
| Switch from another development environment | [Compare](/compare/) |
| Extend my workspace | [Plugin Market](/features/plugin-market) |
| Connect an AI coding agent | [AI Workspace & MCP Guide](/guide/ai-coding-workspace-mcp) |

Start with one project and the tools it needs. You can extend your FlyEnv workspace as your development workflow evolves.
