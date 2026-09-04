---
layout: doc
titleTemplate: false
title: 'Local n8n Automation Server with User Management | FlyEnv'
description: 'Install n8n versions via npm, run the server with managed env config, and manage users directly.'
head:
  - - meta
    - name: description
      content: 'Install n8n versions via npm, run the server with managed env config, and manage users directly.'
  - - meta
    - property: og:title
      content: 'Local n8n Automation Server with User Management | FlyEnv'
  - - meta
    - property: og:description
      content: 'Install n8n versions via npm, run the server with managed env config, and manage users directly.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://www.flyenv.com/features/n8n
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://www.flyenv.com/features/n8n
---

# Local n8n Automation with FlyEnv

FlyEnv runs n8n as a managed local automation server: pick a version from the npm registry and install it in the embedded terminal, launch `n8n start` with a visual environment configuration, and administer accounts in the Users tab without opening a database tool. The server listens on port 5678 by default, and FlyEnv can even recognize an n8n instance you started outside the app through its health endpoint.

![FlyEnv n8n module overview with service controls](https://oss.macphpstudy.com/image/features/n8n-1.webp)

## Version management

Unlike modules that ship binary downloads, the **n8n → Version Manager** tab works through the package registry, so a working Node.js installation with npm is a prerequisite.

- **Registry-backed version list:** FlyEnv pulls the last 20 stable n8n releases straight from `registry.npmjs.org`, so the offered versions always track what upstream publishes.
- **Install in the embedded terminal:** installing a version runs `npm install -g n8n@<version>` inside FlyEnv's built-in terminal, where you watch the real npm output instead of a progress bar.
- **Wide installation detection:** FlyEnv recognizes n8n installed by other tools too — it scans the common npm-global locations (`/usr/local/bin`, `/opt/homebrew/bin`, `~/.nvm`, `~/.volta`, and `%APPDATA%\npm` on Windows) as well as your `PATH`.

![n8n Version Manager listing releases from the npm registry](https://oss.macphpstudy.com/image/features/n8n-2.webp)

## Service and configuration

Starting the service launches `n8n start` with every environment variable read from FlyEnv's own `n8n.env` file, so the runtime behavior is fully reproducible from a file you control.

- **Visual form for common keys:** adjust `N8N_PORT`, `N8N_HOST`, `N8N_PROTOCOL` and `N8N_PATH`, choose `DB_TYPE`, set `N8N_USER_FOLDER` and `N8N_ENCRYPTION_KEY`, define the `WEBHOOK_URL`, tune log level and output, switch `EXECUTIONS_PROCESS`/`EXECUTIONS_MODE`, and toggle `N8N_METRICS` — all without editing the file by hand.
- **Raw editor:** a full source view of `n8n.env` covers any variable the form does not expose.
- **Automatic owner setup:** when `N8N_OWNER_EMAIL` and `N8N_OWNER_PASSWORD` are set and no database exists yet, FlyEnv completes the initial owner registration for you right after the server starts.
- **Reset owner escape hatch:** a danger-zone action deletes `database.sqlite` when you deliberately want to start over.
- **Managed lifecycle:** the sidebar and system-tray switches start and stop the server, the running state is confirmed against the `/healthz` endpoint, and on Windows FlyEnv reliably terminates the process by pid file, port listener and command match.

![Visual editor for n8n.env environment variables](https://oss.macphpstudy.com/image/features/n8n-3.webp)

## Users management

The **Users** tab talks to n8n's `database.sqlite` directly, so account administration works even while the server is stopped.

- **Locate the data:** pick the n8n data directory yourself, or let FlyEnv auto-scan the candidate locations where n8n keeps its SQLite database.
- **Full account control:** list, create and delete users, change a user's role, disable an account, and reset passwords — including the owner password.
- **Proper password hashing:** passwords are written with bcrypt, exactly as n8n itself stores them, so accounts you fix offline work the next time the server starts.

![n8n Users tab listing accounts from the SQLite database](https://oss.macphpstudy.com/image/features/n8n-4.webp)

## Dashboard

When the service is running, the Service tab's dashboard button opens the n8n editor in your browser at the address assembled from your configuration — protocol, host, port and path are all read from `n8n.env`, so a custom `N8N_PATH` or a non-default port is reflected in the link automatically. From there you build workflows against your local stack; the [local AI workflow guide](/guide/build-local-ai-workflow-by-n8n) shows n8n working together with models served by the [Ollama module](/features/ollama).

![n8n editor dashboard opened from FlyEnv](https://oss.macphpstudy.com/image/features/n8n-5.webp)

## Logs

Each installed version gets its own start logs — `n8n-<version>-start-out.log` and `n8n-<version>-start-error.log` — viewable from the Log tab inside FlyEnv. When a version refuses to come up or the health check never passes, these two files are the first place to look.

## Compatibility Notes

FlyEnv manages the local n8n process, its environment file and its user database; it does not bundle n8n itself. Installing or updating a version requires Node.js and npm on the machine and reaches the public npm registry, and the workflow behavior of a given n8n release is governed by n8n's own requirements. FlyEnv also does not control n8n instances it did not start — it detects an externally started server by its health endpoint and shows it as running, but lifecycle actions apply to the installation FlyEnv manages. For what ships with the app on your platform, refer to the [Download page](/download).
