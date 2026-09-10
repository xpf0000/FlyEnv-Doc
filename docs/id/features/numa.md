---
layout: doc
titleTemplate: false
title: 'Numa di FlyEnv: panduan pengembangan lokal'
description: 'Pasang, konfigurasikan, dan kelola Numa di FlyEnv untuk pengembangan lokal.'
head:
  - - meta
    - name: description
      content: 'Pasang, konfigurasikan, dan kelola Numa di FlyEnv untuk pengembangan lokal.'
  - - meta
    - property: og:title
      content: 'Numa di FlyEnv: panduan pengembangan lokal'
  - - meta
    - property: og:description
      content: 'Pasang, konfigurasikan, dan kelola Numa di FlyEnv untuk pengembangan lokal.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/id/features/numa
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/id/features/numa
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Numa DNS di FlyEnv

Numa adalah server DNS pihak ketiga (oleh razvandimescu, [numa.rs](https://numa.rs/)) yang menyelesaikan kueri lokal, meneruskannya ke resolver upstream, dan memblokir domain iklan serta pelacakan. FlyEnv memasang dan menjalankannya sebagai layanan lokal terkelola dengan konfigurasi TOML, UI web bawaan, log, daftar blokir iklan, dan penerusan upstream.

![Ikhtisar modul Numa FlyEnv dengan kontrol layanan](https://oss.macphpstudy.com/image/features/numa-1.webp)

## Manajemen versi

Pasang dan ganti versi Numa dari **Numa → Manajer Versi**.

- **Daftar daring statis:** arsip rilis GitHub (`.tgz` di macOS/Linux, `.zip` di Windows) dipasang ke direktori aplikasi FlyEnv.
- **Homebrew:** di macOS/Linux, FlyEnv memasang Numa melalui tap khusus `razvandimescu/tap`.
- **Direktori khusus:** arahkan FlyEnv ke folder berisi build Numa Anda; binari tersebut ditampilkan di samping versi terkelola.

![Manajer Versi Numa dengan sumber statis dan Homebrew](https://oss.macphpstudy.com/image/features/numa-2.webp)

## Layanan dan konfigurasi

FlyEnv memulai Numa sebagai `numa <numa.toml>` dengan satu instans melalui berkas pid tetap. Di Linux proses memerlukan hak istimewa untuk bind port DNS; di macOS berjalan sebagai proses biasa dan di Windows melalui CMD.

Tab **Berkas Konfigurasi** mengedit `numa/numa.toml` dalam editor TOML mentah tanpa formulir visual. `numa.default.toml` disimpan di sebelahnya untuk referensi atau pemulihan. Templat bawaan mencakup:

- **Listener DNS:** `0.0.0.0:53`—arahkan DNS sistem atau browser ke komputer untuk merutekan semua kueri melalui Numa.
- **UI web / API:** `api_port = 5380`.
- **Proxy HTTP bawaan:** port 80/443 dengan TLD lokal `numa`; petakan ulang salah satunya jika menjalankan Nginx juga.
- **Daftar pemblokiran iklan:** templat mengaktifkan blocklist HaGeZi.
- **Penerusan upstream:** mode forward melalui 9.9.9.9 dan 1.1.1.1, 8.8.8.8 sebagai fallback, cache respons, dan bagian `[mobile]`.

![Mengedit numa.toml di editor konfigurasi TOML mentah](https://oss.macphpstudy.com/image/features/numa-3.webp)

## Web UI (5380)

Numa menyediakan antarmuka administrasi sendiri. Saat layanan berjalan, tab Layanan menampilkan tombol **Buka di browser** yang membuka `http://127.0.0.1:<api_port>` (bawaan 5380). FlyEnv membaca port dari `numa.toml`, sehingga tombol mengikuti perubahan `api_port`.

![Numa antarmuka web dibuka di peramban pada port 5380](https://oss.macphpstudy.com/image/features/numa-4.webp)

## Log

Tab **Log** menampilkan log error mulai per versi `numa/numa-<version>-start-error.log`. FlyEnv juga mengindeks berkas `numa-*.log` di direktori Numa sehingga log sebelumnya tetap dapat diakses.

![Numa log](https://oss.macphpstudy.com/image/features/numa-5.webp)

<FeatureRelatedLinks locale="id" slug="numa" />

## Catatan kompatibilitas

Numa tersedia di macOS, Linux, dan Windows. Di Linux layanan memerlukan hak istimewa untuk bind port 53. MacPorts bukan sumber pemasangan modul ini—gunakan daftar statis atau Homebrew. Editor hanya berupa TOML mentah dan UI mengikuti proyek upstream. FlyEnv juga menyediakan [server DNS bawaan](/id/features/dns-server) untuk menyelesaikan [domain situs lokal](/id/guide/host) proyek. Periksa Manajer Versi setelah memasang FlyEnv dari [halaman Unduhan](/id/download); panduan tersedia di [halaman Demos](/id/demos).
