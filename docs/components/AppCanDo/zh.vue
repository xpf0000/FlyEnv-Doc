<template>
  <div class="my-24 px-4">
    <div class="text-center max-w-3xl mx-auto mb-12">
      <div class="text-3xl md:text-[40px] font-bold mb-4">FlyEnv 能做什么</div>
      <p class="text-lg text-gray-500">
        不仅仅是一个版本管理器。这是一个完整的原生生态系统，专为全栈开发打造。
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
      <div class="flex flex-col">
        <h3 class="text-xl font-bold mb-3 flex items-center">
          <span class="text-2xl mr-3">💻</span> 原生多语言支持
        </h3>
        <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
          FlyEnv 支持主流语言，如 <strong>PHP, Node.js, Python, Go, Java, Rust 和 Ruby</strong>。与 Docker 不同，这些语言运行时以<strong>原生二进制文件</strong>形式运行，以获得最佳性能。您可以同时安装旧版本（如 PHP 5.6）和现代版本（如 PHP 8.3），并同时运行它们而互不干扰。
        </p>
      </div>
      <div class="flex flex-col">
        <h3 class="text-xl font-bold mb-3 flex items-center">
          <span class="text-2xl mr-3">🛡️</span> 项目级隔离
        </h3>
        <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
          告别全局版本冲突。FlyEnv 允许您为每个项目指定运行时版本。只需 <code>cd</code> 进入您的项目目录，FlyEnv 便会<strong>自动切换</strong>到正确的 Node.js、PHP 或 Python 版本。对于需要处理多个客户项目的团队来说，这简直是魔法。
        </p>
      </div>
      <div class="flex flex-col">
        <h3 class="text-xl font-bold mb-3 flex items-center">
          <span class="text-2xl mr-3">🔒</span> 本地域名与自动 SSL
        </h3>
        <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
          无需再手动编辑 <code>/etc/hosts</code> 文件。FlyEnv 内置 DNS 服务器，允许您为本地项目分配自定义域名（例如 <code>myapp.test</code>）。此外，它会自动颁发<strong>受信任的 SSL 证书</strong>，让您可以像在生产环境中一样启用 HTTPS 进行开发。
        </p>
      </div>
      <div class="flex flex-col">
        <h3 class="text-xl font-bold mb-3 flex items-center">
          <span class="text-2xl mr-3">💾</span> 快速启动数据库实例
        </h3>
        <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
          几秒钟内即可启动 <strong>MySQL, MariaDB, PostgreSQL, MongoDB, Redis 和 Memcached</strong>。没有消耗千兆字节内存的 Docker 容器。FlyEnv 为您管理数据目录和配置，支持多版本共存，让您可以轻松测试数据兼容性。
        </p>
      </div>
      <div class="flex flex-col">
        <h3 class="text-xl font-bold mb-3 flex items-center">
          <span class="text-2xl mr-3">📧</span> 集成的邮件与测试工具
        </h3>
        <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
          在本地测试电子邮件工作流，而不会骚扰真实用户。FlyEnv 集成了 <strong>Mailpit</strong>，可以通过 Web 界面捕获和查看外发邮件。它还包含必要的实用程序，如 FTP 服务器、静态 HTTP 服务器和 DNS 服务器，以满足您的所有开发需求。
        </p>
      </div>
      <div class="flex flex-col">
        <h3 class="text-xl font-bold mb-3 flex items-center">
          <span class="text-2xl mr-3">🤖</span> 本地 AI 集成
        </h3>
        <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
          <strong>让您的工作流程面向未来。</strong> FlyEnv 是首批直接集成 <strong>Ollama 和 DeepSeek</strong> 的环境工具之一。在本地运行大型语言模型以进行代码生成或分析，确保您的数据私密且延迟为零。
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
</script>