---
description: 'Percepat respons situs lokal di Windows dengan memperbaiki resolusi hostname, koneksi database, pemindaian antivirus, dan firewall.'
---

# Panduan Optimasi Performa Situs di Windows

## Pendahuluan

Saat mengembangkan situs di Windows, akses ke situs lokal kadang terasa lambat. Panduan ini menjelaskan penyebab umum dan pengaturan yang dapat membantu mempercepat lingkungan pengembangan FlyEnv.

## 1. Optimasi Koneksi Basis Data

### 1.1 Utamakan `127.0.0.1` daripada `localhost`

Pada Windows, memakai `localhost` untuk MySQL dapat memicu pencarian nama dan percobaan koneksi IPv6 sebelum sistem kembali ke IPv4. Jika MySQL hanya mendengar pada IPv4, waktu tunggu tersebut dapat muncul pada setiap permintaan basis data.

`127.0.0.1` adalah alamat loopback IPv4 eksplisit, sehingga koneksi tidak perlu melalui resolusi nama. Untuk phpMyAdmin atau konfigurasi aplikasi PHP, gunakan pengaturan berikut bila layanan MySQL lokal menggunakan IPv4:

```php
$cfg['Servers'][$i]['host'] = '127.0.0.1';
```

Periksa juga variabel seperti `DB_HOST=127.0.0.1` pada file `.env` aplikasi. Jangan mengubahnya jika layanan Anda memang dikonfigurasi khusus untuk socket atau IPv6.

### 1.2 Sesuaikan Konfigurasi MySQL

Untuk instalasi pengembangan dengan banyak tabel atau koneksi, periksa file konfigurasi MySQL dari FlyEnv. Pengaturan berikut dapat membantu sesuai beban kerja Anda:

```ini
# Lewati pencarian DNS untuk koneksi klien
skip-name-resolve

# Nonaktifkan pemantauan yang tidak diperlukan pada lingkungan pengembangan
performance_schema = OFF

# Tambahkan cache tabel bila aplikasi membuka banyak tabel
table_open_cache = 2000
```

Setelah mengubah konfigurasi, mulai ulang layanan MySQL dari FlyEnv. Terapkan nilai secara bertahap dan ukur hasilnya; kebutuhan proyek kecil dan basis data besar tidak sama.

## 2. Optimasi Konfigurasi PHP

### 2.1 Pengaturan Penting di `php.ini`

Untuk pengembangan lokal, aktifkan OPcache dan berikan memori yang cukup bagi aplikasi:

```ini
memory_limit = 512M
max_execution_time = 60
opcache.enable = 1
opcache.enable_cli = 1
opcache.memory_consumption = 128
opcache.max_accelerated_files = 10000
```

Saat Anda aktif mengedit kode, gunakan `opcache.validate_timestamps=1` agar perubahan file tetap terdeteksi. Mulai ulang PHP-FPM atau server web setelah mengubah `php.ini`.

### 2.2 Gunakan Versi PHP yang Sesuai dan Terkini

Versi PHP yang lebih baru biasanya membawa peningkatan performa. Pasang beberapa versi melalui FlyEnv, tetapkan versi yang didukung proyek, lalu uji aplikasi dan dependensinya sebelum menaikkan versi produksi.

## 3. Nonaktifkan Operasi yang Memakan Waktu

Beberapa alat memeriksa pembaruan atau konektivitas jaringan ketika halaman dibuka. Untuk pengembangan lokal, nonaktifkan pemeriksaan yang tidak dibutuhkan bila hal itu memperlambat respons.

### Pemeriksaan Versi phpMyAdmin

Pada phpMyAdmin, pemeriksaan versi dapat dinonaktifkan melalui konfigurasi bila Anda tidak ingin koneksi jaringan dilakukan saat membuka antarmuka:

```php
$cfg['VersionCheck'] = false;
```

Gunakan opsi ini hanya bila Anda tetap memperbarui phpMyAdmin secara berkala melalui FlyEnv atau sumber tepercaya.

## Kesimpulan

Mulailah dengan mengganti host basis data dari `localhost` ke `127.0.0.1`, kemudian ukur kembali respons situs. Setelah itu, periksa konfigurasi MySQL dan PHP, serta pastikan hanya layanan yang benar-benar diperlukan yang berjalan. Perubahan kecil yang terukur biasanya lebih efektif daripada mengganti banyak pengaturan sekaligus.
