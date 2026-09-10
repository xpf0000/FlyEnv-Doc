---
layout: doc
titleTemplate: false
title: 'Server Typesense Lokal untuk macOS dan Linux | FlyEnv'
description: 'Jalankan versi Typesense di macOS dan Linux dengan berkas konfigurasi serta log yang dikelola.'
head:
  - - meta
    - name: description
      content: 'Jalankan versi Typesense di macOS dan Linux dengan berkas konfigurasi serta log yang dikelola.'
  - - meta
    - property: og:title
      content: 'Server Typesense Lokal untuk macOS dan Linux | FlyEnv'
  - - meta
    - property: og:description
      content: 'Jalankan versi Typesense di macOS dan Linux dengan berkas konfigurasi serta log yang dikelola.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/id/features/typesense
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/id/features/typesense
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Typesense di FlyEnv

Typesense adalah mesin pencari sumber terbuka yang berfokus pada pencarian cepat dan toleran terhadap salah ketik melalui API sederhana. Mesin ini umum digunakan untuk pencarian situs dan pengalaman pencarian instan saat mengetik—alternatif yang lebih ringan bagi [Elasticsearch](/id/features/elasticsearch), dalam keluarga yang sama dengan [Meilisearch](/id/features/meilisearch) dan [ZincSearch](/id/features/zincsearch). FlyEnv menjalankannya sebagai server pencarian lokal terkelola di macOS dan Linux: pasang versi dari daftar statis atau Homebrew, mulai `typesense-server` dengan berkas konfigurasi yang dikelola FlyEnv, dan pantau lognya tanpa meninggalkan aplikasi. Modul Typesense hanya tersedia di macOS dan Linux.

![FlyEnv Typesense ikhtisar modul](https://oss.macphpstudy.com/image/features/typesense-1.webp)

## Manajemen versi

Pasang dan simpan beberapa versi Typesense berdampingan dari **Typesense → Manajer Versi**, lalu pilih versi yang dijalankan layanan.

- **Sumber pemasangan:** daftar daring statis, ditambah Homebrew dengan formula `typesense/tap/typesense-server` serta variannya yang berversi `@x.y`.
- **Versi khusus:** arahkan FlyEnv ke direktori mana pun yang berisi binari `typesense-server` Anda; binari itu dicantumkan di samping versi terkelola.
- **Mulai dan berhenti:** kendalikan versi yang berjalan dari tab Layanan atau sakelar bilah sisi (juga tersedia di baki sistem).

![Typesense manajer versi dengan statis dan Homebrew sumber](https://oss.macphpstudy.com/image/features/typesense-2.webp)

## Layanan dan konfigurasi

FlyEnv memulai binari `typesense-server` asli dengan `--config=<BaseDir>/typesense/typesense-server.ini --log-dir=<BaseDir>/typesense/log`, sehingga berkas konfigurasi menjadi satu-satunya sumber kebenaran layanan.

- **Konfigurasi yang dibuat otomatis:** saat pertama kali dimulai, FlyEnv menulis `typesense-server.ini` bawaan dengan `api-port = 8108`, `api-key = xyz`, direktori data di bawah folder Typesense FlyEnv sendiri, dan `enable-cors = true`, sehingga server langsung menjawab di port 8108.
- **Tab Berkas Konfigurasi:** editor sumber mentah untuk `typesense-server.ini`, dengan `typesense-server.ini.default` tersimpan di sebelahnya sebagai referensi murni. Satu konfigurasi dipakai bersama oleh semua versi Typesense yang terpasang.

![Mengedit typesense-server.ini di editor konfigurasi FlyEnv](https://oss.macphpstudy.com/image/features/typesense-3.webp)

## Log

Tab **Log** membuka berkas log server di `typesense/log/typesense.log` langsung di dalam FlyEnv. Karena FlyEnv meneruskan direktori log ke `typesense-server` saat memulai, setiap versi yang Anda jalankan menulis ke lokasi sama—tempat pertama untuk diperiksa ketika versi gagal dimulai atau permintaan pencarian bermasalah.

<FeatureRelatedLinks locale="id" slug="typesense" />

## Catatan kompatibilitas

**Modul Typesense hanya tersedia di macOS dan Linux; modul ini tidak muncul di Windows.** FlyEnv mengelola runtime lokal, berkas konfigurasi, dan direktori lognya; FlyEnv tidak menyediakan UI administrasi Typesense dan modul ini tidak memiliki integrasi proyek—arahkan klien Typesense aplikasi Anda sendiri ke port yang dikonfigurasi (bawaan 8108). Kumpulan fitur tepat setiap build berasal dari rilis Typesense upstream. Periksa [halaman Unduhan](/id/download) untuk rilis FlyEnv terkini dan lihat [Demo](/id/demos) untuk panduan penggunaan modul layanan FlyEnv.
