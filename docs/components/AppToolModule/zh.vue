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
      <a
        title="FlyEnv [Base64 编解码] 工具：字符串实时双向转换，告别在线加载 | FlyEnv 工具箱 | Base64 编解码神器"
        href="https://www.bilibili.com/video/BV1fPc4ztEL6/"
        target="_blank"
        class="group hover:scale-105 transition-all duration-300 relative no-underline overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <SVGUse class="max-w-[64px] text-[#3c3c43] dark:text-[#dfdff6]" :svg="import('../SVG/base64-string.svg?raw')" :raw-color="true" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center text-[#3c3c43] dark:text-[#dfdff6]">Base64 字符串编码/解码</span>
        <div class="absolute inset-0 flex items-center justify-center z-20">
          <SVGUse class="w-16 opacity-20 transition-all duration-300 group-hover:opacity-65" :svg="import('../SVG/play.svg?raw')" />
        </div>
      </a>

      <a
        title="FlyEnv [Base64 文件转换器] 工具: 图片与 Base64 互转神器：实时预览、一键编码，开发者必备工具"
        href="https://www.bilibili.com/video/BV1yzcbzGEer/"
        target="_blank"
        class="group hover:scale-105 transition-all duration-300 relative no-underline overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <SVGUse class="max-w-[64px] text-[#3c3c43] dark:text-[#dfdff6]" :svg="import('../SVG/base64-string.svg?raw')" :raw-color="true" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center text-[#3c3c43] dark:text-[#dfdff6]">Base64 文件转换器</span>
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
        <span class="shrink-0 max-w-full select-text text-center">URL 编码/解码</span>
      </div>

      <a
        title="FlyEnv [HTML 实体编解码] 工具: HTML 实体编解码神器，实时转义HTML特殊字符，告别乱码与 XSS"
        href="https://www.bilibili.com/video/BV1XbcYzvEmg/"
        target="_blank"
        class="group hover:scale-105 transition-all duration-300 relative no-underline overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <SVGUse class="max-w-[64px] text-[#3c3c43] dark:text-[#dfdff6]" :svg="import('../SVG/code.svg?raw')" :raw-color="true" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center text-[#3c3c43] dark:text-[#dfdff6]">HTML 实体编码/解码</span>
        <div class="absolute inset-0 flex items-center justify-center z-20">
          <SVGUse class="w-16 opacity-20 transition-all duration-300 group-hover:opacity-65" :svg="import('../SVG/play.svg?raw')" />
        </div>
      </a>

      <!-- 加密/安全类 -->
      <a
        title="FlyEnv [字符串加解密] 工具: 字符串加解密神器：支持 AES、TripleDES、Rabbit 及 RC4 实时转换"
        href="https://www.bilibili.com/video/BV1UBcYzbE2M/"
        target="_blank"
        class="group hover:scale-105 transition-all duration-300 relative no-underline overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <SVGUse class="max-w-[64px] text-[#3c3c43] dark:text-[#dfdff6]" :svg="import('../SVG/encrypt.svg?raw')" :raw-color="true" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center text-[#3c3c43] dark:text-[#dfdff6]">字符串加密/解密</span>
        <div class="absolute inset-0 flex items-center justify-center z-20">
          <SVGUse class="w-16 opacity-20 transition-all duration-300 group-hover:opacity-65" :svg="import('../SVG/play.svg?raw')" />
        </div>
      </a>

      <a
        title="FlyEnv [RSA密钥对生成器] 工具: RSA 公私钥一键生成神器：支持 512-4096位，安全高效免命令行"
        href="https://www.bilibili.com/video/BV11icbz5EWs/"
        target="_blank"
        class="group hover:scale-105 transition-all duration-300 relative no-underline overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <SVGUse class="max-w-[64px] text-[#3c3c43] dark:text-[#dfdff6]" :svg="import('../SVG/rsa.svg?raw')" :raw-color="true" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center text-[#3c3c43] dark:text-[#dfdff6]">RSA 密钥对生成器</span>
        <div class="absolute inset-0 flex items-center justify-center z-20">
          <SVGUse class="w-16 opacity-20 transition-all duration-300 group-hover:opacity-65" :svg="import('../SVG/play.svg?raw')" />
        </div>
      </a>

      <a
        title="FlyEnv [SSL证书生成] 工具: 本地 SSL 证书神器：一键生成根证书与任意域名证书，支持泛域名, 彻底告别 HTTPS 报错"
        href="https://www.bilibili.com/video/BV1GhcYzNEyw/"
        target="_blank"
        class="group hover:scale-105 transition-all duration-300 relative no-underline overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <SVGUse class="max-w-[64px] text-[#3c3c43] dark:text-[#dfdff6]" :svg="import('../SVG/sslmake.svg?raw')" :raw-color="true" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center text-[#3c3c43] dark:text-[#dfdff6]">SSL 证书生成器</span>
        <div class="absolute inset-0 flex items-center justify-center z-20">
          <SVGUse class="w-16 opacity-20 transition-all duration-300 group-hover:opacity-65" :svg="import('../SVG/play.svg?raw')" />
        </div>
      </a>

      <!-- 哈希/散列类 -->
      <a
        title="FlyEnv [Hash 文本] 工具: 全能哈希计算神器：支持MD5、SHA1、SHA3、RIPEMD160 及多种编码格式 | FlyEnv 工具箱"
        href="https://www.bilibili.com/video/BV1AZcxzYEKY/"
        target="_blank"
        class="group hover:scale-105 transition-all duration-300 relative no-underline overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <SVGUse class="max-w-[64px] text-[#3c3c43] dark:text-[#dfdff6]" :svg="import('../SVG/hash-text.svg?raw')" :raw-color="true" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center text-[#3c3c43] dark:text-[#dfdff6]">字符串哈希计算</span>
        <div class="absolute inset-0 flex items-center justify-center z-20">
          <SVGUse class="w-16 opacity-20 transition-all duration-300 group-hover:opacity-65" :svg="import('../SVG/play.svg?raw')" />
        </div>
      </a>

      <a
        title="FlyEnv [Token生成器] 工具: 安全随机字符串生成器, 1-512位长度随心定义，开发必备秘钥神器"
        href="https://www.bilibili.com/video/BV1W9cxzKEmM/"
        target="_blank"
        class="group hover:scale-105 transition-all duration-300 relative no-underline overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <SVGUse class="max-w-[64px] text-[#3c3c43] dark:text-[#dfdff6]" :svg="import('../SVG/tokenmake.svg?raw')" :raw-color="true" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center text-[#3c3c43] dark:text-[#dfdff6]">令牌生成器</span>
        <div class="absolute inset-0 flex items-center justify-center z-20">
          <SVGUse class="w-16 opacity-20 transition-all duration-300 group-hover:opacity-65" :svg="import('../SVG/play.svg?raw')" />
        </div>
      </a>

      <!-- 二维码类 -->
      <a
        title="FlyEnv [二维码生成] 工具. 自定义颜色, 实时预览, 下载高清大图"
        href="https://www.bilibili.com/video/BV1MSFdz4EDC/"
        target="_blank"
        class="group hover:scale-105 transition-all duration-300 relative no-underline overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <SVGUse class="max-w-[64px] text-[#3c3c43] dark:text-[#dfdff6]" :svg="import('../SVG/qrcodemake.svg?raw')" :raw-color="true" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center text-[#3c3c43] dark:text-[#dfdff6]">二维码生成器</span>
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
          <SVGUse class="w-16 opacity-20 transition-all duration-300 group-hover:opacity-65" :svg="import('../SVG/play.svg?raw')" />
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
          <SVGUse class="w-16 opacity-20 transition-all duration-300 group-hover:opacity-65" :svg="import('../SVG/play.svg?raw')" />
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
          <SVGUse class="w-16 opacity-20 transition-all duration-300 group-hover:opacity-65" :svg="import('../SVG/play.svg?raw')" />
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
      <a
        title="FlyEnv [Unix时间戳转换] 工具: 获取当前时间/任意时间的时间戳, 时间戳和日期时间互相转换"
        href="https://www.bilibili.com/video/BV1XJc4z7ENe/"
        target="_blank"
        class="group hover:scale-105 transition-all duration-300 relative no-underline overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <SVGUse class="max-w-[64px] text-[#3c3c43] dark:text-[#dfdff6]" :svg="import('../SVG/time.svg?raw')" :raw-color="true" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center text-[#3c3c43] dark:text-[#dfdff6]">时间戳转换</span>
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

      <a
        title="FlyEnv [Chmod 计算器] 工具: 可视化 Chmod 计算器. 一键搞定 Linux/macOS 文件权限，再也不用算加法"
        href="https://www.bilibili.com/video/BV1Q7ciz6ELv/"
        target="_blank"
        class="group hover:scale-105 transition-all duration-300 relative no-underline overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <SVGUse class="max-w-[64px] text-[#3c3c43] dark:text-[#dfdff6]" :svg="import('../SVG/chmod.svg?raw')" :raw-color="true" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center text-[#3c3c43] dark:text-[#dfdff6]">Chmod 计算器</span>
        <div class="absolute inset-0 flex items-center justify-center z-20">
          <SVGUse class="w-16 opacity-20 transition-all duration-300 group-hover:opacity-65" :svg="import('../SVG/play.svg?raw')" />
        </div>
      </a>

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
          <SVGUse class="w-16 opacity-20 transition-all duration-300 group-hover:opacity-65" :svg="import('../SVG/play.svg?raw')" />
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
          <SVGUse class="w-16 opacity-20 transition-all duration-300 group-hover:opacity-65" :svg="import('../SVG/play.svg?raw')" />
        </div>
      </a>

      <!-- 文件处理类 -->
      <a
        title="FlyEnv [MIME类型] 工具: MIME Type 与文件后缀名互转神器：开发者必备的媒体类型速查表"
        href="https://www.bilibili.com/video/BV1r1cbzMEBm/"
        target="_blank"
        class="group hover:scale-105 transition-all duration-300 relative no-underline overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 pt-1 dark:bg-slate-800 justify-between"
      >
        <div class="flex shrink-0 overflow-hidden items-center justify-center w-full px-7 py-1 aspect-square">
          <SVGUse class="max-w-[64px] text-[#3c3c43] dark:text-[#dfdff6]" :svg="import('../SVG/mime-types.svg?raw')" :raw-color="true" />
        </div>
        <span class="shrink-0 max-w-full select-text text-center text-[#3c3c43] dark:text-[#dfdff6]">MIME 类型</span>
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