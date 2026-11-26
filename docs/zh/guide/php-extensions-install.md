---
description: '在 macOS、Linux 和 Windows 上通过 PECL、软件包或扩展库为 FlyEnv PHP 安装并启用扩展。'
---

# PHP扩展安装

## macOS & Linux

FlyEnv提供了PHP扩展的快捷安装

<img src="https://oss.macphpstudy.com/image/4e4fab8b6a43.png" data-x-image-preview="">
<p/>
<img src="https://oss.macphpstudy.com/image/f05dd95d81fc.png" data-x-image-preview="">

你也可以使用pecl命令来安装 PHP扩展

点击或拷贝路径. 在终端中 cd 到路径

<img src="https://oss.macphpstudy.com/image/c462e1c31e6.png" data-x-image-preview="">

安装 PHP xdebug扩展

```sh
./bin/pecl install xdebug
```

<img src="https://oss.macphpstudy.com/image/eb4e7fd0e2fd.png" data-x-image-preview="">

## Windows

扩展面板在 Windows 上提供了快捷安装：

- **在线扩展库。** 在要使用的 PHP 版本中打开「扩展」。FlyEnv 显示可用版本，并按扩展包选择兼容的 Windows PECL DLL 或 [PIE](https://github.com/php/pie)。FlyEnv 下载的 PIE 安装器适用于 x64 Windows。
- **内置扩展：** 扩展文件夹中默认包含了大多数常用扩展。PHP 不会自动启用它们——直接在面板中启用或禁用，FlyEnv 会自动更新 `php.ini`。

<img src="https://oss.macphpstudy.com/image/a4e9e0dd1b67.png" data-x-image-preview="">

手动安装时，从 [PECL](https://pecl.php.net/packages.php) 获取与 PHP 版本、架构和线程安全类型（TS/NTS）匹配的 DLL，将它放入所选版本的 `extension_dir`，并在该版本的配置中启用。Windows DLL 兼容性见 [PHP 手册](https://www.php.net/manual/en/install.pecl.windows.php)。

## 在所选 PHP 版本中验证扩展

使用刚修改的 PHP 版本执行以下命令。安装了多个版本时，请将 `php` 替换为目标版本的 `php` 或 `php.exe` 完整路径。

```text
php --ini
php -m
```

核对加载的 INI 路径，并确认模块出现在列表中。如果 PHP 启动时报错，检查扩展文件、依赖和 INI 指令。对于网站，请在 FlyEnv 的 [PHP-FPM 模块](/zh/features/php) 中重启所选 Web 工作进程，再在站点内验证。CLI 的输出只反映 CLI 进程。
