# Features Index — Design Wireframe

Structural design reference for `/features`.

## Goal
The page should work as:
1. product capability overview
2. discoverable index for Feature detail pages
3. SEO landing page for local-development capability queries
4. navigation bridge into Guides, Solutions, and Demos

## Recommended layout

```text
[Global Navigation]
FlyEnv   Features   Solutions   Demos   Guide ...

[Hero]
Everything in Your Local Development Environment
Short factual description.
[Download FlyEnv] [Getting Started]

[Category Jump]
Web Servers · Runtimes · Databases · Services · Tools · AI

[Web Servers]
[Nginx] [Apache] [Caddy]

[Languages & Runtimes]
[PHP] [Node.js] [Python] [Go] [Java] [...]

[Databases]
[MySQL] [MariaDB] [PostgreSQL] [SQLite] [...]

[Development Services / Infrastructure]
[...]

[Database Tools / Workflow / AI]
[...]

[Related Real Projects]
Selected Solutions cards.

[Get Started]
Download / Getting Started
```

## Design constraints
- Do not create a wall of 40 identical cards.
- Group by the product's real module taxonomy.
- Keep card copy factual and short.
- Prefer actual FlyEnv icons/module visuals where available.
- Keep the index readable as modules grow.
- Reuse existing FlyEnv visual language.
