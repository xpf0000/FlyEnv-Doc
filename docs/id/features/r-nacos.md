---
layout: doc
titleTemplate: false
title: 'R-NACOS di FlyEnv: panduan pengembangan lokal'
description: 'Pasang, konfigurasikan, dan kelola R-NACOS di FlyEnv untuk pengembangan lokal.'
head:
  - - meta
    - name: description
      content: 'Pasang, konfigurasikan, dan kelola R-NACOS di FlyEnv untuk pengembangan lokal.'
  - - meta
    - property: og:title
      content: 'R-NACOS di FlyEnv: panduan pengembangan lokal'
  - - meta
    - property: og:description
      content: 'Pasang, konfigurasikan, dan kelola R-NACOS di FlyEnv untuk pengembangan lokal.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/id/features/r-nacos
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/id/features/r-nacos
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# R-NACOS di FlyEnv

R-NACOS adalah pusat registri layanan dan konfigurasi sumber terbuka yang ditulis dalam Rust, kompatibel dengan protokol Nacos yang digunakan di ekosistem layanan mikro Java Alibaba. Ini berada dalam ekosistem yang sama dengan layanan [Spring Boot](/id/solutions/spring-boot) yang dibangun di [lingkungan Java lokal](/id/guide/set-up-java-development-environment). Tumpukan layanan mikro menggunakannya untuk mendaftarkan serta menemukan instans layanan, dan untuk menerbitkan konfigurasi dinamis yang dipantau klien saat runtime. FlyEnv menjalankan R-Nacos sebagai layanan lokal terkelola: pasang versi dari build statis atau Homebrew, mulai biner `rnacos` dengan berkas `rnacos.env` yang dibuat otomatis, edit konfigurasi itu di editor bawaan, dan buka konsol R-Nacos untuk pekerjaan penemuan layanan serta konfigurasi dengan sekali klik. Untuk mendapatkan FlyEnv, kunjungi [halaman Unduhan](/id/download); panduan praktik tersedia pada [demo](/id/demos).

![Ikhtisar modul R-Nacos FlyEnv dengan tab layanan, manajer versi, berkas konfigurasi, dan log](https://oss.macphpstudy.com/image/features/r-nacos-1.webp)

## Manajemen versi

Pasang dan simpan beberapa versi R-Nacos secara berdampingan dari **R-Nacos → Manajer Versi**, lalu pilih versi yang dijalankan layanan.

- **Build statis daring:** daftar versi berasal dari katalog daring FlyEnv, dengan paket per sistem operasi dan arsitektur. Di macOS, atribut karantina dihapus otomatis setelah pemasangan.
- **Homebrew dengan tap otomatis:** pada macOS dan Linux, FlyEnv menambahkan tap `r-nacos/r-nacos` bila belum ada, sehingga formula Homebrew muncul tanpa pekerjaan terminal manual.
- **Direktori kustom:** arahkan FlyEnv ke folder yang berisi biner `rnacos` Anda sendiri dan biner tersebut muncul dalam daftar bersama versi terkelola.
- **Satu versi berjalan:** memulai suatu versi diblokir selama versi R-Nacos lain masih berjalan, sehingga selalu ada satu build yang diketahui di balik port.

![Manajer Versi R-Nacos dengan sumber statis dan Homebrew](https://oss.macphpstudy.com/image/features/r-nacos-2.webp)

## Layanan dan konfigurasi

FlyEnv meluncurkan biner asli sebagai `rnacos -e rnacos.env`: FlyEnv mengurai berkas env, memasukkan setiap entri ke lingkungan proses, dan memaksa `RNACOS_DATA_DIR` ke direktori data FlyEnv agar semua versi terkelola berbagi lokasi penyimpanan yang diketahui.

- **Templat env yang dibuat otomatis:** `rnacos.env` bawaan mendokumentasikan port standar—API HTTP pada 8848, gRPC pada 9848, konsol pada 10848—serta akun konsol bawaan `admin/admin` dan tingkat log `RUST_LOG`.
- **Editor mentah:** tab **Berkas Konfigurasi** mengedit langsung `rnacos.env` dalam gaya `.env`, menyimpan templat sebagai referensi pemulihan, dan menaut ke dokumentasi resmi variabel lingkungan R-Nacos.
- **Tidak pernah menimpa editan Anda:** FlyEnv hanya membuat berkas env bila belum ada; setelah Anda menyesuaikannya, berkas tersebut tetap tidak diubah.

![Konfigurasi R-Nacos](https://oss.macphpstudy.com/image/features/r-nacos-3.webp)

## Konsol (10848)

R-Nacos menyertakan konsol web bawaan sendiri, dan FlyEnv menghubungkannya ke tab Layanan. Saat layanan berjalan, tombol konsol membuka `http://127.0.0.1:10848/rnacos/` di peramban Anda. Masuklah dengan akun dari `rnacos.env` (`admin/admin` secara bawaan) untuk mendaftarkan instans, memantau kesehatan layanan, serta menerbitkan atau mengedit entri konfigurasi.

![Konsol R-Nacos dibuka di peramban dari FlyEnv](https://oss.macphpstudy.com/image/features/r-nacos-4.webp)

## Log

Tab **Log** beralih di antara aliran mulai per versi—`rnacos-<version>-start-out.log` dan `rnacos-<version>-start-error.log`. Bila versi gagal dimulai atau klien tidak dapat terhubung pada 8848, log kesalahan adalah tempat pertama yang perlu diperiksa.

<FeatureRelatedLinks locale="id" slug="r-nacos" />

## Catatan kompatibilitas

FlyEnv mengelola runtime R-Nacos lokal, berkas env, dan direktori datanya, tetapi tidak menjamin setiap versi R-Nacos tersedia pada setiap sistem operasi atau sumber pemasangan. Pemasangan Homebrew tersedia di macOS dan Linux, build statis tersedia lintas platform, sedangkan sumber MacPorts tidak diaktifkan untuk modul ini. FlyEnv juga menyediakan [Consul](/id/features/consul) sebagai modul penemuan layanan alternatif bila tumpukan memerlukan alat HashiCorp, bukan protokol Nacos. Perhatikan bahwa tombol konsol menentukan port yang dibuka secara terpisah dari berkas `rnacos.env`; bila port konsol diubah dari 10848, buka konsol secara manual pada alamat yang dikonfigurasi. Untuk yang benar-benar dapat dipasang di komputer Anda, gunakan daftar versi di aplikasi dan [halaman Unduhan](/id/download).
