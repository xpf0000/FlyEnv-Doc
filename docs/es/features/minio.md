---
layout: doc
titleTemplate: false
title: 'Almacenamiento de objetos local compatible con S3 con MinIO | FlyEnv'
description: 'Ejecuta versiones de MinIO con configuración visual, directorio de datos por versión y la MinIO Console en el puerto 9001.'
head:
  - - meta
    - name: description
      content: 'Ejecuta versiones de MinIO con configuración visual, directorio de datos por versión y la MinIO Console en el puerto 9001.'
  - - meta
    - property: og:title
      content: 'Almacenamiento de objetos local compatible con S3 con MinIO | FlyEnv'
  - - meta
    - property: og:description
      content: 'Ejecuta versiones de MinIO con configuración visual, directorio de datos por versión y la MinIO Console en el puerto 9001.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/es/features/minio
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/es/features/minio
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Almacenamiento de objetos local con FlyEnv

MinIO es un servidor de almacenamiento de objetos de código abierto que habla la API de Amazon S3. Los desarrolladores recurren a él cuando una aplicación necesita almacenamiento compatible con S3 durante el desarrollo y las pruebas, sin aprovisionar buckets reales en la nube. FlyEnv ejecuta MinIO como un servicio local gestionado, dándote ese almacenamiento sin Docker ni configuración manual. Instala versiones de MinIO desde la aplicación, edita `minio.conf` mediante un formulario de ajustes visual, asigna a cada versión su propio directorio de datos y abre la MinIO Console en tu navegador con un solo clic.

![Vista general del módulo MinIO de FlyEnv](https://oss.macphpstudy.com/image/features/minio-1.webp)

## Gestión de versiones

Instala y mantén varias versiones de MinIO desde **MinIO → Version Manager**, y elige cuál ejecutará el servicio.

- **Fuentes de instalación:** una lista en línea estática de builds de MinIO listos para usar, además de Homebrew en las plataformas que lo ofrecen.
- **Versiones personalizadas:** añade cualquier directorio que contenga tu propia instalación de MinIO; FlyEnv muestra esos builds junto a las versiones gestionadas.
- **Instalaciones gestionadas:** tras la instalación en macOS, FlyEnv corrige los permisos del binario (`chmod 0755`) y elimina el atributo de cuarentena para que el servidor pueda arrancar de inmediato.

![Version Manager de MinIO con fuentes de instalación](https://oss.macphpstudy.com/image/features/minio-2.webp)

## Servicio y configuración

La pestaña Service inicia la versión de MinIO seleccionada como un proceso real en primer plano: `minio server <dataDir>` con los flags `--address`, `--console-address` y `--certs-dir` generados a partir de tu configuración. Un archivo pid fijo mantiene el módulo limitado a una única instancia en ejecución, y el interruptor de la barra lateral (también disponible en la bandeja del sistema) inicia o detiene el servicio.

- **Directorio de datos por versión:** cada versión de MinIO almacena sus objetos en su propio directorio (por defecto `minio/data` dentro de la carpeta MinIO de FlyEnv). Cámbialo con el selector de carpeta de la barra de herramientas de Service; la elección se recuerda por versión.
- **Formulario visual Common Settings:** la pestaña Config File edita `minio/minio.conf` mediante un formulario agrupado de unas 30 claves repartidas en Network, Security, Storage, Cluster, Performance y General: `MINIO_ADDRESS`, `MINIO_CONSOLE_ADDRESS`, `MINIO_ROOT_USER` y `MINIO_ROOT_PASSWORD` (por defecto `minioadmin`/`minioadmin`), el directorio de certificados, la activación del navegador, las clases de erasure code, [etcd](/es/features/etcd) y opciones de ajuste de la API.
- **Editor sin formato:** cambia a la vista de código fuente completa de `minio.conf` para cualquier cosa que el formulario no cubra; las líneas `MINIO_*` se aplican al servidor en el siguiente arranque.

![Archivo de configuración de MinIO con el formulario Common Settings](https://oss.macphpstudy.com/image/features/minio-3.webp)

## MinIO Console

MinIO incluye su propia Console web, y FlyEnv la conecta por ti. La dirección de la consola se normaliza a `127.0.0.1:9001` por defecto (ajustable mediante `MINIO_CONSOLE_ADDRESS` en la configuración), y el botón Console de la barra de herramientas de Service la abre directamente en tu navegador: sin instalación aparte ni búsqueda de puertos. Inicia sesión con las credenciales root de la configuración para gestionar buckets, objetos y políticas de acceso a través de la interfaz web oficial de MinIO.

![MinIO Console](https://oss.macphpstudy.com/image/features/minio-4.webp)

## Logs

La pestaña Log abre los archivos de log de cada versión directamente dentro de FlyEnv: `minio-<version>-start-out.log` para la salida estándar y `minio-<version>-start-error.log` para los errores. Cuando una versión no consigue arrancar, el log de errores es el primer lugar donde mirar: los conflictos de puertos y los problemas con el directorio de datos aparecen ahí de inmediato.

![Visor de logs por versión de MinIO](https://oss.macphpstudy.com/image/features/minio-5.webp)

<FeatureRelatedLinks locale="es" slug="minio" />

## Notas de compatibilidad

El módulo MinIO ejecuta una única instancia a la vez —una versión, un directorio de datos, una dirección de consola—, así que cambia de versión o de directorio de datos desde la pestaña Service en lugar de iniciar varios servidores. Las versiones que ofrece Version Manager dependen de la lista en línea estática y de lo que Homebrew publique para tu plataforma; MacPorts no es una fuente de instalación para MinIO. FlyEnv gestiona el proceso local de MinIO, su archivo de configuración y sus directorios de datos; el contenido de los buckets, las políticas de acceso y todo lo que ocurre dentro de la API compatible con S3 pertenece al propio MinIO. Las aplicaciones que hablan la API de S3 —el proveedor de subidas de un sitio [Strapi](/es/solutions/strapi) o el almacenamiento externo de una instancia de [Nextcloud](/es/solutions/nextcloud), por ejemplo— pueden apuntar a este endpoint local durante el desarrollo, y [RustFS](/es/features/rustfs) está disponible como módulo alternativo compatible con S3 si prefieres una implementación en Rust. Toma la lista de versiones de la aplicación y la [página de descarga](/es/download) como referencia sobre lo que se puede instalar, y consulta las [demos](/es/demos) para ver un recorrido del módulo en acción.
