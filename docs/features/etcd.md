---
layout: doc
titleTemplate: false
title: 'Local etcd Key-Value Store Manager | FlyEnv'
description: 'Run etcd versions with a managed etcd.yaml and per-version logs on ports 2379/2380.'
head:
  - - meta
    - name: description
      content: 'Run etcd versions with a managed etcd.yaml and per-version logs on ports 2379/2380.'
  - - meta
    - property: og:title
      content: 'Local etcd Key-Value Store Manager | FlyEnv'
  - - meta
    - property: og:description
      content: 'Run etcd versions with a managed etcd.yaml and per-version logs on ports 2379/2380.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://www.flyenv.com/features/etcd
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://www.flyenv.com/features/etcd
---

# Etcd in FlyEnv

etcd is a distributed, strongly consistent key-value store — the same one Kubernetes uses to hold its cluster state. It is the standard building block for service discovery, distributed configuration and leader election. FlyEnv runs etcd as a managed local service: install one or more etcd versions, start the selected one from the sidebar switch or the system tray, edit its `etcd.yaml` configuration in place, and read per-version startup logs without leaving the app. The generated defaults listen for client traffic on port 2379 and peer traffic on port 2380, ready for local service-discovery and distributed-configuration work.

![FlyEnv etcd module overview](https://oss.macphpstudy.com/image/features/etcd-1.webp)

## Version management

Install and keep multiple etcd versions side by side from **Etcd → Version Manager**, then pick the one the service runs.

- **Install sources:** a static online list of ready-made etcd packages on every platform, plus the Homebrew `etcd` formula on macOS and Linux.
- **Custom versions:** point FlyEnv at any directory containing your own etcd build; it is scanned and listed next to the managed versions.
- **One version at a time:** starting an etcd version while another is running is blocked — stop the current one first, then start the new one.

![etcd Version Manager with static and Homebrew sources](https://oss.macphpstudy.com/image/features/etcd-2.webp)

## Service and configuration

The Service tab controls the running etcd process. FlyEnv launches the real `etcd` binary with `--config-file etcd.yaml`, so everything the server does is driven by that one configuration file.

- **Generated defaults:** on first start FlyEnv writes an `etcd.yaml` that listens on `0.0.0.0:2379` for client requests and `0.0.0.0:2380` for peer traffic, advertises itself on `127.0.0.1`, and logs at `info` level to stdout. Existing files are never overwritten — FlyEnv only generates the configuration when it is missing.
- **Raw editor:** the **Config File** tab opens `etcd.yaml` directly, with a `.default` copy alongside it so you can always compare against or restore the original.
- **No hidden layer:** because etcd reads `etcd.yaml` verbatim, any etcd setting — clustering, TLS, quotas — works exactly as the upstream documentation describes.

## Logs

The **Log** and **Error Log** tabs give every installed etcd version its own pair of viewers: `etcd-<version>-start-out.log` captures the server's stdout stream, and `etcd-<version>-start-error.log` captures stderr. When a version refuses to start, the error log is the first place to look — port conflicts on 2379 or a malformed `etcd.yaml` both show up there immediately.

![Per-version etcd startup and error log viewers](https://oss.macphpstudy.com/image/features/etcd-3.webp)

## Compatibility Notes

- The etcd module does not offer a MacPorts install source on macOS; use the static list, Homebrew or a custom directory instead.
- FlyEnv manages the etcd process, its `etcd.yaml` and its log files only — it does not bundle an etcd browser or admin panel, so key inspection and data operations go through `etcdctl` or your own client.
- Which etcd versions are offered depends on your platform and on what the online list and Homebrew publish; check the in-app Version Manager or the [Download page](/download) for what installs on your machine.
- Other FlyEnv modules build on a running etcd: the [MinIO](/features/minio) configuration exposes etcd tuning keys for distributed setups, and sibling modules like [Consul](/features/consul) and [R-Nacos](/features/r-nacos) cover adjacent service-discovery and configuration needs. For a walkthrough of etcd in a real local stack, see the [demos](/demos).
