---
title: 'Menjalankan Proyek Node.js, Python, dan Go Tanpa Docker'
head:
  - - meta
    - name: description
      content: Jalankan proyek Node.js, Python, dan Go secara lokal tanpa Docker. FlyEnv menyediakan runtime native, isolasi per proyek, reverse proxy, SSL, dan tunneling.
---

# Menjalankan Proyek Node.js, Python, dan Go Tanpa Docker

Docker sangat berguna untuk produksi, tetapi dapat terasa berat untuk iterasi lokal. FlyEnv menjalankan Node.js, Python, Go, dan proyek lain sebagai proses native, dengan isolasi runtime per proyek, reverse proxy, SSL otomatis, dan Cloudflare Tunnel bila diperlukan.

## Mengapa Tanpa Docker?

| Fitur | Docker Desktop | FlyEnv Native |
| --- | --- | --- |
| Memori | Overhead VM beberapa GB | Hanya binary runtime |
| Cold start | Detik hingga puluhan detik | Cepat, biasanya di bawah satu detik |
| Ruang disk | Image dan layer kontainer | Runtime yang dipasang saja |
| Pergantian versi | Bangun ulang kontainer | Otomatis per proyek |

## Prasyarat

- FlyEnv pada macOS, Windows, atau Linux.
- Proyek Node.js, Python, atau Go.
- Perintah startup proyek.

## Menjalankan Proyek sebagai Modul Kustom

### 1. Buat atau Siapkan Proyek

Untuk Next.js, Anda dapat menggunakan template FlyEnv atau memakai proyek yang sudah ada:

```bash
cd "/path/to/your/nextjs-project"
npm install
npm run build
```

### 2. Buat Kategori Modul

Pada **Settings -> Modules**, klik ikon tambah di dekat Sites. Buat kategori seperti `ReactJS`, `PythonApps`, atau `GoServices` agar proyek sejenis tersusun rapi.

### 3. Tambahkan Entri Proyek

Klik **Add** di dalam kategori, lalu:

- aktifkan **Run as Service** agar FlyEnv mengelola start dan stop;
- aktifkan **Single Instance** bila beberapa proyek memakai port yang sama;
- tambahkan executable atau perintah yang perlu dijalankan;
- tambahkan berkas konfigurasi dan log bila ingin membukanya di FlyEnv.

### 4. Masukkan Perintah Startup

**Next.js di macOS/Linux:**

```bash
cd "/Users/username/projects/my-app"
npm run start
```

**Next.js di Windows PowerShell:**

```powershell
cd "F:\www\nextjs\my-app"
npm run start
```

**Python Flask:**

```bash
cd "/path/to/flask-app"
source venv/bin/activate
flask run --port=5000
```

**Aplikasi Go:**

```bash
cd "/path/to/go-app"
go run main.go
```

Gunakan jalur absolut. Tambahkan nomor port pada Notes agar konflik mudah ditemukan.

### 5. Mulai, Periksa, dan Pantau

Modul baru tampil pada sidebar FlyEnv. Klik **Start**, kemudian buka alamat lokal seperti `http://127.0.0.1:3000`. Gunakan tombol log pada modul untuk membaca output dan galat secara real-time.

## Domain Kustom, HTTPS, dan Tunneling

Untuk memakai `https://myapp.test`, buat situs pada modul Host lalu buat reverse proxy ke port aplikasi, misalnya 3000. FlyEnv mengelola sertifikat lokal.

Untuk membagikan aplikasi kepada kolega atau klien, gunakan [Cloudflare Tunnel](/id/guide/cloudflare-tunnel-local-development).

## Praktik Baik

1. Catat port yang digunakan setiap layanan.
2. Gunakan jalur absolut dalam perintah.
3. Kelola variabel lingkungan lewat FlyEnv atau profil shell proyek.
4. Pisahkan kategori modul untuk stack yang berbeda.
5. Tetapkan versi runtime per proyek agar Node.js, Python, atau Go tidak saling bertabrakan.

## Video Panduan

<iframe style="width: 100%; aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/SHK12kXApTM?si=YlgoKQQeXw86cCYN" title="Menjalankan Node, Python, dan Go sebagai layanan native" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Pertanyaan Umum

**T: Dapatkah beberapa proyek memakai versi Node.js berbeda?**

J: Ya. Isolasi per proyek mengganti runtime otomatis ketika Anda bekerja pada direktori berbeda.

**T: Apa yang dilakukan jika dua proyek memakai port sama?**

J: Aktifkan **Single Instance** atau ubah port salah satu proyek.

**T: Apakah ini untuk deployment produksi?**

J: Halaman ini berfokus pada pengembangan dan pengujian lokal. Gunakan pipeline deployment dan infrastruktur yang sesuai untuk produksi.

## Langkah Berikutnya

- [FlyEnv vs Docker & XAMPP](/id/guide/flyenv-vs-docker-xampp)
- [Isolasi Versi per Proyek](/id/guide/project-level-runtime-environment)
- [Reverse proxy untuk NestJS dan Node.js](/id/guide/reverse-proxy-nestjs-multi-servers)
- [Unduh FlyEnv](/id/download)
