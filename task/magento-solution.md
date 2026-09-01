---
title: Run Magento Locally with FlyEnv
description: Set up and manage a local Magento development stack with PHP, Composer, MySQL or MariaDB, search services, Redis, Nginx and HTTPS using FlyEnv on Windows, macOS and Linux.
head:
  - - meta
    - name: keywords
      content: Magento local development, Magento Open Source local environment, PHP, Composer, MySQL, MariaDB, Elasticsearch, OpenSearch, Redis, Nginx, FlyEnv
---

# Run Magento Locally with FlyEnv

Magento projects typically depend on several local services working together. FlyEnv helps you manage the runtimes, database, cache, search service and web server around a Magento project from one local development environment.

[Download FlyEnv](/download.html)

## What is Magento?

Magento Open Source is an open-source e-commerce platform for building online stores and commerce applications.

### Project resources

- [Official Website](https://business.adobe.com/products/magento/magento-commerce.html)
- [GitHub Repository](https://github.com/magento/magento2)
- [Magento Open Source Documentation](https://experienceleague.adobe.com/en/docs/commerce-operations/installation-guide/overview)

Magento system requirements vary by release. Always check the official documentation for the exact PHP, database, search-service and extension requirements of the Magento version you plan to run.

## Typical local stack

A Magento local environment may include:

| Component | Typical role |
| --- | --- |
| **PHP** | Runs the Magento application |
| **Composer** | Installs Magento and PHP dependencies |
| **MySQL / MariaDB** | Stores Magento application data |
| **OpenSearch / Elasticsearch** | Provides catalog search and indexing, depending on the Magento release |
| **Redis** | Commonly used for cache and sessions |
| **Nginx / Apache** | Serves the Magento application |
| **Node.js** | Used by some frontend development workflows |

The exact requirements depend on the Magento release. Do not treat this list as a version-independent installation specification.

## How FlyEnv helps

### Match the required PHP version

Magento releases support specific PHP versions. FlyEnv lets you install and switch between PHP versions so the local runtime can match the project.

### Run MySQL or MariaDB locally

Manage the project database alongside the rest of the local stack.

### Run supporting search services

Magento commonly requires a search service for catalog search and indexing.

Depending on the Magento release, this may be OpenSearch, Elasticsearch or another officially supported option. Follow the official Magento requirements for the exact version and service combination.

### Use Redis for cache and sessions

FlyEnv can run Redis alongside PHP, the database and the web server when the Magento configuration uses it.

### Use a local domain and HTTPS

Configure a readable local address such as:

```text
https://magento.test
```

and enable local HTTPS when needed.

### Keep the stack together

Magento projects may involve several long-running services. FlyEnv Startup Groups can keep the main parts of the local environment together.

For example:

```text
Magento project
PHP
MySQL
Redis
Search service
Nginx
```

The exact stack depends on the Magento version and project configuration.

## Set up the local environment

The Magento application itself should be installed according to the official Magento documentation.

FlyEnv focuses on the surrounding local environment:

1. Check the official system requirements for the Magento release.
2. Select the required PHP version.
3. Make sure Composer is available.
4. Start MySQL or MariaDB and prepare the database.
5. Start the required search service.
6. Start Redis if the project uses it.
7. Add the Magento project to FlyEnv.
8. Configure the local domain, web server and HTTPS.
9. Group related services in a Startup Group when useful.
10. Start the stack and open Magento in the browser.

## Example local stack

```text
Magento
├── PHP
├── Composer
├── MySQL / MariaDB
├── OpenSearch / Elasticsearch
├── Redis
└── Nginx
```

This is a representative local stack rather than a universal requirement. Supported services and versions vary across Magento releases.

## Useful FlyEnv capabilities for Magento

- PHP version management
- MySQL / MariaDB
- Redis
- Elasticsearch
- Nginx / Apache
- Local domains
- HTTPS
- Startup Groups

## Magento running locally

Once the Magento project and its required services are ready, you can access the storefront and admin interface through the local domain configured in FlyEnv.

> Add a real Magento storefront or admin screenshot here when available.

## Demo

If a FlyEnv + Magento demo video is available, embed or link it here.

> Keep this section hidden until a real demo has been published.

## Related solutions

- Laravel
- WordPress
- PrestaShop
- OpenCart

## Ready to run Magento locally?

Use FlyEnv to manage the runtimes, database, cache, search service and web server around your Magento development environment.

[Download FlyEnv](/download.html)
