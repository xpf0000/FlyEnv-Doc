---
layout: doc
titleTemplate: false
title: 'Local RabbitMQ Server with Management UI | FlyEnv'
description: 'Run RabbitMQ versions with managed config, the management plugin UI, and per-version logs.'
head:
  - - meta
    - name: description
      content: 'Run RabbitMQ versions with managed config, the management plugin UI, and per-version logs.'
  - - meta
    - property: og:title
      content: 'Local RabbitMQ Server with Management UI | FlyEnv'
  - - meta
    - property: og:description
      content: 'Run RabbitMQ versions with managed config, the management plugin UI, and per-version logs.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/features/rabbitmq
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/features/rabbitmq
---

<script setup>
import FeatureRelatedLinks from '../components/FeatureRelatedLinks.vue'
</script>

# RabbitMQ in FlyEnv

RabbitMQ is an open source message broker: applications hand it messages over protocols such as AMQP, and it routes them into queues for other services to consume asynchronously. It is a common choice for decoupling services — background jobs, task queues and event-driven workflows, such as the queue driver of a [Laravel](/solutions/laravel) application; for lighter queue needs, [Redis](/features/redis) can double as a queue backend too. FlyEnv runs it as a managed local broker: install versions from the Version Manager, start the broker with a generated environment config, enable the management plugin out of the box, and read the server log per major version — all from the RabbitMQ module's Service, Version Manager, Config File and Log tabs.

![FlyEnv RabbitMQ module overview](https://oss.macphpstudy.com/image/features/rabbitmq-1.webp)

## Version management

Install and keep multiple RabbitMQ versions from **RabbitMQ → Version Manager**, and pick which one the service runs.

- **Install sources per platform:** Homebrew (`rabbitmq`) and MacPorts (`rabbitmq-server`) on macOS, Homebrew on Linux, and static packages on Windows.
- **Custom versions:** add any directory containing your own RabbitMQ installation; FlyEnv scans it and lists those builds next to the managed versions.
- **One current service version:** the Service tab runs a single selected version as the main RabbitMQ broker.

![RabbitMQ Version Manager with install sources](https://oss.macphpstudy.com/image/features/rabbitmq-2.webp)

## Service and configuration

FlyEnv starts the broker with `rabbitmq-server -detached`, pointing `RABBITMQ_CONF_ENV_FILE` at a generated `rabbitmq-<major>.conf` (`rabbitmq-<major>.bat` on Windows) that pins the node to `NODE_IP_ADDRESS=127.0.0.1` and `NODENAME=rabbit@localhost`, along with its log and mnesia directories. The broker daemonizes itself through [Erlang](/features/erlang)'s epmd, and FlyEnv detects a successful start by watching for the node's pid file. AMQP listens on the default port 5672.

Each major version gets its own set of files under FlyEnv's RabbitMQ directory, editable from the **Config File** tab with a raw editor:

- **`rabbitmq-<major>.conf` / `.bat`:** the generated environment config the broker starts with.
- **`rabbitmq-<major>-default.conf`:** the default configuration for that major version.
- **`enabled_plugins-<major>`:** the enabled-plugins list, where FlyEnv writes `[rabbitmq_management].` so the management plugin is active.

![RabbitMQ config file editor](https://oss.macphpstudy.com/image/features/rabbitmq-3.webp)

## Management UI (15672)

The management plugin is enabled for you — FlyEnv writes `[rabbitmq_management].` into `enabled_plugins-<major>` (and on macOS also runs `rabbitmq-plugins enable rabbitmq_management`), so the console is ready as soon as the broker is up.

- **One-click access:** the Service tab shows a button that opens the management UI at `http://localhost:15672/` whenever the broker is running.
- **Upstream console:** queues, exchanges, connections and users are managed in RabbitMQ's own management interface; FlyEnv does not add an admin UI beyond it.

![RabbitMQ management UI button on the Service tab](https://oss.macphpstudy.com/image/features/rabbitmq-4.webp)

## Logs

The **Log** tab opens `log-<major>/rabbit@localhost.log` directly inside FlyEnv. Because logs are kept per major version, each installed RabbitMQ line keeps its own log file — the first stop when a version fails to start or a queue behaves unexpectedly.

![RabbitMQ server log viewer](https://oss.macphpstudy.com/image/features/rabbitmq-5.webp)

<FeatureRelatedLinks slug="rabbitmq" />

## Compatibility Notes

On Windows, RabbitMQ requires Erlang: FlyEnv resolves `ERLANG_HOME` from the environment, `PATH` or the app directories and auto-starts `epmd.exe`; if epmd is down, the version probe fails with a "no epmd" error, so an Erlang installation must be present. RabbitMQ is available on macOS, Windows and Linux, but the install sources differ — Homebrew and MacPorts on macOS, Homebrew only on Linux, and static packages on Windows. Configuration is scoped per major version, and FlyEnv provides no admin UI beyond the upstream management console and no project integration. Treat the in-app version list and the [Download page](/download) as the source of truth for what can be installed on your machine, and see the [demos](/demos) for the module in action.
