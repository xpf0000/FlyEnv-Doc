---
layout: doc
titleTemplate: false
title: 'OpenClaw Gateway y Centro de Comandos | FlyEnv'
description: 'Instala OpenClaw, gestiona su gateway como un servicio del SO y ejecuta su paleta de comandos desde FlyEnv.'
head:
  - - meta
    - name: description
      content: 'Instala OpenClaw, gestiona su gateway como un servicio del SO y ejecuta su paleta de comandos desde FlyEnv.'
  - - meta
    - property: og:title
      content: 'OpenClaw Gateway y Centro de Comandos | FlyEnv'
  - - meta
    - property: og:description
      content: 'Instala OpenClaw, gestiona su gateway como un servicio del SO y ejecuta su paleta de comandos desde FlyEnv.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/es/features/openclaw
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/es/features/openclaw
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# OpenClaw en FlyEnv

OpenClaw es un asistente de IA personal de código abierto que se ejecuta en tu propia máquina: un gateway local conecta canales de chat como WhatsApp y Telegram con un agente de código, de modo que puedes escribirle a tu asistente desde cualquier lugar. FlyEnv envuelve el CLI de OpenClaw en un panel de control compacto: instala OpenClaw mediante el script oficial, registra y gestiona el gateway de OpenClaw como un servicio real del sistema operativo, y presenta los aproximadamente 110 subcomandos del CLI como una paleta categorizada que se ejecuta en el terminal integrado de FlyEnv. El módulo es deliberadamente ligero: FlyEnv no se interpone y controla el mismo binario `openclaw` que usarías a mano. Para un recorrido orientado a tareas, consulta la [guía de OpenClaw](/es/guide/openclaw); para una visión general de los asistentes de IA en FlyEnv, consulta [FlyEnv Work with AI](/es/guide/flyenv-work-with-ai).

![Módulo OpenClaw de FlyEnv mostrando la pestaña Service con el estado del gateway](https://oss.macphpstudy.com/image/features/openclaw-1.webp)

## Instalación

OpenClaw se instala ejecutando su script oficial de instalación dentro del terminal integrado de FlyEnv, así ves la salida real del instalador en lugar de confiar en una barra de progreso.

- **Solo el script oficial:** en macOS y Linux FlyEnv ejecuta `curl -fsSL https://openclaw.ai/install.sh | bash`; en Windows ejecuta el instalador de PowerShell correspondiente (`iwr ... install.ps1 | iex`). FlyEnv no descarga binarios propios.
- **Sin gestor de versiones:** el módulo de OpenClaw no tiene intencionadamente lista de versiones ni cambio entre múltiples versiones. La versión instalada se lee directamente de `openclaw --version`.
- **Interruptor del gateway en la barra lateral:** la entrada de OpenClaw en la barra lateral incluye un interruptor de encendido/apagado para el gateway. Permanece desactivado hasta que tanto el CLI como el gateway estén instalados, de modo que el panel nunca ofrece una acción que la máquina no pueda realizar.

## Gestión del gateway

El gateway es la única pieza de larga duración de una instalación de OpenClaw, y FlyEnv lo registra en el sistema operativo en lugar de vigilar un proceso por sí mismo.

- **Registro de servicio a nivel de SO:** instalar el gateway ejecuta `openclaw gateway install --force` y luego lo registra como servicio del sistema: un LaunchAgent en macOS (`ai.openclaw.gateway.plist` mediante `launchctl bootstrap`) o una unidad systemd a nivel de usuario en Linux (`openclaw-gateway.service` mediante `systemctl --user enable/start`). Por tanto, el gateway sobrevive a los reinicios sin que FlyEnv esté en ejecución.
- **Iniciar, detener y estado desde el panel:** el interruptor de la barra lateral y la pestaña Service ejecutan `openclaw gateway start/stop`, con una detención forzada del proceso como respaldo si el CLI no logra detenerlo limpiamente.
- **Estado en vivo y enlace al dashboard:** FlyEnv analiza la salida de `openclaw gateway status` para mostrar el estado actual y extraer la URL del dashboard, que se abre en tu navegador externo.

![Controles del gateway de OpenClaw con el estado del servicio en FlyEnv](https://oss.macphpstudy.com/image/features/openclaw-2.webp)

## Paleta de comandos

La pestaña Service incluye una paleta de comandos categorizada que cubre aproximadamente 110 comandos de OpenClaw en 13 categorías: información básica, configuración, gateway, agentes, navegador, canales, nodos y dispositivos, modelos, skills, sistema, sesiones, copia de seguridad y actualización, y plugins. La categoría de modelos combina de forma natural con un runtime de modelos local como [Ollama](/es/features/ollama) —consulta la [guía del agente de IA local sin conexión](/es/guide/build-local-offline-ai-agent)— si quieres que el gateway responda sin modelos en la nube.

- **Se ejecuta en el terminal integrado:** cada comando se ejecuta en el xterm incorporado de FlyEnv, de modo que la salida completa del CLI permanece visible y desplazable.
- **Pre-rellenado de argumentos:** los comandos que necesitan parámetros se escriben en el terminal por ti, listos para completar y ejecutar.
- **Correspondencia directa con el CLI:** la paleta refleja el CLI real de OpenClaw; nada se reimplementa, así que el comando en el que haces clic es el mismo que podrías escribir tú mismo.

![Paleta de comandos de OpenClaw categorizada en FlyEnv](https://oss.macphpstudy.com/image/features/openclaw-3.webp)

## Configuración

La pestaña **Config File** edita los propios archivos de OpenClaw directamente: no hay formulario de ajustes, solo editores en bruto.

- **`~/.openclaw/openclaw.json`:** el archivo de configuración principal de OpenClaw, editable como código fuente plano.
- **Archivo de servicio del gateway en macOS:** el `ai.openclaw.gateway.plist` generado también está disponible para edición directa.
- Los cambios se escriben en los mismos archivos que lee el CLI de OpenClaw, por lo que las ediciones manuales fuera de FlyEnv nunca entran en conflicto con una copia separada.

![Configuración de OpenClaw](https://oss.macphpstudy.com/image/features/openclaw-4.webp)

<FeatureRelatedLinks locale="es" slug="openclaw" />

## Notas de compatibilidad

El módulo de OpenClaw es una envoltura ligera alrededor del CLI: no es un módulo de servicio en segundo plano propio y no tiene entrada en la bandeja; el único proceso persistente es el gateway, que pasa a ser propiedad del gestor de servicios del sistema operativo una vez registrado. El registro del servicio del gateway depende de `launchctl` en macOS y de una unidad systemd a nivel de usuario en Linux; en Windows no existe ese paso de registro como servicio del SO, y el gateway se controla únicamente mediante los comandos del CLI `openclaw gateway start/stop`. FlyEnv no ofrece visores de registros para OpenClaw (`openclaw gateway status` y la propia salida del CLI son la fuente de información en tiempo de ejecución), y no hay gestor de versiones: lo que entrega el script oficial de instalación es lo que ejecutas. Consulta la [página de descargas](/es/download) para conocer la versión actual de FlyEnv que incluye este módulo. FlyEnv gestiona otro asistente personal basado en gateway de la misma manera; consulta el módulo [Hermes Agent](/es/features/hermes-agent).
