---
layout: doc
titleTemplate: false
title: 'Máquinas, Compose y contenedores de Podman | FlyEnv'
description: 'Gestiona máquinas Podman, genera stacks de Compose y descarga imágenes y ejecuta contenedores desde FlyEnv.'
head:
  - - meta
    - name: description
      content: 'Gestiona máquinas Podman, genera stacks de Compose y descarga imágenes y ejecuta contenedores desde FlyEnv.'
  - - meta
    - property: og:title
      content: 'Máquinas, Compose y contenedores de Podman | FlyEnv'
  - - meta
    - property: og:description
      content: 'Gestiona máquinas Podman, genera stacks de Compose y descarga imágenes y ejecuta contenedores desde FlyEnv.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/es/features/podman
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/es/features/podman
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Gestión de contenedores Podman con FlyEnv

Podman es un motor de contenedores de código abierto para construir y ejecutar contenedores OCI, compatible con imágenes de Docker y archivos Compose, y capaz de funcionar sin root y sin un daemon en segundo plano. FlyEnv convierte Podman en un espacio de trabajo visual: crea y ajusta máquinas Podman, genera proyectos Compose desde una biblioteca de stacks, descarga imágenes del catálogo oficial y ejecuta e inspecciona contenedores, todo sin memorizar opciones de la CLI. FlyEnv detecta automáticamente el Podman de tu sistema y, en macOS y Linux con Homebrew, puede instalarlo con un clic desde el terminal integrado. Para una guía paso a paso, consulta la [guía del módulo Podman](/es/guide/podman-module); para ver cómo este enfoque basado en contenedores se compara con los módulos nativos de FlyEnv, consulta [FlyEnv vs Docker y XAMPP](/es/guide/flyenv-vs-docker-xampp).

![Vista general del módulo Podman de FlyEnv con la lista de máquinas](https://oss.macphpstudy.com/image/features/podman-1.webp)

## Gestión de máquinas

El panel izquierdo lista todas las máquinas Podman, con acciones para añadir, editar, iniciar, detener y eliminar máquinas. Cada máquina se abre en sus propias pestañas: Dashboard, Compose, Image y Container.

- **Añadir y editar máquinas:** define el nombre de la máquina, el número de CPU (1–16 núcleos), la memoria (512–32768 MB), el tamaño del disco y si la máquina es la predeterminada.
- **Modo rootful:** ejecuta una máquina como rootful cuando tus cargas de trabajo lo necesiten.
- **Rosetta en macOS:** activa Rosetta en una máquina para ejecutar imágenes x86_64 en Apple Silicon.
- **Datos de conexión remota:** configura la ruta de identidad SSH y el nombre de usuario remoto por máquina.
- **Linux se ejecuta de forma nativa:** en Linux, Podman no necesita máquina virtual, así que las acciones de máquina se ocultan y los contenedores se ejecutan directamente sobre el host.
- **Configuración sencilla:** FlyEnv detecta el binario `podman` del sistema; si no está y Homebrew está disponible en macOS o Linux, un botón de instalación ejecuta la instalación con brew en el terminal integrado.

![Añadiendo una máquina Podman con ajustes de CPU, memoria y disco](https://oss.macphpstudy.com/image/features/podman-2.webp)

## Proyectos Compose y el generador de stacks

La pestaña **Compose** gestiona tus proyectos docker-compose existentes —FlyEnv mantiene una lista guardada de proyectos y comprueba su estado de ejecución— e incluye un generador **Compose Build** que ensambla un stack mediante formularios por servicio en lugar de YAML escrito a mano.

El generador cubre alrededor de 29 stacks tecnológicos, incluidos [PHP](/es/features/php), [Nginx](/es/features/nginx), Apache, Caddy, [MySQL](/es/features/mysql), MariaDB, PostgreSQL, MongoDB, Redis, Memcached, RabbitMQ, Elasticsearch, Meilisearch, MinIO, Consul, Etcd, Mailpit, NodeJS, Bun, Deno, Go, Java, Python, Ruby, Rust, Perl, Erlang y Tomcat. Cada servicio tiene su propio formulario, de modo que solo configuras las opciones que ese stack expone. Las operaciones de Compose requieren que `docker-compose` o el plugin `docker compose` estén instalados.

![Generador Compose Build con formularios de stack por servicio](https://oss.macphpstudy.com/image/features/podman-3.webp)

## Imágenes

La pestaña **Image** es un cliente visual de descarga construido sobre el catálogo oficial de imágenes.

- **Catálogo oficial de imágenes:** explora las imágenes oficiales estándar sin salir de la app.
- **Obtención de tags en línea:** los tags de cada imagen se obtienen en línea, así puedes elegir una versión exacta en lugar de adivinar nombres de tag.
- **Descarga con un clic:** descarga la imagen y el tag seleccionados directamente en el almacenamiento local de imágenes de la máquina.

![Descargando una imagen con el catálogo oficial y los tags en línea](https://oss.macphpstudy.com/image/features/podman-4.webp)

## Contenedores

La pestaña **Container** cubre el ciclo de vida diario de los contenedores en la máquina seleccionada.

- **Crea contenedores** desde cualquier imagen descargada mediante un formulario en lugar de un largo comando `podman run`.
- **Inspecciona y previsualiza** la configuración y el estado de cada contenedor.
- **Exec en el terminal integrado:** abre una shell dentro de un contenedor en ejecución usando el [terminal integrado](/es/features/cli-terminal) de FlyEnv, de modo que la depuración ocurre donde vive el contenedor.

![Lista de contenedores con acciones de inspección y exec en terminal](https://oss.macphpstudy.com/image/features/podman-5.webp)

<FeatureRelatedLinks locale="es" slug="podman" />

## Notas de compatibilidad

FlyEnv opera Podman a través de la CLI `podman` del sistema; no incluye un gestor de versiones de Podman ni el propio runtime. En macOS y Linux, la instalación con un clic se ofrece cuando Homebrew está presente; los usuarios de Windows instalan Podman por su cuenta. Las acciones de máquina Podman aplican a macOS y Windows; en Linux, Podman se ejecuta de forma nativa sin máquina virtual. Consulta la [página de Descargas](/es/download) y las notas de la versión actual para conocer los detalles de soporte por plataforma.
