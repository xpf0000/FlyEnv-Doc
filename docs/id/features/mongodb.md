---
layout: doc
titleTemplate: false
title: 'Server MongoDB Lokal dengan UI DbGate | FlyEnv'
description: 'Jalankan versi MongoDB dengan konfigurasi dan direktori data terkelola, serta UI web DbGate sekali klik.'
head:
  - - meta
    - name: description
      content: 'Jalankan versi MongoDB dengan konfigurasi dan direktori data terkelola, serta UI web DbGate sekali klik.'
  - - meta
    - property: og:title
      content: 'Server MongoDB Lokal dengan UI DbGate | FlyEnv'
  - - meta
    - property: og:description
      content: 'Jalankan versi MongoDB dengan konfigurasi dan direktori data terkelola, serta UI web DbGate sekali klik.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/id/features/mongodb
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/id/features/mongodb
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Pengembangan MongoDB lokal dengan FlyEnv

MongoDB adalah basis data dokumen sumber terbuka yang menyimpan rekaman sebagai dokumen mirip JSON, bukan baris dalam tabel. Basis data ini cocok untuk aplikasi dengan model data yang lentur atau terus berkembang, seperti platform konten dan backend API. FlyEnv menjalankan MongoDB sebagai layanan lokal terkelola: pasang versi dari Manajer Versi, mulai `mongod` dengan `mongodb-<version>.conf` yang dibuat otomatis, simpan data setiap versi di direktorinya sendiri, dan baca log server tanpa meninggalkan aplikasi. Tombol DbGate sekali klik menambahkan UI web lengkap untuk menelusuri dan membuat kueri basis data Anda.

![FlyEnv MongoDB ikhtisar modul](https://oss.macphpstudy.com/image/features/mongodb-1.webp)

## Manajemen versi

Pasang dan simpan beberapa versi MongoDB berdampingan dari **MongoDB → Manajer Versi**, lalu pilih versi yang dijalankan layanan.

- **Sumber pemasangan per platform:** Homebrew (`mongodb-community`, `mongodb-enterprise@x`) dan MacPorts di macOS, Homebrew di Linux, serta daftar daring statis paket `mongod.exe` siap pakai di Windows.
- **Versi khusus:** tambahkan direktori mana pun yang berisi instalasi MongoDB Anda sendiri; FlyEnv memindainya dan mencantumkan build tersebut di samping versi terkelola.
- **Satu versi aktif dalam satu waktu:** tab Layanan memulai versi terpilih sebagai layanan MongoDB; memulai versi lain menghentikan versi sebelumnya.
- **Tambahan Windows:** bersama `mongod.exe`, FlyEnv mengunduh shell **mongosh**, yang digunakan untuk mematikan server dengan anggun melalui `db.shutdownServer()`.

![MongoDB manajer versi dengan Homebrew dan Macports sumber](https://oss.macphpstudy.com/image/features/mongodb-2.webp)

## Layanan dan konfigurasi

FlyEnv meluncurkan binari `mongod` asli dengan `--config mongodb-<version>.conf --logpath mongodb-<version>.log --pidfilepath ...`. Berkas konfigurasi dibuat dari templat yang mengikat MongoDB hanya ke localhost (`127.0.0.1` dan `::1`) serta tidak menetapkan port eksplisit, sehingga server mendengarkan port bawaan **27017**. Setiap versi menyimpan datanya di direktori `data-<version>` sendiri di bawah folder MongoDB FlyEnv, sehingga versi tidak pernah berbagi berkas data.

Tab **Berkas Konfigurasi** membuka `mongodb-<version>.conf` versi tersebut dalam editor YAML mentah, sehingga setiap opsi `mongod` dapat diedit langsung.

![mengedit mongodb.conf di editor YAML mentah](https://oss.macphpstudy.com/image/features/mongodb-3.webp)

## Log

Tab **Log** membuka `mongodb-<version>.log` dari versi yang berjalan di dalam FlyEnv. Karena FlyEnv meneruskan `--logpath` secara eksplisit saat memulai, log server selalu berada di lokasi yang diketahui—tempat pertama untuk diperiksa ketika versi gagal dimulai atau koneksi ditolak.

## DbGate

Tombol **DbGate** di bilah alat Layanan menyiapkan UI web lengkap dalam satu langkah. Fitur ini memerlukan versi Node terpilih di [modul Node](/id/features/nodejs) FlyEnv: FlyEnv memakainya untuk memasang `dbgate-serve` melalui npm ke direktorinya sendiri, lalu menyajikan DbGate di port 3000 (mencari port bebas bila diperlukan). Akses dilindungi autentikasi dasar HTTP—nama pengguna masuknya `flyenv` dengan kata sandi yang dibuat otomatis, yang disematkan dalam URL yang dibuka FlyEnv di browser. [Panduan pengguna dan kata sandi basis data](/id/guide/database-user-password) menjelaskan penanganan kredensial pada berbagai modul basis data FlyEnv.

![DbGate antarmuka web dibuka dari MongoDB modul](https://oss.macphpstudy.com/image/features/mongodb-4.webp)

<FeatureRelatedLinks locale="id" slug="mongodb" />

## Catatan kompatibilitas

FlyEnv mengelola runtime MongoDB lokal, konfigurasi yang dibuat otomatis, dan direktori data per versinya; FlyEnv tidak menjamin setiap versi MongoDB tersedia di setiap sistem operasi atau sumber pemasangan. Versi yang ditawarkan Manajer Versi bergantung pada platform Anda (Homebrew dan MacPorts di macOS, Homebrew di Linux, paket statis di Windows) serta rilis dari sumber tersebut. DbGate juga bergantung pada versi Node yang dipasang melalui FlyEnv. Jadikan daftar versi dalam aplikasi dan [halaman Unduhan](/id/download) sebagai acuan untuk yang dapat dipasang di komputer Anda. Untuk tumpukan aplikasi lengkap berbasis basis data lokal, lihat solusi [Strapi](/id/solutions/strapi), serta saksikan [demo](/id/demos) untuk melihat modul ini digunakan.
