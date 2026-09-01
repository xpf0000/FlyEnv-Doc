---
title: 'Mengekspos Localhost ke Internet: Alternatif ngrok dengan Cloudflare Tunnel'
head:
  - - meta
    - name: description
      content: Pelajari cara mengekspos localhost ke internet melalui Cloudflare Tunnel di FlyEnv. Dapatkan URL tetap, domain kustom, dan SSL dengan penyiapan sekali klik.
---

# Mengekspos Localhost ke Internet: Alternatif ngrok dengan Cloudflare Tunnel

Perlu membagikan situs pengembangan lokal kepada klien atau menguji webhook yang membutuhkan URL publik? Cloudflare Tunnel menyediakan domain kustom, URL tetap, SSL, dan bandwidth tanpa batas pada paket gratis. FlyEnv mengintegrasikannya langsung tanpa konfigurasi command line.

## Penyiapan Sekali Klik di FlyEnv

### Langkah 1: Dapatkan Cloudflare API Token

1. Masuk ke [Cloudflare Dashboard](https://dash.cloudflare.com).
2. Buka **My Profile -> API Tokens** lalu klik **Create Token**.
3. Gunakan template **Cloudflare Tunnel**, atau buat token dengan izin berikut:
   - `Account:Cloudflare Tunnel:Edit`
   - `Zone:Zone:Read`
   - `Zone:DNS:Edit`
4. Batasi token pada zone atau domain yang akan digunakan, lalu salin token.

### Langkah 2: Konfigurasikan FlyEnv

1. Buka modul **Cloudflare Tunnel** di FlyEnv.
2. Klik tombol tambah dan tempel **API Token**.
3. FlyEnv mengambil daftar domain yang tersedia secara otomatis.

![Modul Cloudflare Tunnel FlyEnv](https://oss.macphpstudy.com/image/cloud-tunnel-1.webp)

### Langkah 3: Buat Tunnel

1. Pilih zone, misalnya `yourdomain.com`.
2. Masukkan subdomain, misalnya `dev`; hasilnya `dev.yourdomain.com`.
3. Masukkan URL lokal, misalnya `http://localhost:3000` atau `https://myproject.test`.
4. Klik **Ok**.

FlyEnv membuat tunnel, record DNS, aturan routing, dan sertifikat SSL.

![Membuat tunnel](https://oss.macphpstudy.com/image/cloud-tunnel-2.webp)

### Langkah 4: Jalankan Tunnel

Klik **Start** pada modul. Situs lokal Anda kemudian tersedia pada URL publik, misalnya `https://dev.yourdomain.com`.

![Tunnel berjalan](https://oss.macphpstudy.com/image/cloud-tunnel-3.webp)

Anda dapat membuat beberapa tunnel, misalnya `dev` untuk situs utama, `api` untuk port 3000, `admin` untuk port 8080, atau satu domain preview untuk setiap klien.

## Konfigurasi Manual

Pastikan domain sudah ditambahkan ke Cloudflare dan `cloudflared` telah dipasang.

```bash
cloudflared tunnel login
cloudflared tunnel create dev-localhost
cloudflared tunnel route dns dev-localhost dev.yourdomain.com
```

Buat `config.yml`:

```yaml
tunnel: <your-tunnel-id>
credentials-file: /Users/username/.cloudflared/<tunnel-id>.json

ingress:
  - hostname: dev.yourdomain.com
    service: http://localhost:80
  - hostname: api.yourdomain.com
    service: http://localhost:3000
  - service: http_status:404
```

Kemudian mulai tunnel:

```bash
cloudflared tunnel run dev-localhost
```

Antarmuka FlyEnv menghapus kebutuhan mengingat perintah dan berkas konfigurasi tersebut.

## Contoh Penggunaan

- Pratinjau untuk klien pada domain sementara yang tetap.
- Webhook Stripe, GitHub, atau Slack yang mengarah ke aplikasi lokal.
- Pengujian situs pada perangkat iPhone dan Android fisik.
- Callback API yang mewajibkan HTTPS.
- Kolaborasi tim atau demo fitur yang sedang dikerjakan.

## Pemecahan Masalah

**Tidak dapat mengambil zone:** periksa token, izin `Zone:Read`, `DNS:Edit`, dan `Cloudflare Tunnel:Edit`, serta pastikan zone termasuk dalam token.

**Gagal membuat tunnel:** periksa koneksi internet, gunakan subdomain lain, dan periksa apakah nama tunnel sudah ada pada dashboard Cloudflare.

**Tunnel berjalan tetapi situs tidak dapat dibuka:** periksa URL lokal, pastikan layanan lokal benar-benar berjalan, lalu buka URL lokal langsung di browser.

**DNS belum aktif:** tunggu beberapa menit, periksa record DNS, dan pastikan proxy Cloudflare aktif bila diperlukan.

## Keamanan dan Catatan Lanjutan

Untuk preview privat, buat aplikasi pada [Cloudflare Zero Trust Dashboard](https://one.dash.cloudflare.com) dan tambahkan autentikasi Google atau GitHub. Tunnel bersifat koneksi keluar dari mesin Anda; localhost tidak diekspos langsung ke internet. Untuk sebagian besar pekerjaan pengembangan, satu tunnel sudah cukup.

## Pertanyaan Umum

**T: Apakah Cloudflare Tunnel gratis?**

J: Fitur yang dibahas, termasuk domain kustom, SSL, dan bandwidth, tersedia pada paket Cloudflare gratis. Integrasi FlyEnv juga gratis.

**T: Apakah WebSocket didukung?**

J: Ya. Aplikasi real-time dapat menggunakan Cloudflare Tunnel.

**T: Haruskah FlyEnv tetap berjalan?**

J: Ya. Tunnel berjalan melalui modul Cloudflare Tunnel FlyEnv dan berhenti saat aplikasi ditutup.

## Langkah Berikutnya

- [Unduh FlyEnv](/id/download)
- [Pengaturan reverse proxy](/id/guide/reverse-proxy-nestjs-multi-servers)
- [Domain kustom dan SSL otomatis](/id/guide/host)
