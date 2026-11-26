---
layout: doc
titleTemplate: false
title: 'Per-Project Runtimes and Environment Isolation | FlyEnv'
description: 'Bind each project to its own runtime version; terminals and IDEs inherit it via the .flyenv file and shell hook.'
head:
  - - meta
    - name: description
      content: 'Bind each project to its own runtime version; terminals and IDEs inherit it via the .flyenv file and shell hook.'
  - - meta
    - property: og:title
      content: 'Per-Project Runtimes and Environment Isolation | FlyEnv'
  - - meta
    - property: og:description
      content: 'Bind each project to its own runtime version; terminals and IDEs inherit it via the .flyenv file and shell hook.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/features/per-project-runtimes
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/features/per-project-runtimes
---

<script setup>
import FeatureRelatedLinks from '../components/FeatureRelatedLinks.vue'
</script>

# Per-Project Runtimes in FlyEnv

FlyEnv lets every project folder carry its own runtime version, so a legacy PHP codebase and a modern Node.js app can live side by side on the same machine — see [managing multiple Node and PHP versions](/guide/manage-multiple-node-php-versions) for the version-manager side of this. Register a project in any language module's **Projects** tab, pick the exact binary version it should use, and FlyEnv records that choice inside the project itself. From then on, terminals, editors and run commands started for that project resolve the right toolchain automatically — the step-by-step workflow is covered in the [project-level runtime environment guide](/guide/project-level-runtime-environment).

For example, bind one Node.js project to Node.js 22 and another to Node.js 24. Open each from **Projects** or enter its registered directory in a supported shell with FlyEnv’s hook enabled. Run `node -v` to see which version each project uses. [Watch the project switching demo](/demos?video=project-environment-switching).

![FlyEnv Projects tab listing registered projects with their bound runtime versions](https://oss.macphpstudy.com/image/flyenv-version-switch.webp)

## How .flyenv works

An external editor or terminal that was opened separately can keep its original environment. Use the FlyEnv project action or a supported shell that loads the project.

- **PATH prepending:** on macOS and Linux the file contains an `export PATH="<bin>:<bin>/bin:<bin>/sbin:$PATH"` line pointing at the bound runtime's directories; on Windows it uses the equivalent PowerShell `$env:PATH` assignment.
- **Tagged and idempotent:** every line FlyEnv writes is marked with a `#FlyEnv-ID-<projectId>` tag, so re-editing the project rewrites the same lines in place instead of appending duplicates.
- **Per language module:** the Projects tab is shared across the language modules — PHP, [NodeJS](/features/nodejs), [Python](/features/python), Go, Ruby, Rust, Java, .NET, Bun, Deno and more — each keeping its own project list with the bound version shown next to the project path.
- **Editable in the app:** the `.flyenv` file itself can be opened and adjusted from the project's config view when you need something beyond the default PATH entry.

![A .flyenv file written by FlyEnv with the tagged PATH export line](https://oss.macphpstudy.com/image/features/per-project-runtimes-2.webp)

## Shell hook for zsh, bash and PowerShell

The `.flyenv` file takes effect through a shell hook that FlyEnv installs into your shell startup files.

- **zsh and bash on macOS/Linux:** FlyEnv sources its helper script from `~/.zshrc` and `~/.bashrc`. The hook watches for directory changes and, when you `cd` into a registered project, sources that project's `.flyenv` file — so `php -v` or `node -v` immediately report the bound version.
- **Allowlisted directories only:** the hook activates `.flyenv` files solely for project directories that FlyEnv has registered and synced into its allow list, so a stray file elsewhere on disk is never executed.
- **PowerShell on Windows:** the same mechanism is wired into the PowerShell profile, covering both Windows PowerShell and PowerShell (pwsh) editions.

![Shell hook loading a project's .flyenv file after changing directory](https://oss.macphpstudy.com/image/features/per-project-runtimes-3.webp)

## IDE and terminal integration

Because the binding lives in the project rather than in a global setting, any tool launched against that folder inherits the correct environment.

- **Open-in actions:** each project row offers shortcuts to open the folder in a terminal or an IDE — Terminal and PowerShell, plus editors such as VSCode, PhpStorm, WebStorm, PyCharm or Sublime depending on the language module — with the project environment already applied.
- **Run as a service:** a project can optionally run directly from FlyEnv with a custom start command or run file, a chosen port (default 3000, linked as `http://127.0.0.1:<port>`), and extra environment variables supplied inline or from an env file — useful for keeping a dev server alive without a terminal window.
- **Quick edits:** double-clicking a project row opens a compact editor for the bound version, port and comment, so switching a project's runtime takes seconds.

## Per-site version selection

Each site created in [Host](/features/local-sites-https) can select which installed PHP version serves it. Multiple versions can serve different sites concurrently. macOS and Linux use separate Unix sockets, while Windows uses separate FastCGI listeners. See the [PHP feature](/features/php) for platform details.

![Host module site list showing the PHP version bound to each site](https://oss.macphpstudy.com/image/features/per-project-runtimes-4.webp)

<FeatureRelatedLinks slug="per-project-runtimes" />

## Compatibility Notes

The shell hook requires a supported login shell: zsh or bash on macOS and Linux, and PowerShell (Windows PowerShell or pwsh) on Windows; other shells are not hooked automatically. The hook only sources `.flyenv` files for directories registered in FlyEnv, and it adjusts PATH for the current shell session — it does not change your system-wide environment variables. Version binding selects among runtimes already installed or added in FlyEnv; it cannot supply a version that is not present on the machine. Per-site PHP selection applies to sites served through PHP-FPM (FastCGI on Windows); static sites and non-PHP runtimes do not use it. Platform differences — such as unix sockets on macOS/Linux versus FastCGI workers on Windows — follow the behavior of the underlying [PHP module](/features/php), and the [Download page](/download) reflects what is available for your operating system.
