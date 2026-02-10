<template>
  <div class="my-24 px-4">
    <div class="text-center mx-auto mb-12">
      <h2 id="tools-modules" tabindex="-1">工具模块 <a class="header-anchor" href="#tools-modules" aria-label="永久链接至“🚀 工具模块”"></a></h2>
      <p class="text-lg text-gray-500">
        你所需的其他一切，都已内置。小工具，大作用。
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
        <span class="shrink-0 max-w-full select-text text-center">Base64 字符串编码/解码</span>
      </div>

      <div
        class="overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <img class="max-w-[64px]" src="../SVG/base64-string.svg" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center">Base64 文件转换器</span>
      </div>

      <div
        class="overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <img class="max-w-[64px]" src="../SVG/urlencode.svg" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center">URL 编码/解码</span>
      </div>

      <div
        class="overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <img class="max-w-[64px]" src="../SVG/code.svg" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center">HTML 实体编码/解码</span>
      </div>

      <!-- 加密/安全类 -->
      <div
        class="overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <img class="max-w-[64px]" src="../SVG/encrypt.svg" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center">字符串加密/解密</span>
      </div>

      <div
        class="overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <img class="max-w-[64px]" src="../SVG/rsa.svg" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center">RSA 密钥对生成器</span>
      </div>

      <div
        class="overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <img class="max-w-[64px]" src="../SVG/sslmake.svg" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center">SSL 证书生成器</span>
      </div>

      <!-- 哈希/散列类 -->
      <div
        class="overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <img class="max-w-[64px]" src="../SVG/hash-text.svg" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center">字符串哈希计算</span>
      </div>

      <div
        class="overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <img class="max-w-[64px]" src="../SVG/tokenmake.svg" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center">令牌生成器</span>
      </div>

      <!-- 二维码类 -->
      <div
        class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <img class="max-w-[64px]" src="../SVG/qrcodemake.svg" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center">二维码生成器</span>
      </div>

      <div
        class="overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <img class="max-w-[64px]" src="../SVG/wifiqrcode.svg" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center">WiFi 二维码生成器</span>
      </div>

      <!-- 开发工具类 -->
      <a
        title="FlyEnv JSON 解析工具：JSON、JS、PHP 数组、XML、YAML、Go Struct、Java、Kotlin 全能互转"
        href="https://www.bilibili.com/video/BV1bAFQzGEPF/"
        target="_blank"
        class="group hover:scale-105 transition-all duration-300 relative no-underline overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <SVGUse class="max-w-[64px] text-[#3c3c43] dark:text-[#dfdff6]" :svg="import('../SVG/json1.svg?raw')" :raw-color="true" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center text-[#3c3c43] dark:text-[#dfdff6]">JSON 解析</span>
        <div class="absolute inset-0 flex items-center justify-center z-20">
          <SVGUse class="w-16 opacity-0 transition-all duration-300 group-hover:opacity-65" :svg="import('../SVG/play.svg?raw')" />
        </div>
      </a>

      <div
        class="overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <img class="max-w-[64px]" src="../SVG/urlparse.svg" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center">URL 解析器</span>
      </div>

      <a
        title="FlyEnv 代码演练场 & 代码图书馆.一键快速执行多种编程语言代码."
        href="https://www.bilibili.com/video/BV14Je6zhECW/"
        target="_blank"
        class="group hover:scale-105 transition-all duration-300 relative no-underline overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <SVGUse class="max-w-[64px] text-[#3c3c43] dark:text-[#dfdff6]" :svg="import('../SVG/codemake.svg?raw')" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center text-[#3c3c43] dark:text-[#dfdff6]">代码演练场</span>
        <div class="absolute inset-0 flex items-center justify-center z-20">
          <SVGUse class="w-16 opacity-0 transition-all duration-300 group-hover:opacity-65" :svg="import('../SVG/play.svg?raw')" />
        </div>
      </a>

      <a
        title="FlyEnv 代码演练场 & 代码图书馆.一键快速执行多种编程语言代码."
        href="https://www.bilibili.com/video/BV14Je6zhECW/"
        target="_blank"
        class="group hover:scale-105 transition-all duration-300 relative no-underline overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <SVGUse class="max-w-[64px] text-[#3c3c43] dark:text-[#dfdff6]" :svg="import('../SVG/code-library.svg?raw')" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center text-[#3c3c43] dark:text-[#dfdff6]">代码库</span>
        <div class="absolute inset-0 flex items-center justify-center z-20">
          <SVGUse class="w-16 opacity-0 transition-all duration-300 group-hover:opacity-65" :svg="import('../SVG/play.svg?raw')" />
        </div>
      </a>

      <a
        title="FlyEnv 环境配置工具：告别手动配置！一键搞定 Mac/Linux/Win 环境变量"
        href="https://www.bilibili.com/video/BV1zrFDz4ELJ/"
        target="_blank"
        class="group hover:scale-105 transition-all duration-300 relative no-underline overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <SVGUse class="max-w-[64px] text-[#3c3c43] dark:text-[#dfdff6]" :svg="import('../SVG/env.svg?raw')" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center text-[#3c3c43] dark:text-[#dfdff6]">系统环境变量</span>
        <div class="absolute inset-0 flex items-center justify-center z-20">
          <SVGUse class="w-16 opacity-0 transition-all duration-300 group-hover:opacity-65" :svg="import('../SVG/play.svg?raw')" />
        </div>
      </a>

      <!-- 正则表达式类 -->
      <div
        class="overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <img class="max-w-[64px]" src="../SVG/regexsheet.svg" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center">正则表达式速查表</span>
      </div>

      <div
        class="overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <img class="max-w-[64px]" src="../SVG/regextester.svg" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center">正则表达式测试器</span>
      </div>

      <!-- 时间日期类 -->
      <div
        class="overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <img class="max-w-[64px]" src="../SVG/time.svg" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center">时间戳转换</span>
      </div>

      <div
        class="overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <img class="max-w-[64px]" src="../SVG/time.svg" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center">URL 时序分析器</span>
      </div>

      <!-- 系统管理类 -->
      <div
        class="overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <img class="max-w-[64px]" src="../SVG/portkill.svg" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center">端口终结</span>
      </div>

      <div
        class="overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <img class="max-w-[64px]" src="../SVG/process.svg" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center">进程终结</span>
      </div>

      <div
        class="overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <img class="max-w-[64px]" src="../SVG/chmod.svg" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center">Chmod 计算器</span>
      </div>

      <!-- 图片处理类 -->
      <a
        title="FlyEnv「屏幕截图」工具：遮挡窗口捕获+内置编辑+无损色彩+全自定义"
        href="https://www.bilibili.com/video/BV1mdcuzfE2p/"
        target="_blank"
        class="group hover:scale-105 transition-all duration-300 relative no-underline overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <SVGUse class="max-w-[64px] text-[#3c3c43] dark:text-[#dfdff6]" :svg="import('../SVG/screenshot.svg?raw')" :raw-color="true" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center text-[#3c3c43] dark:text-[#dfdff6]">屏幕截图</span>
        <div class="absolute inset-0 flex items-center justify-center z-20">
          <SVGUse class="w-16 opacity-0 transition-all duration-300 group-hover:opacity-65" :svg="import('../SVG/play.svg?raw')" />
        </div>
      </a>

      <a
        title="FlyEnv 不只是开发环境！全新批量图处理工具，裁剪、压缩、水印一键搞定"
        href="https://www.bilibili.com/video/BV12ccgzxEE1/"
        target="_blank"
        class="group hover:scale-105 transition-all duration-300 no-underline relative overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <SVGUse class="max-w-[64px] text-[#3c3c43] dark:text-[#dfdff6]" :svg="import('../SVG/imagecompress.svg?raw')" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center text-[#3c3c43] dark:text-[#dfdff6]">图片压缩</span>
        <div class="absolute inset-0 flex items-center justify-center z-20">
          <SVGUse class="w-16 opacity-0 transition-all duration-300 group-hover:opacity-65" :svg="import('../SVG/play.svg?raw')" />
        </div>
      </a>

      <!-- 文件处理类 -->
      <div
        class="overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <img class="max-w-[64px]" src="../SVG/mime-types.svg" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center">MIME 类型</span>
      </div>

      <div
        class="overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <img class="max-w-[64px]" src="../SVG/fileinfo.svg" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center">文件信息</span>
      </div>

      <!-- 代码处理类 -->
      <div
        class="overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <img class="max-w-[64px]" src="../SVG/BOM.svg" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center">UTF-8 BOM 清理</span>
      </div>

      <div
        class="overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <img class="max-w-[64px]" src="../SVG/jiami.svg" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center">PHP 混淆器</span>
      </div>

      <!-- Markdown类 -->
      <div
        class="overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <img class="max-w-[64px]" src="../SVG/md.svg" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center">Markdown 预览</span>
      </div>

      <!-- 参考手册类 -->
      <div
        class="overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <img class="max-w-[64px]" src="../SVG/git.svg" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center">Git 速查表</span>
      </div>

      <div
        class="overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <img class="max-w-[64px]" src="../SVG/keycode.svg" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center">键位码信息</span>
      </div>

      <div
        class="overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <img class="max-w-[64px]" src="../SVG/httpstatus.svg" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center">HTTP 状态码</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import SVGUse from '../VueSvgIcon/use.vue'
</script>