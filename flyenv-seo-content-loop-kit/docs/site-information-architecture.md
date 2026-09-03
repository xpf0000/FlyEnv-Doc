# Site Information Architecture

## Primary content families

### Features

Purpose: explain what FlyEnv provides.

Canonical route pattern:

```text
/features
/features/:feature
```

`Features` should be a top-level website navigation item once the index is ready.

Feature pages should be grouped by real product/module categories, not arbitrary SEO categories.

### Solutions

Purpose: explain what users can run/build with FlyEnv.

Canonical route pattern:

```text
/solutions
/solutions/:solution
```

Solutions are already implemented in this phase.
Do not regenerate them.

### Compare

Purpose: explain how FlyEnv differs from alternative local-development approaches and tools.

Canonical route pattern:

```text
/compare/:competitor
```

Compare does **not** need to be a top-level global navigation item.

Comparison pages should appear under a `Compare` group in the Guide sidebar:

```text
Compare
├── FlyEnv vs XAMPP
├── FlyEnv vs Laragon
├── FlyEnv vs MAMP
├── FlyEnv vs Laravel Herd
├── FlyEnv vs Docker
└── FlyEnv vs ServBay
```

A `/compare` index page is optional in Phase 1.
Create it only if it adds genuine standalone value.

### Guide

Purpose: usage instructions, setup, troubleshooting, conceptual guidance.

Existing broad comparison content such as a combined Docker/XAMPP guide can remain as a higher-level selection guide, but dedicated comparison intent should move to `/compare/:competitor`.

## Internal-link model

Feature pages should link to relevant:

- Guides
- Solutions
- Demos
- other Features
- Getting Started
- Download

Compare pages should link to relevant:

- Features
- Getting Started
- Download
- relevant Guide content
- other comparisons only where useful

Solutions should not be edited substantially merely to add backlinks. Add only natural links.

## URL policy

Preferred public/canonical URLs are clean URLs without `.html`.

Examples:

```text
/features/php
/compare/xampp
/solutions/wordpress
```

Nginx/static hosting may internally resolve these to generated `.html` files.
