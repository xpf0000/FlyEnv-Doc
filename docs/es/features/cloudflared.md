---
layout: doc
titleTemplate: false
title: 'Gestor del binario Cloudflared | FlyEnv'
description: 'Instala y cambia versiones de cloudflared y mantén el binario en tu PATH para el módulo Cloudflare Tunnel.'
head:
  - - meta
    - name: description
      content: 'Instala y cambia versiones de cloudflared y mantén el binario en tu PATH para el módulo Cloudflare Tunnel.'
  - - meta
    - property: og:title
      content: 'Gestor del binario Cloudflared | FlyEnv'
  - - meta
    - property: og:description
      content: 'Instala y cambia versiones de cloudflared y mantén el binario en tu PATH para el módulo Cloudflare Tunnel.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/es/features/cloudflared
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/es/features/cloudflared
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Cloudflared en FlyEnv

cloudflared es el cliente de línea de comandos de código abierto de Cloudflare para Cloudflare Tunnel: el daemon que conecta un servicio local con el edge de Cloudflare para que sea accesible a través de un hostname público. El módulo Cloudflared de FlyEnv gestiona el binario de línea de comandos `cloudflared`: instala varias versiones en paralelo, decide cuál resuelve tu terminal y registra tus propias compilaciones desde directorios personalizados. Su función principal dentro de FlyEnv es proporcionar el binario con el que el [módulo Cloudflare Tunnel](/es/features/cloudflare-tunnel) ejecuta tus túneles: el módulo en sí no tiene daemon, ni archivos de configuración, ni logs, solo dos pestañas: Service y Version Manager.

![Vista general del módulo Cloudflared de FlyEnv](https://oss.macphpstudy.com/image/features/cloudflared-1.webp)

## Gestión de versiones de Cloudflared

Instala versiones de cloudflared en paralelo desde **Cloudflared → Version Manager** y manténlas todas disponibles a la vez.

- **Lista en línea estática:** descarga directamente las compilaciones oficiales de cloudflared: un archivo `.tgz` en macOS (FlyEnv lo descomprime y elimina el atributo de cuarentena por ti), un `.exe` en Windows y un binario simple en Linux.
- **Homebrew:** en macOS y Linux, instala cloudflared desde Homebrew junto a las compilaciones estáticas.
- **Directorios personalizados:** apunta FlyEnv a cualquier carpeta que contenga tu propia compilación de cloudflared y aparecerá en la lista de instaladas junto a las versiones gestionadas.

![Gestión de versiones de Cloudflared](https://oss.macphpstudy.com/image/features/cloudflared-2.webp)

## Cambio de versión en la línea de comandos

La pestaña **Service** no ejecuta un servicio en segundo plano: aquí cloudflared es solo un binario, por lo que no hay ningún daemon que FlyEnv deba gestionar. La pestaña es una tabla de versiones instaladas cuya función es controlar el PATH.

- **Cambio de versión en el terminal:** al seleccionar una versión aquí, el binario de esa instalación se registra en tu `PATH` (o se elimina de él), de modo que el comando `cloudflared` del terminal resuelve a la versión que elegiste: el mismo mecanismo descrito en la [guía del entorno PATH del sistema](/es/guide/setup-system-path-environment).
- **Alias por versión:** asigna un alias corto a las compilaciones casi idénticas para que sigan siendo fáciles de distinguir en la lista.
- **Mantenimiento:** cada fila muestra la ruta de instalación de la versión y ofrece una acción de eliminación para las versiones que ya no necesitas.

<FeatureRelatedLinks locale="es" slug="cloudflared" />

## Notas de compatibilidad

Este módulo se limita deliberadamente a los binarios y al PATH: proporciona y cambia versiones de cloudflared, pero no crea ni ejecuta túneles por sí mismo. Las instancias de túnel, las reglas DNS y los logs por túnel se encuentran en el [módulo Cloudflare Tunnel](/es/features/cloudflare-tunnel) independiente, que te pide elegir una de las versiones de cloudflared instaladas aquí al añadir un túnel. Para un recorrido completo de principio a fin sobre cómo exponer un [sitio local](/es/features/local-sites-https) a través de un túnel, consulta la [guía de Cloudflare Tunnel para desarrollo local](/es/guide/cloudflare-tunnel-local-development).
