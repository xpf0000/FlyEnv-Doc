# FlyEnv Quick Start Guide

## Table of Contents
- [Installation](#installation)
    - [macOS](#macos)
    - [Windows](#windows)
    - [Linux](#linux)
- [Pre-Launch Preparation](#pre-launch-preparation)
- [Getting Started](#getting-started)
    - [Interface Setup](#interface-setup)
    - [Module Initialization](#module-initialization)
    - [Module Service Launch](#module-service-launch)
    - [Adding a Site](#adding-a-site)
    - [Setting Environment Variables](#setting-environment-variables)
- [Upgrading FlyEnv](#upgrading-flyenv)
- [Uninstallation](#uninstallation)
- [Frequently Asked Questions (FAQ)](#frequently-asked-questions-faq)
- [Community and Support](#community-and-support)

## Installation

### macOS

#### Install via Homebrew
```zsh
brew update && brew install flyenv
```

#### Download and Install
| Architecture | File                | GitHub Release | Baidu Netdisk   |
|:-------------|:--------------------|:--------------:|:--------------:| 
| Intel X86_64 | {version}.dmg       |  [Download](https://github.com/xpf0000/FlyEnv/releases/latest)  | [Download](https://pan.baidu.com/s/1tqHN9piZVVuTyTD3FXI71A?pwd=mnb4) |
| Apple Silicon | {version}-arm64.dmg | [Download](https://github.com/xpf0000/FlyEnv/releases/latest) |  [Download](https://pan.baidu.com/s/1tqHN9piZVVuTyTD3FXI71A?pwd=mnb4)  |

**Note**: If you only need a simple PHP and web server, you can try FlyEnv's derivative product: [FlyPHPServer](/zh/flyphpserver), available on the [Mac App Store](https://apps.apple.com/us/app/flyphpserver/id1506384441).

### Windows

#### Download and Install
Currently, only x86_64 architecture is supported.

| Architecture | File                  | GitHub Release | Baidu Netdisk   |
|:-------------|:----------------------|:--------------:|:--------------:| 
| X86_64       | {version}-Windows.zip |  [Download](https://github.com/xpf0000/FlyEnv/releases/latest)  | [Download](https://pan.baidu.com/s/1tqHN9piZVVuTyTD3FXI71A?pwd=mnb4) |

### Linux

#### Download and Install
Supports Debian / Ubuntu / Red Hat / Fedora / SUSE / CentOS systems, x86_64 and arm64 architectures.

| Architecture                             | File                  | GitHub Release | Baidu Netdisk   |
|:-----------------------------------------|:----------------------|:--------------:|:--------------:| 
| Debian/Ubuntu x86_64                     | {version}_amd64.deb   |  [Download](https://github.com/xpf0000/FlyEnv/releases/latest)  | [Download](https://pan.baidu.com/s/1tqHN9piZVVuTyTD3FXI71A?pwd=mnb4) |
| Red Hat/Fedora/SUSE/CentOS x86_64        | {version}.x86_64.rpm  | [Download](https://github.com/xpf0000/FlyEnv/releases/latest) |  [Download](https://pan.baidu.com/s/1tqHN9piZVVuTyTD3FXI71A?pwd=mnb4)  |
| Debian/Ubuntu arm64                      | {version}_arm64.deb   |  [Download](https://github.com/xpf0000/FlyEnv/releases/latest)  | [Download](https://pan.baidu.com/s/1tqHN9piZVVuTyTD3FXI71A?pwd=mnb4) |
| Red Hat/Fedora/SUSE/CentOS arm64          | {version}.aarch64.rpm | [Download](https://github.com/xpf0000/FlyEnv/releases/latest) |  [Download](https://pan.baidu.com/s/1tqHN9piZVVuTyTD3FXI71A?pwd=mnb4)  |

## Pre-Launch Preparation

### macOS
FlyEnv relies on Homebrew or Macports to manage services. Ensure you have one of the following tools installed:
- [Homebrew](https://brew.sh/)
- [Macports](https://www.macports.org/install.php)

**For Chinese users**: You can refer to [HomebrewCN](https://gitee.com/cunkai/HomebrewCN) for installation.

### Linux
It is recommended to install Homebrew to ensure the latest versions of services are used:
- [Homebrew](https://brew.sh/)

## Getting Started

### Notes
Before using FlyEnv, it is recommended to close other applications that may use the same ports (e.g., Apache/Nginx/MySQL) to avoid port conflicts.

### Interface Setup
After opening FlyEnv, all functional modules are displayed on the left by default. You can hide unnecessary modules in the settings.

![Interface Setup](https://oss.macphpstudy.com/image/get-start-1.png)

![Interface Setup](https://oss.macphpstudy.com/image/get-start-2.png)

For example, if you are only doing PHP development, you can display only Apache, PHP, MySQL, and Redis modules.

![PHP Development Interface Setup Example](https://oss.macphpstudy.com/image/get-start-3.png)

### Module Initialization
FlyEnv modules do not come with preset versions. Users need to select and install the required versions themselves. FlyEnv automatically detects modules installed via Homebrew or Macports.

1. On the module version interface, select and install the required version.
   ![Install Required Version](https://oss.macphpstudy.com/image/get-start-4.png)
2. After installation, the installed version will be displayed on the module service interface.
   ![Installed Version](https://oss.macphpstudy.com/image/get-start-5.png)
3. You can also add a custom module version path.
   ![Add Custom Module Version Path](https://oss.macphpstudy.com/image/get-start-6.png)

### Module Service Launch
There are two ways to launch module services:

1. **Launch a Single Module**: On the module service interface, select the version and click the launch button.
   ![Launch Single Module](https://oss.macphpstudy.com/image/get-start-7.png)
2. **Launch All Modules**: Click the "Launch All Modules" switch to start all displayed modules.
   ![Launch All Modules](https://oss.macphpstudy.com/image/get-start-8.png)

* You can set whether modules should launch together in the `GroupStart` column on the service interface.
  ![GroupStart](https://oss.macphpstudy.com/image/get-start-9.png)

If a module fails to launch, you can check the failure reason in the module logs.
![Module Service Launch Logs](https://oss.macphpstudy.com/image/get-start-10.png)

### Adding a Site
On the site interface, create a new site and configure the domain, SSL, etc. After the web server is launched, click the site link to access it.

![Add Site](https://oss.macphpstudy.com/image/get-start-11.png)

![Site List](https://oss.macphpstudy.com/image/get-start-12.png)

**Notes**:
1. It is recommended to close web servers not launched by FlyEnv (e.g., Apache/Nginx/Caddy) to avoid port conflicts.
2. Ensure the correct PHP version for the site is launched.
3. If DNS software is used, it may prevent the domain from resolving correctly to `127.0.0.1`.

### Setting Environment Variables
FlyEnv supports one-click environment variable setup:

- **macOS**: Adds `export PATH="xxx:$PATH"` to the `~/.zshrc` file.
- **Windows**: Adds the path to the system environment variables.

![Set Environment Variables](https://oss.macphpstudy.com/image/get-start-13.png)

You can also set aliases for different PHP versions (e.g., `php82`, `php83`) for easier use in the terminal.

![Set Aliases](https://oss.macphpstudy.com/image/get-start-14.png)

![Set Aliases](https://oss.macphpstudy.com/image/get-start-15.png)

After setup, if the terminal does not reflect the changes, restart the terminal.

## Upgrading FlyEnv
FlyEnv has a built-in auto-upgrade feature. If the upgrade fails, manually download and install the latest version.

**Note**: FlyEnv's program files and data files are separate, so upgrading will not cause data loss.

## Uninstallation
Use the system's default uninstallation method to uninstall FlyEnv. Data folders will not be deleted unless a third-party tool (e.g., CleanMyMac) is used and the data folder is selected.

### Data Folder Locations
- **macOS**: `~/Library/PhpWebStudy`
- **Windows**: Located in the same directory as the FlyEnv installation folder, named `PhpWebStudy-Data`.
- **Linux**: `~/.config/PhpWebStudy`

## Frequently Asked Questions (FAQ)

**Q: What should I do if a module fails to launch?**
- A: Check if other applications are using the same ports (e.g., 80, 3306) and close them. The module logs will also contain error details.

**Q: What should I do if a site is inaccessible?**
- A: Ensure the web server is launched. For PHP sites, ensure the correct PHP version is launched. Some frameworks require specific PHP extensions, so make sure they are installed. If non-standard ports (e.g., not 80 or 443) are used, include the port number when accessing the site.

**Q: How to access a site using IP + port?**
- A: Set an alias for the site. For example, `127.0.0.1`, `192.168.1.101`. Then specify the port.
  For different sites, do not use the same port. Otherwise, you may access the wrong site.

## Community and Support
- **GitHub Repository**: [FlyEnv GitHub](https://github.com/xpf0000/FlyEnv)
- **Issue Reporting**: [GitHub Issues](https://github.com/xpf0000/FlyEnv/issues)
- **Official Community**: [Discord Community](https://discord.gg/u5SuMGxjPE) | [GitHub Discussions](https://github.com/xpf0000/FlyEnv/discussions)

By following these steps, you can quickly get started with FlyEnv and configure your development environment as needed.
