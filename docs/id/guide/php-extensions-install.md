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

- **Pustaka online:** cari katalog ekstensi (didukung Packagist) dan pasang dengan satu klik. FlyEnv mengunduh [PIE](https://github.com/php/pie), pemasang ekstensi PHP resmi, dan menggunakannya untuk memasang ekstensi sesuai versi PHP Anda, sehingga pencocokan versi ditangani secara otomatis. Unduhan PIE memerlukan Windows x64.
- **Ekstensi bawaan:** folder ekstensi berisi sebagian besar ekstensi umum secara default. PHP tidak mengaktifkannya secara otomatis — aktifkan atau nonaktifkan langsung di panel dan FlyEnv akan memperbarui `php.ini` untuk Anda.

<img src="https://oss.macphpstudy.com/image/a4e9e0dd1b67.png" data-x-image-preview="" alt="Folder ekstensi PHP di Windows">

Anda juga dapat memasang ekstensi secara manual: unduh berkas `.dll` dari [https://pecl.php.net/packages.php](https://pecl.php.net/packages.php), lalu letakkan di folder ekstensi PHP.
