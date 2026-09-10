---
layout: doc
titleTemplate: false
title: 'Manajer Versi Apache dan Server Situs Lokal | FlyEnv'
description: 'Jalankan Apache dari Homebrew, MacPorts, atau build statis, sunting konfigurasi per versi, dan sajikan situs lokal.'
head:
  - - meta
    - name: description
      content: 'Jalankan Apache dari Homebrew, MacPorts, atau build statis, sunting konfigurasi per versi, dan sajikan situs lokal.'
  - - meta
    - property: og:title
      content: 'Manajer Versi Apache dan Server Situs Lokal | FlyEnv'
  - - meta
    - property: og:description
      content: 'Jalankan Apache dari Homebrew, MacPorts, atau build statis, sunting konfigurasi per versi, dan sajikan situs lokal.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/id/features/apache
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/id/features/apache
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Apache di FlyEnv

Apache HTTP Server (`httpd`) adalah server web sumber terbuka dengan sejarah panjang yang masih umum di tumpukan LAMP klasik dan pada proyek yang memerlukan `.htaccess` atau konfigurasi berbasis modul. FlyEnv menjalankan Apache sebagai server web lokal terkelola: pasang beberapa build dari manajer paket atau daftar unduhan statis, sunting konfigurasi setiap versi langsung di tempatnya, dan sajikan situs lokal lewat berkas vhost per situs. Layanan `httpd` dimulai di latar depan di bawah kendali FlyEnv; pengaitan port, log, dan modul dibuat ulang setiap kali mulai. Jika Anda berasal dari paket bergaya XAMPP, [perbandingan FlyEnv vs XAMPP](/id/compare/xampp) menjelaskan perbedaan pendekatan terkelola ini.

![Ringkasan modul Apache FlyEnv](https://oss.macphpstudy.com/image/features/apache-1.webp)

## Manajemen versi Apache

Pasang build Apache secara berdampingan dari **Apache → Manajer Versi** dan alihkan versi yang berjalan kapan saja.

- **Sumber manajer paket:** di macOS, pasang Apache dari Homebrew (formula `httpd`) atau MacPorts; di Linux, sumber pemasangannya adalah Homebrew. FlyEnv mendeteksi pemasangan yang sudah dikelola manajer paket tersebut.
- **Build statis di Windows:** daftar pemasangan Windows mengunduh build Apache Lounge secara langsung.
- **Versi kustom:** sudah memiliki build Apache sendiri? Tambahkan direktorinya dan FlyEnv mendeteksi binernya serta menampilkannya bersama pemasangan lain.

![Manajer Versi Apache dengan sumber pemasangan](https://oss.macphpstudy.com/image/features/apache-2.webp)

## Manajemen layanan

Apache adalah layanan satu-instans di FlyEnv: banyak versi dapat dipasang, tetapi hanya satu yang berjalan pada satu waktu, sehingga penetapan port situs tetap jelas.

- **Siklus hidup per versi:** mulai, hentikan, atau mulai ulang versi Apache aktif dari tab Layanan, sakelar bilah sisi, atau baki sistem.
- **Operasi latar depan:** di macOS, FlyEnv meluncurkan `httpd` dengan berkas konfigurasi sendiri serta jalur pid dan log eksplisit; di Linux, layanan berjalan melalui pembantu root FlyEnv; di Windows, server diluncurkan memakai konfigurasi versi tersebut. Memulai versi lain saat satu versi berjalan diblokir di tab Layanan; hentikan versi aktif terlebih dahulu untuk beralih.
- **Integrasi PATH:** tabel Layanan menunjukkan jalur, status lingkungan, alias, dan catatan per versi setiap pemasangan.

## Konfigurasi

Setiap versi Apache yang dipasang mendapat berkas konfigurasi utama sendiri yang dibuat otomatis dan disimpan per versi, sehingga build tidak berbagi atau saling menimpa pengaturan.

- **Berkas konfigurasi per versi:** konfigurasi dibuat dari keluaran `httpd -V` milik versi tersebut dan disimpan bersama data Apache FlyEnv lainnya, berdasarkan biner spesifik.
- **Formulir pengaturan umum:** ubah direktif yang sering disentuh—`Timeout`, `KeepAlive`, `KeepAliveTimeout`, `MaxKeepAliveRequests`, dan `LimitRequestBody`—melalui formulir visual tanpa menyunting berkas secara manual.
- **Editor sumber lengkap:** beralih ke editor mentah untuk hal yang tidak dicakup formulir, dengan pemulihan konfigurasi bawaan sekali klik.
- **Modul otomatis aktif:** ketika konfigurasi dibuat, FlyEnv mengaktifkan paksa modul yang dibutuhkan situs lokal, termasuk headers, deflate, proxy, proxy_fcgi, ssl, rewrite, dan access_compat, serta menautkan direktori include vhost.
- **Direktif Listen ditulis ulang saat mulai:** FlyEnv mengumpulkan port Apache tiap situs dan menulis ulang direktif `Listen` di antara penanda terkelolanya saat layanan dimulai agar perubahan port tidak meninggalkan listener usang.

![Formulir pengaturan umum Apache dan editor konfigurasi](https://oss.macphpstudy.com/image/features/apache-3.webp)

## Integrasi situs

Setiap situs di modul Host yang dilayani Apache mendapat berkas vhost sendiri dengan bidang portnya sendiri (bawaan 80/443). Karena itu, Apache dapat menyajikan situs yang sama di samping Nginx atau Caddy, masing-masing pada port sendiri. Situs PHP diteruskan ke PHP-FPM melalui modul proxy_fcgi dengan versi yang Anda pasang di [modul PHP](/id/features/php); tumpukan klasik seperti [WordPress](/id/solutions/wordpress) berjalan tanpa penyiapan tambahan. Pembuatan situs dibahas di [panduan Host](/id/guide/host). Domain situs, sertifikat HTTPS, dan pemeriksaan vhost per situs dibahas di [Situs Lokal, Domain Kustom & HTTPS](/id/features/local-sites-https); [panduan HTML-sebagai-PHP multi-server](/id/guide/parse-html-as-php-multi-servers) menunjukkan peran Apache dalam tumpukan tempat beberapa server melayani satu situs.

![Pengaturan vhost dan port situs untuk Apache](https://oss.macphpstudy.com/image/features/apache-4.webp)

## Log

Tab **Log Kesalahan** dan **Log (akses)** menampilkan log kesalahan serta akses Apache bersama, lengkap dengan pencarian dan penyegaran. Setiap situs juga memiliki log per situs yang dapat dilihat dari modul Host, sehingga situs yang ramai tidak menenggelamkan sisanya.

<FeatureRelatedLinks locale="id" slug="apache" />

## Catatan kompatibilitas

Apache **tidak memiliki sumber pemasangan Statis di macOS dan Linux**. Pada platform tersebut FlyEnv memakai pemasangan Homebrew (macOS dan Linux), MacPorts (macOS), atau direktori kustom yang Anda daftarkan sendiri. Daftar build statis daring (paket Apache Lounge) hanya untuk Windows. Menjalankan pada port istimewa seperti 80/443 di Linux memerlukan pembantu root FlyEnv. Periksa [halaman Unduhan](/id/download) dan catatan rilis terbaru untuk platform serta versi yang didukung build FlyEnv Anda.
