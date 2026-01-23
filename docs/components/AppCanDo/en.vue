<template>
  <div class="my-24 px-4">
    <div class="text-center max-w-3xl mx-auto mb-12">
      <div class="text-3xl md:text-[40px] font-bold mb-4">What can FlyEnv do</div>
      <p class="text-lg text-gray-500">
        More than just a version manager. A complete, native ecosystem for full-stack development.
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
      <div class="flex flex-col">
        <h3 class="text-xl font-bold mb-3 flex items-center">
          <span class="text-2xl mr-3">💻</span> Native Multi-Language Support
        </h3>
        <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
          FlyEnv supports mainstream languages like <strong>PHP, Node.js, Python, Go, Java, Rust, and Ruby</strong>. Unlike Docker, these run as <strong>native binaries</strong> for maximum performance. You can install legacy versions (e.g., PHP 5.6) alongside modern ones (PHP 8.3) and run them simultaneously without interference.
        </p>
      </div>
      <div class="flex flex-col">
        <h3 class="text-xl font-bold mb-3 flex items-center">
          <span class="text-2xl mr-3">🛡️</span> Project-Level Isolation
        </h3>
        <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
          Stop fighting with global version conflicts. FlyEnv allows you to specify runtime versions per project. Simply <code>cd</code> into your project directory, and FlyEnv <strong>automatically switches</strong> to the correct Node.js, PHP, or Python version. It's magic for agencies working on multiple client projects.
        </p>
      </div>
      <div class="flex flex-col">
        <h3 class="text-xl font-bold mb-3 flex items-center">
          <span class="text-2xl mr-3">🔒</span> Local Domains & Automatic SSL
        </h3>
        <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
          Forget editing <code>/etc/hosts</code> manually. FlyEnv includes a built-in DNS server that lets you assign custom domains (like <code>myapp.test</code>) to your local projects. Plus, it issues <strong>trusted SSL certificates</strong> automatically, so you can develop with HTTPS enabled just like in production.
        </p>
      </div>
      <div class="flex flex-col">
        <h3 class="text-xl font-bold mb-3 flex items-center">
          <span class="text-2xl mr-3">💾</span> Instant Database Instances
        </h3>
        <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
          Spin up <strong>MySQL, MariaDB, PostgreSQL, MongoDB, Redis, and Memcached</strong> in seconds. No Docker containers consuming gigabytes of RAM. FlyEnv manages data directories and configurations for you, supporting multi-version coexistence so you can test data compatibility effortlessly.
        </p>
      </div>
      <div class="flex flex-col">
        <h3 class="text-xl font-bold mb-3 flex items-center">
          <span class="text-2xl mr-3">📧</span> Integrated Mail & Testing Tools
        </h3>
        <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
          Test email workflows locally without spamming real users. FlyEnv integrates <strong>Mailpit</strong> to capture and view outgoing emails via a web interface. It also includes essential utilities like an FTP Server, Static HTTP Server, and DNS Server to cover all your development needs.
        </p>
      </div>
      <div class="flex flex-col">
        <h3 class="text-xl font-bold mb-3 flex items-center">
          <span class="text-2xl mr-3">🤖</span> Local AI Integration
        </h3>
        <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
          <strong>Future-proof your workflow.</strong> FlyEnv is one of the first environment tools to integrate <strong>Ollama and DeepSeek</strong> directly. Run large language models locally for code generation or analysis, keeping your data private and your latency zero.
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
</script>