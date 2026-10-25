---
layout: doc
titleTemplate: false
title: 'Plugin OpenSearch: Pencarian Lokal dan Dashboards | FlyEnv'
description: 'Instal versi OpenSearch, kelola layanan pencarian lokal, edit konfigurasi, dan buka OpenSearch Dashboards dengan versi yang sesuai melalui FlyEnv.'
---

# OpenSearch di FlyEnv

[OpenSearch](https://docs.opensearch.org/latest/install-and-configure/install-opensearch/index/) adalah mesin pencarian dan analitik. Plugin OpenSearch di FlyEnv menyediakan pengelolaan versi, kontrol layanan, editor konfigurasi, dan log, ditambah mode pengembangan lokal serta cara terintegrasi untuk menjalankan OpenSearch Dashboards.

Instal **OpenSearch** melalui **[Settings → Plugin Market](/id/features/plugin-market)**, lalu buka modulnya dari bilah samping. Tab yang tersedia adalah **Service**, **Version Manager**, **Config File**, dan **Log**.

## Pengelolaan versi

Gunakan **Version Manager** untuk memasang dan menyimpan beberapa versi OpenSearch, lalu pilih versi yang akan dijalankan pada tab **Service**.

- **macOS:** instal melalui Homebrew. Tab paket statis tidak ditampilkan karena OpenSearch tidak menyediakan distribusi resmi untuk macOS.
- **Linux dan Windows:** gunakan distribusi statis yang tersedia. Pilihan versi dan arsitektur bergantung pada paket yang diterbitkan upstream.
- **Instalasi khusus:** modul dapat memindai direktori yang telah dikonfigurasi untuk menemukan instalasi OpenSearch yang sudah ada.

![Daftar versi OpenSearch di FlyEnv dengan rilis terpasang dan rilis yang dapat diinstal](https://oss.macphpstudy.com/image/features/plugin/opensearch-versions.png)

Mulai, hentikan, atau mulai ulang versi terpilih melalui kontrol layanan standar FlyEnv. Sakelar di bilah samping dan menu tray juga menyediakan akses ke status layanan.

![Tab Service OpenSearch dengan instance lokal yang berjalan dan kontrol layanan](https://oss.macphpstudy.com/image/features/plugin/opensearch-service.png)

## Mengedit konfigurasi di FlyEnv

Tab **Config File** membuka tiga berkas untuk instalasi yang dipilih:

- **`opensearch.yml`:** pengaturan node, cluster, jaringan, dan keamanan.
- **`jvm.options`:** pengaturan JVM, termasuk konfigurasi heap.
- **`log4j2.properties`:** konfigurasi pencatatan log.

FlyEnv menemukan lokasi konfigurasi untuk instalasi dari arsip maupun Homebrew, sehingga editor membuka berkas yang benar-benar digunakan layanan. Instalasi Homebrew dapat berbagi konfigurasi melalui direktori tertautnya. Setelah menyimpan pengaturan yang memerlukan mulai ulang, mulai ulang OpenSearch agar perubahan diterapkan.

![Editor konfigurasi OpenSearch dengan tab opensearch.yml, jvm.options, dan log4j2.properties](https://oss.macphpstudy.com/image/features/plugin/opensearch-configuration.png)

## Mode pengembangan lokal

Tampilan pengaturan umum untuk **`opensearch.yml`** memiliki sakelar **Local Development Mode**. Mengaktifkannya akan menonaktifkan plugin keamanan OpenSearch dan menggunakan HTTP tanpa autentikasi. Node dengan port HTTP bawaan kemudian dapat diakses melalui port 9200.

FlyEnv mengubah pengaturan keamanan bawaan menjadi komentar dan menyimpannya agar dapat dipulihkan ketika mode ini dimatikan. Tersedia tindakan mulai ulang agar perubahan dapat diterapkan.

Gunakan mode ini hanya pada jaringan pengembangan lokal yang tepercaya. Mematikannya akan mengaktifkan kembali plugin keamanan. Startup dengan keamanan aktif mengikuti persyaratan rilis OpenSearch yang terpasang, termasuk kata sandi admin awal jika diwajibkan.

## Membuka Dashboards dengan versi yang sesuai

Setelah versi OpenSearch yang valid berjalan dalam mode pengembangan lokal, klik **Open Dashboards** pada tab **Service**. FlyEnv memeriksa backend yang sedang berjalan, memasang versi Dashboards yang sesuai jika diperlukan, menjalankannya, lalu membuka antarmukanya di browser.

Pada Linux dan Windows, Dashboards dipasang dari paket upstream. Pada macOS, plugin mencari versi Homebrew yang sesuai dan memerlukan Node.js untuk menyiapkan Dashboards. Jika versi yang cocok tidak tersedia, plugin melaporkan masalah tersebut alih-alih menjalankan versi yang tidak cocok.

Dashboards mendengarkan pada alamat lokal menggunakan port 5601 atau port lain yang tersedia. Siklus hidupnya mengikuti layanan OpenSearch: menghentikan backend juga menghentikan Dashboards yang dikelolanya.

Peluncur ini saat ini hanya mendukung mode pengembangan lokal melalui HTTP. Cluster OpenSearch dengan autentikasi atau TLS tidak didukung oleh integrasi peluncur Dashboards ini.

## Log dan kompatibilitas

Tab **Log** menemukan log node berdasarkan pengaturan `path.logs` dan `cluster.name`, termasuk tata letak instalasi Homebrew. Periksa log ketika node gagal berjalan atau perubahan konfigurasi menimbulkan kesalahan.

Plugin tersedia untuk macOS, Windows, dan Linux. Ketersediaan runtime serta Dashboards tetap bergantung pada platform dan rilis yang dipilih. Modul ini mengelola layanan lokal beserta antarmuka pendampingnya, bukan menyiapkan cluster produksi.

Bandingkan dengan integrasi [Elasticsearch](/id/features/elasticsearch) di FlyEnv, atau kembali ke [Pasar Plugin](/id/features/plugin-market) untuk menjelajahi modul tambahan lainnya.
