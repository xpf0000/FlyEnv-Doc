---
layout: doc
titleTemplate: false
title: 'Otomasi Alur Kerja n8n di FlyEnv'
description: 'Jalankan dan kelola server otomasi n8n secara lokal di FlyEnv.'
head:
  - - meta
    - name: description
      content: 'Jalankan dan kelola server otomasi n8n secara lokal di FlyEnv.'
  - - meta
    - property: og:title
      content: 'Otomasi Alur Kerja n8n di FlyEnv'
  - - meta
    - property: og:description
      content: 'Jalankan dan kelola server otomasi n8n secara lokal di FlyEnv.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/id/features/n8n
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/id/features/n8n
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# n8n di FlyEnv

n8n adalah alat otomasi alur kerja sumber terbuka dengan editor visual berbasis node untuk menghubungkan API, basis data, dan layanan. Tim meng-host-nya sendiri untuk membuat integrasi dan otomasi—mulai sinkronisasi data hingga alur AI—tanpa platform otomasi ter-host. FlyEnv menjalankan n8n sebagai server otomasi lokal terkelola: pilih versi dari registri npm dan pasang di terminal tertanam, jalankan `n8n start` dengan konfigurasi lingkungan visual, serta kelola akun di tab Pengguna tanpa membuka alat basis data. Server mendengarkan port 5678 secara bawaan; FlyEnv bahkan dapat mengenali instans n8n yang dimulai di luar aplikasi melalui endpoint kesehatan.

![Ikhtisar modul n8n FlyEnv dengan kontrol layanan](https://oss.macphpstudy.com/image/features/n8n-1.webp)

## Manajemen versi

Berbeda dari modul yang menyediakan unduhan binari, tab **n8n → Manajer Versi** bekerja melalui registri paket sehingga instalasi [Node.js](/id/features/nodejs) dengan npm yang berfungsi merupakan prasyarat.

- **Daftar versi dari registri:** FlyEnv mengambil 20 rilis n8n stabil terakhir langsung dari `registry.npmjs.org`, sehingga versi yang ditawarkan selalu mengikuti rilis upstream.
- **Pemasangan di terminal tertanam:** pemasangan menjalankan `npm install -g n8n@<version>` di terminal bawaan FlyEnv; Anda dapat melihat keluaran npm sebenarnya, bukan sekadar bilah kemajuan.
- **Deteksi pemasangan luas:** FlyEnv mengenali n8n yang dipasang alat lain—memindai lokasi npm-global umum (`/usr/local/bin`, `/opt/homebrew/bin`, `~/.nvm`, `~/.volta`, dan `%APPDATA%\npm` di Windows) serta `PATH` Anda.

![Manajer Versi n8n yang mencantumkan rilis dari registri npm](https://oss.macphpstudy.com/image/features/n8n-2.webp)

## Layanan dan konfigurasi

Memulai layanan menjalankan `n8n start` dengan setiap variabel lingkungan yang dibaca dari berkas `n8n.env` milik FlyEnv, sehingga perilaku runtime dapat direproduksi sepenuhnya dari berkas yang Anda kendalikan.

- **Formulir visual untuk kunci umum:** sesuaikan `N8N_PORT`, `N8N_HOST`, `N8N_PROTOCOL`, `N8N_PATH`, pilih `DB_TYPE`, atur `N8N_USER_FOLDER` dan `N8N_ENCRYPTION_KEY`, tentukan `WEBHOOK_URL`, atur level/output log, pilih `EXECUTIONS_PROCESS`/`EXECUTIONS_MODE`, dan aktifkan/nonaktifkan `N8N_METRICS` tanpa mengedit berkas manual.
- **Editor mentah:** tampilan sumber lengkap `n8n.env` mencakup variabel apa pun yang tidak tersedia di formulir.
- **Penyiapan pemilik otomatis:** jika `N8N_OWNER_EMAIL` dan `N8N_OWNER_PASSWORD` diatur serta basis data belum ada, FlyEnv menyelesaikan pendaftaran pemilik awal setelah server dimulai.
- **Opsi reset pemilik:** tindakan di zona bahaya menghapus `database.sqlite` saat Anda sengaja ingin memulai ulang.
- **Siklus hidup terkelola:** sakelar di bilah sisi dan baki sistem memulai/menghentikan server; status berjalan dikonfirmasi melalui endpoint `/healthz`. Di Windows, FlyEnv menghentikan proses berdasarkan berkas pid, listener port, dan kecocokan perintah.

![Editor visual variabel lingkungan n8n.env](https://oss.macphpstudy.com/image/features/n8n-3.webp)

## Manajemen pengguna

Tab **Pengguna** berkomunikasi langsung dengan `database.sqlite` n8n, sehingga administrasi akun tetap berfungsi meski server berhenti.

- **Temukan data:** pilih sendiri direktori data n8n atau biarkan FlyEnv memindai lokasi kandidat tempat basis data SQLite disimpan.
- **Kontrol akun lengkap:** daftar, buat, dan hapus pengguna; ubah peran; nonaktifkan akun; serta setel ulang kata sandi termasuk kata sandi pemilik.
- **Hash kata sandi yang benar:** kata sandi ditulis dengan bcrypt seperti penyimpanan n8n, sehingga akun yang diperbaiki saat offline akan berfungsi saat server berikutnya dimulai.

![Tab Pengguna n8n yang mencantumkan akun dari basis data SQLite](https://oss.macphpstudy.com/image/features/n8n-4.webp)

## Dasbor

Saat layanan berjalan, tombol dasbor di tab Layanan membuka editor n8n di browser pada alamat yang dibentuk dari konfigurasi—protokol, host, port, dan path semuanya dibaca dari `n8n.env`, sehingga `N8N_PATH` khusus atau port nonbawaan tercermin otomatis. Dari sana Anda dapat membuat alur kerja untuk stack lokal; node SMTP dapat diarahkan ke [Mailpit](/id/features/mailpit) agar alur notifikasi tidak mengirim email sungguhan selama pengujian. [Panduan alur AI lokal](/id/guide/build-local-ai-workflow-by-n8n) menunjukkan n8n bekerja dengan model dari [modul Ollama](/id/features/ollama).

![Dasbor editor n8n yang dibuka dari FlyEnv](https://oss.macphpstudy.com/image/features/n8n-5.webp)

## Log

Setiap versi terpasang memiliki log mulai sendiri—`n8n-<version>-start-out.log` dan `n8n-<version>-start-error.log`—yang dapat dilihat dari tab Log di FlyEnv. Ketika versi menolak berjalan atau pemeriksaan kesehatan tidak pernah lulus, periksa kedua berkas ini terlebih dahulu.

<FeatureRelatedLinks locale="id" slug="n8n" />

## Catatan kompatibilitas

FlyEnv mengelola proses n8n lokal, berkas lingkungan, dan basis data pengguna; n8n sendiri tidak dibundel. Pemasangan atau pembaruan versi memerlukan Node.js dan npm di komputer serta akses ke registri npm publik. Perilaku alur kerja setiap rilis mengikuti persyaratan n8n. FlyEnv juga tidak mengendalikan instans n8n yang tidak dimulainya: server eksternal dideteksi melalui endpoint kesehatan dan ditampilkan sebagai berjalan, tetapi tindakan siklus hidup hanya berlaku untuk instalasi yang dikelola FlyEnv. Lihat [halaman Unduhan](/id/download) untuk komponen yang tersedia di platform Anda.
