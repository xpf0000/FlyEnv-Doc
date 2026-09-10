---
layout: doc
titleTemplate: false
title: 'Local Typesense Server for macOS and Linux | FlyEnv'
description: 'Run Typesense versions on macOS and Linux with a managed config file and logs.'
head:
  - - meta
    - name: description
      content: 'Run Typesense versions on macOS and Linux with a managed config file and logs.'
  - - meta
    - property: og:title
      content: 'Local Typesense Server for macOS and Linux | FlyEnv'
  - - meta
    - property: og:description
      content: 'Run Typesense versions on macOS and Linux with a managed config file and logs.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/features/typesense
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/features/typesense
---

<script setup>
import FeatureRelatedLinks from '../components/FeatureRelatedLinks.vue'
</script>

# Typesense in FlyEnv

Typesense is an open source search engine focused on fast, typo-tolerant search with a simple API, commonly used for site search and instant search-as-you-type experiences — a lighter alternative to [Elasticsearch](/features/elasticsearch), in the same family as [Meilisearch](/features/meilisearch) and [ZincSearch](/features/zincsearch). FlyEnv runs it as a managed local search server on macOS and Linux: install versions from a static list or Homebrew, start `typesense-server` with a FlyEnv-managed configuration file, and watch its log without leaving the app. The Typesense module is available on macOS and Linux only.

![FlyEnv Typesense module overview](https://oss.macphpstudy.com/image/features/typesense-1.webp)

## Version management

Install and keep multiple Typesense versions side by side from **Typesense → Version Manager**, and pick which one the service runs.

- **Install sources:** a static online list, plus Homebrew using the `typesense/tap/typesense-server` formula and its versioned `@x.y` variants.
- **Custom versions:** point FlyEnv at any directory containing your own `typesense-server` binary, and it is listed alongside the managed versions.
- **Start and stop:** control the running version from the Service tab or the sidebar switch (also available in the system tray).

![Typesense Version Manager with static and Homebrew sources](https://oss.macphpstudy.com/image/features/typesense-2.webp)

## Service and configuration

FlyEnv starts the real `typesense-server` binary with `--config=<BaseDir>/typesense/typesense-server.ini --log-dir=<BaseDir>/typesense/log`, so the configuration file is the single source of truth for the service.

- **Auto-generated configuration:** on first start FlyEnv writes a default `typesense-server.ini` with `api-port = 8108`, `api-key = xyz`, a data directory under FlyEnv's own Typesense folder, and `enable-cors = true`, so the server answers on port 8108 out of the box.
- **Config File tab:** a raw source editor for `typesense-server.ini`, with `typesense-server.ini.default` kept next to it as the pristine reference. One configuration is shared across all installed Typesense versions.

![Editing typesense-server.ini in the FlyEnv config editor](https://oss.macphpstudy.com/image/features/typesense-3.webp)

## Logs

The **Log** tab opens the server's log file at `typesense/log/typesense.log` directly inside FlyEnv. Since FlyEnv passes the log directory to `typesense-server` at startup, every version you run writes to the same place — the first stop when a version fails to start or a search request misbehaves.

<FeatureRelatedLinks slug="typesense" />

## Compatibility Notes

**The Typesense module is available on macOS and Linux only; it does not appear on Windows.** FlyEnv manages the local runtime, its configuration file and its log directory; it does not ship a Typesense admin UI, and the module has no project integration — point your application's Typesense client at the configured port (default 8108) yourself. The exact feature set of each build comes from the upstream Typesense release. Check the [Download page](/download) for the current FlyEnv release, and see the [Demos](/demos) for walkthroughs of FlyEnv's service modules in action.
