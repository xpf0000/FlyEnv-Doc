---
description: 'Install and enable PHP extensions in FlyEnv on macOS, Linux, and Windows using PECL, package sources, or the extension library.'
---

# PHP Extensions Install

## macOS & Linux

FlyEnv provides quick installation of php extensions

<img src="https://oss.macphpstudy.com/image/4e4fab8b6a43.png" data-x-image-preview="">
<p/>
<img src="https://oss.macphpstudy.com/image/f05dd95d81fc.png" data-x-image-preview="">

You can also use the pecl command to install php extensions

Click or copy the path. cd to the path in the terminal

<img src="https://oss.macphpstudy.com/image/c462e1c31e6.png" data-x-image-preview="">

Install php xdebug extension

```sh
./bin/pecl install xdebug
```

<img src="https://oss.macphpstudy.com/image/eb4e7fd0e2fd.png" data-x-image-preview="">

## Windows

The extension panel provides quick installation on Windows:

- **Online catalog:** open **Extensions** from the PHP version you plan to use. FlyEnv shows available releases and uses a compatible Windows PECL DLL or [PIE](https://github.com/php/pie), depending on the package. The PIE installer FlyEnv downloads targets x64 Windows.
- **Bundled extensions:** the extension folder contains most common extensions by default. PHP does not enable them automatically — enable or disable them directly in the panel and FlyEnv updates `php.ini` for you.

<img src="https://oss.macphpstudy.com/image/a4e9e0dd1b67.png" data-x-image-preview="">

For manual installation, use a DLL from [PECL](https://pecl.php.net/packages.php) that matches the PHP release, architecture, and thread safety (TS/NTS). Place it in the selected version’s `extension_dir` and enable it in that version’s configuration. The [PHP manual](https://www.php.net/manual/en/install.pecl.windows.php) explains Windows DLL compatibility.

## Verify the extension on the selected PHP version

Run these commands with the executable for the PHP version you changed. If multiple versions are installed, use the full path to that version’s `php` or `php.exe` in place of `php`.

```text
php --ini
php -m
```

Check the loaded INI path and look for the module in the list. If PHP prints a startup warning, check the extension binary, its dependencies, and the INI directive. For a website, restart the selected web worker from FlyEnv’s [PHP-FPM module](/features/php) and verify the extension inside the site. The CLI output only describes the CLI process.
