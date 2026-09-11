---
layout: doc
titleTemplate: false
title: 'Gestor de versiones de Bun y runtimes de proyectos | FlyEnv'
description: 'Instala versiones de Bun desde compilaciones estáticas, cambia el binario activo y ejecuta proyectos Bun como servicios gestionados.'
head:
  - - meta
    - name: description
      content: 'Instala versiones de Bun desde compilaciones estáticas, cambia el binario activo y ejecuta proyectos Bun como servicios gestionados.'
  - - meta
    - property: og:title
      content: 'Gestor de versiones de Bun y runtimes de proyectos | FlyEnv'
  - - meta
    - property: og:description
      content: 'Instala versiones de Bun desde compilaciones estáticas, cambia el binario activo y ejecuta proyectos Bun como servicios gestionados.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/es/features/bun
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/es/features/bun
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Desarrollo local con Bun en FlyEnv

Bun es un runtime de JavaScript y TypeScript que además integra un gestor de paquetes, un bundler y un ejecutor de pruebas en un solo ejecutable. Se utiliza como alternativa a [Node.js](/es/features/nodejs) para servidores, scripts y herramientas de frontend. El módulo Bun de FlyEnv reúne en un solo lugar lo esencial del trabajo local con Bun: instala versiones de Bun desde compilaciones estáticas, decide a cuál de ellas resuelve el comando `bun` de tu terminal y vincula cada proyecto a su propio runtime. El módulo tiene tres pestañas — Projects, Service y Version Manager — centradas en la instalación de versiones, el control del PATH y los runtimes de proyectos.

![Vista general del módulo Bun de FlyEnv](https://oss.macphpstudy.com/image/features/bun-1.webp)

## Gestión de versiones de Bun

Instala versiones de Bun en paralelo desde **Bun → Version Manager** y mantenlas todas disponibles a la vez.

- **Solo compilaciones estáticas:** Bun se instala desde una lista online Static en todas las plataformas — macOS, Linux y Windows por igual. Las fuentes Homebrew y MacPorts que se ofrecen para otros runtimes no están disponibles para Bun.
- **Directorios personalizados:** apunta FlyEnv a cualquier directorio que contenga tu propia compilación de Bun y aparecerá en la lista junto a las versiones gestionadas.
- **Ubicación de instalación gestionada:** las versiones se descomprimen en el directorio de la aplicación de FlyEnv, bajo `bun/<version>/`, y cada instalación se detecta a través de la salida real de `bun --version`.
- **Configuración posterior a la instalación:** tras instalar una versión, FlyEnv ejecuta `bun completions` para que el autocompletado del shell funcione, y en macOS elimina el atributo de cuarentena del binario descargado.

![Gestor de versiones de Bun con la lista online Static](https://oss.macphpstudy.com/image/features/bun-2.webp)

## Cambio de versión desde la línea de comandos

Aquí nada se ejecuta como servicio: FlyEnv no tiene un daemon de Bun, por lo que la pestaña **Service** es en realidad una tabla de versiones instaladas centrada en la gestión del PATH.

- **Cambio de versión en la terminal:** elige a qué versión instalada resuelve el comando `bun` de la terminal. FlyEnv gestiona tu `PATH` por ti —añadiendo el directorio bin de la versión cuando la seleccionas y eliminándolo cuando cambias a otra— y muestra si la entrada activa del PATH fue establecida por FlyEnv o por otra herramienta. Consulta la [guía del entorno PATH del sistema](/es/guide/setup-system-path-environment) para ver cómo funciona la gestión del PATH.
- **Alias y nota por versión:** asigna a cada instalación su propio alias corto y una nota, para que las compilaciones parecidas sigan siendo distinguibles en la lista.
- **Mantenimiento:** cada fila muestra dónde está instalada la versión, y las versiones que ya no necesitas se pueden eliminar de la tabla.

## Runtimes de Bun a nivel de proyecto

En **Bun → Projects**, registra cada carpeta de proyecto y vincúlala a una versión concreta de Bun, en lugar de depender de la versión que por casualidad esté en el PATH.

- **Runtime por proyecto:** la elección de versión se guarda en un archivo `.flyenv` dentro del directorio del proyecto, de modo que las terminales y los editores lanzados desde FlyEnv usan automáticamente el Bun correcto. Consulta la [guía del entorno de runtime a nivel de proyecto](/es/guide/project-level-runtime-environment) y la [función de runtimes por proyecto](/es/features/per-project-runtimes) para ver cómo funciona el mecanismo.
- **Ejecutar como servicio:** opcionalmente, ejecuta un proyecto directamente desde FlyEnv con un comando de inicio o un archivo de ejecución personalizados, un puerto TCP expuesto como enlace `http://127.0.0.1:<port>`, variables de entorno definidas en línea o desde un archivo, y una opción sudo en macOS y Linux.
- **Herramientas de apertura:** salta desde una fila de proyecto a la terminal del sistema o a un editor con el entorno del proyecto ya cargado.

![Lista de proyectos Bun con vinculación de versión de Bun por proyecto](https://oss.macphpstudy.com/image/features/bun-3.webp)

<FeatureRelatedLinks locale="es" slug="bun" />

## Notas de compatibilidad

FlyEnv gestiona la instalación de versiones de Bun, el cambio de PATH y los runtimes de proyectos; el módulo Bun en sí no tiene archivos de configuración a nivel de módulo, visores de registros ni panel de administración más allá de lo que ofrece el binario de Bun. Las instalaciones provienen de compilaciones Static en todas las plataformas, así que toma la [página de descargas](/es/download) y las notas de la versión actual como referencia de los paquetes soportados.
