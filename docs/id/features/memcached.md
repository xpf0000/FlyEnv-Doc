---
layout: doc
titleTemplate: false
title: 'Manajer Layanan Memcached Lokal | FlyEnv'
description: 'Pasang dan jalankan versi Memcached dari Homebrew, MacPorts, atau build statis dengan satu klik.'
head:
  - - meta
    - name: description
      content: 'Pasang dan jalankan versi Memcached dari Homebrew, MacPorts, atau build statis dengan satu klik.'
  - - meta
    - property: og:title
      content: 'Manajer Layanan Memcached Lokal | FlyEnv'
  - - meta
    - property: og:description
      content: 'Pasang dan jalankan versi Memcached dari Homebrew, MacPorts, atau build statis dengan satu klik.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/id/features/memcached
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/id/features/memcached
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Memcached di FlyEnv

Memcached adalah cache key-value dalam memori sumber terbuka yang biasanya digunakan untuk mempercepat aplikasi web dengan menyimpan hasil kueri basis data, fragmen yang dirender, atau data sesi di RAM—saudara [Redis](/id/features/redis) yang lebih sederhana dan hanya berfungsi sebagai cache. FlyEnv menjalankannya sebagai layanan lokal terkelola: pasang satu atau beberapa versi dari Manajer Versi, mulai dan hentikan daemon dari tab Layanan, lalu akses cache pada port bawaan 11211 tanpa menyentuh manajer paket atau skrip startup secara manual.

![Ikhtisar modul Memcached FlyEnv](https://oss.macphpstudy.com/image/features/memcached-1.webp)

## Manajemen versi

Pasang Memcached melalui **Memcached → Manajer Versi**. Sumber yang ditawarkan bergantung pada platform:

- **macOS:** formula Homebrew `memcached` dan build MacPorts.
- **Linux:** formula Homebrew.
- **Windows:** zip statis dari rilis GitHub `nono303/memcached`; FlyEnv mengekstrak build `libevent-2.1/x64` atau `cygwin/x64` yang sesuai.
- **Versi khusus:** tambahkan direktori berisi instalasi Memcached Anda. FlyEnv memindai binari `memcached` (atau `memcached.exe`) dan menampilkannya di samping versi terkelola.

![Manajer Versi Memcached dengan sumber pemasangan](https://oss.macphpstudy.com/image/features/memcached-2.webp)

## Manajemen layanan

Tab Layanan memulai binari `memcached` asli versi terpilih di latar depan dengan berkas pid yang dikelola FlyEnv (`memcached -P .../memcached.pid -vv`), sehingga status siklus hidup di aplikasi selalu mencerminkan proses sebenarnya. Tidak ada argumen port yang diteruskan; daemon menggunakan port bawaan Memcached 11211.

- **Mulai dan berhenti satu klik:** kendalikan layanan dari tab Layanan, sakelar bilah sisi, atau baki sistem seperti modul layanan FlyEnv lainnya.
- **Keluaran verbose:** daemon berjalan dengan `-vv`; klien yang terhubung ke port 11211 mendapat server Memcached standar, sementara aktivitas dikirim ke aliran keluaran proses.
- **Ganti versi:** pilih versi terpasang mana pun sebagai layanan; instalasi setiap versi tetap tidak berubah.

Dengan daemon berjalan pada port 11211, arahkan aplikasi Anda ke sana sebagai cache objek. Stack PHP seperti [WordPress](/id/solutions/wordpress) (melalui drop-in object-cache) dan [Magento](/id/solutions/magento) mendukung Memcached sebagai backend cache atau sesi, sehingga instans Memcached lokal berguna untuk mereproduksi perilaku cache produksi.

Pasangkan layanan yang berjalan dengan aplikasi lokal dari [Demos](/id/demos), atau dapatkan FlyEnv untuk platform Anda di [halaman Unduhan](/id/download).

<FeatureRelatedLinks locale="id" slug="memcached" />

## Catatan kompatibilitas

- Modul Memcached **tidak memiliki penyuntingan berkas konfigurasi**. Memcached dikonfigurasi sepenuhnya melalui argumen baris perintah, dan FlyEnv memulainya dengan kumpulan argumen bawaan, bukan berkas konfigurasi yang dibuat.
- Modul **tidak memiliki tab penampil log**. Keluaran dikirim ke stdout/stderr melalui `-vv` dan tidak ada berkas log yang ditulis, sehingga tidak ada yang dapat ditampilkan dari dalam aplikasi.
- Layanan selalu mendengarkan **port bawaan 11211**; FlyEnv tidak meneruskan penggantian port.
- Tidak ada panel admin atau integrasi proyek/situs untuk modul ini—yang dikelola hanya daemon. Versi yang tersedia bergantung pada sumber pemasangan platform Anda, seperti tercantum di [halaman Unduhan](/id/download).
