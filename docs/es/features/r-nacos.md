---
layout: doc
titleTemplate: false
title: 'Consola local de descubrimiento de servicios R-NACOS | FlyEnv'
description: 'Ejecuta versiones de R-NACOS con configuración basada en variables de entorno y la consola integrada para descubrimiento de servicios y configuración.'
head:
  - - meta
    - name: description
      content: 'Ejecuta versiones de R-NACOS con configuración basada en variables de entorno y la consola integrada para descubrimiento de servicios y configuración.'
  - - meta
    - property: og:title
      content: 'Consola local de descubrimiento de servicios R-NACOS | FlyEnv'
  - - meta
    - property: og:description
      content: 'Ejecuta versiones de R-NACOS con configuración basada en variables de entorno y la consola integrada para descubrimiento de servicios y configuración.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/es/features/r-nacos
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/es/features/r-nacos
  - - link
    - rel: alternate
      hreflang: en
      href: https://flyenv.com/features/r-nacos
  - - link
    - rel: alternate
      hreflang: zh-CN
      href: https://flyenv.com/zh/features/r-nacos
  - - link
    - rel: alternate
      hreflang: id-ID
      href: https://flyenv.com/id/features/r-nacos
  - - link
    - rel: alternate
      hreflang: es-ES
      href: https://flyenv.com/es/features/r-nacos
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://flyenv.com/features/r-nacos
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# R-NACOS en FlyEnv

R-NACOS es un registro de servicios y centro de configuración de código abierto escrito en Rust, compatible con el protocolo Nacos utilizado en todo el ecosistema de microservicios Java de Alibaba: el mismo mundo de los servicios [Spring Boot](/es/solutions/spring-boot) construidos sobre un [entorno Java local](/es/guide/set-up-java-development-environment). Los stacks de microservicios lo usan para registrar y descubrir instancias de servicios y para publicar configuración dinámica que los clientes vigilan en runtime. FlyEnv ejecuta R-Nacos como un servicio local gestionado: instala versiones desde builds estáticas o Homebrew, inicia el binario `rnacos` con un archivo `rnacos.env` generado, edita esa configuración en un editor integrado y abre la consola de R-Nacos para el trabajo de descubrimiento de servicios y configuración con un clic. Para conseguir FlyEnv, visita la [página de descarga](/es/download); los tutoriales prácticos están en los [demos](/es/demos).

![Vista general del módulo R-Nacos de FlyEnv con las pestañas Service, Version Manager, Config File y Log](https://oss.macphpstudy.com/image/features/r-nacos-1.webp)

## Gestión de versiones

Instala y mantén varias versiones de R-Nacos en paralelo desde **R-Nacos → Version Manager**, y luego elige cuál ejecuta el servicio.

- **Builds estáticas online:** la lista de versiones procede del catálogo online de FlyEnv, con paquetes por sistema operativo y arquitectura; en macOS el atributo de cuarentena se elimina automáticamente tras la instalación.
- **Homebrew con tap automático:** en macOS y Linux, FlyEnv añade el tap `r-nacos/r-nacos` por ti si falta, de modo que las fórmulas de Homebrew aparecen sin trabajo manual en la terminal.
- **Directorios personalizados:** apunta FlyEnv a cualquier carpeta que contenga tu propio binario `rnacos` y aparecerá en la lista junto a las versiones gestionadas.
- **Una sola versión en ejecución:** iniciar una versión está bloqueado mientras otra versión de R-Nacos esté en marcha, de modo que siempre hay una única build conocida detrás de los puertos.

![Version Manager de R-Nacos con las fuentes de instalación estática y Homebrew](https://oss.macphpstudy.com/image/features/r-nacos-2.webp)

## Servicio y configuración

FlyEnv lanza el binario real como `rnacos -e rnacos.env`: analiza el archivo env, inyecta cada entrada en el entorno del proceso y fuerza `RNACOS_DATA_DIR` al directorio de datos propio de FlyEnv, de modo que todas las versiones gestionadas comparten una ubicación de almacenamiento conocida.

- **Plantilla env generada:** el `rnacos.env` por defecto documenta los puertos estándar —API HTTP en 8848, gRPC en 9848, la consola en 10848— además de la cuenta de consola por defecto `admin/admin` y el nivel de log `RUST_LOG`.
- **Editor en bruto:** la pestaña **Config File** edita `rnacos.env` directamente en estilo `.env`, conserva la plantilla como referencia de restauración y enlaza a la documentación oficial de variables de entorno de R-Nacos.
- **Nunca sobrescribe tus ediciones:** FlyEnv solo genera el archivo env cuando no existe; una vez que lo has personalizado, tu versión permanece intacta.

![Configuración de R-Nacos](https://oss.macphpstudy.com/image/features/r-nacos-3.webp)

## Consola (10848)

R-Nacos incluye su propia consola web integrada, y FlyEnv la conecta a la pestaña Service. Mientras el servicio está en ejecución, el botón de la consola abre `http://127.0.0.1:10848/rnacos/` en tu navegador: inicia sesión con la cuenta de `rnacos.env` (`admin/admin` por defecto) para registrar instancias, vigilar la salud de los servicios y publicar o editar entradas de configuración.

![Consola de R-Nacos abierta en el navegador desde FlyEnv](https://oss.macphpstudy.com/image/features/r-nacos-4.webp)

## Logs

La pestaña **Log** alterna entre los flujos de arranque por versión: `rnacos-<version>-start-out.log` y `rnacos-<version>-start-error.log`. Cuando una versión no arranca o un cliente no puede conectarse al puerto 8848, el log de errores es el primer lugar donde mirar.

<FeatureRelatedLinks locale="es" slug="r-nacos" />

## Notas de compatibilidad

FlyEnv gestiona el runtime local de R-Nacos, su archivo env y su directorio de datos; no garantiza que cada versión de R-Nacos esté disponible en cada sistema operativo o fuente de instalación. Las instalaciones con Homebrew se ofrecen en macOS y Linux, las builds estáticas en todas las plataformas, y la fuente MacPorts no está habilitada para este módulo. FlyEnv también incluye [Consul](/es/features/consul) como módulo alternativo de descubrimiento de servicios cuando un stack espera herramientas de HashiCorp en lugar del protocolo Nacos. Ten en cuenta que el botón de la consola determina el puerto a abrir independientemente del archivo `rnacos.env`, así que si cambias el puerto de la consola respecto a 10848, abre la consola manualmente en la dirección que hayas configurado. Para saber qué se puede instalar realmente en tu máquina, confía en la lista de versiones de la app y en la [página de descarga](/es/download).
