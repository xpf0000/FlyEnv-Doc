---
layout: doc
titleTemplate: false
title: 'Startup Groups: Start Your Stack Together | FlyEnv'
description: 'Group services and project runtimes into ordered startup groups, with a default group, tray control and auto-start.'
head:
  - - meta
    - name: description
      content: 'Group services and project runtimes into ordered startup groups, with a default group, tray control and auto-start.'
  - - meta
    - property: og:title
      content: 'Startup Groups: Start Your Stack Together | FlyEnv'
  - - meta
    - property: og:description
      content: 'Group services and project runtimes into ordered startup groups, with a default group, tray control and auto-start.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/features/startup-groups
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/features/startup-groups
---

<script setup>
import FeatureRelatedLinks from '../components/FeatureRelatedLinks.vue'
</script>

# Startup Groups in FlyEnv

A real project rarely needs just one service — a [Laravel](/solutions/laravel) app, for example, needs the database, the cache and the app runtime all up at once. Startup Groups let you bundle those pieces into a named group and bring the whole set up or down with a single action, in the order you choose. One group can be marked as the default group, which the sidebar switch, the tray menu and app auto-start all drive. If you are new to FlyEnv, the [getting started guide](/guide/getting-started) covers installing and starting individual modules first.

![Startup Groups page with a card grid of groups](https://oss.macphpstudy.com/image/features/startup-groups-1.webp)

## Creating Groups

Open **Startup Groups** from the sidebar and add a group; each group appears as a card with its own start/stop toggle, per-member switches, and edit, delete and set-as-default actions.

A group member is one of exactly two things:

- **A service version:** an installed version of a service module — databases, web servers, queues and the like. PHP-FPM counts too: it maps to your installed PHP versions, so a specific PHP-FPM version can sit in the group next to [Nginx](/features/nginx) and [MySQL](/features/mysql).
- **A project runtime:** a language-module project that has "run as service" enabled — your Node.js, Python, Go or similar app with its own run command and port, managed through [per-project runtimes](/features/per-project-runtimes).

The group editor watches for conflicts as you pick members and warns you when two entries come from the same module or would claim the same port, so a broken combination is caught before you ever press start.

![Group editor selecting service versions and project runtimes as members](https://oss.macphpstudy.com/image/features/startup-groups-2.webp)

## Ordered Start and Stop

- **Start in list order.** FlyEnv starts members from top to bottom and skips members already running. An unavailable member is marked invalid and the sequence continues.
- **Choose how to handle start failures.** By default, FlyEnv stops the sequence after a start operation reports an error. Enable **Continue starting remaining members if one fails** to attempt the rest.
- **Stop in reverse order.** FlyEnv attempts to stop the remaining members even if a stop fails. A group can stop a member that was already running when the group started, so stopping a shared Nginx or Redis instance can affect another group.

In the [ERPNext demo](/demos?video=erpnext-local-project), the macOS group lists Nginx, Redis, MariaDB, and the Python ERPNext project. Watch the services restart and the browser return to ERPNext. FlyEnv runs each member’s start action in order. Check the application URL to verify that the stack is ready.

## Default Group, Auto-Start and Tray

Exactly one group can be the default group, and it becomes the target of FlyEnv's global controls.

- **Sidebar switch:** the group start/stop button in the main sidebar drives the default group. If no default group is set, that button falls back to the classic behavior of starting or stopping all services at once.
- **Auto-start on launch:** when "auto-start services" is enabled in Setup, launching FlyEnv automatically starts the default group — your working stack is up by the time you sit down.
- **Tray control:** the system tray menu lists your groups, each with its own start/stop switch, so you can bring a whole stack down — or switch stacks — without opening the main window.

![Tray menu listing startup groups with start and stop actions](https://oss.macphpstudy.com/image/features/startup-groups-3.webp)

<FeatureRelatedLinks slug="startup-groups" />

## Compatibility Notes

Startup Groups uses the operations of the modules available on your platform. Add installed service versions and configured projects to a group. When you hide Startup Groups in sidebar settings, FlyEnv attempts to stop the grouped services first and keeps the entry visible if shutdown fails.
