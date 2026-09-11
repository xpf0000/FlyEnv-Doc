---
layout: doc
titleTemplate: false
title: 'Runtimes por proyecto y aislamiento de entornos | FlyEnv'
description: 'Vincula cada proyecto a su propia versión de runtime; los terminales e IDEs la heredan mediante el archivo .flyenv y el hook de shell.'
head:
  - - meta
    - name: description
      content: 'Vincula cada proyecto a su propia versión de runtime; los terminales e IDEs la heredan mediante el archivo .flyenv y el hook de shell.'
  - - meta
    - property: og:title
      content: 'Runtimes por proyecto y aislamiento de entornos | FlyEnv'
  - - meta
    - property: og:description
      content: 'Vincula cada proyecto a su propia versión de runtime; los terminales e IDEs la heredan mediante el archivo .flyenv y el hook de shell.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/es/features/per-project-runtimes
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/es/features/per-project-runtimes
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Runtimes por proyecto en FlyEnv

FlyEnv permite que cada carpeta de proyecto lleve su propia versión de runtime, de modo que una base de código PHP antigua y una aplicación Node.js moderna pueden convivir en la misma máquina; consulta [gestionar varias versiones de Node y PHP](/es/guide/manage-multiple-node-php-versions) para conocer el lado del gestor de versiones. Registra un proyecto en la pestaña **Projects** de cualquier módulo de lenguaje, elige la versión exacta del binario que debe usar y FlyEnv guarda esa elección dentro del propio proyecto. A partir de ahí, los terminales, editores y comandos de ejecución lanzados para ese proyecto resuelven la toolchain correcta automáticamente; el flujo de trabajo paso a paso se explica en la [guía de entorno de runtime a nivel de proyecto](/es/guide/project-level-runtime-environment).

![Pestaña Projects de FlyEnv con los proyectos registrados y sus versiones de runtime vinculadas](https://oss.macphpstudy.com/image/flyenv-version-switch.webp)

## Cómo funciona .flyenv

Cuando añades un proyecto o cambias su versión vinculada, FlyEnv escribe un pequeño archivo `.flyenv` en el directorio del proyecto. Ese archivo es la única fuente de verdad del entorno del proyecto.

- **PATH anteponiéndose:** en macOS y Linux el archivo contiene una línea `export PATH="<bin>:<bin>/bin:<bin>/sbin:$PATH"` que apunta a los directorios del runtime vinculado; en Windows usa la asignación equivalente de PowerShell `$env:PATH`.
- **Etiquetado e idempotente:** cada línea que escribe FlyEnv está marcada con una etiqueta `#FlyEnv-ID-<projectId>`, de modo que al volver a editar el proyecto se reescriben las mismas líneas en su lugar en lugar de añadir duplicados.
- **Por módulo de lenguaje:** la pestaña Projects es común a los módulos de lenguaje — PHP, [NodeJS](/es/features/nodejs), [Python](/es/features/python), Go, Ruby, Rust, Java, .NET, Bun, Deno y más — y cada uno mantiene su propia lista de proyectos con la versión vinculada junto a la ruta del proyecto.
- **Editable en la app:** el propio archivo `.flyenv` puede abrirse y ajustarse desde la vista de configuración del proyecto cuando necesitas algo más allá de la entrada PATH por defecto.

![Un archivo .flyenv escrito por FlyEnv con la línea de exportación de PATH etiquetada](https://oss.macphpstudy.com/image/features/per-project-runtimes-2.webp)

## Hook de shell para zsh, bash y PowerShell

El archivo `.flyenv` surte efecto a través de un hook de shell que FlyEnv instala en tus archivos de arranque del shell.

- **zsh y bash en macOS/Linux:** FlyEnv carga su script auxiliar desde `~/.zshrc` y `~/.bashrc`. El hook vigila los cambios de directorio y, cuando haces `cd` a un proyecto registrado, carga el archivo `.flyenv` de ese proyecto, de modo que `php -v` o `node -v` informan inmediatamente de la versión vinculada.
- **Solo directorios en la lista de permitidos:** el hook activa los archivos `.flyenv` únicamente para los directorios de proyecto que FlyEnv ha registrado y sincronizado en su lista de permitidos, así que un archivo suelto en otro lugar del disco nunca se ejecuta.
- **PowerShell en Windows:** el mismo mecanismo está conectado al perfil de PowerShell, cubriendo tanto Windows PowerShell como las ediciones de PowerShell (pwsh).

![El hook de shell cargando el archivo .flyenv de un proyecto tras cambiar de directorio](https://oss.macphpstudy.com/image/features/per-project-runtimes-3.webp)

## Integración con IDEs y terminales

Como la vinculación vive en el proyecto y no en un ajuste global, cualquier herramienta lanzada sobre esa carpeta hereda el entorno correcto.

- **Acciones de apertura:** cada fila de proyecto ofrece atajos para abrir la carpeta en un terminal o un IDE — Terminal y PowerShell, además de editores como VSCode, PhpStorm, WebStorm, PyCharm o Sublime según el módulo de lenguaje — con el entorno del proyecto ya aplicado.
- **Ejecutar como servicio:** un proyecto puede ejecutarse opcionalmente directamente desde FlyEnv con un comando de arranque personalizado o un archivo de ejecución, un puerto elegido (3000 por defecto, enlazado como `http://127.0.0.1:<port>`) y variables de entorno adicionales proporcionadas en línea o desde un archivo env; útil para mantener vivo un servidor de desarrollo sin una ventana de terminal.
- **Ediciones rápidas:** al hacer doble clic en una fila de proyecto se abre un editor compacto para la versión vinculada, el puerto y el comentario, de modo que cambiar el runtime de un proyecto lleva segundos.

## Selección de versión por sitio

La vinculación de proyectos cubre la línea de comandos; los sitios accedidos desde el navegador tienen su propia elección de versión. Cada sitio creado en el módulo [Host](/es/features/local-sites-https) selecciona la versión de PHP-FPM que lo sirve (o sigue siendo un sitio estático), y varias versiones de PHP-FPM pueden ejecutarse simultáneamente — cada una en su propio socket — de modo que distintos sitios son servidos por distintas builds de PHP al mismo tiempo. La lista de sitios muestra qué versión sirve a cada sitio, y la configuración de integración con el servidor web se regenera cuando una versión arranca. El conjunto completo de capacidades está documentado en la [página de la característica PHP](/es/features/php).

![Lista de sitios del módulo Host mostrando la versión de PHP vinculada a cada sitio](https://oss.macphpstudy.com/image/features/per-project-runtimes-4.webp)

<FeatureRelatedLinks locale="es" slug="per-project-runtimes" />

## Notas de compatibilidad

El hook de shell requiere un shell de inicio de sesión soportado: zsh o bash en macOS y Linux, y PowerShell (Windows PowerShell o pwsh) en Windows; otros shells no se conectan automáticamente. El hook solo carga archivos `.flyenv` de directorios registrados en FlyEnv, y ajusta PATH para la sesión de shell actual; no modifica las variables de entorno de todo el sistema. La vinculación de versiones elige entre runtimes ya instalados o añadidos en FlyEnv; no puede proporcionar una versión que no esté presente en la máquina. La selección de PHP por sitio se aplica a sitios servidos a través de PHP-FPM (FastCGI en Windows); los sitios estáticos y los runtimes que no son PHP no la utilizan. Las diferencias entre plataformas — como los sockets Unix en macOS/Linux frente a los workers FastCGI en Windows — siguen el comportamiento del [módulo PHP](/es/features/php) subyacente, y la [página de descarga](/es/download) refleja lo que está disponible para tu sistema operativo.
