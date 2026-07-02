<template>
  <div class="my-24 px-4">
    <div class="text-center max-w-3xl mx-auto mb-16">
      <h2 class="no-border !text-3xl md:!text-[40px] font-bold mb-4">Core Features</h2>
      <p class="text-lg text-gray-500 mb-8">
        Everything you need to run local projects, AI coding clients, and the bridge between them.
      </p>
    </div>

    <div class="space-y-20 max-w-6xl mx-auto">
      <!-- Feature 1: Service Dashboard -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div class="order-2 md:order-1">
          <div class="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700 mb-4">
            Service Dashboard
          </div>
          <h3 class="no-border !text-2xl font-bold mb-4">All Your Services in One Native Dashboard</h3>
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            FlyEnv puts Apache, Nginx, PHP-FPM, MySQL, MariaDB, PostgreSQL, Redis, Mailpit, and more behind a single clean dashboard. Start, stop, and switch between multiple native versions with one click — no terminal, no Docker, no config files.
          </p>
          <ul class="space-y-2 text-gray-600 dark:text-gray-400">
            <li class="flex items-start">
              <span class="mr-2 text-indigo-600">✓</span>
              One-click start/stop for every service
            </li>
            <li class="flex items-start">
              <span class="mr-2 text-indigo-600">✓</span>
              Run multiple PHP, Node.js, or Python versions side by side
            </li>
            <li class="flex items-start">
              <span class="mr-2 text-indigo-600">✓</span>
              Native binaries, not containers
            </li>
          </ul>
        </div>
        <div class="order-1 md:order-2">
          <div class="aspect-[16/10] rounded-xl bg-gray-900 overflow-hidden shadow-lg ring-1 ring-gray-200 dark:ring-gray-700">
            <img
              src="https://oss.macphpstudy.com/image/flyenv-demo.gif"
              alt="FlyEnv Service Dashboard - manage all services and versions in one place"
              class="w-full h-full object-cover cursor-pointer"
              data-x-image-preview=""
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <!-- Feature 2: Local Sites -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div class="order-1">
          <div class="aspect-[16/10] rounded-xl bg-gray-900 overflow-hidden shadow-lg ring-1 ring-gray-200 dark:ring-gray-700">
            <img
              src="https://oss.macphpstudy.com/image/flyenv-local-sites.webp"
              alt="FlyEnv Hosts panel - local sites with HTTPS and custom .test domains"
              class="w-full h-full object-cover cursor-pointer"
              data-x-image-preview=""
              loading="lazy"
            />
          </div>
        </div>
        <div class="order-2">
          <div class="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700 mb-4">
            Local Sites
          </div>
          <h3 class="no-border !text-2xl font-bold mb-4">Local Sites with HTTPS & Custom Domains</h3>
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            Stop editing <code>/etc/hosts</code>. FlyEnv creates custom <code>.test</code> domains and trusted SSL certificates automatically. Manage all your local projects in one place, each with its own runtime version and settings.
          </p>
          <ul class="space-y-2 text-gray-600 dark:text-gray-400">
            <li class="flex items-start">
              <span class="mr-2 text-emerald-600">✓</span>
              Custom local domains like <code>myapp.test</code> out of the box
            </li>
            <li class="flex items-start">
              <span class="mr-2 text-emerald-600">✓</span>
              Automatic trusted SSL certificates
            </li>
            <li class="flex items-start">
              <span class="mr-2 text-emerald-600">✓</span>
              Per-site runtime version selection
            </li>
          </ul>
        </div>
      </div>

      <!-- Feature 3: Version switching -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div class="order-2 md:order-1">
          <div class="inline-flex items-center rounded-full bg-amber-50 px-3 py-1 text-sm font-medium text-amber-700 mb-4">
            Project Context
          </div>
          <h3 class="no-border !text-2xl font-bold mb-4">Project-Level Runtime Switching for Humans and AI</h3>
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            Drop into any project folder and FlyEnv automatically loads the right environment. Whether you launch a shell, run tests, or open an AI coding CLI from FlyEnv, the correct Node.js, PHP, or Python version is ready with no manual switching and no global conflicts.
          </p>
          <ul class="space-y-2 text-gray-600 dark:text-gray-400">
            <li class="flex items-start">
              <span class="mr-2 text-amber-600">✓</span>
              Auto-switch Node.js, PHP, or Python per project
            </li>
            <li class="flex items-start">
              <span class="mr-2 text-amber-600">✓</span>
              Keep your terminal and AI coding tools on the same project runtime
            </li>
            <li class="flex items-start">
              <span class="mr-2 text-amber-600">✓</span>
              No global installs, no manual environment setup
            </li>
          </ul>
        </div>
        <div class="order-1 md:order-2">
          <div class="aspect-[16/10] rounded-xl bg-gray-900 overflow-hidden shadow-lg ring-1 ring-gray-200 dark:ring-gray-700">
            <img
              src="https://oss.macphpstudy.com/image/flyenv-version-switch.webp"
              alt="FlyEnv project-level version switching - terminal showing automatic Node.js version changes"
              class="w-full h-full object-cover cursor-pointer"
              data-x-image-preview=""
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>
