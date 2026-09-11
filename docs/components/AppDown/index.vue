<template>
  <main
    class="min-h-[calc(100vh-64px)] bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100"
  >
    <section
      class="relative overflow-hidden border-b border-slate-200/80 bg-white dark:border-slate-800 dark:bg-slate-900"
    >
      <div
        class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.14),transparent_42%)]"
      ></div>
      <div
        class="relative mx-auto max-w-6xl px-5 pb-14 pt-16 text-center sm:px-8 lg:pb-20 lg:pt-24"
      >
        <div
          class="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700 dark:border-blue-900/70 dark:bg-blue-950/50 dark:text-blue-300"
        >
          <span class="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
          FlyEnv {{ version }}
        </div>
        <h1
          class="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl dark:text-white"
          >{{ copy.title }}</h1
        >
        <p
          class="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-300"
          >{{ copy.subtitle }}</p
        >
        <div class="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm">
          <span
            class="inline-flex items-center gap-2 font-medium text-slate-700 dark:text-slate-200"
          >
            <span
              class="rounded-full bg-blue-100 px-2.5 py-1 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300"
              >{{ copy.latestVersion }}</span
            >
            {{ version }}
          </span>
          <a
            v-for="link in headerLinks"
            :key="link.label"
            class="inline-flex items-center gap-1.5 text-blue-600 transition hover:text-blue-700 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:text-blue-400 dark:focus:ring-offset-slate-900"
            :href="link.href"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ link.label }}
            <el-icon :size="14"><Link /></el-icon>
          </a>
        </div>
      </div>
    </section>

    <div class="mx-auto max-w-6xl space-y-16 px-5 py-12 sm:px-8 lg:py-16">
      <section aria-labelledby="downloads-title">
        <div class="mb-8"
          ><h2 id="downloads-title" class="text-2xl font-bold tracking-tight sm:text-3xl">{{
            copy.otherDownloads
          }}</h2></div
        >
        <div class="space-y-10">
          <section
            v-for="group in groupedDownloads"
            :key="group.id"
            :aria-labelledby="`${group.id}-title`"
          >
            <div class="mb-4 flex items-center gap-3"
              ><div
                class="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                ><img
                  v-if="group.icon === 'linux'"
                  src="https://oss.macphpstudy.com/image/assets/icons/linux.svg"
                  alt=""
                  aria-hidden="true"
                  class="h-6 w-6" /><svg
                  v-else
                  class="h-6 w-6"
                  :class="{
                    'text-blue-600 dark:text-blue-400': group.icon === 'windows',
                    'text-slate-700 dark:text-slate-200': group.icon === 'macos',
                    'text-amber-600 dark:text-amber-400': group.icon === 'linux'
                  }"
                  :viewBox="osIconViewBox(group.icon)"
                  aria-hidden="true"
                >
                  <path :d="osIconPath(group.icon)" fill="currentColor" /></svg></div
              ><div
                ><h3 :id="`${group.id}-title`" class="text-xl font-semibold">{{ group.title }}</h3
                ><p class="text-sm text-slate-500 dark:text-slate-400">{{
                  group.description
                }}</p></div
              ></div
            >
            <div class="grid gap-4 md:grid-cols-2">
              <article
                v-for="item in group.items"
                :key="item.id"
                class="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-700"
              >
                <div class="flex items-start justify-between gap-4"
                  ><div
                    ><h4 class="text-lg font-semibold">{{ item.title }}</h4
                    ><p class="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{{
                      item.description
                    }}</p></div
                  ><span
                    class="rounded-lg bg-slate-100 p-2 text-slate-500 dark:bg-slate-800 dark:text-slate-300"
                    ><img
                      v-if="item.icon === 'linux'"
                      src="https://oss.macphpstudy.com/image/assets/icons/linux.svg"
                      alt=""
                      aria-hidden="true"
                      class="h-5 w-5" /><svg
                      v-else
                      class="h-5 w-5"
                      :class="{
                        'text-blue-600 dark:text-blue-400': item.icon === 'windows',
                        'text-slate-700 dark:text-slate-200': item.icon === 'macos',
                        'text-amber-600 dark:text-amber-400': item.icon === 'linux'
                      }"
                      :viewBox="osIconViewBox(item.icon)"
                      aria-hidden="true"
                    >
                      <path :d="osIconPath(item.icon)" fill="currentColor" /></svg></span
                ></div>
                <div
                  class="mt-5 flex flex-wrap gap-2 text-xs font-medium text-slate-500 dark:text-slate-400"
                  ><span class="rounded-md bg-slate-100 px-2.5 py-1 dark:bg-slate-800">{{
                    item.architecture
                  }}</span
                  ><span class="rounded-md bg-slate-100 px-2.5 py-1 dark:bg-slate-800">{{
                    item.format
                  }}</span
                  ><span class="rounded-md bg-slate-100 px-2.5 py-1 dark:bg-slate-800">{{
                    version
                  }}</span
                  ><span class="rounded-md bg-slate-100 px-2.5 py-1 dark:bg-slate-800">{{
                    formatSize(item.size)
                  }}</span></div
                >
                <a
                  :href="item.href"
                  :download="fileName(item.href)"
                  class="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-blue-200 px-4 py-2.5 text-sm font-semibold text-blue-700 transition hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-[0.99] dark:border-blue-800 dark:text-blue-300 dark:hover:bg-blue-950/50 dark:focus:ring-offset-slate-900"
                  ><el-icon :size="17"><Download /></el-icon>{{ copy.download }}</a
                >
              </article>
            </div>
          </section>
        </div>
      </section>

      <section class="grid gap-6 lg:grid-cols-[1.05fr_1fr]" aria-labelledby="help-title">
        <div
          class="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 sm:p-8"
          ><div
            class="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-700 dark:bg-blue-950/70 dark:text-blue-300"
            ><el-icon :size="23"><InfoFilled /></el-icon></div
          ><h2 id="help-title" class="mt-5 text-xl font-bold">{{ copy.notSureTitle }}</h2
          ><dl class="mt-4 space-y-2 text-sm leading-6 text-slate-600 dark:text-slate-300"
            ><div
              v-for="hint in copy.selectionHints"
              :key="hint.label"
              class="flex flex-wrap gap-x-1"
              ><dt class="font-semibold text-slate-800 dark:text-slate-100">{{ hint.label }}:</dt
              ><dd>{{ hint.value }}</dd></div
            ></dl
          ></div
        >
        <div
          class="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 sm:p-8"
          aria-labelledby="trust-title"
          ><h2 id="trust-title" class="text-xl font-bold">{{ copy.trustTitle }}</h2
          ><div class="mt-5 grid gap-4 sm:grid-cols-3 lg:grid-cols-1"
            ><div v-for="trust in trustItems" :key="trust.title" class="flex gap-3"
              ><div class="mt-0.5 text-emerald-600 dark:text-emerald-400"
                ><el-icon :size="20"><component :is="trust.icon" /></el-icon></div
              ><div
                ><h3 class="text-sm font-semibold">{{ trust.title }}</h3
                ><p class="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400"
                  ><template v-if="trust.link">{{ trust.descriptionPrefix }}<a
                    :href="trust.link.href"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-blue-400"
                    >{{ trust.link.label }}</a
                  >{{ trust.descriptionSuffix }}</template
                  ><template v-else>{{ trust.description }}</template></p
                ></div
              ></div
            ></div
          ></div
        >
      </section>

      <section aria-labelledby="faq-title"
        ><div class="mb-6"
          ><h2 id="faq-title" class="text-2xl font-bold tracking-tight sm:text-3xl">{{
            copy.faqTitle
          }}</h2></div
        ><div
          class="divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white dark:divide-slate-800 dark:border-slate-800 dark:bg-slate-900"
          ><details v-for="faq in faqs" :key="faq.question" class="group px-5 sm:px-7"
            ><summary
              class="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-sm font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 [&::-webkit-details-marker]:hidden"
              >{{ faq.question
              }}<span class="text-xl font-normal text-slate-400 transition group-open:rotate-45"
                >+</span
              ></summary
            ><p class="max-w-3xl pb-5 pr-8 text-sm leading-6 text-slate-600 dark:text-slate-300"
              ><template v-if="faq.link">{{ faq.answerPrefix }}<a
                :href="faq.link.href"
                target="_blank"
                rel="noopener noreferrer"
                class="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-blue-400"
                >{{ faq.link.label }}</a
              >{{ faq.answerSuffix }}</template
              ><template v-else>{{ faq.answer }}</template>
              <span v-if="faq.links.length" class="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                <a
                  v-for="link in faq.links"
                  :key="link.href"
                  :href="link.href"
                  class="inline-flex items-center gap-1 text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-blue-400"
                >
                  {{ link.label }}
                  <el-icon :size="13"><Link /></el-icon>
                </a>
              </span> </p></details></div
      ></section>
    </div>
  </main>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useData } from 'vitepress'
  import { CircleCheckFilled, Cpu, Download, InfoFilled, Link } from '@element-plus/icons-vue'

  const { lang } = useData()
  const version = 'v4.18.2'

  const locale = computed(() =>
    lang.value === 'zh-CN'
      ? 'zh'
      : lang.value === 'id-ID'
        ? 'id'
        : lang.value === 'es-ES'
          ? 'es'
          : 'en'
  )
  const copyByLocale = {
    en: {
      title: 'Download FlyEnv',
      subtitle:
        'Choose the build for your system. FlyEnv is available for Windows, macOS and Linux.',
      latestVersion: 'Latest version',
      releaseNotes: 'Release notes',
      buildHistory: 'Build history',
      signedBuilds: 'Signed builds',
      otherDownloads: 'Choose your download',
      download: 'Download',
      notSureTitle: 'Not sure which download to choose?',
      selectionHints: [
        { label: 'Most Windows users', value: 'Windows Installer' },
        { label: 'Apple Silicon Macs', value: 'Apple Silicon' },
        { label: 'Intel Macs', value: 'Intel' },
        { label: 'Ubuntu/Debian', value: '.deb' },
        { label: 'Fedora/Red Hat/SUSE/CentOS', value: '.rpm' }
      ],
      trustTitle: 'Why trust this download?',
      faqTitle: 'Frequently asked questions',
      licenseGuide: 'License guide',
      purchaseLicense: 'Buy a license',
      windowsDescription: 'Windows builds for a quick setup or a no-install workflow.',
      macDescription: 'Native disk images for both Apple Silicon and Intel Macs.',
      linuxDescription: 'Packages for Debian-based and Red Hat-based distributions.',
      windowsInstaller: 'Windows Installer',
      windowsInstallerDescription: 'Recommended for most Windows users.',
      windowsPortable: 'Windows Portable',
      windowsPortableDescription: 'No installation required. Extract and run.',
      macArm: 'macOS Apple Silicon',
      macArmDescription: 'For M1, M2, M3, M4 and newer Apple Silicon Macs.',
      macX86: 'macOS Intel',
      macX86Description: 'For Intel-based Macs.',
      debX64: 'Debian / Ubuntu',
      debX64Description: 'Install the x64 .deb package on Debian or Ubuntu.',
      debArm64: 'Debian / Ubuntu ARM64',
      debArm64Description: 'Install the ARM64 .deb package on compatible systems.',
      rpmX64: 'Red Hat / Fedora / SUSE / CentOS',
      rpmX64Description: 'Install the x64 .rpm package on RPM-based distributions.',
      rpmArm64: 'Red Hat / Fedora / SUSE / CentOS ARM64',
      rpmArm64Description: 'Install the ARM64 .rpm package on compatible systems.',
      openSource: 'Open source',
      openSourceDescription: 'Source code is available for review on GitHub.',
      transparentBuilds: 'Transparent builds',
      transparentBuildsDescription: 'Release artifacts and build history are publicly visible.',
      codeSigning: 'Code signing',
      signPathFoundation: 'SignPath Foundation',
      codeSigningDescriptionPrefix: 'Windows builds are digitally signed through ',
      codeSigningDescriptionSuffix: '.',
      faq1: 'Which build should I download?',
      faq1Answer:
        'Choose the build that matches your operating system. On Linux, choose .deb for Debian or Ubuntu and .rpm for Fedora, Red Hat, SUSE or CentOS.',
      faq2: 'Is FlyEnv free?',
      faq2Answer:
        'FlyEnv can be downloaded and used for core local development without a license. Some premium tools have evaluation limits; a one-time $10 license unlocks premium access on one active device.',
      faq3: 'Are the installers signed?',
      faq3AnswerPrefix: 'Windows installers are digitally signed through ',
      faq3AnswerSuffix:
        ', and macOS installers are also digitally signed. You can review source code and build records on GitHub.'
    },
    zh: {
      title: '下载 FlyEnv',
      subtitle: '选择适合你系统的版本。FlyEnv 支持 Windows、macOS 和 Linux。',
      latestVersion: '最新版本',
      releaseNotes: '更新日志',
      buildHistory: '构建记录',
      signedBuilds: '已签名构建',
      otherDownloads: '选择下载版本',
      download: '下载',
      notSureTitle: '不知道该选择哪个版本？',
      selectionHints: [
        { label: '大多数 Windows 用户', value: 'Windows 安装版' },
        { label: 'Apple Silicon Mac', value: 'Apple Silicon' },
        { label: 'Intel Mac', value: 'Intel' },
        { label: 'Ubuntu/Debian', value: '.deb' },
        { label: 'Fedora/Red Hat/SUSE/CentOS', value: '.rpm' }
      ],
      trustTitle: '为什么可以信任这个下载？',
      faqTitle: '常见问题',
      licenseGuide: '许可证指南',
      purchaseLicense: '购买许可证',
      windowsDescription: '提供快速安装和免安装两种 Windows 版本。',
      macDescription: '同时支持 Apple Silicon 与 Intel Mac。',
      linuxDescription: '提供 Debian 系和 Red Hat 系发行版的软件包。',
      windowsInstaller: 'Windows 安装版',
      windowsInstallerDescription: '适合大多数 Windows 用户。',
      windowsPortable: 'Windows 便携版',
      windowsPortableDescription: '无需安装，解压后即可运行。',
      macArm: 'macOS Apple Silicon',
      macArmDescription: '适用于 M1、M2、M3、M4 及更新的 Apple Silicon Mac。',
      macX86: 'macOS Intel',
      macX86Description: '适用于 Intel 处理器 Mac。',
      debX64: 'Debian / Ubuntu',
      debX64Description: '在 Debian 或 Ubuntu 上安装 x64 .deb 软件包。',
      debArm64: 'Debian / Ubuntu ARM64',
      debArm64Description: '在兼容设备上安装 ARM64 .deb 软件包。',
      rpmX64: 'Red Hat / Fedora / SUSE / CentOS',
      rpmX64Description: '在基于 RPM 的发行版上安装 x64 .rpm 软件包。',
      rpmArm64: 'Red Hat / Fedora / SUSE / CentOS ARM64',
      rpmArm64Description: '在兼容设备上安装 ARM64 .rpm 软件包。',
      openSource: '开源代码',
      openSourceDescription: '源代码在 GitHub 上公开，方便审阅。',
      transparentBuilds: '透明构建',
      transparentBuildsDescription: '发布文件和构建记录均公开可查。',
      codeSigning: '代码签名',
      signPathFoundation: 'SignPath Foundation',
      codeSigningDescriptionPrefix: 'Windows 构建通过',
      codeSigningDescriptionSuffix: '进行数字签名。',
      faq1: '我应该下载哪个版本？',
      faq1Answer:
        '请选择与你的操作系统匹配的版本。Linux 用户在 Debian 或 Ubuntu 上选择 .deb，在 Fedora、Red Hat、SUSE 或 CentOS 上选择 .rpm。',
      faq2: 'FlyEnv 是免费的吗？',
      faq2Answer:
        'FlyEnv 无需许可证即可下载并用于核心本地开发。部分高级工具会有评估限制；一次性支付 10 美元即可为一台设备解锁高级功能。',
      faq3: '安装包是否经过签名？',
      faq3AnswerPrefix: 'Windows 安装包通过',
      faq3AnswerSuffix:
        '进行数字签名，macOS 安装包也已进行数字签名。你也可以在 GitHub 查看源代码和构建记录。'
    },
    id: {
      title: 'Unduh FlyEnv',
      subtitle: 'Pilih build untuk sistem Anda. FlyEnv tersedia untuk Windows, macOS, dan Linux.',
      latestVersion: 'Versi terbaru',
      releaseNotes: 'Catatan rilis',
      buildHistory: 'Riwayat build',
      signedBuilds: 'Build bertanda tangan',
      otherDownloads: 'Pilih unduhan Anda',
      download: 'Unduh',
      notSureTitle: 'Bingung memilih unduhan?',
      selectionHints: [
        { label: 'Sebagian besar pengguna Windows', value: 'Windows Installer' },
        { label: 'Mac Apple Silicon', value: 'Apple Silicon' },
        { label: 'Mac Intel', value: 'Intel' },
        { label: 'Ubuntu/Debian', value: '.deb' },
        { label: 'Fedora/Red Hat/SUSE/CentOS', value: '.rpm' }
      ],
      trustTitle: 'Mengapa unduhan ini tepercaya?',
      faqTitle: 'Pertanyaan umum',
      licenseGuide: 'Panduan lisensi',
      purchaseLicense: 'Beli lisensi',
      windowsDescription: 'Build Windows untuk instalasi cepat atau penggunaan tanpa instalasi.',
      macDescription: 'Disk image native untuk Mac Apple Silicon dan Intel.',
      linuxDescription: 'Paket untuk distribusi berbasis Debian dan Red Hat.',
      windowsInstaller: 'Windows Installer',
      windowsInstallerDescription: 'Direkomendasikan untuk sebagian besar pengguna Windows.',
      windowsPortable: 'Windows Portable',
      windowsPortableDescription: 'Tanpa instalasi. Ekstrak lalu jalankan.',
      macArm: 'macOS Apple Silicon',
      macArmDescription: 'Untuk Mac Apple Silicon M1, M2, M3, M4 dan yang lebih baru.',
      macX86: 'macOS Intel',
      macX86Description: 'Untuk Mac berbasis Intel.',
      debX64: 'Debian / Ubuntu',
      debX64Description: 'Pasang paket .deb x64 di Debian atau Ubuntu.',
      debArm64: 'Debian / Ubuntu ARM64',
      debArm64Description: 'Pasang paket .deb ARM64 pada sistem yang kompatibel.',
      rpmX64: 'Red Hat / Fedora / SUSE / CentOS',
      rpmX64Description: 'Pasang paket .rpm x64 pada distribusi berbasis RPM.',
      rpmArm64: 'Red Hat / Fedora / SUSE / CentOS ARM64',
      rpmArm64Description: 'Pasang paket .rpm ARM64 pada sistem yang kompatibel.',
      openSource: 'Open source',
      openSourceDescription: 'Kode sumber tersedia untuk ditinjau di GitHub.',
      transparentBuilds: 'Build transparan',
      transparentBuildsDescription: 'Artefak rilis dan riwayat build dapat dilihat publik.',
      codeSigning: 'Penandatanganan kode',
      signPathFoundation: 'SignPath Foundation',
      codeSigningDescriptionPrefix: 'Build Windows ditandatangani secara digital melalui ',
      codeSigningDescriptionSuffix: '.',
      faq1: 'Build mana yang harus saya unduh?',
      faq1Answer:
        'Pilih build yang sesuai dengan sistem operasi Anda. Di Linux, pilih .deb untuk Debian atau Ubuntu dan .rpm untuk Fedora, Red Hat, SUSE atau CentOS.',
      faq2: 'Apakah FlyEnv gratis?',
      faq2Answer:
        'FlyEnv dapat diunduh dan digunakan untuk pengembangan lokal inti tanpa lisensi. Beberapa alat premium memiliki batas evaluasi; lisensi satu kali seharga $10 membuka akses premium pada satu perangkat.',
      faq3: 'Apakah installer telah ditandatangani?',
      faq3AnswerPrefix: 'Installer Windows ditandatangani secara digital melalui ',
      faq3AnswerSuffix:
        ', dan installer macOS juga ditandatangani secara digital. Kode sumber dan catatan build tersedia di GitHub.'
    },
    es: {
      title: 'Descargar FlyEnv',
      subtitle:
        'Elige la versión para tu sistema. FlyEnv está disponible para Windows, macOS y Linux.',
      latestVersion: 'Última versión',
      releaseNotes: 'Notas de la versión',
      buildHistory: 'Historial de compilaciones',
      signedBuilds: 'Compilaciones firmadas',
      otherDownloads: 'Elige tu descarga',
      download: 'Descargar',
      notSureTitle: '¿No sabes qué descarga elegir?',
      selectionHints: [
        { label: 'La mayoría de los usuarios de Windows', value: 'Instalador de Windows' },
        { label: 'Mac con Apple Silicon', value: 'Apple Silicon' },
        { label: 'Mac con Intel', value: 'Intel' },
        { label: 'Ubuntu/Debian', value: '.deb' },
        { label: 'Fedora/Red Hat/SUSE/CentOS', value: '.rpm' }
      ],
      trustTitle: '¿Por qué confiar en esta descarga?',
      faqTitle: 'Preguntas frecuentes',
      licenseGuide: 'Guía de licencias',
      purchaseLicense: 'Comprar una licencia',
      windowsDescription: 'Versiones de Windows para una instalación rápida o un uso sin instalación.',
      macDescription: 'Imágenes de disco nativas para Mac con Apple Silicon e Intel.',
      linuxDescription: 'Paquetes para distribuciones basadas en Debian y en Red Hat.',
      windowsInstaller: 'Instalador de Windows',
      windowsInstallerDescription: 'Recomendado para la mayoría de los usuarios de Windows.',
      windowsPortable: 'Windows Portable',
      windowsPortableDescription: 'No requiere instalación. Descomprime y ejecuta.',
      macArm: 'macOS Apple Silicon',
      macArmDescription: 'Para Mac con Apple Silicon M1, M2, M3, M4 y modelos posteriores.',
      macX86: 'macOS Intel',
      macX86Description: 'Para Mac con procesador Intel.',
      debX64: 'Debian / Ubuntu',
      debX64Description: 'Instala el paquete .deb x64 en Debian o Ubuntu.',
      debArm64: 'Debian / Ubuntu ARM64',
      debArm64Description: 'Instala el paquete .deb ARM64 en sistemas compatibles.',
      rpmX64: 'Red Hat / Fedora / SUSE / CentOS',
      rpmX64Description: 'Instala el paquete .rpm x64 en distribuciones basadas en RPM.',
      rpmArm64: 'Red Hat / Fedora / SUSE / CentOS ARM64',
      rpmArm64Description: 'Instala el paquete .rpm ARM64 en sistemas compatibles.',
      openSource: 'Código abierto',
      openSourceDescription: 'El código fuente está disponible para revisión en GitHub.',
      transparentBuilds: 'Compilaciones transparentes',
      transparentBuildsDescription:
        'Los artefactos de cada versión y el historial de compilaciones son visibles públicamente.',
      codeSigning: 'Firma de código',
      signPathFoundation: 'SignPath Foundation',
      codeSigningDescriptionPrefix:
        'Las compilaciones de Windows están firmadas digitalmente a través de ',
      codeSigningDescriptionSuffix: '.',
      faq1: '¿Qué versión debo descargar?',
      faq1Answer:
        'Elige la versión que corresponda a tu sistema operativo. En Linux, elige .deb para Debian o Ubuntu y .rpm para Fedora, Red Hat, SUSE o CentOS.',
      faq2: '¿FlyEnv es gratuito?',
      faq2Answer:
        'FlyEnv se puede descargar y usar para el desarrollo local básico sin licencia. Algunas herramientas premium tienen límites de evaluación; una licencia única de $10 desbloquea el acceso premium en un dispositivo activo.',
      faq3: '¿Los instaladores están firmados?',
      faq3AnswerPrefix: 'Los instaladores de Windows están firmados digitalmente a través de ',
      faq3AnswerSuffix:
        ', y los instaladores de macOS también están firmados digitalmente. Puedes revisar el código fuente y los registros de compilación en GitHub.'
    }
  } as const
  const copy = computed(() => copyByLocale[locale.value])

  const urls = {
    win: 'https://github.com/xpf0000/FlyEnv/releases/download/v4.18.2/FlyEnv-Setup-4.18.2.exe',
    winPortable:
      'https://github.com/xpf0000/FlyEnv/releases/download/v4.18.2/FlyEnv-Portable-4.18.2.exe',
    macX86: 'https://github.com/xpf0000/FlyEnv/releases/download/v4.18.2/FlyEnv-4.18.2.dmg',
    macArm: 'https://github.com/xpf0000/FlyEnv/releases/download/v4.18.2/FlyEnv-4.18.2-arm64.dmg',
    linuxDebX64:
      'https://github.com/xpf0000/FlyEnv/releases/download/v4.18.2/FlyEnv-4.18.2-x64.deb',
    linuxDebArm64:
      'https://github.com/xpf0000/FlyEnv/releases/download/v4.18.2/FlyEnv-4.18.2-arm64.deb',
    linuxRpmX64:
      'https://github.com/xpf0000/FlyEnv/releases/download/v4.18.2/FlyEnv-4.18.2-x64.rpm',
    linuxRpmArm64:
      'https://github.com/xpf0000/FlyEnv/releases/download/v4.18.2/FlyEnv-4.18.2-arm64.rpm'
  }
  const osIconPaths = {
    windows:
      'M0 139.392L409.429333 81.92l0.170667 407.210667-409.216 2.389333L0 139.392z m409.301333 395.818667L409.6 942.08 0 884.181333V532.48l409.301333 2.730667z m41.258667-454.186667L1024 0v487.125333l-573.44 4.394667V81.024zM1024 533.333333L1023.872 1024l-572.501333-79.274667-0.810667-412.245333 573.44 0.896z',
    macos:
      'M928.768 750.592c-1.536 4.096-21.504 74.24-70.656 145.92-43.008 62.464-87.04 124.928-156.672 125.952-68.608 1.024-90.624-40.96-168.96-40.96s-102.912 39.936-167.936 41.984c-67.072 2.56-118.784-68.096-161.792-130.048C115.2 767.488 47.616 534.528 138.24 378.88c44.544-77.824 124.928-127.488 211.968-129.024 65.536-1.024 128.512 44.544 168.448 44.544 40.96 0 116.736-55.296 196.608-47.104 33.28 1.536 126.976 13.824 186.88 101.376-4.608 3.072-111.616 66.56-110.592 195.072 1.024 155.136 135.68 206.336 137.216 206.848m-266.24-586.24c35.84-44.032 59.904-104.448 53.248-164.352-51.2 2.048-114.176 34.304-151.04 77.824-32.768 37.888-61.952 99.328-53.76 158.72 56.832 3.072 115.712-30.208 151.552-72.192'
  } as const
  const osIconViewBox = (_platform: string) => '0 0 1024 1024'
  const osIconPath = (platform: string) => osIconPaths[platform as keyof typeof osIconPaths]
  const formatSize = (bytes: number) => `${Math.round(bytes / (1024 * 1024))}M`
  const allDownloads = computed(() => [
    {
      id: 'win',
      platform: 'windows',
      title: copy.value.windowsInstaller,
      description: copy.value.windowsInstallerDescription,
      architecture: 'x64',
      format: '.exe',
      size: 144794356,
      href: urls.win,
      icon: 'windows'
    },
    {
      id: 'winPortable',
      platform: 'windows',
      title: copy.value.windowsPortable,
      description: copy.value.windowsPortableDescription,
      architecture: 'x64',
      format: '.exe · portable',
      size: 205357792,
      href: urls.winPortable,
      icon: 'windows'
    },
    {
      id: 'macArm',
      platform: 'macos',
      title: copy.value.macArm,
      description: copy.value.macArmDescription,
      architecture: 'arm64',
      format: '.dmg',
      size: 170505055,
      href: urls.macArm,
      icon: 'macos'
    },
    {
      id: 'macX86',
      platform: 'macos',
      title: copy.value.macX86,
      description: copy.value.macX86Description,
      architecture: 'x86_64',
      format: '.dmg',
      size: 180008988,
      href: urls.macX86,
      icon: 'macos'
    },
    {
      id: 'linuxDebX64',
      platform: 'linux',
      title: copy.value.debX64,
      description: copy.value.debX64Description,
      architecture: 'x64',
      format: '.deb',
      size: 139648464,
      href: urls.linuxDebX64,
      icon: 'linux'
    },
    {
      id: 'linuxDebArm64',
      platform: 'linux',
      title: copy.value.debArm64,
      description: copy.value.debArm64Description,
      architecture: 'arm64',
      format: '.deb',
      size: 133321620,
      href: urls.linuxDebArm64,
      icon: 'linux'
    },
    {
      id: 'linuxRpmX64',
      platform: 'linux',
      title: copy.value.rpmX64,
      description: copy.value.rpmX64Description,
      architecture: 'x64',
      format: '.rpm',
      size: 119386849,
      href: urls.linuxRpmX64,
      icon: 'linux'
    },
    {
      id: 'linuxRpmArm64',
      platform: 'linux',
      title: copy.value.rpmArm64,
      description: copy.value.rpmArm64Description,
      architecture: 'arm64',
      format: '.rpm',
      size: 113632117,
      href: urls.linuxRpmArm64,
      icon: 'linux'
    }
  ])
  const groupedDownloads = computed(() => [
    {
      id: 'windows',
      title: 'Windows',
      description: copy.value.windowsDescription,
      icon: 'windows',
      items: allDownloads.value.filter((item) => item.platform === 'windows')
    },
    {
      id: 'macos',
      title: 'macOS',
      description: copy.value.macDescription,
      icon: 'macos',
      items: allDownloads.value.filter((item) => item.platform === 'macos')
    },
    {
      id: 'linux',
      title: 'Linux',
      description: copy.value.linuxDescription,
      icon: 'linux',
      items: allDownloads.value.filter((item) => item.platform === 'linux')
    }
  ])
  const trustItems = computed(() => [
    {
      title: copy.value.openSource,
      description: copy.value.openSourceDescription,
      descriptionPrefix: '',
      descriptionSuffix: '',
      link: null,
      icon: CircleCheckFilled
    },
    {
      title: copy.value.transparentBuilds,
      description: copy.value.transparentBuildsDescription,
      descriptionPrefix: '',
      descriptionSuffix: '',
      link: null,
      icon: Cpu
    },
    {
      title: copy.value.codeSigning,
      description: '',
      descriptionPrefix: copy.value.codeSigningDescriptionPrefix,
      descriptionSuffix: copy.value.codeSigningDescriptionSuffix,
      link: { label: copy.value.signPathFoundation, href: 'https://signpath.io/' },
      icon: CircleCheckFilled
    }
  ])
  const faqs = computed(() => [
    {
      question: copy.value.faq1,
      answer: copy.value.faq1Answer,
      answerPrefix: '',
      answerSuffix: '',
      link: null,
      links: []
    },
    {
      question: copy.value.faq2,
      answer: copy.value.faq2Answer,
      answerPrefix: '',
      answerSuffix: '',
      link: null,
      links: [
        {
          label: copy.value.licenseGuide,
          href:
            locale.value === 'zh'
              ? '/zh/guide/about-license'
              : locale.value === 'id'
                ? '/id/guide/about-license'
                : locale.value === 'es'
                  ? '/es/guide/about-license'
                  : '/guide/about-license'
        },
        {
          label: copy.value.purchaseLicense,
          href:
            locale.value === 'zh'
              ? '/zh/license'
              : locale.value === 'id'
                ? '/id/license'
                : locale.value === 'es'
                  ? '/es/license'
                  : '/license'
        }
      ]
    },
    {
      question: copy.value.faq3,
      answer: '',
      answerPrefix: copy.value.faq3AnswerPrefix,
      answerSuffix: copy.value.faq3AnswerSuffix,
      link: { label: copy.value.signPathFoundation, href: 'https://signpath.io/' },
      links: []
    }
  ])
  const headerLinks = computed(() => [
    { label: copy.value.releaseNotes, href: 'https://github.com/xpf0000/FlyEnv/releases' },
    { label: copy.value.buildHistory, href: 'https://github.com/xpf0000/FlyEnv/actions' },
    { label: copy.value.signedBuilds, href: 'https://signpath.io' }
  ])
  function fileName(url: string) {
    return url.substring(url.lastIndexOf('/') + 1)
  }
</script>
