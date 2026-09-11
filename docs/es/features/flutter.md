---
layout: doc
titleTemplate: false
title: 'Flutter en FlyEnv: guía de desarrollo local'
description: 'Instala, configura y gestiona Flutter en FlyEnv para el desarrollo local.'
head:
  - - meta
    - name: description
      content: 'Instala, configura y gestiona Flutter en FlyEnv para el desarrollo local.'
  - - meta
    - property: og:title
      content: 'Flutter en FlyEnv: guía de desarrollo local'
  - - meta
    - property: og:description
      content: 'Instala, configura y gestiona Flutter en FlyEnv para el desarrollo local.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/es/features/flutter
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/es/features/flutter
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Desarrollo con Flutter en FlyEnv

Flutter es el toolkit de UI de código abierto de Google para crear aplicaciones móviles, web y de escritorio multiplataforma a partir de una única base de código Dart. FlyEnv cubre toda la configuración local de Flutter en un solo módulo: instalación y cambio de versiones del Flutter SDK directamente desde la lista oficial de lanzamientos de Google, una instantánea analizada de Flutter Doctor, un Command Center para los comandos habituales de Flutter y Dart, creación y edición guiada de proyectos, y un comprobador del toolchain de Android con correcciones automáticas.

![Vista general del módulo Flutter de FlyEnv](https://oss.macphpstudy.com/image/features/flutter-1.webp)

## Gestión de versiones del Flutter SDK

La pestaña **Version Manager** instala los Flutter SDK únicamente desde la fuente Static; Homebrew y MacPorts no están disponibles para Flutter.

- **Lista oficial de lanzamientos:** las versiones se obtienen directamente de los archivos oficiales de Google `releases_{macos,linux,windows}.json` alojados en `storage.googleapis.com/flutter_infra_release`, no de un índice de terceros.
- **Canales stable y beta:** un selector de canal filtra la lista a los canales stable y beta, y en macOS la lista tiene en cuenta la arquitectura, de modo que las máquinas Apple Silicon e Intel reciben cada una el archivo correcto.
- **Gestión del checkout de Git:** tras descomprimir el archivo del SDK, FlyEnv ejecuta `git init` dentro del directorio del SDK, porque Flutter espera que su SDK viva en un checkout de Git.
- **Cambio de PATH:** la pestaña **Service** enumera todos los SDK detectados y te permite añadir una versión al `PATH` de tu terminal o quitarla, indicando si la entrada actual fue establecida por FlyEnv o por otra herramienta.

![Version Manager de Flutter con selector de canales stable y beta](https://oss.macphpstudy.com/image/features/flutter-2.webp)

## Estado del SDK y Flutter Doctor

La pestaña **General** es el panel de control de tu entorno Flutter.

- **Tarjetas de estado:** de un vistazo, consulta la versión de Flutter, la versión de Dart incluida, el canal actual, el estado del Android SDK y el número de dispositivos ADB conectados.
- **Panel de detalles del SDK:** muestra la versión, el canal y la fuente del SDK —si se encontró en `PATH`, en una ubicación predeterminada, en un directorio personalizado o si lo instaló FlyEnv— junto con los directorios de búsqueda que se escanearon. La detección cubre `PATH`, `FLUTTER_ROOT`, `~/development/flutter`, `~/flutter`, `/opt/flutter`, `/usr/local/flutter`, ubicaciones habituales de Windows como las rutas de scoop y AppData, tus directorios personalizados y las carpetas de SDK gestionadas por el propio FlyEnv.
- **Instantánea de Flutter Doctor:** una vista analizada de la salida de `flutter doctor -v`, para que puedas leer el diagnóstico completo sin abrir una terminal.

![Pestaña General con tarjetas de estado y salida analizada de Flutter Doctor](https://oss.macphpstudy.com/image/features/flutter-3.webp)

## Command Center

También en la pestaña **General**, el Command Center ejecuta los comandos que usas a diario contra un SDK o directorio de proyecto elegido, con un panel de consola compartido que muestra el stdout y el stderr reales (se conservan los últimos 120 KB de salida).

- **Flutter SDK:** ejecuta `flutter upgrade`, lista los canales disponibles y cambia entre stable, beta y master.
- **Herramientas Pub:** ejecuta `pub get`, `pub upgrade`, `pub outdated` y `pub deps` sobre un directorio de proyecto seleccionado.
- **Build:** `flutter build apk --debug` o `--release`, `flutter build web`, `flutter build windows` y `flutter clean`.
- **Calidad:** `flutter analyze`, `flutter test` y `dart format`.
- **Doctor:** vuelve a ejecutar Flutter Doctor desde la misma consola cuando necesites un diagnóstico actualizado.

![Command Center ejecutando comandos pub y build con salida de consola](https://oss.macphpstudy.com/image/features/flutter-4.webp)

## Creación y edición de proyectos

La pestaña **Flutter Projects** enumera tus proyectos y vincula cada uno a su propia versión de Flutter, siguiendo el mismo modelo de [entorno de runtime a nivel de proyecto](/es/guide/project-level-runtime-environment) que el resto de módulos de lenguajes.

**Create Project** genera la estructura de un nuevo proyecto Flutter sin salir de la aplicación:

1. Define el nombre del proyecto, el directorio de salida, la organización y la plantilla —`app`, `package`, `plugin`, `module` o `skeleton`— y, opcionalmente, fija una versión concreta de Flutter.
2. Configura las identidades por plataforma: el nombre del paquete de Android, el bundle ID de iOS, el nombre de la aplicación web y el bundle ID de escritorio.
3. Busca en pub.dev y añade dependencias (incluidas las dependencias de desarrollo) incluso antes de que el proyecto exista.
4. Adjunta los archivos de configuración de Firebase por plataforma y define los iconos de la aplicación por plataforma; el proyecto terminado se añade automáticamente a la lista de proyectos.

**Edit Project** vuelve a abrir los mismos ajustes para un proyecto existente: actualiza su identidad y nombres de paquete, gestiona las dependencias de `pubspec.yaml` con un informe de paquetes desactualizados que compara las versiones actuales con las más recientes y señala cuáles se pueden actualizar, y reemplaza los archivos de Firebase o los iconos de la aplicación.

![Creación de un proyecto Flutter con plantilla, nombres de paquete y dependencias de pub.dev](https://oss.macphpstudy.com/image/features/flutter-5.webp)

## Toolchain de Android

La pestaña **Android** comprueba todo lo que Flutter necesita para las compilaciones de Android y te ayuda a corregir lo que falte.

- **Variables de entorno:** muestra los valores actuales de `ANDROID_HOME`, `ANDROID_SDK_ROOT` y `JAVA_HOME`. La [guía del entorno PATH del sistema](/es/guide/setup-system-path-environment) explica cómo gestiona FlyEnv este tipo de variables y entradas de PATH entre herramientas.
- **Comprobaciones de preparación:** verifica el Android SDK, platform-tools, ADB, cmdline-tools, build-tools, el JDK y Gradle, cada uno con una sugerencia de corrección cuando falta algo o está mal configurado. Los módulos [Java](/es/features/java) y [Gradle](/es/features/gradle) de FlyEnv pueden instalar y gestionar estas dos últimas dependencias.
- **Correcciones automáticas:** acciones de un clic que establecen las variables de entorno del SDK y añaden platform-tools a tu `PATH`.
- **Dispositivos ADB:** enumera los dispositivos conectados, con acciones para establecer el dispositivo de destino, desconectar un dispositivo o ver su información.
- **Acciones rápidas:** ejecuta `flutter run`, `flutter build apk` o `flutter build appbundle` sobre un proyecto elegido, dirigido al dispositivo seleccionado.

![Comprobaciones del toolchain de Android con acciones de corrección y lista de dispositivos ADB](https://oss.macphpstudy.com/image/features/flutter-6.webp)

<FeatureRelatedLinks locale="es" slug="flutter" />

## Notas de compatibilidad

El módulo Flutter gestiona las instalaciones del SDK, las variables de entorno y la ejecución de comandos; no incluye el Android SDK, un JDK ni emuladores de dispositivos, y no garantiza que todas las versiones de Flutter o Dart compilen en todos los sistemas operativos. La salida de los comandos aparece en la consola de la pestaña General en lugar de en visores de archivos de log. Consulta la [página de descarga](/es/download) y las notas de la versión actual para conocer las plataformas y paquetes compatibles.
