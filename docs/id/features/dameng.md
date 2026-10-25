---
layout: doc
titleTemplate: false
title: 'Plugin Dameng DM8: Instalasi dan Inisialisasi Database | FlyEnv'
description: 'Instal Dameng DM8, inisialisasi database, serta kelola layanan, konfigurasi, dan log di FlyEnv pada Windows x64 dan Ubuntu 22.04.'
---

# Dameng DM8 di FlyEnv

Plugin Dameng DM8 menyatukan instalasi database, inisialisasi, dan kontrol layanan native di FlyEnv. Modulnya menyediakan tab **Service**, **Version Manager**, **Config File**, dan **Log**, serta informasi versi dan lisensi instance.

Instal **Dameng DM8** melalui **[Settings → Plugin Market](/id/features/plugin-market)**. Plugin mendukung **Windows x64 native** dan **Ubuntu 22.04 x64**. Build ini tidak mendukung macOS, ARM64, maupun rilis Linux lainnya.

## Memilih direktori instalasi

Buka **Version Manager**, klik **Install**, lalu pilih atau masukkan direktori akhir untuk program. Setiap nama folder dalam jalur, termasuk seluruh direktori induk, hanya boleh memakai **huruf Latin, angka, dan garis bawah**. Installer tidak mendukung spasi, karakter Han, titik, atau tanda hubung.

Direktori tujuan harus kosong. FlyEnv memeriksa lokasi dan ruang kosong sebelum mengunduh paket resmi. Unduhan dimulai setelah dialog dikonfirmasi; membatalkannya tidak memulai unduhan. Setelah instalasi selesai, FlyEnv otomatis menambahkan jalur tersebut ke **Custom version directories** agar database muncul dalam daftar layanan.

Data database disimpan terpisah dari direktori program, di dalam direktori data FlyEnv. Pembatasan jalur instalasi program tidak mengharuskan Anda mengganti nama direktori data FlyEnv.

![Version Manager Dameng DM8 dengan rilis Windows x64 yang sudah terpasang](https://oss.macphpstudy.com/image/features/plugin/dameng-versions.png)

## Menginisialisasi database

Menjalankan instalasi yang belum diinisialisasi akan membuka dialog inisialisasi. Anda juga dapat memilih **Initialize database** dari menu tindakan layanan. Membatalkan inisialisasi tidak menjalankan database.

Dialog tersebut memuat:

- **Kata sandi SYSDBA dan SYSAUDITOR:** kredensial terpisah yang wajib diisi untuk akun administrator database dan akun audit, masing-masing dengan tombol **Generate**.
- **Port:** port listener database.
- **Ukuran page, ukuran extent, set karakter, dan sensitivitas huruf besar/kecil:** opsi pembuatan database yang tidak dapat diganti dengan menginisialisasi ulang data yang sudah ada.
- **Pengaturan sumber daya pengembangan:** ukuran buffer dan redo log, disertai perkiraan kebutuhan penyimpanan awal.

Periksa nilainya sebelum mengonfirmasi. FlyEnv menginisialisasi database satu kali lalu melanjutkan startup setelah berhasil. Database yang sudah ada tidak ditimpa untuk menerapkan opsi pembuatan yang baru.

## Kontrol layanan dan kredensial sesi

Gunakan **Service** untuk memulai, menghentikan, atau memulai ulang instalasi yang dikelola plugin. Windows menggunakan layanan DM8 native, sedangkan Ubuntu menjalankan database sebagai pengguna saat ini.

![Tab Service Dameng DM8 dengan instance Windows yang berjalan, jalur program, dan kontrol layanan](https://oss.macphpstudy.com/image/features/plugin/dameng-service.png)

Kata sandi hanya disimpan selama sesi FlyEnv saat ini. Setelah memulai ulang FlyEnv, masukkan kembali **kata sandi SYSDBA saat ini** ketika diminta, atau buka **Session credentials / initialization defaults** dari toolbar layanan. Mengisi kata sandi di sini memberikan kredensial untuk pemeriksaan startup dan kueri; tindakan ini tidak mengubah akun database.

![Dialog kredensial sesi dan nilai bawaan inisialisasi Dameng DM8](https://oss.macphpstudy.com/image/features/plugin/dameng-session-settings.png)

Tindakan **Version / license information** menanyakan versi dan tanggal kedaluwarsa lisensi kepada database yang sedang berjalan. Jalankan instance dan sediakan kata sandi SYSDBA saat ini sebelum meminta informasi tersebut.

## Konfigurasi, log, dan penghapusan

Tab **Config File** mengedit `dm.ini` dari instance yang sudah diinisialisasi. Tab **Log** menampilkan diagnostik database dan startup. Jika instalasi atau inisialisasi melaporkan hasil yang belum tuntas, periksa berkas serta log sebelum mencoba lagi pada direktori yang sama.

![Editor dm.ini Dameng DM8 dengan konfigurasi instance dan jalur data](https://oss.macphpstudy.com/image/features/plugin/dameng-configuration.png)

Menghapus versi terpasang melalui **Version Manager** menjalankan uninstaller resmi setelah instance dihentikan. Berkas database tetap disimpan. Menonaktifkan atau menghapus plugin FlyEnv juga tidak menghapus program database maupun datanya.

## Persyaratan platform

Instalasi dan pendaftaran layanan di Windows memerlukan **persetujuan UAC**. Instalasi Ubuntu memerlukan sesi desktop dengan **udisks2**, `udisksctl`, dan `findmnt` untuk memasang media instalasi resmi; instalasi tanpa lingkungan desktop belum tersedia. Plugin saat ini mengelola satu instalasi miliknya sendiri dan tidak menjamin dapat digunakan bersamaan dengan instalasi DM8 eksternal.

Kembali ke **[Pasar Plugin](/id/features/plugin-market)** untuk modul tambahan lainnya, atau bandingkan dengan integrasi **[SQL Server](/id/features/mssql)** di FlyEnv.
