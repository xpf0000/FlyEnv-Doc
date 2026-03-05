# FlyEnv Documentation - AI Agent Guide

## Project Overview

This is the official documentation website for **FlyEnv** - an all-in-one full-stack environment management tool for macOS, Windows, and Linux. The site is built with [VitePress](https://vitepress.dev/) and styled using [Tailwind CSS 3](https://v3.tailwindcss.com/).

**Live Site**: https://www.flyenv.com  
**GitHub**: https://github.com/xpf0000/FlyEnv

### Technology Stack

| Technology | Purpose |
|------------|---------|
| [VitePress](https://vitepress.dev/) | Static site generator |
| [Vue 3](https://vuejs.org/) | Frontend framework (Composition API) |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe JavaScript |
| [Tailwind CSS 3](https://v3.tailwindcss.com/) | Utility-first CSS framework |
| [Element Plus](https://element-plus.org/) | UI component library |
| [Axios](https://axios-http.com/) | HTTP client for API calls |
| [Yarn](https://yarnpkg.com/) | Package manager |

### Multi-Language Support

The documentation supports two languages:
- **English** (`/docs/`) - Default locale at root path `/`
- **Chinese** (`/docs/zh/`) - Locale at `/zh/`

> Note: The `docsZH` directory referenced in some legacy scripts does not currently exist. All Chinese content is located in `docs/zh/`.

---

## Project Structure

```
FlyEnv-Doc/
├── docs/                          # Main documentation content
│   ├── .vitepress/                # VitePress configuration
│   │   ├── config.mts             # Site config (nav, sidebar, locales)
│   │   ├── env.ts                 # Environment variables (host, GA ID, etc.)
│   │   ├── theme/                 # Custom theme
│   │   │   ├── index.js           # Theme entry with Kofi widget integration
│   │   │   └── custom.css         # Custom styles + Tailwind directives
│   │   ├── cache/                 # VitePress cache (gitignored)
│   │   └── dist/                  # Build output (gitignored)
│   ├── components/                # Custom Vue components
│   │   ├── AppCanDo/              # Feature showcase components
│   │   ├── AppCoreModule/         # Core module display
│   │   ├── AppDownButton/         # OS-aware download button
│   │   ├── AppFeedback/           # Feedback modal with API integration
│   │   ├── AppGithub/             # GitHub stats display
│   │   ├── AppPrice/              # Pricing section
│   │   ├── AppSponsor/            # Sponsor information
│   │   ├── AppToolModule/         # Tools module display
│   │   ├── VueSvgIcon/            # SVG icon component
│   │   ├── AsyncComponent.ts      # Async component loader utility
│   │   └── SVG/                   # SVG assets for tools/modules
│   ├── guide/                     # English documentation pages
│   ├── zh/                        # Chinese documentation
│   │   └── guide/                 # Chinese guide pages
│   ├── public/                    # Static assets
│   ├── index.md                   # Homepage (English)
│   ├── download.md                # Download page
│   ├── sponsor.md                 # Sponsor page
│   └── community.md               # Community page
├── package.json                   # Dependencies and scripts
├── tailwind.config.ts             # Tailwind CSS configuration
├── postcss.config.mjs             # PostCSS configuration
├── tsconfig.json                  # TypeScript configuration
├── .eslintrc.mjs                  # ESLint configuration
├── .prettierrc                    # Prettier configuration
└── env.d.ts                       # TypeScript declaration file
```

---

## Build and Development Commands

All commands use Yarn as the package manager:

```bash
# Install dependencies
yarn install

# Development server (English site)
yarn docs:dev
# Runs on http://localhost:4000 (configured in config.mts)

# Build for production (English site)
yarn docs:build
# Output: docs/.vitepress/dist/

# Preview production build (English site)
yarn docs:preview

# Development server (Chinese site - legacy, docsZH not currently used)
yarn docs:zh:dev

# Build Chinese site (legacy)
yarn docs:zh:build
```

---

## Code Style Guidelines

### ESLint Configuration

The project uses a Vue 3 + TypeScript ESLint setup (see `.eslintrc.mjs`):

- Parser: `vue-eslint-parser` with `@typescript-eslint/parser`
- Extends: `vue3-recommended`, `@typescript-eslint/recommended`, `prettier/recommended`
- Key rules:
  - Single quotes enforced
  - No trailing commas
  - Allows `any` type (relaxed TypeScript rules)
  - Allows `@ts-ignore` comments
  - Unused vars error (except `h` for JSX)

### Prettier Configuration

See `.prettierrc`:

```json
{
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "semi": false,           // No semicolons
  "singleQuote": true,     // Single quotes
  "trailingComma": "none", // No trailing commas
  "vueIndentScriptAndStyle": true,
  "endOfLine": "lf"
}
```

### Vue Component Conventions

1. **File naming**: PascalCase for component directories (e.g., `AppDownButton/`)
2. **Script setup**: Use `<script setup lang="ts">` for Vue 3 Composition API
3. **Component structure**:
   ```vue
   <template>
     <!-- Template content -->
   </template>
   
   <script setup lang="ts">
   import { ref, computed } from 'vue'
   // Component logic
   </script>
   ```
4. **Styling**: Use Tailwind CSS classes primarily; custom CSS in `custom.css` for special cases

---

## Adding New Documentation

### Adding a New Guide Page

1. Create the markdown file in `docs/guide/` (English) or `docs/zh/guide/` (Chinese)
2. Add the page to the sidebar configuration in `docs/.vitepress/config.mts`:
   ```typescript
   sidebar: {
     '/guide/': [
       {
         text: 'Section Name',
         items: [
           { text: 'Page Title', link: '/guide/filename' },
         ],
         collapsed: false
       }
     ]
   }
   ```

### Adding a New Language

1. Create a new directory under `docs/` (e.g., `docs/fr/` for French)
2. Add locale configuration in `docs/.vitepress/config.mts` under `locales`
3. Translate all documentation pages
4. Add corresponding navigation items

---

## Custom Components

### Using Components in Markdown

Components can be imported and used directly in markdown files:

```markdown
---
layout: home
---

<script setup>
import AppDownBtn from './components/AppDownButton/index.vue';
</script>

<AppDownBtn i18n="en" />
```

### Key Components

| Component | Purpose | Props |
|-----------|---------|-------|
| `AppDownButton` | OS-aware download button | `i18n: 'en' \| 'zh'`, `isLink?: boolean` |
| `AppFeedback` | User feedback modal | None (auto-initialized) |
| `AppSvgIcon` | SVG icon registry | None |
| `VueSvgIcon` | Inline SVG display | Various |

### Async Component Pattern

For dynamically loaded modals:

```typescript
import { AsyncComponentShow, AsyncComponentSetup } from '../AsyncComponent'

// In setup
const { show, onClosed, onSubmit, closedFn } = AsyncComponentSetup()

// To show component
AsyncComponentShow(MyModalComponent, props)
```

---

## Environment Configuration

Environment variables are defined in `docs/.vitepress/env.ts`:

```typescript
export const AppHost = 'https://www.flyenv.com'      // Site hostname
export const GoogleID = 'G-3J87DE8FD2'               // Google Analytics ID
export const PROD = true                              // Production flag
export const FootMessage = undefined                  // Footer message
```

When `PROD = true`, the following are injected:
- Google Analytics tracking script
- Ko-fi donation widget
- Custom analytics script (`/js/index.js`)

---

## Third-Party Integrations

### Analytics
- **Google Analytics 4**: Tracking ID in `env.ts`, injected in production

### External APIs
- **Feedback API**: `https://api.macphpstudy.com/api/app/feedback_site`
  - Used by `AppFeedback` component
  - POST endpoint for user messages

### Widgets
- **Ko-fi**: Floating donation button (loaded from `storage.ko-fi.com`)

---

## Security Considerations

1. **API Calls**: Feedback form uses external API with rate limiting (30-second cooldown)
2. **LocalStorage**: Stores user email/country for feedback form convenience
3. **CORS**: API endpoint must allow cross-origin requests from www.flyenv.com
4. **Content**: All user-generated content in feedback is validated (length 5-1024 chars)

---

## Deployment

The site is built as a static site and deployed to a web server:

1. Build the site: `yarn docs:build`
2. Deploy the contents of `docs/.vitepress/dist/` to the web server
3. Ensure the server is configured for SPA fallback (VitePress handles routing)

---

## Common Tasks

### Updating Download Links

Edit `docs/components/AppDownButton/index.vue`:

```typescript
// Update these URLs for new releases
case 'Windows':
  downloadUrl = 'https://github.com/xpf0000/FlyEnv/releases/download/vX.X.X/FlyEnv.Setup.X.X.X.exe'
  break
case 'MacOS_X86':
  downloadUrl = 'https://github.com/xpf0000/FlyEnv/releases/download/vX.X.X/FlyEnv-X.X.X.dmg'
  break
case 'MacOS_ARM64':
  downloadUrl = 'https://github.com/xpf0000/FlyEnv/releases/download/vX.X.X/FlyEnv-X.X.X-arm64.dmg'
  break
```

### Adding a New Feature to Homepage

1. Create component in `docs/components/`
2. Import in `docs/index.md` (or `docs/zh/index.md`)
3. Use in the markdown content

### Modifying Site Navigation

Edit `docs/.vitepress/config.mts` - update the `nav` array in the appropriate locale:

```typescript
nav: [
  { text: 'New Page', link: '/new-page' },
  // ... existing items
]
```

---

## Notes for AI Agents

1. **No Tests**: This project does not have automated tests. Manual verification is required.
2. **No docsZH Directory**: Despite references in `package.json` and `.gitignore`, the `docsZH` directory does not exist. Chinese content is in `docs/zh/`.
3. **TypeScript Relaxed**: The project uses relaxed TypeScript rules (`noImplicitAny: false`, etc.).
4. **Tailwind + Element Plus**: Both styling systems are used. Prefer Tailwind for layout, Element Plus for form components.
5. **Client-Side Features**: Some components use `ClientOnly` wrapper for browser-only APIs (localStorage, navigator, etc.).
