---
layout: doc
titleTemplate: false
title: 'Servidor local de ZincSearch con interfaz web | FlyEnv'
description: 'Ejecuta versiones de ZincSearch con configuración basada en variables de entorno y la interfaz web integrada en el puerto 4080.'
head:
  - - meta
    - name: description
      content: 'Ejecuta versiones de ZincSearch con configuración basada en variables de entorno y la interfaz web integrada en el puerto 4080.'
  - - meta
    - property: og:title
      content: 'Servidor local de ZincSearch con interfaz web | FlyEnv'
  - - meta
    - property: og:description
      content: 'Ejecuta versiones de ZincSearch con configuración basada en variables de entorno y la interfaz web integrada en el puerto 4080.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/es/features/zincsearch
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/es/features/zincsearch
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# ZincSearch en FlyEnv

ZincSearch es un motor de búsqueda de código abierto escrito en [Go](/es/features/go), presentado como una alternativa ligera a [Elasticsearch](/es/features/elasticsearch) para la indexación de texto completo y la búsqueda en logs, dentro de la misma familia de búsqueda ligera que [Meilisearch](/es/features/meilisearch) y [Typesense](/es/features/typesense). Funciona como un único binario con una consola web integrada, lo que facilita incorporarlo a proyectos pequeños y al desarrollo local. FlyEnv lo ejecuta como un servicio de búsqueda local gestionado: instala versiones desde el Version Manager, inicia el servidor con un `zincsearch.env` editable y abre la interfaz web integrada de ZincSearch con un solo clic. Los valores predeterminados se generan automáticamente: el servidor escucha en `127.0.0.1:4080` con una cuenta de administrador inicial, y sus datos residen dentro del propio directorio de FlyEnv.

![Vista general del módulo ZincSearch en FlyEnv](https://oss.macphpstudy.com/image/features/zincsearch-1.webp)

## Gestión de versiones

Instala y mantén varias versiones de ZincSearch en paralelo desde **ZincSearch → Version Manager**.

- **Solo fuente estática:** ZincSearch se instala desde la lista estática en línea en todas las plataformas: macOS, Linux y Windows. Los paquetes son los binarios oficiales de los releases de GitHub, con el archivo de cada sistema operativo tomado de la URL de descarga del release. Las fuentes Homebrew y MacPorts no están disponibles para este módulo.
- **Corrección de cuarentena en macOS:** tras instalar un build estático en macOS, FlyEnv elimina el atributo de cuarentena para que el binario pueda iniciarse sin que Gatekeeper lo bloquee.
- **Versiones personalizadas:** añade cualquier directorio que contenga tu propio build de ZincSearch; FlyEnv lo analiza y muestra esos binarios junto a las versiones gestionadas.
- **Archivo de entorno por versión:** FlyEnv crea automáticamente un archivo `.env` junto a cada binario instalado, de modo que cada versión lleva sus propios valores de entorno predeterminados.

![Version Manager de ZincSearch con la lista estática en línea](https://oss.macphpstudy.com/image/features/zincsearch-2.webp)

## Servicio y configuración

La pestaña **Service** inicia la versión de ZincSearch seleccionada como un proceso de binario normal, con sus variables de entorno leídas desde `<BaseDir>/zincsearch/zincsearch.env`. En la primera ejecución, FlyEnv escribe valores razonables: `ZINC_FIRST_ADMIN_USER=admin`, `ZINC_FIRST_ADMIN_PASSWORD=admin`, `ZINC_SERVER_ADDRESS=127.0.0.1`, `ZINC_SERVER_PORT=4080` y el directorio de datos en `<BaseDir>/zincsearch/data`.

La pestaña **Config File** es un editor en crudo de `zincsearch.env`: cambia la dirección de escucha, el puerto, las credenciales de administrador o la ruta de datos editando directamente las entradas de entorno, con una copia `zincsearch.env.default` disponible como referencia. Ten en cuenta que esta configuración es global: un único `zincsearch.env` se comparte entre todas las versiones de ZincSearch instaladas.

![Edición de zincsearch.env en la pestaña Config File](https://oss.macphpstudy.com/image/features/zincsearch-3.webp)

## Interfaz web

ZincSearch incluye su propia interfaz web, y FlyEnv la pone directamente a tu alcance: mientras el servicio está en ejecución, la pestaña Service muestra un botón **ZincSearch UI** que abre la consola en tu navegador. La dirección se lee desde el archivo env, por lo que sigue el host y el puerto que hayas configurado; de forma predeterminada es `http://127.0.0.1:4080/`. Inicia sesión con las credenciales de administrador de `zincsearch.env` para gestionar índices, ejecutar búsquedas e inspeccionar documentos.

## Logs

ZincSearch tiene dos pestañas de log separadas: **Log** y **Error Log**. Abren los logs de arranque por versión `zincsearch-<version>-start-out.log` y `zincsearch-<version>-start-error.log` dentro de FlyEnv, de modo que la salida estándar y los errores de arranque se distinguen fácilmente cuando una versión no consigue iniciarse.

<FeatureRelatedLinks locale="es" slug="zincsearch" />

## Notas de compatibilidad

FlyEnv gestiona los binarios locales de ZincSearch, sus archivos de entorno y sus directorios de datos; no controla qué versiones de ZincSearch publica el proyecto original. Como ZincSearch solo está disponible desde la fuente estática, las versiones instalables dependen de lo que ofrezcan los releases oficiales de GitHub para tu sistema operativo. Las credenciales de administrador predeterminadas (`admin` / `admin`) están pensadas para desarrollo local: cámbialas en `zincsearch.env` antes de exponer el servidor fuera de tu máquina. Considera la lista de versiones de la aplicación y la [página de descarga](/es/download) como la referencia definitiva sobre lo que se puede instalar, y consulta las [demos](/es/demos) para ver ejemplos de módulos de FlyEnv en acción.
