---
layout: doc
titleTemplate: false
title: 'Gestor de versiones de Gradle con soporte para SDKMAN | FlyEnv'
description: 'Instala y cambia versiones de Gradle desde builds estáticos, Homebrew, MacPorts o SDKMAN, y define la versión predeterminada del terminal.'
head:
  - - meta
    - name: description
      content: 'Instala y cambia versiones de Gradle desde builds estáticos, Homebrew, MacPorts o SDKMAN, y define la versión predeterminada del terminal.'
  - - meta
    - property: og:title
      content: 'Gestor de versiones de Gradle con soporte para SDKMAN | FlyEnv'
  - - meta
    - property: og:description
      content: 'Instala y cambia versiones de Gradle desde builds estáticos, Homebrew, MacPorts o SDKMAN, y define la versión predeterminada del terminal.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/es/features/gradle
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/es/features/gradle
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Gestión de versiones de Gradle con FlyEnv

Gradle es una herramienta de automatización de builds usada principalmente en proyectos Java, Kotlin y Android, que se encarga de la compilación, la gestión de dependencias, las pruebas y el empaquetado; es la herramienta de build estándar detrás de frameworks como [Spring Boot](/es/solutions/spring-boot). FlyEnv mantiene varias versiones de Gradle en un mismo equipo y cambia la que usa tu terminal. El módulo de Gradle se centra en dos cosas: instalar versiones desde varias fuentes y controlar a qué binario `gradle` resuelve tu shell. No ejecuta ningún servicio en segundo plano: no hay nada que iniciar ni detener.

![Vista general del módulo Gradle de FlyEnv](https://oss.macphpstudy.com/image/features/gradle-1.webp)

## Gestión de versiones de Gradle

Abre **Gradle → Version Manager** para instalar y gestionar distribuciones de Gradle en paralelo.

- **Múltiples fuentes de instalación:** builds estáticos en macOS, Linux y Windows; Homebrew y MacPorts en macOS; y SDKMAN en macOS y Linux. Elige la fuente que ya gestiona las herramientas de tu equipo.
- **Detección de SDKMAN:** FlyEnv analiza automáticamente `~/.sdkman/candidates/gradle`, de modo que las versiones que instalaste con SDKMAN aparecen en la lista junto a las gestionadas por FlyEnv.
- **Versiones personalizadas:** apunta FlyEnv a cualquier directorio que contenga tu propia distribución de Gradle; detecta el binario `bin/gradle` (`gradle.bat` en Windows) y lo muestra junto a las versiones gestionadas.
- **Instalaciones limpias:** los builds estáticos se descomprimen en el directorio de la aplicación de FlyEnv como `gradle/<version>/`, se verifican con `gradle --version` y los atributos de cuarentena de macOS se eliminan automáticamente tras la extracción.

![Version Manager de Gradle con las fuentes Static, Homebrew, MacPorts y SDKMAN](https://oss.macphpstudy.com/image/features/gradle-2.webp)

## Cambio de versión desde la línea de comandos

La pestaña **Service** es una tabla de versiones instaladas: a pesar del nombre, Gradle no es un servicio en ejecución, así que esta pestaña gestiona versiones y el PATH en lugar de procesos.

- **Versión predeterminada del terminal:** define a qué versión instalada resuelve el comando `gradle` de tu terminal. FlyEnv añade o elimina el directorio `bin` de la versión en tu `PATH` e indica si la entrada actual la estableció FlyEnv u otra herramienta.
- **Alias por versión:** asigna a cada instalación un alias corto para que los builds similares sigan siendo distinguibles en la lista.
- **Nota por versión:** adjunta una nota de texto libre a cualquier versión para registrar para qué sirve.
- **Eliminación sencilla:** borra las versiones que ya no necesites directamente desde la tabla.

Gradle necesita un runtime de [Java](/es/features/java) en el `PATH`; la [guía de configuración del entorno Java](/es/guide/set-up-java-development-environment) explica cómo instalar un JDK con FlyEnv. Descarga la aplicación desde la [página de descargas](/es/download).

<FeatureRelatedLinks locale="es" slug="gradle" />

## Notas de compatibilidad

La página de Gradle solo cubre la gestión de versiones y del PATH; no tiene vinculación de proyectos propia. La vinculación de runtimes por proyecto la proporcionan los módulos de lenguaje; consulta la [guía de entorno de runtime a nivel de proyecto](/es/guide/project-level-runtime-environment). Las fuentes de instalación disponibles varían según el sistema operativo, así que toma el Version Manager de tu instalación de FlyEnv como la lista definitiva.
