---
title: 'Menjalankan Proyek PHP Tanpa Docker di FlyEnv'
head:
  - - meta
    - name: description
      content: Pilih mode PHP-FPM, FrankenPHP, RoadRunner, Swoole CLI, atau Workerman di FlyEnv untuk menjalankan proyek PHP lokal tanpa konfigurasi Docker yang rumit.
---

# Menjalankan Proyek PHP Tanpa Docker di FlyEnv

FlyEnv menjalankan runtime dan layanan PHP secara native. Pilih mode yang sesuai dengan framework serta arsitektur aplikasi, lalu gunakan Host FlyEnv untuk domain, SSL, log, dan hubungan ke basis data atau cache.

## Memilih Mode PHP

| Mode | Cocok untuk |
| --- | --- |
| PHP-FPM dengan Nginx/Apache/Caddy | WordPress, Laravel, Symfony, CMS, dan aplikasi PHP klasik |
| PHP CGI | Alur kompatibilitas atau aplikasi lama |
| FrankenPHP | Proyek modern yang ingin Caddy dan PHP dalam satu server aplikasi |
| RoadRunner | Laravel Octane atau worker PHP jangka panjang |
| Swoole CLI | Hyperf, EasySwoole, atau aplikasi Swoole native |
| Workerman/GatewayWorker | TCP, WebSocket, worker, dan layanan real-time |

## Penyiapan Umum

1. Pasang versi PHP dan layanan yang dibutuhkan melalui FlyEnv.
2. Impor atau buat proyek.
3. Pasang dependensi:

```bash
composer install
```

4. Buat Host dengan document root yang tepat. Laravel dan Symfony umumnya memakai `public`; WordPress memakai root instalasinya.
5. Pilih runtime atau executable yang sesuai dan nyalakan layanan.
6. Buka log FlyEnv jika aplikasi atau proses tidak berjalan.

## WordPress, ClassicPress, dan CMS

1. Buat atau impor proyek.
2. Buat Host yang menunjuk ke root CMS.
3. Nyalakan MySQL atau MariaDB dan buat basis data.
4. Tambahkan Redis jika proyek memakai object cache.
5. Aktifkan URL rewrite untuk permalink.

Gunakan versi PHP yang kompatibel dengan plugin dan tema; proyek lama dapat memakai versi berbeda dari situs baru melalui pengaturan Host.

## Laravel, Symfony, dan Framework MVC

1. Jalankan `composer install` dan salin konfigurasi lingkungan bila perlu.
2. Atur `.env`, kunci aplikasi, koneksi basis data, cache, serta queue.
3. Tambahkan Host dengan root `public`.
4. Pilih template URL rewrite framework.
5. Jalankan migrasi dan test aplikasi.

```bash
php artisan key:generate
php artisan migrate
```

## FrankenPHP

Gunakan FrankenPHP untuk aplikasi yang cocok dijalankan melalui server berbasis Caddy tanpa mengelola konfigurasi Caddy secara manual. Pasang modul FrankenPHP pada FlyEnv, hubungkan proyek atau Host yang sesuai, dan pilih mode ini pada konfigurasi aplikasi. Pastikan aplikasi mendukung versi PHP serta ekstensi yang dipilih.

## RoadRunner dan Laravel Octane

RoadRunner cocok untuk aplikasi worker jangka panjang. Untuk Laravel Octane, pasang dependensi proyek, konfigurasi Octane, lalu gunakan command RoadRunner/Octane sebagai service FlyEnv. Tetapkan log dan restart proses setelah mengubah kode atau konfigurasi yang tidak mendukung hot reload.

## Swoole CLI

Hyperf, EasySwoole, dan aplikasi Swoole dapat memakai preset Swoole CLI dari FlyEnv. Jalankan command server framework sebagai service, catat portnya, dan gunakan Host/reverse proxy bila Anda memerlukan domain serta HTTPS lokal.

## Workerman dan GatewayWorker

Gunakan Workerman untuk worker TCP, WebSocket, atau proses PHP jangka panjang. Tambahkan command worker pada modul kustom atau service FlyEnv, simpan path log, dan kelola start/stop dari antarmuka. Jangan menjalankan beberapa instance pada port sama.

## Menghubungkan Modul Lain

Hubungkan proyek PHP dengan MySQL/MariaDB/PostgreSQL, Redis, Mailpit, Cloudflared, dan server web FlyEnv sesuai kebutuhan. Simpan kredensial pada `.env`, bukan pada source atau konfigurasi publik.

## Rekomendasi Praktis

- Mulailah dengan PHP-FPM untuk CMS dan framework web biasa.
- Gunakan RoadRunner atau Swoole hanya bila aplikasi memang membutuhkan proses jangka panjang.
- Gunakan Host dan Auto SSL untuk menguji perilaku HTTPS lokal.
- Tetapkan versi PHP per proyek agar aplikasi lama dan baru tidak saling mengganggu.

## Pertanyaan Umum

**T: Apakah FlyEnv merupakan alternatif Docker untuk pengembangan PHP?**

J: FlyEnv menyediakan alur native untuk banyak kebutuhan PHP lokal. Docker tetap berguna bila tim memerlukan topologi kontainer tertentu.

**T: Mode apa yang dipilih untuk Laravel?**

J: PHP-FPM umumnya pilihan awal yang paling sederhana. Gunakan RoadRunner/Octane bila aplikasi dan operasi Anda memang membutuhkan worker jangka panjang.

**T: Apakah Workerman didukung?**

J: Ya. Jalankan sebagai service atau modul kustom dan kelola command serta log dari FlyEnv.

## Langkah Berikutnya

- [Menjalankan Laravel dengan FlyEnv](/id/guide/run-laravel-use-flyenv)
- [Domain kustom dan SSL otomatis](/id/guide/host)
- [Debug PHP dengan Xdebug](/id/guide/php-debug-with-xdebug)
