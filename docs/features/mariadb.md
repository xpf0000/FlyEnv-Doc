---
layout: doc
titleTemplate: false
title: 'Local MariaDB Server with Version Manager | FlyEnv'
description: 'Run MariaDB versions with visual config, logs, phpMyAdmin and database management tools.'
head:
  - - meta
    - name: description
      content: 'Run MariaDB versions with visual config, logs, phpMyAdmin and database management tools.'
  - - meta
    - property: og:title
      content: 'Local MariaDB Server with Version Manager | FlyEnv'
  - - meta
    - property: og:description
      content: 'Run MariaDB versions with visual config, logs, phpMyAdmin and database management tools.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://www.flyenv.com/features/mariadb
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://www.flyenv.com/features/mariadb
---

# Local MariaDB Development with FlyEnv

FlyEnv turns MariaDB into a managed local service you control from one window: install multiple versions, run `mariadbd` with an editable `my-<version>.cnf`, watch the error and slow logs, and reach your data through phpMyAdmin or the built-in Manage drawer. Everything runs against the real MariaDB binaries, so what you test locally matches what you deploy.

![FlyEnv MariaDB module overview](https://oss.macphpstudy.com/image/features/mariadb-1.webp)

## MariaDB version management

Install and keep multiple MariaDB versions side by side from **MariaDB → Version Manager**, and pick which one the service runs.

- **Install sources per platform:** Homebrew (`mariadb`, `mariadb@x.y`) and MacPorts on macOS, Homebrew on Linux, and a static online list of ready-made packages on Windows.
- **Custom versions:** add any directory containing your own MariaDB installation; FlyEnv scans it and lists those builds next to the managed versions.
- **One current service version:** the Service tab runs a single selected version as the MariaDB service; starting another version stops the previous one.

![MariaDB Version Manager with install sources](https://oss.macphpstudy.com/image/features/mariadb-2.webp)

## Service and configuration

FlyEnv runs the real `mariadbd` binary in the foreground — not `mariadbd-safe` — launched with `--defaults-file=my-<version>.cnf --port=...`. The port defaults to 3306 and comes from the configuration file. On Windows the service is stopped cleanly through `mariadb-admin.exe ... shutdown`.

Each version gets its own `my-<major.minor>.cnf` under FlyEnv's MariaDB directory, editable from the **Config File** tab:

- **Common settings form:** adjust frequently changed options under the `[mariadbd]` section from a visual form instead of editing the file by hand.
- **Raw editor:** switch to the full source view for anything the form does not cover.

![MariaDB config file with common settings form](https://oss.macphpstudy.com/image/features/mariadb-3.webp)

## Logs

The **Log** and **Slow Log** tabs open the server's `error.log` and `slow.log` directly inside FlyEnv. The error log is the first stop when a version fails to start, and the slow log shows which queries exceed the long-query threshold once slow query logging is enabled in the configuration — useful when profiling a local application against realistic data.

![MariaDB error and slow log viewers](https://oss.macphpstudy.com/image/features/mariadb-4.webp)

## phpMyAdmin

The **phpMyAdmin** button in the Service toolbar sets up a full phpMyAdmin site in one step: FlyEnv downloads phpMyAdmin, creates a local site served by your web server and PHP version, and opens it in the browser. It works against the running MariaDB service, so you get a familiar web UI for browsing tables and running queries without installing anything manually.

![Setting up phpMyAdmin from the MariaDB module](https://oss.macphpstudy.com/image/features/mariadb-5.webp)

## Manage drawer

For day-to-day work there is no need to leave the app: the per-version **Manage** drawer talks to the running server directly.

- **Add database:** create a new database from the database list.
- **Root password:** change the root password for the instance — the default root password on fresh installs is `root`. The [database user and password guide](/guide/database-user-password) covers this in more detail.
- **Backups:** dump any database with `mariadb-dump` into a backup directory you choose, straight from the drawer.

## Compatibility Notes

The MariaDB module runs one version at a time; unlike the [MySQL module](/features/mysql), it has no Group feature for multiple concurrent instances. FlyEnv manages the local MariaDB runtime, its configuration files and its data directories; it does not guarantee that every MariaDB version is available on every operating system or install source. The versions offered in Version Manager depend on your platform (Homebrew and MacPorts on macOS, Homebrew on Linux, static packages on Windows) and on what those sources publish, and phpMyAdmin additionally requires a FlyEnv web server and PHP version to be running. Treat the in-app version list and the [Download page](/download) as the source of truth for what can be installed on your machine.
