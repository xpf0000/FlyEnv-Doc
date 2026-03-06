---
title: Project-Level Version Isolation Without Docker - FlyEnv Guide
head:
  - - meta
    - name: description
      content: Stop juggling Node.js/PHP versions manually. Learn how FlyEnv's project-level environment isolation automatically switches runtimes when you cd into directories—no Docker needed, 80% less RAM usage.
---

# Project-Level Version Isolation Without Docker

Tired of typing `nvm use` or manually editing `PATH` every time you switch projects? Running `node -v` in different folders and getting the wrong version? Docker Desktop eating your RAM just to manage simple environment switching?

FlyEnv solves this with **true project-level environment isolation**. It's a lightweight, native alternative to Docker Desktop and NVM—automatically loading the correct Node.js, PHP, Python, Go, Ruby, or Java version the moment you `cd` into a project directory. No containers, no bloat, just native binaries that start in milliseconds.

## Why You Need Project-Level Isolation

### The Pain Points of Manual Version Management

| Problem | Traditional Solution | The Pain |
|---------|---------------------|----------|
| Multiple projects need different Node.js versions | NVM + manual switching | Forget to switch, debug for hours |
| PHP 7.4 legacy project + PHP 8.3 new project | Edit shell profiles constantly | Easy to mess up global PATH |
| Team members using different versions | Docker Compose | 2GB+ RAM overhead for simple CLI tools |
| Environment variables per project | `.env` files + export scripts | Scattered config, hard to maintain |

### How FlyEnv Changes the Game

FlyEnv brings **native, instant environment switching** without the Docker overhead:

- ✅ **Zero-config switching**: Walk into a project folder, the right version loads automatically
- ✅ **80% less RAM**: Native binaries vs Docker containers
- ✅ **One-click setup**: No terminal commands to memorize
- ✅ **Cross-platform**: Identical workflow on macOS and Windows
- ✅ **6 languages supported**: Node.js, PHP, Python, Go, Ruby, Java

## Step-by-Step: Setting Up Project Isolation

### Step 1: Access Project Management

Open FlyEnv and select your language tab:

1. Launch the FlyEnv Control Panel
2. Click on the **Node.js**, **PHP**, **Python**, **Go**, **Ruby**, or **Java** tab
3. Navigate to the Project section

![Project Management Interface - Language tabs showing Node.js, PHP, Python, Go, Ruby, Java options](https://oss.macphpstudy.com/image/project-env1.png)

### Step 2: Add Your Project

Register a project for automatic environment loading:

1. Click the **"Add Project"** button
2. Enter a memorable project name (e.g., "legacy-api" or "new-dashboard")
3. Select or type the absolute path to your project folder
4. Save

![Add Project Dialog - Name field and path selector](https://oss.macphpstudy.com/image/project-env2.png)

### Step 3: Pin the Runtime Version

This is where the magic happens—lock a specific version to this project:

1. Double-click your newly added project in the list
2. From the **Version dropdown**, select the exact runtime version this project needs:
   - Node.js: `18.19.0`, `20.11.0`, `21.6.0`, etc.
   - PHP: `7.4.33`, `8.2.15`, `8.3.2`, etc.
   - Python: `3.9.18`, `3.11.7`, `3.12.1`, etc.
3. Click **Save** — you're done!

![Version Selection Dropdown - Project settings with version picker](https://oss.macphpstudy.com/image/project-env3.png)

::: tip Pro Tip
You can install multiple versions of the same language through FlyEnv's main interface. All installed versions will appear in the project-level dropdown.
:::

### Step 4: Configure Project-Specific Environment Variables

Many projects need custom `PATH`, `DATABASE_URL`, or API keys:

1. Select your project and click **"Project Environment"**
2. View currently inherited system variables
3. Add or override variables:
   - Click **"Add Variable"**
   - Enter key-value pairs (e.g., `NODE_ENV=production`, `PHP_MEMORY_LIMIT=512M`)
4. Variables are saved per-project and load automatically

![Environment Variables Panel - List of configured env vars](https://oss.macphpstudy.com/image/project-env4.png)

![Environment Variable Editor - Add/Edit variable dialog](https://oss.macphpstudy.com/image/project-env5.png)

## The Magic: Automatic Terminal Loading

Here's where FlyEnv shines compared to manual tools like NVM or Pyenv.

Once configured, simply open your terminal:

```bash
# Navigate to your project
cd ~/work/legacy-php-project

# Check PHP version - automatically correct!
php -v
# PHP 7.4.33 (cli) (built: ...)

cd ~/work/modern-node-app

node -v
# v20.11.0

which node
# /Users/you/.flyenv/versions/node/20.11.0/bin/node
```

FlyEnv's shell integration detects your current directory and injects the correct paths **before** your command runs. No `nvm use`, no `source venv/bin/activate`, no forgetting to switch.

![Terminal Demo - Showing automatic version switching on cd](https://oss.macphpstudy.com/image/project-env6.png)

## Language-Specific Examples

### Node.js Projects

Perfect for agencies juggling client projects:

| Project | Recommended Version | Why |
|---------|---------------------|-----|
| Legacy maintenance | Node.js 16.x | Older webpack compatibility |
| Stable production | Node.js 18.x LTS | AWS Lambda, stable ecosystem |
| Modern development | Node.js 20.x+ | Native test runner, performance |

### PHP Projects

Switch between frameworks effortlessly:

| Framework | PHP Version | Notes |
|-----------|-------------|-------|
| WordPress legacy | 7.4 | Old plugin compatibility |
| Laravel 10+ | 8.2+ | Latest features, performance |
| Symfony 7 | 8.3 | Cutting-edge PHP features |

### Python Projects

Replace virtualenv/conda for simple cases:

```bash
cd ~/data-science-project
python --version
# Python 3.11.7

cd ~/legacy-django
python --version  
# Python 3.8.18
```

## Video Walkthrough

Prefer watching? See FlyEnv's project isolation in action:

<iframe style="width: 100%; aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/Cpq6i9T6IK4?si=E-47n3AQwJEBygoh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Frequently Asked Questions (FAQ)

**Q: Does FlyEnv use Docker containers?**  
A: No. FlyEnv runs native binaries compiled for your OS (macOS/Windows/Linux). This means startup times under 100ms and memory usage up to 80% lower than Docker Desktop.

**Q: Can I use this as an NVM alternative?**  
A: Absolutely. FlyEnv handles Node.js version management with zero-config directory-based switching—no more typing `nvm use` or forgetting to switch versions.

**Q: Is this better than XAMPP for PHP development?**  
A: For multi-project workflows, yes. XAMPP uses a single global PHP version. FlyEnv lets each project use its own PHP version, and integrates with Nginx/Apache/Caddy natively.

**Q: Does it work with CI/CD pipelines?**  
A: The project configuration is stored in FlyEnv's settings. For CI/CD, you typically specify versions in your workflow files. FlyEnv excels at local development consistency.

**Q: What if a team member doesn't use FlyEnv?**  
A: They can still use the project with their own version manager. FlyEnv doesn't modify your project's files—no `.nvmrc`, `composer.json` hacks, or Dockerfile requirements.

**Q: How do I uninstall a version?**  
A: Go to the main language tab in FlyEnv, right-click the version, and select "Uninstall". Projects using that version will gracefully fall back or prompt you to select a new one.

## Next Steps

Ready to stop wrestling with version managers?

1. **[Download FlyEnv](/download)** — Free for macOS, Windows, and Linux
2. **[Compare with Docker & XAMPP](/guide/flyenv-vs-docker-xampp)** — See why developers are switching
3. **[Manage Multiple Versions](/guide/manage-multiple-node-php-versions)** — Install and maintain your runtime library

Want to go further? Learn how to [deploy Node.js/Python/Go without Docker](/guide/deploy-nodejs-python-go-without-docker) using FlyEnv's built-in reverse proxy and process management.
