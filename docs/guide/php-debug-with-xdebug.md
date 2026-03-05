---
title: 'PHP Debugging with Xdebug: Step-by-Step Guide for PhpStorm & VSCode'
head:
  - - meta
    - name: description
      content: 'Set up Xdebug for PHP step-through debugging in PhpStorm and VSCode with FlyEnv. One-click Xdebug installation, IDE configuration, and breakpoint debugging for Laravel and PHP projects.'
---

# PHP Debugging with Xdebug: Step-by-Step Guide for PhpStorm & VSCode

Tired of adding `var_dump()` and `dd()` statements everywhere? Xdebug transforms PHP debugging from guessing into precise, step-by-step investigation. See exactly what your code does, inspect variables at any point, and trace execution flow—all without modifying your code.

With FlyEnv's one-click Xdebug installation, you can set up professional debugging in minutes instead of hours of configuration file editing.

## Why Xdebug Changes Everything

### Traditional Debugging (Without Xdebug)

```php
public function calculateTotal($items)
{
    $total = 0;
    foreach ($items as $item) {
        $price = $item->price;
        var_dump($price); // Remove this later
        $total += $price;
    }
    dd($total); // Die and dump
    return $total;
}
```

**Problems:**
- Cluttered code with debug statements
- Forget to remove debug code before committing
- Can't see intermediate values easily
- No execution flow visibility

### Xdebug Debugging

```php
public function calculateTotal($items)
{
    $total = 0;
    foreach ($items as $item) {
        $price = $item->price; // Set breakpoint here
        $total += $price;
    }
    return $total;
}
```

Set a breakpoint. Done. Inspect variables, step through loops, see the call stack—all in your IDE.

## Installing Xdebug in FlyEnv

### macOS & Linux: One-Click Installation

FlyEnv provides the fastest way to install Xdebug—no manual downloads or configuration hunting.

1. Open FlyEnv → **PHP** module
2. Select your PHP version
3. Click **"Extensions"** tab
4. Find **Xdebug** in the list
5. Click **Install**

<img src="https://oss.macphpstudy.com/image/2fdcb21372c6.png" data-x-image-preview="">

Xdebug downloads and installs automatically:

<img src="https://oss.macphpstudy.com/image/6ed17cba5620.png" data-x-image-preview="">

You'll see Xdebug listed as installed:

<img src="https://oss.macphpstudy.com/image/e459c21168db.png" data-x-image-preview="">

### Windows: Manual Installation

Windows requires manual download (due to PHP binary compatibility):

1. In FlyEnv PHP module, click **"Extension"** button
2. This opens the PECL website and your PHP extensions folder

<img src="https://oss.macphpstudy.com/image/a4e9e0dd1b67.png" data-x-image-preview="">

3. Visit [https://pecl.php.net/package/xdebug](https://pecl.php.net/package/xdebug)
4. Download the `xdebug.dll` matching your PHP version (TS/NTS, x64/x86)
5. Place `xdebug.dll` in your PHP extensions folder (opened in step 2)

**Tip:** Use the [Xdebug Wizard](https://xdebug.org/wizard) if unsure which DLL to download.

## Configuring Xdebug

### Quick Configuration with Templates

FlyEnv includes pre-configured Xdebug templates—no need to memorize settings.

1. In PHP module, click **"Conf"** to edit `php.ini`
2. Look for the Xdebug configuration section
3. Click the **template/copy button** to insert recommended settings

<img src="https://oss.macphpstudy.com/image/a32559287475.png" data-x-image-preview="">

<img src="https://oss.macphpstudy.com/image/f67b14ef9aa3.png" data-x-image-preview="">

### Recommended Xdebug Configuration

Paste this into your `php.ini` (macOS/Linux):

```ini
[xdebug]
zend_extension = "xdebug.so"
xdebug.idekey = "PHPSTORM"
xdebug.client_host = localhost
xdebug.client_port = 9003
xdebug.mode = debug
xdebug.profiler_append = 0
xdebug.profiler_output_name = cachegrind.out.%p
xdebug.start_with_request = yes
xdebug.trigger_value = StartProfileForMe
xdebug.output_dir = /tmp
```

**For Windows**, change the extension line:
```ini
zend_extension = "xdebug.dll"
```

### Configuration Explained

| Setting | Value | Purpose |
|---------|-------|---------|
| `xdebug.mode` | `debug` | Enable debugging (not profiling) |
| `xdebug.client_port` | `9003` | Port IDE listens on (PhpStorm default) |
| `xdebug.idekey` | `PHPSTORM` | Identifier for IDE matching |
| `xdebug.start_with_request` | `yes` | Auto-start debugging on every request |
| `xdebug.client_host` | `localhost` | Where IDE is running |

### Restart PHP

After saving `php.ini`:

1. Restart PHP service in FlyEnv
2. Create a test file `phpinfo.php`:
   ```php
   <?php phpinfo(); ?>
   ```
3. Access it in browser
4. Search for "Xdebug"—you should see version info

## IDE Configuration

### PhpStorm Setup

#### Step 1: Set PHP Interpreter

1. Open **Preferences** → **PHP**
2. Set CLI Interpreter to your FlyEnv PHP version

<img src="https://oss.macphpstudy.com/image/4b91c7af97cf.png" data-x-image-preview="">

#### Step 2: Configure Xdebug Port

1. Go to **Preferences** → **PHP** → **Debug**
2. Set Debug port to `9003` (matching `php.ini`)

<img src="https://oss.macphpstudy.com/image/9b600b0b0275.png" data-x-image-preview="">

#### Step 3: Set IDE Key and Host

1. In Debug settings, set:
   - **IDE key**: `PHPSTORM` (matching `php.ini`)
   - **Host**: `localhost`

<img src="https://oss.macphpstudy.com/image/EFC867333484.jpg" data-x-image-preview="">

#### Step 4: Start Listening

Click the **"Start Listening for PHP Debug Connections"** button (telephone icon) in the toolbar:

<img src="https://oss.macphpstudy.com/image/dad7b890d719.png" data-x-image-preview="">

#### Step 5: Set Breakpoint and Debug

1. Open a PHP file in your project
2. Click in the gutter to set a breakpoint (red dot appears)
3. Visit your site in browser
4. PhpStorm will prompt you to accept the connection:

<img src="https://oss.macphpstudy.com/image/bc0823efa076.png" data-x-image-preview="">

Click **"Accept"**—you're now in debugging mode:

<img src="https://oss.macphpstudy.com/image/72ba6834f455.png" data-x-image-preview="">

**Debugger panels:**
- **Frames**: Call stack showing execution path
- **Variables**: Inspect all variables in scope
- **Watches**: Track specific expressions
- **Console**: Execute PHP code in current context

### VSCode Setup

#### Step 1: Install PHP Debug Extension

1. Open Extensions view (Ctrl+Shift+X)
2. Search for **"PHP Debug"**
3. Install the extension by Felix Becker

<img src="https://oss.macphpstudy.com/image/php-debug-package.png" data-x-image-preview="">

4. Reload VSCode window after installation

#### Step 2: Add Debug Configuration

1. Switch to Debug view (Ctrl+Shift+D)
2. Click **"create a launch.json file"**

<img src="https://oss.macphpstudy.com/image/configure-xdebug.png" data-x-image-preview="">

3. Select **"PHP"** as the environment

<img src="https://oss.macphpstudy.com/image/launch-json.png" data-x-image-preview="">

#### Step 3: Configure launch.json

VSCode creates `.vscode/launch.json`. Add the `runtimeExecutable` property pointing to your FlyEnv PHP:

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Listen for Xdebug",
            "type": "php",
            "request": "launch",
            "port": 9003,
            "runtimeExecutable": "/Users/username/.flyenv/php/8.3.11/bin/php"
        }
    ]
}
```

**Find your PHP path:**
```bash
which php
# or
flyenv php path
```

#### Step 4: Start Debugging

1. Click the green **"Start Debugging"** button (play icon)
2. Set breakpoints in your code
3. Visit your site in browser

<img src="https://oss.macphpstudy.com/image/vscode-xdebug.png" data-x-image-preview="">

#### Step 5: Debug Controls

When a breakpoint is hit:

<img src="https://oss.macphpstudy.com/image/breakpoints-vscode.png" data-x-image-preview="">

**Debug Console** shows variable values and execution details.

**Keyboard shortcuts:**

| Key | Action |
|-----|--------|
| F5 | Continue / Run to next breakpoint |
| F10 | Step Over (execute line, don't enter functions) |
| F11 | Step Into (enter function calls) |
| Shift + F11 | Step Out (return from current function) |

<img src="https://oss.macphpstudy.com/image/controls-xdebug.png" data-x-image-preview="">

## Essential Debugging Techniques

### 1. Conditional Breakpoints

Only break when specific conditions are met:

```php
// Right-click breakpoint → More → Condition
$user->id === 123
$total > 1000
!empty($items)
```

### 2. Watching Expressions

Monitor specific variables or expressions:

- `$user->email`
- `count($cart->items)`
- `$request->input('search')`

### 3. Evaluating Code

Execute PHP code during debugging:

```php
// In PhpStorm Console or VSCode Debug Console
$user->refresh();
DB::table('logs')->where('id', 1)->first();
```

### 4. Stack Tracing

See how you got to the current line:

```
#0 app/Http/Controllers/OrderController.php(45)
#1 vendor/laravel/framework/src/Routing/ControllerDispatcher.php(48)
#2 vendor/laravel/framework/src/Routing/Route.php(262)
...
```

Click any frame to inspect variables at that point in execution.

## Troubleshooting

### "Xdebug not loading" in phpinfo()

**Causes:**
- Wrong extension path
- Version mismatch (TS vs NTS)
- PHP not restarted after config change

**Fix:**
1. Verify `zend_extension` path is correct
2. Check PHP error logs for loading errors
3. Ensure PHP was restarted in FlyEnv

### "Cannot accept external Xdebug connection"

**Cause:** Port mismatch or firewall

**Fix:**
1. Verify port 9003 in both `php.ini` and IDE
2. Check firewall isn't blocking localhost:9003
3. Ensure IDE is listening before making requests

### "Connection refused" or timeout

**Cause:** Xdebug can't reach IDE

**Fix:**
```ini
; Try these settings in php.ini
xdebug.client_host = 127.0.0.1
xdebug.discover_client_host = 1
xdebug.client_port = 9003
```

### Debugging not starting

**Cause:** `start_with_request` setting

**Fix:**
- `xdebug.start_with_request = yes` — Debug every request (development only)
- `xdebug.start_with_request = trigger` — Only when triggered (add `?XDEBUG_TRIGGER=1` to URL)

### Breakpoints not hitting

**Checklist:**
- [ ] Path mappings configured correctly (PhpStorm)
- [ ] File on server matches local file
- [ ] Breakpoint is on executable line (not blank/comment)
- [ ] Xdebug mode is `debug` (not `profile` or `off`)

## Performance Profiling (Bonus)

Xdebug can also profile your code to find bottlenecks:

```ini
xdebug.mode = profile
xdebug.start_with_request = trigger
xdebug.output_dir = /tmp
```

Trigger profiling by adding `?XDEBUG_PROFILE=1` to any URL. Analyze results with:
- **KCachegrind** (Linux)
- **QCachegrind** (macOS/Windows)
- **PhpStorm** (built-in profiler)

## Frequently Asked Questions (FAQ)

**Q: Does Xdebug slow down my application?**

A: Yes, by 10-50% when active. Only enable it for development, never production. Use `xdebug.mode = off` to disable without uninstalling.

**Q: Can I use Xdebug with Laravel Sail?**

A: Yes, but it's complex. With FlyEnv, Xdebug works natively without Docker networking complications.

**Q: What's the difference between Xdebug 2 and 3?**

A: FlyEnv installs Xdebug 3.x which has simplified configuration. Settings like `remote_enable` are replaced with `mode = debug`.

**Q: Can I debug CLI scripts?**

A: Yes. In PhpStorm, use "Run > Debug" on your script. In VSCode, configure a "Launch currently open script" configuration.

**Q: Why use port 9003 instead of 9000?**

A: Xdebug 3 changed the default from 9000 to 9003 to avoid conflicts with PHP-FPM which often uses 9000.

**Q: Can I debug AJAX requests?**

A: Yes. Xdebug works with any HTTP request—page loads, AJAX, API calls. Just ensure your IDE is listening.

**Q: How do I debug only specific requests?**

A: Change `xdebug.start_with_request = trigger` and add `?XDEBUG_TRIGGER=1` to URLs you want to debug.

**Q: Can I use Xdebug with PHPUnit tests?**

A: Absolutely. Set breakpoints in test methods or source code, then run tests with debugging enabled in your IDE.

**Q: Does Xdebug work with PHP 8+?**

A: Yes. Xdebug 3.0+ fully supports PHP 8.0, 8.1, 8.2, and 8.3 including new features like named arguments and attributes.

## Summary

Xdebug + FlyEnv gives you professional PHP debugging:

- ✅ **One-click installation** on macOS/Linux
- ✅ **Pre-configured templates** in FlyEnv
- ✅ **Step-through debugging** in PhpStorm and VSCode
- ✅ **Variable inspection** and expression evaluation
- ✅ **Call stack tracing** for complex applications

Stop guessing what your code does. Start seeing it.

[Download FlyEnv](/download) — Available for macOS, Windows, and Linux

Related guides:
- [Run Laravel with FlyEnv](/guide/run-laravel-use-flyenv) — Laravel-specific setup
- [Project-Level Version Isolation](/guide/project-level-runtime-environment) — Manage multiple PHP versions
- [PHP Extensions Installation](/guide/php-extensions-install) — Other useful extensions
