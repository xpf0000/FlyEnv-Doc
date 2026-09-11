---
description: 'Comprende qué es PATH y usa FlyEnv para exponer de forma segura los comandos de runtimes y herramientas seleccionados en las sesiones de terminal de cada plataforma.'
---

# Configurar la variable de entorno PATH del sistema

## **¿Qué es exactamente la variable PATH? ¡Conocimiento esencial para desarrolladores!**
(Y ¿por qué siempre te vuelve loco? 🤯)

---

#### **🔍 Explicación rápida**
**PATH** es el "equipo de búsqueda" de tu sistema: cuando escribes comandos como `python` o `javac`, el sistema recorre cada directorio listado en PATH para encontrar el programa correspondiente.

---

#### **💻 Explicación técnica**
1. **¿Qué es PATH?**: Una **variable de entorno** que contiene varias rutas de directorios, separadas por punto y coma (Windows) o por dos puntos (Mac/Linux)
    - Ejemplo (Windows):
      ```
      C:\Python39\Scripts;C:\Program Files\Java\jdk-17\bin
      ```
2. **Cómo funciona**:
    - Cuando escribes `python`, el sistema comprueba cada ruta en orden:
        1. `C:\Python39\Scripts\python.exe` (¿Encontrado? → Ejecutar)
        2. `C:\Program Files\Java\jdk-17\bin\python.exe` (¿No encontrado? → ¡Error!)

---

#### **😱 ¿Por qué PATH causa tantos problemas?**
1. **Errores al escribir rutas**: barras, espacios o caracteres chinos que faltan → El sistema no encuentra el programa
    - ❌ `C:\Program  Files\Python\python.exe` (La ruta real es `C:\Program Files\Python39\python.exe`)
2. **Peculiaridades de los IDE**:
    - ¿El terminal de VSCode no encuentra los comandos? ¡Porque el IDE y el terminal del sistema pueden tener PATH diferentes!
3. **Trampas de los instaladores**:
    - Algunos instaladores no marcan **"Add to PATH"** por defecto (Sí, instalador de Python, ¡te estamos mirando a ti!)

---

#### **🚀 Cómo gestionar PATH como un profesional**
1. **Usuarios de FlyEnv**: ¡Simplemente ignóralo! Todas las rutas se configuran automáticamente ✅
2. **Configuración manual**:
    - **Windows**:
      ```
      Control Panel → System → Advanced Settings → Environment Variables → Edit PATH
      ```
    - **Mac/Linux**:
      ```bash
      export PATH=$PATH:/your/new/path   # Temporal
      echo 'export PATH=$PATH:/your/new/path' >> ~/.zshrc  # Permanente
      ```

---

#### **💡 Consejos profesionales**
- **Comprobar el PATH actual**:
    - Windows: `echo %PATH%`
    - Mac/Linux: `echo $PATH`
- **Resolución de problemas**:
    - Mac/Linux:
  ```bash
  which python   # Ver qué python se está usando
  ```
    - Windows:
  ```
  where.exe python
  ```

---

**📌 Recuerda**: PATH debería ser una herramienta, no un obstáculo. Si sigue dándote dolores de cabeza, ¡prueba la magia sin configuración de **FlyEnv**!**

## Configurar la variable PATH con FlyEnv

Configurar PATH con FlyEnv solo requiere dos pasos:

1. Instala las versiones necesarias

![Interfaz de instalación de versiones](https://oss.macphpstudy.com/image/set-env-1.png)

2. Activa el interruptor para añadir o quitar las rutas de las versiones de PATH

![Interfaz de configuración de PATH](https://oss.macphpstudy.com/image/set-env-2.png)

FlyEnv también ofrece herramientas de acceso rápido para ver y gestionar las variables PATH:

### macOS

![Interfaz de gestión de PATH](https://oss.macphpstudy.com/image/set-env-3.png)

![Interfaz de gestión de PATH](https://oss.macphpstudy.com/image/set-env-4.png)

### Windows

![Interfaz de gestión de PATH](https://oss.macphpstudy.com/image/set-env-5.png)

## Vídeo de demostración

<iframe style="width: 100%; aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/47I5nZK3rjo?si=Ubfp765OcuVbzT58" title="Reproductor de vídeo de YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
