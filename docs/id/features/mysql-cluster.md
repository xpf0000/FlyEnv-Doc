---
layout: doc
titleTemplate: false
title: 'Plugin MySQL Cluster: Multiinstans dan Replikasi | FlyEnv'
description: 'Jalankan beberapa instans MySQL lokal, buat grup replikasi GTID source/replica, dan kelola Group Replication dengan satu primary melalui FlyEnv.'
---

# MySQL Cluster di FlyEnv

Plugin MySQL Cluster memungkinkan beberapa instans MySQL lokal berjalan bersamaan. Setiap instans memiliki port, Socket atau named pipe Windows, direktori data, konfigurasi, dan log sendiri. Gunakan untuk database mandiri, grup replikasi GTID source/replica, atau Group Replication dengan satu primary.

Instal **MySQL Cluster** dari **[Settings → Plugin Market](/id/features/plugin-market)**. Modul ini menyediakan tab **MySQL instances**, **Services**, dan **Versions** pada macOS, Windows, dan Linux. Versi database yang bisa diinstal bergantung pada platform dan sumber instalasinya.

![Daftar instans MySQL Cluster dengan beberapa versi mandiri dan grup source/replica yang sedang berjalan](https://oss.macphpstudy.com/image/features/plugin/mysql-cluster-instances.webp)

## Video demo

Lihat cara FlyEnv menyiapkan lingkungan MySQL source/replica lokal, lalu periksa sinkronisasi, ketertinggalan replikasi, dan proses mengejar data melalui DbGate serta aplikasi demo pesanan terpisah.

<iframe style="width: 100%; aspect-ratio: 16 / 9;" src="https://www.youtube-nocookie.com/embed/ExFupRsveuM?rel=0" title="Menyiapkan replikasi MySQL lokal dengan FlyEnv" loading="lazy" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Tonton di [YouTube](https://www.youtube.com/watch?v=ExFupRsveuM) atau [Bilibili](https://www.bilibili.com/video/BV1QtHw67EE9/).

## Gunakan kembali versi MySQL yang sudah terpasang

Tab **Versions** menggunakan sumber instalasi MySQL yang sudah tersedia di FlyEnv. Instal versi dari tab ini atau pilih instalasi yang sudah ada saat membuat instans. Beberapa instans dapat memakai satu instalasi program dengan file database yang terpisah. Instans mandiri yang berbeda juga dapat menggunakan versi MySQL yang berbeda.

Tab **Services** menampilkan instalasi database, sedangkan kontrol instans berada di **MySQL instances**. Jika suatu versi masih dipakai oleh instans cluster yang berjalan, hentikan instans tersebut sebelum menghapus instalasinya melalui plugin.

## Membuat instans mandiri

Klik **Create**, lalu pilih mode **Standalone**. Isi **Cluster name**, pilih **MySQL version**, tentukan **Root password** awal, lalu periksa pengaturan instans yang dibuat otomatis:

- **Instance name** dan **TCP port** membedakan database yang akan Anda hubungi.
- **Socket** pada macOS/Linux atau **Named pipe** pada Windows memberikan alamat koneksi lokal tersendiri untuk setiap instans.
- **Data directory** dapat diisi langsung atau dipilih melalui tombol folder.

Formulir memeriksa nama, benturan port, Socket atau named pipe, serta direktori data yang saling tumpang tindih. Mode mandiri mendukung instalasi MySQL 5.7 yang menyediakan `--initialize-insecure`, serta versi lebih baru yang didukung.

![Formulir instans MySQL mandiri dengan pilihan versi, port, Socket, dan direktori data](https://oss.macphpstudy.com/image/features/plugin/mysql-cluster-create-standalone.webp)

Pembuatan instans menginisialisasi database kosong yang baru, tanpa mengimpor, mengkloning, atau menimpa database yang sudah ada. Hentikan instans sebelum mengeditnya. Direktori data yang sudah diinisialisasi dan versi mesin database yang dipilih tidak dapat diganti melalui formulir ini.

## Membuat grup replikasi GTID source/replica

Pilih mode **Source / replica**, tentukan instalasi MySQL dan jumlah replika. Plugin menyiapkan satu sumber replikasi dan **1 hingga 15 replika**, termasuk konfigurasi GTID, akun replikasi, replika hanya-baca, dan kanal replikasi.

Semua anggota harus memakai **instalasi yang sama**, dengan **MySQL 8.0.13 atau lebih baru**. Sebelum membuat grup, periksa nama, port, Socket atau named pipe, dan direktori data yang dihasilkan untuk setiap anggota.

![Formulir replikasi MySQL source/replica dengan jumlah replika dan pengaturan koneksi setiap anggota](https://oss.macphpstudy.com/image/features/plugin/mysql-cluster-create-replication.webp)

Daftar instans menampilkan peran source dan replica beserta keterlambatan replikasi. Operasi mulai, berhenti, dan mulai ulang sehari-hari menggunakan status proses dan tidak memerlukan kredensial root. Setelah mulai ulang, MySQL melanjutkan kanal replikasi yang tersimpan. Untuk mengatur atau memperbaiki replikasi secara eksplisit, misalnya setelah mengganti port source, jalankan semua anggota lalu pilih **Configure / recover replication** dan masukkan kredensial root saat ini untuk setiap anggota.

Grup source/replica tidak otomatis menjadikan replika sebagai source saat source berhenti.

## Group Replication dengan satu primary

Pilih **Group Replication** untuk membuat **3, 5, 7, atau 9 anggota lokal**. Mode ini memerlukan **MySQL 8.0.27 atau lebih baru**, dengan plugin Group Replication yang benar-benar tersedia dalam instalasi tersebut. FlyEnv memakai mode single-primary dan komunikasi XCom. Port SQL dan port komunikasi GR setiap anggota harus unik.

![Formulir MySQL Group Replication dengan jumlah node serta port SQL dan komunikasi GR yang terpisah](https://oss.macphpstudy.com/image/features/plugin/mysql-cluster-create-group-replication.webp)

MySQL menangani pemilihan primary dalam grup yang sedang berjalan. FlyEnv menampilkan peran anggota dan menyediakan **Configure / recover replication** untuk pemulihan setelah anggota keluar atau seluruh grup berhenti. Jalankan semua anggota dan berikan kredensial root sebelum pemulihan. Plugin membandingkan riwayat transaksi anggota dan menolak bootstrap yang tidak aman jika riwayat menyimpang atau status anggota tidak dapat dipastikan. Anggota yang belum bergabung kembali tetap hanya-baca setelah mulai ulang.

Grup ini ditujukan untuk pengembangan lokal: semua node berada pada satu mesin dan ikut terdampak jika mesin tersebut gagal. Plugin tidak menyediakan MySQL Router atau satu alamat koneksi bersama; hubungkan klien ke port anggota yang sesuai. Plugin ini juga tidak membuat NDB Cluster atau deployment lintas mesin.

## Mengontrol instans dan mengelola data

Gunakan tombol pada baris instans untuk memulai, menghentikan, atau memulai ulang satu instans. Tombol di bagian atas grup berlaku untuk seluruh anggotanya, sedangkan sakelar di bilah samping memulai atau menghentikan semua instans plugin. Kolom **State** menunjukkan apakah proses berjalan; kesehatan replikasi dinilai secara terpisah.

Menu tindakan setiap instans menyediakan:

- **Edit configuration**, dengan perubahan yang berlaku pada mulai ulang berikutnya. Pengaturan identitas instans dan replikasi yang dikelola plugin tetap dilindungi.
- **Error log** dan **Slow query log** untuk instans tersebut.
- **Connection information**, serta alamat Socket yang bisa diklik untuk disalin.
- **Data management**, untuk melihat database dan pengguna, membuat database dan memberikan hak akses, mengganti kata sandi, menambahkan catatan, memilih direktori cadangan, dan mengekspor database yang dipilih.

Operasi tulis harus dilakukan pada source yang dapat ditulis atau primary saat ini. Batasan hanya-baca pada anggota lain tetap berlaku. Kredensial root terpisah untuk setiap instans. Kata sandi baru hanya tersimpan dalam sesi, kecuali Anda secara khusus memilih untuk menyimpan kredensial pada perangkat.

### Membuka DbGate di browser

Saat ada instans yang berjalan, ikon DbGate di samping judul tampilan instans membuka panel browser. Anda memerlukan runtime **Node.js** yang sudah terpasang dan dapat digunakan; modul Node.js boleh tetap disembunyikan dari bilah samping. Pada pembukaan pertama, DbGate dipasang jika belum tersedia. Pembukaan berikutnya menggunakan instalasi bersama milik FlyEnv.

![Panel DbGate di browser terhubung ke instans MySQL lokal dengan sebuah tabel terbuka](https://oss.macphpstudy.com/image/features/plugin/mysql-cluster-dbgate.webp)

Panel ini dipakai bersama oleh MongoDB dan MariaDB Cluster. Menghentikan instans MySQL Cluster terakhir akan menutup panel global; modul lain dapat membukanya kembali saat diperlukan.

## Menghapus grup tanpa menghapus file database

Setelah Anda mengonfirmasi penghapusan instans atau grup, plugin menghentikan anggota terkait lalu menghapus catatan pengelolaannya. **File database tetap disimpan**, bersama konfigurasi dan log yang masih dapat diperiksa. Menghapus instalasi database melalui plugin juga tidak menghapus database instans. Jika suatu operasi terputus, periksa file yang tersimpan dan hasil tiap anggota sebelum mencoba lagi.

Untuk instans MariaDB dan replikasi GTID, gunakan **[MariaDB Cluster](/id/features/mariadb-cluster)**. Kembali ke **[Pasar Plugin](/id/features/plugin-market)** untuk mengelola integrasinya.
