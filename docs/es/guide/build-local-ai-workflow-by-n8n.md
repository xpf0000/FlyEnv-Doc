---
title: 'Flujos de trabajo de IA autoalojados con n8n y Ollama'
head:
  - - meta
    - name: description
      content: 'Crea automatización de IA privada y local con n8n y Ollama en FlyEnv, incluyendo servicios nativos, HTTPS y acceso remoto controlado.'
---

# Crea flujos de trabajo de IA autoalojados con n8n y Ollama (sin Docker)

Ejecuta n8n y Ollama en FlyEnv. Después, haz una petición POST local para enviar un mensaje a un modelo descargado y recibir la respuesta. La instalación de n8n y Ollama y la descarga del modelo requieren conexión. Tras la configuración, el webhook en loopback y la inferencia pueden ejecutarse sin conexión.

---

## Por qué importan los flujos de trabajo de IA autoalojados

FlyEnv gestiona los dos procesos. Tú creas el flujo en n8n y eliges el modelo en el nodo de Ollama. El ejemplo usa el almacenamiento SQLite predeterminado de n8n y la API local de Ollama. Los nodos que llaman a API de terceros siguen necesitando internet.

---

## Requisitos previos

Antes de empezar, asegúrate de tener:

1. **FlyEnv instalado** en macOS, Windows o Linux ([Descárgalo aquí](/es/download))
2. Familiaridad básica con los conceptos de automatización de flujos de trabajo
3. Al menos 8 GB de RAM (se recomiendan 16 GB para modelos de IA más grandes)

---

## Paso 1: Instala e inicia n8n

Instala una versión de [Node.js](/es/features/nodejs) compatible con tu versión de n8n y comprueba que `node` y `npm` funcionan en el terminal.

1. Abre el [módulo de n8n](/es/features/n8n) en FlyEnv y selecciona **Version Manager**.
2. Instala una versión. FlyEnv ejecuta npm en su terminal, donde puedes consultar la salida.
3. Inicia desde el módulo la versión instalada.

![Módulo n8n en FlyEnv](https://oss.macphpstudy.com/image/n8n-1.webp)

![Módulo n8n en FlyEnv](https://oss.macphpstudy.com/image/n8n-2.webp)

4. Accede a la interfaz web de n8n en `http://localhost:5678`

![Panel de n8n](https://oss.macphpstudy.com/image/n8n-3.webp)

---

## Paso 2: Instala Ollama y descarga modelos de IA

Ahora vamos a configurar el cerebro de IA de tu flujo de trabajo usando Ollama.

1. En FlyEnv, ve a la sección **AI Tools**
2. Selecciona **Ollama** y haz clic en **Install**
3. Inicia el servicio Ollama

![Módulo Ollama en FlyEnv](https://oss.macphpstudy.com/image/n8n-4.webp)

![Modelos disponibles en Ollama](https://oss.macphpstudy.com/image/n8n-5.webp)

Descarga un modelo apropiado para tu equipo y comprueba que su etiqueta aparece en `http://127.0.0.1:11434/api/tags`. Selecciona ese modelo local en el flujo. [Configuración de modelos de Ollama](/es/guide/build-local-offline-ai-agent)

---

## Paso 3: Configura tu primer flujo de trabajo con IA

Ahora vamos a construir un flujo de trabajo que recibe peticiones HTTP, las procesa con tu IA local y devuelve respuestas inteligentes.

### 3.1 Crea un disparador Webhook

1. En n8n, haz clic en **"Add Workflow"**
2. Busca **"Webhook"** y añádelo como nodo disparador
3. Configura el webhook:
   - **Method:** POST
   - **Path:** `ai-assistant`
   - **Response:** selecciona `When Last Node Finishes` (esto devuelve la salida del modelo de IA)

![Configuración del webhook](https://oss.macphpstudy.com/image/n8n-6.webp)

![Configuración del webhook](https://oss.macphpstudy.com/image/n8n-7.webp)

> **Importante:** Elegir "When Last Node Finishes" garantiza que el webhook devuelva la respuesta generada por la IA en lugar de una confirmación inmediata.

### 3.2 Añade el nodo Ollama AI

1. Añade un nodo **Ollama** después del webhook
2. Configura la conexión:
   - **Base URL:** `http://127.0.0.1:11434` (el valor por defecto de Ollama)
   - **Model:** selecciona el modelo que descargaste (p. ej., `qwen3.5`)

3. Configura la plantilla de mensaje:
   - En el campo **Messages**, añade un mensaje de usuario
   - Para el **Content**, usa una expresión para capturar la entrada del webhook: `\{\{ $json.query?.q ?? $json.body?.q ?? 'Hello' \}\}`

![Configuración del nodo Ollama](https://oss.macphpstudy.com/image/n8n-8.webp)

![Configuración del nodo Ollama](https://oss.macphpstudy.com/image/n8n-9.webp)

### 3.3 Prueba tu flujo de trabajo

Para probar en el editor, selecciona **Listen for Test Event** y copia la **Test URL**. Para usar el endpoint persistente del ejemplo, publica el flujo o actívalo con **Active** en las versiones anteriores. Copia su **Production URL**. Con el puerto y la ruta del ejemplo es `http://127.0.0.1:5678/webhook/ai-assistant`.

```bash
curl -X POST "http://127.0.0.1:5678/webhook/ai-assistant" \
  -H "Content-Type: application/json" \
  -d '{"q": "Explain the benefits of local AI workflows"}'
```

Comprueba que la respuesta HTTP contiene la salida del modelo y abre **Executions** en n8n para revisar la ejecución. Ante un `404`, comprueba la URL y si el flujo está publicado o la escucha de prueba está activa. Si falla el nodo de Ollama, verifica que `/api/tags` incluya el modelo elegido. [URL de Webhook de n8n](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook/#webhook-urls)

---

## Paso 4: Activa HTTPS con proxy inverso

El ejemplo ya funciona en loopback. Este proxy es opcional si quieres una dirección HTTPS local. Si n8n muestra una URL interna detrás del proxy, configura la dirección externa del webhook en su editor de variables de entorno y reinicia el servicio. [Ajustes de proxy inverso de n8n](https://docs.n8n.io/hosting/configuration/configuration-examples/webhook-url/)

### 4.1 Añade un dominio local

1. Abre la sección **Site** de FlyEnv
2. Haz clic en **"Add Site"**
3. Configura:
   - **Domain:** `n8n.test` (o cualquier dominio `.test`)
   - **Type:** Reverse Proxy
   - **Target:** `http://127.0.0.1:5678`

![Configuración del sitio en FlyEnv](https://oss.macphpstudy.com/image/n8n-10.webp)

### 4.2 Activa el SSL automático

FlyEnv genera y gestiona automáticamente certificados SSL locales:

1. En la configuración del sitio, activa **"Auto SSL"**
2. FlyEnv configura Nginx/Caddy/Apache con el certificado
3. Accede a tu instancia de n8n en `https://n8n.test`

![Configuración del sitio en FlyEnv](https://oss.macphpstudy.com/image/n8n-11.webp)

> **¡No necesitas gestionar certificados manualmente!** FlyEnv se encarga de la integración con mkcert automáticamente.

---

## Paso 5: Expón a internet con Cloudflare Tunnel

Omite este paso para trabajar sin conexión. Cloudflare Tunnel necesita internet. Configura la autenticación del nodo Webhook antes de compartir el endpoint. Protege el editor de n8n con controles de acceso y deja la API de Ollama en loopback.

### 5.1 Obtén tu API Token de Cloudflare

1. Inicia sesión en el [Panel de Cloudflare](https://dash.cloudflare.com)
2. Ve a **My Profile** (arriba a la derecha) → **API Tokens**
3. Haz clic en **Create Token**
4. Usa la plantilla **"Cloudflare Tunnel"**, o crea una personalizada con estos permisos:
   - **Account:Cloudflare Tunnel:Edit** — Para gestionar túneles
   - **Zone:Zone:Read** — Para listar tus dominios
   - **Zone:DNS:Edit** — Para crear registros DNS
5. Selecciona los **Zone Resources** (dominios) que quieras usar
6. Copia el token generado

> **Consejo:** Si no tienes un dominio, puedes registrar uno barato o usar los subdominios gratuitos de Cloudflare en algunos planes.

### 5.2 Configúralo en FlyEnv

1. Abre FlyEnv → módulo **Cloudflare Tunnel**, haz clic en el **botón con el icono de más**
2. Pega tu **API Token**
3. FlyEnv obtiene automáticamente tus dominios disponibles

![Módulo Cloudflare Tunnel de FlyEnv](https://oss.macphpstudy.com/image/cloud-tunnel-1.webp)

### 5.3 Crea tu túnel para n8n

Una vez cargadas las zonas:

1. **Select Zone**: elige el dominio que quieras usar (p. ej., `yourdomain.com`)
2. **Set Subdomain**: introduce el subdominio deseado (p. ej., `ai` → crea `ai.yourdomain.com`)
3. **Set Local URL**: introduce `http://localhost:5678` (el puerto por defecto de n8n)
4. Haz clic en **"Ok"**

![Módulo Cloudflare Tunnel de FlyEnv](https://oss.macphpstudy.com/image/cloud-tunnel-2.webp)

¡Eso es todo! FlyEnv gestiona todo internamente:
- ✅ Crea el Cloudflare Tunnel
- ✅ Configura los registros DNS
- ✅ Establece las reglas de enrutamiento
- ✅ Genera los certificados SSL

### 5.4 Inicia el túnel

Haz clic en el botón **"Start"** del módulo Cloudflare Tunnel.

Tu flujo de trabajo de n8n ahora es accesible en `https://ai.yourdomain.com` desde cualquier lugar del mundo mediante HTTPS: sin despliegue de servidores, sin redirección de puertos, sin configuración de red compleja.

![Módulo Cloudflare Tunnel de FlyEnv](https://oss.macphpstudy.com/image/cloud-tunnel-3.webp)

### Gestiona varios túneles

Crea túneles adicionales para distintos flujos de trabajo o miembros del equipo:

| Subdominio | URL local | Propósito |
|-----------|-----------|---------|
| `ai` | `http://localhost:5678` | Flujo de trabajo principal de IA con n8n |
| `ai-test` | `http://localhost:5678` | Entorno de pruebas |
| `webhook` | `http://localhost:5678/webhook` | Endpoint de webhook público |

Todo gestionado desde una única interfaz: inicia, detén o elimina túneles con un clic.

---

## Ideas de flujos de trabajo avanzados

Una vez que tengas la configuración básica funcionando, explora estos potentes patrones de automatización:

### Analizador de soporte al cliente
Conecta tu CRM o plataforma de chat a n8n, pasa el historial de conversaciones a tu IA local y recibe análisis de sentimiento junto con respuestas sugeridas, todo sin enviar datos de clientes a API externas.

### Bot de revisión de código
Dispara flujos de trabajo desde webhooks de Git, usa DeepSeek Coder para analizar pull requests y publica comentarios automatizados con sugerencias de mejora.

### Pipeline de procesamiento de documentos
Recibe documentos por correo electrónico o subida, extrae texto con OCR local, procésalos con Ollama para resumirlos o clasificarlos, y guarda los resultados en tu base de datos.

### Integración con el hogar inteligente
Combínalo con webhooks de Home Assistant para crear reglas de automatización impulsadas por IA usando comandos en lenguaje natural procesados completamente en local.

---

## Vídeo tutorial

Mira la [demo del flujo con n8n y Ollama](/es/demos?video=n8n-ollama-workflow).

<iframe style="width: 100%; aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/YnA1B3qmDJU?si=8trvnWn7JUxDQeLA" title="Flujo de trabajo de IA autoalojado con n8n y Ollama" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Preguntas frecuentes (FAQ)

### ¿Esta configuración usa menos RAM que Docker?
**A menudo, pero depende de la carga de trabajo.** FlyEnv ejecuta n8n y Ollama directamente en tu sistema y evita una máquina virtual de contenedores. El tamaño del modelo, los flujos de trabajo activos, las bases de datos y la configuración de Docker determinan la diferencia real.

### ¿Puedo usar esto completamente sin conexión?
El webhook local y el modelo de Ollama descargado pueden funcionar sin conexión tras la instalación. Cloudflare Tunnel y los nodos que llaman a servicios remotos requieren internet.

### ¿Puedo conectar varios modelos de IA en un mismo flujo de trabajo?
¡Sí! n8n admite ramificaciones y lógica condicional. Puedes enrutar las peticiones a distintos modelos de Ollama según el tipo de tarea: usa CodeLlama para preguntas de programación, Qwen para conocimiento general, etc.

---

## Próximos pasos

¡Tu plataforma de automatización de IA autoalojada ya está lista! Estos son los próximos pasos recomendados:

- [Configura un asistente de programación sin conexión con Ollama](/es/guide/build-local-offline-ai-agent)
2. **Protege tu configuración** — Lee la [guía de Cloudflare Tunnel](/es/guide/cloudflare-tunnel-local-development) para consejos de despliegue en producción
3. **Descarga FlyEnv** — Si aún no lo has hecho, [consigue la última versión](/es/download) para tu sistema operativo

¿Tienes preguntas o quieres compartir tus creaciones de flujos de trabajo? ¡Únete a nuestra comunidad de [GitHub Discussions](https://github.com/xpf0000/FlyEnv/discussions)!
