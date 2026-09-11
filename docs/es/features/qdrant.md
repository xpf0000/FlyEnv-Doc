---
layout: doc
titleTemplate: false
title: 'Base de datos vectorial Qdrant local con dashboard | FlyEnv'
description: 'Ejecuta versiones de Qdrant con una configuración gestionada y el dashboard web integrado para búsqueda vectorial local.'
head:
  - - meta
    - name: description
      content: 'Ejecuta versiones de Qdrant con una configuración gestionada y el dashboard web integrado para búsqueda vectorial local.'
  - - meta
    - property: og:title
      content: 'Base de datos vectorial Qdrant local con dashboard | FlyEnv'
  - - meta
    - property: og:description
      content: 'Ejecuta versiones de Qdrant con una configuración gestionada y el dashboard web integrado para búsqueda vectorial local.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/es/features/qdrant
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/es/features/qdrant
  - - link
    - rel: alternate
      hreflang: en
      href: https://flyenv.com/features/qdrant
  - - link
    - rel: alternate
      hreflang: zh-CN
      href: https://flyenv.com/zh/features/qdrant
  - - link
    - rel: alternate
      hreflang: id-ID
      href: https://flyenv.com/id/features/qdrant
  - - link
    - rel: alternate
      hreflang: es-ES
      href: https://flyenv.com/es/features/qdrant
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://flyenv.com/features/qdrant
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Desarrollo local con Qdrant en FlyEnv

Qdrant es una base de datos vectorial de código abierto: almacena vectores de embeddings y encuentra los más similares rápidamente. Es una pieza habitual para búsqueda semántica, recomendaciones y aplicaciones de generación aumentada por recuperación (RAG), a menudo combinada con un ejecutor de modelos local como [Ollama](/es/features/ollama); la [guía del agente de IA local sin conexión](/es/guide/build-local-offline-ai-agent) muestra ese tipo de stack de principio a fin. El módulo Qdrant de FlyEnv lo ejecuta como un servicio local gestionado: instala versiones desde una lista online seleccionada, inícialas y deténlas desde la barra lateral, y edita la configuración YAML de cada versión en un editor integrado. Cada instancia obtiene una configuración generada, logs por versión y el dashboard web de Qdrant servido en el puerto 6333, sin configuración manual.

![Vista general del módulo Qdrant de FlyEnv](https://oss.macphpstudy.com/image/features/qdrant-1.webp)

## Gestión de versiones de Qdrant

Instala versiones de Qdrant en paralelo desde **Qdrant → Version Manager** y mantenlas todas disponibles a la vez.

- **Lista online estática:** Qdrant se distribuye únicamente a través de la fuente Static de FlyEnv: una lista de versiones descargables (archivos zip o tar.gz) en macOS, Linux y Windows. Homebrew y MacPorts no se ofrecen para este módulo.
- **Directorios personalizados:** apunta FlyEnv a cualquier directorio que contenga tu propio binario de Qdrant y aparecerá en la lista junto a las versiones gestionadas.
- **Una versión cada vez:** pueden coexistir varias versiones instaladas, pero solo una instancia de Qdrant se ejecuta a la vez; al iniciar una versión se detiene la que estaba en marcha.

![Version Manager de Qdrant con la lista de versiones online Static](https://oss.macphpstudy.com/image/features/qdrant-2.webp)

## Servicio y configuración

La pestaña **Service** es la tabla de instancias en ejecución: inicia o detén una versión, elige la actual y abre su directorio de instalación. FlyEnv lanza el binario `qdrant` tal cual como un proceso gestionado, de modo que el arranque y la parada funcionan igual en todas las plataformas.

Cada versión instalada tiene su propia configuración: en el primer uso, FlyEnv genera `config/config.yaml` a partir de una plantilla y lo coloca junto al binario de esa versión. Como el archivo vive al lado del binario, los cambios de configuración son por versión: editar el YAML de una versión nunca afecta a otra. La pestaña **Config File** abre este archivo en un editor YAML en bruto, y la plantilla define por defecto el puerto REST y web en 6333.

![Configuración de Qdrant](https://oss.macphpstudy.com/image/features/qdrant-3.webp)

## Logs

Qdrant escribe dos archivos de log por versión instalada, ambos visibles sin salir de FlyEnv:

- **Pestaña Log:** la salida estándar de arranque de la versión (`qdrant-<version>-start-out.log`).
- **Pestaña Error Log:** la salida de errores de la versión (`qdrant-<version>-start-error.log`).

La separación en logs de salida y de errores por versión facilita ver exactamente qué escribió una build concreta de Qdrant durante el arranque o mientras atendía peticiones.

![Logs de Qdrant](https://oss.macphpstudy.com/image/features/qdrant-4.webp)

## Dashboard web

Mientras una versión de Qdrant está en ejecución, la pestaña Service muestra un botón de dashboard que abre `http://127.0.0.1:6333/dashboard` en tu navegador.

FlyEnv lo configura automáticamente: al iniciar o instalar, descarga el qdrant-web-ui oficial desde GitHub y hace que Qdrant lo sirva mediante el ajuste `QDRANT__SERVICE__STATIC_CONTENT_DIR`, de modo que el dashboard funciona desde el primer momento contra la instancia en el puerto 6333, sin servidor web aparte ni descarga manual de recursos.

![Dashboard web de Qdrant abierto desde FlyEnv](https://oss.macphpstudy.com/image/features/qdrant-5.webp)

<FeatureRelatedLinks locale="es" slug="qdrant" />

## Notas de compatibilidad

FlyEnv gestiona la instalación de versiones de Qdrant, el ciclo de vida del servicio, la configuración y los logs por versión, y el dashboard integrado; no gestiona colecciones, snapshots ni claves de API, que permanecen dentro del propio Qdrant. Los usuarios de PostgreSQL pueden conseguir una búsqueda vectorial similar dentro de una base de datos relacional mediante pgvector; consulta el [módulo PostgreSQL](/es/features/postgresql). El botón del dashboard siempre apunta al puerto por defecto 6333, así que conserva ese puerto en la configuración si dependes de él. Para los paquetes que FlyEnv puede instalar, toma la [página de descarga](/es/download) y las notas de la versión actual como fuente de verdad, y mira los [demos](/es/demos) para ver el módulo en acción.
