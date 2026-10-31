---
layout: doc
titleTemplate: false
title: 'Comandos rápidos: guarda y ejecuta comandos por carpeta | FlyEnv'
description: 'Organiza comandos del terminal en tarjetas de carpetas, arrástralos para cambiar su orden y ejecútalos desde el directorio adecuado con Comandos rápidos de FlyEnv.'
---

# Comandos rápidos en FlyEnv

**Command Shortcuts**, o Comandos rápidos, reúne los comandos de terminal que utilizas a menudo con las carpetas donde los ejecutas. Cada carpeta tiene una tarjeta con su ruta y sus comandos guardados, para que puedas lanzar una tarea del proyecto sin buscar cada vez el directorio ni volver a escribir lo mismo.

Instala **Command Shortcuts** desde **[Settings → Plugin Market](/es/features/plugin-market)** y abre su entrada en la barra lateral. Utiliza el terminal del sistema que ya tienes en macOS, Windows o Linux, sin instalar un runtime de servicio adicional.

![Tarjetas de carpetas de Comandos rápidos con comandos guardados, botones de ejecución y acciones de carpeta](https://oss.macphpstudy.com/image/features/plugin/command-shortcuts-folder-cards.png)

## Demostración en vídeo

Descubre cómo guardar comandos por carpeta de proyecto, ejecutarlos en el terminal del sistema y arrastrar carpetas y comandos para cambiar su orden.

<iframe style="width: 100%; aspect-ratio: 16 / 9;" src="https://www.youtube-nocookie.com/embed/Iz60XAzo7Us?rel=0" title="Guarda comandos por proyecto y ejecútalos con un clic" loading="lazy" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Ver en [YouTube](https://www.youtube.com/watch?v=Iz60XAzo7Us) o [Bilibili](https://www.bilibili.com/video/BV1QKJR6xEGQ/).

## Añadir una carpeta y sus comandos

Pulsa **Add folder**, introduce un nombre y selecciona o escribe la ruta absoluta de una carpeta existente. El icono de la tarjeta utiliza automáticamente el primer carácter del nombre.

Dentro de la tarjeta, pulsa **Add command**. Añade una descripción e introduce el comando; también se admiten comandos de varias líneas. Puedes guardar varias tareas en una tarjeta, como iniciar un servidor de desarrollo, compilar el proyecto y ejecutar pruebas.

Los controles de edición permiten cambiar el nombre o la ruta de la carpeta, así como la descripción y el texto de un comando. Cada comando se ejecuta en la carpeta que esté asociada a su tarjeta en ese momento.

![Diálogo Edit command con la descripción, el texto del comando y la indicación de PowerShell en Windows](https://oss.macphpstudy.com/image/features/plugin/command-shortcuts-edit-command.png)

## Ejecutar en el terminal del sistema

Pulsa **Run in terminal** junto a un comando para abrir el terminal del sistema en la ruta de la carpeta y ejecutarlo. FlyEnv verifica el directorio antes de enviar la tarea; si falla el cambio de directorio, el comando no se ejecuta.

Utiliza la sintaxis del shell correspondiente a tu plataforma:

- **macOS:** Terminal con su shell predeterminado.
- **Windows:** PowerShell.
- **Linux:** Bash en un terminal del sistema disponible y compatible.

Consulta la salida, responde a las solicitudes de entrada y comprueba el estado de salida del comando en la ventana del terminal. La notificación de FlyEnv confirma que la solicitud se ha enviado al terminal; el resultado del propio comando se comprueba allí.

Los comandos solo se ejecutan al pulsar su botón. Los terminales abiertos quedan bajo tu control: salir del módulo o cerrar FlyEnv no los termina.

## Abrir una carpeta sin ejecutar un comando

Pulsa la ruta de carpeta en amarillo para abrir el directorio en el gestor de archivos del sistema. La opción **Open in terminal**, al pie de la tarjeta, abre un terminal en ese directorio sin ejecutar ningún comando guardado. También funciona cuando la tarjeta no contiene comandos.

## Cambiar el orden y mantener la colección

Arrastra el asa situada junto al título de una carpeta para cambiar el orden de las tarjetas. Arrastra el asa de un comando para reordenarlo dentro de su carpeta. Ambos órdenes se guardan automáticamente; arrastrar no mueve comandos entre carpetas.

Eliminar un comando borra su entrada guardada. Eliminar una carpeta requiere confirmación y retira la tarjeta junto con sus comandos, pero conserva los archivos del disco. Las carpetas, los textos de los comandos y su orden se mantienen al actualizar el complemento. El complemento tampoco los borra de forma activa al deshabilitarlo o desinstalarlo.

Utiliza **[Grupos de inicio](/es/features/startup-groups)** para arrancar conjuntos de servicios del espacio de trabajo, o **[Módulos de usuario](/es/features/user-modules)** para comandos que necesiten controles del ciclo de vida de un servicio. Comandos rápidos está pensado para tareas que inicias y utilizas de forma interactiva en el terminal.
