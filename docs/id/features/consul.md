---
layout: doc
titleTemplate: false
title: 'Server Consul Lokal dengan UI dan Konfigurasi | FlyEnv'
description: 'Jalankan agen Consul lokal, kelola versi dan konfigurasi, lalu buka UI web Consul dari FlyEnv.'
head:
  - - meta
    - name: description
      content: 'Jalankan agen Consul lokal, kelola versi dan konfigurasi, lalu buka UI web Consul dari FlyEnv.'
  - - meta
    - property: og:title
      content: 'Server Consul Lokal dengan UI dan Konfigurasi | FlyEnv'
  - - meta
    - property: og:description
      content: 'Jalankan agen Consul lokal, kelola versi dan konfigurasi, lalu buka UI web Consul dari FlyEnv.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/id/features/consul
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/id/features/consul
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Consul di FlyEnv

Consul adalah platform penemuan layanan dan service mesh HashiCorp: layanan mendaftarkan diri, pemeriksaan kesehatan memantau ketersediaan, dan penyimpanan key/value bawaan mendistribusikan konfigurasi. Sistem ini umum digunakan tumpukan mikroservis yang membutuhkan registri untuk menemukan dan memantau layanan, misalnya aplikasi [Spring Boot](/id/solutions/spring-boot) dengan Spring Cloud Consul. FlyEnv menjalankan Consul sebagai agen server lokal terkelola: pasang satu atau beberapa versi, mulai agen dengan konfigurasi server satu node yang dibuat otomatis, simpan datanya di direktori per versi yang dapat dipindahkan, dan buka UI web Consul sekali klik. Konfigurasi, log, serta kontrol layanan berada dalam satu halaman modul.

![Tab Layanan modul Consul FlyEnv](https://oss.macphpstudy.com/image/features/consul-1.webp)

## Manajemen versi

Pasang dan simpan beberapa versi Consul berdampingan dari **Consul → Manajer Versi**, lalu pilih versi yang akan dijalankan layanan.

- **Sumber pemasangan per platform:** daftar paket statis daring tersedia di semua platform, ditambah Homebrew dan MacPorts di macOS serta Homebrew di Linux.
- **Versi kustom:** arahkan FlyEnv ke direktori berisi pemasangan Consul sendiri; FlyEnv memindai dan menampilkannya di samping versi terkelola.
- **Satu versi berjalan:** Consul berjalan sebagai satu agen lokal; hentikan versi aktif sebelum memulai versi lain.

![Manajer Versi Consul dengan sumber pemasangan](https://oss.macphpstudy.com/image/features/consul-2.webp)

## Layanan dan konfigurasi

FlyEnv meluncurkan biner `consul agent` asli secara terlepas tanpa hak root. Konfigurasi bawaan membuat server lokal mandiri dengan `server: true`, `bootstrap_expect: 1`, `client_addr: 127.0.0.1`, serta `ui_config.enabled: true`, sementara agen terikat ke alamat LAN utama Anda.

- **Direktori data dapat disunting:** setiap versi memakai direktori data sendiri, secara bawaan `consul-<major>-data` di bawah direktori Consul FlyEnv. Ubah jalur dari tab Layanan; nilai dikirim ke agen melalui `-data-dir` agar status bertahan antar mulai ulang dan versi tidak berbagi data tanpa disengaja.
- **Editor JSON mentah:** tab **Berkas Konfigurasi** membuka `consul-<major>.json` dalam editor sumber. FlyEnv hanya membuatnya bila belum ada dan tidak pernah menimpa suntingan; salinan `.default` tersedia sebagai rujukan.
- **Pengaturan sadar port:** modul membaca port HTTP dan pilihan lain dari JSON tersebut, sehingga nilai kustom Anda dihormati.

![Menyunting konfigurasi JSON dan direktori data Consul](https://oss.macphpstudy.com/image/features/consul-3.webp)

## Antarmuka web

Consul menyertakan UI web sendiri dan FlyEnv mengaktifkannya dalam konfigurasi yang dibuat. Tombol **Buka UI** di bilah alat Layanan membukanya di peramban bawaan pada `http://127.0.0.1:8500/ui/`; port dibaca dari `ports.http`, sehingga tombol mengikuti perubahan konfigurasi Anda. Dari UI, telusuri layanan dan node terdaftar, periksa kesehatan, serta sunting penyimpanan key/value agen lokal yang berjalan.

![UI web bawaan Consul yang dibuka dari FlyEnv](https://oss.macphpstudy.com/image/features/consul-4.webp)

## Log

Tab **Log** membuka `consul.log` agen langsung di FlyEnv. Karena agen dimulai dengan `-log-file=consul.log`, pesan mulai, peristiwa Raft, aktivitas join, dan sinkronisasi semuanya berada di berkas ini; inilah tempat pertama untuk memeriksa versi yang gagal mulai atau layanan yang tidak terdaftar.

![Penampil log Consul di FlyEnv](https://oss.macphpstudy.com/image/features/consul-5.webp)

<FeatureRelatedLinks locale="id" slug="consul" />

## Catatan kompatibilitas

FlyEnv mengelola agen Consul lokal, konfigurasi, dan direktori datanya, tetapi tidak menjamin setiap versi tersedia di semua sistem operasi atau sumber pemasangan. Daftar versi mengikuti platform dan rilis sumbernya; di Windows, FlyEnv menambahkan `raft_logstore.backend = boltdb` untuk mengatasi kegagalan fsync log Raft khusus platform itu. Modul ini mengelola agen, bukan pengaitan versi per proyek atau proksi balik situs. Lihat juga [R-Nacos](/id/features/r-nacos), [etcd](/id/features/etcd), serta [panduan menjalankan layanan Node.js, Python, dan Go tanpa Docker](/id/guide/deploy-nodejs-python-go-without-docker). Periksa daftar versi dalam aplikasi dan [halaman Unduhan](/id/download) untuk paket yang dapat dipasang.
