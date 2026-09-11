---
title: 'Flujos de trabajo de IA autoalojados con n8n y Ollama'
head:
  - - meta
    - name: description
      content: 'Crea automatización de IA privada y local con n8n y Ollama en FlyEnv, incluyendo servicios nativos, HTTPS y acceso remoto controlado.'
---

# Crea flujos de trabajo de IA autoalojados con n8n y Ollama (sin Docker)

¿Cansado de pagar cuotas mensuales por herramientas de automatización con IA como Zapier o Coze? ¿Te preocupa enviar datos sensibles a servicios en la nube de terceros? Muchos desarrolladores quieren crear flujos de trabajo impulsados por IA, pero se atascan con configuraciones complejas de Docker, pesadillas de configuración manual y preocupaciones constantes sobre la privacidad de los datos.

Esta guía te muestra cómo crear un flujo de trabajo de IA completamente autoalojado y capaz de funcionar sin conexión usando **n8n** (la alternativa open-source a Zapier) y **Ollama** (ejecutor de LLM locales), todo gestionado sin esfuerzo con FlyEnv. Sin Docker, sin dependencias de la nube, e incluso puedes exponer tus flujos de trabajo a internet de forma segura cuando lo necesites.

---

## Por qué importan los flujos de trabajo de IA autoalojados

| Herramientas de automatización en la nube | Autoalojado con FlyEnv |
|------------------------|-------------------------|
| Cuotas de suscripción mensuales | Configuración única, gratis para siempre |
| Datos enviados a servidores de terceros | 100% privado, se ejecuta localmente |
| Personalización limitada | Control total sobre los flujos de trabajo |
| Requiere conexión a internet | Funciona completamente sin conexión |
| Límites de peticiones a la API complejos | Llamadas a la API local ilimitadas |

FlyEnv ejecuta n8n y Ollama como procesos locales, evitando la sobrecarga base de la máquina virtual de Docker Desktop. El uso real de recursos depende del modelo seleccionado, los flujos de trabajo y los servicios.

---

## Requisitos previos

Antes de empezar, asegúrate de tener:

1. **FlyEnv instalado** en macOS, Windows o Linux ([Descárgalo aquí](/es/download))
2. Familiaridad básica con los conceptos de automatización de flujos de trabajo
3. Al menos 8 GB de RAM (se recomiendan 16 GB para modelos de IA más grandes)

---

## Paso 1: Instala e inicia n8n

FlyEnv incluye n8n como módulo integrado, lo que elimina la necesidad de configurar Node.js manualmente o usar contenedores Docker.

1. Abre FlyEnv y ve a la sección **Tools**
2. Busca **n8n** en la lista de módulos disponibles
3. Haz clic en **Install**: FlyEnv gestiona automáticamente todas las dependencias
4. Una vez instalado, haz clic en **Start** para lanzar el servicio n8n

![Módulo n8n en FlyEnv](https://oss.macphpstudy.com/image/n8n-1.webp)

![Módulo n8n en FlyEnv](https://oss.macphpstudy.com/image/n8n-2.webp)

5. Accede a la interfaz web de n8n en `http://localhost:5678`

![Panel de n8n](https://oss.macphpstudy.com/image/n8n-3.webp)

> **Consejo:** FlyEnv gestiona el runtime de Node.js automáticamente. No tienes que preocuparte por conflictos de versiones ni por paquetes npm globales.

---

## Paso 2: Instala Ollama y descarga modelos de IA

Ahora vamos a configurar el cerebro de IA de tu flujo de trabajo usando Ollama.

1. En FlyEnv, ve a la sección **AI Tools**
2. Selecciona **Ollama** y haz clic en **Install**
3. Inicia el servicio Ollama
4. Descarga tu modelo preferido. Elige en función de las especificaciones de tu ordenador. Consulta [Crea un agente de IA local sin conexión](/es/guide/build-local-offline-ai-agent) para más detalles.

![Módulo Ollama en FlyEnv](https://oss.macphpstudy.com/image/n8n-4.webp)

![Modelos disponibles en Ollama](https://oss.macphpstudy.com/image/n8n-5.webp)

Los modelos disponibles incluyen:
- **Qwen 3.5** - Excelente para tareas generales y programación
- **Kimi k2.5** - Genial para tareas generales y programación
- **Gemma 3** - Los modelos abiertos y eficientes de Google
- **Llama 4** - Lo último de Meta, con gran capacidad de razonamiento
- **DeepSeek Coder** - Especializado en tareas de programación

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
   - **Base URL:** `http://localhost:11434` (el valor por defecto de Ollama)
   - **Model:** selecciona el modelo que descargaste (p. ej., `qwen3.5`)

3. Configura la plantilla de mensaje:
   - En el campo **Messages**, añade un mensaje de usuario
   - Para el **Content**, usa una expresión para capturar la entrada del webhook: `\{\{ $json.query?.q ?? $json.body?.q ?? 'Hello' \}\}`

![Configuración del nodo Ollama](https://oss.macphpstudy.com/image/n8n-8.webp)

![Configuración del nodo Ollama](https://oss.macphpstudy.com/image/n8n-9.webp)

### 3.3 Prueba tu flujo de trabajo

1. Guarda el flujo de trabajo y actívalo con el interruptor **Active**
2. Copia la URL del webhook (n8n proporciona URL de prueba y de producción)
3. Prueba con curl o cualquier cliente HTTP:
   ```bash
   curl -X POST "http://localhost:5678/webhook/ai-assistant" \
     -H "Content-Type: application/json" \
     -d '{"q": "Explain the benefits of local AI workflows"}'
   ```

4. ¡Deberías recibir una respuesta generada por tu modelo de IA local!

---

## Paso 4: Activa HTTPS con proxy inverso

Para uso en producción o acceso externo, necesitas HTTPS. El gestor de sitios integrado de FlyEnv lo hace trivial.

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

¿Quieres acceder a tu flujo de trabajo de IA de forma remota? El módulo Cloudflare Tunnel de FlyEnv puede publicarlo sin abrir puertos de entrada en el firewall. Los túneles con nombre pueden usar nombres de host personalizados estables cuando tu cuenta de Cloudflare y tu zona DNS están configuradas; los límites del plan siguen sujetos a las condiciones vigentes de Cloudflare.

| Característica | ngrok Free | **Cloudflare Tunnel** |
|---------|------------|----------------------|
| Dominios personalizados | ❌ URL aleatorias | ✅ GRATIS |
| Nombre de host personalizado estable | Plan de pago o dominio reservado | Disponible con un túnel con nombre configurado |
| Límites de ancho de banda | 1 GB/mes | Ilimitado GRATIS |
| Configuración en FlyEnv | CLI manual | **Interfaz con un clic** |

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

¿Prefieres verlo? Mira "Build a 100% Free Self-Hosted AI Workflow: n8n + Ollama (No Docker!)" a través de FlyEnv en acción:

<iframe style="width: 100%; aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/YnA1B3qmDJU?si=8trvnWn7JUxDQeLA" title="Flujo de trabajo de IA autoalojado con n8n y Ollama" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Preguntas frecuentes (FAQ)

### ¿Esta configuración usa menos RAM que Docker?
**A menudo, pero depende de la carga de trabajo.** FlyEnv ejecuta n8n y Ollama directamente en tu sistema y evita una máquina virtual de contenedores. El tamaño del modelo, los flujos de trabajo activos, las bases de datos y la configuración de Docker determinan la diferencia real.

### ¿Puedo usar esto completamente sin conexión?
**Por supuesto.** Una vez instalados n8n y Ollama, todo el flujo de trabajo se ejecuta localmente sin conexión a internet. Es ideal para entornos aislados (air-gapped) o aplicaciones sensibles a la privacidad.

### ¿Es n8n con Ollama mejor que las herramientas de automatización de pago?
Para los desarrolladores que quieren control local: **a menudo sí.** n8n autoalojado y los modelos locales pueden reducir los costes recurrentes de servicios y mantener los datos seleccionados en tu máquina, pero las API de terceros, los servicios de mensajería y la infraestructura pueden seguir teniendo sus propios límites o tarifas. La contrapartida es la autogestión, que FlyEnv simplifica.

### ¿Cómo se compara Cloudflare Tunnel con ngrok?
Cloudflare Tunnel (mediante la integración de FlyEnv) ofrece URL persistentes, dominios personalizados, SSL integrado y es completamente gratuito para uso personal, a diferencia de las URL aleatorias y los límites de conexión de ngrok. Además, no requiere instalar software adicional más allá de FlyEnv.

### ¿Puedo conectar varios modelos de IA en un mismo flujo de trabajo?
¡Sí! n8n admite ramificaciones y lógica condicional. Puedes enrutar las peticiones a distintos modelos de Ollama según el tipo de tarea: usa CodeLlama para preguntas de programación, Qwen para conocimiento general, etc.

---

## Próximos pasos

¡Tu plataforma de automatización de IA autoalojada ya está lista! Estos son los próximos pasos recomendados:

1. **Explora más herramientas de IA** — Aprende a [crear agentes de IA sin conexión](/es/guide/build-local-offline-ai-agent) con capacidades RAG completas
2. **Protege tu configuración** — Lee la [guía de Cloudflare Tunnel](/es/guide/cloudflare-tunnel-local-development) para consejos de despliegue en producción
3. **Descarga FlyEnv** — Si aún no lo has hecho, [consigue la última versión](/es/download) para tu sistema operativo

¿Tienes preguntas o quieres compartir tus creaciones de flujos de trabajo? ¡Únete a nuestra comunidad de [GitHub Discussions](https://github.com/xpf0000/FlyEnv/discussions)!
