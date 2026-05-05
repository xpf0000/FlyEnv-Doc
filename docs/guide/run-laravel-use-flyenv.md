---
title: 'How to Run Laravel Locally: Complete Setup Guide with FlyEnv'
head:
  - - meta
    - name: description
      content: 'Set up Laravel development environment in minutes with FlyEnv. One-click Laravel installation, automatic URL rewrite, SSL, and database configuration for macOS, Windows, and Linux.'
---

# How to Run Laravel Locally: Complete Setup Guide with FlyEnv

Setting up a Laravel development environment used to mean wrestling with PHP versions, configuring Nginx rewrite rules, and battling permission issues. With FlyEnv, you can go from zero to a running Laravel application in under 5 minutes—no terminal wizardry required.

This guide covers both quick project creation and manual setup for existing projects.

## Quick Start: Create Laravel Project in FlyEnv

### Method 1: One-Click Laravel Installation (Recommended)

FlyEnv can create a fresh Laravel project with all dependencies installed automatically.

#### Step 1: Create New Project

1. Open FlyEnv → **Host** module
2. Click **"New Project"** button

<img src="https://oss.macphpstudy.com/image/F74AA939C46A.png" data-x-image-preview="">

#### Step 2: Configure Project

Choose your settings:
- **Project Path**: Where to save the project
- **PHP Version**: Select 8.1, 8.2, or 8.3 (Laravel 10+ requires PHP 8.1+)
- **Laravel Version**: Latest (11.x) or LTS (10.x)

<img src="https://oss.macphpstudy.com/image/8E783623E2F8.png" data-x-image-preview="">

Click **OK** and FlyEnv will:
- Install Laravel via Composer
- Configure the project structure
- Set up the database connection
- Prepare the site configuration

#### Step 3: Project Created

Once complete, you'll see the project in your selected folder.

<img src="https://oss.macphpstudy.com/image/BAAB108613E2.png" data-x-image-preview="">

Click **"Create Host"** to automatically configure the site, or proceed to manual site setup below.

### Method 2: Existing Laravel Project

Already have a Laravel project? Skip to the [Create Site](#create-site) section.

## Create Site

Whether you created a project through FlyEnv or cloned from Git, you need to configure a site to serve it.

### Step 1: Add Site in FlyEnv

1. Open **Host** module
2. Click **"Add"** button (or "Create Host" from the project creation step)

### Step 2: Configure Site Settings

**Critical for Laravel**: Set the root directory to the `public` folder, not the project root.

| Field | Value | Example |
|-------|-------|---------|
| **Host Name** | Your local domain | `laravel.test` |
| **Root Path** | Path to `public` folder | `/Users/you/projects/example-app/public` |
| **PHP Version** | Match project requirements | 8.2, 8.3 |
| **Port** | HTTP port | 80 |

<img src="https://oss.macphpstudy.com/image/E53248FED5BC.png" data-x-image-preview="">

**Why `public` folder?** Laravel's front controller (`index.php`) lives in `public/`. Pointing to the project root would expose sensitive files like `.env`.

### Step 3: Configure URL Rewrite

Laravel requires URL rewriting to route all requests through `index.php`.

#### Nginx

Select **"Laravel"** from the **Nginx URL Rewrite** dropdown:

<img src="https://oss.macphpstudy.com/image/AF72C71F6596.png" data-x-image-preview="">

This automatically adds the correct configuration:

```nginx
location / {
    try_files $uri $uri/ /index.php$is_args$query_string;
}
```

**What this does:**
- Tries to serve files/directories if they exist
- Otherwise routes to `index.php` with query parameters preserved
- Essential for Laravel's routing to work

#### Apache

Apache uses `.htaccess` files. When creating a project through FlyEnv, this file is auto-generated. For manual setup, create `public/.htaccess`:

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

Caddy requires no additional configuration—Laravel works out of the box with Caddy's default settings.

### Step 4: Configure Database (Optional)

If your Laravel app uses a database:

1. Start **MySQL** or **PostgreSQL** in FlyEnv
2. Create a database via the Database management interface
3. Update `.env` file:

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=your_database_name
DB_USERNAME=root
DB_PASSWORD=root
```

4. Run migrations:
```bash
php artisan migrate
```

## Launch Your Laravel Application

### Start Required Services

Start these modules in FlyEnv:
- ✅ PHP (matching your project's version)
- ✅ Nginx or Apache or Caddy
- ✅ MySQL/PostgreSQL (if using database)

### Access Your Site

Click the site link in the Host panel:

<img src="https://oss.macphpstudy.com/image/4373D117408E.png" data-x-image-preview="">

You should see the Laravel welcome page:

<img src="https://oss.macphpstudy.com/image/4FCCC65341EC.png" data-x-image-preview="">

**Laravel is running!** 🎉

## Debugging and Logs

### View Application Logs

Laravel logs are in `storage/logs/laravel.log`:

```bash
tail -f storage/logs/laravel.log
```

### View Web Server Logs

FlyEnv provides easy access to server logs:

1. Select your site in Host module
2. Click **Logs** tab

<img src="https://oss.macphpstudy.com/image/14C9AD3814FA.png" data-x-image-preview="">

View access logs and error logs in real-time:

<img src="https://oss.macphpstudy.com/image/D999E4BFEF0B.png" data-x-image-preview="">

**Common issues to check:**
- 500 errors → Check Laravel logs
- 404 errors → Verify URL rewrite is configured
- Permission denied → Check `storage/` and `bootstrap/cache/` permissions

## Common Laravel Issues and Fixes

### "The stream or file could not be opened" Error

**Cause**: Permission issues with `storage/` folder

**Fix**:
```bash
chmod -R 775 storage
chmod -R 775 bootstrap/cache
```

On Windows, ensure your user has write permissions to these folders.

### "No application encryption key has been specified"

**Fix**:
```bash
php artisan key:generate
```

### Database connection refused

**Checklist**:
- [ ] MySQL/PostgreSQL service running in FlyEnv
- [ ] Database exists
- [ ] Credentials match `.env` file
- [ ] Using `127.0.0.1` not `localhost` (avoids socket issues)

### CSS/JS not loading (404 on assets)

**Cause**: Not running `npm run dev` or `npm run build`

**Fix**:
```bash
npm install
npm run dev
```

Or for production build:
```bash
npm run build
```

### "Vite manifest not found"

**Fix**: Run `npm run build` to generate the manifest file.

## Advanced Configuration

### Multiple PHP Versions

Testing Laravel upgrades? FlyEnv lets you switch PHP versions instantly:

1. Install multiple PHP versions (8.1, 8.2, 8.3)
2. Edit site settings
3. Change PHP version dropdown
4. Restart services

### SSL/HTTPS for Local Development

Enable SSL in site settings:
1. Edit site → Enable **"Use SSL"**
2. Select **"Auto SSL"**
3. Access via `https://laravel.test`

Essential for testing:
- Service Workers
- Secure cookies
- Payment integrations
- PWA features

### Queue Workers

For Laravel Queue functionality:

```bash
php artisan queue:work
```

Or use Supervisor to keep workers running.

### Scheduler (Cron)

Add to system cron (every minute):

```bash
* * * * * cd /path/to/project && php artisan schedule:run >> /dev/null 2>&1
```

Or use FlyEnv's built-in scheduler feature.

## Production Deployment Checklist

When moving from local FlyEnv to production:

- [ ] Update `.env`: `APP_ENV=production`, `APP_DEBUG=false`
- [ ] Set strong `APP_KEY` (already set if you ran `key:generate`)
- [ ] Configure production database credentials
- [ ] Set up queue workers (Supervisor)
- [ ] Configure scheduler (cron)
- [ ] Run `composer install --optimize-autoloader --no-dev`
- [ ] Run `php artisan config:cache`
- [ ] Run `php artisan route:cache`
- [ ] Run `php artisan view:cache`
- [ ] Set proper file permissions
- [ ] Configure SSL certificates

## Frequently Asked Questions (FAQ)

**Q: Which PHP version should I use for Laravel?**

A: Laravel 11.x requires PHP 8.2+. Laravel 10.x works with PHP 8.1+. Use the latest stable PHP version your Laravel version supports.

**Q: Can I use Laravel Sail with FlyEnv?**

A: Yes, but it's redundant. FlyEnv provides everything Sail does (PHP, MySQL, Redis) without Docker overhead. You can run `vendor/bin/sail` commands if needed, but native FlyEnv setup is recommended.

**Q: How do I switch from XAMPP/Laragon to FlyEnv?**

A: 
1. Export your XAMPP database
2. Stop XAMPP services
3. Install project in FlyEnv following this guide
4. Import database via FlyEnv's database management
5. Update `.env` with new database credentials

**Q: Why choose `public` as root directory?**

A: Security. Only files in `public/` should be web-accessible. The project root contains sensitive files like `.env` with database passwords.

**Q: Can I run multiple Laravel projects simultaneously?**

A: Yes. Create separate sites with different domains (e.g., `project1.test`, `project2.test`) and different ports if needed.

**Q: Does FlyEnv support Laravel Horizon?**

A: Yes. Horizon requires Redis—start the Redis module in FlyEnv, then run `php artisan horizon`.

**Q: How do I debug slow queries?**

A: Enable query logging in Laravel or use the debug bar. FlyEnv's MySQL slow query log is also available in the Database module.

**Q: Can I use PostgreSQL instead of MySQL?**

A: Absolutely. FlyEnv supports both. Just change `DB_CONNECTION=pgsql` in `.env` and configure PostgreSQL settings.

**Q: What's the difference between `php artisan serve` and FlyEnv?**

A: `php artisan serve` uses PHP's built-in server—slow, single-threaded, and not suitable for development with queues or real-time features. FlyEnv provides a production-like Nginx/Apache setup.

## Next Steps

Now that Laravel is running:

- [Project-Level Version Isolation](/guide/project-level-runtime-environment) — Manage multiple Laravel versions
- [PHP Debugging with Xdebug](/guide/php-debug-with-xdebug) — Step-through debugging
- [Local Email Testing](/guide/local-email-testing-mailpit) — Test emails without sending
- [Deploy with Cloudflare Tunnel](/guide/cloudflare-tunnel-local-development) — Share progress with clients

Happy coding with Laravel and FlyEnv!
