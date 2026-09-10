---
title: 'Kelola Pengguna dan Kata Sandi Database'
head:
  - - meta
    - name: description
      content: 'Kelola pengguna dan kata sandi MySQL, MariaDB, PostgreSQL, serta MongoDB di FlyEnv, termasuk pembuatan database dan pengaturan ulang kata sandi.'
---

# Manajemen Pengguna Database & Konfigurasi Kata Sandi di FlyEnv

Mengelola pengguna dan kata sandi database adalah bagian penting dari pengembangan lokal. FlyEnv menyederhanakannya dengan alat manajemen bawaan untuk semua database yang didukung, tanpa memerlukan command line untuk pekerjaan umum.

## Kata Sandi Akun Awal

Saat pertama kali memasang database melalui FlyEnv, kredensial bawaan berikut digunakan demi keamanan dan kemudahan:

| Database | Nama pengguna | Kata sandi awal |
| --- | --- | --- |
| **MySQL** | root | root |
| **MariaDB** | root | root |
| **PostgreSQL** | root | Tidak ada (tanpa kata sandi secara bawaan) |
| **MongoDB** | - | Tidak ada (tanpa autentikasi secara bawaan) |

**Penting:** ubah kata sandi bawaan sebelum mengekspos database ke jaringan.

## Antarmuka Manajemen Database Bawaan (MySQL & MariaDB)

FlyEnv menyediakan antarmuka manajemen yang kuat untuk MySQL dan MariaDB, sehingga operasi umum tidak memerlukan alat eksternal.

### Membuka Antarmuka Manajemen

1. Buka modul **MySQL** atau **MariaDB** di FlyEnv.
2. Klik menu popover **Manage**.
3. Antarmuka manajemen akan dimuat otomatis.

![Antarmuka manajemen database](https://oss.macphpstudy.com/image/database-1.webp)

### Operasi Database Sekali Klik

#### Membuat Database Baru

Buat database tanpa menulis SQL:

1. Klik **Create Database**.
2. Masukkan nama database.
3. Masukkan nama pengguna database.
4. Pilih character set, disarankan `utf8mb4`.
5. Klik **Save**.

Database langsung siap dipakai aplikasi Anda.

![Dialog membuat database](https://oss.macphpstudy.com/image/database-2.webp)

#### Mengatur Ulang Kata Sandi Root

Jika lupa kata sandi root, atur ulang dalam satu klik:

1. Klik **Reset Root Password**.
2. Masukkan kata sandi baru.
3. Konfirmasikan kata sandi.
4. Klik **Update**.

Anda tidak perlu menghentikan layanan atau mengubah berkas konfigurasi secara manual.

![Mengatur ulang kata sandi root](https://oss.macphpstudy.com/image/database-3.webp)

### Mengapa Memakai Antarmuka Bawaan?

| Tugas | Command line | Antarmuka FlyEnv |
| --- | --- | --- |
| Membuat database | Menulis dan menjalankan SQL | 2 klik |
| Mengatur ulang kata sandi root | Hentikan layanan, ubah berkas, mulai ulang | 1 klik |
| Melihat daftar pengguna | Query SQL | Tampilan otomatis |
| Mengubah kata sandi pengguna | Query SQL | 1 klik |

Operasi yang sebelumnya membutuhkan beberapa perintah sekarang hanya membutuhkan beberapa detik.

## Klien Database Eksternal

Antarmuka bawaan FlyEnv memenuhi sebagian besar kebutuhan, tetapi untuk operasi yang rumit Anda mungkin memilih klien khusus.

| Klien | Platform | Kegunaan utama |
| --- | --- | --- |
| [phpMyAdmin](https://www.phpmyadmin.net/) | Web | Antarmuka web yang familier |
| [Navicat](https://www.navicat.com/) | Win/Mac | Fitur profesional |
| [MySQL Workbench](https://www.mysql.com/products/workbench/) | Semua | Alat resmi MySQL |
| [DataGrip](https://www.jetbrains.com/datagrip/) | Semua | Integrasi IDE |
| [DbGate](https://dbgate.org/) | Web | UI web modern |
| [DBeaver](https://dbeaver.io/) | Semua | Gratis, multi-database |

Gunakan pengaturan koneksi berikut pada klien eksternal:

```
Host: 127.0.0.1 (atau localhost)
Port: 3306 (MySQL/MariaDB)
      5432 (PostgreSQL)
      27017 (MongoDB)
Username: root (MySQL/MariaDB)
          postgres (PostgreSQL)
Password: [Kata sandi yang Anda konfigurasi]
```

## Praktik Keamanan Terbaik

### Pengembangan Lokal

1. **Ubah kata sandi bawaan**: jangan gunakan `root` atau kredensial default.
2. **Batasi akses host**: gunakan `localhost`, bukan `%` (host apa pun).
3. **Buat pengguna khusus aplikasi**: jangan gunakan root untuk aplikasi.
4. **Buat cadangan berkala**: ekspor database sebelum perubahan besar.

### Sebelum Mengekspos ke Jaringan

1. **Kata sandi kuat**: sedikitnya 16 karakter dengan huruf besar, huruf kecil, angka, dan simbol.
2. **Aturan firewall**: batasi ke alamat IP tertentu.
3. **Koneksi SSL**: aktifkan koneksi terenkripsi.
4. **Nonaktifkan akses root jarak jauh**: buat pengguna dengan hak terbatas untuk akses jarak jauh.

## Pemecahan Masalah

### `Access denied for user 'root'@'localhost'`

Gunakan fitur **Reset Root Password** FlyEnv di tab Database.

### Tidak dapat terhubung ke server MySQL

Periksa hal berikut:

1. Layanan MySQL/MariaDB berjalan di FlyEnv.
2. Port yang dipakai benar, bawaan `3306`.
3. Firewall tidak memblokir koneksi localhost.

### Kesalahan `Unknown database`

Buat database terlebih dahulu melalui antarmuka bawaan FlyEnv atau alat migrasi aplikasi.

### Kata sandi tidak berfungsi setelah diatur ulang

1. Pastikan layanan MySQL/MariaDB berjalan saat pengaturan ulang.
2. Coba mulai ulang layanan database.
3. Periksa apakah ada beberapa instalasi MySQL yang saling bertentangan.

## Pertanyaan yang Sering Diajukan

**Dapatkah antarmuka bawaan dipakai untuk PostgreSQL atau MongoDB?**  
Saat ini antarmuka visual tersedia untuk MySQL dan MariaDB saja. PostgreSQL dan MongoDB memerlukan klien eksternal atau command line.

**Apakah pengaturan ulang kata sandi root memengaruhi database yang ada?**  
Tidak. Pengaturan ulang hanya mengubah kredensial autentikasi; semua data tetap utuh.

**Dapatkah database yang sudah ada diimpor ke FlyEnv?**  
Ya. Hubungkan klien eksternal pilihan Anda ke database FlyEnv lalu impor SQL dump.

**Bagaimana cara mencadangkan database?**  
Gunakan klien seperti DBeaver atau command line: `mysqldump -u root -p database_name > backup.sql`.

**Dapatkah beberapa versi database berjalan bersamaan?**  
Ya. FlyEnv mendukung versi MySQL/MariaDB berbeda pada port yang berbeda.

**Apakah antarmuka bawaan aman?**  
Ya. Antarmuka terhubung melalui localhost saja dan mengikuti seluruh sistem izin MySQL.

## Ringkasan

Manajemen database bawaan FlyEnv memberi kemudahan dalam pengembangan lokal:

- membuat database sekali klik;
- manajemen pengguna secara visual;
- pengaturan ulang kata sandi instan;
- manajemen hak akses tanpa SQL.

Untuk sebagian besar tugas pengembangan, Anda mungkin tidak lagi memerlukan klien database eksternal.
