---
layout: doc
titleTemplate: false
title: 'Gestor de gateway de IA local CLIProxyAPI | FlyEnv'
description: 'Ejecuta versiones de CLIProxyAPI como un gateway de IA local con config.yaml gestionado, backends env y una interfaz de administración.'
head:
  - - meta
    - name: description
      content: 'Ejecuta versiones de CLIProxyAPI como un gateway de IA local con config.yaml gestionado, backends env y una interfaz de administración.'
  - - meta
    - property: og:title
      content: 'Gestor de gateway de IA local CLIProxyAPI | FlyEnv'
  - - meta
    - property: og:description
      content: 'Ejecuta versiones de CLIProxyAPI como un gateway de IA local con config.yaml gestionado, backends env y una interfaz de administración.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/es/features/cliproxyapi
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/es/features/cliproxyapi
  - - link
    - rel: alternate
      hreflang: en
      href: https://flyenv.com/features/cliproxyapi
  - - link
    - rel: alternate
      hreflang: zh-CN
      href: https://flyenv.com/zh/features/cliproxyapi
  - - link
    - rel: alternate
      hreflang: id-ID
      href: https://flyenv.com/id/features/cliproxyapi
  - - link
    - rel: alternate
      hreflang: es-ES
      href: https://flyenv.com/es/features/cliproxyapi
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://flyenv.com/features/cliproxyapi
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# CLIProxyAPI en FlyEnv

CLIProxyAPI es un proxy local de código abierto que coloca herramientas de IA basadas en CLI —como Gemini CLI, [Claude Code](/es/features/claude-code) y [Codex](/es/features/codex), que FlyEnv también gestiona— detrás de endpoints de API estándar compatibles con OpenAI, Gemini y Claude. Permite que las aplicaciones que esperan una API de modelo alojada llamen a estas cuentas CLI como si fueran servicios HTTP normales, con varios proveedores unificados tras un único gateway local. FlyEnv ejecuta CLIProxyAPI como un gateway de IA local gestionado: instala versiones desde el Version Manager, inicia el proceso `cli-proxy-api` desde la barra lateral o la página del módulo, edita `config.yaml` y el archivo de entorno de los backends dentro de la aplicación, y abre el panel de administración integrado en tu navegador. La salida del arranque se captura en archivos de log por versión, de modo que un arranque fallido es fácil de diagnosticar.

![Vista general del módulo CLIProxyAPI en FlyEnv](https://oss.macphpstudy.com/image/features/cliproxyapi-1.webp)

## Gestión de versiones

Instala y mantén varias versiones de CLIProxyAPI en paralelo desde **CLIProxyAPI → Version Manager**, y luego elige cuál ejecutará el servicio.

- **Descargas estáticas:** una lista en línea de paquetes `.zip` y `.tgz` vinculados a las releases de GitHub del proyecto, obtenidos para tu plataforma y arquitectura.
- **Homebrew:** la fórmula `cliproxyapi` aparece como fuente de instalación en sistemas con Homebrew; MacPorts no se ofrece para este módulo.
- **Directorios personalizados:** añade cualquier carpeta que contenga tu propio binario `cli-proxy-api` o `cliproxyapi` y FlyEnv lo mostrará junto a las versiones gestionadas.
- **Gestión de la cuarentena en macOS:** tras una instalación estática, FlyEnv elimina el atributo de cuarentena del binario para que arranque sin avisos de Gatekeeper.

![Version Manager de CLIProxyAPI con fuentes estáticas y de Homebrew](https://oss.macphpstudy.com/image/features/cliproxyapi-2.webp)

## Servicio y configuración

La pestaña Service lanza la versión seleccionada como `cli-proxy-api -config <config.yaml>`, apuntando al `config.yaml` dentro del directorio CLIProxyAPI de FlyEnv, con las variables de entorno cargadas desde `cliproxyapi.env`. Solo una versión se ejecuta a la vez; su ID de proceso se registra en un archivo pid dentro del mismo directorio, y el interruptor de la barra lateral —también disponible en la bandeja del sistema— lo inicia y lo detiene.

- **Pestaña Config File:** un editor sin formato para `config.yaml`. Las instalaciones nuevas se crean a partir de una plantilla incluida, de modo que el archivo existe con valores predeterminados funcionales antes de que cambies nada.
- **Pestaña Env:** un editor sin formato para `cliproxyapi.env`, que contiene las variables de backend que CLIProxyAPI lee al arrancar: `GITSTORE_*` para un almacenamiento basado en git, `PGSTORE_*` para PostgreSQL, `OBJECTSTORE_*` para almacenamiento de objetos, además de `MANAGEMENT_PASSWORD` para el panel de administración.

![Editando el config.yaml de CLIProxyAPI en FlyEnv](https://oss.macphpstudy.com/image/features/cliproxyapi-3.webp)

## Interfaz de administración en el puerto 8317

Mientras el servicio está en ejecución, la pestaña Service muestra un botón que abre el panel de administración integrado de CLIProxyAPI en tu navegador en `http://127.0.0.1:<port>/management.html`. FlyEnv lee el puerto desde `config.yaml`; con la plantilla predeterminada es 8317. Define `MANAGEMENT_PASSWORD` en la pestaña Env antes de exponer el panel a algo más que el uso local.

![Abriendo el panel de administración de CLIProxyAPI desde la pestaña Service](https://oss.macphpstudy.com/image/features/cliproxyapi-4.webp)

## Logs

La pestaña Log muestra la salida capturada de cada versión como `cliproxyapi-<version>-start-out.log` y `cliproxyapi-<version>-start-error.log`, con un conmutador entre ambos flujos. Cuando una versión se niega a arrancar o la página de administración no responde, el log de errores es el primer lugar donde mirar.

![Visor de logs de arranque de CLIProxyAPI con conmutador de salida y errores](https://oss.macphpstudy.com/image/features/cliproxyapi-5.webp)

<FeatureRelatedLinks locale="es" slug="cliproxyapi" />

## Notas de compatibilidad

FlyEnv gestiona el binario CLIProxyAPI, su comando de arranque y los archivos de su directorio de módulo; el comportamiento del gateway —reglas de enrutamiento, proveedores admitidos y compatibilidad de modelos— proviene de la versión de CLIProxyAPI que instales, así que consulta las releases de GitHub del proyecto para saber qué hace cada versión. Las fuentes de instalación que aparecen dependen de tu plataforma y de si Homebrew está presente. Si además quieres modelos totalmente autoalojados en la misma máquina, el módulo [Ollama](/es/features/ollama) los sirve a través de su propia API local, y la guía sobre [FlyEnv trabajando con asistentes de IA](/es/guide/flyenv-work-with-ai) cubre el panorama más amplio de la IA local. La [página de descarga](/es/download) lista las compilaciones actuales de FlyEnv por plataforma, y las [demos](/es/demos) muestran el módulo funcionando en la práctica.
