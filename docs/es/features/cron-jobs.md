---
layout: doc
titleTemplate: false
title: 'Tareas Cron con integración del programador del sistema | FlyEnv'
description: 'Programa comandos con los planificadores reales del sistema operativo (crontab / Programador de tareas), historial de ejecuciones y una vista general de las tareas del sistema.'
head:
  - - meta
    - name: description
      content: 'Programa comandos con los planificadores reales del sistema operativo (crontab / Programador de tareas), historial de ejecuciones y una vista general de las tareas del sistema.'
  - - meta
    - property: og:title
      content: 'Tareas Cron con integración del programador del sistema | FlyEnv'
  - - meta
    - property: og:description
      content: 'Programa comandos con los planificadores reales del sistema operativo (crontab / Programador de tareas), historial de ejecuciones y una vista general de las tareas del sistema.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/es/features/cron-jobs
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/es/features/cron-jobs
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Tareas Cron en FlyEnv

El módulo **Cron Jobs** (Tareas Cron) de FlyEnv convierte el planificador propio del sistema operativo en una herramienta visual: defines un nombre, una expresión cron de cinco campos, un comando de shell y un directorio de trabajo, y FlyEnv instala la tarea en el `crontab` de tu usuario en macOS/Linux o en el Programador de tareas en Windows. Cada ejecución se envuelve en un script generado que registra la salida, el código de salida y la duración, de modo que cada tarea mantiene un historial de ejecuciones navegable sin configuración adicional. El módulo aparece en la barra lateral como una entrada de tipo consola; si acabas de instalar FlyEnv, la [guía de primeros pasos](/es/guide/getting-started) muestra cómo se abren los módulos desde la barra lateral.

![Pestaña Cron Jobs de FlyEnv con la lista de tareas programadas, sus expresiones y comandos](https://oss.macphpstudy.com/image/features/cron-jobs-1.webp)

## Crear tareas

Haz clic en **Add** (Añadir) en la pestaña Cron Jobs para abrir el editor de tareas.

- **Nombre e interruptor de activación:** cada tarea tiene un nombre visible y puede activarse o desactivarse sin eliminarla.
- **Expresión con validación en vivo:** la expresión cron de cinco campos se comprueba mientras escribes, con una vista previa del significado de la programación, etiquetas de preajustes rápidos y un selector auxiliar de horarios para que no tengas que memorizar el orden de los campos.
- **Preajustes de comandos:** el área de texto del comando ofrece puntos de partida listos para los stacks más comunes — `php artisan schedule:run` (el clásico punto de entrada del planificador de [Laravel](/es/solutions/laravel); consulta [ejecutar Laravel con FlyEnv](/es/guide/run-laravel-use-flyenv) para la configuración completa), node, python y bash — que luego adaptas a tu proyecto.
- **Directorio de trabajo y alcance:** una tarea puede ser global o estar vinculada a un sitio concreto; en las tareas con alcance de sitio, el directorio de trabajo se rellena automáticamente desde la raíz de ese sitio en tu lista de [sitios locales](/es/features/local-sites-https).
- **Ejecución de prueba antes de programar:** un botón de prueba dentro del editor ejecuta el comando inmediatamente en su directorio de trabajo y muestra la salida capturada, el código de salida y la duración, de modo que los errores de comillas o rutas aparecen antes de que la tarea llegue al planificador.

![Editor de tareas cron con validación de expresiones, etiquetas de preajustes y área de texto del comando](https://oss.macphpstudy.com/image/features/cron-jobs-2.webp)

## Integración con el planificador del sistema operativo

FlyEnv no ejecuta su propio daemon en segundo plano: las tareas se instalan en el planificador que el sistema operativo ya proporciona, lo que significa que siguen ejecutándose incluso cuando FlyEnv está cerrado.

- **macOS y Linux:** la tarea se escribe en el crontab de tu usuario dentro de un bloque marcador `# FlyEnv Cron Start/End <id>`, de modo que las entradas de FlyEnv se distinguen fácilmente de cualquier cosa que hayas añadido a mano.
- **Windows:** cada tarea se convierte en una entrada del Programador de tareas llamada `FlyEnv-Cron-<id>` que invoca un envoltorio de PowerShell codificado en base64.
- **Scripts envoltorio generados:** en lugar de llamar directamente a tu comando, la entrada del planificador ejecuta un envoltorio que captura stdout, stderr, el código de salida y la duración en registros JSON Lines, y mantiene un archivo de bloqueo para que una ejecución lenta nunca se solape con la siguiente.

## Historial de ejecuciones y ejecución inmediata

Cada ejecución deja un registro, tanto si se lanzó según lo programado como si se inició manualmente.

- **Historial por tarea:** cada tarea conserva hasta sus 50 ejecuciones más recientes, visibles desde la fila de la tarea con la salida capturada, el código de salida y cuánto tardó la ejecución.
- **Run now (Ejecutar ahora):** un disparador manual en cada fila ejecuta la tarea inmediatamente a través del mismo envoltorio, la forma más rápida de confirmar que una programación se comporta bien antes de esperar al siguiente ciclo.
- **Visibilidad de los fallos:** como el envoltorio registra el código de salida y stderr, un comando que falla aparece en el historial de ejecuciones en lugar de perderse en un registro del sistema que nunca revisas.

![Historial de ejecuciones de una tarea cron con salida, código de salida y duración por ejecución](https://oss.macphpstudy.com/image/features/cron-jobs-3.webp)

## Pestaña System Tasks

La segunda pestaña, **System Tasks** (Tareas del sistema), es una ventana de solo lectura al planificador real del sistema operativo.

- Muestra las entradas reales presentes en tu máquina: líneas del crontab de usuario en macOS/Linux, tareas registradas en Windows.
- Las entradas creadas por FlyEnv se etiquetan como propiedad de FlyEnv, así puedes ver de un vistazo qué tareas pertenecen al módulo y cuáles provienen de otro software.
- Las entradas propiedad de FlyEnv pueden eliminarse directamente desde esta pestaña, dándote control de limpieza sin abrir `crontab -e` ni la consola del Programador de tareas de Windows.

![Pestaña System Tasks con las entradas reales del planificador del sistema y las tareas de FlyEnv etiquetadas](https://oss.macphpstudy.com/image/features/cron-jobs-4.webp)

<FeatureRelatedLinks locale="es" slug="cron-jobs" />

## Notas de compatibilidad

El módulo edita el planificador del usuario actual del sistema operativo: el crontab de usuario en macOS y Linux, y el Programador de tareas en Windows. Por tanto, las tareas se ejecutan bajo tu cuenta de usuario con sus permisos, y el soporte de expresiones sigue el formato cron clásico de cinco campos: no hay campo de segundos ni extensiones estilo `@reboot`. Las definiciones de las tareas se almacenan en el propio `cron-jobs.json` de FlyEnv; el historial de ejecuciones tiene un límite de 50 entradas por tarea. Las plataformas para las que se publica cada versión de FlyEnv se indican en la [página de descarga](/es/download).
