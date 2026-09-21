# Solution Archetypes

Archetypes are reasoning aids, **not templates**. A project may combine more than one.

| Archetype | Typical examples | What deserves emphasis | Visual forms that often fit |
|---|---|---|---|
| Runtime-centric framework | Laravel, Symfony, Django, Rails | runtime version, dependencies, web/app server, DB, cache/queue, per-project environment | stack diagram, runtime matrix, real project UI, workflow |
| Site/CMS-centric | WordPress, Drupal, Magento | site lifecycle, document root, PHP/extensions, DB, domains/HTTPS, multiple sites | site workflow, actual site list, extension/database relationship, result screenshot |
| Multi-service application | ERPNext, complex self-hosted apps | many cooperating processes, service dependencies, startup order, logs, persistence | service topology, Startup Group, process/status UI, dependency graph |
| JS/full-stack runtime | Next.js, Nuxt, NestJS | Node version, package manager, dev/build lifecycle, API/frontend split, optional DB/cache | dev-flow diagram, runtime/package manager UI, domain flow |
| JVM/build-centric | Spring Boot, Maven/Gradle apps, Tomcat apps | JDK, build tool, app server/port, profiles, DB/supporting services | build-to-run workflow, JDK/build matrix, service relationship |
| Data/service product | PostgreSQL-adjacent apps, search/vector/graph tools | service lifecycle, ports, clients/admin tools, persistence, integration | service/client topology, admin UI, connection flow |
| AI/local-model workflow | Ollama-based apps, local agents | model runtime, model files, API endpoint, client/agent integration, privacy/local execution | inference flow, model/runtime UI, integration diagram |

## How to use an archetype

1. Identify the technology's real operating model.
2. Pick only the concepts that explain its local workflow.
3. Add project-specific constraints and FlyEnv capabilities.
4. Choose visual forms that clarify those relationships.
5. Ignore the archetype's suggested forms when another form communicates the project better.

## Examples of intentional structural differences

### Laravel
Likely strong sections:
- local requirement matrix
- PHP/Nginx/DB/Redis stack
- quick project creation vs existing project
- project-level PHP/Composer
- queue/scheduler support

### WordPress
Likely strong sections:
- create/manage a local WordPress site
- PHP version + extensions + database
- local domain/HTTPS and multiple sites
- database administration / wp-cli if applicable
- real WordPress site state in FlyEnv

A Laravel-style queue/scheduler section should not appear unless it serves a real WordPress workflow.

### ERPNext
Likely strong sections:
- multi-service architecture
- Bench/Python/Node/MariaDB/Redis roles
- Startup Group and startup order
- one-click full environment state
- logs/status of multiple processes

A simple three-column “requirements” table may be secondary because the service topology is the story.

### Next.js
Likely strong sections:
- Node/package manager selection
- dev server and build workflow
- local domain/HTTPS
- frontend/API/full-stack modes
- optional DB/Redis integration

A PHP-style FPM/service matrix would be artificial.
