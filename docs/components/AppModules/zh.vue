<template>
  <template v-if="type === 0">
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">网络服务器</span>
      <div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center p-4">
        <img src="https://oss.macphpstudy.com/image/apache.png" />
      </div>
      <span class="shrink-0 select-text">Apache</span>
    </div>
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">网络服务器</span>
      <div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center">
        <img src="https://oss.macphpstudy.com/image/nginx.png" />
      </div>
      <span class="shrink-0 select-text">Nginx</span>
    </div>
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
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">数据库</span>
      <div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center p-1">
        <img src="https://oss.macphpstudy.com/image/mysql.png" />
      </div>
      <span class="shrink-0 select-text">MySQL</span>
    </div>
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
  </template>
  <template v-else-if="type === 2">
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">语言</span>
      <div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center">
        <img src="https://oss.macphpstudy.com/image/php.png" />
      </div>
      <span class="shrink-0 select-text">PHP</span>
    </div>
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
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">语言</span>
      <div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center w-full p-4">
        <img src="../SVG/Python.svg" />
      </div>
      <span class="shrink-0 select-text">Python</span>
    </div>
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
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">数据队列</span>
      <div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center p-5">
        <img src="https://oss.macphpstudy.com/image/redis.png" />
      </div>
      <span class="shrink-0 select-text">Redis</span>
    </div>
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
  defineProps<{
    type: number
  }>()
</script>