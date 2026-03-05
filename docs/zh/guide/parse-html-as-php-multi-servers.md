---
title: '在 Nginx、Apache 和 Caddy 中将 HTML 解析为 PHP：完整指南'
head:
  - - meta
    - name: description
      content: '学习如何在 Nginx、Apache 和 Caddy 中将 .html 文件解析为 PHP。修复遗留项目、简化迁移，并处理混合内容而无需重命名文件。'
---

# 在 Nginx、Apache 和 Caddy 中将 HTML 解析为 PHP：完整指南

你有一个全是 .html 文件的网站，突然需要 PHP 处理。可能是一个遗留静态网站需要添加动态功能，可能你正在进行迁移而无法重命名数百个文件，或者你只是想要没有 .php 扩展名的简洁 URL。

无论出于何种原因，强制你的 Web 服务器通过 PHP 解析 HTML 文件是一个常见需求。本指南涵盖了 Nginx、Apache 和 Caddy 的配置——全部在 FlyEnv 的简单界面中完成。

## 为什么要将 HTML 解析为 PHP？

### 常见场景

1. **遗留网站迁移**：向静态 HTML 文件添加 PHP 包含
2. **SEO 保护**：在添加 PHP 逻辑的同时保持现有的 .html URL
3. **渐进式重构**：无需大规模文件重命名即可引入 PHP
4. **CMS 集成**：向静态页面添加 WordPress/Drupal 头部

### 示例用例

```html
<!-- index.html -->
<!DOCTYPE html>
<html>
<head>
    <?php include 'header.php'; ?>
</head>
<body>
    <h1><?php echo date('Y'); ?> Company Name</h1>
    <?php include 'navigation.php'; ?>
</body>
</html>
```

文件保持为 .html，但 PHP 处理 include 和 echo 语句。

## 前置条件

在配置 Web 服务器之前：

1. **PHP-FPM 已配置**并带有扩展的安全限制
2. **Web 服务器正在运行**（Nginx、Apache 或 Caddy）
3. **站点已在 FlyEnv 中创建**，指向你的项目

## Nginx 配置

### 步骤 1：修改 PHP-FPM 安全设置

编辑你的 PHP-FPM 池配置以允许 HTML 文件处理：

```ini
; 在 php-fpm.conf [www] 部分
security.limit_extensions = .php .php3 .php4 .php5 .php7 .html .htm
```

在 FlyEnv 中：打开 PHP 模块 -> 版本 -> 配置 -> 编辑 php-fpm.conf

![PHP-FPM Configuration]
*(截图：FlyEnv 中的 PHP-FPM 配置编辑器)*

### 步骤 2：添加 Nginx Location 块

编辑你站点的 Nginx vhost 配置：

```nginx
location ~ [^/]\.html(/|$) {
    try_files $uri =404;
    fastcgi_pass unix:/tmp/phpwebstudy-php-cgi-83.sock;
    fastcgi_index index.php;
    include fastcgi.conf;
    include pathinfo.conf;
}
```

**重要**：将 `phpwebstudy-php-cgi-83.sock` 替换为你实际的 PHP 版本 socket 名称。

在 FlyEnv 中：主机 -> 站点 -> Nginx 设置 -> 编辑 VHost

![Nginx VHost Configuration]
*(截图：带有 location 块的 Nginx vhost 编辑器)*

### 步骤 3：重启服务

1. 在 FlyEnv 中重启 PHP-FPM
2. 重载 Nginx 配置
3. 测试你的 HTML 文件

## Apache 配置

Apache 通过 .htaccess 或虚拟主机配置来处理此问题。

### 方法 1：使用 .htaccess（推荐）

在你的站点根目录创建或编辑 `.htaccess`：

```apache
# 将 HTML 文件解析为 PHP
AddType application/x-httpd-php .html .htm

# PHP 7+ 的替代方案
AddHandler application/x-httpd-php .html .htm
```

### 方法 2：虚拟主机配置

在 FlyEnv 中编辑你的 Apache vhost 文件：

```apache
<VirtualHost *:80>
    DocumentRoot "/path/to/your/site"
    ServerName example.test
    
    <Directory "/path/to/your/site">
        AllowOverride All
        Require all granted
    </Directory>
    
    # 将 HTML 解析为 PHP
    AddType application/x-httpd-php .html .htm
</VirtualHost>
```

### 步骤 3：配置 mod_php 或 PHP-FPM

**对于 mod_php：**
无需额外配置。

**对于使用 mod_proxy_fcgi 的 PHP-FPM：**

```apache
# 添加到 vhost
<FilesMatch "\.(html|htm)$">
    SetHandler "proxy:unix:/tmp/phpwebstudy-php-cgi-83.sock|fcgi://localhost"
</FilesMatch>
```

## Caddy 配置

Caddy 的 CEL（通用表达式语言）使这变得简单直接。

### 步骤 1：编辑 Caddyfile

在 FlyEnv 中：主机 -> 站点 -> Caddy 设置 -> 编辑 Caddyfile

```nginx
example.test {
    root * /path/to/your/site
    
    # PHP-FPM 处理器用于 PHP 文件
    php_fastcgi unix//tmp/phpwebstudy-php-cgi-83.sock
    
    # 通过 PHP-FPM 处理 HTML 文件
    @htmlFiles {
        path *.html *.htm
    }
    
    route @htmlFiles {
        php_fastcgi unix//tmp/phpwebstudy-php-cgi-83.sock
    }
    
    file_server
}
```

### 替代方案：更简单的配置

对于基本的 HTML 作为 PHP 解析：

```nginx
example.test {
    root * /path/to/your/site
    
    # 这同时处理 .php 和 .html
    php_fastcgi unix//tmp/phpwebstudy-php-cgi-83.sock {
        try_files {path} {path}/index.php index.php
    }
    
    file_server
}
```

注意：你仍然需要按照 Nginx 部分所示更新 PHP-FPM 安全限制。

## 故障排除

### "文件被下载而不是执行"

**原因**：PHP-FPM 安全限制阻止了 .html 文件

**解决方案**：确保 `security.limit_extensions` 在 php-fpm.conf 中包含 `.html`

### "502 Bad Gateway" (Nginx)

**原因**：PHP-FPM socket 路径错误

**解决方案**：
1. 检查 `/tmp/` 中的实际 socket 名称
2. 使用正确的版本更新 fastcgi_pass
3. 验证 PHP-FPM 正在运行

### "Internal Server Error" (Apache)

**原因**：处理器未正确配置

**解决方案**：
1. 验证 PHP 模块已加载：`apachectl -M | grep php`
2. 检查 Apache 错误日志
3. 确保为 .htaccess 启用了 AllowOverride

### "空白页面"

**原因**：HTML 文件中的 PHP 错误

**解决方案**：
1. 检查 PHP 错误日志
2. 临时启用 display_errors
3. 首先用简单的 `<?php echo "test"; ?>` 测试

### 性能考虑

通过 PHP 解析 HTML 会增加开销：

| 配置 | 请求时间 | 内存 |
|------|---------|------|
| 静态 HTML | 1-5ms | 无 |
| 通过 PHP-FPM 的 HTML | 20-50ms | 10-30MB |

**优化技巧：**
- 使用 PHP opcode 缓存（在 FlyEnv 中默认启用）
- 考虑最终迁移到 .php 扩展名
- 尽可能使用静态文件缓存

## 安全警告

将 HTML 解析为 PHP 可能引入安全风险：

1. **用户上传的文件**：如果用户可以上传 .html 文件，他们可以执行 PHP 代码
2. **第三方内容**：来自外部源的包含 HTML 变得可执行

**缓解措施：**
```nginx
# 在上传目录中拒绝 PHP 执行
location /uploads/ {
    location ~ \.(html|htm|php)$ {
        deny all;
    }
}
```

## 常见问题 (FAQ)

**问：这会影响性能吗？**

答：是的，略微影响。HTML 文件通过 PHP-FPM 而不是直接提供服务。使用 opcode 缓存，并在迁移期间将此视为临时方案。

**问：我可以将其他扩展名解析为 PHP 吗？**

答：可以。将任何扩展名添加到 PHP-FPM 安全限制和 Web 服务器配置中。常见替代方案：`.phtml`、`.php5`。

**问：这会破坏静态 HTML 网站吗？**

答：不会。没有 PHP 标签的静态 HTML 会正常渲染。PHP 处理器只是原样传递 HTML 内容。

**问：如何恢复此更改？**

答：移除 location/handler 配置并重启 Web 服务器。文件将重新作为静态 HTML 提供服务。

**问：我可以将此用于 WordPress 吗？**

答：可以，尽管 WordPress 通常使用 .php 文件。这对于混合网站或遗留迁移更有用。

**问：这适用于所有 PHP 版本吗？**

答：是的。配置在 PHP 5.6 到 8.4+ 中完全相同。

## 总结

| 服务器 | 关键配置 |
|--------|---------|
| **Nginx** | `location ~ [^/]\.html` 配合 fastcgi_pass |
| **Apache** | `AddType application/x-httpd-php .html` |
| **Caddy** | `php_fastcgi` 路由用于 *.html |

所有方法都需要首先更新 PHP-FPM 的 `security.limit_extensions`。

需要其他服务器配置的帮助？查看我们的 [反向代理设置指南](/zh/guide/reverse-proxy-nestjs-multi-servers) 或 [自定义域名文档](/zh/guide/host)。
