---
layout: doc
titleTemplate: false
title: 'Python Version Manager and Project Runtimes | FlyEnv'
description: 'Install and switch Python versions, bind a runtime to each project, and scaffold FastAPI or Django projects in FlyEnv.'
head:
  - - meta
    - name: description
      content: 'Install and switch Python versions, bind a runtime to each project, and scaffold FastAPI or Django projects in FlyEnv.'
  - - meta
    - property: og:title
      content: 'Python Version Manager and Project Runtimes | FlyEnv'
  - - meta
    - property: og:description
      content: 'Install and switch Python versions, bind a runtime to each project, and scaffold FastAPI or Django projects in FlyEnv.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://www.flyenv.com/features/python
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://www.flyenv.com/features/python
---

# Local Python Development with FlyEnv

FlyEnv's Python module combines version management with a project runtime workflow: install the interpreters you need, decide which one your terminal resolves to, and bind a specific Python to each project. When an app should stay running, FlyEnv can run it as a managed project service with its own port and environment variables, and built-in templates scaffold common Python frameworks in one step.

![FlyEnv Python module overview with projects, service and version manager tabs](https://oss.macphpstudy.com/image/features/python-1.webp)

## Python version management

Install and manage multiple Python versions side by side from **Python → Version Manager**. FlyEnv discovers interpreters from several sources, so versions you already have appear next to versions it manages.

- **macOS:** versions installed through Homebrew and MacPorts are detected, and FlyEnv also auto-scans the MacPorts framework directory (`/opt/local/Library/Frameworks/Python.framework/Versions`) for interpreters installed there.
- **Linux:** versions installed through Homebrew are detected and managed.
- **Windows:** FlyEnv downloads official Python installer packages from its online list, extracts and installs them into the app directory, and bootstraps pip automatically, so a fresh install is ready to use.
- **Custom directories:** point FlyEnv at any directory containing your own Python build to list it next to the managed versions.

![Python Version Manager listing installed and available versions](https://oss.macphpstudy.com/image/features/python-2.webp)

## Command-line version switching

The **Service** tab controls which Python version your terminal commands resolve to. Despite the name, this tab is about version and PATH management, not long-running service processes — the Python module itself does not run a background service.

- **PATH switching:** select the version whose bin directory FlyEnv places on your `PATH`, so `python` and `pip` resolve to it in new terminals.
- **Alias and remark:** give each installation a short alias and note, so similar builds stay distinguishable in the version list.

![Python Service tab managing versions and PATH entries](https://oss.macphpstudy.com/image/features/python-3.webp)

## Project-level Python runtimes

Different projects often need different Python versions. In **Python → Projects**, register each project folder and bind it to its own interpreter.

- **Per-project runtime:** the selected Python is stored in a `.flyenv` file inside the project directory, so terminals and editors launched from FlyEnv load the right environment automatically. The [project-level runtime environment guide](/guide/project-level-runtime-environment) explains how the shell integration works.
- **Run as service:** turn on **Run as service** in the project editor when the app should stay running. Configure the start command, a TCP port, and environment variables directly or through an env file; FlyEnv shows start and stop controls in the project list alongside the app's output logs.
- **Open in tools:** jump from a project row into a terminal or an IDE with the project environment loaded, including **Open in PyCharm**.

For a full walkthrough of the project-service model across Python, Node.js and Go, see [Deploy Node.js, Python & Go Without Docker](/guide/deploy-nodejs-python-go-without-docker).

![Python projects list with per-project interpreter binding](https://oss.macphpstudy.com/image/features/python-4.webp)

## New project templates

**Python → New Project** scaffolds common Python applications without leaving the app. FlyEnv runs the framework's creation command in its embedded terminal with per-OS pip or uv commands, so you see the real output while the project is created.

Supported templates: FastAPI, Django, Flask, Streamlit, Masonite, uv, Wagtail, Sanic, Litestar, Mezzanine and PDM.

![New Python project dialog with framework template selection](https://oss.macphpstudy.com/image/features/python-5.webp)

## Compatibility Notes

FlyEnv manages the local Python runtime selection and project process entry; it does not guarantee that every Python version, framework template or third-party package is available on every operating system. Package installation and dependency management remain the project's responsibility. Verify your project's requirements against the installed interpreter, and treat the [Download page](/download) and current release notes as the source for supported packages.
