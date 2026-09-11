---
layout: doc
titleTemplate: false
title: 'Servidor Typesense local para macOS y Linux | FlyEnv'
description: 'Ejecuta versiones de Typesense en macOS y Linux con un archivo de configuración gestionado y logs.'
head:
  - - meta
    - name: description
      content: 'Ejecuta versiones de Typesense en macOS y Linux con un archivo de configuración gestionado y logs.'
  - - meta
    - property: og:title
      content: 'Servidor Typesense local para macOS y Linux | FlyEnv'
  - - meta
    - property: og:description
      content: 'Ejecuta versiones de Typesense en macOS y Linux con un archivo de configuración gestionado y logs.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/es/features/typesense
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/es/features/typesense
  - - link
    - rel: alternate
      hreflang: en
      href: https://flyenv.com/features/typesense
  - - link
    - rel: alternate
      hreflang: zh-CN
      href: https://flyenv.com/zh/features/typesense
  - - link
    - rel: alternate
      hreflang: id-ID
      href: https://flyenv.com/id/features/typesense
  - - link
    - rel: alternate
      hreflang: es-ES
      href: https://flyenv.com/es/features/typesense
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://flyenv.com/features/typesense
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Typesense en FlyEnv

Typesense es un motor de búsqueda de código abierto centrado en búsquedas rápidas y tolerantes a erratas con una API sencilla, usado habitualmente para búsqueda en sitios web y experiencias de búsqueda instantánea mientras escribes: una alternativa más ligera a [Elasticsearch](/es/features/elasticsearch), en la misma familia que [Meilisearch](/es/features/meilisearch) y [ZincSearch](/es/features/zincsearch). FlyEnv lo ejecuta como un servidor de búsqueda local gestionado en macOS y Linux: instala versiones desde una lista estática o Homebrew, inicia `typesense-server` con un archivo de configuración gestionado por FlyEnv y vigila su log sin salir de la app. El módulo Typesense solo está disponible en macOS y Linux.

![Vista general del módulo Typesense de FlyEnv](https://oss.macphpstudy.com/image/features/typesense-1.webp)

## Gestión de versiones

Instala y mantén varias versiones de Typesense en paralelo desde **Typesense → Version Manager**, y elige cuál ejecuta el servicio.

- **Fuentes de instalación:** una lista en línea estática, además de Homebrew usando la fórmula `typesense/tap/typesense-server` y sus variantes versionadas `@x.y`.
- **Versiones personalizadas:** apunta FlyEnv a cualquier directorio que contenga tu propio binario `typesense-server`, y aparecerá listado junto a las versiones gestionadas.
- **Inicio y parada:** controla la versión en ejecución desde la pestaña Service o desde el interruptor de la barra lateral (también disponible en la bandeja del sistema).

![Version Manager de Typesense con las fuentes estática y Homebrew](https://oss.macphpstudy.com/image/features/typesense-2.webp)

## Servicio y configuración

FlyEnv inicia el binario real de `typesense-server` con `--config=<BaseDir>/typesense/typesense-server.ini --log-dir=<BaseDir>/typesense/log`, de modo que el archivo de configuración es la única fuente de verdad del servicio.

- **Configuración autogenerada:** en el primer inicio, FlyEnv escribe un `typesense-server.ini` por defecto con `api-port = 8108`, `api-key = xyz`, un directorio de datos dentro de la carpeta Typesense propia de FlyEnv y `enable-cors = true`, de modo que el servidor responde en el puerto 8108 desde el primer momento.
- **Pestaña Config File:** un editor de código fuente en bruto para `typesense-server.ini`, con `typesense-server.ini.default` guardado a su lado como referencia intacta. Una única configuración se comparte entre todas las versiones de Typesense instaladas.

![Editando typesense-server.ini en el editor de configuración de FlyEnv](https://oss.macphpstudy.com/image/features/typesense-3.webp)

## Logs

La pestaña **Log** abre el archivo de log del servidor en `typesense/log/typesense.log` directamente dentro de FlyEnv. Como FlyEnv pasa el directorio de logs a `typesense-server` al arrancarlo, todas las versiones que ejecutes escriben en el mismo lugar: la primera parada cuando una versión no arranca o una petición de búsqueda se comporta mal.

<FeatureRelatedLinks locale="es" slug="typesense" />

## Notas de compatibilidad

**El módulo Typesense solo está disponible en macOS y Linux; no aparece en Windows.** FlyEnv gestiona el runtime local, su archivo de configuración y su directorio de logs; no incluye una interfaz de administración de Typesense, y el módulo no tiene integración con proyectos: apunta tú mismo el cliente Typesense de tu aplicación al puerto configurado (8108 por defecto). El conjunto exacto de funciones de cada build proviene de la versión upstream de Typesense. Consulta la [página de descargas](/es/download) para la versión actual de FlyEnv, y mira las [demos](/es/demos) para ver los módulos de servicio de FlyEnv en acción.
