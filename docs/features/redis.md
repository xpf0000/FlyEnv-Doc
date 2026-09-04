---
layout: doc
titleTemplate: false
title: 'Local Redis Server with Redis Commander UI | FlyEnv'
description: 'Run Redis versions with visual config, logs, and a one-click Redis Commander web UI.'
head:
  - - meta
    - name: description
      content: 'Run Redis versions with visual config, logs, and a one-click Redis Commander web UI.'
  - - meta
    - property: og:title
      content: 'Local Redis Server with Redis Commander UI | FlyEnv'
  - - meta
    - property: og:description
      content: 'Run Redis versions with visual config, logs, and a one-click Redis Commander web UI.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://www.flyenv.com/features/redis
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://www.flyenv.com/features/redis
---

# Local Redis Development with FlyEnv

FlyEnv turns Redis into a managed local service you control from one window: install multiple versions, run `redis-server` with an auto-generated per-version config, adjust port and memory settings from a visual form, watch the server log, and browse your keys in a one-click Redis Commander web UI. If you are new to FlyEnv, the [getting started guide](/guide/getting-started) shows how modules are installed and started.

![FlyEnv Redis module overview](https://oss.macphpstudy.com/image/features/redis-1.webp)

## Version management

Install and keep multiple Redis versions side by side from **Redis → Version Manager**, and pick which one the service runs.

- **Install sources per platform:** Homebrew (`redis`, `redis@x.y`) and MacPorts on macOS, Homebrew on Linux, and a static list of ready-made Windows builds on Windows.
- **Custom versions:** add any directory containing your own Redis installation; FlyEnv scans it for the `redis-server` binary and lists those builds next to the managed versions.
- **One running version at a time:** starting a version stops any other running Redis version, so the service always serves a single, known build.

![Redis Version Manager with install sources](https://oss.macphpstudy.com/image/features/redis-2.webp)

## Service and configuration

FlyEnv launches the real `redis-server` binary with a generated configuration file — `redis-server redis-<major>.conf` — and tracks its pid file for clean start and stop. The default configuration listens on port 6379 and keeps each major version's data in its own `db-<major>` directory.

Each major version gets its own `redis-<major>.conf`, editable from the **Config File** tab:

- **Common settings form:** adjust frequently changed options — port, timeout, maxclients, databases, `requirepass` and `maxmemory` — from a visual form instead of editing the file by hand.
- **Raw editor:** switch to the full source view for anything the form does not cover, with a `redis-<major>-default.conf` kept alongside as the reference default.

![Redis config file with common settings form](https://oss.macphpstudy.com/image/features/redis-3.webp)

## Logs

The **Log** tab opens the server's `redis-<major>.log` directly inside FlyEnv — the first stop when a version fails to start or behaves unexpectedly. Log output from the Redis Commander helper process is captured separately, so web-UI startup problems never get mixed into the Redis server log.

## Redis Commander

The **Redis Commander** button appears in the Service toolbar whenever Redis is running and opens a full web UI for browsing keys, editing values and running commands against the local server.

- **One-click setup:** on first open, FlyEnv installs the `redis-commander` package with npm and starts it for you — no manual tooling required. It uses the Node.js version selected in FlyEnv.
- **Pre-configured connection:** Redis Commander connects to the running server automatically, with the port and `requirepass` password read from the current Redis configuration.
- **Secured by default:** the UI runs on 127.0.0.1 behind HTTP authentication, and FlyEnv opens your browser with a one-time auto-login link. Redis Commander stops automatically when the Redis service stops.

This pairs well with local framework work — for example inspecting the cache and queue keys of a [Laravel](/solutions/laravel) project while it runs.

![Redis Commander web UI opened from FlyEnv](https://oss.macphpstudy.com/image/features/redis-4.webp)

## Compatibility Notes

FlyEnv manages the local Redis runtime, its configuration files and its data directories; it does not guarantee that every Redis version is available on every operating system or install source. The versions offered in Version Manager depend on your platform — Homebrew and MacPorts on macOS, Homebrew on Linux, static builds on Windows — and on what those sources publish. Configuration files are per major version (`redis-<major>.conf`), so settings such as port, `requirepass` and `maxmemory` are kept separately for Redis 7 and Redis 8. Redis Commander requires a Node.js version to be installed and selected in FlyEnv before its first launch. Treat the in-app version list and the [Download page](/download) as the source of truth for what can be installed on your machine.
