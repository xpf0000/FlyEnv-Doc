---
layout: doc
titleTemplate: false
title: 'Módulos personalizados: define tus propios servicios | FlyEnv'
description: 'Convierte cualquier comando o script en un módulo gestionado de FlyEnv con su propia entrada en la barra lateral y visores de configuración y logs.'
head:
  - - meta
    - name: description
      content: 'Convierte cualquier comando o script en un módulo gestionado de FlyEnv con su propia entrada en la barra lateral y visores de configuración y logs.'
  - - meta
    - property: og:title
      content: 'Módulos personalizados: define tus propios servicios | FlyEnv'
  - - meta
    - property: og:description
      content: 'Convierte cualquier comando o script en un módulo gestionado de FlyEnv con su propia entrada en la barra lateral y visores de configuración y logs.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/es/features/user-modules
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/es/features/user-modules
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Módulos personalizados en FlyEnv

FlyEnv incluye muchos módulos integrados, pero no puede cubrir todas las herramientas que un desarrollador podría ejecutar en local. Un módulo personalizado cierra esa brecha: describes tu propio servicio una sola vez y FlyEnv le da una entrada en la barra lateral, una página de servicio con controles de inicio/parada/reinicio y pestañas para sus archivos de configuración y de log — la misma experiencia de trabajo que con un módulo integrado.

![Un módulo personalizado definido por el usuario con su propia entrada en la barra lateral de FlyEnv](https://oss.macphpstudy.com/image/features/user-modules-1.webp)

## Crear un módulo

Los módulos personalizados se definen en **Settings → Modules**. Cada módulo que creas se convierte en una entrada de primera clase en la barra lateral de FlyEnv, con su propia página.

- **Identidad:** asigna al módulo una etiqueta y un icono para que sea fácil de reconocer en la barra lateral.
- **Interruptor de servicio:** decide si el módulo ejecuta servicios gestionados. Al activarlo, FlyEnv añade controles de ciclo de vida y rastrea el proceso de cada elemento.
- **Modo de instancia única:** marca el módulo para que solo uno de sus elementos se ejecute a la vez — útil para herramientas que ocupan un puerto fijo. Al iniciar un elemento, los demás se detienen automáticamente primero, y FlyEnv recuerda cuál iniciaste por última vez.
- **Listas de archivos de configuración y de log:** declara de antemano los archivos de configuración y de log del módulo; cada uno se convierte en una pestaña de la página del módulo.

Ocultar un módulo personalizado de la barra lateral detiene sus servicios en ejecución, de modo que un módulo oculto nunca deja procesos sueltos. La [guía de módulos personalizados](/es/guide/user-customizable-modules) recorre un ejemplo completo basado en [etcd](/es/features/etcd).

![Definición de un módulo personalizado en Settings → Modules](https://oss.macphpstudy.com/image/features/user-modules-2.webp)

## Elementos de ejecución

Un módulo contiene uno o varios elementos de ejecución — los comandos individuales que componen el servicio, como distintas versiones o configuraciones de la misma herramienta. La pestaña Service los lista con botones de inicio, parada y reinicio.

Cada elemento define:

- **Comando o archivo:** una línea de comandos de shell escrita directamente, o un archivo de script elegido del disco que FlyEnv ejecuta.
- **Nombre y comentario:** para mantener distinguibles los elementos similares en la lista.
- **Ejecutar con sudo:** para comandos que necesitan privilegios elevados, FlyEnv solicita la contraseña, con la alternativa "open in Terminal" cuando se requiere una elevación interactiva.
- **Ruta del archivo PID:** el archivo pid permite a FlyEnv saber si el elemento está en ejecución y detenerlo limpiamente — en Unix, la parada envía SIGTERM seguido de SIGINT al pid registrado.
- **Archivos de configuración y de log por elemento:** cada elemento puede adjuntar sus propios archivos de configuración y de log, que se abren desde el menú emergente de operaciones del elemento.

Los elementos se ejecutan normalmente en segundo plano, sin interfaz; cuando un proceso necesita una sesión visible, FlyEnv puede lanzarlo en una ventana de terminal real (Terminal.app en macOS, un script de terminal en Linux) — la misma [integración de terminal](/es/features/cli-terminal) que usa el resto de la aplicación.

![Adición de un elemento de ejecución con ajustes de comando, sudo y archivo pid](https://oss.macphpstudy.com/image/features/user-modules-3.webp)

## Pestañas de configuración y de log

La página del módulo se construye dinámicamente a partir de lo que declaraste: una pestaña **Service** con la lista de elementos, más una pestaña por cada archivo de configuración declarado y una por cada archivo de log.

- **Pestañas de configuración:** abre cada archivo declarado en un editor sin formato dentro de FlyEnv, para que ajustes la configuración del servicio sin tener que buscar el archivo en el disco.
- **Pestañas de log:** observa cada archivo de log declarado directamente en la aplicación.
- **Captura de salida integrada:** para cada elemento iniciado, FlyEnv registra automáticamente su salida estándar y su error estándar en `<BaseDir>/module-customer/<id>.out.log` y `.error.log`, de modo que siempre haya un log que inspeccionar aunque no declares ninguno.

![Pestañas de configuración y de log en la página de un módulo personalizado](https://oss.macphpstudy.com/image/features/user-modules-4.webp)

<FeatureRelatedLinks locale="es" slug="user-modules" />

## Notas de compatibilidad

Los módulos personalizados envuelven comandos y scripts que tú proporcionas; FlyEnv no instala ni versiona la herramienta subyacente — no hay gestor de versiones, ni fuente de descarga en línea, ni interfaz web de administración para un módulo personalizado, así que el binario debe existir ya en tu máquina y ser resoluble en tu [PATH del sistema](/es/guide/setup-system-path-environment) o referenciarse por ruta absoluta. El estado preciso del servicio depende del archivo pid que configures, así que el comando debe escribir realmente su pid en esa ruta. El lanzamiento en terminal difiere según la plataforma (AppleScript en macOS, un script de shell en Linux), y el comportamiento con privilegios elevados sigue las reglas del sistema operativo anfitrión. Los módulos personalizados están disponibles en todas las plataformas en las que FlyEnv se ejecuta — consulta la [página de descarga](/es/download) para ver los sistemas operativos compatibles — y considera lo que tu propio comando o script admite como el límite real de lo que el módulo puede hacer.
