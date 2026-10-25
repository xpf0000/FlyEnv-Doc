---
layout: doc
titleTemplate: false
title: 'Pasar Plugin FlyEnv: Tambahkan Modul Sesuai Kebutuhan'
description: 'Tambahkan cluster MySQL dan MariaDB, Kafka, llama.cpp, OpenSearch, SQL Server, Dameng DM8, serta pintasan perintah melalui Pasar Plugin FlyEnv.'
---

# Pasar Plugin FlyEnv

Pasar Plugin memungkinkan Anda menambahkan modul sesuai kebutuhan proyek. Alat yang dipasang dapat dikelola bersama runtime dan layanan yang sudah ada. Sebuah plugin dapat menyediakan kontrol layanan, pengelolaan versi, editor konfigurasi, serta tampilan khusus untuk fitur yang ditawarkannya.

Buka **Settings → Plugin Market** untuk melihat plugin resmi, mengelola plugin yang terpasang, atau menambahkan sumber pihak ketiga.

![Plugin resmi di Pasar Plugin FlyEnv dengan tombol instal, instal ulang, dan pembaruan](https://oss.macphpstudy.com/image/features/plugin/plugin-market-official.png)

## Plugin yang tersedia

Modul tambahan ini mencakup layanan lokal, inferensi AI, dan tugas terminal sehari-hari:

- **[MySQL Cluster](/id/features/mysql-cluster):** jalankan instans mandiri pada port berbeda, buat grup replikasi GTID source/replica, atau gunakan Group Replication dengan satu primary.
- **[MariaDB Cluster](/id/features/mariadb-cluster):** jalankan instans mandiri dan buat grup replikasi GTID source/replica dengan konfigurasi, log, dan pengelolaan data per instans.
- **[Kafka](/id/features/kafka):** jalankan broker KRaft lokal, pilih runtime Java, serta buat atau hapus topik langsung di FlyEnv.
- **[llama.cpp](/id/features/llama-cpp):** kelola runtime inferensi, unduh model GGUF, dan sediakan model melalui API lokal yang kompatibel dengan OpenAI.
- **[OpenSearch](/id/features/opensearch):** kelola layanan pencarian, edit konfigurasi, dan buka OpenSearch Dashboards dengan versi yang sesuai untuk pengembangan lokal.
- **[SQL Server](/id/features/mssql):** instal dan kendalikan Microsoft SQL Server pada Windows x64 dan rilis Ubuntu yang didukung, dengan pengaturan serta tampilan log sesuai platform.
- **[Dameng DM8](/id/features/dameng):** instal DM8, inisialisasi database, lalu kelola layanan, konfigurasi, dan log pada Windows x64 atau Ubuntu 22.04.
- **[Pintasan Perintah](/id/features/command-shortcuts):** simpan perintah dalam kartu folder, atur urutannya, dan jalankan di terminal sistem pada direktori folder tersebut.

Halaman setiap plugin menjelaskan kontrol yang ditambahkan dan persyaratan platform perangkat lunak yang dikelolanya.

### Plugin cluster database

MySQL Cluster dan MariaDB Cluster menyediakan tampilan khusus untuk instans, melengkapi modul database bawaan FlyEnv. Gunakan kembali versi database yang sudah terpasang untuk membuat instans lokal baru dengan port dan direktori data terpisah, lalu kontrol satu anggota atau seluruh grup melalui plugin. MySQL Cluster juga menyediakan Group Replication, sedangkan MariaDB Cluster menawarkan instans mandiri dan replikasi source/replica.

![MySQL Cluster dan MariaDB Cluster bersama plugin resmi lain di Pasar Plugin FlyEnv](https://oss.macphpstudy.com/image/features/plugin/plugin-market-clusters.webp)

## Instal plugin terlebih dahulu, lalu runtime-nya

Pada tab **Official**, perbarui daftar dan klik **Install** pada kartu plugin. Setiap kartu menampilkan deskripsi, pembuat, dan versi plugin. Instalasi dan pembaruan plugin memerlukan [lisensi FlyEnv](/id/license) yang aktif.

Setelah terpasang dan diaktifkan, plugin menambahkan modulnya ke bilah samping. Untuk plugin layanan, buka modul tersebut dan instal perangkat lunak yang dikelolanya, misalnya distribusi Kafka, runtime llama.cpp, atau mesin database. Paket plugin dan runtime memiliki versi masing-masing; memperbarui plugin berarti memperbarui integrasinya dengan FlyEnv. Pintasan Perintah menggunakan terminal sistem yang sudah ada sehingga tidak memerlukan runtime layanan terpisah.

Perubahan plugin biasanya langsung diterapkan pada antarmuka dan backend tanpa perlu memulai ulang aplikasi. Jika perubahan tertentu memerlukan mulai ulang, FlyEnv akan menampilkan pemberitahuan.

## Memperbarui dan mengelola plugin

Kartu menampilkan **Update** ketika tersedia versi baru dan **Reinstall** untuk versi yang sudah terpasang. Buka tab **Installed** untuk melihat versi terpasang dan status aktifnya.

- **Enable:** tampilkan modul plugin di ruang kerja.
- **Disable:** hentikan layanan yang dikelola plugin dan keluarkan modul aktif dari antarmuka, sambil tetap menyimpan instalasi plugin.
- **Uninstall:** setelah dikonfirmasi, hentikan layanan yang dikelola plugin dan hapus berkas instalasi plugin.

Kontrol ini mengelola integrasi dengan FlyEnv. Runtime dan model tetap dikelola melalui halaman modul masing-masing.

## Sumber pihak ketiga

Tab **Third-party sources** menerima URL berkas registri plugin dalam format JSON. Tambahkan sumber untuk menemukan plugin di dalamnya, membaca deskripsi, dan memilih modul yang ingin dipasang. Sumber yang sudah ditambahkan juga dapat dihapus dari tab ini.

Plugin pihak ketiga dapat mengakses berkas lokal, proses, dan jaringan. Karena itu, FlyEnv menampilkan peringatan dan meminta konfirmasi sebelum memasang dari sumber yang belum pernah Anda setujui. Gunakan sumber yang Anda percayai.

## Plugin atau Modul Pengguna?

Pilih plugin jika Anda memerlukan integrasi siap pakai dengan antarmuka dan operasi khusus. Gunakan **[Modul Pengguna](/id/features/user-modules)** untuk menentukan perintah atau skrip sendiri, mengaitkan berkas konfigurasi dan log, serta mengelola siklus hidupnya tanpa menulis plugin.

Keduanya memperluas ruang kerja; Pasar Plugin menjadi tempat untuk menemukan dan memelihara integrasi siap pakai. Kembali ke [ikhtisar fitur](/id/features#plugins) untuk melihat pilihan plugin saat ini.
