---
layout: doc
titleTemplate: false
title: 'Gestor de Antigravity CLI: sesiones y skills | FlyEnv'
description: 'Instala Antigravity CLI, edita su configuración de forma visual, reanuda conversaciones y explora skills con vista previa Markdown.'
head:
  - - meta
    - name: description
      content: 'Instala Antigravity CLI, edita su configuración de forma visual, reanuda conversaciones y explora skills con vista previa Markdown.'
  - - meta
    - property: og:title
      content: 'Gestor de Antigravity CLI: sesiones y skills | FlyEnv'
  - - meta
    - property: og:description
      content: 'Instala Antigravity CLI, edita su configuración de forma visual, reanuda conversaciones y explora skills con vista previa Markdown.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/es/features/antigravity-cli
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/es/features/antigravity-cli
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Antigravity CLI en FlyEnv

Antigravity CLI (`agy`) es el agente de codificación con IA de Google basado en terminal, el compañero de línea de comandos del IDE Antigravity. FlyEnv le ofrece un auténtico panel de control: instala el binario `agy` mediante un terminal integrado, ajusta su configuración desde un formulario visual, retoma conversaciones anteriores desde una lista de Sessions agrupada y explora las Skills de usuario e integradas con vista previa Markdown renderizada. El módulo forma parte del conjunto de herramientas de IA de FlyEnv: consulta [cómo trabaja FlyEnv con las herramientas de codificación con IA](/es/guide/flyenv-work-with-ai) para ver el panorama completo.

![Vista general del módulo Antigravity CLI en FlyEnv](https://oss.macphpstudy.com/image/features/antigravity-cli-1.webp)

## Instalación

Antigravity CLI no es un servicio en segundo plano y FlyEnv no incluye sus binarios. La instalación es una acción única en la tarjeta **Service**: FlyEnv abre su terminal integrado y ejecuta el script oficial de instalación del proveedor —`curl -fsSL https://antigravity.google/cli/install.sh | bash` en macOS y Linux, o el script de PowerShell equivalente en Windows— con el entorno de proxy de FlyEnv aplicado, de modo que la descarga funciona detrás de un proxy.

- **Detección automática:** FlyEnv encuentra un binario `agy` existente en tu `PATH` y en las ubicaciones de instalación habituales (`/usr/local/bin`, `/opt/homebrew/bin`, `~/.local/bin` y los directorios bin globales de npm/yarn/pnpm/bun en macOS y Linux; `%APPDATA%\npm`, WinGet Links y `~/.local/bin` en Windows), y luego muestra la versión detectada en la tarjeta Service.
- **Hoja de referencia de comandos:** la tarjeta Service incluye botones para copiar al portapapeles comandos útiles de `agy` como `agy plugin list`, `agy plugin import`, `agy install` y `agy models`.

## Configuración

La pestaña **Config File** edita los archivos que Antigravity CLI realmente lee. El archivo de configuración principal está en `~/.gemini/antigravity-cli/settings.json`, y los servidores MCP se guardan por separado en `~/.gemini/config/mcp_config.json`.

- **Formulario visual para los ajustes comunes:** ajusta el modelo, el interruptor del sandbox del terminal y el nivel de permisos de las herramientas desde campos de formulario, sin editar JSON a mano.
- **Editor en crudo:** cambia a la vista del archivo completo para cualquier clave que el formulario no exponga.
- **Raíz de configuración de Gemini compartida:** Antigravity CLI lee del directorio de configuración de Gemini CLI; si lo reubicas con la variable de entorno `GEMINI_HOME`, FlyEnv respeta esa anulación.

![Formulario visual de ajustes para Antigravity CLI](https://oss.macphpstudy.com/image/features/antigravity-cli-2.webp)

## Sesiones

La pestaña **Sessions** muestra tus conversaciones anteriores para que puedas retomar una sin tener que recordar su id.

- **Agrupadas por directorio de trabajo:** las conversaciones se organizan según la carpeta en la que se ejecutaron, y cada entrada muestra su id y la hora de última modificación. Como Antigravity almacena los mensajes como protobuf, el título y el primer prompt se recuperan en la medida de lo posible.
- **Reanudación en tu propio terminal:** ejecutar o reanudar una sesión abre el terminal de tu sistema —no un panel dentro de FlyEnv— con `agy --conversation <id>` (o `agy --continue` para la más reciente) ya escrito en el directorio correcto.
- **Eliminación limpia:** borra conversaciones obsoletas directamente desde la lista.

![Sesiones agrupadas por directorio de trabajo](https://oss.macphpstudy.com/image/features/antigravity-cli-3.webp)

## Skills

La pestaña **Skills** explora directamente las carpetas de skills en el disco: a diferencia del módulo [GitHub Copilot CLI](/es/features/github-copilot-cli), cuya pestaña Skills consulta al propio CLI, la lista de Antigravity se lee directamente del sistema de archivos.

- **Skills de usuario e integradas:** tus propias skills de `antigravity-cli/skills` se muestran junto a las integradas de `antigravity-cli/builtin/skills`, estas últimas marcadas con una etiqueta de builtin.
- **Panel de vista previa Markdown:** al abrir una skill, su Markdown se renderiza en un panel con vistas de código, vista previa y dividida, para que puedas leer las instrucciones formateadas antes de decidir usarla o editarla.
- **Abrir el directorio de skills:** un botón te lleva a la carpeta de skills en tu gestor de archivos cuando quieras añadir o editar archivos directamente.

![Skill](https://oss.macphpstudy.com/image/features/antigravity-cli-4.webp)

## Servidores MCP

La pestaña **MCP** gestiona los servidores de Model Context Protocol a los que se conecta Antigravity CLI, leídos y escritos en `~/.gemini/config/mcp_config.json`; la [guía de MCP y el espacio de trabajo de IA](/es/guide/ai-coding-workspace-mcp) explica el papel que desempeñan los servidores MCP en un espacio de trabajo de codificación con IA. Lista los servidores configurados actualmente, añade uno nuevo o elimina las entradas que ya no necesites, sin editar JSON manualmente. El propio [MCP Server](/es/features/mcp-server) de FlyEnv puede registrarse en esta lista con un clic desde su pestaña Client Config.

![Servidores MCP](https://oss.macphpstudy.com/image/features/antigravity-cli-5.webp)

<FeatureRelatedLinks locale="es" slug="antigravity-cli" />

## Notas de compatibilidad

Antigravity CLI en FlyEnv es un compañero de escritorio para la herramienta de línea de comandos `agy`, disponible en macOS, Windows y Linux; el script de instalación y las rutas de detección difieren según la plataforma, como se describe arriba. No es un servicio: no hay ciclo de vida de inicio/parada, ni puerto, ni gestor de versiones; FlyEnv gestiona cualquier versión de `agy` que el instalador oficial o tu gestor de paquetes haya colocado en la máquina. Las conversaciones siempre se abren en un terminal externo del sistema; FlyEnv las lista y las lanza, pero no aloja el chat en sí. Los detalles de las sesiones están limitados por el formato de almacenamiento de Antigravity (bases de datos SQLite con mensajes en protobuf), por lo que FlyEnv puede mostrar de forma fiable el id, el directorio de trabajo y la hora de modificación, mientras que los títulos son una aproximación. Para la build actual de FlyEnv y los paquetes por plataforma, consulta la [página de descarga](/es/download). FlyEnv gestiona otros CLI de codificación con IA de la misma manera: consulta los módulos [Claude Code](/es/features/claude-code) y [Codex](/es/features/codex).
