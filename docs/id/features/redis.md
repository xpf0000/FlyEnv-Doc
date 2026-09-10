---
layout: doc
titleTemplate: false
title: 'Redis di FlyEnv: panduan pengembangan lokal'
description: 'Pasang, konfigurasikan, dan kelola Redis di FlyEnv untuk pengembangan lokal.'
head:
  - - meta
    - name: description
      content: 'Pasang, konfigurasikan, dan kelola Redis di FlyEnv untuk pengembangan lokal.'
  - - meta
    - property: og:title
      content: 'Redis di FlyEnv: panduan pengembangan lokal'
  - - meta
    - property: og:description
      content: 'Pasang, konfigurasikan, dan kelola Redis di FlyEnv untuk pengembangan lokal.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/id/features/redis
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/id/features/redis
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Pengembangan Redis lokal dengan FlyEnv

Redis adalah penyimpanan data dalam memori sumber terbuka yang umum digunakan sebagai cache, penyimpanan sesi, backend antrean, atau kanal pub/sub pada aplikasi web, ketika daemon yang lebih ringan dan hanya berfungsi sebagai cache seperti [Memcached](/id/features/memcached) tidak mencukupi. FlyEnv menjadikannya layanan lokal terkelola dalam satu jendela: pasang beberapa versi, jalankan `redis-server` dengan konfigurasi per versi yang dibuat otomatis, sesuaikan pengaturan port serta memori dari formulir visual, pantau log server, dan jelajahi kunci melalui UI web Redis Commander sekali klik. Jika Anda baru menggunakan FlyEnv, [panduan memulai](/id/guide/getting-started) menunjukkan cara modul dipasang dan dimulai.

![Ikhtisar modul Redis FlyEnv](https://oss.macphpstudy.com/image/features/redis-1.webp)

## Manajemen versi

Pasang dan simpan beberapa versi Redis secara berdampingan dari **Redis → Manajer Versi**, lalu pilih versi yang dijalankan layanan.

- **Sumber pemasangan per platform:** Homebrew (`redis`, `redis@x.y`) dan MacPorts pada macOS, Homebrew pada Linux, serta daftar statis build Windows siap pakai di Windows.
- **Versi kustom:** tambahkan direktori yang berisi pemasangan Redis Anda sendiri; FlyEnv memindai biner `redis-server` dan mencantumkan build tersebut bersama versi terkelola.
- **Satu versi berjalan pada satu waktu:** memulai sebuah versi akan menghentikan versi Redis lain yang berjalan, sehingga layanan selalu menyajikan satu build yang diketahui.

![Manajer Versi Redis dengan sumber pemasangan](https://oss.macphpstudy.com/image/features/redis-2.webp)

## Layanan dan konfigurasi

FlyEnv meluncurkan biner `redis-server` asli dengan berkas konfigurasi yang dibuat otomatis—`redis-server redis-<major>.conf`—dan melacak berkas pid untuk proses mulai serta hentikan yang bersih. Konfigurasi bawaan mendengarkan port 6379 dan menyimpan data setiap versi utama dalam direktori `db-<major>` masing-masing.

Setiap versi utama memiliki `redis-<major>.conf` sendiri yang dapat diedit dari tab **Berkas Konfigurasi**:

- **Formulir pengaturan umum:** sesuaikan opsi yang sering diubah—port, timeout, maxclients, databases, `requirepass`, dan `maxmemory`—dari formulir visual tanpa mengedit berkas manual.
- **Editor mentah:** beralih ke tampilan sumber lengkap untuk pengaturan yang tidak dicakup formulir, dengan `redis-<major>-default.conf` di sampingnya sebagai referensi bawaan.

![Berkas konfigurasi Redis dengan pengaturan umum](https://oss.macphpstudy.com/image/features/redis-3.webp)

## Log

Tab **Log** membuka `redis-<major>.log` milik server langsung di FlyEnv; ini tempat pertama untuk diperiksa ketika versi gagal dimulai atau berperilaku tidak semestinya. Keluaran log dari proses pembantu Redis Commander ditangkap terpisah, sehingga masalah mulai UI web tidak tercampur ke log server Redis.

## Redis Commander

Tombol **Redis Commander** muncul di bilah alat Layanan ketika Redis berjalan dan membuka UI web lengkap untuk menjelajahi kunci, mengedit nilai, serta menjalankan perintah pada server lokal.

- **Penyiapan sekali klik:** saat pertama kali dibuka, FlyEnv memasang paket `redis-commander` dengan npm dan memulainya untuk Anda, tanpa alat manual. Paket ini menggunakan versi [Node.js](/id/features/nodejs) yang dipilih di FlyEnv, sehingga [manajemen beberapa versi Node.js](/id/guide/manage-multiple-node-php-versions) juga mengendalikan runtime yang meluncurkan UI web.
- **Koneksi telah dikonfigurasi:** Redis Commander otomatis terhubung ke server yang berjalan, dengan port dan kata sandi `requirepass` dibaca dari konfigurasi Redis saat ini.
- **Aman secara bawaan:** UI berjalan pada 127.0.0.1 di balik autentikasi HTTP, dan FlyEnv membuka peramban Anda dengan tautan login otomatis sekali pakai. Redis Commander berhenti otomatis saat layanan Redis dihentikan.

Fitur ini cocok dipadukan dengan pekerjaan framework lokal, misalnya memeriksa cache dan kunci antrean proyek [Laravel](/id/solutions/laravel) ketika proyek berjalan.

![Antarmuka web Redis Commander dibuka dari FlyEnv](https://oss.macphpstudy.com/image/features/redis-4.webp)

<FeatureRelatedLinks locale="id" slug="redis" />

## Catatan kompatibilitas

FlyEnv mengelola runtime Redis lokal, berkas konfigurasi, dan direktori datanya, tetapi tidak menjamin setiap versi Redis tersedia pada setiap sistem operasi atau sumber pemasangan. Versi dalam Manajer Versi bergantung pada platform Anda—Homebrew dan MacPorts di macOS, Homebrew di Linux, build statis di Windows—serta rilis dari sumber tersebut. Berkas konfigurasi berlaku per versi utama (`redis-<major>.conf`), sehingga pengaturan seperti port, `requirepass`, dan `maxmemory` disimpan terpisah untuk Redis 7 serta Redis 8. Redis Commander memerlukan versi Node.js yang telah dipasang dan dipilih di FlyEnv sebelum pertama kali diluncurkan. Gunakan daftar versi di aplikasi dan [halaman Unduhan](/id/download) sebagai rujukan yang dapat dipasang di komputer Anda.
