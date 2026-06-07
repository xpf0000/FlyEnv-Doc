---
title: '使用 FlyEnv 无需 Docker 部署 PHP 项目：PHP-FPM、FrankenPHP、RoadRunner、Swoole CLI 与 Workerman'
head:
  - - meta
    - name: description
      content: '学习如何用 FlyEnv 无需 Docker 部署 WordPress、Laravel、Symfony、Workerman、Hyperf 等 PHP 项目，并联动 PHP-FPM、SSL、数据库与内网穿透。'
---

# 使用 FlyEnv 无需 Docker 部署 PHP 项目：PHP-FPM、FrankenPHP、RoadRunner、Swoole CLI 与 Workerman

现在的 PHP 项目已经不是一种部署方式可以全部解决。WordPress 需要稳定的 PHP-FPM 站点环境，Laravel Octane 需要应用服务器，Hyperf 依赖 Swoole，Workerman 则是一个常驻 PHP 进程，不能简单塞进 Apache 或 Nginx 的传统请求模型里。Docker 可以处理这些场景，但它也经常带来启动慢、内存占用高、网络层复杂、文件同步慢等额外成本。

FlyEnv 在 Windows、macOS 和 Linux 上提供原生 PHP 部署工作流：PHP CGI Service、PHP-FPM、FrankenPHP、RoadRunner、Swoole CLI、Composer、数据库、自定义域名、自动 SSL、反向代理、日志和 Cloudflare Tunnel 都可以在一个桌面应用里完成。

## 先选择正确的 PHP 部署方式

创建项目前，先用这张表判断应该选哪个 FlyEnv 模块。

| 项目类型 | 推荐 FlyEnv 部署方式 | 适合项目 | 为什么适合 |
| --- | --- | --- | --- |
| WordPress、ClassicPress、Contao | PHP-FPM + Host | CMS 和内容站点 | 稳定的请求响应模型，支持数据库、自定义域名、HTTPS、Nginx/Apache/Caddy 路由 |
| Laravel、Symfony、Yii2、ThinkPHP、CodeIgniter、CakePHP、Slim | PHP-FPM + Host | 标准 MVC 和 API 项目 | 无需 Docker 即可获得接近生产环境的 FastCGI 工作流，并可选择项目 PHP 版本 |
| 老项目或简单 PHP 脚本 | PHP CGI Service | 兼容性测试 | 适合需要轻量 CGI 支持的老项目，或临时验证 PHP 运行环境 |
| 现代 PHP 应用服务器项目 | FrankenPHP | Laravel、Symfony、API 服务 | 使用 FrankenPHP 自带运行时，并可联动 FlyEnv Host、自动 SSL、日志和反向代理 |
| Laravel Octane、PSR-7 Worker、高吞吐 API | RoadRunner | Octane、PHP Worker、已有 `.rr.yaml` 的项目 | 支持常驻 PHP Worker、端口同步、FlyEnv PHP runtime 绑定 |
| Hyperf、EasySwoole、原生 Swoole、Laravel Octane on Swoole | Swoole CLI | 事件驱动 PHP 服务 | 支持预设命令、配置检测、环境变量、端口和日志 |
| Workerman、GatewayWorker、自定义常驻 PHP 服务 | PHP Project Service | WebSocket、TCP、队列、实时服务 | 使用 `php start.php start` 或自定义命令作为托管服务运行，再通过 Host 反向代理暴露域名 |

## 所有 PHP 项目的通用准备

无论选择哪种运行方式，先把基础依赖准备好。

1. 打开 **PHP -> Version Manager**，安装项目需要的 PHP 版本。
2. 打开 **PHP -> Composer**，安装 Composer。
3. 在 **PHP -> Version Manager -> Extensions** 中安装或启用项目需要的 PHP 扩展。
4. 启动 MySQL、MariaDB、PostgreSQL、Redis 或 Memcached 等依赖模块。
5. 在 **Host** 中添加本地域名，例如 `myapp.test`，需要 HTTPS 时启用自动 SSL。
6. 需要给客户、Webhook 平台或外部设备访问时，使用 **Cloudflare Tunnel** 暴露本地站点。

FlyEnv 运行的是原生二进制服务。测试 PHP 版本、切换数据库、配置本地域名、开启 HTTPS、查看日志，都不需要先启动一个庞大的 Docker 环境。

## 部署 WordPress、ClassicPress 和 CMS 项目

CMS 项目通常需要 Web 根目录、数据库、干净的域名和 HTTPS。最推荐的方式是 PHP-FPM + Host。

### 第一步：创建或导入项目

FlyEnv 支持通过 Composer 创建常见 PHP 项目，包括 WordPress、ClassicPress、Contao、Laravel、Symfony、Yii2、ThinkPHP、CodeIgniter、CakePHP 和 Slim。

如果是已有项目：

1. 把项目放到工作目录。
2. 如果项目有 `composer.json`，执行 `composer install`。
3. 通过你常用的数据库客户端或 FlyEnv 数据库模块导入数据库。

### 第二步：把 Host 指向正确的文档根目录

很多框架的 Web 根目录不是仓库根目录。

| 项目 | 常见文档根目录 |
| --- | --- |
| WordPress / ClassicPress | 项目根目录 |
| Contao | `public` |
| Laravel | `public` |
| Symfony | `public` |
| Yii2 basic | `web` |
| ThinkPHP | `public` |
| CodeIgniter 4 | `public` |
| CakePHP | `webroot` |
| Slim skeleton | `public` |

在 FlyEnv 中：

1. 打开 **Host**。
2. 添加站点，例如 `wordpress.test`。
3. 选择项目文档根目录。
4. 选择 PHP 版本。
5. 如果项目需要安全 Cookie、OAuth 回调、支付回调或浏览器 HTTPS API，开启 SSL。
6. 保存站点，启动 Web Server 和 PHP-FPM。

### 第三步：联动数据库和缓存模块

大多数 CMS 项目会使用 MySQL 或 MariaDB。

```dotenv
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=wordpress_local
DB_USERNAME=root
DB_PASSWORD=your_password
```

如果项目比较重，可以启动 Redis 并配置缓存、Session 或队列。这样可以接近生产环境，又不用容器化数据库。

## 部署 Laravel、Symfony 和其他 MVC 框架

对普通请求响应式应用来说，PHP-FPM 仍然是最简单可靠的选择。相比 Docker Desktop，它启动更快、资源占用更低、日志和配置更容易查看，也更接近常见的 Nginx/Caddy/Apache 生产环境。

### 第一步：安装依赖

```bash
composer install
```

如果项目有前端构建：

```bash
npm install
npm run dev
```

FlyEnv 可以同时管理 PHP 和 Node.js。因此 Laravel 项目可以使用 PHP 8.3，同时前端构建固定使用某个 Node.js 版本。

### 第二步：配置环境变量

复制环境变量示例文件，并设置本地服务地址。

```bash
cp .env.example .env
php artisan key:generate
```

常见本地配置：

```dotenv
APP_URL=https://laravel.test
DB_HOST=127.0.0.1
DB_PORT=3306
REDIS_HOST=127.0.0.1
MAIL_HOST=127.0.0.1
MAIL_PORT=1025
```

如果项目需要发送注册、找回密码或通知邮件，可以使用 FlyEnv 的 Mailpit 模块做本地邮件测试。

### 第三步：添加 Host 站点

1. 添加 `laravel.test`、`symfony.test` 或其他 `.test` 域名。
2. 将文档根目录设为框架的 `public` 或对应目录。
3. 选择 PHP 版本并启动 PHP-FPM。
4. 如果页面返回 500，可以直接在 FlyEnv 中打开日志排查。

Laravel 详细流程可以继续阅读 [运行 Laravel](/zh/guide/run-laravel-use-flyenv)。

## 使用 PHP CGI Service 处理兼容性场景

PHP CGI Service 适合老项目、Windows 风格本地栈、简单 PHP 应用或需要验证 CGI 行为的场景。

适合使用 PHP CGI Service 的情况：

1. 项目是简单 PHP 应用，路由逻辑不复杂。
2. 需要测试 CGI 行为，而不是常驻 Worker。
3. 想先用最小服务跑通项目，再迁移到 PHP-FPM。

对于新的 MVC 或 CMS 项目，优先使用 PHP-FPM。只有当项目或操作系统工作流确实需要 CGI 兼容性时，再选择 PHP CGI Service。

## 使用 FrankenPHP 部署现代 PHP 项目

FrankenPHP 是现代 PHP 应用服务器。它适合想要原生应用服务器体验，但不想手动把 PHP-FPM、Nginx 或 Caddy 串起来的场景。

### 适合 FrankenPHP 的项目

| 项目 | 适配情况 |
| --- | --- |
| Laravel | 适合现代 PHP Serving 和 API 开发 |
| Symfony | 适合需要 Caddy 风格 PHP Server 的项目 |
| Slim 和自定义 API | 适合轻量 HTTP 服务 |
| 通用 PHP 站点 | 适合可以使用 FrankenPHP 自带 PHP runtime 的项目 |

### FlyEnv 操作流程

1. 在 FlyEnv 的 FrankenPHP 模块中安装 FrankenPHP。
2. 在 **Host** 中添加或编辑项目。
3. 确认 FlyEnv 已生成 FrankenPHP vhost 配置。
4. 如需 HTTPS，开启 SSL。
5. 启动 FrankenPHP 并打开本地域名。

注意：FrankenPHP 使用自身携带的 PHP runtime。如果项目必须绑定某个 FlyEnv 管理的 PHP 二进制版本，PHP-FPM 或 RoadRunner 可能更合适。

## 使用 RoadRunner 部署 Laravel Octane 和 PHP Worker

RoadRunner 适合常驻 PHP Worker 和高吞吐 HTTP 应用。在 FlyEnv 中，RoadRunner 模块支持 Existing Config、PHP Worker、Laravel Octane、Fileserver 和 Custom 命令。

### Laravel Octane + RoadRunner

如果想在本地获得 Octane 性能，又不想使用 Docker，可以使用 RoadRunner。

```bash
composer require laravel/octane spiral/roadrunner-cli spiral/roadrunner-http
php artisan octane:install --server=roadrunner
```

在 FlyEnv 中：

1. 打开 **RoadRunner** 模块。
2. 添加项目并选择 **Laravel Octane**。
3. 选择 FlyEnv 管理的 PHP runtime。
4. 设置项目端口，例如 `3000`。
5. 启动项目服务。
6. 如果需要干净域名，在 Host 中添加反向代理，将 `https://octane.test` 指向 `http://127.0.0.1:3000`。

### PHP Worker 或已有 RoadRunner 配置

对于 Worker 项目，FlyEnv 可以生成 `.rr.yaml` 风格配置，并同步端口。

```yaml
version: "3"

server:
  command: 'php -d display_startup_errors=0 -d display_errors=stderr worker.php'
  relay: pipes

http:
  address: 127.0.0.1:3000
```

如果项目已有 `.rr.yaml`、`.rr.yml`、`rr.yaml`、`rr.yml` 或 `rr.json`，选择 **Existing Config**。

## 使用 Swoole CLI 部署 Hyperf、EasySwoole 和原生 Swoole

Swoole CLI 是事件驱动 PHP 服务的推荐方式。它可以避免系统 PHP 扩展、Homebrew 构建和框架 Swoole 依赖混在一起带来的问题。

### Swoole CLI 支持的预设

| 预设 | 命令形式 |
| --- | --- |
| Native Swoole | `swoole-cli server.php 3000` |
| Hyperf | `swoole-cli bin/hyperf.php start` |
| EasySwoole | `swoole-cli easyswoole server start` |
| Laravel Octane | `swoole-cli artisan octane:start --server=swoole --host=127.0.0.1 --port=3000` |
| PHP Script | `swoole-cli server.php` |
| Custom | 自定义命令 |

### FlyEnv 操作流程

1. 在 FlyEnv 中安装 Swoole CLI。
2. 在 **Swoole CLI** 模块中添加项目。
3. 选择对应框架预设。
4. 确认项目端口和启动命令。
5. 如果服务需要环境变量，添加变量或 env 文件。
6. 启动服务，并在 FlyEnv 中查看日志。
7. 如果不想使用 `http://127.0.0.1:3000`，可以在 Host 中添加反向代理域名。

FlyEnv 可以识别 Hyperf server/routes 配置、EasySwoole 配置、Laravel Octane 配置和 `server.php` 等常见配置路径。

## 使用 FlyEnv 部署 Workerman 和 GatewayWorker

Workerman 常用于 WebSocket、TCP、队列、网关和实时 PHP 服务。它应该作为常驻 PHP 进程托管运行，而不是通过 PHP-FPM 处理一次性请求。

### 推荐部署方式

使用 **PHP -> Project Service**，配置自定义启动命令。

常见 Workerman 命令：

```bash
php start.php start
```

本地开发时不建议默认使用 daemon 模式，除非项目明确要求。前台进程更方便 FlyEnv 停止、重启和收集日志。

### FlyEnv 操作流程

1. 安装 Workerman 项目需要的 PHP 版本。
2. 安装依赖：

```bash
composer install
```

3. 打开 **PHP -> Project Service**。
4. 添加项目路径。
5. 将启动命令设为 `php start.php start`，或项目文档中指定的启动命令。
6. 将服务端口设置为 Workerman 监听端口，例如 `8787`。
7. 添加需要的环境变量。
8. 启动项目服务。

如果 Workerman 提供 HTTP 或 WebSocket 服务，可以创建 Host 反向代理。

| Host 域名 | 反向代理目标 |
| --- | --- |
| `https://socket.test` | `http://127.0.0.1:8787` |

这样 Workerman 仍然作为原生 PHP 常驻进程运行，同时浏览器侧可以使用干净的 HTTPS 域名访问。

## 与其他 FlyEnv 模块联动

PHP 部署方式只是第一步。真实项目通常还需要很多周边服务。

| 需求 | FlyEnv 模块 | 示例 |
| --- | --- | --- |
| 安装依赖 | Composer | `composer install`、`composer create-project` |
| PHP 版本隔离 | PHP Version Manager | Laravel 使用 PHP 8.3，WordPress 使用 PHP 8.2 |
| PHP 扩展 | PHP Extensions | Redis、OpenSSL、Intl、GD、Imagick、PDO 驱动 |
| 数据库 | MySQL、MariaDB、PostgreSQL | CMS 和框架本地数据库 |
| 缓存与队列 | Redis、Memcached | Laravel cache/session/queue、Symfony cache |
| 前端构建 | Node.js | Vite、Webpack、Tailwind、Symfony Encore |
| 自定义域名 | Host | `https://api.test`、`https://wordpress.test` |
| 自动 HTTPS | Host SSL | OAuth 回调、安全 Cookie、Webhook 测试 |
| 反向代理 | Host | 将 `https://octane.test` 转发到 `127.0.0.1:3000` |
| 公网访问 | Cloudflare Tunnel | 分享本地 WordPress、Laravel、Workerman 或 Swoole 服务 |
| 调试 | 日志和配置查看器 | 查看 PHP、PHP-FPM、FrankenPHP、RoadRunner、Swoole CLI 和项目日志 |
| 本地 AI 辅助 | Offline AI Agent | 在本地解释报错、检查配置、生成迁移说明，避免把代码发到云端模型 |

## 实战选择建议

1. 大多数 WordPress、CMS 和 MVC 框架项目，优先选择 **PHP-FPM + Host**。
2. 想使用现代原生 PHP 应用服务器，并且项目接受 FrankenPHP 自带 runtime 时，选择 **FrankenPHP**。
3. Laravel Octane、PSR-7 Worker 和高吞吐 API，选择 **RoadRunner**。
4. Hyperf、EasySwoole、Swoole 版 Octane 和原生 Swoole 项目，选择 **Swoole CLI**。
5. Workerman、GatewayWorker、队列 Worker 和自定义常驻 PHP 命令，选择 **PHP Project Service**。
6. Webhook、本地演示和客户预览，使用 **Cloudflare Tunnel**。

## 视频教程

更喜欢观看？看看 手把手教你将 Node/Python/Go 项目转化为原生服务 实际演示：

<iframe style="width: 100%; aspect-ratio: 16 / 9;" src="//player.bilibili.com/player.html?isOutside=true&aid=116704025839419&bvid=BV1cFEp67E2v&cid=38915998602&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

## Frequently Asked Questions (FAQ)

### FlyEnv 可以作为 PHP Docker 替代方案吗？

可以。FlyEnv 在 Windows、macOS 和 Linux 上运行原生 PHP、Web Server、数据库、缓存和内网穿透服务。它避免了 Docker Desktop 的额外资源占用，同时保留多版本、域名、SSL、日志和服务管理能力。

### Laravel 项目应该选择哪种 FlyEnv 部署方式？

普通 Laravel 开发使用 PHP-FPM + Host。运行 Laravel Octane 时选择 RoadRunner 或 Swoole CLI。如果项目适配 FrankenPHP runtime，也可以选择 FrankenPHP。

### FlyEnv 可以运行 Workerman 吗？

可以。把 Workerman 添加为 PHP Project Service，启动命令一般是 `php start.php start`。如果它提供 HTTP 或 WebSocket 服务，可以通过 Host 反向代理和自动 SSL 暴露为本地域名。

### Windows、macOS、Linux 都支持吗？

支持。FlyEnv 面向 Windows、macOS 和 Linux 的原生全栈环境管理。不同系统的底层路径和安装来源会不同，但项目部署流程保持一致。

## 下一步

从 [下载页面](/zh/download) 安装 FlyEnv，然后按照 [自定义域名与自动 SSL](/zh/guide/host) 创建第一个 PHP 站点。需要给外部访问本地服务时，继续阅读 [Cloudflare Tunnel 内网穿透](/zh/guide/cloudflare-tunnel-local-development)。
