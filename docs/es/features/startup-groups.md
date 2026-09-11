---
layout: doc
titleTemplate: false
title: 'Startup Groups: inicia todo tu stack a la vez | FlyEnv'
description: 'Agrupa servicios y runtimes de proyectos en grupos de arranque ordenados, con un grupo predeterminado, control desde la bandeja e inicio automático.'
head:
  - - meta
    - name: description
      content: 'Agrupa servicios y runtimes de proyectos en grupos de arranque ordenados, con un grupo predeterminado, control desde la bandeja e inicio automático.'
  - - meta
    - property: og:title
      content: 'Startup Groups: inicia todo tu stack a la vez | FlyEnv'
  - - meta
    - property: og:description
      content: 'Agrupa servicios y runtimes de proyectos en grupos de arranque ordenados, con un grupo predeterminado, control desde la bandeja e inicio automático.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/es/features/startup-groups
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/es/features/startup-groups
  - - link
    - rel: alternate
      hreflang: en
      href: https://flyenv.com/features/startup-groups
  - - link
    - rel: alternate
      hreflang: zh-CN
      href: https://flyenv.com/zh/features/startup-groups
  - - link
    - rel: alternate
      hreflang: id-ID
      href: https://flyenv.com/id/features/startup-groups
  - - link
    - rel: alternate
      hreflang: es-ES
      href: https://flyenv.com/es/features/startup-groups
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://flyenv.com/features/startup-groups
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Startup Groups en FlyEnv

Un proyecto real rara vez necesita un solo servicio —una aplicación [Laravel](/es/solutions/laravel), por ejemplo, necesita la base de datos, la caché y el runtime de la aplicación activos a la vez. Startup Groups te permite agrupar esas piezas en un grupo con nombre y activar o desactivar todo el conjunto con una sola acción, en el orden que elijas. Un grupo puede marcarse como grupo predeterminado, y es el que controlan el interruptor de la barra lateral, el menú de la bandeja y el inicio automático de la aplicación. Si eres nuevo en FlyEnv, la [guía de primeros pasos](/es/guide/getting-started) explica primero cómo instalar e iniciar módulos individuales.

![Página de Startup Groups con una cuadrícula de tarjetas de grupos](https://oss.macphpstudy.com/image/features/startup-groups-1.webp)

## Creación de grupos

Abre **Startup Groups** desde la barra lateral y añade un grupo; cada grupo aparece como una tarjeta con su propio interruptor de inicio/detención, interruptores por miembro y acciones de editar, eliminar y establecer como predeterminado.

Un miembro de un grupo solo puede ser una de estas dos cosas:

- **Una versión de servicio:** una versión instalada de un módulo de servicio —bases de datos, servidores web, colas y similares. PHP-FPM también cuenta: se corresponde con tus versiones de PHP instaladas, así que una versión concreta de PHP-FPM puede estar en el grupo junto a [Nginx](/es/features/nginx) y [MySQL](/es/features/mysql).
- **Un runtime de proyecto:** un proyecto de un módulo de lenguaje que tenga activado "run as service" —tu aplicación de Node.js, Python, Go o similar con su propio comando de ejecución y puerto, gestionada mediante los [runtimes por proyecto](/es/features/per-project-runtimes).

El editor de grupos vigila los conflictos mientras eliges miembros y te avisa cuando dos entradas provienen del mismo módulo o reclamarían el mismo puerto, de modo que una combinación rota se detecta antes de que pulses iniciar.

![Editor de grupos seleccionando versiones de servicio y runtimes de proyectos como miembros](https://oss.macphpstudy.com/image/features/startup-groups-2.webp)

## Inicio y detención ordenados

Los miembros se ejecutan en el orden en que aparecen en el grupo, de modo que la infraestructura se activa antes que las aplicaciones que dependen de ella.

- **El inicio va de arriba abajo:** cada miembro se inicia en el orden de la lista, y los miembros que ya están en ejecución se omiten en lugar de reiniciarse.
- **Un fallo detiene la cadena:** si un miembro no consigue iniciarse, los miembros restantes se marcan como no ejecutados en lugar de lanzarse en un entorno a medio preparar.
- **La detención va en orden inverso y siempre termina:** el apagado recorre la lista hacia atrás y continúa incluso si un miembro no consigue detenerse.

## Grupo predeterminado, inicio automático y bandeja

Exactamente un grupo puede ser el grupo predeterminado, y se convierte en el objetivo de los controles globales de FlyEnv.

- **Interruptor de la barra lateral:** el botón de inicio/detención de grupo de la barra lateral principal controla el grupo predeterminado. Si no hay ningún grupo predeterminado definido, ese botón vuelve al comportamiento clásico de iniciar o detener todos los servicios a la vez.
- **Inicio automático al abrir la aplicación:** cuando "auto-start services" está activado en Setup, al abrir FlyEnv se inicia automáticamente el grupo predeterminado —tu stack de trabajo ya está en marcha cuando te sientas.
- **Control desde la bandeja:** el menú de la bandeja del sistema muestra tus grupos, cada uno con su propio interruptor de inicio/detención, así que puedes desactivar todo un stack —o cambiar de stack— sin abrir la ventana principal.

![Menú de la bandeja con los Startup Groups y las acciones de inicio y detención](https://oss.macphpstudy.com/image/features/startup-groups-3.webp)

<FeatureRelatedLinks locale="es" slug="startup-groups" />

## Notas de compatibilidad

Startup Groups es pura orquestación: ordena las operaciones de inicio y detención que cada módulo ya proporciona, y no instala versiones ni runtimes por sí mismo —un grupo solo puede contener versiones de servicio y proyectos que sus propios módulos ya gestionan. La funcionalidad funciona igual en macOS, Windows y Linux, sin comportamientos propios específicos de plataforma; cualquier límite de plataforma proviene de los módulos subyacentes. Al ocultar la entrada Startup Groups en los ajustes de la barra lateral, primero se detienen todos los miembros de todos los grupos, de modo que nada queda ejecutándose en segundo plano. Explora las demás [páginas de funcionalidades](/es/features) para conocer las capacidades de los servicios individuales que agrupas.
