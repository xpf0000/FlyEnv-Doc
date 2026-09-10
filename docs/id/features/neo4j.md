---
layout: doc
titleTemplate: false
title: 'Pengembangan Neo4j Lokal dengan FlyEnv'
description: 'Pasang dan kelola basis data graf Neo4j secara lokal di FlyEnv.'
head:
  - - meta
    - name: description
      content: 'Pasang dan kelola basis data graf Neo4j secara lokal di FlyEnv.'
  - - meta
    - property: og:title
      content: 'Pengembangan Neo4j Lokal dengan FlyEnv'
  - - meta
    - property: og:description
      content: 'Pasang dan kelola basis data graf Neo4j secara lokal di FlyEnv.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/id/features/neo4j
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/id/features/neo4j
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Neo4j di FlyEnv

Neo4j adalah basis data graf sumber terbuka yang menyimpan data sebagai node dan relasi, bukan tabel, lalu menanyakannya dengan bahasa Cypher. Model datanya berbeda dari penyimpanan dokumen seperti [MongoDB](/id/features/mongodb). Neo4j cocok untuk beban kerja yang mementingkan hubungan antarentitas—graf sosial, graf pengetahuan, rekomendasi, dan deteksi penipuan. FlyEnv menjalankan Neo4j sebagai layanan lokal terkelola: pasang versi dari daftar daring statis, hubungkan setiap versi ke runtime Java yang kompatibel dari modul Java FlyEnv, edit `neo4j.conf`, dan pantau log melalui tab **Layanan / Manajer Versi / Berkas Konfigurasi / Log**. Tombol **Neo4j Browser** membuka UI web bawaan basis data setelah layanan aktif.

![Ikhtisar modul Neo4j FlyEnv](https://oss.macphpstudy.com/image/features/neo4j-1.webp)

## Manajemen versi

Pasang versi Neo4j melalui **Neo4j → Manajer Versi**.

- **Hanya daftar daring statis:** Neo4j dipasang dari daftar paket statis FlyEnv—arsip zip di Windows dan tar.gz di sistem lain. Sumber Homebrew dan MacPorts tidak tersedia untuk modul ini.
- **Versi yang didukung:** hanya Neo4j **5.23.0 dan lebih baru** yang didukung; rilis lama tidak didukung.
- **Versi khusus:** tambahkan direktori berisi instalasi Neo4j Anda; FlyEnv akan memindai dan menampilkan build tersebut di samping versi terkelola.

![Manajer Versi Neo4j dengan daftar daring statis](https://oss.macphpstudy.com/image/features/neo4j-2.webp)

## Pengikatan versi Java

Neo4j berjalan di JVM sehingga setiap versi terpasang memerlukan runtime Java. Tabel Layanan memiliki kolom **Java** khusus untuk memilih JDK setiap versi Neo4j, menggunakan instalasi Java yang dikelola [modul Java](/id/features/java) FlyEnv.

- **JAVA_HOME per versi:** JDK yang dipilih diikat ke versi Neo4j tersebut dan diteruskan sebagai `JAVA_HOME` saat layanan dimulai.
- **Kebijakan kompatibilitas:** Neo4j 5.x berjalan pada Java 17 atau 21; Neo4j 2025.x memerlukan Java 21 atau 25. Ikat JDK yang kompatibel sebelum memulai layanan—[panduan lingkungan pengembangan Java](/id/guide/set-up-java-development-environment) menjelaskan pemasangan JDK di FlyEnv.

![Tabel layanan Neo4j dengan kolom Java per versi](https://oss.macphpstudy.com/image/features/neo4j-3.webp)

## Layanan dan konfigurasi

FlyEnv memulai Neo4j di latar depan dengan `neo4j console`—di Windows menggunakan `neo4j.ps1 console` melalui PowerShell—serta menetapkan `JAVA_HOME` dan `NEO4J_CONF` untuk versi terpilih. Setiap versi memiliki direktori instans sendiri di bawah direktori Neo4j FlyEnv.

- **`neo4j.conf` per instans:** tab **Berkas Konfigurasi** mengedit `conf/neo4j.conf` milik instans, yang disalin dari distribusi, melalui editor mentah dengan tautan ke dokumentasi resmi Neo4j.
- **Port dari konfigurasi:** port HTTP (bawaan **7474**), HTTPS (7473), dan Bolt (bawaan **7687**) dibaca langsung dari `neo4j.conf`, sehingga port yang ditampilkan FlyEnv selalu sesuai dengan bind server.

![Mengedit neo4j.conf di editor konfigurasi mentah](https://oss.macphpstudy.com/image/features/neo4j-4.webp)

## Log

Tab **Log** beralih antara berkas log server: keluaran mulai dan error, serta `neo4j.log` dan `debug.log` milik Neo4j. Log mulai adalah tempat pertama saat versi gagal aktif—misalnya pengikatan Java yang tidak kompatibel segera terlihat di sana.

## Neo4j Browser

Neo4j menyediakan antarmuka web sendiri dan FlyEnv tidak menggantinya. Tombol **Neo4j Browser** di bilah alat Layanan membuka `http://127.0.0.1:<http port>` pada browser eksternal; Anda dapat menjalankan kueri Cypher dan memeriksa graf pada instans yang berjalan. Lihat [Demos](/id/demos) untuk contoh alur ini.

<FeatureRelatedLinks locale="id" slug="neo4j" />

## Catatan kompatibilitas

FlyEnv mengelola runtime Neo4j lokal, konfigurasi per instans, dan pengikatan Java; ketersediaan setiap versi tidak dijamin pada semua sistem operasi. Hanya Neo4j 5.23.0 ke atas yang didukung, pemasangan berasal dari daftar daring statis (zip di Windows, tar.gz di macOS/Linux), dan setiap versi memerlukan JDK kompatibel—Java 17/21 untuk Neo4j 5.x, Java 21/25 untuk Neo4j 2025.x—yang dipasang melalui modul Java FlyEnv. Jadikan daftar versi di aplikasi dan [halaman Unduhan](/id/download) sebagai sumber kebenaran versi yang dapat dipasang.
