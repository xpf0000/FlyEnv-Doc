---
title: 'Depurar PHP con Xdebug en PhpStorm y VS Code'
head:
  - - meta
    - name: description
      content: 'Instala y configura Xdebug para el PHP de FlyEnv, y conecta PhpStorm o VS Code para usar breakpoints, inspección de variables y profiling.'
---

# Depuración de PHP con Xdebug: guía paso a paso para PhpStorm y VS Code

¿Cansado de añadir `var_dump()` y `dd()` por todas partes? Xdebug convierte la depuración de PHP en una investigación precisa, paso a paso, en lugar de un juego de adivinanzas. Ve exactamente lo que hace tu código, inspecciona variables en cualquier punto y sigue el flujo de ejecución, todo sin modificar tu código.

Con la instalación de Xdebug en un clic de FlyEnv, puedes tener una depuración profesional en minutos en lugar de pasar horas editando archivos de configuración.

## Por qué Xdebug lo cambia todo

### Depuración tradicional (sin Xdebug)

```php
public function calculateTotal($items)
{
    $total = 0;
    foreach ($items as $item) {
        $price = $item->price;
        var_dump($price); // Remove this later
        $total += $price;
    }
    dd($total); // Die and dump
    return $total;
}
```

**Problemas:**
- Código lleno de sentencias de depuración
- Es fácil olvidar quitar el código de depuración antes de hacer commit
- No puedes ver los valores intermedios con facilidad
- No hay visibilidad del flujo de ejecución

### Depuración con Xdebug

```php
public function calculateTotal($items)
{
    $total = 0;
    foreach ($items as $item) {
        $price = $item->price; // Set breakpoint here
        $total += $price;
    }
    return $total;
}
```

Coloca un breakpoint. Listo. Inspecciona variables, recorre los bucles paso a paso y mira la pila de llamadas, todo en tu IDE.

## Instalar Xdebug en FlyEnv

### macOS y Linux: instalación en un clic

FlyEnv ofrece la forma más rápida de instalar Xdebug, sin descargas manuales ni búsqueda de archivos de configuración.

1. Abre FlyEnv → módulo **PHP**
2. Selecciona tu versión de PHP
3. Haz clic en la pestaña **"Extensions"**
4. Busca **Xdebug** en la lista
5. Haz clic en **Install**

<img src="https://oss.macphpstudy.com/image/2fdcb21372c6.png" data-x-image-preview="" alt="Pestaña Extensions del módulo PHP en FlyEnv">

Xdebug se descarga e instala automáticamente:

<img src="https://oss.macphpstudy.com/image/6ed17cba5620.png" data-x-image-preview="" alt="Descarga e instalación automática de Xdebug">

Verás Xdebug en la lista como instalado:

<img src="https://oss.macphpstudy.com/image/e459c21168db.png" data-x-image-preview="" alt="Xdebug instalado en FlyEnv">

### Windows: instalación manual

En Windows hace falta una descarga manual (por la compatibilidad de los binarios de PHP):

1. En el módulo PHP de FlyEnv, haz clic en el botón **"Extension"**
2. Esto abre el sitio web de PECL y tu carpeta de extensiones de PHP

<img src="https://oss.macphpstudy.com/image/a4e9e0dd1b67.png" data-x-image-preview="" alt="Botón Extension del módulo PHP en Windows">

3. Visita [https://pecl.php.net/package/xdebug](https://pecl.php.net/package/xdebug)
4. Descarga el `xdebug.dll` que coincida con tu versión de PHP (TS/NTS, x64/x86)
5. Coloca `xdebug.dll` en tu carpeta de extensiones de PHP (la que se abrió en el paso 2)

**Consejo:** usa el [Xdebug Wizard](https://xdebug.org/wizard) si no estás seguro de qué DLL descargar.

## Configurar Xdebug

### Configuración rápida con plantillas

FlyEnv incluye plantillas de Xdebug preconfiguradas: no hace falta memorizar los ajustes.

1. En el módulo PHP, haz clic en **"Conf"** para editar `php.ini`
2. Busca la sección de configuración de Xdebug
3. Haz clic en el **botón de plantilla/copiar** para insertar los ajustes recomendados

<img src="https://oss.macphpstudy.com/image/a32559287475.png" data-x-image-preview="" alt="Botón Conf para editar php.ini">

<img src="https://oss.macphpstudy.com/image/f67b14ef9aa3.png" data-x-image-preview="" alt="Plantilla de configuración de Xdebug">

### Configuración recomendada de Xdebug

Pega esto en tu `php.ini` (macOS/Linux):

```ini
[xdebug]
zend_extension = "xdebug.so"
xdebug.idekey = "PHPSTORM"
xdebug.client_host = localhost
xdebug.client_port = 9003
xdebug.mode = debug
xdebug.profiler_append = 0
xdebug.profiler_output_name = cachegrind.out.%p
xdebug.start_with_request = yes
xdebug.trigger_value = StartProfileForMe
xdebug.output_dir = /tmp
```

**En Windows**, cambia la línea de la extensión:
```ini
zend_extension = "xdebug.dll"
```

### Configuración explicada

| Ajuste | Valor | Propósito |
|---------|-------|---------|
| `xdebug.mode` | `debug` | Activa la depuración (no el profiling) |
| `xdebug.client_port` | `9003` | Puerto en el que escucha el IDE (predeterminado de PhpStorm) |
| `xdebug.idekey` | `PHPSTORM` | Identificador para la coincidencia con el IDE |
| `xdebug.start_with_request` | `yes` | Inicia la depuración automáticamente en cada petición |
| `xdebug.client_host` | `localhost` | Dónde se está ejecutando el IDE |

### Reiniciar PHP

Después de guardar `php.ini`:

1. Reinicia el servicio PHP en FlyEnv
2. Crea un archivo de prueba `phpinfo.php`:
   ```php
   <?php phpinfo(); ?>
   ```
3. Accede a él en el navegador
4. Busca "Xdebug": deberías ver la información de la versión

## Configuración del IDE

### Configuración de PhpStorm

#### Paso 1: definir el intérprete de PHP

1. Abre **Preferences** → **PHP**
2. Define el CLI Interpreter con tu versión de PHP de FlyEnv

<img src="https://oss.macphpstudy.com/image/4b91c7af97cf.png" data-x-image-preview="" alt="Definir el CLI Interpreter en PhpStorm">

#### Paso 2: configurar el puerto de Xdebug

1. Ve a **Preferences** → **PHP** → **Debug**
2. Define el puerto de Debug como `9003` (el mismo que en `php.ini`)

<img src="https://oss.macphpstudy.com/image/9b600b0b0275.png" data-x-image-preview="" alt="Configurar el puerto de depuración en PhpStorm">

#### Paso 3: definir el IDE key y el host

1. En los ajustes de Debug, define:
   - **IDE key**: `PHPSTORM` (el mismo que en `php.ini`)
   - **Host**: `localhost`

<img src="https://oss.macphpstudy.com/image/EFC867333484.jpg" data-x-image-preview="" alt="Definir el IDE key y el host en PhpStorm">

#### Paso 4: empezar a escuchar

Haz clic en el botón **"Start Listening for PHP Debug Connections"** (el icono del teléfono) en la barra de herramientas:

<img src="https://oss.macphpstudy.com/image/dad7b890d719.png" data-x-image-preview="" alt="Botón Start Listening for PHP Debug Connections">

#### Paso 5: colocar un breakpoint y depurar

1. Abre un archivo PHP de tu proyecto
2. Haz clic en el margen para colocar un breakpoint (aparece un punto rojo)
3. Visita tu sitio en el navegador
4. PhpStorm te pedirá aceptar la conexión:

<img src="https://oss.macphpstudy.com/image/bc0823efa076.png" data-x-image-preview="" alt="Aviso de conexión entrante de Xdebug en PhpStorm">

Haz clic en **"Accept"** y ya estás en modo de depuración:

<img src="https://oss.macphpstudy.com/image/72ba6834f455.png" data-x-image-preview="" alt="Modo de depuración en PhpStorm">

**Paneles del depurador:**
- **Frames**: pila de llamadas que muestra la ruta de ejecución
- **Variables**: inspecciona todas las variables en el ámbito
- **Watches**: sigue expresiones concretas
- **Console**: ejecuta código PHP en el contexto actual

### Configuración de VS Code

#### Paso 1: instalar la extensión PHP Debug

1. Abre la vista de Extensions (Ctrl+Shift+X)
2. Busca **"PHP Debug"**
3. Instala la extensión de Felix Becker

<img src="https://oss.macphpstudy.com/image/php-debug-package.png" data-x-image-preview="" alt="Extensión PHP Debug en VS Code">

4. Recarga la ventana de VS Code después de la instalación

#### Paso 2: añadir la configuración de depuración

1. Cambia a la vista de Debug (Ctrl+Shift+D)
2. Haz clic en **"create a launch.json file"**

<img src="https://oss.macphpstudy.com/image/configure-xdebug.png" data-x-image-preview="" alt="Crear un archivo launch.json en VS Code">

3. Selecciona **"PHP"** como entorno

<img src="https://oss.macphpstudy.com/image/launch-json.png" data-x-image-preview="" alt="Seleccionar PHP como entorno en launch.json">

#### Paso 3: configurar launch.json

VS Code crea `.vscode/launch.json`. Añade la propiedad `runtimeExecutable` apuntando a tu PHP de FlyEnv:

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Listen for Xdebug",
            "type": "php",
            "request": "launch",
            "port": 9003,
            "runtimeExecutable": "/Users/username/.flyenv/php/8.3.11/bin/php"
        }
    ]
}
```

**Encuentra la ruta de tu PHP:**
```bash
which php
# or
flyenv php path
```

#### Paso 4: iniciar la depuración

1. Haz clic en el botón verde **"Start Debugging"** (el icono de reproducción)
2. Coloca breakpoints en tu código
3. Visita tu sitio en el navegador

<img src="https://oss.macphpstudy.com/image/vscode-xdebug.png" data-x-image-preview="" alt="Depuración con Xdebug en VS Code">

#### Paso 5: controles de depuración

Cuando se alcanza un breakpoint:

<img src="https://oss.macphpstudy.com/image/breakpoints-vscode.png" data-x-image-preview="" alt="Breakpoint alcanzado en VS Code">

**Debug Console** muestra los valores de las variables y los detalles de la ejecución.

**Atajos de teclado:**

| Tecla | Acción |
|-----|--------|
| F5 | Continuar / ejecutar hasta el siguiente breakpoint |
| F10 | Step Over (ejecuta la línea sin entrar en las funciones) |
| F11 | Step Into (entra en las llamadas a funciones) |
| Shift + F11 | Step Out (sale de la función actual) |

<img src="https://oss.macphpstudy.com/image/controls-xdebug.png" data-x-image-preview="" alt="Controles de depuración en VS Code">

## Técnicas de depuración esenciales

### 1. Breakpoints condicionales

Detente solo cuando se cumplan condiciones concretas:

```php
// Right-click breakpoint → More → Condition
$user->id === 123
$total > 1000
!empty($items)
```

### 2. Vigilar expresiones

Supervisa variables o expresiones concretas:

- `$user->email`
- `count($cart->items)`
- `$request->input('search')`

### 3. Evaluar código

Ejecuta código PHP durante la depuración:

```php
// In PhpStorm Console or VSCode Debug Console
$user->refresh();
DB::table('logs')->where('id', 1)->first();
```

### 4. Trazado de la pila

Mira cómo has llegado a la línea actual:

```
#0 app/Http/Controllers/OrderController.php(45)
#1 vendor/laravel/framework/src/Routing/ControllerDispatcher.php(48)
#2 vendor/laravel/framework/src/Routing/Route.php(262)
...
```

Haz clic en cualquier frame para inspeccionar las variables en ese punto de la ejecución.

## Solución de problemas

### "Xdebug not loading" en phpinfo()

**Causas:**
- Ruta de la extensión incorrecta
- Versión incompatible (TS vs NTS)
- PHP no se reinició después del cambio de configuración

**Solución:**
1. Verifica que la ruta de `zend_extension` sea correcta
2. Revisa los logs de errores de PHP por errores de carga
3. Asegúrate de que PHP se reinició en FlyEnv

### "Cannot accept external Xdebug connection"

**Causa:** puerto incorrecto o firewall

**Solución:**
1. Verifica el puerto 9003 tanto en `php.ini` como en el IDE
2. Comprueba que el firewall no esté bloqueando localhost:9003
3. Asegúrate de que el IDE esté escuchando antes de hacer peticiones

### "Connection refused" o timeout

**Causa:** Xdebug no puede alcanzar el IDE

**Solución:**
```ini
; Try these settings in php.ini
xdebug.client_host = 127.0.0.1
xdebug.discover_client_host = 1
xdebug.client_port = 9003
```

### La depuración no arranca

**Causa:** ajuste `start_with_request`

**Solución:**
- `xdebug.start_with_request = yes` — depura cada petición (solo en desarrollo)
- `xdebug.start_with_request = trigger` — solo cuando se active (añade `?XDEBUG_TRIGGER=1` a la URL)

### Los breakpoints no se activan

**Lista de comprobación:**
- [ ] Los path mappings están bien configurados (PhpStorm)
- [ ] El archivo en el servidor coincide con el archivo local
- [ ] El breakpoint está en una línea ejecutable (no en una línea en blanco o un comentario)
- [ ] El modo de Xdebug es `debug` (no `profile` ni `off`)

## Profiling de rendimiento (extra)

Xdebug también puede hacer profiling de tu código para encontrar cuellos de botella:

```ini
xdebug.mode = profile
xdebug.start_with_request = trigger
xdebug.output_dir = /tmp
```

Activa el profiling añadiendo `?XDEBUG_PROFILE=1` a cualquier URL. Analiza los resultados con:
- **KCachegrind** (Linux)
- **QCachegrind** (macOS/Windows)
- **PhpStorm** (profiler integrado)

## Preguntas frecuentes (FAQ)

**P: ¿Xdebug ralentiza mi aplicación?**

R: Sí, entre un 10 y un 50 % cuando está activo. Actívalo solo en desarrollo, nunca en producción. Usa `xdebug.mode = off` para desactivarlo sin desinstalarlo.

**P: ¿Puedo usar Xdebug con Laravel Sail?**

R: Sí, pero es complejo. Con FlyEnv, Xdebug funciona de forma nativa, sin las complicaciones de red de Docker.

**P: ¿Cuál es la diferencia entre Xdebug 2 y 3?**

R: FlyEnv instala Xdebug 3.x, que tiene una configuración simplificada. Ajustes como `remote_enable` se sustituyen por `mode = debug`.

**P: ¿Puedo depurar scripts de CLI?**

R: Sí. En PhpStorm, usa "Run > Debug" sobre tu script. En VS Code, configura una configuración "Launch currently open script".

**P: ¿Por qué usar el puerto 9003 en lugar del 9000?**

R: Xdebug 3 cambió el puerto predeterminado de 9000 a 9003 para evitar conflictos con PHP-FPM, que suele usar el 9000.

**P: ¿Puedo depurar peticiones AJAX?**

R: Sí. Xdebug funciona con cualquier petición HTTP: cargas de página, AJAX, llamadas a API. Solo asegúrate de que tu IDE esté escuchando.

**P: ¿Cómo depuro solo peticiones concretas?**

R: Cambia a `xdebug.start_with_request = trigger` y añade `?XDEBUG_TRIGGER=1` a las URL que quieras depurar.

**P: ¿Puedo usar Xdebug con tests de PHPUnit?**

R: Por supuesto. Coloca breakpoints en los métodos de test o en el código fuente, y luego ejecuta los tests con la depuración activada en tu IDE.

**P: ¿Xdebug funciona con PHP 8+?**

R: Sí. Xdebug 3.0+ es totalmente compatible con PHP 8.0, 8.1, 8.2 y 8.3, incluidas las nuevas características como los argumentos con nombre y los atributos.

## Resumen

Xdebug + FlyEnv te ofrece una depuración profesional de PHP:

- ✅ **Instalación en un clic** en macOS/Linux
- ✅ **Plantillas preconfiguradas** en FlyEnv
- ✅ **Depuración paso a paso** en PhpStorm y VS Code
- ✅ **Inspección de variables** y evaluación de expresiones
- ✅ **Trazado de la pila de llamadas** para aplicaciones complejas

Deja de adivinar lo que hace tu código. Empieza a verlo.

[Descargar FlyEnv](/es/download) — Disponible para macOS, Windows y Linux

Guías relacionadas:
- [Ejecutar Laravel con FlyEnv](/es/guide/run-laravel-use-flyenv) — configuración específica para Laravel
- [Aislamiento de versiones a nivel de proyecto](/es/guide/project-level-runtime-environment) — gestiona varias versiones de PHP
- [Instalación de extensiones de PHP](/es/guide/php-extensions-install) — otras extensiones útiles
