---
title: 'Dominios personalizados y HTTPS automático con FlyEnv'
head:
  - - meta
    - name: description
      content: 'Configura un entorno de desarrollo local profesional con dominios personalizados y certificados SSL automáticos. Aprende a usar dominios .test con HTTPS en FlyEnv sin advertencias del navegador.'
---

# Dominios personalizados y SSL automático para el desarrollo local: guía completa

Acceder a tu proyecto en `http://localhost:8080/myproject` da mala imagen cuando lo compartes con clientes. Los desarrolladores profesionales usan dominios limpios como `https://clientproject.test`, con certificados SSL válidos en los que los navegadores confían.

Esta guía te muestra cómo configurar dominios locales personalizados con HTTPS automático, para que tu entorno de desarrollo sea indistinguible del de producción.

## Por qué importan los dominios personalizados

### El problema de las URLs localhost:puerto

```
❌ http://localhost:3000
❌ http://127.0.0.1:8080/project
❌ http://192.168.1.50:9000
```

**Problemas:**
- Difíciles de recordar
- Números de puerto en las URLs
- Conflictos de cookies entre proyectos
- Problemas de CORS al probar APIs
- Sin HTTPS para probar funciones seguras

### El enfoque profesional

```
✅ https://myapp.test
✅ https://api.myapp.test
✅ https://admin.myapp.test
```

**Ventajas:**
- URLs limpias y fáciles de recordar
- Cookies y almacenamiento por proyecto
- Pruebas de HTTPS correctas
- Enrutamiento basado en subdominios
- Configuración a la par con producción

## Cómo funcionan los dominios locales

FlyEnv usa el archivo **Hosts** (anulación de DNS a nivel del sistema) para asignar dominios a tu máquina local:

```
# /etc/hosts (macOS/Linux) o C:\Windows\System32\drivers\etc\hosts
127.0.0.1  myproject.test
127.0.0.1  api.myproject.test
```

Combinado con un servidor web local, esto crea un entorno de alojamiento local completo.

## Crear tu primer sitio con dominio personalizado

### Paso 1: Elige un nombre de dominio

**TLDs recomendados para el desarrollo local:**
- `.test` — Reservado por el IETF para pruebas (recomendado)
- `.local` — Común, pero puede entrar en conflicto con mDNS en macOS
- `.localhost` — Explícitamente no enrutable
- `.invalid` — Otra opción reservada

**Evita:**
- `.dev` — Perteneciente a Google, fuerza HTTPS en Chrome
- TLDs reales (.com, .io) — Pueden entrar en conflicto con sitios reales

**Buenos ejemplos:**
- `laravel-project.test`
- `client-site.test`
- `api.myapp.test`
- `wordpress.test`

### Paso 2: Crea el sitio en FlyEnv

1. Abre el módulo **Host**
2. Haz clic en **"Add Site"**
3. Configura:
   - **Host Name**: `myproject.test`
   - **Host Root**: `/Users/you/code/myproject/public`
   - **PHP Version**: selecciona la versión instalada
   - **Port**: 80 (HTTP por defecto)

![Formulario Add Site](https://oss.macphpstudy.com/image/quick-start-4.webp)

### Paso 3: Configura la raíz del proyecto

La ruta raíz depende de tu framework:

| Framework | Directorio raíz |
|-----------|----------------|
| Laravel | `/project/public` |
| WordPress | `/project` (contiene wp-config.php) |
| Symfony | `/project/public` |
| Yii2 | `/project/web` |
| PHP puro | `/project` (donde está index.php) |
| HTML estático | `/project` (donde está index.html) |

**Importante**: configura los permisos correctos:
- Propietario: tu cuenta de usuario
- Grupo: usuario del servidor web (www-data, _www, etc.)
- Permisos: 755 para directorios, 644 para archivos

### Paso 4: Activa Auto SSL

SSL es esencial para las pruebas:
- Los Service Workers requieren HTTPS
- Las cookies seguras solo funcionan con HTTPS
- WebRTC requiere HTTPS
- Las APIs modernas (Geolocalización, Cámara) requieren HTTPS

**Actívalo en FlyEnv:**

1. En la configuración del sitio, marca **"Use SSL"**
2. Selecciona **"Auto SSL"** (recomendado)
3. Haz clic en **Save**

![Configuración de SSL](https://oss.macphpstudy.com/image/host-1.webp)

**Qué ocurre:**
- FlyEnv genera un certificado de CA local
- Crea un certificado específico del sitio firmado por la CA
- Añade la CA al almacén de confianza del sistema
- Configura el servidor web para HTTPS

**Nota para Linux**: es posible que los navegadores requieran importar la CA manualmente. FlyEnv proporciona la ruta del archivo de certificado.

### Paso 5: Inicia los servicios y prueba

1. Inicia tu servidor web (Nginx/Apache/Caddy)
2. Inicia PHP-FPM (si usas PHP)
3. Abre `https://myproject.test` en el navegador

Deberías ver un candado verde, sin advertencias del navegador.

## Opciones de configuración del sitio

### Configuración de puertos

**Puertos estándar:**
- Puerto 80 — HTTP (sin puerto en la URL)
- Puerto 443 — HTTPS (sin puerto en la URL)
- Puertos personalizados — `http://site.test:8080`

**Cuándo usar puertos personalizados:**
- Al ejecutar varios servidores web
- Para evitar conflictos con servicios del sistema
- Para probar escenarios de puertos específicos

### Alias de host

Añade varios dominios que apunten al mismo sitio:

```
Principal: myproject.test
Alias: www.myproject.test
Alias: alternate.test
```

Todos los alias comparten el mismo certificado SSL automáticamente.

### Descubrimiento automático de subdominios (función Park)

La función **Park** crea subdominios automáticamente a partir de los nombres de las carpetas:

```
Raíz: /Users/you/projects/myapp
Subdirectorios:
  - /api -> api.myapp.test
  - /admin -> admin.myapp.test
  - /docs -> docs.myapp.test
```

Actívala en la configuración del sitio marcando la opción **"Park"**.

### Reescritura de URLs

La mayoría de los frameworks requieren reescritura de URLs. FlyEnv incluye plantillas:

**Para Nginx:**
```nginx
# Laravel rewrite
location / {
    try_files $uri $uri/ /index.php?$query_string;
}

# WordPress rewrite
location / {
    try_files $uri $uri/ /index.php;
}
```

**Selecciona la plantilla en FlyEnv:**
1. Edita el sitio
2. Haz clic en **"Rewrite Rules"**
3. Elige la plantilla del framework
4. Guarda

![Plantillas de reescritura](https://oss.macphpstudy.com/image/host-2.webp)

## Configuración avanzada de SSL

### Entender el SSL local

Auto SSL de FlyEnv usa una Autoridad de Certificación (CA) local:

```
CA local (de confianza del sistema)
    |
    +-- Certificado del sitio (myproject.test)
    +-- Certificado del sitio (api.myproject.test)
```

Esto permite crear certificados locales ilimitados sin los límites de tasa de Let's Encrypt ni validación DNS.

### Importación manual de certificados (Linux)

Si los navegadores muestran advertencias:

```bash
# Find the CA certificate in FlyEnv settings
# Typically: ~/.flyenv/ssl/rootCA.pem

# Import to system trust (Ubuntu/Debian)
sudo cp rootCA.pem /usr/local/share/ca-certificates/flyenv.crt
sudo update-ca-certificates

# For Chrome specifically
# Settings -> Privacy -> Security -> Manage Certificates -> Authorities -> Import
```

### Uso de certificados personalizados

Para probar con certificados reales:

1. Obtén los archivos del certificado (.crt y .key)
2. En la configuración del sitio, selecciona **"Custom SSL"**
3. Sube los archivos del certificado
4. Guarda

Útil para:
- Probar certificados de producción en local
- Certificados proporcionados por el cliente
- Pruebas con certificados comodín

## Configuraciones con varios servidores

### Ejecutar varios servidores web

Puedes ejecutar Apache, Nginx y Caddy simultáneamente en puertos diferentes:

| Servidor | Puerto | Caso de uso |
|--------|------|----------|
| Nginx | 80/443 | Desarrollo principal |
| Apache | 8080/8443 | Pruebas de reglas .htaccess |
| Caddy | 3000 | Prototipado rápido |

Configura cada sitio con su servidor y puerto preferidos.

### Simulación de balanceo de carga

Prueba configuraciones con balanceo de carga en local:

```
Petición del usuario
    |
    v
Nginx (load balancer) -> localhost:3001 (Instance 1)
                      -> localhost:3002 (Instance 2)
                      -> localhost:3003 (Instance 3)
```

Configúralo en el bloque upstream de Nginx para pruebas realistas.

## Solución de problemas

### "No se puede acceder a este sitio"

**Comprueba:**
1. ¿El servidor web está en ejecución?
2. ¿El puerto es correcto?
3. ¿El archivo hosts está actualizado? (FlyEnv lo hace automáticamente)
4. Caché de DNS: `sudo killall -HUP mDNSResponder` (macOS)

### "La conexión no es privada" (error de SSL)

**macOS:**
1. FlyEnv debería confiar automáticamente en la CA
2. Si no lo hace, confía en ella manualmente en Keychain Access

**Windows:**
1. Importa el certificado de la CA en "Entidades de certificación raíz de confianza"

**Linux:**
```bash
# Update CA store
sudo update-ca-certificates

# Restart browser
```

### "502 Bad Gateway" o "504 Gateway Timeout"

**Causas:**
1. PHP-FPM no está en ejecución
2. Ruta del socket de PHP-FPM incorrecta
3. Error de la aplicación

**Soluciones:**
1. Inicia PHP en FlyEnv
2. Comprueba que la versión de PHP coincide con la configuración del sitio
3. Revisa los logs de error de la aplicación

### "403 Forbidden"

**Causa**: permisos de archivo o indexación de directorios desactivada

**Soluciones:**
1. Comprueba los permisos de las carpetas (755 para directorios)
2. Asegúrate de que existe index.php/index.html
3. Activa el listado de directorios en la configuración del servidor web (si lo deseas)

### Los dominios se resuelven a una IP incorrecta

**Causa**: un DNS externo anula los hosts locales

**Soluciones:**
1. Usa el TLD `.test` (reservado, nunca tiene DNS público)
2. Comprueba que `/etc/hosts` tenga las entradas correctas
3. Vacía la caché de DNS

## Preguntas frecuentes (FAQ)

**P: ¿Puedo usar dominios reales como mysite.com en local?**

R: Sí, pero no es recomendable. Impide acceder al sitio real. Usa .test en su lugar.

**P: ¿Estos certificados SSL funcionarán para otras personas?**

R: No. Los certificados locales solo son de confianza en tu máquina. Para compartir, usa [Cloudflare Tunnel](/es/guide/cloudflare-tunnel-local-development).

**P: ¿Cuántos sitios puedo crear?**

R: Ilimitados. Solo estás limitado por los recursos de tu sistema.

**P: ¿Puedo compartir sitios locales con mi equipo?**

R: Los sitios locales solo son accesibles desde localhost. Para dar acceso al equipo, usa Cloudflare Tunnel o despliega en un servidor compartido.

**P: ¿Tengo que renovar los certificados SSL locales?**

R: No. Los certificados locales generados por FlyEnv no caducan ni necesitan renovación.

**P: ¿Puedo usar comodines como *.test?**

R: Sí. Crea un sitio con `*.myproject.test` para que coincida con cualquier subdominio.

**P: ¿Qué pasa con IPv6?**

R: FlyEnv admite localhost tanto en IPv4 (127.0.0.1) como en IPv6 (::1).

## Buenas prácticas

1. **Usa el TLD .test** — Evita conflictos con sitios web reales
2. **Replica la estructura de producción** — Mantén los dominios locales similares a los de producción
3. **Activa SSL siempre** — Prueba con HTTPS desde el primer día
4. **Organiza con subdominios** — api.myapp.test, admin.myapp.test
5. **Controla las configuraciones con versiones** — Exporta y confirma las configuraciones de los sitios

## Próximos pasos

Ahora que tienes un alojamiento local profesional configurado:

- [Proxy inverso para Node.js](/es/guide/reverse-proxy-nestjs-multi-servers) — Aloja aplicaciones Node con URLs limpias
- [Cloudflare Tunnel](/es/guide/cloudflare-tunnel-local-development) — Comparte sitios de forma segura
- [Pruebas de email con Mailpit](/es/guide/local-email-testing-mailpit) — Entorno de desarrollo completo

[Descarga FlyEnv](/es/download) para empezar hoy con dominios personalizados.
