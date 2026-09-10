---
layout: doc
titleTemplate: false
title: 'Tomcat Version Manager and Java Site Hosting | FlyEnv'
description: 'Run Tomcat versions with per-version CATALINA_BASE, edit server.xml and web.xml, and host Java sites directly.'
head:
  - - meta
    - name: description
      content: 'Run Tomcat versions with per-version CATALINA_BASE, edit server.xml and web.xml, and host Java sites directly.'
  - - meta
    - property: og:title
      content: 'Tomcat Version Manager and Java Site Hosting | FlyEnv'
  - - meta
    - property: og:description
      content: 'Run Tomcat versions with per-version CATALINA_BASE, edit server.xml and web.xml, and host Java sites directly.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/features/tomcat
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/features/tomcat
---

<script setup>
import FeatureRelatedLinks from '../components/FeatureRelatedLinks.vue'
</script>

# Tomcat in FlyEnv

Apache Tomcat is an open source Java servlet container: it runs Java web applications packaged as WAR files, and it is what a project needs when it ships as a servlet-based web app rather than a self-contained jar. FlyEnv runs Apache Tomcat as a managed service: install multiple Tomcat versions side by side, give each one its own CATALINA_BASE, edit `server.xml` and `web.xml` from the built-in editors, and watch `catalina.out` without opening a terminal. Because Tomcat needs a JDK, FlyEnv picks up JAVA_HOME from the Java module's environment. Local sites of the Tomcat type are written straight into `server.xml` as Host entries, so Java web apps are served by Tomcat itself rather than through another web server.

![FlyEnv Tomcat module overview](https://oss.macphpstudy.com/image/features/tomcat-1.webp)

## Tomcat version management

Install multiple Tomcat versions side by side from the **Version Manager** tab and switch between them at any time.

- **Install sources:** Static builds on macOS, Linux and Windows, plus Homebrew on macOS and Linux (FlyEnv searches the `tomcat` and `tomcat@x` formulae). MacPorts and SDKMAN are not used for Tomcat.
- **Per-version base directory:** each version gets its own CATALINA_BASE (defaulting to a per-major-version folder under FlyEnv's data directory), so several Tomcat versions keep independent configurations.

![Tomcat Version Manager with Static and Homebrew install sources](https://oss.macphpstudy.com/image/features/tomcat-2.webp)

## Service management

Start, stop and restart each Tomcat version from the **Service** tab, with per-version environment handling built in.

- **CATALINA_BASE per version:** the Service tab shows an extra header row with the version's CATALINA_BASE path, which you can change; the choice is persisted per version. On first start, FlyEnv creates the base directory by copying the `conf` files from the installation.
- **JAVA_HOME from the Java module:** Tomcat requires Java, and FlyEnv supplies JAVA_HOME through the environment it syncs from the [Java module](/features/java), so the running Tomcat uses the JDK you manage in FlyEnv. The [Java development environment guide](/guide/set-up-java-development-environment) covers installing and switching JDKs.
- **Platform-native startup:** on macOS, Tomcat runs in the foreground via `catalina.sh run` with CATALINA_BASE, CATALINA_PID and JAVA_HOME set, with console output captured to `logs/catalina.out`; on Windows it starts through `startup.bat` and FlyEnv discovers the JVM process; on Linux it runs through the root helper.

![Tomcat Service tab with editable CATALINA_BASE row](https://oss.macphpstudy.com/image/features/tomcat-3.webp)

## Configuration

Every Tomcat version keeps its configuration in its CATALINA_BASE, editable from FlyEnv without hunting through directories.

- **`server.xml` and `web.xml` tabs:** the module has dedicated tabs with raw editors for the two files you change most often.
- **More config files:** the underlying configuration support also covers `context.xml`, `tomcat-users.xml`, `logging.properties`, `catalina.properties` and `catalina.policy`.

![Editing server.xml for a Tomcat version](https://oss.macphpstudy.com/image/features/tomcat-4.webp)

## Site integration

Sites you create in FlyEnv with the **Tomcat** type are not reverse-proxied vhosts — they become real Tomcat `<Host>` entries reconciled directly into the version's `server.xml`. Site creation itself works the same as for any other type; see the [Host guide](/guide/host).

- **Reconciled with rollback:** when a site is saved, FlyEnv rewrites `server.xml` with the site's Host entry, keeping a snapshot so the file can be rolled back if the update fails.
- **SSL per site:** Tomcat sites support HTTPS with a certificate and key, including FlyEnv's automatic certificate; deleting a site also cleans up its auto-generated certificate.
- **Outside the other web servers' pipeline:** Tomcat sites are excluded from the Nginx, Apache, Caddy and FrankenPHP vhost generation — Tomcat serves them itself. For sites on the other servers, see [Local Sites, Custom Domains & HTTPS](/features/local-sites-https), and for a full Java web stack walkthrough see the [Spring Boot solution](/solutions/spring-boot).

![A Tomcat-type site reconciled into server.xml as a Host entry](https://oss.macphpstudy.com/image/features/tomcat-5.webp)

## Logs

The **Log** tab opens the Tomcat console log with search and refresh built in. On macOS and Linux this is `logs/catalina.out` under the version's CATALINA_BASE; on Windows, FlyEnv reads the dated `catalina.<yyyy-MM-dd>.log` files.

<FeatureRelatedLinks slug="tomcat" />

## Compatibility Notes

FlyEnv manages the local Tomcat runtime, its per-version configuration and site Host entries; it does not bundle the Tomcat manager web app or guarantee that every Tomcat version is available from every install source on every operating system. Verify the JDK required by your Tomcat version against the installed Java versions, and treat the [Download page](/download) and current release notes as the source for supported packages.
