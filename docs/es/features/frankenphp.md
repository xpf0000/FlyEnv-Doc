---
layout: doc
titleTemplate: false
title: 'Gestor de versiones de FrankenPHP y servidor de aplicaciones PHP | FlyEnv'
description: 'Ejecuta versiones de FrankenPHP y sirve sitios PHP directamente con puertos por sitio y HTTPS automático, sin necesidad de PHP-FPM.'
head:
  - - meta
    - name: description
      content: 'Ejecuta versiones de FrankenPHP y sirve sitios PHP directamente con puertos por sitio y HTTPS automático, sin necesidad de PHP-FPM.'
  - - meta
    - property: og:title
      content: 'Gestor de versiones de FrankenPHP y servidor de aplicaciones PHP | FlyEnv'
  - - meta
    - property: og:description
      content: 'Ejecuta versiones de FrankenPHP y sirve sitios PHP directamente con puertos por sitio y HTTPS automático, sin necesidad de PHP-FPM.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/es/features/frankenphp
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/es/features/frankenphp
  - - link
    - rel: alternate
      hreflang: en
      href: https://flyenv.com/features/frankenphp
  - - link
    - rel: alternate
      hreflang: zh-CN
      href: https://flyenv.com/zh/features/frankenphp
  - - link
    - rel: alternate
      hreflang: id-ID
      href: https://flyenv.com/id/features/frankenphp
  - - link
    - rel: alternate
      hreflang: es-ES
      href: https://flyenv.com/es/features/frankenphp
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://flyenv.com/features/frankenphp
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# FrankenPHP en FlyEnv

FrankenPHP es un servidor de aplicaciones PHP moderno construido sobre [Caddy](/es/features/caddy): integra un runtime de PHP completo y sirve aplicaciones PHP directamente, sin un proceso PHP-FPM separado. FlyEnv lo gestiona como un módulo dedicado: instala varias versiones de FrankenPHP, inícialas y deténlas como servicios, edita el Caddyfile y lee los logs sin salir de la app. Tus sitios obtienen su propio puerto y HTTPS automático desde el primer momento, sin ningún PHP-FPM que configurar.

![Vista general del módulo FrankenPHP en FlyEnv](https://oss.macphpstudy.com/image/features/frankenphp-1.webp)

## Gestión de versiones de FrankenPHP

Instala y mantén varias versiones de FrankenPHP en paralelo desde la pestaña **Version Manager** (Gestor de versiones).

- **Fuentes de instalación:** builds estáticos en macOS, Linux y Windows, además de Homebrew en macOS y Linux — FlyEnv añade automáticamente el tap `dunglas/frankenphp` para que la fórmula esté disponible. MacPorts y SDKMAN no se utilizan para FrankenPHP.
- **Instalaciones estáticas en macOS y Linux:** FlyEnv descarga el binario único de FrankenPHP, lo copia en su lugar, lo marca como ejecutable y elimina el atributo de cuarentena de macOS para que pueda ejecutarse.
- **Instalaciones estáticas en Windows:** FrankenPHP se distribuye como un archivo comprimido que incluye un runtime de PHP completo. Durante la instalación, FlyEnv genera automáticamente un `php.ini` a partir de una plantilla, activando solo las extensiones realmente presentes en el directorio `ext/` incluido.
- **Columnas de versión de PHP y Caddy:** la tabla de versiones analiza `frankenphp --version` y muestra tanto la versión de PHP integrada como la versión de Caddy de cada build instalado, de modo que siempre sabes exactamente qué runtime lleva cada versión de FrankenPHP.
- **Acciones por versión:** abre el directorio de la versión en el gestor de archivos y, en Windows, edita también el `php.ini` incluido mediante el mismo diálogo de configuración que usa el [módulo PHP](/es/features/php).

![Version Manager de FrankenPHP con las columnas de versión de PHP y Caddy](https://oss.macphpstudy.com/image/features/frankenphp-2.webp)

## Gestión del servicio

La pestaña **Service** (Servicio) lista cada versión instalada de FrankenPHP con controles de inicio, parada y reinicio, junto con la información de versiones de PHP y Caddy descrita arriba.

- FlyEnv lanza una versión con `frankenphp run --config <baseDir>/frankenphp/Caddyfile --pidfile …`, de modo que el proceso se rastrea mediante el pidfile y puede detenerse limpiamente.
- En Linux, el servicio se inicia a través del helper de root de FlyEnv cuando se necesitan privilegios elevados.
- FrankenPHP sirve sitios PHP directamente a través de su motor Caddy integrado — no hay ningún proceso PHP-FPM que instalar, configurar o mantener en ejecución.

![Pestaña Service de FrankenPHP con una versión en ejecución](https://oss.macphpstudy.com/image/features/frankenphp-3.webp)

## Configuración

La pestaña **Config File** (Archivo de configuración) edita el Caddyfile global con el que se ejecuta FrankenPHP.

- **Editor de texto plano:** el Caddyfile se edita como texto sin formato — FlyEnv no lo envuelve en un formulario.
- **Basado en plantilla:** el archivo se genera a partir de una plantilla (disponible en inglés y chino) e importa todos los vhost de los sitios desde `vhost/frankenphp/*`, de modo que la configuración de los sitios permanece separada de los ajustes globales.
- **`php.ini` en Windows:** como los builds de FrankenPHP para Windows incluyen su propio runtime de PHP, el `php.ini` de la versión puede abrirse y ajustarse desde el menú de acciones de la versión usando el diálogo de configuración del módulo PHP.

![Visor de logs de FrankenPHP](https://oss.macphpstudy.com/image/features/frankenphp-4.webp)

## Integración con sitios

Los sitios de tipo PHP creados en **Host** obtienen automáticamente un vhost de FrankenPHP con la directiva `php_server`, por lo que se ejecutan como aplicaciones FrankenPHP reales en lugar de una simple entrega de archivos estáticos — la [solución Laravel](/es/solutions/laravel) muestra un stack de framework completo funcionando con este tipo de configuración.

- **Puertos por sitio:** cada sitio obtiene su propio puerto dedicado de FrankenPHP (`port.frankenphp`), de modo que FrankenPHP puede servir el mismo sitio en paralelo con [Nginx](/es/features/nginx), Apache o Caddy. Los sitios creados antes de que existiera este comportamiento recurren al puerto compartido de Caddy.
- **HTTPS automático:** los vhosts incluyen `tls internal`, lo que otorga a cada sitio un certificado de confianza local sin configuración adicional; los dominios y certificados de los sitios se tratan en [Sitios locales, dominios personalizados y HTTPS](/es/features/local-sites-https).
- **Proxy inverso por sitio:** un sitio puede, en su lugar, actuar como proxy inverso hacia otro servicio local a través de su vhost de FrankenPHP.
- **Vhosts autorregenerados:** cuando se inicia una versión de FrankenPHP, FlyEnv regenera cualquier vhost de sitio que falte antes de lanzar el proceso.

Para una visión más amplia de cuándo elegir FrankenPHP frente a PHP-FPM, RoadRunner o Swoole, consulta la [guía de despliegue de PHP](/es/guide/deploy-php-projects-without-docker).

## Logs

La pestaña **Log** sigue `frankenphp.log` y también enumera cada archivo `frankenphp-*.log` en el directorio base de FrankenPHP, de modo que los logs específicos de cada versión y de cada sitio se pueden leer en un solo lugar.

![Visor de logs de FrankenPHP](https://oss.macphpstudy.com/image/features/frankenphp-5.webp)

<FeatureRelatedLinks locale="es" slug="frankenphp" />

## Notas de compatibilidad

FlyEnv gestiona el runtime de FrankenPHP, su configuración y su integración con los sitios; no garantiza que cada versión de FrankenPHP o cada extensión de PHP incluida esté disponible en todos los sistemas operativos. MacPorts y SDKMAN no son fuentes de instalación para este módulo, y FrankenPHP no ofrece panel de administración — verificar los requisitos del framework y de las extensiones contra el build instalado sigue siendo responsabilidad del proyecto. Toma la [página de descarga](/es/download) y las notas de la versión actual como referencia de los paquetes soportados.
