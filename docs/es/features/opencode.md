---
layout: doc
titleTemplate: false
title: 'OpenCode Manager: Sesiones, Estadísticas y Proveedores | FlyEnv'
description: 'Instala OpenCode, edita su configuración, explora sesiones y revisa estadísticas de modelos y proveedores desde FlyEnv.'
head:
  - - meta
    - name: description
      content: 'Instala OpenCode, edita su configuración, explora sesiones y revisa estadísticas de modelos y proveedores desde FlyEnv.'
  - - meta
    - property: og:title
      content: 'OpenCode Manager: Sesiones, Estadísticas y Proveedores | FlyEnv'
  - - meta
    - property: og:description
      content: 'Instala OpenCode, edita su configuración, explora sesiones y revisa estadísticas de modelos y proveedores desde FlyEnv.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/es/features/opencode
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/es/features/opencode
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# OpenCode en FlyEnv

OpenCode es un agente de código con IA de código abierto que se ejecuta en el terminal y funciona con muchos proveedores de modelos distintos, de modo que no quedas atado a los modelos de un único proveedor. FlyEnv ofrece a OpenCode una página de gestión dedicada con seis pestañas —Service, Config File, Sessions, MCP, Stats y Providers—, el conjunto de pestañas más completo entre las herramientas de código con IA de FlyEnv. Desde un solo lugar puedes instalar el CLI, editar su configuración JSONC, explorar y reanudar sesiones anteriores, revisar las estadísticas por modelo, inspeccionar los proveedores autenticados y gestionar los servidores MCP. Encaja de forma natural en el [flujo de trabajo asistido por IA con FlyEnv](/es/guide/flyenv-work-with-ai).

![Módulo OpenCode en FlyEnv con las pestañas Service, Config File, Sessions, MCP, Stats y Providers](https://oss.macphpstudy.com/image/features/opencode-1.webp)

## Instalación

OpenCode es un CLI de código con IA, no un servicio en segundo plano: no hay nada que iniciar o detener, ni ningún puerto que gestionar. FlyEnv detecta automáticamente una instalación existente y ofrece una instalación de un solo paso cuando no encuentra ninguna.

- **Un solo comando en todas las plataformas:** la instalación ejecuta `npm install -g opencode-ai`, igual en macOS, Windows y Linux.
- **Ejecución en el terminal integrado:** el comando de instalación se ejecuta en el terminal incorporado de FlyEnv para que veas la salida real, con las variables de entorno de proxy de FlyEnv aplicadas para que las descargas funcionen tras un proxy.
- **Detección automática:** FlyEnv busca el binario `opencode` en tu `PATH` y en ubicaciones de instalación habituales: directorios bin del sistema y carpetas globales de npm, yarn, pnpm, bun o Volta en macOS y Linux, y ubicaciones de npm o WinGet en Windows. Un OpenCode que hayas instalado por tu cuenta se detecta sin reinstalarlo.
- **Comandos rápidos copiables:** la pestaña Service incluye una chuleta de comandos —`opencode models`, `opencode upgrade`, `opencode agent list` y más—, cada uno con un botón para copiar al portapapeles.

## Configuración

OpenCode guarda sus ajustes en `~/.config/opencode/opencode.jsonc`, un archivo JSON con comentarios. FlyEnv respeta XDG y recurre a `opencode.json` cuando es lo que tu configuración utiliza.

- **Editor JSONC en bruto:** la pestaña Config File abre el archivo real en un editor de código completo. Intencionadamente no hay aquí ningún formulario visual: editas exactamente lo que OpenCode lee.
- **Compatible con comentarios:** como el archivo es JSONC, los comentarios del archivo se conservan mientras editas.

![Configuración de OpenCode](https://oss.macphpstudy.com/image/features/opencode-2.webp)

## Sesiones

La pestaña Sessions enumera tus conversaciones anteriores de OpenCode preguntando al propio CLI: FlyEnv ejecuta `opencode session list --format json` y muestra el resultado.

- **Agrupadas por proyecto:** las sesiones se organizan según su directorio de trabajo, de modo que las conversaciones del mismo código base permanecen juntas.
- **Ejecutar, reanudar, eliminar:** inicia una sesión nueva en una carpeta de proyecto, reanuda una concreta, continúa la más reciente o elimina las sesiones que ya no necesites.
- **Terminal externo:** las sesiones siempre se abren en la ventana de terminal de tu propio sistema, ejecutando `opencode`, `opencode --session <id>` o `opencode --continue` desde el directorio de trabajo de la sesión —nunca dentro de un panel integrado—, de modo que la interfaz interactiva completa funciona como está diseñada.

![Pestaña Sessions de OpenCode agrupada por directorio de trabajo con acciones de reanudar y eliminar](https://oss.macphpstudy.com/image/features/opencode-3.webp)

## Estadísticas

La pestaña Stats convierte los informes de uso de OpenCode en una tabla legible. FlyEnv ejecuta `opencode stats --models` —opcionalmente con una ventana `--days N`— y analiza la salida en tabla del CLI, eliminando los códigos de color ANSI por el camino.

- **Desglose por modelo:** ve cuánto trabajo ha gestionado cada modelo para ti.
- **Ventana de tiempo ajustable:** limita el informe a los últimos días para observar los patrones de uso actuales.

![Pestaña Stats de OpenCode mostrando la tabla de uso por modelo](https://oss.macphpstudy.com/image/features/opencode-4.webp)

## Proveedores

La pestaña Providers muestra con qué proveedores de modelos está autenticado tu OpenCode. FlyEnv los lee del propio almacén de credenciales de OpenCode en `~/.local/share/opencode/auth.json`, de modo que la lista siempre refleja lo que el CLI puede usar realmente.

- **Proveedores autenticados de un vistazo:** confirma que una clave de API o un inicio de sesión surtió efecto sin abrir el archivo a mano.
- **Siempre sincronizado:** como los datos provienen directamente del archivo de autenticación de OpenCode, un proveedor añadido en el CLI aparece en FlyEnv en la siguiente lectura.

![Pestaña Providers de OpenCode listando los proveedores de modelos autenticados](https://oss.macphpstudy.com/image/features/opencode-5.webp)

## Servidores MCP

La pestaña MCP gestiona los servidores Model Context Protocol a los que se conecta OpenCode; la [guía de MCP y el espacio de trabajo de IA](/es/guide/ai-coding-workspace-mcp) explica lo que los servidores MCP pueden aportar a una configuración de código con IA. FlyEnv lee y escribe las entradas MCP directamente dentro del archivo de configuración JSONC, eliminando los comentarios durante el análisis para que los archivos editados a mano sigan siendo válidos.

- **Listar, añadir, eliminar:** revisa los servidores MCP configurados y añade o elimina entradas sin tener que buscar por la configuración tú mismo.
- **Almacenamiento nativo en la configuración:** los cambios se guardan en `opencode.jsonc`, manteniendo una única fuente de verdad tanto para FlyEnv como para las ediciones manuales.
- **Registro de FlyEnv con un clic:** el propio [MCP Server](/es/features/mcp-server) de FlyEnv puede registrarse en esta lista desde su pestaña Client Config.

![Servidores MCP de OpenCode](https://oss.macphpstudy.com/image/features/opencode-6.webp)

<FeatureRelatedLinks locale="es" slug="opencode" />

## Notas de compatibilidad

OpenCode no es un servicio en segundo plano: FlyEnv no lo inicia, lo detiene ni lo monitoriza, y el interruptor de servicio de la barra lateral está desactivado en este módulo por diseño. La instalación en todas las plataformas se realiza mediante `npm install -g opencode-ai` ejecutado en el terminal integrado de FlyEnv, por lo que un entorno Node.js/npm funcional —instalable desde el [módulo Node.js](/es/features/nodejs) de FlyEnv— es un prerrequisito, y la detección depende de que el binario esté en tu `PATH` o en una de las ubicaciones de instalación estándar que FlyEnv examina. Los datos de Sessions, Stats y Providers provienen del CLI de OpenCode y de sus propios archivos, por lo que su precisión depende de la versión de OpenCode instalada; actualizar OpenCode puede cambiar lo que estas pestañas muestran. El trabajo interactivo ocurre en un terminal externo del sistema, no dentro de FlyEnv. Para conocer las plataformas soportadas y la versión actual, consulta la [página de descargas](/es/download).
