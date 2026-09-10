---
layout: doc
titleTemplate: false
title: 'Zig Version Manager for Local Development | FlyEnv'
description: 'Install and switch Zig versions from static builds, Homebrew or MacPorts, and scope one to each project.'
head:
  - - meta
    - name: description
      content: 'Install and switch Zig versions from static builds, Homebrew or MacPorts, and scope one to each project.'
  - - meta
    - property: og:title
      content: 'Zig Version Manager for Local Development | FlyEnv'
  - - meta
    - property: og:description
      content: 'Install and switch Zig versions from static builds, Homebrew or MacPorts, and scope one to each project.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/features/zig
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/features/zig
---

<script setup>
import FeatureRelatedLinks from '../components/FeatureRelatedLinks.vue'
</script>

# Local Zig Development with FlyEnv

Zig is a general-purpose systems programming language and toolchain with manual memory management and built-in cross-compilation. It is used for system components, embedded targets and performance-sensitive tooling where C or C++ would traditionally be chosen, and it sits in the same systems-programming space as [Rust](/features/rust), which FlyEnv also manages. FlyEnv's Zig module keeps local Zig toolchains organized in one place: install multiple Zig versions side by side, decide which one your terminal `zig` command resolves to, and bind each project to its own compiler version. The module has three tabs — Projects, Service and Version Manager — focused on version installation, PATH control and project toolchains.

![FlyEnv Zig module overview](https://oss.macphpstudy.com/image/features/zig-1.webp)

## Zig version management

Install Zig versions side by side from **Zig → Version Manager** and keep them all available at once. FlyEnv detects each installation by running `zig version`, so the list always reflects real, working toolchains.

- **Static builds on every platform:** pick from an online list of Zig builds for macOS, Linux and Windows; they are unpacked into FlyEnv's own `zig/<version>` directory. On macOS, FlyEnv clears the quarantine attribute after unpacking so the binary runs without Gatekeeper prompts.
- **macOS package managers:** install through Homebrew (the `zig` formula and versioned `zig@<version>` formulas) or MacPorts alongside the Static source.
- **Custom directories:** point FlyEnv at any directory containing your own Zig build and it appears in the list next to the managed versions.

![Zig Version Manager with Static, Homebrew and MacPorts sources](https://oss.macphpstudy.com/image/features/zig-2.webp)

## Command-line version switching

The **Service** tab manages versions and PATH, not a process: Zig is a compiler toolchain, and FlyEnv runs no Zig daemon. Behind the name sits a straightforward installed-versions table.

- **Terminal version switching:** decide which installed version the terminal `zig` command resolves to. FlyEnv edits your `PATH` by adding or removing the version's directory and marks whether the current PATH entry was created by FlyEnv or by another tool — the [system PATH environment guide](/guide/setup-system-path-environment) explains the details.
- **Per-version alias and remark:** a short alias and an optional note per installation keep similar builds distinguishable in the list.
- **Housekeeping:** install paths are displayed in the table, and deleting a version you no longer need is a one-click action.

## Project-level Zig toolchains

In **Zig → Projects**, register each project folder and bind it to a specific Zig version instead of relying on whichever version happens to be in PATH.

- **Per-project toolchain:** the version choice is written to a `.flyenv` file inside the project directory, so terminals and editors launched from FlyEnv pick up the right Zig automatically. See the [project-level runtime environment guide](/guide/project-level-runtime-environment) and the [Per-Project Runtimes feature](/features/per-project-runtimes) for how the mechanism works.
- **Run as service:** optionally run a project directly from FlyEnv with a custom start command, a TCP port exposed as a `http://127.0.0.1:<port>` link, and environment variables set inline or from a file. The sidebar switch starts or stops all service-enabled Zig projects at once.

![Zig Projects list with per-project Zig version binding](https://oss.macphpstudy.com/image/features/zig-3.webp)

<FeatureRelatedLinks slug="zig" />

## Compatibility Notes

FlyEnv manages Zig version installation, PATH switching and project toolchains; it does not bundle build-system or package tooling beyond what each Zig build itself provides. Available install sources differ per platform — Homebrew and MacPorts are macOS-only sources, while Windows uses the Static online list — so treat the [Download page](/download) and current release notes as the source for supported packages.
