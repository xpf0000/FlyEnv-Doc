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
      <a
        title="FlyEnv [Base64 Encoder & Decoder] Tool: Real-Time Base64 Encoder & Decoder"
        href="https://youtu.be/qpgUJZmS6Ig"
        target="_blank"
        class="group hover:scale-105 transition-all duration-300 relative no-underline overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <SVGUse class="max-w-[64px] text-[#3c3c43] dark:text-[#dfdff6]" :svg="import('../SVG/base64-string.svg?raw')" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center text-[#3c3c43] dark:text-[#dfdff6]">Base64 String Encoder/Decoder</span>
        <div class="absolute inset-0 flex items-center justify-center z-20">
          <SVGUse class="w-16 opacity-20 transition-all duration-300 group-hover:opacity-65" :svg="import('../SVG/play.svg?raw')" />
        </div>
      </a>

      <a
        title="FlyEnv [Base64 File Converter] Tool: Image to Base64 & Back: Instant File Converter for Developers"
        href="https://youtu.be/Zb5YPO5BTaY"
        target="_blank"
        class="group hover:scale-105 transition-all duration-300 relative no-underline overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <SVGUse class="max-w-[64px] text-[#3c3c43] dark:text-[#dfdff6]" :svg="import('../SVG/base64-string.svg?raw')" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center text-[#3c3c43] dark:text-[#dfdff6]">Base64 File Converter</span>
        <div class="absolute inset-0 flex items-center justify-center z-20">
          <SVGUse class="w-16 opacity-20 transition-all duration-300 group-hover:opacity-65" :svg="import('../SVG/play.svg?raw')" />
        </div>
      </a>

      <div
        class="overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <img class="max-w-[64px]" src="../SVG/urlencode.svg" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center">URL Encode/Decode</span>
      </div>

      <a
        title="FlyEnv [HTML Entity Encoder/Decoder] Tool: Real-Time HTML Entity Encoder & Decoder, Prevent XSS"
        href="https://youtu.be/LFazRyd_G3o"
        target="_blank"
        class="group hover:scale-105 transition-all duration-300 relative no-underline overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <SVGUse class="max-w-[64px] text-[#3c3c43] dark:text-[#dfdff6]" :svg="import('../SVG/code.svg?raw')" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center text-[#3c3c43] dark:text-[#dfdff6]">HTML Entity Encode/Decode</span>
        <div class="absolute inset-0 flex items-center justify-center z-20">
          <SVGUse class="w-16 opacity-20 transition-all duration-300 group-hover:opacity-65" :svg="import('../SVG/play.svg?raw')" />
        </div>
      </a>

      <!-- 加密/安全类 -->
      <a
        title="FlyEnv [Encrypt/Decrypt String] Tool: Real-Time String Encryption Tool: AES, TripleDES, Rabbit & RC4"
        href="https://youtu.be/NiJW09NCa_0"
        target="_blank"
        class="group hover:scale-105 transition-all duration-300 relative no-underline overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <SVGUse class="max-w-[64px] text-[#3c3c43] dark:text-[#dfdff6]" :svg="import('../SVG/encrypt.svg?raw')" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center text-[#3c3c43] dark:text-[#dfdff6]">Encrypt/Decrypt String</span>
        <div class="absolute inset-0 flex items-center justify-center z-20">
          <SVGUse class="w-16 opacity-20 transition-all duration-300 group-hover:opacity-65" :svg="import('../SVG/play.svg?raw')" />
        </div>
      </a>

      <a
        title="FlyEnv [RSA Key Pair Generator] Tool: Secure 512-4096 bit RSA Key Pair in Seconds"
        href="https://youtu.be/iPGTefjNWI8"
        target="_blank"
        class="group hover:scale-105 transition-all duration-300 relative no-underline overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <SVGUse class="max-w-[64px] text-[#3c3c43] dark:text-[#dfdff6]" :svg="import('../SVG/rsa.svg?raw')" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center text-[#3c3c43] dark:text-[#dfdff6]">RSA Key/Pair Generator</span>
        <div class="absolute inset-0 flex items-center justify-center z-20">
          <SVGUse class="w-16 opacity-20 transition-all duration-300 group-hover:opacity-65" :svg="import('../SVG/play.svg?raw')" />
        </div>
      </a>

      <a
        title="FlyEnv [SSL Certificate Generator] Tool: Local SSL Made Easy. Wildcard Certificates Instantly"
        href="https://youtu.be/X8W1FcwWc00"
        target="_blank"
        class="group hover:scale-105 transition-all duration-300 relative no-underline overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <SVGUse class="max-w-[64px] text-[#3c3c43] dark:text-[#dfdff6]" :svg="import('../SVG/sslmake.svg?raw')" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center text-[#3c3c43] dark:text-[#dfdff6]">SSL Certificate Generator</span>
        <div class="absolute inset-0 flex items-center justify-center z-20">
          <SVGUse class="w-16 opacity-20 transition-all duration-300 group-hover:opacity-65" :svg="import('../SVG/play.svg?raw')" />
        </div>
      </a>

      <!-- 哈希/散列类 -->
      <a
        title="FlyEnv [Hash String] Tool:  All-in-One Hash Generator: MD5, SHA1, SHA3, RIPEMD160 & Multi-Encoding"
        href="https://youtu.be/x36kdgUI16k"
        target="_blank"
        class="group hover:scale-105 transition-all duration-300 relative no-underline overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <SVGUse class="max-w-[64px] text-[#3c3c43] dark:text-[#dfdff6]" :svg="import('../SVG/hash-text.svg?raw')" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center text-[#3c3c43] dark:text-[#dfdff6]">Hash String</span>
        <div class="absolute inset-0 flex items-center justify-center z-20">
          <SVGUse class="w-16 opacity-20 transition-all duration-300 group-hover:opacity-65" :svg="import('../SVG/play.svg?raw')" />
        </div>
      </a>

      <a
        title="FlyEnv [Token Generator] Tool: Instant Secure Token Generator: Custom Random Strings (1-512 bits)"
        href="https://youtu.be/NSQNBS7zHqU"
        target="_blank"
        class="group hover:scale-105 transition-all duration-300 relative no-underline overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <SVGUse class="max-w-[64px] text-[#3c3c43] dark:text-[#dfdff6]" :svg="import('../SVG/tokenmake.svg?raw')" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center text-[#3c3c43] dark:text-[#dfdff6]">Token Generator</span>
        <div class="absolute inset-0 flex items-center justify-center z-20">
          <SVGUse class="w-16 opacity-20 transition-all duration-300 group-hover:opacity-65" :svg="import('../SVG/play.svg?raw')" />
        </div>
      </a>

      <!-- 二维码类 -->
      <a
        title="FlyEnv [QR Code Generator] Tool: Professional QR Code Generator. Custom Colors & High-Res Export"
        href="https://youtu.be/jZmnlraSHvs"
        target="_blank"
        class="group hover:scale-105 transition-all duration-300 relative no-underline overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <SVGUse class="max-w-[64px] text-[#3c3c43] dark:text-[#dfdff6]" :svg="import('../SVG/qrcodemake.svg?raw')" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center text-[#3c3c43] dark:text-[#dfdff6]">QRCode Generator</span>
        <div class="absolute inset-0 flex items-center justify-center z-20">
          <SVGUse class="w-16 opacity-20 transition-all duration-300 group-hover:opacity-65" :svg="import('../SVG/play.svg?raw')" />
        </div>
      </a>

      <div
        class="overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <img class="max-w-[64px]" src="../SVG/wifiqrcode.svg" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center">WiFi QRCode Generator</span>
      </div>

      <!-- 开发工具类 -->
      <a
        title="FlyEnv JSON Parse Tool:  Convert JSON,JS, PHP Array,XML,YAML,Go Struct,Java ,Kotlin to each other"
        href="https://youtu.be/DIX4lTgBP4c"
        target="_blank"
        class="group hover:scale-105 transition-all duration-300 relative no-underline overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <SVGUse class="max-w-[64px] text-[#3c3c43] dark:text-[#dfdff6]" :svg="import('../SVG/json1.svg?raw')" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center text-[#3c3c43] dark:text-[#dfdff6]">JSON Parse</span>
        <div class="absolute inset-0 flex items-center justify-center z-20">
          <SVGUse class="w-16 opacity-20 transition-all duration-300 group-hover:opacity-65" :svg="import('../SVG/play.svg?raw')" />
        </div>
      </a>

      <div
        class="overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <img class="max-w-[64px]" src="../SVG/urlparse.svg" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center">URL Parser</span>
      </div>

      <a
        title="FlyEnv Code Playground And Code Library. Execute code snippets in multiple languages instantly"
        href="https://youtu.be/yYSwnYC7V9M"
        target="_blank"
        class="group hover:scale-105 transition-all duration-300 relative no-underline overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <SVGUse class="max-w-[64px] text-[#3c3c43] dark:text-[#dfdff6]" :svg="import('../SVG/codemake.svg?raw')" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center text-[#3c3c43] dark:text-[#dfdff6]">Code Playground</span>
        <div class="absolute inset-0 flex items-center justify-center z-20">
          <SVGUse class="w-16 opacity-20 transition-all duration-300 group-hover:opacity-65" :svg="import('../SVG/play.svg?raw')" />
        </div>
      </a>

      <a
        title="FlyEnv Code Playground And Code Library. Execute code snippets in multiple languages instantly"
        href="https://youtu.be/yYSwnYC7V9M"
        target="_blank"
        class="group hover:scale-105 transition-all duration-300 relative no-underline overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <SVGUse class="max-w-[64px] text-[#3c3c43] dark:text-[#dfdff6]" :svg="import('../SVG/code-library.svg?raw')" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center text-[#3c3c43] dark:text-[#dfdff6]">Code Library</span>
        <div class="absolute inset-0 flex items-center justify-center z-20">
          <SVGUse class="w-16 opacity-20 transition-all duration-300 group-hover:opacity-65" :svg="import('../SVG/play.svg?raw')" />
        </div>
      </a>

      <a
        title="FlyEnv System Env Tool for macOS, Linux & Windows. Manage Environment Variables Like a Pro"
        href="https://youtu.be/sdbIbnIYoYY"
        target="_blank"
        class="group hover:scale-105 transition-all duration-300 relative no-underline overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <SVGUse class="max-w-[64px] text-[#3c3c43] dark:text-[#dfdff6]" :svg="import('../SVG/env.svg?raw')" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center text-[#3c3c43] dark:text-[#dfdff6]">System Env</span>
        <div class="absolute inset-0 flex items-center justify-center z-20">
          <SVGUse class="w-16 opacity-20 transition-all duration-300 group-hover:opacity-65" :svg="import('../SVG/play.svg?raw')" />
        </div>
      </a>

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
      <a
        title="FlyEnv [Timestamp Conversion] Tool: Ultimate Timestamp Converter: One-Click Date-Time Transformation"
        href="https://youtu.be/BYu3sNxuRF0"
        target="_blank"
        class="group hover:scale-105 transition-all duration-300 relative no-underline overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <SVGUse class="max-w-[64px] text-[#3c3c43] dark:text-[#dfdff6]" :svg="import('../SVG/time.svg?raw')" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center text-[#3c3c43] dark:text-[#dfdff6]">Timestamp Conversion</span>
        <div class="absolute inset-0 flex items-center justify-center z-20">
          <SVGUse class="w-16 opacity-20 transition-all duration-300 group-hover:opacity-65" :svg="import('../SVG/play.svg?raw')" />
        </div>
      </a>

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

      <a
        title="FlyEnv [Chmod Calculator] Tool: Visual Chmod Calculator. Master Linux File Permissions Instantly"
        href="https://youtu.be/2QxmRRVR15Q"
        target="_blank"
        class="group hover:scale-105 transition-all duration-300 relative no-underline overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <SVGUse class="max-w-[64px] text-[#3c3c43] dark:text-[#dfdff6]" :svg="import('../SVG/chmod.svg?raw')" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center text-[#3c3c43] dark:text-[#dfdff6]">Chmod Calculator</span>
        <div class="absolute inset-0 flex items-center justify-center z-20">
          <SVGUse class="w-16 opacity-20 transition-all duration-300 group-hover:opacity-65" :svg="import('../SVG/play.svg?raw')" />
        </div>
      </a>

      <!-- 图片处理类 -->
      <a
        title="FlyEnv New Screen Capture Tool (Even Hidden Windows). Capture Anything, Anywhere!"
        href="https://youtu.be/cCXvWoJ4ayM"
        target="_blank"
        class="group hover:scale-105 transition-all duration-300 relative no-underline overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <SVGUse class="max-w-[64px] text-[#3c3c43] dark:text-[#dfdff6]" :svg="import('../SVG/screenshot.svg?raw')" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center text-[#3c3c43] dark:text-[#dfdff6]">Screenshot</span>
        <div class="absolute inset-0 flex items-center justify-center z-20">
          <SVGUse class="w-16 opacity-20 transition-all duration-300 group-hover:opacity-65" :svg="import('../SVG/play.svg?raw')" />
        </div>
      </a>

      <a
        title="FlyEnv’s New Batch Image Processor is Here. Resize, Compress & Watermark in Seconds"
        href="https://youtu.be/MqjFsqrpI0I"
        target="_blank"
        class="group hover:scale-105 transition-all duration-300 relative no-underline overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <SVGUse class="max-w-[64px] text-[#3c3c43] dark:text-[#dfdff6]" :svg="import('../SVG/imagecompress.svg?raw')" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center text-[#3c3c43] dark:text-[#dfdff6]">Image Compression</span>
        <div class="absolute inset-0 flex items-center justify-center z-20">
          <SVGUse class="w-16 opacity-20 transition-all duration-300 group-hover:opacity-65" :svg="import('../SVG/play.svg?raw')" />
        </div>
      </a>

      <!-- 文件处理类 -->
      <a
        title="FlyEnv [MIME Type] Tool: Instant MIME Type & File Extension Lookup: The Ultimate Developer Reference"
        href="https://youtu.be/2KZK97EP8is"
        target="_blank"
        class="group hover:scale-105 transition-all duration-300 relative no-underline overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <SVGUse class="max-w-[64px] text-[#3c3c43] dark:text-[#dfdff6]" :svg="import('../SVG/mime-types.svg?raw')" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center text-[#3c3c43] dark:text-[#dfdff6]">MIME Types</span>
        <div class="absolute inset-0 flex items-center justify-center z-20">
          <SVGUse class="w-16 opacity-20 transition-all duration-300 group-hover:opacity-65" :svg="import('../SVG/play.svg?raw')" />
        </div>
      </a>

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
import SVGUse from '../VueSvgIcon/use.vue'
</script>