---
layout: doc
titleTemplate: false
title: 'Deno Version Manager and Project Runtimes | FlyEnv'
description: 'Install Deno versions from static builds or Homebrew, switch the active binary, and run Deno projects locally.'
head:
  - - meta
    - name: description
      content: 'Install Deno versions from static builds or Homebrew, switch the active binary, and run Deno projects locally.'
  - - meta
    - property: og:title
      content: 'Deno Version Manager and Project Runtimes | FlyEnv'
  - - meta
    - property: og:description
      content: 'Install Deno versions from static builds or Homebrew, switch the active binary, and run Deno projects locally.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://www.flyenv.com/features/deno
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://www.flyenv.com/features/deno
---

# Local Deno Development with FlyEnv

Deno is a runtime for JavaScript and TypeScript built on V8, created by the original author of Node.js, with built-in TypeScript support and a default-deny permission model. It is used for servers, scripts and tooling where a single self-contained binary is convenient. FlyEnv's Deno module is deliberately focused: it installs Deno versions, decides which one your terminal `deno` command resolves to, and binds each project to its own runtime. The module has three tabs — Projects, Service and Version Manager — covering version installation, PATH control and project runtimes, with no configuration files or log viewers to manage.

![FlyEnv Deno module overview](https://oss.macphpstudy.com/image/features/deno-1.webp)

## Deno version management

Install Deno versions side by side from **Deno → Version Manager** and keep them all available at once.

- **Static builds:** an online list of Deno packages is available on every platform; FlyEnv downloads each version into its own app directory (`deno/<version>`) and removes the macOS quarantine attribute automatically.
- **Homebrew (macOS and Linux):** install the `deno` formula. Homebrew publishes only this unversioned formula, so there are no `deno@x.y` versioned variants to pick from.
- **Custom directories:** point FlyEnv at any directory containing your own Deno build; it detects the version by running `deno --version` and lists the binary next to the managed versions.

![Deno Version Manager with Static and Homebrew install sources](https://oss.macphpstudy.com/image/features/deno-2.webp)

## Command-line version switching

The **Service** tab starts nothing — Deno is a runtime binary rather than a daemon, so what this tab actually shows is a version and PATH management table.

- **Terminal version switching:** pick the installed version your terminal `deno` command should resolve to. FlyEnv adds or removes the version's bin directory in your `PATH` accordingly and indicates whether the current PATH entry belongs to FlyEnv or to another tool.
- **Per-version alias and remark:** each installation accepts a short alias and a note, keeping similar builds distinguishable in the list.
- **Housekeeping:** the table surfaces each version's install path and lets you delete versions you no longer need.

## Project-level Deno runtimes

In **Deno → Projects**, register each project folder and bind it to a specific Deno version instead of relying on whichever version happens to be in PATH.

- **Per-project runtime:** the version choice is stored in a `.flyenv` file inside the project directory, so terminals and editors launched from FlyEnv pick up the right Deno automatically. See the [project-level runtime environment guide](/guide/project-level-runtime-environment) for how the mechanism works.
- **Run as service:** optionally run a project directly from FlyEnv with a custom start command; the project link is a plain `http://127.0.0.1:<port>` address, with no reverse-proxy or site integration.
- **Open-in tools:** jump from a project row into a terminal or editor with the project environment loaded.

![Deno Projects list with per-project Deno version binding](https://oss.macphpstudy.com/image/features/deno-3.webp)

## Compatibility Notes

FlyEnv manages Deno version installation, PATH switching and project runtimes; it does not bundle Deno tooling beyond what each Deno build itself provides, and the module has no config editor, log viewer or admin panel. Available install sources differ per platform — Homebrew is macOS and Linux only, and Windows uses Static builds plus custom directories — so treat the [Download page](/download) and current release notes as the source for supported packages.
