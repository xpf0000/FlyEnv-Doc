---
layout: doc
titleTemplate: false
title: 'Etcd en FlyEnv: guía de desarrollo local'
description: 'Instala, configura y gestiona Etcd en FlyEnv para el desarrollo local.'
head:
  - - meta
    - name: description
      content: 'Instala, configura y gestiona Etcd en FlyEnv para el desarrollo local.'
  - - meta
    - property: og:title
      content: 'Etcd en FlyEnv: guía de desarrollo local'
  - - meta
    - property: og:description
      content: 'Instala, configura y gestiona Etcd en FlyEnv para el desarrollo local.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/es/features/etcd
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/es/features/etcd
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Etcd en FlyEnv

etcd es un almacén clave-valor distribuido y fuertemente consistente, el mismo que Kubernetes utiliza para guardar el estado de su clúster. Es el componente estándar para el descubrimiento de servicios, la configuración distribuida y la elección de líder. FlyEnv ejecuta etcd como un servicio local gestionado: instala una o varias versiones de etcd, inicia la versión seleccionada desde el interruptor de la barra lateral o desde la bandeja del sistema, edita su configuración `etcd.yaml` directamente en el lugar y lee los logs de arranque de cada versión sin salir de la aplicación. La configuración predeterminada generada escucha el tráfico de clientes en el puerto 2379 y el tráfico entre pares en el puerto 2380, lista para trabajos locales de descubrimiento de servicios y configuración distribuida.

![Vista general del módulo etcd de FlyEnv](https://oss.macphpstudy.com/image/features/etcd-1.webp)

## Gestión de versiones

Instala y mantén varias versiones de etcd en paralelo desde **Etcd → Version Manager**, y luego elige la versión que ejecutará el servicio.

- **Fuentes de instalación:** una lista en línea estática de paquetes etcd listos para usar en todas las plataformas, además de la fórmula `etcd` de Homebrew en macOS y Linux.
- **Versiones personalizadas:** apunta FlyEnv a cualquier directorio que contenga tu propia compilación de etcd; se escaneará y aparecerá junto a las versiones gestionadas.
- **Una versión a la vez:** iniciar una versión de etcd mientras otra está en ejecución está bloqueado; detén primero la versión actual y luego inicia la nueva.

![Version Manager de etcd con fuentes estáticas y de Homebrew](https://oss.macphpstudy.com/image/features/etcd-2.webp)

## Servicio y configuración

La pestaña Service controla el proceso etcd en ejecución. FlyEnv lanza el binario `etcd` real con `--config-file etcd.yaml`, de modo que todo el comportamiento del servidor está gobernado por ese único archivo de configuración.

- **Valores predeterminados generados:** en el primer arranque, FlyEnv escribe un `etcd.yaml` que escucha las peticiones de clientes en `0.0.0.0:2379` y el tráfico entre pares en `0.0.0.0:2380`, se anuncia a sí mismo en `127.0.0.1` y registra logs en stdout con el nivel `info`. Los archivos existentes nunca se sobrescriben; FlyEnv solo genera la configuración cuando el archivo no existe.
- **Editor sin formato:** la pestaña **Config File** abre `etcd.yaml` directamente, con una copia `.default` junto a él para que siempre puedas comparar con el original o restaurarlo.
- **Sin capas ocultas:** como etcd lee `etcd.yaml` tal cual, cualquier ajuste de etcd —clústeres, TLS, cuotas— funciona exactamente como describe la documentación oficial del proyecto.

![Servicio y configuración de etcd en FlyEnv](https://oss.macphpstudy.com/image/features/etcd-3.webp)

## Logs

Las pestañas **Log** y **Error Log** ofrecen a cada versión de etcd instalada su propio par de visores: `etcd-<version>-start-out.log` captura el flujo stdout del servidor, y `etcd-<version>-start-error.log` captura stderr. Cuando una versión se niega a arrancar, el log de errores es el primer lugar donde mirar: tanto los conflictos de puerto en 2379 como un `etcd.yaml` mal formado aparecen ahí de inmediato.

![Visores de logs de arranque y errores de etcd por versión](https://oss.macphpstudy.com/image/features/etcd-4.webp)

<FeatureRelatedLinks locale="es" slug="etcd" />

## Notas de compatibilidad

- El módulo etcd no ofrece una fuente de instalación desde MacPorts en macOS; usa en su lugar la lista estática, Homebrew o un directorio personalizado.
- FlyEnv gestiona únicamente el proceso etcd, su `etcd.yaml` y sus archivos de log; no incluye un explorador de etcd ni un panel de administración, por lo que la inspección de claves y las operaciones con datos se realizan a través de `etcdctl` o de tu propio cliente.
- Las versiones de etcd disponibles dependen de tu plataforma y de lo que publiquen la lista en línea y Homebrew; consulta el Version Manager dentro de la aplicación o la [página de descarga](/es/download) para saber qué se instala en tu máquina.
- Otros módulos de FlyEnv pueden aprovechar un etcd en ejecución: la configuración de [MinIO](/es/features/minio) expone claves de ajuste de etcd para despliegues distribuidos, y módulos hermanos como [Consul](/es/features/consul) y [R-Nacos](/es/features/r-nacos) cubren necesidades afines de descubrimiento de servicios y configuración. Para ver un recorrido de etcd en un stack local real, consulta las [demos](/es/demos).
