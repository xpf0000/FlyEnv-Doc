---
layout: doc
titleTemplate: false
title: 'Servidor local de RabbitMQ con interfaz de administración | FlyEnv'
description: 'Ejecuta versiones de RabbitMQ con configuración gestionada, la interfaz del plugin de administración y logs por versión.'
head:
  - - meta
    - name: description
      content: 'Ejecuta versiones de RabbitMQ con configuración gestionada, la interfaz del plugin de administración y logs por versión.'
  - - meta
    - property: og:title
      content: 'Servidor local de RabbitMQ con interfaz de administración | FlyEnv'
  - - meta
    - property: og:description
      content: 'Ejecuta versiones de RabbitMQ con configuración gestionada, la interfaz del plugin de administración y logs por versión.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/es/features/rabbitmq
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/es/features/rabbitmq
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# RabbitMQ en FlyEnv

RabbitMQ es un broker de mensajes de código abierto: las aplicaciones le entregan mensajes a través de protocolos como AMQP, y él los enruta hacia colas para que otros servicios los consuman de forma asíncrona. Es una opción habitual para desacoplar servicios —trabajos en segundo plano, colas de tareas y flujos de trabajo basados en eventos—, como el driver de colas de una aplicación [Laravel](/es/solutions/laravel); para necesidades de colas más ligeras, [Redis](/es/features/redis) también puede servir como backend de colas. FlyEnv lo ejecuta como un broker local gestionado: instala versiones desde el Version Manager, inicia el broker con una configuración de entorno generada, activa el plugin de administración desde el primer momento y lee el log del servidor por cada versión mayor —todo desde las pestañas Service, Version Manager, Config File y Log del módulo RabbitMQ.

![Vista general del módulo RabbitMQ de FlyEnv](https://oss.macphpstudy.com/image/features/rabbitmq-1.webp)

## Gestión de versiones

Instala y conserva varias versiones de RabbitMQ desde **RabbitMQ → Version Manager**, y elige cuál ejecuta el servicio.

- **Fuentes de instalación por plataforma:** Homebrew (`rabbitmq`) y MacPorts (`rabbitmq-server`) en macOS, Homebrew en Linux y paquetes estáticos en Windows.
- **Versiones personalizadas:** añade cualquier directorio que contenga tu propia instalación de RabbitMQ; FlyEnv lo escanea y lista esas builds junto a las versiones gestionadas.
- **Una única versión activa del servicio:** la pestaña Service ejecuta una sola versión seleccionada como broker principal de RabbitMQ.

![Version Manager de RabbitMQ con las fuentes de instalación](https://oss.macphpstudy.com/image/features/rabbitmq-2.webp)

## Servicio y configuración

FlyEnv inicia el broker con `rabbitmq-server -detached`, apuntando `RABBITMQ_CONF_ENV_FILE` a un `rabbitmq-<major>.conf` generado (`rabbitmq-<major>.bat` en Windows) que fija el nodo en `NODE_IP_ADDRESS=127.0.0.1` y `NODENAME=rabbit@localhost`, junto con sus directorios de log y mnesia. El broker se convierte en daemon a través del epmd de [Erlang](/es/features/erlang), y FlyEnv detecta un arranque correcto vigilando el archivo pid del nodo. AMQP escucha en el puerto por defecto 5672.

Cada versión mayor obtiene su propio conjunto de archivos dentro del directorio RabbitMQ de FlyEnv, editables desde la pestaña **Config File** con un editor en bruto:

- **`rabbitmq-<major>.conf` / `.bat`:** la configuración de entorno generada con la que arranca el broker.
- **`rabbitmq-<major>-default.conf`:** la configuración por defecto de esa versión mayor.
- **`enabled_plugins-<major>`:** la lista de plugins activados, donde FlyEnv escribe `[rabbitmq_management].` para que el plugin de administración esté activo.

![Editor de archivos de configuración de RabbitMQ](https://oss.macphpstudy.com/image/features/rabbitmq-3.webp)

## Interfaz de administración (15672)

El plugin de administración se activa por ti: FlyEnv escribe `[rabbitmq_management].` en `enabled_plugins-<major>` (y en macOS también ejecuta `rabbitmq-plugins enable rabbitmq_management`), de modo que la consola está lista en cuanto el broker está en marcha.

- **Acceso con un clic:** la pestaña Service muestra un botón que abre la interfaz de administración en `http://localhost:15672/` siempre que el broker esté en ejecución.
- **Consola oficial:** las colas, exchanges, conexiones y usuarios se gestionan en la propia interfaz de administración de RabbitMQ; FlyEnv no añade ninguna interfaz de administración adicional.

![Botón de la interfaz de administración de RabbitMQ en la pestaña Service](https://oss.macphpstudy.com/image/features/rabbitmq-4.webp)

## Logs

La pestaña **Log** abre `log-<major>/rabbit@localhost.log` directamente dentro de FlyEnv. Como los logs se guardan por versión mayor, cada línea de RabbitMQ instalada conserva su propio archivo de log: la primera parada cuando una versión no arranca o una cola se comporta de forma inesperada.

![Visor del log del servidor RabbitMQ](https://oss.macphpstudy.com/image/features/rabbitmq-5.webp)

<FeatureRelatedLinks locale="es" slug="rabbitmq" />

## Notas de compatibilidad

En Windows, RabbitMQ requiere Erlang: FlyEnv resuelve `ERLANG_HOME` desde el entorno, el `PATH` o los directorios de la app e inicia `epmd.exe` automáticamente; si epmd no está en marcha, la comprobación de versión falla con un error "no epmd", por lo que debe existir una instalación de Erlang. RabbitMQ está disponible en macOS, Windows y Linux, pero las fuentes de instalación difieren: Homebrew y MacPorts en macOS, solo Homebrew en Linux y paquetes estáticos en Windows. La configuración se limita a cada versión mayor, y FlyEnv no ofrece ninguna interfaz de administración más allá de la consola de administración oficial ni integración con proyectos. Toma la lista de versiones dentro de la app y la [página de descarga](/es/download) como la fuente de verdad sobre lo que se puede instalar en tu máquina, y consulta las [demos](/es/demos) para ver el módulo en acción.
