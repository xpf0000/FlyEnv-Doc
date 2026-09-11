---
layout: doc
titleTemplate: false
title: 'Gestor de Codex CLI: sesiones, plugins y MCP | FlyEnv'
description: 'Instala Codex, edita config.toml de forma visual, reanuda sesiones y gestiona plugins y servidores MCP desde FlyEnv.'
head:
  - - meta
    - name: description
      content: 'Instala Codex, edita config.toml de forma visual, reanuda sesiones y gestiona plugins y servidores MCP desde FlyEnv.'
  - - meta
    - property: og:title
      content: 'Gestor de Codex CLI: sesiones, plugins y MCP | FlyEnv'
  - - meta
    - property: og:description
      content: 'Instala Codex, edita config.toml de forma visual, reanuda sesiones y gestiona plugins y servidores MCP desde FlyEnv.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/es/features/codex
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/es/features/codex
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Codex CLI en FlyEnv

Codex es el agente de código open source de OpenAI para la terminal: toma tareas en lenguaje natural y edita, ejecuta y revisa código dentro de tus proyectos. FlyEnv ofrece a Codex CLI una consola de gestión: instalación con un clic mediante el script oficial de instalación, un formulario visual para `config.toml`, una tabla de Sessions que reanuda conversaciones anteriores en tu terminal, además de la gestión de plugins y servidores MCP. Para una visión más amplia de cómo controlar asistentes de IA desde FlyEnv, consulta [cómo trabaja FlyEnv con la IA](/es/guide/flyenv-work-with-ai).

![Vista general del módulo Codex de FlyEnv](https://oss.macphpstudy.com/image/features/codex-1.webp)

## Instalación

Codex es un cliente de línea de comandos, no un servicio en segundo plano: FlyEnv no lo inicia, lo detiene ni lo convierte en daemon, y no hay ningún puerto ni proceso que vigilar. La pestaña **Service** muestra si Codex está instalado y qué versión hay en tu máquina.

- **Script oficial de instalación, ejecutado por ti:** la instalación es una acción única que ejecuta el propio script del proveedor —`curl -fsSL https://chatgpt.com/codex/install.sh | sh` en macOS y Linux, `irm https://chatgpt.com/codex/install.ps1 | iex` en Windows— dentro del terminal integrado de FlyEnv, para que veas la salida real. El entorno de proxy de FlyEnv se aplica a la instalación automáticamente.
- **Detección automática:** FlyEnv encuentra el binario `codex` en tu `PATH` y en las ubicaciones de instalación habituales (Homebrew y los directorios bin estándar, los globales de npm/yarn/pnpm/bun en macOS y Linux; las ubicaciones de npm y WinGet en Windows), de modo que una instalación que ya tengas aparece sin necesidad de reinstalar.
- **Hoja de referencia de comandos:** una referencia de comandos cotidianos lista para copiar al portapapeles —`codex exec`, `codex review`, `codex login` y más— está integrada en la página.

## Configuración

La pestaña **Config File** edita la configuración de Codex directamente; no hay nada que reiniciar después.

- **Formulario visual para `config.toml`:** ajusta `~/.codex/config.toml` desde un formulario en lugar de escribir TOML a mano: el modelo, `model_reasoning_effort`, `approval_policy` y `sandbox_mode` son campos editables.
- **Editores en crudo:** tanto el código fuente completo de `config.toml` como `auth.json` se pueden editar como texto plano para todo lo que el formulario no cubre.
- **Se respeta el home personalizado:** si apuntas Codex a otra ubicación con `CODEX_HOME`, FlyEnv lee y escribe la configuración desde esa ubicación.

![Formulario visual de config.toml para Codex](https://oss.macphpstudy.com/image/features/codex-2.webp)

## Sesiones

La pestaña **Sessions** lee el historial de Codex de los archivos `.jsonl` segmentados por fecha bajo `~/.codex/sessions/` y los agrupa por directorio de trabajo, de modo que las conversaciones de cada proyecto permanecen juntas.

- **Retoma donde lo dejaste:** elige una sesión y FlyEnv abre el terminal del sistema en el directorio de la sesión con `codex resume <id>`; o vuelve directamente a la más reciente con `codex resume --last`.
- **Inicia conversaciones nuevas:** ejecuta `codex` para cualquier directorio de trabajo listado desde la misma tabla.
- **Mantenimiento:** elimina de la lista las sesiones antiguas que ya no necesites.

Las sesiones siempre se ejecutan en una ventana de terminal del sistema externa, nunca dentro de FlyEnv: FlyEnv prepara el comando y el directorio de trabajo y luego entrega la conversación a tu terminal.

![Tabla de Sessions de Codex agrupada por proyecto](https://oss.macphpstudy.com/image/features/codex-3.webp)

## Plugins

La pestaña **Plugins** muestra los plugins que Codex reporta, listando las entradas disponibles e instaladas mediante `codex plugin list --available --json`. Desde la misma pestaña puedes instalar plugins en el terminal integrado y gestionar los que ya están instalados. A diferencia de un marketplace de plugins completo, Codex no expone fuentes de marketplace que añadir o eliminar, por lo que FlyEnv gestiona los plugins directamente contra la CLI.

![Gestión de plugins de Codex](https://oss.macphpstudy.com/image/features/codex-4.webp)

## Servidores MCP

La pestaña **MCP** gestiona los servidores de Model Context Protocol que Codex puede invocar, con acciones de listar, añadir y eliminar; consulta la [guía de MCP y del espacio de trabajo de IA](/es/guide/ai-coding-workspace-mcp) para ver cómo los servidores MCP conectan las herramientas de código con IA a tu entorno local.

- **Escritos en `config.toml`:** los servidores MCP HTTP que añadas se guardan bajo `mcp_servers` en `~/.codex/config.toml`, manteniendo todo en un solo archivo de configuración.
- **Cliente remoto activado automáticamente:** añadir un servidor HTTP también activa `features.rmcp_client = true` para que Codex pueda alcanzar endpoints MCP remotos.
- **Registro de FlyEnv con un clic:** el propio [MCP Server](/es/features/mcp-server) de FlyEnv puede registrarse en esta lista desde su pestaña Client Config.

![Gestión de servidores MCP de Codex](https://oss.macphpstudy.com/image/features/codex-5.webp)

<FeatureRelatedLinks locale="es" slug="codex" />

## Notas de compatibilidad

Codex se ejecuta como una CLI interactiva en tu propio terminal; FlyEnv gestiona su instalación, configuración, historial de sesiones, plugins y servidores MCP, pero las conversaciones en sí siempre ocurren en el terminal externo del sistema, en todas las plataformas soportadas. La instalación usa el script oficial del proveedor, así que lo que se instala —y si la instalación tiene éxito— depende de ese script y de tu red. La detección cubre el `PATH` además de las ubicaciones de instalación habituales; un binario en una ubicación poco habitual puede requerir primero una instalación estándar. No hay gestión multi-versión para Codex, y las rutas de configuración descritas arriba siguen a `CODEX_HOME` cuando está definida. Para las plataformas que FlyEnv soporta, consulta la [página de descargas](/es/download). FlyEnv gestiona otras CLIs de código con IA del mismo modo: mira los módulos de [Claude Code](/es/features/claude-code) y [Kimi](/es/features/kimi).
