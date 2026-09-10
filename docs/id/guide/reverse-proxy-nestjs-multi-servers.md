---
title: 'Reverse Proxy NestJS dan Node.js dengan FlyEnv'
head:
  - - meta
    - name: description
      content: Konfigurasikan reverse proxy untuk NestJS, Node.js, dan Next.js lewat FlyEnv, Nginx, Apache, atau Caddy, dengan WebSocket, HTTPS, dan pemecahan masalah 502.
---

# Reverse Proxy untuk NestJS, Node.js, dan Next.js: Nginx, Apache, Caddy

Aplikasi Node.js biasanya mendengar pada port seperti 3000, sedangkan pengguna mengakses domain dan HTTPS pada port standar. Reverse proxy menerima request publik, meneruskannya ke aplikasi, dan menangani domain, SSL, header, log, serta WebSocket.

## Mengapa Memakai Reverse Proxy

- Pengguna membuka `https://api.myproject.test`, bukan `http://localhost:3000`.
- Beberapa aplikasi dapat memakai domain atau jalur berbeda.
- Sertifikat SSL dan header keamanan dikelola pada satu lapisan.
- WebSocket dan cache aset statis dapat dikonfigurasi dengan benar.

## Penyiapan dengan FlyEnv

1. Jalankan aplikasi NestJS, Node.js, atau Next.js pada port lokal, misalnya 3000.
2. Pada modul **Host**, tambahkan situs dengan domain seperti `api.myproject.test`.
3. Pilih tipe Reverse Proxy.
4. Tetapkan target `http://127.0.0.1:3000`.
5. Aktifkan Auto SSL bila perlu.
6. Simpan, mulai server web, dan buka domain tersebut.

Tambahkan beberapa aturan proxy untuk API, frontend, atau layanan WebSocket jika proyek memerlukannya.

## Konfigurasi Nginx

### Proxy Dasar

```nginx
server {
    listen 80;
    server_name api.myproject.test;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### WebSocket

Tambahkan header berikut pada location WebSocket atau location utama bila aplikasi memerlukannya:

```nginx
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection "upgrade";
```

Untuk aset statis, gunakan cache header yang sesuai; jangan cache respons API dinamis secara tidak sengaja.

## Konfigurasi Apache

Aktifkan `proxy`, `proxy_http`, dan `proxy_wstunnel`, lalu gunakan konfigurasi VirtualHost seperti berikut:

```apache
ProxyPreserveHost On
ProxyPass / http://127.0.0.1:3000/
ProxyPassReverse / http://127.0.0.1:3000/
```

Tambahkan aturan `ws://` atau `wss://` untuk endpoint WebSocket bila diperlukan. Untuk beberapa instance Node, gunakan balancer Apache dan health check sesuai kebutuhan.

## Konfigurasi Caddy

Caddy dapat menyiapkan proxy dasar dengan satu directive:

```caddy
api.myproject.test {
    reverse_proxy 127.0.0.1:3000
}
```

Untuk beberapa layanan, buat matcher jalur atau blok site terpisah. Caddy menangani WebSocket secara otomatis untuk banyak konfigurasi proxy standar.

## Catatan Framework

**NestJS:** pastikan aplikasi mendengar pada host yang dapat dijangkau proxy dan atur prefix global dengan konsisten.

**Next.js:** gunakan `next start` untuk build produksi lokal dan teruskan header host/proto agar redirect serta URL bekerja benar.

**Express:** aktifkan `trust proxy` bila aplikasi perlu membaca IP klien atau status HTTPS dari header proxy.

## Checklist Produksi Lokal

- Aplikasi proses dijalankan oleh service manager atau modul FlyEnv.
- Domain memiliki SSL lokal bila fitur browser membutuhkannya.
- Header `Host`, `X-Forwarded-For`, dan `X-Forwarded-Proto` diteruskan.
- WebSocket diuji bila aplikasi memakainya.
- Log proxy dan aplikasi dapat diakses.

## Pemecahan Masalah

**Cannot GET /**: periksa route aplikasi dan path yang diteruskan oleh proxy.

**WebSocket gagal:** periksa header Upgrade/Connection di Nginx atau aturan WebSocket Apache.

**502 Bad Gateway:** pastikan aplikasi berjalan, mendengar pada port target, dan dapat dibuka langsung melalui `http://127.0.0.1:3000`.

**Redirect berulang:** periksa `X-Forwarded-Proto` dan konfigurasi URL dasar aplikasi.

**IP klien menjadi 127.0.0.1:** teruskan header dan aktifkan trust proxy pada framework bila diperlukan.

## Langkah Berikutnya

- [Domain kustom dan SSL otomatis](/id/guide/host)
- [Menjalankan Node.js, Python, dan Go tanpa Docker](/id/guide/deploy-nodejs-python-go-without-docker)
- [Cloudflare Tunnel untuk akses publik](/id/guide/cloudflare-tunnel-local-development)
