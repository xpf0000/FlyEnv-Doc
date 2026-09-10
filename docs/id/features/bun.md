---
layout: doc
titleTemplate: false
title: 'Bun di FlyEnv: panduan pengembangan lokal'
description: 'Pasang, konfigurasikan, dan kelola Bun di FlyEnv untuk pengembangan lokal.'
head:
  - - meta
    - name: description
      content: 'Pasang, konfigurasikan, dan kelola Bun di FlyEnv untuk pengembangan lokal.'
  - - meta
    - property: og:title
      content: 'Bun di FlyEnv: panduan pengembangan lokal'
  - - meta
    - property: og:description
      content: 'Pasang, konfigurasikan, dan kelola Bun di FlyEnv untuk pengembangan lokal.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/id/features/bun
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/id/features/bun
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Pengembangan Bun Lokal dengan FlyEnv

Bun adalah runtime JavaScript dan TypeScript yang juga menyertakan manajer paket, bundler, dan pelari pengujian dalam satu program. Bun dapat menjadi alternatif [Node.js](/id/features/nodejs) untuk server, skrip, dan perkakas front-end. Modul Bun FlyEnv memusatkan kebutuhan utama pengembangan lokal: memasang versi dari build statis, memilih versi yang dijalankan perintah terminal `bun`, serta mengikat tiap proyek ke runtime sendiri. Modul ini memiliki tab Proyek, Layanan, dan Manajer Versi untuk pemasangan versi, pengelolaan PATH, dan runtime proyek.

![Ikhtisar modul Bun di FlyEnv](https://oss.macphpstudy.com/image/features/bun-1.webp)

## Manajemen versi Bun

Pasang beberapa versi Bun dari **Bun → Manajer Versi** dan sediakan semuanya secara berdampingan.

- **Hanya build statis:** Bun dipasang dari daftar Static online pada semua platform—macOS, Linux, dan Windows. Sumber Homebrew serta MacPorts yang tersedia pada runtime lain tidak tersedia untuk Bun.
- **Direktori kustom:** arahkan FlyEnv ke direktori berisi build Bun Anda sendiri agar muncul di samping versi terkelola.
- **Lokasi pemasangan terkelola:** versi diekstrak ke direktori aplikasi FlyEnv di bawah `bun/<version>/`; setiap pemasangan dideteksi melalui keluaran asli `bun --version`.
- **Penyiapan setelah pemasangan:** setelah memasang versi, FlyEnv menjalankan `bun completions` agar pelengkapan shell berfungsi dan menghapus atribut karantina dari biner yang diunduh di macOS.

![Manajer Versi Bun dengan daftar Static online](https://oss.macphpstudy.com/image/features/bun-2.webp)

## Pengalihan versi baris perintah

Tidak ada layanan yang berjalan di sini: FlyEnv tidak memiliki daemon Bun, sehingga tab **Layanan** sebenarnya adalah tabel versi terpasang yang berfokus pada pengelolaan PATH.

- **Pengalihan versi terminal:** pilih versi terpasang yang akan dipakai perintah terminal `bun`. FlyEnv mengelola `PATH` Anda dengan menambah direktori bin versi yang dipilih dan menghapusnya saat beralih, sekaligus menunjukkan apakah entri PATH aktif dibuat oleh FlyEnv atau alat lain. Lihat [panduan lingkungan PATH sistem](/id/guide/setup-system-path-environment) untuk penjelasannya.
- **Alias dan catatan per versi:** beri setiap pemasangan alias singkat dan catatan agar build yang serupa tetap mudah dibedakan dalam daftar.
- **Pemeliharaan:** setiap baris menunjukkan lokasi pemasangan versi; versi yang tidak lagi diperlukan dapat dihapus dari tabel.

## Runtime Bun tingkat proyek

Dalam **Bun → Proyek**, daftarkan setiap folder proyek dan ikat ke versi Bun tertentu, alih-alih bergantung pada versi yang kebetulan ada di PATH.

- **Runtime per proyek:** pilihan versi disimpan dalam berkas `.flyenv` di direktori proyek; terminal dan editor yang dibuka dari FlyEnv otomatis memakai Bun yang benar. Lihat [panduan lingkungan runtime tingkat proyek](/id/guide/project-level-runtime-environment) dan [fitur Runtime per Proyek](/id/features/per-project-runtimes) untuk mekanismenya.
- **Jalankan sebagai layanan:** proyek dapat dijalankan langsung dari FlyEnv dengan perintah mulai atau berkas jalan kustom, port TCP yang ditampilkan sebagai tautan `http://127.0.0.1:<port>`, variabel lingkungan dari kolom langsung atau berkas, serta tanda sudo di macOS dan Linux.
- **Buka dengan alat lain:** buka terminal sistem atau editor dari baris proyek dengan lingkungan proyek yang telah dimuat.

![Daftar Proyek Bun dengan pengikatan versi Bun per proyek](https://oss.macphpstudy.com/image/features/bun-3.webp)

<FeatureRelatedLinks locale="id" slug="bun" />

## Catatan kompatibilitas

FlyEnv mengelola pemasangan versi Bun, pengalihan PATH, dan runtime proyek; modul Bun sendiri tidak menyediakan berkas konfigurasi tingkat modul, penampil log, ataupun panel administrasi selain kemampuan yang diberikan biner Bun. Pemasangan berasal dari build Static di semua platform; gunakan [halaman Unduhan](/id/download) dan catatan rilis terbaru sebagai acuan paket yang didukung.
