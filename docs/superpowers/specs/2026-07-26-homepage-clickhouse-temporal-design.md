# Homepage ClickHouse and Temporal Modules Design

## Goal

Show FlyEnv's new ClickHouse and Temporal modules in the Core Modules section on both the English and Chinese homepages.

## Scope

- Extend the existing Database module cards with ClickHouse.
- Extend the existing Service Governance module cards with Temporal.
- Reuse the supplied `ClickHouse.svg` and `Temporal.svg` assets.
- Apply the same static card styling used by the neighbouring, non-video modules.

## Implementation Boundaries

`AppCoreModule` already renders the Database and Service Governance `AppModules` groups, so no homepage layout or routing change is required. The additions belong only in these locale-specific files:

- `docs/components/AppModules/index.vue`
- `docs/components/AppModules/zh.vue`

Each locale will render its own category label: `Database` / `数据库` for ClickHouse and `Service Governance` / `服务治理` for Temporal. Both cards will load their local SVG with a relative image source and will not link to external pages because no module demo or documentation URL is part of this request.

## Validation

Run the VitePress production build. It must complete successfully and include references to both SVG assets in the generated site.
