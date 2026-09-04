---
layout: doc
titleTemplate: false
title: 'PHP Version Manager, PHP-FPM and Composer Tools | FlyEnv'
description: 'Install and switch PHP versions, manage PHP-FPM, php.ini and extensions, isolate project runtimes, manage Composer and create WordPress or Laravel projects in FlyEnv.'
head:
  - - meta
    - name: description
      content: 'Install and switch PHP versions, manage PHP-FPM, php.ini and extensions, isolate project runtimes, manage Composer and create WordPress or Laravel projects in FlyEnv.'
  - - meta
    - property: og:title
      content: 'PHP Version Manager, PHP-FPM and Composer Tools | FlyEnv'
  - - meta
    - property: og:description
      content: 'Install and switch PHP versions, manage PHP-FPM, php.ini and extensions, isolate project runtimes, manage Composer and create WordPress or Laravel projects in FlyEnv.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://www.flyenv.com/features/php
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://www.flyenv.com/features/php
---

# Local PHP Development with FlyEnv

PHP is a server-side scripting language used to build dynamic websites and web applications, from WordPress sites to applications on frameworks like Laravel and Symfony. FlyEnv manages the whole PHP side of your local stack in one app: multiple PHP versions, per-version PHP-FPM, visual `php.ini` and extension management, project-level runtimes, Composer, and one-click scaffolding for common PHP applications.

![FlyEnv PHP module overview](https://oss.macphpstudy.com/image/features/php-1.webp)

## PHP version management

Install multiple PHP versions side by side from **PHP → Version Manager** and switch between them at any time.

- **Multiple install sources:** Static builds on every platform, plus Homebrew (macOS and Linux) and MacPorts (macOS) for PHP installations managed by those package managers.
- **Custom versions:** point FlyEnv at any directory that contains your own PHP build; it scans for the `php` and `php-fpm` binaries and lists them next to the managed versions.
- **CLI version switching:** set which PHP version your terminal `php` command resolves to. FlyEnv adds or removes the version's bin directory in your `PATH` and marks whether the current entry was set by FlyEnv or by another tool.
- **Per-version alias and remark:** give each installation a short alias and note so similar builds stay distinguishable in the list.

![PHP Version Manager with install sources](https://oss.macphpstudy.com/image/features/php-2.webp)

![PHP service table with version, path, env and alias columns](https://oss.macphpstudy.com/image/features/php-3.webp)

## PHP-FPM service management

PHP-FPM is a dedicated module in FlyEnv, built for serving sites through Nginx, Apache or Caddy.

- **Per-version lifecycle:** start, stop or restart each PHP-FPM version individually, or use the sidebar switch (also available in the system tray) to start or stop all installed versions at once.
- **Socket-based on macOS and Linux:** each version listens on its own unix socket, so several PHP-FPM versions can run simultaneously and each site can be routed to a different one. FlyEnv regenerates the web-server integration config when a version starts.
- **Editable `php-fpm.conf`:** open and edit the FPM pool configuration per version (macOS and Linux), with FPM log and slow-log viewers built in.
- **Windows runs as FastCGI:** PHP serves the web server through FastCGI, and the number of FastCGI worker processes (`PHP_FCGI_CHILDREN`, 1–64) is adjustable per version.

![PHP-FPM module with per-version service controls](https://oss.macphpstudy.com/image/features/php-4.webp)

![Editing php-fpm.conf for a PHP version](https://oss.macphpstudy.com/image/features/php-5.webp)

## php.ini configuration

Every installed PHP version has its own `php.ini`, editable from the version's action menu.

- **Common settings form:** toggle or adjust frequently changed directives — `memory_limit`, `max_execution_time`, `upload_max_filesize`, `post_max_size`, `max_file_uploads`, `display_errors`, `log_errors`, `error_reporting`, `short_open_tag`, `date.timezone`, CA bundle paths and more — without editing the file by hand.
- **Full source editor:** switch to the raw file view for anything the form does not cover, with one-click restore to the default configuration.
- **`disable_functions` manager:** harden a version by disabling dangerous functions from a searchable checklist of roughly 170 common entries; changes are written back into `php.ini`.

![php.ini common settings form](https://oss.macphpstudy.com/image/features/php-6.webp)

![Managing disable_functions with a searchable checklist](https://oss.macphpstudy.com/image/features/php-7.webp)

## Extension management

Open **Extensions** from any PHP version to see what is loaded and install what is missing. The [extension installation guide](/guide/php-extensions-install) walks through a full example.

- **Loaded extensions:** a searchable list of the modules the version currently loads.
- **Homebrew and MacPorts PHP:** browse the extension formulae available for that PHP version, install or uninstall them in the embedded terminal, and copy a ready-made `extension=xxx.so` snippet — or a complete Xdebug configuration template — straight into `php.ini`.
- **Windows:** enable or disable the DLLs already present in the extension directory, or download extensions from the online library with one click.
- **Quick navigation:** jump directly to `php.ini` or open the extension directory in the file manager.

![Loaded extension list for a PHP version](https://oss.macphpstudy.com/image/features/php-8.webp)

![Installing a PHP extension from Homebrew](https://oss.macphpstudy.com/image/features/php-9.webp)

## Project-level PHP isolation

Different projects often need different PHP versions. In **PHP → Projects**, register each project folder and bind it to its own PHP binary — or keep it on the system version.

- **Per-project runtime:** double-click a project to switch its PHP version; the choice is stored in a `.flyenv` file inside the project directory, so terminals and editors launched from FlyEnv pick up the right PHP automatically.
- **Open-in tools:** jump from a project row into Terminal, PowerShell, VSCode, PhpStorm, WebStorm or Sublime with the project environment loaded.
- **Per-site PHP version:** each site in **Host** selects its own PHP-FPM version (or stays a static site), and the site list shows which version serves which site.

![PHP projects list with per-project PHP version binding](https://oss.macphpstudy.com/image/features/php-10.webp)

## Composer management

The **Composer** tab manages Composer like any other versioned tool in FlyEnv.

- Install and keep multiple Composer versions, from static builds or Homebrew depending on your platform.
- Add your own Composer installations from custom directories.
- Bind a specific Composer version to a project together with its PHP version, so dependency installs use a consistent toolchain.

![Composer version manager](https://oss.macphpstudy.com/image/features/php-11.webp)

## Quick project creation

**PHP → New Project** scaffolds common PHP applications without leaving the app. Supported templates: WordPress, Laravel, Yii2, ThinkPHP, Symfony, CodeIgniter, CakePHP, Slim, ClassicPress and Contao.

1. Pick a template and choose the framework version, the PHP version and the Composer version.
2. FlyEnv runs the Composer creation command in its embedded terminal, so you see the real output.
3. When the project is ready, create a matching site in one click — the web-server rewrite rules for that framework are pre-filled.

![PHP project template grid](https://oss.macphpstudy.com/image/features/php-12.webp)

![Creating a Laravel project with version selection](https://oss.macphpstudy.com/image/features/php-13.webp)

## More PHP tools

- **Log viewers:** open the PHP error log, the PHP-FPM log or the FPM slow log per version, with search and refresh built in.
- **phpMyAdmin:** from the MySQL or MariaDB module, set up phpMyAdmin in one step — FlyEnv downloads it and creates a local site served by your highest installed PHP version.
- **PHP Obfuscator:** a Tools-page utility that obfuscates PHP source code with a chosen PHP version, useful before handing code to third parties.

## PHP Application Servers

For application-server style PHP, FlyEnv has dedicated modules that complement the classic PHP-FPM setup:

- **FrankenPHP** — PHP bundled with a modern web-serving model.
- **RoadRunner** — PHP workers, Laravel Octane and fileserver presets.
- **Swoole CLI** — Native Swoole, Hyperf, EasySwoole, Laravel Octane and custom script presets.

The [PHP deployment guide](/guide/deploy-php-projects-without-docker) explains how to choose between them. For browser-facing sites, continue with [Local Sites, Custom Domains & HTTPS](/features/local-sites-https); framework-specific stacks are covered in the [Laravel](/solutions/laravel) and [WordPress](/solutions/wordpress) solutions.

## Compatibility Notes

FlyEnv manages the local runtime and process configuration; it does not guarantee that every PHP extension, framework version or third-party binary is available on every operating system. Verify the project's requirements against the installed PHP build, and treat the [Download page](/download) and current release notes as the source for supported packages.
