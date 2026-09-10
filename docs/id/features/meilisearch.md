---
layout: doc
titleTemplate: false
title: 'Meilisearch di FlyEnv: panduan pengembangan lokal'
description: 'Pasang, konfigurasikan, dan kelola Meilisearch di FlyEnv untuk pengembangan lokal.'
head:
  - - meta
    - name: description
      content: 'Pasang, konfigurasikan, dan kelola Meilisearch di FlyEnv untuk pengembangan lokal.'
  - - meta
    - property: og:title
      content: 'Meilisearch di FlyEnv: panduan pengembangan lokal'
  - - meta
    - property: og:description
      content: 'Pasang, konfigurasikan, dan kelola Meilisearch di FlyEnv untuk pengembangan lokal.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/id/features/meilisearch
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/id/features/meilisearch
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Meilisearch di FlyEnv

Meilisearch adalah mesin pencari sumber terbuka yang ringan, menyediakan pencarian teks lengkap yang cepat dan toleran terhadap salah ketik melalui REST API. Meilisearch sering dipilih untuk kotak pencarian situs atau aplikasi ketika deployment [Elasticsearch](/id/features/elasticsearch) penuh terlalu berat, bersama mesin ringan lain seperti [Typesense](/id/features/typesense) dan [ZincSearch](/id/features/zincsearch). FlyEnv menjalankannya sebagai layanan lokal terkelola: pasang versi dari Manajer Versi, jalankan biner `meilisearch` dengan `meilisearch.toml` yang dapat diedit, lalu buka dasbor pencarian bawaan dari tab Layanan. Setiap versi memiliki direktori kerja sendiri untuk datanya, dan konfigurasi tersedia melalui editor mentah serta formulir visual dengan sekitar 30 pengaturan.

![Ikhtisar modul Meilisearch FlyEnv dengan tab layanan](https://oss.macphpstudy.com/image/features/meilisearch-1.webp)

## Manajemen versi

Pasang dan simpan beberapa versi Meilisearch secara berdampingan dari **Meilisearch → Manajer Versi**, lalu pilih versi yang dijalankan layanan.

- **Sumber pemasangan per platform:** build statis dan Homebrew (`meilisearch`) tersedia di macOS dan Linux; Windows menggunakan unduhan statis `meilisearch.exe` yang disalin FlyEnv dan diverifikasi dengan `--version`.
- **Versi kustom:** tambahkan direktori yang berisi biner Meilisearch sendiri; FlyEnv memindai dan menampilkannya bersama versi terkelola.
- **Direktori kerja per versi:** tab Layanan menyediakan kolom direktori kerja yang dapat diedit untuk setiap versi, dengan nilai awal `<BaseDir>/meilisearch/<major.minor>`, sehingga data tiap versi tetap terpisah.

![Meilisearch manajer versi dengan instal sumber](https://oss.macphpstudy.com/image/features/meilisearch-2.webp)

## Layanan dan konfigurasi

FlyEnv memulai layanan dengan `meilisearch --config-file-path <BaseDir>/meilisearch/meilisearch.toml` dan menggunakan direktori kerja versi sebagai direktori proses. Templat bawaan menggunakan `http_addr = "localhost:7700"`, `db_path = "./data.ms"`, dan `env = "development"`.

Tab **Berkas Konfigurasi** mengedit `meilisearch.toml` (dengan `meilisearch.default.toml` di sampingnya sebagai referensi bawaan) melalui dua cara:

- **Formulir visual:** sekitar 30 pengaturan dipetakan ke berkas TOML, termasuk `db_path`, `env`, `http_addr`, `master_key`, opsi SSL, dump dan snapshot, `log_level`, metrik, dan lainnya; semuanya dapat diubah tanpa mengedit berkas manual.
- **Editor mentah:** beralih ke tampilan sumber lengkap untuk opsi yang tidak dicakup formulir.

![Formulir konfigurasi visual Meilisearch yang dipetakan ke meilisearch.toml](https://oss.macphpstudy.com/image/features/meilisearch-3.webp)

## Dashboard (7700)

Saat layanan berjalan, tab Layanan menampilkan tombol UI web yang membuka dasbor Meilisearch di browser pada `http://127.0.0.1:<port from meilisearch.toml>/`; port bawaannya `7700`. Dasbor ini adalah antarmuka bawaan Meilisearch untuk mencoba permintaan pencarian pada indeks lokal, sehingga Anda dapat memeriksa pengindeksan dan perilaku kueri tanpa menyiapkan aplikasi terlebih dahulu.

![Dasbor Meilisearch dibuka dari tab layanan pada port 7700](https://oss.macphpstudy.com/image/features/meilisearch-4.webp)

## Log

Tab **Log** membuka log mulai per versi langsung di FlyEnv. Log kesalahan mulai (`meilisearch-<version>-start-error.log`) adalah tempat pertama untuk memeriksa ketika versi gagal dijalankan, misalnya karena port dalam `meilisearch.toml` sudah digunakan; keluaran proses juga direkam di sana.

![Penampil log kesalahan mulai Meilisearch](https://oss.macphpstudy.com/image/features/meilisearch-5.webp)

<FeatureRelatedLinks locale="id" slug="meilisearch" />

## Catatan kompatibilitas

FlyEnv mengelola runtime Meilisearch lokal, `meilisearch.toml`, dan direktori kerja tiap versi; FlyEnv tidak menjamin semua versi Meilisearch tersedia pada setiap sistem operasi atau sumber instalasi. Sumber statis dan Homebrew tersedia di macOS dan Linux, sedangkan Windows hanya menggunakan unduhan statis. Meilisearch juga menggunakan satu `meilisearch.toml` bersama untuk semua versi terpasang, berbeda dari modul seperti [Redis](/id/features/redis) yang menyimpan berkas konfigurasi per versi utama; perubahan konfigurasi berlaku untuk versi yang sedang Anda jalankan. Gunakan daftar versi di aplikasi dan [halaman Unduhan](/id/download) sebagai acuan kebenaran, lalu lihat [demo](/id/demos) untuk contoh penggunaan modul.
