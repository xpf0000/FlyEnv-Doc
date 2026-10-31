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

- **在线扩展库：** 搜索扩展目录（由 Packagist 提供数据）并一键安装。FlyEnv 会下载 [PIE](https://github.com/php/pie)（PHP 官方扩展安装器），并针对你当前的 PHP 版本完成安装，版本对应关系自动处理。下载 PIE 需要 x64 架构的 Windows。
- **内置扩展：** 扩展文件夹中默认包含了大多数常用扩展。PHP 不会自动启用它们——直接在面板中启用或禁用，FlyEnv 会自动更新 `php.ini`。

<img src="https://oss.macphpstudy.com/image/a4e9e0dd1b67.png" data-x-image-preview="">

你也可以手动安装：在 [https://pecl.php.net/packages.php](https://pecl.php.net/packages.php) 站点下载 `.dll` 文件，然后放到 PHP 扩展文件夹。







