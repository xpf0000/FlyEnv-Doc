---
layout: doc
titleTemplate: false
title: 'Built-in DNS Server for Local Domains | FlyEnv'
description: 'Resolve all FlyEnv site domains without editing the hosts file using the built-in DNS server on port 53.'
head:
  - - meta
    - name: description
      content: 'Resolve all FlyEnv site domains without editing the hosts file using the built-in DNS server on port 53.'
  - - meta
    - property: og:title
      content: 'Built-in DNS Server for Local Domains | FlyEnv'
  - - meta
    - property: og:description
      content: 'Resolve all FlyEnv site domains without editing the hosts file using the built-in DNS server on port 53.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://www.flyenv.com/features/dns-server
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://www.flyenv.com/features/dns-server
---

# Built-in DNS Server in FlyEnv

FlyEnv ships its own DNS server, implemented in Node.js directly inside the app — there is no external binary to install and no version to manage. It listens on port 53 and answers for every site domain you create in FlyEnv, so once your system points at it, local domains work without touching the hosts file. A live query log on the Service tab shows each lookup as it happens.

![FlyEnv DNS Server module with the service running on port 53](https://oss.macphpstudy.com/image/features/dns-server-1.webp)

## How resolution works

When a query arrives, the server checks several sources in order before asking the internet:

- **FlyEnv site domains first:** every host name and alias from your [local sites](/features/local-sites-https) is resolved automatically to your primary local IP address. The list is watched live, so a newly created site resolves immediately — no restart, no manual mapping.
- **Wildcard matching:** patterns such as `*.test` are supported, so whole domain suffixes can be covered by a single rule.
- **System hosts file:** entries from the OS hosts file are honored too; the file is re-read every 60 seconds, so outside edits are picked up on their own.
- **Static map in `dns.json`:** a `resolveIP` map in the configuration file pins specific names to fixed addresses of your choice.
- **Upstream forwarding:** anything that matches none of the above is forwarded to public resolvers — 1.1.1.1 and 8.8.8.8 by default (AliDNS and 114DNS in the Chinese locale) — so the server can act as the machine's only DNS without breaking normal browsing.

Point your operating system's DNS setting at the local address FlyEnv binds to, and all of this applies system-wide. The [host management guide](/guide/host) covers the site side of the setup.

## Live query log

The Service tab is more than a start/stop switch — it doubles as a traffic monitor for the server.

- **Query table:** every lookup is shown as a row with the requested host, the IP it resolved to, and the TTL returned.
- **Full lifecycle control:** start, stop and restart the server from the same toolbar, right next to the log.
- **One-click clear:** wipe the table when you want a clean view while debugging a specific domain.

Because the log updates as queries arrive, it is the quickest way to confirm that a browser or device is actually using FlyEnv as its resolver.

![Live DNS query log showing host, resolved IP and TTL per query](https://oss.macphpstudy.com/image/features/dns-server-2.webp)

## Configuration

The DNS server keeps its settings in a single JSON file, `dns.json` (with `dns.default.json` alongside as the factory reference). The Config File tab offers two ways to change it:

- **Bind IP dropdown:** the one visual setting — choose which local address the server listens on. The default `0.0.0.0` accepts queries on every interface, which is what you want when other devices on the network should also resolve your site domains; picking a specific IP restricts it to that interface.
- **Raw JSON editor:** for everything else, edit the file directly — including the `resolveIP` static map that fixes individual names to chosen addresses.

![DNS configuration tab with the bind IP dropdown and dns.json editor](https://oss.macphpstudy.com/image/features/dns-server-3.webp)

## Compatibility Notes

The built-in DNS server runs on macOS, Windows and Linux, serving both UDP and TCP on port 53. Binding port 53 is a privileged operation on most systems, so the OS may ask for elevated permission when the server starts, and no other resolver (such as another local DNS tool) can hold the port at the same time. The server answers queries only while it is running — when stopped, the system falls back to whatever other DNS is configured, and FlyEnv site domains resolve only if they are also present in the hosts file. Query history is shown live in the Service tab and is not written to log files. For the exact behavior of a given release, treat the in-app module and the [Download page](/download) release notes as the reference.
