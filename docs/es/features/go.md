---
layout: doc
titleTemplate: false
title: 'Gestor de versiones de Go y runtimes de proyecto | FlyEnv'
description: 'Instala y cambia versiones de Go con builds estáticos, Homebrew o GVM, y ejecuta proyectos Go con runtimes por proyecto.'
head:
  - - meta
    - name: description
      content: 'Instala y cambia versiones de Go con builds estáticos, Homebrew o GVM, y ejecuta proyectos Go con runtimes por proyecto.'
  - - meta
    - property: og:title
      content: 'Gestor de versiones de Go y runtimes de proyecto | FlyEnv'
  - - meta
    - property: og:description
      content: 'Instala y cambia versiones de Go con builds estáticos, Homebrew o GVM, y ejecuta proyectos Go con runtimes por proyecto.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/es/features/go
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/es/features/go
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Desarrollo local con Go en FlyEnv

Go es un lenguaje de programación compilado y de tipado estático, muy usado para servicios de red, herramientas de línea de comandos y software de infraestructura cloud. FlyEnv mantiene el desarrollo local con Go en una sola app: instala varias versiones de Go en paralelo, decide a cuál resuelve el comando `go` de tu terminal, integra GVM en macOS y Linux, y vincula cada proyecto a su propio runtime de Go. El módulo Go tiene cinco pestañas —Proyectos Go, Servicio, Gestor de versiones, Nuevo proyecto y GVM— que cubren la instalación de versiones, el control del PATH, los runtimes de proyecto y la creación de esqueletos de proyecto.

![Vista general del módulo Go de FlyEnv](https://oss.macphpstudy.com/image/features/go-1.webp)

## Gestión de versiones de Go

Instala versiones de Go en paralelo desde **Go → Gestor de versiones** y tenlas todas disponibles a la vez.
[gradle.md](gradle.md)
- **Builds estáticos en todas las plataformas:** FlyEnv descarga las versiones oficiales de Go —archivos `.tar.gz` de la lista de releases de go.dev en macOS y Linux, paquetes zip en Windows— y los descomprime en su propio directorio gestionado.
- **Fuentes de gestores de paquetes:** en macOS también puedes instalar la fórmula `go` desde Homebrew o MacPorts; en Linux, Homebrew está disponible como fuente adicional.
- **Directorios personalizados:** apunta FlyEnv a cualquier directorio que contenga tu propio build de Go y aparecerá en la lista junto a las versiones gestionadas.
- **Detección de GVM:** en macOS y Linux, FlyEnv encuentra automáticamente las versiones de Go instaladas mediante GVM y las lista junto a las gestionadas.

![Gestor de versiones de Go con fuentes Static, Homebrew y MacPorts](https://oss.macphpstudy.com/image/features/go-2.webp)

En macOS y Linux, la pestaña **GVM** dedicada se integra directamente con una instalación de GVM existente: FlyEnv detecta GVM en `~/.gvm` o mediante `GVM_ROOT`, ofrece una instalación de GVM con un clic en su terminal integrado cuando no hay ninguna, y lista las versiones gestionadas por GVM con acciones de instalar y usar.

![Pestaña GVM con las versiones de Go gestionadas por GVM](https://oss.macphpstudy.com/image/features/go-3.webp)

## Cambio de versión en la línea de comandos

El nombre **Servicio** resulta engañoso para Go: esta pestaña nunca inicia ni detiene nada, porque FlyEnv no ejecuta ningún demonio de Go. Lo que obtienes es una tabla de versiones instaladas con gestión del PATH integrada.

- **Cambio de versión del terminal:** elige a qué versión instalada debe resolver el comando `go` de tu terminal. FlyEnv reescribe tu `PATH` añadiendo o quitando el directorio bin de la versión, y etiqueta cada entrada para que sepas si la puso FlyEnv u otra herramienta.
- **Alias y nota por versión:** asigna un alias corto y una nota de texto libre a cualquier instalación, para distinguir builds similares en la lista.
- **Mantenimiento:** las rutas de instalación se muestran directamente en la tabla, y las versiones que ya no necesitas se pueden eliminar desde el mismo lugar.

## Runtimes de Go por proyecto

En **Go → Proyectos**, registra cada carpeta de proyecto y vincúlala a una versión de Go concreta, en lugar de depender de la versión que haya en el PATH. La [guía del entorno de runtime por proyecto](/es/guide/project-level-runtime-environment) explica el mecanismo en detalle.

- **Runtime por proyecto:** la versión elegida se guarda en un archivo `.flyenv` dentro del directorio del proyecto, de modo que los terminales y editores lanzados desde FlyEnv usan automáticamente el toolchain de Go correcto.
- **Ejecutar como servicio:** opcionalmente, ejecuta un proyecto directamente desde FlyEnv con un comando o archivo de ejecución personalizado, un puerto de proyecto expuesto como enlace `http://127.0.0.1:<port>`, variables de entorno definidas en línea o desde un archivo env, y un interruptor de sudo en macOS y Linux. Para poner ese puerto detrás de un dominio local con HTTPS, la [guía de proxy inverso](/es/guide/reverse-proxy-nestjs-multi-servers) cubre la configuración de Nginx, Apache y Caddy.
- **Abrir con herramientas:** salta desde una fila de proyecto al terminal del sistema o abre el proyecto en GoLand con su entorno cargado.
- **Plantillas de Nuevo proyecto:** crea el esqueleto de un módulo simple con `go mod init` o un proyecto basado en Gin, Echo, Fiber, Iris, GoFrame o Buffalo sin salir de la app. La [solución Gitea](/es/solutions/gitea) muestra una aplicación Go de nivel de producción servida mediante la gestión de sitios de FlyEnv.

![Lista de Proyectos Go con vinculación de versión de Go por proyecto](https://oss.macphpstudy.com/image/features/go-4.webp)

Para ejecutar estos proyectos como servicios persistentes en segundo plano, consulta la guía sobre [desplegar proyectos Node.js, Python y Go sin Docker](/es/guide/deploy-nodejs-python-go-without-docker).

<FeatureRelatedLinks locale="es" slug="go" />

## Notas de compatibilidad

FlyEnv gestiona la instalación de versiones de Go, el cambio de PATH y los runtimes de proyecto; no incluye herramientas de frameworks más allá de lo que proporcionan cada build de Go y el propio ecosistema de módulos de Go. Las fuentes de instalación disponibles varían según la plataforma —la pestaña GVM y la detección automática de GVM solo existen en macOS y Linux, mientras que Windows usa builds estáticos—, así que toma la [página de descarga](/es/download) y las notas de la versión actual como referencia de los paquetes soportados.
