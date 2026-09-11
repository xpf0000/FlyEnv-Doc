---
layout: doc
titleTemplate: false
title: 'Gestor de GitHub Copilot CLI: sesiones y Skills | FlyEnv'
description: 'Instala GitHub Copilot CLI con npm, edita su configuración, reanuda sesiones y gestiona Skills y servidores MCP.'
head:
  - - meta
    - name: description
      content: 'Instala GitHub Copilot CLI con npm, edita su configuración, reanuda sesiones y gestiona Skills y servidores MCP.'
  - - meta
    - property: og:title
      content: 'Gestor de GitHub Copilot CLI: sesiones y Skills | FlyEnv'
  - - meta
    - property: og:description
      content: 'Instala GitHub Copilot CLI con npm, edita su configuración, reanuda sesiones y gestiona Skills y servidores MCP.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/es/features/github-copilot-cli
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/es/features/github-copilot-cli
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# GitHub Copilot CLI en FlyEnv

GitHub Copilot CLI es el agente de programación con IA de GitHub para el terminal, parte de la familia de productos Copilot. FlyEnv le ofrece una página de gestión dedicada: instalación con un clic, un editor en bruto para sus archivos de configuración JSON, un explorador de sesiones con reanudación y limpieza, una lista de Skills con acciones por skill y gestión de servidores MCP. Copilot sigue siendo una herramienta de terminal normal: FlyEnv organiza todo a su alrededor. Para el flujo de trabajo más amplio de controlar FlyEnv desde asistentes de IA, consulta [FlyEnv trabaja con IA](/es/guide/flyenv-work-with-ai).

![Vista general del módulo GitHub Copilot CLI en FlyEnv con la tarjeta de Servicio, el comando de instalación, la versión detectada y la chuleta de comandos rápidos](https://oss.macphpstudy.com/image/features/github-copilot-cli-1.webp)

## Instalación

La pestaña **GitHub Copilot CLI → Servicio** detecta un binario `copilot` existente y muestra su versión, u ofrece una instalación con un clic cuando no se encuentra ninguno.

- **Un único comando multiplataforma:** la instalación ejecuta `npm install -g @github/copilot`, el mismo comando en macOS, Linux y Windows, así que un entorno Node.js/npm funcional es el único requisito previo; la [gestión de versiones de Node.js](/es/guide/manage-multiple-node-php-versions) de FlyEnv puede proporcionarlo si lo necesitas.
- **Terminal integrado:** el comando npm se ejecuta en el terminal incorporado de FlyEnv, con las variables de entorno de proxy de FlyEnv aplicadas, de modo que ves la salida real de la instalación en lugar de una barra de progreso silenciosa.
- **Instalaciones existentes reconocidas:** FlyEnv analiza el `PATH` y las ubicaciones de instalación global habituales —entre ellas los directorios bin globales de npm, yarn, pnpm, bun y volta—, de modo que un Copilot CLI instalado por ti se detecta sin reinstalarlo.
- **Chuleta de comandos:** accesos directos copiables para comandos cotidianos como `copilot login`, `copilot init`, `copilot skill list` y `copilot mcp list`, directamente en la tarjeta de Servicio.

## Configuración

La pestaña **Archivo de configuración** edita la configuración de Copilot CLI como JSON en bruto; este módulo no tiene formulario visual de ajustes.

- **Dos archivos:** `~/.copilot/config.json` para la configuración principal y `~/.copilot/mcp-config.json` para las definiciones de servidores MCP, ambos abiertos en el editor completo.
- **Directorio home personalizado respetado:** si reubicas el home de Copilot con la variable de entorno `COPILOT_CONFIG_DIR`, FlyEnv la sigue y edita los archivos en su ubicación real.
- **Nada se reescribe por ti:** FlyEnv abre los archivos tal como están en el disco; el esquema y los valores predeterminados pertenecen al propio Copilot CLI.

![Configuración de GitHub Copilot CLI](https://oss.macphpstudy.com/image/features/github-copilot-cli-2.webp)

## Sesiones

Las sesiones de Copilot se leen del propio almacén SQLite del CLI en `~/.copilot/session-store.db`, por lo que los títulos y prompts se muestran con claridad, agrupados por directorio de trabajo.

- **Retoma donde lo dejaste:** las acciones de ejecutar y reanudar abren el terminal externo de tu sistema en el directorio de trabajo de la sesión y lanzan `copilot --resume` o `copilot --continue`; la conversación interactiva siempre tiene lugar en ese terminal, no dentro de FlyEnv.
- **Eliminación limpia:** al eliminar una sesión también se elimina su directorio `session-state/<id>`, de modo que no queda estado huérfano.

![Tabla de sesiones agrupada por directorio de trabajo con acciones de ejecutar, reanudar y eliminar](https://oss.macphpstudy.com/image/features/github-copilot-cli-3.webp)

## Skills

La pestaña **Skills** lista las Skills conocidas por Copilot CLI consultando el CLI directamente con `copilot skill list --json`, con el nombre de cada skill seguido de su origen. A diferencia del módulo [Antigravity CLI](/es/features/antigravity-cli), que lee sus carpetas de skills directamente del disco, esta lista siempre proviene del propio CLI.

- **Acciones por skill:** abre el directorio de la skill, muéstrala en tu gestor de archivos o previsualiza su contenido sin salir de FlyEnv.
- **Siempre actualizada:** como la lista proviene del CLI y no de una instantánea en caché, las Skills nuevas aparecen en cuanto `copilot skill list` las ve.

![Pestaña Skills con las skills de Copilot, etiquetas de origen y acciones de abrir, mostrar y previsualizar](https://oss.macphpstudy.com/image/features/github-copilot-cli-4.webp)

## Servidores MCP

La pestaña **MCP** gestiona los servidores MCP a los que se conecta Copilot CLI, respaldada por el archivo `~/.copilot/mcp-config.json`.

- **Listar, añadir, eliminar:** consulta los servidores registrados actualmente y añade o elimina entradas desde la interfaz; los cambios se escriben de vuelta en el archivo de configuración MCP.
- **Funciona con el servidor MCP de FlyEnv:** el módulo [Servidor MCP de FlyEnv](/es/features/mcp-server) puede registrarse en la lista MCP de Copilot CLI, permitiendo que Copilot inspeccione y opere tus servicios y sitios locales.
- **Verificación en el terminal:** el comando rápido `copilot mcp list` de la tarjeta de Servicio es la forma más rápida de confirmar lo que el CLI cargó realmente.

![Pestaña de servidores MCP con la lista de servidores registrados y acciones de añadir y eliminar](https://oss.macphpstudy.com/image/features/github-copilot-cli-5.webp)

<FeatureRelatedLinks locale="es" slug="github-copilot-cli" />

## Notas de compatibilidad

GitHub Copilot CLI no es un servicio en segundo plano: FlyEnv no añade interruptor de inicio/parada, puerto ni ciclo de vida de procesos, y cada sesión interactiva se ejecuta en un terminal externo del sistema. La instalación se basa en npm y es idéntica en macOS, Linux y Windows, lo que significa que Node.js con npm debe estar presente primero; si lo necesitas, instálalo desde el [módulo Node.js](/es/features/nodejs) de FlyEnv o descarga FlyEnv desde la [página de descarga](/es/download). La configuración solo se expone como JSON en bruto; no hay formulario visual, y las preguntas sobre claves concretas corresponden a la documentación del propio Copilot CLI. Los datos de sesión residen en el almacén SQLite del CLI bajo `~/.copilot` (o donde apunte `COPILOT_CONFIG_DIR`), y FlyEnv solo lee y elimina lo que Copilot CLI ha escrito ahí.
