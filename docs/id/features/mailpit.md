---
layout: doc
titleTemplate: false
title: 'Pengujian Email Lokal dengan Mailpit di FlyEnv'
description: 'Pasang, konfigurasikan, dan kelola Mailpit di FlyEnv untuk menguji email secara lokal.'
head:
  - - meta
    - name: description
      content: 'Pasang, konfigurasikan, dan kelola Mailpit di FlyEnv untuk menguji email secara lokal.'
  - - meta
    - property: og:title
      content: 'Pengujian Email Lokal dengan Mailpit di FlyEnv'
  - - meta
    - property: og:description
      content: 'Pasang, konfigurasikan, dan kelola Mailpit di FlyEnv untuk menguji email secara lokal.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/id/features/mailpit
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/id/features/mailpit
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Pengujian Email Lokal dengan FlyEnv

Mailpit adalah alat pengujian SMTP sumber terbuka untuk pengembang. Mailpit bertindak sebagai server email palsu yang menangkap email yang dikirim aplikasi Anda dan menampilkannya di kotak masuk web, sehingga pesan pengujian tidak pernah sampai ke penerima sebenarnya. FlyEnv menjalankannya sebagai layanan lokal terkelola: pasang versi dari Manajer Versi, jalankan binari dengan satu sakelar, dan setiap pesan yang dikirim aplikasi melalui SMTP masuk ke kotak masuk web Mailpit. Listener SMTP menggunakan port 1025 secara bawaan, sedangkan UI web menggunakan port 8025. Konfigurasi dan log dapat diedit serta dilihat langsung di dalam aplikasi.

![Ikhtisar modul Mailpit FlyEnv](https://oss.macphpstudy.com/image/features/mailpit-1.webp)

## Manajemen versi

Pasang dan simpan beberapa versi Mailpit berdampingan melalui **Mailpit → Manajer Versi**.

- **Sumber pemasangan per platform:** build statis dan Homebrew (`mailpit`) di macOS serta Linux; di Windows tersedia daftar daring statis berisi arsip rilis resmi `axllent/mailpit`.
- **Versi khusus:** tambahkan direktori apa pun yang berisi instalasi Mailpit Anda. FlyEnv akan memindainya dan menampilkan build tersebut di samping versi terkelola.
- **Penanganan pemasangan:** di macOS, FlyEnv menghapus atribut karantina saat pemasangan agar binari dapat dijalankan. Setiap versi dikenali dengan menjalankan pemeriksaan `mailpit version`.

![Manajer Versi Mailpit dengan sumber pemasangan](https://oss.macphpstudy.com/image/features/mailpit-2.webp)

## Layanan dan konfigurasi

Tab **Layanan** memulai dan menghentikan versi Mailpit yang dipilih. FlyEnv menjalankan binari `mailpit` secara langsung dan meneruskan setiap baris `MP_*` dari `mailpit.conf` sebagai variabel lingkungan, sehingga berkas yang Anda edit persis sama dengan yang diterima proses. Templat bawaan mendengarkan `0.0.0.0:1025` untuk SMTP, `0.0.0.0:8025` untuk UI web, dan `0.0.0.0:1110` untuk POP3, serta menyimpan paling banyak 500 pesan (`MP_MAX_MESSAGES`).

Konfigurasi berada di tab **Berkas Konfigurasi**, yang menyediakan dua tampilan untuk `mailpit.conf` yang sama:

- **Formulir visual:** ubah sekitar 45 pengaturan `MP_*` tanpa mengedit berkas secara manual—batas basis data dan penyimpanan, bind/TLS/autentikasi UI web, SpamAssassin, bind/TLS/autentikasi/relay SMTP, POP3, serta tag pesan.
- **Editor mentah:** beralih ke tampilan sumber lengkap untuk pengaturan yang tidak dicakup formulir; `mailpit.conf.default` disimpan di sebelahnya sebagai templat referensi.

Konfigurasi ini dibagikan oleh semua versi Mailpit yang terpasang, sehingga pergantian versi tidak mengubah port dan batas yang Anda tetapkan.

![Berkas konfigurasi Mailpit dengan formulir pengaturan visual MP_*](https://oss.macphpstudy.com/image/features/mailpit-3.webp)

## UI web

Saat layanan berjalan, tab Layanan menampilkan tombol buka di browser yang membawa Anda langsung ke UI web Mailpit. FlyEnv membaca port dari `MP_UI_BIND_ADDR` pada konfigurasi Anda lalu membuka `http://127.0.0.1:<port>/`—secara bawaan 8025. Di sana Anda dapat memeriksa setiap pesan yang ditangkap, header, tampilan HTML dan teks biasa, serta lampirannya.

Untuk menangkap email, arahkan pengaturan SMTP aplikasi ke `127.0.0.1:1025`. [Panduan pengujian email lokal](/id/guide/local-email-testing-mailpit) menjelaskan penyiapan lengkap, [solusi Laravel](/id/solutions/laravel) menunjukkan cara proyek kerangka kerja menghubungkan mailer ke Mailpit, dan situs [WordPress](/id/solutions/wordpress) dapat merutekan email notifikasi melalui plugin SMTP dengan cara yang sama.

![Membuka UI web Mailpit dari tab Layanan](https://oss.macphpstudy.com/image/features/mailpit-4.webp)

## Log

Tab **Log** membuka log Mailpit langsung di dalam FlyEnv. Jalurnya ditentukan dari pengaturan `MP_LOG_FILE` pada konfigurasi Anda—secara bawaan `mailpit.log` di direktori Mailpit FlyEnv—sehingga penampil selalu mengikuti berkas yang benar-benar ditulis oleh layanan. Ini adalah tempat pertama untuk memeriksa ketika layanan gagal dimulai atau pesan tidak tiba seperti yang diharapkan.

![Penampil log Mailpit](https://oss.macphpstudy.com/image/features/mailpit-5.webp)

<FeatureRelatedLinks locale="id" slug="mailpit" />

## Catatan kompatibilitas

FlyEnv mengelola runtime Mailpit lokal, konfigurasi `mailpit.conf`, dan berkas lognya; FlyEnv tidak menghubungkan Mailpit ke proyek atau pengaturan [PHP](/id/features/php) Anda secara otomatis. Atur host dan port SMTP setiap aplikasi ke `127.0.0.1:1025` secara manual. Versi yang ditawarkan di Manajer Versi bergantung pada platform Anda (build statis dan Homebrew di macOS/Linux, arsip rilis statis di Windows) serta rilis yang diterbitkan sumber tersebut. Mailpit menggunakan satu konfigurasi global yang dipakai bersama semua versi terpasang, bukan berkas konfigurasi per versi. Jadikan daftar versi di aplikasi dan [halaman Unduhan](/id/download) sebagai acuan versi yang dapat dipasang di komputer Anda.
