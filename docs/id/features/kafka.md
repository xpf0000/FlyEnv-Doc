---
layout: doc
titleTemplate: false
title: 'Plugin Kafka: Broker KRaft Lokal dan Pengelolaan Topik | FlyEnv'
description: 'Instal versi Kafka, pilih runtime Java, jalankan broker KRaft lokal, serta kelola topik, konfigurasi, dan log melalui plugin Kafka di FlyEnv.'
---

# Kafka di FlyEnv

[Apache Kafka](https://kafka.apache.org/documentation/) adalah platform streaming peristiwa untuk aplikasi yang menerbitkan dan mengonsumsi record melalui topik. Plugin Kafka di FlyEnv menghadirkan broker lokal dalam ruang kerja Anda, lengkap dengan pengelolaan versi, pemilihan Java, kontrol topik, serta tampilan konfigurasi dan log.

Instal **Kafka** melalui **[Settings → Plugin Market](/id/features/plugin-market)**, lalu buka modulnya dari bilah samping. Modul ini menyediakan tab **Service**, **Version Manager**, **Topics**, **Config File**, dan **Log**.

## Versi Kafka dan runtime Java

**Version Manager** memasang distribusi Kafka dari server unduhan dan arsip Apache. Anda dapat menyimpan beberapa versi sekaligus, lalu memilih versi yang akan dijalankan pada tab **Service**. Modul juga memindai direktori instalasi khusus yang sudah dikonfigurasi.

![Daftar versi Kafka di FlyEnv beserta status instalasi dan tombol pemasangan](https://oss.macphpstudy.com/image/features/plugin/kafka-versions.png)

Setiap instalasi Kafka memiliki kontrol **Select Java** sendiri dalam daftar layanan. Plugin menampilkan runtime Java 17 atau yang lebih baru yang terdeteksi, lalu menyimpan pilihan untuk instalasi tersebut. Jika belum ada runtime yang kompatibel, **Install compatible Java** membuka [modul Java](/id/features/java).

Hentikan layanan sebelum mengganti runtime Java. Sebelum menjalankan Kafka, plugin memeriksa berkas executable Java dan versi utamanya. JDK yang dipilih tetap harus memenuhi persyaratan rilis Kafka yang digunakan.

![Tab Service Kafka dengan broker terpasang, pemilih runtime Java, dan tombol mulai](https://oss.macphpstudy.com/image/features/plugin/kafka-service.png)

## Broker KRaft lokal

Gunakan kontrol layanan standar untuk memulai, menghentikan, atau memulai ulang Kafka. FlyEnv menyiapkan KRaft satu node yang menjalankan peran broker sekaligus controller, sehingga tidak memerlukan layanan ZooKeeper terpisah.

- **Endpoint klien:** konfigurasi yang dibuat mengumumkan alamat `127.0.0.1:9092`.
- **Listener controller:** konfigurasi menggunakan `127.0.0.1:9093`.
- **Inisialisasi penyimpanan:** jika belum diinisialisasi, FlyEnv membuat UUID cluster dan memformat penyimpanan KRaft.
- **Berkas per versi:** konfigurasi, data, dan log disimpan dalam direktori instance versi yang dipilih.

Secara bawaan, topik internal menggunakan faktor replikasi satu agar sesuai untuk pengembangan aplikasi lokal. Hubungkan producer dan consumer aplikasi Anda ke endpoint klien tersebut.

## Pengelolaan topik

Tab **Topics** menggunakan versi Kafka yang dipilih pada tab **Service**, beserta runtime Java yang terikat padanya. Jalankan broker sebelum menggunakan kontrol ini.

- **Segarkan daftar:** lihat nama topik pada broker lokal.
- **Create Topic:** masukkan nama dan pilih 1–100 partisi; plugin membuat topik dengan faktor replikasi satu.
- **Delete:** konfirmasikan penghapusan topik dari daftar.

Tampilan ini mencakup pembuatan, penayangan, dan penghapusan topik. Untuk menerbitkan dan mengonsumsi record, gunakan aplikasi Anda atau alat bawaan Kafka.

## Konfigurasi dan log

Tab **Config File** mengedit `server.properties` milik instance secara langsung. Berkas `server-default.properties` yang dibuat oleh FlyEnv tersedia sebagai acuan konfigurasi bawaan. Ubah listener atau pengaturan broker di sini, lalu mulai ulang layanan agar perubahan diterapkan.

![Editor server.properties Kafka dengan listener KRaft lokal dan pengaturan penyimpanan](https://oss.macphpstudy.com/image/features/plugin/kafka-configuration.png)

Tab **Log** membuka `server.log` jika tersedia, atau beralih ke log kesalahan maupun keluaran saat startup. Periksa berkas ini jika broker gagal berjalan, runtime Java tidak sesuai, atau aplikasi tidak dapat terhubung.

## Catatan kompatibilitas

Plugin tersedia untuk macOS, Windows, dan Linux. Fungsinya mengelola broker KRaft lokal, bukan menyiapkan cluster produksi terdistribusi. Kompatibilitas distribusi Kafka dan JDK tetap bergantung pada rilis yang dipasang; pemilih Java dalam plugin mensyaratkan minimal Java 17.

Jelajahi [Pasar Plugin](/id/features/plugin-market) untuk modul tambahan lainnya, atau lihat integrasi antrean pesan [RabbitMQ](/id/features/rabbitmq) di FlyEnv.
