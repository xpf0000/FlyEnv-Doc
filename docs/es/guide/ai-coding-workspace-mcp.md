---
title: 'Espacio de trabajo local de programación con IA usando MCP, Claude Code y Codex'
head:
  - - meta
    - name: description
      content: Crea un espacio de trabajo local de programación con IA usando FlyEnv. Gestiona runtimes, servicios, Claude Code, Codex y el servidor MCP de FlyEnv en un único flujo de trabajo local nativo.
---

# Crea un espacio de trabajo local de programación con IA usando MCP para Claude Code, Codex y más

Claude Code, Codex y otros clientes de programación con IA pueden leer tu repositorio, pero eso es solo una parte de un entorno de desarrollo real. También necesitan las versiones de runtime, los servicios locales, las URL de los sitios, los logs y la configuración gestionada de la que depende tu proyecto.

FlyEnv convierte esa capa que falta en un único flujo de trabajo local nativo. Gestiona el stack sobre el que realmente se ejecuta tu proyecto, lanza CLI de programación con IA y expone ese mismo entorno a través del **FlyEnv MCP Server** integrado.

## Por qué los clientes de IA necesitan el entorno local real

Un cliente de IA es mucho más útil cuando puede trabajar sobre el mismo contexto local que usas tú:

- la versión activa de PHP, Node.js o Python
- si MySQL, Redis o los servicios web están en ejecución
- las URL de los sitios locales, los archivos gestionados, las configuraciones y los logs
- una forma segura y estructurada de inspeccionar u operar sobre ese stack

FlyEnv lo consigue manteniendo la capa de runtime y la capa de acceso de la IA en el mismo espacio de trabajo.

| Lo que la IA necesita | Configuración típica solo con shell | Lo que añade FlyEnv |
|-------------------|--------------------------|------------------|
| Versión de runtime correcta | Cambio manual y desviaciones | Cambio de runtime a nivel de proyecto |
| Servicios en ejecución | Arrancar todo a mano | Gestión de servicios en la misma app |
| Sitios locales, configuraciones y logs | Dispersos entre terminales y archivos | Acceso MCP estructurado a los detalles del sitio y los archivos gestionados |
| Control seguro de la máquina | Demasiado acceso al shell o ninguno | Interruptores de herramientas, aprobaciones y audit logs |

## Qué añade FlyEnv a un flujo de trabajo MCP local

FlyEnv cierra la brecha en dos capas:

1. **Capa de stack local:** gestiona runtimes, servicios, dominios locales, SSL y el cambio a nivel de proyecto desde una única app de escritorio.
2. **Capa puente para la IA:** expone ese mismo entorno a los clientes de IA mediante MCP, con autenticación por token, controles de herramientas, políticas de aprobación y audit logs.

Este es el flujo de trabajo detrás de la promesa de la página principal: **"Manage local runtimes, services, AI coding CLIs, and the MCP bridge in one place."**

## Paso 1: Gestiona los CLI de programación con IA en un solo espacio de trabajo

En la app FlyEnv, los CLI de programación con IA son módulos de primer nivel junto a los runtimes y servicios locales. Hoy el espacio de trabajo puede gestionar:

- Claude Code
- Codex
- OpenCode
- Kimi Code CLI
- GitHub Copilot CLI
- Antigravity CLI

Esto significa que puedes mantener el runtime del proyecto y el cliente de IA en un mismo lugar, en lugar de unir a mano instaladores separados y perfiles de shell.

## Paso 2: Inicia el FlyEnv MCP Server

Abre el panel **MCP Server** en FlyEnv y configura:

- **Host**
- **Port**
- **Token**
- **Auto Start**
- **Allow remote access**
- **Enabled Tools**
- **Approval policy** para las herramientas de mayor riesgo

Por defecto, FlyEnv está diseñado para el desarrollo local:

- escucha en `127.0.0.1`
- usa un bearer token para la autenticación de clientes
- te permite activar o desactivar herramientas individualmente
- mantiene un **audit log** de la actividad MCP

Esto te da una configuración local práctica por defecto sin exponer tu máquina más de lo necesario.

## Paso 3: Conecta Claude Code, Codex, OpenCode y otros clientes

FlyEnv admite dos patrones de conexión.

### HTTP MCP

FlyEnv puede generar fragmentos de configuración HTTP MCP directamente en la app. Actualmente, la interfaz admite la salida de configuración y el registro con un clic para:

- Claude Code
- Antigravity CLI
- Codex
- GitHub Copilot CLI
- OpenCode
- Kimi

Ejemplo de configuración al estilo de Claude Code:

```json
{
  "mcpServers": {
    "flyenv": {
      "type": "http",
      "url": "http://127.0.0.1:7682",
      "headers": {
        "Authorization": "Bearer <your-token>"
      }
    }
  }
}
```

Ejemplo de configuración de Codex:

```toml
[features]
rmcp_client = true

[mcp_servers.flyenv]
url = "http://127.0.0.1:7682"

[mcp_servers.flyenv.http_headers]
Authorization = "Bearer <your-token>"
```

### Opción B: Usa el puente MCP stdio para clientes de escritorio

Para los clientes que prefieren servidores MCP stdio locales, FlyEnv también expone un script puente. La app puede generar un fragmento stdio para clientes como:

- Cursor
- Cline
- Windsurf
- Claude Desktop

Ejemplo de configuración stdio:

```json
{
  "mcpServers": {
    "flyenv": {
      "command": "node",
      "args": ["<FlyEnv>/mcp/flyenv-mcp-stdio.mjs"],
      "env": {
        "FLYENV_MCP_URL": "http://127.0.0.1:7682",
        "FLYENV_MCP_TOKEN": "<your-token>"
      }
    }
  }
}
```

FlyEnv genera estos fragmentos por ti, así que en la mayoría de los casos no necesitas escribir la configuración a mano desde cero.

## Paso 4: Decide qué puede hacer la IA

El panel MCP de FlyEnv no es solo un interruptor de encendido/apagado. También te permite delimitar a qué puede acceder la IA.

Las herramientas típicas de lectura e inspección incluyen:

- listar los servicios gestionados por FlyEnv y las versiones instaladas
- comprobar el estado de un servicio
- listar los sitios locales
- resolver el runtime, las URL y los archivos gestionados de un sitio
- listar los archivos de configuración y de log conocidos
- listar las versiones de servicios descargables
- leer los detalles de conexión de bases de datos o caché

Las herramientas de mayor impacto incluyen:

- iniciar, detener o reiniciar servicios
- crear o actualizar un sitio
- eliminar un sitio
- instalar una versión de un servicio

Para esas herramientas de mayor riesgo, FlyEnv admite:

- **activación/desactivación por herramienta**
- **modo de aprobación**
- **audit logging**

Esto te permite mantener a los agentes de IA útiles sin entregarles por defecto una superficie de control sin restricciones.

## Paso 5: Ejecuta un flujo de trabajo práctico de programación con IA local

Este es el ciclo de configuración habitual dentro de FlyEnv:

1. Abre tu proyecto en FlyEnv.
2. Deja que FlyEnv cambie a las versiones de runtime correctas para ese proyecto.
3. Inicia los servicios locales que tu proyecto necesita.
4. Lanza o configura tu CLI de programación con IA preferido desde el mismo espacio de trabajo.
5. Inicia el FlyEnv MCP Server.
6. Añade la configuración MCP de FlyEnv al cliente de IA usando el fragmento generado o la acción "Add to Client" dentro de la app.
7. Deja que la IA inspeccione los mismos servicios locales, sitios, configuraciones y logs que usas tú.

Aquí es donde FlyEnv se diferencia de un flujo de trabajo genérico solo con shell: el runtime, los servicios, el CLI de IA y la conexión MCP apuntan todos al mismo contexto local.

## Mira la demo de principio a fin

Si quieres ver este flujo de trabajo en un proyecto real, esta demo va desde la configuración de MySQL hasta un sitio PHP CRUD en funcionamiento, usando FlyEnv, un CLI de IA y el puente MCP juntos.

<iframe style="width: 100%; aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/frprHkD1_rQ" title="Demo completa de FlyEnv AI CLI y MCP: de MySQL a un sitio PHP CRUD en funcionamiento" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Por qué funciona bien sin la sobrecarga de un enfoque Docker-first

Si tu objetivo es un espacio de trabajo local de programación con IA, no siempre necesitas empezar contenerizando el flujo de trabajo. FlyEnv ya gestiona runtimes nativos y servicios locales, y luego ofrece a los clientes de IA un acceso MCP estructurado a ese stack.

Para los equipos que buscan una alternativa más ligera a conectar a mano Docker, scripts de shell y la configuración del cliente, ese suele ser el camino más sencillo.

## Notas de seguridad para configuraciones MCP locales

Para la mayoría de las configuraciones, mantén estos valores por defecto:

- mantén MCP en `127.0.0.1`
- mantén el token activado
- activa solo las herramientas que necesitas
- usa la aprobación para las operaciones arriesgadas

Activa el acceso remoto solo si entiendes la exposición de red que implica y la necesitas explícitamente.

## Preguntas frecuentes (FAQ)

**P: ¿FlyEnv funciona como alternativa a Docker para la programación local con IA?**

R: En muchos flujos de trabajo de desarrollo local, sí. FlyEnv gestiona runtimes nativos, servicios, sitios locales y el acceso MCP sin requerir una configuración que priorice los contenedores.

**P: ¿Qué clientes de IA pueden conectarse al FlyEnv MCP Server?**

R: FlyEnv puede generar configuración HTTP MCP para Claude Code, Codex, OpenCode, Kimi, GitHub Copilot CLI y Antigravity CLI, además de configuración de puente stdio para clientes como Cursor, Cline, Windsurf y Claude Desktop.

**P: ¿Puedo limitar lo que un agente de IA puede cambiar en mi máquina?**

R: Sí. FlyEnv admite controles de activación/desactivación por herramienta, modo de aprobación para las acciones más arriesgadas y audit logs de la actividad MCP.

## Próximos pasos

Configura el flujo de trabajo completo instalando FlyEnv, iniciando el MCP Server y conectando tu cliente de programación con IA preferido al mismo stack local que tu proyecto ya usa.

[Descarga FlyEnv](/es/download) para crear un espacio de trabajo local de programación con IA con runtimes, servicios, CLI de IA y MCP en un solo lugar.

## Guías relacionadas

- ¿Necesitas el artículo más amplio sobre productividad? Lee [Flujo de trabajo con asistente de programación IA](/es/guide/flyenv-work-with-ai)
- ¿Quieres un flujo de trabajo con LLM local? Lee [Crea un agente de IA local sin conexión](/es/guide/build-local-offline-ai-agent)
- ¿Quieres automatización sobre la IA local? Lee [Flujos de trabajo de IA autoalojados con n8n](/es/guide/build-local-ai-workflow-by-n8n)
