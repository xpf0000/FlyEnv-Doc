<template>
  <div class="my-16 px-4">
    <div class="text-center max-w-3xl mx-auto mb-12">
      <div class="text-3xl md:text-[40px] font-bold mb-4">公平灵活的许可</div>
      <p class="text-lg text-gray-500">
        FlyEnv 可免费下载和使用。我们相信公平交换——支持项目以解锁无限潜力。
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <div class="border border-gray-200 dark:border-gray-700 rounded-2xl p-8 flex flex-col">
        <h3 class="text-2xl font-bold mb-2">社区版</h3>
        <div class="text-4xl font-bold mb-6">$0 <span class="text-lg font-normal text-gray-500">/ 永久免费</span></div>
        <p class="text-gray-500 mb-6">适合爱好者和个人学习者</p>
        <ul class="space-y-3 mb-8 flex-1 list-none">
          <li class="flex items-start">✅ <span class="ml-3"><strong>3个网站</strong> (本地站点)</span></li>
          <li class="flex items-start">✅ <span class="ml-3">所有 PHP、Node、Java、Go... 的<strong>原生速度</strong></span></li>
          <li class="flex items-start">✅ <span class="ml-3">无限制模块安装</span></li>
          <li class="flex items-start">✅ <span class="ml-3">自定义域名和 HTTPS 支持</span></li>
          <li class="flex items-start">✅ <span class="ml-3">支持通配符域名和 HTTPS</span></li>
          <li class="flex items-start">✅ <span class="ml-3">AI 助手</span></li>
          <li class="flex items-start">✅ <span class="ml-3">标准社区支持</span></li>
          <li class="flex items-start opacity-40 italic">❌ <span class="ml-3 text-gray-400">多设备同步</span></li>
        </ul>
        <a href="/download" class="mt-5 block no-underline text-center bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 py-3 rounded-lg font-semibold transition">立即下载</a>
      </div>
      <div class="border-2 border-brand rounded-2xl p-8 flex flex-col relative overflow-hidden">
        <div class="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">推荐</div>
        <h3 class="text-2xl font-bold mb-2">专业版许可</h3>
        <div class="text-lg font-bold mb-6 text-green-600">可通过金钱、代码或宣传支持获取</div>
        <p class="text-gray-500 mb-6">适合需要无限能力并希望支持开源精神的专业人士。</p>
        <ul class="space-y-3 mb-8 flex-1 list-none">
          <li class="flex items-start">✅ <span class="ml-3">社区版中的所有功能</span></li>
          <li class="flex items-start font-semibold text-brand">🚀 <span class="ml-3"><strong>无限制网站</strong>和虚拟主机</span></li>
          <li class="flex items-start">✅ <span class="ml-3"><strong>多设备同步</strong> (GitHub 登录)</span></li>
          <li class="flex items-start">✅ <span class="ml-3">新功能抢先体验</span></li>
          <li class="flex items-start">✅ <span class="ml-3">自定义端口和 CORS 配置</span></li>
          <li class="flex items-start">✅ <span class="ml-3">内置邮件服务器 (完整访问权限)</span></li>
          <li class="flex items-start">✅ <span class="ml-3">优先错误修复和支持</span></li>
          <li class="flex items-start font-bold">💎 <span class="ml-3">支持开源开发！</span></li>
        </ul>
        <div class="space-y-2">
          <div class="text-sm text-center text-gray-500 mb-2">如何获取专业版许可？任选一种方式：</div>
          <div class="grid grid-cols-3 gap-2 text-center text-xs">
            <div class="bg-gray-50 dark:bg-white/10 p-2 rounded">
              <div class="font-bold">💰 捐赠</div>
              <div class="scale-90 text-gray-500">任意金额</div>
            </div>
            <div class="bg-gray-50 dark:bg-white/10 p-2 rounded">
              <div class="font-bold">💻 贡献代码</div>
              <div class="scale-90 text-gray-500">提交 PR</div>
            </div>
            <div class="bg-gray-50 dark:bg-white/10 p-2 rounded">
              <div class="font-bold">📢 宣传推广</div>
              <div class="scale-90 text-gray-500">撰写文章</div>
            </div>
          </div>
        </div>
        <a href="/sponsor" class="mt-5 block no-underline text-center bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 py-3 rounded-lg font-semibold transition">获取专业版许可</a>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
</script>
<style>
  a.no-underline {
    text-decoration: none !important;
  }
  ul.list-none {
    list-style: none !important;
    padding: 0 !important;
  }
</style>