<template>
  <template v-if="type === 0">
    <a
      title="FlyEnv [Apache] 模块. Windows/macOS/Linux原生运行 Apache：一键安装、极速响应、可视化管理 | FlyEnv"
      href="https://www.bilibili.com/video/BV1wqZ7BNErL/"
      target="_blank"
      class="group hover:scale-105 transition-all duration-300 relative no-underline overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text text-[#3c3c43] dark:text-[#dfdff6]">网络服务器</span>
      <div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center p-4">
        <img src="https://oss.macphpstudy.com/image/apache.png" />
      </div>
      <span class="shrink-0 select-text text-[#3c3c43] dark:text-[#dfdff6]">Apache</span>
      <div class="absolute inset-0 flex items-center justify-center z-20">
        <SVGUse class="w-16 opacity-20 transition-all duration-300 group-hover:opacity-65" :svg="import('../SVG/play.svg?raw')" />
      </div>
    </a>

    <a
      title="FlyEnv [Nginx] 模块: 拒绝 Docker 臃肿！原生运行 Nginx. 毫秒级启动，可视化配置管理 | FlyEnv"
      href="https://www.bilibili.com/video/BV1jKZ4BjEgk/"
      target="_blank"
      class="group hover:scale-105 transition-all duration-300 relative no-underline overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text text-[#3c3c43] dark:text-[#dfdff6]">网络服务器</span>
      <div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center p-1">
        <img src="https://oss.macphpstudy.com/image/nginx.png" />
      </div>
      <span class="shrink-0 select-text text-[#3c3c43] dark:text-[#dfdff6]">Nginx</span>
      <div class="absolute inset-0 flex items-center justify-center z-20">
        <SVGUse class="w-16 opacity-20 transition-all duration-300 group-hover:opacity-65" :svg="import('../SVG/play.svg?raw')" />
      </div>
    </a>

    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">网络服务器</span>
      <div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center w-full p-5">
        <img src="https://oss.macphpstudy.com/image/caddy.svg" />
      </div>
      <span class="shrink-0 select-text">Caddy</span>
    </div>
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">网络服务器</span>
      <div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center p-5">
        <img src="https://oss.macphpstudy.com/image/tomcat.svg" />
      </div>
      <span class="shrink-0 select-text">Tomcat</span>
    </div>
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">网络服务器</span>
      <div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center w-full p-4">
        <img src="../SVG/Consul.svg" />
      </div>
      <span class="shrink-0 select-text">Consul</span>
    </div>
  </template>
  <template v-else-if="type === 1">
    <a
      title="FlyEnv [MySQL] 模块: MySQL 本地开发从未如此简单. 原生运行、密码一键重置、可视化管理 | FlyEnv"
      href="https://www.bilibili.com/video/BV1vuZ4B5EAg/"
      target="_blank"
      class="group hover:scale-105 transition-all duration-300 relative no-underline overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text text-[#3c3c43] dark:text-[#dfdff6]">数据库</span>
      <div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center p-1">
        <img src="https://oss.macphpstudy.com/image/mysql.png" />
      </div>
      <span class="shrink-0 select-text text-[#3c3c43] dark:text-[#dfdff6]">MySQL</span>
      <div class="absolute inset-0 flex items-center justify-center z-20">
        <SVGUse class="w-16 opacity-20 transition-all duration-300 group-hover:opacity-65" :svg="import('../SVG/play.svg?raw')" />
      </div>
    </a>

    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">数据库</span>
      <div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center p-1">
        <img src="https://oss.macphpstudy.com/image/mariadb.svg" />
      </div>
      <span class="shrink-0 select-text">MariaDB</span>
    </div>
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">数据库</span>
      <div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center w-full p-6">
        <img src="https://oss.macphpstudy.com/image/postgresql.svg" />
      </div>
      <span class="shrink-0 select-text">PostgreSQL</span>
    </div>
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">数据库</span>
      <div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center p-4">
        <img src="https://oss.macphpstudy.com/image/MongoDB.svg" />
      </div>
      <span class="shrink-0 select-text">MongoDB</span>
    </div>
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">数据库</span>
      <div class="aspect-square w-full flex shrink-0 overflow-hidden items-center justify-center p-4">
        <img src="../SVG/qdrant.svg" />
      </div>
      <span class="shrink-0 select-text">Qdrant</span>
    </div>
  </template>
  <template v-else-if="type === 2">
    <a
      title="FlyEnv [PHP] 模块: Windows/macOS/Linux多版本 PHP 同时运行. 本地开发环境的极简开箱即用方案 | FlyEnv"
      href="https://www.bilibili.com/video/BV1r6Z7BwE8p/"
      target="_blank"
      class="group hover:scale-105 transition-all duration-300 relative no-underline overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text text-[#3c3c43] dark:text-[#dfdff6]">语言</span>
      <div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center p-1">
        <img src="https://oss.macphpstudy.com/image/php.png" />
      </div>
      <span class="shrink-0 select-text text-[#3c3c43] dark:text-[#dfdff6]">PHP</span>
      <div class="absolute inset-0 flex items-center justify-center z-20">
        <SVGUse class="w-16 opacity-20 transition-all duration-300 group-hover:opacity-65" :svg="import('../SVG/play.svg?raw')" />
      </div>
    </a>

    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">语言</span>
      <div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center p-4">
        <img src="https://oss.macphpstudy.com/image/java.svg" />
      </div>
      <span class="shrink-0 select-text">Java</span>
    </div>
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">运行时</span>
      <div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center w-full p-4">
        <img src="https://oss.macphpstudy.com/image/Node.js.svg" />
      </div>
      <span class="shrink-0 select-text">NodeJS</span>
    </div>

    <a
      title="FlyEnv [Python] 模块: Windows 运行多版本 Python 竟能如此简单？告别环境变量报错的痛苦！ | FlyEnv"
      href="https://www.bilibili.com/video/BV1hvZxBBEJk/"
      target="_blank"
      class="group hover:scale-105 transition-all duration-300 relative no-underline overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text text-[#3c3c43] dark:text-[#dfdff6]">语言</span>
      <div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center w-full p-4">
        <img src="../SVG/Python.svg" />
      </div>
      <span class="shrink-0 select-text text-[#3c3c43] dark:text-[#dfdff6]">Python</span>
      <div class="absolute inset-0 flex items-center justify-center z-20">
        <SVGUse class="w-16 opacity-20 transition-all duration-300 group-hover:opacity-65" :svg="import('../SVG/play.svg?raw')" />
      </div>
    </a>

    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">语言</span>
      <div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center w-full">
        <img src="../SVG/Go.svg" />
      </div>
      <span class="shrink-0 select-text">Go</span>
    </div>
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">语言</span>
      <div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center w-full p-5">
        <img src="../SVG/Erlang.svg" />
      </div>
      <span class="shrink-0 select-text">Erlang</span>
    </div>
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">语言</span>
      <div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center w-full p-6">
        <img src="../SVG/Ruby.svg" />
      </div>
      <span class="shrink-0 select-text">Ruby</span>
    </div>
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">语言</span>
      <div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center w-full p-2">
        <img src="../SVG/Rust.svg" />
      </div>
      <span class="shrink-0 select-text">Rust</span>
    </div>
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">语言</span>
      <div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center w-full p-2">
        <img src="../SVG/zig.svg" />
      </div>
      <span class="shrink-0 select-text">Zig</span>
    </div>
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">运行时</span>
      <div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center w-full p-2">
        <img src="../SVG/bun.svg" />
      </div>
      <span class="shrink-0 select-text">Bun</span>
    </div>
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">运行时</span>
      <div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center w-full p-3">
        <img src="../SVG/Deno.svg" />
      </div>
      <span class="shrink-0 select-text">Deno</span>
    </div>
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">构建工具</span>
      <div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center w-full p-3">
        <img src="../SVG/Gradle.svg" />
      </div>
      <span class="shrink-0 select-text">Gradle</span>
    </div>
  </template>
  <template v-else-if="type === 3">
    <a
      title="FlyEnv [Redis] 模块: 一键安装任意版本, 原生运行 Redis. 极速缓存、一键配置与可视化管理 | FlyEnv"
      href="https://www.bilibili.com/video/BV1YaZxBzENJ/"
      target="_blank"
      class="group hover:scale-105 transition-all duration-300 relative no-underline overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text text-[#3c3c43] dark:text-[#dfdff6]">数据队列</span>
      <div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center w-full p-5">
        <img src="https://oss.macphpstudy.com/image/redis.png" />
      </div>
      <span class="shrink-0 select-text text-[#3c3c43] dark:text-[#dfdff6]">Redis</span>
      <div class="absolute inset-0 flex items-center justify-center z-20">
        <SVGUse class="w-16 opacity-20 transition-all duration-300 group-hover:opacity-65" :svg="import('../SVG/play.svg?raw')" />
      </div>
    </a>

    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">数据缓存</span>
      <div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center p-6">
        <img src="https://oss.macphpstudy.com/image/memcached.png" />
      </div>
      <span class="shrink-0 select-text">Memcached</span>
    </div>
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">数据队列</span>
      <div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center w-full p-6">
        <img src="../SVG/RabbitMQ.svg" />
      </div>
      <span class="shrink-0 select-text">RabbitMQ</span>
    </div>
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">数据队列</span>
      <div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center w-full px-4">
        <img src="../SVG/etcd.svg" />
      </div>
      <span class="shrink-0 select-text">etcd</span>
    </div>
  </template>
  <template v-else-if="type === 4">
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">DNS</span>
      <div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center p-5">
        <img src="https://oss.macphpstudy.com/image/dns.svg" />
      </div>
      <span class="shrink-0 select-text">DNS Server</span>
    </div>
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">FTP</span>
      <div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center p-5">
        <img src="https://oss.macphpstudy.com/image/ftp.svg" />
      </div>
      <span class="shrink-0 select-text">FTP Server</span>
    </div>
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">静态服务器</span>
      <div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center p-5">
        <img src="https://oss.macphpstudy.com/image/http.svg" />
      </div>
      <span class="shrink-0 select-text">Static Server</span>
    </div>
  </template>
  <template v-else-if="type === 5">
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">Search Engine</span>
      <div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center w-full p-6">
        <img src="../SVG/Elasticsearch.svg" />
      </div>
      <span class="shrink-0 select-text">Elasticsearch</span>
    </div>
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">Search Engine</span>
      <div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center w-full">
        <img src="../SVG/Meilisearch.svg"/>
      </div>
      <span class="shrink-0 select-text">Meilisearch</span>
    </div>
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">Search Engine</span>
      <div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center w-full">
        <img src="../SVG/Typesense.svg"/>
      </div>
      <span class="shrink-0 select-text">Typesense</span>
    </div>
  </template>
  <template v-else-if="type === 6">
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">Mail Server</span>
      <div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center w-full p-6">
        <img src="../SVG/Mailpit.svg" />
      </div>
      <span class="shrink-0 select-text">Mailpit</span>
    </div>
  </template>
  <template v-else-if="type === 7">
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">AI Assistant</span>
      <div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center w-full p-5">
        <img src="../SVG/Ollama.svg" />
      </div>
      <span class="shrink-0 select-text">Ollama</span>
    </div>
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">AI Assistant</span>
      <div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center w-full px-1">
        <img src="../SVG/DeepSeek.svg" />
      </div>
      <span class="shrink-0 select-text">DeepSeek</span>
    </div>
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">AI Assistant</span>
      <div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center w-full p-7">
        <img src="../SVG/Chatbox.svg" />
      </div>
      <span class="shrink-0 select-text">Chatbox</span>
    </div>
  </template>
  <template v-else-if="type === 8">
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">Object Storage</span>
      <div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center w-full px-3">
        <img src="../SVG/Minio.svg" />
      </div>
      <span class="shrink-0 select-text">Minio</span>
    </div>
  </template>
  <template v-else-if="type === 9">
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">Container</span>
      <div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center w-full p-5">
        <img src="../SVG/Podman.svg" />
      </div>
      <span class="shrink-0 select-text">Podman</span>
    </div>
  </template>
</template>

<script lang="ts" setup>
  import SVGUse from '../VueSvgIcon/use.vue'

  defineProps<{
    type: number
  }>()
</script>