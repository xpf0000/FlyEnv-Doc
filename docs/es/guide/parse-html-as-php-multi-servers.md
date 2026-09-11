---
title: 'Procesar HTML como PHP con Nginx, Apache y Caddy'
head:
  - - meta
    - name: description
      content: 'Aprende a hacer que Nginx, Apache y Caddy procesen archivos .html como PHP. Arregla proyectos heredados, simplifica migraciones y gestiona contenido mixto sin renombrar archivos.'
---

# Procesar HTML como PHP en Nginx, Apache y Caddy: Guía completa

Tienes un sitio lleno de archivos .html que de repente necesitan procesamiento PHP. Quizá sea un sitio estático heredado al que se le añaden funciones dinámicas. Quizá estás migrando y no puedes renombrar cientos de archivos. O tal vez simplemente quieres URLs limpias sin la extensión .php.

Sea cual sea el motivo, obligar a tu servidor web a procesar archivos HTML a través de PHP es un requisito habitual. Esta guía cubre la configuración de Nginx, Apache y Caddy, todo dentro de la sencilla interfaz de FlyEnv.

## ¿Por qué procesar HTML como PHP?

### Escenarios habituales

1. **Migración de sitios heredados**: añadir includes de PHP a archivos HTML estáticos
2. **Preservación del SEO**: mantener las URLs .html existentes mientras se añade lógica PHP
3. **Refactorización gradual**: introducir PHP sin renombrar archivos de forma masiva
4. **Integración con un CMS**: añadir cabeceras de WordPress/Drupal a páginas estáticas

### Ejemplo de uso

```html
<!-- index.html -->
<!DOCTYPE html>
<html>
<head>
    <?php include 'header.php'; ?>
</head>
<body>
    <h1><?php echo date('Y'); ?> Company Name</h1>
    <?php include 'navigation.php'; ?>
</body>
</html>
```

El archivo sigue siendo .html, pero PHP procesa los includes y las sentencias echo.

## Requisitos previos

Antes de configurar tu servidor web:

1. **PHP-FPM configurado** con límites de seguridad ampliados
2. **Servidor web en ejecución** (Nginx, Apache o Caddy)
3. **Sitio creado** en FlyEnv apuntando a tu proyecto

## Configuración de Nginx

### Paso 1: Modificar la configuración de seguridad de PHP-FPM

Edita la configuración del pool de PHP-FPM para permitir el procesamiento de archivos HTML:

```ini
; In php-fpm.conf [www] section
security.limit_extensions = .php .php3 .php4 .php5 .php7 .html .htm
```

En FlyEnv: abre el módulo **PHP** -> **Version** -> **Configuration** -> edita **php-fpm.conf**

![Configuración de PHP-FPM]
*(Captura de pantalla: editor de configuración de PHP-FPM en FlyEnv)*

### Paso 2: Añadir el bloque location de Nginx

Edita la configuración del vhost de Nginx de tu sitio:

```nginx
location ~ [^/]\.html(/|$) {
    try_files $uri =404;
    fastcgi_pass unix:/tmp/phpwebstudy-php-cgi-83.sock;
    fastcgi_index index.php;
    include fastcgi.conf;
    include pathinfo.conf;
}
```

**Importante**: sustituye `phpwebstudy-php-cgi-83.sock` por el nombre real del socket de tu versión de PHP.

En FlyEnv: **Host** -> **Site** -> **Nginx Settings** -> edita el **VHost**

![Configuración del VHost de Nginx]
*(Captura de pantalla: editor de vhost de Nginx con el bloque location)*

### Paso 3: Reiniciar los servicios

1. Reinicia PHP-FPM en FlyEnv
2. Recarga la configuración de Nginx
3. Prueba tu archivo HTML

## Configuración de Apache

Apache lo gestiona a través de .htaccess o de la configuración del virtual host.

### Método 1: Usar .htaccess (recomendado)

Crea o edita `.htaccess` en la raíz de tu sitio:

```apache
# Parse HTML files as PHP
AddType application/x-httpd-php .html .htm

# Alternative for PHP 7+
AddHandler application/x-httpd-php .html .htm
```

### Método 2: Configuración del Virtual Host

Edita el archivo de vhost de Apache en FlyEnv:

```apache
<VirtualHost *:80>
    DocumentRoot "/path/to/your/site"
    ServerName example.test
    
    <Directory "/path/to/your/site">
        AllowOverride All
        Require all granted
    </Directory>
    
    # Parse HTML as PHP
    AddType application/x-httpd-php .html .htm
</VirtualHost>
```

### Paso 3: Configurar mod_php o PHP-FPM

**Para mod_php:**
No se necesita configuración adicional.

**Para PHP-FPM con mod_proxy_fcgi:**

```apache
# Add to vhost
<FilesMatch "\.(html|htm)$">
    SetHandler "proxy:unix:/tmp/phpwebstudy-php-cgi-83.sock|fcgi://localhost"
</FilesMatch>
```

## Configuración de Caddy

El CEL (Common Expression Language) de Caddy hace que esto sea muy sencillo.

### Paso 1: Editar el Caddyfile

En FlyEnv: **Host** -> **Site** -> **Caddy Settings** -> edita el **Caddyfile**

```nginx
example.test {
    root * /path/to/your/site
    
    # PHP-FPM handler for PHP files
    php_fastcgi unix//tmp/phpwebstudy-php-cgi-83.sock
    
    # Handle HTML files through PHP-FPM
    @htmlFiles {
        path *.html *.htm
    }
    
    route @htmlFiles {
        php_fastcgi unix//tmp/phpwebstudy-php-cgi-83.sock
    }
    
    file_server
}
```

### Alternativa: configuración más simple

Para un procesamiento básico de HTML como PHP:

```nginx
example.test {
    root * /path/to/your/site
    
    # This handles both .php and .html
    php_fastcgi unix//tmp/phpwebstudy-php-cgi-83.sock {
        try_files {path} {path}/index.php index.php
    }
    
    file_server
}
```

Nota: igualmente debes actualizar los límites de seguridad de PHP-FPM tal como se muestra en la sección de Nginx.

## Solución de problemas

### "El archivo se descarga en lugar de ejecutarse"

**Causa**: los límites de seguridad de PHP-FPM bloquean los archivos .html

**Solución**: asegúrate de que `security.limit_extensions` incluya `.html` en php-fpm.conf

### "502 Bad Gateway" (Nginx)

**Causa**: ruta del socket de PHP-FPM incorrecta

**Solución**:
1. Comprueba el nombre real del socket en `/tmp/`
2. Actualiza fastcgi_pass con la versión correcta
3. Verifica que PHP-FPM esté en ejecución

### "Internal Server Error" (Apache)

**Causa**: el handler no está configurado correctamente

**Solución**:
1. Verifica que el módulo PHP esté cargado: `apachectl -M | grep php`
2. Revisa los logs de error de Apache
3. Asegúrate de que AllowOverride esté habilitado para .htaccess

### "Página en blanco"

**Causa**: error de PHP en el archivo HTML

**Solución**:
1. Revisa los logs de error de PHP
2. Habilita display_errors temporalmente
3. Prueba primero con algo simple como `<?php echo "test"; ?>`

### Consideraciones de rendimiento

Procesar HTML a través de PHP añade sobrecarga:

| Configuración | Tiempo de respuesta | Memoria |
|--------------|---------------------|---------|
| HTML estático | 1-5ms | Ninguna |
| HTML vía PHP-FPM | 20-50ms | 10-30MB |

**Consejos de optimización:**
- Usa caché de opcode de PHP (habilitada por defecto en FlyEnv)
- Considera una migración futura a la extensión .php
- Usa caché de archivos estáticos siempre que sea posible

## Advertencia de seguridad

Procesar HTML como PHP puede introducir riesgos de seguridad:

1. **Archivos subidos por usuarios**: si los usuarios pueden subir archivos .html, pueden ejecutar código PHP
2. **Contenido de terceros**: el HTML incluido desde fuentes externas pasa a ser ejecutable

**Mitigación:**
```nginx
# Deny PHP execution in upload directories
location /uploads/ {
    location ~ \.(html|htm|php)$ {
        deny all;
    }
}
```

## Preguntas frecuentes (FAQ)

**P: ¿Esto afecta al rendimiento?**

R: Sí, ligeramente. Los archivos HTML pasan por PHP-FPM en lugar de servirse directamente. Usa caché de opcode y considera esto algo temporal durante las migraciones.

**P: ¿Puedo procesar otras extensiones como PHP?**

R: Sí. Añade cualquier extensión a los límites de seguridad de PHP-FPM y a la configuración del servidor web. Alternativas habituales: `.phtml`, `.php5`.

**P: ¿Esto romperá los sitios HTML estáticos?**

R: No. El HTML estático sin etiquetas PHP se renderiza con normalidad. El procesador PHP simplemente deja pasar el contenido HTML sin cambios.

**P: ¿Cómo revierto este cambio?**

R: Elimina la configuración de location/handler y reinicia tu servidor web. Los archivos volverán a servirse como HTML estático.

**P: ¿Puedo usar esto con WordPress?**

R: Sí, aunque WordPress suele usar archivos .php. Esto es más útil para sitios híbridos o migraciones de proyectos heredados.

**P: ¿Funciona con todas las versiones de PHP?**

R: Sí. La configuración es idéntica desde PHP 5.6 hasta 8.4+.

## Resumen

| Servidor | Configuración clave |
|----------|---------------------|
| **Nginx** | `location ~ [^/]\.html` con fastcgi_pass |
| **Apache** | `AddType application/x-httpd-php .html` |
| **Caddy** | ruta `php_fastcgi` para *.html |

Todos los métodos requieren actualizar primero `security.limit_extensions` de PHP-FPM.

¿Necesitas ayuda con otras configuraciones de servidor? Consulta nuestra [Guía de configuración de proxy inverso](/es/guide/reverse-proxy-nestjs-multi-servers) o la [documentación de dominios personalizados](/es/guide/host).
