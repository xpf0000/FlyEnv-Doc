---
layout: doc
titleTemplate: false
title: 'CLIProxyAPI GUI: Install and Manage the Local Proxy | FlyEnv'
description: 'Install and switch CLIProxyAPI versions in FlyEnv, edit config.yaml, start the local proxy and open its upstream management panel.'
head:
  - - meta
    - name: description
      content: 'Install and switch CLIProxyAPI versions in FlyEnv, edit config.yaml, start the local proxy and open its upstream management panel.'
  - - meta
    - property: og:title
      content: 'CLIProxyAPI GUI: Install and Manage the Local Proxy | FlyEnv'
  - - meta
    - property: og:description
      content: 'Install and switch CLIProxyAPI versions in FlyEnv, edit config.yaml, start the local proxy and open its upstream management panel.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/features/cliproxyapi
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/features/cliproxyapi
---

<script setup>
import FeatureRelatedLinks from '../components/FeatureRelatedLinks.vue'
</script>

# CLIProxyAPI GUI in FlyEnv

CLIProxyAPI is an open source local proxy that puts CLI-based AI tools — such as Gemini CLI, [Claude Code](/features/claude-code) and [Codex](/features/codex), both of which FlyEnv also manages — behind standard OpenAI-, Gemini- and Claude-compatible API endpoints. It lets applications that expect a hosted model API call these CLI accounts as if they were ordinary HTTP services, with several providers unified behind one local gateway. FlyEnv runs CLIProxyAPI as a managed local AI gateway: install versions from the Version Manager, start the `cli-proxy-api` process from the sidebar or the module page, edit `config.yaml` and the backend environment file inside the app, and open the built-in management panel in your browser. Startup output is captured to per-version log files, so a failed start is easy to diagnose.

FlyEnv provides the desktop controls for installing, starting and configuring CLIProxyAPI. The browser management panel and provider integrations come from the CLIProxyAPI version you run. See the [upstream CLIProxyAPI documentation](https://help.router-for.me/) for provider setup and API behavior.

![CLIProxyAPI module overview in FlyEnv](https://oss.macphpstudy.com/image/features/cliproxyapi-1.webp)

## Version management

Install and keep several CLIProxyAPI versions side by side from **CLIProxyAPI → Version Manager**, then choose which one the service runs.

- **Static downloads:** an online list of `.zip` and `.tgz` packages linked to the project's GitHub releases, fetched for your platform and architecture.
- **Homebrew:** the `cliproxyapi` formula shows up as an install source on systems with Homebrew; MacPorts is not offered for this module.
- **Custom directories:** add any folder containing your own `cli-proxy-api` or `cliproxyapi` binary and FlyEnv lists it alongside the managed versions.
- **macOS quarantine handling:** after a static install, FlyEnv strips the quarantine attribute from the binary so it starts without Gatekeeper prompts.

![CLIProxyAPI Version Manager with static and Homebrew sources](https://oss.macphpstudy.com/image/features/cliproxyapi-2.webp)

## Service and configuration

The Service tab launches the selected version as `cli-proxy-api -config <config.yaml>`, pointing at the `config.yaml` inside FlyEnv's CLIProxyAPI directory, with environment variables loaded from `cliproxyapi.env`. Only one version runs at a time, its process id is tracked in a pid file under the same directory, and the sidebar switch — also available from the system tray — starts and stops it.

- **Config File tab:** a raw editor for `config.yaml`. New setups are seeded from a bundled template, so the file exists with working defaults before you change anything.
- **Env tab:** a raw editor for `cliproxyapi.env`, which holds the backend variables CLIProxyAPI reads at startup — `GITSTORE_*` for a git-backed store, `PGSTORE_*` for PostgreSQL, `OBJECTSTORE_*` for object storage, plus `MANAGEMENT_PASSWORD` for the management panel.

![Editing the CLIProxyAPI config.yaml in FlyEnv](https://oss.macphpstudy.com/image/features/cliproxyapi-3.webp)

## Management UI on port 8317

When CLIProxyAPI is running, open its upstream management panel from the Service tab. FlyEnv reads the port from `config.yaml` and opens `http://127.0.0.1:<port>/management.html`.

For a local-only setup, set `host: "127.0.0.1"` in `config.yaml` and keep `remote-management.allow-remote` disabled. Set a private `remote-management.secret-key` in the bundled configuration and leave `MANAGEMENT_PASSWORD` unset, since that environment variable can enable remote management. Restart the service. The bundled default port is 8317.

![Opening the CLIProxyAPI management panel from the Service tab](https://oss.macphpstudy.com/image/features/cliproxyapi-4.webp)

## Logs

The Log tab displays the captured output of each version as `cliproxyapi-<version>-start-out.log` and `cliproxyapi-<version>-start-error.log`, with a toggle between the two streams. When a version refuses to start or the management page does not respond, the error log is the first place to look.

![CLIProxyAPI start log viewer with out and error toggle](https://oss.macphpstudy.com/image/features/cliproxyapi-5.webp)

[Watch the CLIProxyAPI setup demo](/demos?video=cliproxyapi-gateway)

<FeatureRelatedLinks slug="cliproxyapi" />

## Compatibility Notes

FlyEnv manages the CLIProxyAPI binary, its launch command and the files in its module directory; gateway behavior — routing rules, provider support and model compatibility — comes from the CLIProxyAPI version you install, so check the project's GitHub releases for what a given version does. Which install sources appear depends on your platform and on whether Homebrew is present. If you also want fully self-hosted models on the same machine, the [Ollama](/features/ollama) module serves them through its own local API, and the guide on [FlyEnv working with AI assistants](/guide/flyenv-work-with-ai) covers the bigger local-AI picture. The [Download page](/download) lists current FlyEnv builds per platform, and the [demos](/demos) show the module running in practice.
