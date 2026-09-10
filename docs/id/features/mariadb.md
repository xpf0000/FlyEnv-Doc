---
layout: doc
titleTemplate: false
title: 'Pengembangan MariaDB Lokal dengan FlyEnv'
description: 'Pasang dan kelola MariaDB lokal di FlyEnv dengan konfigurasi, log, dan phpMyAdmin.'
head:
  - - meta
    - name: description
      content: 'Pasang dan kelola MariaDB lokal di FlyEnv dengan konfigurasi, log, dan phpMyAdmin.'
  - - meta
    - property: og:title
      content: 'Pengembangan MariaDB Lokal dengan FlyEnv'
  - - meta
    - property: og:description
      content: 'Pasang dan kelola MariaDB lokal di FlyEnv dengan konfigurasi, log, dan phpMyAdmin.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/id/features/mariadb
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/id/features/mariadb
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Pengembangan MariaDB Lokal dengan FlyEnv

MariaDB adalah basis data relasional sumber terbuka yang bermula sebagai fork MySQL dan tetap kompatibel secara luas dengannya. Karena itu [WordPress](/id/solutions/wordpress) dan sebagian besar aplikasi MySQL dapat berjalan tanpa perubahan. Tim sering memilihnya sebagai pengganti MySQL. FlyEnv menjadikan MariaDB layanan lokal terkelola dalam satu jendela: pasang beberapa versi, jalankan `mariadbd` dengan berkas `my-<version>.cnf` yang dapat diedit, pantau log error dan kueri lambat, lalu akses data melalui phpMyAdmin atau panel Kelola bawaan. Semua operasi memakai binari MariaDB asli, sehingga pengujian lokal mencerminkan lingkungan produksi.

![Ikhtisar modul MariaDB FlyEnv](https://oss.macphpstudy.com/image/features/mariadb-1.webp)

## Manajemen versi MariaDB

Pasang dan simpan beberapa versi MariaDB berdampingan melalui **MariaDB → Manajer Versi**, lalu pilih versi yang dijalankan layanan.

- **Sumber pemasangan per platform:** Homebrew (`mariadb`, `mariadb@x.y`) dan MacPorts di macOS, Homebrew di Linux, serta daftar daring statis paket siap pakai di Windows.
- **Versi khusus:** tambahkan direktori berisi instalasi MariaDB Anda; FlyEnv memindai dan menampilkannya di samping versi terkelola.
- **Satu versi layanan aktif:** tab Layanan menjalankan satu versi terpilih sebagai layanan MariaDB. Saat versi lain dimulai, versi sebelumnya dihentikan.

![Manajer Versi MariaDB dengan sumber pemasangan](https://oss.macphpstudy.com/image/features/mariadb-2.webp)

## Layanan dan konfigurasi

FlyEnv menjalankan binari `mariadbd` asli di latar depan—bukan `mariadbd-safe`—dengan `--defaults-file=my-<version>.cnf --port=...`. Port bawaan 3306 diambil dari berkas konfigurasi. Di Windows, layanan dihentikan dengan aman melalui `mariadb-admin.exe ... shutdown`.

Setiap versi memiliki berkas `my-<major.minor>.cnf` sendiri di direktori MariaDB FlyEnv yang dapat diedit melalui tab **Berkas Konfigurasi**:

- **Formulir pengaturan umum:** ubah opsi yang sering digunakan di bagian `[mariadbd]` melalui formulir visual tanpa mengedit berkas secara manual.
- **Editor mentah:** tampilkan sumber lengkap untuk opsi yang tidak dicakup formulir.

![Berkas konfigurasi MariaDB dengan formulir pengaturan umum](https://oss.macphpstudy.com/image/features/mariadb-3.webp)

## Log

Dua tab khusus—**Log** dan **Log Lambat**—menampilkan `error.log` dan `slow.log` server di FlyEnv. Periksa log error terlebih dahulu ketika versi gagal dimulai. Setelah pencatatan kueri lambat diaktifkan, log lambat mencatat setiap kueri yang melewati ambang kueri panjang; ini berguna saat membuat profil aplikasi lokal dengan data yang realistis.

![Penampil log error dan log lambat MariaDB](https://oss.macphpstudy.com/image/features/mariadb-4.webp)

## phpMyAdmin

Tombol **phpMyAdmin** pada bilah alat Layanan menyiapkan situs phpMyAdmin lengkap dalam satu langkah. FlyEnv mengunduh phpMyAdmin, membuat situs lokal yang dilayani server web dan versi PHP Anda, lalu membukanya di browser. Situs tersebut terhubung ke layanan MariaDB yang sedang berjalan, sehingga Anda memperoleh UI web untuk menjelajah tabel dan menjalankan kueri tanpa pemasangan manual.

![Menyiapkan phpMyAdmin dari modul MariaDB](https://oss.macphpstudy.com/image/features/mariadb-5.webp)

## Panel Kelola

Untuk pekerjaan harian Anda tidak perlu meninggalkan aplikasi; panel **Kelola** per versi berkomunikasi langsung dengan server yang berjalan.

- **Tambah basis data:** buat basis data baru dari daftar basis data.
- **Kata sandi root:** ubah kata sandi root instans; kata sandi bawaan pada pemasangan baru adalah `root`. [Panduan pengguna dan kata sandi basis data](/id/guide/database-user-password) menjelaskan lebih lanjut.
- **Cadangan:** ekspor basis data apa pun dengan `mariadb-dump` ke direktori cadangan yang Anda pilih langsung dari panel.

<FeatureRelatedLinks locale="id" slug="mariadb" />

## Catatan kompatibilitas

Modul MariaDB menjalankan satu versi pada satu waktu. Berbeda dari [modul MySQL](/id/features/mysql), modul ini tidak memiliki fitur Grup untuk beberapa instans bersamaan. FlyEnv mengelola runtime MariaDB lokal, berkas konfigurasi, dan direktori data; ketersediaan setiap versi tidak dijamin pada semua sistem operasi atau sumber pemasangan. Versi di Manajer Versi bergantung pada platform (Homebrew/MacPorts di macOS, Homebrew di Linux, paket statis di Windows) dan rilis yang dipublikasikan sumber tersebut. phpMyAdmin juga memerlukan server web FlyEnv dan versi [PHP](/id/features/php) yang sedang berjalan. Jadikan daftar versi dalam aplikasi dan [halaman Unduhan](/id/download) sebagai acuan ketersediaan di komputer Anda.
