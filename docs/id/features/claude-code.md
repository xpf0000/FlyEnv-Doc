---
layout: doc
titleTemplate: false
title: 'Manajer Claude Code: Sesi, Plugin, dan MCP | FlyEnv'
description: 'Pasang Claude Code, sunting pengaturan secara visual, lanjutkan sesi, dan kelola plugin serta server MCP dari FlyEnv.'
head:
  - - meta
    - name: description
      content: 'Pasang Claude Code, sunting pengaturan secara visual, lanjutkan sesi, dan kelola plugin serta server MCP dari FlyEnv.'
  - - meta
    - property: og:title
      content: 'Manajer Claude Code: Sesi, Plugin, dan MCP | FlyEnv'
  - - meta
    - property: og:description
      content: 'Pasang Claude Code, sunting pengaturan secara visual, lanjutkan sesi, dan kelola plugin serta server MCP dari FlyEnv.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/id/features/claude-code
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/id/features/claude-code
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Claude Code di FlyEnv

Claude Code adalah agen pengodean AI Anthropic berbasis baris perintah: ia membaca basis kode, menyunting berkas, dan menjalankan perintah untuk menyelesaikan tugas pengembangan dari terminal. FlyEnv menyediakan pusat kendali grafis untuk Claude Code: pemasangan sekali klik melalui skrip resmi, editor visual `settings.json`, peramban Sesi untuk melanjutkan percakapan lama, pengelolaan plugin dan marketplace lengkap, serta konfigurasi server MCP dari modul **Claude Code** di bilah sisi. Untuk gambaran alur kerja yang lebih luas, lihat [cara FlyEnv bekerja dengan alat AI](/id/guide/flyenv-work-with-ai).

![Modul Claude Code FlyEnv dengan tab Layanan dan terminal pemasangan](https://oss.macphpstudy.com/image/features/claude-code-1.webp)

## Instalasi

Claude Code adalah klien baris perintah, bukan layanan latar belakang; tidak ada daemon yang perlu dimulai atau dihentikan dan modul ini tidak memiliki manajer versi. FlyEnv melakukan penyiapan sebagai tugas satu kali.

- **Skrip pemasangan resmi:** klik pasang untuk menjalankan skrip vendor sendiri—`curl -fsSL https://claude.ai/install.sh | bash` di macOS/Linux atau `irm https://claude.ai/install.ps1 | iex` di Windows—dalam terminal tertanam FlyEnv. Lingkungan proksi FlyEnv diterapkan otomatis.
- **Deteksi otomatis:** FlyEnv memindai `PATH` serta lokasi pemasangan umum dan menampilkan versi Claude Code yang ditemukan.
- **Lembar perintah ringkas:** tab Layanan memuat perintah seperti `claude doctor`, `claude update`, dan `claude setup-token`, masing-masing dengan tombol salin.

## Konfigurasi

Tab **Berkas Konfigurasi** menyunting pengaturan Claude Code secara langsung melalui formulir visual dan editor mentah.

- **Formulir pengaturan umum:** atur tema, model, `includeCoAuthoredBy`, dan `cleanupPeriodDays` di `settings.json` tanpa menyunting JSON sendiri.
- **Editor JSON mentah:** gunakan tampilan sumber untuk pengaturan lain; perubahan ditulis kembali ke berkas asli.
- **Semua berkas konfigurasi terjangkau:** FlyEnv membuka `~/.claude/settings.json`, `settings.local.json`, `plugins/known_marketplaces.json`, dan `~/.claude.json`; penggantian lokasi oleh `CLAUDE_CONFIG_DIR` juga diikuti.

![Formulir visual settings.json Claude Code dengan bidang tema dan model](https://oss.macphpstudy.com/image/features/claude-code-2.webp)

## Sesi

Tab **Sesi** membaca riwayat dari direktori `~/.claude/projects` dan mengurai berkas transkrip `.jsonl` setiap proyek.

- **Dikelompokkan per proyek:** sesi diatur menurut direktori kerja agar percakapan tiap basis kode tetap bersama.
- **Lanjutkan sekali klik:** memilih sesi membuka terminal sistem di folder proyek dan menjalankan `claude --resume <id>`, atau `claude --continue` untuk percakapan terbaru. Sesi selalu berjalan di terminal sistem, bukan di FlyEnv.
- **Pembersihan:** hapus sesi yang tidak diperlukan langsung dari daftar.

![Tabel Sesi yang dikelompokkan berdasarkan direktori kerja dengan tindakan lanjutkan](https://oss.macphpstudy.com/image/features/claude-code-3.webp)

## Plugin

Tab **Plugin** adalah pengelola plugin lengkap berbasis sistem plugin Claude Code, termasuk dukungan marketplace.

- **Tersedia dan terpasang:** FlyEnv menjalankan `claude plugin list --available --json` untuk menampilkan penawaran marketplace di samping plugin yang telah Anda miliki.
- **Pasang dengan keluaran asli:** pemasangan plugin berjalan di terminal tertanam sehingga kemajuan unduh dan penyiapan terlihat.
- **Tindakan siklus hidup:** aktifkan, nonaktifkan, atau copot plugin tanpa menyentuh baris perintah.
- **Pengelolaan marketplace:** tambah atau hapus marketplace; daftar terdaftar disimpan di `known_marketplaces.json` dalam beranda Claude Code.

![Tab Plugin yang mencantumkan plugin marketplace dengan tindakan pasang dan aktifkan](https://oss.macphpstudy.com/image/features/claude-code-4.webp)

## Server MCP

Tab **MCP** mengelola server Model Context Protocol dalam bagian `mcpServers` dari `~/.claude.json`; [panduan MCP dan ruang kerja AI](/id/guide/ai-coding-workspace-mcp) menjelaskan cara server tersebut memperluas alat pengodean AI.

- **Daftar dan hapus:** lihat setiap server MCP terkonfigurasi dan hapus entri yang tidak dipakai.
- **Server HTTP dan SSE:** server jarak jauh ditambahkan dengan menulis definisinya langsung ke `~/.claude.json`.
- **Server stdio:** server lokal berbasis perintah didaftarkan melalui `claude mcp add`, persis seperti yang diharapkan CLI.
- **Pendaftaran FlyEnv sekali klik:** [Server MCP](/id/features/mcp-server) FlyEnv dapat mendaftarkan dirinya dari tab Konfigurasi Klien.

![Daftar server MCP dengan kontrol tambah dan hapus](https://oss.macphpstudy.com/image/features/claude-code-5.webp)

<FeatureRelatedLinks locale="id" slug="claude-code" />

## Catatan kompatibilitas

Claude Code di FlyEnv adalah lapisan pengelolaan di atas CLI, bukan runtime terhosting. FlyEnv tidak menjalankan Claude Code untuk Anda; sesi interaktif selalu diluncurkan di terminal sistem eksternal dengan direktori proyek sebagai direktori kerja. Pemasangan memakai skrip resmi Anthropic dan tidak ada pengelolaan banyak versi. Riwayat sesi berasal dari transkrip JSONL `~/.claude/projects`, sedangkan suntingan konfigurasi berlaku pada berkas standar di `~/.claude` atau direktori `CLAUDE_CONFIG_DIR`. Cakupan platform mengikuti build FlyEnv yang digunakan; lihat [halaman Unduhan](/id/download). FlyEnv mengelola CLI AI lain dengan cara serupa: [Codex](/id/features/codex), [OpenCode](/id/features/opencode), dan [Kimi](/id/features/kimi).
