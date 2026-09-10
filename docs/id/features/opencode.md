---
layout: doc
titleTemplate: false
title: 'OpenCode di FlyEnv'
description: 'Kelola agen coding AI OpenCode, sesi, penyedia model, dan server MCP di FlyEnv.'
head:
  - - meta
    - name: description
      content: 'Kelola agen coding AI OpenCode, sesi, penyedia model, dan server MCP di FlyEnv.'
  - - meta
    - property: og:title
      content: 'OpenCode di FlyEnv'
  - - meta
    - property: og:description
      content: 'Kelola agen coding AI OpenCode, sesi, penyedia model, dan server MCP di FlyEnv.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/id/features/opencode
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/id/features/opencode
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# OpenCode di FlyEnv

OpenCode adalah agen coding AI sumber terbuka yang berjalan di terminal dan mendukung banyak penyedia model, sehingga Anda tidak bergantung pada model satu vendor. FlyEnv menyediakan halaman pengelolaan khusus dengan enam tab—Layanan, Berkas Konfigurasi, Sesi, MCP, Statistik, dan Penyedia—set tab terlengkap di antara alat coding AI FlyEnv. Dari satu tempat Anda dapat memasang CLI, mengedit konfigurasi JSONC, menelusuri dan melanjutkan sesi lama, meninjau statistik per model, memeriksa penyedia terautentikasi, serta mengelola server MCP. Semuanya terintegrasi dengan [alur kerja berbantuan AI FlyEnv](/id/guide/flyenv-work-with-ai).

![Modul OpenCode FlyEnv dengan tab Layanan, Berkas Konfigurasi, Sesi, MCP, Statistik, dan Penyedia](https://oss.macphpstudy.com/image/features/opencode-1.webp)

## Pemasangan

OpenCode adalah CLI coding AI, bukan layanan latar belakang—tidak ada yang perlu dimulai atau dihentikan dan tidak ada port yang dikelola. FlyEnv mendeteksi instalasi yang ada secara otomatis dan menawarkan pemasangan sekali klik jika belum ditemukan.

- **Satu perintah di semua platform:** pemasangan menjalankan `npm install -g opencode-ai` di macOS, Windows, dan Linux.
- **Eksekusi di terminal tertanam:** perintah berjalan di terminal bawaan FlyEnv sehingga Anda melihat keluaran nyata; variabel lingkungan proxy FlyEnv diterapkan agar unduhan tetap berfungsi di balik proxy.
- **Deteksi otomatis:** FlyEnv mencari binari `opencode` di `PATH` dan lokasi umum—direktori sistem serta folder global npm, yarn, pnpm, bun, atau Volta di macOS/Linux; lokasi npm atau WinGet di Windows. OpenCode yang Anda pasang sendiri akan ditemukan tanpa pemasangan ulang.
- **Perintah cepat yang dapat disalin:** tab Layanan menyediakan lembar contekan seperti `opencode models`, `opencode upgrade`, dan `opencode agent list`, masing-masing dengan tombol salin.

## Konfigurasi

OpenCode menyimpan pengaturan di `~/.config/opencode/opencode.jsonc`, yaitu berkas JSON dengan komentar. FlyEnv memahami XDG dan menggunakan `opencode.json` jika itu yang dipakai penyiapan Anda.

- **Editor JSONC mentah:** tab Berkas Konfigurasi membuka berkas sebenarnya dalam editor sumber lengkap. Tidak ada formulir visual; Anda mengedit persis yang dibaca OpenCode.
- **Ramah komentar:** karena formatnya JSONC, komentar dalam berkas dipertahankan saat diedit.

![Konfigurasi OpenCode](https://oss.macphpstudy.com/image/features/opencode-2.webp)

## Sesi

Tab Sesi mencantumkan percakapan OpenCode sebelumnya dengan meminta data dari CLI: FlyEnv menjalankan `opencode session list --format json` lalu menampilkan hasilnya.

- **Dikelompokkan berdasarkan proyek:** sesi diatur menurut direktori kerja agar percakapan dari basis kode yang sama tetap bersama.
- **Jalankan, lanjutkan, hapus:** mulai sesi baru di folder proyek, lanjutkan sesi tertentu, teruskan sesi terakhir, atau hapus sesi yang tidak diperlukan.
- **Terminal eksternal:** sesi selalu dibuka di jendela terminal sistem dengan menjalankan `opencode`, `opencode --session <id>`, atau `opencode --continue` dari direktori kerja sesi, bukan di panel tertanam, sehingga UI interaktif berfungsi penuh.

![Tab Sesi OpenCode dikelompokkan menurut direktori kerja](https://oss.macphpstudy.com/image/features/opencode-3.webp)

## Statistik

Tab Statistik mengubah laporan penggunaan OpenCode menjadi tabel yang mudah dibaca. FlyEnv menjalankan `opencode stats --models` (opsional dengan rentang `--days N`) dan mengurai keluaran tabel CLI sambil menghapus kode warna ANSI.

- **Rincian per model:** lihat jumlah pekerjaan yang ditangani setiap model.
- **Rentang waktu yang dapat diatur:** batasi laporan ke beberapa hari terakhir untuk memantau pola penggunaan terkini.

![Tab Statistik OpenCode dengan tabel penggunaan per model](https://oss.macphpstudy.com/image/features/opencode-4.webp)

## Penyedia

Tab Penyedia menampilkan penyedia model yang telah diautentikasi di OpenCode. FlyEnv membacanya dari penyimpanan kredensial OpenCode `~/.local/share/opencode/auth.json`, sehingga daftar selalu mencerminkan apa yang dapat digunakan CLI.

- **Penyedia terautentikasi sekilas:** pastikan kunci API atau login berhasil tanpa membuka berkas secara manual.
- **Selalu sinkron:** karena data berasal langsung dari berkas autentikasi OpenCode, penyedia yang ditambahkan di CLI muncul di FlyEnv pada pembacaan berikutnya.

![Tab Penyedia OpenCode yang menampilkan penyedia model terautentikasi](https://oss.macphpstudy.com/image/features/opencode-5.webp)

## Server MCP

Tab MCP mengelola server Model Context Protocol yang digunakan OpenCode. [Panduan MCP dan ruang kerja AI](/id/guide/ai-coding-workspace-mcp) menjelaskan manfaat server MCP dalam penyiapan coding AI. FlyEnv membaca dan menulis entri MCP langsung di berkas konfigurasi JSONC, menghapus komentar saat parsing agar berkas yang diedit manual tetap valid.

- **Daftar, tambah, hapus:** tinjau server MCP terkonfigurasi dan tambah/hapus entri tanpa mencari di konfigurasi.
- **Penyimpanan asli konfigurasi:** perubahan disimpan di `opencode.jsonc`, satu sumber kebenaran untuk FlyEnv dan edit manual.
- **Pendaftaran FlyEnv satu klik:** [Server MCP](/id/features/mcp-server) FlyEnv dapat mendaftarkan dirinya ke daftar ini dari tab Konfigurasi Klien.

![Server MCP OpenCode](https://oss.macphpstudy.com/image/features/opencode-6.webp)

<FeatureRelatedLinks locale="id" slug="opencode" />

## Catatan kompatibilitas

OpenCode bukan layanan latar belakang: FlyEnv tidak memulai, menghentikan, atau memantaunya, dan sakelar layanan bilah sisi sengaja dinonaktifkan. Pemasangan di semua platform memakai `npm install -g opencode-ai` di terminal FlyEnv, sehingga lingkungan Node.js/npm yang berfungsi (dapat dipasang dari [modul Node.js](/id/features/nodejs)) menjadi prasyarat. Deteksi bergantung pada binari di `PATH` atau lokasi standar yang dipindai FlyEnv. Data Sesi, Statistik, dan Penyedia berasal dari CLI serta berkas OpenCode; akurasinya bergantung pada versi terpasang dan pembaruan dapat mengubah laporan. Pekerjaan interaktif berlangsung di terminal sistem eksternal, bukan di FlyEnv. Lihat [halaman Unduhan](/id/download) untuk platform dan rilis terkini.
