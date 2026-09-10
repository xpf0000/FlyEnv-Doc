---
layout: doc
titleTemplate: false
title: 'Zig di FlyEnv: panduan pengembangan lokal'
description: 'Pasang, konfigurasikan, dan kelola Zig di FlyEnv untuk pengembangan lokal.'
head:
  - - meta
    - name: description
      content: 'Pasang, konfigurasikan, dan kelola Zig di FlyEnv untuk pengembangan lokal.'
  - - meta
    - property: og:title
      content: 'Zig di FlyEnv: panduan pengembangan lokal'
  - - meta
    - property: og:description
      content: 'Pasang, konfigurasikan, dan kelola Zig di FlyEnv untuk pengembangan lokal.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/id/features/zig
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/id/features/zig
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Pengembangan Zig Lokal dengan FlyEnv

Zig adalah bahasa pemrograman sistem dan toolchain serbaguna dengan manajemen memori manual serta kompilasi silang bawaan. Bahasa ini digunakan untuk komponen sistem, target tersemat, dan perkakas yang peka terhadap performa, yakni area yang juga ditempati [Rust](/id/features/rust). Modul Zig FlyEnv mengatur toolchain Zig lokal di satu tempat: pasang beberapa versi berdampingan, pilih versi yang dipakai perintah terminal `zig`, lalu ikat setiap proyek ke versi kompilernya sendiri. Tab Proyek, Layanan, dan Manajer Versi berfokus pada pemasangan versi, pengelolaan PATH, serta toolchain proyek.

![Ikhtisar modul Zig di FlyEnv](https://oss.macphpstudy.com/image/features/zig-1.webp)

## Manajemen versi Zig

Pasang versi Zig berdampingan dari **Zig → Manajer Versi** dan simpan semuanya agar siap digunakan. FlyEnv mendeteksi setiap pemasangan dengan menjalankan `zig version`, sehingga daftar selalu mencerminkan toolchain yang benar-benar berfungsi.

- **Build Static di semua platform:** pilih dari daftar online build Zig untuk macOS, Linux, dan Windows; build diekstrak ke direktori `zig/<version>` milik FlyEnv. Di macOS, FlyEnv menghapus atribut karantina setelah ekstraksi agar biner berjalan tanpa peringatan Gatekeeper.
- **Manajer paket macOS:** pasang melalui Homebrew (formula `zig` dan formula berversi `zig@<version>`) atau MacPorts selain sumber Static.
- **Direktori kustom:** arahkan FlyEnv ke direktori yang memuat build Zig sendiri agar muncul di daftar di samping versi terkelola.

![Manajer Versi Zig dengan sumber Static, Homebrew, dan MacPorts](https://oss.macphpstudy.com/image/features/zig-2.webp)

## Pengalihan versi baris perintah

Tab **Layanan** mengelola versi dan PATH, bukan proses: Zig adalah toolchain kompiler dan FlyEnv tidak menjalankan daemon Zig. Di balik namanya, tab ini berupa tabel versi terpasang yang sederhana.

- **Pengalihan versi terminal:** tentukan versi terpasang yang dipakai perintah terminal `zig`. FlyEnv mengubah `PATH` dengan menambah atau menghapus direktori versi, lalu menandai apakah entri PATH saat ini dibuat FlyEnv atau alat lain. [Panduan lingkungan PATH sistem](/id/guide/setup-system-path-environment) menjelaskan detailnya.
- **Alias dan catatan per versi:** alias singkat serta catatan opsional untuk tiap pemasangan menjaga build yang serupa tetap mudah dibedakan.
- **Pemeliharaan:** tabel menampilkan jalur pemasangan; menghapus versi yang tidak lagi diperlukan cukup dilakukan sekali klik.

## Toolchain Zig tingkat proyek

Dalam **Zig → Proyek**, daftarkan setiap folder proyek dan ikat ke versi Zig tertentu, bukan bergantung pada versi mana pun yang kebetulan berada di PATH.

- **Toolchain per proyek:** pilihan versi ditulis ke berkas `.flyenv` dalam direktori proyek; terminal dan editor yang dibuka FlyEnv otomatis memakai Zig yang benar. Lihat [panduan lingkungan runtime tingkat proyek](/id/guide/project-level-runtime-environment) dan [fitur Runtime per Proyek](/id/features/per-project-runtimes) untuk mekanismenya.
- **Jalankan sebagai layanan:** proyek dapat dijalankan langsung dari FlyEnv memakai perintah mulai kustom, port TCP yang ditampilkan sebagai tautan `http://127.0.0.1:<port>`, serta variabel lingkungan dari kolom langsung atau berkas. Sakelar bilah sisi memulai atau menghentikan semua proyek Zig yang diaktifkan sebagai layanan.

![Daftar Proyek Zig dengan pengikatan versi Zig per proyek](https://oss.macphpstudy.com/image/features/zig-3.webp)

<FeatureRelatedLinks locale="id" slug="zig" />

## Catatan kompatibilitas

FlyEnv mengelola pemasangan versi Zig, pengalihan PATH, dan toolchain proyek; FlyEnv tidak menyertakan sistem build atau perkakas paket selain yang disediakan setiap build Zig. Sumber pemasangan bergantung pada platform—Homebrew dan MacPorts hanya tersedia di macOS, sementara Windows menggunakan daftar Static online—jadi gunakan [halaman Unduhan](/id/download) serta catatan rilis terbaru sebagai acuan paket yang didukung.
