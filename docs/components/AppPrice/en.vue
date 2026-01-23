<template>
  <div class="my-16 px-4">
    <div class="text-center max-w-3xl mx-auto mb-12">
      <div class="text-3xl md:text-[40px] font-bold mb-4">Fair & Flexible Licensing</div>
      <p class="text-lg text-gray-500">
        FlyEnv is free to download and use. We believe in fair exchange—support the project to unlock unlimited potential.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <div class="border border-gray-200 dark:border-gray-700 rounded-2xl p-8 flex flex-col">
        <h3 class="text-2xl font-bold mb-2">Community Edition</h3>
        <div class="text-4xl font-bold mb-6">$0 <span class="text-lg font-normal text-gray-500">/ forever</span></div>
        <p class="text-gray-500 mb-6">Perfect for hobbyists and individual learners</p>
        <ul class="space-y-3 mb-8 flex-1 list-none">
          <li class="flex items-start">✅ <span class="ml-3"><strong>3 Websites</strong> (Local Sites)</span></li>
          <li class="flex items-start">✅ <span class="ml-3"><strong>Native Speed</strong> for all PHP, Node, Java, Go...</span></li>
          <li class="flex items-start">✅ <span class="ml-3">Unlimited Modules Installation</span></li>
          <li class="flex items-start">✅ <span class="ml-3">Custom Domains & HTTPS support</span></li>
          <li class="flex items-start">✅ <span class="ml-3">Support for wildcard domain names and HTTPS</span></li>
          <li class="flex items-start">✅ <span class="ml-3">AI Assistant</span></li>
          <li class="flex items-start">✅ <span class="ml-3">Standard Community Support</span></li>
          <li class="flex items-start opacity-40 italic">❌ <span class="ml-3 text-gray-400">Multi-Device Sync</span></li>
        </ul>
        <a href="/download" class="mt-5 block no-underline text-center bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 py-3 rounded-lg font-semibold transition">Download Now</a>
      </div>
      <div class="border-2 border-brand rounded-2xl p-8 flex flex-col relative overflow-hidden">
        <div class="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">RECOMMENDED</div>
        <h3 class="text-2xl font-bold mb-2">Pro License</h3>
        <div class="text-lg font-bold mb-6 text-green-600">Pay with Money, Code, or Voice</div>
        <p class="text-gray-500 mb-6">For professionals who need unlimited power and want to support the open-source spirit.</p>
        <ul class="space-y-3 mb-8 flex-1 list-none">
          <li class="flex items-start">✅ <span class="ml-3"> All features in the community edition</span></li>
          <li class="flex items-start font-semibold text-brand">🚀 <span class="ml-3"><strong>Unlimited Websites</strong> & Virtual Hosts</span></li>
          <li class="flex items-start">✅ <span class="ml-3"><strong>Multi-Device Sync</strong> (GitHub Login)</span></li>
          <li class="flex items-start">✅ <span class="ml-3">Early Access to New Features</span></li>
          <li class="flex items-start">✅ <span class="ml-3">Custom Port & CORS Configuration</span></li>
          <li class="flex items-start">✅ <span class="ml-3">Built-in Mail Server (Full Access)</span></li>
          <li class="flex items-start">✅ <span class="ml-3">Priority Bug Fixes & Support</span></li>
          <li class="flex items-start font-bold">💎 <span class="ml-3">Support Open Source Development!</span></li>
        </ul>
        <div class="space-y-2">
          <div class="text-sm text-center text-gray-500 mb-2">How to get a Pro License? Choose one:</div>
          <div class="grid grid-cols-3 gap-2 text-center text-xs">
            <div class="bg-gray-50 dark:bg-white/10 p-2 rounded">
              <div class="font-bold">💰 Donate</div>
              <div class="scale-90 text-gray-500">Any amount</div>
            </div>
            <div class="bg-gray-50 dark:bg-white/10 p-2 rounded">
              <div class="font-bold">💻 Contribute</div>
              <div class="scale-90 text-gray-500">Submit a PR</div>
            </div>
            <div class="bg-gray-50 dark:bg-white/10 p-2 rounded">
              <div class="font-bold">📢 Promote</div>
              <div class="scale-90 text-gray-500">Write a Post</div>
            </div>
          </div>
        </div>
        <a href="/sponsor" class="mt-5 block no-underline text-center bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 py-3 rounded-lg font-semibold transition">Get Pro License</a>
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