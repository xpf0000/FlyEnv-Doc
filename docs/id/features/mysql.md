---
layout: doc
titleTemplate: false
title: 'Server MySQL Lokal dengan Pengelola Versi | FlyEnv'
description: 'Jalankan versi MySQL dengan konfigurasi visual, log, phpMyAdmin, pengelolaan basis data, dan grup multi-instans.'
head:
  - - meta
    - name: description
      content: 'Jalankan versi MySQL dengan konfigurasi visual, log, phpMyAdmin, pengelolaan basis data, dan grup multi-instans.'
  - - meta
    - property: og:title
      content: 'Server MySQL Lokal dengan Pengelola Versi | FlyEnv'
  - - meta
    - property: og:description
      content: 'Jalankan versi MySQL dengan konfigurasi visual, log, phpMyAdmin, pengelolaan basis data, dan grup multi-instans.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/id/features/mysql
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/id/features/mysql
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Pengembangan MySQL lokal dengan FlyEnv

MySQL adalah basis data relasional sumber terbuka dan selama bertahun-tahun menjadi pilihan bawaan di balik [WordPress](/id/solutions/wordpress), Laravel, serta tak terhitung tumpukan web lain. FlyEnv menjadikan MySQL layanan lokal terkelola yang dapat Anda kendalikan dari satu jendela: pasang beberapa versi, jalankan `mysqld` dengan `my-<version>.cnf` yang dapat diedit, pantau log error dan log lambat, lalu akses data melalui phpMyAdmin atau panel **Kelola** bawaan. Saat satu server tidak cukup, fitur Grup menjalankan beberapa instans MySQL berdampingan, masing-masing dengan versi, port, dan direktori datanya sendiri.

![FlyEnv MySQL ikhtisar modul](https://oss.macphpstudy.com/image/features/mysql-1.webp)

## Manajemen versi MySQL

Pasang dan simpan beberapa versi MySQL berdampingan dari **MySQL → Manajer Versi**, lalu pilih versi yang dijalankan layanan.

- **Sumber pemasangan per platform:** Homebrew (`mysql`, `mysql@x.y`) dan MacPorts (`mysqlN-server`) di macOS, Homebrew di Linux, serta daftar daring statis paket siap pakai di Windows.
- **Versi khusus:** tambahkan direktori mana pun yang berisi instalasi MySQL Anda; FlyEnv memindainya dan mencantumkan build tersebut di samping versi terkelola.
- **Satu versi layanan utama:** tab Layanan menjalankan satu versi terpilih sebagai layanan MySQL utama, sementara instans tambahan yang berjalan serentak ditangani fitur Grup di bawah.

![MySQL manajer versi dengan instal sumber](https://oss.macphpstudy.com/image/features/mysql-2.webp)

## Layanan dan konfigurasi

FlyEnv menjalankan binari `mysqld` asli di latar depan—bukan `mysqld_safe`—dengan `--defaults-file=my-<version>.cnf --port=...`. Port secara bawaan adalah 3306 dan berasal dari berkas konfigurasi. Di Windows, layanan dihentikan dengan bersih melalui `mysqladmin.exe ... shutdown`.

Setiap versi memperoleh `my-<major.minor>.cnf` sendiri di bawah direktori MySQL FlyEnv, yang dapat diedit dari tab **Berkas Konfigurasi**:

- **Formulir pengaturan umum:** sesuaikan opsi yang sering diubah—port, `key_buffer_size`, `innodb_buffer_pool_size`, dan lainnya—dari formulir visual alih-alih mengedit berkas dengan tangan.
- **Editor mentah:** beralih ke tampilan sumber lengkap untuk opsi yang tidak dicakup formulir.

![Berkas konfigurasi MySQL dengan pengaturan umum](https://oss.macphpstudy.com/image/features/mysql-3.webp)

## Log

Tab **Log** dan **Log Lambat** membuka `error.log` dan `slow.log` server langsung di dalam FlyEnv. Log error adalah tempat pertama untuk diperiksa saat versi gagal dimulai, sedangkan log lambat menunjukkan kueri yang melampaui ambang kueri panjang setelah pencatatan kueri lambat diaktifkan dalam konfigurasi—berguna saat membuat profil aplikasi lokal dengan data realistis.

![Penampil log kesalahan MySQL](https://oss.macphpstudy.com/image/features/mysql-4.webp)

## phpMyAdmin

Tombol **phpMyAdmin** di bilah alat Layanan menyiapkan situs phpMyAdmin lengkap dalam satu langkah: FlyEnv mengunduh phpMyAdmin, membuat situs lokal `phpmyadmin.test` yang disajikan server web dan versi PHP Anda, lalu membukanya di browser. Situs ini bekerja terhadap layanan MySQL yang sedang berjalan, sehingga Anda memperoleh UI web yang familier untuk menelusuri tabel dan menjalankan kueri tanpa memasang apa pun secara manual.

![pengaturan up phpMyAdmin dari MySQL modul](https://oss.macphpstudy.com/image/features/mysql-5.webp)

## Manajemen database

Untuk pekerjaan sehari-hari, Anda tidak perlu meninggalkan aplikasi: panel **Kelola** per versi berkomunikasi langsung dengan server yang berjalan.

- **Tambahkan basis data:** buat basis data baru dari daftar basis data.
- **Kata sandi root:** ubah kata sandi root instans—kata sandi root bawaan pada pemasangan baru adalah `root`. [Panduan pengguna dan kata sandi basis data](/id/guide/database-user-password) membahasnya lebih rinci.
- **Cadangan:** ekspor basis data apa pun menggunakan `mysqldump` ke direktori cadangan pilihan Anda, langsung dari panel.

## Beberapa instans dengan Grup

Tab **Grup** menjalankan beberapa instans MySQL secara serentak di samping layanan utama. Setiap instans menggabungkan versi MySQL pilihan dengan port dan direktori datanya sendiri, serta menyimpan konfigurasi dan log per instans—sehingga proyek yang terkunci pada MySQL 5.7 dapat berjalan di samping proyek pada MySQL 8.x tanpa menyentuh data satu sama lain. Sakelar daya grup pada kepala bilah sisi—juga tersedia di baki sistem—memulai atau menghentikan layanan utama dan semua instans Grup sekaligus.

![Tab Grup MySQL dengan beberapa instans bersamaan](https://oss.macphpstudy.com/image/features/mysql-6.webp)

Grup berguna untuk menyamai penyiapan produksi secara lokal—misalnya ketika proyek [Laravel](/id/solutions/laravel) mengharapkan versi mayor MySQL tertentu.

<FeatureRelatedLinks locale="id" slug="mysql" />

## Catatan kompatibilitas

FlyEnv mengelola runtime MySQL lokal, berkas konfigurasi, dan direktori datanya; FlyEnv tidak menjamin setiap versi MySQL tersedia di setiap sistem operasi atau sumber pemasangan. Versi yang ditawarkan Manajer Versi bergantung pada platform Anda (Homebrew dan MacPorts di macOS, Homebrew di Linux, paket statis di Windows) serta rilis dari sumber tersebut. Jika tumpukan Anda menggunakan MariaDB sebagai pengganti MySQL langsung, [modul MariaDB](/id/features/mariadb) menawarkan alur kerja satu jendela yang sama. Jadikan daftar versi dalam aplikasi dan [halaman Unduhan](/id/download) sebagai acuan untuk yang dapat dipasang di komputer Anda.
