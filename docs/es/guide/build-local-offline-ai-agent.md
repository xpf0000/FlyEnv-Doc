---
title: 'Crea un agente de IA offline con Ollama, Qwen y Llama'
head:
  - - meta
    - name: description
      content: 'Ejecuta modelos de IA en local con Ollama y FlyEnv para obtener ayuda de programación sin conexión usando Qwen, DeepSeek o Llama en tu propio hardware.'
---

# Crea un agente de IA offline y privado en local (Qwen, DeepSeek, Llama)

Cada línea de código que envías a ChatGPT o GitHub Copilot sale de tu máquina. Para bases de código propietarias, aplicaciones sanitarias o sistemas financieros, esto es un problema insalvable. Pero ejecutar IA en local antes requería un doctorado en machine learning.

**Ya no.** Con Ollama y FlyEnv, puedes ejecutar modelos de lenguaje de última generación completamente sin conexión: en minutos, no en días.

## Por qué importa la IA offline

### El problema de privacidad de la IA en la nube

Cuando usas asistentes de programación con IA basados en la nube:
- Tu código propietario viaja a servidores externos
- Los datos de entrenamiento pueden retener fragmentos sensibles
- Infracciones de cumplimiento normativo (HIPAA, GDPR, SOC2)
- La latencia de red ralentiza las respuestas
- Los costes de API se acumulan

### La ventaja de la IA offline

| Aspecto | IA en la nube | IA local (Ollama) |
|--------|----------|-------------------|
| Privacidad de datos | Se envía a terceros | Nunca sale de tu máquina |
| Requiere internet | Sí | No |
| Velocidad de respuesta | 500ms-2s | 50-500ms (local) |
| Coste mensual | 10-20 $/usuario | Gratis |
| Personalización | Limitada | Control total del modelo |
| Cumplimiento normativo | Complejo | Sencillo |

## Qué vas a construir

Un asistente de IA totalmente local capaz de:
- Responder preguntas de programación
- Explicar funciones complejas
- Generar fragmentos de código
- Revisar pull requests
- Todo sin conexión a internet

## Requisitos previos

### Requisitos de hardware

| Tamaño del modelo | RAM necesaria | Ideal para |
|------------|--------------|----------|
| 3B parámetros | 4GB | Ayuda básica de programación |
| 7B parámetros | 8GB | Desarrollo general |
| 13B parámetros | 16GB | Razonamiento complejo |
| 70B parámetros | 64GB+ | Nivel empresarial |

**Recomendado**: 16GB+ de RAM para una ayuda de programación versátil

### Software

- FlyEnv instalado (macOS, Windows o Linux)
- ~10GB de espacio libre en disco para los modelos

## Configuración paso a paso

### Paso 1: Instala Ollama

FlyEnv lo hace tan simple como un clic:

1. Abre FlyEnv
2. Ve al módulo **Ollama**
3. Haz clic en **Install**

![Instalación de Ollama](https://oss.macphpstudy.com/image/ollama-1.webp)

Ollama se instala como un servicio nativo: sin contenedores Docker, sin entornos Python que configurar.

### Paso 2: Inicia el servicio Ollama

En el módulo Ollama:

1. Haz clic en el botón **Start**
2. Comprueba que el estado del servicio muestra "Running"

![Servicio Ollama](https://oss.macphpstudy.com/image/ollama-2.png)

La API de Ollama ya está disponible en `http://127.0.0.1:11434`

### Paso 3: Descarga los modelos de IA

FlyEnv ofrece acceso fácil a los modelos más populares:

| Modelo | Tamaño | Puntos fuertes |
|-------|------|-----------|
| **DeepSeek-R1** | 7B-70B | Generación de código, razonamiento |
| **Llama 3.3** | 8B-70B | Propósito general, equilibrado |
| **Qwen 2.5** | 7B-72B | Multilingüe, programación |
| **Phi-4** | 14B | Modelo de investigación de Microsoft |
| **Mixtral** | 8x7B | Mezcla de expertos |

**Para instalar un modelo:**

1. En el módulo Ollama, cambia a la pestaña **Models**
2. Selecciona un modelo (empieza con 7B si tienes 16GB de RAM)
3. Haz clic en **Pull**

El progreso de la descarga se muestra en tiempo real. La primera descarga puede tardar entre 10 y 30 minutos según el tamaño del modelo y tu conexión.

![Instalación de modelos](https://oss.macphpstudy.com/image/ollama-3.png)

**Consejo**: Empieza con Qwen 2.5 7B o DeepSeek-R1 7B para obtener una excelente ayuda de programación sin un consumo masivo de recursos.

### Paso 4: Activa la interfaz del asistente de IA

1. Abre **Settings** (Configuración) de FlyEnv
2. Busca la sección **AI Assistant**
3. Activa **Enable AI Assistant**

![Configuración del asistente de IA](https://oss.macphpstudy.com/image/ollama-4.png)

### Paso 5: Abre la interfaz de chat

Haz clic en el icono de **AI Assistant** en la esquina inferior derecha:

![Icono del asistente de IA](https://oss.macphpstudy.com/image/ollama-5.png)

La interfaz de chat se abre, lista para usar.

### Paso 6: Configura la conexión con Ollama

En el panel del asistente de IA:

1. Haz clic en **Settings** (icono de engranaje)
2. Establece la URL de la API: `http://127.0.0.1:11434`
3. Selecciona tu modelo instalado en el desplegable
4. Haz clic en **Save**

![Configuración de Ollama](https://oss.macphpstudy.com/image/ollama-6.png)

**Configuración para equipos**: Para recursos de IA compartidos, introduce la IP del servidor Ollama de un compañero. Una única estación de trabajo potente puede dar servicio a todo el equipo.

### Paso 7: Empieza tu primer chat

Haz clic en **New Chat** y pregunta lo que quieras:

```
You: Explain this PHP function: array_reduce()
AI: array_reduce() iteratively reduces an array to a single value using a callback function...

You: Generate a React component for a modal dialog
AI: [Generates complete, styled component code]
```

![Interfaz de chat](https://oss.macphpstudy.com/image/ollama-7.png)

![Interfaz de chat 2](https://oss.macphpstudy.com/image/ollama-8.png)

## Uso de la IA en flujos de trabajo de desarrollo

### Explicación de código

Pega código complejo y pide una explicación:
```
"Explain what this Laravel Eloquent query does..."
"What is the time complexity of this algorithm?"
"How does this recursive function work?"
```

### Generación de código

Genera código repetitivo rápidamente:
```
"Create a NestJS controller for user CRUD operations"
"Write a Python script to parse CSV and insert to MySQL"
"Generate a Docker Compose file for PHP, MySQL, Redis"
```

### Revisión de código

Pega código para recibir feedback al instante:
```
"Review this function for security issues"
"How can I optimize this database query?"
"Is this the idiomatic way to do this in Go?"
```

### Ayuda para aprender

```
"Explain React hooks like I'm 5"
"What's the difference between var, let, and const?"
"Teach me about dependency injection in PHP"
```

## Funciones avanzadas

### Prompts basados en roles

El asistente de IA admite diferentes personalidades:

1. Haz clic en el selector de **Role**
2. Elige entre los preajustes:
   - **Code Reviewer**: Análisis crítico de la calidad del código
   - **Teacher**: Explicaciones pacientes de los conceptos
   - **Architect**: Consejos de diseño de sistemas a alto nivel
   - **Debugger**: Centrado en encontrar y corregir errores

3. O crea roles personalizados:
   ```
   Role: Laravel Expert
   Prompt: You are a senior Laravel developer with 10 years experience. 
   Provide best-practice solutions and explain the "Laravel way."
   ```

![Selección de rol](https://oss.macphpstudy.com/image/ollama-10.png)

### Acciones sobre las respuestas

Cada respuesta de la IA ofrece:
- **Copy**: Copiar bloques de código o la respuesta completa
- **Read Aloud**: Texto a voz para accesibilidad
- **Regenerate**: Probar una respuesta diferente
- **Continue**: Ampliar respuestas parciales

![Acciones sobre las respuestas](https://oss.macphpstudy.com/image/ollama-9.png)

### Comparación de varios modelos

Ejecuta distintos modelos en paralelo:

1. Abre varias pestañas de chat
2. Configura cada una con un modelo diferente
3. Haz la misma pregunta
4. Compara las respuestas

Esto te ayuda a identificar qué modelo funciona mejor para tu caso de uso concreto.

## Optimización del rendimiento

### Tamaño del modelo frente a calidad

| Caso de uso | Modelo recomendado | Tiempo de respuesta |
|----------|------------------|---------------|
| Consultas rápidas | Qwen 2.5 3B | <100ms |
| Programación diaria | DeepSeek-R1 7B | 200-500ms |
| Arquitectura compleja | Llama 3.3 13B | 500ms-1s |
| Revisión de código | Qwen 2.5 32B | 1-3s |

### Aceleración por GPU

En macOS, Ollama utiliza automáticamente el Neural Engine de Apple Silicon.

En Linux/Windows con GPU NVIDIA:
```bash
# Ollama uses CUDA automatically if available
# Verify GPU usage:
ogpu-smi  # or nvidia-smi
```

### Gestión de modelos

Libera espacio en disco eliminando los modelos que no uses:

```bash
# In terminal
ollama rm llama2:13b  # Remove specific model
ollama list            # See installed models
```

## Preguntas frecuentes (FAQ)

**P: ¿Es esto realmente completamente offline?**

R: Sí. Una vez descargados los modelos, no se necesita conexión a internet. Tus datos nunca salen de tu máquina.

**P: ¿Cómo se compara con GitHub Copilot?**

R: Copilot ofrece integración con el IDE y entrenamiento con código público. La IA local ofrece privacidad y coste cero. Muchos desarrolladores usan ambos: Copilot para proyectos públicos, IA local para trabajo propietario.

**P: ¿Puedo usar mis propios modelos ajustados (fine-tuned)?**

R: Sí. Ollama admite modelos en formato GGUF. Colócalos en el directorio de modelos de Ollama.

**P: ¿Por qué la calidad de las respuestas es inferior a ChatGPT?**

R: Los modelos locales de 7B son más pequeños que GPT-4. Para tareas de programación, son sorprendentemente capaces. Para razonamiento complejo, los modelos más grandes (13B-70B) reducen la diferencia significativamente.

**P: ¿Puede la IA acceder a los archivos de mi proyecto?**

R: No automáticamente. Tú pegas el código en el chat. Futuras versiones de FlyEnv podrían añadir integración con el IDE.

**P: ¿Es legal para uso comercial?**

R: Sí. Modelos como Llama, Qwen y DeepSeek tienen licencias permisivas para aplicaciones comerciales.

**P: ¿Cuánta electricidad consume?**

R: Muy poca. La inferencia por CPU usa ~10-30W. La inferencia por GPU usa 50-150W solo durante el uso activo.

## Flujo de trabajo de desarrollo con privacidad ante todo

1. **Código propietario**: Usa IA local exclusivamente
2. **Proyectos open source**: Puedes usar cualquiera de las dos
3. **Trabajo para clientes**: Usa siempre IA local para su código
4. **Aprendizaje**: IA local para documentación y tutoriales

## ¿Listo para programar con IA y privacidad?

Toma el control de tus datos de desarrollo. Configura tu asistente de IA offline en minutos.

[Descarga FlyEnv](/es/download) con soporte integrado para Ollama

---

## 🚀 Siguiente nivel: del chat a la automatización

¿Te gusta tu asistente de IA privado? Llévalo más lejos construyendo **flujos de trabajo de IA automatizados** que funcionen 24/7 sin tu intervención.

**Lo que conseguirás:**
- **Webhooks** — Activa el procesamiento con IA desde aplicaciones externas (Slack, GitHub, Stripe)
- **Automatización de flujos de trabajo** — Encadena varias acciones de IA en pipelines
- **Endpoints de API** — Da a tus aplicaciones acceso a modelos de IA locales
- **Acceso remoto** — Controla tus flujos de trabajo de IA desde cualquier lugar

👉 **[Construye flujos de trabajo de IA autoalojados con n8n y Ollama](/es/guide/build-local-ai-workflow-by-n8n)** — Convierte tu IA offline en una potente herramienta de automatización

---

## 🤖 Construye un agente de IA que pasa a la acción

¿Quieres una IA que no solo chatee, sino que realmente **haga cosas** por ti? OpenClaw conecta tu IA local con aplicaciones de mensajería y le da el poder de:

- **Leer/escribir archivos** en tu ordenador
- **Ejecutar comandos** y lanzar scripts
- **Enviar mensajes** por WhatsApp, Telegram, Discord
- **Hacer peticiones HTTP** e interactuar con APIs

👉 **[Guía de configuración de OpenClaw + Ollama](/es/guide/openclaw)** — Construye un agente de IA autoalojado alrededor de un modelo local

---

Explora más herramientas de productividad:
- [Ofuscación de código PHP](/es/guide/php-code-obfuscation) — Protege tu código
- [Cloudflare Tunnel](/es/guide/cloudflare-tunnel-local-development) — Compartición segura
- [Gestión de versiones de proyectos](/es/guide/manage-multiple-node-php-versions) — Flujos de trabajo optimizados
