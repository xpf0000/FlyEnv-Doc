---
layout: doc
titleTemplate: false
title: 'Grup Startup di FlyEnv: panduan pengembangan lokal'
description: 'Pasang, konfigurasikan, dan kelola Grup Startup di FlyEnv untuk pengembangan lokal.'
head:
  - - meta
    - name: description
      content: 'Pasang, konfigurasikan, dan kelola Grup Startup di FlyEnv untuk pengembangan lokal.'
  - - meta
    - property: og:title
      content: 'Grup Startup di FlyEnv: panduan pengembangan lokal'
  - - meta
    - property: og:description
      content: 'Pasang, konfigurasikan, dan kelola Grup Startup di FlyEnv untuk pengembangan lokal.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/id/features/startup-groups
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/id/features/startup-groups
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Grup Startup di FlyEnv

Proyek nyata jarang hanya memerlukan satu layanan—misalnya aplikasi [Laravel](/id/solutions/laravel) memerlukan basis data, cache, dan runtime aplikasi yang aktif bersamaan. Grup Startup memungkinkan Anda menggabungkan bagian tersebut dalam grup bernama dan menyalakan atau mematikan seluruh set dengan satu tindakan, dalam urutan yang Anda tentukan. Satu grup dapat ditandai sebagai bawaan dan akan dikendalikan oleh sakelar bilah sisi, menu baki, serta mulai otomatis aplikasi. Jika baru mengenal FlyEnv, [panduan memulai](/id/guide/getting-started) terlebih dahulu menjelaskan pemasangan dan menjalankan modul satu per satu.

![Halaman Grup Startup dengan kisi kartu grup](https://oss.macphpstudy.com/image/features/startup-groups-1.webp)

## Membuat grup

Buka **Grup Startup** dari bilah sisi dan tambahkan grup; setiap grup muncul sebagai kartu dengan sakelar mulai/henti sendiri, sakelar tiap anggota, serta tindakan edit, hapus, dan jadikan bawaan.

Anggota grup hanya dapat berupa salah satu dari dua hal berikut:

- **Versi layanan:** versi terpasang dari modul layanan—basis data, server web, antrean, dan sejenisnya. PHP-FPM juga termasuk: ia dipetakan ke versi PHP terpasang sehingga versi PHP-FPM tertentu dapat berada satu grup dengan [Nginx](/id/features/nginx) dan [MySQL](/id/features/mysql).
- **Runtime proyek:** proyek dari modul bahasa yang mengaktifkan “jalankan sebagai layanan”—aplikasi Node.js, Python, Go, atau sejenisnya dengan perintah jalan dan port sendiri, yang dikelola melalui [runtime per proyek](/id/features/per-project-runtimes).

Editor grup memantau konflik ketika Anda memilih anggota dan memperingatkan jika dua entri berasal dari modul yang sama atau akan memakai port yang sama, sehingga kombinasi rusak tertangkap sebelum Anda menekan mulai.

![Editor grup untuk memilih versi layanan dan runtime proyek](https://oss.macphpstudy.com/image/features/startup-groups-2.webp)

## Mulai dan henti berurutan

- **Mulai sesuai urutan daftar.** FlyEnv memulai anggota dari atas ke bawah dan melewati anggota yang sudah berjalan. Anggota yang tidak tersedia ditandai tidak valid dan urutan tetap berlanjut.
- **Atur penanganan kegagalan.** Secara default, FlyEnv berhenti memulai anggota setelah operasi mulai melaporkan kesalahan. Aktifkan opsi untuk tetap memulai anggota lain jika salah satunya gagal.
- **Hentikan dalam urutan terbalik.** FlyEnv tetap mencoba menghentikan anggota lain jika terjadi kegagalan. Grup dapat menghentikan anggota yang sudah aktif sebelum grup dijalankan, sehingga menghentikan Nginx atau Redis bersama dapat memengaruhi grup lain.

[Demo ERPNext](/id/demos?video=erpnext-local-project) memperlihatkan grup macOS dengan Nginx, Redis, MariaDB, dan proyek Python ERPNext. Layanan dimulai ulang dan ERPNext kembali terbuka di browser. FlyEnv menjalankan tindakan mulai setiap anggota secara berurutan. Buka URL aplikasi untuk memastikan stack siap.

## Grup bawaan, mulai otomatis, dan baki

Tepat satu grup dapat menjadi grup bawaan dan menjadi target kontrol global FlyEnv.

- **Sakelar bilah sisi:** tombol mulai/henti grup di bilah sisi utama mengendalikan grup bawaan. Jika belum ada grup bawaan, tombol kembali ke perilaku klasik untuk memulai atau menghentikan seluruh layanan sekaligus.
- **Mulai otomatis saat peluncuran:** ketika “mulai otomatis layanan” diaktifkan dalam Penyiapan, meluncurkan FlyEnv otomatis memulai grup bawaan sehingga stack kerja telah aktif saat Anda mulai bekerja.
- **Kontrol baki:** menu baki sistem menampilkan grup Anda, masing-masing dengan sakelar mulai/henti sendiri, sehingga Anda dapat mematikan satu stack atau berganti stack tanpa membuka jendela utama.

![Menu baki dengan Grup Startup serta tindakan mulai dan henti](https://oss.macphpstudy.com/image/features/startup-groups-3.webp)

<FeatureRelatedLinks locale="id" slug="startup-groups" />

## Catatan kompatibilitas

Grup Startup memakai operasi modul yang tersedia di platform Anda. Pasang versi layanan dan siapkan proyek sebelum menambahkannya ke grup. Saat menyembunyikan Grup Startup di pengaturan bilah sisi, FlyEnv mencoba menghentikan layanan dalam grup terlebih dahulu. Entri tetap terlihat jika penghentian gagal.
