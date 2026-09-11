---
layout: doc
titleTemplate: false
title: 'Gestor de versiones de Zig para desarrollo local | FlyEnv'
description: 'Instala versiones de Zig y cambia entre ellas desde compilaciones estáticas, Homebrew o MacPorts, y asigna una a cada proyecto.'
head:
  - - meta
    - name: description
      content: 'Instala versiones de Zig y cambia entre ellas desde compilaciones estáticas, Homebrew o MacPorts, y asigna una a cada proyecto.'
  - - meta
    - property: og:title
      content: 'Gestor de versiones de Zig para desarrollo local | FlyEnv'
  - - meta
    - property: og:description
      content: 'Instala versiones de Zig y cambia entre ellas desde compilaciones estáticas, Homebrew o MacPorts, y asigna una a cada proyecto.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/es/features/zig
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/es/features/zig
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Desarrollo local con Zig en FlyEnv

Zig es un lenguaje de programación de sistemas y toolchain de propósito general, con gestión manual de memoria y compilación cruzada integrada. Se utiliza para componentes de sistema, objetivos embebidos y herramientas sensibles al rendimiento, donde tradicionalmente se elegiría C o C++, y ocupa el mismo espacio de programación de sistemas que [Rust](/es/features/rust), que FlyEnv también gestiona. El módulo Zig de FlyEnv mantiene los toolchains locales de Zig organizados en un solo lugar: instala varias versiones de Zig en paralelo, decide a cuál resuelve el comando `zig` de tu terminal y vincula cada proyecto a su propia versión del compilador. El módulo tiene tres pestañas — Projects, Service y Version Manager — centradas en la instalación de versiones, el control del PATH y los toolchains de proyecto.

![Vista general del módulo Zig de FlyEnv](https://oss.macphpstudy.com/image/features/zig-1.webp)

## Gestión de versiones de Zig

Instala versiones de Zig en paralelo desde **Zig → Version Manager** y mantenlas todas disponibles a la vez. FlyEnv detecta cada instalación ejecutando `zig version`, de modo que la lista siempre refleja toolchains reales y funcionales.

- **Compilaciones estáticas en todas las plataformas:** elige entre una lista en línea de compilaciones de Zig para macOS, Linux y Windows; se descomprimen en el directorio `zig/<version>` propio de FlyEnv. En macOS, FlyEnv elimina el atributo de cuarentena tras la descompresión para que el binario se ejecute sin avisos de Gatekeeper.
- **Gestores de paquetes de macOS:** instala mediante Homebrew (la fórmula `zig` y las fórmulas versionadas `zig@<version>`) o MacPorts, junto a la fuente Static.
- **Directorios personalizados:** apunta FlyEnv a cualquier directorio que contenga tu propia compilación de Zig y aparecerá en la lista junto a las versiones gestionadas.

![Version Manager de Zig con las fuentes Static, Homebrew y MacPorts](https://oss.macphpstudy.com/image/features/zig-2.webp)

## Cambio de versión en la línea de comandos

La pestaña **Service** gestiona versiones y el PATH, no un proceso: Zig es un toolchain de compilador y FlyEnv no ejecuta ningún daemon de Zig. Tras el nombre se esconde una sencilla tabla de versiones instaladas.

- **Cambio de versión en la terminal:** decide a qué versión instalada resuelve el comando `zig` de la terminal. FlyEnv edita tu `PATH` añadiendo o eliminando el directorio de la versión, y marca si la entrada actual del PATH fue creada por FlyEnv o por otra herramienta — la [guía del entorno PATH del sistema](/es/guide/setup-system-path-environment) explica los detalles.
- **Alias y nota por versión:** un alias corto y una nota opcional por instalación mantienen distinguibles las compilaciones similares en la lista.
- **Mantenimiento:** las rutas de instalación se muestran en la tabla, y eliminar una versión que ya no necesitas es una acción de un solo clic.

## Toolchains de Zig a nivel de proyecto

En **Zig → Projects**, registra cada carpeta de proyecto y vincúlala a una versión específica de Zig, en lugar de depender de la versión que resulte estar en el PATH.

- **Toolchain por proyecto:** la elección de versión se escribe en un archivo `.flyenv` dentro del directorio del proyecto, de modo que las terminales y editores lanzados desde FlyEnv usan automáticamente el Zig correcto. Consulta la [guía del entorno de runtime a nivel de proyecto](/es/guide/project-level-runtime-environment) y la [función de runtimes por proyecto](/es/features/per-project-runtimes) para ver cómo funciona el mecanismo.
- **Ejecutar como servicio:** opcionalmente, ejecuta un proyecto directamente desde FlyEnv con un comando de inicio personalizado, un puerto TCP expuesto como enlace `http://127.0.0.1:<port>` y variables de entorno definidas en línea o desde un archivo. El interruptor de la barra lateral inicia o detiene todos los proyectos Zig habilitados como servicio a la vez.

![Lista de Projects de Zig con vinculación de versión de Zig por proyecto](https://oss.macphpstudy.com/image/features/zig-3.webp)

<FeatureRelatedLinks locale="es" slug="zig" />

## Notas de compatibilidad

FlyEnv gestiona la instalación de versiones de Zig, el cambio de PATH y los toolchains de proyecto; no incluye herramientas de sistema de compilación ni de paquetes más allá de lo que cada compilación de Zig proporciona por sí misma. Las fuentes de instalación disponibles varían según la plataforma — Homebrew y MacPorts son fuentes exclusivas de macOS, mientras que Windows usa la lista en línea Static — así que toma la [página de descarga](/es/download) y las notas de la versión actual como referencia de los paquetes compatibles.
