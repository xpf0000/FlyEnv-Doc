---
title: 'FlyEnv Quick Start Guide: Get Running in 5 Minutes'
head:
  - - meta
    - name: description
      content: 'Complete FlyEnv setup guide for macOS, Windows, and Linux. Install, configure your first site, and start developing in under 5 minutes with automatic version management.'
---

# FlyEnv Quick Start Guide: Get Running in 5 Minutes

You have downloaded FlyEnv. Now what? This guide gets you from installation to a running local website in under five minutes—no terminal wizardry required.

## Installation

### macOS

**Option 1: Homebrew (Recommended)**
```bash
brew update && brew install flyenv
```

**Option 2: Download DMG**

| Architecture | Download |
|-------------|----------|
| Intel (x86_64) | [GitHub Release](https://github.com/xpf0000/FlyEnv/releases/latest) |
| Apple Silicon (M1/M2/M3) | [GitHub Release](https://github.com/xpf0000/FlyEnv/releases/latest) |

**Note for macOS users:** If you only need simple PHP hosting, check out [FlyPHPServer](/flyphpserver) on the Mac App Store—a lightweight companion app.

### Windows

Download and extract the ZIP file:

| Download Source | Link |
|----------------|------|
| GitHub Release | [Download](https://github.com/xpf0000/FlyEnv/releases/latest) |
| Baidu Netdisk | [Download](https://pan.baidu.com/s/1tqHN9piZVVuTyTD3FXI71A?pwd=mnb4) |

Run `FlyEnv.exe` after extraction.

### Linux

Supports Debian/Ubuntu (.deb) and Red Hat/Fedora/SUSE/CentOS (.rpm):

| Distribution | Architecture | Package |
|-------------|-------------|---------|
| Debian/Ubuntu | x86_64 | .deb |
| Debian/Ubuntu | arm64 | .deb |
| Red Hat/Fedora | x86_64 | .rpm |
| Red Hat/Fedora | arm64 | .rpm |

Download from [GitHub Releases](https://github.com/xpf0000/FlyEnv/releases/latest).

## First Launch Setup

### 1. Install FlyEnv Helper

On first launch, FlyEnv installs a helper program for system integration:
- **macOS/Linux**: May prompt for password
- **Windows**: Run as Administrator if installation fails

This helper manages services and system paths. It is required only once.

### 2. Customize Your Interface

FlyEnv shows all modules by default. Simplify your view:

1. Click **Settings** (gear icon)
2. Toggle modules you do NOT need off
3. Reorder remaining modules by drag-and-drop

**Recommended for PHP developers:** Keep Apache/Nginx, PHP, MySQL, Redis visible.

**Recommended for Node.js developers:** Keep Node.js, Nginx, MongoDB visible.

![Interface Setup](https://oss.macphpstudy.com/image/quick-start-1.webp)

### 3. Install Your First Version

Each module needs at least one version installed:

1. Click a module (e.g., **PHP**)
2. Switch to the **Versions** tab
3. Select a version (e.g., PHP 8.3)
4. Click **Install**

FlyEnv downloads and configures the version automatically.

![Version Installation](https://oss.macphpstudy.com/image/quick-start-2.webp)

**Pro tip:** Install multiple versions if you work on different projects. They coexist peacefully.

## Create Your First Website

### Step 1: Start Required Services

Before creating a site, start your web server and PHP:

1. Open **Apache** or **Nginx** module
2. Select your installed version
3. Click the **Start** button

Do the same for **PHP** and **MySQL** if needed.

![Service Start](https://oss.macphpstudy.com/image/quick-start-3.webp)

### Step 2: Create a Site

1. Open the **Host** module
2. Click **"Add Site"**
3. Fill in the details:
   - **Domain**: `myproject.test` (any domain works)
   - **Root Path**: `/Users/you/projects/myproject`
   - **PHP Version**: Select your installed version
   - **Port**: 80 (default)

4. Enable **Auto SSL** for HTTPS access
5. Click **Save**

![Add Site Form](https://oss.macphpstudy.com/image/quick-start-4.webp)

### Step 3: Access Your Site

After saving:
1. Start your web server (if not already running)
2. Click the site link in the Host list
3. Or open `https://myproject.test` in your browser

The SSL certificate is automatically trusted by your system.

## Setting Up Environment Variables

FlyEnv can manage your system PATH for terminal access:

1. Open any module
2. Click **"Set to System Path"**
3. Choose versions to add

For PHP, you can also create aliases:
- `php74` -> PHP 7.4
- `php83` -> PHP 8.3

![Environment Variables](https://oss.macphpstudy.com/image/get-start-13.png)
![Environment Variables Aliases](https://oss.macphpstudy.com/image/get-start-15.png)

**Restart your terminal** after setting PATH for changes to take effect.

## Quick Project Setup Examples

### Laravel Project

```bash
# Create project
composer create-project laravel/laravel myproject

# In FlyEnv Host module
# - Domain: myproject.test
# - Root: /path/to/myproject/public
# - PHP: 8.2 or 8.3
# - Nginx rewrite: Select "Laravel" template
```

### WordPress Site

```bash
# Download WordPress
curl -O https://wordpress.org/latest.tar.gz
tar -xzf latest.tar.gz

# In FlyEnv
# - Create database in MySQL module
# - Domain: wordpress.test
# - Root: /path/to/wordpress
# - Enable URL rewrite
```

### Static HTML Site

```bash
# Create folder
mkdir mystaticsite
echo "<h1>Hello FlyEnv</h1>" > mystaticsite/index.html

# In FlyEnv
# - Domain: static.test
# - Root: /path/to/mystaticsite
# - Set as "Static Site" (no PHP)
```

### Node.js/NestJS Project

```bash
# Create NestJS app
npm i -g @nestjs/cli
nest new myapi

# In FlyEnv
# - Start Node.js service
# - Use Nginx reverse proxy to port 3000
# - See reverse proxy guide for details
```

## Managing Services

### Start All at Once

Enable **GroupStart** for modules you want to launch together:

1. Open module service panel
2. Check **GroupStart** checkbox
3. Use the main "Start All" switch

![GroupStart Setting](https://oss.macphpstudy.com/image/get-start-8.png)

### Check Logs

If a service fails to start:

1. Click the **Logs** button in the module
2. Review error messages
3. Common issues: port conflicts, missing dependencies

## Upgrading FlyEnv

FlyEnv includes auto-update functionality:

1. Check **Settings** -> **About** for updates
2. Or download the latest release manually

**Your data is safe:** Program files and data are stored separately. Upgrading never deletes your sites or databases.

## Uninstallation

Should you need to remove FlyEnv:

### macOS
```bash
# Remove app
rm -rf /Applications/FlyEnv.app

# Remove data (optional)
rm -rf ~/Library/FlyEnv
rm -rf ~/Library/PhpWebStudy
```

### Windows
1. Delete the FlyEnv folder
2. Data folder is `FlyEnv-Data` in the same directory

### Linux
```bash
# Remove package
sudo apt remove flyenv  # or rpm equivalent

# Remove data
rm -rf ~/.config/FlyEnv
```

## Troubleshooting

### "Port already in use" errors

**Cause**: Another application using port 80, 443, or 3306

**Solution**:
```bash
# Find process using port 80
sudo lsof -i :80

# Or change FlyEnv ports in settings
```

### "Permission denied" on macOS

**Solution**: Grant Full Disk Access to FlyEnv in System Preferences -> Security & Privacy

### Site shows "502 Bad Gateway"

**Causes**:
1. PHP-FPM not running
2. Wrong PHP version selected for site
3. Incorrect nginx/apache configuration

**Solution**: Check PHP-FPM is started and logs for errors.

### Changes not reflecting

**Solution**: 
1. Clear browser cache
2. Restart web server
3. Check file permissions

## Frequently Asked Questions (FAQ)

**Q: Do I need to know command line to use FlyEnv?**

A: No. While terminal access is available, everything can be done through the GUI.

**Q: Can I use my existing Homebrew installations?**

A: Yes. FlyEnv detects Homebrew and Macports installations automatically.

**Q: How do I backup my sites?**

A: Your project files are in your chosen directories. Database exports can be done through the MySQL module.

**Q: Can I import an existing project?**

A: Absolutely. Just point the Host root path to your existing project folder.

**Q: What domains can I use?**

A: Any domain ending in .test, .local, .dev, or custom TLDs. Avoid .local on some networks due to mDNS conflicts.

## Next Steps

Now that you are running, explore these features:

- [Project-Level Version Isolation](/guide/project-level-runtime-environment) — Automatic version switching
- [Custom Domains & SSL](/guide/host) — Professional local development
- [Build Local AI Agent](/guide/build-local-offline-ai-agent) — Offline AI with Ollama

[Download FlyEnv](/download) if you haven't already, and happy coding!
