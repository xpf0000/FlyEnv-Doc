---
layout: doc
titleTemplate: false
title: 'Manajer Gateway AI Lokal CLIProxyAPI | FlyEnv'
description: 'Jalankan versi CLIProxyAPI sebagai gateway AI lokal dengan config.yaml, backend env, dan UI manajemen terkelola.'
head:
  - - meta
    - name: description
      content: 'Jalankan versi CLIProxyAPI sebagai gateway AI lokal dengan config.yaml, backend env, dan UI manajemen terkelola.'
  - - meta
    - property: og:title
      content: 'Manajer Gateway AI Lokal CLIProxyAPI | FlyEnv'
  - - meta
    - property: og:description
      content: 'Jalankan versi CLIProxyAPI sebagai gateway AI lokal dengan config.yaml, backend env, dan UI manajemen terkelola.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/id/features/cliproxyapi
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/id/features/cliproxyapi
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# CLIProxyAPI di FlyEnv

CLIProxyAPI adalah proksi lokal sumber terbuka yang menempatkan alat AI berbasis CLI, seperti Gemini CLI, [Claude Code](/id/features/claude-code), dan [Codex](/id/features/codex), di balik endpoint API yang kompatibel dengan OpenAI, Gemini, dan Claude. Aplikasi yang mengharapkan API model terhosting dapat memanggil akun CLI tersebut seperti layanan HTTP biasa, sementara beberapa penyedia disatukan dalam satu gateway lokal. FlyEnv menjalankan CLIProxyAPI sebagai gateway AI lokal terkelola: pasang versi dari Manajer Versi, mulai proses `cli-proxy-api` dari bilah sisi atau halaman modul, sunting `config.yaml` dan berkas lingkungan backend di dalam aplikasi, lalu buka panel manajemen bawaannya di peramban. Keluaran mulai disimpan dalam log per versi sehingga kegagalan mudah didiagnosis.

![Ringkasan modul CLIProxyAPI FlyEnv](https://oss.macphpstudy.com/image/features/cliproxyapi-1.webp)

## Manajemen versi

Pasang dan simpan beberapa versi CLIProxyAPI secara berdampingan melalui **CLIProxyAPI → Manajer Versi**, lalu pilih versi yang akan dijalankan layanan.

- **Unduhan statis:** daftar daring paket `.zip` dan `.tgz` yang tertaut ke rilis GitHub proyek, diambil sesuai platform dan arsitektur Anda.
- **Homebrew:** formula `cliproxyapi` muncul sebagai sumber pemasangan pada sistem yang memiliki Homebrew; MacPorts tidak tersedia untuk modul ini.
- **Direktori kustom:** tambahkan folder yang berisi biner `cli-proxy-api` atau `cliproxyapi` Anda sendiri; FlyEnv akan menampilkannya di samping versi terkelola.
- **Penanganan karantina macOS:** setelah pemasangan statis, FlyEnv menghapus atribut karantina pada biner agar dimulai tanpa peringatan Gatekeeper.

![Manajer Versi CLIProxyAPI dengan sumber statis dan Homebrew](https://oss.macphpstudy.com/image/features/cliproxyapi-2.webp)

## Layanan dan konfigurasi

Tab Layanan meluncurkan versi terpilih sebagai `cli-proxy-api -config <config.yaml>`, memakai `config.yaml` di direktori CLIProxyAPI FlyEnv dan variabel lingkungan dari `cliproxyapi.env`. Hanya satu versi berjalan dalam satu waktu; ID prosesnya dicatat dalam berkas pid di direktori yang sama, dan sakelar bilah sisi—juga tersedia di baki sistem—memulai atau menghentikannya.

- **Tab Berkas Konfigurasi:** editor mentah untuk `config.yaml`. Penyiapan baru memakai templat bawaan sehingga berkas sudah memiliki nilai awal yang berfungsi sebelum Anda mengubahnya.
- **Tab Env:** editor mentah untuk `cliproxyapi.env`, yang menyimpan variabel backend yang dibaca CLIProxyAPI saat mulai: `GITSTORE_*` untuk penyimpanan berbasis git, `PGSTORE_*` untuk PostgreSQL, `OBJECTSTORE_*` untuk penyimpanan objek, serta `MANAGEMENT_PASSWORD` untuk panel manajemen.

![Menyunting config.yaml CLIProxyAPI di FlyEnv](https://oss.macphpstudy.com/image/features/cliproxyapi-3.webp)

## UI manajemen di port 8317

Ketika layanan berjalan, tab Layanan menampilkan tombol untuk membuka panel manajemen bawaan CLIProxyAPI di `http://127.0.0.1:<port>/management.html`. FlyEnv membaca port dari `config.yaml`; pada templat bawaan nilainya 8317. Atur `MANAGEMENT_PASSWORD` pada tab Env sebelum mengekspos panel untuk penggunaan selain lokal.

![Membuka panel manajemen CLIProxyAPI dari tab Layanan](https://oss.macphpstudy.com/image/features/cliproxyapi-4.webp)

## Log

Tab Log menampilkan keluaran yang direkam dari setiap versi sebagai `cliproxyapi-<version>-start-out.log` dan `cliproxyapi-<version>-start-error.log`, dengan pilihan di antara kedua aliran tersebut. Jika versi menolak mulai atau halaman manajemen tidak merespons, log kesalahan adalah tempat pertama untuk diperiksa.

![Penampil log mulai CLIProxyAPI dengan pilihan keluaran dan kesalahan](https://oss.macphpstudy.com/image/features/cliproxyapi-5.webp)

<FeatureRelatedLinks locale="id" slug="cliproxyapi" />

## Catatan kompatibilitas

FlyEnv mengelola biner CLIProxyAPI, perintah peluncurannya, dan berkas di direktori modul. Perilaku gateway—aturan perutean, dukungan penyedia, dan kompatibilitas model—berasal dari versi CLIProxyAPI yang Anda pasang; periksa rilis GitHub proyek untuk rincian tiap versi. Sumber pemasangan yang tampil bergantung pada platform dan keberadaan Homebrew. Untuk model yang sepenuhnya dihosting sendiri di mesin yang sama, modul [Ollama](/id/features/ollama) menyediakannya lewat API lokalnya; [panduan FlyEnv bersama asisten AI](/id/guide/flyenv-work-with-ai) membahas gambaran AI lokal yang lebih luas. [Halaman Unduhan](/id/download) memuat build FlyEnv terbaru per platform, dan [demo](/id/demos) memperlihatkan modul ini saat berjalan.
