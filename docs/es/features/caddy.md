---
layout: doc
titleTemplate: false
title: 'Gestor de versiones de Caddy con HTTPS automático | FlyEnv'
description: 'Ejecuta Caddy con un Caddyfile gestionado, puertos por sitio, HTTPS interno automático y proxies inversos.'
head:
  - - meta
    - name: description
      content: 'Ejecuta Caddy con un Caddyfile gestionado, puertos por sitio, HTTPS interno automático y proxies inversos.'
  - - meta
    - property: og:title
      content: 'Gestor de versiones de Caddy con HTTPS automático | FlyEnv'
  - - meta
    - property: og:description
      content: 'Ejecuta Caddy con un Caddyfile gestionado, puertos por sitio, HTTPS interno automático y proxies inversos.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/es/features/caddy
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/es/features/caddy
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Caddy en FlyEnv

Caddy es un servidor web de código abierto que se configura a través de un único Caddyfile, con HTTPS automático integrado. FlyEnv convierte Caddy en una parte gestionada de tu stack local: instala versiones desde varias fuentes, ejecuta una de ellas como servicio con recarga automática de la configuración, y deja que FlyEnv genere el vhost de cada sitio de tipo PHP que crees. Cada uno de esos sitios obtiene sus propios puertos de Caddy, HTTPS interno automático y reglas de proxy inverso por sitio, todo unido por un único Caddyfile gestionado.

![Vista general del módulo Caddy de FlyEnv](https://oss.macphpstudy.com/image/features/caddy-1.webp)

## Gestión de versiones de Caddy

Instala Caddy desde **Caddy → Version Manager** y ten a mano las versiones que necesites.

- **Varias fuentes de instalación:** compilaciones Static de la lista de versiones online de FlyEnv en todas las plataformas —las entradas de Windows enlazan a los releases de GitHub—, además de Homebrew en macOS y Linux, y MacPorts en macOS.
- **Versiones personalizadas:** apunta FlyEnv a una carpeta que contenga un binario de Caddy compilado por ti o instalado de forma externa, y aparecerá en la lista de versiones junto a las gestionadas.
- **Una única versión en ejecución:** se pueden instalar varias versiones, pero solo una se ejecuta a la vez como servicio de Caddy.

![Gestor de versiones de Caddy con fuentes de instalación](https://oss.macphpstudy.com/image/features/caddy-2.webp)

## Gestión del servicio

Caddy se ejecuta como un proceso en primer plano supervisado por FlyEnv, lanzado con `caddy run --config <baseDir>/caddy/Caddyfile --watch` — en Linux a través del helper de root de FlyEnv para poder vincularse a puertos privilegiados.

- **Recarga automática:** la opción `--watch` hace que Caddy se recargue a sí mismo cada vez que cambia la configuración, de modo que las ediciones del Caddyfile o del vhost de un sitio surten efecto sin un reinicio manual.
- **Control desde la barra lateral y la bandeja:** inicia o detén Caddy desde el interruptor del módulo en la barra lateral, o directamente desde la bandeja del sistema sin abrir la ventana principal.
- **Reparación de vhosts al iniciar:** cuando el servicio arranca, FlyEnv reconstruye los archivos vhost que falten en tus sitios, de modo que un sitio recién añadido o restaurado se sirve de inmediato.

![Pestaña de servicio de Caddy con controles de inicio y parada](https://oss.macphpstudy.com/image/features/caddy-3.webp)

## Configuración

Caddy utiliza un único **Caddyfile** global, generado por FlyEnv a partir de una plantilla: define el directorio de almacenamiento de SSL y el archivo de registro, y termina con una línea `import vhost/caddy/*` que incorpora el vhost de cada sitio.

- **Editor de código fuente:** la pestaña **Config File** edita el Caddyfile directamente en un editor de código fuente completo; no hay un formulario visual de ajustes, así que tienes a tu disposición toda la sintaxis del Caddyfile.
- **Aplicada automáticamente:** como el servicio se ejecuta con `--watch`, guardar el archivo es suficiente para que Caddy aplique la nueva configuración.

## Integración con los sitios

Caddy es uno de los servidores web que pueden servir los sitios que creas en el módulo Host de FlyEnv. Solo los sitios de tipo PHP obtienen un vhost de Caddy generado, conectado a las versiones de PHP-FPM del [módulo PHP](/es/features/php); los sitios de Node, Java, Go y Python se alcanzan a través de un proxy inverso —la [guía de proxy inverso con varios servidores](/es/guide/reverse-proxy-nestjs-multi-servers) muestra ese patrón en acción— y los sitios Tomcat viven en `server.xml`.

- **Puertos por sitio:** cada sitio de tipo PHP obtiene sus propios puertos de Caddy (80/443 por defecto), independientes de los puertos usados por [Nginx](/es/features/nginx), Apache o [FrankenPHP](/es/features/frankenphp) —de modo que el mismo sitio puede ser servido por varios servidores web a la vez.
- **HTTPS automático:** los vhosts de los sitios usan `tls internal`, por lo que Caddy emite y confía en un certificado local automáticamente, o bien puedes apuntar el sitio a tus propios archivos de certificado, como los generados por el [módulo MkCert](/es/features/mkcert). Los dominios y el HTTPS se tratan en [Sitios locales, dominios personalizados y HTTPS](/es/features/local-sites-https).
- **Proxy inverso por sitio:** añade reglas de proxy inverso a un sitio para reenviar rutas a servidores de aplicaciones locales; FlyEnv las escribe en el vhost de Caddy del sitio.

![Vhost de sitio Caddy con regla de proxy inverso](https://oss.macphpstudy.com/image/features/caddy-4.webp)

## Registros

La página del módulo Caddy incluye una única pestaña **Log** que muestra el `caddy/caddy.log` de todo el servidor. Los sitios también mantienen sus propios registros de acceso y error, que se abren desde el visor de registros de cada sitio en el módulo Host — útil para aislar el tráfico de un dominio concreto. No hay un panel de administración integrado; la pestaña de registro y el Caddyfile gestionado son toda la superficie operativa.

<FeatureRelatedLinks locale="es" slug="caddy" />

## Notas de compatibilidad

FlyEnv gestiona el binario de Caddy, el ciclo de vida de su proceso y la configuración generada; no garantiza que todos los plugins de Caddy o las variantes de compilación personalizadas estén disponibles en todos los sistemas operativos. El Caddyfile se edita en crudo —no hay formulario visual— y, como el servicio se ejecuta con `--watch`, un cambio guardado se aplica de inmediato, así que valida las ediciones antes de confiar en ellas. Las fuentes de instalación disponibles varían según la plataforma (MacPorts es exclusivo de macOS, y en Windows la fuente Static es la única). Toma la [página de descargas](/es/download) y las notas de la versión actual como referencia de los paquetes soportados.
