<template>
  <div class="my-24 px-4">
    <div class="mx-auto mb-12 max-w-3xl text-center">
      <div class="mb-4 inline-flex items-center rounded-full bg-sky-50 px-3 py-1 text-sm font-medium text-sky-700">
        AI Coding Workspace
      </div>
      <h2 class="no-border !text-3xl md:!text-[40px] font-bold mb-4">
        Connect your local stack to AI coding clients with MCP
      </h2>
      <p class="text-lg text-gray-500">
        FlyEnv is not only a runtime and service manager. It also manages AI coding
        CLIs and exposes your local projects, services, and site context through the
        built-in FlyEnv MCP Server.
      </p>
    </div>

    <div class="mx-auto max-w-6xl space-y-10">
      <div
        class="grid grid-cols-1 items-center gap-8 rounded-[28px] border border-sky-100 bg-gradient-to-br from-sky-50 via-white to-indigo-50 p-6 shadow-sm md:p-8 lg:grid-cols-[1.05fr_1.25fr]"
      >
        <div>
          <div
            class="mb-4 inline-flex items-center rounded-full bg-white/80 px-3 py-1 text-sm font-medium text-sky-700 ring-1 ring-sky-100"
          >
            One desktop workspace
          </div>
          <h3 class="no-border !text-2xl font-bold mb-4">
            Manage local runtimes, services, AI coding CLIs, and the MCP bridge in one place
          </h3>
          <p class="mb-4 leading-relaxed text-gray-600 dark:text-gray-400">
            Run PHP, Node.js, Python, databases, HTTPS, and local services natively, then
            connect the same environment to Claude Code, Codex, OpenCode, Kimi,
            Antigravity CLI, and GitHub Copilot CLI.
          </p>
          <ul class="space-y-2 text-gray-600 dark:text-gray-400">
            <li class="flex items-start">
              <span class="mr-2 text-sky-600">✓</span>
              Install and launch AI coding clients from the same FlyEnv workspace
            </li>
            <li class="flex items-start">
              <span class="mr-2 text-sky-600">✓</span>
              Expose services, sites, configs, logs, and selected actions through MCP
            </li>
            <li class="flex items-start">
              <span class="mr-2 text-sky-600">✓</span>
              Keep your code, local stack, and AI context on your own machine
            </li>
          </ul>
          <div class="mt-6 flex flex-wrap gap-3 text-sm">
            <a
              href="/guide/flyenv-work-with-ai"
              class="rounded-full bg-sky-600 px-4 py-2 font-medium text-white no-underline transition-colors hover:bg-sky-700"
            >
              See AI workflow guide
            </a>
            <a
              href="/download"
              class="rounded-full border border-slate-200 px-4 py-2 font-medium text-slate-700 no-underline transition-colors hover:border-slate-300 hover:text-slate-900 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-600"
            >
              Download FlyEnv
            </a>
          </div>
        </div>

        <div class="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-900">
          <img
            src="/home/flyenv-mcp.jpeg"
            alt="FlyEnv MCP workflow connecting local projects and services to AI coding clients"
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
            alt="FlyEnv MCP Server settings screen"
            class="w-full cursor-pointer"
            data-x-image-preview=""
            loading="lazy"
          />
        </div>

        <div>
          <div class="mb-4 inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
            FlyEnv MCP Server
          </div>
          <h3 class="no-border !text-2xl font-bold mb-4">A real control panel for the local AI bridge</h3>
          <p class="mb-4 leading-relaxed text-gray-600 dark:text-gray-400">
            Start and stop the MCP server from a UI, manage host, port, token, and auto-start
            behavior, then connect supported AI tools to the same local environment you already
            use for development.
          </p>
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div class="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <div class="mb-2 text-sm font-semibold text-slate-900 dark:text-slate-100">Same Context</div>
              <p class="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                AI clients see the same services, sites, and runtime choices you use locally.
              </p>
            </div>
            <div class="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <div class="mb-2 text-sm font-semibold text-slate-900 dark:text-slate-100">Private by Default</div>
              <p class="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                Keep the server on localhost by default and only open remote access when needed.
              </p>
            </div>
            <div class="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <div class="mb-2 text-sm font-semibold text-slate-900 dark:text-slate-100">Less Glue Code</div>
              <p class="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                Replace one-off scripts and manual config edits with a built-in bridge inside FlyEnv.
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
