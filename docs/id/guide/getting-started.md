---
title: 'Panduan Mulai Cepat FlyEnv: Siap Digunakan dalam 5 Menit'
head:
  - - meta
    - name: description
      content: Panduan lengkap FlyEnv untuk macOS, Windows, dan Linux. Pasang aplikasi, konfigurasi situs pertama, dan mulai mengembangkan dengan manajemen versi otomatis.
---

# Panduan Mulai Cepat FlyEnv: Siap Digunakan dalam 5 Menit

Anda sudah mengunduh FlyEnv. Panduan ini membawa Anda dari pemasangan sampai situs lokal berjalan tanpa perlu konfigurasi terminal yang rumit.

## Pemasangan

### macOS

**Opsi 1: Homebrew**

```bash
brew update && brew install flyenv
```

**Opsi 2: Unduh DMG**

| Arsitektur | Unduhan |
| --- | --- |
| Intel (x86_64) | [GitHub Release](https://github.com/xpf0000/FlyEnv/releases/latest) |
| Apple Silicon (M1/M2/M3) | [GitHub Release](https://github.com/xpf0000/FlyEnv/releases/latest) |

Untuk hosting PHP sederhana di macOS, lihat juga [FlyPHPServer](/id/flyphpserver) di Mac App Store.

### Windows

Unduh lalu ekstrak berkas ZIP berikut, kemudian jalankan `FlyEnv.exe`.

| Sumber unduhan | Tautan |
| --- | --- |
| GitHub Release | [Unduh](https://github.com/xpf0000/FlyEnv/releases/latest) |
| Baidu Netdisk | [Unduh](https://pan.baidu.com/s/1tqHN9piZVVuTyTD3FXI71A?pwd=mnb4) |

### Linux

FlyEnv mendukung paket `.deb` untuk Debian/Ubuntu dan `.rpm` untuk Red Hat, Fedora, SUSE, serta CentOS, pada arsitektur x86_64 maupun arm64. Unduh paket dari [GitHub Releases](https://github.com/xpf0000/FlyEnv/releases/latest).

## Penyiapan Saat Pertama Dijalanakan

### 1. Pasang FlyEnv Helper

Pada peluncuran pertama, FlyEnv memasang helper untuk integrasi sistem.

- Di macOS/Linux, sistem dapat meminta kata sandi.
- Di Windows, jalankan sebagai Administrator bila pemasangan gagal.

Helper ini mengelola layanan dan jalur sistem, dan hanya perlu dipasang sekali.

### 2. Sesuaikan Antarmuka

1. Klik **Settings**.
2. Nonaktifkan modul yang tidak Anda perlukan.
3. Atur ulang modul yang tersisa dengan drag-and-drop.

Untuk PHP, pertahankan Apache atau Nginx, PHP, MySQL, dan Redis. Untuk Node.js, gunakan Node.js, Nginx, serta MongoDB sesuai kebutuhan proyek.

![Penyiapan antarmuka](https://oss.macphpstudy.com/image/quick-start-1.webp)

### 3. Pasang Versi Pertama

1. Buka modul, misalnya **PHP**.
2. Masuk ke tab **Versions**.
3. Pilih versi, misalnya PHP 8.3.
4. Klik **Install**.

FlyEnv mengunduh dan mengonfigurasi versi tersebut secara otomatis. Pasang beberapa versi bila Anda bekerja pada proyek yang berbeda.

![Pemasangan versi](https://oss.macphpstudy.com/image/quick-start-2.webp)

## Membuat Situs Pertama

### Langkah 1: Nyalakan Layanan

1. Buka modul **Apache** atau **Nginx**.
2. Pilih versi yang sudah dipasang.
3. Klik **Start**.

Lakukan hal yang sama untuk PHP dan MySQL bila situs membutuhkannya.

![Memulai layanan](https://oss.macphpstudy.com/image/quick-start-3.webp)

### Langkah 2: Tambahkan Situs

1. Buka modul **Host**.
2. Klik **Add Site**.
3. Isi domain seperti `myproject.test`, root proyek, versi PHP, dan port 80.
4. Aktifkan **Auto SSL** untuk HTTPS.
5. Simpan.

![Form tambah situs](https://oss.macphpstudy.com/image/quick-start-4.webp)

### Langkah 3: Buka Situs

Nyalakan server web jika belum berjalan, lalu klik tautan situs pada daftar Host atau buka `https://myproject.test`. Sertifikat lokal dipercaya otomatis oleh sistem setelah konfigurasi berhasil.

## Mengatur Variabel Lingkungan

FlyEnv dapat mengelola `PATH` sistem agar runtime mudah dipakai dari terminal:

1. Buka modul apa saja.
2. Klik **Set to System Path**.
3. Pilih versi yang ingin ditambahkan.

Untuk PHP, Anda dapat menambahkan alias seperti `php74` untuk PHP 7.4 dan `php83` untuk PHP 8.3. Mulai ulang terminal setelah mengubah PATH.

![Variabel lingkungan](https://oss.macphpstudy.com/image/get-start-13.png)

## Contoh Proyek Cepat

### Laravel

```bash
composer create-project laravel/laravel myproject
```

Di Host FlyEnv, gunakan domain `myproject.test`, root `/path/to/myproject/public`, PHP 8.2 atau 8.3, lalu pilih template rewrite Nginx **Laravel**.

### WordPress

```bash
curl -O https://wordpress.org/latest.tar.gz
tar -xzf latest.tar.gz
```

Buat basis data lewat modul MySQL, lalu tambahkan Host dengan domain `wordpress.test`, root folder WordPress, dan URL rewrite aktif.

### Situs HTML Statis

```bash
mkdir mystaticsite
echo "<h1>Hello FlyEnv</h1>" > mystaticsite/index.html
```

Tambahkan situs dengan domain `static.test`, root `/path/to/mystaticsite`, dan pilih mode Static Site tanpa PHP.

### Node.js atau NestJS

```bash
npm i -g @nestjs/cli
nest new myapi
```

Jalankan layanan Node.js lalu gunakan reverse proxy Nginx menuju port 3000. Lihat [panduan reverse proxy](/id/guide/reverse-proxy-nestjs-multi-servers) untuk rinciannya.

## Mengelola Layanan

Aktifkan **GroupStart** pada modul yang selalu digunakan bersama. Dari panel utama, gunakan sakelar Start All untuk menyalakannya sekaligus. Bila layanan gagal berjalan, buka **Logs** pada modul untuk memeriksa konflik port atau dependensi yang belum tersedia.

## Memperbarui dan Menghapus FlyEnv

Periksa **Settings -> About** untuk pembaruan, atau unduh rilis terbaru secara manual. File aplikasi dan data disimpan terpisah, sehingga pembaruan tidak menghapus situs atau basis data Anda.

Untuk penghapusan, hapus aplikasi dan, bila memang diinginkan, folder data berikut:

```bash
# macOS
rm -rf /Applications/FlyEnv.app
rm -rf ~/Library/FlyEnv
rm -rf ~/Library/PhpWebStudy

# Linux
sudo apt remove flyenv  # atau perintah rpm yang sesuai
rm -rf ~/.config/FlyEnv
```

Di Windows, hapus folder FlyEnv; folder data berada di `FlyEnv-Data` pada direktori yang sama.

## Pemecahan Masalah

**Port sudah dipakai:** cari proses yang memakai port tersebut atau ubah port FlyEnv.

```bash
sudo lsof -i :80
```

**Permission denied di macOS:** berikan Full Disk Access kepada FlyEnv pada pengaturan Security & Privacy.

**502 Bad Gateway:** pastikan PHP-FPM berjalan, versi PHP situs benar, dan lihat log server web.

**Perubahan tidak terlihat:** hapus cache browser, mulai ulang server web, dan periksa izin berkas.

## Pertanyaan Umum

**T: Haruskah saya memahami command line?**

J: Tidak. Semua tugas utama dapat dikerjakan melalui GUI; akses terminal tetap tersedia bila diperlukan.

**T: Dapatkah proyek yang sudah ada diimpor?**

J: Ya. Arahkan root Host ke folder proyek yang sudah ada.

**T: Domain apa yang dapat digunakan?**

J: Gunakan domain `.test`, `.dev`, atau TLD kustom. Hindari `.local` pada jaringan tertentu karena dapat berbenturan dengan mDNS.

## Langkah Berikutnya

- [Isolasi Versi per Proyek](/id/guide/project-level-runtime-environment)
- [Domain Kustom dan SSL Otomatis](/id/guide/host)
- [Bangun Agen AI Offline Lokal](/id/guide/build-local-offline-ai-agent)
- [Unduh FlyEnv](/id/download)

> Lihat cerita dan tutorial pengguna FlyEnv pada [halaman Komunitas](/id/community).
