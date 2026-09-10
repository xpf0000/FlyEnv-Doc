---
layout: doc
titleTemplate: false
title: 'Manajer Versi Python dan Runtime Proyek | FlyEnv'
description: 'Pasang dan ganti versi Python, kaitkan runtime ke setiap proyek, serta buat proyek FastAPI atau Django di FlyEnv.'
head:
  - - meta
    - name: description
      content: 'Pasang dan ganti versi Python, kaitkan runtime ke setiap proyek, serta buat proyek FastAPI atau Django di FlyEnv.'
  - - meta
    - property: og:title
      content: 'Manajer Versi Python dan Runtime Proyek | FlyEnv'
  - - meta
    - property: og:description
      content: 'Pasang dan ganti versi Python, kaitkan runtime ke setiap proyek, serta buat proyek FastAPI atau Django di FlyEnv.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/id/features/python
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/id/features/python
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Pengembangan Python Lokal dengan FlyEnv

Python adalah bahasa pemrograman serbaguna untuk backend web, skrip, analisis data, otomasi, dan machine learning. Modul Python FlyEnv memadukan manajemen versi dengan alur runtime proyek: pasang interpreter yang diperlukan, tentukan interpreter yang dipakai terminal, dan kaitkan Python tertentu ke setiap proyek. Bila aplikasi perlu terus berjalan, FlyEnv dapat menjalankannya sebagai layanan proyek terkelola dengan port serta variabel lingkungan sendiri; templat bawaan juga membuat kerangka framework Python umum dalam satu langkah.

![Ringkasan modul Python FlyEnv dengan tab proyek, layanan, dan manajer versi](https://oss.macphpstudy.com/image/features/python-1.webp)

## Manajemen versi Python

Pasang dan kelola beberapa versi Python secara berdampingan dari **Python → Manajer Versi**. FlyEnv menemukan interpreter dari beberapa sumber sehingga versi yang sudah dimiliki tampil bersama versi terkelola.

- **macOS:** pasang Python langsung melalui Homebrew atau MacPorts; FlyEnv juga memindai otomatis direktori framework MacPorts (`/opt/local/Library/Frameworks/Python.framework/Versions`) untuk interpreter yang telah dipasang.
- **Linux:** pasang Python melalui Homebrew.
- **Windows:** FlyEnv mengunduh paket pemasang Python resmi dari daftar daring, mengekstrak dan memasangnya ke direktori aplikasi, lalu melakukan bootstrap pip otomatis agar pemasangan baru siap digunakan.
- **Direktori kustom:** arahkan FlyEnv ke direktori berisi build Python Anda untuk menampilkannya di samping versi terkelola.

![Manajer Versi Python yang mencantumkan versi terpasang dan tersedia](https://oss.macphpstudy.com/image/features/python-2.webp)

## Pengalihan versi baris perintah

Tab **Layanan** mengontrol versi Python yang dipakai perintah terminal. Meski namanya demikian, tab ini untuk manajemen versi dan PATH, bukan proses layanan jangka panjang; modul Python tidak menjalankan layanan latar belakang sendiri.

- **Pengalihan PATH:** pilih versi yang direktori bin-nya diletakkan FlyEnv pada `PATH`, sehingga `python` dan `pip` di terminal baru mengarah kepadanya.
- **Alias dan catatan:** beri setiap pemasangan alias singkat serta catatan agar build serupa mudah dibedakan dalam daftar versi.

![Tab Layanan Python yang mengelola versi dan entri PATH](https://oss.macphpstudy.com/image/features/python-3.webp)

## Runtime Python tingkat proyek

Proyek yang berbeda sering membutuhkan versi Python yang berbeda. Di **Python → Proyek**, daftarkan folder tiap proyek dan kaitkan dengan interpreter sendiri.

- **Runtime per proyek:** Python terpilih disimpan dalam berkas `.flyenv` di direktori proyek sehingga terminal dan editor yang diluncurkan dari FlyEnv otomatis memuat lingkungan tepat. [Panduan lingkungan runtime tingkat proyek](/id/guide/project-level-runtime-environment) menjelaskan integrasi shellnya.
- **Jalankan sebagai layanan:** aktifkan **Jalankan sebagai layanan** dalam editor proyek bila aplikasi harus tetap berjalan. Konfigurasikan perintah mulai, port TCP, serta variabel lingkungan langsung atau lewat berkas env; FlyEnv menampilkan kontrol mulai/henti dan log keluaran aplikasi di daftar proyek.
- **Buka di alat:** lompat dari baris proyek ke terminal atau IDE dengan lingkungan proyek dimuat, termasuk **Buka di PyCharm**.

Untuk panduan lengkap model layanan proyek di Python, Node.js, dan Go, lihat [Menyebarkan Node.js, Python & Go Tanpa Docker](/id/guide/deploy-nodejs-python-go-without-docker).

![Daftar proyek Python dengan pengaitan interpreter per proyek](https://oss.macphpstudy.com/image/features/python-4.webp)

## Templat proyek baru

**Python → Proyek Baru** membuat kerangka aplikasi Python umum tanpa meninggalkan aplikasi. FlyEnv menjalankan perintah pembuatan framework pada terminal tertanam menggunakan perintah pip atau uv per OS sehingga keluaran asli terlihat ketika proyek dibuat.

Templat yang didukung: [FastAPI](/id/solutions/fastapi), [Django](/id/solutions/django), Flask, Streamlit, Masonite, uv, Wagtail, Sanic, Litestar, Mezzanine, dan PDM. Halaman solusi tertaut memperlihatkan setiap framework dalam tumpukan lokal lengkap dengan basis data dan situs yang dapat dibuka di peramban.

![Dialog proyek Python baru dengan pilihan templat framework](https://oss.macphpstudy.com/image/features/python-5.webp)

<FeatureRelatedLinks locale="id" slug="python" />

## Catatan kompatibilitas

FlyEnv mengelola pilihan runtime Python lokal dan titik masuk proses proyek; FlyEnv tidak menjamin setiap versi Python, templat framework, atau paket pihak ketiga tersedia di semua sistem operasi. Pemasangan paket dan pengelolaan dependensi tetap menjadi tanggung jawab proyek. Cocokkan kebutuhan proyek dengan interpreter terpasang dan gunakan [halaman Unduhan](/id/download) serta catatan rilis terbaru sebagai rujukan paket yang didukung.
