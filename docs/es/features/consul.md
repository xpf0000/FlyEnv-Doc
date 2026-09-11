---
layout: doc
titleTemplate: false
title: 'Descubrimiento de servicios con Consul local y UI web | FlyEnv'
description: 'Ejecuta versiones de Consul como agente servidor local con un directorio de datos gestionado y la UI web integrada.'
head:
  - - meta
    - name: description
      content: 'Ejecuta versiones de Consul como agente servidor local con un directorio de datos gestionado y la UI web integrada.'
  - - meta
    - property: og:title
      content: 'Descubrimiento de servicios con Consul local y UI web | FlyEnv'
  - - meta
    - property: og:description
      content: 'Ejecuta versiones de Consul como agente servidor local con un directorio de datos gestionado y la UI web integrada.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/es/features/consul
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/es/features/consul
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Consul en FlyEnv

Consul es la plataforma de descubrimiento de servicios y service mesh de HashiCorp: los servicios se registran a sí mismos, los health checks siguen su disponibilidad y un almacén clave/valor integrado distribuye la configuración. Lo suelen usar stacks de microservicios que necesitan un registro para localizar y monitorizar servicios —por ejemplo, aplicaciones [Spring Boot](/es/solutions/spring-boot) con Spring Cloud Consul—, también en local, cuando quieres que el desarrollo coincida con producción. FlyEnv ejecuta HashiCorp Consul como un agente servidor local gestionado: instala una o varias versiones, inicia el agente con una configuración de servidor de un solo nodo generada, guarda sus datos en un directorio de datos por versión que puedes reubicar y abre la UI web integrada de Consul en el navegador con un clic. La configuración, los logs y los controles del servicio viven todos en la misma página del módulo.

![Pestaña Service del módulo Consul de FlyEnv](https://oss.macphpstudy.com/image/features/consul-1.webp)

## Gestión de versiones

Instala y mantén varias versiones de Consul lado a lado desde **Consul → Version Manager**, y elige cuál ejecuta el servicio.

- **Fuentes de instalación por plataforma:** una lista online estática de paquetes listos para usar en todas las plataformas, más Homebrew y MacPorts en macOS y Homebrew en Linux.
- **Versiones personalizadas:** apunta FlyEnv a cualquier directorio que contenga tu propia instalación de Consul; escanea el directorio y lista esas builds junto a las versiones gestionadas.
- **Una versión cada vez:** Consul se ejecuta como un único agente local, así que iniciar una versión está bloqueado mientras otra esté en marcha: detén la versión actual antes de cambiar.

![Version Manager de Consul con las fuentes de instalación](https://oss.macphpstudy.com/image/features/consul-2.webp)

## Servicio y configuración

FlyEnv lanza el binario real `consul agent` de forma independiente, sin privilegios de root. La configuración por defecto generada describe un servidor local autocontenido: `server: true`, `bootstrap_expect: 1`, `client_addr: 127.0.0.1` y `ui_config.enabled: true`, con el agente vinculado a tu dirección LAN principal.

- **Directorio de datos editable:** cada versión tiene su propio directorio de datos (por defecto `consul-<major>-data` bajo el directorio Consul de FlyEnv), y puedes cambiar la ruta por versión directamente desde la pestaña Service. El directorio elegido se pasa al agente con `-data-dir`, de modo que el estado sobrevive a los reinicios y las versiones nunca comparten datos a menos que las apuntes a la misma ruta.
- **Editor JSON en crudo:** la pestaña **Config File** abre `consul-<major>.json` en un editor de código fuente —no hay formulario visual, así que todas las opciones de Consul están disponibles. FlyEnv solo genera el archivo cuando no existe y nunca sobrescribe tus ediciones; se conserva una copia `.default` junto a él como referencia.
- **Comportamiento consciente del puerto:** el puerto HTTP y otros ajustes se leen desde esta configuración JSON en otras partes del módulo, así que se respetan los valores personalizados que definas.

![Edición de la configuración JSON y del directorio de datos de Consul](https://oss.macphpstudy.com/image/features/consul-3.webp)

## UI web

Consul incluye su propia UI web, y FlyEnv la activa en la configuración generada (`ui_config.enabled: true`). El botón **Open UI** de la barra de herramientas de Service la abre en tu navegador predeterminado en `http://127.0.0.1:8500/ui/`: el puerto se lee de `ports.http` en la configuración JSON, así que si cambias el puerto HTTP el botón sigue tu ajuste.

Desde la UI puedes explorar los servicios y nodos registrados, inspeccionar los health checks y editar el almacén clave/valor contra el agente local en ejecución.

![UI web integrada de Consul abierta desde FlyEnv](https://oss.macphpstudy.com/image/features/consul-4.webp)

## Logs

La pestaña **Log** abre el `consul.log` del agente directamente dentro de FlyEnv. Como FlyEnv inicia el agente con `-log-file=consul.log`, todo lo que el agente escribe —mensajes de arranque, eventos de Raft, actividad de join y sincronización— termina en este único archivo, convirtiéndolo en el primer lugar donde mirar cuando una versión no arranca o un servicio no se registra como esperabas.

![Visor de logs de Consul en FlyEnv](https://oss.macphpstudy.com/image/features/consul-5.webp)

<FeatureRelatedLinks locale="es" slug="consul" />

## Notas de compatibilidad

FlyEnv gestiona el agente Consul local, su archivo de configuración y su directorio de datos; no garantiza que cada versión de Consul esté disponible en cada sistema operativo o fuente de instalación. Las versiones ofrecidas en Version Manager dependen de tu plataforma (Homebrew y MacPorts en macOS, Homebrew en Linux, paquetes estáticos en Windows) y de lo que esas fuentes publican. En Windows, FlyEnv añade `raft_logstore.backend = boltdb` a la configuración generada para sortear un fallo de fsync del log de Raft específico de esa plataforma. El módulo Consul gestiona el propio agente: no tiene vinculación de versión por proyecto ni integración con el proxy inverso de sitios. Como piezas relacionadas, FlyEnv también incluye [R-Nacos](/es/features/r-nacos), un registro y centro de configuración con protocolo Nacos, y [etcd](/es/features/etcd), el almacén clave/valor consistente detrás de muchos stacks; la guía sobre [ejecutar servicios Node.js, Python y Go sin Docker](/es/guide/deploy-nodejs-python-go-without-docker) cubre el resto de un stack local de microservicios. Para saber qué se puede instalar en tu máquina, consulta la lista de versiones dentro de la app y la [página de descargas](/es/download); para un recorrido ejecutable de un stack de servicios local, mira las [demos](/es/demos).
