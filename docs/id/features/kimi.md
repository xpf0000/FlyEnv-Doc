---
layout: doc
titleTemplate: false
title: 'Kimi di FlyEnv: panduan pengembangan lokal'
description: 'Pasang, konfigurasikan, dan kelola Kimi di FlyEnv untuk pengembangan lokal.'
head:
  - - meta
    - name: description
      content: 'Pasang, konfigurasikan, dan kelola Kimi di FlyEnv untuk pengembangan lokal.'
  - - meta
    - property: og:title
      content: 'Kimi di FlyEnv: panduan pengembangan lokal'
  - - meta
    - property: og:description
      content: 'Pasang, konfigurasikan, dan kelola Kimi di FlyEnv untuk pengembangan lokal.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/id/features/kimi
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/id/features/kimi
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Kimi CLI di FlyEnv

Kimi adalah agen pemrograman baris perintah dari Moonshot AI yang didukung model Kimi. FlyEnv menyediakan halaman pengelolaan khusus untuk CLI pemrograman Kimi: pasang dari kartu Layanan, edit `config.toml` melalui formulir visual, lanjutkan atau ekspor Sesi terdahulu, baca berkas log Kimi tanpa meninggalkan aplikasi, serta kelola server MCP HTTP/SSE. Kimi adalah salah satu dari beberapa klien pemrograman AI yang dikelola FlyEnv, bersama [Claude Code](/id/features/claude-code) dan [OpenCode](/id/features/opencode). [Panduan alur kerja asisten AI](/id/guide/flyenv-work-with-ai) menjelaskan peran modul ini dalam pengembangan sehari-hari.

![Modul Kimi FlyEnv dengan tab layanan, berkas konfigurasi, log, sesi, dan MCP](https://oss.macphpstudy.com/image/features/kimi-1.webp)

## Instalasi

Kimi bukan layanan latar belakang; tidak ada daemon untuk dimulai atau dihentikan, dan tidak ada Manajer Versi. Modul mendeteksi pemasangan yang sudah ada di PATH dan lokasi pemasangan umum, lalu menampilkan versi terdeteksi pada kartu Layanan.

- **Pemasangan sekali klik:** FlyEnv menjalankan skrip pemasangan resmi di terminal tersemat agar Anda melihat keluaran sebenarnya: `curl -fsSL https://code.kimi.com/kimi-code/install.sh | bash` di macOS dan Linux, serta `irm https://code.kimi.com/kimi-code/install.ps1 | iex` di Windows.
- **Lembar ringkas perintah:** kartu Layanan menawarkan perintah cepat yang dapat disalin, seperti `kimi --plan`, `kimi --yolo`, `kimi vis`, dan `kimi provider list/add/remove`, sehingga pemanggilan umum selalu satu klik saja.
- **Luncurkan dari FlyEnv:** sesi terbuka di terminal sistem eksternal Anda. FlyEnv meneruskan `kimi`, `kimi --session "<id>"`, atau `kimi --continue` ke terminal OS alih-alih menampung chat itu sendiri.

## Konfigurasi

Tab **Berkas Konfigurasi** mengedit berkas pada home konfigurasi Kimi (`~/.kimi-code/`, dapat diganti melalui `KIMI_CODE_HOME`): `config.toml`, `tui.toml`, dan `mcp.json`.

- **Formulir visual untuk `config.toml`:** sesuaikan nilai bawaan terpenting—`default_permission_mode`, `default_thinking`, `default_plan_mode`, dan `telemetry`—dari bidang formulir tanpa mengedit TOML secara manual.
- **Editor mentah:** setiap berkas juga dapat dibuka pada editor sumber lengkap untuk pengaturan yang tidak dicakup formulir.

![Formulir visual untuk mengedit nilai bawaan config.toml Kimi](https://oss.macphpstudy.com/image/features/kimi-2.webp)

## Sesi

Tab **Sesi** membaca penyimpanan sesi di `~/.kimi-code/sessions/` dan mencantumkan setiap percakapan yang terekam, dikelompokkan menurut direktori kerja.

- **Lanjutkan dari tempat terakhir:** pilih sesi dan FlyEnv membukanya di terminal sistem eksternal dengan `kimi --session "<id>"`; `kimi --continue` langsung kembali ke sesi terbaru.
- **Ekspor:** Kimi adalah satu-satunya klien AI di FlyEnv dengan tindakan ekspor bawaan. FlyEnv menjalankan `kimi export "<id>"` di terminal tersemat agar Anda dapat menyimpan atau membagikan transkrip sesi.
- **Pembersihan:** hapus sesi yang tidak lagi diperlukan langsung dari tabel.

![Tab sesi Kimi dikelompokkan berdasarkan direktori kerja dengan tindakan lanjutkan dan ekspor](https://oss.macphpstudy.com/image/features/kimi-3.webp)

## Log

Kimi adalah satu-satunya modul CLI pemrograman AI FlyEnv dengan tab **Log** khusus. Tab ini mengumpulkan setiap berkas `*.log` di bawah `~/.kimi-code/logs/` ke penampil log bersama, sehingga ketika CLI bermasalah Anda dapat membaca keluarannya langsung tanpa mencari-cari di direktori konfigurasi.

## Server MCP

Tab **MCP** mencantumkan server yang terdaftar untuk Kimi dan memungkinkan Anda menambah atau menghapus entri. [Panduan MCP dan ruang kerja AI](/id/guide/ai-coding-workspace-mcp) menjelaskan bagaimana server MCP memperluas alat pemrograman AI. Kimi hanya menerima server MCP HTTP/SSE; server stdio ditolak menurut rancangan. FlyEnv menulis penambahan ke `mcp.json` di home konfigurasi, berkas yang sama dibaca CLI. [Server MCP](/id/features/mcp-server) FlyEnv dapat mendaftarkan dirinya di sini sekali klik dari tab Konfigurasi Klien.

![Mengelola server MCP HTTP/SSE untuk Kimi](https://oss.macphpstudy.com/image/features/kimi-4.webp)

<FeatureRelatedLinks locale="id" slug="kimi" />

## Catatan kompatibilitas

Modul Kimi mengelola berkas dan konfigurasi CLI, tetapi tidak menjalankan Kimi sebagai layanan latar belakang; sesi interaktif selalu berlangsung di terminal sistem Anda, bukan di dalam FlyEnv. Pemasangan memakai skrip resmi vendor, sehingga ketersediaan di suatu platform mengikuti dukungan skrip tersebut. Periksa [halaman Unduhan](/id/download) untuk platform FlyEnv yang didukung. Dukungan MCP dibatasi pada transport HTTP dan SSE karena Kimi sendiri tidak membaca berkas konfigurasi MCP stdio.
