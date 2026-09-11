---
layout: doc
titleTemplate: false
title: 'Gestor de versiones de Python y runtimes de proyecto | FlyEnv'
description: 'Instala y cambia versiones de Python, vincula un runtime a cada proyecto y genera proyectos de FastAPI o Django en FlyEnv.'
head:
  - - meta
    - name: description
      content: 'Instala y cambia versiones de Python, vincula un runtime a cada proyecto y genera proyectos de FastAPI o Django en FlyEnv.'
  - - meta
    - property: og:title
      content: 'Gestor de versiones de Python y runtimes de proyecto | FlyEnv'
  - - meta
    - property: og:description
      content: 'Instala y cambia versiones de Python, vincula un runtime a cada proyecto y genera proyectos de FastAPI o Django en FlyEnv.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/es/features/python
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/es/features/python
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Desarrollo local con Python y FlyEnv

Python es un lenguaje de programación de propósito general que se usa para backends web, scripting, análisis de datos, automatización y machine learning. El módulo de Python de FlyEnv combina la gestión de versiones con un flujo de trabajo de runtime por proyecto: instala los intérpretes que necesitas, decide a cuál resuelve tu terminal y vincula un Python concreto a cada proyecto. Cuando una app debe seguir ejecutándose, FlyEnv puede correrla como un servicio de proyecto gestionado, con su propio puerto y variables de entorno, y las plantillas integradas generan la estructura de los frameworks de Python más comunes en un solo paso.

![Vista general del módulo Python de FlyEnv con las pestañas de proyectos, servicio y gestor de versiones](https://oss.macphpstudy.com/image/features/python-1.webp)

## Gestión de versiones de Python

Instala y gestiona varias versiones de Python en paralelo desde **Python → Version Manager**. FlyEnv detecta intérpretes de varias fuentes, de modo que las versiones que ya tienes aparecen junto a las que él gestiona.

- **macOS:** instala Python directamente desde el Version Manager mediante Homebrew o MacPorts; FlyEnv también escanea automáticamente el directorio de frameworks de MacPorts (`/opt/local/Library/Frameworks/Python.framework/Versions`) en busca de intérpretes ya instalados allí.
- **Linux:** instala Python mediante Homebrew.
- **Windows:** FlyEnv descarga los paquetes instaladores oficiales de Python desde su lista en línea, los extrae e instala en el directorio de la app y prepara pip automáticamente, de modo que una instalación nueva queda lista para usar.
- **Directorios personalizados:** apunta FlyEnv a cualquier directorio que contenga tu propia compilación de Python para mostrarla junto a las versiones gestionadas.

![Version Manager de Python con las versiones instaladas y disponibles](https://oss.macphpstudy.com/image/features/python-2.webp)

## Cambio de versión en la línea de comandos

La pestaña **Service** controla a qué versión de Python resuelven los comandos de tu terminal. A pesar del nombre, esta pestaña trata sobre gestión de versiones y del PATH, no sobre procesos de servicio de larga duración: el módulo de Python en sí no ejecuta ningún servicio en segundo plano.

- **Cambio de PATH:** selecciona la versión cuyo directorio bin coloca FlyEnv en tu `PATH`, de modo que `python` y `pip` resuelvan a ella en los terminales nuevos.
- **Alias y nota:** asigna a cada instalación un alias corto y una nota, para que las compilaciones similares sigan siendo distinguibles en la lista de versiones.

![Pestaña Service de Python gestionando versiones y entradas del PATH](https://oss.macphpstudy.com/image/features/python-3.webp)

## Runtimes de Python a nivel de proyecto

Proyectos distintos suelen necesitar versiones de Python distintas. En **Python → Projects**, registra cada carpeta de proyecto y vincúlala a su propio intérprete.

- **Runtime por proyecto:** el Python seleccionado se guarda en un archivo `.flyenv` dentro del directorio del proyecto, de modo que los terminales y editores lanzados desde FlyEnv cargan el entorno correcto automáticamente. La [guía del entorno de runtime a nivel de proyecto](/es/guide/project-level-runtime-environment) explica cómo funciona la integración con el shell.
- **Ejecutar como servicio:** activa **Run as service** en el editor del proyecto cuando la app deba seguir ejecutándose. Configura el comando de inicio, un puerto TCP y las variables de entorno directamente o mediante un archivo env; FlyEnv muestra los controles de inicio y detención en la lista de proyectos junto a los logs de salida de la app.
- **Abrir en herramientas:** salta desde la fila de un proyecto a un terminal o a un IDE con el entorno del proyecto cargado, incluida la opción **Open in PyCharm**.

Para un recorrido completo del modelo de servicio de proyecto en Python, Node.js y Go, consulta [Desplegar Node.js, Python y Go sin Docker](/es/guide/deploy-nodejs-python-go-without-docker).

![Lista de proyectos Python con vinculación de intérprete por proyecto](https://oss.macphpstudy.com/image/features/python-4.webp)

## Plantillas de proyectos nuevos

**Python → New Project** genera la estructura de las aplicaciones Python más comunes sin salir de la app. FlyEnv ejecuta el comando de creación del framework en su terminal integrado con los comandos de pip o uv correspondientes a cada SO, de modo que ves la salida real mientras se crea el proyecto.

Plantillas soportadas: [FastAPI](/es/solutions/fastapi), [Django](/es/solutions/django), Flask, Streamlit, Masonite, uv, Wagtail, Sanic, Litestar, Mezzanine y PDM. Las páginas de soluciones enlazadas muestran cada framework funcionando como un stack local completo, con una base de datos y un sitio accesible desde el navegador.

![Diálogo de nuevo proyecto Python con selección de plantilla de framework](https://oss.macphpstudy.com/image/features/python-5.webp)

<FeatureRelatedLinks locale="es" slug="python" />

## Notas de compatibilidad

FlyEnv gestiona la selección del runtime local de Python y el punto de entrada del proceso del proyecto; no garantiza que cada versión de Python, plantilla de framework o paquete de terceros esté disponible en todos los sistemas operativos. La instalación de paquetes y la gestión de dependencias siguen siendo responsabilidad del proyecto. Verifica los requisitos de tu proyecto contra el intérprete instalado y toma la [página de descargas](/es/download) y las notas de la versión actual como referencia de los paquetes soportados.
