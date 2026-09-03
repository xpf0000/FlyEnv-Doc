---
layout: doc
titleTemplate: false
title: 'Gradle Version Manager with SDKMAN Support | FlyEnv'
description: 'Install and switch Gradle versions from static builds, Homebrew, MacPorts or SDKMAN, and set the terminal default.'
head:
  - - meta
    - name: description
      content: 'Install and switch Gradle versions from static builds, Homebrew, MacPorts or SDKMAN, and set the terminal default.'
  - - meta
    - property: og:title
      content: 'Gradle Version Manager with SDKMAN Support | FlyEnv'
  - - meta
    - property: og:description
      content: 'Install and switch Gradle versions from static builds, Homebrew, MacPorts or SDKMAN, and set the terminal default.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://www.flyenv.com/features/gradle
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://www.flyenv.com/features/gradle
---

# Gradle Version Management with FlyEnv

FlyEnv keeps multiple Gradle versions on one machine and switches the one your terminal uses. The Gradle module focuses on two things: installing versions from several sources, and controlling which `gradle` binary your shell resolves to. It runs no background service — there is nothing to start or stop.

![FlyEnv Gradle module overview](https://oss.macphpstudy.com/image/features/gradle-1.webp)

## Gradle version management

Open **Gradle → Version Manager** to install and manage Gradle distributions side by side.

- **Multiple install sources:** Static builds on macOS, Linux and Windows, Homebrew and MacPorts on macOS, and SDKMAN on macOS and Linux — pick whichever source already manages the tools on your machine.
- **SDKMAN discovery:** FlyEnv automatically scans `~/.sdkman/candidates/gradle`, so versions you installed with SDKMAN appear in the list next to FlyEnv-managed ones.
- **Custom versions:** point FlyEnv at any directory that contains your own Gradle distribution; it detects the `bin/gradle` binary (`gradle.bat` on Windows) and lists it alongside the managed versions.
- **Clean installs:** static builds are unpacked into FlyEnv's own app directory as `gradle/<version>/`, verified with `gradle --version`, and macOS quarantine attributes are removed automatically after unpacking.

![Gradle Version Manager with Static, Homebrew, MacPorts and SDKMAN sources](https://oss.macphpstudy.com/image/features/gradle-2.webp)

## Command-line version switching

The **Service** tab is an installed-versions table — despite the name, Gradle is not a running service, so this tab manages versions and PATH instead of processes.

- **Terminal default version:** set which installed version your terminal `gradle` command resolves to. FlyEnv adds or removes the version's `bin` directory in your `PATH` and marks whether the current entry was set by FlyEnv or by another tool.
- **Per-version alias:** give each installation a short alias so similar builds stay distinguishable in the list.
- **Per-version remark:** attach a free-form note to any version to record what it is for.
- **Easy removal:** delete versions you no longer need directly from the table.

Gradle needs a Java runtime on `PATH`; the [Java environment setup guide](/guide/set-up-java-development-environment) covers installing a JDK with FlyEnv. Get the app itself from the [Download page](/download).

## Compatibility Notes

The Gradle page covers version and PATH management only — it has no project binding of its own. Per-project runtime binding is provided by the language modules; see the [project-level runtime environment guide](/guide/project-level-runtime-environment). Available install sources differ by operating system, so treat the Version Manager in your installed FlyEnv build as the definitive list.
