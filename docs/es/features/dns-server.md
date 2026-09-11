---
layout: doc
titleTemplate: false
title: 'Servidor DNS integrado para dominios locales | FlyEnv'
description: 'Resuelve todos los dominios de tus sitios FlyEnv sin editar el archivo hosts usando el servidor DNS integrado en el puerto 53.'
head:
  - - meta
    - name: description
      content: 'Resuelve todos los dominios de tus sitios FlyEnv sin editar el archivo hosts usando el servidor DNS integrado en el puerto 53.'
  - - meta
    - property: og:title
      content: 'Servidor DNS integrado para dominios locales | FlyEnv'
  - - meta
    - property: og:description
      content: 'Resuelve todos los dominios de tus sitios FlyEnv sin editar el archivo hosts usando el servidor DNS integrado en el puerto 53.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/es/features/dns-server
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/es/features/dns-server
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Servidor DNS integrado en FlyEnv

FlyEnv incluye su propio servidor DNS, implementado en Node.js directamente dentro de la app: no hay ningún binario externo que instalar ni ninguna versión que gestionar. Escucha en el puerto 53 y responde por cada dominio de sitio que creas en FlyEnv, así que una vez que tu sistema apunta a él, los dominios locales funcionan sin tocar el archivo hosts. Un log de consultas en vivo en la pestaña Servicio muestra cada búsqueda en el momento en que ocurre.

![Módulo DNS Server de FlyEnv con el servicio en ejecución en el puerto 53](https://oss.macphpstudy.com/image/features/dns-server-1.webp)

## Cómo funciona la resolución

Cuando llega una consulta, el servidor busca el nombre en un único mapa en memoria construido a partir de varias fuentes, y solo pregunta a internet cuando nada coincide:

- **Dominios de sitios FlyEnv:** cada nombre de host y alias de tus [sitios locales](/es/features/local-sites-https) se resuelve automáticamente a tu dirección IP local principal. La lista se vigila en vivo, así que un sitio recién creado resuelve de inmediato: sin reinicios ni mapeos manuales.
- **Archivo hosts del sistema:** las entradas del archivo hosts del sistema operativo se unen al mismo mapa; el archivo se relee como máximo cada 60 segundos, de modo que las ediciones externas se recogen por sí solas.
- **Mapa estático en `dns.json`:** un mapa `resolveIP` en el archivo de configuración fija nombres concretos a direcciones fijas de tu elección.
- **Orden en caso de conflicto:** cuando el mismo nombre aparece en más de una fuente, el dominio del sitio gana al archivo hosts, que a su vez gana a `resolveIP`. Una coincidencia exacta de nombre se responde primero; si no existe, se prueban los patrones wildcard como `*.test` del mapa, de modo que sufijos de dominio completos pueden cubrirse con una sola regla.
- **Reenvío a servidores upstream:** todo lo que no coincide ni con un nombre exacto ni con un wildcard se reenvía a resolvers públicos —1.1.1.1 y 8.8.8.8 por defecto (AliDNS y 114DNS entre los valores por defecto en la localización china)— de modo que el servidor puede actuar como el único DNS de la máquina sin romper la navegación normal. Si lo que buscas en su lugar es resolución DNS con bloqueo de anuncios, el módulo [Numa](/es/features/numa) ofrece esa variante de DNS local.

Apunta la configuración DNS de tu sistema operativo a la dirección local a la que FlyEnv se vincula, y todo esto se aplica a todo el sistema. La [guía de gestión de hosts](/es/guide/host) cubre la parte del sitio en esta configuración.

## Log de consultas en vivo

La pestaña Servicio es más que un interruptor de inicio/parada: también funciona como monitor de tráfico del servidor.

- **Tabla de consultas:** cada búsqueda se muestra como una fila con el host solicitado, la IP a la que se resolvió y el TTL devuelto.
- **Control completo del ciclo de vida:** inicia, detén y reinicia el servidor desde la misma barra de herramientas, justo al lado del log.
- **Limpieza con un clic:** vacía la tabla cuando quieras una vista limpia mientras depuras un dominio concreto.

Como el log se actualiza a medida que llegan las consultas, es la forma más rápida de confirmar que un navegador o dispositivo está usando realmente FlyEnv como su resolver.

![Log de consultas DNS en vivo mostrando el host, la IP resuelta y el TTL por consulta](https://oss.macphpstudy.com/image/features/dns-server-1.webp)

## Configuración

El servidor DNS guarda sus ajustes en un único archivo JSON, `dns.json` (con `dns.default.json` junto a él como referencia de fábrica). La pestaña Archivo de configuración ofrece dos formas de modificarlo:

- **Desplegable de IP de escucha:** el único ajuste visual —elige en qué dirección local escucha el servidor. El valor por defecto `0.0.0.0` acepta consultas en todas las interfaces, que es lo que quieres cuando otros dispositivos de la red también deben resolver los dominios de tus sitios; elegir una IP concreta lo restringe a esa interfaz.
- **Editor JSON en bruto:** para todo lo demás, edita el archivo directamente —incluido el mapa estático `resolveIP` que fija nombres concretos a direcciones elegidas.

![Pestaña de configuración DNS con el desplegable de IP de escucha y el editor de dns.json](https://oss.macphpstudy.com/image/features/dns-server-2.webp)

<FeatureRelatedLinks locale="es" slug="dns-server" />

## Notas de compatibilidad

El servidor DNS integrado funciona en macOS, Windows y Linux, sirviendo tanto UDP como TCP en el puerto 53. El puerto 53 es un puerto privilegiado en los sistemas tipo Unix, así que ejecutar el servidor ahí puede requerir permisos elevados según la plataforma, y ningún otro resolver (como otra herramienta DNS local) puede ocupar el puerto al mismo tiempo —si la vinculación falla, iniciar el servidor simplemente informa de un error. El servidor responde consultas solo mientras está en ejecución, y el historial de consultas se muestra en vivo en la pestaña Servicio sin escribirse en archivos de log. Para el comportamiento exacto de una versión concreta, toma como referencia el módulo dentro de la app y las notas de la versión en la [página de descargas](/es/download).
