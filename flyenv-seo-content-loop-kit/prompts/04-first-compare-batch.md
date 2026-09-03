# Prompt 04 — First Compare Implementation Batch

Read:
- `AGENTS.md`
- `.skills/seo-content/SKILL.md`
- `seo/inventory/competitors.yaml`
- `seo/templates/compare-spec.md`
- `design-reference/compare-guide-layout.md`

Select the highest-priority approved competitor page.
For the first Compare iteration, create **only 1 comparison page** so structure and tone can be reviewed before scaling.

## Required research
Use current official competitor sources whenever web access is available.
Save research in `seo/research/competitors/<competitor>.md`.
Record:
- source URL/title
- research date
- relevant verified facts
- uncertain/stale facts
- pricing/license facts only if relevant

Then create the page spec and implementation.
The page must:
- be balanced
- explicitly explain where the competitor fits well
- explain where FlyEnv fits well
- avoid attack language
- avoid unsupported speed/security/resource claims
- link to relevant FlyEnv Features
- use the Guide reading layout
- use `/compare/<competitor>` as canonical route

Run build and SEO validation before marking it done.
