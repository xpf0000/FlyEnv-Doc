---
layout: doc
titleTemplate: false
title: 'Manajer Versi Deno untuk Pengembangan Lokal | FlyEnv'
description: 'Pasang dan ganti versi Deno, lalu kaitkan runtime ke setiap proyek dalam FlyEnv.'
head:
  - - meta
    - name: description
      content: 'Pasang dan ganti versi Deno, lalu kaitkan runtime ke setiap proyek dalam FlyEnv.'
  - - meta
    - property: og:title
      content: 'Manajer Versi Deno untuk Pengembangan Lokal | FlyEnv'
  - - meta
    - property: og:description
      content: 'Pasang dan ganti versi Deno, lalu kaitkan runtime ke setiap proyek dalam FlyEnv.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/id/features/deno
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/id/features/deno
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Pengembangan Deno Lokal dengan FlyEnv

Deno adalah runtime JavaScript, TypeScript, dan WebAssembly modern yang memiliki keamanan bawaan, TypeScript langsung, serta alat seperti formatter dan test runner. FlyEnv menyatukan pengembangan Deno lokal: pasang beberapa versi berdampingan, tentukan versi untuk perintah `deno` di terminal, dan kaitkan proyek dengan runtime pilihannya. Modul ini memiliki tab Proyek Deno, Layanan, dan Manajer Versi.

![Ringkasan modul Deno FlyEnv](https://oss.macphpstudy.com/image/features/deno-1.webp)

## Manajemen versi Deno

Pasang versi Deno secara berdampingan dari **Deno → Manajer Versi** dan beralihlah kapan saja.

- **Build Statis:** daftar daring paket Deno tersedia di semua platform; FlyEnv mengunduh tiap versi ke direktori aplikasinya sendiri (`deno/<version>`) dan otomatis menghapus atribut karantina macOS.
- **Homebrew (macOS dan Linux):** pasang formula `deno`. Homebrew hanya menerbitkan formula tanpa versi ini, sehingga tidak ada varian berversi `deno@x.y` yang dapat dipilih.
- **Direktori kustom:** arahkan FlyEnv ke direktori mana pun yang berisi build Deno Anda; FlyEnv mendeteksi versi dengan menjalankan `deno --version` dan menampilkan binernya di samping versi terkelola.

![Manajer Versi Deno dengan sumber pemasangan Statis dan Homebrew](https://oss.macphpstudy.com/image/features/deno-2.webp)

## Pengalihan versi baris perintah

Tab **Layanan** tidak menjalankan daemon; tab ini adalah tabel versi terpasang untuk kontrol versi dan PATH.

- **Pengalihan terminal:** pilih versi yang harus digunakan perintah `deno`. FlyEnv menambah atau menghapus direktori bin versi pada `PATH` dan menandai asal entri saat ini. Lihat [panduan lingkungan PATH sistem](/id/guide/setup-system-path-environment).
- **Alias dan catatan per versi:** setiap pemasangan dapat diberi alias singkat dan catatan agar build serupa tetap mudah dibedakan dalam daftar.
- **Pemeliharaan:** tabel menampilkan jalur pemasangan setiap versi dan memungkinkan Anda menghapus versi yang tidak lagi diperlukan.

## Runtime Deno tingkat proyek

Di **Deno → Proyek**, daftarkan setiap folder proyek dan ikat ke versi Deno tertentu, atau gunakan versi sistem. [Panduan runtime tingkat proyek](/id/guide/project-level-runtime-environment) dan fitur [Runtime per Proyek](/id/features/per-project-runtimes) menjelaskan alurnya.

- **Runtime per proyek:** pilihan disimpan di `.flyenv` dalam direktori proyek, sehingga terminal dan editor dari FlyEnv memuat runtime yang benar secara otomatis.
- **Jalankan sebagai layanan:** proyek dapat memakai perintah mulai atau berkas jalan kustom, port TCP, variabel lingkungan, dan opsi sudo. Sakelar bilah sisi mengelola seluruh proyek Deno yang diaktifkan sebagai layanan.
- **Buka di terminal:** buka proyek di terminal sistem dengan lingkungan proyek telah diterapkan.

![Daftar Proyek Deno dengan pengaitan versi Deno per proyek](https://oss.macphpstudy.com/image/features/deno-3.webp)

<FeatureRelatedLinks locale="id" slug="deno" />

## Catatan kompatibilitas

FlyEnv mengelola pemasangan Deno, pengalihan PATH, dan runtime proyek; kemampuan tiap runtime berasal dari build Deno yang dipasang. Sumber pemasangan bergantung pada platform dan ketersediaan Homebrew. Gunakan [halaman Unduhan](/id/download) serta catatan rilis terbaru sebagai rujukan paket yang didukung.
