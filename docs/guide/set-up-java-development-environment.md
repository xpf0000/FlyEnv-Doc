---
description: 'Install and manage JDK, Maven, and Tomcat versions with FlyEnv and configure JAVA_HOME and PATH for Java development.'
---

# Set up a Java development environment using FlyEnv

Check the JDK and build tool required by your project. Install that JDK in FlyEnv’s [Java module](/features/java). Add Maven when the project needs it, and install Tomcat if you need to deploy a WAR to a standalone servlet container.

1. Install java jdk and set environment variables

In the Java module version management, install the required JDK version

<img src="https://oss.macphpstudy.com/image/java-version-manager.jpg" data-x-image-preview="">

In the service management panel, set the java environment variable. The relevant binary command path of java will be automatically added to PATH. At the same time, the JAVA_HOME environment variable will be automatically set.

<img src="https://oss.macphpstudy.com/image/java-set-env.jpg" data-x-image-preview="">

2. Install Maven and set environment variables

In the Java module Maven management, install the required maven version and set the environment variable

<img src="https://oss.macphpstudy.com/image/java-maven-set.jpg" data-x-image-preview="">

3. **Optional: install Tomcat for a WAR deployment**

Install Tomcat

<img src="https://oss.macphpstudy.com/image/tomcat-install.jpg" data-x-image-preview="">

Set environment variables

<img src="https://oss.macphpstudy.com/image/tomcat-set-env.jpg" data-x-image-preview="">

## Verify the JDK and Maven in a new terminal

Run these commands after applying the environment changes, then compare the resolved Java version in `mvn -v` with the JDK expected by the project. If the project includes Maven Wrapper, use `./mvnw -v` on macOS/Linux or `.\mvnw.cmd -v` in PowerShell.

```text
java -version
javac -version
mvn -v
```

For a Spring Boot project that builds an executable JAR, run `java -jar` with the actual JAR path. Open the application URL from the startup log. The [Spring Boot guide](/solutions/spring-boot) covers the optional reverse proxy and dependent services.
