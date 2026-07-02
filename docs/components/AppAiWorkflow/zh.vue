<template>
  <div class="my-24 px-4">
    <div class="mx-auto mb-12 max-w-3xl text-center">
      <div
        class="mb-4 inline-flex items-center rounded-full bg-sky-50 px-3 py-1 text-sm font-medium text-sky-700 dark:bg-sky-500/10 dark:text-sky-300"
      >
        AI 编程工作区
      </div>
      <h2 class="no-border !text-3xl md:!text-[40px] font-bold mb-4">
        通过 MCP 把本地技术栈接到 AI 编程客户端
      </h2>
      <p class="text-lg text-gray-500 dark:text-slate-300">
        FlyEnv 不只是运行时和服务管理器。它还能管理 AI 编程 CLI，并通过内置的
        FlyEnv MCP Server 把你的本地项目、服务和站点上下文暴露给 AI 工具。
      </p>
    </div>

    <div class="mx-auto max-w-6xl space-y-10">
      <div
        class="grid grid-cols-1 items-center gap-8 rounded-[28px] border border-sky-100 bg-gradient-to-br from-sky-50 via-white to-indigo-50 p-6 shadow-sm dark:border-sky-500/20 dark:from-slate-950 dark:via-slate-900 dark:to-sky-950 md:p-8 lg:grid-cols-[1.05fr_1.25fr]"
      >
        <div>
          <div
            class="mb-4 inline-flex items-center rounded-full bg-white/80 px-3 py-1 text-sm font-medium text-sky-700 ring-1 ring-sky-100 dark:bg-white/10 dark:text-sky-300 dark:ring-sky-500/20"
          >
            一个桌面工作区
          </div>
          <h3 class="no-border !text-2xl font-bold mb-4">
            在一个地方管理本地运行时、服务、AI 编程 CLI 和 MCP 桥接
          </h3>
          <p class="mb-4 leading-relaxed text-gray-600 dark:text-gray-400">
            以原生方式运行 PHP、Node.js、Python、数据库、HTTPS 和本地服务，再把同一套环境接入
            Claude Code、Codex、OpenCode、Kimi、Antigravity CLI 和 GitHub Copilot CLI。
          </p>
          <ul class="space-y-2 text-gray-600 dark:text-gray-400">
            <li class="flex items-start">
              <span class="mr-2 text-sky-600">✓</span>
              在同一个 FlyEnv 工作区里安装并启动 AI 编程客户端
            </li>
            <li class="flex items-start">
              <span class="mr-2 text-sky-600">✓</span>
              通过 MCP 暴露服务、站点、配置、日志和部分操作能力
            </li>
            <li class="flex items-start">
              <span class="mr-2 text-sky-600">✓</span>
              让代码、本地技术栈和 AI 上下文都留在你自己的机器上
            </li>
          </ul>
          <div class="mt-6 flex flex-wrap gap-3 text-sm">
            <a
              href="/zh/guide/ai-coding-workspace-mcp"
              class="rounded-full bg-sky-700 px-4 py-2 font-medium !text-white no-underline transition-colors hover:bg-sky-800 dark:bg-sky-400 dark:!text-slate-950 dark:hover:bg-sky-300"
            >
              查看 AI 工作流指南
            </a>
            <a
              href="/zh/download"
              class="rounded-full border border-slate-200 px-4 py-2 font-medium !text-slate-700 no-underline transition-colors hover:border-slate-300 hover:!text-slate-900 dark:border-slate-700 dark:!text-slate-200 dark:hover:border-slate-600"
            >
              下载 FlyEnv
            </a>
          </div>
        </div>

        <div
          class="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-900"
        >
          <img
            src="/home/flyenv-mcp.jpeg"
            alt="FlyEnv MCP workflow，将本地项目与服务接入 AI 编程客户端"
            class="w-full cursor-pointer"
            data-x-image-preview=""
            loading="lazy"
          />
        </div>
      </div>

      <div class="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
        <div class="overflow-hidden rounded-[24px] border border-slate-200 bg-slate-950 shadow-lg dark:border-slate-700">
          <img
            src="/home/flyenv-mcp-screen.webp"
            alt="FlyEnv MCP Server 设置界面"
            class="w-full cursor-pointer"
            data-x-image-preview=""
            loading="lazy"
          />
        </div>

        <div>
          <div
            class="mb-4 inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300"
          >
            FlyEnv MCP Server
          </div>
          <h3 class="no-border !text-2xl font-bold mb-4">一个真正可用的本地 AI 桥接控制面板</h3>
          <p class="mb-4 leading-relaxed text-gray-600 dark:text-gray-400">
            通过 UI 启停 MCP Server，管理 host、port、token 和自动启动行为，再把支持的 AI
            工具接到你已经在开发中使用的同一套本地环境。
          </p>
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div class="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <div class="mb-2 text-sm font-semibold text-slate-900 dark:text-slate-100">同一上下文</div>
              <p class="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                AI 客户端看到的服务、站点和运行时选择，与本地开发环境完全一致。
              </p>
            </div>
            <div class="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <div class="mb-2 text-sm font-semibold text-slate-900 dark:text-slate-100">默认私有</div>
              <p class="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                默认只监听 localhost，需要时再开放远程访问，并使用 token 做鉴权。
              </p>
            </div>
            <div class="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <div class="mb-2 text-sm font-semibold text-slate-900 dark:text-slate-100">更少胶水代码</div>
              <p class="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                用 FlyEnv 内置桥接替代一次性脚本和手工配置，把本地环境接入 AI 工作流。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>
