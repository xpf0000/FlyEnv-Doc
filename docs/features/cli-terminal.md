---
layout: doc
titleTemplate: false
title: 'Terminal and Shell Integration | FlyEnv'
description: 'FlyEnv meets your terminal: shell hooks for project environments, open-in-terminal actions and embedded terminals.'
head:
  - - meta
    - name: description
      content: 'FlyEnv meets your terminal: shell hooks for project environments, open-in-terminal actions and embedded terminals.'
  - - meta
    - property: og:title
      content: 'Terminal and Shell Integration | FlyEnv'
  - - meta
    - property: og:description
      content: 'FlyEnv meets your terminal: shell hooks for project environments, open-in-terminal actions and embedded terminals.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://www.flyenv.com/features/cli-terminal
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://www.flyenv.com/features/cli-terminal
---

# Terminal Integration in FlyEnv

FlyEnv does not ship its own terminal app — instead it wires itself into the terminals you already use. A shell hook loads the right project environment when you `cd` into a project, services and projects can be launched in a real terminal window with one click, long-running installs run in embedded xterm terminals inside the app, and a Tools-page utility edits system environment variables directly.

![FlyEnv project list with bound runtime versions and terminal actions](https://oss.macphpstudy.com/image/features/cli-terminal-1.webp)

## Shell hook and PATH integration

FlyEnv installs a small shell hook so your everyday terminal picks up project environments automatically. On macOS and Linux the helper script `flyenv.sh` is sourced from `~/.zshrc` or `~/.bashrc`; on Windows, FlyEnv integrates with the PowerShell profile instead, covering both the classic Windows PowerShell and the cross-platform `pwsh` editions.

- **Directory-aware activation:** the hook reacts to directory changes. When you enter a project folder that FlyEnv manages, it sources that project's `.flyenv` file; directories outside FlyEnv's synced whitelist are left untouched.
- **`.flyenv` environment files:** each registered project gets a `.flyenv` file in its root that prepends the bound runtime's bin directories to `PATH` — `export PATH="..."` syntax on macOS and Linux, `$env:PATH = ...` on Windows. Every line is tagged with the project ID, so FlyEnv can rewrite the file idempotently whenever you change the binding. See [Per-Project Runtime Environments](/features/per-project-runtimes) for how bindings are created.
- **PATH control per version:** from a language module's version table you decide which installed version occupies `PATH`, and the table marks whether the current entry was placed there by FlyEnv or by another tool.
- **Step-by-step PATH setup:** the [system PATH environment guide](/guide/setup-system-path-environment) walks through the whole flow with screenshots.

![Version table with PATH toggles showing entries set by FlyEnv](https://oss.macphpstudy.com/image/features/cli-terminal-2.webp)

## Open in Terminal

Sometimes a process belongs in a real terminal window — to watch its output, answer its prompts, or keep it alive after FlyEnv closes. Projects and services can be started exactly that way.

- **Projects:** enable the run-in-terminal option on a language project and its run command or run file opens in a system terminal window, with the project directory as the working directory and the project's environment applied.
- **Platform-native launching:** macOS drives Terminal.app through AppleScript, Linux launches through a bundled helper script, and Windows spawns a PowerShell window running an inline script — the same action, three native implementations.
- **Custom modules and elevated starts:** user-defined service modules offer the same terminal launch, and items that need sudo can fall back to opening the command in a terminal where the system password prompt works normally.

## Embedded xterm terminals

For one-off, interactive workloads FlyEnv embeds xterm-based terminal sessions directly in its own window, so you see the genuine command output without leaving the app.

- **One-click installs:** runtimes and tools bootstrap through their official installers in an embedded terminal — rustup for Rust, GVM for Go, Podman via Homebrew on macOS and Linux, and the AI command-line tools' vendor scripts with FlyEnv's proxy environment injected.
- **Package operations:** building the PostgreSQL pgvector extension, pulling and running Ollama models, or installing n8n through npm all stream their real output into the embedded view.
- **Command palettes:** gateway-style modules such as OpenClaw and Hermes expose categorized command palettes whose entries execute in the embedded terminal, pre-filling commands that need arguments.
- **Podman operations:** container exec sessions and image or container actions open in a dedicated embedded terminal dialog.

![Embedded xterm terminal running an install script inside FlyEnv](https://oss.macphpstudy.com/image/features/cli-terminal-3.webp)

## System environment variables tool

The Tools page includes a system environment variable editor, so the settings that normally live behind OS dialogs are reachable from the same window as your runtimes.

- **View and manage PATH:** inspect the directories on your `PATH` and adjust them without opening the system control panels — the companion workflow to the version-table toggles described above.
- **Beyond PATH:** the editor works with system environment variables in general, not only the path list, which is useful when a toolchain expects variables such as `CARGO_HOME` or `JAVA_HOME` to be present.
- **Pairs with the shell hook:** variables you set here apply system-wide, while `.flyenv` files and the shell hook handle the per-project layer on top.

![System environment variables editor on the FlyEnv Tools page](https://oss.macphpstudy.com/image/features/cli-terminal-4.webp)

## Compatibility Notes

Terminal integration in FlyEnv is a set of capabilities spread across the app rather than a single standalone terminal module. The shell hook is installed for zsh and bash on macOS and Linux through the shell's rc files; on Windows the equivalent integration targets the PowerShell profile in both Windows PowerShell and `pwsh` editions, and other shells are not hooked. Automatic `.flyenv` loading applies only to project directories registered and whitelisted by FlyEnv. The terminal window used by open-in-terminal actions is the platform's own — Terminal.app on macOS, a terminal helper script on Linux, PowerShell on Windows — so its appearance and behavior follow the OS, not FlyEnv. Embedded xterm sessions exist for the specific install, run and exec tasks described above and are not a general-purpose shell. Treat the [Download page](/download) and the in-app behavior of your platform as the source of truth for what is available.
