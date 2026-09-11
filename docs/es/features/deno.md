---
layout: doc
titleTemplate: false
title: 'Gestor de versiones de Deno y runtimes de proyecto | FlyEnv'
description: 'Instala versiones de Deno desde builds estáticos o Homebrew, cambia el binario activo y ejecuta proyectos Deno en local.'
head:
  - - meta
    - name: description
      content: 'Instala versiones de Deno desde builds estáticos o Homebrew, cambia el binario activo y ejecuta proyectos Deno en local.'
  - - meta
    - property: og:title
      content: 'Gestor de versiones de Deno y runtimes de proyecto | FlyEnv'
  - - meta
    - property: og:description
      content: 'Instala versiones de Deno desde builds estáticos o Homebrew, cambia el binario activo y ejecuta proyectos Deno en local.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/es/features/deno
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/es/features/deno
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Desarrollo local con Deno en FlyEnv

Deno es un runtime de JavaScript y TypeScript construido sobre V8, creado por el autor original de [Node.js](/es/features/nodejs), con soporte integrado para TypeScript y un modelo de permisos denegados por defecto. Se usa para servidores, scripts y herramientas donde resulta práctico un único binario autocontenido. El módulo Deno de FlyEnv es deliberadamente enfocado: instala versiones de Deno, decide a cuál resuelve el comando `deno` de tu terminal y vincula cada proyecto a su propio runtime. El módulo tiene tres pestañas —Proyectos, Servicio y Gestor de versiones— que cubren la instalación de versiones, el control del PATH y los runtimes de proyecto, sin archivos de configuración ni visores de logs que gestionar.

![Vista general del módulo Deno de FlyEnv](https://oss.macphpstudy.com/image/features/deno-1.webp)

## Gestión de versiones de Deno

Instala versiones de Deno en paralelo desde **Deno → Gestor de versiones** y mantenlas todas disponibles a la vez.

- **Builds estáticos:** hay una lista en línea de paquetes de Deno disponible en todas las plataformas; FlyEnv descarga cada versión en su propio directorio de la app (`deno/<version>`) y elimina automáticamente el atributo de cuarentena de macOS.
- **Homebrew (macOS y Linux):** instala la fórmula `deno`. Homebrew solo publica esta fórmula sin versión, por lo que no hay variantes versionadas `deno@x.y` entre las que elegir.
- **Directorios personalizados:** apunta FlyEnv a cualquier directorio que contenga tu propio build de Deno; detecta la versión ejecutando `deno --version` y muestra el binario junto a las versiones gestionadas.

![Gestor de versiones de Deno con fuentes de instalación estáticas y Homebrew](https://oss.macphpstudy.com/image/features/deno-2.webp)

## Cambio de versión desde la línea de comandos

La pestaña **Servicio** no inicia nada: Deno es un binario runtime y no un daemon, así que lo que esta pestaña muestra en realidad es una tabla de gestión de versiones y PATH.

- **Cambio de versión para la terminal:** elige la versión instalada a la que debe resolver el comando `deno` de tu terminal. FlyEnv añade o elimina el directorio bin de la versión en tu `PATH` según corresponda e indica si la entrada actual del PATH pertenece a FlyEnv o a otra herramienta. La [guía del entorno PATH del sistema](/es/guide/setup-system-path-environment) explica esta edición del PATH en detalle.
- **Alias y nota por versión:** cada instalación acepta un alias corto y una nota, para que los builds similares sigan siendo distinguibles en la lista.
- **Mantenimiento:** la tabla muestra la ruta de instalación de cada versión y te permite eliminar las versiones que ya no necesitas.

## Runtimes de Deno a nivel de proyecto

En **Deno → Proyectos**, registra cada carpeta de proyecto y vincúlala a una versión específica de Deno en lugar de depender de la versión que por casualidad esté en el PATH.

- **Runtime por proyecto:** la elección de versión se guarda en un archivo `.flyenv` dentro del directorio del proyecto, de modo que las terminales y los editores lanzados desde FlyEnv cargan automáticamente el Deno correcto. Consulta la [guía del entorno de runtime a nivel de proyecto](/es/guide/project-level-runtime-environment) y la funcionalidad [Runtimes por proyecto](/es/features/per-project-runtimes) para ver cómo funciona el mecanismo.
- **Ejecutar como servicio:** opcionalmente, ejecuta un proyecto directamente desde FlyEnv con un comando de inicio personalizado; el enlace del proyecto es una dirección simple `http://127.0.0.1:<port>`, sin integración de proxy inverso ni de sitios.
- **Abrir en herramientas:** salta desde una fila de proyecto a una terminal o editor con el entorno del proyecto ya cargado.

![Lista de Proyectos Deno con vinculación de versión de Deno por proyecto](https://oss.macphpstudy.com/image/features/deno-3.webp)

<FeatureRelatedLinks locale="es" slug="deno" />

## Notas de compatibilidad

FlyEnv gestiona la instalación de versiones de Deno, el cambio de PATH y los runtimes de proyecto; no incluye herramientas de Deno más allá de lo que cada build de Deno proporciona por sí mismo, y el módulo no tiene editor de configuración, visor de logs ni panel de administración. Las fuentes de instalación disponibles difieren según la plataforma —Homebrew es solo para macOS y Linux, y Windows usa builds estáticos más directorios personalizados— así que toma la [página de descargas](/es/download) y las notas de la versión actual como referencia de los paquetes soportados.
