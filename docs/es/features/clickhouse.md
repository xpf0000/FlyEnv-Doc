---
layout: doc
titleTemplate: false
title: 'Servidor ClickHouse local con CH-UI | FlyEnv'
description: 'Ejecuta ClickHouse en macOS y Linux con archivos config.xml y users.xml gestionados y un cliente CH-UI con un solo clic.'
head:
  - - meta
    - name: description
      content: 'Ejecuta ClickHouse en macOS y Linux con archivos config.xml y users.xml gestionados y un cliente CH-UI con un solo clic.'
  - - meta
    - property: og:title
      content: 'Servidor ClickHouse local con CH-UI | FlyEnv'
  - - meta
    - property: og:description
      content: 'Ejecuta ClickHouse en macOS y Linux con archivos config.xml y users.xml gestionados y un cliente CH-UI con un solo clic.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/es/features/clickhouse
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/es/features/clickhouse
  - - link
    - rel: alternate
      hreflang: en
      href: https://flyenv.com/features/clickhouse
  - - link
    - rel: alternate
      hreflang: zh-CN
      href: https://flyenv.com/zh/features/clickhouse
  - - link
    - rel: alternate
      hreflang: id-ID
      href: https://flyenv.com/id/features/clickhouse
  - - link
    - rel: alternate
      hreflang: es-ES
      href: https://flyenv.com/es/features/clickhouse
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://flyenv.com/features/clickhouse
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Desarrollo local de ClickHouse con FlyEnv

ClickHouse es una base de datos columnar de código abierto diseñada para consultas analíticas rápidas sobre conjuntos de datos muy grandes, y complementa a las bases de datos orientadas a filas como [PostgreSQL](/es/features/postgresql). Se usa habitualmente para analítica de logs, métricas y datos de eventos, donde las agregaciones sobre miles de millones de filas deben responder en segundos, y herramientas de BI como [Metabase](/es/solutions/metabase) pueden trabajar sobre ella. FlyEnv ejecuta ClickHouse como un servicio local gestionado en macOS y Linux: instala versiones desde una lista en línea, inicia el servidor con una configuración generada automáticamente y te ofrece archivos de configuración editables, visores de logs y un cliente web CH-UI con un solo clic. El módulo ClickHouse solo está disponible en macOS y Linux.

![Vista general del módulo ClickHouse de FlyEnv](https://oss.macphpstudy.com/image/features/clickhouse-1.webp)

## Gestión de versiones de ClickHouse

Instala versiones de ClickHouse desde **ClickHouse → Version Manager** y cambia entre ellas en cualquier momento.

- **Solo lista en línea estática:** las versiones provienen de la lista de descargas en línea de FlyEnv; las fuentes Homebrew y MacPorts no se ofrecen para ClickHouse. En macOS la descarga es un binario independiente, y en Linux el binario se extrae del archivo `clickhouse-common-static`.
- **Versiones personalizadas:** apunta FlyEnv a cualquier directorio que contenga tu propio binario `clickhouse` y aparecerá junto a las versiones gestionadas.
- **Una versión en ejecución:** inicia, detén o reinicia una versión desde la pestaña Service o el interruptor de la barra lateral (también disponible en la bandeja del sistema); solo una versión de ClickHouse se ejecuta a la vez.

![Version Manager de ClickHouse con la lista de versiones en línea](https://oss.macphpstudy.com/image/features/clickhouse-2.webp)

## Servicio y configuración

ClickHouse se distribuye como un binario multiuso, y FlyEnv lo inicia como `clickhouse server` con una configuración que gestiona por ti.

- **Configuración generada automáticamente:** en el primer arranque, FlyEnv crea `config.xml` y `users.xml` en su directorio de ClickHouse, preconfigurados con el puerto HTTP 8123, el puerto TCP nativo 9000 y una dirección de escucha solo loopback 127.0.0.1.
- **Dos archivos de configuración en un solo editor:** la pestaña Config File alterna entre `config.xml` y `users.xml`, cada uno abierto como un editor de código XML completo, de modo que puertos, rutas, usuarios y perfiles se pueden editar sin buscar archivos; la [guía de usuarios y contraseñas de bases de datos](/es/guide/database-user-password) explica las cuentas predeterminadas en los módulos de bases de datos de FlyEnv.

![Editando el config.xml de ClickHouse en el editor de código](https://oss.macphpstudy.com/image/features/clickhouse-3.webp)

## Logs

La pestaña Log alterna entre los archivos de log que FlyEnv captura para el servicio ClickHouse: el log principal del servidor, el log de errores del servidor, los logs de stdout y stderr del arranque y los logs de arranque del cliente CH-UI. La vista se actualiza automáticamente cuando el archivo cambia, y la barra de herramientas puede abrir el archivo en tu gestor de archivos, recargarlo bajo demanda o borrarlo, de modo que un arranque fallido o una consulta lenta sea fácil de rastrear.

![Alternando entre los logs del servidor y de arranque de ClickHouse](https://oss.macphpstudy.com/image/features/clickhouse-4.webp)

## CH-UI

CH-UI es un cliente ClickHouse basado en web, y FlyEnv lo configura por ti.

- **Configuración con un solo clic:** el botón CH-UI descarga el binario de CH-UI desde sus releases de GitHub y lo ejecuta en el puerto 3488.
- **Conexión preconfigurada:** FlyEnv añade una conexión llamada "FlyEnv ClickHouse" que apunta a la instancia en ejecución y luego abre CH-UI en tu navegador; no necesitas introducir host ni puerto manualmente.

<FeatureRelatedLinks locale="es" slug="clickhouse" />

## Notas de compatibilidad

El módulo ClickHouse solo está disponible en macOS y Linux; no aparece en Windows. FlyEnv gestiona el runtime local y la configuración que genera; el conjunto exacto de funciones de cada compilación de ClickHouse proviene de la release upstream. Consulta la [página de descarga](/es/download) para la versión actual de FlyEnv y las [demos](/es/demos) para ver recorridos de los módulos de servicios de FlyEnv en acción.
