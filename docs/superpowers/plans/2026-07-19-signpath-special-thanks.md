# SignPath Special Thanks Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add linked SignPath acknowledgements to the English and Chinese FlyEnv license pages.

**Architecture:** Extend the existing “Special Thanks” template in the shared `AppSponsorPageV2` component with a second card. Keep locale-specific sentence fragments in the existing `messages` object and add only one spacing wrapper to the scoped styles.

**Tech Stack:** Vue 3 Single-File Components, TypeScript, VitePress, scoped CSS, Yarn

---

### Task 1: Add and verify the bilingual SignPath acknowledgement

**Files:**
- Modify: `docs/components/AppSponsorPage/v2.vue:102-130`
- Modify: `docs/components/AppSponsorPage/v2.vue:345-350`
- Modify: `docs/components/AppSponsorPage/v2.vue:400-405`
- Modify: `docs/components/AppSponsorPage/v2.vue:866-875`
- Test: source assertions against `docs/components/AppSponsorPage/v2.vue`

- [ ] **Step 1: Run the source assertion and verify it fails**

Run:

```bash
node -e "const s=require('fs').readFileSync('docs/components/AppSponsorPage/v2.vue','utf8'); const required=['class=\"thanks-list\"','href=\"https://signpath.io\"','href=\"https://signpath.org\"','Free code signing for FlyEnv on Windows is provided by','FlyEnv 的 Windows 免费代码签名由']; const missing=required.filter((v)=>!s.includes(v)); if(missing.length){console.error('Missing SignPath content:', missing); process.exit(1)}"
```

Expected: exit code 1 with `Missing SignPath content`, proving the component does not yet contain the requested acknowledgement.

- [ ] **Step 2: Add the minimal template markup**

Replace the card area inside the existing “Special Thanks” section with this two-card list:

```vue
<div class="thanks-list">
  <div class="thanks-card">
    <div class="thanks-avatar">F4</div>
    <div class="thanks-body">
      <p class="thanks-name">F4nniu</p>
      <p class="thanks-desc">
        {{ t.f4Prefix }}
        <a
          href="https://www.fastadmin.net/"
          target="_blank"
          rel="noopener noreferrer"
          class="no-underline"
          >FastAdmin</a
        >{{ t.f4Suffix }} <strong>flyenv.com</strong> {{ t.domainLabel
        }}{{ t.sentenceEnd }}
      </p>
    </div>
  </div>
  <div class="thanks-card">
    <div class="thanks-avatar">SP</div>
    <div class="thanks-body">
      <p class="thanks-name">
        <a
          href="https://signpath.io"
          target="_blank"
          rel="noopener noreferrer"
          class="no-underline"
          >SignPath</a
        >
      </p>
      <p class="thanks-desc">
        {{ t.signPathPrefix }}
        <a
          href="https://signpath.io"
          target="_blank"
          rel="noopener noreferrer"
          class="no-underline"
          >SignPath.io</a
        >{{ t.signPathMiddle }}
        <a
          href="https://signpath.org"
          target="_blank"
          rel="noopener noreferrer"
          class="no-underline"
          >SignPath Foundation</a
        >{{ t.sentenceEnd }}
      </p>
    </div>
  </div>
</div>
```

- [ ] **Step 3: Add the locale-specific sentence fragments**

Add these fields to `messages.en` after `specialThanksDesc`:

```ts
signPathPrefix: 'Free code signing for FlyEnv on Windows is provided by',
signPathMiddle: ', with the certificate provided by',
```

Add these fields to `messages.zh` after `specialThanksDesc`:

```ts
signPathPrefix: 'FlyEnv 的 Windows 免费代码签名由',
signPathMiddle: ' 提供，证书由',
```

- [ ] **Step 4: Add spacing for the two-card list**

Add immediately before `.thanks-card`:

```css
.thanks-list {
  display: grid;
  gap: 1rem;
}
```

- [ ] **Step 5: Run the source assertion and verify it passes**

Run the Step 1 command again.

Expected: exit code 0 with no missing content.

- [ ] **Step 6: Build the documentation site**

Run:

```bash
yarn docs:build
```

Expected: VitePress reports `build complete` and exits with code 0.

- [ ] **Step 7: Verify both generated license pages**

Run:

```bash
rg -n "SignPath|Free code signing for FlyEnv on Windows|FlyEnv 的 Windows 免费代码签名" docs/.vitepress/dist/license.html docs/.vitepress/dist/zh/license.html
```

Expected: both generated files contain the correct locale's SignPath acknowledgement and the SignPath links.

- [ ] **Step 8: Review the final diff and commit only the intended component**

Run:

```bash
git diff --check
git diff -- docs/components/AppSponsorPage/v2.vue
git status --short
git add docs/components/AppSponsorPage/v2.vue
git commit -m "docs: thank SignPath for code signing"
```

Expected: the component diff contains only the new SignPath card, two locale message pairs, and list spacing. `docs/components/AppDown/index.vue` remains unstaged and uncommitted.
