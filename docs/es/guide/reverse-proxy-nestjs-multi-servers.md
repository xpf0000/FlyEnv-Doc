---
title: 'Proxy inverso para NestJS y Node.js con Nginx o Caddy'
head:
  - - meta
    - name: description
      content: 'Configura proxies inversos para NestJS, Node.js y Next.js con FlyEnv, incluyendo reenvío de WebSocket, HTTPS y solución de errores 502.'
---

# Configuración de proxy inverso para NestJS, Node.js y Next.js: guía de Nginx, Apache y Caddy

Tu aplicación Node.js funciona perfectamente en localhost:3000. Pero ¿cómo la despliegas correctamente? El acceso directo al puerto es inseguro, gestionar PM2 más reglas de firewall es tedioso, y Docker parece excesivo.

**La solución: un proxy inverso.** Se encarga de la terminación SSL, el balanceo de carga y las URLs limpias mientras tu aplicación Node se concentra en la lógica de negocio. Esta guía muestra configuraciones prácticas de desarrollo local para Nginx, Apache y Caddy, todo gestionado a través de la interfaz visual de FlyEnv. Revisa la seguridad, la capacidad y la observabilidad por separado antes de adaptarlas para producción.

## ¿Por qué usar un proxy inverso?

### Problemas del acceso directo al puerto

```
# What developers often do (wrong)
http://yourserver.com:3000  # Exposes port, no SSL
```

**Problemas:**
- Los firewalls deben abrir puertos no estándar
- Sin cifrado SSL/TLS
- Sin balanceo de carga ni conmutación por error
- Conflictos de puertos entre aplicaciones
- URLs poco atractivas para los usuarios

### Ventajas del proxy inverso

```
# What you should do (right)
https://api.yourapp.com  ->  localhost:3000
https://app.yourapp.com  ->  localhost:3001
```

**Ventajas:**
- ✅ Un solo puerto (80/443) para todas las aplicaciones
- ✅ Certificados SSL automáticos
- ✅ Balanceo de carga entre múltiples instancias
- ✅ Enrutamiento limpio basado en dominios
- ✅ Caché de archivos estáticos
- ✅ Protección DDoS y limitación de velocidad

## Descripción general de la arquitectura

```
User Request
     |
     v
[Cloudflare/Nginx/Apache/Caddy]  <-- Reverse Proxy (SSL, routing)
     |
     +---> Node.js App (port 3000)
     +---> PHP Site (port 80)
     +---> Static Files
     +---> Another Node App (port 3001)
```

## Configuración de proxy inverso con un clic en FlyEnv (recomendado)

FlyEnv proporciona una interfaz visual para configurar proxies inversos, sin necesidad de editar manualmente archivos de configuración. Puedes configurar múltiples reglas de proxy inverso para un mismo sitio con solo unos clics.

### Configurar el proxy inverso en FlyEnv

1. Abre FlyEnv → módulo **Host**
2. Selecciona tu sitio o crea uno nuevo
3. Desplázate hasta la sección **"Reverse Proxy"**
4. Haz clic en **"Add"** para crear una nueva regla de proxy

![Sección de proxy inverso](https://oss.macphpstudy.com/image/host-3.webp)

### Configurar las reglas de proxy

Para cada regla de proxy inverso, configura:

| Campo | Descripción | Ejemplo |
|-------|-------------|---------|
| **Match Path** | Ruta de URL a coincidir | `/api` o `/` |
| **Target URL** | Dirección del servidor backend | `http://127.0.0.1:3000` |

**Configuraciones de ejemplo:**

| Caso de uso | Match Path | Target URL |
|----------|-----------|------------|
| Servidor API | `/api` | `http://127.0.0.1:3000` |
| WebSocket | `/ws` | `http://127.0.0.1:3001` |
| Panel de administración | `/admin` | `http://127.0.0.1:8080` |
| Proxy raíz | `/` | `http://127.0.0.1:3000` |

![Formulario de regla de proxy](https://oss.macphpstudy.com/image/host-3.webp)

### Múltiples reglas de proxy

FlyEnv permite configurar múltiples reglas de proxy inverso para un mismo sitio. Las reglas se evalúan en orden:

1. `/api` → `http://127.0.0.1:3000` (peticiones API)
2. `/admin` → `http://127.0.0.1:3001` (panel de administración)
3. `/` → `http://127.0.0.1:3002` (aplicación principal)

**La prioridad importa**: las rutas más específicas deben ir primero. `/api` debe estar antes que `/`.

![Múltiples reglas de proxy](https://oss.macphpstudy.com/image/host-3.webp)

### Soporte de WebSocket

Habilita el soporte de WebSocket para aplicaciones en tiempo real:

1. Al añadir/editar una regla de proxy
2. Marca la casilla **"WebSocket"**
3. FlyEnv configura automáticamente las cabeceras de upgrade

Esto es esencial para Socket.io, suscripciones de GraphQL y otras funciones en tiempo real.

![Casilla de WebSocket](https://oss.macphpstudy.com/image/host-3.webp)

### Entre bastidores

Cuando guardas las reglas de proxy en FlyEnv, automáticamente:

1. Genera la configuración adecuada de Nginx/Apache/Caddy
2. Añade las cabeceras necesarias (`X-Forwarded-For`, `X-Real-IP`, etc.)
3. Configura las cabeceras de upgrade de WebSocket (si están habilitadas)
4. Recarga el servidor web para aplicar los cambios

No se requiere edición manual de archivos ni reinicios del servidor.

## Configuración manual (avanzado)

Para casos de uso avanzados o requisitos personalizados, puedes editar manualmente los archivos de configuración. A continuación se muestran las configuraciones manuales para cada servidor web.

## Configuración de proxy inverso con Nginx

### Proxy básico para NestJS/Node.js

Edita el vhost de Nginx de tu sitio en FlyEnv:

```nginx
server {
    listen 80;
    server_name api.yourdomain.test;
    
    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        proxy_redirect off;
    }
}
```

**Cabeceras clave explicadas:**
- `Host`: nombre de host original para el alojamiento virtual
- `X-Real-IP`: IP del cliente (para logs/limitación de velocidad)
- `X-Forwarded-*`: indica a tu aplicación que está detrás de un proxy

### Soporte de WebSocket (Socket.io, etc.)

```nginx
location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    # ... other headers
}
```

Las cabeceras `Upgrade` y `Connection` habilitan el paso de WebSocket.

### Caché de archivos estáticos

Sirve los archivos estáticos de Next.js directamente desde Nginx:

```nginx
# Cache static assets
location /_next/static {
    alias /path/to/your/app/.next/static;
    expires 365d;
    access_log off;
}

# Proxy everything else to Node.js
location / {
    proxy_pass http://127.0.0.1:3000;
    # ... headers
}
```

### Múltiples aplicaciones en el mismo dominio

```nginx
server {
    server_name yourdomain.test;
    
    # API -> NestJS
    location /api {
        proxy_pass http://127.0.0.1:3000;
        rewrite ^/api/(.*) /$1 break;
    }
    
    # Admin -> Express
    location /admin {
        proxy_pass http://127.0.0.1:3001;
        rewrite ^/admin/(.*) /$1 break;
    }
    
    # Main -> Next.js
    location / {
        proxy_pass http://127.0.0.1:3002;
    }
}
```

## Configuración de proxy inverso con Apache

### Habilitar los módulos necesarios

En el módulo Apache de FlyEnv, asegúrate de que estos módulos estén habilitados:
- `mod_proxy`
- `mod_proxy_http`
- `mod_proxy_wstunnel` (para WebSockets)
- `mod_rewrite` (opcional)

### Proxy inverso básico

Edita la configuración del vhost de Apache:

```apache
<VirtualHost *:80>
    ServerName api.yourdomain.test
    DocumentRoot "/var/www/html"
    
    ProxyPreserveHost On
    ProxyPass / http://127.0.0.1:3000/
    ProxyPassReverse / http://127.0.0.1:3000/
    
    # Headers
    RequestHeader set X-Real-IP %{REMOTE_ADDR}s
    RequestHeader set X-Forwarded-For %{REMOTE_ADDR}s
    RequestHeader set X-Forwarded-Proto "http"
</VirtualHost>
```

### Soporte de WebSocket

```apache
<VirtualHost *:80>
    ServerName ws.yourdomain.test
    
    # WebSocket proxy
    ProxyPass / ws://127.0.0.1:3000/
    ProxyPassReverse / ws://127.0.0.1:3000/
    
    # Required for Socket.io
    RewriteEngine on
    RewriteCond %{HTTP:Upgrade} websocket [NC]
    RewriteRule ^/?(.*) "ws://127.0.0.1:3000/$1" [P,L]
    RewriteCond %{HTTP:Upgrade} !=websocket [NC]
    RewriteRule ^/?(.*) "http://127.0.0.1:3000/$1" [P,L]
</VirtualHost>
```

### Balanceo de carga (múltiples instancias de Node)

```apache
<Proxy balancer://nodes>
    BalancerMember http://127.0.0.1:3000
    BalancerMember http://127.0.0.1:3001
    BalancerMember http://127.0.0.1:3002
</Proxy>

<VirtualHost *:80>
    ProxyPass / balancer://nodes/
    ProxyPassReverse / balancer://nodes/
</VirtualHost>
```

## Configuración de proxy inverso con Caddy

Caddy simplifica enormemente la configuración del proxy inverso.

### Proxy básico (¡una sola línea!)

```nginx
api.yourdomain.test {
    reverse_proxy localhost:3000
}
```

Eso es todo. Caddy se encarga de:
- HTTP/2 automáticamente
- Upgrades de WebSocket de forma transparente
- HTTPS automático (con Let's Encrypt en producción)
- Reenvío de cabeceras

### Múltiples servicios

```nginx
# API service
api.yourdomain.test {
    reverse_proxy localhost:3000
}

# WebSocket service
ws.yourdomain.test {
    reverse_proxy localhost:3001
}

# Static site with API fallback
app.yourdomain.test {
    root * /var/www/app
    file_server
    
    # API calls go to Node.js
    handle_path /api/* {
        reverse_proxy localhost:3002
    }
    
    # SPA fallback
    try_files {path} {path}/ /index.html
}
```

### Balanceo de carga

```nginx
api.yourdomain.test {
    reverse_proxy localhost:3000 localhost:3001 localhost:3002 {
        lb_policy round_robin
        health_uri /health
        health_interval 30s
    }
}
```

### Personalización de cabeceras

```nginx
api.yourdomain.test {
    reverse_proxy localhost:3000 {
        header_up Host {host}
        header_up X-Real-IP {remote}
        header_up X-Forwarded-For {remote}
        header_up X-Forwarded-Proto {scheme}
        
        # Custom header for your app
        header_up X-Proxy-Server "Caddy"
    }
}
```

## Consideraciones específicas por framework

### NestJS

**Confiar en las cabeceras del proxy:**
```typescript
// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Trust proxy headers from Nginx/Apache/Caddy
  app.set('trust proxy', true);
  
  await app.listen(3000);
}
```

**Prefijo global para rutas /api:**
```typescript
app.setGlobalPrefix('api');
// Now your routes are /api/users, not /users
```

### Next.js

**Servidor personalizado consciente del proxy:**
```javascript
// server.js
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const app = next({ dev: false });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    
    // Trust X-Forwarded-Proto for HTTPS detection
    if (req.headers['x-forwarded-proto'] === 'https') {
      req.isSecure = true;
    }
    
    handle(req, res, parsedUrl);
  }).listen(3000);
});
```

### Express.js

```javascript
const express = require('express');
const app = express();

// Trust proxy
app.set('trust proxy', true);

// Now req.ip shows real client IP, not proxy IP
app.get('/', (req, res) => {
  res.json({
    ip: req.ip,
    forwarded: req.headers['x-forwarded-for']
  });
});
```

## Lista de verificación para producción

### Configuración SSL/HTTPS

**Con Auto SSL de FlyEnv:**
1. Habilita SSL en la configuración del Host
2. Usa HTTPS en las cabeceras del proxy: `X-Forwarded-Proto https`

**Certificado manual:**
```nginx
# Nginx
listen 443 ssl;
ssl_certificate /path/to/cert.pem;
ssl_certificate_key /path/to/key.pem;
```

### Gestión de procesos

Usa PM2 para mantener Node.js en ejecución:

```bash
# Install PM2
npm install -g pm2

# Start with PM2
pm2 start app.js --name "api-server"
pm2 startup
pm2 save
```

### Comprobaciones de salud

Añade un endpoint de salud sencillo:

```javascript
// NestJS
@Get('health')
health() {
  return { status: 'ok', timestamp: new Date() };
}

// Express
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});
```

Configura el proxy para comprobar este endpoint en el balanceo de carga.

## Solución de problemas

### Errores "Cannot GET /"

**Causa**: la reescritura de rutas no está configurada

**Solución**:
```nginx
# Remove /api prefix before proxying
rewrite ^/api/(.*) /$1 break;
```

### La conexión WebSocket falla

**Causa**: faltan las cabeceras de upgrade

**Solución**: asegúrate de que se pasen tanto la cabecera `Upgrade` como `Connection`

### "502 Bad Gateway"

**Causas:**
1. La aplicación Node.js no se está ejecutando en el puerto especificado
2. El firewall bloquea la conexión a localhost
3. Dirección IP incorrecta en proxy_pass

**Depuración:**
```bash
# Check if app is listening
netstat -tlnp | grep 3000

# Test direct connection
curl http://127.0.0.1:3000
```

### Bucles de redirección infinitos

**Causa**: problemas de detección del protocolo

**Solución**: asegúrate de que `X-Forwarded-Proto` esté configurada y de que tu aplicación la respete

### La IP del cliente aparece como 127.0.0.1

**Causa**: la cabecera `X-Forwarded-For` no se pasa o no es de confianza

**Solución**: configura tanto las cabeceras del proxy como los ajustes de confianza de la aplicación

## Preguntas frecuentes (FAQ)

**P: ¿Cuál es el mejor proxy inverso?**

R: Para principiantes, Caddy es el más fácil. Para máxima compatibilidad, Nginx es el estándar de la industria. Apache funciona bien si ya lo estás usando para PHP.

**P: ¿Puedo usar múltiples proxies inversos?**

R: Sí. Patrón común: Cloudflare (edge) -> Nginx (servidor) -> Node.js (aplicación).

**P: ¿Cómo escalo a múltiples servidores?**

R: Usa un balanceador de carga (AWS ALB, Nginx Plus o HAProxy) que distribuya entre varios servidores de aplicaciones.

**P: ¿Debo usar PM2 con un proxy inverso?**

R: Sí. PM2 gestiona los fallos de los procesos; el proxy inverso gestiona las conexiones de los clientes. Se complementan entre sí.

**P: ¿Puedo hacer proxy a servidores remotos?**

R: Sí. Cambia `127.0.0.1` por cualquier dirección IP. Útil para arquitecturas de microservicios.

**P: ¿Cómo gestiono las subidas de archivos?**

R: Aumenta `client_max_body_size` en Nginx o `LimitRequestBody` en Apache.

## Comparación resumida

| Función | Nginx | Apache | Caddy |
|---------|-------|--------|-------|
| **Configuración** | Moderada | Verbose | Simple |
| **Soporte WebSocket** | Manual | Basado en módulos | Automático |
| **HTTPS automático** | Requiere Certbot | Requiere Certbot | Integrado |
| **Rendimiento** | Excelente | Bueno | Excelente |
| **Curva de aprendizaje** | Media | Media | Baja |
| **Integración PHP** | FastCGI | mod_php | FastCGI |

¿Listo para configurar tu primer proxy inverso? Empieza con la [configuración de Host de FlyEnv](/es/guide/host) para crear tu sitio y luego aplica las configuraciones anteriores.

¿Necesitas exponer tu desarrollo local a internet? Consulta nuestra [guía de Cloudflare Tunnel](/es/guide/cloudflare-tunnel-local-development) para obtener URLs públicas seguras.
