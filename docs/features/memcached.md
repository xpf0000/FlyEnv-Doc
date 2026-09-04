---
layout: doc
titleTemplate: false
title: 'Local Memcached Service Manager | FlyEnv'
description: 'Install and run Memcached versions from Homebrew, MacPorts or static builds with one click.'
head:
  - - meta
    - name: description
      content: 'Install and run Memcached versions from Homebrew, MacPorts or static builds with one click.'
  - - meta
    - property: og:title
      content: 'Local Memcached Service Manager | FlyEnv'
  - - meta
    - property: og:description
      content: 'Install and run Memcached versions from Homebrew, MacPorts or static builds with one click.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://www.flyenv.com/features/memcached
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://www.flyenv.com/features/memcached
---

# Memcached in FlyEnv

FlyEnv runs Memcached as a managed local service: install one or more versions from the Version Manager, start and stop the daemon from the Service tab, and reach the cache on the default port 11211 without touching a package manager or a startup script by hand.

![FlyEnv Memcached module overview](https://oss.macphpstudy.com/image/features/memcached-1.webp)

## Version management

Install Memcached from **Memcached → Version Manager**. The sources offered depend on your platform:

- **macOS:** the Homebrew `memcached` formula and MacPorts builds.
- **Linux:** the Homebrew formula.
- **Windows:** a static zip from the `nono303/memcached` GitHub releases; FlyEnv extracts the matching `libevent-2.1/x64` or `cygwin/x64` build for you.
- **Custom versions:** add any directory that contains your own Memcached installation; FlyEnv scans it for the `memcached` (or `memcached.exe`) binary and lists it next to the managed versions.

![Memcached Version Manager with install sources](https://oss.macphpstudy.com/image/features/memcached-2.webp)

## Service management

The Service tab starts the selected version's real `memcached` binary in the foreground with a FlyEnv-managed pid file (`memcached -P .../memcached.pid -vv`), so lifecycle state in the app always reflects the actual process. No port argument is passed, which means the daemon listens on Memcached's upstream default port 11211.

- **Start and stop with one click:** control the service from the Service tab, the sidebar switch or the system tray, like every other service module in FlyEnv.
- **Verbose output while running:** the daemon runs with `-vv`, so clients connecting to port 11211 get a standard memcached server while activity goes to the process's own output streams.
- **Switch versions:** pick any installed version as the one the service runs; each version keeps its own installation untouched.

Pair the running service with the local apps from the [demos](/demos), or grab FlyEnv for your platform on the [Download page](/download).

## Compatibility Notes

- The Memcached module has **no configuration file editing**: Memcached is configured entirely through command-line arguments, and FlyEnv starts it with its built-in argument set rather than a generated config file. To change settings such as memory size or port, edit the startup approach outside the module or rely on the defaults.
- The module has **no log viewer tab**: output goes to stdout/stderr via `-vv` and no log file is written, so there is nothing to tail from inside the app.
- The service always listens on the **default port 11211**; FlyEnv does not pass a port override.
- There is no admin panel and no project or site integration for this module — it manages the daemon only. Available versions depend on your platform's install sources, as listed on the [Download page](/download).
