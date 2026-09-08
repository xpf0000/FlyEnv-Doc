# Group C Solution About Content Report

Coverage: 15 assigned slugs x 3 locales = 45 explicit records in `docs/data/solution-about-group-c.ts`. Every record sets `replaceOverview: true`, contains two paragraphs, 4-7 capabilities, 3-5 use cases, and 3-6 local-environment items.

## Cross-page review

- **Spring Boot** centers on JDK, Maven/Gradle, profile configuration, starters, Actuator, and conditional database or broker integration. It does not describe a generic Java runtime as an ERP or analytics stack.
- **ERPNext** identifies the Frappe Bench process model: MariaDB, Redis, workers, scheduler, Socket.IO, DocTypes, and Node.js asset building. This distinguishes it from a conventional Python web service.
- **Gitea** treats the product as a Git forge with `app.ini`, Git over SSH/HTTP, repository storage, SQLite versus external databases, and an optional Actions runner.
- **Keycloak** focuses on realms, clients, issuer URLs, redirect URIs, OAuth/OIDC, SAML, identity brokering, and optional SMTP or external identity providers.
- **Apache Superset** separates metadata storage from queried analytical sources and identifies SQL Lab, Redis/Celery, async queries, alerts, reports, and `superset` CLI setup.

## Uncertain claims and qualifications

- Quarkus Dev Services availability depends on selected extensions and container tooling; the content explicitly describes it as handling only some setups.
- Keycloak development storage options vary by release and launch mode; PostgreSQL is presented as a common persistent choice, not the sole option.
- Nextcloud Redis, office integrations, and search backends are all explicitly qualified as optional.
- Gitea database selection and Actions runners are described as deployment or workflow choices rather than mandatory components.
- Superset Redis/Celery applies when cache, async queries, alerts, or reports are enabled, not to every minimal installation.

## Round 1 correction

- Corrected all three PocketBase records: `pb_data` now refers only to embedded SQLite data and file storage, while collection migration source files are explicitly placed in `pb_migrations` within the migration-and-hook workflow.
- Verification: the focused transpile-only directory contract passed for `en`, `zh`, and `id`; `yarn prettier --check docs/data/solution-about-group-c.ts` also passed.
