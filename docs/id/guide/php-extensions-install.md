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

Saat ini FlyEnv belum menyediakan pemasangan cepat di Windows, tetapi menyediakan akses untuk membuka situs PECL dan folder ekstensi PHP.

Perhatikan bahwa folder ekstensi berisi sebagian besar ekstensi umum secara bawaan. PHP tidak mengaktifkannya secara default; aktifkan ekstensi yang diperlukan di `php.ini`.

<img src="https://oss.macphpstudy.com/image/a4e9e0dd1b67.png" data-x-image-preview="" alt="Folder ekstensi PHP di Windows">

Unduh berkas `.dll` dari [https://pecl.php.net/packages.php](https://pecl.php.net/packages.php), lalu letakkan di folder ekstensi PHP.

Pemasangan cepat ekstensi PHP di Windows secara teknis sederhana, tetapi pencocokan antara versi PHP dan versi ekstensi PHP cukup rumit. Kontribusi dipersilakan: fork kode dan kirim PR, atau sediakan tabel kecocokan antara versi PHP dan versi ekstensi PHP.
