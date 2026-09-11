---
layout: doc
titleTemplate: false
title: 'Gestor de JDK de Java y versiones de Maven | FlyEnv'
description: 'Instala JDK desde builds estáticos, Homebrew, MacPorts o SDKMAN, gestiona versiones de Maven y vincula un runtime de Java a cada proyecto.'
head:
  - - meta
    - name: description
      content: 'Instala JDK desde builds estáticos, Homebrew, MacPorts o SDKMAN, gestiona versiones de Maven y vincula un runtime de Java a cada proyecto.'
  - - meta
    - property: og:title
      content: 'Gestor de JDK de Java y versiones de Maven | FlyEnv'
  - - meta
    - property: og:description
      content: 'Instala JDK desde builds estáticos, Homebrew, MacPorts o SDKMAN, gestiona versiones de Maven y vincula un runtime de Java a cada proyecto.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/es/features/java
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/es/features/java
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Desarrollo local con Java y FlyEnv

Java es un lenguaje de programación de propósito general basado en la JVM, muy utilizado en backends empresariales, aplicaciones Android y servicios a gran escala, con Maven como una de sus herramientas de build estándar. FlyEnv gestiona toda la parte Java de tu stack local en una sola aplicación: múltiples versiones del JDK desde varias fuentes de instalación, un gestor de versiones de Maven dedicado, cambio de versión a nivel de terminal y vinculación de un runtime de Java por proyecto. El módulo de Java está organizado en cuatro pestañas: Java Projects, Service, Version Manager y Maven.

![Vista general del módulo Java de FlyEnv](https://oss.macphpstudy.com/image/features/java-1.webp)

## Gestión de versiones del JDK

Instala varios JDK en paralelo desde **Java → Version Manager** y cambia entre ellos en cualquier momento.

- **Múltiples fuentes de instalación:** en macOS, elige entre builds JDK `.tar.gz` estáticos, Homebrew (fórmulas `jdk` / `openjdk`), ports JDK de MacPorts y SDKMAN; en Linux están disponibles los builds estáticos, Homebrew y SDKMAN; en Windows, los JDK se instalan desde la lista en línea Static como archivos zip. La cabecera del gestor enlaza directamente a la página de descargas de Microsoft OpenJDK.
- **Detección automática:** en macOS, FlyEnv analiza `/Library/Java/JavaVirtualMachines` y `~/.sdkman/candidates/java`, de modo que los JDK que ya instalaste a través del sistema o de SDKMAN aparecen en la lista sin configuración manual.
- **Versiones personalizadas:** apunta FlyEnv a cualquier directorio que contenga tu propio build del JDK para mostrarlo junto a las versiones gestionadas.
- **Alias y nota por versión:** asigna a cada instalación un alias corto y una nota para que los builds similares sigan siendo distinguibles en la lista.

![Version Manager de Java con las fuentes de instalación](https://oss.macphpstudy.com/image/features/java-2.webp)

![Instalaciones de JDK detectadas en los directorios del sistema y de SDKMAN](https://oss.macphpstudy.com/image/features/java-3.webp)

## Versiones de Maven

La pestaña **Maven** dentro del módulo de Java es un gestor de versiones completo por sí misma, para que tu herramienta de build esté versionada junto a tus JDK.

- Instala y mantén varias versiones de Maven en paralelo.
- Las instalaciones de Maven están disponibles desde Homebrew, MacPorts, builds estáticos y SDKMAN, según tu plataforma.
- Añade tus propias instalaciones de Maven desde directorios personalizados.
- Los equipos estandarizados en Gradle obtienen la misma gestión de versiones multifuente desde el [módulo Gradle](/es/features/gradle) dedicado.

![Gestor de versiones de Maven dentro del módulo Java](https://oss.macphpstudy.com/image/features/java-4.webp)

## Cambio de versión desde la línea de comandos

La pestaña **Service** enumera todos los JDK instalados. En el caso de Java, gestiona las versiones y el entorno de tu terminal: no es una tabla de servicios en segundo plano en ejecución, porque el JDK en sí no ejecuta ningún daemon.

- **Definir la versión del terminal:** elige a qué JDK resuelven los comandos `java` y `javac`. FlyEnv añade o elimina el directorio bin de la versión en tu `PATH` e indica si la entrada actual la estableció FlyEnv u otra herramienta.
- **Alias de comando y notas:** define un alias corto por versión y adjunta notas para que los builds similares sigan siendo distinguibles.
- **Directorios de búsqueda personalizados:** amplía dónde busca FlyEnv las instalaciones de JDK existentes.

## Runtimes de Java a nivel de proyecto

Los proyectos distintos suelen necesitar JDK distintos. En **Java → Java Projects**, registra la carpeta de cada proyecto y vincúlala a su propia versión de Java.

- **Runtime por proyecto:** el JDK vinculado se guarda en un archivo `.flyenv` dentro del directorio del proyecto, de modo que los terminales y editores lanzados desde FlyEnv usan automáticamente el Java correcto.
- **Ejecutar como servicio:** inicia el proyecto con un comando o archivo de ejecución personalizado directamente desde FlyEnv, con un puerto de proyecto configurable, sudo opcional, una opción de ejecución en terminal y variables de entorno proporcionadas en línea o desde un archivo env.
- **Configuración y logs del proyecto:** registra tus propios archivos de configuración y de log por proyecto y consúltalos con los visores integrados.
- **Abrir en el IDE:** salta desde una fila de proyecto directamente a IntelliJ IDEA con el entorno del proyecto cargado.

La [guía del entorno de desarrollo Java](/es/guide/set-up-java-development-environment) recorre una configuración completa, y la [solución Spring Boot](/es/solutions/spring-boot) muestra cómo un JDK a nivel de proyecto encaja en un stack de framework completo. Para despliegues en contenedores de servlets, el [módulo Tomcat](/es/features/tomcat) ejecuta aplicaciones de estilo WAR contra los JDK gestionados aquí, y la [solución Metabase](/es/solutions/metabase) es un ejemplo de un stack de aplicación Java listo para usar.

![Lista de proyectos Java con vinculación de JDK por proyecto](https://oss.macphpstudy.com/image/features/java-5.webp)

<FeatureRelatedLinks locale="es" slug="java" />

## Notas de compatibilidad

FlyEnv gestiona las versiones locales de JDK y Maven y la configuración del entorno que las rodea; no garantiza que cada distribución de JDK, versión de Maven o herramienta de terceros esté disponible en todos los sistemas operativos. Las fuentes de instalación disponibles difieren entre macOS, Linux y Windows, y los JDK gestionados por SDKMAN dependen de tu propia instalación de SDKMAN. Verifica los requisitos de tu proyecto frente al JDK instalado, y toma la [página de descargas](/es/download) y las notas de la versión actual como la referencia de los paquetes soportados.
