---
layout: doc
titleTemplate: false
title: 'Server PostgreSQL Lokal dengan pgAdmin 4 | FlyEnv'
description: 'Jalankan versi PostgreSQL dengan direktori data terkelola, initdb otomatis, pgAdmin 4, dan pemasangan ekstensi pgvector.'
head:
  - - meta
    - name: description
      content: 'Jalankan versi PostgreSQL dengan direktori data terkelola, initdb otomatis, pgAdmin 4, dan pemasangan ekstensi pgvector.'
  - - meta
    - property: og:title
      content: 'Server PostgreSQL Lokal dengan pgAdmin 4 | FlyEnv'
  - - meta
    - property: og:description
      content: 'Jalankan versi PostgreSQL dengan direktori data terkelola, initdb otomatis, pgAdmin 4, dan pemasangan ekstensi pgvector.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/id/features/postgresql
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/id/features/postgresql
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Pengembangan PostgreSQL Lokal dengan FlyEnv

PostgreSQL adalah basis data relasional sumber terbuka yang dikenal karena dukungan ketat terhadap standar SQL dan ekosistem ekstensi yang kaya. Ini merupakan pilihan umum untuk aplikasi dengan kueri kompleks, transaksi kuat, atau ekstensi seperti pgvector. FlyEnv menjalankan PostgreSQL sebagai layanan lokal terkelola dari satu jendela: pasang beberapa versi, biarkan FlyEnv menginisialisasi direktori data memakai `initdb` saat pertama mulai, sunting `postgresql.conf` di tempatnya, dan lihat `pg.log` tanpa meninggalkan aplikasi. Peluncur pgAdmin 4 bawaan menyediakan konsol web sekali klik, sedangkan panel Ekstensi memasang pgvector untuk beban kerja pencarian vektor.

![Ringkasan modul PostgreSQL FlyEnv](https://oss.macphpstudy.com/image/features/postgresql-1.webp)

## Manajemen versi

Pasang dan simpan beberapa versi PostgreSQL berdampingan dari **PostgreSQL → Manajer Versi**.

- **Sumber pemasangan per platform:** Homebrew (`postgresql@x`) dan MacPorts (`postgresqlN-server`) di macOS, Homebrew di Linux, serta daftar daring Statis paket siap pakai di Windows.
- **Versi kustom:** tambahkan direktori yang berisi pemasangan PostgreSQL Anda sendiri; FlyEnv memindainya dan menampilkan build tersebut di samping versi terkelola.

![Manajer Versi PostgreSQL dengan sumber pemasangan](https://oss.macphpstudy.com/image/features/postgresql-2.webp)

## Layanan dan direktori data

Tab Layanan menjalankan versi terpilih sebagai server PostgreSQL lokal. Di macOS dan Linux, FlyEnv meluncurkan biner asli `postgres -D <direktori data>` di latar depan; di Windows, FlyEnv memulai server melalui `pg_ctl -D ... -l pg.log start`. Port dibaca dari `postgresql.conf` dan nilai bawaannya 5432.

Setiap versi memiliki direktori data sendiri, secara bawaan `postgresql<major>` di bawah direktori PostgreSQL FlyEnv, dan jalurnya dapat disunting per versi dari bilah alat Layanan. Bila direktori data masih kosong pada mulai pertama, FlyEnv otomatis menjalankan `initdb -U root`, sehingga klaster dibuat dengan superuser `root`, encoding UTF-8, dan lokal sistem Anda. `initdb` dipanggil dengan `-U root` tanpa opsi kata sandi; karena itu superuser bawaan adalah `root` tanpa kata sandi. [Panduan pengguna dan kata sandi basis data](/id/guide/database-user-password) menjelaskan kredensial bawaan seluruh modul basis data FlyEnv.

![Tab Layanan PostgreSQL dengan direktori data yang dapat disunting](https://oss.macphpstudy.com/image/features/postgresql-3.webp)

Arahkan aplikasi ke `127.0.0.1:5432`; solusi [Django](/id/solutions/django) dan [Strapi](/id/solutions/strapi) menunjukkan tumpukan lokal lengkap yang menggunakan PostgreSQL dengan cara ini.

## Konfigurasi

Tab **Berkas Konfigurasi** membuka `postgresql.conf` milik versi tersebut di dalam direktori datanya. FlyEnv menyuntingnya dengan editor mentah lengkap tanpa formulir visual dan menyimpan salinan `postgresql.conf.default` di sampingnya agar konfigurasi asli dapat dipulihkan kapan saja. Perubahan port, alamat dengar, serta parameter penalaan semuanya dilakukan melalui berkas ini.

![Menyunting postgresql.conf di tab Berkas Konfigurasi](https://oss.macphpstudy.com/image/features/postgresql-4.webp)

## Log

Tab **Log** membuka `pg.log` dari direktori data langsung di FlyEnv, tempat pertama untuk memeriksa kegagalan mulai. Log pgAdmin sendiri—`pgadmin4.log`, keluaran mulai, dan log kesalahan—tersedia di sampingnya agar masalah konsol web dapat didiagnosis di tempat yang sama.

![Penampil pg.log PostgreSQL](https://oss.macphpstudy.com/image/features/postgresql-5.webp)

## pgAdmin 4

Tombol **pgAdmin 4** pada bilah alat Layanan menyiapkan konsol web pgAdmin lengkap dalam satu langkah. pgAdmin 4 adalah aplikasi Python; saat pertama digunakan FlyEnv memasang `pgadmin4` dengan pip ke versi [Python](/id/features/python) FlyEnv yang sedang dipilih dan menampilkan pemberitahuan pemasangan panel web. FlyEnv kemudian menjalankan `pgAdmin4.py` pada port 5050 dengan percobaan ulang, mendaftarkan otomatis server PostgreSQL FlyEnv yang berjalan sebagai koneksi, lalu membuka konsol di peramban.

![Konsol web pgAdmin 4 yang diluncurkan dari FlyEnv](https://oss.macphpstudy.com/image/features/postgresql-6.webp)

## Ekstensi pgvector

Tindakan **Ekstensi** pada baris layanan membuka panel yang memasang pgvector, ekstensi PostgreSQL untuk penyimpanan vektor dan pencarian kemiripan yang digunakan beban kerja AI serta embedding. Untuk basis data vektor khusus, lihat [modul Qdrant](/id/features/qdrant). FlyEnv mengkloning tag pgvector terbaru dari repositori git-nya dan menjalankan `sudo make` / `make install` di terminal tertanam sehingga keluaran build asli terlihat. Alur pemasangan ini ditujukan untuk macOS karena memakai `sudo` dan shell zsh.

![Pemasangan pgvector berjalan di terminal tertanam panel Ekstensi](https://oss.macphpstudy.com/image/features/postgresql-7.webp)

<FeatureRelatedLinks locale="id" slug="postgresql" />

## Catatan kompatibilitas

FlyEnv mengelola runtime PostgreSQL lokal, berkas konfigurasi, dan direktori data; FlyEnv tidak menjamin setiap versi tersedia di semua sistem operasi atau sumber pemasangan. Versi dalam Manajer Versi bergantung pada platform dan publikasi sumber: Homebrew serta MacPorts di macOS, Homebrew di Linux, dan paket Statis di Windows. pgAdmin 4 memerlukan versi Python FlyEnv yang dipilih, sedangkan alur pemasangan pgvector dirancang untuk macOS. Gunakan daftar versi aplikasi dan [halaman Unduhan](/id/download) sebagai sumber kebenaran untuk paket yang dapat dipasang di mesin Anda.
