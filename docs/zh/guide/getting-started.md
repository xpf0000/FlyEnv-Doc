---
title: 'FlyEnv 快速入门指南：5 分钟快速上手'
head:
  - - meta
    - name: description
      content: '完整的 FlyEnv 安装配置指南，支持 macOS、Windows 和 Linux。在 5 分钟内完成安装、配置第一个站点并开始开发，支持自动版本管理。'
---

# FlyEnv 快速入门指南：5 分钟快速上手

你已经下载了 FlyEnv，接下来呢？本指南帮助你在 5 分钟内完成从安装到运行本地网站的整个过程——无需复杂的终端操作。

## 安装

### macOS

**选项 1：Homebrew（推荐）**
```bash
brew update && brew install flyenv
```

**选项 2：下载 DMG**

| 架构 | 下载 |
|-------------|----------|
| Intel (x86_64) | [GitHub Release](https://github.com/xpf0000/FlyEnv/releases/latest) |
| Apple Silicon (M1/M2/M3) | [GitHub Release](https://github.com/xpf0000/FlyEnv/releases/latest) |

**macOS 用户注意：** 如果你只需要简单的 PHP 托管环境，可以在 Mac App Store 查看 [FlyPHPServer](/flyphpserver)——这是一个轻量级配套应用。

### Windows

下载并解压 ZIP 文件：

| 下载源 | 链接 |
|----------------|------|
| GitHub Release | [下载](https://github.com/xpf0000/FlyEnv/releases/latest) |
| 百度网盘 | [下载](https://pan.baidu.com/s/1tqHN9piZVVuTyTD3FXI71A?pwd=mnb4) |

解压后运行 `FlyEnv.exe`。

### Linux

支持 Debian/Ubuntu (.deb) 和 Red Hat/Fedora/SUSE/CentOS (.rpm)：

| 发行版 | 架构 | 包类型 |
|-------------|-------------|---------|
| Debian/Ubuntu | x86_64 | .deb |
| Debian/Ubuntu | arm64 | .deb |
| Red Hat/Fedora | x86_64 | .rpm |
| Red Hat/Fedora | arm64 | .rpm |

从 [GitHub Releases](https://github.com/xpf0000/FlyEnv/releases/latest) 下载。

## 首次启动设置

### 1. 安装 FlyEnv 助手

首次启动时，FlyEnv 会安装一个用于系统集成的助手程序：
- **macOS/Linux**：可能会提示输入密码
- **Windows**：如果安装失败，请以管理员身份运行

此助手用于管理服务和管理系统路径，只需安装一次。

### 2. 自定义界面

FlyEnv 默认显示所有模块，你可以简化视图：

1. 点击 **设置**（齿轮图标）
2. 关闭你不需要的模块
3. 通过拖放重新排列剩余模块

**推荐给 PHP 开发者：** 保持 Apache/Nginx、PHP、MySQL、Redis 可见。

**推荐给 Node.js 开发者：** 保持 Node.js、Nginx、MongoDB 可见。

![界面设置](https://oss.macphpstudy.com/image/quick-start-1.webp)

### 3. 安装第一个版本

每个模块至少需要一个已安装的版本：

1. 点击一个模块（例如 **PHP**）
2. 切换到 **版本** 标签页
3. 选择一个版本（例如 PHP 8.3）
4. 点击 **安装**

FlyEnv 会自动下载并配置该版本。

![版本安装](https://oss.macphpstudy.com/image/quick-start-2.webp)

**专业提示：** 如果你在不同的项目中工作，可以安装多个版本，它们可以和平共存。

## 创建你的第一个网站

### 步骤 1：启动所需服务

在创建站点之前，先启动 Web 服务器和 PHP：

1. 打开 **Apache** 或 **Nginx** 模块
2. 选择你安装的版本
3. 点击 **启动** 按钮

如果需要，对 **PHP** 和 **MySQL** 执行相同操作。

![服务启动](https://oss.macphpstudy.com/image/quick-start-3.webp)

### 步骤 2：创建站点

1. 打开 **Host** 模块
2. 点击 **"添加站点"**
3. 填写详细信息：
   - **域名**：`myproject.test`（任何域名都可以）
   - **根目录**：`/Users/you/projects/myproject`
   - **PHP 版本**：选择你安装的版本
   - **端口**：80（默认）

4. 启用 **自动 SSL** 以获得 HTTPS 访问
5. 点击 **保存**

![添加站点表单](https://oss.macphpstudy.com/image/quick-start-4.webp)

### 步骤 3：访问你的站点

保存后：
1. 启动你的 Web 服务器（如果尚未运行）
2. 点击 Host 列表中的站点链接
3. 或在浏览器中打开 `https://myproject.test`

SSL 证书会被你的系统自动信任。

## 设置环境变量

FlyEnv 可以管理你的系统 PATH 以支持终端访问：

1. 打开任意模块
2. 点击 **"设置到系统路径"**
3. 选择要添加的版本

对于 PHP，你还可以创建别名：
- `php74` -> PHP 7.4
- `php83` -> PHP 8.3

![环境变量](https://oss.macphpstudy.com/image/get-start-13.png)
![环境变量别名](https://oss.macphpstudy.com/image/get-start-15.png)

设置 PATH 后**重启终端**，更改才能生效。

## 快速项目设置示例

### Laravel 项目

```bash
# 创建项目
composer create-project laravel/laravel myproject

# 在 FlyEnv Host 模块中
# - 域名: myproject.test
# - 根目录: /path/to/myproject/public
# - PHP: 8.2 或 8.3
# - Nginx 重写规则: 选择 "Laravel" 模板
```

### WordPress 站点

```bash
# 下载 WordPress
curl -O https://wordpress.org/latest.tar.gz
tar -xzf latest.tar.gz

# 在 FlyEnv 中
# - 在 MySQL 模块中创建数据库
# - 域名: wordpress.test
# - 根目录: /path/to/wordpress
# - 启用 URL 重写
```

### 静态 HTML 站点

```bash
# 创建文件夹
mkdir mystaticsite
echo "<h1>Hello FlyEnv</h1>" > mystaticsite/index.html

# 在 FlyEnv 中
# - 域名: static.test
# - 根目录: /path/to/mystaticsite
# - 设置为 "静态站点"（无 PHP）
```

### Node.js/NestJS 项目

```bash
# 创建 NestJS 应用
npm i -g @nestjs/cli
nest new myapi

# 在 FlyEnv 中
# - 启动 Node.js 服务
# - 使用 Nginx 反向代理到 3000 端口
# - 查看反向代理指南了解详情
```

## 管理服务

### 一键启动

为需要一起启动的模块启用 **GroupStart**：

1. 打开模块服务面板
2. 勾选 **GroupStart** 复选框
3. 使用主界面上的 "全部启动" 开关

![GroupStart 设置](https://oss.macphpstudy.com/image/get-start-8.png)

### 查看日志

如果服务启动失败：

1. 点击模块中的 **日志** 按钮
2. 查看错误信息
3. 常见问题：端口冲突、缺少依赖

## 升级 FlyEnv

FlyEnv 包含自动更新功能：

1. 在 **设置** -> **关于** 中检查更新
2. 或手动下载最新版本

**你的数据是安全的：** 程序文件和数据分开存储，升级不会删除你的站点或数据库。

## 卸载

如果你需要移除 FlyEnv：

### macOS
```bash
# 移除应用
rm -rf /Applications/FlyEnv.app

# 移除数据（可选）
rm -rf ~/Library/FlyEnv
rm -rf ~/Library/PhpWebStudy
```

### Windows
1. 删除 FlyEnv 文件夹
2. 数据文件夹位于同一目录下的 `FlyEnv-Data`

### Linux
```bash
# 移除包
sudo apt remove flyenv  # 或 rpm 等效命令

# 移除数据
rm -rf ~/.config/FlyEnv
```

## 故障排除

### "端口已被占用" 错误

**原因**：其他应用程序正在使用 80、443 或 3306 端口

**解决方案**：
```bash
# 查找使用 80 端口的进程
sudo lsof -i :80

# 或在设置中更改 FlyEnv 端口
```

### macOS 上出现 "权限被拒绝"

**解决方案**：在系统偏好设置 -> 安全性与隐私中，授予 FlyEnv 完全磁盘访问权限

### 站点显示 "502 Bad Gateway"

**原因**：
1. PHP-FPM 未运行
2. 为站点选择了错误的 PHP 版本
3. Nginx/Apache 配置不正确

**解决方案**：检查 PHP-FPM 是否已启动，并查看日志中的错误。

### 更改未生效

**解决方案**：
1. 清除浏览器缓存
2. 重启 Web 服务器
3. 检查文件权限

## 常见问题 (FAQ)

**Q：使用 FlyEnv 需要了解命令行吗？**

A：不需要。虽然提供终端访问，但所有操作都可以通过 GUI 完成。

**Q：我可以使用现有的 Homebrew 安装吗？**

A：可以。FlyEnv 会自动检测 Homebrew 和 MacPorts 安装。

**Q：如何备份我的站点？**

A：你的项目文件在你选择的目录中。数据库导出可以通过 MySQL 模块完成。

**Q：我可以导入现有项目吗？**

A：当然可以。只需将 Host 根目录路径指向你现有的项目文件夹。

**Q：我可以使用哪些域名？**

A：任何以 .test、.local、.dev 结尾的域名或自定义 TLD。在某些网络上避免使用 .local，因为可能存在 mDNS 冲突。

## 下一步

现在你已经运行起来了，探索这些功能：

- [项目级版本隔离](/guide/project-level-runtime-environment) — 自动版本切换
- [自定义域名和 SSL](/guide/host) — 专业本地开发
- [构建本地 AI 代理](/guide/build-local-offline-ai-agent) — 使用 Ollama 的离线 AI

如果还没有 [下载 FlyEnv](/download)，祝你编码愉快！
