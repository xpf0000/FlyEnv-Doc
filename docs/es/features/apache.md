---
layout: doc
titleTemplate: false
title: 'Gestor de versiones de Apache y servidor de sitios locales | FlyEnv'
description: 'Ejecuta Apache desde Homebrew, MacPorts o builds estáticas, edita la configuración por versión y sirve sitios locales.'
head:
  - - meta
    - name: description
      content: 'Ejecuta Apache desde Homebrew, MacPorts o builds estáticas, edita la configuración por versión y sirve sitios locales.'
  - - meta
    - property: og:title
      content: 'Gestor de versiones de Apache y servidor de sitios locales | FlyEnv'
  - - meta
    - property: og:description
      content: 'Ejecuta Apache desde Homebrew, MacPorts o builds estáticas, edita la configuración por versión y sirve sitios locales.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/es/features/apache
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/es/features/apache
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Apache en FlyEnv

Apache HTTP Server (`httpd`) es un servidor web open source con una larga historia, todavía habitual en stacks clásicos de estilo LAMP y en cualquier proyecto que necesite `.htaccess` o configuración basada en módulos. FlyEnv ejecuta Apache como un servidor web local gestionado: instala varias builds de Apache desde gestores de paquetes o la lista de descargas estáticas, edita la configuración de cada versión in situ y sirve sitios locales mediante archivos vhost por sitio. El servicio `httpd` se inicia en primer plano bajo el control de FlyEnv, y la configuración de puertos, logs y módulos se regenera por ti en cada arranque. Si vienes de un paquete de estilo XAMPP, la [comparativa FlyEnv vs XAMPP](/es/compare/xampp) explica en qué se diferencia este enfoque gestionado.

![Vista general del módulo Apache de FlyEnv](https://oss.macphpstudy.com/image/features/apache-1.webp)

## Gestión de versiones de Apache

Instala builds de Apache en paralelo desde **Apache → Version Manager** y cambia la versión en ejecución en cualquier momento.

- **Fuentes de gestores de paquetes:** en macOS, instala Apache desde Homebrew (fórmula `httpd`) o MacPorts; en Linux, Homebrew es la fuente de instalación. FlyEnv detecta las instalaciones que esos gestores de paquetes ya administran.
- **Builds estáticas en Windows:** la lista de instalación de Windows descarga builds de Apache Lounge directamente.
- **Versiones personalizadas:** ¿ya tienes tu propia build de Apache? Añade su directorio y FlyEnv detectará el binario y lo mostrará junto a las demás instalaciones.

![Version Manager de Apache con fuentes de instalación](https://oss.macphpstudy.com/image/features/apache-2.webp)

## Gestión del servicio

Apache es un servicio de instancia única en FlyEnv: se pueden instalar muchas versiones, pero solo una se ejecuta a la vez, de modo que las asignaciones de puertos de los sitios no resultan ambiguas.

- **Ciclo de vida por versión:** inicia, detén o reinicia la versión de Apache en ejecución desde la pestaña Service, el interruptor de la barra lateral o la bandeja del sistema.
- **Ejecución en primer plano:** en macOS, FlyEnv lanza `httpd` con su propio archivo de configuración y rutas explícitas de pid y logs; en Linux se ejecuta a través del helper de root de FlyEnv; en Windows el servidor se lanza con la configuración de esa versión. Iniciar otra versión mientras ya hay una en ejecución está bloqueado en la pestaña Service: detén primero la versión activa para cambiar.
- **Integración con el PATH:** la tabla Service muestra la ruta, el estado del entorno, el alias y la nota por versión de cada instalación.

## Configuración

Cada versión de Apache instalada obtiene su propio archivo de configuración principal, generado automáticamente y guardado por versión, de modo que las builds nunca comparten ni sobrescriben los ajustes de otras.

- **Archivo de configuración por versión:** la configuración se genera a partir de la salida de `httpd -V` de la propia versión y se guarda junto al resto de los datos de Apache de FlyEnv, asociada al binario específico.
- **Formulario de ajustes comunes:** ajusta las directivas que cambian con más frecuencia —`Timeout`, `KeepAlive`, `KeepAliveTimeout`, `MaxKeepAliveRequests` y `LimitRequestBody`— desde un formulario visual, sin editar el archivo a mano.
- **Editor de código fuente completo:** cambia al editor en crudo para todo lo que el formulario no cubre, con restauración de la configuración predeterminada con un clic.
- **Módulos activados automáticamente:** cuando se genera la configuración, FlyEnv activa a la fuerza los módulos de los que dependen los sitios locales, incluidos headers, deflate, proxy, proxy_fcgi, ssl, rewrite y access_compat, y conecta el directorio include de vhosts.
- **Directivas Listen reescritas al arrancar:** FlyEnv recopila el puerto Apache de cada sitio y reescribe las directivas `Listen` entre sus marcadores gestionados cada vez que el servicio arranca, de modo que los cambios de puerto en los sitios nunca dejan listeners obsoletos.

![Formulario de ajustes comunes de Apache y editor de configuración](https://oss.macphpstudy.com/image/features/apache-3.webp)

## Integración con sitios

Cada sitio del módulo Host servido por Apache obtiene su propio archivo vhost con sus propios campos de puerto (80/443 por defecto), de modo que Apache puede servir el mismo sitio junto a Nginx o Caddy, cada uno en sus propios puertos. Los sitios PHP se entregan a PHP-FPM a través del módulo proxy_fcgi, usando la versión que tengas instalada en el [módulo PHP](/es/features/php); los stacks clásicos como [WordPress](/es/solutions/wordpress) funcionan con esta configuración sin ajustes adicionales. La creación de sitios se trata en la [guía de Host](/es/guide/host). Los dominios de sitios, los certificados HTTPS y la inspección de vhosts por sitio se tratan en [Sitios locales, dominios personalizados y HTTPS](/es/features/local-sites-https), y la [guía de HTML-como-PHP multiservidor](/es/guide/parse-html-as-php-multi-servers) muestra cómo encaja Apache en un stack donde varios servidores sirven un mismo sitio.

![Ajustes de vhost y puertos de sitio para Apache](https://oss.macphpstudy.com/image/features/apache-4.webp)

## Logs

Las pestañas **Error Log** y **Log(access)** muestran los logs de error y de acceso compartidos de Apache, con búsqueda y actualización integradas. Cada sitio también tiene sus propios logs por sitio, visibles desde el módulo Host, de modo que un sitio muy activo nunca ahoga al resto.

<FeatureRelatedLinks locale="es" slug="apache" />

## Notas de compatibilidad

Apache **no tiene fuente de instalación Static en macOS y Linux**: en esas plataformas FlyEnv trabaja con instalaciones de Homebrew (macOS y Linux) o MacPorts (macOS), o con directorios personalizados que registres tú mismo. La lista de builds estáticas en línea (paquetes de Apache Lounge) es solo para Windows. Ejecutar en puertos privilegiados como 80/443 en Linux requiere el helper de root de FlyEnv. Consulta la [página de descarga](/es/download) y las notas de la versión actual para conocer las plataformas y versiones compatibles con tu build de FlyEnv.
