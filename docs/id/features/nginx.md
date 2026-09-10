---
layout: doc
titleTemplate: false
title: 'Server Web Nginx Lokal | FlyEnv'
description: 'Pasang dan kelola beberapa versi Nginx dengan konfigurasi visual, vhost situs, dan log.'
head:
  - - meta
    - name: description
      content: 'Pasang dan kelola beberapa versi Nginx dengan konfigurasi visual, vhost situs, dan log.'
  - - meta
    - property: og:title
      content: 'Server Web Nginx Lokal | FlyEnv'
  - - meta
    - property: og:description
      content: 'Pasang dan kelola beberapa versi Nginx dengan konfigurasi visual, vhost situs, dan log.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/id/features/nginx
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/id/features/nginx
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Nginx di FlyEnv

Nginx adalah server web dan reverse proxy sumber terbuka, digunakan untuk menyajikan situs secara langsung maupun meneruskan lalu lintas ke server aplikasi seperti PHP-FPM. FlyEnv menjadikan Nginx bagian terkelola dari stack lokal: pasang beberapa versi berdampingan, jalankan salah satunya sebagai layanan latar belakang dari bilah sisi atau baki sistem, lalu edit `nginx.conf` melalui formulir visual atau editor sumber lengkap. Setiap situs tipe PHP yang dibuat di FlyEnv memperoleh vhost Nginx yang dibuat otomatis dengan port per situs, aturan rewrite yang memahami kerangka kerja, dan dukungan reverse proxy. Situs FlyEnv dibahas lengkap dalam [panduan Host](/id/guide/host).

![Ikhtisar modul Nginx FlyEnv](https://oss.macphpstudy.com/image/features/nginx-1.webp)

## Manajemen versi Nginx

Pasang beberapa versi Nginx melalui **Nginx → Manajer Versi** dan simpan berdampingan.

- **Berbagai sumber pemasangan:** build statis di semua platform, ditambah Homebrew di macOS/Linux dan MacPorts di macOS.
- **Versi khusus:** daftarkan direktori yang berisi build Nginx Anda; FlyEnv menemukan binarinya dan menampilkannya di samping versi terkelola.
- **Konfigurasi bersama:** semua versi terpasang menggunakan satu `nginx.conf` bersama, sehingga pergantian versi tidak menghilangkan pengaturan.

![Manajer Versi Nginx dengan berbagai sumber pemasangan](https://oss.macphpstudy.com/image/features/nginx-2.webp)

## Manajemen layanan

Nginx adalah layanan latar belakang nyata di FlyEnv, bukan sekadar daftar versi.

- **Satu versi berjalan:** beberapa versi dapat dipasang, tetapi hanya satu yang berjalan; memulai versi lain saat layanan aktif diblokir di tab Layanan.
- **Kontrol bilah sisi dan baki:** mulai atau hentikan Nginx dari sakelar modul di bilah sisi atau langsung dari baki sistem tanpa membuka jendela utama.
- **Perbaikan konfigurasi otomatis:** FlyEnv memperbaiki direktif `user` dan jalur sementara, serta membuat ulang include `enable-php-<version>.conf` untuk setiap versi PHP yang digunakan situs, sehingga integrasi PHP-FPM selalu sesuai penyiapan saat ini.

![Tabel layanan Nginx dengan kontrol mulai dan berhenti](https://oss.macphpstudy.com/image/features/nginx-3.webp)

## Konfigurasi

Tab **Berkas Konfigurasi** mengedit `nginx.conf` bersama dengan dua cara:

- **Formulir pengaturan umum:** ubah direktif yang sering digunakan tanpa menyentuh berkas—`keepalive_timeout`, `gzip`, `gzip_min_length`, `gzip_comp_level`, `client_max_body_size`, `server_names_hash_bucket_size`, `server_names_hash_max_size`, serta ukuran buffer header dan isi klien.
- **Editor sumber lengkap:** beralih ke editor mentah untuk pengaturan yang tidak dicakup formulir, dengan pemulihan konfigurasi bawaan satu klik.

![Mengedit nginx.conf dengan formulir pengaturan umum](https://oss.macphpstudy.com/image/features/nginx-4.webp)

## Integrasi situs

Modul Host FlyEnv tidak memiliki satu server web bawaan: situs tipe PHP mendapatkan konfigurasi vhost di keempat server web—Nginx, [Apache](/id/features/apache), [Caddy](/id/features/caddy), dan [FrankenPHP](/id/features/frankenphp)—secara bersamaan; server yang sedang berjalanlah yang menyajikan situs. Pembuatan situs dijelaskan dalam [panduan Host](/id/guide/host).

- **Vhost dan port per situs:** setiap situs PHP memperoleh berkas vhost Nginx dan port Nginx sendiri (bawaan 80/443), terpisah dari port Apache, Caddy, atau FrankenPHP. Situs yang sama dapat disajikan beberapa server sekaligus, seperti pada [panduan HTML sebagai PHP multi-server](/id/guide/parse-html-as-php-multi-servers). Situs tipe lain berbeda: situs Node, Java, Go, dan Python diakses melalui reverse proxy, sedangkan situs Tomcat berada di `server.xml`. Domain dan HTTPS dibahas dalam [Situs Lokal, Domain Kustom & HTTPS](/id/features/local-sites-https).
- **Aturan rewrite otomatis:** FlyEnv mendeteksi proyek [WordPress](/id/solutions/wordpress), [Laravel](/id/solutions/laravel), dan Yii lalu mengisi aturan rewrite URL yang sesuai pada vhost situs.
- **Reverse proxy per situs:** tambahkan aturan reverse proxy untuk meneruskan jalur ke server aplikasi lokal; [panduan reverse proxy NestJS multi-server](/id/guide/reverse-proxy-nestjs-multi-servers) memberikan contoh lengkap.
- **PHP melalui PHP-FPM:** situs PHP dilayani include PHP-FPM per versi, sehingga setiap situs dapat memilih versi PHP sendiri dari yang terpasang di [modul PHP](/id/features/php).

## Log

Halaman modul Nginx menyediakan tab **Log Error** dan **Log (akses)** untuk log tingkat server. Setiap situs juga menulis log akses dan error sendiri yang dapat dibuka dari penampil log situs di modul Host—berguna saat men-debug satu domain tanpa memilah log global.

![Penampil log error dan akses Nginx](https://oss.macphpstudy.com/image/features/nginx-5.webp)

<FeatureRelatedLinks locale="id" slug="nginx" />

## Catatan kompatibilitas

FlyEnv mengelola binari Nginx, siklus hidup proses, dan konfigurasi yang dibuat. Semua versi terpasang berbagi satu `nginx.conf`, sehingga perubahan dari formulir visual atau editor mentah berlaku pada versi mana pun yang dimulai—ingat hal ini sebelum mengandalkan direktif yang hanya ada di rilis lebih baru. Sumber pemasangan berbeda menurut platform (MacPorts hanya macOS, Windows menggunakan build statis). Pastikan kebutuhan situs sesuai build Nginx terpasang, dan jadikan [halaman Unduhan](/id/download) serta catatan rilis terkini sebagai sumber paket yang didukung.
