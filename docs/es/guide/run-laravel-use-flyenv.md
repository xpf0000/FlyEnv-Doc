---
title: 'Cómo ejecutar Laravel en local: guía completa de configuración con FlyEnv'
head:
  - - meta
    - name: description
      content: 'Configura Laravel en local con FlyEnv usando PHP, una base de datos, reglas de reescritura de URL y HTTPS en macOS, Windows o Linux.'
---

<script setup>
import AppGuideCommunityProof from '../../components/AppCommunityEvidence/GuideProof.vue'
import communityPosts from '../../data/community-posts.json'
import { communityEvidence } from '../../data/community-evidence'
</script>

# Cómo ejecutar Laravel en local: guía completa de configuración con FlyEnv

Configurar un entorno de desarrollo Laravel solía significar pelearse con las versiones de PHP, configurar las reglas de reescritura de Nginx y luchar con problemas de permisos. Con FlyEnv, puedes pasar de cero a una aplicación Laravel funcionando en menos de 5 minutos, sin necesidad de trucos de terminal.

Esta guía cubre tanto la creación rápida de proyectos como la configuración manual para proyectos existentes.

## Inicio rápido: crear un proyecto Laravel en FlyEnv

### Método 1: instalación de Laravel con un clic (recomendado)

FlyEnv puede crear un proyecto Laravel nuevo con todas las dependencias instaladas automáticamente.

#### Paso 1: crear un nuevo proyecto

1. Abre FlyEnv → módulo **Host**
2. Haz clic en el botón **"New Project"**

<img src="https://oss.macphpstudy.com/image/F74AA939C46A.png" data-x-image-preview="">

#### Paso 2: configurar el proyecto

Elige tus ajustes:
- **Project Path**: dónde guardar el proyecto
- **PHP Version**: selecciona 8.1, 8.2 u 8.3 (Laravel 10+ requiere PHP 8.1+)
- **Laravel Version**: la última (11.x) o LTS (10.x)

<img src="https://oss.macphpstudy.com/image/8E783623E2F8.png" data-x-image-preview="">

Haz clic en **OK** y FlyEnv hará lo siguiente:
- Instalar Laravel mediante Composer
- Configurar la estructura del proyecto
- Configurar la conexión a la base de datos
- Preparar la configuración del sitio

#### Paso 3: proyecto creado

Una vez completado, verás el proyecto en la carpeta que seleccionaste.

<img src="https://oss.macphpstudy.com/image/BAAB108613E2.png" data-x-image-preview="">

Haz clic en **"Create Host"** para configurar el sitio automáticamente, o continúa con la configuración manual del sitio que se describe más abajo.

### Método 2: proyecto Laravel existente

¿Ya tienes un proyecto Laravel? Salta directamente a la sección [Crear el sitio](#crear-el-sitio).

## Crear el sitio

Tanto si creaste el proyecto con FlyEnv como si lo clonaste desde Git, necesitas configurar un sitio para servirlo.

### Paso 1: añadir el sitio en FlyEnv

1. Abre el módulo **Host**
2. Haz clic en el botón **"Add"** (o en "Create Host" desde el paso de creación del proyecto)

### Paso 2: configurar los ajustes del sitio

**Fundamental para Laravel**: establece el directorio raíz en la carpeta `public`, no en la raíz del proyecto.

| Campo | Valor | Ejemplo |
|-------|-------|---------|
| **Host Name** | Tu dominio local | `laravel.test` |
| **Root Path** | Ruta a la carpeta `public` | `/Users/you/projects/example-app/public` |
| **PHP Version** | Según los requisitos del proyecto | 8.2, 8.3 |
| **Port** | Puerto HTTP | 80 |

<img src="https://oss.macphpstudy.com/image/E53248FED5BC.png" data-x-image-preview="">

**¿Por qué la carpeta `public`?** El front controller de Laravel (`index.php`) está en `public/`. Apuntar a la raíz del proyecto expondría archivos sensibles como `.env`.

### Paso 3: configurar la reescritura de URL

Laravel requiere reescritura de URL para dirigir todas las peticiones a través de `index.php`.

#### Nginx

Selecciona **"Laravel"** en el desplegable **Nginx URL Rewrite**:

<img src="https://oss.macphpstudy.com/image/AF72C71F6596.png" data-x-image-preview="">

Esto añade automáticamente la configuración correcta:

```nginx
location / {
    try_files $uri $uri/ /index.php$is_args$query_string;
}
```

**Qué hace esto:**
- Intenta servir archivos o directorios si existen
- En caso contrario, dirige la petición a `index.php` conservando los parámetros de la query
- Es esencial para que el enrutamiento de Laravel funcione

#### Apache

Apache usa archivos `.htaccess`. Al crear un proyecto con FlyEnv, este archivo se genera automáticamente. Para una configuración manual, crea `public/.htaccess`:

```apache
<IfModule mod_rewrite.c>
    <IfModule mod_negotiation.c>
        Options -MultiViews -Indexes
    </IfModule>

    RewriteEngine On

    # Handle Authorization Header
    RewriteCond %{HTTP:Authorization} .
    RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]

    # Redirect Trailing Slashes If Not A Folder...
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_URI} (.+)/$
    RewriteRule ^ %1 [L,R=301]

    # Send Requests To Front Controller...
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^ index.php [L]
</IfModule>
```

#### Caddy

Caddy no requiere configuración adicional: Laravel funciona de inmediato con los ajustes predeterminados de Caddy.

### Paso 4: configurar la base de datos (opcional)

Si tu aplicación Laravel usa una base de datos:

1. Inicia **MySQL** o **PostgreSQL** en FlyEnv
2. Crea una base de datos desde la interfaz de gestión de bases de datos
3. Actualiza el archivo `.env`:

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=your_database_name
DB_USERNAME=root
DB_PASSWORD=root
```

4. Ejecuta las migraciones:
```bash
php artisan migrate
```

## Lanzar tu aplicación Laravel

### Iniciar los servicios necesarios

Inicia estos módulos en FlyEnv:
- ✅ PHP (con la versión que necesita tu proyecto)
- ✅ Nginx o Apache o Caddy
- ✅ MySQL/PostgreSQL (si usas base de datos)

### Acceder a tu sitio

Haz clic en el enlace del sitio en el panel Host:

<img src="https://oss.macphpstudy.com/image/4373D117408E.png" data-x-image-preview="">

Deberías ver la página de bienvenida de Laravel:

<img src="https://oss.macphpstudy.com/image/4FCCC65341EC.png" data-x-image-preview="">

**¡Laravel está funcionando!** 🎉

## Depuración y logs

### Ver los logs de la aplicación

Los logs de Laravel están en `storage/logs/laravel.log`:

```bash
tail -f storage/logs/laravel.log
```

### Ver los logs del servidor web

FlyEnv ofrece acceso sencillo a los logs del servidor:

1. Selecciona tu sitio en el módulo Host
2. Haz clic en la pestaña **Logs**

<img src="https://oss.macphpstudy.com/image/14C9AD3814FA.png" data-x-image-preview="">

Consulta los logs de acceso y de errores en tiempo real:

<img src="https://oss.macphpstudy.com/image/D999E4BFEF0B.png" data-x-image-preview="">

**Problemas comunes que conviene revisar:**
- Errores 500 → revisa los logs de Laravel
- Errores 404 → verifica que la reescritura de URL esté configurada
- Permission denied → comprueba los permisos de `storage/` y `bootstrap/cache/`

## Problemas comunes de Laravel y sus soluciones

### Error "The stream or file could not be opened"

**Causa**: problemas de permisos con la carpeta `storage/`

**Solución**:
```bash
chmod -R 775 storage
chmod -R 775 bootstrap/cache
```

En Windows, asegúrate de que tu usuario tenga permisos de escritura en estas carpetas.

### "No application encryption key has been specified"

**Solución**:
```bash
php artisan key:generate
```

### Conexión a la base de datos rechazada

**Lista de comprobación**:
- [ ] El servicio MySQL/PostgreSQL está en ejecución en FlyEnv
- [ ] La base de datos existe
- [ ] Las credenciales coinciden con el archivo `.env`
- [ ] Usas `127.0.0.1` en lugar de `localhost` (evita problemas con sockets)

### CSS/JS no cargan (404 en los assets)

**Causa**: no has ejecutado `npm run dev` ni `npm run build`

**Solución**:
```bash
npm install
npm run dev
```

O para una compilación de producción:
```bash
npm run build
```

### "Vite manifest not found"

**Solución**: ejecuta `npm run build` para generar el archivo de manifiesto.

## Configuración avanzada

### Múltiples versiones de PHP

¿Estás probando actualizaciones de Laravel? FlyEnv te permite cambiar de versión de PHP al instante:

1. Instala varias versiones de PHP (8.1, 8.2, 8.3)
2. Edita los ajustes del sitio
3. Cambia la versión en el desplegable de PHP
4. Reinicia los servicios

### SSL/HTTPS para desarrollo local

Activa SSL en los ajustes del sitio:
1. Edita el sitio → activa **"Use SSL"**
2. Selecciona **"Auto SSL"**
3. Accede mediante `https://laravel.test`

Esencial para probar:
- Service Workers
- Cookies seguras
- Integraciones de pago
- Funciones de PWA

### Workers de colas

Para la funcionalidad de colas de Laravel:

```bash
php artisan queue:work
```

O usa Supervisor para mantener los workers en ejecución.

### Scheduler (Cron)

Añade esto al cron del sistema (cada minuto):

```bash
* * * * * cd /path/to/project && php artisan schedule:run >> /dev/null 2>&1
```

O usa la función de scheduler integrada de FlyEnv.

## Lista de comprobación para el despliegue en producción

Al pasar del FlyEnv local a producción:

- [ ] Actualiza `.env`: `APP_ENV=production`, `APP_DEBUG=false`
- [ ] Define un `APP_KEY` fuerte (ya está definido si ejecutaste `key:generate`)
- [ ] Configura las credenciales de la base de datos de producción
- [ ] Configura los workers de colas (Supervisor)
- [ ] Configura el scheduler (cron)
- [ ] Ejecuta `composer install --optimize-autoloader --no-dev`
- [ ] Ejecuta `php artisan config:cache`
- [ ] Ejecuta `php artisan route:cache`
- [ ] Ejecuta `php artisan view:cache`
- [ ] Establece los permisos de archivos adecuados
- [ ] Configura los certificados SSL

## Preguntas frecuentes (FAQ)

**P: ¿Qué versión de PHP debo usar para Laravel?**

R: Laravel 11.x requiere PHP 8.2+. Laravel 10.x funciona con PHP 8.1+. Usa la versión estable de PHP más reciente que admita tu versión de Laravel.

**P: ¿Puedo usar Laravel Sail con FlyEnv?**

R: Sí, pero es redundante. FlyEnv proporciona todo lo que ofrece Sail (PHP, MySQL, Redis) sin la sobrecarga de Docker. Puedes ejecutar los comandos de `vendor/bin/sail` si lo necesitas, pero se recomienda la configuración nativa de FlyEnv.

**P: ¿Cómo migro de XAMPP/Laragon a FlyEnv?**

R:
1. Exporta tu base de datos de XAMPP
2. Detén los servicios de XAMPP
3. Instala el proyecto en FlyEnv siguiendo esta guía
4. Importa la base de datos desde la gestión de bases de datos de FlyEnv
5. Actualiza `.env` con las nuevas credenciales de la base de datos

**P: ¿Por qué elegir `public` como directorio raíz?**

R: Por seguridad. Solo los archivos de `public/` deben ser accesibles desde la web. La raíz del proyecto contiene archivos sensibles como `.env`, con las contraseñas de la base de datos.

**P: ¿Puedo ejecutar varios proyectos Laravel a la vez?**

R: Sí. Crea sitios separados con dominios distintos (por ejemplo, `project1.test`, `project2.test`) y puertos diferentes si es necesario.

**P: ¿FlyEnv es compatible con Laravel Horizon?**

R: Sí. Horizon requiere Redis: inicia el módulo Redis en FlyEnv y luego ejecuta `php artisan horizon`.

**P: ¿Cómo depuro consultas lentas?**

R: Activa el registro de consultas en Laravel o usa la debug bar. El log de consultas lentas de MySQL de FlyEnv también está disponible en el módulo Database.

**P: ¿Puedo usar PostgreSQL en lugar de MySQL?**

R: Por supuesto. FlyEnv admite ambos. Solo tienes que cambiar a `DB_CONNECTION=pgsql` en `.env` y configurar los ajustes de PostgreSQL.

**P: ¿Qué diferencia hay entre `php artisan serve` y FlyEnv?**

R: `php artisan serve` usa el servidor integrado de PHP: lento, de un solo hilo y poco adecuado para desarrollo con colas o funciones en tiempo real. FlyEnv proporciona una configuración con Nginx/Apache similar a la de producción.

<AppGuideCommunityProof :posts="communityPosts" :evidence="communityEvidence.es" locale="es" post-id="why-i-finally-switched-from-laragon-to-flyenv" guide-path="/es/guide/run-laravel-use-flyenv" />

## Próximos pasos

Ahora que Laravel está en marcha:

- [Aislamiento de versiones por proyecto](/es/guide/project-level-runtime-environment) — Gestiona varias versiones de Laravel
- [Depuración de PHP con Xdebug](/es/guide/php-debug-with-xdebug) — Depuración paso a paso
- [Pruebas de correo electrónico en local](/es/guide/local-email-testing-mailpit) — Prueba correos sin enviarlos
- [Despliega con Cloudflare Tunnel](/es/guide/cloudflare-tunnel-local-development) — Comparte el progreso con tus clientes

¡Feliz programación con Laravel y FlyEnv!
