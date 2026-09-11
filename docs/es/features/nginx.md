---
layout: doc
titleTemplate: false
title: 'Gestor de versiones de Nginx y servidor de sitios local | FlyEnv'
description: 'Instala y cambia versiones de Nginx, edita nginx.conf de forma visual y sirve sitios locales con reglas de reescritura y proxies inversos.'
head:
  - - meta
    - name: description
      content: 'Instala y cambia versiones de Nginx, edita nginx.conf de forma visual y sirve sitios locales con reglas de reescritura y proxies inversos.'
  - - meta
    - property: og:title
      content: 'Gestor de versiones de Nginx y servidor de sitios local | FlyEnv'
  - - meta
    - property: og:description
      content: 'Instala y cambia versiones de Nginx, edita nginx.conf de forma visual y sirve sitios locales con reglas de reescritura y proxies inversos.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/es/features/nginx
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/es/features/nginx
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Nginx en FlyEnv

Nginx es un servidor web y proxy inverso de código abierto, usado tanto para servir sitios directamente como para dirigir el tráfico hacia servidores de aplicaciones como PHP-FPM. FlyEnv convierte Nginx en una parte gestionada de tu stack local: instala varias versiones en paralelo, ejecuta una de ellas como servicio en segundo plano desde la barra lateral o la bandeja del sistema, y edita `nginx.conf` mediante un formulario visual o un editor de código fuente completo. Cada sitio de tipo PHP que creas en FlyEnv obtiene su propio vhost de Nginx generado automáticamente, con puertos por sitio, reglas de reescritura que reconocen el framework y soporte de proxy inverso. Los sitios en FlyEnv se tratan de principio a fin en la [guía de Host](/es/guide/host).

![Vista general del módulo Nginx de FlyEnv](https://oss.macphpstudy.com/image/features/nginx-1.webp)

## Gestión de versiones de Nginx

Instala varias versiones de Nginx desde **Nginx → Version Manager** y mantenlas en paralelo.

- **Varias fuentes de instalación:** compilaciones estáticas en todas las plataformas, además de Homebrew en macOS y Linux, y MacPorts en macOS.
- **Versiones personalizadas:** registra un directorio que contenga tu propia compilación de Nginx; FlyEnv localiza el binario en su interior y lo muestra junto a las versiones gestionadas.
- **Configuración compartida:** todas las versiones instaladas usan un único `nginx.conf` común, así que cambiar de versión nunca hace perder tus ajustes.

![Version Manager de Nginx con fuentes de instalación](https://oss.macphpstudy.com/image/features/nginx-2.webp)

## Gestión del servicio

Nginx es un servicio real en segundo plano en FlyEnv, no solo una lista de versiones.

- **Una sola versión en ejecución a la vez:** se pueden instalar varias versiones, pero solo una se ejecuta; iniciar una versión mientras otra está en marcha se bloquea en la pestaña **Service**.
- **Control desde la barra lateral y la bandeja:** inicia o detén Nginx desde el interruptor del módulo en la barra lateral, o directamente desde la bandeja del sistema sin abrir la ventana principal.
- **Reparación automática de la configuración al iniciar:** FlyEnv corrige la directiva `user` y las rutas temporales en la configuración, y regenera el include `enable-php-<version>.conf` para cada versión de PHP que usan tus sitios, de modo que la integración con PHP-FPM siempre coincida con la configuración actual.

![Tabla de servicio de Nginx con controles de inicio y detención](https://oss.macphpstudy.com/image/features/nginx-3.webp)

## Configuración

La pestaña **Config File** edita el `nginx.conf` compartido de dos maneras.

- **Formulario de ajustes comunes:** ajusta las directivas que se modifican con frecuencia sin tocar el archivo — `keepalive_timeout`, `gzip`, `gzip_min_length`, `gzip_comp_level`, `client_max_body_size`, `server_names_hash_bucket_size` y `server_names_hash_max_size`, además de los tamaños de buffer de cabecera y cuerpo del cliente.
- **Editor de código fuente completo:** cambia al editor en bruto para cualquier cosa que el formulario no cubra, con restauración de la configuración predeterminada en un clic.

![Editando nginx.conf con el formulario de ajustes comunes](https://oss.macphpstudy.com/image/features/nginx-4.webp)

## Integración con los sitios

El módulo Host de FlyEnv no tiene un único servidor web predeterminado: los sitios de tipo PHP obtienen configuraciones de vhost en los cuatro servidores web —Nginx, [Apache](/es/features/apache), [Caddy](/es/features/caddy) y [FrankenPHP](/es/features/frankenphp)— al mismo tiempo, y el servidor que esté en ejecución es el que sirve el sitio. La creación de sitios en sí se explica en la [guía de Host](/es/guide/host).

- **Vhost y puertos por sitio:** cada sitio de tipo PHP obtiene su propio archivo vhost de Nginx generado y sus propios puertos de Nginx (80/443 de forma predeterminada), independientes de los puertos usados por Apache, Caddy o FrankenPHP —así, el mismo sitio puede ser servido por varios servidores web a la vez, como demuestra la [guía de HTML como PHP con varios servidores](/es/guide/parse-html-as-php-multi-servers). Los sitios de otros tipos son diferentes: los sitios de Node, Java, Go y Python se alcanzan a través de un proxy inverso, y los sitios de Tomcat viven en `server.xml`. Los dominios y el HTTPS de los sitios se tratan en [Sitios locales, dominios personalizados y HTTPS](/es/features/local-sites-https).
- **Reglas de reescritura automáticas:** FlyEnv detecta proyectos de [WordPress](/es/solutions/wordpress), [Laravel](/es/solutions/laravel) y Yii, y rellena previamente las reglas de reescritura de URL correspondientes en el vhost del sitio.
- **Proxy inverso por sitio:** añade reglas de proxy inverso a un sitio para reenviar rutas a servidores de aplicaciones locales —la [guía de proxy inverso multiservidor con NestJS](/es/guide/reverse-proxy-nestjs-multi-servers) recorre un ejemplo completo.
- **PHP a través de PHP-FPM:** los sitios PHP se sirven mediante includes de PHP-FPM por versión, lo que permite a cada sitio elegir su propia versión de PHP entre las instaladas en el [módulo PHP](/es/features/php).

## Logs

La página del módulo Nginx incluye las pestañas dedicadas **Error Log** y **Log (access)** para los logs de todo el servidor. Cada sitio también escribe sus propios logs de acceso y de errores, que puedes abrir desde el visor de logs del sitio en el módulo Host —útil al depurar un solo dominio sin tener que revisar el log global.

![Visores de logs de errores y de acceso de Nginx](https://oss.macphpstudy.com/image/features/nginx-5.webp)

<FeatureRelatedLinks locale="es" slug="nginx" />

## Notas de compatibilidad

FlyEnv gestiona el binario de Nginx, el ciclo de vida de su proceso y la configuración generada. Todas las versiones instaladas comparten un único `nginx.conf` común, así que los cambios hechos desde el formulario visual o el editor en bruto se aplican sin importar qué versión inicies —tenlo en cuenta antes de confiar en una directiva que solo existe en versiones más recientes. Las fuentes de instalación disponibles difieren según la plataforma (MacPorts es exclusivo de macOS y Windows usa compilaciones estáticas). Verifica los requisitos de tu sitio frente a la compilación de Nginx instalada, y toma la [página de descarga](/es/download) y las notas de la versión actual como referencia de los paquetes soportados.
