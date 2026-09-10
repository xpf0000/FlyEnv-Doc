---
layout: doc
titleTemplate: false
title: 'Node.js Development Environment and Project Services | FlyEnv'
description: 'Install Node.js versions, bind runtimes to projects and run Node services with ports, logs and local reverse proxies in FlyEnv.'
head:
  - - meta
    - name: description
      content: 'Install Node.js versions, bind runtimes to projects and run Node services with ports, logs and local reverse proxies in FlyEnv.'
  - - meta
    - property: og:title
      content: 'Node.js Development Environment and Project Services | FlyEnv'
  - - meta
    - property: og:description
      content: 'Install Node.js versions, bind runtimes to projects and run Node services with ports, logs and local reverse proxies in FlyEnv.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/features/nodejs
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/features/nodejs
---

<script setup>
import FeatureRelatedLinks from '../components/FeatureRelatedLinks.vue'
</script>

# Node.js development in FlyEnv

Node.js is a JavaScript runtime built on the V8 engine that runs JavaScript outside the browser, most often for web servers, APIs and command-line tools. FlyEnv's Node.js module combines version management with a project service workflow. Pick the runtime a project needs, run its command from the project directory, and keep its port, environment variables and logs visible beside your other local services.

## Manage Node.js versions

The **Version Manager** tab lists versions available to FlyEnv and the versions already installed on your machine. On macOS and Linux, FlyEnv can work with the configured `fnm` or `nvm` tool; the app also has a default managed-runtime workflow. On Windows, current releases use FlyEnv's built-in installation workflow rather than operating external NVM or FNM installations.

Use the version list to install the runtime before assigning it to a project. The exact binaries and package availability depend on the operating system and release metadata, so check the list in your current FlyEnv build rather than assuming a version is portable across platforms.

## Bind a runtime to a project

In **Node.js → Projects**, add the project path and choose the installed binary. FlyEnv's project model stores the selected binary path and version, then its shell integration can load the project environment when you enter that directory. This is useful when a legacy client app and a modern app require different Node.js versions.

The [project-level runtime guide](/guide/project-level-runtime-environment) shows the setup and shell behavior. It also covers PHP, Python, Go, Ruby and Java projects that use the same isolation model.

## Run a Node.js app as a managed service

Turn on **Run as service** in the project editor when the app should stay running. Configure:

- a command such as `npm run dev`, `npm run start` or the project's documented script;
- a TCP port, for example `3000`;
- environment variables directly or through an env file;
- optional config-file and log-file paths;
- a PID file path when the process creates one.

FlyEnv exposes start and stop controls in the project list and can show the project's output and error logs. The command runs from the project path, so dependency installation and build steps remain the project's responsibility.

For a custom stack, the same project-service model can run a script file or another executable. It is not limited to Express or Next.js; the important requirements are a valid start command and a listening port that the app can use locally.

## Put Node.js behind a local domain

A Node process can listen on `127.0.0.1:3000` while FlyEnv Host provides the browser-facing address. Add a site, configure a reverse-proxy rule to the project port and enable HTTPS when the integration needs a secure origin. This keeps the app's process lifecycle in the Node.js module and the domain/server configuration in Host.

Useful links:

- [Reverse Proxy Setup for NestJS and Node.js](/guide/reverse-proxy-nestjs-multi-servers) — configure Nginx, Apache or Caddy.
- [Local Sites, Custom Domains & HTTPS](/features/local-sites-https) — understand site roots, ports, certificates and aliases.
- [Deploy Node.js, Python & Go Without Docker](/guide/deploy-nodejs-python-go-without-docker) — complete project-service walkthrough.
- [Directus solution](/solutions/directus) and [Strapi solution](/solutions/strapi) — examples of Node-backed local stacks.

## See the workflow

The [Node project runtime demo](/demos) shows version selection, project services and Nginx working together. The [native Node.js, Python and Go services demo](/demos) shows the same service controls across several runtimes.

<FeatureRelatedLinks slug="nodejs" />

## Compatibility Notes

Node.js package managers, framework CLIs and production process managers remain separate tools. FlyEnv manages the local runtime selection and process entry; it does not replace `package.json` scripts, lockfiles, or a production deployment platform. Use the [Download page](/download) to install the current FlyEnv release for your operating system.
