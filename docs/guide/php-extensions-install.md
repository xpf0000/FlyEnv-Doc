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

- **Online library:** search the extension catalog (powered by Packagist) and install with one click. FlyEnv downloads [PIE](https://github.com/php/pie), the official PHP extension installer, and uses it to install the extension for your exact PHP version, so version matching is handled automatically. The PIE download requires x64 Windows.
- **Bundled extensions:** the extension folder contains most common extensions by default. PHP does not enable them automatically — enable or disable them directly in the panel and FlyEnv updates `php.ini` for you.

<img src="https://oss.macphpstudy.com/image/a4e9e0dd1b67.png" data-x-image-preview="">

You can also install an extension manually: download the `.dll` file from [https://pecl.php.net/packages.php](https://pecl.php.net/packages.php) and put it in the PHP extension folder.







