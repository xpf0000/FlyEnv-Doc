---
description: 'Descubre por qué FlyEnv Helper necesita privilegios elevados, qué tareas del sistema realiza y cómo instalarlo o eliminarlo de forma segura.'
---

# 📜 Guía detallada de FlyEnv Helper

Al usar FlyEnv, el sistema suele pedirte que instales el **FlyEnv Helper**. Este artículo explica en detalle por qué FlyEnv necesita este programa auxiliar, sus funciones específicas y los métodos de instalación y desinstalación en los distintos sistemas operativos.

## 1. ¿Por qué necesitas instalar FlyEnv Helper?

El programa principal de FlyEnv se ejecuta por defecto con **privilegios de usuario estándar**. Sin embargo, para ofrecer una experiencia de desarrollo local completa y sin fricciones, ciertas funciones básicas requieren **privilegios de administrador (Administrator/Root)** para ejecutarse. Estas abarcan los siguientes cuatro aspectos:

* **Lectura y escritura del archivo hosts del sistema**
* **Rutas de archivo:** macOS (`/private/etc/hosts`), Windows (`C:\Windows\System32\drivers\etc\hosts`), Linux (`/etc/hosts`).
* **Motivo:** por defecto, los usuarios estándar no pueden modificar estos archivos. Para simular un entorno de producción real lo más fielmente posible, FlyEnv no restringe los nombres de dominio de los sitios (a diferencia de otro software que obliga a usar dominios `.test`), por lo que debe escribir los dominios personalizados en el archivo hosts del sistema para que se resuelvan localmente.


* **Vinculación de puertos de red inferiores a 1024**
* **Motivo:** en macOS y Linux, debido a los mecanismos de seguridad, los programas de usuario estándar no pueden vincularse directamente a los puertos privilegiados 1-1023. Si quieres acceder a tus sitios directamente mediante nombres de dominio sin introducir un número de puerto en el navegador al usar Apache, Nginx, Caddy o Tomcat, es necesario vincularse a los puertos predeterminados 80 y 443, lo que requiere privilegios de administrador.


* **Gestión de la variable de entorno `$PATH` de Windows**
* **Motivo:** una de las funciones básicas de FlyEnv es la configuración con un solo clic de entornos como PHP, Node.js, Python, Java, Go y Ruby en el `$PATH` global del sistema. La herramienta visual de gestión de variables de entorno (mostrar/añadir/modificar/eliminar) que ofrece FlyEnv también requiere privilegios de administrador internamente para modificar directamente las variables de entorno a nivel de sistema.


* **Inyección automática del certificado raíz HTTPS en el llavero del sistema**
* **Motivo:** FlyEnv ofrece soporte HTTPS automatizado. Cuando creas o editas un sitio, el sistema genera automáticamente un certificado SSL local. Para que los navegadores confíen en este certificado, su "certificado raíz" correspondiente debe instalarse y marcarse como de confianza en el llavero del sistema (Keychain / Credential Manager), una operación que también requiere privilegios de administrador.



**💡 Ventajas del esquema de separación de privilegios:**
Sin este programa auxiliar, FlyEnv tendría que "recortar" sus funciones (por ejemplo, permitiendo solo el acceso por IP con número de puerto, u obligando a los usuarios a configurar manualmente las variables de entorno y los certificados SSL), o mostrar ventanas de autorización constantemente para cada operación sensible, lo que afectaría gravemente a la experiencia de desarrollo.
Por eso, FlyEnv adopta un **esquema de separación de privilegios** estándar en la industria: las operaciones que requieren privilegios elevados se extraen al FlyEnv Helper. Los usuarios **solo necesitan autorizarlo una vez durante la inicialización**, y todas las operaciones sensibles posteriores las gestiona el Helper en segundo plano de forma transparente. Así se garantiza tanto la integridad de las funciones como una excelente experiencia de usuario.

---

## 2. Guía de instalación y desinstalación

La forma en que FlyEnv Helper reside en el sistema varía según el sistema operativo. Si la instalación del Helper falla, puedes intentar navegar a los directorios indicados a continuación y ejecutar manualmente el ejecutable con privilegios de administrador. Si necesitas desinstalarlo, consulta las instrucciones correspondientes a tu sistema más abajo.

### Windows

En Windows, FlyEnv crea una "Scheduled Task" (tarea programada) para iniciar automáticamente el Helper en segundo plano cuando el usuario inicia sesión.

* **Ubicación del ejecutable:** `[FlyEnv Installation Directory]\resources\helper\flyenv-helper.exe`

**Método de desinstalación:**
Abre PowerShell como administrador y ejecuta los siguientes comandos para eliminar las tareas programadas:

```powershell
schtasks.exe /delete /tn "FlyEnvHelperTask" /f
schtasks.exe /delete /tn "flyenv-helper" /f

```

### macOS

En macOS, FlyEnv crea un elemento de inicio a través de `launchd`.

* **Ubicación del ejecutable:** `/Library/Application Support/FlyEnv/Helper/flyenv-helper`
* **Nota especial:** durante la instalación, el sistema mostrará un aviso de "Background Items Added"; asegúrate de pulsar **Allow**.

**Método de desinstalación:**
Abre Terminal y ejecuta los siguientes comandos para eliminar el elemento de inicio y los archivos del programa:

```bash
sudo launchctl enable "system/com.flyenv.helper"
sudo launchctl bootout system "/Library/LaunchDaemons/com.flyenv.helper.plist"
sudo rm -rf "/Library/LaunchDaemons/com.flyenv.helper.plist"
sudo rm -rf "/Library/Application Support/FlyEnv/Helper"

```

### Linux

En Linux, FlyEnv registra un servicio del sistema a través de `systemd`, configurado para iniciarse al arrancar.

* **Ubicación del ejecutable:** `/usr/local/bin/flyenv-helper`

**Método de desinstalación:**
Abre Terminal y ejecuta los siguientes comandos para detener el servicio y limpiar los archivos:

```bash
sudo systemctl stop "flyenv-helper"
sudo systemctl disable "flyenv-helper"
sudo rm -f "/etc/systemd/system/flyenv-helper.service"
sudo rm -rf "/usr/local/bin/flyenv-helper"

```

---

## Resumen

FlyEnv Helper es el héroe entre bastidores que garantiza el buen funcionamiento de las funciones básicas de FlyEnv (como la resolución de dominios personalizados, el HTTPS local, el acceso sin número de puerto y la configuración automatizada de variables de entorno). Mediante una única autorización segura, elimina las tediosas configuraciones manuales y las frecuentes solicitudes de contraseña, creándote un entorno de desarrollo local limpio y eficiente.
