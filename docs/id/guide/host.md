---
title: 'Domain Kustom dan SSL Otomatis untuk Pengembangan Lokal'
head:
  - - meta
    - name: description
      content: Buat situs lokal profesional dengan domain kustom, sertifikat SSL otomatis, reverse proxy, dan konfigurasi server web melalui FlyEnv.
---

# Domain Kustom dan SSL Otomatis untuk Pengembangan Lokal

URL seperti `localhost:3000` praktis, tetapi tidak selalu merepresentasikan perilaku domain, cookie, OAuth callback, atau HTTPS di aplikasi nyata. Modul Host FlyEnv memungkinkan situs lokal memakai domain kustom dan sertifikat lokal yang dipercaya.

## Mengapa Domain Kustom

- URL seperti `https://myproject.test` mudah dibaca dan dibagikan dalam tim.
- Banyak fitur browser, misalnya secure cookie dan service worker, membutuhkan HTTPS.
- Beberapa proyek dapat berjalan serentak dengan domain dan runtime yang berbeda.
- Reverse proxy dapat menyembunyikan port aplikasi Node.js atau Python.

FlyEnv mengelola file hosts, konfigurasi Nginx/Apache/Caddy, serta sertifikat lokal agar penyiapan tidak dilakukan berulang kali secara manual.

## Membuat Situs Domain Kustom Pertama

### 1. Pilih Nama Domain

Gunakan domain `.test`, misalnya `myproject.test`. Hindari `.local` di jaringan yang memakai mDNS. Pastikan nama tidak sama dengan domain internet yang penting untuk pekerjaan Anda.

### 2. Tambahkan Situs pada FlyEnv

1. Buka modul **Host**.
2. Klik **Add Site**.
3. Isi nama host, root proyek, server web, versi PHP bila perlu, dan port.
4. Simpan konfigurasi.

### 3. Atur Root Proyek dengan Benar

Untuk Laravel, root harus menunjuk ke folder `public`, bukan root repositori. Untuk WordPress atau situs statis, pilih direktori yang berisi file yang ingin disajikan. Kesalahan root dapat mengekspos `.env` atau data sensitif lain.

### 4. Aktifkan Auto SSL

Edit situs dan aktifkan **Use SSL** atau **Auto SSL**. FlyEnv membuat sertifikat lokal dan menambahkan konfigurasi server web yang diperlukan. Kemudian buka `https://myproject.test`.

### 5. Jalankan dan Uji Layanan

Nyalakan Nginx, Apache, atau Caddy serta PHP-FPM jika digunakan. Klik tautan situs pada daftar Host dan periksa log situs bila halaman tidak terbuka.

## Opsi Konfigurasi Situs

### Port dan Alias Host

Gunakan port 80 dan 443 untuk pengalaman domain standar. Tambahkan alias bila satu situs perlu merespons beberapa nama lokal.

### Park dan Subdomain

Fitur Park dapat membantu menangani subdomain lokal secara otomatis. Gunakan hanya untuk pola domain yang Anda kendalikan agar tidak menutupi situs lain.

### URL Rewrite

Pilih template rewrite framework saat tersedia. Contoh Laravel untuk Nginx:

```nginx
location / {
    try_files $uri $uri/ /index.php?$query_string;
}
```

Untuk WordPress, aktifkan rewrite yang mengarahkan permalink ke `index.php` bila berkas tidak ditemukan.

## Sertifikat SSL Lanjutan

Sertifikat Auto SSL FlyEnv ditujukan untuk pengembangan lokal. Pada Linux, jika browser belum memercayai sertifikat, impor CA root FlyEnv ke trust store sistem, lalu mulai ulang browser. Lokasi sertifikat berbeda menurut pemasangan; periksa pengaturan FlyEnv terlebih dahulu.

Anda juga dapat mengimpor sertifikat kustom jika proyek membutuhkannya. Lindungi private key dan jangan memasukkannya ke repositori.

## Beberapa Server Web dan Reverse Proxy

Situs yang berbeda dapat memakai Nginx, Apache, atau Caddy dengan port serta host sendiri. Untuk aplikasi Node.js, Python, dan Go, buat Host yang meneruskan permintaan ke port proses aplikasi. Lihat [panduan reverse proxy](/id/guide/reverse-proxy-nestjs-multi-servers) untuk konfigurasi lengkap.

## Pemecahan Masalah

**Situs tidak dapat dijangkau:** pastikan server web berjalan, domain mengarah ke `127.0.0.1`, dan port tidak dipakai proses lain.

**Koneksi tidak privat:** aktifkan ulang Auto SSL, perbarui trust store bila diperlukan, lalu mulai ulang browser.

**502 atau 504:** pastikan PHP-FPM atau aplikasi reverse proxy berjalan pada target yang benar.

**403 Forbidden:** periksa root proyek dan izin berkas.

**Domain menuju IP salah:** periksa entri hosts dan DNS/proxy lokal lain yang aktif.

## Praktik Baik

- Gunakan satu domain `.test` yang jelas untuk setiap proyek.
- Tetapkan versi PHP pada situs, bukan hanya pada sistem global.
- Simpan konfigurasi rahasia di `.env` dan jauhkan dari document root.
- Gunakan SSL lokal saat menguji cookie aman, OAuth, PWA, atau webhook.

## Langkah Berikutnya

- [Menjalankan Laravel dengan FlyEnv](/id/guide/run-laravel-use-flyenv)
- [Reverse proxy NestJS, Node.js, dan Next.js](/id/guide/reverse-proxy-nestjs-multi-servers)
- [Cloudflare Tunnel untuk akses publik](/id/guide/cloudflare-tunnel-local-development)
