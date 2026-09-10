---
layout: doc
titleTemplate: false
title: 'Hermes Agent di FlyEnv: panduan pengembangan lokal'
description: 'Pasang, konfigurasikan, dan kelola Hermes Agent di FlyEnv untuk pengembangan lokal.'
head:
  - - meta
    - name: description
      content: 'Pasang, konfigurasikan, dan kelola Hermes Agent di FlyEnv untuk pengembangan lokal.'
  - - meta
    - property: og:title
      content: 'Hermes Agent di FlyEnv: panduan pengembangan lokal'
  - - meta
    - property: og:description
      content: 'Pasang, konfigurasikan, dan kelola Hermes Agent di FlyEnv untuk pengembangan lokal.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/id/features/hermes-agent
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/id/features/hermes-agent
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Hermes Agent di FlyEnv

Hermes adalah agen AI otonom sumber terbuka dari Nous Research, berupa agen berbasis terminal dengan proses gateway sendiri, sistem skill yang dapat diperluas, dan sesi persisten. FlyEnv membungkus CLI agen Hermes dalam modul khusus: pemasangan sekali jalan melalui skrip resmi, kontrol mulai/hentikan gateway Hermes, pengeditan langsung berkas konfigurasi, pengelola Skill dengan penelusuran daring dari beberapa sumber, serta tampilan Sesi dengan pembersihan. Modul ini terdiri dari lima tab: Layanan, Berkas Konfigurasi, Log, Skill, dan Sesi. Untuk cara FlyEnv masuk ke alur kerja berbantuan AI, lihat [FlyEnv Bekerja dengan AI](/id/guide/flyenv-work-with-ai). Pasangkan Hermes dengan runtime model lokal seperti [Ollama](/id/features/ollama), seperti dalam [panduan agen AI lokal luring](/id/guide/build-local-offline-ai-agent), untuk menjalankan seluruh tumpukan tanpa model cloud.

![Ikhtisar modul Hermes FlyEnv dengan tab layanan, berkas konfigurasi, log, skill, dan sesi](https://oss.macphpstudy.com/image/features/hermes-agent-1.webp)

## Instalasi

Hermes dipasang dari skrip vendor dan dijalankan dalam terminal tersemat FlyEnv agar Anda melihat keluaran sebenarnya.

- **Satu perintah per platform:** pada macOS dan Linux, FlyEnv menjalankan `curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash`; di Windows, padanannya di PowerShell adalah `irm .../install.ps1 | iex`.
- **Tanpa Manajer Versi:** tidak ada daftar versi daring maupun pengalihan beberapa versi untuk Hermes. Setelah dipasang, tab Layanan menampilkan versi terdeteksi.
- **Platform didukung:** Hermes dapat dipasang di macOS, Windows, dan Linux, sama seperti platform FlyEnv pada [halaman Unduhan](/id/download).

## Manajemen gateway

Sakelar bilah samping modul Hermes dan kontrol pada tab Layanan mengendalikan gateway Hermes langsung melalui CLI.

- **Mulai dan hentikan:** FlyEnv menjalankan `hermes gateway start` serta `hermes gateway stop` ketika Anda mengganti sakelar.
- **Status langsung:** tab Layanan menampilkan versi terpasang dan status gateway yang diurai dari keluaran `hermes gateway status`.
- **Palet perintah:** tab Layanan menyediakan sekitar 78 perintah Hermes dalam 12 kategori—chat/sesi, gateway, konfigurasi, autentikasi model, skill/plugin, memori/alat, MCP, sistem/log, cadangan/pembaruan, dasbor/TUI, dan profil—yang semuanya dijalankan dalam terminal tersemat. Kategori MCP bekerja baik dengan [Server MCP](/id/features/mcp-server) FlyEnv yang membuka layanan lokal Anda untuk agen berkemampuan MCP.

![Tab layanan Hermes dengan versi, status gateway, dan palet perintah berdasarkan kategori](https://oss.macphpstudy.com/image/features/hermes-agent-2.webp)

## Konfigurasi

Tab Berkas Konfigurasi membuka berkas konfigurasi Hermes dari direktori home Anda dalam editor mentah dengan penyorotan sintaks sesuai jenis berkas.

- **`~/.hermes/config.yaml`:** konfigurasi utama Hermes, diedit sebagai YAML.
- **`~/.hermes/.env`:** variabel lingkungan untuk agen, diedit sebagai berkas env.
- **`~/.hermes/SOUL.md`:** berkas persona agen, diedit sebagai Markdown.

![Mengedit ~/.hermes/config.yaml di editor konfigurasi FlyEnv](https://oss.macphpstudy.com/image/features/hermes-agent-3.webp)

## Skill

Tab Skill mengelola skill agen, baik lokal maupun daring.

- **Skill terpasang:** aktifkan atau nonaktifkan skill dengan sakelar; penonaktifan menulis entri ke `skills.disabled` dalam `config.yaml`. Anda juga dapat memperbarui, mencopot, atau mereset skill dari daftar yang sama.
- **Periksa dan temukan:** dialog pemeriksaan menampilkan detail skill, dan sekali klik membuka direktori skill di pengelola berkas.
- **Penelusuran daring:** jelajahi skill dengan paginasi serta pencarian kata kunci dari enam sumber—sumber resmi, skills.sh, well-known, GitHub, ClawHub, dan LobeHub—lalu pasang yang Anda inginkan.

![Menjelajahi skill Hermes daring dari berbagai sumber dengan pencarian](https://oss.macphpstudy.com/image/features/hermes-agent-4.webp)

## Sesi

Tab Sesi mencantumkan sesi yang dilaporkan `hermes sessions list` dan menguraikannya ke tabel di FlyEnv. Menghapus sesi menjalankan perintah terkait dalam terminal tersemat, sehingga operasi dan hasilnya tetap terlihat.

![Tab sesi Hermes mencantumkan sesi dengan tindakan hapus](https://oss.macphpstudy.com/image/features/hermes-agent-5.webp)

## Log

Tab Log membaca langsung berkas di bawah `~/.hermes/logs/`, dengan penampil untuk setiap berkas `*.log`. Jika berkas log belum tersedia di disk, FlyEnv menggunakan `hermes logs <type> -n <lines>` untuk mengambil keluaran terbaru dari CLI.

<FeatureRelatedLinks locale="id" slug="hermes-agent" />

## Catatan kompatibilitas

Hermes bukan layanan latar belakang yang dikelola FlyEnv: modul ini tidak mendaftarkan daemon atau proses baki, dan sakelar bilah samping hanya mengendalikan gateway lewat CLI `hermes`. Pemasangan adalah sekali jalan melalui skrip resmi vendor di terminal tersemat—skrip shell pada macOS dan Linux, PowerShell di Windows—dan FlyEnv tidak menawarkan daftar maupun manajemen beberapa versi. Konfigurasi, log, dan skill berada di bawah `~/.hermes` pada direktori home Anda dan merupakan milik agen; FlyEnv mengedit serta menampilkannya tanpa menentukan skemanya. Platform dan rilis yang tersedia tercermin pada [halaman Unduhan](/id/download) serta aplikasi. FlyEnv juga mengelola asisten pribadi berbasis gateway lain dengan cara serupa; lihat modul [OpenClaw](/id/features/openclaw).
