---
layout: doc
titleTemplate: false
title: 'Servidor local de Redis con la interfaz web Redis Commander | FlyEnv'
description: 'Ejecuta versiones de Redis con configuración visual, logs y una interfaz web Redis Commander con un solo clic.'
head:
  - - meta
    - name: description
      content: 'Ejecuta versiones de Redis con configuración visual, logs y una interfaz web Redis Commander con un solo clic.'
  - - meta
    - property: og:title
      content: 'Servidor local de Redis con la interfaz web Redis Commander | FlyEnv'
  - - meta
    - property: og:description
      content: 'Ejecuta versiones de Redis con configuración visual, logs y una interfaz web Redis Commander con un solo clic.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/es/features/redis
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/es/features/redis
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Desarrollo local con Redis en FlyEnv

Redis es un almacén de datos en memoria de código abierto, usado habitualmente como caché, almacén de sesiones, backend de colas o canal pub/sub en aplicaciones web —donde un daemon más ligero y dedicado solo a caché como [Memcached](/es/features/memcached) no es suficiente. FlyEnv lo convierte en un servicio local gestionado que controlas desde una sola ventana: instala varias versiones, ejecuta `redis-server` con una configuración por versión generada automáticamente, ajusta el puerto y la memoria desde un formulario visual, vigila el log del servidor y explora tus claves en una interfaz web Redis Commander con un solo clic. Si eres nuevo en FlyEnv, la [guía de primeros pasos](/es/guide/getting-started) muestra cómo se instalan y se inician los módulos.

![Vista general del módulo Redis de FlyEnv](https://oss.macphpstudy.com/image/features/redis-1.webp)

## Gestión de versiones

Instala y conserva varias versiones de Redis en paralelo desde **Redis → Version Manager**, y elige cuál ejecuta el servicio.

- **Fuentes de instalación por plataforma:** Homebrew (`redis`, `redis@x.y`) y MacPorts en macOS, Homebrew en Linux y una lista estática de builds de Windows listas para usar en Windows.
- **Versiones personalizadas:** añade cualquier directorio que contenga tu propia instalación de Redis; FlyEnv lo escanea en busca del binario `redis-server` y lista esas builds junto a las versiones gestionadas.
- **Una sola versión en ejecución a la vez:** al iniciar una versión se detiene cualquier otra versión de Redis en ejecución, de modo que el servicio siempre sirve una única build conocida.

![Version Manager de Redis con las fuentes de instalación](https://oss.macphpstudy.com/image/features/redis-2.webp)

## Servicio y configuración

FlyEnv lanza el binario real de `redis-server` con un archivo de configuración generado —`redis-server redis-<major>.conf`— y rastrea su archivo pid para un arranque y una parada limpios. La configuración por defecto escucha en el puerto 6379 y guarda los datos de cada versión mayor en su propio directorio `db-<major>`.

Cada versión mayor obtiene su propio `redis-<major>.conf`, editable desde la pestaña **Config File**:

- **Formulario de ajustes comunes:** ajusta las opciones que se cambian con frecuencia —port, timeout, maxclients, databases, `requirepass` y `maxmemory`— desde un formulario visual en lugar de editar el archivo a mano.
- **Editor en bruto:** cambia a la vista de código fuente completa para todo lo que el formulario no cubre, con un `redis-<major>-default.conf` conservado al lado como referencia por defecto.

![Archivo de configuración de Redis con el formulario de ajustes comunes](https://oss.macphpstudy.com/image/features/redis-3.webp)

## Logs

La pestaña **Log** abre el `redis-<major>.log` del servidor directamente dentro de FlyEnv: la primera parada cuando una versión no arranca o se comporta de forma inesperada. La salida del log del proceso auxiliar de Redis Commander se captura por separado, de modo que los problemas de arranque de la interfaz web nunca se mezclan con el log del servidor Redis.

## Redis Commander

El botón **Redis Commander** aparece en la barra de herramientas de Service siempre que Redis esté en ejecución y abre una interfaz web completa para explorar claves, editar valores y ejecutar comandos contra el servidor local.

- **Configuración con un clic:** en la primera apertura, FlyEnv instala el paquete `redis-commander` con npm y lo inicia por ti, sin herramientas manuales. Utiliza la versión de [Node.js](/es/features/nodejs) seleccionada en FlyEnv, así que [gestionar varias versiones de Node.js](/es/guide/manage-multiple-node-php-versions) también controla sobre qué runtime se lanza la interfaz web.
- **Conexión preconfigurada:** Redis Commander se conecta automáticamente al servidor en ejecución, con el puerto y la contraseña de `requirepass` leídos de la configuración actual de Redis.
- **Seguro por defecto:** la interfaz se ejecuta en 127.0.0.1 detrás de autenticación HTTP, y FlyEnv abre tu navegador con un enlace de inicio de sesión automático de un solo uso. Redis Commander se detiene automáticamente cuando se detiene el servicio de Redis.

Combina muy bien con el trabajo con frameworks en local —por ejemplo, inspeccionar las claves de caché y de colas de un proyecto [Laravel](/es/solutions/laravel) mientras se ejecuta.

![Interfaz web de Redis Commander abierta desde FlyEnv](https://oss.macphpstudy.com/image/features/redis-4.webp)

<FeatureRelatedLinks locale="es" slug="redis" />

## Notas de compatibilidad

FlyEnv gestiona el runtime local de Redis, sus archivos de configuración y sus directorios de datos; no garantiza que cada versión de Redis esté disponible en cada sistema operativo o fuente de instalación. Las versiones ofrecidas en Version Manager dependen de tu plataforma —Homebrew y MacPorts en macOS, Homebrew en Linux, builds estáticas en Windows— y de lo que esas fuentes publican. Los archivos de configuración son por versión mayor (`redis-<major>.conf`), de modo que ajustes como el puerto, `requirepass` y `maxmemory` se guardan por separado para Redis 7 y Redis 8. Redis Commander requiere que una versión de Node.js esté instalada y seleccionada en FlyEnv antes de su primer lanzamiento. Toma la lista de versiones dentro de la app y la [página de descarga](/es/download) como la fuente de verdad sobre lo que se puede instalar en tu máquina.
