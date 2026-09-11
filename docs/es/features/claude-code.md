---
layout: doc
titleTemplate: false
title: 'Gestor de Claude Code: sesiones, plugins y MCP | FlyEnv'
description: 'Instala Claude Code, edita la configuración visualmente, reanuda sesiones y gestiona plugins y servidores MCP desde FlyEnv.'
head:
  - - meta
    - name: description
      content: 'Instala Claude Code, edita la configuración visualmente, reanuda sesiones y gestiona plugins y servidores MCP desde FlyEnv.'
  - - meta
    - property: og:title
      content: 'Gestor de Claude Code: sesiones, plugins y MCP | FlyEnv'
  - - meta
    - property: og:description
      content: 'Instala Claude Code, edita la configuración visualmente, reanuda sesiones y gestiona plugins y servidores MCP desde FlyEnv.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/es/features/claude-code
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/es/features/claude-code
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Claude Code en FlyEnv

Claude Code es el agente de programación con IA de Anthropic basado en la línea de comandos: lee tu base de código, edita archivos y ejecuta comandos para realizar tareas de desarrollo desde la terminal. FlyEnv ofrece a Claude Code un centro de control gráfico: instalación con un clic mediante el script oficial, un editor visual para `settings.json`, un navegador de sesiones que reanuda conversaciones anteriores, gestión completa de plugins y marketplaces, y configuración de servidores MCP, todo desde el módulo **Claude Code** en la barra lateral. FlyEnv encaja de forma natural en un flujo de trabajo asistido por IA; consulta [cómo funciona FlyEnv con herramientas de IA](/es/guide/flyenv-work-with-ai) para tener una visión general.

![Módulo Claude Code en FlyEnv con la pestaña Service y la terminal de instalación](https://oss.macphpstudy.com/image/features/claude-code-1.webp)

## Instalación

Claude Code es un cliente de línea de comandos, no un servicio en segundo plano: no hay ningún daemon que iniciar o detener, y el módulo no tiene gestor de versiones. FlyEnv gestiona la configuración como una tarea única.

- **Script de instalación oficial:** al hacer clic en instalar se ejecuta el propio script del proveedor — `curl -fsSL https://claude.ai/install.sh | bash` en macOS y Linux, `irm https://claude.ai/install.ps1 | iex` en Windows — dentro de la terminal integrada de FlyEnv, para que veas la salida real a medida que ocurre. El entorno de proxy de FlyEnv se aplica a la instalación automáticamente.
- **Detección automática:** si Claude Code ya está instalado, FlyEnv lo encuentra escaneando el `PATH` y las ubicaciones de instalación habituales — `/usr/local/bin`, `/opt/homebrew/bin`, `~/.local/bin` y las carpetas bin globales de npm, yarn, pnpm, bun y volta en macOS y Linux; `%APPDATA%\npm`, WinGet Links y `~/.local/bin` en Windows — y muestra la versión detectada.
- **Hoja de referencia de comandos:** la pestaña Service incluye una referencia rápida de comandos útiles como `claude doctor`, `claude update` y `claude setup-token`, cada uno con un botón para copiar al portapapeles.

## Configuración

La pestaña **Config File** edita la configuración de Claude Code directamente, combinando un formulario visual con un editor de código sin procesar completo.

- **Formulario de ajustes comunes:** ajusta los campos de `settings.json` que se modifican con más frecuencia — tema, modelo, `includeCoAuthoredBy` y `cleanupPeriodDays` — desde controles de formulario en lugar de editar JSON a mano.
- **Editor JSON sin procesar:** cambia a la vista de código fuente para cualquier cosa que el formulario no cubra; los cambios se escriben de vuelta en los archivos reales.
- **Todos los archivos de configuración a mano:** FlyEnv abre `~/.claude/settings.json`, `settings.local.json`, `plugins/known_marketplaces.json` y `~/.claude.json` desde el mismo lugar. Si reubicas el directorio principal de Claude Code con `CLAUDE_CONFIG_DIR`, FlyEnv sigue esa anulación.

![Formulario visual de settings.json de Claude Code con los campos de tema y modelo](https://oss.macphpstudy.com/image/features/claude-code-2.webp)

## Sesiones

La pestaña **Sessions** lee el historial de Claude Code desde el directorio `~/.claude/projects`, analizando los archivos de transcripción `.jsonl` de cada proyecto.

- **Agrupadas por proyecto:** las sesiones se organizan por directorio de trabajo, para que las conversaciones de cada base de código permanezcan juntas.
- **Reanudar con un clic:** al elegir una sesión se abre la terminal externa del sistema en la carpeta de ese proyecto y se ejecuta `claude --resume <id>` — o `claude --continue` para la conversación más reciente. Las sesiones siempre se ejecutan en la terminal del sistema, no dentro de FlyEnv.
- **Limpieza:** elimina las sesiones que ya no necesites directamente desde la lista.

![Tabla de sesiones agrupadas por directorio de trabajo con acciones de reanudación](https://oss.macphpstudy.com/image/features/claude-code-3.webp)

## Plugins

La pestaña **Plugins** es un gestor de plugins completo construido sobre el propio sistema de plugins de Claude Code, incluido el soporte de marketplaces.

- **Disponibles e instalados:** FlyEnv consulta `claude plugin list --available --json` para mostrar lo que ofrece cada marketplace junto a lo que ya tienes.
- **Instalación con salida real:** la instalación de plugins se ejecuta en la terminal integrada, por lo que el progreso de descarga y configuración es visible.
- **Acciones de ciclo de vida:** activa, desactiva o desinstala plugins instalados sin tocar la línea de comandos.
- **Gestión de marketplaces:** añade nuevos marketplaces de plugins o elimina los existentes; la lista registrada se guarda en `known_marketplaces.json` dentro del directorio principal de Claude Code.

![Pestaña Plugins con la lista de plugins de marketplaces y acciones de instalación y activación](https://oss.macphpstudy.com/image/features/claude-code-4.webp)

## Servidores MCP

La pestaña **MCP** gestiona los servidores de Model Context Protocol almacenados en la sección `mcpServers` de `~/.claude.json` — la [guía de MCP y espacio de trabajo con IA](/es/guide/ai-coding-workspace-mcp) explica cómo estos servidores amplían las herramientas de programación con IA.

- **Listar y eliminar:** consulta todos los servidores MCP configurados y elimina las entradas que ya no uses.
- **Servidores HTTP y SSE:** los servidores remotos se añaden escribiendo la definición directamente en `~/.claude.json`.
- **Servidores stdio:** los servidores locales basados en comandos se registran mediante `claude mcp add`, de modo que se crean exactamente como espera el CLI.
- **Registro de FlyEnv con un clic:** el propio [servidor MCP](/es/features/mcp-server) de FlyEnv puede registrarse en esta lista desde su pestaña Client Config.

![Lista de servidores MCP con controles para añadir y eliminar](https://oss.macphpstudy.com/image/features/claude-code-5.webp)

<FeatureRelatedLinks locale="es" slug="claude-code" />

## Notas de compatibilidad

Claude Code en FlyEnv es una capa de gestión sobre el CLI, no un runtime alojado. El módulo no es un servicio en segundo plano: FlyEnv no ejecuta Claude Code por ti; las sesiones interactivas siempre se lanzan en una terminal externa del sistema con el directorio del proyecto como directorio de trabajo. La instalación pasa por los scripts oficiales de Anthropic dentro de la terminal integrada, y no hay gestión de múltiples versiones. El historial de sesiones se lee de las transcripciones JSONL de `~/.claude/projects`, por lo que solo pueden aparecer las sesiones que el propio Claude Code haya registrado; las ediciones de configuración se aplican a los archivos estándar en `~/.claude` (o en el directorio indicado por `CLAUDE_CONFIG_DIR`). La cobertura de plataformas depende de la compilación de FlyEnv que estés ejecutando: consulta la [página de descargas](/es/download) para ver la versión actual por sistema operativo. FlyEnv gestiona otros CLI de programación con IA de la misma manera: consulta los módulos [Codex](/es/features/codex), [OpenCode](/es/features/opencode) y [Kimi](/es/features/kimi).
