---
title: 'Parse HTML as PHP in Nginx, Apache & Caddy: Complete Guide'
head:
  - - meta
    - name: description
      content: 'Learn how to make Nginx, Apache, and Caddy parse .html files as PHP. Fix legacy projects, simplify migrations, and handle mixed content without renaming files.'
---

# Parse HTML as PHP in Nginx, Apache & Caddy: Complete Guide

You have got a site full of .html files that suddenly need PHP processing. Maybe it is a legacy static site getting dynamic features. Maybe you are migrating and cannot rename hundreds of files. Or perhaps you just want clean URLs without the .php extension.

Whatever the reason, forcing your web server to parse HTML files through PHP is a common requirement. This guide covers configuration for Nginx, Apache, and Caddy—all within FlyEnv's simple interface.

## Why Parse HTML as PHP?

### Common Scenarios

1. **Legacy site migration**: Adding PHP includes to static HTML files
2. **SEO preservation**: Keeping existing .html URLs while adding PHP logic
3. **Gradual refactoring**: Introducing PHP without massive file renames
4. **CMS integration**: Adding WordPress/Drupal headers to static pages

### Example Use Case

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

The file stays as .html, but PHP processes the includes and echo statements.

## Prerequisites

Before configuring your web server:

1. **PHP-FPM configured** with extended security limits
2. **Web server running** (Nginx, Apache, or Caddy)
3. **Site created** in FlyEnv pointing to your project

## Nginx Configuration

### Step 1: Modify PHP-FPM Security Settings

Edit your PHP-FPM pool configuration to allow HTML file processing:

```ini
; In php-fpm.conf [www] section
security.limit_extensions = .php .php3 .php4 .php5 .php7 .html .htm
```

In FlyEnv: Open PHP module -> Version -> Configuration -> Edit php-fpm.conf

![PHP-FPM Configuration]
*(Screenshot: PHP-FPM configuration editor in FlyEnv)*

### Step 2: Add Nginx Location Block

Edit your site's Nginx vhost configuration:

```nginx
location ~ [^/]\.html(/|$) {
    try_files $uri =404;
    fastcgi_pass unix:/tmp/phpwebstudy-php-cgi-83.sock;
    fastcgi_index index.php;
    include fastcgi.conf;
    include pathinfo.conf;
}
```

**Important**: Replace `phpwebstudy-php-cgi-83.sock` with your actual PHP version socket name.

In FlyEnv: Host -> Site -> Nginx Settings -> Edit VHost

![Nginx VHost Configuration]
*(Screenshot: Nginx vhost editor with location block)*

### Step 3: Restart Services

1. Restart PHP-FPM in FlyEnv
2. Reload Nginx configuration
3. Test your HTML file

## Apache Configuration

Apache handles this through .htaccess or virtual host configuration.

### Method 1: Using .htaccess (Recommended)

Create or edit `.htaccess` in your site root:

```apache
# Parse HTML files as PHP
AddType application/x-httpd-php .html .htm

# Alternative for PHP 7+
AddHandler application/x-httpd-php .html .htm
```

### Method 2: Virtual Host Configuration

Edit your Apache vhost file in FlyEnv:

```apache
<VirtualHost *:80>
    DocumentRoot "/path/to/your/site"
    ServerName example.test
    
    <Directory "/path/to/your/site">
        AllowOverride All
        Require all granted
    </Directory>
    
    # Parse HTML as PHP
    AddType application/x-httpd-php .html .htm
</VirtualHost>
```

### Step 3: Configure mod_php or PHP-FPM

**For mod_php:**
No additional configuration needed.

**For PHP-FPM with mod_proxy_fcgi:**

```apache
# Add to vhost
<FilesMatch "\.(html|htm)$">
    SetHandler "proxy:unix:/tmp/phpwebstudy-php-cgi-83.sock|fcgi://localhost"
</FilesMatch>
```

## Caddy Configuration

Caddy's CEL (Common Expression Language) makes this straightforward.

### Step 1: Edit Caddyfile

In FlyEnv: Host -> Site -> Caddy Settings -> Edit Caddyfile

```nginx
example.test {
    root * /path/to/your/site
    
    # PHP-FPM handler for PHP files
    php_fastcgi unix//tmp/phpwebstudy-php-cgi-83.sock
    
    # Handle HTML files through PHP-FPM
    @htmlFiles {
        path *.html *.htm
    }
    
    route @htmlFiles {
        php_fastcgi unix//tmp/phpwebstudy-php-cgi-83.sock
    }
    
    file_server
}
```

### Alternative: Simpler Configuration

For basic HTML-as-PHP parsing:

```nginx
example.test {
    root * /path/to/your/site
    
    # This handles both .php and .html
    php_fastcgi unix//tmp/phpwebstudy-php-cgi-83.sock {
        try_files {path} {path}/index.php index.php
    }
    
    file_server
}
```

Note: You must still update PHP-FPM security limits as shown in the Nginx section.

## Troubleshooting

### "File downloaded instead of executed"

**Cause**: PHP-FPM security limits blocking .html files

**Solution**: Ensure `security.limit_extensions` includes `.html` in php-fpm.conf

### "502 Bad Gateway" (Nginx)

**Cause**: Wrong PHP-FPM socket path

**Solution**: 
1. Check actual socket name in `/tmp/`
2. Update fastcgi_pass with correct version
3. Verify PHP-FPM is running

### "Internal Server Error" (Apache)

**Cause**: Handler not properly configured

**Solution**:
1. Verify PHP module is loaded: `apachectl -M | grep php`
2. Check Apache error logs
3. Ensure AllowOverride is enabled for .htaccess

### "Blank white page"

**Cause**: PHP error in HTML file

**Solution**:
1. Check PHP error logs
2. Enable display_errors temporarily
3. Test with simple `<?php echo "test"; ?>` first

### Performance Considerations

Parsing HTML through PHP adds overhead:

| Configuration | Request Time | Memory |
|--------------|--------------|--------|
| Static HTML | 1-5ms | None |
| HTML via PHP-FPM | 20-50ms | 10-30MB |

**Optimization tips:**
- Use PHP opcode caching (enabled by default in FlyEnv)
- Consider eventual migration to .php extension
- Use static file caching where possible

## Security Warning

Parsing HTML as PHP can introduce security risks:

1. **User-uploaded files**: If users can upload .html files, they can execute PHP code
2. **Third-party content**: Included HTML from external sources becomes executable

**Mitigation:**
```nginx
# Deny PHP execution in upload directories
location /uploads/ {
    location ~ \.(html|htm|php)$ {
        deny all;
    }
}
```

## Frequently Asked Questions (FAQ)

**Q: Does this affect performance?**

A: Yes, slightly. HTML files go through PHP-FPM instead of being served directly. Use opcode caching and consider this temporary during migrations.

**Q: Can I parse other extensions as PHP?**

A: Yes. Add any extension to PHP-FPM security limits and web server configuration. Common alternatives: `.phtml`, `.php5`.

**Q: Will this break static HTML sites?**

A: No. Static HTML without PHP tags renders normally. The PHP processor simply passes through HTML content unchanged.

**Q: How do I revert this change?**

A: Remove the location/handler configuration and restart your web server. Files will be served as static HTML again.

**Q: Can I use this with WordPress?**

A: Yes, though WordPress typically uses .php files. This is more useful for hybrid sites or legacy migrations.

**Q: Does this work with all PHP versions?**

A: Yes. Configuration is identical across PHP 5.6 through 8.4+.

## Summary

| Server | Key Configuration |
|--------|------------------|
| **Nginx** | `location ~ [^/]\.html` with fastcgi_pass |
| **Apache** | `AddType application/x-httpd-php .html` |
| **Caddy** | `php_fastcgi` route for *.html |

All methods require updating PHP-FPM's `security.limit_extensions` first.

Need help with other server configurations? Check out our [Reverse Proxy Setup Guide](/guide/reverse-proxy-nestjs-multi-servers) or [Custom Domains documentation](/guide/host).
