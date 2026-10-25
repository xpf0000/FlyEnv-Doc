---
layout: doc
titleTemplate: false
title: 'Plugin SQL Server: Kelola Database di Windows dan Ubuntu | FlyEnv'
description: 'Instal dan kelola Microsoft SQL Server di FlyEnv pada Windows x64 dan Ubuntu. Gunakan kontrol layanan native, pengaturan sesuai platform, dan log database.'
---

# SQL Server di FlyEnv

Plugin SQL Server menghadirkan mesin database Microsoft ke FlyEnv melalui tab **Service**, **Version Manager**, dan **Log**. Instal **SQL Server** melalui **[Settings → Plugin Market](/id/features/plugin-market)**, lalu buka modulnya di bilah samping untuk memasang dan mengelola perangkat lunak database.

Plugin mendukung **Windows x64** dan **Ubuntu 22.04 atau 24.04 x64**. Runtime untuk macOS dan ARM64 tidak tersedia. Cara instalasi dan pengelolaan layanan berbeda antara Windows dan Ubuntu.

## Pengelolaan versi

Buka **Version Manager**, segarkan daftar rilis, lalu instal versi yang sesuai dengan platform Anda.

- **Windows:** katalog menyediakan edisi Express dan Developer untuk sejumlah rilis SQL Server. FlyEnv mengunduh media instalasi resmi Microsoft dan menjalankan SQL Server Setup untuk memasang instance bernama.
- **Ubuntu:** FlyEnv membaca repositori paket Microsoft yang tersedia untuk rilis Ubuntu Anda, memverifikasi checksum paket, lalu mengekstrak mesin database ke direktori runtime yang dikelolanya. Versi hanya muncul jika repositori yang sesuai tersedia.

Progres instalasi ditampilkan di dalam modul. Setelah selesai, instance tercantum pada tab **Service**; instalasi selesai tidak berarti database sudah berjalan.

![Daftar versi SQL Server pada Windows dengan pilihan instalasi Express dan Developer](https://oss.macphpstudy.com/image/features/plugin/sql-server-versions.png)

## Layanan dan konfigurasi Windows

FlyEnv menggunakan kontrol layanan Windows native untuk memulai dan menghentikan instance terpilih. Instance yang dipasang plugin menggunakan jenis startup **Manual**, sehingga database dijalankan saat diminta. Instalasi dan persiapan layanan dapat memerlukan persetujuan administrator Windows. Ikuti pemberitahuan mulai ulang sistem sebelum menjalankan instance yang baru dipasang.

Menu tindakan layanan menyediakan **Configuration Management**, yang membuka SQL Server Configuration Manager untuk rilis terpilih. Gunakan alat native tersebut untuk mengonfigurasi layanan dan jaringan SQL Server. Formulir kata sandi `sa` dan port untuk Ubuntu tidak digunakan pada instalasi Windows.

Untuk instance yang memenuhi syarat dan dikelola plugin, **Repair permissions** dapat memulihkan akses yang diperlukan FlyEnv untuk mengontrol layanan dan membaca log. Jika penampil log melaporkan akses ditolak, jalankan tindakan ini lalu segarkan log.

## Pengaturan Ubuntu dan startup pertama

Ubuntu menjalankan mesin database yang telah diekstrak melalui **Bubblewrap**, dengan berkas sistem yang dapat ditulis dan berkas database disimpan di direktori data FlyEnv. Instal paket `bubblewrap` dan pastikan sistem mengizinkan namespace pengguna tanpa hak istimewa sebelum menjalankan layanan.

Gunakan tombol pengaturan pada tab **Service** untuk menentukan **sa Password** awal dan **Port**. Port bawaannya adalah **1433**. Kata sandi harus berisi setidaknya delapan karakter, dengan minimal tiga dari empat jenis karakter: huruf besar, huruf kecil, angka, dan simbol. Jika kata sandi awal belum diisi, FlyEnv memintanya selama proses instalasi.

Kata sandi tersebut digunakan untuk menginisialisasi akun bawaan `sa` saat startup pertama. Mengubah pengaturan ini kemudian tidak mereset kata sandi akun database yang sudah ada. Gunakan kontrol layanan untuk memulai, menghentikan, atau memulai ulang mesin yang telah terpasang.

## Log dan penghapusan runtime

Tab **Log** mengikuti log kesalahan database untuk instance terpilih. Pada Ubuntu, jika log mesin database belum dibuat, tampilan beralih ke log keluaran atau kesalahan startup. Log ini membantu menelusuri kegagalan startup pertama, kesalahan konfigurasi, dan masalah izin.

Pada Ubuntu, **Version Manager** dapat menghapus runtime hasil ekstraksi yang dikelola plugin setelah konfirmasi dan penghentian layanan. Berkas database disimpan terpisah. Penghapusan perangkat lunak pada Windows menggunakan alat instalasi SQL Server sendiri.

Dukungan plugin tidak menjamin setiap rilis SQL Server akan berjalan pada semua versi sistem operasi yang didukung. Gunakan daftar versi dan diagnostik instalasi dalam aplikasi sebagai acuan untuk komputer Anda. Kembali ke **[Pasar Plugin](/id/features/plugin-market)** untuk mengelola integrasinya.
