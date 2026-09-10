---
layout: doc
titleTemplate: false
title: 'GitHub Copilot CLI di FlyEnv: panduan pengembangan lokal'
description: 'Pasang, konfigurasikan, dan kelola GitHub Copilot CLI di FlyEnv untuk pengembangan lokal.'
head:
  - - meta
    - name: description
      content: 'Pasang, konfigurasikan, dan kelola GitHub Copilot CLI di FlyEnv untuk pengembangan lokal.'
  - - meta
    - property: og:title
      content: 'GitHub Copilot CLI di FlyEnv: panduan pengembangan lokal'
  - - meta
    - property: og:description
      content: 'Pasang, konfigurasikan, dan kelola GitHub Copilot CLI di FlyEnv untuk pengembangan lokal.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/id/features/github-copilot-cli
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/id/features/github-copilot-cli
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# GitHub Copilot CLI di FlyEnv

GitHub Copilot CLI adalah agen pemrograman AI GitHub untuk terminal, bagian dari keluarga produk Copilot. FlyEnv menyediakan halaman pengelolaan khusus: pemasangan sekali klik, editor mentah untuk berkas konfigurasi JSON, peramban Sesi dengan lanjutkan dan pembersihan, daftar Skill dengan tindakan per skill, serta pengelolaan server MCP. Copilot tetap merupakan alat terminal biasa; FlyEnv hanya mengatur segala hal di sekitarnya. Untuk alur kerja yang lebih luas dalam mengendalikan FlyEnv dari asisten AI, lihat [FlyEnv Bekerja dengan AI](/id/guide/flyenv-work-with-ai).

![Ikhtisar GitHub Copilot CLI dengan kartu Layanan, perintah pemasangan, versi terdeteksi, dan lembar ringkas](https://oss.macphpstudy.com/image/features/github-copilot-cli-1.webp)

## Instalasi

Tab **GitHub Copilot CLI → Layanan** mendeteksi biner `copilot` yang sudah ada dan menampilkan versinya, atau menawarkan pemasangan sekali klik bila belum ditemukan.

- **Satu perintah lintas platform:** pemasangan menjalankan `npm install -g @github/copilot`, perintah yang sama pada macOS, Linux, dan Windows; satu-satunya prasyarat adalah penyiapan Node.js/npm yang berfungsi. [Manajemen versi Node.js](/id/guide/manage-multiple-node-php-versions) FlyEnv dapat menyediakannya bila diperlukan.
- **Terminal tersemat:** perintah npm dijalankan pada terminal bawaan FlyEnv dengan variabel lingkungan proxy FlyEnv, sehingga Anda melihat keluaran pemasangan sebenarnya, bukan bilah kemajuan tanpa detail.
- **Pemasangan yang sudah ada dikenali:** FlyEnv memindai `PATH` dan lokasi pemasangan global umum, termasuk direktori bin global npm, yarn, pnpm, bun, dan volta, sehingga Copilot CLI yang Anda pasang sendiri terdeteksi tanpa pemasangan ulang.
- **Lembar ringkas perintah:** pintasan yang dapat disalin untuk `copilot login`, `copilot init`, `copilot skill list`, dan `copilot mcp list` tersedia langsung di kartu Layanan.

## Konfigurasi

Tab **Berkas Konfigurasi** mengedit konfigurasi Copilot CLI sebagai JSON mentah; modul ini tidak memiliki formulir pengaturan visual.

- **Dua berkas:** `~/.copilot/config.json` untuk konfigurasi utama dan `~/.copilot/mcp-config.json` untuk definisi server MCP, keduanya dibuka di editor lengkap.
- **Direktori home kustom dihormati:** bila Anda memindahkan home Copilot melalui variabel lingkungan `COPILOT_CONFIG_DIR`, FlyEnv mengikutinya dan mengedit berkas pada lokasi sebenarnya.
- **Tidak ada penulisan ulang:** FlyEnv membuka berkas sebagaimana adanya di disk; skema dan nilai bawaan tetap dimiliki Copilot CLI.

![Konfigurasi GitHub Copilot CLI](https://oss.macphpstudy.com/image/features/github-copilot-cli-2.webp)

## Sesi

Sesi Copilot dibaca dari penyimpanan SQLite milik CLI di `~/.copilot/session-store.db`, sehingga judul dan prompt ditampilkan dengan rapi serta dikelompokkan menurut direktori kerja.

- **Lanjutkan dari tempat terakhir:** tindakan jalankan dan lanjutkan membuka terminal eksternal sistem di direktori kerja sesi lalu menjalankan `copilot --resume` atau `copilot --continue`; percakapan interaktif selalu berlangsung di terminal tersebut, bukan di dalam FlyEnv.
- **Penghapusan bersih:** menghapus sesi juga menghapus direktori `session-state/<id>`, sehingga tidak ada status yatim yang tertinggal.

![Tabel sesi yang dikelompokkan menurut direktori kerja dengan tindakan jalankan, lanjutkan, dan hapus](https://oss.macphpstudy.com/image/features/github-copilot-cli-3.webp)

## Skill

Tab **Skill** mencantumkan Skill yang dikenali Copilot CLI dengan menanyakan CLI secara langsung melalui `copilot skill list --json`; setiap nama skill diberi akhiran sumbernya. Berbeda dengan modul [Antigravity CLI](/id/features/antigravity-cli) yang membaca folder skill langsung dari disk, daftar ini selalu berasal dari CLI.

- **Tindakan per skill:** buka direktori skill, tampilkan berkas skill di pengelola berkas, atau pratinjau isinya tanpa meninggalkan FlyEnv.
- **Selalu terbaru:** karena daftar berasal dari CLI, bukan ringkasan tersimpan, Skill baru muncul segera setelah terlihat oleh `copilot skill list`.

![Tab Skill mencantumkan skill Copilot dengan label sumber dan tindakan buka, tampilkan, serta pratinjau](https://oss.macphpstudy.com/image/features/github-copilot-cli-4.webp)

## Server MCP

Tab **MCP** mengelola server MCP yang dihubungkan Copilot CLI, dengan dukungan berkas `~/.copilot/mcp-config.json`.

- **Daftar, tambah, hapus:** lihat server yang terdaftar, lalu tambah atau hapus entri dari antarmuka; perubahan ditulis kembali ke berkas konfigurasi MCP.
- **Berfungsi dengan server MCP FlyEnv:** modul [Server MCP FlyEnv](/id/features/mcp-server) dapat mendaftarkan dirinya ke daftar MCP Copilot CLI, sehingga Copilot dapat memeriksa dan mengoperasikan layanan serta situs lokal Anda.
- **Verifikasi di terminal:** perintah cepat `copilot mcp list` pada kartu Layanan adalah cara tercepat mengonfirmasi yang benar-benar dimuat CLI.

![Tab server MCP dengan daftar server terdaftar serta tindakan tambah dan hapus](https://oss.macphpstudy.com/image/features/github-copilot-cli-5.webp)

<FeatureRelatedLinks locale="id" slug="github-copilot-cli" />

## Catatan kompatibilitas

GitHub Copilot CLI bukan layanan latar belakang: FlyEnv tidak menambahkan sakelar mulai/hentikan, port, atau siklus hidup proses, dan setiap sesi interaktif berjalan pada terminal sistem eksternal. Pemasangan berbasis npm serta sama pada macOS, Linux, dan Windows, sehingga Node.js dengan npm harus tersedia terlebih dahulu. Jika perlu, pasang dari [modul Node.js](/id/features/nodejs) FlyEnv atau unduh FlyEnv dari [halaman Unduhan](/id/download). Konfigurasi hanya tersedia sebagai JSON mentah tanpa formulir visual; pertanyaan mengenai tiap kunci merujuk ke dokumentasi Copilot CLI. Data sesi berada di penyimpanan SQLite CLI di bawah `~/.copilot` (atau lokasi yang ditunjuk `COPILOT_CONFIG_DIR`), dan FlyEnv hanya membaca serta menghapus data yang ditulis Copilot CLI di sana.
