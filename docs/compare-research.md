# Compare Pages Research (temporary working document)

Research date: 2026-09-05. Sources: official product sites/docs only.

## Laravel Herd / Herd Pro

Sources: https://herd.laravel.com/, https://herd.laravel.com/windows, https://herd.laravel.com/docs, https://herd.laravel.com/docs/1/herd-pro/services

- Platforms: macOS 12+ and Windows. No Linux.
- Free / paid tiers: Free core (PHP, nginx, dnsmasq, Composer, Laravel installer, Expose, site management). Herd Pro adds managed services, Node/nvm management, debugging (dump window), and more. Exact pricing page was bot-blocked during research — do not cite a price.
- Core product model: Native pre-compiled binaries; explicitly no containers, VMs, or virtualization.
- Runtime management: PHP 7.4–8.5 (macOS; Windows page shows up to 8.4), auto-updates with notifications.
- Per-project/site configuration: Per-site PHP version pinning (free). `herd.yml` in repo stores site config; with Pro it also provisions services.
- Web servers: nginx only (plus dnsmasq). No Apache/Caddy.
- Databases: Herd Pro services: MySQL, MariaDB, PostgreSQL, MongoDB, plus Redis, Laravel Reverb, Typesense, Meilisearch, MinIO, RustFS. All Pro-only.
- Redis/cache: Redis as Herd Pro service.
- Object storage: MinIO and RustFS as Herd Pro services.
- Mail testing: Herd Pro includes a built-in SMTP mail-catching server (default port 2525) with its own email client UI, per-site inboxes and header/source inspection. See https://herd.laravel.com/docs/macos/herd-pro-services/mail
- Local domains: Automatic `*.test` domains for all sites.
- HTTPS: Yes, via its own local CA; Valet migration supported.
- Project/service orchestration: herd.yml; per-site services via Pro.
- Team/reproducibility features: herd.yml committed to repo; Laravel Forge integration for deployment.
- AI / MCP: Built-in MCP server (`herd-mcp.phar`, installed via Laravel Boost or manually) with tools for sites, PHP versions, services, SSL and Forge deployment info. CLI is scriptable and documented as AI-agent friendly.
- Containerization: Deliberately none (native-only philosophy).
- Production parity: Via Forge deployment, not containers.
- Integrated GUI tools: Site management, service management (Pro), dump/debug window (Pro). No bundled database GUI, but `herd db` opens the current site's database in an installed client like TablePlus.
- Important limitations: PHP/Laravel-centric; no Linux; nginx only; DBs/services/Node management behind Pro.
- Unique strengths: Fastest native PHP/Laravel setup, official Laravel ecosystem alignment (Forge, Reverb, herd.yml), Valet migration.

## ServBay / ServBay Pro

Sources: https://www.servbay.com/, https://www.servbay.com/pricing, https://www.servbay.com/features

- Platforms: macOS 12+ and Windows 10/11 (and Windows Server). No Linux.
- Free / paid tiers: Free tier (max 5 websites / 5 custom domains; self-signed SSL limited to 10 certs). Pro $59 (Edu $29). Team $399 / 10 users. Pro-only: mail server, tunnels (Cloudflared/FRP/Ngrok/Pinggy), MinIO, Typesense/Meilisearch, PKI + ACME public certs, multiple DB instances, full service config editing, backups, hosts-file GUI, custom ports, CORS, domain aliases, website grouping.
- Core product model: All-in-one native local dev workspace ("AI-native" positioning); native packages, no containers (can reverse-proxy to Docker apps).
- Runtime management: PHP 5.3–8.6, Node.js 12–25, Python 2.7 & 3.5–3.14, Go 1.11–1.26, Java 7–25, .NET 2.0–10.0, Mono, Ruby 2.4–4.0, Rust, Bun, Deno. Multi-version coexistence, instant switching.
- Per-project/site configuration: Project-level environment settings (per-project language/DB versions) in all tiers.
- Web servers: Apache, Nginx, Caddy.
- Databases: MySQL, MariaDB, PostgreSQL, MongoDB; multiple instances are Pro.
- Redis/cache: Redis + Memcached.
- Object storage: MinIO (Pro).
- Mail testing: Full built-in mail server (SMTP/POP3/relay, WebMail, TLS) — Pro.
- Local domains: Built-in local DNS with arbitrary TLDs.
- HTTPS: Private CA (10 certs free, unlimited Pro); ACME public certs via Let's Encrypt/ZeroSSL/Google Trust (Pro).
- Project/service orchestration: Hosts/websites with per-project config; website grouping (Pro).
- Team/reproducibility features: Team Management tier; Share-to-Team / Unified Configuration marked "Coming Soon" — do not present as shipping.
- AI / MCP: MCP Server, AI Gateway, Ollama local models, AI client integration — all free tier. Multi-threaded model download is Pro.
- Containerization: None (native; reverse proxy to containers possible).
- Production parity: Not the product goal.
- Integrated GUI tools: phpMyAdmin/Adminer, Composer/npm/pnpm/yarn/Maven, Git/SVN integration.
- Important limitations: No Linux; 5-site free-tier cap; mail/tunnels/MinIO Pro-only; some team features not shipped yet.
- Unique strengths: Widest language/version coverage (PHP from 5.3), built-in PKI + real mail server, AI Gateway/MCP/Ollama in free tier.

## Docker / Docker Compose

Sources: https://docs.docker.com/compose/, https://docs.docker.com/guides/docker-compose/

- Platforms: Wherever Docker runs (Linux, macOS, Windows); macOS/Windows typically via Docker Desktop (Linux VM underneath). Compose itself is open source. Do not cite Docker Desktop licensing terms without checking docker.com/pricing.
- Free / paid tiers: Docker Engine + Compose are open source; Docker Desktop has paid plans for larger companies (unverified here).
- Core product model: Define multi-container applications (services, networks, volumes) in a single `compose.yaml`; `docker compose up` creates and starts the whole stack with one command.
- Runtime management: Any language/version via container images and tags; versions pinned in Dockerfiles/Compose files, no GUI version switcher.
- Per-project/site configuration: The Compose file is the per-project config, committed to the repo.
- Web servers: Anything available as a container image (nginx, Apache, Caddy...) — wired by the user.
- Databases: Any image (MySQL, PostgreSQL, MariaDB, MongoDB...) — user-configured.
- Redis/cache: Any image.
- Object storage: e.g. MinIO image — user-configured.
- Mail testing: e.g. Mailpit/Mailhog image — user-configured.
- Local domains: No built-in local DNS; needs extra containers (Traefik, nginx-proxy) or manual hosts setup.
- HTTPS: No built-in cert issuance; mkcert/reverse-proxy containers or manual setup.
- Project/service orchestration: Compose services, `depends_on`, healthchecks, profiles, build support.
- Team/reproducibility features: Strongest story — one YAML in the repo reproduces the environment anywhere; profiles let one file serve dev/test/staging.
- AI / MCP: Not part of Compose docs.
- Containerization: This is the product.
- Production parity: Core strength — "Compose works in all environments: production, staging, development, testing, as well as CI workflows."
- Integrated GUI tools: Docker Desktop (general container GUI, not per-site dev workflow).
- Important limitations: Steeper learning curve (YAML, networking, volumes); VM resource overhead on macOS/Windows; no turnkey version switching, local domains, or SSL out of the box.
- Unique strengths: Production parity, ecosystem ubiquity, CI/CD integration, reproducibility across machines and OSes.

## Implications for the three pages

- Herd page: acknowledge site-specific PHP pinning (free), herd.yml, Forge, and that DB/cache/search/object-storage services exist but are Herd Pro. Node/nvm management is Pro. Herd is nginx-only and macOS/Windows-only. Herd ships a built-in MCP server, a Herd Pro mail catcher with its own client, and a `herd db` bridge to DB clients like TablePlus — do not list MCP, mail testing or database access as FlyEnv-only. FlyEnv angle: framework-agnostic multi-stack workspace, Linux support, services and mail testing without a paid tier, bundled DB GUI tools, Startup Groups — without claiming Herd is "PHP only".
- ServBay page: treat as a true peer. Verified against FlyEnv source (2026-09): FlyEnv also has a full Ollama module (install/serve/pull/run/chat), Mailpit with SMTP 1025 + web UI 8025 + POP3 1110, a managed Cloudflare Tunnel module (named tunnels, DNS/ingress via API), and CLIProxyAPI — a local AI gateway with API keys, routing strategy, quota failover and usage stats. So local models, mail testing and tunneling are SHARED capabilities, not ServBay exclusives; do not list them as ServBay-only. Genuine ServBay-only strengths: first-party AI Gateway polish (virtual keys, cost tracking), PKI/ACME public certs (Pro; FlyEnv source has zero ACME — local CA + mkcert only), four tunnel providers vs FlyEnv's Cloudflare-only, and multiple instances of any database (Pro; FlyEnv has MySQL group instances + multiple versions side by side — present as "Partial", not absent). Do NOT frame "legacy runtime coverage" as a ServBay edge: FlyEnv covers more exotic runtimes (Bun, Deno, Erlang, Zig) and its PHP floor is 5.6 (macOS brew) / 5.5 (Windows) vs ServBay's 5.3 — a minor difference, not a category win. Both have free + paid tiers — contrast licensing as open source vs closed source, not price. Never claim FlyEnv is fully free: the evaluation version caps local sites at 3 and limits AI assistant/screenshot/image optimizer to 3-day trials; a $10 Personal license removes those limits (see docs/guide/about-license.md). Core runtimes and environment management are always free. FlyEnv-only: Linux, Startup Groups, Tomcat. Do not list local DNS as a ServBay-only strength either — FlyEnv has a built-in DNS server (docs/features/dns-server.md); treat DNS as shared. Note ServBay free tier limits (5 sites) only if framed neutrally.
- Docker page: not a direct competitor. Compare execution models (native vs containers). Explicitly credit Docker for isolation, reproducibility, dev/test/prod parity, CI/CD. Include the "Consider both" section. Never claim FlyEnv replaces Docker.
