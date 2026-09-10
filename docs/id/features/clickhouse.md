---
layout: doc
titleTemplate: false
title: 'Server ClickHouse Lokal dengan CH-UI | FlyEnv'
description: 'Jalankan ClickHouse di macOS dan Linux dengan config.xml serta users.xml terkelola dan klien CH-UI sekali klik.'
head:
  - - meta
    - name: description
      content: 'Jalankan ClickHouse di macOS dan Linux dengan config.xml serta users.xml terkelola dan klien CH-UI sekali klik.'
  - - meta
    - property: og:title
      content: 'Server ClickHouse Lokal dengan CH-UI | FlyEnv'
  - - meta
    - property: og:description
      content: 'Jalankan ClickHouse di macOS dan Linux dengan config.xml serta users.xml terkelola dan klien CH-UI sekali klik.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/id/features/clickhouse
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/id/features/clickhouse
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Pengembangan ClickHouse Lokal dengan FlyEnv

ClickHouse adalah basis data kolumnar sumber terbuka untuk kueri analitis cepat pada kumpulan data sangat besar, melengkapi basis data berorientasi baris seperti [PostgreSQL](/id/features/postgresql). Teknologi ini lazim dipakai untuk analisis log, metrik, dan data peristiwa ketika agregasi atas miliaran baris harus selesai dalam hitungan detik; alat BI seperti [Metabase](/id/solutions/metabase) dapat menggunakannya. FlyEnv menjalankan ClickHouse sebagai layanan lokal terkelola di macOS dan Linux: memasang versi dari daftar daring, memulai server dengan konfigurasi yang dibuat otomatis, serta menyediakan berkas konfigurasi yang dapat disunting, penampil log, dan klien web CH-UI sekali klik. Modul ClickHouse hanya tersedia di macOS dan Linux.

![Ringkasan modul ClickHouse FlyEnv](https://oss.macphpstudy.com/image/features/clickhouse-1.webp)

## Manajemen versi ClickHouse

Pasang beberapa versi ClickHouse dari **ClickHouse → Manajer Versi** dan beralihlah di antaranya kapan saja.

- **Hanya daftar daring statis:** versi berasal dari daftar unduhan daring FlyEnv; sumber Homebrew dan MacPorts tidak tersedia untuk ClickHouse. Di macOS, unduhan berupa biner mandiri; di Linux, biner diekstrak dari arsip `clickhouse-common-static`.
- **Versi kustom:** arahkan FlyEnv ke direktori mana pun yang berisi biner `clickhouse` milik Anda; biner tersebut akan tampil bersama versi terkelola.
- **Satu versi berjalan:** mulai, hentikan, atau mulai ulang versi dari tab Layanan atau sakelar bilah sisi (juga tersedia di baki sistem); hanya satu versi ClickHouse dapat berjalan dalam satu waktu.

![Manajer Versi ClickHouse dengan daftar versi daring](https://oss.macphpstudy.com/image/features/clickhouse-2.webp)

## Layanan dan konfigurasi

ClickHouse didistribusikan sebagai biner multiguna, dan FlyEnv memulainya sebagai `clickhouse server` dengan konfigurasi yang dikelola untuk Anda.

- **Konfigurasi otomatis:** saat pertama dijalankan, FlyEnv membuat `config.xml` dan `users.xml` di direktori ClickHouse-nya, dengan port HTTP 8123, port TCP native 9000, serta alamat dengar khusus loopback 127.0.0.1.
- **Dua berkas konfigurasi dalam satu editor:** tab Berkas Konfigurasi beralih antara `config.xml` dan `users.xml`; masing-masing dibuka dalam editor sumber XML lengkap sehingga port, jalur, pengguna, dan profil dapat diubah tanpa mencari berkas. [Panduan pengguna dan kata sandi basis data](/id/guide/database-user-password) menjelaskan akun bawaan di berbagai modul basis data FlyEnv.

![Menyunting config.xml ClickHouse di editor sumber](https://oss.macphpstudy.com/image/features/clickhouse-3.webp)

## Log

Tab Log beralih di antara berkas log yang ditangkap FlyEnv untuk layanan ClickHouse: log server utama, log kesalahan server, log stdout dan stderr saat mulai, serta log mulai klien CH-UI. Tampilan diperbarui otomatis ketika berkas berubah; bilah alat dapat membuka berkas di pengelola berkas, memuat ulang sesuai permintaan, atau menghapusnya. Dengan demikian, kegagalan mulai atau kueri lambat mudah ditelusuri.

![Beralih antara log server dan log mulai ClickHouse](https://oss.macphpstudy.com/image/features/clickhouse-4.webp)

## CH-UI

CH-UI adalah klien ClickHouse berbasis web, dan FlyEnv menyiapkannya untuk Anda.

- **Penyiapan sekali klik:** tombol CH-UI mengunduh biner CH-UI dari rilis GitHub-nya dan menjalankannya pada port 3488.
- **Koneksi siap pakai:** FlyEnv menambahkan koneksi bernama "FlyEnv ClickHouse" yang menunjuk ke instans berjalan, lalu membuka CH-UI di peramban; Anda tidak perlu mengisi host atau port secara manual.

<FeatureRelatedLinks locale="id" slug="clickhouse" />

## Catatan kompatibilitas

Modul ClickHouse hanya tersedia di macOS dan Linux; modul ini tidak muncul di Windows. FlyEnv mengelola runtime lokal dan konfigurasi yang dibuatnya, sedangkan kumpulan fitur setiap build ClickHouse berasal dari rilis upstream. Periksa [halaman Unduhan](/id/download) untuk rilis FlyEnv terbaru dan [Demo](/id/demos) untuk melihat modul layanan FlyEnv dalam praktik.
