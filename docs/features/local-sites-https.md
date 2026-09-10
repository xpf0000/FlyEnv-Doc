---
layout: doc
titleTemplate: false
title: 'Local Sites, Custom Domains and HTTPS | FlyEnv'
description: 'Create local sites with custom domains, web-server ports, reverse proxies and HTTPS certificates using FlyEnv Host.'
head:
  - - meta
    - name: description
      content: 'Create local sites with custom domains, web-server ports, reverse proxies and HTTPS certificates using FlyEnv Host.'
  - - meta
    - property: og:title
      content: 'Local Sites, Custom Domains and HTTPS | FlyEnv'
  - - meta
    - property: og:description
      content: 'Create local sites with custom domains, web-server ports, reverse proxies and HTTPS certificates using FlyEnv Host.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/features/local-sites-https
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/features/local-sites-https
---

<script setup>
import FeatureRelatedLinks from '../components/FeatureRelatedLinks.vue'
</script>

# Local sites, custom domains and HTTPS in FlyEnv

The Host module maps a local project to a browser-friendly address and the web server configuration that should serve it. A site entry can include a document root, aliases, per-server ports, an optional PHP version, rewrite rules, reverse-proxy rules and HTTPS certificate settings.

## What a site entry controls

- **Domain and aliases:** choose a hostname such as `myapp.test` and add aliases when the same project needs more than one local name.
- **Document root:** point a static site or PHP application at the directory that should be served. Frameworks often use a `public` directory.
- **Server ports:** configure HTTP and HTTPS ports for Nginx, Apache, Caddy or FrankenPHP; advanced settings expose each server's port separately.
- **PHP binding:** select an installed PHP version for a PHP site, or leave it as a static site when no PHP handler is required.
- **Rewrite rules:** edit the generated Nginx rewrite configuration for frameworks that route through a front controller.
- **Reverse proxy:** map a path such as `/api` to a local service URL such as `http://127.0.0.1:3000`.
- **HTTPS:** enable Auto SSL for a locally generated certificate, or provide certificate and key files for a custom setup.

FlyEnv writes the configured host mappings to the operating system hosts file when the site needs a local name — the [built-in DNS server](/features/dns-server) is an alternative that resolves site domains without touching the hosts file at all. The helper permission is why first-time setup may request an administrator password.

## A predictable local-site workflow

1. Start the web server and runtime that the project needs (for example Nginx plus PHP-FPM).
2. Open **Host** and choose **Add Site**.
3. Enter the local domain and the correct document root; for Laravel and many PHP frameworks, use the project's `public` directory.
4. Select the PHP version or static-site mode and set the server port.
5. Enable Auto SSL when the project needs HTTPS, secure cookies, OAuth callbacks or browser APIs that require a secure origin.
6. Add rewrite rules or reverse-proxy targets if the project has a front controller or a separate application service.
7. Save the site, start the selected services and open the site link from the Host list.

The [Host guide](/guide/host) contains screenshots and the full field-by-field setup. It also explains aliases, `localhost` with explicit ports, rewrite templates and troubleshooting.

## Connect a project service to a domain

Host does not have to launch the application process itself. Keep the process in its language module, then proxy to its local port:

| Application service | Local listener | Host rule |
| --- | --- | --- |
| Node.js / NestJS | `127.0.0.1:3000` | `https://api.test` → `http://127.0.0.1:3000` |
| PHP Worker or RoadRunner | `127.0.0.1:8787` | `https://worker.test` → `http://127.0.0.1:8787` |
| Static frontend | web-server document root | `https://frontend.test` → project root |

Use the [Node.js Feature page](/features/nodejs) for the project-service side of this pattern and the [PHP Feature page](/features/php) for PHP-FPM and worker choices.

## HTTPS and certificates

Auto SSL creates a FlyEnv local Certificate Authority when needed, issues a certificate for the site's aliases and stores the certificate/key with the site configuration. The [MkCert](/features/mkcert) integration can also generate locally trusted development certificates. If a browser or operating system does not trust the CA automatically, follow the platform-specific certificate instructions in the [Host guide](/guide/host).

Do not use a local certificate as proof that a site is publicly trusted: these certificates are for local development and testing. For a public preview, pair the local service with [Cloudflare Tunnel](/guide/cloudflare-tunnel-local-development) or deploy it to an environment intended for external traffic.

<FeatureRelatedLinks slug="local-sites-https" />

## Compatibility Notes

Site features depend on the web servers and runtimes you have installed in FlyEnv, and certificate trust requires the FlyEnv CA to be installed on your system. Verify the behavior of aliases, ports and HTTPS on your own machine, and treat the [Download page](/download) and current release notes as the source for supported packages.
