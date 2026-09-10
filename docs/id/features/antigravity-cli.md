---
layout: doc
titleTemplate: false
title: 'Antigravity CLI di FlyEnv: panduan pengembangan lokal'
description: 'Pasang, konfigurasikan, dan kelola Antigravity CLI di FlyEnv untuk pengembangan lokal.'
head:
  - - meta
    - name: description
      content: 'Pasang, konfigurasikan, dan kelola Antigravity CLI di FlyEnv untuk pengembangan lokal.'
  - - meta
    - property: og:title
      content: 'Antigravity CLI di FlyEnv: panduan pengembangan lokal'
  - - meta
    - property: og:description
      content: 'Pasang, konfigurasikan, dan kelola Antigravity CLI di FlyEnv untuk pengembangan lokal.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/id/features/antigravity-cli
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/id/features/antigravity-cli
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Antigravity CLI di FlyEnv

Antigravity CLI (`agy`) adalah agen pengodean AI Google berbasis terminal, sekaligus pendamping baris perintah untuk Antigravity IDE. FlyEnv menyediakan panel kendali khusus: pasang biner `agy` melalui terminal tertanam, ubah pengaturan lewat formulir visual, lanjutkan percakapan dari daftar Sesi yang dikelompokkan, serta telusuri Skill pengguna dan bawaan dengan pratinjau Markdown. Modul ini merupakan bagian dari perangkat AI FlyEnv—lihat [cara FlyEnv bekerja dengan alat pengodean AI](/id/guide/flyenv-work-with-ai) untuk gambaran lengkapnya.

![Ikhtisar modul Antigravity CLI di FlyEnv](https://oss.macphpstudy.com/image/features/antigravity-cli-1.webp)

## Instalasi

Antigravity CLI bukan layanan latar belakang dan FlyEnv tidak menyertakan binernya. Instalasi adalah tindakan sekali jalan pada kartu **Layanan**: FlyEnv membuka terminal tertanam dan menjalankan skrip pemasangan resmi penyedia—`curl -fsSL https://antigravity.google/cli/install.sh | bash` di macOS dan Linux, atau skrip PowerShell yang setara di Windows—dengan lingkungan proksi FlyEnv agar unduhan dapat berjalan di balik proksi.

- **Deteksi otomatis:** FlyEnv menemukan biner `agy` yang sudah ada pada `PATH` dan lokasi pemasangan umum (`/usr/local/bin`, `/opt/homebrew/bin`, `~/.local/bin`, serta direktori bin global npm/yarn/pnpm/bun di macOS dan Linux; `%APPDATA%\npm`, WinGet Links, dan `~/.local/bin` di Windows), lalu menampilkan versi terdeteksi pada kartu Layanan.
- **Ringkasan perintah:** kartu Layanan menyediakan tombol salin untuk perintah berguna seperti `agy plugin list`, `agy plugin import`, `agy install`, dan `agy models`.

## Konfigurasi

Tab **Berkas Konfigurasi** mengedit berkas yang benar-benar dibaca Antigravity CLI. Berkas pengaturan utama berada di `~/.gemini/antigravity-cli/settings.json`, sementara server MCP disimpan terpisah di `~/.gemini/config/mcp_config.json`.

- **Formulir visual untuk pengaturan umum:** ubah model, sakelar sandbox terminal, dan tingkat izin alat melalui kolom formulir tanpa mengedit JSON secara manual.
- **Editor mentah:** beralih ke tampilan berkas lengkap untuk kunci yang tidak tersedia dalam formulir.
- **Akar konfigurasi Gemini bersama:** Antigravity CLI membaca direktori konfigurasi Gemini CLI; apabila Anda memindahkannya dengan variabel lingkungan `GEMINI_HOME`, FlyEnv mengikuti penimpaan tersebut.

![Formulir pengaturan visual untuk Antigravity CLI](https://oss.macphpstudy.com/image/features/antigravity-cli-2.webp)

## Sesi

Tab **Sesi** menampilkan percakapan terdahulu agar Anda dapat kembali ke suatu sesi tanpa harus mengingat ID-nya.

- **Dikelompokkan menurut direktori kerja:** percakapan diatur berdasarkan folder tempat percakapan dijalankan; setiap entri menampilkan ID dan waktu modifikasi terakhir. Karena Antigravity menyimpan payload pesan sebagai protobuf, judul dan prompt pertama dipulihkan sebisa mungkin.
- **Lanjutkan pada terminal sendiri:** menjalankan atau melanjutkan sesi membuka terminal sistem—bukan panel di dalam FlyEnv—dengan `agy --conversation <id>` (atau `agy --continue` untuk sesi terbaru) yang telah diketik pada direktori yang tepat.
- **Pembersihan mudah:** hapus percakapan lama langsung dari daftar.

![Sesi yang dikelompokkan menurut direktori kerja](https://oss.macphpstudy.com/image/features/antigravity-cli-3.webp)

## Skill

Tab **Skill** menelusuri langsung folder skill di disk. Tidak seperti modul [GitHub Copilot CLI](/id/features/github-copilot-cli), yang tab Skill-nya menanyakan CLI, daftar Antigravity dibaca langsung dari sistem berkas.

- **Skill pengguna dan bawaan:** skill Anda dari `antigravity-cli/skills` ditampilkan bersama skill bawaan dari `antigravity-cli/builtin/skills`; yang terakhir diberi tag bawaan.
- **Panel pratinjau Markdown:** membuka skill merender Markdown-nya dalam panel dengan tampilan kode, pratinjau, dan terpisah, sehingga Anda dapat membaca instruksi yang sudah diformat sebelum memutuskan untuk memakai atau mengeditnya.
- **Buka direktori skill:** sebuah tombol membuka folder skill di pengelola berkas ketika Anda ingin menambah atau mengedit berkas secara langsung.

![Skill](https://oss.macphpstudy.com/image/features/antigravity-cli-4.webp)

## Server MCP

Tab **MCP** mengelola server Model Context Protocol yang terhubung dengan Antigravity CLI, dibaca dari dan ditulis ke `~/.gemini/config/mcp_config.json`. [Panduan MCP dan ruang kerja AI](/id/guide/ai-coding-workspace-mcp) menjelaskan peran server MCP dalam ruang kerja pengodean AI. Lihat server yang telah dikonfigurasi, tambahkan server baru, atau hapus entri yang tidak lagi diperlukan—tanpa mengedit JSON manual. [Server MCP](/id/features/mcp-server) milik FlyEnv dapat mendaftarkan dirinya ke daftar ini sekali klik dari tab Konfigurasi Kliennya.

![Server MCP](https://oss.macphpstudy.com/image/features/antigravity-cli-5.webp)

<FeatureRelatedLinks locale="id" slug="antigravity-cli" />

## Catatan kompatibilitas

Antigravity CLI di FlyEnv adalah pendamping desktop untuk alat baris perintah `agy`, tersedia di macOS, Windows, dan Linux; skrip pemasangan serta jalur deteksinya berbeda menurut platform seperti dijelaskan di atas. Ini bukan layanan: tidak ada siklus hidup mulai/henti, port, atau manajer versi—FlyEnv mengelola versi `agy` yang ditempatkan pemasang resmi atau manajer paket Anda pada komputer. Percakapan selalu dibuka di terminal sistem eksternal; FlyEnv mencantumkan dan menjalankannya, tetapi tidak menghosting chat itu sendiri. Detail sesi dibatasi oleh format penyimpanan Antigravity (basis data SQLite dengan payload protobuf), sehingga FlyEnv dapat menampilkan ID, direktori kerja, dan waktu modifikasi secara andal, sedangkan judul bersifat perkiraan terbaik. Untuk build dan paket platform FlyEnv saat ini, lihat [halaman Unduhan](/id/download). FlyEnv mengelola CLI pengodean AI lain dengan cara serupa—lihat modul [Claude Code](/id/features/claude-code) dan [Codex](/id/features/codex).
