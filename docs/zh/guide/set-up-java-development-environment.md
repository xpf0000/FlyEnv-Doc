---
description: '使用 FlyEnv 安装和管理 JDK、Maven 与 Tomcat，并为 Java 开发配置 JAVA_HOME 和 PATH。'
---

# 使用FlyEnv搭建Java开发环境

先确认项目要求的 JDK 和构建工具，再在 FlyEnv 的 [Java 模块](/zh/features/java)中安装所需 JDK。项目需要时安装 Maven。将 WAR 部署到独立 Servlet 容器时，再安装 Tomcat。

1. 安装Java JDK并设置环境变量

在Java模块版本管理中，安装所需的JDK版本

<img src="https://oss.macphpstudy.com/image/java-version-manager.jpg" data-x-image-preview="">

在服务管理面板中，设置java环境变量。 java的相关二进制命令路径会自动添加到PATH中。同时，JAVA_HOME环境变量会自动设置。

<img src="https://oss.macphpstudy.com/image/java-set-env.jpg" data-x-image-preview="">

2. 安装Maven并设置环境变量

在Java模块Maven管理中，安装需要的Maven版本并设置环境变量

<img src="https://oss.macphpstudy.com/image/java-maven-set.jpg" data-x-image-preview="">

3. **可选：为 WAR 部署安装 Tomcat**

安装Tomcat

<img src="https://oss.macphpstudy.com/image/tomcat-install.jpg" data-x-image-preview="">

设置环境变量

<img src="https://oss.macphpstudy.com/image/tomcat-set-env.jpg" data-x-image-preview="">

## 在新终端中验证 JDK 和 Maven

环境变量生效后运行以下命令，确认 `mvn -v` 所显示的 Java 版本符合项目要求。项目包含 Maven Wrapper 时，macOS/Linux 可用 `./mvnw -v`，PowerShell 可用 `.\mvnw.cmd -v`。

```text
java -version
javac -version
mvn -v
```

如果 Spring Boot 项目会生成可执行 JAR，用 `java -jar` 加上实际 JAR 路径运行，再打开启动日志中的应用地址。可选的反向代理与依赖服务见 [Spring Boot 方案](/zh/solutions/spring-boot)。
