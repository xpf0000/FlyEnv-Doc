<template>
  <main
    class="new-home overflow-hidden bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-50"
  >
    <section
      aria-labelledby="new-home-hero-title"
      class="relative isolate overflow-hidden bg-[radial-gradient(circle_at_72%_42%,rgba(191,224,255,0.72),transparent_27%),linear-gradient(115deg,#ffffff_20%,#f1f8ff_100%)] dark:bg-[radial-gradient(circle_at_72%_42%,rgba(30,101,195,0.32),transparent_29%),linear-gradient(115deg,#020617_20%,#0c1d37_100%)]"
    >
      <div
        class="mx-auto grid max-w-[1400px] gap-7 px-5 pb-14 pt-14 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-8 lg:px-12 lg:pb-20 lg:pt-20"
      >
        <div class="relative z-10 max-w-[39rem]">
          <p class="mb-5 text-sm font-semibold text-blue-700 dark:text-blue-300"
            >Mã nguồn mở <span aria-hidden="true">/</span> Sẵn sàng cho AI
            <span aria-hidden="true">/</span> macOS, Windows, Linux</p
          >
          <h1
            id="new-home-hero-title"
            class="no-border !mb-0 !text-4xl !font-extrabold !leading-[1.04] !tracking-[-0.055em] text-slate-950 sm:!text-5xl lg:!text-[3.55rem] dark:!text-white"
          >
            Nói cho AI của bạn biết bạn muốn chạy gì.
            <span class="block text-blue-600 dark:text-blue-400"
              >FlyEnv cung cấp mọi thứ nó cần.</span
            >
          </h1>
          <p
            class="mt-6 max-w-[36rem] text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-300"
          >
            Cung cấp cho các AI agent một môi trường local thực sự với các runtime,
            dịch vụ, site, tên miền, HTTPS và các URL hoạt động.
          </p>
          <p class="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400"
            >Từ một câu nhắc đến một dự án đang chạy trên máy của bạn.</p
          >
          <div class="mt-7 flex flex-wrap gap-3">
            <a
              href="/vi/download"
              data-analytics-event="download_click"
              data-analytics-surface="new-home-hero"
              class="inline-flex items-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold !text-white no-underline shadow-[0_12px_28px_rgba(37,99,235,0.24)] transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:translate-y-px"
              >Tải xuống FlyEnv <span class="ml-2" aria-hidden="true">↓</span></a
            >
            <a
              href="https://github.com/xpf0000/FlyEnv"
              data-analytics-event="github_click"
              data-analytics-surface="new-home-hero"
              class="inline-flex items-center rounded-xl border border-slate-300 bg-white/80 px-5 py-3 text-sm font-semibold !text-slate-800 no-underline transition hover:border-blue-300 hover:!text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:translate-y-px dark:border-slate-600 dark:bg-slate-900/70 dark:!text-slate-100 dark:hover:border-blue-400 dark:hover:!text-blue-300"
              >Xem trên GitHub <span class="ml-2" aria-hidden="true">↗</span></a
            >
          </div>
        </div>
        <div class="relative">
          <img
            src="https://oss.macphpstudy.com/image/assets/home/newhome/hero-right.webp"
            width="1448"
            height="1086"
            alt="AI agent đang thiết lập môi trường Laravel local thông qua FlyEnv"
            class="relative z-10 mx-auto w-full max-w-[48rem] lg:translate-x-5"
            fetchpriority="high"
          />
          <img
            src="https://oss.macphpstudy.com/image/assets/home/newhome/hero-font.webp"
            alt=""
            aria-hidden="true"
            class="pointer-events-none absolute right-[-40px] top-[-40px] hidden w-[20.5rem] max-w-none opacity-75 lg:block"
          />
        </div>
      </div>
    </section>

    <section
      aria-labelledby="ai-workflow-title"
      class="border-y border-sky-100 bg-sky-50/70 py-16 dark:border-slate-800 dark:bg-slate-900/70 sm:py-20"
    >
      <div class="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div class="mx-auto max-w-3xl text-center">
          <p class="text-sm font-bold text-blue-600 dark:text-blue-300">QUY TRÌNH AI</p>
          <h2
            id="ai-workflow-title"
            class="no-border !mb-0 !mt-3 !text-3xl !font-extrabold !tracking-[-0.04em] sm:!text-4xl"
            >Từ một yêu cầu đơn giản đến một site local hoạt động.</h2
          >
          <p class="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300"
            >FlyEnv kết nối các AI coding agent với một môi trường local thực sự thông qua MCP.</p
          >
        </div>
        <ol class="mt-10 pt-8 grid list-none gap-4 !pl-0 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
          <li
            v-for="(step, index) in workflowSteps"
            :key="step.title"
            class="relative rounded-2xl border border-slate-200 bg-white p-5 pt-7 shadow-[0_10px_26px_rgba(37,99,235,0.08)] dark:border-slate-700 dark:bg-slate-900"
          >
            <span
              class="absolute left-5 top-5 flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white"
              >{{ index + 1 }}</span
            >
            <span
              class="workflow-icon mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-400/10 dark:text-blue-300"
              aria-hidden="true"
            >
              <img
                v-if="index === 2"
                src="https://oss.macphpstudy.com/image/assets/home/newhome/FlyEnv-Icon.webp"
                alt=""
                class="h-12 w-12 object-contain"
              />
              <component :is="workflowIcons[index]" v-else class="h-11 w-11" />
            </span>
            <h3 class="no-border !mb-0 !mt-4 text-center !text-lg !font-bold !leading-6">{{
              step.title
            }}</h3>
            <p
              v-if="step.quote"
              class="mt-3 text-sm font-medium leading-6 text-slate-600 dark:text-slate-300"
              >“{{ step.quote }}”</p
            >
            <ul
              v-else
              class="mt-3 list-none space-y-1.5 !pl-0 text-sm leading-5 text-slate-600 dark:text-slate-300"
            >
              <li v-for="item in step.items" :key="item">{{ item }}</li>
            </ul>
            <p
              v-if="step.url"
              class="mt-5 inline-flex rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300"
              >{{ step.url }}</p
            >
            <p v-if="step.ready" class="mt-3 text-sm font-medium text-slate-500 dark:text-slate-400"
              >Sẵn sàng phát triển.</p
            >
            <span
              v-if="index < workflowSteps.length - 1"
              class="absolute -right-5 top-1/2 z-10 hidden -translate-y-1/2 text-2xl font-bold text-blue-500 lg:block"
              aria-hidden="true"
              >→</span
            >
          </li>
        </ol>
      </div>
    </section>

    <section aria-labelledby="continuous-workflow-title" class="relative py-16 sm:py-24">
      <div class="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div class="mx-auto max-w-3xl text-center">
          <h2
            id="continuous-workflow-title"
            class="no-border !mb-0 !text-3xl !font-extrabold !tracking-[-0.04em] sm:!text-4xl"
            >AI của bạn không chỉ dừng lại ở việc viết code.</h2
          >
          <p class="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300"
            >Nó có thể chạy, kiểm thử và sửa các dự án local với FlyEnv.</p
          >
        </div>
        <div class="mt-11 grid items-center gap-8 lg:grid-cols-[1.2fr_1.05fr_0.62fr]">
          <img
            src="https://oss.macphpstudy.com/image/assets/home/newhome/work-loop-cli.webp"
            width="1448"
            height="1086"
            alt="AI coding client đang chạy, kiểm tra và sửa một dự án local"
            class="mx-auto w-full lg:scale-[1.1]"
            loading="lazy"
          />
          <img
            src="https://oss.macphpstudy.com/image/assets/home/newhome/work-loop.webp"
            width="1254"
            height="1254"
            alt="Quy trình phát triển local liên tục của FlyEnv MCP: chạy, mở, đọc log, sửa và kiểm thử"
            class="mx-auto w-full max-w-[34rem]"
            loading="lazy"
          />
          <ul class="relative grid list-none gap-3 !pl-0 sm:grid-cols-2 lg:grid-cols-1">
            <li
              v-for="benefit in loopBenefits"
              :key="benefit"
              class="rounded-xl border border-sky-100 bg-sky-50 px-4 py-3 text-sm font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
              ><span class="mr-2 text-emerald-600 dark:text-emerald-400" aria-hidden="true">✓</span
              >{{ benefit }}</li
            >
            <img
              src="https://oss.macphpstudy.com/image/assets/home/newhome/work-loop-font.webp"
              alt=""
              aria-hidden="true"
              class="pointer-events-none absolute right-0 -top-32 hidden w-[17rem] max-w-none opacity-70 xl:block"
              loading="lazy"
            />
          </ul>
        </div>
      </div>
    </section>

    <section
      aria-labelledby="local-stack-title"
      class="border-y border-sky-100 bg-sky-50/70 py-16 dark:border-slate-800 dark:bg-slate-900/70 sm:py-20"
    >
      <div class="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div class="max-w-3xl">
            <h2
              id="local-stack-title"
              class="no-border !mb-0 !text-3xl !font-extrabold !tracking-[-0.04em] sm:!text-4xl"
              >Một stack local hoàn chỉnh, sẵn sàng khi bạn cần.</h2
            >
            <p class="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300"
              >Các runtime, cơ sở dữ liệu, web server và công cụ phát triển được quản lý local.</p
            >
          </div>
          <a
            href="/vi/features"
            data-analytics-surface="new-home-local-stack"
            class="shrink-0 text-sm font-bold text-blue-600 no-underline hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-200"
            >Xem tất cả tính năng <span aria-hidden="true">→</span></a
          >
        </div>
        <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <article
            v-for="group in stackGroups"
            :key="group.title"
            class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900"
          >
            <h3 class="no-border !mb-0 !text-lg !font-bold">{{ group.title }}</h3>
            <ul class="mt-5 space-y-3">
              <li
                v-for="item in group.items"
                :key="item.name"
                class="flex items-center gap-2.5 text-sm font-medium text-slate-600 dark:text-slate-300"
              >
                <img
                  v-if="item.logo"
                  :src="item.logo"
                  alt=""
                  class="h-5 w-5 object-contain"
                  loading="lazy"
                />
                <span
                  v-else
                  class="flex h-5 w-5 items-center justify-center rounded-md bg-blue-50 text-xs font-bold text-blue-600 dark:bg-blue-400/10 dark:text-blue-300"
                  >+</span
                >
                {{ item.name }}
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section aria-labelledby="open-source-title" class="relative py-16 sm:py-28">
      <div class="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div class="grid items-center gap-9 lg:grid-cols-[0.94fr_1.06fr]">
          <div class="max-w-xl">
            <p class="text-sm font-bold text-blue-600 dark:text-blue-300">MÃ NGUỒN MỞ</p>
            <h2
              id="open-source-title"
              class="no-border !mb-0 !mt-3 !text-3xl !font-extrabold !tracking-[-0.04em] sm:!text-4xl"
              >Mã nguồn mở, không phải hộp đen.</h2
            >
            <p class="mt-5 text-base leading-7 text-slate-600 dark:text-slate-300"
              >Kiểm tra mã nguồn, hiểu lớp runtime và giữ quyền kiểm soát môi trường local mà AI
              agent của bạn vận hành.</p
            >
            <div class="mt-7 flex flex-wrap gap-3">
              <a
                href="https://github.com/xpf0000/FlyEnv"
                data-analytics-event="github_click"
                data-analytics-surface="new-home-open-source"
                class="inline-flex rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold !text-white no-underline transition hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:translate-y-px dark:bg-white dark:!text-slate-950 dark:hover:bg-slate-200"
                >Xem trên GitHub <span class="ml-2" aria-hidden="true">↗</span></a
              >
              <a
                href="https://github.com/xpf0000/FlyEnv/blob/main/CONTRIBUTING.md"
                data-analytics-event="github_click"
                data-analytics-surface="new-home-contribute"
                class="inline-flex rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold !text-slate-800 no-underline transition hover:border-blue-300 hover:!text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:translate-y-px dark:border-slate-600 dark:!text-slate-100 dark:hover:border-blue-400 dark:hover:!text-blue-300"
                >Đóng góp</a
              >
            </div>
            <ul class="mt-7 pt-10 flex list-none flex-wrap gap-x-4 gap-y-3 !pl-0">
              <li v-for="stat in githubStats" :key="stat.alt" class="list-none">
                <a
                  :href="stat.href"
                  class="inline-flex rounded-md p-1 no-underline transition hover:bg-blue-50 dark:hover:bg-blue-400/10"
                >
                  <img :src="stat.badge" :alt="stat.alt" class="h-6 w-auto" loading="lazy" />
                </a>
              </li>
            </ul>
          </div>
          <div class="relative pl-6">
            <img
              src="https://oss.macphpstudy.com/image/assets/home/newhome/opensource.webp"
              width="1672"
              height="941"
              alt="Các tệp dự án mã nguồn mở của FlyEnv và mã thiết lập môi trường local"
              class="w-full"
              loading="lazy"
            />
            <img
              src="https://oss.macphpstudy.com/image/assets/home/newhome/opensource-font.webp"
              alt=""
              aria-hidden="true"
              class="pointer-events-none absolute right-0 -top-24 hidden w-[16rem] max-w-none opacity-70 xl:block"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>

    <section
      aria-labelledby="native-development-title"
      class="relative overflow-hidden border-y border-sky-100 bg-[radial-gradient(circle_at_50%_15%,rgba(219,238,255,0.72),transparent_34%),linear-gradient(180deg,#f8fcff_0%,#eef8ff_100%)] py-20 dark:border-slate-800 dark:bg-[radial-gradient(circle_at_50%_15%,rgba(30,101,195,0.2),transparent_34%),linear-gradient(180deg,#081426_0%,#0b1b31_100%)] sm:py-24 lg:py-28"
    >
      <div class="relative mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-4xl text-center">
          <p class="text-sm font-extrabold tracking-[0.04em] text-blue-600 dark:text-blue-300"
            >PHÁT TRIỂN LOCAL BẢN ĐỊA</p
          >
          <h2
            id="native-development-title"
            class="no-border !mb-0 !mt-4 !text-4xl !font-extrabold !leading-[1.05] !tracking-[-0.055em] text-slate-950 sm:!text-5xl lg:!text-[3.55rem] dark:!text-white"
            >Được xây dựng cho máy của bạn.</h2
          >
          <p
            class="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-xl sm:leading-8 dark:text-slate-300"
            >FlyEnv chạy các dịch vụ bản địa, chỉ cài đặt những gì bạn cần và điều chỉnh phiên bản
            runtime cho từng dự án.</p
          >
        </div>

        <div class="mt-12 grid gap-5 xl:grid-cols-2">
          <article
            data-native-feature
            class="grid min-h-[23.5rem] overflow-hidden rounded-2xl border border-sky-100 bg-white/90 p-6 shadow-[0_18px_50px_rgba(48,118,184,0.08)] backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/90 sm:p-8 md:grid-cols-[0.84fr_1.16fr] md:items-center md:gap-8"
          >
            <div class="flex h-full flex-col items-start">
              <p
                class="rounded-xl bg-blue-50 px-4 py-2 text-xs font-extrabold text-blue-600 dark:bg-blue-400/10 dark:text-blue-300"
                >DỊCH VỤ BẢN ĐỊA</p
              >
              <h3
                class="no-border !mb-0 !mt-6 !text-3xl !font-extrabold !leading-[1.12] !tracking-[-0.04em]"
                >Chạy trực tiếp trên máy của bạn.</h3
              >
              <p class="mt-5 text-base leading-7 text-slate-600 dark:text-slate-300"
                >Chạy stack local của bạn trực tiếp trên hệ điều hành máy chủ, không có lớp
                container.</p
              >
              <p
                class="mt-7 inline-flex items-center gap-3 rounded-xl bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-600 dark:bg-blue-400/10 dark:text-blue-300 md:mt-auto"
              >
                <Lightning class="h-5 w-5" aria-hidden="true" />
                Các tiến trình bản địa
              </p>
            </div>

            <div
              data-native-visual
              aria-hidden="true"
              class="mt-8 flex flex-col items-center md:mt-0"
            >
              <div
                class="flex w-44 items-center justify-center gap-3 rounded-xl border border-blue-100 bg-white px-4 py-3 shadow-[0_10px_28px_rgba(37,99,235,0.08)] dark:border-slate-700 dark:bg-slate-800"
              >
                <img
                  src="https://oss.macphpstudy.com/image/assets/home/newhome/FlyEnv-Icon.webp"
                  alt=""
                  aria-hidden="true"
                  class="h-11 w-11 rounded-lg object-contain"
                />
                <span class="text-lg font-extrabold">FlyEnv</span>
              </div>
              <span class="h-7 border-l-2 border-blue-500" aria-hidden="true"></span>
              <div
                class="grid w-full grid-cols-3 rounded-xl border border-blue-100 bg-white px-4 py-3 shadow-[0_10px_28px_rgba(37,99,235,0.07)] dark:border-slate-700 dark:bg-slate-800"
              >
                <div
                  v-for="platform in nativePlatforms"
                  :key="platform.name"
                  class="flex flex-col items-center gap-2 text-xs font-medium text-slate-600 dark:text-slate-300"
                >
                  <img
                    v-if="platform.icon"
                    :src="platform.icon"
                    alt=""
                    aria-hidden="true"
                    class="h-7 w-7 object-contain"
                  />
                  <svg
                    v-else
                    viewBox="0 0 1024 1024"
                    class="h-7 w-7"
                    :class="platform.color"
                    aria-hidden="true"
                  >
                    <path :d="platform.path" fill="currentColor" />
                  </svg>
                  <span>{{ platform.name }}</span>
                </div>
              </div>
              <span class="h-7 border-l-2 border-blue-500" aria-hidden="true"></span>
              <div
                class="grid w-full grid-cols-5 gap-2 rounded-xl border border-blue-100 bg-white px-3 py-4 shadow-[0_10px_28px_rgba(37,99,235,0.07)] dark:border-slate-700 dark:bg-slate-800"
              >
                <div
                  v-for="service in nativeServices"
                  :key="service.name"
                  class="flex min-w-0 flex-col items-center gap-2 text-center text-[11px] font-medium text-slate-600 dark:text-slate-300"
                >
                  <img
                    :src="service.logo"
                    alt=""
                    aria-hidden="true"
                    class="h-7 w-7 object-contain"
                  />
                  <span>{{ service.name }}</span>
                </div>
              </div>
            </div>
          </article>

          <article
            data-native-feature
            class="grid min-h-[23.5rem] overflow-hidden rounded-2xl border border-sky-100 bg-white/90 p-6 shadow-[0_18px_50px_rgba(48,118,184,0.08)] backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/90 sm:p-8 md:grid-cols-[0.84fr_1.16fr] md:items-center md:gap-8"
          >
            <div class="flex h-full flex-col items-start">
              <p
                class="rounded-xl bg-blue-50 px-4 py-2 text-xs font-extrabold text-blue-600 dark:bg-blue-400/10 dark:text-blue-300"
                >CÀI ĐẶT THEO YÊU CẦU</p
              >
              <h3
                class="no-border !mb-0 !mt-6 !text-3xl !font-extrabold !leading-[1.12] !tracking-[-0.04em]"
                >Chỉ cài đặt những gì bạn dùng.</h3
              >
              <p class="mt-5 text-base leading-7 text-slate-600 dark:text-slate-300"
                >Chỉ các runtime và dịch vụ mà dự án của bạn thực sự cần. Phần mềm không dùng sẽ
                không chiếm dung lượng đĩa.</p
              >
              <p
                class="mt-7 inline-flex items-center gap-3 rounded-xl bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-600 dark:bg-blue-400/10 dark:text-blue-300 md:mt-auto"
              >
                <Box class="h-5 w-5" aria-hidden="true" />
                Không có phần mềm không dùng
              </p>
            </div>

            <div
              data-native-visual
              aria-hidden="true"
              class="mt-8 overflow-hidden rounded-xl border border-blue-100 bg-white shadow-[0_12px_30px_rgba(37,99,235,0.08)] dark:border-slate-700 dark:bg-slate-800 md:mt-0"
            >
              <div
                class="flex items-center gap-2 border-b border-blue-100 px-4 py-3 dark:border-slate-700"
              >
                <span class="h-2.5 w-2.5 rounded-full bg-red-500" aria-hidden="true"></span>
                <span class="h-2.5 w-2.5 rounded-full bg-amber-400" aria-hidden="true"></span>
                <span class="h-2.5 w-2.5 rounded-full bg-green-500" aria-hidden="true"></span>
                <strong class="ml-2 text-sm">Runtime &amp; Dịch vụ</strong>
              </div>
              <p class="bg-slate-50 px-5 py-2 text-xs font-bold dark:bg-slate-900/70"
                >Đã cài đặt local</p
              >
              <div class="space-y-3 px-5 py-3">
                <div
                  v-for="runtime in installedRuntimes"
                  :key="runtime.name"
                  class="grid grid-cols-[1fr_auto] items-center gap-3 text-sm"
                >
                  <span class="flex min-w-0 items-center gap-3 text-slate-700 dark:text-slate-200">
                    <img
                      :src="runtime.logo"
                      alt=""
                      aria-hidden="true"
                      class="h-6 w-6 object-contain"
                    />
                    {{ runtime.name }}
                  </span>
                  <span
                    class="inline-flex items-center gap-1.5 text-xs font-semibold text-green-600 dark:text-green-400"
                  >
                    <CircleCheckFilled class="h-4 w-4" aria-hidden="true" /> Đã cài đặt
                  </span>
                </div>
              </div>
              <p
                class="border-t border-blue-100 bg-slate-50 px-5 py-2 text-xs font-bold dark:border-slate-700 dark:bg-slate-900/70"
                >Có thể cài đặt</p
              >
              <div class="space-y-2 px-5 py-3">
                <div
                  v-for="runtime in availableRuntimes"
                  :key="runtime.name"
                  class="grid grid-cols-[1fr_auto] items-center gap-3 text-sm"
                >
                  <span class="flex min-w-0 items-center gap-3 text-slate-700 dark:text-slate-200">
                    <img
                      :src="runtime.logo"
                      alt=""
                      aria-hidden="true"
                      class="h-6 w-6 object-contain"
                      :class="{ 'dark:invert': runtime.name === 'Java' }"
                    />
                    {{ runtime.name }}
                  </span>
                  <span
                    class="inline-flex items-center gap-1 rounded-lg bg-blue-50 px-3 py-1 text-xs font-bold text-blue-600 dark:bg-blue-400/10 dark:text-blue-300"
                  >
                    <Plus class="h-3.5 w-3.5" aria-hidden="true" /> Cài đặt
                  </span>
                </div>
              </div>
            </div>
          </article>

          <article
            data-native-feature
            class="grid min-h-[23.5rem] overflow-hidden rounded-2xl border border-sky-100 bg-white/90 p-6 shadow-[0_18px_50px_rgba(48,118,184,0.08)] backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/90 sm:p-8 md:grid-cols-[0.84fr_1.16fr] md:items-center md:gap-8"
          >
            <div class="flex h-full flex-col items-start">
              <p
                class="rounded-xl bg-blue-50 px-4 py-2 text-xs font-extrabold text-blue-600 dark:bg-blue-400/10 dark:text-blue-300"
                >PHIÊN BẢN THEO DỰ ÁN</p
              >
              <h3
                class="no-border !mb-0 !mt-6 !text-3xl !font-extrabold !leading-[1.12] !tracking-[-0.04em]"
                >Chuyển đổi phiên bản runtime theo dự án.</h3
              >
              <p class="mt-5 text-base leading-7 text-slate-600 dark:text-slate-300"
                >Tự động sử dụng phiên bản Node.js, PHP hoặc Python phù hợp cho từng dự án.</p
              >
              <p
                class="mt-7 inline-flex items-center gap-3 rounded-xl bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-600 dark:bg-blue-400/10 dark:text-blue-300 md:mt-auto"
              >
                <FolderOpened class="h-5 w-5" aria-hidden="true" />
                Tự động chuyển đổi phiên bản
              </p>
            </div>

            <div
              data-native-visual
              aria-hidden="true"
              class="mt-8 overflow-hidden rounded-xl border border-blue-100 bg-white shadow-[0_12px_30px_rgba(37,99,235,0.08)] dark:border-slate-700 dark:bg-slate-800 md:mt-0"
            >
              <div
                class="flex items-center border-b border-blue-100 px-4 py-3 dark:border-slate-700"
              >
                <span class="h-2.5 w-2.5 rounded-full bg-red-500" aria-hidden="true"></span>
                <span class="ml-2 h-2.5 w-2.5 rounded-full bg-amber-400" aria-hidden="true"></span>
                <span class="ml-2 h-2.5 w-2.5 rounded-full bg-green-500" aria-hidden="true"></span>
                <strong class="ml-3 text-sm">Các dự án</strong>
                <span
                  class="ml-auto inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-300"
                >
                  <Plus class="h-4 w-4" aria-hidden="true" /> Thêm dự án
                </span>
              </div>
              <div>
                <div
                  v-for="project in nativeProjects"
                  :key="project.name"
                  class="grid min-h-[4.65rem] grid-cols-[auto_1fr_auto] items-center gap-3 border-b border-slate-100 px-4 last:border-b-0 dark:border-slate-700"
                >
                  <FolderOpened
                    class="h-7 w-7 text-blue-600 dark:text-blue-300"
                    aria-hidden="true"
                  />
                  <div class="min-w-0">
                    <p class="truncate text-sm font-semibold">{{ project.name }}</p>
                    <div class="mt-1 flex flex-wrap gap-x-3 gap-y-1">
                      <span
                        v-for="runtime in project.runtimes"
                        :key="runtime.name"
                        class="inline-flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-300"
                      >
                        <img
                          :src="runtime.logo"
                          alt=""
                          aria-hidden="true"
                          class="h-4 w-4 object-contain"
                        />
                        {{ runtime.name }}
                      </span>
                    </div>
                  </div>
                  <MoreFilled class="h-5 w-5 text-slate-500" aria-hidden="true" />
                </div>
              </div>
            </div>
          </article>

          <article
            data-native-feature
            class="grid min-h-[23.5rem] overflow-hidden rounded-2xl border border-sky-100 bg-white/90 p-6 shadow-[0_18px_50px_rgba(48,118,184,0.08)] backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/90 sm:p-8 md:grid-cols-[0.84fr_1.16fr] md:items-center md:gap-8"
          >
            <div class="flex h-full flex-col items-start">
              <p
                class="rounded-xl bg-blue-50 px-4 py-2 text-xs font-extrabold text-blue-600 dark:bg-blue-400/10 dark:text-blue-300"
                >NHÓM KHỞI ĐỘNG</p
              >
              <h3
                class="no-border !mb-0 !mt-6 !text-3xl !font-extrabold !leading-[1.12] !tracking-[-0.04em]"
                >Khởi động toàn bộ stack bằng one-click.</h3
              >
              <p class="mt-5 text-base leading-7 text-slate-600 dark:text-slate-300"
                >Nhóm các dịch vụ mà dự án cần và chạy chúng cùng nhau.</p
              >
              <p
                class="mt-7 inline-flex items-center gap-3 rounded-xl bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-600 dark:bg-blue-400/10 dark:text-blue-300 md:mt-auto"
              >
                <VideoPlay class="h-5 w-5" aria-hidden="true" />
                Một dự án. Một nhóm khởi động.
              </p>
            </div>

            <div
              data-native-visual
              aria-hidden="true"
              class="mt-8 overflow-hidden rounded-xl border border-blue-100 bg-white shadow-[0_12px_30px_rgba(37,99,235,0.08)] dark:border-slate-700 dark:bg-slate-800 md:mt-0"
            >
              <div
                class="flex items-center border-b border-blue-100 px-4 py-3 dark:border-slate-700"
              >
                <span class="h-2.5 w-2.5 rounded-full bg-red-500" aria-hidden="true"></span>
                <span class="ml-2 h-2.5 w-2.5 rounded-full bg-amber-400" aria-hidden="true"></span>
                <span class="ml-2 h-2.5 w-2.5 rounded-full bg-green-500" aria-hidden="true"></span>
                <strong class="ml-3 text-sm">shop.test</strong>
                <MoreFilled class="ml-auto h-5 w-5 text-slate-500" aria-hidden="true" />
              </div>
              <div class="space-y-4 px-5 py-4">
                <div
                  v-for="service in startupServices"
                  :key="service.name"
                  class="grid grid-cols-[1fr_auto] items-center gap-3 text-sm"
                >
                  <span class="flex min-w-0 items-center gap-3 text-slate-700 dark:text-slate-200">
                    <img
                      :src="service.logo"
                      alt=""
                      aria-hidden="true"
                      class="h-7 w-7 object-contain"
                    />
                    {{ service.name }}
                  </span>
                  <span
                    class="inline-flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400"
                  >
                    <span
                      class="h-2.5 w-2.5 rounded-full border-2 border-slate-400"
                      aria-hidden="true"
                    ></span>
                    Đã dừng
                  </span>
                </div>
              </div>
              <div class="border-t border-blue-100 p-4 dark:border-slate-700">
                <span
                  class="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-[0_10px_22px_rgba(37,99,235,0.22)]"
                >
                  <VideoPlay class="h-5 w-5" aria-hidden="true" /> Khởi động tất cả
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section
      aria-labelledby="projects-title"
      class="border-y border-sky-100 bg-sky-50/70 py-16 dark:border-slate-800 dark:bg-slate-900/70 sm:py-20"
    >
      <div class="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div class="max-w-3xl">
            <h2
              id="projects-title"
              class="no-border !mb-0 !text-3xl !font-extrabold !tracking-[-0.04em] sm:!text-4xl"
              >Các dự án thực tế, sẵn sàng trong vài phút.</h2
            >
            <p class="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300"
              >Bắt đầu và chạy ngay với các dự án phổ biến. FlyEnv xử lý toàn bộ stack.</p
            >
          </div>
          <a
            href="/vi/demos"
            data-analytics-event="demos_nav_click"
            data-analytics-surface="new-home-projects"
            class="shrink-0 text-sm font-bold text-blue-600 no-underline hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-200"
            >Xem thêm bản demo <span aria-hidden="true">→</span></a
          >
        </div>
        <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          <article
            v-for="project in projects"
            :key="project.name"
            class="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:hover:border-blue-500/60"
          >
            <img
              :src="project.logo"
              :alt="`${project.name} logo`"
              class="mx-auto h-12 w-12 object-contain"
              loading="lazy"
            />
            <h3 class="no-border !mb-0 !mt-4 !text-base !font-bold">{{ project.name }}</h3>
            <p class="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">{{
              project.description
            }}</p>
            <div class="mt-4 flex flex-wrap justify-center gap-1.5">
              <span
                v-for="service in project.services"
                :key="service"
                class="rounded-md bg-slate-100 px-2 py-1 text-[11px] font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                >{{ service }}</span
              >
            </div>
          </article>
        </div>
      </div>
    </section>

    <AppCommunityHomepageProof :posts="communityPosts" :evidence="communityEvidence.vi" locale="vi" />

    <AppPrice />

    <section
      aria-labelledby="final-cta-title"
      class="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div
        class="relative overflow-hidden rounded-3xl bg-[linear-gradient(120deg,#092966_0%,#0e55cf_48%,#08285a_100%)] px-6 py-10 text-white shadow-[0_24px_65px_rgba(24,70,158,0.26)] sm:px-10 sm:py-12"
      >
        <div class="relative flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
          <div class="max-w-2xl">
            <h2
              id="final-cta-title"
              class="no-border !mb-0 !text-3xl !font-extrabold !tracking-[-0.04em] sm:!text-4xl"
              >Sẵn sàng trang bị cho AI của bạn một stack local thực sự?</h2
            >
            <p class="mt-4 text-base leading-7 text-blue-100"
              >Tải xuống FlyEnv cho macOS, Windows hoặc Linux và bắt đầu xây dựng với AI ngay hôm
              nay.</p
            >
          </div>
          <a
            href="/vi/download"
            data-analytics-event="download_click"
            data-analytics-surface="new-home-final-cta"
            class="inline-flex shrink-0 items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-bold !text-blue-700 no-underline shadow-lg transition hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:translate-y-px"
            >Tải xuống FlyEnv <span class="ml-2" aria-hidden="true">↓</span></a
          >
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
  import {
    Box,
    ChatDotRound,
    CircleCheckFilled,
    FolderOpened,
    Lightning,
    Link,
    MagicStick,
    MoreFilled,
    Plus,
    VideoPlay
  } from '@element-plus/icons-vue'
  import communityPosts from '../../data/community-posts.json'
  import { communityEvidence } from '../../data/community-evidence'
  import AppCommunityHomepageProof from '../AppCommunityEvidence/HomepageProof.vue'
  import AppPrice from '../AppPrice/vi.vue'

  const workflowIcons = [ChatDotRound, MagicStick, null, VideoPlay, Link]

  const workflowSteps = [
    { title: 'Bạn đặt câu hỏi', quote: 'Chạy dự án Laravel này giúp tôi.' },
    {
      title: 'AI xác định những gì cần thiết',
      items: ['Đọc dự án', 'Phát hiện các runtime và dịch vụ']
    },
    {
      title: 'FlyEnv chuẩn bị môi trường',
      items: ['Cài đặt các runtime', 'Tạo site local', 'Cấu hình các dịch vụ']
    },
    {
      title: 'Stack đi vào hoạt động',
      items: [
        'Khởi động PHP, MySQL và hơn thế nữa',
        'Thiết lập tên miền và HTTPS',
        'Mọi dịch vụ đã sẵn sàng'
      ]
    },
    { title: 'Bạn nhận được một URL hoạt động', url: 'https://shop.test', ready: true }
  ]

  const loopBenefits = [
    'Một môi trường local thực sự',
    'Phát triển liên tục',
    'Lặp lại nhanh hơn',
    'Nhiều thời gian hơn cho ý tưởng của bạn'
  ]

  const osIconPaths = {
    windows:
      'M0 139.392L409.429333 81.92l0.170667 407.210667-409.216 2.389333L0 139.392z m409.301333 395.818667L409.6 942.08 0 884.181333V532.48l409.301333 2.730667z m41.258667-454.186667L1024 0v487.125333l-573.44 4.394667V81.024zM1024 533.333333L1023.872 1024l-572.501333-79.274667-0.810667-412.245333 573.44 0.896z',
    macos:
      'M928.768 750.592c-1.536 4.096-21.504 74.24-70.656 145.92-43.008 62.464-87.04 124.928-156.672 125.952-68.608 1.024-90.624-40.96-168.96-40.96s-102.912 39.936-167.936 41.984c-67.072 2.56-118.784-68.096-161.792-130.048C115.2 767.488 47.616 534.528 138.24 378.88c44.544-77.824 124.928-127.488 211.968-129.024 65.536-1.024 128.512 44.544 168.448 44.544 40.96 0 116.736-55.296 196.608-47.104 33.28 1.536 126.976 13.824 186.88 101.376-4.608 3.072-111.616 66.56-110.592 195.072 1.024 155.136 135.68 206.336 137.216 206.848m-266.24-586.24c35.84-44.032 59.904-104.448 53.248-164.352-51.2 2.048-114.176 34.304-151.04 77.824-32.768 37.888-61.952 99.328-53.76 158.72 56.832 3.072 115.712-30.208 151.552-72.192'
  }

  const nativePlatforms = [
    { name: 'macOS', path: osIconPaths.macos, color: 'text-slate-600 dark:text-slate-200' },
    { name: 'Windows', path: osIconPaths.windows, color: 'text-blue-600 dark:text-blue-300' },
    { name: 'Linux', icon: 'https://oss.macphpstudy.com/image/assets/icons/linux.svg' }
  ]

  const nativeServices = [
    { name: 'PHP', logo: 'https://oss.macphpstudy.com/image/assets/demo-logos/php.svg' },
    { name: 'Node.js', logo: 'https://oss.macphpstudy.com/image/assets/demo-logos/nodedotjs.svg' },
    { name: 'Nginx', logo: 'https://oss.macphpstudy.com/image/assets/demo-logos/nginx.svg' },
    { name: 'MySQL', logo: 'https://oss.macphpstudy.com/image/assets/demo-logos/mysql.svg' },
    { name: 'Redis', logo: 'https://oss.macphpstudy.com/image/assets/demo-logos/redis.svg' }
  ]

  const installedRuntimes = [
    { name: 'PHP 8.4', logo: 'https://oss.macphpstudy.com/image/assets/demo-logos/php.svg' },
    { name: 'MySQL 8.4', logo: 'https://oss.macphpstudy.com/image/assets/demo-logos/mysql.svg' },
    { name: 'Redis 7.2', logo: 'https://oss.macphpstudy.com/image/assets/demo-logos/redis.svg' }
  ]

  const availableRuntimes = [
    { name: 'PostgreSQL', logo: 'https://oss.macphpstudy.com/image/assets/demo-logos/postgresql.svg' },
    { name: 'Python', logo: 'https://oss.macphpstudy.com/image/assets/demo-logos/python.svg' },
    { name: 'Java', logo: 'https://oss.macphpstudy.com/image/java.svg' }
  ]

  const nativeProjects = [
    {
      name: 'shop.test',
      runtimes: [
        { name: 'Node.js 20', logo: 'https://oss.macphpstudy.com/image/assets/demo-logos/nodedotjs.svg' },
        { name: 'PHP 8.3', logo: 'https://oss.macphpstudy.com/image/assets/demo-logos/php.svg' }
      ]
    },
    {
      name: 'api.test',
      runtimes: [
        { name: 'Node.js 24', logo: 'https://oss.macphpstudy.com/image/assets/demo-logos/nodedotjs.svg' },
        { name: 'Python 3.13', logo: 'https://oss.macphpstudy.com/image/assets/demo-logos/python.svg' }
      ]
    },
    {
      name: 'legacy.test',
      runtimes: [{ name: 'PHP 7.4', logo: 'https://oss.macphpstudy.com/image/assets/demo-logos/php.svg' }]
    }
  ]

  const startupServices = [
    { name: 'Nginx', logo: 'https://oss.macphpstudy.com/image/assets/demo-logos/nginx.svg' },
    { name: 'MySQL 8.0', logo: 'https://oss.macphpstudy.com/image/assets/demo-logos/mysql.svg' },
    { name: 'Redis 7.2', logo: 'https://oss.macphpstudy.com/image/assets/demo-logos/redis.svg' },
    { name: 'Ứng dụng (PHP 8.3)', logo: 'https://oss.macphpstudy.com/image/assets/demo-logos/php.svg' }
  ]

  const stackGroups = [
    {
      title: 'Runtime',
      items: [
        { name: 'PHP', logo: 'https://oss.macphpstudy.com/image/assets/demo-logos/php.svg' },
        { name: 'Node.js', logo: 'https://oss.macphpstudy.com/image/assets/demo-logos/nodedotjs.svg' },
        { name: 'Python', logo: 'https://oss.macphpstudy.com/image/assets/demo-logos/python.svg' },
        { name: 'Go', logo: 'https://oss.macphpstudy.com/image/assets/demo-logos/go.svg' },
        { name: 'Java', logo: 'https://oss.macphpstudy.com/image/assets/demo-logos/openjdk.svg' },
        { name: 'Flutter', logo: 'https://oss.macphpstudy.com/image/assets/demo-logos/flutter.svg' }
      ]
    },
    {
      title: 'Cơ sở dữ liệu',
      items: [
        { name: 'MySQL', logo: 'https://oss.macphpstudy.com/image/assets/demo-logos/mysql.svg' },
        { name: 'MariaDB', logo: 'https://oss.macphpstudy.com/image/assets/demo-logos/mariadb.svg' },
        { name: 'PostgreSQL', logo: 'https://oss.macphpstudy.com/image/assets/demo-logos/postgresql.svg' },
        { name: 'Redis', logo: 'https://oss.macphpstudy.com/image/assets/demo-logos/redis.svg' },
        { name: 'MongoDB', logo: 'https://oss.macphpstudy.com/image/assets/demo-logos/mongodb.svg' },
        { name: 'ClickHouse', logo: 'https://oss.macphpstudy.com/image/assets/demo-logos/clickhouse.svg' }
      ]
    },
    {
      title: 'Web server',
      items: [
        { name: 'Nginx', logo: 'https://oss.macphpstudy.com/image/assets/demo-logos/nginx.svg' },
        { name: 'Apache', logo: 'https://oss.macphpstudy.com/image/assets/demo-logos/apache.svg' },
        { name: 'Caddy', logo: 'https://oss.macphpstudy.com/image/assets/demo-logos/caddy.svg' },
        { name: 'FrankenPHP', logo: 'https://oss.macphpstudy.com/image/assets/demo-logos/FrankenPHP.svg' },
        { name: 'Tomcat', logo: 'https://oss.macphpstudy.com/image/tomcat.svg' }
      ]
    },
    {
      title: 'Công cụ phát triển',
      items: [
        { name: 'phpMyAdmin', logo: 'https://oss.macphpstudy.com/image/assets/demo-logos/phpmyadmin.ico' },
        { name: 'pgAdmin 4', logo: 'https://oss.macphpstudy.com/image/assets/demo-logos/pgadmin.svg' },
        { name: 'DbGate', logo: 'https://oss.macphpstudy.com/image/assets/demo-logos/dbgate.png' },
        { name: 'Redis Commander', logo: 'https://oss.macphpstudy.com/image/assets/demo-logos/redis.svg' },
        { name: 'Mailpit', logo: 'https://oss.macphpstudy.com/image/assets/demo-logos/mailpit.svg' },
        { name: 'MinIO', logo: 'https://oss.macphpstudy.com/image/assets/demo-logos/minio.svg' }
      ]
    },
    {
      title: 'Dịch vụ khác',
      items: [
        { name: 'RabbitMQ', logo: 'https://oss.macphpstudy.com/image/assets/demo-logos/rabbitmq.svg' },
        { name: 'Elasticsearch', logo: 'https://oss.macphpstudy.com/image/assets/demo-logos/elasticsearch.svg' },
        { name: 'Neo4j', logo: 'https://oss.macphpstudy.com/image/assets/demo-logos/neo4j.svg' },
        { name: 'Qdrant', logo: 'https://oss.macphpstudy.com/image/assets/demo-logos/qdrant.svg' },
        { name: 'RustFS', logo: 'https://oss.macphpstudy.com/image/assets/demo-logos/rustfs.svg' },
        { name: 'Consul', logo: 'https://oss.macphpstudy.com/image/assets/demo-logos/consul.svg' }
      ]
    }
  ]

  const projects = [
    {
      name: 'Laravel',
      logo: 'https://oss.macphpstudy.com/image/assets/demo-logos/laravel.svg',
      description: 'Framework PHP hiện đại',
      services: ['PHP', 'MySQL', 'Redis', 'Nginx']
    },
    {
      name: 'WordPress',
      logo: 'https://oss.macphpstudy.com/image/assets/demo-logos/wordpress.svg',
      description: 'Một stack WordPress local hoàn chỉnh',
      services: ['PHP', 'MySQL', 'Nginx']
    },
    {
      name: 'Django',
      logo: 'https://oss.macphpstudy.com/image/assets/demo-logos/django.svg',
      description: 'Framework Python bậc cao',
      services: ['Python', 'PostgreSQL', 'Nginx']
    },
    {
      name: 'Gitea',
      logo: 'https://oss.macphpstudy.com/image/assets/demo-logos/gitea.svg',
      description: 'Dịch vụ Git tự lưu trữ',
      services: ['Go', 'SQLite', 'Nginx']
    },
    {
      name: 'ERPNext',
      logo: 'https://oss.macphpstudy.com/image/assets/demo-logos/erpnext.svg',
      description: 'ERP mã nguồn mở',
      services: ['Python', 'MariaDB', 'Redis']
    },
    {
      name: 'Ứng dụng Node.js',
      logo: 'https://oss.macphpstudy.com/image/assets/demo-logos/nodedotjs.svg',
      description: 'Xây dựng và chạy các web app',
      services: ['Node.js', 'Redis', 'Nginx']
    }
  ]

  const githubStats = [
    {
      alt: 'Sao GitHub của FlyEnv',
      badge: 'https://img.shields.io/github/stars/xpf0000/FlyEnv?style=social',
      href: 'https://github.com/xpf0000/FlyEnv/stargazers'
    },
    {
      alt: 'Người đóng góp GitHub của FlyEnv',
      badge: 'https://img.shields.io/github/contributors/xpf0000/FlyEnv?style=social',
      href: 'https://github.com/xpf0000/FlyEnv/graphs/contributors'
    },
    {
      alt: 'Phát hành mới nhất của FlyEnv trên GitHub',
      badge: 'https://img.shields.io/github/v/release/xpf0000/FlyEnv?style=social',
      href: 'https://github.com/xpf0000/FlyEnv/releases'
    },
    {
      alt: 'Issue mở của FlyEnv trên GitHub',
      badge: 'https://img.shields.io/github/issues/xpf0000/FlyEnv?style=social',
      href: 'https://github.com/xpf0000/FlyEnv/issues'
    }
  ]
</script>

<style>
  .new-home ol.list-none,
  .new-home ul.list-none,
  .new-home .list-none > li {
    list-style: none !important;
    margin-top: 0 !important;
  }

  .new-home .list-none > li::marker {
    content: '';
  }

  @media (min-width: 768px) and (max-width: 960px) {
    .VPNavBarMenu.menu {
      gap: 0 !important;
    }

    .VPNavBarMenuLink {
      padding-left: 4px !important;
      padding-right: 4px !important;
      font-size: 11px !important;
      letter-spacing: -0.02em !important;
    }
  }
</style>
