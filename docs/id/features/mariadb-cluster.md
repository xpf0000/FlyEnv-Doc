---
layout: doc
titleTemplate: false
title: 'Plugin MariaDB Cluster: Multiinstans dan Replikasi GTID | FlyEnv'
description: 'Jalankan beberapa instans MariaDB lokal pada port berbeda dan buat grup replikasi GTID dengan konfigurasi, log, serta pengelolaan data per instans di FlyEnv.'
---

# MariaDB Cluster di FlyEnv

Plugin MariaDB Cluster menjalankan beberapa instans MariaDB secara bersamaan pada port yang berbeda. Sediakan database mandiri untuk tiap proyek atau buat grup replikasi GTID source/replica. Setiap anggota memiliki konfigurasi, log, dan direktori data tersendiri.

Instal **MariaDB Cluster** dari **[Settings → Plugin Market](/id/features/plugin-market)**. Tab **MariaDB instances**, **Services**, dan **Versions** tersedia pada macOS, Windows, dan Linux. Versi database yang bisa diinstal bergantung pada platform dan sumber instalasinya.

![MariaDB Cluster dalam Pasar Plugin FlyEnv beserta kontrol instalasinya](https://oss.macphpstudy.com/image/features/plugin/mariadb-cluster-market.webp)

## Beberapa instans dari versi MariaDB yang sudah terpasang

Gunakan **Versions** untuk memasang MariaDB dari sumber instalasi FlyEnv yang tersedia, lalu pilih instalasinya saat membuat instans. Plugin memerlukan **MariaDB 10.4 atau lebih baru**. Beberapa instans dapat berbagi satu instalasi program dengan direktori data terpisah. Instans mandiri dapat memilih versi yang berbeda. Instalasi MySQL tidak dapat digunakan sebagai mesin MariaDB.

Tab **Services** menampilkan instalasi database, sedangkan **MariaDB instances** menyediakan kontrol mulai, berhenti, dan mulai ulang untuk database yang dibuat oleh plugin. Instalasi yang masih dipakai oleh instans berjalan tidak dapat dihapus melalui plugin.

![Daftar instans MariaDB Cluster dengan satu database mandiri dan grup source/replica](https://oss.macphpstudy.com/image/features/plugin/mariadb-cluster-instances.webp)

## Membuat database mandiri

Klik **Create**, pilih **Standalone**, isi **Cluster name**, pilih **MariaDB version**, lalu tentukan **Root password** awal. Periksa **Instance name**, **TCP port**, **Socket** pada macOS/Linux atau **Named pipe** pada Windows, dan **Data directory** yang dihasilkan. Masukkan jalur data langsung atau pilih melalui tombol folder.

Formulir menampilkan penyebab kesalahan di dekat kolom terkait, termasuk kolom wajib yang belum diisi, nama duplikat, benturan port atau alamat koneksi lokal, serta direktori data yang tumpang tindih. Setiap instans harus memiliki direktori data dan alamat koneksi tersendiri.

![Formulir instans MariaDB mandiri dengan pilihan versi, kata sandi root, dan pengaturan instans](https://oss.macphpstudy.com/image/features/plugin/mariadb-cluster-create-standalone.webp)

Plugin membuat **database lokal kosong yang baru**, tanpa mengimpor atau mengkloning database yang sudah ada. Hentikan instans sebelum mengeditnya. Nama, port, dan alamat koneksi lokal dapat diubah, tetapi direktori data yang sudah diinisialisasi, versi mesin, dan topologi tidak dapat diganti melalui formulir. Direktori kosong yang belum diinisialisasi masih dapat diubah.

## Satu source dengan beberapa replika GTID

Pilih **Source / replica** dan tentukan jumlah replika, dari **1 hingga 15**. Semua anggota harus memakai **instalasi MariaDB yang sama**. Periksa port, Socket atau named pipe, dan direktori data setiap anggota sebelum mengonfirmasi.

FlyEnv menyiapkan replikasi GTID, akun replikasi, replika hanya-baca, dan kanal replikasi. Daftar instans menampilkan peran source dan replica beserta status proses dan keterlambatan replikasi.

![Formulir replikasi MariaDB source/replica dengan jumlah replika serta port dan direktori setiap anggota](https://oss.macphpstudy.com/image/features/plugin/mariadb-cluster-create-replication.webp)

MariaDB melanjutkan kanal replikasi yang tersimpan setelah mulai ulang. Untuk konfigurasi atau pemulihan secara eksplisit, jalankan semua anggota, pilih **Configure / recover replication**, lalu berikan kredensial root saat ini. Operasi mulai, berhenti, dan mulai ulang proses sehari-hari tidak memerlukan login database.

Plugin menyediakan mode mandiri dan replikasi GTID source/replica. Plugin tidak mengonfigurasi Galera, tidak otomatis mempromosikan replika, dan tidak menyediakan router atau satu port koneksi bersama. Semua anggota berada pada satu mesin, sehingga grup lokal tidak melindungi dari kegagalan mesin tersebut. Untuk Group Replication MySQL dengan satu primary, gunakan **[MySQL Cluster](/id/features/mysql-cluster)**.

## Kontrol, konfigurasi, dan log per instans

Mulai, hentikan, atau mulai ulang satu database dari barisnya, atau gunakan kontrol di bagian atas grup untuk seluruh anggota. Sakelar di bilah samping mengontrol semua instans MariaDB Cluster. Progres operasi muncul pada tombol terkait. Kolom **State** menunjukkan status proses, terpisah dari kesehatan replikasi.

Menu tindakan membuka konfigurasi, log kesalahan, log kueri lambat, informasi koneksi, dan **Data management** untuk instans yang dipilih. Perubahan konfigurasi berlaku setelah mulai ulang berikutnya. Pengaturan identitas dan replikasi yang dikelola plugin tetap dilindungi. Klik alamat Socket untuk menyalinnya ke klien lokal.

Pengelolaan data mencakup daftar database dan pengguna, pembuatan database dan pemberian hak akses, perubahan kata sandi, catatan, direktori cadangan, serta ekspor database yang dipilih. Lakukan operasi tulis pada source; plugin tetap mempertahankan batasan hanya-baca pada replika. Kredensial terpisah untuk setiap instans dan dapat disimpan pada perangkat jika Anda memilihnya. Jika tidak, kata sandi root instans baru hanya tersimpan selama sesi berjalan.

### Menjelajahi database dengan DbGate

Saat ada instans berjalan, klik ikon DbGate di samping judul tampilan instans untuk membuka panel database bersama FlyEnv di browser. Panel memerlukan runtime **Node.js** yang sudah terpasang dan dapat digunakan, meskipun modul Node.js disembunyikan. Jika DbGate belum tersedia, pembukaan panel memulai instalasinya; instalasi global yang sudah ada langsung digunakan kembali.

Panel ini dipakai bersama oleh MariaDB Cluster, MongoDB, dan MySQL Cluster. Menghentikan instans MariaDB Cluster terakhir akan menutup panel global. Buka kembali dari modul lain saat diperlukan.

## File database tetap ada setelah penghapusan

Setelah Anda mengonfirmasi penghapusan instans atau grup, plugin menghentikan anggota terkait dan menghapus catatan pengelolaannya. **File database tetap disimpan**, bersama konfigurasi dan log yang dapat diperiksa. Menghapus instalasi mesin melalui plugin juga tidak menghapus database instans. Jika operasi terputus, periksa file tersimpan dan hasil setiap anggota sebelum mencoba lagi.

Untuk alur kerja standar dengan satu layanan, lihat **[modul MariaDB](/id/features/mariadb)** bawaan. Kembali ke **[Pasar Plugin](/id/features/plugin-market)** untuk memperbarui, menonaktifkan, atau menghapus integrasi plugin.
