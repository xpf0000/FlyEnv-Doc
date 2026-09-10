---
layout: doc
titleTemplate: false
title: 'Manajer Biner Cloudflared | FlyEnv'
description: 'Pasang dan ganti versi cloudflared serta pertahankan binernya di PATH untuk modul Cloudflare Tunnel.'
head:
  - - meta
    - name: description
      content: 'Pasang dan ganti versi cloudflared serta pertahankan binernya di PATH untuk modul Cloudflare Tunnel.'
  - - meta
    - property: og:title
      content: 'Manajer Biner Cloudflared | FlyEnv'
  - - meta
    - property: og:description
      content: 'Pasang dan ganti versi cloudflared serta pertahankan binernya di PATH untuk modul Cloudflare Tunnel.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/id/features/cloudflared
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/id/features/cloudflared
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Cloudflared di FlyEnv

cloudflared adalah klien baris perintah sumber terbuka Cloudflare untuk Cloudflare Tunnel, yaitu daemon yang menghubungkan layanan lokal ke edge Cloudflare agar dapat diakses lewat hostname publik. Modul Cloudflared FlyEnv mengelola biner baris perintah `cloudflared`: pasang beberapa versi berdampingan, tentukan versi yang dipakai terminal, dan daftarkan build sendiri dari direktori kustom. Tugas utamanya adalah menyediakan biner yang digunakan [modul Cloudflare Tunnel](/id/features/cloudflare-tunnel) untuk menjalankan tunnel. Modul ini sendiri tidak memiliki daemon, berkas konfigurasi, maupun log; hanya ada dua tab: Layanan dan Manajer Versi.

![Ringkasan modul Cloudflared FlyEnv](https://oss.macphpstudy.com/image/features/cloudflared-1.webp)

## Manajemen versi Cloudflared

Pasang versi cloudflared secara berdampingan melalui **Cloudflared → Manajer Versi** dan simpan semuanya agar tetap tersedia.

- **Daftar daring statis:** unduh build resmi cloudflared langsung: arsip `.tgz` di macOS (FlyEnv mengekstraknya dan menghapus atribut karantina), `.exe` di Windows, serta biner biasa di Linux.
- **Homebrew:** di macOS dan Linux, pasang cloudflared dari Homebrew di samping build statis.
- **Direktori kustom:** arahkan FlyEnv ke folder yang berisi build cloudflared Anda sendiri; build itu akan muncul di daftar terpasang bersama versi terkelola.

![Manajemen versi Cloudflared](https://oss.macphpstudy.com/image/features/cloudflared-2.webp)

## Pengalihan versi baris perintah

Tab **Layanan** tidak menjalankan layanan latar belakang. Cloudflared di sini hanyalah biner, sehingga tidak ada daemon yang dikelola FlyEnv; tab tersebut adalah tabel versi terpasang untuk mengatur PATH.

- **Pengalihan versi terminal:** memilih versi akan menambahkan biner pemasangan itu ke `PATH` Anda, atau menghapusnya kembali, sehingga perintah `cloudflared` di terminal mengarah ke versi pilihan. Mekanisme ini dijelaskan dalam [panduan lingkungan PATH sistem](/id/guide/setup-system-path-environment).
- **Alias per versi:** beri build yang hampir sama alias singkat agar mudah dibedakan dalam daftar.
- **Pemeliharaan:** setiap baris menampilkan jalur pemasangan versi dan menyediakan tindakan hapus untuk versi yang tidak lagi diperlukan.

<FeatureRelatedLinks locale="id" slug="cloudflared" />

## Catatan kompatibilitas

Modul ini sengaja hanya mengelola biner dan PATH: modul menyediakan serta mengganti versi cloudflared, tetapi tidak membuat atau menjalankan tunnel. Instans tunnel, aturan DNS, dan log per tunnel berada di [modul Cloudflare Tunnel](/id/features/cloudflare-tunnel), yang meminta Anda memilih salah satu versi cloudflared yang dipasang di sini saat menambah tunnel. Untuk panduan lengkap mengekspos [situs lokal](/id/features/local-sites-https) melalui tunnel, lihat [panduan Cloudflare Tunnel untuk pengembangan lokal](/id/guide/cloudflare-tunnel-local-development).
