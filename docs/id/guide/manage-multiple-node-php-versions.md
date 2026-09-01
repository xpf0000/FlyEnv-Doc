---
title: 'Mengelola Banyak Versi Node.js dan PHP Tanpa NVM atau PHP Monitor'
head:
  - - meta
    - name: description
      content: 'Berhenti kesulitan dengan NVM dan pengelola versi PHP. FlyEnv mengelola banyak versi Node.js dan PHP dengan pergantian otomatis per proyek, tanpa perintah manual.'
---

# Mengelola Banyak Versi Node.js dan PHP Tanpa NVM atau PHP Monitor

Jika Anda sudah mengetik `nvm use 18` berkali-kali atau bermasalah saat menghubungkan versi PHP Homebrew, Anda mengenal sulitnya pengelolaan versi. Proyek berbeda membutuhkan versi berbeda, dan perpindahan manual mengganggu produktivitas.

**Ada cara yang lebih baik.** Isolasi versi per proyek menghapus pergantian manual. Lingkungan Anda otomatis mengikuti proyek yang sedang dikerjakan.

## Masalah pada Pengelola Versi Tradisional

### Kesulitan dengan NVM

```bash
# Situasi yang umum terjadi
cd ~/projects/legacy-app
nvm use 14  # Error: version not installed
nvm install 14
cd ~/projects/new-app
nvm use 20  # Lupa mengganti versi, lalu muncul galat yang sulit ditelusuri
```

### Masalah Versi PHP

```bash
# Pergantian PHP melalui Homebrew
brew unlink php@8.1
brew link php@8.3 --force
# Mulai ulang terminal, periksa versi, lalu berharap semuanya benar
```

### Biaya Tersembunyi

- **Waktu pindah konteks:** waktu terbuang setiap kali berganti proyek.
- **Konflik versi:** instalasi global saling bertabrakan antarproyek.
- **Hambatan tim:** konfigurasi berbeda menghasilkan masalah “works on my machine”.
- **Ketidaksesuaian CI/CD:** lingkungan lokal tidak sama dengan deployment.

## Solusi FlyEnv: Pergantian Versi Otomatis per Proyek

FlyEnv menghapus pengelolaan versi manual melalui **deteksi lingkungan otomatis**:

1. Buat proyek di antarmuka FlyEnv.
2. Tetapkan versi untuk proyek itu, misalnya PHP 7.4 dan Node 14.
3. Masuk ke folder proyek lewat terminal.
4. Versi berpindah otomatis tanpa perintah tambahan.

```bash
cd ~/projects/client-legacy-wordpress
php -v  # PHP 7.4.33 dimuat otomatis
node -v # v14.21.3 dimuat otomatis

cd ~/projects/client-modern-laravel
php -v  # PHP 8.3.4 dimuat otomatis
node -v # v20.11.1 dimuat otomatis
```

## Menyiapkan Pengelolaan Versi per Proyek

### Langkah 1: Buat Proyek

Buka FlyEnv dan masuk ke modul bahasa, seperti PHP, Node.js, atau Python.

![Antarmuka pengelolaan proyek](https://oss.macphpstudy.com/image/project-env1.png)

Klik **Add Project** dan isi nama proyek, jalur proyek, serta versi runtime bawaan.

![Antarmuka tambah proyek](https://oss.macphpstudy.com/image/project-env2.png)

### Langkah 2: Atur Variabel Lingkungan

Setiap proyek dapat memiliki variabel lingkungan terisolasi.

![Konfigurasi variabel lingkungan](https://oss.macphpstudy.com/image/project-env3.png)

Contoh konfigurasi yang umum:

- `DATABASE_URL`
- `APP_ENV=local`
- `API_KEYS`
- tambahan `PATH` kustom

![Konfigurasi variabel kustom](https://oss.macphpstudy.com/image/project-env4.png)

### Langkah 3: Pasang Banyak Versi

FlyEnv mendukung beberapa versi berdampingan:

| Bahasa | Contoh versi yang didukung |
| --- | --- |
| PHP | 5.6 hingga 8.4+ |
| Node.js | 10.x hingga 22.x+ |
| Python | 2.7 hingga 3.12+ |
| Java | 8, 11, 17, 21 LTS |
| Go | 1.19 hingga 1.22+ |

Pasang versi dengan satu klik, tanpa kompilasi atau penyiapan rumit.

## Contoh Alur Kerja Nyata

### Agensi dengan Banyak Klien

```text
~/clients/
├── client-a-wordpress/     # PHP 7.4, Node 14
├── client-b-laravel/       # PHP 8.2, Node 18
├── client-c-symfony/       # PHP 8.3, Node 20
└── client-d-custom/        # PHP 8.1, Node 16
```

Dengan alat tradisional, Anda terus menjalankan `nvm use` dan `brew switch`. Dengan FlyEnv, masuk ke folder mana pun langsung mengaktifkan versi yang benar.

### Migrasi Framework

Saat menaikkan Laravel dari versi 9 ke 11, simpan salinan `project-laravel9/` pada PHP 8.1 dan `project-laravel11/` pada PHP 8.3. Anda dapat berpindah di antara keduanya seketika untuk membandingkan hasil.

### Kontributor Open Source

| Proyek | Versi PHP | Versi Node |
| --- | --- | --- |
| WordPress Core | 7.4 | 14 |
| Laravel | 8.3 | 20 |
| Symfony | 8.2 | 18 |
| Custom Package | 8.1 | 16 |

Anda tidak lagi perlu mengingat kebutuhan versi setiap repositori.

## Fitur Pengelolaan Versi Lanjutan

### Integrasi Terminal

FlyEnv menambahkan integrasi shell secara otomatis.

**macOS/Linux (`.zshrc`/`.bashrc`):**

```bash
# Ditambahkan FlyEnv untuk memuat lingkungan proyek ketika cd
source "/Applications/FlyEnv.app/Contents/Resources/helper/flyenv.sh"
```

**Windows (profil PowerShell):**

```powershell
# Ditambahkan FlyEnv untuk memuat lingkungan proyek ketika cd
# FlyEnv Auto-Load
. "{FlyEnv Data Folder}/server/bin/flyenv.ps1"
```

### Kompatibilitas IDE

Lingkungan per proyek bekerja dengan terminal VS Code, PHPStorm, iTerm, Terminal.app, Windows Terminal, dan terminal lain yang memakai variabel lingkungan.

### Versi PHP Khusus Situs

1. Tambahkan situs pada modul Host FlyEnv.
2. Pilih versi PHP untuk situs tersebut.
3. Setiap situs berjalan secara mandiri.

Ini berguna untuk menguji kode yang sama pada beberapa versi PHP.

## Perbandingan Fitur

| Fitur | NVM | PHP Monitor | **FlyEnv** |
| --- | --- | --- | --- |
| Pergantian via perintah | Ya | Ya | Tidak diperlukan, otomatis |
| Antarmuka GUI | Tidak | Ya | Ya |
| Dukungan banyak bahasa | Node saja | PHP saja | PHP, Node, Python, Go, Java, Ruby |
| Isolasi per proyek | Manual | Manual | Otomatis |
| Pemasangan versi | Perintah | Homebrew | GUI sekali klik |
| Dukungan Windows | Ya | Tidak | Ya |
| Variabel lingkungan | Tidak | Tidak | Ya |

## Pemecahan Masalah

### Versi Salah di Terminal

1. Pastikan integrasi shell FlyEnv aktif.
2. Mulai ulang terminal setelah penyiapan pertama.
3. Pastikan proyek sudah terdaftar di FlyEnv.

### Versi Tidak Tersedia

Pasang versi tersebut dari antarmuka modul FlyEnv. Unduhan berasal dari sumber resmi dan tidak membutuhkan kompilasi lokal.

### Konflik dengan Pengelola Versi Lama

Hapus NVM dari `.zshrc`, lepas tautan PHP Homebrew dengan `brew unlink php`, lalu biarkan FlyEnv mengelola versi yang digunakan proyek.

## Pertanyaan Umum

**T: Haruskah saya menghapus NVM atau RVM?**

J: Tidak wajib, tetapi disarankan agar tidak terjadi konflik.

**T: Bagaimana pergantian otomatis bekerja?**

J: FlyEnv menambahkan shim pada `PATH` yang mendeteksi direktori aktif lalu memuat versi sesuai konfigurasi proyek.

**T: Apakah ini berlaku di CI/CD?**

J: FlyEnv ditujukan untuk pengembangan lokal. Untuk CI/CD, tentukan versi pada file workflow atau gunakan Docker bila diperlukan.

**T: Apa yang terjadi di luar folder proyek?**

J: FlyEnv memakai versi bawaan sistem atau default global yang Anda konfigurasi.

## Siap Berhenti Mengelola Versi Secara Manual?

Biarkan lingkungan mengikuti pekerjaan Anda, bukan sebaliknya.

- [Unduh FlyEnv gratis](/id/download) untuk macOS, Windows, dan Linux.
- Pelajari [Isolasi Lingkungan per Proyek](/id/guide/project-level-runtime-environment).
- Mulai dari [Panduan Mulai Cepat](/id/guide/getting-started).
