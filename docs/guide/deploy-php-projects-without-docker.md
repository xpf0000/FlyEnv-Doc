---
title: 'Deploy PHP Projects Without Docker in FlyEnv: PHP-FPM, FrankenPHP, RoadRunner, Swoole CLI and Workerman'
head:
  - - meta
    - name: description
      content: 'Deploy WordPress, Laravel, Symfony, Workerman, Hyperf and more without Docker. Use FlyEnv PHP-FPM, FrankenPHP, RoadRunner, Swoole CLI, SSL and databases.'
---

# Deploy PHP Projects Without Docker in FlyEnv: PHP-FPM, FrankenPHP, RoadRunner, Swoole CLI and Workerman

PHP projects no longer fit one local deployment pattern. A WordPress site needs a stable PHP-FPM stack, Laravel Octane needs an application server, Hyperf expects Swoole, and Workerman is a long-running PHP process that should not be forced into a fake Apache setup. Docker can solve this, but it often adds slow startup, heavy memory use, and a second layer of networking.

FlyEnv gives you a native PHP deployment workflow on Windows, macOS, and Linux: PHP CGI Service, PHP-FPM, FrankenPHP, RoadRunner, Swoole CLI, Composer, databases, custom domains, automatic SSL, reverse proxy rules, logs, and Cloudflare Tunnel in one desktop app.

## Choose the Right FlyEnv PHP Deployment Mode

Use this table before creating the project. It answers the practical question: "Which runtime should I use for this PHP app?"

| Project type | Recommended FlyEnv mode | Best fit | Why it works |
| --- | --- | --- | --- |
| WordPress, ClassicPress, Contao | PHP-FPM + Host | CMS and content sites | Stable request/response model, database integration, custom domain, HTTPS, and familiar Nginx/Apache/Caddy routing |
| Laravel, Symfony, Yii2, ThinkPHP, CodeIgniter, CakePHP, Slim | PHP-FPM + Host | Standard MVC and API projects | Production-like FastCGI routing without Docker, with per-project PHP versions and extension control |
| Legacy PHP or simple local scripts | PHP CGI Service | Compatibility testing | Useful when you need a lightweight CGI-backed PHP service instead of a full application server |
| Modern PHP apps using embedded web serving | FrankenPHP | Laravel, Symfony, API services | Runs PHP through the FrankenPHP runtime and integrates with FlyEnv Host, auto SSL, logs, and reverse proxy |
| Laravel Octane, PSR-7 workers, high-throughput APIs | RoadRunner | Octane, PHP Worker, existing `.rr.yaml` projects | Runs long-lived PHP workers, syncs ports, and binds to a FlyEnv-managed PHP runtime |
| Hyperf, EasySwoole, native Swoole, Laravel Octane on Swoole | Swoole CLI | Event-driven PHP services | Runs Swoole CLI projects with presets, config detection, environment variables, ports, and logs |
| Workerman, GatewayWorker, custom long-running PHP services | PHP Project Service | WebSocket, TCP, queue, and real-time apps | Runs `php start.php start` or a custom command as a managed service, then exposes it through Host reverse proxy |

## Common Setup for All PHP Projects

Before choosing a runtime, prepare the shared dependencies FlyEnv can manage for you.

1. Open **PHP -> Version Manager** and install the PHP versions your projects need.
2. Open **PHP -> Composer** and install Composer if the project uses packages.
3. Install required PHP extensions from **PHP -> Version Manager -> Extensions**.
4. Start the required database or cache modules, such as MySQL, MariaDB, PostgreSQL, Redis, or Memcached.
5. Add a local domain in **Host**, for example `myapp.test`, and enable automatic SSL if the project needs HTTPS.
6. Use **Cloudflare Tunnel** when you need to share the local site with a client, webhook provider, or mobile device outside your LAN.

FlyEnv keeps these services native. You do not need a Docker container just to test a PHP version, switch a database, expose a local URL, or inspect logs.

## Deploy WordPress, ClassicPress and CMS Projects

CMS projects usually need a web root, a database, a clean domain, and HTTPS. PHP-FPM + Host is the most predictable setup.

### Step 1: Create or import the project

FlyEnv can create common PHP projects through Composer, including WordPress, ClassicPress, Contao, Laravel, Symfony, Yii2, ThinkPHP, CodeIgniter, CakePHP, and Slim.

For an existing CMS project:

1. Put the project in your workspace.
2. Run `composer install` if the project has a `composer.json`.
3. Import the database through your preferred database client or the database module you use in FlyEnv.

### Step 2: Point Host to the correct document root

Use the public web root, not always the repository root.

| Project | Typical document root |
| --- | --- |
| WordPress / ClassicPress | Project root |
| Contao | `public` |
| Laravel | `public` |
| Symfony | `public` |
| Yii2 basic | `web` |
| ThinkPHP | `public` |
| CodeIgniter 4 | `public` |
| CakePHP | `webroot` |
| Slim skeleton | `public` |

In FlyEnv:

1. Open **Host**.
2. Add a site such as `wordpress.test`.
3. Select the project document root.
4. Choose the PHP version.
5. Enable SSL when the site needs secure cookies, OAuth callbacks, payment webhooks, or browser APIs that require HTTPS.
6. Save the site and start the web server plus PHP-FPM.

### Step 3: Link database and cache modules

Most CMS projects use MySQL or MariaDB.

```dotenv
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=wordpress_local
DB_USERNAME=root
DB_PASSWORD=your_password
```

For heavier projects, start Redis and configure the project cache or session driver. This keeps the stack close to production without running a containerized database.

## Deploy Laravel, Symfony and Other MVC Frameworks

For normal request/response applications, PHP-FPM remains the simplest high-quality option. It is faster to start than Docker Desktop, easier to inspect than a VM, and close to common production Nginx/Caddy/Apache setups.

### Step 1: Install dependencies

```bash
composer install
```

For frontend assets:

```bash
npm install
npm run dev
```

FlyEnv can manage Node.js and PHP side by side, so a Laravel project can use PHP 8.3 while its build step uses a specific Node.js version.

### Step 2: Configure environment variables

Copy the example environment file and set local services:

```bash
cp .env.example .env
php artisan key:generate
```

Typical local values:

```dotenv
APP_URL=https://laravel.test
DB_HOST=127.0.0.1
DB_PORT=3306
REDIS_HOST=127.0.0.1
MAIL_HOST=127.0.0.1
MAIL_PORT=1025
```

Use FlyEnv Mailpit for local email testing when the project sends signup, password reset, or notification emails.

### Step 3: Add the Host site

1. Add `laravel.test`, `symfony.test`, or another `.test` domain.
2. Set the document root to the framework public directory.
3. Select the PHP version and start PHP-FPM.
4. Open the logs from FlyEnv if the framework returns a 500 error.

For a detailed Laravel-only workflow, see [Run Laravel on FlyEnv](/guide/run-laravel-use-flyenv).

## Use PHP CGI Service for Compatibility Workflows

PHP CGI Service is useful when you need a lightweight local PHP service for older projects, Windows-oriented stacks, or compatibility testing.

Use it when:

1. The project is a simple PHP app with limited routing.
2. You need to test CGI behavior instead of a long-running worker.
3. You want a minimal service before moving the project to PHP-FPM.

For most new MVC and CMS projects, choose PHP-FPM first. Use PHP CGI Service when the project or operating system workflow specifically benefits from CGI compatibility.

## Deploy with FrankenPHP Without Manual Caddy Configuration

FrankenPHP is a modern PHP application server. It is a strong option when you want a native app-server workflow without Docker and without manually wiring PHP-FPM to a separate web server.

### Best projects for FrankenPHP

| Project | Fit |
| --- | --- |
| Laravel | Good for modern PHP serving and API development |
| Symfony | Good for apps that benefit from a Caddy-based PHP server |
| Slim and custom APIs | Good for lightweight HTTP services |
| Generic PHP sites | Good when the app works with FrankenPHP's bundled PHP runtime |

### FlyEnv workflow

1. Install FrankenPHP from its FlyEnv module.
2. Add or edit the project in **Host**.
3. Confirm FlyEnv has generated the FrankenPHP vhost config.
4. Enable SSL if the site needs HTTPS.
5. Start FrankenPHP and open the local domain.

Important: FrankenPHP uses its own bundled PHP runtime. If the project requires a specific FlyEnv-managed PHP binary, PHP-FPM or RoadRunner may be a better fit.

## Deploy Laravel Octane and PHP Workers with RoadRunner

RoadRunner is designed for long-lived PHP workers and high-throughput HTTP apps. In FlyEnv, the RoadRunner module supports existing configs, PHP Worker projects, Laravel Octane, fileserver mode, and custom commands.

### Laravel Octane with RoadRunner

Use this when you want Octane performance without Docker:

```bash
composer require laravel/octane spiral/roadrunner-cli spiral/roadrunner-http
php artisan octane:install --server=roadrunner
```

In FlyEnv:

1. Open the **RoadRunner** module.
2. Add a project and choose **Laravel Octane**.
3. Select the FlyEnv PHP runtime.
4. Set the project port, for example `3000`.
5. Start the project service.
6. Optionally add a Host reverse proxy from `https://octane.test` to `http://127.0.0.1:3000`.

### PHP Worker or existing RoadRunner config

For a worker project, FlyEnv can generate a `.rr.yaml` style config and keep the port synchronized.

```yaml
version: "3"

server:
  command: 'php -d display_startup_errors=0 -d display_errors=stderr worker.php'
  relay: pipes

http:
  address: 127.0.0.1:3000
```

Choose **Existing Config** when your project already has `.rr.yaml`, `.rr.yml`, `rr.yaml`, `rr.yml`, or `rr.json`.

## Deploy Hyperf, EasySwoole and Native Swoole with Swoole CLI

Swoole CLI is the right FlyEnv mode for event-driven PHP services. It avoids the common problem of mixing system PHP extensions, Homebrew builds, and framework-specific Swoole requirements.

### Supported Swoole CLI presets

| Preset | Command shape |
| --- | --- |
| Native Swoole | `swoole-cli server.php 3000` |
| Hyperf | `swoole-cli bin/hyperf.php start` |
| EasySwoole | `swoole-cli easyswoole server start` |
| Laravel Octane | `swoole-cli artisan octane:start --server=swoole --host=127.0.0.1 --port=3000` |
| PHP Script | `swoole-cli server.php` |
| Custom | Your own command |

### FlyEnv workflow

1. Install Swoole CLI in FlyEnv.
2. Add the project in the **Swoole CLI** module.
3. Choose the preset that matches your framework.
4. Confirm the project port and command.
5. Add environment variables or an env file if the service needs them.
6. Start the service and inspect logs from FlyEnv.
7. Use Host reverse proxy if you want a clean domain instead of `http://127.0.0.1:3000`.

FlyEnv can detect useful config paths such as Hyperf server/routes config, EasySwoole config files, Laravel Octane config, and `server.php`.

## Deploy Workerman and GatewayWorker in FlyEnv

Workerman is a common choice for WebSocket, TCP, queue, gateway, and real-time PHP services. It should run as a managed long-running process, not as a normal PHP-FPM request.

### Recommended mode

Use **PHP -> Project Service** with a custom command.

Typical Workerman command:

```bash
php start.php start
```

Do not use daemon mode for local FlyEnv service management unless you have a specific reason. A foreground process is easier for FlyEnv to stop, restart, and log.

### FlyEnv workflow

1. Install the PHP version required by the Workerman project.
2. Run dependencies:

```bash
composer install
```

3. Open **PHP -> Project Service**.
4. Add the project path.
5. Set the command to `php start.php start` or the project's documented start command.
6. Set the service port to the port your Workerman app listens on, for example `8787`.
7. Add any required environment variables.
8. Start the project service.

For a browser-facing Workerman HTTP or WebSocket app, create a Host reverse proxy:

| Host domain | Reverse proxy target |
| --- | --- |
| `https://socket.test` | `http://127.0.0.1:8787` |

This gives the app a clean HTTPS URL while Workerman still runs as a native PHP process.

## Connect PHP Projects with Other FlyEnv Modules

The deployment mode is only one part of the local environment. Most PHP projects also need services around them.

| Need | FlyEnv module | Example |
| --- | --- | --- |
| Dependency installation | Composer | `composer install`, `composer create-project` |
| PHP version isolation | PHP Version Manager | Run Laravel on PHP 8.3 and WordPress on PHP 8.2 |
| Extensions | PHP Extensions | Install or enable Redis, OpenSSL, Intl, GD, Imagick, PDO drivers |
| Database | MySQL, MariaDB, PostgreSQL | Local CMS and framework databases |
| Cache and queues | Redis, Memcached | Laravel cache/session/queue, Symfony cache |
| Frontend build | Node.js | Vite, Webpack, Tailwind, Symfony Encore |
| Custom domains | Host | `https://api.test`, `https://wordpress.test` |
| Automatic HTTPS | Host SSL | OAuth callbacks, secure cookies, webhook testing |
| Reverse proxy | Host | Map `https://octane.test` to `127.0.0.1:3000` |
| Public sharing | Cloudflare Tunnel | Share local WordPress, Laravel, Workerman, or Swoole services |
| Debugging | Logs and config viewers | Inspect PHP, PHP-FPM, FrankenPHP, RoadRunner, Swoole CLI, and project logs |
| Local AI assistance | Offline AI Agent | Review configs, explain errors, or generate migration notes without sending code to a cloud model |

## Practical Recommendations

1. Use **PHP-FPM + Host** for most WordPress, CMS, and MVC framework projects.
2. Use **FrankenPHP** when you want a modern native PHP app server and the bundled PHP runtime works for the app.
3. Use **RoadRunner** for Laravel Octane, PSR-7 workers, and high-throughput APIs.
4. Use **Swoole CLI** for Hyperf, EasySwoole, Swoole-based Octane, and native Swoole apps.
5. Use **PHP Project Service** for Workerman, GatewayWorker, queue workers, and custom long-running PHP commands.
6. Use **Cloudflare Tunnel** when a third-party webhook or client needs to access your local service.

## Video Walkthrough

Prefer watching? See Deploy PHP Apps Without Docker in FlyEnv: Laravel Octane, RoadRunner, Swoole & Workerman in action:

<iframe style="width: 100%; aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/5NqSag8c4YY?si=fBlpEHxBKjKR7nX1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Frequently Asked Questions (FAQ)

### Is FlyEnv a Docker alternative for PHP development?

Yes. FlyEnv runs native PHP, web server, database, cache, and tunnel services on Windows, macOS, and Linux. It avoids Docker Desktop overhead while still giving you isolated runtimes, local domains, SSL, logs, and service management.

### Which FlyEnv mode should I use for Laravel?

Use PHP-FPM + Host for normal Laravel development. Use RoadRunner or Swoole CLI when running Laravel Octane. Use FrankenPHP if your Laravel project fits FrankenPHP's runtime model.

### Can FlyEnv run Workerman?

Yes. Add Workerman as a PHP Project Service and use a command such as `php start.php start`. If the app serves HTTP or WebSocket traffic, expose it through a Host reverse proxy with automatic SSL.

### Does this work on Windows, macOS and Linux?

Yes. FlyEnv is built for native full-stack environment management across Windows, macOS, and Linux. Some low-level paths and package sources differ by OS, but the project workflow stays consistent.

## Next Steps

Install FlyEnv from the [Download page](/download), then create your first PHP site with [Custom Domains & Auto SSL](/guide/host). For public webhook testing or client previews, continue with [Expose Localhost with Cloudflare Tunnel](/guide/cloudflare-tunnel-local-development).
