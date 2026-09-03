---
layout: doc
titleTemplate: false
title: 'Go Version Manager and Project Runtimes | FlyEnv'
description: 'Install and switch Go versions with static builds, Homebrew or GVM, and run Go projects with per-project runtimes.'
head:
  - - meta
    - name: description
      content: 'Install and switch Go versions with static builds, Homebrew or GVM, and run Go projects with per-project runtimes.'
  - - meta
    - property: og:title
      content: 'Go Version Manager and Project Runtimes | FlyEnv'
  - - meta
    - property: og:description
      content: 'Install and switch Go versions with static builds, Homebrew or GVM, and run Go projects with per-project runtimes.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://www.flyenv.com/features/go
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://www.flyenv.com/features/go
---

# Local Go Development with FlyEnv

FlyEnv keeps local Go development in one app: install multiple Go versions side by side, decide which one your terminal `go` command resolves to, integrate with GVM on macOS and Linux, and bind each project to its own Go runtime. The Go module has five tabs — Go Projects, Service, Version Manager, New Project and GVM — covering version installation, PATH control, project runtimes and scaffolding.

![FlyEnv Go module overview](https://oss.macphpstudy.com/image/features/go-1.webp)

## Go version management

Install Go versions side by side from **Go → Version Manager** and keep them all available at once.

- **Static builds on every platform:** FlyEnv downloads official Go releases — `.tar.gz` archives from the go.dev release list on macOS and Linux, zip packages on Windows — and unpacks them into its own managed directory.
- **Package-manager sources:** on macOS you can also install the `go` formula from Homebrew or MacPorts; on Linux, Homebrew is available as an additional source.
- **Custom directories:** point FlyEnv at any directory containing your own Go build and it appears in the list next to the managed versions.
- **GVM discovery:** on macOS and Linux, FlyEnv automatically finds Go versions installed through GVM and lists them alongside the managed ones.

![Go Version Manager with Static, Homebrew and MacPorts sources](https://oss.macphpstudy.com/image/features/go-2.webp)

On macOS and Linux, the dedicated **GVM** tab integrates with an existing GVM installation directly: FlyEnv detects GVM in `~/.gvm` or via `GVM_ROOT`, offers a one-click GVM install in its embedded terminal when none is present, and lists the GVM-managed versions with install and use actions.

![GVM tab listing GVM-managed Go versions](https://oss.macphpstudy.com/image/features/go-3.webp)

## Command-line version switching

The name **Service** is misleading for Go: this tab never starts or stops anything, because FlyEnv runs no Go daemon. What you get is a table of installed versions with PATH management built in.

- **Terminal version switching:** pick the installed version your terminal `go` command should resolve to. FlyEnv rewrites your `PATH` by adding or removing the version's bin directory, and labels each entry so you can tell whether FlyEnv or another tool put it there.
- **Per-version alias and remark:** attach a short alias and a free-form note to any installation, which keeps similar builds distinguishable in the list.
- **Housekeeping:** install paths are shown right in the table, and versions you no longer need can be deleted from the same place.

## Project-level Go runtimes

In **Go → Projects**, register each project folder and bind it to a specific Go version instead of relying on whichever version happens to be in PATH. The [project-level runtime environment guide](/guide/project-level-runtime-environment) explains the mechanism in detail.

- **Per-project runtime:** the version choice is stored in a `.flyenv` file inside the project directory, so terminals and editors launched from FlyEnv pick up the right Go toolchain automatically.
- **Run as service:** optionally run a project directly from FlyEnv with a custom run command or run file, a project port exposed as a `http://127.0.0.1:<port>` link, environment variables set inline or from an env file, and a sudo toggle on macOS and Linux.
- **Open-in tools:** jump from a project row into the system terminal or open the project in GoLand with its environment loaded.
- **New Project templates:** scaffold a plain `go mod init` module or a project based on Gin, Echo, Fiber, Iris, GoFrame or Buffalo without leaving the app.

![Go Projects list with per-project Go version binding](https://oss.macphpstudy.com/image/features/go-4.webp)

For running these projects as persistent background services, see the guide on [deploying Node.js, Python and Go projects without Docker](/guide/deploy-nodejs-python-go-without-docker).

## Compatibility Notes

FlyEnv manages Go version installation, PATH switching and project runtimes; it does not bundle framework tooling beyond what each Go build and the Go module ecosystem itself provide. Available install sources differ per platform — the GVM tab and GVM auto-discovery exist on macOS and Linux only, while Windows uses Static builds — so treat the [Download page](/download) and current release notes as the source for supported packages.
