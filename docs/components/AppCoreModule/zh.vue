<template>
  <div class="my-24 px-4">
    <div class="text-center mx-auto mb-12">
      <div id="🚀-core-modules" tabindex="-1" class="no-border text-3xl md:text-[40px] font-bold mb-4">🚀 核心模块 <a class="header-anchor" href="#🚀-core-modules" aria-label="Permalink to &quot;🚀 Core Modules&quot;">​</a></div>
      <p class="text-lg text-gray-500">
        为运行时、数据库、AI 智能体、基础设施和现代工作流提供统一的原生开发栈。
      </p>
    </div>
    <div class="grid grid-cols-2 gap-5 md:grid-cols-4 xl:grid-cols-6 select-none">
      <AppModules :type="7" />
      <AppModules :type="2" />
      <AppModules :type="1" />
      <AppModules :type="0" />
      <AppModules :type="9" />
      <AppModules :type="10" />
      <AppModules :type="6" />
      <AppModules :type="3" />
      <AppModules :type="5" />
      <AppModules :type="8" />
      <AppModules :type="11" />
      <AppModules :type="4" />
    </div>
  </div>
</template>
<script lang="ts" setup>
  import AppModules from '../AppModules/zh.vue'
</script>