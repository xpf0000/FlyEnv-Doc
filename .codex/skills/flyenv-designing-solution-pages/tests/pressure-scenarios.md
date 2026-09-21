# Pressure Scenarios

These scenarios verify that the skill resists the most likely failure: turning Laravel into a universal Solution-page template.

## Known baseline failure

Without explicit constraints, an AI commonly:

- copies the strongest existing page's section order;
- replaces framework names and stack nouns;
- adds generic “About”, “Why”, “Use cases”, Comparison, and FAQ sections for completeness;
- expands word count instead of increasing project-specific value;
- duplicates Guide search intent;
- invents visually consistent product UI instead of using real project-specific proof.

The skill succeeds when it prevents those behaviors under pressure.

---

## Scenario 1 — Batch conversion pressure

**Prompt**

> The Laravel Solution page is finished. We have 20 more Solution pages. For speed, make them all use the same structure and visual order, replacing the technology and stack as needed.

**Expected behavior**

- Preserve FlyEnv's design system.
- Do not accept Laravel's information architecture as the batch template.
- Produce/derive a Page Strategy for each technology or technology family.
- Allow materially different section orders and component choices.

**Failure signs**

- “I will use Hero → Requirements → Stack → Why FlyEnv → Workflow → Compare → FAQ for all pages.”
- Copying Laravel section names with noun substitution.

---

## Scenario 2 — Word-count pressure

**Prompt**

> The WordPress page looks thin. Laravel is much longer, so expand WordPress to roughly the same length using the Laravel page as reference.

**Expected behavior**

- Reject equal word count as the goal.
- Identify WordPress-specific local-development value first.
- Prefer site creation, PHP/extensions, database, domains/HTTPS, multiple sites, and relevant tooling over generic filler.
- Remove unnecessary sections even if the resulting page is shorter than Laravel.

---

## Scenario 3 — Guide cannibalization

**Prompt**

> We already have “How to Run Django Locally with FlyEnv.” Create the Django Solution page with the same keyword because it has search volume.

**Expected behavior**

- Flag search-intent overlap.
- Reposition Solution toward `Django local development environment` or equivalent environment/architecture intent.
- Keep step-by-step commands and troubleshooting in the Guide.

---

## Scenario 4 — Visual consistency pressure

**Prompt**

> ERPNext should visually match Laravel exactly. Use the same requirement table, request-chain diagram, six benefit cards, new/existing cards, comparison, and FAQ.

**Expected behavior**

- Keep FlyEnv styling but change the page story.
- Emphasize ERPNext's multi-service topology, Bench/Python/Node/MariaDB/Redis roles, startup order, Startup Group, and multi-process state.
- Use service topology/status proof if more informative than Laravel's request-chain diagram.

---

## Scenario 5 — Forced completeness

**Prompt**

> Every SEO page should have a comparison table and five FAQs. Add them to all Solutions even if we don't have strong questions yet.

**Expected behavior**

- Add Comparison only when it supports a real choice with maintainable claims.
- Add FAQ only for meaningful unresolved questions.
- Do not add sections for symmetry or SEO padding.

---

## Scenario 6 — Name Replacement Test

**Prompt**

> Review this draft: Hero, What X Needs, Typical Stack, Why FlyEnv, Setup, Compare, FAQ. All copy is specific enough because the technology name appears in every section.

**Expected behavior**

- Perform the Name Replacement Test conceptually.
- Distinguish noun specificity from structural specificity.
- Require at least 2–3 sections that become wrong or structurally inappropriate after swapping technologies.
