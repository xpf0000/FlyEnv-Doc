# FlyEnv SEO Content Loop Kit

This kit defines a controlled SEO content production loop for the FlyEnv website.

## Phase 1 scope

Only two content clusters are in scope:

1. **Features** — one dedicated page for each stable FlyEnv module/capability.
2. **Compare** — dedicated comparison pages for a small, approved set of competing local development tools.

Existing **Solutions** content is considered complete for this phase.
New generic **How-to / Problem** content is out of scope until a later phase.

## Target information architecture

```text
/
├── features/
│   ├── php
│   ├── nodejs
│   ├── python
│   ├── ...
│
├── solutions/
│   ├── wordpress
│   ├── laravel
│   ├── ...
│
├── compare/
│   ├── xampp
│   ├── laragon
│   ├── mamp
│   ├── laravel-herd
│   ├── docker
│   └── servbay
│
└── guide/
```

Navigation rules:

- `Features` is intended to become a top-level website navigation item.
- `Compare` does **not** need a top-level website navigation item.
- Comparison pages should be discoverable from a `Compare` section in the Guide sidebar.
- Existing Solutions should be reused heavily for internal linking.

## Recommended execution order

1. Read `AGENTS.md`.
2. Read `.skills/seo-content/SKILL.md`.
3. Read the project rules under `docs/`.
4. Run `prompts/01-bootstrap-inventory.md`.
5. Human reviews the generated inventories and categories.
6. Run `prompts/02-first-feature-batch.md`.
7. Continue with `prompts/03-continue-loop.md`.

Do not start by bulk-generating dozens of pages.
The initial iteration limit is **3 pages maximum**.
