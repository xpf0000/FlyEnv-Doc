---
layout: doc
titleTemplate: false
title: 'Local ClickHouse Server with CH-UI | FlyEnv'
description: 'Run ClickHouse on macOS and Linux with managed config.xml and users.xml files and a one-click CH-UI client.'
head:
  - - meta
    - name: description
      content: 'Run ClickHouse on macOS and Linux with managed config.xml and users.xml files and a one-click CH-UI client.'
  - - meta
    - property: og:title
      content: 'Local ClickHouse Server with CH-UI | FlyEnv'
  - - meta
    - property: og:description
      content: 'Run ClickHouse on macOS and Linux with managed config.xml and users.xml files and a one-click CH-UI client.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://www.flyenv.com/features/clickhouse
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://www.flyenv.com/features/clickhouse
---

# Local ClickHouse Development with FlyEnv

FlyEnv runs ClickHouse as a managed local service on macOS and Linux: it installs versions from an online list, starts the server with an auto-generated configuration, and gives you editable config files, log viewers, and a one-click CH-UI web client. The ClickHouse module is available on macOS and Linux only.

![FlyEnv ClickHouse module overview](https://oss.macphpstudy.com/image/features/clickhouse-1.webp)

## ClickHouse version management

Install ClickHouse versions from **ClickHouse → Version Manager** and switch between them at any time.

- **Static online list only:** versions come from FlyEnv's online download list; Homebrew and MacPorts sources are not offered for ClickHouse. On macOS the download is a bare binary, and on Linux the binary is extracted from the `clickhouse-common-static` archive.
- **Custom versions:** point FlyEnv at any directory containing your own `clickhouse` binary, and it is listed alongside the managed versions.
- **One running version:** start, stop or restart a version from the Service tab or the sidebar switch (also in the system tray); only one ClickHouse version runs at a time.

![ClickHouse Version Manager with the online version list](https://oss.macphpstudy.com/image/features/clickhouse-2.webp)

## Service and configuration

ClickHouse ships as a multi-call binary, and FlyEnv starts it as `clickhouse server` with a configuration it manages for you.

- **Auto-generated configuration:** on first start FlyEnv creates `config.xml` and `users.xml` in its ClickHouse directory, pre-configured with HTTP port 8123, native TCP port 9000, and a loopback-only listen address of 127.0.0.1.
- **Two config files in one editor:** the Config File tab switches between `config.xml` and `users.xml`, each opened as a full XML source editor, so ports, paths, users and profiles are all editable without hunting for files.

![Editing ClickHouse config.xml in the source editor](https://oss.macphpstudy.com/image/features/clickhouse-3.webp)

## Logs

The Log tab switches between the four log files FlyEnv captures for the ClickHouse service: the main server log, the server error log, and the startup stdout and stderr logs. Search and refresh are built in, so a failed start or a slow query is easy to trace.

![Switching between ClickHouse server and startup logs](https://oss.macphpstudy.com/image/features/clickhouse-4.webp)

## CH-UI

CH-UI is a web-based ClickHouse client, and FlyEnv sets it up for you.

- **One-click setup:** the CH-UI button downloads the CH-UI binary from its GitHub releases and runs it on port 3488.
- **Pre-configured connection:** FlyEnv adds a connection named "FlyEnv ClickHouse" pointing at the running instance, then opens CH-UI in your browser — no manual host or port entry needed.

## Compatibility Notes

The ClickHouse module is available on macOS and Linux only; it does not appear on Windows. FlyEnv manages the local runtime and its generated configuration; the exact feature set of each ClickHouse build comes from the upstream release. Check the [Download page](/download) for the current FlyEnv release, and see the [Demos](/demos) for walkthroughs of FlyEnv's service modules in action.
