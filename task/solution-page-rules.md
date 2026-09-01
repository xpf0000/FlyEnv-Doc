# FlyEnv Solution Page Authoring Rules

Use this document as the content and implementation standard for all FlyEnv Solution detail pages.

The goal of a Solution page is to explain how FlyEnv supports the local environment around a real project.

A Solution page is **not** a replacement for the project's official documentation and must not become a generic installation tutorial.

---

## 1. Core principle

Every Solution page should answer five questions:

1. What is this project?
2. What local runtimes, databases and services does it typically need?
3. How does FlyEnv help manage that environment?
4. What does the project look like when running locally?
5. Where should the user go next?

The project is the main subject of the page.

FlyEnv is the environment-management layer around it.

---

## 2. Required page structure

Use this order unless there is a strong project-specific reason not to:

```text
Frontmatter

H1 / Hero
Short project-focused introduction
Primary FlyEnv CTA

What is {Project}?
Project Resources

Typical Local Stack

How FlyEnv Helps
- project-specific capabilities

Set Up the Local Environment
- high-level workflow only

Example Local Stack

Useful FlyEnv Capabilities

Project Running Locally
- real screenshot when available

Demo
- real video only when available

Related Solutions

Bottom CTA
```

Do not add sections only to make the page longer.

---

## 3. Page title

Use:

```text
Run {Project} Locally with FlyEnv
```

Examples:

```text
Run Laravel Locally with FlyEnv
Run Magento Locally with FlyEnv
Run ERPNext Locally with FlyEnv
Run Gitea Locally with FlyEnv
```

Avoid vague or marketing-heavy titles.

Do not use:

```text
The Ultimate {Project} Development Experience
The Best Way to Run {Project}
Run {Project} in One Click
```

---

## 4. Introduction

The opening paragraph should:

- mention the project
- describe the surrounding local environment
- explain FlyEnv's role
- stay within roughly 1–2 short paragraphs

Example pattern:

```text
{Project} projects typically depend on several local services working together.
FlyEnv helps you manage the runtimes, databases, web servers and supporting
services around a {Project} project from one local development environment.
```

Do not imply that FlyEnv installs or configures the entire application automatically unless that capability actually exists.

---

## 5. Always include official project resources

Every Solution page should include a `Project resources` section.

Prefer:

- Official Website
- GitHub Repository
- Official Documentation

Example:

```md
### Project resources

- [Official Website](...)
- [GitHub Repository](...)
- [Official Documentation](...)
```

If the project does not have one of these, omit that item.

Do not link to unofficial installation tutorials when an official source exists.

---

## 6. Official documentation owns project installation instructions

Solution pages must not try to replace upstream documentation.

Use language such as:

```text
For installation commands, supported versions and project-specific setup
instructions, refer to the official project documentation.
```

This is especially important for projects where requirements change frequently.

Examples:

- Magento
- ERPNext
- Nextcloud
- GitLab
- frameworks with major-version differences

---

## 7. Do not provide installation commands by default

Do not include commands such as:

```bash
composer create-project ...
npm install ...
pip install ...
docker compose ...
bench init ...
bin/magento setup:install ...
```

unless all of the following are true:

1. The command has been tested for the exact project/version being documented.
2. FlyEnv has a dedicated verified guide for that workflow.
3. The command is important to the FlyEnv-specific workflow.
4. There is a clear maintenance owner for keeping it current.

For generic Solution pages, describe the workflow at a high level instead.

---

## 8. Separate project installation from environment setup

Use the distinction:

```text
Project installation
→ handled according to official project documentation

Local environment
→ managed with FlyEnv
```

FlyEnv Solution pages should focus on the second part.

For example:

```text
The Laravel project itself should be installed according to the official
Laravel documentation.

FlyEnv focuses on the surrounding local environment:
- PHP
- database
- Redis
- web server
- local domain
- HTTPS
```

---

## 9. Use “Typical Local Stack”, not “Required Stack”, unless verified

Many projects support multiple configurations.

Prefer:

```text
Typical local stack
Common local stack
A typical FlyEnv setup
```

Avoid:

```text
Required stack
Requirements
Dependencies
```

unless the items are truly mandatory for the exact supported project version.

Examples:

Laravel may use:

- MySQL OR PostgreSQL
- Redis optionally
- Nginx OR Apache OR Caddy

Magento requirements vary significantly by release.

The page must not turn a common configuration into a false hard requirement.

---

## 10. Stack table format

Recommended:

```md
| Component | Typical role |
| --- | --- |
| **PHP** | Runs the application |
| **MySQL / PostgreSQL** | Stores application data |
| **Redis** | Cache, sessions or queues |
| **Nginx / Apache** | Serves the local application |
```

Keep descriptions short.

Do not turn this into a full architecture document.

---

## 11. How FlyEnv Helps must be project-specific

Do not repeat generic marketing text on every page.

Bad:

```text
FlyEnv makes local development easier.
FlyEnv is fast and powerful.
FlyEnv saves developers time.
```

Good for Laravel:

```text
Manage PHP versions
Run MySQL or PostgreSQL
Add Redis when needed
Use a local domain and HTTPS
Keep related services together
```

Good for Magento:

```text
Match the required PHP version
Run MySQL or MariaDB
Run the supported search service
Use Redis for cache and sessions
Keep the multi-service stack together
```

The user should understand why FlyEnv is useful for this specific project.

---

## 12. High-level setup workflow only

Use a section named:

```text
Set up the local environment
```

Do not use:

```text
Install {Project} with FlyEnv
```

unless FlyEnv truly performs the installation.

Recommended workflow style:

```text
1. Check the project's official requirements.
2. Select the required runtime version.
3. Start the database.
4. Start optional or supporting services.
5. Add the project to FlyEnv.
6. Configure the local domain and HTTPS.
7. Group related services when useful.
8. Start the stack and open the project.
```

Adapt the steps to each project.

---

## 13. Be precise about optional services

Do not imply optional services are mandatory.

Use phrases such as:

```text
when the project needs it
if the project uses it
commonly used for
depending on the project
depending on the release
```

This is particularly important for:

- Redis
- Node.js
- queues
- search engines
- message brokers
- optional databases

---

## 14. Version-sensitive projects

For projects whose requirements change by release:

1. Explicitly say requirements vary by version.
2. Link to official system requirements.
3. Avoid hard-coded version numbers unless the page targets a specific release.
4. Avoid asserting that one service is universally required if support changed across releases.

Example:

```text
Magento system requirements vary by release. Always check the official
documentation for the exact PHP, database and search-service versions
supported by the Magento version you plan to run.
```

---

## 15. Screenshots must be real

When showing the final result:

- use a real project screenshot
- use a real local domain when possible
- use the actual application UI
- do not generate fake application screenshots
- do not generate fake FlyEnv interfaces

The Solution page should show the project successfully running locally.

Examples:

```text
Laravel application in browser
Magento storefront
Magento Admin
ERPNext dashboard
Gitea repository page
WordPress dashboard
```

---

## 16. Demo videos must be real

Only include a video section when a relevant FlyEnv demo exists.

If no demo exists:

- omit the section in production
- do not use a placeholder YouTube video
- do not embed an unrelated project tutorial

A real demo should ideally show:

```text
Final running project
→ relevant FlyEnv environment
→ start/stop workflow
→ browser result
```

---

## 17. FlyEnv screenshots must represent existing functionality

Do not create screenshots or UI mockups that imply FlyEnv currently provides:

- a Solution marketplace
- one-click project templates
- automatic project installation
- an “Install WordPress” action
- an “Open in FlyEnv” action
- a project catalog inside the desktop app

unless those features actually exist.

Real FlyEnv functionality can be shown, including:

- runtime modules
- database modules
- web server modules
- project configuration
- local domains
- HTTPS
- Startup Groups
- management tools

---

## 18. Related Solutions

Add 3–5 related projects.

Choose them by meaningful relationship, for example:

Laravel:

```text
Symfony
WordPress
Magento
Django
```

Magento:

```text
PrestaShop
OpenCart
Laravel
WordPress
```

Do not add unrelated projects only for internal-link volume.

---

## 19. CTA rules

Keep CTAs factual and restrained.

Recommended:

```text
Download FlyEnv
View Documentation
View Setup Guide
Watch Demo
```

Avoid:

```text
Start in One Click
Deploy Instantly
Launch Now
The Easiest Way
Best Local Environment
```

unless the claim is objectively supported.

---

## 20. Tone

Use a developer-oriented, factual tone.

Prefer:

```text
FlyEnv lets you manage...
A typical local stack can include...
The exact requirements depend on...
```

Avoid:

```text
Powerful
Revolutionary
Ultimate
Effortless
Supercharge
Game-changing
```

Do not make the page sound like generic SaaS marketing copy.

---

## 21. SEO rules

Each page should have:

- one H1
- unique title
- unique meta description
- project name in title and H1
- “locally” or “local development” where natural
- Windows, macOS and Linux where useful
- semantic headings
- crawlable static HTML

Do not keyword-stuff project names or runtime names.

The page should primarily be useful to a developer, not written for search engines.

---

## 22. VitePress frontmatter template

Use this baseline:

```yaml
---
title: Run {Project} Locally with FlyEnv
description: Set up and manage a local {Project} development environment with {key stack summary} using FlyEnv on Windows, macOS and Linux.
head:
  - - meta
    - name: keywords
      content: {project} local development, {project} local environment, FlyEnv
---
```

Adjust the description and keywords for the actual project.

Do not copy the exact same meta description across pages.

---

## 23. Content source of truth

Before creating a Solution page, verify:

1. Official project website
2. Official GitHub repository
3. Official documentation
4. Current runtime/database/service requirements
5. Whether listed services are mandatory or optional
6. Whether FlyEnv actually supports the surrounding components

Never invent compatibility.

If compatibility is uncertain, use cautious wording or omit the claim.

---

## 24. Relationship with Guides

Use:

```text
Solution
→ What the project needs and how FlyEnv helps

Guide
→ Exact tested steps, commands and configuration
```

A Solution page can link to a dedicated FlyEnv guide when one exists.

Do not duplicate a full guide inside the Solution page.

---

## 25. Relationship with Modules

Solution pages should naturally link to relevant FlyEnv capability pages when appropriate.

Example:

```text
Laravel
├── PHP
├── MySQL
├── Redis
└── Nginx
```

These can link to the relevant FlyEnv module documentation or pages.

Do not overload every stack item with links if it harms readability.

---

## 26. Page success criterion

After reading a Solution page, the user should understand:

```text
I want to run {Project} locally.

I now know:
- what kind of project it is
- what local services it typically uses
- what FlyEnv can manage for me
- where to find the official installation instructions
- where to download FlyEnv or continue to a verified guide
```

The page should never leave the impression that FlyEnv is the upstream installer or official documentation for the project.

---

## 27. Final authoring rule

The most important rule for every FlyEnv Solution page is:

> Explain how FlyEnv supports the project's local environment. Do not replace the project's official installation documentation.

When in doubt, link to the official project documentation instead of copying installation steps into the Solution page.
