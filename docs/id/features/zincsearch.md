---
layout: doc
titleTemplate: false
title: 'ZincSearch di FlyEnv: panduan pengembangan lokal'
description: 'Pasang, konfigurasikan, dan kelola ZincSearch di FlyEnv untuk pengembangan lokal.'
head:
  - - meta
    - name: description
      content: 'Pasang, konfigurasikan, dan kelola ZincSearch di FlyEnv untuk pengembangan lokal.'
  - - meta
    - property: og:title
      content: 'ZincSearch di FlyEnv: panduan pengembangan lokal'
  - - meta
    - property: og:description
      content: 'Pasang, konfigurasikan, dan kelola ZincSearch di FlyEnv untuk pengembangan lokal.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/id/features/zincsearch
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/id/features/zincsearch
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# ZincSearch di FlyEnv

ZincSearch adalah mesin pencari sumber terbuka yang ditulis dengan [Go](/id/features/go), sebagai alternatif ringan untuk [Elasticsearch](/id/features/elasticsearch) dalam pengindeksan teks penuh dan pencarian log. ZincSearch berada dalam keluarga pencarian ringan yang sama dengan [Meilisearch](/id/features/meilisearch) dan [Typesense](/id/features/typesense). Aplikasi ini berjalan sebagai satu biner dengan konsol web bawaan, sehingga mudah dipakai pada proyek kecil dan pengembangan lokal. FlyEnv menjalankannya sebagai layanan pencarian lokal terkelola: pasang versi dari Manajer Versi, mulai server dengan `zincsearch.env` yang dapat diedit, dan buka antarmuka web ZincSearch sekali klik. Nilai bawaan dibuat otomatis—server mendengarkan `127.0.0.1:4080` dengan akun administrator awal, dan datanya berada di direktori FlyEnv sendiri.

![Ikhtisar modul ZincSearch di FlyEnv](https://oss.macphpstudy.com/image/features/zincsearch-1.webp)

## Manajemen versi

Pasang dan simpan beberapa versi ZincSearch berdampingan dari **ZincSearch → Manajer Versi**.

- **Hanya sumber Static:** ZincSearch dipasang dari daftar Static online di semua platform—macOS, Linux, dan Windows. Paketnya adalah biner rilis GitHub resmi, dengan arsip tiap sistem operasi diambil dari URL unduhan rilis. Homebrew dan MacPorts tidak tersedia untuk modul ini.
- **Perbaikan karantina macOS:** setelah memasang build Static di macOS, FlyEnv menghapus atribut karantina agar biner dapat mulai tanpa diblokir Gatekeeper.
- **Versi kustom:** tambahkan direktori yang berisi build ZincSearch Anda sendiri; FlyEnv memindainya dan menampilkan biner tersebut di samping versi terkelola.
- **Berkas lingkungan per versi:** FlyEnv secara otomatis membuat berkas `.env` di samping setiap biner terpasang, sehingga tiap versi membawa nilai lingkungan bawaannya sendiri.

![Manajer Versi ZincSearch dengan daftar Static online](https://oss.macphpstudy.com/image/features/zincsearch-2.webp)

## Layanan dan konfigurasi

Tab **Layanan** memulai versi ZincSearch terpilih sebagai proses biner biasa, dengan variabel lingkungan yang dibaca dari `<BaseDir>/zincsearch/zincsearch.env`. Pada kali pertama dijalankan, FlyEnv menulis nilai yang sesuai: `ZINC_FIRST_ADMIN_USER=admin`, `ZINC_FIRST_ADMIN_PASSWORD=admin`, `ZINC_SERVER_ADDRESS=127.0.0.1`, `ZINC_SERVER_PORT=4080`, serta direktori data di bawah `<BaseDir>/zincsearch/data`.

Tab **Berkas Konfigurasi** adalah editor mentah untuk `zincsearch.env`: ubah alamat ikat, port, kredensial administrator, atau jalur data dengan mengedit entri lingkungan secara langsung. Salinan `zincsearch.env.default` tersedia sebagai acuan. Konfigurasi ini bersifat global: satu `zincsearch.env` digunakan bersama oleh seluruh versi ZincSearch yang terpasang.

![Mengedit zincsearch.env pada tab Berkas Konfigurasi](https://oss.macphpstudy.com/image/features/zincsearch-3.webp)

## Antarmuka web

ZincSearch menyertakan antarmuka web sendiri dan FlyEnv menampilkannya secara langsung: ketika layanan berjalan, tab Layanan menunjukkan tombol **ZincSearch UI** yang membuka konsol pada browser. Alamatnya dibaca dari berkas env sehingga mengikuti host dan port yang dikonfigurasi, dengan bawaan `http://127.0.0.1:4080/`. Masuk menggunakan kredensial administrator dari `zincsearch.env` untuk mengelola indeks, menjalankan pencarian, dan memeriksa dokumen.

## Log

ZincSearch memiliki dua tab log terpisah—**Log** dan **Log Error**. Keduanya membuka log mulai per versi, yaitu `zincsearch-<version>-start-out.log` dan `zincsearch-<version>-start-error.log`, di dalam FlyEnv; keluaran standar dan kesalahan saat mulai mudah dibedakan ketika versi gagal berjalan.

<FeatureRelatedLinks locale="id" slug="zincsearch" />

## Catatan kompatibilitas

FlyEnv mengelola biner ZincSearch lokal, berkas lingkungan, dan direktori datanya; FlyEnv tidak mengendalikan versi ZincSearch yang diterbitkan proyek hulu. Karena ZincSearch hanya tersedia dari sumber Static, versi yang dapat dipasang bergantung pada rilis GitHub resmi untuk sistem operasi Anda. Kredensial administrator bawaan (`admin` / `admin`) dimaksudkan untuk pengembangan lokal—ubah dalam `zincsearch.env` sebelum membuka server di luar komputer Anda. Gunakan daftar versi dalam aplikasi dan [halaman Unduhan](/id/download) sebagai acuan ketersediaan pemasangan, serta lihat [demo](/id/demos) untuk contoh modul FlyEnv yang berjalan.
