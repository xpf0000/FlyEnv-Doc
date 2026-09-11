---
layout: doc
titleTemplate: false
title: 'Gestor de SDK .NET para desarrollo local | FlyEnv'
description: 'Instala y cambia versiones del SDK de .NET y vincula un runtime a cada proyecto en FlyEnv.'
head:
  - - meta
    - name: description
      content: 'Instala y cambia versiones del SDK de .NET y vincula un runtime a cada proyecto en FlyEnv.'
  - - meta
    - property: og:title
      content: 'Gestor de SDK .NET para desarrollo local | FlyEnv'
  - - meta
    - property: og:description
      content: 'Instala y cambia versiones del SDK de .NET y vincula un runtime a cada proyecto en FlyEnv.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/es/features/dotnet
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/es/features/dotnet
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Desarrollo local con .NET y FlyEnv

.NET es la plataforma de desarrollo de código abierto de Microsoft para crear aplicaciones web, de escritorio, móviles y en la nube, con C# como lenguaje principal. FlyEnv gestiona los SDK de .NET locales en un solo lugar: instala varias versiones del SDK en paralelo, cambia el comando `dotnet` entre ellas y vincula un SDK específico a cada proyecto para que los terminales y editores usen el runtime correcto. El módulo de .NET está organizado en tres pestañas: .NET Projects, Service y Version Manager.

![Módulo .NET de FlyEnv con las pestañas Projects, Service y Version Manager](https://oss.macphpstudy.com/image/features/dotnet-1.webp)

## Gestión de versiones del SDK de .NET

Instala varias versiones del SDK de .NET en paralelo desde **.NET → Version Manager** y cambia entre ellas en cualquier momento.

- **Metadatos de versiones de Microsoft:** a diferencia de otros módulos de lenguaje, la lista Static de .NET se obtiene directamente de los metadatos oficiales de versiones de Microsoft, eligiendo el SDK más reciente de cada canal y generando las URL de descarga para cada plataforma (`win-x64`, `osx-arm64`, `osx-x64`, `linux-arm64`, `linux-x64`).
- **Fuente Homebrew:** en macOS y Linux, .NET también se puede instalar desde la fórmula `dotnet` de Homebrew, para SDK gestionados por ese gestor de paquetes.
- **Detección precisa de versiones:** FlyEnv lee cada instalación con `dotnet --version` y, si es necesario, analiza `dotnet --info`, de modo que la versión mostrada siempre coincide con el SDK del disco.
- **Gestión de la cuarentena de macOS:** tras una instalación Static en macOS, FlyEnv elimina el atributo de cuarentena para que el SDK se ejecute sin avisos de Gatekeeper.

![Version Manager de .NET con la lista de canales de Microsoft](https://oss.macphpstudy.com/image/features/dotnet-2.webp)

## Cambio de versión desde la línea de comandos

La pestaña **Service** es la tabla de versiones instaladas de .NET: a pesar de su nombre, gestiona versiones, entradas del PATH y alias, no procesos en segundo plano en ejecución.

- **Cambio de PATH:** define a qué SDK de .NET resuelve el comando `dotnet` de tu terminal. FlyEnv añade o elimina el directorio de la versión en tu `PATH` e indica si la entrada actual la estableció FlyEnv u otra herramienta; la [guía del entorno PATH del sistema](/es/guide/setup-system-path-environment) explica cómo funciona.
- **Alias y nota por versión:** asigna a cada instalación un alias corto y una nota para que los SDK similares sigan siendo distinguibles en la lista.
- **Versiones personalizadas:** apunta FlyEnv a cualquier directorio que contenga tu propio build del SDK de .NET para mostrarlo junto a las versiones gestionadas.

## Runtimes de .NET a nivel de proyecto

En **.NET → Projects**, registra la carpeta de cada proyecto y vincúlala a su propio SDK de .NET, o mantenla en la versión del sistema. Consulta la [guía de runtime a nivel de proyecto](/es/guide/project-level-runtime-environment) y la funcionalidad [Runtimes por proyecto](/es/features/per-project-runtimes) para ver el flujo completo.

- **Runtime por proyecto:** la elección de versión se guarda en un archivo `.flyenv` dentro del directorio del proyecto, de modo que los terminales y editores lanzados desde FlyEnv usan automáticamente el SDK correcto.
- **Ejecutar como servicio:** marca un proyecto como servicio con un comando de inicio o archivo de ejecución personalizado, un puerto TCP, variables de entorno y una opción sudo; el interruptor de la barra lateral inicia o detiene todos los proyectos .NET habilitados como servicio de una vez.
- **Abrir en VS Code:** salta desde una fila de proyecto directamente a VS Code con el entorno del proyecto cargado.

![Lista de .NET Projects con vinculación de SDK por proyecto](https://oss.macphpstudy.com/image/features/dotnet-3.webp)

<FeatureRelatedLinks locale="es" slug="dotnet" />

## Notas de compatibilidad

Las fuentes de instalación dependen de la plataforma: builds Static en todos los sistemas operativos, más Homebrew en macOS y Linux; Windows usa únicamente la fuente Static (zip). FlyEnv gestiona el runtime local y la configuración del PATH; verifica los requisitos del SDK de tu proyecto frente al build instalado, y toma la [página de descargas](/es/download) y las notas de la versión actual como la referencia de los paquetes soportados.
