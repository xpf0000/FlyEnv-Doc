---
title: 'How to Manage Multiple Node.js & PHP Versions Without NVM or PHP Monitor'
head:
  - - meta
    - name: description
      content: 'Stop struggling with NVM and PHP version managers. Learn how FlyEnv handles multiple Node.js and PHP versions with automatic per-project switching—no command line required.'
---

# How to Manage Multiple Node.js & PHP Versions Without NVM or PHP Monitor

If you've ever typed `nvm use 18` for the hundredth time, or fought with Homebrew's PHP version linking, you know the pain of version management. Different projects demand different versions, and switching between them is a productivity killer.

**There's a better way.** Project-level version isolation eliminates manual switching entirely. Your environment automatically matches whatever project you're working on.

## The Problem with Traditional Version Managers

### NVM Headaches
```bash
# Sound familiar?
cd ~/projects/legacy-app
nvm use 14  # Error: version not installed
nvm install 14
cd ~/projects/new-app  
nvm use 20  # Forgot to switch, now debugging weird errors
```

### PHP Version Nightmares
```bash
# Homebrew PHP switching
brew unlink php@8.1
brew link php@8.3 --force
# Restart terminal, check version, pray it works
```

### The Hidden Costs
- **Context switching overhead**: 30+ seconds every time you change projects
- **Version conflicts**: Global installs clash between projects
- **Team friction**: "Works on my machine" because versions differ
- **CI/CD mismatches**: Local environment differs from deployment

## FlyEnv's Solution: Automatic Project-Level Version Switching

FlyEnv eliminates manual version management through **automatic environment detection**:

### How It Works

1. **Create a project** in FlyEnv's interface
2. **Assign versions** to that project (PHP 7.4, Node 14, etc.)
3. **Navigate to the folder** in terminal
4. **Versions switch automatically** — no commands needed

```bash
cd ~/projects/client-legacy-wordpress
php -v  # PHP 7.4.33 (auto-loaded)
node -v # v14.21.3 (auto-loaded)

cd ~/projects/client-modern-laravel  
php -v  # PHP 8.3.4 (auto-loaded)
node -v # v20.11.1 (auto-loaded)
```

## Setting Up Project-Level Version Management

### Step 1: Create Your Project

Open FlyEnv and navigate to the language module (PHP, Node.js, Python, etc.):

![Project Management Interface](https://oss.macphpstudy.com/image/project-env1.png)

Click **"Add Project"** and enter:
- Project name
- Project path
- Default runtime version

![Add Project Interface](https://oss.macphpstudy.com/image/project-env2.png)

### Step 2: Configure Environment Variables

Each project gets its own isolated environment variables:

![Environment Variables Configuration](https://oss.macphpstudy.com/image/project-env3.png)

Common configurations include:
- `DATABASE_URL`
- `APP_ENV=local`
- `API_KEYS`
- Custom `PATH` additions

![Custom Environment Variables Configuration](https://oss.macphpstudy.com/image/project-env4.png)

![Custom Environment Variables Configuration Info](https://oss.macphpstudy.com/image/project-env5.png)

### Step 3: Install Multiple Versions

FlyEnv supports installing unlimited versions side-by-side:

| Language | Supported Versions |
|----------|-------------------|
| PHP | 5.6, 7.0, 7.1, 7.2, 7.3, 7.4, 8.0, 8.1, 8.2, 8.3, 8.4+ |
| Node.js | 10.x through 22.x+ (all LTS and current) |
| Python | 2.7, 3.6, 3.7, 3.8, 3.9, 3.10, 3.11, 3.12+ |
| Java | 8, 11, 17, 21 LTS versions |
| Go | 1.19, 1.20, 1.21, 1.22+ |

Install versions with one click—no compilation or complex setup.

## Real-World Workflow Examples

### Scenario 1: Agency Managing Multiple Clients

```
~/clients/
├── client-a-wordpress/     # PHP 7.4, Node 14
├── client-b-laravel/       # PHP 8.2, Node 18
├── client-c-symfony/       # PHP 8.3, Node 20
└── client-d-custom/        # PHP 8.1, Node 16
```

**With traditional tools:** Constant `nvm use` and `brew switch` commands. Daily frustration.

**With FlyEnv:** `cd` into any folder, correct versions are instantly active.

### Scenario 2: Framework Migration Project

Upgrading a Laravel app from version 9 to 11:

1. Clone project to `project-laravel11/`
2. Set up with PHP 8.3 in FlyEnv
3. Keep original in `project-laravel9/` with PHP 8.1
4. Switch between them instantly for comparison

### Scenario 3: Open Source Contributor

Contributing to projects with different requirements:

| Project | PHP Version | Node Version |
|---------|------------|--------------|
| WordPress Core | 7.4 | 14 |
| Laravel | 8.3 | 20 |
| Symfony | 8.2 | 18 |
| Custom Package | 8.1 | 16 |

No more remembering which project needs which version.

## Advanced Version Management Features

### Terminal Integration

FlyEnv automatically modifies your shell configuration:

**macOS/Linux (.zshrc/.bashrc):**
```bash
# Added by FlyEnv - loads project environment on cd
export PATH="/Users/name/.flyenv/shims:$PATH"
eval "$(flyenv init -)"
```

**Windows (PowerShell profile):**
```powershell
# Automatic version switching integrated
Import-Module FlyEnv
```

### IDE Compatibility

Project-level environments work seamlessly with:
- VS Code terminal
- PHPStorm terminal
- iTerm/Terminal.app
- Windows Terminal
- Any terminal that respects environment variables

### Site-Specific PHP Versions

Create sites with dedicated PHP versions:

1. Add site in FlyEnv's Host module
2. Select PHP version per site
3. Each site runs independently

Perfect for testing the same code across multiple PHP versions.

## Comparison: FlyEnv vs NVM vs PHP Monitor

| Feature | NVM | PHP Monitor | **FlyEnv** |
|---------|-----|-------------|------------|
| Command-line switching | ✅ | ✅ | Not needed (automatic) |
| GUI interface | ❌ | ✅ | ✅ |
| Multi-language support | Node only | PHP only | PHP, Node, Python, Go, Java, Ruby |
| Per-project isolation | Manual | Manual | Automatic |
| Version installation | Via command | Homebrew only | One-click GUI |
| Windows support | ✅ | ❌ | ✅ |
| Environment variables | ❌ | ❌ | ✅ |
| Team sharing | ❌ | ❌ | Project config files |

## Troubleshooting Version Issues

### "Wrong version in terminal"

1. Ensure FlyEnv's shell integration is enabled
2. Restart terminal after initial setup
3. Check project is registered in FlyEnv

### "Version not available"

1. Install the version in FlyEnv's module interface
2. Downloads come from official sources (no compilation)

### "Conflicts with existing version managers"

1. Remove NVM from `.zshrc` (FlyEnv replaces it)
2. Unlink Homebrew PHP: `brew unlink php`
3. Let FlyEnv manage all versions

## Frequently Asked Questions (FAQ)

**Q: Do I need to uninstall NVM or RVM to use FlyEnv?**

A: Not required, but recommended to avoid conflicts. FlyEnv completely replaces their functionality with a more elegant solution.

**Q: How does automatic switching work technically?**

A: FlyEnv adds shims to your PATH that detect the current directory and load the appropriate versions from your project configuration.

**Q: Can I still use version commands if needed?**

A: Yes. While automatic switching handles 99% of cases, you can still manually select versions in the FlyEnv GUI or use traditional commands.

**Q: Does this work in CI/CD pipelines?**

A: FlyEnv is designed for local development. For CI/CD, use Docker or the specific versions your production environment requires.

**Q: What happens if I cd outside any project folder?**

A: FlyEnv uses your system's default versions or a global default you configure.

**Q: Can team members use different version managers?**

A: Yes. Project configuration in FlyEnv doesn't interfere with teammates using other tools.

## Ready to Stop Managing Versions Manually?

Reclaim the hours spent switching between Node and PHP versions. Let your environment adapt to your work, not the other way around.

[Download FlyEnv Free](/download) — Works on macOS, Windows, and Linux

Learn more about [Project-Level Environment Isolation](/guide/project-level-runtime-environment) or jump straight into the [Quick Start Guide](/guide/getting-started).
