---
layout: doc
titleTemplate: false
title: 'Manajer Codex CLI: Sesi, Plugin, dan MCP | FlyEnv'
description: 'Pasang Codex CLI, atur config.toml, lanjutkan sesi, dan kelola plugin serta server MCP dari FlyEnv.'
head:
  - - meta
    - name: description
      content: 'Pasang Codex CLI, atur config.toml, lanjutkan sesi, dan kelola plugin serta server MCP dari FlyEnv.'
  - - meta
    - property: og:title
      content: 'Manajer Codex CLI: Sesi, Plugin, dan MCP | FlyEnv'
  - - meta
    - property: og:description
      content: 'Pasang Codex CLI, atur config.toml, lanjutkan sesi, dan kelola plugin serta server MCP dari FlyEnv.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/id/features/codex
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/id/features/codex
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Codex CLI di FlyEnv

Codex adalah agen pengodean AI berbasis baris perintah yang dapat membaca basis kode, menyunting berkas, dan menjalankan perintah. FlyEnv memberi Codex pusat kendali grafis untuk pemasangan, konfigurasi `config.toml`, riwayat sesi, plugin, serta server MCP, sambil tetap menjalankan tugas interaktif di terminal sistem. Lihat [cara FlyEnv bekerja dengan alat AI](/id/guide/flyenv-work-with-ai) untuk alur kerja AI yang lebih luas.

![Ringkasan modul Codex FlyEnv](https://oss.macphpstudy.com/image/features/codex-1.webp)

## Instalasi

Codex CLI bukan layanan latar belakang: FlyEnv tidak memulai, menghentikan, atau menjadikannya daemon, dan tidak ada port atau proses untuk dipantau. Tab **Layanan** menunjukkan apakah Codex telah terpasang serta versi yang ada di mesin Anda.

- **Skrip pemasangan resmi yang dijalankan untuk Anda:** pemasangan adalah tindakan satu kali yang menjalankan skrip vendor—`curl -fsSL https://chatgpt.com/codex/install.sh | sh` di macOS dan Linux, atau `irm https://chatgpt.com/codex/install.ps1 | iex` di Windows—di terminal tertanam FlyEnv sehingga keluaran aslinya dapat dilihat. Lingkungan proksi FlyEnv diterapkan otomatis.
- **Deteksi otomatis:** FlyEnv menemukan biner `codex` pada `PATH` dan lokasi pemasangan umum (Homebrew serta direktori bin standar, global npm/yarn/pnpm/bun di macOS/Linux; lokasi npm dan WinGet di Windows), sehingga pemasangan yang sudah ada muncul tanpa memasang ulang.
- **Lembar perintah ringkas:** referensi perintah sehari-hari dengan tombol salin, termasuk `codex exec`, `codex review`, dan `codex login`, tersedia langsung di halaman.

## Konfigurasi

Tab **Berkas Konfigurasi** menyunting konfigurasi Codex secara langsung; tidak ada yang perlu dimulai ulang setelahnya.

- **Formulir visual untuk `config.toml`:** ubah `~/.codex/config.toml` dari formulir, bukan menulis TOML sendiri. Model, `model_reasoning_effort`, `approval_policy`, dan `sandbox_mode` semuanya dapat diubah.
- **Editor mentah:** sumber lengkap `config.toml` dan `auth.json` dapat disunting sebagai teks biasa untuk pengaturan yang tidak dicakup formulir.
- **Beranda kustom dihormati:** bila Codex diarahkan ke lokasi lain melalui `CODEX_HOME`, FlyEnv membaca dan menulis konfigurasi di lokasi tersebut.

![Formulir visual config.toml untuk Codex](https://oss.macphpstudy.com/image/features/codex-2.webp)

## Sesi

Tab **Sesi** membaca riwayat Codex dari berkas `.jsonl` yang dibagi menurut tanggal di bawah `~/.codex/sessions/`, lalu mengelompokkannya berdasarkan direktori kerja agar percakapan setiap proyek tetap bersama.

- **Lanjutkan dari titik terakhir:** pilih sesi dan FlyEnv membuka terminal sistem di direktorinya dengan `codex resume <id>`, atau kembali langsung ke sesi terbaru melalui `codex resume --last`.
- **Mulai percakapan baru:** jalankan `codex` untuk direktori kerja mana pun yang tercantum dari tabel yang sama.
- **Pembersihan:** hapus sesi yang tidak lagi diperlukan dari daftar.

Sesi selalu berjalan di jendela terminal sistem eksternal, bukan di dalam FlyEnv. FlyEnv menyiapkan perintah dan direktori kerja, lalu menyerahkan percakapan kepada terminal Anda.

![Tabel Sesi Codex yang dikelompokkan berdasarkan proyek](https://oss.macphpstudy.com/image/features/codex-3.webp)

## Plugin

Tab **Plugin** mengelola plugin Codex yang tersedia dan terpasang. Anda dapat memasang plugin dengan keluaran proses terlihat di terminal tertanam, lalu mengaktifkan, menonaktifkan, atau mencopotnya dari antarmuka tanpa menjalankan perintah manual.

![Mengelola Plugin Codex di FlyEnv](https://oss.macphpstudy.com/image/features/codex-4.webp)

## Server MCP

Tab **MCP** mengelola server Model Context Protocol yang dapat dipanggil Codex, dengan tindakan daftar, tambah, dan hapus. [Panduan MCP dan ruang kerja AI](/id/guide/ai-coding-workspace-mcp) menjelaskan bagaimana server MCP menghubungkan alat pengodean AI ke lingkungan lokal Anda.

- **Ditulis ke `config.toml`:** server MCP HTTP yang ditambahkan disimpan di bawah `mcp_servers` dalam `~/.codex/config.toml`, sehingga seluruhnya berada pada satu berkas konfigurasi.
- **Klien jarak jauh aktif otomatis:** menambahkan server HTTP juga mengaktifkan `features.rmcp_client = true` agar Codex dapat menjangkau endpoint MCP jarak jauh.
- **Pendaftaran FlyEnv sekali klik:** [Server MCP](/id/features/mcp-server) milik FlyEnv dapat mendaftarkan dirinya ke daftar ini dari tab Konfigurasi Klien.

![Mengelola server MCP Codex](https://oss.macphpstudy.com/image/features/codex-5.webp)

<FeatureRelatedLinks locale="id" slug="codex" />

## Catatan kompatibilitas

Modul Codex adalah lapisan pengelolaan untuk CLI, bukan runtime terhosting: FlyEnv tidak menjalankan percakapan interaktif untuk Anda dan sesi selalu dibuka di terminal sistem dengan direktori proyek sebagai direktori kerja. Pemasangan, fitur CLI, format riwayat, serta pilihan konfigurasi bergantung pada versi Codex yang terpasang. Periksa [halaman Unduhan](/id/download) untuk build FlyEnv yang tersedia bagi platform Anda, dan lihat [Claude Code](/id/features/claude-code), [OpenCode](/id/features/opencode), serta [Kimi](/id/features/kimi) untuk CLI AI lain yang dikelola dengan pendekatan serupa.
