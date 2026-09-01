<template>
  <div
    class="license-page relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100"
  >
    <section
      class="border-b border-slate-200 bg-gradient-to-br from-blue-50 via-white to-violet-50 py-20 dark:border-slate-800 dark:from-slate-950 dark:via-slate-950 dark:to-violet-950/30 md:py-24 lg:py-28"
    >
      <div class="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <header class="mx-auto max-w-4xl text-center">
          <p class="!m-0 text-sm font-semibold uppercase text-blue-600 dark:text-blue-300">
            FlyEnv License
          </p>
          <h1
            class="!mb-0 !mt-5 !border-0 !pt-0 !text-4xl !font-bold !leading-tight text-slate-900 dark:text-white md:!text-5xl"
          >
            Get a FlyEnv License
          </h1>
          <p class="!mb-0 !mt-7 !text-lg !leading-8 text-slate-600 dark:text-slate-300 md:!text-xl">
            A one-time purchase unlocks premium features on one device. No subscription.
          </p>
          <div
            class="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-medium text-slate-600 dark:text-slate-300"
            aria-label="License benefits"
          >
            <span
              class="rounded-full border border-slate-200 bg-white/90 px-4 py-2 shadow-sm dark:border-slate-700 dark:bg-slate-900/80"
            >
              $10 one-time
            </span>
            <span
              class="rounded-full border border-slate-200 bg-white/90 px-4 py-2 shadow-sm dark:border-slate-700 dark:bg-slate-900/80"
            >
              1 device
            </span>
            <span
              class="rounded-full border border-slate-200 bg-white/90 px-4 py-2 shadow-sm dark:border-slate-700 dark:bg-slate-900/80"
            >
              Future updates
            </span>
            <span
              class="rounded-full border border-slate-200 bg-white/90 px-4 py-2 shadow-sm dark:border-slate-700 dark:bg-slate-900/80"
            >
              Device activation
            </span>
          </div>
        </header>

        <div class="mt-16 grid gap-8 md:grid-cols-2 lg:mt-20 lg:gap-10">
          <article
            class="rounded-lg border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5 dark:border-slate-700 dark:bg-slate-900 md:p-10 lg:min-h-[38rem] lg:p-12"
          >
            <div
              class="rounded-md bg-gradient-to-r from-orange-50 to-cyan-50 px-5 py-4 text-xl font-bold text-slate-900 dark:from-orange-500/10 dark:to-cyan-500/10 dark:text-white"
            >
              FlyEnv License
            </div>
            <p
              class="!mb-0 !mt-12 !text-7xl !font-bold !leading-none text-slate-950 dark:text-white"
            >
              $10
            </p>
            <p class="!mb-0 !mt-4 !text-base !leading-7 text-slate-500 dark:text-slate-400">
              One-time payment
            </p>

            <ul
              class="!mb-0 !mt-12 grid list-none gap-5 !p-0 text-base text-slate-600 dark:text-slate-300"
            >
              <li class="flex items-center gap-3">
                <span
                  class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-orange-500 text-xs font-bold text-orange-500"
                  aria-hidden="true"
                  >+</span
                >
                One device per license
              </li>
              <li class="flex items-center gap-3">
                <span
                  class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-orange-500 text-xs font-bold text-orange-500"
                  aria-hidden="true"
                  >+</span
                >
                No recurring fee
              </li>
              <li class="flex items-center gap-3">
                <span
                  class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-orange-500 text-xs font-bold text-orange-500"
                  aria-hidden="true"
                  >+</span
                >
                Future updates included
              </li>
              <li class="flex items-center gap-3">
                <span
                  class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-orange-500 text-xs font-bold text-orange-500"
                  aria-hidden="true"
                  >+</span
                >
                Device-based activation
              </li>
            </ul>

            <button
              type="button"
              class="mt-12 inline-flex min-h-14 w-full items-center justify-center rounded-md bg-orange-500 px-6 text-base font-semibold text-white transition hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 active:translate-y-px disabled:cursor-wait disabled:opacity-70"
              :disabled="paddleLoading"
              @click="openPaddleCheckout"
            >
              {{ paddleLoading ? 'Opening checkout...' : 'Buy securely with Paddle' }}
            </button>
            <p
              v-if="paddleError"
              class="!mb-0 !mt-4 text-sm text-red-600 dark:text-red-400"
              role="alert"
            >
              {{ paddleError }}
            </p>
            <div class="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-3 text-sm font-medium">
              <a
                href="/guide/about-license"
                class="text-blue-600 no-underline hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 dark:text-blue-300 dark:hover:text-blue-200"
              >
                License terms ->
              </a>
              <a
                href="/guide/about-license"
                class="border-l border-slate-200 pl-5 text-blue-600 no-underline hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 dark:border-slate-700 dark:text-blue-300 dark:hover:text-blue-200"
              >
                Activation guide ->
              </a>
            </div>
          </article>

          <article
            class="rounded-lg border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5 dark:border-slate-700 dark:bg-slate-900 md:p-10 lg:min-h-[38rem] lg:p-12"
          >
            <h2
              class="!mb-0 !mt-0 !border-0 !pt-0 !text-3xl !font-bold !leading-tight text-slate-900 dark:text-white"
            >
              How it works
            </h2>
            <ol class="!mb-0 !mt-12 grid list-none gap-9 !p-0">
              <li class="grid grid-cols-[3.25rem_1fr] gap-5">
                <span
                  class="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-base font-bold text-white"
                  aria-hidden="true"
                  >1</span
                >
                <div>
                  <strong class="block !text-lg !font-bold text-slate-900 dark:text-white"
                    >Purchase</strong
                  >
                  <span class="mt-2 block !text-base !leading-7 text-slate-500 dark:text-slate-400">
                    Complete your purchase securely through Paddle.
                  </span>
                </div>
              </li>
              <li class="grid grid-cols-[3.25rem_1fr] gap-5">
                <span
                  class="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-base font-bold text-white"
                  aria-hidden="true"
                  >2</span
                >
                <div>
                  <strong class="block !text-lg !font-bold text-slate-900 dark:text-white"
                    >Request a license in FlyEnv</strong
                  >
                  <span class="mt-2 block !text-base !leading-7 text-slate-500 dark:text-slate-400">
                    Open FlyEnv Settings -&gt; License, then submit your Paddle order ID or receipt
                    email with a contact email.
                  </span>
                </div>
              </li>
              <li class="grid grid-cols-[3.25rem_1fr] gap-5">
                <span
                  class="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-base font-bold text-white"
                  aria-hidden="true"
                  >3</span
                >
                <div>
                  <strong class="block !text-lg !font-bold text-slate-900 dark:text-white">
                    Receive your license
                  </strong>
                  <span class="mt-2 block !text-base !leading-7 text-slate-500 dark:text-slate-400">
                    Your request is reviewed manually, and the license is issued once it has been
                    verified.
                  </span>
                </div>
              </li>
            </ol>
            <div
              class="mt-12 rounded-md border border-blue-200 bg-blue-50 px-5 py-4 text-sm leading-6 text-slate-600 dark:border-blue-400/40 dark:bg-blue-400/10 dark:text-slate-300"
            >
              Licenses are tied to one device. To move to a new device, sign in with GitHub, unbind
              your old device in My Licenses, then bind the new one.
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="py-24 md:py-28 lg:py-32">
      <div class="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <header class="mx-auto max-w-3xl text-center">
          <h2
            class="!mb-0 !mt-0 !border-0 !pt-0 !text-3xl !font-bold !leading-tight text-slate-900 dark:text-white md:!text-4xl"
          >
            Other ways to support or get a license
          </h2>
          <p class="!mb-0 !mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Prefer another method? You can also contribute or pay via QR code.
          </p>
        </header>

        <div class="mt-16 grid gap-7 md:grid-cols-3 lg:mt-20 lg:gap-8">
          <article
            class="flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-900/5 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-slate-900/10 dark:border-slate-700 dark:bg-slate-900"
          >
            <div
              class="flex h-24 items-center justify-center bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-500/10 dark:to-emerald-500/10"
            >
              <span
                class="inline-flex h-10 w-10 items-center justify-center rounded-md border border-green-200 bg-white text-xs font-extrabold text-green-600 shadow-sm dark:border-green-400/30 dark:bg-slate-900 dark:text-green-300"
              >
                WX
              </span>
            </div>
            <div class="flex flex-1 flex-col p-8 text-center lg:p-9">
              <h3
                class="!mb-0 !mt-0 !border-0 !pt-0 text-2xl font-bold text-slate-900 dark:text-white"
              >
                WeChat Pay
              </h3>
              <p
                class="!mb-0 !mt-4 min-h-14 text-base leading-7 text-slate-500 dark:text-slate-400"
              >
                Scan the QR code to pay via WeChat Pay.
              </p>
              <div class="mt-8 flex h-52 items-center justify-center">
                <img
                  src="https://oss.macphpstudy.com/image/qrcode1@2x.png"
                  alt="WeChat Pay QR code"
                  width="192"
                  height="192"
                  class="h-48 w-48 rounded-md object-contain"
                  loading="lazy"
                />
              </div>
              <span
                class="mt-9 md:mt-auto flex min-h-14 items-center justify-center rounded-md bg-green-600 px-5 text-base font-semibold text-white"
              >
                Scan QR code
              </span>
            </div>
          </article>

          <article
            class="flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-900/5 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-slate-900/10 dark:border-slate-700 dark:bg-slate-900"
          >
            <div
              class="flex h-24 items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-500/10 dark:to-cyan-500/10"
            >
              <span
                class="inline-flex h-10 w-10 items-center justify-center rounded-md border border-blue-200 bg-white text-xs font-extrabold text-blue-600 shadow-sm dark:border-blue-400/30 dark:bg-slate-900 dark:text-blue-300"
              >
                ALI
              </span>
            </div>
            <div class="flex flex-1 flex-col p-8 text-center lg:p-9">
              <h3
                class="!mb-0 !mt-0 !border-0 !pt-0 text-2xl font-bold text-slate-900 dark:text-white"
              >
                Alipay
              </h3>
              <p
                class="!mb-0 !mt-4 min-h-14 text-base leading-7 text-slate-500 dark:text-slate-400"
              >
                Scan the QR code to pay via Alipay.
              </p>
              <div class="mt-8 flex h-52 items-center justify-center">
                <img
                  src="https://oss.macphpstudy.com/image/qrcode2@2x.png"
                  alt="Alipay QR code"
                  width="192"
                  height="192"
                  class="h-48 w-48 rounded-md object-contain"
                  loading="lazy"
                />
              </div>
              <span
                class="mt-9 md:mt-auto flex min-h-14 items-center justify-center rounded-md bg-blue-600 px-5 text-base font-semibold text-white"
              >
                Scan QR code
              </span>
            </div>
          </article>

          <article
            class="flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-900/5 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-slate-900/10 dark:border-slate-700 dark:bg-slate-900"
          >
            <div
              class="flex h-24 items-center justify-center bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-violet-500/10 dark:to-fuchsia-500/10"
            >
              <span
                class="inline-flex h-10 w-10 items-center justify-center rounded-md border border-violet-200 bg-white text-sm font-extrabold text-violet-600 shadow-sm dark:border-violet-400/30 dark:bg-slate-900 dark:text-violet-300"
                aria-hidden="true"
              >
                +
              </span>
            </div>
            <div class="flex flex-1 flex-col p-8 text-center lg:p-9">
              <h3
                class="!mb-0 !mt-0 !border-0 !pt-0 text-2xl font-bold text-slate-900 dark:text-white"
              >
                Contribute
              </h3>
              <p
                class="!mb-0 !mt-4 min-h-14 text-base leading-7 text-slate-500 dark:text-slate-400"
              >
                Write an original article or contribute code to qualify for a license.
              </p>
              <div class="mt-8 grid min-h-52 grid-cols-2 gap-5">
                <div class="grid content-center justify-items-center gap-4">
                  <span
                    class="flex h-14 w-14 items-center justify-center rounded-full bg-violet-50 text-xl font-bold text-violet-600 dark:bg-violet-400/10 dark:text-violet-300"
                    aria-hidden="true"
                  >
                    A
                  </span>
                  <strong class="text-sm text-slate-700 dark:text-slate-200"
                    >Write an article</strong
                  >
                </div>
                <div class="grid content-center justify-items-center gap-4">
                  <span
                    class="flex h-14 w-14 items-center justify-center rounded-full bg-violet-50 font-mono text-xl font-bold text-violet-600 dark:bg-violet-400/10 dark:text-violet-300"
                    aria-hidden="true"
                  >
                    &lt;/&gt;
                  </span>
                  <strong class="text-sm text-slate-700 dark:text-slate-200">Submit a PR</strong>
                </div>
              </div>
              <a
                href="/guide/about-license"
                class="mt-9 md:mt-auto flex min-h-14 items-center justify-center rounded-md bg-violet-600 px-5 text-base font-semibold !text-white no-underline transition hover:bg-violet-700 hover:!text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
              >
                Contribution options
              </a>
            </div>
          </article>
        </div>

        <a
          href="/community"
          class="mx-auto mt-12 flex w-fit text-base font-semibold text-blue-600 no-underline hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 dark:text-blue-300 dark:hover:text-blue-200"
        >
          Explore community contributions ->
        </a>
      </div>
    </section>

    <section
      class="border-y border-slate-100 bg-slate-50 py-24 dark:border-slate-800 dark:bg-slate-950 md:py-28 lg:py-32"
    >
      <div class="mx-auto w-full max-w-5xl px-6 lg:px-8">
        <header class="text-center">
          <h2
            class="!mb-0 !mt-0 !border-0 !pt-0 !text-3xl !font-bold !leading-tight text-slate-900 dark:text-white md:!text-4xl"
          >
            Frequently Asked Questions
          </h2>
        </header>
        <div
          class="mt-14 overflow-hidden rounded-lg border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900 lg:mt-16"
        >
          <details
            v-for="faq in faqs"
            :key="faq.question"
            class="group border-b border-slate-200 last:border-b-0 dark:border-slate-700"
          >
            <summary
              class="!m-0 flex cursor-pointer list-none items-center justify-between gap-6 px-7 py-6 !text-base !font-semibold text-slate-800 marker:hidden dark:text-slate-100"
            >
              <span>{{ faq.question }}</span>
              <span
                class="shrink-0 text-2xl font-normal leading-none text-slate-500 transition-transform group-open:rotate-45 dark:text-slate-400"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <div
              v-if="faq.email"
              class="!m-0 px-7 pb-7 !text-base !leading-7 text-slate-600 dark:text-slate-300"
            >
              <p class="!m-0">{{ faq.answer }}</p>
              <div class="mt-3 flex max-w-full items-center gap-2">
                <span
                  class="inline-flex min-w-0 select-text cursor-text break-all rounded-md bg-blue-50 px-3 py-2 font-semibold !text-blue-700 dark:bg-blue-400/15 dark:!text-blue-200"
                >
                  {{ faq.email }}
                </span>
                <button
                  type="button"
                  :aria-label="
                    copiedEmail === faq.email ? 'Email address copied' : 'Copy email address'
                  "
                  :title="copiedEmail === faq.email ? 'Email address copied' : 'Copy email address'"
                  class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  :class="
                    copiedEmail === faq.email
                      ? 'border-emerald-200 bg-emerald-50 !text-emerald-700 hover:bg-emerald-100 dark:border-emerald-400/30 dark:bg-emerald-400/15 dark:!text-emerald-300 dark:hover:bg-emerald-400/25'
                      : 'border-blue-200 bg-white !text-blue-700 hover:bg-blue-100 hover:!text-blue-800 dark:border-blue-400/30 dark:bg-slate-900 dark:!text-blue-200 dark:hover:bg-blue-400/15 dark:hover:!text-blue-100'
                  "
                  @click="copyEmail(faq.email)"
                >
                  <Check v-if="copiedEmail === faq.email" class="h-5 w-5" aria-hidden="true" />
                  <CopyDocument v-else class="h-5 w-5" aria-hidden="true" />
                </button>
                <span class="sr-only" aria-live="polite">
                  {{ copiedEmail === faq.email ? 'Email address copied' : '' }}
                </span>
              </div>
              <p class="!mb-0 !mt-3">{{ faq.emailSuffix }}</p>
            </div>
            <p
              v-else
              class="!m-0 px-7 pb-7 !text-base !leading-7 text-slate-600 dark:text-slate-300"
            >
              {{ faq.answer }}
            </p>
          </details>
        </div>
      </div>
    </section>

    <section class="py-24 md:py-28 lg:py-32">
      <div class="mx-auto w-full max-w-5xl px-6 lg:px-8">
        <header class="text-center">
          <h2
            class="!mb-0 !mt-0 !border-0 !pt-0 !text-3xl !font-bold !leading-tight text-slate-900 dark:text-white md:!text-4xl"
          >
            Special Thanks
          </h2>
          <p class="!mb-0 !mt-6 !text-lg !leading-8 text-slate-600 dark:text-slate-300">
            Thank you to every friend who helps FlyEnv keep improving.
          </p>
        </header>

        <div class="mt-14 grid gap-6 md:grid-cols-2 lg:mt-16">
          <article
            class="flex items-start gap-5 rounded-lg border border-slate-200 bg-white p-7 shadow-sm dark:border-slate-700 dark:bg-slate-900"
          >
            <div
              class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-amber-700 dark:bg-amber-400/15 dark:text-amber-300"
              aria-hidden="true"
            >
              F4
            </div>
            <div>
              <p class="!mb-0 !mt-0 !text-lg !font-bold !leading-7 text-slate-900 dark:text-white"
                >F4nniu</p
              >
              <p class="!mb-0 !mt-3 !text-sm !leading-6 text-slate-600 dark:text-slate-300">
                Founder of
                <a
                  href="https://www.fastadmin.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="font-semibold text-blue-600 no-underline hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-200"
                >
                  FastAdmin
                </a>
                , for funding the <strong>flyenv.com</strong> domain.
              </p>
            </div>
          </article>

          <article
            class="flex items-start gap-5 rounded-lg border border-slate-200 bg-white p-7 shadow-sm dark:border-slate-700 dark:bg-slate-900"
          >
            <div
              class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-amber-700 dark:bg-amber-400/15 dark:text-amber-300"
              aria-hidden="true"
            >
              SP
            </div>
            <div>
              <p class="!mb-0 !mt-0 !text-lg !font-bold !leading-7 text-slate-900 dark:text-white">
                <a
                  href="https://signpath.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-blue-600 no-underline hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-200"
                >
                  SignPath
                </a>
              </p>
              <p class="!mb-0 !mt-3 !text-sm !leading-6 text-slate-600 dark:text-slate-300">
                Free code signing for FlyEnv on Windows is provided by
                <a
                  href="https://signpath.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="font-semibold text-blue-600 no-underline hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-200"
                >
                  SignPath.io
                </a>
                , with the certificate provided by
                <a
                  href="https://signpath.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="font-semibold text-blue-600 no-underline hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-200"
                >
                  SignPath Foundation
                </a>
                .
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="pb-28 pt-4 lg:pb-32">
      <div class="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <div
          class="flex flex-col gap-10 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-10 text-white shadow-xl shadow-blue-900/20 md:flex-row md:items-center md:justify-between lg:px-12 lg:py-12"
        >
          <div>
            <h2 class="!mb-0 !mt-0 !border-0 !pt-0 !text-3xl !font-bold !leading-tight text-white">
              Ready to get licensed?
            </h2>
            <p class="!mb-0 !mt-5 !text-lg !leading-8 text-blue-50">
              Use FlyEnv without limits and support continued development.
            </p>
          </div>
          <div class="flex flex-wrap gap-4">
            <button
              type="button"
              class="inline-flex min-h-14 items-center justify-center rounded-md bg-white px-6 text-base font-semibold text-slate-900 transition hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:translate-y-px disabled:cursor-wait disabled:opacity-70"
              :disabled="paddleLoading"
              @click="openPaddleCheckout"
            >
              {{ paddleLoading ? 'Opening checkout...' : 'Buy License' }}
            </button>
            <a
              href="/guide/about-license"
              class="inline-flex min-h-14 items-center justify-center rounded-md border border-white/60 px-6 text-base font-semibold !text-white no-underline transition hover:border-white hover:bg-white/10 hover:!text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              License terms
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
  import { Check, CopyDocument } from '@element-plus/icons-vue'
  import { ref } from 'vue'
  import { usePaddleCheckout } from '../AppSponsorPage/usePaddleCheckout'

  type Faq = {
    question: string
    answer: string
    email?: string
    emailSuffix?: string
  }

  const faqs: Faq[] = [
    {
      question: 'Is this a subscription?',
      answer: 'No. The current FlyEnv license is a one-time purchase with no recurring fee.'
    },
    {
      question: 'How many devices can I activate?',
      answer: 'Each license can have one active device at a time.'
    },
    {
      question: 'Can I move my license to another computer?',
      answer:
        'Yes. Sign in with GitHub, unbind the old device in My Licenses, then bind the new device.'
    },
    {
      question: 'Are future updates included?',
      answer: 'Yes. Future FlyEnv updates are included with the current license.'
    },
    {
      question: 'Do you offer team or education licenses?',
      answer:
        'Yes. Team and education licensing can be discussed case by case. Please contact me at',
      email: 'alexpengfeixu@gmail.com',
      emailSuffix: 'with your use case, number of devices, and organization details.'
    }
  ]

  const copiedEmail = ref<string>()
  let copyResetTimer: ReturnType<typeof setTimeout> | undefined

  function copyWithFallback(email: string) {
    const textarea = document.createElement('textarea')
    textarea.value = email
    textarea.setAttribute('readonly', '')
    textarea.className = 'fixed -left-[9999px] top-0 opacity-0'
    document.body.appendChild(textarea)
    textarea.select()
    const copied = document.execCommand('copy')
    textarea.remove()
    return copied
  }

  async function copyEmail(email: string) {
    let copied = false

    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(email)
        copied = true
      } catch {
        copied = copyWithFallback(email)
      }
    } else {
      copied = copyWithFallback(email)
    }

    if (!copied) return

    copiedEmail.value = email
    if (copyResetTimer) window.clearTimeout(copyResetTimer)
    copyResetTimer = window.setTimeout(() => {
      copiedEmail.value = undefined
    }, 2000)
  }

  const { paddleLoading, paddleError, openPaddleCheckout } = usePaddleCheckout({
    source: 'license_page',
    errorMessage: 'Paddle checkout is temporarily unavailable. Please try again later.'
  })
</script>

<style scoped>
  :global(.VPHome:has(.license-page)) {
    margin-bottom: 0;
  }
</style>
