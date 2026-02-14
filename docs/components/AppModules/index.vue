<template>
  <template v-if="type === 0">
    <a
      title="Run Apache Natively on Windows/macOS/Linux: No Docker, Full Speed! | FlyEnv"
      href="https://youtu.be/t7nKL45FdVk"
      target="_blank"
      class="group hover:scale-105 transition-all duration-300 relative no-underline overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text text-[#3c3c43] dark:text-[#dfdff6]">Web Server</span>
      <div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center p-4">
        <img src="https://oss.macphpstudy.com/image/apache.png" />
      </div>
      <span class="shrink-0 select-text text-[#3c3c43] dark:text-[#dfdff6]">Apache</span>
      <div class="absolute inset-0 flex items-center justify-center z-20">
        <SVGUse class="w-16 opacity-20 transition-all duration-300 group-hover:opacity-65" :svg="import('../SVG/play.svg?raw')" />
      </div>
    </a>

    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">Web Server</span>
      <div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center">
        <img src="https://oss.macphpstudy.com/image/nginx.png" />
      </div>
      <span class="shrink-0 select-text">Nginx</span>
    </div>
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">Web Server</span>
      <div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center w-full p-5">
        <img src="https://oss.macphpstudy.com/image/caddy.svg" />
      </div>
      <span class="shrink-0 select-text">Caddy</span>
    </div>
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">Web Server</span>
      <div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center p-5">
        <img src="https://oss.macphpstudy.com/image/tomcat.svg" />
      </div>
      <span class="shrink-0 select-text">Tomcat</span>
    </div>
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">Web Server</span>
      <div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center w-full p-4">
        <img src="../SVG/Consul.svg" />
      </div>
      <span class="shrink-0 select-text">Consul</span>
    </div>
  </template>
  <template v-else-if="type === 1">
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">Database</span>
      <div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center p-1">
        <img src="https://oss.macphpstudy.com/image/mysql.png" />
      </div>
      <span class="shrink-0 select-text">MySQL</span>
    </div>
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">Database</span>
      <div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center p-1">
        <img src="https://oss.macphpstudy.com/image/mariadb.svg" />
      </div>
      <span class="shrink-0 select-text">MariaDB</span>
    </div>
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">Database</span>
      <div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center w-full p-6">
        <img src="https://oss.macphpstudy.com/image/postgresql.svg" />
      </div>
      <span class="shrink-0 select-text">PostgreSQL</span>
    </div>
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">Database</span>
      <div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center p-4">
        <img src="https://oss.macphpstudy.com/image/MongoDB.svg" />
      </div>
      <span class="shrink-0 select-text">MongoDB</span>
    </div>
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">Database</span>
      <div class="aspect-square w-full flex shrink-0 overflow-hidden items-center justify-center p-4">
        <img src="../SVG/qdrant.svg" />
      </div>
      <span class="shrink-0 select-text">Qdrant</span>
    </div>
  </template>
  <template v-else-if="type === 2">
    <a
      title="Run Multiple PHP Versions Simultaneously: The Ultimate PHP Manager for Modern Devs | FlyEnv"
      href="https://youtu.be/OYP1IOoJOtI"
      target="_blank"
      class="group hover:scale-105 transition-all duration-300 relative no-underline overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text text-[#3c3c43] dark:text-[#dfdff6]">Language</span>
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
      <span class="shrink-0 select-text">Language</span>
      <div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center p-4">
        <img src="https://oss.macphpstudy.com/image/java.svg" />
      </div>
      <span class="shrink-0 select-text">Java</span>
    </div>
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">Runtime</span>
      <div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center w-full p-4">
        <img src="https://oss.macphpstudy.com/image/Node.js.svg" />
      </div>
      <span class="shrink-0 select-text">NodeJS</span>
    </div>
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">Language</span>
      <div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center w-full p-4">
        <img src="../SVG/Python.svg" />
      </div>
      <span class="shrink-0 select-text">Python</span>
    </div>
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">Language</span>
      <div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center w-full">
        <img src="../SVG/Go.svg" />
      </div>
      <span class="shrink-0 select-text">Go</span>
    </div>
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">Language</span>
      <div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center w-full p-5">
        <img src="../SVG/Erlang.svg" />
      </div>
      <span class="shrink-0 select-text">Erlang</span>
    </div>
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">Language</span>
      <div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center w-full p-6">
        <img src="../SVG/Ruby.svg" />
      </div>
      <span class="shrink-0 select-text">Ruby</span>
    </div>
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">Language</span>
      <div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center w-full p-2">
        <img src="../SVG/Rust.svg" />
      </div>
      <span class="shrink-0 select-text">Rust</span>
    </div>
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">Language</span>
      <div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center w-full p-2">
        <img src="../SVG/zig.svg" />
      </div>
      <span class="shrink-0 select-text">Zig</span>
    </div>
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">Runtime</span>
      <div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center w-full p-2">
        <img src="../SVG/bun.svg" />
      </div>
      <span class="shrink-0 select-text">Bun</span>
    </div>
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">Runtime</span>
      <div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center w-full p-3">
        <img src="../SVG/Deno.svg" />
      </div>
      <span class="shrink-0 select-text">Deno</span>
    </div>
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">Build Tool</span>
      <div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center w-full p-3">
        <img src="../SVG/Gradle.svg" />
      </div>
      <span class="shrink-0 select-text">Gradle</span>
    </div>
  </template>
  <template v-else-if="type === 3">
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">Data Queues</span>
      <div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center p-5">
        <img src="https://oss.macphpstudy.com/image/redis.png" />
      </div>
      <span class="shrink-0 select-text">Redis</span>
    </div>
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">Data Cache</span>
      <div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center p-6">
        <img src="https://oss.macphpstudy.com/image/memcached.png" />
      </div>
      <span class="shrink-0 select-text">Memcached</span>
    </div>
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">Data Queues</span>
      <div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center w-full p-6">
        <img src="../SVG/RabbitMQ.svg" />
      </div>
      <span class="shrink-0 select-text">RabbitMQ</span>
    </div>
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">Data Queues</span>
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
      <span class="shrink-0 select-text">Utilities</span>
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