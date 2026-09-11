---
layout: doc
titleTemplate: false
title: 'Gestor de Cloudflare Tunnel para sitios locales | FlyEnv'
description: 'Crea túneles gestionados por Cloudflare, asigna hostnames públicos a servicios locales e inspecciona los logs de cada túnel en FlyEnv.'
head:
  - - meta
    - name: description
      content: 'Crea túneles gestionados por Cloudflare, asigna hostnames públicos a servicios locales e inspecciona los logs de cada túnel en FlyEnv.'
  - - meta
    - property: og:title
      content: 'Gestor de Cloudflare Tunnel para sitios locales | FlyEnv'
  - - meta
    - property: og:description
      content: 'Crea túneles gestionados por Cloudflare, asigna hostnames públicos a servicios locales e inspecciona los logs de cada túnel en FlyEnv.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/es/features/cloudflare-tunnel
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/es/features/cloudflare-tunnel
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Cloudflare Tunnel con FlyEnv

Cloudflare Tunnel es un servicio de Cloudflare que conecta un servicio local con un hostname público a través de un túnel de solo salida desde tu máquina, sin necesidad de redirigir puertos en el router ni de una IP pública, lo que lo hace muy útil para demos y para el acceso remoto a un entorno de desarrollo. El módulo Cloudflare Tunnel de FlyEnv expone servicios locales en hostnames públicos sin tocar tu router ni tu firewall. Conecta tu cuenta de Cloudflare una sola vez, añade reglas DNS que asignan subdominios a destinos locales `host:port`, y FlyEnv gestiona toda la configuración a través de la API de Cloudflare: crea el túnel, escribe los registros CNAME y envía las reglas de ingress por ti. Cada túnel se ejecuta como un proceso gestionado con sus propios logs.

![Módulo Cloudflare Tunnel de FlyEnv con la lista de túneles](https://oss.macphpstudy.com/image/features/cloudflare-tunnel-1.webp)

## Configuración del túnel

Abre **Cloudflare Tunnel** desde la barra lateral y añade un túnel. El diálogo de configuración solicita cuatro cosas:

- **Binario de cloudflared:** el proceso del túnel es el ejecutable `cloudflared`, por lo que primero debe estar instalada al menos una versión del [módulo Cloudflared](/es/features/cloudflared). Elige la versión en el desplegable; si no hay ninguna instalada, FlyEnv te indicará que instales una antes de continuar.
- **API Token:** un API Token de Cloudflare con permisos para gestionar túneles y DNS en tu cuenta. FlyEnv lo utiliza para comunicarse con la API v4 de Cloudflare.
- **Account ID:** la cuenta de Cloudflare propietaria de la zone.
- **Zone / Zone ID:** el dominio cuyos registros DNS y subdominios utilizará el túnel.

Al iniciar, FlyEnv busca —o crea si aún no existe— un túnel de configuración remota en tu cuenta con el nombre `FlyEnv-Tunnel-<token hash>`, y luego ejecuta `cloudflared tunnel run --token <token>` como un proceso en segundo plano independiente. No hay archivos de configuración de túnel locales que mantener: la configuración reside en Cloudflare y se gestiona por completo a través de la API.

![Añadir un túnel con el binario de cloudflared, API Token, Account ID y Zone](https://oss.macphpstudy.com/image/features/cloudflare-tunnel-2.webp)

## Reglas DNS hacia servicios locales

Cada fila de túnel se despliega en una tabla de reglas DNS. Una regla asigna un hostname público a un servicio local:

- **Subdominio y zone:** el hostname público, por ejemplo `demo.example.com`.
- **Protocolo y destino:** `http` o `https` —para los destinos `https`, los certificados del [módulo MkCert](/es/features/mkcert) funcionan muy bien— además del `host:port` local que debe recibir el tráfico, normalmente un sitio del módulo [Sitios locales y HTTPS](/es/features/local-sites-https).

Cuando guardas una regla, FlyEnv escribe ambos lados de la configuración a través de la API de Cloudflare: crea o actualiza un registro CNAME con proxy que apunta el hostname a `<tunnelId>.cfargotunnel.com`, y envía las reglas de ingress del túnel, enrutando cada hostname a su destino `http(s)://host:port` con la cabecera `Host` configurada, y terminando con una regla 404 genérica para todo lo que no coincida. Editar o eliminar una regla actualiza las entradas CNAME e ingress correspondientes.

![Regla DNS que asigna un subdominio a un host y puerto locales](https://oss.macphpstudy.com/image/features/cloudflare-tunnel-3.webp)

Para un recorrido completo sobre cómo exponer un sitio creado mediante el flujo de la [guía de Host](/es/guide/host), consulta la [guía de Cloudflare Tunnel para desarrollo local](/es/guide/cloudflare-tunnel-local-development).

## Logs del túnel

Cada túnel guarda sus propios logs de salida y de error en el directorio de datos de FlyEnv, junto con su archivo pid. El visor de logs integrado lista los archivos de log de cada túnel, de modo que puedes confirmar que la conexión con el edge de Cloudflare se ha establecido y diagnosticar problemas de DNS o de ingress sin salir de la aplicación.

![Visor de logs de salida y de error por túnel](https://oss.macphpstudy.com/image/features/cloudflare-tunnel-4.webp)

<FeatureRelatedLinks locale="es" slug="cloudflare-tunnel" />

## Notas de compatibilidad

El módulo Cloudflare Tunnel está disponible en macOS, Windows y Linux. Requiere el módulo Cloudflared para el binario `cloudflared`, y una cuenta de Cloudflare con un API Token que pueda gestionar túneles y DNS en la zone elegida. Como toda la configuración se almacena en Cloudflare, los cambios realizados en el panel de Cloudflare sobre el mismo túnel pueden interferir con lo que gestiona FlyEnv; considera a FlyEnv como la única fuente de verdad para sus túneles. Consulta la [página de descargas](/es/download) y las notas de la versión para conocer las plataformas y paquetes compatibles.
