---
layout: doc
titleTemplate: false
title: 'Modul Kustom di FlyEnv: panduan pengembangan lokal'
description: 'Pasang, konfigurasikan, dan kelola modul kustom di FlyEnv untuk pengembangan lokal.'
head:
  - - meta
    - name: description
      content: 'Pasang, konfigurasikan, dan kelola modul kustom di FlyEnv untuk pengembangan lokal.'
  - - meta
    - property: og:title
      content: 'Modul Kustom di FlyEnv: panduan pengembangan lokal'
  - - meta
    - property: og:description
      content: 'Pasang, konfigurasikan, dan kelola modul kustom di FlyEnv untuk pengembangan lokal.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/id/features/user-modules
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/id/features/user-modules
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Modul Kustom di FlyEnv

FlyEnv menyediakan banyak modul bawaan, tetapi tidak dapat mencakup setiap alat yang dijalankan pengembang secara lokal. Modul kustom menutup celah itu: Anda mendeskripsikan layanan sendiri sekali, lalu FlyEnv menyediakan entri bilah sisi, halaman layanan dengan kontrol mulai/henti/mulai ulang, serta tab konfigurasi dan berkas log—pengalaman yang sama seperti modul bawaan.

![Modul kustom buatan pengguna dengan entri bilah sisi sendiri di FlyEnv](https://oss.macphpstudy.com/image/features/user-modules-1.webp)

## Membuat modul

Modul kustom didefinisikan dalam **Pengaturan → Modul**. Setiap modul yang dibuat menjadi entri utama di bilah sisi FlyEnv dengan halamannya sendiri.

- **Identitas:** beri label dan ikon pada modul agar mudah dikenali di bilah sisi.
- **Sakelar layanan:** tentukan apakah modul menjalankan layanan terkelola. Jika aktif, FlyEnv menambahkan kontrol siklus hidup dan melacak proses setiap item.
- **Mode satu instans:** tandai modul agar hanya satu item yang berjalan pada suatu waktu—berguna untuk alat yang memakai port tetap. Menjalankan satu item otomatis menghentikan item lain terlebih dahulu; FlyEnv mengingat item yang terakhir dimulai.
- **Daftar berkas konfigurasi dan log:** deklarasikan berkas konfigurasi serta log modul sejak awal; masing-masing menjadi tab pada halaman modul.

Menyembunyikan modul kustom dari bilah sisi menghentikan layanan yang sedang dijalankannya, sehingga modul tersembunyi tidak meninggalkan proses liar. [Panduan modul kustom](/id/guide/user-customizable-modules) menunjukkan contoh lengkap berbasis [etcd](/id/features/etcd).

![Mendefinisikan modul kustom di Pengaturan → Modul](https://oss.macphpstudy.com/image/features/user-modules-2.webp)

## Item eksekusi

Sebuah modul memuat satu atau beberapa item eksekusi, yaitu perintah tersendiri yang membentuk layanan, misalnya versi atau konfigurasi berbeda dari alat yang sama. Tab Layanan menampilkannya dengan tombol mulai, henti, dan mulai ulang.

Setiap item mendefinisikan:

- **Perintah atau berkas:** masukkan baris perintah shell secara langsung atau pilih berkas skrip dari disk untuk dijalankan FlyEnv.
- **Nama dan komentar:** gunakan untuk membedakan item serupa dalam daftar.
- **Jalankan dengan sudo:** untuk perintah yang membutuhkan hak istimewa, FlyEnv meminta kata sandi dan menyediakan cadangan “buka di Terminal” jika peningkatan hak interaktif diperlukan.
- **Jalur berkas PID:** berkas pid memungkinkan FlyEnv melacak status item serta menghentikannya dengan bersih—di Unix, proses henti mengirim SIGTERM lalu SIGINT ke pid yang tercatat.
- **Konfigurasi dan log per item:** setiap item dapat menyertakan berkas konfigurasi dan log sendiri yang dibuka dari pop-up operasi item.

Item biasanya berjalan tanpa antarmuka di latar belakang. Jika proses memerlukan sesi yang terlihat, FlyEnv dapat membukanya di jendela terminal asli (Terminal.app di macOS, skrip terminal di Linux), melalui [integrasi terminal](/id/features/cli-terminal) yang sama dengan bagian aplikasi lain.

![Menambahkan item eksekusi dengan pengaturan perintah, sudo, dan berkas pid](https://oss.macphpstudy.com/image/features/user-modules-3.webp)

## Tab konfigurasi dan log

Halaman modul dibuat dinamis dari deklarasi Anda: satu tab **Layanan** dengan daftar item, ditambah satu tab untuk setiap berkas konfigurasi serta berkas log yang dideklarasikan.

- **Tab konfigurasi:** buka setiap berkas yang dideklarasikan dalam editor mentah FlyEnv agar konfigurasi layanan dapat diubah tanpa mencari berkas di disk.
- **Tab log:** pantau setiap berkas log yang dideklarasikan langsung dari aplikasi.
- **Penangkapan keluaran bawaan:** untuk setiap item yang dimulai, FlyEnv otomatis menyimpan keluaran standar dan kesalahan standar ke `<BaseDir>/module-customer/<id>.out.log` serta `.error.log`; log tetap tersedia bahkan jika Anda tidak mendeklarasikannya sendiri.

![Tab konfigurasi dan log pada halaman modul kustom](https://oss.macphpstudy.com/image/features/user-modules-4.webp)

<FeatureRelatedLinks locale="id" slug="user-modules" />

## Catatan kompatibilitas

Modul kustom membungkus perintah dan skrip yang Anda sediakan; FlyEnv tidak memasang atau mengelola versi alat dasarnya. Tidak ada manajer versi, sumber unduhan online, atau antarmuka web administrasi, sehingga biner harus sudah ada di komputer dan dapat ditemukan melalui [PATH sistem](/id/guide/setup-system-path-environment) atau dirujuk dengan jalur absolut. Status layanan yang akurat bergantung pada berkas pid yang Anda konfigurasi, jadi perintah harus benar-benar menulis pid ke jalur tersebut. Peluncuran terminal berbeda menurut platform (AppleScript di macOS, skrip shell di Linux), dan perilaku hak istimewa mengikuti aturan sistem operasi. Modul kustom tersedia di semua platform FlyEnv; lihat [halaman Unduhan](/id/download) untuk sistem operasi yang didukung dan gunakan kemampuan perintah atau skrip Anda sendiri sebagai batas sebenarnya.
