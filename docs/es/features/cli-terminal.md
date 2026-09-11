---
layout: doc
titleTemplate: false
title: 'Integración con la terminal y el shell | FlyEnv'
description: 'FlyEnv se integra con tu terminal: hooks de shell para entornos de proyecto, acciones de abrir en la terminal y terminales integradas.'
head:
  - - meta
    - name: description
      content: 'FlyEnv se integra con tu terminal: hooks de shell para entornos de proyecto, acciones de abrir en la terminal y terminales integradas.'
  - - meta
    - property: og:title
      content: 'Integración con la terminal y el shell | FlyEnv'
  - - meta
    - property: og:description
      content: 'FlyEnv se integra con tu terminal: hooks de shell para entornos de proyecto, acciones de abrir en la terminal y terminales integradas.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/es/features/cli-terminal
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/es/features/cli-terminal
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Integración con la terminal en FlyEnv

FlyEnv no incluye su propia aplicación de terminal: en su lugar, se conecta a las terminales que ya usas. Un hook de shell carga el entorno de proyecto correcto cuando haces `cd` hacia un proyecto, los servicios y proyectos pueden lanzarse en una ventana de terminal real con un clic, las instalaciones de larga duración se ejecutan en terminales xterm integradas dentro de la app, y una utilidad de la página Tools abre para editar los archivos y las entradas de PATH detrás de tus variables de entorno.

![Lista de proyectos de FlyEnv con versiones de runtime vinculadas y acciones de terminal](https://oss.macphpstudy.com/image/flyenv-version-switch.webp)

## Hook de shell e integración con PATH

FlyEnv instala un pequeño hook de shell para que tu terminal habitual cargue los entornos de proyecto automáticamente. En macOS y Linux, el script auxiliar `flyenv.sh` se carga desde `~/.zshrc` o `~/.bashrc`; en Windows, FlyEnv se integra con el perfil de PowerShell, cubriendo tanto el clásico Windows PowerShell como las ediciones multiplataforma de `pwsh`.

- **Activación según el directorio:** el hook reacciona a los cambios de directorio. Cuando entras en una carpeta de proyecto gestionada por FlyEnv, carga el archivo `.flyenv` de ese proyecto; los directorios fuera de la lista blanca sincronizada de FlyEnv no se tocan.
- **Archivos de entorno `.flyenv`:** cada proyecto registrado recibe un archivo `.flyenv` en su raíz que antepone los directorios bin del runtime vinculado al `PATH` — sintaxis `export PATH="..."` en macOS y Linux, `$env:PATH = ...` en Windows. Cada línea está etiquetada con el ID del proyecto, de modo que FlyEnv puede reescribir el archivo de forma idempotente cada vez que cambies la vinculación. Consulta [Entornos de runtime por proyecto](/es/features/per-project-runtimes) para ver cómo se crean las vinculaciones.
- **Control del PATH por versión:** desde la tabla de versiones de un módulo de lenguaje decides qué versión instalada ocupa el `PATH`, y la tabla indica si la entrada actual la colocó FlyEnv u otra herramienta.
- **Configuración del PATH paso a paso:** la [guía del entorno PATH del sistema](/es/guide/setup-system-path-environment) recorre todo el flujo con capturas de pantalla.

![Tabla de versiones con interruptores de PATH que muestran las entradas creadas por FlyEnv](https://oss.macphpstudy.com/image/features/cli-terminal-2.webp)

## Abrir en la terminal

A veces un proceso pertenece a una ventana de terminal real: para ver su salida, responder a sus mensajes o mantenerlo vivo después de cerrar FlyEnv. Los proyectos y servicios pueden iniciarse exactamente así.

- **Proyectos:** activa la opción de ejecutar en la terminal en un proyecto de lenguaje y su comando o archivo de ejecución se abre en una ventana de terminal del sistema, con el directorio del proyecto como directorio de trabajo y el entorno del proyecto aplicado.
- **Lanzamiento nativo de cada plataforma:** macOS controla Terminal.app mediante AppleScript, Linux lanza mediante un script auxiliar incluido y Windows genera una ventana de PowerShell que ejecuta un script en línea: la misma acción, tres implementaciones nativas.
- **Módulos personalizados e inicios con privilegios elevados:** los [módulos de servicio definidos por el usuario](/es/features/user-modules) ofrecen el mismo lanzamiento en la terminal, y los elementos que necesitan sudo pueden recurrir a abrir el comando en una terminal donde el mensaje de contraseña del sistema funciona con normalidad.

![Abrir en la terminal con FlyEnv](https://oss.macphpstudy.com/image/features/cli-terminal-3.webp)

## Terminales xterm integradas

Para cargas de trabajo interactivas y puntuales, FlyEnv incrusta sesiones de terminal basadas en xterm directamente en su propia ventana, de modo que ves la salida real del comando sin salir de la app.

- **Instalaciones con un clic:** los runtimes y las herramientas se instalan mediante sus instaladores oficiales en una terminal integrada — rustup para Rust, GVM para Go, Podman vía Homebrew en macOS y Linux, y los scripts de los proveedores de las herramientas de IA de línea de comandos con el entorno de proxy de FlyEnv inyectado.
- **Operaciones de paquetes:** compilar la extensión pgvector de [PostgreSQL](/es/features/postgresql), descargar y ejecutar modelos de [Ollama](/es/features/ollama) o instalar [n8n](/es/features/n8n) mediante npm: todo envía su salida real a la vista integrada.
- **Paletas de comandos:** los módulos de tipo gateway como [OpenClaw](/es/features/openclaw) y [Hermes](/es/features/hermes-agent) exponen paletas de comandos categorizadas cuyas entradas se ejecutan en la terminal integrada, rellenando previamente los comandos que necesitan argumentos.
- **Operaciones de Podman:** las sesiones exec en contenedores y las acciones sobre imágenes o contenedores se abren en un diálogo de terminal integrada dedicado.

## Herramienta de variables de entorno del sistema

La página Tools incluye una utilidad de variables de entorno del sistema cuya forma depende de la plataforma, de modo que los ajustes que normalmente viven detrás de diálogos del SO o de archivos de shell dispersos son accesibles desde la misma ventana que tus runtimes.

- **En Windows — un editor de PATH:** los directorios de tu `PATH` se enumeran en una tabla donde puedes añadir, editar, eliminar y reordenar entradas antes de guardar; es el flujo complementario a los interruptores de la tabla de versiones descritos arriba. Un botón de acceso directo abre el diálogo propio del sistema operativo de variables de entorno cuando necesitas tocar algo más que el PATH.
- **En macOS y Linux — los propios archivos de shell:** la herramienta enumera los archivos de inicio donde se definen realmente las variables de entorno — `~/.zshrc`, `~/.bashrc`, `/etc/paths` y sus parientes — y abre cada uno en un editor, o lo revela en el gestor de archivos.
- **Combinada con el hook de shell:** los archivos y las entradas de PATH editados aquí proporcionan la capa base del entorno, mientras que los archivos `.flyenv` y el hook de shell gestionan la capa por proyecto encima.

![Editor de variables de entorno del sistema en la página Tools de FlyEnv](https://oss.macphpstudy.com/image/features/cli-terminal-4.webp)

<FeatureRelatedLinks locale="es" slug="cli-terminal" />

## Notas de compatibilidad

La integración con la terminal en FlyEnv es un conjunto de capacidades repartidas por la app, no un único módulo de terminal independiente. El hook de shell se instala para zsh y bash en macOS y Linux a través de los archivos rc del shell; en Windows, la integración equivalente apunta al perfil de PowerShell tanto en las ediciones Windows PowerShell como `pwsh`, y no se conecta a otros shells. La carga automática de `.flyenv` solo se aplica a los directorios de proyecto registrados e incluidos en la lista blanca de FlyEnv. La ventana de terminal que usan las acciones de abrir en la terminal es la propia de la plataforma — Terminal.app en macOS, un script auxiliar de terminal en Linux, PowerShell en Windows — por lo que su apariencia y comportamiento siguen al SO, no a FlyEnv. Las sesiones xterm integradas existen para las tareas concretas de instalación, ejecución y exec descritas arriba y no son un shell de uso general. Toma la [página de descargas](/es/download) y el comportamiento de la app en tu plataforma como la fuente fiable de lo que está disponible.
