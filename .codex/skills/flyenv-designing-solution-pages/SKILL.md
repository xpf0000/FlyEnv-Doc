---
name: flyenv-designing-solution-pages
description: Use when designing, rewriting, reviewing, or expanding FlyEnv Solution pages, especially when multiple technology pages risk becoming copy-pasted templates, when a Solution overlaps an existing Guide, or when deciding page structure, project-specific sections, diagrams, screenshots, comparisons, FAQs, and SEO intent.
---

# Designing FlyEnv Solution Pages

## Core principle

**Reuse the FlyEnv design system, not the page narrative.**

A Solution page must feel unmistakably like FlyEnv and unmistakably like the specific technology it covers. Laravel is a quality reference, not a master template.

## Required workflow

Before editing a Solution page, produce a compact **Page Strategy** containing only conclusions:

```text
Primary search intent:
Existing Guide overlap:
Typical local stack:
3 project-specific developer problems:
Relevant FlyEnv capabilities:
Best proof to show:
2–3 sections that must be unique to this technology:
Sections from existing page to remove/merge:
```

Then design the page from that strategy.

**REQUIRED REFERENCE:** Read `references/page-strategy.md` before changing information architecture.

## What may stay consistent

Keep the FlyEnv visual system consistent: navigation, page width, typography, color, spacing, card language, buttons, related-solutions treatment, CTA, and footer.

Everything between hero and related-solutions is allowed to change: section count, order, visual form, screenshots, diagrams, tables, workflows, comparison, FAQ, and depth.

## Non-template rule

Do not automatically reproduce:

`Needs → Stack → Why FlyEnv → New/Existing → Compare → FAQ`

Those sections are valid for Laravel because Laravel's architecture supports them. Other technologies must earn their own structure.

Use components as a palette, not a checklist. **REQUIRED REFERENCE:** Read `references/component-palette.md` when choosing section types.

## Project specificity gate

Every Solution page must contain at least **2–3 primary sections whose content or visual structure would not make sense for a different technology**.

Run the **Name Replacement Test** before finishing:

> Replace the technology name with another technology such as Laravel, WordPress, Django, Next.js, or ERPNext.

If most primary sections still work with only noun substitution, the page is too generic. Redesign it.

**REQUIRED REFERENCE:** Read `references/solution-archetypes.md` to identify the project's operating model without turning archetypes into templates.

## Solution vs Guide

A Solution page should answer:

- What does this technology need locally?
- How does its environment fit together?
- Which FlyEnv capabilities matter specifically to it?
- What does the working result look like?
- Why is FlyEnv useful for this workflow?

A Guide should own detailed step-by-step setup, commands, configuration, and troubleshooting.

Do not create a second Guide disguised as a Solution. When both target the same search intent, reposition the Solution rather than duplicating the Guide.

## Proof over filler

Prefer, in order:

1. Real FlyEnv capability
2. Actual project workflow
3. Real FlyEnv screenshot or UI state
4. Architecture/service relationship
5. Concrete project example
6. Generic explanation

Minimize generic framework introductions, generic capability lists, broad use cases, and SEO filler.

## Completion gate

Before declaring the page ready, run every check in `references/quality-gates.md`.

When working under time pressure or asked to “make the other pages match Laravel,” treat that as a template-risk signal, not permission to copy the information architecture.
