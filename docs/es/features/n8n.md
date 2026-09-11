---
layout: doc
titleTemplate: false
title: 'Automatización de flujos de trabajo n8n en FlyEnv'
description: 'Ejecuta y gestiona un servidor de automatización n8n localmente en FlyEnv.'
head:
  - - meta
    - name: description
      content: 'Ejecuta y gestiona un servidor de automatización n8n localmente en FlyEnv.'
  - - meta
    - property: og:title
      content: 'Automatización de flujos de trabajo n8n en FlyEnv'
  - - meta
    - property: og:description
      content: 'Ejecuta y gestiona un servidor de automatización n8n localmente en FlyEnv.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/es/features/n8n
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/es/features/n8n
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# n8n en FlyEnv

n8n es una herramienta de automatización de flujos de trabajo de código abierto con un editor visual basado en nodos para conectar API, bases de datos y servicios. Los equipos lo autoalojan para crear integraciones y automatizaciones — desde sincronizaciones de datos hasta pipelines de IA — sin una plataforma de automatización alojada. FlyEnv ejecuta n8n como un servidor de automatización local gestionado: elige una versión del registro npm e instálala en el terminal integrado, lanza `n8n start` con una configuración de entorno visual y administra cuentas en la pestaña Usuarios sin abrir una herramienta de bases de datos. El servidor escucha en el puerto 5678 por defecto, y FlyEnv incluso puede reconocer una instancia de n8n que hayas iniciado fuera de la aplicación a través de su endpoint de salud.

![Vista general del módulo n8n de FlyEnv con los controles del servicio](https://oss.macphpstudy.com/image/features/n8n-1.webp)

## Gestión de versiones

A diferencia de los módulos que ofrecen descargas binarias, la pestaña **n8n → Gestor de versiones** funciona a través del registro de paquetes, por lo que una instalación funcional de [Node.js](/es/features/nodejs) con npm es un requisito previo.

- **Lista de versiones desde el registro:** FlyEnv obtiene las últimas 20 versiones estables de n8n directamente de `registry.npmjs.org`, de modo que las versiones ofrecidas siempre siguen lo que publica el proyecto original.
- **Instalación en el terminal integrado:** instalar una versión ejecuta `npm install -g n8n@<version>` dentro del terminal integrado de FlyEnv, donde ves la salida real de npm en lugar de una barra de progreso.
- **Detección amplia de instalaciones:** FlyEnv también reconoce n8n instalado por otras herramientas — escanea las ubicaciones habituales de npm-global (`/usr/local/bin`, `/opt/homebrew/bin`, `~/.nvm`, `~/.volta` y `%APPDATA%\npm` en Windows) además de tu `PATH`.

![Gestor de versiones de n8n listando versiones del registro npm](https://oss.macphpstudy.com/image/features/n8n-2.webp)

## Servicio y configuración

Al iniciar el servicio se lanza `n8n start` con cada variable de entorno leída del propio archivo `n8n.env` de FlyEnv, de modo que el comportamiento del runtime es totalmente reproducible desde un archivo que tú controlas.

- **Formulario visual para las claves comunes:** ajusta `N8N_PORT`, `N8N_HOST`, `N8N_PROTOCOL` y `N8N_PATH`, elige `DB_TYPE`, define `N8N_USER_FOLDER` y `N8N_ENCRYPTION_KEY`, configura la `WEBHOOK_URL`, ajusta el nivel y la salida del registro, cambia `EXECUTIONS_PROCESS`/`EXECUTIONS_MODE` y activa o desactiva `N8N_METRICS` — todo sin editar el archivo a mano.
- **Editor sin procesar:** una vista de código fuente completa de `n8n.env` cubre cualquier variable que el formulario no exponga.
- **Configuración automática del propietario:** cuando `N8N_OWNER_EMAIL` y `N8N_OWNER_PASSWORD` están definidos y aún no existe ninguna base de datos, FlyEnv completa el registro inicial del propietario por ti justo después de que el servidor arranque.
- **Vía de escape para restablecer al propietario:** una acción de la zona de peligro elimina `database.sqlite` cuando deliberadamente quieres empezar de cero.
- **Ciclo de vida gestionado:** los interruptores de la barra lateral y de la bandeja del sistema inician y detienen el servidor, el estado en ejecución se confirma contra el endpoint `/healthz` y, en Windows, FlyEnv termina el proceso de forma fiable mediante el archivo pid, el listener del puerto y la coincidencia del comando.

![Editor visual de las variables de entorno de n8n.env](https://oss.macphpstudy.com/image/features/n8n-3.webp)

## Gestión de usuarios

La pestaña **Usuarios** se comunica directamente con el `database.sqlite` de n8n, por lo que la administración de cuentas funciona incluso con el servidor detenido.

- **Localiza los datos:** elige tú mismo el directorio de datos de n8n, o deja que FlyEnv escanee automáticamente las ubicaciones candidatas donde n8n guarda su base de datos SQLite.
- **Control total de las cuentas:** lista, crea y elimina usuarios, cambia el rol de un usuario, desactiva una cuenta y restablece contraseñas — incluida la contraseña del propietario.
- **Hash de contraseñas correcto:** las contraseñas se escriben con bcrypt, exactamente como las almacena el propio n8n, de modo que las cuentas que corrijas sin conexión funcionarán la próxima vez que arranque el servidor.

![Pestaña Usuarios de n8n listando cuentas de la base de datos SQLite](https://oss.macphpstudy.com/image/features/n8n-4.webp)

## Panel

Cuando el servicio está en ejecución, el botón de panel de la pestaña Servicio abre el editor de n8n en tu navegador en la dirección construida a partir de tu configuración — el protocolo, el host, el puerto y la ruta se leen de `n8n.env`, de modo que un `N8N_PATH` personalizado o un puerto no predeterminado se reflejan en el enlace automáticamente. Desde ahí construyes flujos de trabajo contra tu stack local — los nodos SMTP pueden apuntar a [Mailpit](/es/features/mailpit) para que los flujos de notificación nunca envíen correo real durante las pruebas; la [guía de flujos de trabajo de IA locales](/es/guide/build-local-ai-workflow-by-n8n) muestra n8n trabajando junto con modelos servidos por el [módulo Ollama](/es/features/ollama).

![Editor de n8n abierto desde FlyEnv](https://oss.macphpstudy.com/image/features/n8n-5.webp)

## Registros

Cada versión instalada tiene sus propios registros de arranque — `n8n-<version>-start-out.log` y `n8n-<version>-start-error.log` — visibles desde la pestaña Registro dentro de FlyEnv. Cuando una versión se niega a arrancar o la comprobación de salud nunca pasa, estos dos archivos son el primer lugar donde mirar.

<FeatureRelatedLinks locale="es" slug="n8n" />

## Notas de compatibilidad

FlyEnv gestiona el proceso local de n8n, su archivo de entorno y su base de datos de usuarios; no incluye n8n en sí. Instalar o actualizar una versión requiere Node.js y npm en la máquina y accede al registro público de npm, y el comportamiento de los flujos de trabajo de una versión concreta de n8n se rige por los requisitos del propio n8n. FlyEnv tampoco controla las instancias de n8n que no haya iniciado — detecta un servidor iniciado externamente por su endpoint de salud y lo muestra como en ejecución, pero las acciones de ciclo de vida se aplican a la instalación que gestiona FlyEnv. Para saber qué incluye la aplicación en tu plataforma, consulta la [página de Descargas](/es/download).
