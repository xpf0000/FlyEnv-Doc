---
layout: doc
titleTemplate: false
title: 'Rust Toolchain Manager for Local Development | FlyEnv'
description: 'Install Rust toolchains, switch the active cargo and rustc with rustup or PATH, and run Rust projects locally.'
head:
  - - meta
    - name: description
      content: 'Install Rust toolchains, switch the active cargo and rustc with rustup or PATH, and run Rust projects locally.'
  - - meta
    - property: og:title
      content: 'Rust Toolchain Manager for Local Development | FlyEnv'
  - - meta
    - property: og:description
      content: 'Install Rust toolchains, switch the active cargo and rustc with rustup or PATH, and run Rust projects locally.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://www.flyenv.com/features/rust
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://www.flyenv.com/features/rust
---

# Local Rust Development with FlyEnv

FlyEnv's Rust module keeps local Rust development in one place: install Rust toolchains side by side, manage rustup toolchains and target platforms, decide which toolchain your terminal `cargo` and `rustc` commands resolve to, and bind each project to its own toolchain. The module has four tabs — Rust Projects, Service, Version Manager and Rustup — covering installation, PATH control, rustup integration and project runtimes.

![FlyEnv Rust module overview](https://oss.macphpstudy.com/image/features/rust-1.webp)

## Rust toolchain management

Install Rust toolchains from **Rust → Version Manager** and keep several of them available at once.

- **macOS:** install from a Static online list of standalone `.tar.xz` installers or from Homebrew (the `rust` formula); the MacPorts source is not offered for Rust.
- **Linux:** install from the Static online list or Homebrew.
- **Windows:** install from the Static online list.
- **rustup toolchains:** FlyEnv auto-discovers toolchains installed by rustup under `RUSTUP_HOME` / `~/.rustup/toolchains`, alongside toolchains in FlyEnv's own app directory, so rustup-managed and FlyEnv-managed installs appear in one list.
- **Custom directories:** point FlyEnv at any directory containing your own Rust toolchain and it appears next to the managed versions.

The dedicated **Rustup** tab detects an existing rustup installation (honoring `CARGO_HOME` and `RUSTUP_HOME`) or offers a one-click rustup install in an embedded terminal. From there you can install, set the default, or remove rustup toolchains, and add or remove compilation target platforms.

![Rust Version Manager and rustup toolchain management](https://oss.macphpstudy.com/image/features/rust-2.webp)

## Command-line version switching

The **Service** tab is, despite its name, a version and PATH management table rather than a running service — Rust has no daemon process inside FlyEnv.

- **Terminal version switching:** choose which installed toolchain the terminal `cargo` and `rustc` commands resolve to. FlyEnv adds or removes the toolchain's bin directory in your `PATH` and marks whether the current PATH entry was set by FlyEnv or by another tool.
- **Per-version alias and remark:** give each toolchain a short alias and note so similar builds stay distinguishable in the list.
- **Housekeeping:** the table shows each toolchain's install path and lets you delete versions you no longer need.

## Project-level Rust toolchains

In **Rust → Projects**, register each project folder and bind it to a specific Rust toolchain instead of relying on whichever version happens to be in PATH.

- **Per-project toolchain:** the version choice is stored in a `.flyenv` file inside the project directory, so terminals and editors launched from FlyEnv pick up the right Rust automatically. See the [project-level runtime environment guide](/guide/project-level-runtime-environment) for how the mechanism works.
- **Run as service:** optionally run a project directly from FlyEnv with a custom start command, a TCP port exposed as a `http://127.0.0.1:<port>` link, environment variables set inline or from a file, and a sudo flag on macOS and Linux. The sidebar switch starts or stops all service-enabled Rust projects at once.
- **Open-in tools:** jump from a project row into the system terminal or open the project in RustRover with its environment loaded.

![Rust Projects list with per-project toolchain binding](https://oss.macphpstudy.com/image/features/rust-3.webp)

## Compatibility Notes

FlyEnv manages Rust toolchain installation, rustup integration, PATH switching and project runtimes; it does not provide module-level config file editors or log viewers beyond what each Rust toolchain itself offers. Available install sources differ per platform, so treat the [Download page](/download) and current release notes as the source for supported packages.
