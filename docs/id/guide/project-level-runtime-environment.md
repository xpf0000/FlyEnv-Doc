---
title: Isolasi Versi per Proyek Tanpa Docker - Panduan FlyEnv
head:
  - - meta
    - name: description
      content: Hentikan pergantian versi Node.js dan PHP secara manual. Pelajari cara FlyEnv mengganti runtime otomatis ketika Anda masuk ke direktori proyek, tanpa Docker dan dengan penggunaan RAM lebih rendah.
---

# Isolasi Versi per Proyek Tanpa Docker

Apakah Anda lelah mengetik `nvm use` atau mengubah `PATH` setiap kali berpindah proyek? Pernah menjalankan `node -v` di folder berbeda lalu mendapatkan versi yang salah? Atau Docker Desktop memakai RAM hanya untuk pergantian lingkungan sederhana?

FlyEnv menyediakan **isolasi lingkungan per proyek**. Ini adalah alternatif native dan ringan untuk Docker Desktop serta NVM: versi Node.js, PHP, Python, Go, Ruby, atau Java yang tepat dimuat ketika Anda menjalankan `cd` ke direktori proyek. Tidak ada kontainer dan tidak ada proses startup berat; hanya binary native yang siap dalam hitungan milidetik.

## Mengapa Anda Membutuhkan Isolasi per Proyek

### Kesulitan Mengelola Versi Secara Manual

| Masalah | Solusi umum | Dampaknya |
| --- | --- | --- |
| Banyak proyek membutuhkan versi Node.js berbeda | NVM dan pergantian manual | Lupa mengganti versi lalu men-debug berjam-jam |
| Proyek lama PHP 7.4 dan proyek baru PHP 8.3 | Mengedit profil shell terus-menerus | Global `PATH` mudah rusak |
| Anggota tim memakai versi berbeda | Docker Compose | Overhead RAM besar untuk alat CLI sederhana |
| Variabel lingkungan berbeda per proyek | File `.env` dan skrip `export` | Konfigurasi tersebar dan sulit dirawat |

### Cara FlyEnv Mengubah Alur Kerja

FlyEnv menyediakan pergantian lingkungan native yang langsung siap:

- **Pergantian tanpa konfigurasi:** masuk ke folder proyek dan versi yang benar aktif otomatis.
- **Penggunaan RAM lebih rendah:** binary native tidak memerlukan lapisan virtualisasi kontainer.
- **Penyiapan sekali klik:** tidak ada perintah terminal yang perlu dihafal.
- **Lintas platform:** alur yang sama di macOS, Windows, dan Linux.
- **Enam runtime utama:** Node.js, PHP, Python, Go, Ruby, dan Java.

## Panduan Penyiapan Isolasi Proyek

### Langkah 1: Buka Pengelolaan Proyek

1. Jalankan FlyEnv Control Panel.
2. Pilih tab bahasa yang digunakan proyek, misalnya **Node.js**, **PHP**, **Python**, **Go**, **Ruby**, atau **Java**.
3. Buka bagian Project.

![Antarmuka pengelolaan proyek](https://oss.macphpstudy.com/image/project-env1.png)

### Langkah 2: Tambahkan Proyek

Daftarkan proyek agar lingkungannya dimuat otomatis:

1. Klik **Add Project**.
2. Masukkan nama yang mudah dikenali, seperti `legacy-api` atau `new-dashboard`.
3. Pilih atau masukkan jalur absolut folder proyek.
4. Simpan.

![Dialog tambah proyek](https://oss.macphpstudy.com/image/project-env2.png)

### Langkah 3: Kunci Versi Runtime

1. Klik dua kali proyek baru pada daftar.
2. Pada daftar **Version**, pilih versi runtime yang benar untuk proyek, misalnya Node.js `20.11.0`, PHP `8.3.2`, atau Python `3.11.7`.
3. Klik **Save**.

![Pemilihan versi proyek](https://oss.macphpstudy.com/image/project-env3.png)

::: tip Tip
Anda dapat memasang beberapa versi bahasa yang sama dari antarmuka utama FlyEnv. Semua versi terpasang akan tersedia pada pilihan versi tingkat proyek.
:::

### Langkah 4: Atur Variabel Lingkungan Khusus Proyek

Banyak proyek memerlukan `PATH`, `DATABASE_URL`, atau kunci API tersendiri.

1. Pilih proyek lalu klik **Project Environment**.
2. Periksa variabel sistem yang diwariskan.
3. Tambahkan atau timpa nilai seperti `NODE_ENV=production` dan `PHP_MEMORY_LIMIT=512M`.
4. Simpan. Nilai tersebut akan dimuat hanya untuk proyek ini.

![Panel variabel lingkungan](https://oss.macphpstudy.com/image/project-env4.png)

![Editor variabel lingkungan](https://oss.macphpstudy.com/image/project-env5.png)

## Pemuat Otomatis di Terminal

Setelah proyek dikonfigurasi, cukup buka terminal dan masuk ke folder proyek:

```bash
# Masuk ke proyek
cd ~/work/legacy-php-project

# Versi PHP sudah benar secara otomatis
php -v
# PHP 7.4.33 (cli) (built: ...)

cd ~/work/modern-node-app

node -v
# v20.11.0

which node
# /Users/you/.flyenv/versions/node/20.11.0/bin/node
```

Integrasi shell FlyEnv mendeteksi direktori aktif dan menambahkan jalur yang tepat **sebelum** perintah dijalankan. Anda tidak perlu menjalankan `nvm use`, `source venv/bin/activate`, atau mengingat versi untuk setiap proyek.

![Demo terminal untuk pergantian versi otomatis](https://oss.macphpstudy.com/image/project-env6.png)

## Contoh Berdasarkan Bahasa

### Proyek Node.js

| Jenis proyek | Versi yang disarankan | Alasan |
| --- | --- | --- |
| Pemeliharaan lama | Node.js 16.x | Kompatibilitas webpack lama |
| Produksi stabil | Node.js 18.x LTS | Ekosistem stabil dan AWS Lambda |
| Pengembangan modern | Node.js 20.x+ | Test runner native dan performa |

### Proyek PHP

| Framework | Versi PHP | Catatan |
| --- | --- | --- |
| WordPress lama | 7.4 | Kompatibilitas plugin lama |
| Laravel 10+ | 8.2+ | Fitur dan performa terbaru |
| Symfony 7 | 8.3 | Fitur PHP mutakhir |

### Proyek Python

```bash
cd ~/data-science-project
python --version
# Python 3.11.7

cd ~/legacy-django
python --version
# Python 3.8.18
```

## Video Panduan

<iframe style="width: 100%; aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/Cpq6i9T6IK4?si=E-47n3AQwJEBygoh" title="Pemutar video YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Pertanyaan Umum

**T: Apakah FlyEnv memakai kontainer Docker?**

J: Tidak. FlyEnv menjalankan binary native untuk sistem operasi Anda. Startup cepat dan penggunaan memorinya lebih rendah daripada Docker Desktop.

**T: Dapatkah FlyEnv menggantikan NVM?**

J: Ya. FlyEnv mengelola versi Node.js dan menggantinya otomatis berdasarkan direktori proyek, sehingga Anda tidak lagi perlu mengetik `nvm use`.

**T: Apakah ini lebih baik daripada XAMPP untuk PHP?**

J: Untuk beberapa proyek, FlyEnv memungkinkan setiap proyek memakai versi PHP sendiri dan bekerja secara native dengan Nginx, Apache, atau Caddy.

**T: Bagaimana jika anggota tim tidak memakai FlyEnv?**

J: Mereka tetap dapat memakai pengelola versi sendiri. FlyEnv tidak menambahkan file wajib seperti `.nvmrc`, perubahan `composer.json`, atau Dockerfile ke proyek Anda.

## Langkah Berikutnya

1. [Unduh FlyEnv](/id/download) untuk macOS, Windows, atau Linux.
2. Baca [FlyEnv vs Docker & XAMPP](/id/guide/flyenv-vs-docker-xampp) untuk membandingkan alur lokal.
3. Lanjutkan ke [Mengelola Banyak Versi Node.js dan PHP](/id/guide/manage-multiple-node-php-versions).
4. Pelajari cara [men-deploy Node.js, Python, dan Go tanpa Docker](/id/guide/deploy-nodejs-python-go-without-docker).
