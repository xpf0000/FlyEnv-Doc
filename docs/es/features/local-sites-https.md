---
layout: doc
titleTemplate: false
title: 'Sitios locales y HTTPS en FlyEnv: guía de desarrollo local'
description: 'Instala, configura y gestiona sitios locales y HTTPS en FlyEnv para el desarrollo local.'
head:
  - - meta
    - name: description
      content: 'Instala, configura y gestiona sitios locales y HTTPS en FlyEnv para el desarrollo local.'
  - - meta
    - property: og:title
      content: 'Sitios locales y HTTPS en FlyEnv: guía de desarrollo local'
  - - meta
    - property: og:description
      content: 'Instala, configura y gestiona sitios locales y HTTPS en FlyEnv para el desarrollo local.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/es/features/local-sites-https
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/es/features/local-sites-https
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Sitios locales, dominios personalizados y HTTPS en FlyEnv

El módulo Host asigna un proyecto local a una dirección fácil de usar en el navegador y a la configuración del servidor web que lo servirá. Una entrada de sitio puede incluir un document root, alias, puertos por servidor, una versión de PHP opcional, reglas de reescritura, reglas de proxy inverso y ajustes de certificados HTTPS.

## Qué controla una entrada de sitio

- **Dominio y alias:** elige un hostname como `myapp.test` y añade alias cuando el mismo proyecto necesite más de un nombre local.
- **Document root:** apunta un sitio estático o una aplicación PHP al directorio que se debe servir. Los frameworks suelen usar un directorio `public`.
- **Puertos del servidor:** configura los puertos HTTP y HTTPS para Nginx, Apache, Caddy o FrankenPHP; los ajustes avanzados muestran el puerto de cada servidor por separado.
- **Vinculación de PHP:** selecciona una versión de PHP instalada para un sitio PHP, o déjalo como sitio estático cuando no se necesite un manejador de PHP.
- **Reglas de reescritura:** edita la configuración de reescritura de Nginx generada para frameworks que enrutan a través de un front controller.
- **Proxy inverso:** asigna una ruta como `/api` a la URL de un servicio local como `http://127.0.0.1:3000`.
- **HTTPS:** activa Auto SSL para obtener un certificado generado localmente, o proporciona los archivos de certificado y clave para una configuración personalizada.

FlyEnv escribe las asignaciones de host configuradas en el archivo hosts del sistema operativo cuando el sitio necesita un nombre local; el [servidor DNS integrado](/es/features/dns-server) es una alternativa que resuelve los dominios de los sitios sin tocar el archivo hosts en absoluto. El permiso del helper es la razón por la que la configuración inicial puede pedir una contraseña de administrador.

## Un flujo de trabajo predecible para sitios locales

1. Inicia el servidor web y el runtime que el proyecto necesita (por ejemplo, Nginx más PHP-FPM).
2. Abre **Host** y elige **Añadir sitio**.
3. Introduce el dominio local y el document root correcto; para Laravel y muchos frameworks PHP, usa el directorio `public` del proyecto.
4. Selecciona la versión de PHP o el modo de sitio estático y define el puerto del servidor.
5. Activa Auto SSL cuando el proyecto necesite HTTPS, cookies seguras, callbacks de OAuth o APIs del navegador que requieran un origen seguro.
6. Añade reglas de reescritura o destinos de proxy inverso si el proyecto tiene un front controller o un servicio de aplicación independiente.
7. Guarda el sitio, inicia los servicios seleccionados y abre el enlace del sitio desde la lista de Host.

La [guía de Host](/es/guide/host) contiene capturas de pantalla y la configuración completa campo por campo. También explica los alias, `localhost` con puertos explícitos, las plantillas de reescritura y la resolución de problemas.

## Conecta un servicio de proyecto a un dominio

Host no tiene por qué lanzar el proceso de la aplicación por sí mismo. Mantén el proceso en su módulo de lenguaje y haz proxy hacia su puerto local:

| Servicio de aplicación | Listener local | Regla de Host |
| --- | --- | --- |
| Node.js / NestJS | `127.0.0.1:3000` | `https://api.test` → `http://127.0.0.1:3000` |
| PHP Worker o RoadRunner | `127.0.0.1:8787` | `https://worker.test` → `http://127.0.0.1:8787` |
| Frontend estático | document root del servidor web | `https://frontend.test` → raíz del proyecto |

Usa la [página de la función Node.js](/es/features/nodejs) para la parte del servicio de proyecto de este patrón y la [página de la función PHP](/es/features/php) para las opciones de PHP-FPM y workers.

## HTTPS y certificados

Auto SSL crea una Certificate Authority local de FlyEnv cuando es necesario, emite un certificado para los alias del sitio y guarda el certificado y la clave junto con la configuración del sitio. La integración de [MkCert](/es/features/mkcert) también puede generar certificados de desarrollo confiables localmente. Si un navegador o sistema operativo no confía en la CA automáticamente, sigue las instrucciones de certificados específicas de la plataforma en la [guía de Host](/es/guide/host).

No uses un certificado local como prueba de que un sitio es de confianza pública: estos certificados son para desarrollo y pruebas locales. Para una vista previa pública, combina el servicio local con [Cloudflare Tunnel](/es/guide/cloudflare-tunnel-local-development) o despliégalo en un entorno destinado al tráfico externo.

<FeatureRelatedLinks locale="es" slug="local-sites-https" />

## Notas de compatibilidad

Las funciones de sitios dependen de los servidores web y runtimes que tengas instalados en FlyEnv, y la confianza en los certificados requiere que la CA de FlyEnv esté instalada en tu sistema. Verifica el comportamiento de los alias, los puertos y HTTPS en tu propia máquina, y toma la [página de descarga](/es/download) y las notas de la versión actual como referencia de los paquetes compatibles.
