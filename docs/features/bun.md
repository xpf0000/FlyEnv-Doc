---
layout: doc
titleTemplate: false
title: 'Bun Version Manager and Project Runtimes | FlyEnv'
description: 'Install Bun versions from static builds, switch the active binary, and run Bun projects as managed services.'
head:
  - - meta
    - name: description
      content: 'Install Bun versions from static builds, switch the active binary, and run Bun projects as managed services.'
  - - meta
    - property: og:title
      content: 'Bun Version Manager and Project Runtimes | FlyEnv'
  - - meta
    - property: og:description
      content: 'Install Bun versions from static builds, switch the active binary, and run Bun projects as managed services.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://www.flyenv.com/features/bun
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://www.flyenv.com/features/bun
---

# Local Bun Development with FlyEnv

Bun is a JavaScript and TypeScript runtime that also bundles a package manager, bundler and test runner in a single executable. It is used as an alternative to Node.js for servers, scripts and frontend tooling. FlyEnv's Bun module covers the essentials of local Bun work in one place: install Bun versions from static builds, decide which one your terminal `bun` command resolves to, and bind each project to its own runtime. The module has three tabs — Projects, Service and Version Manager — focused on version installation, PATH control and project runtimes.

![FlyEnv Bun module overview](https://oss.macphpstudy.com/image/features/bun-1.webp)

## Bun version management

Install Bun versions side by side from **Bun → Version Manager** and keep them all available at once.

- **Static builds only:** Bun is installed from a Static online list on every platform — macOS, Linux and Windows alike. The Homebrew and MacPorts sources offered for other runtimes are not available for Bun.
- **Custom directories:** point FlyEnv at any directory containing your own Bun build and it appears in the list next to the managed versions.
- **Managed install location:** versions are unpacked into FlyEnv's app directory under `bun/<version>/`, and each installation is detected through its real `bun --version` output.
- **Post-install setup:** after installing a version, FlyEnv runs `bun completions` so shell completion works, and on macOS it clears the quarantine attribute from the downloaded binary.

![Bun Version Manager with the Static online list](https://oss.macphpstudy.com/image/features/bun-2.webp)

## Command-line version switching

Nothing runs as a service here: FlyEnv has no Bun daemon, so the **Service** tab is actually an installed-versions table focused on PATH management.

- **Terminal version switching:** choose which installed version the terminal `bun` command resolves to. FlyEnv handles your `PATH` for you — adding the version's bin directory when you select it, removing it when you switch away — and shows whether the active PATH entry was set by FlyEnv or another tool.
- **Per-version alias and remark:** give each installation its own short alias and note, so similar builds stay distinguishable in the list.
- **Housekeeping:** every row shows where the version is installed, and versions you no longer need can be removed from the table.

## Project-level Bun runtimes

In **Bun → Projects**, register each project folder and bind it to a specific Bun version instead of relying on whichever version happens to be in PATH.

- **Per-project runtime:** the version choice is stored in a `.flyenv` file inside the project directory, so terminals and editors launched from FlyEnv pick up the right Bun automatically. See the [project-level runtime environment guide](/guide/project-level-runtime-environment) for how the mechanism works.
- **Run as service:** optionally run a project directly from FlyEnv with a custom start command or run file, a TCP port exposed as a `http://127.0.0.1:<port>` link, environment variables set inline or from a file, and a sudo flag on macOS and Linux.
- **Open-in tools:** jump from a project row into the system terminal or an editor with the project environment loaded.

![Bun Projects list with per-project Bun version binding](https://oss.macphpstudy.com/image/features/bun-3.webp)

## Compatibility Notes

FlyEnv manages Bun version installation, PATH switching and project runtimes; the Bun module itself has no module-level configuration files, log viewers or admin panel beyond what the Bun binary provides. Installations come from Static builds on every platform, so treat the [Download page](/download) and current release notes as the source for supported packages.
