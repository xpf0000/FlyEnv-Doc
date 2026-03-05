---
title: 'Custom Domains & Auto SSL for Local Development: Complete Guide'
head:
  - - meta
    - name: description
      content: 'Set up professional local development with custom domains and automatic SSL certificates. Learn how to use .test domains with HTTPS in FlyEnv without browser warnings.'
---

# Custom Domains & Auto SSL for Local Development: Complete Guide

Accessing your project at `http://localhost:8080/myproject` is embarrassing when sharing with clients. Professional developers use clean domains like `https://clientproject.test`—with valid SSL certificates that browsers trust.

This guide shows you how to set up custom local domains with automatic HTTPS, making your development environment indistinguishable from production.

## Why Custom Domains Matter

### The Problem with localhost:port URLs

```
❌ http://localhost:3000
❌ http://127.0.0.1:8080/project
❌ http://192.168.1.50:9000
```

**Issues:**
- Hard to remember
- Port numbers in URLs
- Cookie conflicts between projects
- CORS issues when testing APIs
- No HTTPS for testing secure features

### The Professional Approach

```
✅ https://myapp.test
✅ https://api.myapp.test
✅ https://admin.myapp.test
```

**Benefits:**
- Clean, memorable URLs
- Per-project cookies and storage
- Proper HTTPS testing
- Subdomain-based routing
- Production-parity configuration

## How Local Domains Work

FlyEnv uses the **Hosts file** (system-level DNS override) to map domains to your local machine:

```
# /etc/hosts (macOS/Linux) or C:\Windows\System32\drivers\etc\hosts
127.0.0.1  myproject.test
127.0.0.1  api.myproject.test
```

Combined with a local web server, this creates a complete local hosting environment.

## Creating Your First Custom Domain Site

### Step 1: Choose a Domain Name

**Recommended TLDs for local development:**
- `.test` — IETF reserved for testing (recommended)
- `.local` — Common but can conflict with mDNS on macOS
- `.localhost` — Explicitly non-routable
- `.invalid` — Another reserved option

**Avoid:**
- `.dev` — Owned by Google, forces HTTPS in Chrome
- Real TLDs (.com, .io) — May conflict with actual sites

**Good examples:**
- `laravel-project.test`
- `client-site.test`
- `api.myapp.test`
- `wordpress.test`

### Step 2: Create Site in FlyEnv

1. Open **Host** module
2. Click **"Add Site"**
3. Configure:
   - **Host Name**: `myproject.test`
   - **Host Root**: `/Users/you/code/myproject/public`
   - **PHP Version**: Select installed version
   - **Port**: 80 (HTTP default)

![Add Site Form](https://oss.macphpstudy.com/image/quick-start-4.webp)

### Step 3: Configure Project Root

The root path depends on your framework:

| Framework | Root Directory |
|-----------|----------------|
| Laravel | `/project/public` |
| WordPress | `/project` (contains wp-config.php) |
| Symfony | `/project/public` |
| Yii2 | `/project/web` |
| Plain PHP | `/project` (where index.php lives) |
| Static HTML | `/project` (where index.html lives) |

**Important**: Set correct permissions:
- Owner: Your user account
- Group: Web server user (www-data, _www, etc.)
- Permissions: 755 for directories, 644 for files

### Step 4: Enable Auto SSL

SSL is essential for testing:
- Service Workers require HTTPS
- Secure cookies only work over HTTPS
- WebRTC requires HTTPS
- Modern APIs (Geolocation, Camera) require HTTPS

**Enable in FlyEnv:**

1. In site settings, check **"Use SSL"**
2. Select **"Auto SSL"** (recommended)
3. Click **Save**

![SSL Configuration](https://oss.macphpstudy.com/image/host-1.webp)

**What happens:**
- FlyEnv generates a local CA certificate
- Creates site-specific certificate signed by CA
- Adds CA to system trust store
- Configures web server for HTTPS

**Note for Linux**: Browsers may require manual CA import. FlyEnv provides the certificate file path.

### Step 5: Start Services and Test

1. Start your web server (Nginx/Apache/Caddy)
2. Start PHP-FPM (if using PHP)
3. Open `https://myproject.test` in browser

You should see a green lock icon—no browser warnings.

## Site Configuration Options

### Port Configuration

**Standard ports:**
- Port 80 — HTTP (no port in URL)
- Port 443 — HTTPS (no port in URL)
- Custom ports — `http://site.test:8080`

**When to use custom ports:**
- Running multiple web servers
- Avoiding conflicts with system services
- Testing specific port scenarios

### Host Aliases

Add multiple domains pointing to the same site:

```
Primary: myproject.test
Alias: www.myproject.test
Alias: alternate.test
```

All aliases share the same SSL certificate automatically.

### Subdomain Auto-Discovery (Park Feature)

The **Park** feature auto-creates subdomains from folder names:

```
Root: /Users/you/projects/myapp
Subdirectories:
  - /api -> api.myapp.test
  - /admin -> admin.myapp.test
  - /docs -> docs.myapp.test
```

Enable in site settings by checking **"Park"** option.

### URL Rewriting

Most frameworks require URL rewriting. FlyEnv includes templates:

**For Nginx:**
```nginx
# Laravel rewrite
location / {
    try_files $uri $uri/ /index.php?$query_string;
}

# WordPress rewrite
location / {
    try_files $uri $uri/ /index.php;
}
```

**Select template in FlyEnv:**
1. Edit site
2. Click **"Rewrite Rules"**
3. Choose framework template
4. Save

![Rewrite Templates](https://oss.macphpstudy.com/image/host-2.webp)

## Advanced SSL Configuration

### Understanding Local SSL

FlyEnv's Auto SSL uses a local Certificate Authority (CA):

```
Local CA (trusted by system)
    |
    +-- Site Certificate (myproject.test)
    +-- Site Certificate (api.myproject.test)
```

This allows unlimited local certificates without Let's Encrypt rate limits or DNS validation.

### Manual Certificate Import (Linux)

If browsers show warnings:

```bash
# Find the CA certificate in FlyEnv settings
# Typically: ~/.flyenv/ssl/rootCA.pem

# Import to system trust (Ubuntu/Debian)
sudo cp rootCA.pem /usr/local/share/ca-certificates/flyenv.crt
sudo update-ca-certificates

# For Chrome specifically
# Settings -> Privacy -> Security -> Manage Certificates -> Authorities -> Import
```

### Using Custom Certificates

For testing with real certificates:

1. Obtain certificate files (.crt and .key)
2. In site settings, select **"Custom SSL"**
3. Upload certificate files
4. Save

Useful for:
- Testing production certificates locally
- Client-provided certificates
- Wildcard certificate testing

## Multi-Server Setups

### Running Multiple Web Servers

You can run Apache, Nginx, and Caddy simultaneously on different ports:

| Server | Port | Use Case |
|--------|------|----------|
| Nginx | 80/443 | Primary development |
| Apache | 8080/8443 | Testing .htaccess rules |
| Caddy | 3000 | Quick prototyping |

Configure each site with its preferred server and port.

### Load Balancing Simulation

Test load-balanced setups locally:

```
User Request
    |
    v
Nginx (load balancer) -> localhost:3001 (Instance 1)
                      -> localhost:3002 (Instance 2)
                      -> localhost:3003 (Instance 3)
```

Configure in Nginx upstream block for realistic testing.

## Troubleshooting

### "This site cannot be reached"

**Check:**
1. Web server running?
2. Correct port?
3. Hosts file updated? (FlyEnv does this automatically)
4. DNS cache: `sudo killall -HUP mDNSResponder` (macOS)

### "Your connection is not private" (SSL Error)

**macOS:**
1. FlyEnv should auto-trust the CA
2. If not, manually trust in Keychain Access

**Windows:**
1. Import CA certificate to "Trusted Root Certification Authorities"

**Linux:**
```bash
# Update CA store
sudo update-ca-certificates

# Restart browser
```

### "502 Bad Gateway" or "504 Gateway Timeout"

**Causes:**
1. PHP-FPM not running
2. Wrong PHP-FPM socket path
3. Application error

**Solutions:**
1. Start PHP in FlyEnv
2. Check PHP version matches site configuration
3. Review application error logs

### "403 Forbidden"

**Cause**: File permissions or directory indexing disabled

**Solutions:**
1. Check folder permissions (755 for directories)
2. Ensure index.php/index.html exists
3. Enable directory listing in web server config (if desired)

### Domains resolving to wrong IP

**Cause**: External DNS overriding local hosts

**Solutions:**
1. Use `.test` TLD (reserved, never has public DNS)
2. Check `/etc/hosts` for correct entries
3. Flush DNS cache

## Frequently Asked Questions (FAQ)

**Q: Can I use real domains like mysite.com locally?**

A: Yes, but not recommended. It prevents accessing the real site. Use .test instead.

**Q: Will these SSL certificates work for others?**

A: No. Local certificates are only trusted on your machine. For sharing, use [Cloudflare Tunnel](/guide/cloudflare-tunnel-local-development).

**Q: How many sites can I create?**

A: Unlimited. Limited only by your system resources.

**Q: Can I share local sites with my team?**

A: Local sites are localhost-only. For team access, use Cloudflare Tunnel or deploy to a shared server.

**Q: Do I need to renew local SSL certificates?**

A: No. Local certificates generated by FlyEnv do not expire or need renewal.

**Q: Can I use wildcards like *.test?**

A: Yes. Create a site with `*.myproject.test` to match any subdomain.

**Q: What about IPv6?**

A: FlyEnv supports both IPv4 (127.0.0.1) and IPv6 (::1) localhost.

## Best Practices

1. **Use .test TLD** — Avoids conflicts with real websites
2. **Match production structure** — Keep local domains similar to production
3. **Enable SSL always** — Test with HTTPS from day one
4. **Organize with subdomains** — api.myapp.test, admin.myapp.test
5. **Version control configs** — Export and commit site configurations

## Next Steps

Now that you have professional local hosting set up:

- [Reverse Proxy for Node.js](/guide/reverse-proxy-nestjs-multi-servers) — Host Node apps with clean URLs
- [Cloudflare Tunnel](/guide/cloudflare-tunnel-local-development) — Share sites securely
- [Email Testing with Mailpit](/guide/local-email-testing-mailpit) — Complete development environment

[Download FlyEnv](/download) to get started with custom domains today.
