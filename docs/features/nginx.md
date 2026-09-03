---
layout: doc
titleTemplate: false
title: 'Nginx Version Manager and Local Site Server | FlyEnv'
description: 'Install and switch Nginx versions, edit nginx.conf visually, and serve local sites with rewrite rules and reverse proxies.'
head:
  - - meta
    - name: description
      content: 'Install and switch Nginx versions, edit nginx.conf visually, and serve local sites with rewrite rules and reverse proxies.'
  - - meta
    - property: og:title
      content: 'Nginx Version Manager and Local Site Server | FlyEnv'
  - - meta
    - property: og:description
      content: 'Install and switch Nginx versions, edit nginx.conf visually, and serve local sites with rewrite rules and reverse proxies.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://www.flyenv.com/features/nginx
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://www.flyenv.com/features/nginx
---

# Nginx in FlyEnv

FlyEnv turns Nginx into a managed part of your local stack: install multiple versions side by side, run one of them as a background service from the sidebar or system tray, and edit `nginx.conf` through a visual form or a full source editor. Every site you create in FlyEnv gets its own generated vhost with per-site ports, framework-aware rewrite rules and reverse proxy support.

![FlyEnv Nginx module overview](https://oss.macphpstudy.com/image/features/nginx-1.webp)

## Nginx version management

Install multiple Nginx versions from **Nginx → Version Manager** and keep them side by side.

- **Multiple install sources:** Static builds on every platform, plus Homebrew on macOS and Linux and MacPorts on macOS.
- **Custom versions:** point FlyEnv at any directory containing your own Nginx build; it scans for the binary and lists it next to the managed versions.
- **Shared configuration:** all installed versions use one common `nginx.conf`, so switching versions never loses your settings.

![Nginx Version Manager with install sources](https://oss.macphpstudy.com/image/features/nginx-2.webp)

## Service management

Nginx is a real background service in FlyEnv, not just a version list.

- **One running version at a time:** several versions can be installed, but only one runs; starting a version while another is running is blocked in the Service tab.
- **Sidebar and tray control:** start or stop Nginx from the module switch in the sidebar, or directly from the system tray without opening the main window.
- **Automatic config repair on start:** FlyEnv fixes the `user` directive and temp paths in the configuration, and regenerates the `enable-php-<version>.conf` include for every PHP version your sites use, so PHP-FPM integration always matches the current setup.

![Nginx service table with start and stop controls](https://oss.macphpstudy.com/image/features/nginx-3.webp)

## Configuration

The **Config File** tab edits the shared `nginx.conf` two ways.

- **Common settings form:** adjust frequently changed directives without touching the file — `keepalive_timeout`, `gzip`, `gzip_min_length`, `gzip_comp_level`, `client_max_body_size`, `server_names_hash_bucket_size` and `server_names_hash_max_size`, plus client header and body buffer sizes.
- **Full source editor:** switch to the raw editor for anything the form does not cover, with one-click restore to the default configuration.

![Editing nginx.conf with the common settings form](https://oss.macphpstudy.com/image/features/nginx-4.webp)

## Site integration

Nginx is the default web server behind the sites you create in FlyEnv's Host module; site creation itself is covered in the [Host guide](/guide/host).

- **Per-site vhost and ports:** every site gets its own generated vhost file and its own Nginx ports (80/443 by default), independent of the ports used by Apache, Caddy or FrankenPHP — so the same site can be served by several web servers at once. Domains and HTTPS for sites are covered in [Local Sites, Custom Domains & HTTPS](/features/local-sites-https).
- **Automatic rewrite rules:** FlyEnv detects WordPress, Laravel and Yii projects and pre-fills the matching URL rewrite rules in the site's vhost.
- **Per-site reverse proxy:** add reverse proxy rules to a site to forward paths to local app servers — the [NestJS multi-server reverse proxy guide](/guide/reverse-proxy-nestjs-multi-servers) walks through a complete example.
- **PHP via PHP-FPM:** PHP sites are served through per-version PHP-FPM includes, letting each site pick its own PHP version.

## Logs

The Nginx module page includes dedicated **Error Log** and **Log (access)** tabs for the server-wide logs. Each site also writes its own access and error logs, which you can open from the site's log viewer in the Host module — useful when debugging a single domain without wading through the global log.

![Nginx error and access log viewers](https://oss.macphpstudy.com/image/features/nginx-5.webp)

## Compatibility Notes

FlyEnv manages the Nginx binary, its process lifecycle and the generated configuration; it does not guarantee that every third-party Nginx module or build variant is available on every operating system. Available install sources differ by platform (MacPorts is macOS-only, and Windows uses static builds). Verify your site's requirements against the installed Nginx build, and treat the [Download page](/download) and current release notes as the source for supported packages.
