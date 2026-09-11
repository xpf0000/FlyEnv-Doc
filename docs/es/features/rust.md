---
layout: doc
titleTemplate: false
title: 'Gestor de toolchains de Rust para desarrollo local | FlyEnv'
description: 'Instala toolchains de Rust, cambia el cargo y rustc activos con rustup o PATH, y ejecuta proyectos Rust en local.'
head:
  - - meta
    - name: description
      content: 'Instala toolchains de Rust, cambia el cargo y rustc activos con rustup o PATH, y ejecuta proyectos Rust en local.'
  - - meta
    - property: og:title
      content: 'Gestor de toolchains de Rust para desarrollo local | FlyEnv'
  - - meta
    - property: og:description
      content: 'Instala toolchains de Rust, cambia el cargo y rustc activos con rustup o PATH, y ejecuta proyectos Rust en local.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/es/features/rust
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/es/features/rust
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Desarrollo local con Rust en FlyEnv

Rust es un lenguaje de programación de sistemas centrado en la seguridad de memoria y el rendimiento, utilizado para herramientas de línea de comandos, componentes de sistema, WebAssembly y servicios críticos en rendimiento — el almacenamiento de objetos compatible con S3 [RustFS](/es/features/rustfs) es uno de los servicios escritos en Rust que FlyEnv gestiona. El módulo Rust de FlyEnv mantiene el desarrollo local con Rust en un solo lugar: instala toolchains de Rust en paralelo, gestiona los toolchains y las plataformas de destino de rustup, decide a qué toolchain resuelven los comandos `cargo` y `rustc` de tu terminal, y vincula cada proyecto a su propio toolchain. El módulo tiene cuatro pestañas — Rust Projects, Service, Version Manager y Rustup — que cubren la instalación, el control del PATH, la integración con rustup y los runtimes de proyecto.

![Vista general del módulo Rust de FlyEnv](https://oss.macphpstudy.com/image/features/rust-1.webp)

## Gestión de toolchains de Rust

Instala toolchains de Rust desde **Rust → Version Manager** y mantén varios de ellos disponibles a la vez.

- **macOS:** instala desde una lista en línea Static de instaladores independientes `.tar.xz` o desde Homebrew (la fórmula `rust`); la fuente MacPorts no se ofrece para Rust.
- **Linux:** instala desde la lista en línea Static o desde Homebrew.
- **Windows:** instala desde la lista en línea Static.
- **Toolchains de rustup:** FlyEnv detecta automáticamente los toolchains instalados por rustup en `RUSTUP_HOME` / `~/.rustup/toolchains`, junto a los toolchains del propio directorio de la aplicación FlyEnv, de modo que las instalaciones gestionadas por rustup y por FlyEnv aparecen en una sola lista.
- **Directorios personalizados:** apunta FlyEnv a cualquier directorio que contenga tu propio toolchain de Rust y aparecerá junto a las versiones gestionadas.

La pestaña dedicada **Rustup** detecta una instalación de rustup existente (respetando `CARGO_HOME` y `RUSTUP_HOME`) u ofrece una instalación de rustup con un clic en una terminal integrada. Desde ahí puedes instalar, establecer como predeterminados o eliminar toolchains de rustup, y añadir o quitar plataformas de destino de compilación.

![Version Manager de Rust y gestión de toolchains de rustup](https://oss.macphpstudy.com/image/features/rust-2.webp)

## Cambio de versión en la línea de comandos

El nombre de la pestaña **Service** es una convención heredada: Rust no tiene ningún proceso en segundo plano dentro de FlyEnv, así que aquí no se inicia ni se detiene nada. Es una tabla de toolchains instalados combinada con la gestión del PATH.

- **Cambio de versión en la terminal:** elige a qué toolchain resuelven los comandos `cargo` y `rustc` de la terminal. Al cambiar, el directorio bin del toolchain se añade a tu `PATH` o se retira de él, y cada entrada está marcada para indicar si la estableció FlyEnv u otra herramienta. La [guía del entorno PATH del sistema](/es/guide/setup-system-path-environment) explica el mecanismo subyacente.
- **Alias y nota por versión:** etiqueta cada toolchain con un alias corto y una nota para que las compilaciones similares sigan siendo distinguibles en la lista.
- **Mantenimiento:** la tabla muestra la ruta de instalación de cada toolchain, y los toolchains sin uso pueden eliminarse directamente desde ella.

## Toolchains de Rust a nivel de proyecto

En **Rust → Projects**, registra cada carpeta de proyecto y vincúlala a un toolchain de Rust específico, en lugar de depender de la versión que resulte estar en el PATH.

- **Toolchain por proyecto:** la elección de versión se guarda en un archivo `.flyenv` dentro del directorio del proyecto, de modo que las terminales y editores lanzados desde FlyEnv usan automáticamente el Rust correcto. Consulta la [guía del entorno de runtime a nivel de proyecto](/es/guide/project-level-runtime-environment) y la [función de runtimes por proyecto](/es/features/per-project-runtimes) para ver cómo funciona el mecanismo.
- **Ejecutar como servicio:** opcionalmente, ejecuta un proyecto directamente desde FlyEnv con un comando de inicio personalizado, un puerto TCP expuesto como enlace `http://127.0.0.1:<port>`, variables de entorno definidas en línea o desde un archivo, y una opción sudo en macOS y Linux. El interruptor de la barra lateral inicia o detiene todos los proyectos Rust habilitados como servicio a la vez.
- **Abrir con herramientas:** salta desde una fila de proyecto a la terminal del sistema o abre el proyecto en RustRover con su entorno cargado.

![Lista de Rust Projects con vinculación de toolchain por proyecto](https://oss.macphpstudy.com/image/features/rust-3.webp)

<FeatureRelatedLinks locale="es" slug="rust" />

## Notas de compatibilidad

FlyEnv gestiona la instalación de toolchains de Rust, la integración con rustup, el cambio de PATH y los runtimes de proyecto; no proporciona editores de archivos de configuración a nivel de módulo ni visores de logs más allá de lo que cada toolchain de Rust ofrece por sí mismo. Las fuentes de instalación disponibles varían según la plataforma, así que toma la [página de descarga](/es/download) y las notas de la versión actual como referencia de los paquetes compatibles.
