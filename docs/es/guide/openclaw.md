---
title: 'Ejecuta OpenClaw con Ollama en local'
head:
  - - meta
    - name: description
      content: 'Configura OpenClaw con Ollama en FlyEnv, conecta los canales de mensajería que elijas y mantén la ejecución del modelo en hardware que controlas.'
---

# Guía de configuración de OpenClaw + Ollama para un agente de IA autoalojado

Imagina tener un asistente de IA que hace más que chatear. Puede leer los archivos que le permitas, ejecutar comandos y conectarse a plataformas de mensajería como WhatsApp o Telegram. Con un modelo local de Ollama, la inferencia puede quedarse en tu máquina y evitar las tarifas por petición de las APIs de modelos en la nube; las plataformas conectadas y las herramientas de terceros siguen teniendo sus propias condiciones de privacidad y precios.

Eso es exactamente lo que ofrece **OpenClaw**. A diferencia de ChatGPT u otras herramientas de IA en la nube que se limitan a responder a prompts, OpenClaw es un **framework de agentes de IA** completo que puede realizar acciones reales en tu ordenador. Combinado con **Ollama** para la ejecución local del LLM, obtienes un potente sistema de automatización que funciona totalmente sin conexión.

En esta guía aprenderás a construir este sistema con **FlyEnv**: la forma más rápida de tener OpenClaw y Ollama en marcha sin configuraciones complejas de Docker ni ajustes manuales.

## Qué vas a construir

Al final de esta guía tendrás:

- Un gateway de agente de IA autoalojado ejecutándose en tu máquina
- Integración con apps de mensajería (WhatsApp, Telegram, Discord, iMessage y más)
- Procesamiento del LLM en local mediante Ollama: sin claves de API, sin límites de uso
- Un agente capaz de leer y escribir archivos, ejecutar comandos y automatizar tareas
- La ejecución local del modelo puede mantener los prompts en tu hardware cuando no hay ninguna integración en la nube activada

![Panel de OpenClaw](https://oss.macphpstudy.com/image/openclaw-1.webp)

## ¿Qué es OpenClaw?

OpenClaw es un **gateway de código abierto y autoalojado** que conecta tus apps de mensajería con agentes de programación con IA. Piensa en él como un puente entre el lugar donde te comunicas (WhatsApp, Telegram, etc.) y una IA que realmente puede ejecutar tareas.

### Capacidades clave

| Función | Descripción |
|---------|-------------|
| **Multicanal** | Conecta WhatsApp, Telegram, Discord, iMessage y Slack simultáneamente |
| **Uso de herramientas** | Lee y escribe archivos, ejecuta comandos de shell y realiza peticiones HTTP |
| **Gestión de sesiones** | Conversaciones persistentes con contexto entre sesiones |
| **Memoria** | El agente recuerda interacciones y preferencias anteriores |
| **Enrutado multiagente** | Dirige tareas distintas a agentes especializados |

### OpenClaw frente a ChatGPT

| Capacidad | ChatGPT | OpenClaw + Ollama |
|------------|---------|-------------------|
| **Ejecución de acciones** | Solo texto | Archivos, comandos y mensajes |
| **Integración con mensajería** | Ninguna | WhatsApp, Telegram, Discord, etc. |
| **Privacidad de los datos** | Procesados en la nube | 100 % local |
| **Costes de API** | Tarifas por token | Cero (tras la configuración) |
| **Uso sin conexión** | No | Sí |

## Requisitos previos

Antes de empezar, asegúrate de tener:

- **FlyEnv** instalado ([descárgalo aquí](/es/download))
- **8 GB+ de RAM** (16 GB recomendados para modelos más grandes)
- ~10 GB de espacio libre en disco para almacenar modelos
- Una cuenta en una app de mensajería (WhatsApp, Telegram o Discord)

## Paso 1: Instala Node.js 24

OpenClaw requiere **Node.js 24** (o Node.js 22 LTS `22.16+` por compatibilidad).

1. Abre **FlyEnv** y navega a la sección **Node.js**
2. Selecciona **Node.js 24** en la lista de versiones (recomendado)
3. Haz clic en **Install** y espera a que termine
4. Establece Node.js 24 como tu versión activa

> **Ventaja de FlyEnv:** a diferencia de la instalación manual de Node.js, FlyEnv gestiona automáticamente la configuración del PATH y el cambio de versiones. Se acabaron los errores de `command not found`.

![Instalación de Node.js](https://oss.macphpstudy.com/image/openclaw-2.webp)

## Paso 2: Instala Ollama

Ollama es el cerebro de IA de tu agente OpenClaw.

1. En FlyEnv, abre la sección **Library/Tools**
2. Busca **Ollama** entre las aplicaciones disponibles
3. Haz clic en **Install**: FlyEnv gestiona todas las dependencias automáticamente
4. Inicia el servicio de Ollama

![Instalación de Ollama](https://oss.macphpstudy.com/image/openclaw-3.webp)

## Paso 3: Descarga un modelo de IA

Elige un modelo según las capacidades de tu hardware:

### Para sistemas con 8-16 GB de RAM

| Modelo | Tamaño | Ideal para |
|-------|------|----------|
| `qwen2.5-coder:7b` | ~4 GB | Generación de código, tareas técnicas |
| `llama3.2` | ~4 GB | Uso general, razonamiento |
| `deepseek-r1:7b` | ~4 GB | Razonamiento paso a paso |

### Para sistemas con 16 GB+ de RAM o GPU

| Modelo | Tamaño | Ideal para |
|-------|------|----------|
| `qwen2.5-coder:32b` | ~20 GB | Programación compleja, contexto amplio |
| `gpt-oss:20b` | ~12 GB | Uso de herramientas, tareas de agente |
| `glm-4.7-flash` | ~25 GB | Razonamiento avanzado |

### Descarga mediante FlyEnv

1. Navega a **Ollama Models** en FlyEnv
2. Selecciona tu modelo preferido en la lista
3. Haz clic en **Download** y espera a que termine

> **Recomendación:** empieza con `qwen2.5-coder:7b` para las pruebas. Es rápido, capaz y funciona bien en la mayoría de los sistemas.

![Descarga de modelos](https://oss.macphpstudy.com/image/openclaw-4.webp)

## Paso 4: Instala OpenClaw

Ahora instala el gateway que lo conecta todo:

1. En la **Library** de FlyEnv, localiza **OpenClaw**
2. Haz clic en **Install** y sigue las indicaciones
3. Una vez instalado, haz clic en **Start** para lanzar el gateway

OpenClaw iniciará un gateway local (por defecto: `http://127.0.0.1:18789/`) y abrirá la Control UI en tu navegador.

![Gateway de OpenClaw](https://oss.macphpstudy.com/image/openclaw-5.webp)

## Paso 5: Configura OpenClaw para usar Ollama

### Asistente de configuración inicial

La primera vez que abras OpenClaw verás una advertencia de seguridad: **léela con atención**. A diferencia de los chatbots simples, OpenClaw puede:

- Leer y escribir archivos en tu ordenador
- Ejecutar comandos del sistema
- Enviar mensajes en tu nombre
- Hacer peticiones web

Este poder requiere una configuración responsable.

### Pasos de configuración

1. **Elige Quick Start** (recomendado para principiantes)
2. **Selecciona el proveedor de IA:** elige **Ollama** o **Local / Self-Hosted**
3. **Introduce el endpoint de la API:** `http://localhost:11434`
4. **Selecciona tu modelo:** elige el modelo que descargaste (p. ej., `qwen2.5-coder:7b`)
5. **Completa la configuración**

### Verifica la configuración

Tu archivo de configuración se guarda en `~/.openclaw/openclaw.json`. Una configuración básica tiene este aspecto:

```json
{
   "models": {
      "providers": {
         "ollama": {
            "baseUrl": "http://127.0.0.1:11434",
            "api": "ollama",
            "models": [
               {
                  "id": "qwen3.5:0.8b",
                  "name": "qwen3.5:0.8b",
                  "api": "ollama",
                  "reasoning": false,
                  "input": [
                     "text"
                  ],
                  "cost": {
                     "input": 0,
                     "output": 0,
                     "cacheRead": 0,
                     "cacheWrite": 0
                  },
                  "contextWindow": 32000,
                  "maxTokens": 32000
               }
            ]
         }
      }
   }
}
```

![Configuración](https://oss.macphpstudy.com/image/openclaw-6.webp)

## Paso 6: Conecta las apps de mensajería

Ahora conecta tus plataformas de mensajería favoritas para controlar el agente de forma remota:

### Opción A: WhatsApp

```bash
openclaw configure --section channels
```

Selecciona WhatsApp y escanea el código QR con tu teléfono.

### Opción B: Telegram

1. Crea un bot mediante [@BotFather](https://t.me/botfather)
2. Añade el token del bot a la configuración de OpenClaw
3. Empieza a chatear con tu bot

### Opción C: Discord

1. Crea una aplicación de Discord
2. Añade el token del bot a OpenClaw
3. Invita al bot a tu servidor

> **Consejo de seguridad:** empieza con la lista blanca **allowFrom** para limitar quién puede interactuar con tu agente:

```json
{
  "channels": {
    "whatsapp": {
      "allowFrom": ["+15555550123"],
      "groups": {
        "*": { "requireMention": true }
      }
    }
  },
  "messages": {
    "groupChat": {
      "mentionPatterns": ["@openclaw"]
    }
  }
}
```

## Paso 7: Prueba tu agente de IA

Envía tu primer comando desde la app de mensajería conectada:

### Comandos de ejemplo

| Comando | Qué hace |
|---------|--------------|
| `Read the file ~/Documents/notes.txt` | Lee y resume el archivo |
| `Create a Python script that calculates fibonacci numbers` | Escribe código en un archivo |
| `List files in the current directory` | Ejecuta un comando de shell |
| `Send an email to team@example.com about the project update` | Redacta y envía un email |

### Desde el terminal

También puedes interactuar mediante la TUI (Terminal User Interface) integrada:

```bash
openclaw
```

O usa el panel web en `http://127.0.0.1:18789/`

![Interacción con el agente ]

## Avanzado: configuración híbrida nube + local

Para tareas complejas, combina modelos locales y en la nube:

```json
{
  "agents": {
    "defaults": {
      "model": {
        "primary": "ollama/qwen2.5-coder:32b",
        "thinking": "anthropic/claude-sonnet-4-20250514"
      }
    }
  }
}
```

- **Modelo local:** se encarga de leer archivos, ediciones sencillas y tareas rutinarias (ahorra costes de API)
- **Modelo en la nube:** se encarga de depuración, arquitectura y razonamiento complejo (se usa con moderación)

Este enfoque híbrido puede reducir la factura de API de 20-50 $/día a 2-5 $/día.

## Solución de problemas

| Problema | Solución |
|-------|----------|
| **El modelo carga lento o falla** | Falta de memoria. Usa una cuantización menor: `qwen2.5-coder:7b-q4_K_M` |
| **Las llamadas a herramientas fallan** | Establece `"reasoning": false` en la configuración. Algunos modelos locales tienen problemas con el formato de herramientas |
| **Errores de ventana de contexto** | Los modelos locales tienen un contexto menor. Define un `contextWindow` preciso en la configuración |
| **No se puede conectar con Ollama** | Verifica que Ollama esté en ejecución: `curl http://localhost:11434/api/tags` |
| **No se reciben los mensajes** | Revisa la configuración del canal y los permisos |

## Buenas prácticas de seguridad

⚠️ **OpenClaw es intencionadamente potente y tiene permisos amplios.**

1. **Ejecútalo en un entorno aislado** siempre que sea posible
2. **Usa la lista blanca allowFrom** para limitar los orígenes de los mensajes
3. **Revisa las skills de terceros** antes de activarlas
4. **Exige menciones en los chats de grupo** para evitar activaciones accidentales
5. **Audita periódicamente los permisos del sistema de archivos**

## Vídeo paso a paso

¿Prefieres verlo? Mira Build a 100% Local AI Agent: OpenClaw + Ollama Setup via FlyEnv In 5 Minutes en acción:

<iframe style="width: 100%; aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/j7_B-VzIyEU?si=20WeZTZMPIAYcXpJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


## Preguntas frecuentes (FAQ)

### P: ¿OpenClaw es gratis tras la configuración?

**R:** Sí. OpenClaw es de código abierto (licencia MIT) y Ollama ejecuta los modelos en local. Una vez configurado, **no hay tarifas de API recurrentes** ni límites de uso. Tu único coste es la electricidad para mantener el ordenador encendido.

### P: ¿Mis datos salen de mi máquina?

**R:** No. Con OpenClaw + Ollama, todo el procesamiento ocurre **en local**. Tus mensajes, archivos y datos nunca salen de tu hardware, salvo que actives explícitamente integraciones en la nube.

### P: ¿Qué hardware necesito?

**R:** Mínimo 8 GB de RAM para los modelos más pequeños (7B parámetros). Para un uso cómodo:
- **Básico:** 8 GB de RAM + CPU (modelos 7B)
- **Recomendado:** 16 GB de RAM + GPU (modelos 13B)
- **Usuario avanzado:** 32 GB+ de RAM + GPU de gama alta (modelos 32B+)

### P: ¿Puedo usar modelos en la nube si lo necesito?

**R:** Sí. OpenClaw admite configuraciones híbridas. Puedes definir modelos locales como predeterminados y cambiar a proveedores en la nube (Anthropic, OpenAI, etc.) para tareas concretas que requieran más capacidad.

### P: ¿En qué se diferencia de ChatGPT con plugins?

**R:** Los asistentes en la nube procesan las peticiones en infraestructura remota. OpenClaw puede ejecutarse en tu hardware con acceso directo a los recursos locales que le permitas y puede funcionar sin conexión con un modelo local. La privacidad sigue dependiendo de los canales de mensajería, las APIs y las integraciones que actives, y la configuración exige más administración.

### P: ¿Es adecuado para uso empresarial?

**R:** OpenClaw es actualmente **software experimental**. Aunque es potente, carece de las salvaguardas de nivel empresarial. Encaja mejor en uso personal, entornos de desarrollo o escenarios cuidadosamente controlados en los que entiendas y aceptes las implicaciones de seguridad.

## Próximos pasos

Ahora que tienes un agente de IA autoalojado en marcha:

- **[Configura pruebas de email en local con Mailpit](/es/guide/local-email-testing-mailpit)** - Prueba flujos de automatización de email
- **[Expón localhost con Cloudflare Tunnel](/es/guide/cloudflare-tunnel-local-development)** - Accede a tu agente de forma remota desde cualquier lugar
- **[Construye más agentes de IA](/es/guide/build-local-offline-ai-agent)** - Explora otras herramientas de IA del ecosistema FlyEnv

---

**¿Listo para construir tu agente de IA personal?** [Descarga FlyEnv](/es/download) y empieza con un modelo local; después añade solo los canales de mensajería y las integraciones que necesites.
