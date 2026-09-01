<template>
  <section class="mx-auto my-16 max-w-7xl px-6 sm:my-20" aria-labelledby="ai-workflow-title">
    <div class="grid items-center gap-8 rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-900/70 md:grid-cols-[0.9fr_1.1fr] md:p-8">
      <div>
        <p class="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-300">AI coding workspace</p>
        <h2 id="ai-workflow-title" class="no-border !text-3xl font-bold md:!text-[40px]">Connect your local stack to AI coding clients with MCP</h2>
        <p class="mt-4 leading-7 text-slate-600 dark:text-slate-300">Your AI coding client works in the same local environment as your project—not a separate virtual setup. Let Claude Code, Codex and other MCP clients work with the same runtimes, services and local sites already managed by FlyEnv.</p>
        <ul class="mt-5 grid gap-2 text-sm leading-6 text-slate-700 dark:text-slate-200 sm:grid-cols-2">
          <li>Manage project-specific runtimes</li>
          <li>Start and stop selected services</li>
          <li>Work with local sites</li>
          <li>Use project-specific environments</li>
        </ul>
        <div class="mt-6 flex flex-wrap gap-3 text-sm">
          <a href="/guide/ai-coding-workspace-mcp" data-analytics-event="solution_click" data-analytics-surface="ai-workflow" class="rounded-full bg-indigo-600 px-4 py-2 font-medium !text-white no-underline transition-colors hover:bg-indigo-700 dark:bg-indigo-400 dark:!text-slate-950 dark:hover:bg-indigo-300">Explore MCP</a>
          <a href="/guide/ai-coding-workspace-mcp" data-analytics-event="solution_click" data-analytics-surface="ai-workflow-guide" class="rounded-full border border-slate-300 px-4 py-2 font-medium !text-slate-700 no-underline transition-colors hover:border-slate-400 hover:!text-slate-900 dark:border-slate-600 dark:!text-slate-200 dark:hover:border-slate-500">AI Coding Guide</a>
        </div>
      </div>
      <div class="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-950">
        <img src="/home/flyenv-mcp.jpeg" alt="FlyEnv MCP workflow connecting local projects and services to AI coding clients" class="w-full cursor-pointer" data-x-image-preview="" loading="lazy" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
</script>
