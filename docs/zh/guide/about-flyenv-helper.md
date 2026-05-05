# 📜 FlyEnv 帮助程序 (FlyEnv Helper) 详细说明

在使用 FlyEnv 时，系统通常会提示用户安装 **FlyEnv Helper（帮助程序）**。本文将详细解释为什么 FlyEnv 需要依赖该程序，它的具体作用，以及在不同操作系统下的安装与卸载方法。

## 1. 为什么需要安装 FlyEnv 帮助程序？

FlyEnv 主程序默认以**普通用户权限**运行。然而，为了提供完整且无缝的本地开发体验，部分核心功能必须依赖**管理员权限（Administrator/Root）**才能执行。具体包括以下四个方面：

* **读写系统 hosts 文件**
* **文件路径：** macOS (`/private/etc/hosts`)、Windows (`C:\Windows\System32\drivers\etc\hosts`)、Linux (`/etc/hosts`)。
* **原因：** 默认情况下，普通用户无法修改这些文件。为了最大程度模拟真实的生产环境，FlyEnv 对站点域名没有限制（不像某些软件强制使用 `.test` 域名），因此必须将自定义域名写入系统 hosts 文件以实现本地解析。


* **绑定低于 1024 的网络端口**
* **原因：** 在 macOS 和 Linux 系统中，出于安全机制，普通用户程序无法直接绑定 1-1023 的特权端口。如果你希望在使用 Apache、Nginx、Caddy 或 Tomcat 时，直接通过域名访问而无需在浏览器中输入端口号，就必须绑定默认的 80 和 443 端口，这需要管理员权限。


* **管理 Windows 系统的 `$PATH` 环境变量**
* **原因：** FlyEnv 的核心功能之一是支持将 PHP、Node.js、Python、Java、Go、Ruby 等环境一键配置到系统的全局 `$PATH` 中。FlyEnv 提供的环境变量可视化管理工具（展示/添加/修改/删除），在底层也需要管理员权限才能对系统级环境变量进行直接修改。


* **自动向系统钥匙串注入 HTTPS 根证书**
* **原因：** FlyEnv 提供了自动化的 HTTPS 支持。当用户新建或编辑站点时，系统会自动生成本地 SSL 证书。为了让浏览器信任该证书，必须将其对应的“根证书”安装并信任到系统的钥匙串（Keychain / 凭据管理器）中，该操作同样需要管理员权限。



**💡 权限分离方案的优势：**
如果没有该帮助程序，FlyEnv 要么只能“阉割”功能（例如只能使用带端口号的 IP 访问、强制要求用户手动配置环境变量和 SSL 证书），要么就在每次执行上述操作时频繁弹出权限验证窗口，严重影响开发体验。
因此，FlyEnv 采用了业界标准的**权限分离方案**：将需要提权的操作单独抽离至 FlyEnv Helper 中。用户**只需在初始化时授权一次**，后续所有敏感操作均由 Helper 在后台无感代办，既保证了功能的完整性，又兼顾了极佳的使用体验。

---

## 2. 安装与卸载指南

FlyEnv Helper 在不同操作系统下的驻留方式有所不同。如果 Helper 安装失败，你可以尝试进入下方列出的目录，手动以管理员权限运行可执行文件。若需要卸载，请参考以下对应系统的指令。

### Windows

在 Windows 系统中，FlyEnv 会创建一个“计划任务”，以便在用户登录后自动在后台启动 Helper。

* **可执行文件位置：** `[FlyEnv安装目录]\resources\helper\flyenv-helper.exe`

**卸载方法：**
请以管理员身份打开 PowerShell，并执行以下命令删除计划任务：

```powershell
schtasks.exe /delete /tn "FlyEnvHelperTask" /f
schtasks.exe /delete /tn "flyenv-helper" /f

```

### macOS

在 macOS 中，FlyEnv 会通过 `launchd` 创建一个启动项。

* **可执行文件位置：** `/Library/Application Support/FlyEnv/Helper/flyenv-helper`
* **特别说明：** 安装时，系统会弹出“后台项添加”提示，请务必**允许**。

**卸载方法：**
请打开终端（Terminal），执行以下命令移除启动项及程序文件：

```bash
sudo launchctl enable "system/com.flyenv.helper"
sudo launchctl bootout system "/Library/LaunchDaemons/com.flyenv.helper.plist"
sudo rm -rf "/Library/LaunchDaemons/com.flyenv.helper.plist"
sudo rm -rf "/Library/Application Support/FlyEnv/Helper"

```

### Linux

在 Linux 系统中，FlyEnv 会通过 `systemd` 注册一个系统服务，设置为开机自启。

* **可执行文件位置：** `/usr/local/bin/flyenv-helper`

**卸载方法：**
请打开终端，执行以下命令停止服务并清理文件：

```bash
sudo systemctl stop "flyenv-helper"
sudo systemctl disable "flyenv-helper"
sudo rm -f "/etc/systemd/system/flyenv-helper.service"
sudo rm -rf "/usr/local/bin/flyenv-helper"

```

---

## 总结

FlyEnv Helper 是保障 FlyEnv 核心功能（如自定义域名解析、本地 HTTPS、无端口访问以及自动化环境变量配置）顺畅运行的幕后功臣。它通过一次性的安全授权，免去了繁琐的手动配置和频繁的密码确认，为你打造一个纯净、高效的本地开发环境。
