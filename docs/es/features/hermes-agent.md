---
layout: doc
titleTemplate: false
title: 'Gateway, skills y sesiones de Hermes Agent | FlyEnv'
description: 'Instala Hermes, gestiona su gateway, explora e instala skills desde varias fuentes y administra sesiones.'
head:
  - - meta
    - name: description
      content: 'Instala Hermes, gestiona su gateway, explora e instala skills desde varias fuentes y administra sesiones.'
  - - meta
    - property: og:title
      content: 'Gateway, skills y sesiones de Hermes Agent | FlyEnv'
  - - meta
    - property: og:description
      content: 'Instala Hermes, gestiona su gateway, explora e instala skills desde varias fuentes y administra sesiones.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/es/features/hermes-agent
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/es/features/hermes-agent
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Hermes Agent en FlyEnv

Hermes es un agente de IA autónomo de código abierto de Nous Research: un agente controlado desde el terminal con su propio proceso de gateway, un sistema de skills extensible y sesiones persistentes. FlyEnv envuelve la CLI del agente Hermes en un módulo dedicado: instalación en un solo paso mediante el script oficial, control de inicio y parada del gateway de Hermes, edición directa de sus archivos de configuración, un gestor de skills con exploración en línea en varias fuentes y una vista de sesiones con limpieza. El módulo se organiza en cinco pestañas: Service, Config File, Log, Skills y Sessions. Para ver cómo encaja FlyEnv en los flujos de trabajo asistidos por IA en general, consulta [FlyEnv con IA](/es/guide/flyenv-work-with-ai). Combina Hermes con un runtime de modelos local como [Ollama](/es/features/ollama) —como se muestra en la [guía del agente de IA local sin conexión](/es/guide/build-local-offline-ai-agent)— para ejecutar todo el stack sin modelos en la nube.

![Vista general del módulo Hermes de FlyEnv con las pestañas Service, Config File, Log, Skills y Sessions](https://oss.macphpstudy.com/image/features/hermes-agent-1.webp)

## Instalación

Hermes se instala desde el script del proveedor, ejecutado dentro del terminal integrado de FlyEnv para que veas la salida real mientras se ejecuta.

- **Un comando por plataforma:** en macOS y Linux, FlyEnv ejecuta `curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash`; en Windows ejecuta el equivalente de PowerShell `irm .../install.ps1 | iex`.
- **Sin gestor de versiones:** no hay lista de versiones en línea ni cambio entre versiones en paralelo para Hermes. Una vez instalado, la pestaña Service muestra la versión detectada.
- **Plataformas compatibles:** Hermes puede instalarse en macOS, Windows y Linux, las mismas plataformas para las que se distribuye FlyEnv en la [página de descargas](/es/download).

## Gestión del gateway

El interruptor de la barra lateral del módulo Hermes —y los controles de la pestaña Service— controlan el gateway de Hermes directamente a través de la CLI.

- **Inicio y parada:** FlyEnv ejecuta `hermes gateway start` y `hermes gateway stop` cuando activas el interruptor.
- **Estado en vivo:** la pestaña Service muestra la versión instalada junto con el estado del gateway, extraído de la salida de `hermes gateway status`.
- **Paleta de comandos:** la pestaña Service también ofrece una paleta categorizada con unos 78 comandos de Hermes repartidos en 12 categorías —chat/sesión, gateway, configuración, autenticación de modelos, skills/plugins, memoria/herramientas, MCP, sistema/logs, copia de seguridad/actualización, dashboard/TUI y perfil—, cada uno ejecutado en el terminal integrado. La categoría MCP funciona bien con el propio [MCP Server](/es/features/mcp-server) de FlyEnv, que expone tus servicios locales a agentes compatibles con MCP.

![Pestaña Service de Hermes con la versión, el estado del gateway y la paleta de comandos por categorías](https://oss.macphpstudy.com/image/features/hermes-agent-2.webp)

## Configuración

La pestaña Config File abre los archivos de configuración de Hermes de tu directorio personal en editores de texto sin formato, cada uno con resaltado de sintaxis acorde al tipo de archivo.

- **`~/.hermes/config.yaml`:** la configuración principal de Hermes, editada como YAML.
- **`~/.hermes/.env`:** variables de entorno del agente, editadas como archivo env.
- **`~/.hermes/SOUL.md`:** el archivo de personalidad del agente, editado como Markdown.

![Editando ~/.hermes/config.yaml en el editor de configuración de FlyEnv](https://oss.macphpstudy.com/image/features/hermes-agent-3.webp)

## Skills

La pestaña Skills gestiona las skills del agente tanto localmente como en línea.

- **Skills instaladas:** activa o desactiva una skill con un interruptor —al desactivarla se escribe la entrada en `skills.disabled` dentro de `config.yaml`— y actualiza, desinstala o restablece skills desde la misma lista.
- **Inspeccionar y localizar:** un modal de inspección muestra los detalles de una skill, y con un clic se abre el directorio de skills en tu gestor de archivos.
- **Exploración en línea:** explora skills en línea con paginación y búsqueda por palabra clave en seis fuentes —la fuente oficial, skills.sh, well-known, GitHub, ClawHub y LobeHub— e instala las que quieras.

![Explorando skills de Hermes en línea en varias fuentes con búsqueda](https://oss.macphpstudy.com/image/features/hermes-agent-4.webp)

## Sessions

La pestaña Sessions lista las sesiones que devuelve `hermes sessions list`, convertidas en una tabla dentro de FlyEnv. Al eliminar una sesión se ejecuta el comando correspondiente en el terminal integrado, de modo que la operación y su resultado permanecen visibles.

![Pestaña Sessions de Hermes con la lista de sesiones y acciones de eliminación](https://oss.macphpstudy.com/image/features/hermes-agent-5.webp)

## Logs

La pestaña Log lee directamente los archivos de `~/.hermes/logs/`, con un visor para cada archivo `*.log`. Cuando un archivo de log no está disponible en disco, FlyEnv recurre a `hermes logs <type> -n <lines>` para obtener la salida reciente desde la CLI.

<FeatureRelatedLinks locale="es" slug="hermes-agent" />

## Notas de compatibilidad

Hermes no es un servicio en segundo plano gestionado por FlyEnv: el módulo no registra ningún demonio ni proceso de bandeja, y el interruptor de la barra lateral solo controla el gateway a través de la CLI `hermes`. La instalación es una ejecución única del script oficial del proveedor en el terminal integrado —un script de shell en macOS y Linux, PowerShell en Windows— y FlyEnv no ofrece lista de versiones ni gestión de múltiples versiones. La configuración, los logs y las skills residen en `~/.hermes` dentro de tu directorio personal y pertenecen al propio agente; FlyEnv edita y muestra esos archivos, pero no define su esquema. Las plataformas y versiones disponibles actualmente se reflejan en la [página de descargas](/es/download) y en la propia aplicación. FlyEnv gestiona de la misma manera otro asistente personal basado en gateway: consulta el módulo [OpenClaw](/es/features/openclaw).
