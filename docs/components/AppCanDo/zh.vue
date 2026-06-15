<template>
  <div class="my-24 px-4">
    <div class="text-center max-w-3xl mx-auto mb-16">
      <h2 class="no-border !text-3xl md:!text-[40px] font-bold mb-4">核心功能</h2>
      <p class="text-lg text-gray-500">
        运行现代 Web 项目所需的一切，全部本地完成 —— 无需 Docker。
      </p>
    </div>

    <div class="space-y-20 max-w-6xl mx-auto">
      <!-- Feature 1: Service Dashboard -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div class="order-2 md:order-1">
          <div class="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700 mb-4">
            服务管理台
          </div>
          <h3 class="no-border !text-2xl font-bold mb-4">一站式原生服务管理台</h3>
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            FlyEnv 将 Apache、Nginx、PHP-FPM、MySQL、MariaDB、PostgreSQL、Redis、Mailpit 等服务集中到一个简洁的管理台。一键启动、停止、切换多个原生版本 —— 无需终端、无需 Docker、无需配置文件。
          </p>
          <ul class="space-y-2 text-gray-600 dark:text-gray-400">
            <li class="flex items-start">
              <span class="mr-2 text-indigo-600">✓</span>
              一键启停所有服务
            </li>
            <li class="flex items-start">
              <span class="mr-2 text-indigo-600">✓</span>
              多个 PHP、Node.js、Python 版本并排运行
            </li>
            <li class="flex items-start">
              <span class="mr-2 text-indigo-600">✓</span>
              原生二进制，不是容器
            </li>
          </ul>
        </div>
        <div class="order-1 md:order-2">
          <div class="aspect-[16/10] rounded-xl bg-gray-900 overflow-hidden shadow-lg ring-1 ring-gray-200 dark:ring-gray-700">
            <img
              src="https://oss.macphpstudy.com/image/flyenv-demo.gif"
              alt="FlyEnv 服务管理台 - 在一个界面管理所有服务和版本"
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
              alt="FlyEnv Hosts 面板 - HTTPS 本地站点与自定义 .test 域名"
              class="w-full h-full object-cover cursor-pointer"
              data-x-image-preview=""
              loading="lazy"
            />
          </div>
        </div>
        <div class="order-2">
          <div class="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700 mb-4">
            本地站点
          </div>
          <h3 class="no-border !text-2xl font-bold mb-4">HTTPS 本地站点与自定义域名</h3>
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            告别手动编辑 <code>/etc/hosts</code>。FlyEnv 自动创建 <code>.test</code> 自定义域名并签发受信任的 SSL 证书。在一个地方管理所有本地项目，每个站点可独立设置运行版本。
          </p>
          <ul class="space-y-2 text-gray-600 dark:text-gray-400">
            <li class="flex items-start">
              <span class="mr-2 text-emerald-600">✓</span>
              开箱即用 <code>myapp.test</code> 等自定义本地域名
            </li>
            <li class="flex items-start">
              <span class="mr-2 text-emerald-600">✓</span>
              自动签发受信任的 SSL 证书
            </li>
            <li class="flex items-start">
              <span class="mr-2 text-emerald-600">✓</span>
              每个站点独立选择运行时版本
            </li>
          </ul>
        </div>
      </div>

      <!-- Feature 3: Version switching -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div class="order-2 md:order-1">
          <div class="inline-flex items-center rounded-full bg-amber-50 px-3 py-1 text-sm font-medium text-amber-700 mb-4">
            项目隔离
          </div>
          <h3 class="no-border !text-2xl font-bold mb-4">项目级版本自动切换</h3>
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            进入任意项目目录，FlyEnv 自动加载对应环境。无论是 Node.js v18、v20、v22 还是 v24，<code>cd</code> 进入瞬间即自动生效 —— 无需手动切换，告别全局版本冲突。
          </p>
          <ul class="space-y-2 text-gray-600 dark:text-gray-400">
            <li class="flex items-start">
              <span class="mr-2 text-amber-600">✓</span>
              按项目自动切换 Node.js、PHP 或 Python 版本
            </li>
            <li class="flex items-start">
              <span class="mr-2 text-amber-600">✓</span>
              v18 / v20 / v22 / v24 多个版本并存无冲突
            </li>
            <li class="flex items-start">
              <span class="mr-2 text-amber-600">✓</span>
              无需全局安装，无需手动配置环境
            </li>
          </ul>
        </div>
        <div class="order-1 md:order-2">
          <div class="aspect-[16/10] rounded-xl bg-gray-900 overflow-hidden shadow-lg ring-1 ring-gray-200 dark:ring-gray-700">
            <img
              src="https://oss.macphpstudy.com/image/flyenv-version-switch.webp"
              alt="FlyEnv 项目级版本切换 - 终端展示自动切换 Node.js 版本"
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
