---
description: 'Instala y gestiona versiones de JDK, Maven y Tomcat con FlyEnv y configura JAVA_HOME y PATH para el desarrollo con Java.'
---

# Configurar un entorno de desarrollo Java con FlyEnv

Comprueba qué JDK y herramienta de compilación pide el proyecto. Instala ese JDK en el [módulo Java](/es/features/java) de FlyEnv. Instala Maven si lo requiere el proyecto y Tomcat cuando necesites desplegar un WAR en un contenedor de servlets independiente.

1. **Instala el JDK de Java y configura las variables de entorno**

   En la gestión de versiones del módulo Java, instala la versión del JDK que necesites.

   <img src="https://oss.macphpstudy.com/image/java-version-manager.jpg" data-x-image-preview="" alt="Gestor de versiones de Java">

   En el panel de gestión de servicios, configura la variable de entorno de Java. La ruta de los comandos binarios de Java correspondiente se añadirá automáticamente a `PATH`; al mismo tiempo, la variable de entorno `JAVA_HOME` se configurará automáticamente.

   <img src="https://oss.macphpstudy.com/image/java-set-env.jpg" data-x-image-preview="" alt="Configurar el entorno de Java">

2. **Instala Maven y configura las variables de entorno**

   En la gestión de Maven del módulo Java, instala la versión de Maven que necesites y configura la variable de entorno.

   <img src="https://oss.macphpstudy.com/image/java-maven-set.jpg" data-x-image-preview="" alt="Configurar Maven">

3. **Instala Tomcat si vas a desplegar un WAR**

   Instala Tomcat.

   <img src="https://oss.macphpstudy.com/image/tomcat-install.jpg" data-x-image-preview="" alt="Instalar Tomcat">

   Configura las variables de entorno.

   <img src="https://oss.macphpstudy.com/image/tomcat-set-env.jpg" data-x-image-preview="" alt="Configurar el entorno de Tomcat">

## Verifica el JDK y Maven en un terminal nuevo

Ejecuta estos comandos una vez aplicados los cambios de entorno. Comprueba que la versión de Java que muestra `mvn -v` coincide con la requerida por el proyecto. Si el proyecto incluye Maven Wrapper, usa `./mvnw -v` en macOS/Linux o `.\mvnw.cmd -v` en PowerShell.

```text
java -version
javac -version
mvn -v
```

Si el proyecto Spring Boot genera un JAR ejecutable, usa `java -jar` con la ruta real del JAR. Abre la URL de la aplicación que aparece en el log de inicio. La [solución Spring Boot](/es/solutions/spring-boot) cubre el proxy inverso opcional y los servicios dependientes.
