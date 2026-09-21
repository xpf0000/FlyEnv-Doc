#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"

test -f "$ROOT/SKILL.md"
test -f "$ROOT/references/page-strategy.md"
test -f "$ROOT/references/solution-archetypes.md"
test -f "$ROOT/references/component-palette.md"
test -f "$ROOT/references/quality-gates.md"
test -f "$ROOT/tests/pressure-scenarios.md"
test -f "$ROOT/AGENTS.md.snippet"

grep -q '^name: flyenv-designing-solution-pages$' "$ROOT/SKILL.md"
grep -q '^description: Use when' "$ROOT/SKILL.md"
grep -q 'Reuse the FlyEnv design system, not the page narrative' "$ROOT/SKILL.md"
grep -q 'Name Replacement Test' "$ROOT/SKILL.md"
grep -q '2–3' "$ROOT/SKILL.md"
grep -q 'Solution vs Guide' "$ROOT/SKILL.md"
grep -q 'MUST use the `flyenv-designing-solution-pages` skill' "$ROOT/AGENTS.md.snippet"

echo "Skill package structure and required guardrails: PASS"
