---
layout: doc
titleTemplate: false
title: 'Entorno de desarrollo Node.js y servicios de proyecto | FlyEnv'
description: 'Instala versiones de Node.js, vincula runtimes a proyectos y ejecuta servicios Node con puertos, logs y proxies inversos locales en FlyEnv.'
head:
  - - meta
    - name: description
      content: 'Instala versiones de Node.js, vincula runtimes a proyectos y ejecuta servicios Node con puertos, logs y proxies inversos locales en FlyEnv.'
  - - meta
    - property: og:title
      content: 'Entorno de desarrollo Node.js y servicios de proyecto | FlyEnv'
  - - meta
    - property: og:description
      content: 'Instala versiones de Node.js, vincula runtimes a proyectos y ejecuta servicios Node con puertos, logs y proxies inversos locales en FlyEnv.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/es/features/nodejs
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/es/features/nodejs
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Desarrollo con Node.js en FlyEnv

Node.js es un runtime de JavaScript construido sobre el motor V8 que ejecuta JavaScript fuera del navegador, sobre todo para servidores web, API y herramientas de línea de comandos. El módulo Node.js de FlyEnv combina la gestión de versiones con un flujo de trabajo de servicios de proyecto. Elige el runtime que necesita un proyecto, ejecuta su comando desde el directorio del proyecto y mantén visibles su puerto, sus variables de entorno y sus logs junto al resto de tus servicios locales.

## Gestiona las versiones de Node.js

La pestaña **Version Manager** muestra las versiones disponibles para FlyEnv y las que ya están instaladas en tu equipo. En macOS y Linux, FlyEnv puede trabajar con la herramienta `fnm` o `nvm` que tengas configurada; la aplicación también dispone de un flujo de trabajo con runtime gestionado por defecto. En Windows, las versiones actuales usan el flujo de instalación integrado de FlyEnv en lugar de operar instalaciones externas de NVM o FNM.

Usa la lista de versiones para instalar el runtime antes de asignarlo a un proyecto. Los binarios exactos y la disponibilidad de paquetes dependen del sistema operativo y de los metadatos de la versión, así que consulta la lista en tu build actual de FlyEnv en lugar de asumir que una versión es portable entre plataformas.

## Vincula un runtime a un proyecto

En **Node.js → Projects**, añade la ruta del proyecto y elige el binario instalado. El modelo de proyecto de FlyEnv guarda la ruta y la versión del binario seleccionado, y su integración con el shell puede cargar el entorno del proyecto cuando entras en ese directorio. Esto resulta útil cuando una app de cliente heredada y una app moderna requieren versiones distintas de Node.js.

La [guía de runtime a nivel de proyecto](/es/guide/project-level-runtime-environment) muestra la configuración y el comportamiento del shell. También cubre proyectos de PHP, Python, Go, Ruby y Java que usan el mismo modelo de aislamiento.

## Ejecuta una app de Node.js como servicio gestionado

Activa **Run as service** en el editor del proyecto cuando la app deba mantenerse en ejecución. Configura:

- un comando como `npm run dev`, `npm run start` o el script documentado del proyecto;
- un puerto TCP, por ejemplo `3000`;
- variables de entorno directamente o mediante un archivo env;
- rutas opcionales para el archivo de configuración y el archivo de log;
- una ruta de archivo PID cuando el proceso crea uno.

FlyEnv expone controles de inicio y parada en la lista de proyectos y puede mostrar los logs de salida y de error del proyecto. El comando se ejecuta desde la ruta del proyecto, por lo que la instalación de dependencias y los pasos de build siguen siendo responsabilidad del proyecto.

Para un stack personalizado, el mismo modelo de servicio de proyecto puede ejecutar un archivo de script u otro ejecutable. No está limitado a Express o Next.js; los requisitos importantes son un comando de inicio válido y un puerto en escucha que la app pueda usar localmente.

## Coloca Node.js detrás de un dominio local

Un proceso de Node puede escuchar en `127.0.0.1:3000` mientras FlyEnv Host proporciona la dirección que ve el navegador. Añade un sitio, configura una regla de proxy inverso hacia el puerto del proyecto y activa HTTPS cuando la integración necesite un origen seguro. Así, el ciclo de vida del proceso de la app permanece en el módulo Node.js y la configuración del dominio/servidor en Host.

Enlaces útiles:

- [Configuración de proxy inverso para NestJS y Node.js](/es/guide/reverse-proxy-nestjs-multi-servers): configura Nginx, Apache o Caddy.
- [Sitios locales, dominios personalizados y HTTPS](/es/features/local-sites-https): entiende las raíces de los sitios, los puertos, los certificados y los alias.
- [Despliega Node.js, Python y Go sin Docker](/es/guide/deploy-nodejs-python-go-without-docker): recorrido completo por los servicios de proyecto.
- [Solución Directus](/es/solutions/directus) y [solución Strapi](/es/solutions/strapi): ejemplos de stacks locales basados en Node.

## Mira el flujo de trabajo

La [demo de runtime de proyectos Node](/es/demos) muestra la selección de versiones, los servicios de proyecto y Nginx trabajando juntos. La [demo de servicios nativos de Node.js, Python y Go](/es/demos) muestra los mismos controles de servicio en varios runtimes.

<FeatureRelatedLinks locale="es" slug="nodejs" />

## Notas de compatibilidad

Los gestores de paquetes de Node.js, las CLI de los frameworks y los gestores de procesos de producción siguen siendo herramientas independientes. FlyEnv gestiona la selección del runtime local y la entrada del proceso; no reemplaza los scripts de `package.json`, los lockfiles ni una plataforma de despliegue en producción. Usa la [página de descarga](/es/download) para instalar la versión actual de FlyEnv para tu sistema operativo.
