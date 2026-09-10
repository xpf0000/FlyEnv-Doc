---
layout: home
aside: false
outline: false
titleTemplate: false
title: 'FlyEnv 与 Docker：本地开发方式对比'
description: '比较 FlyEnv 的原生本地运行时与服务、桌面界面，以及 Docker Compose 定义的可复现容器开发环境。'
head:
  - - meta
    - name: description
      content: '比较 FlyEnv 的原生本地运行时与服务、桌面界面，以及 Docker Compose 定义的可复现容器开发环境。'
  - - meta
    - property: og:title
      content: 'FlyEnv 与 Docker：本地开发方式对比'
  - - meta
    - property: og:description
      content: '比较 FlyEnv 的原生本地运行时与服务、桌面界面，以及 Docker Compose 定义的可复现容器开发环境。'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/zh/compare/docker
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/zh/compare/docker
  - - script
    - type: application/ld+json
    - |
      {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"FlyEnv 是 Docker 的替代品吗？","acceptedAnswer":{"@type":"Answer","text":"不是。FlyEnv 管理原生本地服务；Docker 将应用打包到容器中。两者解决不同问题，也可以结合使用。"}},{"@type":"Question","name":"什么时候应该使用 Docker 而不是 FlyEnv？","acceptedAnswer":{"@type":"Answer","text":"当生产一致性、隔离性或可复现的 CI/预发布环境很重要，或者项目已经提供 compose.yaml 时。"}},{"@type":"Question","name":"什么时候 FlyEnv 更合适？","acceptedAnswer":{"@type":"Answer","text":"当你希望获得快速的原生本地环境，统一管理运行时、本地域名和 HTTPS，且不想编写 Dockerfile 或 Compose 文件时。"}},{"@type":"Question","name":"可以同时使用 FlyEnv 和 Docker 吗？","acceptedAnswer":{"@type":"Answer","text":"可以——常见做法是日常原生开发使用 FlyEnv，CI、集成测试或要求容器一致性的项目使用 Docker；请避免两者端口冲突。"}},{"@type":"Question","name":"FlyEnv 内部使用容器吗？","acceptedAnswer":{"@type":"Answer","text":"不使用。FlyEnv 在 macOS、Windows 和 Linux 上以宿主机上的原生进程方式运行各运行时和服务。"}},{"@type":"Question","name":"Docker 会自动提供本地域名和 HTTPS 吗？","acceptedAnswer":{"@type":"Answer","text":"默认不会。通常需要自行添加反向代理（Traefik、nginx-proxy）和证书（mkcert 或 CA）；FlyEnv 内置了用于域名和 HTTPS 的本地站点工作流。"}},{"@type":"Question","name":"团队更容易统一采用哪一个？","acceptedAnswer":{"@type":"Answer","text":"如果团队使用容器部署，Docker 的 compose.yaml 是最明确的团队统一配置约定；对于在 macOS、Windows 和 Linux 上进行原生开发的团队，FlyEnv 可提供一致的桌面工作流。"}},{"@type":"Question","name":"FlyEnv 能与已有 compose.yaml 的项目配合使用吗？","acceptedAnswer":{"@type":"Answer","text":"可以——compose 文件保持不变；你可以在 FlyEnv 中原生运行应用的运行时和服务，也可以继续为该项目使用 Docker。"}}]}
---

<script setup>
import DockerComparisonPage from '../../components/DockerComparisonPage.vue'
</script>

<DockerComparisonPage locale="zh" />
