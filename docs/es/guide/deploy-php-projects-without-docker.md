---
title: 'Ejecuta proyectos PHP sin Docker en FlyEnv'
head:
  - - meta
    - name: description
      content: 'Despliega WordPress, Laravel, Symfony, Workerman, Hyperf y más sin Docker. Usa PHP-FPM, FrankenPHP, RoadRunner, Swoole CLI, SSL y bases de datos de FlyEnv.'
---

# Despliega proyectos PHP sin Docker en FlyEnv: PHP-FPM, FrankenPHP, RoadRunner, Swoole CLI y Workerman

Los proyectos PHP ya no encajan en un único patrón de despliegue local. Un sitio de WordPress necesita un stack PHP-FPM estable, Laravel Octane necesita un servidor de aplicaciones, Hyperf espera Swoole, y Workerman es un proceso PHP de larga duración que no debería forzarse en un montaje falso de Apache. Docker puede resolver esto, pero a menudo añade arranques lentos, un alto consumo de memoria y una segunda capa de red.

FlyEnv te ofrece un flujo de despliegue de PHP nativo en Windows, macOS y Linux: PHP CGI Service, PHP-FPM, FrankenPHP, RoadRunner, Swoole CLI, Composer, bases de datos, dominios personalizados, SSL automático, reglas de proxy inverso, logs y Cloudflare Tunnel en una sola aplicación de escritorio.

## Elige el modo de despliegue PHP de FlyEnv adecuado

Consulta esta tabla antes de crear el proyecto. Responde a la pregunta práctica: "¿qué runtime debo usar para esta aplicación PHP?"

| Tipo de proyecto | Modo recomendado de FlyEnv | Mejor encaje | Por qué funciona |
| --- | --- | --- | --- |
| WordPress, ClassicPress, Contao | PHP-FPM + Host | CMS y sitios de contenido | Modelo estable de petición/respuesta, integración con bases de datos, dominio personalizado, HTTPS y el enrutado habitual de Nginx/Apache/Caddy |
| Laravel, Symfony, Yii2, ThinkPHP, CodeIgniter, CakePHP, Slim | PHP-FPM + Host | Proyectos MVC y API estándar | Enrutado FastCGI similar a producción sin Docker, con versiones de PHP por proyecto y control de extensiones |
| PHP heredado o scripts locales sencillos | PHP CGI Service | Pruebas de compatibilidad | Útil cuando necesitas un servicio PHP ligero basado en CGI en lugar de un servidor de aplicaciones completo |
| Aplicaciones PHP modernas con servidor web integrado | FrankenPHP | Laravel, Symfony, servicios API | Ejecuta PHP a través del runtime de FrankenPHP y se integra con FlyEnv Host, SSL automático, logs y proxy inverso |
| Laravel Octane, workers PSR-7, APIs de alto rendimiento | RoadRunner | Octane, PHP Worker, proyectos con `.rr.yaml` existente | Ejecuta workers PHP de larga duración, sincroniza puertos y se vincula a un runtime de PHP gestionado por FlyEnv |
| Hyperf, EasySwoole, Swoole nativo, Laravel Octane sobre Swoole | Swoole CLI | Servicios PHP orientados a eventos | Ejecuta proyectos de Swoole CLI con presets, detección de configuración, variables de entorno, puertos y logs |
| Workerman, GatewayWorker, servicios PHP personalizados de larga duración | PHP Project Service | WebSocket, TCP, colas y aplicaciones en tiempo real | Ejecuta `php start.php start` o un comando personalizado como servicio gestionado, y luego lo expone a través del proxy inverso de Host |

## Configuración común para todos los proyectos PHP

Antes de elegir un runtime, prepara las dependencias compartidas que FlyEnv puede gestionar por ti.

1. Abre **PHP -> Version Manager** e instala las versiones de PHP que necesiten tus proyectos.
2. Abre **PHP -> Composer** e instala Composer si el proyecto usa paquetes.
3. Instala las extensiones de PHP necesarias desde **PHP -> Version Manager -> Extensions**.
4. Inicia los módulos de base de datos o caché necesarios, como MySQL, MariaDB, PostgreSQL, Redis o Memcached.
5. Añade un dominio local en **Host**, por ejemplo `myapp.test`, y activa el SSL automático si el proyecto necesita HTTPS.
6. Usa **Cloudflare Tunnel** cuando necesites compartir el sitio local con un cliente, un proveedor de webhooks o un dispositivo móvil fuera de tu LAN.

FlyEnv mantiene estos servicios de forma nativa. No necesitas un contenedor de Docker solo para probar una versión de PHP, cambiar de base de datos, exponer una URL local o inspeccionar logs.

## Despliega WordPress, ClassicPress y proyectos CMS

Los proyectos CMS suelen necesitar una raíz web, una base de datos, un dominio limpio y HTTPS. PHP-FPM + Host es la configuración más predecible.

### Paso 1: Crea o importa el proyecto

FlyEnv puede crear proyectos PHP comunes a través de Composer, incluidos WordPress, ClassicPress, Contao, Laravel, Symfony, Yii2, ThinkPHP, CodeIgniter, CakePHP y Slim.

Para un proyecto CMS existente:

1. Coloca el proyecto en tu espacio de trabajo.
2. Ejecuta `composer install` si el proyecto tiene un `composer.json`.
3. Importa la base de datos a través de tu cliente de bases de datos preferido o del módulo de base de datos que uses en FlyEnv.

### Paso 2: Apunta Host a la raíz de documentos correcta

Usa la raíz web pública, no siempre la raíz del repositorio.

| Proyecto | Raíz de documentos habitual |
| --- | --- |
| WordPress / ClassicPress | Raíz del proyecto |
| Contao | `public` |
| Laravel | `public` |
| Symfony | `public` |
| Yii2 basic | `web` |
| ThinkPHP | `public` |
| CodeIgniter 4 | `public` |
| CakePHP | `webroot` |
| Slim skeleton | `public` |

En FlyEnv:

1. Abre **Host**.
2. Añade un sitio como `wordpress.test`.
3. Selecciona la raíz de documentos del proyecto.
4. Elige la versión de PHP.
5. Activa SSL cuando el sitio necesite cookies seguras, callbacks de OAuth, webhooks de pago o APIs del navegador que requieran HTTPS.
6. Guarda el sitio e inicia el servidor web junto con PHP-FPM.

### Paso 3: Vincula los módulos de base de datos y caché

La mayoría de los proyectos CMS usan MySQL o MariaDB.

```dotenv
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=wordpress_local
DB_USERNAME=root
DB_PASSWORD=your_password
```

Para proyectos más pesados, inicia Redis y configura el driver de caché o de sesión del proyecto. Esto mantiene el stack cerca de producción sin ejecutar una base de datos en contenedores.

## Despliega Laravel, Symfony y otros frameworks MVC

Para aplicaciones normales de petición/respuesta, PHP-FPM sigue siendo la opción más sencilla y de alta calidad. Arranca más rápido que Docker Desktop, es más fácil de inspeccionar que una VM y se parece a las configuraciones habituales de producción con Nginx/Caddy/Apache.

### Paso 1: Instala las dependencias

```bash
composer install
```

Para los assets de frontend:

```bash
npm install
npm run dev
```

FlyEnv puede gestionar Node.js y PHP en paralelo, de modo que un proyecto Laravel puede usar PHP 8.3 mientras su paso de compilación usa una versión específica de Node.js.

### Paso 2: Configura las variables de entorno

Copia el archivo de entorno de ejemplo y define los servicios locales:

```bash
cp .env.example .env
php artisan key:generate
```

Valores locales típicos:

```dotenv
APP_URL=https://laravel.test
DB_HOST=127.0.0.1
DB_PORT=3306
REDIS_HOST=127.0.0.1
MAIL_HOST=127.0.0.1
MAIL_PORT=1025
```

Usa Mailpit de FlyEnv para probar el correo local cuando el proyecto envíe emails de registro, restablecimiento de contraseña o notificaciones.

### Paso 3: Añade el sitio en Host

1. Añade `laravel.test`, `symfony.test` u otro dominio `.test`.
2. Define la raíz de documentos en el directorio público del framework.
3. Selecciona la versión de PHP e inicia PHP-FPM.
4. Abre los logs desde FlyEnv si el framework devuelve un error 500.

Para un flujo de trabajo detallado solo de Laravel, consulta [Ejecuta Laravel con FlyEnv](/es/guide/run-laravel-use-flyenv).

## Usa PHP CGI Service para flujos de compatibilidad

PHP CGI Service es útil cuando necesitas un servicio PHP local ligero para proyectos antiguos, stacks orientados a Windows o pruebas de compatibilidad.

Úsalo cuando:

1. El proyecto es una aplicación PHP sencilla con enrutado limitado.
2. Necesitas probar el comportamiento CGI en lugar de un worker de larga duración.
3. Quieres un servicio mínimo antes de migrar el proyecto a PHP-FPM.

Para la mayoría de los proyectos MVC y CMS nuevos, elige primero PHP-FPM. Usa PHP CGI Service cuando el proyecto o el flujo de trabajo del sistema operativo se beneficie específicamente de la compatibilidad CGI.

## Despliega con FrankenPHP sin configurar Caddy manualmente

FrankenPHP es un servidor de aplicaciones PHP moderno. Es una gran opción cuando quieres un flujo de trabajo nativo de servidor de aplicaciones sin Docker y sin conectar manualmente PHP-FPM a un servidor web independiente.

### Mejores proyectos para FrankenPHP

| Proyecto | Encaje |
| --- | --- |
| Laravel | Bueno para el servicio de PHP moderno y el desarrollo de APIs |
| Symfony | Bueno para aplicaciones que se benefician de un servidor PHP basado en Caddy |
| Slim y APIs personalizadas | Bueno para servicios HTTP ligeros |
| Sitios PHP genéricos | Bueno cuando la aplicación funciona con el runtime de PHP integrado de FrankenPHP |

### Flujo de trabajo en FlyEnv

1. Instala FrankenPHP desde su módulo de FlyEnv.
2. Añade o edita el proyecto en **Host**.
3. Confirma que FlyEnv ha generado la configuración del vhost de FrankenPHP.
4. Activa SSL si el sitio necesita HTTPS.
5. Inicia FrankenPHP y abre el dominio local.

Importante: FrankenPHP usa su propio runtime de PHP integrado. Si el proyecto requiere un binario de PHP específico gestionado por FlyEnv, PHP-FPM o RoadRunner pueden ser una mejor opción.

## Despliega Laravel Octane y workers PHP con RoadRunner

RoadRunner está diseñado para workers PHP de larga duración y aplicaciones HTTP de alto rendimiento. En FlyEnv, el módulo RoadRunner admite configuraciones existentes, proyectos PHP Worker, Laravel Octane, modo fileserver y comandos personalizados.

### Laravel Octane con RoadRunner

Usa esto cuando quieras el rendimiento de Octane sin Docker:

```bash
composer require laravel/octane spiral/roadrunner-cli spiral/roadrunner-http
php artisan octane:install --server=roadrunner
```

En FlyEnv:

1. Abre el módulo **RoadRunner**.
2. Añade un proyecto y elige **Laravel Octane**.
3. Selecciona el runtime de PHP de FlyEnv.
4. Define el puerto del proyecto, por ejemplo `3000`.
5. Inicia el servicio del proyecto.
6. Opcionalmente, añade un proxy inverso en Host de `https://octane.test` a `http://127.0.0.1:3000`.

### PHP Worker o configuración existente de RoadRunner

Para un proyecto worker, FlyEnv puede generar una configuración de estilo `.rr.yaml` y mantener el puerto sincronizado.

```yaml
version: "3"

server:
  command: 'php -d display_startup_errors=0 -d display_errors=stderr worker.php'
  relay: pipes

http:
  address: 127.0.0.1:3000
```

Elige **Existing Config** cuando tu proyecto ya tenga `.rr.yaml`, `.rr.yml`, `rr.yaml`, `rr.yml` o `rr.json`.

## Despliega Hyperf, EasySwoole y Swoole nativo con Swoole CLI

Swoole CLI es el modo de FlyEnv adecuado para servicios PHP orientados a eventos. Evita el problema habitual de mezclar extensiones del PHP del sistema, compilaciones de Homebrew y requisitos de Swoole específicos de cada framework.

### Presets de Swoole CLI compatibles

| Preset | Forma del comando |
| --- | --- |
| Swoole nativo | `swoole-cli server.php 3000` |
| Hyperf | `swoole-cli bin/hyperf.php start` |
| EasySwoole | `swoole-cli easyswoole server start` |
| Laravel Octane | `swoole-cli artisan octane:start --server=swoole --host=127.0.0.1 --port=3000` |
| Script PHP | `swoole-cli server.php` |
| Personalizado | Tu propio comando |

### Flujo de trabajo en FlyEnv

1. Instala Swoole CLI en FlyEnv.
2. Añade el proyecto en el módulo **Swoole CLI**.
3. Elige el preset que coincida con tu framework.
4. Confirma el puerto y el comando del proyecto.
5. Añade variables de entorno o un archivo env si el servicio los necesita.
6. Inicia el servicio e inspecciona los logs desde FlyEnv.
7. Usa el proxy inverso de Host si quieres un dominio limpio en lugar de `http://127.0.0.1:3000`.

FlyEnv puede detectar rutas de configuración útiles como la configuración de servidor/rutas de Hyperf, los archivos de configuración de EasySwoole, la configuración de Laravel Octane y `server.php`.

## Despliega Workerman y GatewayWorker en FlyEnv

Workerman es una opción habitual para servicios PHP de WebSocket, TCP, colas, gateway y tiempo real. Debe ejecutarse como un proceso gestionado de larga duración, no como una petición normal de PHP-FPM.

### Modo recomendado

Usa **PHP -> Project Service** con un comando personalizado.

Comando típico de Workerman:

```bash
php start.php start
```

No uses el modo demonio para la gestión de servicios locales de FlyEnv salvo que tengas una razón específica. Un proceso en primer plano es más fácil de detener, reiniciar y registrar para FlyEnv.

### Flujo de trabajo en FlyEnv

1. Instala la versión de PHP que requiera el proyecto Workerman.
2. Ejecuta las dependencias:

```bash
composer install
```

3. Abre **PHP -> Project Service**.
4. Añade la ruta del proyecto.
5. Define el comando como `php start.php start` o el comando de inicio documentado del proyecto.
6. Define el puerto del servicio en el puerto en el que escucha tu aplicación Workerman, por ejemplo `8787`.
7. Añade las variables de entorno necesarias.
8. Inicia el servicio del proyecto.

Para una aplicación Workerman HTTP o WebSocket orientada al navegador, crea un proxy inverso en Host:

| Dominio de Host | Destino del proxy inverso |
| --- | --- |
| `https://socket.test` | `http://127.0.0.1:8787` |

Esto le da a la aplicación una URL HTTPS limpia mientras Workerman sigue ejecutándose como un proceso PHP nativo.

## Conecta proyectos PHP con otros módulos de FlyEnv

El modo de despliegue es solo una parte del entorno local. La mayoría de los proyectos PHP también necesitan servicios a su alrededor.

| Necesidad | Módulo de FlyEnv | Ejemplo |
| --- | --- | --- |
| Instalación de dependencias | Composer | `composer install`, `composer create-project` |
| Aislamiento de versiones de PHP | PHP Version Manager | Ejecuta Laravel en PHP 8.3 y WordPress en PHP 8.2 |
| Extensiones | PHP Extensions | Instala o activa Redis, OpenSSL, Intl, GD, Imagick, drivers PDO |
| Base de datos | MySQL, MariaDB, PostgreSQL | Bases de datos locales de CMS y frameworks |
| Caché y colas | Redis, Memcached | Caché/sesión/cola de Laravel, caché de Symfony |
| Compilación de frontend | Node.js | Vite, Webpack, Tailwind, Symfony Encore |
| Dominios personalizados | Host | `https://api.test`, `https://wordpress.test` |
| HTTPS automático | Host SSL | Callbacks de OAuth, cookies seguras, pruebas de webhooks |
| Proxy inverso | Host | Mapea `https://octane.test` a `127.0.0.1:3000` |
| Compartición pública | Cloudflare Tunnel | Comparte servicios locales de WordPress, Laravel, Workerman o Swoole |
| Depuración | Visores de logs y configuración | Inspecciona logs de PHP, PHP-FPM, FrankenPHP, RoadRunner, Swoole CLI y del proyecto |
| Asistencia de IA local | Offline AI Agent | Revisa configuraciones, explica errores o genera notas de migración sin enviar código a un modelo en la nube |

## Recomendaciones prácticas

1. Usa **PHP-FPM + Host** para la mayoría de los proyectos de WordPress, CMS y frameworks MVC.
2. Usa **FrankenPHP** cuando quieras un servidor de aplicaciones PHP nativo y moderno y el runtime de PHP integrado funcione para la aplicación.
3. Usa **RoadRunner** para Laravel Octane, workers PSR-7 y APIs de alto rendimiento.
4. Usa **Swoole CLI** para Hyperf, EasySwoole, Octane basado en Swoole y aplicaciones Swoole nativas.
5. Usa **PHP Project Service** para Workerman, GatewayWorker, workers de colas y comandos PHP personalizados de larga duración.
6. Usa **Cloudflare Tunnel** cuando un webhook de terceros o un cliente necesite acceder a tu servicio local.

## Recorrido en vídeo

¿Prefieres verlo? Mira Deploy PHP Apps Without Docker in FlyEnv: Laravel Octane, RoadRunner, Swoole & Workerman en acción:

<iframe style="width: 100%; aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/5NqSag8c4YY?si=fBlpEHxBKjKR7nX1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Preguntas frecuentes (FAQ)

### ¿Es FlyEnv una alternativa a Docker para el desarrollo PHP?

Sí. FlyEnv ejecuta servicios nativos de PHP, servidor web, base de datos, caché y túneles en Windows, macOS y Linux. Evita la sobrecarga de Docker Desktop y aun así te ofrece runtimes aislados, dominios locales, SSL, logs y gestión de servicios.

### ¿Qué modo de FlyEnv debo usar para Laravel?

Usa PHP-FPM + Host para el desarrollo normal de Laravel. Usa RoadRunner o Swoole CLI cuando ejecutes Laravel Octane. Usa FrankenPHP si tu proyecto Laravel encaja con el modelo de runtime de FrankenPHP.

### ¿Puede FlyEnv ejecutar Workerman?

Sí. Añade Workerman como un PHP Project Service y usa un comando como `php start.php start`. Si la aplicación sirve tráfico HTTP o WebSocket, expónla a través de un proxy inverso de Host con SSL automático.

### ¿Funciona en Windows, macOS y Linux?

Sí. FlyEnv está diseñado para la gestión nativa de entornos full-stack en Windows, macOS y Linux. Algunas rutas de bajo nivel y fuentes de paquetes difieren según el sistema operativo, pero el flujo de trabajo del proyecto se mantiene consistente.

## Próximos pasos

Instala FlyEnv desde la [página de descarga](/es/download), y luego crea tu primer sitio PHP con [Dominios personalizados y SSL automático](/es/guide/host). Para probar webhooks públicos o mostrar avances a clientes, continúa con [Expón localhost con Cloudflare Tunnel](/es/guide/cloudflare-tunnel-local-development).
