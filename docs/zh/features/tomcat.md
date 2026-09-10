---
layout: doc
titleTemplate: false
title: 'FlyEnv Tomcat：本地开发模块与配置指南'
description: '运行 Tomcat，管理各版本 CATALINA_BASE，编辑 server.xml 和 web.xml，并托管 Java 站点。'
head:
  - - meta
    - name: description
      content: '运行 Tomcat，管理各版本 CATALINA_BASE，编辑 server.xml 和 web.xml，并托管 Java 站点。'
  - - meta
    - property: og:title
      content: 'FlyEnv Tomcat：本地开发模块与配置指南'
  - - meta
    - property: og:description
      content: '运行 Tomcat，管理各版本 CATALINA_BASE，编辑 server.xml 和 web.xml，并托管 Java 站点。'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/zh/features/tomcat
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/zh/features/tomcat
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Tomcat 在 FlyEnv 中

Apache Tomcat 是开源 Java Servlet 容器，用于运行打包为 WAR 文件的 Java Web 应用；当项目是基于 Servlet 的应用而非自包含 jar 时就需要它。FlyEnv 将 Apache Tomcat 作为托管服务运行：并行安装多个版本，为每个版本分配独立 CATALINA_BASE，在内置编辑器中修改 `server.xml` 和 `web.xml`，无需打开终端即可查看 `catalina.out`。Tomcat 需要 JDK，FlyEnv 会从 Java 模块环境读取 JAVA_HOME。Tomcat 类型的本地站点会直接写入 `server.xml` 的 Host 条目，由 Tomcat 自身提供服务，而不是经过其他 Web 服务器。

![FlyEnv Tomcat 模块概览截图](https://oss.macphpstudy.com/image/features/tomcat-1.webp)

## 版本管理说明

从**版本管理器**选项卡并行安装多个 Tomcat 版本，并可随时切换。

- **安装源：** macOS、Linux 和 Windows 提供静态构建，macOS 和 Linux 还支持 Homebrew（FlyEnv 会搜索 `tomcat` 和 `tomcat@x` 公式）。Tomcat 不使用 MacPorts 或 SDKMAN。
- **按版本设置基础目录：** 每个版本都有独立 CATALINA_BASE，默认位于 FlyEnv 数据目录下按主版本划分的文件夹，因此多个版本配置互不影响。

![FlyEnv Tomcat 版本管理器及静态、Homebrew 安装来源截图](https://oss.macphpstudy.com/image/features/tomcat-2.webp)

## 服务管理

从**服务**选项卡启动、停止或重启每个 Tomcat 版本，环境变量按版本自动处理。

- **按版本设置 CATALINA_BASE：** 服务选项卡显示版本 CATALINA_BASE 路径，可修改且按版本保存。首次启动时，FlyEnv 从安装目录复制 `conf` 文件创建基础目录。
- **从 Java 模块获取 JAVA_HOME：** Tomcat 需要 Java，FlyEnv 从[Java 模块](/zh/features/java)同步环境并提供 JAVA_HOME，运行中的 Tomcat 使用你在 FlyEnv 管理的 JDK。[Java 开发环境指南](/zh/guide/set-up-java-development-environment)介绍 JDK 安装和切换。
- **平台原生启动：** macOS 设置 CATALINA_BASE、CATALINA_PID 和 JAVA_HOME 后以前台方式运行 `catalina.sh run`，控制台输出写入 `logs/catalina.out`；Windows 通过 `startup.bat` 启动并由 FlyEnv 查找 JVM 进程；Linux 通过 root helper 运行。

![FlyEnv Tomcat 服务选项卡及可编辑 CATALINA_BASE 行截图](https://oss.macphpstudy.com/image/features/tomcat-3.webp)

## 配置

每个 Tomcat 版本的配置都位于其 CATALINA_BASE，可直接从 FlyEnv 编辑，无需在目录中查找。

- **`server.xml` 和 `web.xml` 选项卡：** 模块为最常修改的两个文件提供独立选项卡和原始编辑器。
- **更多配置文件：** 还支持 `context.xml`、`tomcat-users.xml`、`logging.properties`、`catalina.properties` 和 `catalina.policy`。

![FlyEnv 编辑 Tomcat 版本的 server.xml 截图](https://oss.macphpstudy.com/image/features/tomcat-4.webp)

## 站点集成

在 FlyEnv 中创建 **Tomcat** 类型站点时，不会生成反向代理虚拟主机，而是将真实 Tomcat `<Host>` 条目直接同步到版本的 `server.xml`。站点创建方式与其他类型相同，请参阅 [Host 指南](/zh/guide/host)。

- **同步与回滚：** 保存站点时，FlyEnv 重写 `server.xml` 中的 Host 条目并保留快照，更新失败时可回滚文件。
- **按站点配置 SSL：** Tomcat 站点支持证书和密钥形式的 HTTPS，也支持 FlyEnv 自动证书；删除站点时会清理自动生成的证书。
- **不经过其他 Web 服务器流程：** Tomcat 站点不会参与 Nginx、Apache、Caddy 和 FrankenPHP 虚拟主机生成，由 Tomcat 自身提供服务。其他服务器站点请参阅[本地站点、自定义域名与 HTTPS](/zh/features/local-sites-https)，完整 Java Web 技术栈请参阅 [Spring Boot 解决方案](/zh/solutions/spring-boot)。

![FlyEnv 将 Tomcat 类型站点作为 Host 条目同步到 server.xml 截图](https://oss.macphpstudy.com/image/features/tomcat-5.webp)

## 日志

**日志**选项卡打开 Tomcat 控制台日志，并提供搜索和刷新功能。macOS 和 Linux 读取版本 CATALINA_BASE 下的 `logs/catalina.out`；Windows 读取带日期的 `catalina.<yyyy-MM-dd>.log` 文件。

<FeatureRelatedLinks locale="zh" slug="tomcat" />

## 兼容性说明

FlyEnv 管理本地 Tomcat 运行时、按版本配置和站点 Host 条目，但不会捆绑 Tomcat Manager Web 应用，也不保证每个 Tomcat 版本都能从所有操作系统的每种安装源获得。请根据 Tomcat 版本要求核对已安装 Java 版本，并以[下载页面](/zh/download)和当前发行说明为支持软件包来源。
