---
layout: doc
titleTemplate: false
title: 'FrankenPHP di FlyEnv: panduan pengembangan lokal'
description: 'Pasang, konfigurasikan, dan kelola FrankenPHP di FlyEnv untuk pengembangan lokal.'
head:
  - - meta
    - name: description
      content: 'Pasang, konfigurasikan, dan kelola FrankenPHP di FlyEnv untuk pengembangan lokal.'
  - - meta
    - property: og:title
      content: 'FrankenPHP di FlyEnv: panduan pengembangan lokal'
  - - meta
    - property: og:description
      content: 'Pasang, konfigurasikan, dan kelola FrankenPHP di FlyEnv untuk pengembangan lokal.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/id/features/frankenphp
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/id/features/frankenphp
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# FrankenPHP di FlyEnv

FrankenPHP adalah server aplikasi PHP modern yang dibangun di atas [Caddy](/id/features/caddy). Server ini menyematkan runtime PHP lengkap dan melayani aplikasi PHP secara langsung, tanpa proses PHP-FPM terpisah. FlyEnv mengelolanya dalam modul khusus: pasang beberapa versi FrankenPHP, mulai dan hentikan sebagai layanan, edit Caddyfile, dan baca log tanpa meninggalkan aplikasi. Situs Anda memperoleh port sendiri serta HTTPS otomatis tanpa perlu mengonfigurasi PHP-FPM.

![Ikhtisar modul FrankenPHP FlyEnv](https://oss.macphpstudy.com/image/features/frankenphp-1.webp)

## Manajemen versi FrankenPHP

Pasang dan simpan beberapa versi FrankenPHP secara berdampingan dari tab **Manajer Versi**.

- **Sumber pemasangan:** build statis pada macOS, Linux, dan Windows, ditambah Homebrew pada macOS dan Linux. FlyEnv otomatis menambahkan tap `dunglas/frankenphp` agar formulanya tersedia. MacPorts dan SDKMAN tidak digunakan untuk FrankenPHP.
- **Pemasangan statis pada macOS dan Linux:** FlyEnv mengunduh satu biner FrankenPHP, menyalinnya ke lokasi tujuan, menjadikannya dapat dieksekusi, dan menghapus atribut karantina macOS agar dapat dijalankan.
- **Pemasangan statis pada Windows:** FrankenPHP didistribusikan sebagai arsip dengan runtime PHP lengkap. Saat pemasangan, FlyEnv otomatis membuat `php.ini` dari templat dan hanya mengaktifkan ekstensi yang benar-benar tersedia di direktori `ext/` bawaan.
- **Kolom versi PHP dan Caddy:** tabel versi mengurai `frankenphp --version` dan menampilkan versi PHP tersemat serta Caddy untuk setiap build, sehingga runtime setiap versi FrankenPHP selalu jelas.
- **Tindakan per versi:** buka direktori versi di pengelola berkas; pada Windows, edit juga `php.ini` bawaan melalui dialog konfigurasi yang sama seperti [modul PHP](/id/features/php).

![Manajer Versi FrankenPHP dengan kolom versi PHP dan Caddy](https://oss.macphpstudy.com/image/features/frankenphp-2.webp)

## Manajemen layanan

Tab **Layanan** mencantumkan setiap versi FrankenPHP yang terpasang dengan kontrol mulai, hentikan, dan mulai ulang, serta informasi versi PHP dan Caddy di atas.

- FlyEnv meluncurkan versi dengan `frankenphp run --config <baseDir>/frankenphp/Caddyfile --pidfile …`, sehingga proses dilacak melalui pidfile dan dapat dihentikan dengan bersih.
- Di Linux, layanan dimulai melalui pembantu root FlyEnv bila membutuhkan hak istimewa yang lebih tinggi.
- FrankenPHP melayani situs PHP secara langsung melalui mesin Caddy tersemat; tidak ada proses PHP-FPM yang perlu dipasang, dikonfigurasi, atau dipertahankan berjalan.

![Tab Layanan FrankenPHP dengan versi berjalan](https://oss.macphpstudy.com/image/features/frankenphp-3.webp)

## Konfigurasi

Tab **Berkas Konfigurasi** mengedit Caddyfile global yang digunakan FrankenPHP.

- **Editor mentah:** Caddyfile diedit sebagai teks biasa; FlyEnv tidak membungkusnya dalam formulir.
- **Berbasis templat:** berkas dibuat dari templat (tersedia dalam bahasa Inggris dan Mandarin) serta mengimpor vhost tiap situs dari `vhost/frankenphp/*`, sehingga konfigurasi situs terpisah dari pengaturan global.
- **`php.ini` Windows:** karena build FrankenPHP Windows menyertakan runtime PHP sendiri, `php.ini` suatu versi dapat dibuka dan disesuaikan dari menu tindakan versi menggunakan dialog konfigurasi modul PHP.

![Penampil log FrankenPHP](https://oss.macphpstudy.com/image/features/frankenphp-4.webp)

## Integrasi situs

Situs PHP yang dibuat melalui **Host** otomatis memperoleh vhost FrankenPHP dengan direktif `php_server`, sehingga berjalan sebagai aplikasi FrankenPHP sungguhan, bukan sekadar penyajian berkas statis. [Solusi Laravel](/id/solutions/laravel) memperlihatkan tumpukan framework lengkap dengan penyiapan ini.

- **Port per situs:** setiap situs memperoleh port FrankenPHP sendiri (`port.frankenphp`), sehingga situs yang sama dapat dilayani paralel dengan [Nginx](/id/features/nginx), Apache, atau Caddy. Situs yang dibuat sebelum perilaku ini tersedia akan memakai port Caddy bersama.
- **HTTPS otomatis:** vhost menyertakan `tls internal`, yang memberi setiap situs sertifikat tepercaya secara lokal tanpa penyiapan tambahan. Domain serta sertifikat situs dibahas dalam [Situs Lokal, Domain Kustom & HTTPS](/id/features/local-sites-https).
- **Proxy balik per situs:** situs juga dapat meneruskan permintaan ke layanan lokal lain melalui vhost FrankenPHP.
- **Vhost yang pulih sendiri:** ketika versi FrankenPHP dimulai, FlyEnv membuat ulang vhost situs yang hilang sebelum meluncurkan proses.

Untuk pembahasan lebih luas kapan memilih FrankenPHP dibanding PHP-FPM, RoadRunner, atau Swoole, lihat [panduan deployment PHP](/id/guide/deploy-php-projects-without-docker).

## Log

Tab **Log** mengikuti `frankenphp.log` dan juga mencantumkan setiap berkas `frankenphp-*.log` di direktori dasar FrankenPHP, sehingga log khusus versi maupun situs dapat dibaca di satu tempat.

![Penampil log FrankenPHP](https://oss.macphpstudy.com/image/features/frankenphp-5.webp)

<FeatureRelatedLinks locale="id" slug="frankenphp" />

## Catatan kompatibilitas

FlyEnv mengelola runtime FrankenPHP, konfigurasi, dan integrasi situsnya, tetapi tidak menjamin setiap rilis FrankenPHP atau ekstensi PHP bawaan tersedia pada setiap sistem operasi. MacPorts dan SDKMAN bukan sumber pemasangan modul ini, dan FrankenPHP tidak menyediakan panel administrasi. Memastikan kebutuhan framework serta ekstensi tersedia pada build terpasang tetap menjadi tanggung jawab proyek. Gunakan [halaman Unduhan](/id/download) dan catatan rilis terbaru sebagai rujukan paket yang didukung.
