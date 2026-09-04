---
layout: doc
titleTemplate: false
title: 'Local Elasticsearch with Version and Config Manager | FlyEnv'
description: 'Run Elasticsearch versions and edit elasticsearch.yml, jvm.options and log4j2.properties per version.'
head:
  - - meta
    - name: description
      content: 'Run Elasticsearch versions and edit elasticsearch.yml, jvm.options and log4j2.properties per version.'
  - - meta
    - property: og:title
      content: 'Local Elasticsearch with Version and Config Manager | FlyEnv'
  - - meta
    - property: og:description
      content: 'Run Elasticsearch versions and edit elasticsearch.yml, jvm.options and log4j2.properties per version.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://www.flyenv.com/features/elasticsearch
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://www.flyenv.com/features/elasticsearch
---

# Elasticsearch in FlyEnv

FlyEnv runs Elasticsearch as a managed local service on macOS, Windows and Linux: install multiple versions side by side, start and stop them from one window, and edit each version's own `elasticsearch.yml`, `jvm.options` and `log4j2.properties` without hunting through install directories. Logs for the running node open right inside the app.

![FlyEnv Elasticsearch module overview](https://oss.macphpstudy.com/image/features/elasticsearch-1.webp)

## Version management

Install and keep multiple Elasticsearch versions side by side from **Elasticsearch → Version Manager**.

- **Static packages on every platform:** Elasticsearch is installed from FlyEnv's online static package list on macOS, Windows and Linux alike — there are no Homebrew or MacPorts sources for this module, so the version list is the same everywhere.
- **Managed install location:** each version is unpacked from its tar.gz or zip archive into FlyEnv's own `elasticsearch/v<version>/` directory, keeping the app-managed builds separate from anything else on your machine.
- **Custom versions:** point FlyEnv at any directory containing your own Elasticsearch installation; it scans for the `bin/elasticsearch` binary (`elasticsearch.bat` on Windows) and lists those builds next to the managed ones.

![Elasticsearch Version Manager with the static package list](https://oss.macphpstudy.com/image/features/elasticsearch-2.webp)

## Service management

The **Service** tab lists every installed version with per-version start, stop and restart controls. The sidebar switch — also available from the system tray — starts or stops the current version without opening the module page.

- **One version at a time:** starting a version stops any other running Elasticsearch version, so a second node never fights the first for the same ports.
- **Real Elasticsearch process:** FlyEnv launches the version's own `bin/elasticsearch` with a pid file, setting `ES_HOME` and `ES_PATH_CONF` to that version's directory so it boots with its bundled configuration.
- **Upstream default ports:** because FlyEnv generates no config of its own, a fresh install answers on the Elasticsearch defaults — HTTP on port 9200 and transport on 9300 — until you change them.

![Elasticsearch Service tab with a running version](https://oss.macphpstudy.com/image/features/elasticsearch-3.webp)

## Configuration

Elasticsearch keeps three dedicated editor tabs in FlyEnv — **elasticsearch.yml**, **jvm.options** and **log4j2.properties** — each opening the file inside the selected version's own `config/` directory.

- **Per-version files:** edits apply to the config bundled with that specific version, so tuning one install never leaks into another.
- **Full source editing:** the editors work directly on the raw files, covering every Elasticsearch, JVM and logging setting rather than a limited subset.
- **No regeneration surprises:** FlyEnv never rewrites these files — what you save is exactly what the node reads on its next start.

![Editing elasticsearch.yml for an installed version](https://oss.macphpstudy.com/image/features/elasticsearch-4.webp)

## Logs

The **Log** tab opens the node's log output from inside FlyEnv. The primary view shows the version's own `logs/elasticsearch.log`, the first place to look when a node fails to start or a cluster change misbehaves. The server, deprecation and garbage-collector logs (`elasticsearch_server.json`, `elasticsearch_deprecation.json`, `gc.log`) written by the node are available alongside it.

![Elasticsearch log viewer showing the node log](https://oss.macphpstudy.com/image/features/elasticsearch-5.webp)

## Compatibility Notes

FlyEnv manages the local Elasticsearch runtime and the configuration files bundled with each version; it does not add an admin panel, and it does not guarantee that every Elasticsearch release is published for every operating system or CPU architecture — the Version Manager list reflects the static packages actually available for your platform. Elasticsearch is available on macOS, Windows and Linux. Get the app from the [Download page](/download), and see the module in action in the [demos](/demos).
