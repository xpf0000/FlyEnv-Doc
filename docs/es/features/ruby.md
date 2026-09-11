---
layout: doc
titleTemplate: false
title: 'Gestor de versiones de Ruby para desarrollo local | FlyEnv'
description: 'Instala y cambia versiones de Ruby, define el binario ruby del terminal y ejecuta proyectos Ruby con runtimes por proyecto.'
head:
  - - meta
    - name: description
      content: 'Instala y cambia versiones de Ruby, define el binario ruby del terminal y ejecuta proyectos Ruby con runtimes por proyecto.'
  - - meta
    - property: og:title
      content: 'Gestor de versiones de Ruby para desarrollo local | FlyEnv'
  - - meta
    - property: og:description
      content: 'Instala y cambia versiones de Ruby, define el binario ruby del terminal y ejecuta proyectos Ruby con runtimes por proyecto.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/es/features/ruby
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/es/features/ruby
  - - link
    - rel: alternate
      hreflang: en
      href: https://flyenv.com/features/ruby
  - - link
    - rel: alternate
      hreflang: zh-CN
      href: https://flyenv.com/zh/features/ruby
  - - link
    - rel: alternate
      hreflang: id-ID
      href: https://flyenv.com/id/features/ruby
  - - link
    - rel: alternate
      hreflang: es-ES
      href: https://flyenv.com/es/features/ruby
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://flyenv.com/features/ruby
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Desarrollo local de Ruby con FlyEnv

Ruby es un lenguaje de programación dinámico y orientado a objetos, conocido por el desarrollo web, sobre todo a través del framework Ruby on Rails. El módulo Ruby de FlyEnv reúne el desarrollo local de Ruby en un solo lugar: instala varias versiones de Ruby, decide a cuál de ellas resuelve el comando `ruby` de tu terminal y vincula cada proyecto a su propio runtime. El módulo tiene tres pestañas —Ruby Projects, Service y Version Manager— centradas en la instalación de versiones, el control del PATH y los runtimes de los proyectos.

![Vista general del módulo Ruby de FlyEnv](https://oss.macphpstudy.com/image/features/ruby-1.webp)

## Gestión de versiones de Ruby

Instala versiones de Ruby en paralelo desde **Ruby → Version Manager** y mantenlas todas disponibles a la vez.

- **macOS:** instala desde Homebrew (la fórmula `ruby` y las fórmulas versionadas `ruby@x.y`) o MacPorts; FlyEnv también analiza automáticamente el directorio de bibliotecas de MacPorts en busca de instalaciones de Ruby existentes.
- **Linux:** instala desde Homebrew.
- **Windows:** instala desde una lista en línea Static de paquetes RubyInstaller.
- **Directorios personalizados:** apunta FlyEnv a cualquier directorio que contenga tu propia compilación de Ruby y aparecerá en la lista junto a las versiones gestionadas.

![Version Manager de Ruby con las fuentes Homebrew y MacPorts](https://oss.macphpstudy.com/image/features/ruby-2.webp)

## Cambio de versión en la línea de comandos

A pesar de su nombre, la pestaña **Service** no ejecuta ningún servicio —Ruby es un intérprete, así que no hay ningún daemon que FlyEnv tenga que gestionar. La pestaña es una tabla de versiones instaladas cuya función es el control del PATH.

- **Cambio de versión del terminal:** al seleccionar una versión aquí decides a qué instalación resuelve el comando `ruby` del terminal; FlyEnv añade el directorio bin de esa versión a tu `PATH` (o lo vuelve a quitar) e indica si la entrada activa del PATH proviene de FlyEnv o de otra herramienta. La [guía del entorno PATH del sistema](/es/guide/setup-system-path-environment) explica este mecanismo en detalle.
- **Alias y nota por versión:** cada instalación puede llevar un alias corto y una nota, de modo que las compilaciones casi idénticas sigan siendo fáciles de distinguir.
- **Mantenimiento:** cada fila muestra la ruta de instalación de la versión y ofrece una acción de eliminación para las versiones que ya no necesitas.

## Runtimes de Ruby por proyecto

En **Ruby → Projects**, registra cada carpeta de proyecto y vincúlala a una versión concreta de Ruby, en lugar de depender de la versión que por casualidad esté en el PATH.

- **Runtime por proyecto:** la elección de la versión se guarda en un archivo `.flyenv` dentro del directorio del proyecto, de modo que los terminales y editores lanzados desde FlyEnv usan automáticamente el Ruby correcto. Consulta la [guía del entorno de runtime por proyecto](/es/guide/project-level-runtime-environment) y la funcionalidad [Runtimes por proyecto](/es/features/per-project-runtimes) para ver cómo funciona el mecanismo, y las [demos en vídeo](/es/demos) para un recorrido por los runtimes de proyectos en acción.
- **Ejecutar como servicio:** opcionalmente, ejecuta un proyecto directamente desde FlyEnv con un comando de inicio personalizado, un puerto TCP expuesto como enlace `http://127.0.0.1:<port>`, variables de entorno definidas en línea o desde un archivo, y una opción de sudo en macOS y Linux. El interruptor de la barra lateral inicia o detiene a la vez todos los proyectos Ruby con el servicio activado.
- **Herramientas de apertura:** salta desde la fila de un proyecto al terminal del sistema o abre el proyecto en RubyMine con su entorno ya cargado.

![Lista de Ruby Projects con la vinculación de la versión de Ruby por proyecto](https://oss.macphpstudy.com/image/features/ruby-3.webp)

<FeatureRelatedLinks locale="es" slug="ruby" />

## Notas de compatibilidad

FlyEnv gestiona la instalación de versiones de Ruby, el cambio de PATH y los runtimes de los proyectos; no incluye gem, bundler ni herramientas de frameworks más allá de lo que cada compilación de Ruby proporciona por sí misma. Las fuentes de instalación disponibles difieren según la plataforma —no hay fuente Static en macOS ni Linux—, así que toma la [página de descarga](/es/download) y las notas de la versión actual como referencia de los paquetes soportados.
