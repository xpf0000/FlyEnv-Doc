---
title: 'Guía de inicio rápido de FlyEnv: en funcionamiento en 5 minutos'
head:
  - - meta
    - name: description
      content: 'Guía completa de configuración de FlyEnv para macOS, Windows y Linux. Instálalo, configura tu primer sitio y empieza a desarrollar en menos de 5 minutos con gestión automática de versiones.'
---

# Guía de inicio rápido de FlyEnv: en funcionamiento en 5 minutos

Ya has descargado FlyEnv. ¿Y ahora qué? Esta guía te lleva de la instalación a un sitio web local en funcionamiento en menos de cinco minutos, sin necesidad de magia en la terminal.

## Instalación

### macOS

**Opción 1: Homebrew (recomendada)**
```bash
brew update && brew install flyenv
```

**Opción 2: Descargar el DMG**

| Arquitectura | Descarga |
|--------------|----------|
| Intel (x86_64) | [GitHub Release](https://github.com/xpf0000/FlyEnv/releases/latest) |
| Apple Silicon (M1/M2/M3) | [GitHub Release](https://github.com/xpf0000/FlyEnv/releases/latest) |

**Nota para usuarios de macOS:** si solo necesitas un alojamiento PHP sencillo, echa un vistazo a [FlyPHPServer](/es/flyphpserver) en la Mac App Store, una aplicación complementaria ligera.

### Windows

Descarga y extrae el archivo ZIP:

| Fuente de descarga | Enlace |
|--------------------|--------|
| GitHub Release | [Descargar](https://github.com/xpf0000/FlyEnv/releases/latest) |
| Baidu Netdisk | [Descargar](https://pan.baidu.com/s/1tqHN9piZVVuTyTD3FXI71A?pwd=mnb4) |

Ejecuta `FlyEnv.exe` después de la extracción.

### Linux

Compatible con Debian/Ubuntu (.deb) y Red Hat/Fedora/SUSE/CentOS (.rpm):

| Distribución | Arquitectura | Paquete |
|--------------|--------------|---------|
| Debian/Ubuntu | x86_64 | .deb |
| Debian/Ubuntu | arm64 | .deb |
| Red Hat/Fedora | x86_64 | .rpm |
| Red Hat/Fedora | arm64 | .rpm |

Descárgalo desde [GitHub Releases](https://github.com/xpf0000/FlyEnv/releases/latest).

## Configuración en el primer arranque

### 1. Instala FlyEnv Helper

En el primer arranque, FlyEnv instala un programa auxiliar para la integración con el sistema:
- **macOS/Linux**: puede solicitar la contraseña
- **Windows**: ejecútalo como Administrador si la instalación falla

Este auxiliar gestiona los servicios y las rutas del sistema. Solo es necesario una vez.

### 2. Personaliza tu interfaz

FlyEnv muestra todos los módulos por defecto. Simplifica tu vista:

1. Haz clic en **Settings** (icono de engranaje)
2. Desactiva los módulos que NO necesites
3. Reordena los módulos restantes arrastrando y soltando

**Recomendado para desarrolladores PHP:** mantén visibles Apache/Nginx, PHP, MySQL y Redis.

**Recomendado para desarrolladores Node.js:** mantén visibles Node.js, Nginx y MongoDB.

![Configuración de la interfaz](https://oss.macphpstudy.com/image/quick-start-1.webp)

### 3. Instala tu primera versión

Cada módulo necesita al menos una versión instalada:

1. Haz clic en un módulo (por ejemplo, **PHP**)
2. Cambia a la pestaña **Versions**
3. Selecciona una versión (por ejemplo, PHP 8.3)
4. Haz clic en **Install**

FlyEnv descarga y configura la versión automáticamente.

![Instalación de versiones](https://oss.macphpstudy.com/image/quick-start-2.webp)

**Consejo:** instala varias versiones si trabajas en proyectos diferentes. Conviven sin problemas.

## Crea tu primer sitio web

### Paso 1: inicia los servicios necesarios

Antes de crear un sitio, inicia tu servidor web y PHP:

1. Abre el módulo **Apache** o **Nginx**
2. Selecciona la versión que instalaste
3. Haz clic en el botón **Start**

Haz lo mismo con **PHP** y **MySQL** si lo necesitas.

![Arranque de servicios](https://oss.macphpstudy.com/image/quick-start-3.webp)

### Paso 2: crea un sitio

1. Abre el módulo **Host**
2. Haz clic en **"Add Site"**
3. Rellena los datos:
   - **Domain**: `myproject.test` (vale cualquier dominio)
   - **Root Path**: `/Users/you/projects/myproject`
   - **PHP Version**: selecciona la versión que instalaste
   - **Port**: 80 (por defecto)

4. Activa **Auto SSL** para acceso por HTTPS
5. Haz clic en **Save**

![Formulario de añadir sitio](https://oss.macphpstudy.com/image/quick-start-4.webp)

### Paso 3: accede a tu sitio

Después de guardar:
1. Inicia tu servidor web (si aún no está en marcha)
2. Haz clic en el enlace del sitio en la lista de Host
3. O abre `https://myproject.test` en tu navegador

El certificado SSL es de confianza automática para tu sistema.

## Configuración de variables de entorno

FlyEnv puede gestionar el PATH de tu sistema para el acceso desde la terminal:

1. Abre cualquier módulo
2. Haz clic en **"Set to System Path"**
3. Elige las versiones que quieras añadir

Para PHP, también puedes crear alias:
- `php74` -> PHP 7.4
- `php83` -> PHP 8.3

![Variables de entorno](https://oss.macphpstudy.com/image/get-start-13.png)
![Alias de variables de entorno](https://oss.macphpstudy.com/image/get-start-15.png)

**Reinicia tu terminal** después de configurar el PATH para que los cambios surtan efecto.

## Ejemplos rápidos de configuración de proyectos

### Proyecto Laravel

```bash
# Create project
composer create-project laravel/laravel myproject

# In FlyEnv Host module
# - Domain: myproject.test
# - Root: /path/to/myproject/public
# - PHP: 8.2 or 8.3
# - Nginx rewrite: Select "Laravel" template
```

### Sitio WordPress

```bash
# Download WordPress
curl -O https://wordpress.org/latest.tar.gz
tar -xzf latest.tar.gz

# In FlyEnv
# - Create database in MySQL module
# - Domain: wordpress.test
# - Root: /path/to/wordpress
# - Enable URL rewrite
```

### Sitio HTML estático

```bash
# Create folder
mkdir mystaticsite
echo "<h1>Hello FlyEnv</h1>" > mystaticsite/index.html

# In FlyEnv
# - Domain: static.test
# - Root: /path/to/mystaticsite
# - Set as "Static Site" (no PHP)
```

### Proyecto Node.js/NestJS

```bash
# Create NestJS app
npm i -g @nestjs/cli
nest new myapi

# In FlyEnv
# - Start Node.js service
# - Use Nginx reverse proxy to port 3000
# - See reverse proxy guide for details
```

## Gestión de servicios

### Iniciar todo a la vez

Activa **GroupStart** en los módulos que quieras lanzar juntos:

1. Abre el panel de servicios del módulo
2. Marca la casilla **GroupStart**
3. Usa el interruptor principal "Start All"

![Configuración de GroupStart](https://oss.macphpstudy.com/image/get-start-8.png)

### Revisar los logs

Si un servicio no arranca:

1. Haz clic en el botón **Logs** del módulo
2. Revisa los mensajes de error
3. Problemas habituales: conflictos de puertos, dependencias ausentes

## Actualizar FlyEnv

FlyEnv incluye funcionalidad de actualización automática:

1. Comprueba las actualizaciones en **Settings** -> **About**
2. O descarga la última versión manualmente

**Tus datos están a salvo:** los archivos del programa y los datos se almacenan por separado. Actualizar nunca elimina tus sitios ni tus bases de datos.

## Desinstalación

Si necesitas eliminar FlyEnv:

### macOS
```bash
# Remove app
rm -rf /Applications/FlyEnv.app

# Remove data (optional)
rm -rf ~/Library/FlyEnv
rm -rf ~/Library/PhpWebStudy
```

### Windows
1. Elimina la carpeta de FlyEnv
2. La carpeta de datos es `FlyEnv-Data`, en el mismo directorio

### Linux
```bash
# Remove package
sudo apt remove flyenv  # or rpm equivalent

# Remove data
rm -rf ~/.config/FlyEnv
```

## Resolución de problemas

### Errores de "Port already in use"

**Causa**: otra aplicación está usando el puerto 80, 443 o 3306

**Solución**:
```bash
# Find process using port 80
sudo lsof -i :80

# Or change FlyEnv ports in settings
```

### "Permission denied" en macOS

**Solución**: concede Full Disk Access a FlyEnv en System Preferences -> Security & Privacy

### El sitio muestra "502 Bad Gateway"

**Causas**:
1. PHP-FPM no está en ejecución
2. Versión de PHP incorrecta seleccionada para el sitio
3. Configuración incorrecta de nginx/apache

**Solución**: comprueba que PHP-FPM esté iniciado y revisa los logs en busca de errores.

### Los cambios no se reflejan

**Solución**:
1. Vacía la caché del navegador
2. Reinicia el servidor web
3. Comprueba los permisos de los archivos

## Preguntas frecuentes (FAQ)

**P: ¿Necesito saber usar la línea de comandos para usar FlyEnv?**

R: No. Aunque el acceso a la terminal está disponible, todo se puede hacer desde la interfaz gráfica.

**P: ¿Puedo usar mis instalaciones existentes de Homebrew?**

R: Sí. FlyEnv detecta automáticamente las instalaciones de Homebrew y Macports.

**P: ¿Cómo hago copias de seguridad de mis sitios?**

R: Los archivos de tus proyectos están en los directorios que elegiste. Las exportaciones de bases de datos se pueden hacer desde el módulo MySQL.

**P: ¿Puedo importar un proyecto existente?**

R: Por supuesto. Solo tienes que apuntar la ruta raíz del Host a la carpeta de tu proyecto existente.

**P: ¿Qué dominios puedo usar?**

R: Cualquier dominio que termine en .test, .local, .dev o TLD personalizados. Evita .local en algunas redes por conflictos con mDNS.

## Próximos pasos

Ahora que ya está en marcha, explora estas funciones:

- [Aislamiento de versión por proyecto](/es/guide/project-level-runtime-environment) — Cambio automático de versión
- [Dominios personalizados y SSL](/es/guide/host) — Desarrollo local profesional
- [Construir un agente de IA local](/es/guide/build-local-offline-ai-agent) — IA sin conexión con Ollama

[Descarga FlyEnv](/es/download) si aún no lo has hecho, ¡y feliz programación!

---

> 💬 **Perspectiva de la comunidad**: descubre historias reales de desarrolladores y tutoriales sobre FlyEnv en nuestra [página de la Comunidad](/es/community).
