---
description: 'Pasang dan aktifkan ekstensi PHP FlyEnv di macOS, Linux, dan Windows melalui PECL, paket, atau pustaka ekstensi.'
---

# Memasang Ekstensi PHP

## macOS & Linux

FlyEnv menyediakan pemasangan cepat untuk ekstensi PHP.

<img src="https://oss.macphpstudy.com/image/4e4fab8b6a43.png" data-x-image-preview="" alt="Pemasangan cepat ekstensi PHP">
<p/>
<img src="https://oss.macphpstudy.com/image/f05dd95d81fc.png" data-x-image-preview="" alt="Daftar ekstensi PHP">

Anda juga dapat menggunakan perintah `pecl` untuk memasang ekstensi PHP. Klik atau salin path yang ditampilkan, lalu jalankan `cd` ke path tersebut di terminal.

<img src="https://oss.macphpstudy.com/image/c462e1c31e6.png" data-x-image-preview="" alt="Path instalasi PHP">

Contoh pemasangan ekstensi PHP Xdebug:

```sh
./bin/pecl install xdebug
```

<img src="https://oss.macphpstudy.com/image/eb4e7fd0e2fd.png" data-x-image-preview="" alt="Memasang Xdebug">

## Windows

Panel ekstensi menyediakan pemasangan cepat di Windows:

- **Katalog online.** Buka **Extensions** dari versi PHP yang ingin dipakai. FlyEnv menampilkan rilis yang tersedia dan menggunakan DLL PECL Windows yang kompatibel atau [PIE](https://github.com/php/pie), tergantung paket. Installer PIE yang diunduh FlyEnv ditujukan untuk Windows x64.
- **Ekstensi bawaan:** folder ekstensi berisi sebagian besar ekstensi umum secara default. PHP tidak mengaktifkannya secara otomatis — aktifkan atau nonaktifkan langsung di panel dan FlyEnv akan memperbarui `php.ini` untuk Anda.

<img src="https://oss.macphpstudy.com/image/a4e9e0dd1b67.png" data-x-image-preview="" alt="Folder ekstensi PHP di Windows">

Untuk pemasangan manual, ambil DLL dari [PECL](https://pecl.php.net/packages.php) yang cocok dengan versi PHP, arsitektur, dan thread safety (TS/NTS). Letakkan di `extension_dir` milik versi tersebut dan aktifkan di konfigurasinya. Lihat [manual PHP](https://www.php.net/manual/en/install.pecl.windows.php) untuk kompatibilitas DLL Windows.

## Verifikasi ekstensi pada versi PHP yang dipilih

Jalankan perintah ini dengan executable untuk versi PHP yang Anda ubah. Bila beberapa versi terpasang, ganti `php` dengan jalur lengkap ke `php` atau `php.exe` versi tersebut.

```text
php --ini
php -m
```

Periksa jalur INI yang dimuat dan pastikan modul muncul dalam daftar. Jika PHP memberi peringatan saat mulai, periksa berkas ekstensi, dependensi, dan direktif INI. Untuk situs, mulai ulang worker web yang dipilih dari [modul PHP-FPM](/id/features/php), lalu periksa ekstensi di situs. Hasil CLI hanya berlaku untuk proses CLI.
