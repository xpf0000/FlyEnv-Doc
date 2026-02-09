<template>
  <div class="my-24 px-4">
    <div class="text-center mx-auto mb-12">
      <h2 id="tools-modules" tabindex="-1">Tools Modules <a class="header-anchor" href="#tools-modules" aria-label="Permalink to &quot;🚀 Tools Modules&quot;"></a></h2>
      <p class="text-lg text-gray-500">
        Everything else you need, built right in. Small tools, big impact.
      </p>
    </div>
    <div class="grid grid-cols-2 gap-5 md:grid-cols-4 xl:grid-cols-6 select-none">
      <!-- 编码/解码类 -->
      <div
        class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <img class="max-w-[64px]" src="../SVG/base64-string.svg" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center">Base64 String Encoder/Decoder</span>
      </div>

      <div
        class="overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <img class="max-w-[64px]" src="../SVG/base64-string.svg" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center">Base64 File Converter</span>
      </div>

      <div
        class="overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <img class="max-w-[64px]" src="../SVG/urlencode.svg" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center">URL Encode/Decode</span>
      </div>

      <div
        class="overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <img class="max-w-[64px]" src="../SVG/code.svg" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center">HTML Entity Encode/Decode</span>
      </div>

      <!-- 加密/安全类 -->
      <div
        class="overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <img class="max-w-[64px]" src="../SVG/encrypt.svg" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center">Encrypt/Decrypt String</span>
      </div>

      <div
        class="overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <img class="max-w-[64px]" src="../SVG/rsa.svg" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center">RSA Key/Pair Generator</span>
      </div>

      <div
        class="overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <img class="max-w-[64px]" src="../SVG/sslmake.svg" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center">SSL Certificate Generator</span>
      </div>

      <!-- 哈希/散列类 -->
      <div
        class="overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <img class="max-w-[64px]" src="../SVG/hash-text.svg" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center">Hash String</span>
      </div>

      <div
        class="overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <img class="max-w-[64px]" src="../SVG/tokenmake.svg" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center">Token Generator</span>
      </div>

      <!-- 二维码类 -->
      <div
        class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <img class="max-w-[64px]" src="../SVG/qrcodemake.svg" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center">QRCode Generator</span>
      </div>

      <div
        class="overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <img class="max-w-[64px]" src="../SVG/wifiqrcode.svg" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center">WiFi QRCode Generator</span>
      </div>

      <!-- 开发工具类 -->
      <div
        class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <img class="max-w-[64px]" src="../SVG/json1.svg" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center">JSON Parse</span>
      </div>

      <div
        class="overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <img class="max-w-[64px]" src="../SVG/urlparse.svg" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center">URL Parser</span>
      </div>

      <div
        class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <img class="max-w-[64px]" src="../SVG/codemake.svg" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center">Code Playground</span>
      </div>

      <div
        class="overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <img class="max-w-[64px]" src="../SVG/code-library.svg" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center">Code Library</span>
      </div>

      <div
        class="overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <img class="max-w-[64px]" src="../SVG/env.svg" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center">System Env</span>
      </div>

      <!-- 正则表达式类 -->
      <div
        class="overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <img class="max-w-[64px]" src="../SVG/regexsheet.svg" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center">Regex Cheatsheet</span>
      </div>

      <div
        class="overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <img class="max-w-[64px]" src="../SVG/regextester.svg" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center">Regex Tester</span>
      </div>

      <!-- 时间日期类 -->
      <div
        class="overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <img class="max-w-[64px]" src="../SVG/time.svg" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center">Timestamp Conversion</span>
      </div>

      <div
        class="overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <img class="max-w-[64px]" src="../SVG/time.svg" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center">URL Timing Analyzer</span>
      </div>

      <!-- 系统管理类 -->
      <div
        class="overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <img class="max-w-[64px]" src="../SVG/portkill.svg" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center">Port Kill</span>
      </div>

      <div
        class="overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <img class="max-w-[64px]" src="../SVG/process.svg" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center">Process Kill</span>
      </div>

      <div
        class="overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <img class="max-w-[64px]" src="../SVG/chmod.svg" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center">Chmod Calculator</span>
      </div>

      <!-- 图片处理类 -->
      <a
        title="FlyEnv New Screen Capture Tool (Even Hidden Windows). Capture Anything, Anywhere!"
        href="https://youtu.be/cCXvWoJ4ayM"
        target="_blank"
        class="no-underline overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <img class="max-w-[64px]" src="../SVG/screenshot.svg" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center text-[#3c3c43] dark:text-[#dfdff6]">Screenshot</span>
      </a>

      <a
        title="FlyEnv’s New Batch Image Processor is Here. Resize, Compress & Watermark in Seconds"
        href="https://youtu.be/MqjFsqrpI0I"
        target="_blank"
        class="no-underline overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <img class="max-w-[64px]" src="../SVG/imagecompress.svg" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center text-[#3c3c43] dark:text-[#dfdff6]">Image Compression</span>
      </a>

      <!-- 文件处理类 -->
      <div
        class="overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <img class="max-w-[64px]" src="../SVG/mime-types.svg" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center">MIME Types</span>
      </div>

      <div
        class="overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <img class="max-w-[64px]" src="../SVG/fileinfo.svg" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center">File Info</span>
      </div>

      <!-- 代码处理类 -->
      <div
        class="overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <img class="max-w-[64px]" src="../SVG/BOM.svg" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center">UTF-8 BOM Cleaning</span>
      </div>

      <div
        class="overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <img class="max-w-[64px]" src="../SVG/jiami.svg" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center">PHP Obfuscator</span>
      </div>

      <!-- Markdown类 -->
      <div
        class="overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <img class="max-w-[64px]" src="../SVG/md.svg" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center">Markdown Preview</span>
      </div>

      <!-- 参考手册类 -->
      <div
        class="overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <img class="max-w-[64px]" src="../SVG/git.svg" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center">Git Cheatsheet</span>
      </div>

      <div
        class="overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <img class="max-w-[64px]" src="../SVG/keycode.svg" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center">Keycode Info</span>
      </div>

      <div
        class="overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <img class="max-w-[64px]" src="../SVG/httpstatus.svg" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center">HTTP Status Codes</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
</script>