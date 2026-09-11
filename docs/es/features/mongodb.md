---
layout: doc
titleTemplate: false
title: 'Servidor MongoDB local con interfaz DbGate | FlyEnv'
description: 'Ejecuta versiones de MongoDB con configuración y directorio de datos gestionados, además de una interfaz web DbGate con un solo clic.'
head:
  - - meta
    - name: description
      content: 'Ejecuta versiones de MongoDB con configuración y directorio de datos gestionados, además de una interfaz web DbGate con un solo clic.'
  - - meta
    - property: og:title
      content: 'Servidor MongoDB local con interfaz DbGate | FlyEnv'
  - - meta
    - property: og:description
      content: 'Ejecuta versiones de MongoDB con configuración y directorio de datos gestionados, además de una interfaz web DbGate con un solo clic.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/es/features/mongodb
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/es/features/mongodb
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Desarrollo local con MongoDB en FlyEnv

MongoDB es una base de datos de documentos de código abierto que almacena registros como documentos similares a JSON en lugar de filas en tablas. Es ideal para aplicaciones con modelos de datos flexibles o en evolución, como plataformas de contenido y backends de API. FlyEnv ejecuta MongoDB como un servicio local gestionado: instala versiones desde el **Version Manager**, inicia `mongod` con un `mongodb-<version>.conf` generado automáticamente, guarda los datos de cada versión en su propio directorio y lee el log del servidor sin salir de la aplicación. Un botón de DbGate con un solo clic añade una interfaz web completa para explorar y consultar tus bases de datos.

![Vista general del módulo MongoDB de FlyEnv](https://oss.macphpstudy.com/image/features/mongodb-1.webp)

## Gestión de versiones

Instala y mantén varias versiones de MongoDB en paralelo desde **MongoDB → Version Manager**, y elige cuál ejecuta el servicio.

- **Fuentes de instalación por plataforma:** Homebrew (`mongodb-community`, `mongodb-enterprise@x`) y MacPorts en macOS, Homebrew en Linux, y una lista estática en línea de paquetes `mongod.exe` listos para usar en Windows.
- **Versiones personalizadas:** añade cualquier directorio que contenga tu propia instalación de MongoDB; FlyEnv lo escanea y muestra esas compilaciones junto a las versiones gestionadas.
- **Una versión en ejecución a la vez:** la pestaña **Service** inicia la versión seleccionada como servicio de MongoDB; al iniciar otra versión se detiene la anterior.
- **Extra en Windows:** junto con `mongod.exe`, FlyEnv descarga el shell **mongosh**, que utiliza para apagar el servidor de forma controlada mediante `db.shutdownServer()`.

![Version Manager de MongoDB con fuentes Homebrew y MacPorts](https://oss.macphpstudy.com/image/features/mongodb-2.webp)

## Servicio y configuración

FlyEnv lanza el binario `mongod` real con `--config mongodb-<version>.conf --logpath mongodb-<version>.log --pidfilepath ...`. El archivo de configuración se genera a partir de una plantilla que vincula MongoDB únicamente a localhost (`127.0.0.1` y `::1`) y no define ningún puerto explícito, por lo que el servidor escucha en el puerto predeterminado **27017**. Cada versión almacena sus datos en su propio directorio `data-<version>` dentro de la carpeta MongoDB de FlyEnv, de modo que las versiones nunca comparten archivos de datos.

La pestaña **Config File** abre el `mongodb-<version>.conf` de la versión en un editor YAML en bruto, de modo que todas las opciones de `mongod` se pueden editar directamente.

![Editando mongodb.conf en el editor YAML en bruto](https://oss.macphpstudy.com/image/features/mongodb-3.webp)

## Logs

La pestaña **Log** abre el `mongodb-<version>.log` de la versión en ejecución dentro de FlyEnv. Como FlyEnv pasa `--logpath` explícitamente al iniciar, el log del servidor siempre queda en un lugar conocido: el primer sitio donde mirar cuando una versión no arranca o se rechaza una conexión.

## DbGate

El botón **DbGate** de la barra de herramientas de **Service** configura una interfaz web completa en un solo paso. Requiere una versión de Node seleccionada en el [módulo Node](/es/features/nodejs) de FlyEnv: FlyEnv la usa para instalar `dbgate-serve` mediante npm en su propio directorio y luego sirve DbGate en el puerto 3000 (buscando un puerto libre si es necesario). El acceso está protegido por autenticación básica HTTP: el usuario de inicio de sesión es `flyenv` con una contraseña generada, que se incluye en la URL que FlyEnv abre en tu navegador. La [guía de usuario y contraseña de bases de datos](/es/guide/database-user-password) explica cómo se gestionan las credenciales en los módulos de bases de datos de FlyEnv.

![Interfaz web de DbGate abierta desde el módulo MongoDB](https://oss.macphpstudy.com/image/features/mongodb-4.webp)

<FeatureRelatedLinks locale="es" slug="mongodb" />

## Notas de compatibilidad

FlyEnv gestiona el runtime local de MongoDB, su configuración generada y sus directorios de datos por versión; no garantiza que todas las versiones de MongoDB estén disponibles en todos los sistemas operativos o fuentes de instalación. Las versiones que ofrece el **Version Manager** dependen de tu plataforma (Homebrew y MacPorts en macOS, Homebrew en Linux, paquetes estáticos en Windows) y de lo que publican esas fuentes. DbGate depende además de una versión de Node instalada a través de FlyEnv. Toma la lista de versiones de la aplicación y la [página de descarga](/es/download) como referencia de lo que se puede instalar en tu equipo. Para un stack de aplicación completo basado en una base de datos local, consulta la solución [Strapi](/es/solutions/strapi) y mira las [demos](/es/demos) del módulo en acción.
