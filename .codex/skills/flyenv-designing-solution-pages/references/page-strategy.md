# Page Strategy

Use this before changing a FlyEnv Solution page. The output should be short and factual; it is a design brief, not chain-of-thought.

## 1. Define the page's job

Write one primary search intent. Prefer a category/environment intent over a how-to intent when a detailed Guide already exists.

Examples:

- Solution: `Laravel local development environment`
- Guide: `how to run Laravel locally`

- Solution: `WordPress local development environment`
- Guide: `how to install WordPress locally`

If the Solution and Guide would naturally use the same H1 and answer the same question, the Solution is not differentiated enough.

## 2. Model the real local environment

Identify what actually has to run for the technology:

- runtime(s)
- package/dependency manager
- web/application server
- database(s)
- cache, queues, workers, schedulers
- build tools
- local domain/HTTPS
- auxiliary services

Do not add components just because they appear on another Solution page.

## 3. Identify project-specific friction

Choose the 3–5 problems that matter for this technology, not generic development problems.

Good examples:

- Laravel: project PHP versions, Composer, queues/scheduler, Redis, `/public`, local HTTPS
- WordPress: PHP extensions, database/site lifecycle, wp-config, local domains, multiple sites, wp-cli
- ERPNext: Bench, Python/Node, MariaDB, Redis roles, multiple processes, startup order
- Next.js: Node version, package manager, dev/build lifecycle, frontend/backend split, local domain, optional DB/Redis

## 4. Map FlyEnv capabilities to those problems

Only claim capabilities that FlyEnv actually provides. Prefer concrete behavior over adjectives.

Weak: `FlyEnv makes Laravel development easier.`

Strong: `Bind a PHP version and Composer version to the project, create the site, and start PHP, Nginx, MySQL and Redis together with a Startup Group.`

## 5. Choose proof

At least one primary proof element should appear on important Solution pages:

- real FlyEnv screenshot
- project-specific FlyEnv UI state
- architecture diagram
- startup topology
- real domain/result
- concrete creation/import workflow

The proof must reflect the technology's real workflow. Do not invent a universal “project dashboard” merely for visual consistency.

## 6. Decide what NOT to include

A section should exist because it answers a meaningful question. Do not add Comparison, FAQ, “About X,” “Common use cases,” architecture diagrams, or workflow cards merely because other pages have them.

Generic material should usually be removed or compressed when it does not help a developer decide how the technology works with FlyEnv.

## 7. Produce the strategy note

Use this exact compact shape before implementation:

```text
Primary search intent:
Existing Guide overlap:
Typical local stack:
3 project-specific developer problems:
Relevant FlyEnv capabilities:
Best proof to show:
2–3 sections unique to this technology:
Remove/merge:
```
