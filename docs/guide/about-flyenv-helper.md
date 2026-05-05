# 📜 Detailed Guide to FlyEnv Helper

When using FlyEnv, the system typically prompts users to install the **FlyEnv Helper**. This article explains in detail why FlyEnv requires this helper program, its specific functions, and the installation and uninstallation methods across different operating systems.

## 1. Why do you need to install FlyEnv Helper?

The main FlyEnv program runs with **standard user privileges** by default. However, to provide a complete and seamless local development experience, certain core features require **administrator privileges (Administrator/Root)** to execute. These include the following four aspects:

* **Reading and writing the system hosts file**
* **File paths:** macOS (`/private/etc/hosts`), Windows (`C:\Windows\System32\drivers\etc\hosts`), Linux (`/etc/hosts`).
* **Reason:** By default, standard users cannot modify these files. To simulate a real production environment as closely as possible, FlyEnv does not restrict site domain names (unlike some software that forces `.test` domains), so it must write custom domains into the system hosts file for local resolution.


* **Binding network ports lower than 1024**
* **Reason:** In macOS and Linux systems, due to security mechanisms, standard user programs cannot directly bind to privileged ports 1-1023. If you want to access your sites directly via domain names without entering a port number in the browser when using Apache, Nginx, Caddy, or Tomcat, you must bind to the default ports 80 and 443, which requires administrator privileges.


* **Managing the Windows `$PATH` environment variable**
* **Reason:** One of FlyEnv's core features is the one-click configuration of environments like PHP, Node.js, Python, Java, Go, and Ruby into the system's global `$PATH`. The visual environment variable management tool (display/add/modify/delete) provided by FlyEnv also requires administrator privileges under the hood to directly modify system-level environment variables.


* **Automatically injecting the HTTPS root certificate into the system keychain**
* **Reason:** FlyEnv provides automated HTTPS support. When users create or edit a site, the system automatically generates a local SSL certificate. For browsers to trust this certificate, its corresponding "root certificate" must be installed and trusted in the system's keychain (Keychain / Credential Manager), an operation that also requires administrator privileges.



**💡 Advantages of the Privilege Separation Scheme:**
Without this helper program, FlyEnv would either have to "cripple" its features (e.g., only using IP access with port numbers, or forcing users to manually configure environment variables and SSL certificates), or frequently pop up authorization windows for every sensitive operation, severely impacting the development experience.
Therefore, FlyEnv adopts an industry-standard **privilege separation scheme**: the operations requiring elevated privileges are extracted into the FlyEnv Helper. Users **only need to authorize it once during initialization**, and all subsequent sensitive operations are seamlessly handled in the background by the Helper. This ensures both feature completeness and an excellent user experience.

---

## 2. Installation and Uninstallation Guide

The way FlyEnv Helper resides in the system varies by operating system. If the Helper installation fails, you can try navigating to the directories listed below and manually running the executable with administrator privileges. If you need to uninstall it, please refer to the corresponding system instructions below.

### Windows

In Windows, FlyEnv creates a "Scheduled Task" to automatically start the Helper in the background after the user logs in.

* **Executable location:** `[FlyEnv Installation Directory]\resources\helper\flyenv-helper.exe`

**Uninstallation Method:**
Please open PowerShell as an Administrator and execute the following commands to delete the scheduled tasks:

```powershell
schtasks.exe /delete /tn "FlyEnvHelperTask" /f
schtasks.exe /delete /tn "flyenv-helper" /f

```

### macOS

In macOS, FlyEnv creates a startup item via `launchd`.

* **Executable location:** `/Library/Application Support/FlyEnv/Helper/flyenv-helper`
* **Special Note:** During installation, the system will pop up a "Background Items Added" prompt; please be sure to **Allow** it.

**Uninstallation Method:**
Please open the Terminal and execute the following commands to remove the startup item and program files:

```bash
sudo launchctl enable "system/com.flyenv.helper"
sudo launchctl bootout system "/Library/LaunchDaemons/com.flyenv.helper.plist"
sudo rm -rf "/Library/LaunchDaemons/com.flyenv.helper.plist"
sudo rm -rf "/Library/Application Support/FlyEnv/Helper"

```

### Linux

In Linux, FlyEnv registers a system service via `systemd`, set to start on boot.

* **Executable location:** `/usr/local/bin/flyenv-helper`

**Uninstallation Method:**
Please open the Terminal and execute the following commands to stop the service and clean up the files:

```bash
sudo systemctl stop "flyenv-helper"
sudo systemctl disable "flyenv-helper"
sudo rm -f "/etc/systemd/system/flyenv-helper.service"
sudo rm -rf "/usr/local/bin/flyenv-helper"

```

---

## Summary

FlyEnv Helper is the behind-the-scenes hero that ensures the smooth operation of FlyEnv's core features (such as custom domain resolution, local HTTPS, port-free access, and automated environment variable configuration). Through a one-time secure authorization, it eliminates tedious manual configurations and frequent password prompts, creating a clean and efficient local development environment for you.