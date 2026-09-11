---
layout: doc
titleTemplate: false
title: 'Gestor de versiones de Erlang/OTP para desarrollo local | FlyEnv'
description: 'Instala versiones de Erlang/OTP desde Homebrew, MacPorts o builds estáticas, y vincula una a cada proyecto.'
head:
  - - meta
    - name: description
      content: 'Instala versiones de Erlang/OTP desde Homebrew, MacPorts o builds estáticas, y vincula una a cada proyecto.'
  - - meta
    - property: og:title
      content: 'Gestor de versiones de Erlang/OTP para desarrollo local | FlyEnv'
  - - meta
    - property: og:description
      content: 'Instala versiones de Erlang/OTP desde Homebrew, MacPorts o builds estáticas, y vincula una a cada proyecto.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/es/features/erlang
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/es/features/erlang
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Desarrollo local con Erlang en FlyEnv

Erlang/OTP es un lenguaje de programación funcional y una plataforma de runtime construida para sistemas altamente concurrentes y tolerantes a fallos. Se usa habitualmente en infraestructura de telecomunicaciones, plataformas de mensajería y otros servicios que deben permanecer disponibles bajo carga pesada. El módulo Erlang de FlyEnv mantiene el desarrollo local de Erlang/OTP en un solo lugar: instala varias versiones de Erlang, decide a cuál se resuelve el comando `erl` de tu terminal y vincula cada proyecto a su propio runtime. El módulo tiene tres pestañas —Erlang Projects, Service y Version Manager— centradas en la instalación de versiones, el control del PATH y los runtimes de proyecto.

![Vista general del módulo Erlang de FlyEnv](https://oss.macphpstudy.com/image/features/erlang-1.webp)

## Gestión de versiones de Erlang

Instala versiones de Erlang/OTP en paralelo desde **Erlang → Version Manager** y mantenlas todas disponibles a la vez.

- **macOS:** instala desde Homebrew (la fórmula `erlang` y las fórmulas versionadas `erlang@<ver>`) o MacPorts; FlyEnv también escanea automáticamente el directorio de bibliotecas de MacPorts en busca de instalaciones de Erlang existentes. Esto cubre la mayoría de las necesidades locales, incluido ejecutar un servicio basado en Erlang como [RabbitMQ](/es/features/rabbitmq) junto a tus propios proyectos.
- **Linux:** instala desde Homebrew; MacPorts es una fuente exclusiva de macOS. No hay fuente Static en macOS ni en Linux.
- **Windows:** instala desde una lista en línea Static de builds empaquetadas, cada una con el ejecutable `bin/erl.exe`.
- **Directorios personalizados:** apunta FlyEnv a cualquier directorio que contenga tu propia build de Erlang y aparecerá en la lista junto a las versiones gestionadas.
- **Detección automática de versión:** en macOS y Linux cada instalación se comprueba con `erl -version`; en Windows la versión se lee del nombre del directorio de instalación.

![Version Manager de Erlang con fuentes Homebrew y MacPorts](https://oss.macphpstudy.com/image/features/erlang-2.webp)

## Cambio de versión en la línea de comandos

La pestaña **Service** no contiene ningún servicio: Erlang no tiene ningún proceso demonio dentro de FlyEnv. Es una tabla de versiones instaladas que se usa para la gestión de versiones y del PATH.

- **Cambio de versión en el terminal:** selecciona a qué versión instalada se resuelve el comando `erl` del terminal. FlyEnv actualiza entonces tu `PATH`, añadiendo o eliminando el directorio bin de la versión, y marca si la entrada actual del PATH fue establecida por FlyEnv o por otra herramienta. La [guía del entorno PATH del sistema](/es/guide/setup-system-path-environment) explica en detalle cómo funciona esta edición del PATH.
- **Alias y nota por versión:** asigna un alias corto y una nota a cada instalación para que builds similares sigan siendo distinguibles en la lista.
- **Mantenimiento:** la ruta de instalación de cada versión es visible en la tabla, y las versiones que ya no necesitas se pueden eliminar desde ella.

## Runtimes de Erlang a nivel de proyecto

En **Erlang → Projects**, registra la carpeta de cada proyecto y vincúlala a una versión específica de Erlang en lugar de depender de la versión que resulte estar en el PATH.

- **Runtime por proyecto:** la elección de versión se guarda en un archivo `.flyenv` dentro del directorio del proyecto, de modo que los terminales y editores lanzados desde FlyEnv usan automáticamente el Erlang correcto. Consulta la [guía del entorno de runtime a nivel de proyecto](/es/guide/project-level-runtime-environment) y la funcionalidad [Runtimes por proyecto](/es/features/per-project-runtimes) para ver cómo funciona el mecanismo.
- **Ejecutar como servicio:** opcionalmente, ejecuta un proyecto directamente desde FlyEnv con un comando de inicio personalizado, un puerto TCP expuesto como enlace `http://127.0.0.1:<port>`, variables de entorno definidas en línea o desde un archivo, y una opción sudo en macOS y Linux. El interruptor de la barra lateral inicia o detiene todos los proyectos Erlang habilitados como servicio a la vez.
- **Herramientas de apertura rápida:** salta desde una fila de proyecto al terminal del sistema con el entorno del proyecto ya cargado.

![Lista de Erlang Projects con vinculación de versión de Erlang por proyecto](https://oss.macphpstudy.com/image/features/erlang-3.webp)

<FeatureRelatedLinks locale="es" slug="erlang" />

## Notas de compatibilidad

FlyEnv gestiona la instalación de versiones de Erlang, el cambio de PATH y los runtimes de proyecto; no incluye herramientas de build ni de frameworks más allá de lo que cada build de Erlang/OTP proporciona por sí misma, y el módulo no tiene editores de archivos de configuración ni visores de logs propios. Las fuentes de instalación disponibles difieren según la plataforma —Homebrew y MacPorts en macOS, Homebrew en Linux, builds Static en Windows—, así que toma la [página de Descargas](/es/download) y las notas de la versión actual como referencia de los paquetes soportados.
