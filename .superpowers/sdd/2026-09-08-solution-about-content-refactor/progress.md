# SDD ledger — plan: docs/superpowers/plans/2026-09-08-solution-about-content-refactor.md

| Check | Result |
| --- | --- |
| Task 1 -> Task 2 | The regression test consumes `solutionAboutContentByLocale`; explicit locale data must preserve that export. No conflict. |
| Task 2 -> Task 3 | Task 2 supplies explicit records; Task 3 exercises those records through the existing component and build. No conflict. |
| Task 1 | Its initial source-symbol check is a structural proxy for the task's content requirement. Ruling: retain it alongside runtime record assertions because this task explicitly prohibits generated content; cost if wrong is a harmless future test update after an equivalent non-templated architecture. |
| Task 2 | Explicit per-locale modules are permitted because they preserve one typed data contract and avoid the prohibited prose generator. No conflict. |
| Task 3 | Representative assertions cover PHP, Python, Node, CMS, and complex commerce as required. No conflict. |

Ruling: Superseded the locale split before any content files were created. Split explicit records into technology-family source modules instead; each module owns all three locales for its slugs. This preserves a single technical profile across translations while still avoiding shared-file collisions; cost if wrong is one additional import layer with no rendered behavior change.

Task 1: complete (parallel technology-group contract, review clean)
Task 2A: fix round 1/5 (Indonesian WordPress spelling addressed, 0 open)
Task 2A: complete (39 localized entries, review clean)
Task 2B: complete (33 localized entries, review clean)
Task 2C: fix round 1/5 (PocketBase migration directory addressed, 0 open)
Task 2C: complete (45 localized entries, review clean)
Task integration: fix round 1/5 (Next.js preservation, group-generator guard, and report-scope evidence addressed, 0 open)
Task integration: complete (40-slug locale assembly and regression contract, review clean)
Task 3: fix round 1/5 (Ghost newsletter Mailgun qualification and Medusa bundled Admin/optional Redis wording addressed, 0 open)
Task 3: complete (final review clean; focused tests, formatting, and VitePress build passed)
