# FlyEnv Solution Page Design Skill

This package is designed to stop FlyEnv Solution pages from degenerating into a single reusable content template.

The key rule is:

> Reuse the FlyEnv design system, not the page narrative.

## Files

- `SKILL.md` — main skill instructions
- `references/page-strategy.md` — pre-edit strategy method
- `references/solution-archetypes.md` — operating-model archetypes, not templates
- `references/component-palette.md` — when to use tables, diagrams, screenshots, workflows, FAQ, etc.
- `references/quality-gates.md` — completion checklist and Name Replacement Test
- `tests/pressure-scenarios.md` — scenarios for testing whether the AI still falls back to templating
- `AGENTS.md.snippet` — recommended project-level rule that forces this skill for `/solutions/` work

## Installation

Copy the entire `flyenv-designing-solution-pages` folder into the skills directory used by the local AI runtime. Claude Code commonly uses `~/.claude/skills/`; Codex, Copilot CLI and Gemini CLI can use `~/.agents/skills/` as a cross-runtime location.

For stronger enforcement, merge `AGENTS.md.snippet` into the FlyEnv repository's existing `AGENTS.md` or equivalent project instruction file.

## Recommended usage

Ask the agent to modify one Solution page at a time initially. Review the Page Strategy it produces before allowing large batch edits. Once several different archetypes have been validated, batch work can be grouped by operating model without forcing identical information architecture.
