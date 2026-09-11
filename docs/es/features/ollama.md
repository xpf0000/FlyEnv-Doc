---
layout: doc
titleTemplate: false
title: 'Ejecuta Ollama en local con gestión de modelos | FlyEnv'
description: 'Instala y ejecuta versiones de Ollama, descarga y corre modelos desde la biblioteca y ajusta la configuración OLLAMA_* de forma visual.'
head:
  - - meta
    - name: description
      content: 'Instala y ejecuta versiones de Ollama, descarga y corre modelos desde la biblioteca y ajusta la configuración OLLAMA_* de forma visual.'
  - - meta
    - property: og:title
      content: 'Ejecuta Ollama en local con gestión de modelos | FlyEnv'
  - - meta
    - property: og:description
      content: 'Instala y ejecuta versiones de Ollama, descarga y corre modelos desde la biblioteca y ajusta la configuración OLLAMA_* de forma visual.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/es/features/ollama
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/es/features/ollama
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Ejecuta Ollama en local con FlyEnv

Ollama es una herramienta de código abierto para ejecutar modelos de lenguaje grandes en tu propia máquina, sirviéndolos a través de una API local que cualquier aplicación puede llamar. Es la opción habitual cuando quieres modelos de chat, código o embeddings disponibles en local, incluso totalmente offline. FlyEnv gestiona Ollama como un servicio local de primera clase: instala Ollama desde builds estáticas o Homebrew, inicia `ollama serve` con un clic, ajusta la configuración de entorno `OLLAMA_*` mediante un formulario visual y gestiona modelos desde una pestaña dedicada **Model**: explora la biblioteca en línea, descarga nuevos modelos y ejecútalos en el terminal integrado. Una vez descargado un modelo, puedes construir sobre él con la [guía del agente de IA local offline](/es/guide/build-local-offline-ai-agent).

![Vista general del módulo Ollama de FlyEnv con los controles del servicio](https://oss.macphpstudy.com/image/features/ollama-1.webp)

## Gestión de versiones

La pestaña **Version Manager** instala y mantiene varias versiones de Ollama lado a lado, y tú eliges cuál ejecuta el servicio.

- **Descargas estáticas:** archivos de Ollama listos para usar (`.zip` / `.tgz`) obtenidos a través de la API de versiones de FlyEnv, disponibles en macOS, Linux y Windows.
- **Homebrew:** instala la fórmula `ollama` mediante Homebrew donde esté disponible y gestiónala junto a las builds estáticas.
- **Directorios personalizados:** apunta FlyEnv a cualquier carpeta que contenga tu propia instalación de Ollama; buscará el binario `ollama` (o `ollama.exe`) y lo listará junto a las versiones gestionadas.
- **Una sola versión en ejecución:** el modelo de servicio ejecuta una única versión de Ollama a la vez, de modo que el endpoint de la API siempre pertenece a una build conocida.

![Version Manager de Ollama con las fuentes estática y Homebrew](https://oss.macphpstudy.com/image/features/ollama-2.webp)

## Servicio y configuración

FlyEnv lanza Ollama de forma independiente como `ollama serve` y sigue su archivo pid para un arranque y una parada limpios. El interruptor de la barra lateral y la entrada de la bandeja del sistema controlan el servicio sin abrir la página del módulo. Por defecto, el servidor escucha en `0.0.0.0:11434`, el puerto estándar de la API de Ollama.

Las variables de entorno se leen desde `ollama.conf` en el directorio base de FlyEnv: cada línea que empieza por `OLLAMA_` se pasa al proceso del servidor. La pestaña **Config File** edita este archivo de dos maneras:

- **Formulario de ajustes comunes:** ajusta variables que cambian con frecuencia, como `OLLAMA_DEBUG`, `OLLAMA_HOST` y `OLLAMA_KEEP_ALIVE`, desde un formulario visual en lugar de editar el archivo a mano.
- **Editor en bruto:** cambia a la vista de código completa para todo lo que el formulario no cubre; se conserva una copia `ollama.conf.default` al lado como referencia de los valores por defecto.

![Archivo de configuración de Ollama con el formulario de ajustes comunes OLLAMA_*](https://oss.macphpstudy.com/image/features/ollama-3.webp)

## Gestión de modelos

La pestaña **Model** es donde se descargan, listan y ejecutan los modelos.

- **Lista local:** muestra los modelos que ya están en tu máquina, leídos desde `ollama list`.
- **Biblioteca:** un catálogo en línea de modelos disponibles, obtenido de la API de FlyEnv y almacenado en caché local, para que la exploración siga siendo rápida entre sesiones.
- **Descargar y ejecutar en el terminal:** descarga un modelo nuevo desde la biblioteca o ejecuta uno de la lista local; el comando se ejecuta en el terminal integrado de FlyEnv, así que ves el progreso real de la descarga y la salida del chat. Un botón de copiar comando pone el comando `ollama` exacto en tu portapapeles para usarlo en otro lugar.
- **Informe de hardware:** un informe integrado de la GPU, CPU y RAM de tu máquina te ayuda a valorar qué tamaños de modelo funcionarán con comodidad.

![Pestaña Model de Ollama con modelos locales y la biblioteca en línea](https://oss.macphpstudy.com/image/features/ollama-4.webp)

![Descargando un modelo de Ollama en el terminal integrado](https://oss.macphpstudy.com/image/features/ollama-5.webp)

Un servicio Ollama en ejecución en el puerto 11434 también combina bien con otros módulos de FlyEnv: llama a la API local desde flujos de trabajo construidos en [n8n](/es/features/n8n), guarda embeddings de modelos locales en la base de datos vectorial [Qdrant](/es/features/qdrant), o ejecuta cuentas de IA basadas en CLI detrás de endpoints compatibles con OpenAI usando [CLIProxyAPI](/es/features/cliproxyapi). La guía sobre [FlyEnv trabajando con asistentes de IA](/es/guide/flyenv-work-with-ai) muestra cómo encajan estas piezas en una configuración más amplia.

## Logs

La pestaña **Log** abre los logs del servidor de cada versión directamente dentro de FlyEnv: `ollama-<version>-start-out.log` para la salida estándar y `ollama-<version>-start-error.log` para los errores. Son el primer lugar donde mirar cuando una versión no consigue arrancar o la API en el puerto 11434 deja de responder.

<FeatureRelatedLinks locale="es" slug="ollama" />

## Notas de compatibilidad

FlyEnv gestiona el runtime local de Ollama, su archivo de configuración y su flujo de trabajo con modelos; no incluye modelos por sí mismo: cada descarga procede de la biblioteca upstream de Ollama y necesita acceso a la red y espacio en disco suficiente. Las instalaciones estáticas se ofrecen en macOS, Linux y Windows; la disponibilidad de Homebrew depende de tu plataforma, y las versiones mostradas en Version Manager reflejan lo que publican esas fuentes. Solo una versión de Ollama se ejecuta a la vez, y los cambios de configuración en `ollama.conf` surten efecto en el siguiente arranque del servicio.
