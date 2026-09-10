---
layout: doc
titleTemplate: false
title: 'Basis Data Vektor Qdrant Lokal dengan Dasbor | FlyEnv'
description: 'Jalankan versi Qdrant dengan konfigurasi terkelola dan dasbor web bawaan untuk pencarian vektor lokal.'
head:
  - - meta
    - name: description
      content: 'Jalankan versi Qdrant dengan konfigurasi terkelola dan dasbor web bawaan untuk pencarian vektor lokal.'
  - - meta
    - property: og:title
      content: 'Basis Data Vektor Qdrant Lokal dengan Dasbor | FlyEnv'
  - - meta
    - property: og:description
      content: 'Jalankan versi Qdrant dengan konfigurasi terkelola dan dasbor web bawaan untuk pencarian vektor lokal.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/id/features/qdrant
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/id/features/qdrant
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Pengembangan Qdrant Lokal dengan FlyEnv

Qdrant adalah basis data vektor sumber terbuka yang menyimpan vektor embedding dan menemukan vektor paling mirip dengan cepat. Qdrant lazim menjadi fondasi pencarian semantik, rekomendasi, dan aplikasi retrieval-augmented generation (RAG), sering dipasangkan dengan pelaksana model lokal seperti [Ollama](/id/features/ollama); [panduan agen AI lokal luring](/id/guide/build-local-offline-ai-agent) memperlihatkan tumpukan ini dari awal hingga akhir. Modul Qdrant FlyEnv menjalankannya sebagai layanan lokal terkelola: pasang versi dari daftar daring pilihan, mulai dan hentikan dari bilah sisi, lalu sunting konfigurasi YAML setiap versi pada editor bawaan. Setiap instans memperoleh konfigurasi yang dibuat otomatis, log per versi, dan dasbor web Qdrant di port 6333 tanpa penyiapan manual.

![Ringkasan modul Qdrant FlyEnv](https://oss.macphpstudy.com/image/features/qdrant-1.webp)

## Manajemen versi Qdrant

Pasang versi Qdrant secara berdampingan dari **Qdrant → Manajer Versi** dan pertahankan semuanya tetap tersedia.

- **Daftar daring Statis:** Qdrant hanya didistribusikan lewat sumber Statis FlyEnv, berupa daftar versi unduhan (arsip zip atau tar.gz) di macOS, Linux, dan Windows. Homebrew serta MacPorts tidak ditawarkan untuk modul ini.
- **Direktori kustom:** arahkan FlyEnv ke direktori berisi biner Qdrant Anda sendiri agar tampil di samping versi terkelola.
- **Satu versi berjalan:** beberapa versi dapat tetap terpasang, tetapi hanya satu instans Qdrant berjalan dalam satu waktu; memulai sebuah versi menghentikan versi yang sebelumnya aktif.

![Manajer Versi Qdrant dengan daftar versi daring Statis](https://oss.macphpstudy.com/image/features/qdrant-2.webp)

## Layanan dan konfigurasi

Tab **Layanan** adalah tabel instans berjalan: mulai atau hentikan versi, pilih versi aktif, dan buka direktori pemasangannya. FlyEnv meluncurkan biner `qdrant` mandiri sebagai proses terkelola sehingga proses mulai dan henti seragam di semua platform.

Setiap versi terpasang memiliki konfigurasi sendiri. Pada penggunaan pertama, FlyEnv membuat `config/config.yaml` dari templat dan menaruhnya di samping biner versi tersebut. Karena berkas berada di samping biner, perubahan YAML berlaku per versi dan tidak memengaruhi versi lain. Tab **Berkas Konfigurasi** membuka berkas tersebut dalam editor YAML mentah; templat menetapkan port REST serta web ke 6333 secara bawaan.

![Konfigurasi Qdrant](https://oss.macphpstudy.com/image/features/qdrant-3.webp)

## Log

Qdrant menulis dua berkas log per versi terpasang, keduanya dapat dilihat tanpa meninggalkan FlyEnv:

- **Tab Log:** keluaran mulai standar versi, `qdrant-<version>-start-out.log`.
- **Tab Log Kesalahan:** keluaran kesalahan versi, `qdrant-<version>-start-error.log`.

Pemisahan keluaran dan kesalahan per versi memudahkan Anda melihat dengan tepat pesan yang ditulis build Qdrant tertentu saat mulai atau melayani permintaan.

![Log Qdrant](https://oss.macphpstudy.com/image/features/qdrant-4.webp)

## Dasbor web

Ketika versi Qdrant berjalan, tab Layanan menampilkan tombol dasbor yang membuka `http://127.0.0.1:6333/dashboard` di peramban.

FlyEnv menyiapkannya otomatis: saat mulai atau pemasangan, FlyEnv mengunduh qdrant-web-ui resmi dari GitHub dan membuat Qdrant menyajikannya melalui pengaturan `QDRANT__SERVICE__STATIC_CONTENT_DIR`. Dasbor langsung bekerja pada instans port 6333 tanpa server web terpisah atau unduhan aset manual.

![Dasbor web Qdrant dibuka dari FlyEnv](https://oss.macphpstudy.com/image/features/qdrant-5.webp)

<FeatureRelatedLinks locale="id" slug="qdrant" />

## Catatan kompatibilitas

FlyEnv mengelola pemasangan versi Qdrant, siklus hidup layanan, konfigurasi dan log per versi, serta dasbor bawaan; koleksi, snapshot, dan kunci API tetap dikelola Qdrant sendiri. Pengguna PostgreSQL dapat memakai pgvector untuk pencarian vektor dalam basis data relasional; lihat [modul PostgreSQL](/id/features/postgresql). Tombol dasbor selalu memakai port bawaan 6333, jadi pertahankan port itu dalam konfigurasi bila Anda mengandalkannya. Gunakan [halaman Unduhan](/id/download), catatan rilis terbaru, dan [demo](/id/demos) sebagai rujukan paket serta perilaku modul.
