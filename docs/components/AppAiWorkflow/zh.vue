<template>
  <section class="mx-auto my-16 max-w-7xl px-6 sm:my-20" aria-labelledby="ai-workflow-title-zh">
    <div class="grid items-center gap-8 rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-900/70 md:grid-cols-[0.9fr_1.1fr] md:p-8">
      <div>
        <p class="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-300">AI 编程工作区</p>
        <h2 id="ai-workflow-title-zh" class="no-border !text-3xl font-bold md:!text-[40px]">通过 MCP 把本地技术栈接到 AI 编程客户端</h2>
        <p class="mt-4 leading-7 text-slate-600 dark:text-slate-300">AI 编程客户端使用与你项目相同的本地环境，而不是另起一套虚拟环境。Claude Code、Codex 和其他 MCP 客户端可以直接使用 FlyEnv 已管理的运行时、服务和本地站点。</p>
        <ul class="mt-5 grid gap-2 text-sm leading-6 text-slate-700 dark:text-slate-200 sm:grid-cols-2">
          <li>管理项目专属运行时</li>
          <li>启停指定服务</li>
          <li>使用本地站点</li>
          <li>复用项目环境</li>
        </ul>
        <div class="mt-6 flex flex-wrap gap-3 text-sm">
          <a href="/zh/guide/ai-coding-workspace-mcp" data-analytics-event="solution_click" data-analytics-surface="ai-workflow" class="rounded-full bg-indigo-600 px-4 py-2 font-medium !text-white no-underline transition-colors hover:bg-indigo-700 dark:bg-indigo-400 dark:!text-slate-950 dark:hover:bg-indigo-300">探索 MCP</a>
          <a href="/zh/guide/ai-coding-workspace-mcp" data-analytics-event="solution_click" data-analytics-surface="ai-workflow-guide" class="rounded-full border border-slate-300 px-4 py-2 font-medium !text-slate-700 no-underline transition-colors hover:border-slate-400 hover:!text-slate-900 dark:border-slate-600 dark:!text-slate-200 dark:hover:border-slate-500">AI 编程指南</a>
        </div>
      </div>
      <div class="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-950">
        <img src="https://oss.macphpstudy.com/image/assets/home/flyenv-mcp.jpeg" alt="FlyEnv MCP 工作流，将本地项目与服务接入 AI 编程客户端" class="w-full cursor-pointer" data-x-image-preview="" loading="lazy" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
</script>
