# FlyEnv 快速开始指南

## 目录
- [安装](#安装)
    - [macOS](#macos)
    - [Windows](#windows)
    - [Linux](#linux)
- [启动前准备](#启动前准备)
- [启动并运行](#启动并运行)
    - [界面设置](#界面设置)
    - [模块初始化](#模块初始化)
    - [模块服务启动](#模块服务启动)
    - [添加站点](#添加站点)
    - [设置环境变量](#设置环境变量)
- [升级 FlyEnv](#升级-flyenv)
- [卸载](#卸载)
- [常见问题解答（FAQ）](#常见问题解答faq)
- [社区与支持](#社区与支持)

## 安装

### macOS

#### 使用 Homebrew 安装
```zsh
brew update && brew install flyenv
```

#### 下载安装
| 架构         | 文件                | GitHub 发布 | 百度网盘   |
|:-------------|:--------------------|:-----------:|:--------:| 
| Intel X86_64 | {version}.dmg       |  [下载](https://github.com/xpf0000/FlyEnv/releases/latest)  | [下载](https://pan.baidu.com/s/1tqHN9piZVVuTyTD3FXI71A?pwd=mnb4) |
| Apple Silicon | {version}-arm64.dmg | [下载](https://github.com/xpf0000/FlyEnv/releases/latest) |  [下载](https://pan.baidu.com/s/1tqHN9piZVVuTyTD3FXI71A?pwd=mnb4)  |

**提示**：如果你只需要一个简单的 PHP 服务和 Web 服务，可以尝试 FlyEnv 的衍生产品：[FlyPHPServer](/zh/flyphpserver)，已上架 [Mac App Store](https://apps.apple.com/us/app/flyphpserver/id1506384441)，可直接下载使用。

### Windows

#### 下载安装
当前仅支持 x86_64 架构。

| 架构         | 文件                  | GitHub 发布 | 百度网盘   |
|:-------------|:----------------------|:-----------:|:--------:| 
| X86_64       | {version}-Windows.zip |  [下载](https://github.com/xpf0000/FlyEnv/releases/latest)  | [下载](https://pan.baidu.com/s/1tqHN9piZVVuTyTD3FXI71A?pwd=mnb4) |

### Linux

#### 下载安装
支持 Debian / Ubuntu / Red Hat / Fedora / SUSE / CentOS 系统，x86_64 和 arm64 架构。

| 架构                             | 文件                  | GitHub 发布 | 百度网盘   |
|:---------------------------------|:----------------------|:-----------:|:--------:| 
| Debian/Ubuntu x86_64             | {version}_amd64.deb   |  [下载](https://github.com/xpf0000/FlyEnv/releases/latest)  | [下载](https://pan.baidu.com/s/1tqHN9piZVVuTyTD3FXI71A?pwd=mnb4) |
| Red Hat/Fedora/SUSE/CentOS x86_64| {version}.x86_64.rpm  | [下载](https://github.com/xpf0000/FlyEnv/releases/latest) |  [下载](https://pan.baidu.com/s/1tqHN9piZVVuTyTD3FXI71A?pwd=mnb4)  |
| Debian/Ubuntu arm64              | {version}_arm64.deb   |  [下载](https://github.com/xpf0000/FlyEnv/releases/latest)  | [下载](https://pan.baidu.com/s/1tqHN9piZVVuTyTD3FXI71A?pwd=mnb4) |
| Red Hat/Fedora/SUSE/CentOS arm64 | {version}.aarch64.rpm | [下载](https://github.com/xpf0000/FlyEnv/releases/latest) |  [下载](https://pan.baidu.com/s/1tqHN9piZVVuTyTD3FXI71A?pwd=mnb4)  |

## 启动前准备

### macOS
FlyEnv 依赖 Homebrew 或 Macports 来管理服务。请确保已安装以下工具之一：
- [Homebrew](https://brew.sh/)
- [Macports](https://www.macports.org/install.php)

**中国用户**：可以参考 [HomebrewCN](https://gitee.com/cunkai/HomebrewCN) 进行安装。

### Linux
建议安装 Homebrew，以确保使用最新版本的服务：
- [Homebrew](https://brew.sh/)

## 启动并运行

### 注意事项
在使用 FlyEnv 之前，建议关闭其他可能占用相同端口的应用程序（如 Apache/Nginx/MySQL 等），以避免端口冲突。

### 界面设置
打开 FlyEnv 后，所有功能模块默认显示在左侧。你可以根据需求在设置中隐藏不需要的模块。

![界面设置](https://oss.macphpstudy.com/image/get-start-1.png)

![界面设置](https://oss.macphpstudy.com/image/get-start-2.png)

例如，如果你仅进行 PHP 开发，可以只显示 Apache、PHP、MySQL 和 Redis 模块。

![PHP开发界面设置示例](https://oss.macphpstudy.com/image/get-start-3.png)

### 模块初始化
FlyEnv 的模块不包含预设版本，用户需自行选择并安装所需版本。FlyEnv 会自动检索 Homebrew 或 Macports 已安装的模块。

1. 在模块的版本界面，选择并安装所需版本。
   ![安装所需版本](https://oss.macphpstudy.com/image/get-start-4.png)
2. 安装完成后，模块的服务界面会显示已安装的版本。
   ![已安装的版本](https://oss.macphpstudy.com/image/get-start-5.png)
3. 你也可以添加自定义模块版本路径。
![添加自定义模块版本路径](https://oss.macphpstudy.com/image/get-start-6.png)

### 模块服务启动
有两种方式启动模块服务：

1. **启动单个模块**：在模块的服务界面，选择版本并点击启动按钮。
   ![启动单个模块](https://oss.macphpstudy.com/image/get-start-7.png)
2. **启动全部模块**：点击启动全部模块的开关，启动所有显示的模块。
   ![启动单个模块](https://oss.macphpstudy.com/image/get-start-8.png)

 * 你可以在服务界面的 `GroupStart` 列中设置模块是否一起启动。
   ![GroupStart](https://oss.macphpstudy.com/image/get-start-9.png)

如果模块启动失败，可以在模块日志中查看失败原因并进行处理。
![模块服务启动日志](https://oss.macphpstudy.com/image/get-start-10.png)

### 添加站点
在站点界面，新建站点并设置域名、SSL 等。Web 服务器启动后，点击站点链接即可访问。

![添加站点](https://oss.macphpstudy.com/image/get-start-11.png)

![站点列表](https://oss.macphpstudy.com/image/get-start-12.png)

**注意事项**：
1. 建议关闭非 FlyEnv 启动的 Web 服务器（如 Apache/Nginx/Caddy 等），以避免端口冲突。
2. 确保站点使用的 PHP 版本正确启动。
3. 如果使用 DNS 软件，可能会导致域名无法正确解析到本机 `127.0.0.1`。

### 设置环境变量
FlyEnv 支持一键设置环境变量：

- **macOS**：将 `export PATH="xxx:$PATH"` 添加到 `~/.zshrc` 文件中。
- **Windows**：将路径添加到系统环境变量中。

![设置环境变量](https://oss.macphpstudy.com/image/get-start-13.png)

你还可以为不同版本的 PHP 设置别名（如 `php82`、`php83`），方便在终端中使用。

![设置别名](https://oss.macphpstudy.com/image/get-start-14.png)

![设置别名](https://oss.macphpstudy.com/image/get-start-15.png)

设置完成后，如果终端未生效，请重启终端。

## 升级 FlyEnv
FlyEnv 内置了自动升级功能。如果升级失败，请手动下载最新版本安装。

**注意**：FlyEnv 的程序文件和数据文件是分开的，升级不会导致数据丢失。

## 卸载
使用系统默认的卸载方法即可卸载 FlyEnv。数据文件夹不会被删除，除非使用第三方工具（如 CleanMyMac）并勾选了数据文件夹。

### 数据文件夹位置
- **macOS**：`~/Library/PhpWebStudy`
- **Windows**：与 FlyEnv 安装文件夹同目录，文件夹名为 `PhpWebStudy-Data`。
- **Linux**：`~/.config/PhpWebStudy`

## 常见问题解答（FAQ）

**Q: 启动模块失败怎么办？**
- A: 请检查是否有其他应用程序占用了相同的端口（如 80、3306 等），并关闭这些应用程序。
模块的日志里也会有错误原因. 可以在模块日志中查看失败原因并进行处理

**Q: 站点无法访问怎么办？**
- A: 请确保 Web 服务器已启动. PHP站点确保站点使用的PHP版本已正确启动. 
有些框架需要特定的PHP扩展, 请确保已正确安装. 使用了非80,443端口的, 需要携带端口号访问.

**Q: 如何使用IP+端口访问站点？**
- A: 设置站点的别名. 例如 `127.0.0.1`, `192.168.1.101`. 然后再设置指定的端口.
  不同的站点, 端口不要重复. 否则会访问到错误的站点.

## 社区与支持
- **GitHub 仓库**: [FlyEnv GitHub](https://github.com/xpf0000/FlyEnv)
- **问题反馈**: [GitHub Issues](https://github.com/xpf0000/FlyEnv/issues)
- **官方社区**: [Discord Community](https://discord.gg/u5SuMGxjPE) [GitHub Discussions](https://github.com/xpf0000/FlyEnv/discussions)

通过以上步骤，你可以快速上手 FlyEnv，并根据需求灵活配置开发环境。
