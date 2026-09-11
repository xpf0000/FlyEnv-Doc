---
layout: doc
titleTemplate: false
title: 'Gestor de Kimi CLI: sesiones, logs y MCP | FlyEnv'
description: 'Instala Kimi CLI, edita la configuración visualmente, reanuda y exporta sesiones, lee logs y gestiona servidores MCP.'
head:
  - - meta
    - name: description
      content: 'Instala Kimi CLI, edita la configuración visualmente, reanuda y exporta sesiones, lee logs y gestiona servidores MCP.'
  - - meta
    - property: og:title
      content: 'Gestor de Kimi CLI: sesiones, logs y MCP | FlyEnv'
  - - meta
    - property: og:description
      content: 'Instala Kimi CLI, edita la configuración visualmente, reanuda y exporta sesiones, lee logs y gestiona servidores MCP.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/es/features/kimi
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/es/features/kimi
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Kimi CLI en FlyEnv

Kimi es el agente de programación por línea de comandos de Moonshot AI, impulsado por los modelos Kimi. FlyEnv ofrece al CLI de programación Kimi una página de gestión dedicada: instálalo desde la tarjeta **Service**, edita `config.toml` mediante un formulario visual, reanuda o exporta **Sessions** anteriores, lee los propios archivos de log de Kimi sin salir de la aplicación y gestiona servidores MCP HTTP/SSE. Es uno de los varios clientes de programación con IA que FlyEnv gestiona —junto a [Claude Code](/es/features/claude-code) y [OpenCode](/es/features/opencode)— y la [guía del flujo de trabajo con asistentes de IA](/es/guide/flyenv-work-with-ai) muestra cómo encajan estos módulos en el desarrollo diario.

![Módulo Kimi de FlyEnv con las pestañas Service, Config File, Log, Sessions y MCP](https://oss.macphpstudy.com/image/features/kimi-1.webp)

## Instalación

Kimi no es un servicio en segundo plano: no hay ningún daemon que iniciar o detener, ni un gestor de versiones. El módulo detecta una instalación existente en tu `PATH` y en las ubicaciones de instalación habituales, y muestra la versión detectada en la tarjeta **Service**.

- **Instalación con un clic:** FlyEnv ejecuta el script de instalación oficial en su terminal integrada, para que veas la salida real a medida que ocurre — `curl -fsSL https://code.kimi.com/kimi-code/install.sh | bash` en macOS y Linux, `irm https://code.kimi.com/kimi-code/install.ps1 | iex` en Windows.
- **Hoja de referencia de comandos:** la tarjeta **Service** ofrece comandos rápidos que se pueden copiar, como `kimi --plan`, `kimi --yolo`, `kimi vis` y `kimi provider list/add/remove`, de modo que las invocaciones más comunes están siempre a un clic.
- **Lanzar desde FlyEnv:** las sesiones se abren en la terminal externa de tu sistema — FlyEnv entrega `kimi`, `kimi --session "<id>"` o `kimi --continue` a la terminal del sistema operativo en lugar de alojar el chat él mismo.

## Configuración

La pestaña **Config File** edita los archivos del directorio de configuración de Kimi (`~/.kimi-code/`, que se puede cambiar con `KIMI_CODE_HOME`): `config.toml`, `tui.toml` y `mcp.json`.

- **Formulario visual para `config.toml`:** ajusta los valores predeterminados más importantes — `default_permission_mode`, `default_thinking`, `default_plan_mode` y `telemetry` — desde campos de formulario en lugar de editar el TOML a mano.
- **Editor en bruto:** cada archivo también se puede abrir en el editor de código fuente completo para cualquier cosa que el formulario no cubra.

![Formulario visual editando los valores predeterminados de config.toml de Kimi](https://oss.macphpstudy.com/image/features/kimi-2.webp)

## Sesiones

La pestaña **Sessions** lee el almacén de sesiones en `~/.kimi-code/sessions/` y enumera cada conversación registrada, agrupada por directorio de trabajo.

- **Reanudar donde lo dejaste:** elige una sesión y FlyEnv la abre en una terminal externa del sistema con `kimi --session "<id>"`; `kimi --continue` vuelve directamente a la más reciente.
- **Exportar:** Kimi es el único cliente de IA en FlyEnv con una acción de exportación integrada — ejecuta `kimi export "<id>"` en la terminal integrada para que puedas guardar o compartir la transcripción de una sesión.
- **Mantenimiento:** elimina las sesiones que ya no necesites directamente desde la tabla.

![Pestaña Sessions de Kimi agrupada por directorio de trabajo con acciones de reanudar y exportar](https://oss.macphpstudy.com/image/features/kimi-3.webp)

## Logs

Kimi es el único módulo de CLI de programación con IA de FlyEnv que tiene una pestaña **Log** dedicada. Recopila todos los archivos `*.log` de `~/.kimi-code/logs/` en el visor de logs compartido, así que cuando el CLI se comporta mal puedes leer su propia salida de log en el mismo lugar en lugar de rebuscar por el directorio de configuración.

## Servidores MCP

La pestaña **MCP** enumera los servidores registrados para Kimi y te permite añadir o eliminar entradas — la [guía de MCP y espacio de trabajo con IA](/es/guide/ai-coding-workspace-mcp) muestra cómo los servidores MCP amplían las herramientas de programación con IA. Kimi solo acepta servidores MCP HTTP/SSE — los servidores stdio se rechazan por diseño — y FlyEnv escribe las adiciones en `mcp.json` dentro del directorio de configuración, el mismo archivo que lee el CLI. El propio [servidor MCP](/es/features/mcp-server) de FlyEnv puede registrarse aquí con un clic desde su pestaña **Client Config**.

![Gestión de servidores MCP HTTP/SSE para Kimi](https://oss.macphpstudy.com/image/features/kimi-4.webp)

<FeatureRelatedLinks locale="es" slug="kimi" />

## Notas de compatibilidad

El módulo Kimi gestiona los archivos y la configuración del CLI; no ejecuta Kimi como un servicio en segundo plano, y las sesiones interactivas siempre ocurren en la terminal de tu propio sistema, no dentro de FlyEnv. La instalación pasa por el script oficial del proveedor, por lo que la disponibilidad en cada plataforma depende de lo que admita ese script — consulta la [página de descargas](/es/download) para ver las plataformas de FlyEnv cubiertas. El soporte de MCP se limita a los transportes HTTP y SSE porque el propio Kimi no lee archivos de configuración MCP stdio.
