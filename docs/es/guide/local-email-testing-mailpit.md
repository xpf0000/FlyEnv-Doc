---
title: 'Pruebas de email en local sin Mailhog: guía de configuración de Mailpit'
head:
  - - meta
    - name: description
      content: 'Usa Mailpit en FlyEnv para capturar, previsualizar y probar el email de tus aplicaciones en local sin enviar mensajes a destinatarios reales.'
---

# Pruebas de email en local sin Mailhog: guía de configuración de Mailpit

Probar la funcionalidad de email durante el desarrollo es una pesadilla. No puedes enviar emails reales (riesgo de spam), las APIs de email externas son lentas, y ese proyecto abandonado, Mailhog, dejó de funcionar en tu Mac nuevo.

**Te presentamos Mailpit**: una herramienta de pruebas de email moderna y con mantenimiento activo que es más rápida, más bonita y que funciona de verdad en Apple Silicon. Y está integrada directamente en FlyEnv.

## El problema de Mailhog (y por qué necesitas una alternativa)

Mailhog fue durante años la herramienta de referencia para probar email en local. Pero:
- **Proyecto abandonado** — última actualización relevante en 2021
- **Sin soporte para Apple Silicon** — requiere Rosetta en Macs M1/M2/M3
- **Fugas de memoria** — consume cada vez más RAM con el tiempo
- **Interfaz web tosca** — no ha envejecido bien

Mailpit es el reemplazo moderno: mismo concepto, mejor ejecución.

## ¿Qué es Mailpit?

Mailpit es una herramienta de pruebas de email y SMTP con un servidor SMTP falso. Mailpit:
- Captura los emails salientes de tu aplicación
- Los muestra en una interfaz web para previsualizarlos
- Admite renderizado HTML, visualización de adjuntos y acceso por API
- Se ejecuta en local: nada sale de tu máquina

Piensa en él como un "agujero negro" para los emails de desarrollo.

## Mailpit frente a Mailhog: comparación de funciones

| Función | Mailhog (heredado) | **Mailpit** |
|---------|-----------------|-------------|
| **Desarrollo activo** | No | Sí |
| **Apple Silicon** | Emulado | ARM64 nativo |
| **UI moderna** | Anticuada | Limpia y responsive |
| **Vista previa HTML** | Básica | Avanzada con vista móvil |
| **Modo oscuro** | No | Sí |
| **API** | Limitada | REST API + WebSocket |
| **Persistencia de mensajes** | Solo en memoria | SQLite/base de datos |
| **SMTP relay** | No | Reenvío a SMTP real |

## Configurar Mailpit en FlyEnv

### Paso 1: Instala Mailpit

FlyEnv lo hace trivial:

1. Abre FlyEnv -> módulo Mailpit
2. Selecciona la versión (se recomienda la más reciente)
3. Haz clic en **Install**

![Instalación de Mailpit](https://oss.macphpstudy.com/image/mailpit-1.webp)

### Paso 2: Configura tu aplicación

Apunta la configuración SMTP de tu aplicación a Mailpit:

**Para PHP (Laravel/Symfony/WordPress):**
```ini
MAIL_MAILER=smtp
MAIL_HOST=127.0.0.1
MAIL_PORT=1025
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null
```

**Para Node.js (Nodemailer):**
```javascript
const transporter = nodemailer.createTransport({
  host: '127.0.0.1',
  port: 1025,
  secure: false
});
```

**Para Python (Django):**
```python
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = '127.0.0.1'
EMAIL_PORT = 1025
```

**Para Ruby on Rails:**
```yaml
config.action_mailer.delivery_method = :smtp
config.action_mailer.smtp_settings = {
  address: '127.0.0.1',
  port: 1025
}
```

### Paso 3: Inicia el servicio Mailpit

En el módulo Mailpit de FlyEnv, haz clic en el botón de inicio.

![Servicio Mailpit](https://oss.macphpstudy.com/image/mailpit-2.webp)

Puntos de acceso por defecto:
- **Servidor SMTP**: 127.0.0.1:1025 (captura emails)
- **Interfaz web**: http://127.0.0.1:8025 (ver emails)

### Paso 4: Prueba la captura de emails

Envía un email de prueba desde tu aplicación. Abre http://127.0.0.1:8025 para ver los mensajes capturados.

## Usar Mailpit para las pruebas de email

### Vista previa de emails HTML

Haz clic en cualquier mensaje para ver:
- **Vista previa HTML** — renderizado exactamente como lo ven los destinatarios
- **Vista de texto plano** — contenido de respaldo
- **Vista de código fuente** — cabeceras y cuerpo del email en crudo
- **Vista previa móvil** — pruebas de diseño responsive

### Gestión de adjuntos

Mailpit muestra los adjuntos en línea:
- Imágenes renderizadas como miniaturas
- PDFs y documentos disponibles para descargar
- Límites de tamaño configurables

### Acceso por API

Automatiza las pruebas de email en tu suite de tests:

```javascript
// Example: Checking email was sent
const waitForEmail = async () => {
  const response = await fetch('http://127.0.0.1:8025/api/v1/messages');
  const data = await response.json();
  return data.messages.find(m => m.To[0].Address === 'user@example.com');
};
```

## Funciones avanzadas

### Reenvío de mensajes

¿Necesitas recibir un email de verdad? Configura el relay en los ajustes de FlyEnv para reenviar emails concretos a servidores SMTP reales.

### Persistencia de mensajes

A diferencia del almacenamiento en memoria de Mailhog, Mailpit usa SQLite por defecto:
- Los emails sobreviven a los reinicios
- Configura políticas de retención
- Exporta el historial de mensajes

## Integración con frameworks populares

### Laravel

Asegúrate de que el archivo .env apunta a Mailpit:
```ini
MAIL_HOST=127.0.0.1
MAIL_PORT=1025
```

### WordPress

Añade a wp-config.php o a un plugin:
```php
add_action('phpmailer_init', function($phpmailer) {
    $phpmailer->isSMTP();
    $phpmailer->Host = '127.0.0.1';
    $phpmailer->Port = 1025;
    $phpmailer->SMTPAuth = false;
});
```

### Symfony

```yaml
framework:
    mailer:
        dsn: 'smtp://127.0.0.1:1025'
```

## Solución de problemas

### Errores de conexión rechazada

1. Comprueba que Mailpit está en ejecución en FlyEnv
2. Comprueba que el puerto 1025 no esté en uso por otro servicio
3. Asegúrate de que el firewall permite las conexiones a localhost

### Los emails no aparecen

1. Comprueba la configuración SMTP de tu aplicación
2. Revisa los logs de Mailpit para ver los intentos de conexión
3. Asegúrate de usar el puerto correcto (1025 para SMTP, no 8025)

## Preguntas frecuentes (FAQ)

**P: ¿Mailpit es gratuito?**

R: Sí. Completamente gratuito y open-source, igual que Mailhog, pero con mantenimiento activo.

**P: ¿Funciona en Windows?**

R: Por supuesto. FlyEnv ofrece binarios nativos para Windows, además de soporte para macOS y Linux.

**P: ¿Puedo reenviar emails a mi bandeja de entrada real?**

R: Sí. Mailpit admite SMTP relay para reenviar emails concretos a direcciones reales.

**P: ¿Cuánto tiempo se guardan los emails?**

R: Por defecto, Mailpit los guarda en SQLite de forma indefinida. Configura la retención en los ajustes.

**P: ¿Admite adjuntos?**

R: Sí. Imágenes, PDFs, documentos: todos se pueden previsualizar y descargar.

**P: ¿Puedo usarlo para pruebas de carga?**

R: Sí. Mailpit maneja volúmenes altos mejor de lo que Mailhog jamás lo hizo.

## ¿Listo para mejorar tus pruebas de email?

Deja de pelear con software abandonado. Mailpit en FlyEnv te ofrece pruebas de email modernas y fiables que simplemente funcionan.

[Descarga FlyEnv](/es/download) para empezar con el soporte integrado de Mailpit.

Descubre más herramientas de desarrollo en nuestra sección de [Herramientas de IA y productividad](/es/guide/build-local-offline-ai-agent).
