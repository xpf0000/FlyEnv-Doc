---
layout: doc
titleTemplate: false
title: 'Gestor de versiones de PHP, PHP-FPM y herramientas de Composer | FlyEnv'
description: 'Instala y cambia versiones de PHP, gestiona PHP-FPM, php.ini y extensiones, aísla los runtimes de cada proyecto, gestiona Composer y crea proyectos de WordPress o Laravel en FlyEnv.'
head:
  - - meta
    - name: description
      content: 'Instala y cambia versiones de PHP, gestiona PHP-FPM, php.ini y extensiones, aísla los runtimes de cada proyecto, gestiona Composer y crea proyectos de WordPress o Laravel en FlyEnv.'
  - - meta
    - property: og:title
      content: 'Gestor de versiones de PHP, PHP-FPM y herramientas de Composer | FlyEnv'
  - - meta
    - property: og:description
      content: 'Instala y cambia versiones de PHP, gestiona PHP-FPM, php.ini y extensiones, aísla los runtimes de cada proyecto, gestiona Composer y crea proyectos de WordPress o Laravel en FlyEnv.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/es/features/php
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/es/features/php
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Desarrollo local con PHP y FlyEnv

PHP es un lenguaje de scripting del lado del servidor que se usa para construir sitios web y aplicaciones web dinámicas, desde sitios de WordPress hasta aplicaciones con frameworks como Laravel y Symfony. FlyEnv gestiona todo el lado PHP de tu stack local desde una sola aplicación: múltiples versiones de PHP, PHP-FPM por versión, gestión visual de `php.ini` y de las extensiones, runtimes a nivel de proyecto, Composer y generación con un clic de las aplicaciones PHP más comunes.

![Vista general del módulo PHP de FlyEnv](https://oss.macphpstudy.com/image/features/php-1.webp)

## Gestión de versiones de PHP

Instala varias versiones de PHP en paralelo desde **PHP → Version Manager** y cambia entre ellas en cualquier momento.

- **Varias fuentes de instalación:** compilaciones estáticas en todas las plataformas, además de Homebrew (macOS y Linux) y MacPorts (macOS) para las instalaciones de PHP gestionadas por esos gestores de paquetes.
- **Versiones personalizadas:** apunta FlyEnv a cualquier directorio que contenga tu propia compilación de PHP; busca los binarios `php` y `php-fpm` y los muestra junto a las versiones gestionadas.
- **Cambio de versión en la CLI:** define a qué versión de PHP resuelve el comando `php` de tu terminal. FlyEnv añade o elimina el directorio bin de la versión en tu `PATH` e indica si la entrada actual fue establecida por FlyEnv o por otra herramienta.
- **Alias y nota por versión:** asigna a cada instalación un alias corto y una nota para que las compilaciones similares sigan siendo distinguibles en la lista.

![Version Manager de PHP con fuentes de instalación](https://oss.macphpstudy.com/image/features/php-2.webp)

![Tabla de servicios de PHP con columnas de versión, ruta, entorno y alias](https://oss.macphpstudy.com/image/features/php-3.webp)

## Gestión del servicio PHP-FPM

PHP-FPM es un módulo dedicado en FlyEnv, pensado para servir sitios a través de Nginx, Apache o Caddy.

- **Ciclo de vida por versión:** inicia, detén o reinicia cada versión de PHP-FPM de forma individual, o usa el interruptor de la barra lateral (también disponible en la bandeja del sistema) para iniciar o detener todas las versiones instaladas a la vez.
- **Basado en sockets en macOS y Linux:** cada versión escucha en su propio socket unix, de modo que varias versiones de PHP-FPM pueden ejecutarse simultáneamente y cada sitio puede dirigirse a una distinta. FlyEnv regenera la configuración de integración con el servidor web cuando una versión se inicia.
- **`php-fpm.conf` editable:** abre y edita la configuración del pool de FPM por versión (macOS y Linux), con visores integrados del log de FPM y del slow log.
- **Windows funciona como FastCGI:** PHP sirve al servidor web a través de FastCGI, y el número de procesos de trabajo de FastCGI (`PHP_FCGI_CHILDREN`, 1–64) es ajustable por versión.

![Módulo PHP-FPM con controles de servicio por versión](https://oss.macphpstudy.com/image/features/php-4.webp)

![Editando php-fpm.conf para una versión de PHP](https://oss.macphpstudy.com/image/features/php-5.webp)

## Configuración de php.ini

Cada versión de PHP instalada tiene su propio `php.ini`, editable desde el menú de acciones de la versión.

- **Formulario de ajustes comunes:** activa o ajusta las directivas que se modifican con frecuencia — `memory_limit`, `max_execution_time`, `upload_max_filesize`, `post_max_size`, `max_file_uploads`, `display_errors`, `log_errors`, `error_reporting`, `short_open_tag`, `date.timezone`, rutas del CA bundle y más — sin editar el archivo a mano.
- **Editor de código fuente completo:** cambia a la vista del archivo en bruto para cualquier cosa que el formulario no cubra, con restauración de la configuración predeterminada en un clic.
- **Gestor de `disable_functions`:** refuerza una versión desactivando funciones peligrosas desde una lista de verificación con búsqueda de unas 170 entradas comunes; los cambios se escriben de vuelta en `php.ini`.

![Formulario de ajustes comunes de php.ini](https://oss.macphpstudy.com/image/features/php-6.webp)

![Gestionando disable_functions con una lista de verificación con búsqueda](https://oss.macphpstudy.com/image/features/php-7.webp)

## Gestión de extensiones

Abre **Extensions** desde cualquier versión de PHP para ver qué está cargado e instalar lo que falte. La [guía de instalación de extensiones](/es/guide/php-extensions-install) muestra un ejemplo completo.

- **Extensiones cargadas:** una lista con búsqueda de los módulos que la versión carga actualmente.
- **PHP de Homebrew y MacPorts:** explora las fórmulas de extensiones disponibles para esa versión de PHP, instálalas o desinstálalas en el terminal integrado y copia un fragmento `extension=xxx.so` listo para usar — o una plantilla completa de configuración de Xdebug — directamente en `php.ini`.
- **Windows:** activa o desactiva las DLL ya presentes en el directorio de extensiones, o descarga extensiones de la biblioteca en línea con un clic.
- **Navegación rápida:** salta directamente a `php.ini` o abre el directorio de extensiones en el gestor de archivos.

![Lista de extensiones cargadas para una versión de PHP](https://oss.macphpstudy.com/image/features/php-8.webp)

![Instalando una extensión de PHP desde Homebrew](https://oss.macphpstudy.com/image/features/php-9.webp)

## Aislamiento de PHP a nivel de proyecto

Proyectos distintos suelen necesitar versiones de PHP distintas. En **PHP → Projects**, registra cada carpeta de proyecto y vincúlala a su propio binario de PHP — o mantenla con la versión del sistema.

- **Runtime por proyecto:** haz doble clic en un proyecto para cambiar su versión de PHP; la elección se guarda en un archivo `.flyenv` dentro del directorio del proyecto, de modo que los terminales y editores lanzados desde FlyEnv usan el PHP correcto automáticamente.
- **Herramientas de apertura:** salta desde la fila de un proyecto a Terminal, PowerShell, VSCode, PhpStorm, WebStorm o Sublime con el entorno del proyecto ya cargado.
- **Versión de PHP por sitio:** cada sitio en **Host** elige su propia versión de PHP-FPM (o sigue siendo un sitio estático), y la lista de sitios muestra qué versión sirve a cada sitio.

![Lista de proyectos PHP con vinculación de versión de PHP por proyecto](https://oss.macphpstudy.com/image/features/php-10.webp)

## Gestión de Composer

La pestaña **Composer** gestiona Composer como cualquier otra herramienta versionada en FlyEnv.

- Instala y conserva varias versiones de Composer, desde compilaciones estáticas o Homebrew según tu plataforma.
- Añade tus propias instalaciones de Composer desde directorios personalizados.
- Vincula una versión específica de Composer a un proyecto junto con su versión de PHP, para que la instalación de dependencias use un toolchain coherente.

![Gestor de versiones de Composer](https://oss.macphpstudy.com/image/features/php-11.webp)

## Creación rápida de proyectos

**PHP → New Project** genera la estructura de las aplicaciones PHP más comunes sin salir de la app. Plantillas soportadas: WordPress, Laravel, Yii2, ThinkPHP, Symfony, CodeIgniter, CakePHP, Slim, ClassicPress y Contao.

1. Elige una plantilla y selecciona la versión del framework, la versión de PHP y la versión de Composer.
2. FlyEnv ejecuta el comando de creación de Composer en su terminal integrado, para que veas la salida real.
3. Cuando el proyecto esté listo, crea un sitio correspondiente con un clic: las reglas de reescritura del servidor web para ese framework ya vienen preconfiguradas.

![Cuadrícula de plantillas de proyectos PHP](https://oss.macphpstudy.com/image/features/php-12.webp)

![Creando un proyecto Laravel con selección de versión](https://oss.macphpstudy.com/image/features/php-13.webp)

## Más herramientas de PHP

- **Visores de logs:** abre el log de errores de PHP, el log de PHP-FPM o el slow log de FPM por versión, con búsqueda y actualización integradas.
- **phpMyAdmin:** desde el módulo de MySQL o MariaDB, configura phpMyAdmin en un solo paso: FlyEnv lo descarga y crea un sitio local servido por la versión de PHP más alta que tengas instalada.
- **PHP Obfuscator:** una utilidad de la página Tools que ofusca código fuente PHP con la versión de PHP que elijas, útil antes de entregar código a terceros.

## Servidores de aplicaciones PHP

Para PHP al estilo de servidor de aplicaciones, FlyEnv tiene módulos dedicados que complementan la configuración clásica de PHP-FPM:

- **FrankenPHP** — PHP integrado con un modelo moderno de servicio web.
- **RoadRunner** — workers de PHP, Laravel Octane y presets de fileserver.
- **Swoole CLI** — presets de Swoole nativo, Hyperf, EasySwoole, Laravel Octane y scripts personalizados.

La [guía de despliegue de PHP](/es/guide/deploy-php-projects-without-docker) explica cómo elegir entre ellos. Para sitios orientados al navegador, continúa con [Sitios locales, dominios personalizados y HTTPS](/es/features/local-sites-https); los stacks específicos de cada framework se tratan en las soluciones de [Laravel](/es/solutions/laravel) y [WordPress](/es/solutions/wordpress).

<FeatureRelatedLinks locale="es" slug="php" />

## Notas de compatibilidad

FlyEnv gestiona el runtime local y la configuración de procesos; no garantiza que cada extensión de PHP, versión de framework o binario de terceros esté disponible en todos los sistemas operativos. Verifica los requisitos del proyecto contra la compilación de PHP instalada y toma la [página de descargas](/es/download) y las notas de la versión actual como referencia de los paquetes soportados.
