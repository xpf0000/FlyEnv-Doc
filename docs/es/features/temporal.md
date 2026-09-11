---
layout: doc
titleTemplate: false
title: 'Servidor Temporal local con UI web | FlyEnv'
description: 'Ejecuta un servidor Temporal local con persistencia en SQLite, namespaces creados automáticamente y una UI web gestionada.'
head:
  - - meta
    - name: description
      content: 'Ejecuta un servidor Temporal local con persistencia en SQLite, namespaces creados automáticamente y una UI web gestionada.'
  - - meta
    - property: og:title
      content: 'Servidor Temporal local con UI web | FlyEnv'
  - - meta
    - property: og:description
      content: 'Ejecuta un servidor Temporal local con persistencia en SQLite, namespaces creados automáticamente y una UI web gestionada.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/es/features/temporal
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/es/features/temporal
  - - link
    - rel: alternate
      hreflang: en
      href: https://flyenv.com/features/temporal
  - - link
    - rel: alternate
      hreflang: zh-CN
      href: https://flyenv.com/zh/features/temporal
  - - link
    - rel: alternate
      hreflang: id-ID
      href: https://flyenv.com/id/features/temporal
  - - link
    - rel: alternate
      hreflang: es-ES
      href: https://flyenv.com/es/features/temporal
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://flyenv.com/features/temporal
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Desarrollo con Temporal en local con FlyEnv

Temporal es una plataforma de orquestación de flujos de trabajo duraderos: persiste el estado de los flujos de trabajo para que los procesos largos de varios pasos sobrevivan a fallos, reintentos y despliegues. Las aplicaciones modelan sagas, tareas programadas y otros procesos de negocio como código, en lugar de unir a mano [colas](/es/features/rabbitmq) y [tareas cron](/es/features/cron-jobs). FlyEnv convierte la configuración de Temporal en local en un servicio de un solo clic: instala `temporal-server`, genera una configuración lista para usar respaldada por SQLite, crea el namespace `default` por ti tras el primer arranque y puede lanzar la UI web de Temporal como un proceso acompañante gestionado, todo vinculado a `127.0.0.1` para un desarrollo local seguro.

![Vista general del módulo Temporal de FlyEnv con la pestaña Service](https://oss.macphpstudy.com/image/features/temporal-1.webp)

## Gestión de versiones

Instala versiones del servidor Temporal desde **Temporal → Version Manager** y mantén varias de ellas en paralelo.

- **Builds estáticos en línea:** FlyEnv obtiene las versiones de `temporal-server` disponibles desde su lista de versiones en línea para tu sistema operativo y arquitectura. Los archivos comprimidos se desempaquetan automáticamente, corrigiendo los permisos de ejecución y ejecutando una comprobación de `--version` tras la instalación.
- **Directorios personalizados:** apunta FlyEnv a una carpeta que contenga tu propio binario `temporal-server` y aparecerá listado junto a las instalaciones gestionadas.
- **Solo una versión en ejecución a la vez:** inicia, detén o reinicia la versión seleccionada desde la pestaña Service o desde el interruptor de la barra lateral; para cambiar de versión primero hay que detener la que está en ejecución.

![Version Manager de Temporal con la lista de versiones estáticas en línea](https://oss.macphpstudy.com/image/features/temporal-2.webp)

## Servicio y configuración

Al iniciar Temporal se ejecuta `temporal-server` con un archivo de configuración por versión que FlyEnv genera en el primer uso: `config/temporal-v<version>.yaml`.

- **Persistencia en SQLite desde el primer momento:** la configuración generada usa un almacenamiento dual en SQLite — `default.db` para el almacén principal y `visibility.db` para los datos de visibilidad — con la creación del esquema gestionada automáticamente, por lo que no se necesita ninguna base de datos externa.
- **Puertos solo locales:** el endpoint gRPC del frontend escucha en el **7233**, HTTP en el 7243, matching en el 7235, history en el 7234 y pprof en el 7936 — todos los servicios vinculados a `127.0.0.1`.
- **Creación automática del namespace:** después de que el servidor arranque, FlyEnv usa el binario más reciente del CLI de Temporal instalado para registrar el namespace `default`, reintentando varias veces mientras el servidor termina de iniciarse.
- **Configuración dual servidor / UI:** la pestaña Config File tiene dos subpestañas — **Server** edita `config/temporal-v<version>.yaml`, **UI** edita `config/temporal-ui.yaml` — ambas en un editor YAML en crudo con una copia `.default` guardada como referencia. FlyEnv solo crea los archivos que falten; nunca sobrescribe tus cambios.

![Pestaña Config File de Temporal con las subpestañas Server y UI](https://oss.macphpstudy.com/image/features/temporal-3.webp)

## UI web de Temporal

La pestaña Service incluye un botón **Temporal UI** que gestiona la UI web oficial de Temporal como un proceso independiente.

- **Descarga bajo demanda:** la UI web la sirve el binario independiente `ui-server`, que no está ligado a ninguna versión del servidor Temporal. La primera vez que lo abres, FlyEnv consulta la última release de `temporalio/ui-server` en GitHub y descarga el recurso correspondiente a tu plataforma (macOS, Linux o Windows; amd64 o arm64).
- **Ciclo de vida gestionado:** FlyEnv inicia `ui-server` con su propio archivo pid y su propia configuración (`temporal-ui.yaml`: puerto **8233**, endpoint gRPC `127.0.0.1:7233`) y luego abre `http://127.0.0.1:8233/` en tu navegador.
- **Se detiene con el servidor:** al apagar el servicio Temporal también se detiene el proceso de la UI, de modo que no queda nada ejecutándose.
- El botón muestra estados de carga y de error mientras el servidor de la UI se está instalando o iniciando.

![UI web de Temporal abierta desde FlyEnv en el navegador](https://oss.macphpstudy.com/image/features/temporal-4.webp)

## Logs

La pestaña Log ofrece cuatro visores para que puedas distinguir la salida del servidor de la de la UI:

- **Server output** — salida estándar del `temporal-server` en ejecución.
- **Server errors** — flujo de errores del servidor, el primer lugar donde mirar cuando falla un arranque.
- **UI output** — salida estándar del proceso `ui-server`.
- **UI errors** — flujo de errores de la UI web, útil cuando la UI no puede alcanzar el endpoint gRPC en el 7233.

![Visor de logs de Temporal con la selección de logs del servidor y de la UI](https://oss.macphpstudy.com/image/features/temporal-5.webp)

<FeatureRelatedLinks locale="es" slug="temporal" />

## Notas de compatibilidad

El módulo Temporal se instala únicamente desde builds estáticos en línea — no hay fuente de Homebrew ni de MacPorts — en macOS, Windows y Linux, y la lista exacta de versiones depende de lo que se publique para tu plataforma y arquitectura. Descargar el binario `ui-server` de la UI web requiere acceso de red a las releases de GitHub. Todos los puertos del servidor y de la UI están vinculados a `127.0.0.1`; ajusta las configuraciones YAML si necesitas direcciones diferentes. La creación automática del namespace depende de que haya un binario del CLI de Temporal instalado en FlyEnv.

Si prefieres un servidor de desarrollo todo en uno, el módulo independiente **Temporal CLI** de FlyEnv ejecuta `temporal server start-dev` — el modo de desarrollo integrado de Temporal con su propia UI web integrada (puertos por defecto 7233/8233, archivo SQLite `dev.db`) — sin necesidad de descargar una UI aparte. Los workers escritos en Node.js, Python o Go se conectan al endpoint del frontend en el 7233; la guía sobre [desplegar servicios de Node.js, Python y Go sin Docker](/es/guide/deploy-nodejs-python-go-without-docker) explica cómo ejecutarlos en local junto al servidor. Consulta las [demos](/es/demos) para ver recorridos por los módulos de servicios de FlyEnv, y obtén la última build desde la [página de descarga](/es/download).
