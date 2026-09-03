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

FlyEnv's Deno module is deliberately focused: it installs Deno versions, decides which one your terminal `deno` command resolves to, and binds each project to its own runtime. The module has three tabs — Projects, Service and Version Manager — covering version installation, PATH control and project runtimes, with no configuration files or log viewers to manage.

![FlyEnv Deno module overview](https://oss.macphpstudy.com/image/features/deno-1.webp)

## Deno version management

Install Deno versions side by side from **Deno → Version Manager** and keep them all available at once.

- **Static builds:** an online list of Deno packages is available on every platform; FlyEnv downloads each version into its own app directory (`deno/<version>`) and removes the macOS quarantine attribute automatically.
- **Homebrew (macOS and Linux):** install the `deno` formula. Homebrew publishes only this unversioned formula, so there are no `deno@x.y` versioned variants to pick from.
- **Custom directories:** point FlyEnv at any directory containing your own Deno build; it detects the version by running `deno --version` and lists the binary next to the managed versions.

![Deno Version Manager with Static and Homebrew install sources](https://oss.macphpstudy.com/image/features/deno-2.webp)

## Command-line version switching

The **Service** tab is, despite its name, a version and PATH management table rather than a running service — Deno has no daemon process inside FlyEnv.

- **Terminal version switching:** choose which installed version the terminal `deno` command resolves to. FlyEnv adds or removes the version's bin directory in your `PATH` and marks whether the current PATH entry was set by FlyEnv or by another tool.
- **Per-version alias and remark:** give each installation a short alias and note so similar builds stay distinguishable in the list.
- **Housekeeping:** the table shows each version's install path and lets you delete versions you no longer need.

## Project-level Deno runtimes

In **Deno → Projects**, register each project folder and bind it to a specific Deno version instead of relying on whichever version happens to be in PATH.

- **Per-project runtime:** the version choice is stored in a `.flyenv` file inside the project directory, so terminals and editors launched from FlyEnv pick up the right Deno automatically. See the [project-level runtime environment guide](/guide/project-level-runtime-environment) for how the mechanism works.
- **Run as service:** optionally run a project directly from FlyEnv with a custom start command; the project link is a plain `http://127.0.0.1:<port>` address, with no reverse-proxy or site integration.
- **Open-in tools:** jump from a project row into a terminal or editor with the project environment loaded.

![Deno Projects list with per-project Deno version binding](https://oss.macphpstudy.com/image/features/deno-3.webp)

## Compatibility Notes

FlyEnv manages Deno version installation, PATH switching and project runtimes; it does not bundle Deno tooling beyond what each Deno build itself provides, and the module has no config editor, log viewer or admin panel. Available install sources differ per platform — Homebrew is macOS and Linux only, and Windows uses Static builds plus custom directories — so treat the [Download page](/download) and current release notes as the source for supported packages.
