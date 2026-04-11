---
title: '如何在不使用 NVM 或 PHP Monitor 的情况下管理多个 Node.js 和 PHP 版本'
head:
  - - meta
    - name: description
      content: '告别 NVM 和 PHP 版本管理器的困扰。了解 FlyEnv 如何通过自动按项目切换来处理多个 Node.js 和 PHP 版本，无需命令行。'
---

# 如何在不使用 NVM 或 PHP Monitor 的情况下管理多个 Node.js 和 PHP 版本

如果你曾经第一百次输入 `nvm use 18`，或者与 Homebrew 的 PHP 版本链接作斗争，你就知道版本管理的痛苦。不同的项目需要不同的版本，在它们之间切换会严重影响生产力。

**有更好的方法。** 项目级版本隔离完全消除了手动切换。你的环境会自动匹配你正在处理的任何项目。

## 传统版本管理器的问题

### NVM 的困扰
```bash
# 听起来熟悉吗？
cd ~/projects/legacy-app
nvm use 14  # 错误：版本未安装
nvm install 14
cd ~/projects/new-app  
nvm use 20  # 忘记切换了，现在在调试奇怪的错误
```

### PHP 版本的噩梦
```bash
# Homebrew PHP 切换
brew unlink php@8.1
brew link php@8.3 --force
# 重启终端，检查版本，祈祷它能工作
```

### 隐藏的成本
- **上下文切换开销**：每次更换项目需要 30 多秒
- **版本冲突**：全局安装在不同项目之间冲突
- **团队协作摩擦**：因为版本不同而出现"在我机器上可以运行"
- **CI/CD 不匹配**：本地环境与部署环境不同

## FlyEnv 的解决方案：自动项目级版本切换

FlyEnv 通过**自动环境检测**消除手动版本管理：

### 工作原理

1. 在 FlyEnv 界面中**创建项目**
2. **分配版本**给该项目（PHP 7.4、Node 14 等）
3. 在终端中**导航到文件夹**
4. **版本自动切换** — 无需命令

```bash
cd ~/projects/client-legacy-wordpress
php -v  # PHP 7.4.33（自动加载）
node -v # v14.21.3（自动加载）

cd ~/projects/client-modern-laravel  
php -v  # PHP 8.3.4（自动加载）
node -v # v20.11.1（自动加载）
```

## 设置项目级版本管理

### 步骤 1：创建你的项目

打开 FlyEnv 并导航到语言模块（PHP、Node.js、Python 等）：

![Project Management Interface](https://oss.macphpstudy.com/image/project-env1.png)

点击 **"添加项目"** 并输入：
- 项目名称
- 项目路径
- 默认运行时版本

![Add Project Interface](https://oss.macphpstudy.com/image/project-env2.png)

### 步骤 2：配置环境变量

每个项目都有自己独立的环境变量：

![Environment Variables Configuration](https://oss.macphpstudy.com/image/project-env3.png)

常见配置包括：
- `DATABASE_URL`
- `APP_ENV=local`
- `API_KEYS`
- 自定义 `PATH` 添加项

![Custom Environment Variables Configuration](https://oss.macphpstudy.com/image/project-env4.png)

![Custom Environment Variables Configuration Info](https://oss.macphpstudy.com/image/project-env5.png)

### 步骤 3：安装多个版本

FlyEnv 支持并行安装无限数量的版本：

| 语言 | 支持的版本 |
|----------|-------------------|
| PHP | 5.6, 7.0, 7.1, 7.2, 7.3, 7.4, 8.0, 8.1, 8.2, 8.3, 8.4+ |
| Node.js | 10.x 到 22.x+（所有 LTS 和当前版本） |
| Python | 2.7, 3.6, 3.7, 3.8, 3.9, 3.10, 3.11, 3.12+ |
| Java | 8, 11, 17, 21 LTS 版本 |
| Go | 1.19, 1.20, 1.21, 1.22+ |

一键安装版本 — 无需编译或复杂设置。

## 实际工作流程示例

### 场景 1：管理多个客户的代理公司

```
~/clients/
├── client-a-wordpress/     # PHP 7.4, Node 14
├── client-b-laravel/       # PHP 8.2, Node 18
├── client-c-symfony/       # PHP 8.3, Node 20
└── client-d-custom/        # PHP 8.1, Node 16
```

**使用传统工具：** 不断的 `nvm use` 和 `brew switch` 命令。日常的挫败感。

**使用 FlyEnv：** `cd` 进入任何文件夹，正确的版本立即激活。

### 场景 2：框架迁移项目

将 Laravel 应用从版本 9 升级到 11：

1. 克隆项目到 `project-laravel11/`
2. 在 FlyEnv 中使用 PHP 8.3 设置
3. 在 `project-laravel9/` 中保留原始版本，使用 PHP 8.1
4. 在它们之间即时切换进行比较

### 场景 3：开源贡献者

为具有不同需求的项目做贡献：

| 项目 | PHP 版本 | Node 版本 |
|---------|------------|--------------|
| WordPress Core | 7.4 | 14 |
| Laravel | 8.3 | 20 |
| Symfony | 8.2 | 18 |
| Custom Package | 8.1 | 16 |

不再需要记住哪个项目需要哪个版本。

## 高级版本管理功能

### 终端集成

FlyEnv 自动修改你的 shell 配置：

**macOS/Linux (.zshrc/.bashrc)：**
```bash
# 由 FlyEnv 添加 - 在 cd 时加载项目环境
source "/Applications/FlyEnv.app/Contents/Resources/helper/flyenv.sh"
```

**Windows (PowerShell profile)：**
```powershell
# 由 FlyEnv 添加 - 在 cd 时加载项目环境
# FlyEnv Auto-Load
. "FlyEnv数据文件夹/server/bin/flyenv.ps1"
```

### IDE 兼容性

项目级环境可与以下工具无缝协作：
- VS Code 终端
- PHPStorm 终端
- iTerm/Terminal.app
- Windows Terminal
- 任何尊重环境变量的终端

### 站点特定的 PHP 版本

创建具有专用 PHP 版本的站点：

1. 在 FlyEnv 的 Host 模块中添加站点
2. 为每个站点选择 PHP 版本
3. 每个站点独立运行

非常适合在多个 PHP 版本上测试相同的代码。

## 对比：FlyEnv vs NVM vs PHP Monitor

| 功能 | NVM | PHP Monitor | **FlyEnv** |
|---------|-----|-------------|------------|
| 命令行切换 | ✅ | ✅ | 不需要（自动） |
| GUI 界面 | ❌ | ✅ | ✅ |
| 多语言支持 | 仅 Node | 仅 PHP | PHP、Node、Python、Go、Java、Ruby |
| 按项目隔离 | 手动 | 手动 | 自动 |
| 版本安装 | 通过命令 | 仅 Homebrew | 一键 GUI |
| Windows 支持 | ✅ | ❌ | ✅ |
| 环境变量 | ❌ | ❌ | ✅ |
| 团队共享 | ❌ | ❌ | 项目配置文件 |

## 版本问题故障排除

### "终端中显示错误的版本"

1. 确保 FlyEnv 的 shell 集成已启用
2. 初始设置后重启终端
3. 检查项目是否已在 FlyEnv 中注册

### "版本不可用"

1. 在 FlyEnv 的模块界面中安装该版本
2. 下载来自官方来源（无需编译）

### "与现有版本管理器冲突"

1. 从 `.zshrc` 中移除 NVM（FlyEnv 替代它）
2. 取消链接 Homebrew PHP：`brew unlink php`
3. 让 FlyEnv 管理所有版本

## 常见问题（FAQ）

**Q：我需要卸载 NVM 或 RVM 才能使用 FlyEnv 吗？**

A：不是必须的，但建议这样做以避免冲突。FlyEnv 以更优雅的解决方案完全替代了它们的功能。

**Q：自动切换在技术上是如何工作的？**

A：FlyEnv 将 shims 添加到你的 PATH，检测当前目录并从你的项目配置加载适当的版本。

**Q：如果需要，我仍然可以使用版本命令吗？**

A：可以。虽然自动切换处理了 99% 的情况，但你仍然可以在 FlyEnv GUI 中手动选择版本或使用传统命令。

**Q：这在 CI/CD 管道中有效吗？**

A：FlyEnv 专为本地开发设计。对于 CI/CD，使用 Docker 或你的生产环境所需的特定版本。

**Q：如果我 cd 到任何项目文件夹之外会发生什么？**

A：FlyEnv 使用你系统的默认版本或你配置的全局默认值。

**Q：团队成员可以使用不同的版本管理器吗？**

A：可以。FlyEnv 中的项目配置不会干扰队友使用其他工具。

## 准备好停止手动管理版本了吗？

收回在 Node 和 PHP 版本之间切换所花费的时间。让你的环境适应你的工作，而不是相反。

[免费下载 FlyEnv](/zh/download) — 适用于 macOS、Windows 和 Linux

了解更多关于[项目级环境隔离](/zh/guide/project-level-runtime-environment)的内容，或直接跳入[快速入门指南](/zh/guide/getting-started)。
