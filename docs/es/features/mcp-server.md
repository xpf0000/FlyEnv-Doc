---
layout: doc
titleTemplate: false
title: 'Servidor MCP de FlyEnv'
description: 'Ejecuta el servidor MCP integrado de FlyEnv para conectar asistentes de IA a tu stack local de forma segura.'
head:
  - - meta
    - name: description
      content: 'Ejecuta el servidor MCP integrado de FlyEnv para conectar asistentes de IA a tu stack local de forma segura.'
  - - meta
    - property: og:title
      content: 'Servidor MCP de FlyEnv'
  - - meta
    - property: og:description
      content: 'Ejecuta el servidor MCP integrado de FlyEnv para conectar asistentes de IA a tu stack local de forma segura.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/es/features/mcp-server
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/es/features/mcp-server
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Servidor MCP de FlyEnv

FlyEnv incluye un servidor MCP integrado que permite a los asistentes de codificación con IA operar tu stack local — listar y controlar servicios, inspeccionar registros y configuraciones, leer detalles de conexión de sitios y bases de datos — a través de una interfaz controlada. El servidor habla MCP sobre Streamable HTTP en `127.0.0.1:7682` por defecto, se autentica con un token Bearer y expone 18 herramientas con políticas de aprobación por herramienta. Cada llamada queda registrada en un Registro de auditoría, de modo que siempre sabes lo que hizo un asistente. La [guía del espacio de trabajo de codificación con IA](/es/guide/ai-coding-workspace-mcp) muestra la configuración completa en un proyecto real.

![Vista general del módulo Servidor MCP de FlyEnv](https://oss.macphpstudy.com/image/features/mcp-server-1.webp)

## Opciones del servicio

El servidor se ejecuta dentro de la propia aplicación FlyEnv, así que no hay nada que instalar: la pestaña **Servicio** solo controla cómo escucha y cuándo se inicia.

- **Host y puerto de escucha:** la dirección por defecto es `127.0.0.1:7682`; el puerto acepta cualquier valor entre 1024 y 65535. La escucha en direcciones no loopback se rechaza a menos que actives explícitamente el acceso remoto, lo que primero muestra un diálogo de advertencia.
- **Autenticación con token Bearer:** los clientes deben presentar el token generado en cada petición. Regenéralo con un clic para revocar de golpe todos los clientes existentes.
- **Inicio automático al abrir:** el servidor puede arrancar automáticamente cada vez que se abre FlyEnv, para que tus asistentes nunca apunten a un endpoint muerto.
- **Servicio independiente:** el Servidor MCP de FlyEnv está excluido del grupo global de «iniciar todo», de modo que arrancar todo tu stack nunca activa la interfaz de IA sin querer.
- **Puente stdio:** para los clientes que prefieren stdio, FlyEnv copia un script puente `flyenv-mcp-stdio.mjs` en su directorio de datos, listo para ser ejecutado por un runtime [Node.js](/es/features/nodejs) externo.

![Pestaña Servicio con las opciones de host, puerto y token](https://oss.macphpstudy.com/image/features/mcp-server-1.webp)

## Configuración de clientes

La pestaña **Configuración de clientes** conecta el servidor con las seis herramientas CLI de IA que FlyEnv ya gestiona: Claude Code, Antigravity CLI, Codex, GitHub Copilot CLI, OpenCode y Kimi.

- **Registro con un clic:** un botón «Añadir al cliente» por herramienta escribe la entrada del servidor `flyenv` directamente en la configuración MCP de ese CLI — sin editar archivos a mano, ya sea el cliente [Codex](/es/features/codex), [OpenCode](/es/features/opencode) o [Kimi](/es/features/kimi).
- **Fragmentos listos para copiar:** bloques JSON o TOML preparados en las variantes HTTP y stdio, para pegar en clientes que configures tú mismo o en herramientas fuera de la gestión de FlyEnv.
- **Combinado con los CLI gestionados:** cada uno de estos asistentes tiene su propio módulo en FlyEnv — consulta [Claude Code](/es/features/claude-code) como ejemplo de la gestión de instalación, sesiones y plugins que reciben.

![Pestaña Configuración de clientes con registro de un clic para seis CLI](https://oss.macphpstudy.com/image/features/mcp-server-2.webp)

## Herramientas

La pestaña **Herramientas** lista las 18 herramientas que expone el servidor y decide cuáles de ellas puede usar un asistente.

- **Herramientas de lectura** — inventario e inspección: `list_services`, `service_status`, `list_sites`, `resolve_site_runtime`, `resolve_site_urls`, `get_database_connection_info`, `get_service_exec_info`, `get_managed_file_map`, `list_log_files`, `list_config_files` y `list_online_versions`.
- **Herramientas de acción** — cambios en tu entorno: `start_service`, `stop_service`, `restart_service`, `create_site`, `update_site`, `delete_site` y `install_service`.
- **Interruptor por herramienta:** desactiva cualquier herramienta individual para eliminarla por completo de lo que los clientes pueden llamar.
- **Políticas de aprobación para herramientas de riesgo:** las 7 herramientas de ciclo de vida, escritura de sitios e instalación llevan cada una una política auto/confirmar — el valor por defecto es confirmar, de modo que las operaciones sensibles esperan tu aprobación a menos que decidas relajarla.

![Pestaña Herramientas con interruptores por herramienta y políticas de aprobación](https://oss.macphpstudy.com/image/features/mcp-server-3.webp)

## Registro de auditoría

La pestaña **Registro de auditoría** es un visor en vivo sobre `audit.log` en el directorio de datos MCP de FlyEnv — un registro en formato JSON Lines de cada llamada a herramienta que procesa el servidor.

- **Historial completo de llamadas:** cada entrada captura qué herramienta se ejecutó y con qué parámetros, dándote un rastro revisable de todo lo que tus asistentes de IA han tocado — contexto esencial cuando [trabajas con asistentes de IA](/es/guide/flyenv-work-with-ai) a diario.
- **Enmascaramiento de secretos:** los tokens y contraseñas se enmascaran antes de llegar al registro, de modo que revisar o compartir el archivo no filtra credenciales.

![Pestaña Registro de auditoría mostrando las llamadas a herramientas registradas](https://oss.macphpstudy.com/image/features/mcp-server-4.webp)

<FeatureRelatedLinks locale="es" slug="mcp-server" />

## Notas de compatibilidad

El Servidor MCP de FlyEnv se ejecuta en el proceso principal de la aplicación, lo que define sus límites estrictos: solo existe mientras FlyEnv está en ejecución, así que al cerrar la aplicación el endpoint se cae para todos los clientes conectados. Se comporta igual en macOS, Windows y Linux, sin diferencias específicas de plataforma. El puente stdio depende de un runtime Node.js externo para ejecutar el script `flyenv-mcp-stdio.mjs` generado. El acceso remoto permanece desactivado a menos que lo actives deliberadamente — escuchar en cualquier dirección que no sea loopback requiere la activación explícita y pasa por un diálogo de advertencia.
