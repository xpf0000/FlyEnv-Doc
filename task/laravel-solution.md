---
title: Run Laravel Locally with FlyEnv
description: Set up and manage a local Laravel development environment with PHP, Composer, MySQL or PostgreSQL, Redis, Nginx and HTTPS using FlyEnv on Windows, macOS and Linux.
head:
  - - meta
    - name: keywords
      content: Laravel local development, Laravel local environment, Laravel Windows, Laravel macOS, Laravel Linux, PHP, Composer, MySQL, PostgreSQL, Redis, Nginx, FlyEnv
---

# Run Laravel Locally with FlyEnv

Laravel projects often rely on more than PHP alone. FlyEnv helps you manage the runtimes, databases, web servers and optional services around a Laravel project from one local development environment.

[Download FlyEnv](/download.html)

## What is Laravel?

Laravel is a PHP web application framework designed for building modern web applications and APIs.

### Project resources

- [Official Website](https://laravel.com/)
- [GitHub Repository](https://github.com/laravel/laravel)
- [Official Documentation](https://laravel.com/docs)

For Laravel installation commands, supported PHP versions and framework-specific setup instructions, always refer to the official Laravel documentation.

## Typical local stack

A Laravel project may use some or all of the following components:

| Component | Typical role |
| --- | --- |
| **PHP** | Runs the Laravel application |
| **Composer** | Installs and manages PHP dependencies |
| **MySQL / MariaDB / PostgreSQL** | Stores application data |
| **Redis** | Cache, sessions, queues or other application services |
| **Nginx / Apache / Caddy** | Serves the local application |
| **Node.js** | Builds frontend assets when the project uses Vite or other frontend tooling |

Not every Laravel project needs every component above. The exact stack depends on the application.

## How FlyEnv helps

### Manage PHP versions

Install and switch between PHP versions without rebuilding your entire local development environment.

This is useful when maintaining multiple Laravel projects that target different PHP versions.

### Run the database your project needs

Use MySQL, MariaDB or PostgreSQL locally and manage database versions from FlyEnv.

### Add Redis when needed

Laravel can use Redis for caching, sessions, queues and other workloads. FlyEnv lets you run Redis alongside the rest of the project stack.

### Use a local domain and HTTPS

Configure a readable local address such as:

```text
https://laravel.test
```

and enable local HTTPS when the project needs it.

### Keep related services together

For projects that depend on several services, FlyEnv Startup Groups can keep the relevant components together so the local stack can be started and stopped as a group.

A typical Laravel development group might include:

```text
Laravel project
PHP
MySQL
Redis
Nginx
```

The exact services depend on the project.

## Set up the local environment

The Laravel project itself should be installed and configured according to the official Laravel documentation.

FlyEnv focuses on the surrounding local environment:

1. Select the PHP version required by the project.
2. Make sure Composer is available.
3. Start MySQL, MariaDB or PostgreSQL if the project needs a database.
4. Start Redis or other optional services when required.
5. Add the Laravel project to FlyEnv.
6. Configure the local domain, web server and HTTPS.
7. Group related services in a Startup Group when useful.
8. Start the stack and open the project in the browser.

## Example local stack

```text
Laravel
├── PHP
├── Composer
├── MySQL
├── Redis
├── Nginx
└── Node.js
```

This is an example rather than a fixed requirement. A Laravel project may use PostgreSQL instead of MySQL, may not use Redis, or may use a different web server.

## Useful FlyEnv capabilities for Laravel

- PHP version management
- Node.js runtime management
- MySQL / MariaDB / PostgreSQL
- Redis
- Nginx / Apache / Caddy
- Local domains
- HTTPS
- Startup Groups

## Laravel running locally

Once the project and its required services are ready, you can access the Laravel application through the local domain configured in FlyEnv.

> Add a real Laravel project screenshot here when available.

## Demo

If a FlyEnv + Laravel demo video is available, embed or link it here.

> Keep this section hidden until a real demo has been published.

## Related solutions

- WordPress
- Symfony
- Magento
- Django

## Ready to run Laravel locally?

Use FlyEnv to manage the runtimes, databases and services around your Laravel development environment.

[Download FlyEnv](/download.html)
