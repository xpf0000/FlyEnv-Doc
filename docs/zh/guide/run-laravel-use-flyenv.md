---
title: '如何在本地运行 Laravel：使用 FlyEnv 的完整设置指南'
head:
  - - meta
    - name: description
      content: '使用 FlyEnv 在几分钟内设置 Laravel 开发环境。一键安装 Laravel，自动配置 URL 重写、SSL 和数据库，支持 macOS、Windows 和 Linux。'
---

# 如何在本地运行 Laravel：使用 FlyEnv 的完整设置指南

过去，设置 Laravel 开发环境意味着要与 PHP 版本、配置 Nginx 重写规则和解决权限问题作斗争。使用 FlyEnv，您可以在不到 5 分钟的时间内从零开始运行 Laravel 应用程序——无需复杂的终端操作。

本指南涵盖了快速项目创建和现有项目的手动设置。

## 快速开始：在 FlyEnv 中创建 Laravel 项目

### 方法一：一键安装 Laravel（推荐）

FlyEnv 可以自动创建一个全新的 Laravel 项目并安装所有依赖。

#### 步骤 1：创建新项目

1. 打开 FlyEnv → **Host** 模块
2. 点击 **"New Project"** 按钮

<img src="https://oss.macphpstudy.com/image/F74AA939C46A.png" data-x-image-preview="">

#### 步骤 2：配置项目

选择您的设置：
- **Project Path**：项目保存位置
- **PHP Version**：选择 8.1、8.2 或 8.3（Laravel 10+ 需要 PHP 8.1+）
- **Laravel Version**：最新版（11.x）或 LTS 版（10.x）

<img src="https://oss.macphpstudy.com/image/8E783623E2F8.png" data-x-image-preview="">

点击 **OK**，FlyEnv 将：
- 通过 Composer 安装 Laravel
- 配置项目结构
- 设置数据库连接
- 准备站点配置

#### 步骤 3：项目创建完成

完成后，您将在选定的文件夹中看到该项目。

<img src="https://oss.macphpstudy.com/image/BAAB108613E2.png" data-x-image-preview="">

点击 **"Create Host"** 自动配置站点，或继续执行下面的手动站点设置。

### 方法二：现有的 Laravel 项目

已有 Laravel 项目？直接跳转到 [创建站点](#创建站点) 部分。

## 创建站点

无论您是通过 FlyEnv 创建的项目还是从 Git 克隆的，都需要配置一个站点来提供服务。

### 步骤 1：在 FlyEnv 中添加站点

1. 打开 **Host** 模块
2. 点击 **"Add"** 按钮（或在项目创建步骤中点击 "Create Host"）

### 步骤 2：配置站点设置

**Laravel 关键设置**：将根目录设置为 `public` 文件夹，而不是项目根目录。

| 字段 | 值 | 示例 |
|-------|-------|---------|
| **Host Name** | 您的本地域名 | `laravel.test` |
| **Root Path** | `public` 文件夹路径 | `/Users/you/projects/example-app/public` |
| **PHP Version** | 匹配项目要求 | 8.2, 8.3 |
| **Port** | HTTP 端口 | 80 |

<img src="https://oss.macphpstudy.com/image/E53248FED5BC.png" data-x-image-preview="">

**为什么选择 `public` 文件夹？** Laravel 的前端控制器（`index.php`）位于 `public/` 中。指向项目根目录会暴露敏感文件如 `.env`。

### 步骤 3：配置 URL 重写

Laravel 需要 URL 重写来将所有请求路由到 `index.php`。

#### Nginx

从 **Nginx URL Rewrite** 下拉菜单中选择 **"Laravel"**：

<img src="https://oss.macphpstudy.com/image/AF72C71F6596.png" data-x-image-preview="">

这会自动添加正确的配置：

```nginx
location / {
    try_files $uri $uri/ /index.php$is_args$query_string;
}
```

**这个配置的作用：**
- 如果文件/目录存在，则尝试直接提供
- 否则将请求路由到 `index.php` 并保留查询参数
- 对 Laravel 的路由功能至关重要

#### Apache

Apache 使用 `.htaccess` 文件。通过 FlyEnv 创建项目时，此文件会自动生成。对于手动设置，创建 `public/.htaccess`：

```apache
<IfModule mod_rewrite.c>
    <IfModule mod_negotiation.c>
        Options -MultiViews -Indexes
    </IfModule>

    RewriteEngine On

    # Handle Authorization Header
    RewriteCond %{HTTP:Authorization} .
    RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]

    # Redirect Trailing Slashes If Not A Folder...
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_URI} (.+)/$
    RewriteRule ^ %1 [L,R=301]

    # Send Requests To Front Controller...
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^ index.php [L]
</IfModule>
```

#### Caddy

Caddy 不需要额外配置——Laravel 可以直接使用 Caddy 的默认设置运行。

### 步骤 4：配置数据库（可选）

如果您的 Laravel 应用使用数据库：

1. 在 FlyEnv 中启动 **MySQL** 或 **PostgreSQL**
2. 通过数据库管理界面创建一个数据库
3. 更新 `.env` 文件：

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=your_database_name
DB_USERNAME=root
DB_PASSWORD=root
```

4. 运行迁移：
```bash
php artisan migrate
```

## 启动您的 Laravel 应用程序

### 启动所需服务

在 FlyEnv 中启动以下模块：
- ✅ PHP（与项目版本匹配）
- ✅ Nginx 或 Apache 或 Caddy
- ✅ MySQL/PostgreSQL（如果使用数据库）

### 访问您的站点

点击 Host 面板中的站点链接：

<img src="https://oss.macphpstudy.com/image/4373D117408E.png" data-x-image-preview="">

您将看到 Laravel 欢迎页面：

<img src="https://oss.macphpstudy.com/image/4FCCC65341EC.png" data-x-image-preview="">

**Laravel 正在运行！** 🎉

## 调试和日志

### 查看应用程序日志

Laravel 日志位于 `storage/logs/laravel.log`：

```bash
tail -f storage/logs/laravel.log
```

### 查看 Web 服务器日志

FlyEnv 提供对服务器日志的便捷访问：

1. 在 Host 模块中选择您的站点
2. 点击 **Logs** 标签

<img src="https://oss.macphpstudy.com/image/14C9AD3814FA.png" data-x-image-preview="">

实时查看访问日志和错误日志：

<img src="https://oss.macphpstudy.com/image/D999E4BFEF0B.png" data-x-image-preview="">

**需要检查的常见问题：**
- 500 错误 → 检查 Laravel 日志
- 404 错误 → 验证 URL 重写是否已配置
- 权限被拒绝 → 检查 `storage/` 和 `bootstrap/cache/` 权限

## 常见 Laravel 问题及解决方案

### "The stream or file could not be opened" 错误

**原因**：`storage/` 文件夹的权限问题

**解决方案**：
```bash
chmod -R 775 storage
chmod -R 775 bootstrap/cache
```

在 Windows 上，确保您的用户对这些文件夹具有写入权限。

### "No application encryption key has been specified"

**解决方案**：
```bash
php artisan key:generate
```

### 数据库连接被拒绝

**检查清单**：
- [ ] MySQL/PostgreSQL 服务正在 FlyEnv 中运行
- [ ] 数据库已存在
- [ ] 凭据与 `.env` 文件匹配
- [ ] 使用 `127.0.0.1` 而不是 `localhost`（避免 socket 问题）

### CSS/JS 未加载（资源 404）

**原因**：未运行 `npm run dev` 或 `npm run build`

**解决方案**：
```bash
npm install
npm run dev
```

或用于生产构建：
```bash
npm run build
```

### "Vite manifest not found"

**解决方案**：运行 `npm run build` 生成 manifest 文件。

## 高级配置

### 多 PHP 版本

测试 Laravel 升级？FlyEnv 让您即时切换 PHP 版本：

1. 安装多个 PHP 版本（8.1、8.2、8.3）
2. 编辑站点设置
3. 更改 PHP 版本下拉菜单
4. 重启服务

### 本地开发使用 SSL/HTTPS

在站点设置中启用 SSL：
1. 编辑站点 → 启用 **"Use SSL"**
2. 选择 **"Auto SSL"**
3. 通过 `https://laravel.test` 访问

对以下测试至关重要：
- Service Workers
- 安全 Cookie
- 支付集成
- PWA 功能

### 队列 Workers

对于 Laravel 队列功能：

```bash
php artisan queue:work
```

或使用 Supervisor 来保持 workers 持续运行。

### 定时任务（Cron）

添加到系统定时任务（每分钟）：

```bash
* * * * * cd /path/to/project && php artisan schedule:run >> /dev/null 2>&1
```

或使用 FlyEnv 的内置定时任务功能。

## 生产部署检查清单

从本地 FlyEnv 迁移到生产环境时：

- [ ] 更新 `.env`：`APP_ENV=production`，`APP_DEBUG=false`
- [ ] 设置强 `APP_KEY`（如果已运行 `key:generate` 则已设置）
- [ ] 配置生产数据库凭据
- [ ] 设置队列 workers（Supervisor）
- [ ] 配置定时任务（cron）
- [ ] 运行 `composer install --optimize-autoloader --no-dev`
- [ ] 运行 `php artisan config:cache`
- [ ] 运行 `php artisan route:cache`
- [ ] 运行 `php artisan view:cache`
- [ ] 设置正确的文件权限
- [ ] 配置 SSL 证书

## 常见问题解答（FAQ）

**Q：我应该使用哪个 PHP 版本来运行 Laravel？**

A：Laravel 11.x 需要 PHP 8.2+。Laravel 10.x 支持 PHP 8.1+。使用您的 Laravel 版本支持的最新稳定 PHP 版本。

**Q：我可以将 Laravel Sail 与 FlyEnv 一起使用吗？**

A：可以，但这是多余的。FlyEnv 提供了 Sail 的所有功能（PHP、MySQL、Redis），而无需 Docker 开销。如果需要，您可以运行 `vendor/bin/sail` 命令，但推荐使用原生 FlyEnv 设置。

**Q：如何从 XAMPP/Laragon 切换到 FlyEnv？**

A：
1. 导出您的 XAMPP 数据库
2. 停止 XAMPP 服务
3. 按照本指南在 FlyEnv 中安装项目
4. 通过 FlyEnv 的数据库管理导入数据库
5. 用新的数据库凭据更新 `.env`

**Q：为什么选择 `public` 作为根目录？**

A：安全考虑。只有 `public/` 中的文件应该可以通过 Web 访问。项目根目录包含敏感文件如 `.env`，其中包含数据库密码。

**Q：我可以同时运行多个 Laravel 项目吗？**

A：可以。创建具有不同域名的独立站点（例如 `project1.test`、`project2.test`），如果需要还可以使用不同端口。

**Q：FlyEnv 支持 Laravel Horizon 吗？**

A：支持。Horizon 需要 Redis——在 FlyEnv 中启动 Redis 模块，然后运行 `php artisan horizon`。

**Q：如何调试慢查询？**

A：在 Laravel 中启用查询日志或使用调试工具栏。FlyEnv 的 MySQL 慢查询日志也可在数据库模块中使用。

**Q：我可以使用 PostgreSQL 代替 MySQL 吗？**

A：当然可以。FlyEnv 两者都支持。只需在 `.env` 中将 `DB_CONNECTION` 改为 `pgsql` 并配置 PostgreSQL 设置。

**Q：`php artisan serve` 和 FlyEnv 有什么区别？**

A：`php artisan serve` 使用 PHP 内置服务器——速度慢、单线程，不适合带有队列或实时功能的开发。FlyEnv 提供类似生产环境的 Nginx/Apache 设置。

## 下一步

现在 Laravel 已运行起来：

- [项目级版本隔离](/zh/guide/project-level-runtime-environment) — 管理多个 Laravel 版本
- [使用 Xdebug 调试 PHP](/zh/guide/php-debug-with-xdebug) — 逐步调试
- [本地邮件测试](/zh/guide/local-email-testing-mailpit) — 无需发送即可测试邮件
- [使用 Cloudflare Tunnel 部署](/zh/guide/cloudflare-tunnel-local-development) — 与客户分享进度

祝您使用 Laravel 和 FlyEnv 编码愉快！
