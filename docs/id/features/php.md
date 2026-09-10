---
layout: doc
titleTemplate: false
title: 'Pengelola Versi PHP, PHP-FPM, dan Alat Composer | FlyEnv'
description: 'Pasang dan alihkan versi PHP, kelola PHP-FPM, php.ini, dan ekstensi, pisahkan runtime per proyek, kelola Composer, serta buat proyek WordPress atau Laravel di FlyEnv.'
head:
  - - meta
    - name: description
      content: 'Pasang dan alihkan versi PHP, kelola PHP-FPM, php.ini, dan ekstensi, pisahkan runtime per proyek, kelola Composer, serta buat proyek WordPress atau Laravel di FlyEnv.'
  - - meta
    - property: og:title
      content: 'Pengelola Versi PHP, PHP-FPM, dan Alat Composer | FlyEnv'
  - - meta
    - property: og:description
      content: 'Pasang dan alihkan versi PHP, kelola PHP-FPM, php.ini, dan ekstensi, pisahkan runtime per proyek, kelola Composer, serta buat proyek WordPress atau Laravel di FlyEnv.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/id/features/php
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/id/features/php
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Pengembangan PHP Lokal dengan FlyEnv

PHP adalah bahasa skrip sisi server untuk membangun situs web dan aplikasi web dinamis, dari situs WordPress hingga aplikasi pada framework seperti Laravel dan Symfony. FlyEnv mengelola seluruh sisi PHP dalam stack lokal Anda di satu aplikasi: beberapa versi PHP, PHP-FPM per versi, pengelolaan `php.ini` dan ekstensi secara visual, runtime tingkat proyek, Composer, serta pembuatan kerangka satu klik untuk aplikasi PHP yang umum.

![Ikhtisar modul PHP FlyEnv](https://oss.macphpstudy.com/image/features/php-1.webp)

## Manajemen versi PHP

Pasang beberapa versi PHP secara berdampingan dari **PHP → Manajer Versi** dan beralihlah di antaranya kapan saja.

- **Beberapa sumber pemasangan:** Build statis tersedia di setiap platform, ditambah Homebrew (macOS dan Linux) serta MacPorts (macOS) untuk instalasi PHP yang dikelola oleh pengelola paket tersebut.
- **Versi kustom:** arahkan FlyEnv ke direktori apa pun yang berisi build PHP Anda sendiri; FlyEnv memindai biner `php` dan `php-fpm`, lalu mencantumkannya di samping versi yang dikelola.
- **Pengalihan versi CLI:** tentukan versi PHP yang digunakan perintah `php` di terminal. FlyEnv menambahkan atau menghapus direktori bin versi tersebut dalam `PATH` Anda dan menandai apakah entri aktif ditetapkan oleh FlyEnv atau alat lain.
- **Alias dan catatan per versi:** berikan alias singkat dan catatan pada setiap instalasi agar build yang mirip tetap mudah dibedakan dalam daftar.

![Manajer Versi PHP dengan sumber pemasangan](https://oss.macphpstudy.com/image/features/php-2.webp)

![Tabel layanan PHP dengan kolom versi, jalur, lingkungan, dan alias](https://oss.macphpstudy.com/image/features/php-3.webp)

## Manajemen layanan PHP-FPM

PHP-FPM adalah modul khusus di FlyEnv, yang dibuat untuk melayani situs melalui Nginx, Apache, atau Caddy.

- **Siklus hidup per versi:** mulai, hentikan, atau mulai ulang setiap versi PHP-FPM secara terpisah, atau gunakan tombol di bilah sisi (juga tersedia di baki sistem) untuk memulai atau menghentikan seluruh versi yang terpasang sekaligus.
- **Berbasis socket di macOS dan Linux:** setiap versi mendengarkan Unix socket-nya sendiri, sehingga beberapa versi PHP-FPM dapat berjalan bersamaan dan setiap situs dapat dirutekan ke versi yang berbeda. FlyEnv membuat ulang konfigurasi integrasi server web ketika sebuah versi dimulai.
- **`php-fpm.conf` yang dapat diedit:** buka dan edit konfigurasi pool FPM per versi (macOS dan Linux), dengan penampil log FPM dan slow log bawaan.
- **Windows berjalan sebagai FastCGI:** PHP melayani server web melalui FastCGI, dan jumlah proses pekerja FastCGI (`PHP_FCGI_CHILDREN`, 1–64) dapat disesuaikan per versi.

![Modul PHP-FPM dengan kontrol layanan per versi](https://oss.macphpstudy.com/image/features/php-4.webp)

![Mengedit php-fpm.conf untuk versi PHP](https://oss.macphpstudy.com/image/features/php-5.webp)

## Konfigurasi php.ini

Setiap versi PHP yang terpasang memiliki `php.ini` sendiri, yang dapat diedit dari menu tindakan versi tersebut.

- **Formulir pengaturan umum:** aktifkan/nonaktifkan atau sesuaikan direktif yang sering diubah — `memory_limit`, `max_execution_time`, `upload_max_filesize`, `post_max_size`, `max_file_uploads`, `display_errors`, `log_errors`, `error_reporting`, `short_open_tag`, `date.timezone`, jalur CA bundle, dan lainnya — tanpa mengedit berkas secara manual.
- **Editor sumber lengkap:** beralih ke tampilan berkas mentah untuk hal yang tidak dicakup formulir, dengan pemulihan satu klik ke konfigurasi bawaan.
- **Pengelola `disable_functions`:** perkuat suatu versi dengan menonaktifkan fungsi berbahaya dari daftar periksa yang dapat dicari berisi sekitar 170 entri umum; perubahan ditulis kembali ke `php.ini`.

![Formulir pengaturan umum php.ini](https://oss.macphpstudy.com/image/features/php-6.webp)

![Mengelola disable_functions dengan daftar periksa yang dapat dicari](https://oss.macphpstudy.com/image/features/php-7.webp)

## Manajemen ekstensi

Buka **Ekstensi** dari versi PHP mana pun untuk melihat yang dimuat dan memasang yang belum ada. [Panduan pemasangan ekstensi](/id/guide/php-extensions-install) menunjukkan contoh lengkap.

- **Ekstensi yang dimuat:** daftar modul yang saat ini dimuat oleh versi tersebut dan dapat dicari.
- **PHP Homebrew dan MacPorts:** telusuri formula ekstensi yang tersedia untuk versi PHP tersebut, pasang atau hapus di terminal tertanam, lalu salin potongan `extension=xxx.so` siap pakai — atau templat konfigurasi Xdebug lengkap — langsung ke `php.ini`.
- **Windows:** aktifkan atau nonaktifkan DLL yang sudah ada di direktori ekstensi, atau unduh ekstensi dari pustaka online dengan satu klik.
- **Navigasi cepat:** langsung lompat ke `php.ini` atau buka direktori ekstensi di pengelola berkas.

![Daftar ekstensi yang dimuat untuk versi PHP](https://oss.macphpstudy.com/image/features/php-8.webp)

![Memasang ekstensi PHP dari Homebrew](https://oss.macphpstudy.com/image/features/php-9.webp)

## Isolasi PHP tingkat proyek

Proyek yang berbeda sering memerlukan versi PHP yang berbeda. Di **PHP → Proyek**, daftarkan setiap folder proyek dan ikat ke binari PHP-nya sendiri — atau tetap gunakan versi sistem.

- **Runtime per proyek:** klik dua kali proyek untuk mengganti versi PHP-nya; pilihan tersebut disimpan dalam berkas `.flyenv` di dalam direktori proyek, sehingga terminal dan editor yang diluncurkan dari FlyEnv otomatis menggunakan PHP yang benar.
- **Alat untuk membuka proyek:** dari satu baris proyek, buka Terminal, PowerShell, VSCode, PhpStorm, WebStorm, atau Sublime dengan lingkungan proyek sudah dimuat.
- **Versi PHP per situs:** setiap situs di **Host** memilih versi PHP-FPM-nya sendiri (atau tetap menjadi situs statis), dan daftar situs menunjukkan versi yang melayani setiap situs.

![Daftar proyek PHP dengan pengikatan versi PHP per proyek](https://oss.macphpstudy.com/image/features/php-10.webp)

## Manajemen Composer

Tab **Composer** mengelola Composer seperti alat berversi lainnya di FlyEnv.

- Pasang dan simpan beberapa versi Composer, dari build statis atau Homebrew sesuai platform Anda.
- Tambahkan instalasi Composer Anda sendiri dari direktori kustom.
- Ikat versi Composer tertentu ke sebuah proyek bersama versi PHP-nya, sehingga pemasangan dependensi menggunakan toolchain yang konsisten.

![Pengelola versi Composer](https://oss.macphpstudy.com/image/features/php-11.webp)

## Pembuatan proyek cepat

**PHP → Proyek Baru** membuat kerangka aplikasi PHP umum tanpa meninggalkan aplikasi. Templat yang didukung: WordPress, Laravel, Yii2, ThinkPHP, Symfony, CodeIgniter, CakePHP, Slim, ClassicPress, dan Contao.

1. Pilih templat lalu tentukan versi framework, versi PHP, dan versi Composer.
2. FlyEnv menjalankan perintah pembuatan Composer di terminal tertanamnya, sehingga Anda melihat keluaran sebenarnya.
3. Saat proyek siap, buat situs yang sesuai dengan satu klik — aturan rewrite server web untuk framework tersebut sudah diisikan sebelumnya.

![Grid templat proyek PHP](https://oss.macphpstudy.com/image/features/php-12.webp)

![Membuat proyek Laravel dengan pilihan versi](https://oss.macphpstudy.com/image/features/php-13.webp)

## Alat PHP lainnya

- **Penampil log:** buka log kesalahan PHP, log PHP-FPM, atau slow log FPM per versi, dengan pencarian dan penyegaran bawaan.
- **phpMyAdmin:** dari modul MySQL atau MariaDB, siapkan phpMyAdmin dalam satu langkah — FlyEnv mengunduhnya dan membuat situs lokal yang dilayani oleh versi PHP tertinggi yang Anda pasang.
- **PHP Obfuscator:** utilitas di halaman Tools yang mengaburkan kode sumber PHP dengan versi PHP pilihan, berguna sebelum menyerahkan kode kepada pihak ketiga.

## Server aplikasi PHP

Untuk PHP bergaya server aplikasi, FlyEnv memiliki modul khusus yang melengkapi pengaturan PHP-FPM klasik:

- **FrankenPHP** — PHP yang dibundel dengan model penyajian web modern.
- **RoadRunner** — pekerja PHP, Laravel Octane, dan preset fileserver.
- **Swoole CLI** — preset Native Swoole, Hyperf, EasySwoole, Laravel Octane, dan skrip kustom.

[Panduan deployment PHP](/id/guide/deploy-php-projects-without-docker) menjelaskan cara memilih di antaranya. Untuk situs yang diakses lewat browser, lanjutkan ke [Situs Lokal, Domain Kustom & HTTPS](/id/features/local-sites-https); stack khusus framework dibahas dalam solusi [Laravel](/id/solutions/laravel) dan [WordPress](/id/solutions/wordpress).

<FeatureRelatedLinks locale="id" slug="php" />

## Catatan kompatibilitas

FlyEnv mengelola runtime lokal dan konfigurasi proses; FlyEnv tidak menjamin setiap ekstensi PHP, versi kerangka kerja, atau binari pihak ketiga tersedia di setiap sistem operasi. Verifikasikan persyaratan proyek terhadap build PHP yang terpasang, dan jadikan [halaman Unduhan](/id/download) serta catatan rilis saat ini sebagai sumber paket yang didukung.
