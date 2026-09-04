---
layout: doc
titleTemplate: false
title: 'Ruby Version Manager for Local Development | FlyEnv'
description: 'Install and switch Ruby versions, set the terminal ruby binary, and run Ruby projects with per-project runtimes.'
head:
  - - meta
    - name: description
      content: 'Install and switch Ruby versions, set the terminal ruby binary, and run Ruby projects with per-project runtimes.'
  - - meta
    - property: og:title
      content: 'Ruby Version Manager for Local Development | FlyEnv'
  - - meta
    - property: og:description
      content: 'Install and switch Ruby versions, set the terminal ruby binary, and run Ruby projects with per-project runtimes.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://www.flyenv.com/features/ruby
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://www.flyenv.com/features/ruby
---

# Local Ruby Development with FlyEnv

Ruby is a dynamic, object-oriented programming language known for web development, most notably through the Ruby on Rails framework. FlyEnv's Ruby module keeps local Ruby development in one place: install multiple Ruby versions, decide which one your terminal `ruby` command resolves to, and bind each project to its own runtime. The module has three tabs — Ruby Projects, Service and Version Manager — focused on version installation, PATH control and project runtimes.

![FlyEnv Ruby module overview](https://oss.macphpstudy.com/image/features/ruby-1.webp)

## Ruby version management

Install Ruby versions side by side from **Ruby → Version Manager** and keep them all available at once.

- **macOS:** install from Homebrew (the `ruby` formula and versioned `ruby@x.y` formulas) or MacPorts; FlyEnv also auto-scans the MacPorts library directory for existing Ruby installations.
- **Linux:** install from Homebrew.
- **Windows:** install from a Static online list of RubyInstaller packages.
- **Custom directories:** point FlyEnv at any directory containing your own Ruby build and it appears in the list next to the managed versions.

![Ruby Version Manager with Homebrew and MacPorts sources](https://oss.macphpstudy.com/image/features/ruby-2.webp)

## Command-line version switching

Despite the label, the **Service** tab does not run a service — Ruby is an interpreter, so there is no daemon for FlyEnv to manage. The tab is an installed-versions table whose job is PATH control.

- **Terminal version switching:** selecting a version here decides which installation the terminal `ruby` command resolves to; FlyEnv adds that version's bin directory to your `PATH` (or removes it again) and flags whether the active PATH entry came from FlyEnv or from another tool. The [system PATH environment guide](/guide/setup-system-path-environment) explains this mechanism in detail.
- **Per-version alias and remark:** every installation can carry a short alias plus a note, so near-identical builds remain easy to tell apart.
- **Housekeeping:** each row exposes the version's install path and offers a delete action for versions you no longer need.

## Project-level Ruby runtimes

In **Ruby → Projects**, register each project folder and bind it to a specific Ruby version instead of relying on whichever version happens to be in PATH.

- **Per-project runtime:** the version choice is stored in a `.flyenv` file inside the project directory, so terminals and editors launched from FlyEnv pick up the right Ruby automatically. See the [project-level runtime environment guide](/guide/project-level-runtime-environment) and the [Per-Project Runtimes feature](/features/per-project-runtimes) for how the mechanism works, and the [video demos](/demos) for a walkthrough of project runtimes in action.
- **Run as service:** optionally run a project directly from FlyEnv with a custom start command, a TCP port exposed as a `http://127.0.0.1:<port>` link, environment variables set inline or from a file, and a sudo flag on macOS and Linux. The sidebar switch starts or stops all service-enabled Ruby projects at once.
- **Open-in tools:** jump from a project row into the system terminal or open the project in RubyMine with its environment loaded.

![Ruby Projects list with per-project Ruby version binding](https://oss.macphpstudy.com/image/features/ruby-3.webp)

## Compatibility Notes

FlyEnv manages Ruby version installation, PATH switching and project runtimes; it does not bundle gem, bundler or framework tooling beyond what each Ruby build itself provides. Available install sources differ per platform — there is no Static source on macOS and Linux — so treat the [Download page](/download) and current release notes as the source for supported packages.
