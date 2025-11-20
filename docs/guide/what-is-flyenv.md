# What is FlyEnv?

FlyEnv is an all-in-one full-stack environment management tool. Help developers quickly set up a local development environment.

It simplifies development by offering **swift multi-version switching**, **full-stack technology support**, and a **seamless cross-platform experience**. Whether you're working with PHP, NodeJS, Java, Go, or Python, FlyEnv integrates all necessary tools with a single command, eliminating configuration headaches and letting you focus on what truly matters—**creation, not debugging**.

In short, FlyEnv provides a complete operating environment, helping users develop and debug applications like Laravel, WordPress, Yii2, FastAdmin, NestJS, SpringBoot, Gin, Beego, Django, Flask, and more.

**In-Depth Project Analysis and Technical Details**: [https://deepwiki.com/xpf0000/FlyEnv](https://deepwiki.com/xpf0000/FlyEnv)

## Key Features

### Software Installation
FlyEnv offers **one-click installation** for a wide range of software, including:

- **AI Integration**: Ollama, DeepSeek, Chatbox.
- **Web Servers**: Apache, Nginx, Caddy, Tomcat, Consul.
- **Databases**: MySQL, MariaDB, PostgreSQL, MongoDB.
- **Email Server**: Mailpit.
- **Programming Languages & Runtime**: PHP (Composer), Java (Maven), NodeJS, Python, Go, Erlang, Ruby, Rust (Rustup), Bun, Deno, Gradle.
- **Data Queue & Cache**: Redis, Memcached, RabbitMQ, etcd.
- **Search Engine**: Elasticsearch, Meilisearch, Typesense
- **Object Storage**: Minio.
- **Utilities**: DNS Server, FTP Server, Static HTTP Server.

All software supports **multi-version installation**. For example:
- PHP: Versions 5.x to the latest 8.x.
- MySQL: Versions 5.x to 9.x.

New versions are automatically available without waiting for FlyEnv updates.

#### Platform-Specific Installation
- **Windows**: All software is downloaded from official sources.
- **macOS**: FlyEnv provides three installation methods:
   1. Official installation packages (if available).
   2. Homebrew.
   3. Macports.

For users with locally installed software, FlyEnv allows adding custom paths, avoiding redundant downloads. It also automatically detects Homebrew and Macports installations.

### Software Service Management
FlyEnv lets you manage the start and stop of services for all installed software. For example:
- Start/stop PHP-FPM, MySQL, Apache, Redis, and more.
- Edit configuration files directly within FlyEnv's built-in editor.
- Quickly locate and open configuration files.

### Local Web Hosting
- **One-Click Site Creation**: FlyEnv automatically generates configuration files for web servers like Apache, Nginx, and Tomcat.
- **Custom Domains**: Access local sites using any domain name, with HTTPS support.
- **Log Management**: Easily view and analyze site access logs.

### Environment Variables
- Add any supported software to environment variables with one click.
- Set aliases (e.g., PHP74, PHP82) for easy terminal use.

### Container/Image/Docker-Compose Management
For scenarios where conventional methods fall short, FlyEnv also offers a container-based solution. This allows you to manage images and containers, as well as quickly build and run Docker Compose configurations.
[Podman Module User Guide](/guide/podman-module)

### Additional Tools
FlyEnv includes many practical features for developers, such as:
1. **JSON Parsing**: Convert between JSON, JavaScript objects, PHP arrays, XML, YAML, and more.
2. **Port & Process Management**: Kill processes by port number or command.
3. **Project Templates**: Quickly create projects for Laravel, WordPress, Yii2, Next.js, Vue, NestJS, and more.


## Why Choose FlyEnv?

### Compared to Docker
Docker is powerful, but many developers just want a ready-to-use environment for PHP, NodeJS, Java, Go, or Python. FlyEnv is **more intuitive and lightweight**:
- No virtual containers—all modules run as native static binaries.
- Faster performance and lower resource usage (especially on macOS and Windows).
- Easier to view and modify configuration and log files.

### Compared to MAMP Pro, Laravel Herd, XAMPP, etc.
FlyEnv is **more flexible and up-to-date**:
- Supports multiple installation sources (Homebrew, Macports, APT, DNF, official binaries, etc.).
- Timely version updates—no need to wait for FlyEnv upgrades.
- Configuration files and settings are closer to real production environments, making deployment easier.

## Customization and Optimization
- **Hide Unused Modules**: FlyEnv allows you to hide unnecessary modules in the settings, reducing clutter.
- **Network Issues**: If installation is slow due to network limitations, you can install software manually and add custom paths to FlyEnv.
- **Configuration Optimization**: FlyEnv uses general configurations by default. If specific modules or extensions are needed for your project, submit a GitHub Issue or leave feedback for optimization.

## Community-Driven Improvement
FlyEnv is designed to grow with the help of its community. Many features are built to cover basic functionality, and feedback from advanced users is highly valued. Together, we can:
- Add support for more software.
- Improve tools and performance.
- Make development easier, so you can spend more time with your family and achieve your goals.

## Get Started with FlyEnv
[Download](/download) FlyEnv today and experience a new level of development efficiency.

## Discussions

[What technical limitations does FlyEnv have compared to similar tools?](https://github.com/xpf0000/FlyEnv/discussions/262)
