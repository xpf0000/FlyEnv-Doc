---
layout: doc
titleTemplate: false
title: 'Server FTP di FlyEnv: panduan pengembangan lokal'
description: 'Pasang, konfigurasikan, dan kelola server FTP di FlyEnv untuk pengembangan lokal.'
head:
  - - meta
    - name: description
      content: 'Pasang, konfigurasikan, dan kelola server FTP di FlyEnv untuk pengembangan lokal.'
  - - meta
    - property: og:title
      content: 'Server FTP di FlyEnv: panduan pengembangan lokal'
  - - meta
    - property: og:description
      content: 'Pasang, konfigurasikan, dan kelola server FTP di FlyEnv untuk pengembangan lokal.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/id/features/ftp-server
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/id/features/ftp-server
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Server FTP di FlyEnv

FlyEnv menyediakan dua cara untuk menjalankan server FTP lokal dan menampilkan keduanya melalui tabel akun yang sama: Pure-FTPd sebagai layanan terkelola yang dapat dipasang pada macOS dan Linux, serta ftp-srv sebagai server berbasis Node bawaan yang berjalan di semua platform, termasuk Windows. Keduanya memberi Anda direktori akar per akun, alamat `ftp://` yang dapat disalin saat server aktif, dan tanpa penyiapan daemon manual. Unduh build terbaru dari [halaman Unduhan](/id/download) untuk memperoleh kedua modul.

![Ikhtisar modul server FTP FlyEnv](https://oss.macphpstudy.com/image/features/ftp-server-1.webp)

## Dua Implementasi, Satu Tabel Akun

Kedua modul muncul di bilah samping FlyEnv sebagai layanan yang dapat Anda mulai, hentikan, dan sematkan ke baki sistem. Seperti layanan lain, keduanya dapat bergabung dengan [grup startup](/id/features/startup-groups) agar server FTP berjalan bersama bagian lain dari tumpukan Anda. Perbedaannya terletak pada asal biner server dan platform yang didukung.

- **Pure-FTPd (hanya macOS dan Linux):** daemon `pure-ftpd` sungguhan yang dipasang, diluncurkan, dan dilacak FlyEnv untuk Anda. Halamannya memiliki tiga tab: Layanan, Manajer Versi, dan Berkas Konfigurasi. Versi berasal dari Homebrew dan MacPorts; direktori kustom berisi build Pure-FTPd Anda juga didukung. Hanya satu versi yang dapat berjalan sekaligus.
- **ftp-srv (semua platform):** pilihan lintas platform, termasuk Windows. Server ini adalah pustaka npm `ftp-srv` bawaan yang berjalan pada runtime [Node.js](/id/features/nodejs) milik aplikasi di dalam FlyEnv, sehingga tidak perlu dipasang dan tidak memiliki Manajer Versi; halamannya hanya memiliki tab Layanan.
- **Alur kerja akun yang sama:** apa pun implementasi yang digunakan, tab Layanan menampilkan tabel nama pengguna, kata sandi, dan direktori akar yang sama, sehingga berpindah di antaranya tidak mengubah cara kerja Anda.

![Tab Layanan Pure-FTPd dengan tabel akun FTP](https://oss.macphpstudy.com/image/features/ftp-server-1.webp)

## Manajemen Akun

Setiap akun FTP adalah satu baris dalam tabel tab Layanan, dengan dialog Tambah dan Edit untuk membuat serta mengubah kredensial.

- **Nama pengguna, kata sandi, dan direktori akar:** setiap akun memiliki kredensial serta folder akar sendiri. Tabel mendukung klik untuk menyalin nilai dan dapat membuka direktori akar langsung di pengelola berkas.
- **Pengguna virtual Pure-FTPd:** akun adalah pengguna virtual Pure-FTPd yang dibuat lewat `pure-pw useradd`; uid dan gid diambil dari folder yang Anda pilih sebagai akar, lalu disimpan dalam PureDB server (`pureftpd.pdb`). Akun ini bukan akun sistem operasi. FlyEnv juga mencerminkan daftar akun ke `pureftpd.json` untuk pencatatannya sendiri.
- **Akun berbasis JSON pada ftp-srv:** kredensial disimpan di `ftp-srv.json` dalam direktori data FlyEnv dan divalidasi oleh penangan login server. Di Windows, entri lama dari `pureftpd.json` dimigrasikan otomatis.
- **Alamat yang dapat disalin saat berjalan:** header aktif menampilkan tautan `ftp://<ip>:<port>` yang dapat Anda salin, dengan pemilih IP untuk menentukan alamat lokal yang diberikan kepada klien.

![Menambahkan akun FTP dengan nama pengguna, kata sandi, dan direktori akar](https://oss.macphpstudy.com/image/features/ftp-server-2.webp)

## Konfigurasi

Pure-FTPd berjalan dari berkas `pure-ftpd.conf` yang dibuat FlyEnv dari templatnya dan digunakan untuk memulai daemon.

- **Editor konfigurasi mentah:** tab Berkas Konfigurasi membuka `pure-ftpd.conf` dalam editor lengkap, dengan salinan `.default` sebagai rujukan. Modul ini tidak memiliki formulir pengaturan visual.
- **Port dari konfigurasi:** port dengar diurai dari direktif `Bind …,port` dan bawaan menggunakan port 21. Templat juga menetapkan rentang port pasif 39000–40000.
- **ftp-srv tidak memiliki berkas pengaturan server yang dapat diedit:** server bawaan mendengarkan port tetap 21 dengan port pasif 49152–65535, dan memilih alamat PASV secara dinamis—127.0.0.1 untuk klien loopback, selain itu IP LAN utama. Satu-satunya JSON yang disimpan adalah `ftp-srv.json`, penyimpanan akun yang dikelola tabel tab Layanan, bukan berkas konfigurasi untuk diedit manual.

![Mengedit pure-ftpd.conf pada tab Berkas Konfigurasi](https://oss.macphpstudy.com/image/features/ftp-server-3.webp)

<FeatureRelatedLinks locale="id" slug="ftp-server" />

## Catatan kompatibilitas

FlyEnv mengelola runtime FTP lokal, akun, dan berkas konfigurasinya; yang tersedia bergantung pada platform Anda. **Pure-FTPd dibatasi untuk macOS dan Linux**, dan versi yang dapat dipasang bergantung pada rilis Homebrew atau MacPorts. **ftp-srv berjalan pada semua platform yang didukung FlyEnv**, sehingga menjadi satu-satunya pilihan di Windows, dengan konsekuensi tanpa manajemen versi dan konfigurasi server yang dapat diedit. Pure-FTPd dimulai dengan hak istimewa lebih tinggi (`sudo`) dan menulis keluaran log ke syslog, sehingga FlyEnv tidak menampilkan penampil log di aplikasi; ftp-srv juga tidak menyediakan berkas log. Kedua implementasi mendengarkan port 21 secara bawaan, jadi hanya satu yang dapat melayani port itu pada satu waktu. Arahkan direktori akar akun ke mana saja, misalnya folder situs yang Anda kelola melalui [Host](/id/guide/host) sebagai bagian dari penyiapan [situs lokal](/id/features/local-sites-https).
