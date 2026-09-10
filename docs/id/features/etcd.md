---
layout: doc
titleTemplate: false
title: 'Etcd di FlyEnv: panduan pengembangan lokal'
description: 'Pasang, konfigurasikan, dan kelola Etcd di FlyEnv untuk pengembangan lokal.'
head:
  - - meta
    - name: description
      content: 'Pasang, konfigurasikan, dan kelola Etcd di FlyEnv untuk pengembangan lokal.'
  - - meta
    - property: og:title
      content: 'Etcd di FlyEnv: panduan pengembangan lokal'
  - - meta
    - property: og:description
      content: 'Pasang, konfigurasikan, dan kelola Etcd di FlyEnv untuk pengembangan lokal.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/id/features/etcd
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/id/features/etcd
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Etcd di FlyEnv

etcd adalah penyimpanan nilai-kunci terdistribusi dengan konsistensi kuat, yang juga digunakan Kubernetes untuk menyimpan status klasternya. Perangkat ini menjadi komponen standar untuk penemuan layanan, konfigurasi terdistribusi, dan pemilihan pemimpin. FlyEnv menjalankan etcd sebagai layanan lokal terkelola: pasang satu atau beberapa versi etcd, mulai versi terpilih dari sakelar bilah samping atau baki sistem, edit konfigurasi `etcd.yaml` langsung di tempatnya, dan baca log mulai untuk setiap versi tanpa meninggalkan aplikasi. Konfigurasi bawaan yang dibuat akan mendengarkan lalu lintas klien pada port 2379 serta lalu lintas peer pada port 2380, sehingga siap dipakai untuk penemuan layanan dan konfigurasi terdistribusi secara lokal.

![Ikhtisar modul etcd FlyEnv](https://oss.macphpstudy.com/image/features/etcd-1.webp)

## Manajemen versi

Pasang dan simpan beberapa versi etcd secara berdampingan melalui **Etcd → Manajer Versi**, lalu pilih versi yang akan dijalankan oleh layanan.

- **Sumber pemasangan:** daftar daring statis berisi paket etcd siap pakai untuk semua platform, ditambah formula Homebrew `etcd` pada macOS dan Linux.
- **Versi kustom:** arahkan FlyEnv ke direktori mana pun yang memuat build etcd Anda sendiri; direktori tersebut akan dipindai dan ditampilkan bersama versi yang dikelola.
- **Satu versi pada satu waktu:** memulai sebuah versi etcd ketika versi lain masih berjalan akan diblokir; hentikan versi aktif terlebih dahulu, lalu mulai versi baru.

![Manajer Versi etcd dengan sumber statis dan Homebrew](https://oss.macphpstudy.com/image/features/etcd-2.webp)

## Layanan dan konfigurasi

Tab Layanan mengendalikan proses etcd yang sedang berjalan. FlyEnv meluncurkan biner `etcd` asli dengan `--config-file etcd.yaml`, sehingga seluruh perilaku server ditentukan oleh satu berkas konfigurasi tersebut.

- **Bawaan yang dibuat otomatis:** pada kali pertama dijalankan, FlyEnv menulis `etcd.yaml` yang mendengarkan permintaan klien pada `0.0.0.0:2379` dan lalu lintas peer pada `0.0.0.0:2380`, mengiklankan dirinya sebagai `127.0.0.1`, serta mencatat ke stdout pada tingkat `info`. Berkas yang sudah ada tidak pernah ditimpa; FlyEnv hanya membuat konfigurasi bila berkasnya belum tersedia.
- **Editor mentah:** tab **Berkas Konfigurasi** membuka `etcd.yaml` secara langsung, dengan salinan `.default` di sampingnya agar Anda selalu dapat membandingkan atau memulihkan versi asli.
- **Tanpa lapisan tersembunyi:** karena etcd membaca `etcd.yaml` apa adanya, semua pengaturan etcd—seperti klaster, TLS, dan kuota—berfungsi persis seperti yang dijelaskan dokumentasi upstream.

![Layanan dan konfigurasi etcd FlyEnv](https://oss.macphpstudy.com/image/features/etcd-3.webp)

## Log

Tab **Log** dan **Log Kesalahan** menyediakan sepasang penampil untuk setiap versi etcd yang terpasang: `etcd-<version>-start-out.log` menangkap aliran stdout server, sedangkan `etcd-<version>-start-error.log` menangkap stderr. Jika sebuah versi gagal dimulai, log kesalahan adalah tempat pertama yang perlu diperiksa; konflik port pada 2379 maupun `etcd.yaml` yang tidak valid akan langsung muncul di sana.

![Penampil log mulai dan kesalahan etcd per versi](https://oss.macphpstudy.com/image/features/etcd-4.webp)

<FeatureRelatedLinks locale="id" slug="etcd" />

## Catatan kompatibilitas

- Modul etcd tidak menawarkan sumber pemasangan MacPorts pada macOS; gunakan daftar statis, Homebrew, atau direktori kustom sebagai gantinya.
- FlyEnv hanya mengelola proses etcd, `etcd.yaml`, dan berkas lognya. FlyEnv tidak menyertakan peramban etcd atau panel administrasi, sehingga pemeriksaan kunci serta operasi data dilakukan melalui `etcdctl` atau klien Anda sendiri.
- Versi etcd yang ditawarkan bergantung pada platform Anda serta rilis dari daftar daring dan Homebrew. Periksa Manajer Versi di aplikasi atau [halaman Unduhan](/id/download) untuk mengetahui paket yang tersedia bagi komputer Anda.
- Modul FlyEnv lain dapat memanfaatkan etcd yang berjalan: konfigurasi [MinIO](/id/features/minio) menyediakan kunci penyetelan etcd untuk penyiapan terdistribusi, sementara modul terkait seperti [Consul](/id/features/consul) dan [R-Nacos](/id/features/r-nacos) mencakup kebutuhan penemuan layanan serta konfigurasi yang berdekatan. Untuk panduan penggunaan etcd dalam tumpukan lokal nyata, lihat [demo](/id/demos).
