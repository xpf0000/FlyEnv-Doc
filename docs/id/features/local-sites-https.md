---
layout: doc
titleTemplate: false
title: 'Situs Lokal dan HTTPS di FlyEnv: panduan pengembangan lokal'
description: 'Pasang, konfigurasikan, dan kelola situs lokal serta HTTPS di FlyEnv untuk pengembangan lokal.'
head:
  - - meta
    - name: description
      content: 'Pasang, konfigurasikan, dan kelola situs lokal serta HTTPS di FlyEnv untuk pengembangan lokal.'
  - - meta
    - property: og:title
      content: 'Situs Lokal dan HTTPS di FlyEnv: panduan pengembangan lokal'
  - - meta
    - property: og:description
      content: 'Pasang, konfigurasikan, dan kelola situs lokal serta HTTPS di FlyEnv untuk pengembangan lokal.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/id/features/local-sites-https
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/id/features/local-sites-https
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Situs Lokal, Domain Kustom, dan HTTPS di FlyEnv

Modul Host memetakan proyek lokal ke alamat yang ramah peramban dan konfigurasi server web yang akan melayaninya. Entri situs dapat mencakup document root, alias, port per server, versi PHP opsional, aturan rewrite, aturan proxy balik, dan pengaturan sertifikat HTTPS.

## Kontrol entri situs

- **Domain dan alias:** pilih hostname seperti `myapp.test` dan tambahkan alias bila proyek yang sama memerlukan lebih dari satu nama lokal.
- **Document root:** arahkan situs statis atau aplikasi PHP ke direktori yang akan dilayani. Framework sering menggunakan direktori `public`.
- **Port server:** konfigurasikan port HTTP dan HTTPS untuk Nginx, Apache, Caddy, atau FrankenPHP; pengaturan lanjutan menampilkan port setiap server secara terpisah.
- **Pengikatan PHP:** pilih versi PHP terpasang untuk situs PHP, atau biarkan sebagai situs statis bila tidak diperlukan penangan PHP.
- **Aturan rewrite:** edit konfigurasi rewrite Nginx yang dibuat untuk framework yang merutekan melalui front controller.
- **Proxy balik:** petakan jalur seperti `/api` ke URL layanan lokal seperti `http://127.0.0.1:3000`.
- **HTTPS:** aktifkan Auto SSL untuk sertifikat yang dibuat secara lokal, atau berikan berkas sertifikat serta kunci bagi penyiapan kustom.

FlyEnv menulis pemetaan host yang dikonfigurasi ke berkas hosts sistem operasi bila situs memerlukan nama lokal. [Server DNS bawaan](/id/features/dns-server) adalah alternatif yang menyelesaikan domain situs tanpa menyentuh berkas hosts sama sekali. Izin pembantu inilah alasan penyiapan pertama mungkin meminta kata sandi administrator.

## Alur kerja situs lokal yang konsisten

1. Mulai server web dan runtime yang diperlukan proyek, misalnya Nginx plus PHP-FPM.
2. Buka **Host** dan pilih **Tambahkan Situs**.
3. Masukkan domain lokal serta document root yang tepat; untuk Laravel dan banyak framework PHP, gunakan direktori `public` proyek.
4. Pilih versi PHP atau mode situs statis, lalu tetapkan port server.
5. Aktifkan Auto SSL jika proyek membutuhkan HTTPS, cookie aman, callback OAuth, atau API peramban yang memerlukan origin aman.
6. Tambahkan aturan rewrite atau target proxy balik bila proyek memiliki front controller atau layanan aplikasi terpisah.
7. Simpan situs, mulai layanan terpilih, lalu buka tautan situs dari daftar Host.

[Panduan Host](/id/guide/host) memuat tangkapan layar serta penyiapan lengkap setiap bidang. Panduan ini juga menjelaskan alias, `localhost` dengan port eksplisit, templat rewrite, dan pemecahan masalah.

## Hubungkan layanan proyek ke domain

Host tidak harus meluncurkan proses aplikasi itu sendiri. Biarkan proses berada dalam modul bahasanya, lalu teruskan ke port lokalnya:

| Layanan aplikasi | Listener lokal | Aturan Host |
| --- | --- | --- |
| Node.js / NestJS | `127.0.0.1:3000` | `https://api.test` → `http://127.0.0.1:3000` |
| PHP Worker atau RoadRunner | `127.0.0.1:8787` | `https://worker.test` → `http://127.0.0.1:8787` |
| Frontend statis | document root server web | `https://frontend.test` → akar proyek |

Gunakan [halaman Fitur Node.js](/id/features/nodejs) untuk sisi layanan-proyek pola ini dan [halaman Fitur PHP](/id/features/php) untuk pilihan PHP-FPM serta worker.

## HTTPS dan sertifikat

Auto SSL membuat Certificate Authority lokal FlyEnv saat diperlukan, menerbitkan sertifikat untuk alias situs, dan menyimpan sertifikat/kunci bersama konfigurasi situs. Integrasi [MkCert](/id/features/mkcert) juga dapat membuat sertifikat pengembangan yang dipercaya secara lokal. Jika peramban atau sistem operasi tidak memercayai CA secara otomatis, ikuti instruksi sertifikat khusus platform dalam [panduan Host](/id/guide/host).

Jangan gunakan sertifikat lokal sebagai bukti bahwa situs dipercaya publik: sertifikat ini ditujukan untuk pengembangan dan pengujian lokal. Untuk pratinjau publik, pasangkan layanan lokal dengan [Cloudflare Tunnel](/id/guide/cloudflare-tunnel-local-development) atau deploy ke lingkungan yang ditujukan bagi lalu lintas eksternal.

<FeatureRelatedLinks locale="id" slug="local-sites-https" />

## Catatan kompatibilitas

Fitur situs bergantung pada server web dan runtime yang telah Anda pasang di FlyEnv, dan kepercayaan sertifikat memerlukan CA FlyEnv terpasang di sistem Anda. Verifikasi perilaku alias, port, dan HTTPS pada komputer sendiri, lalu gunakan [halaman Unduhan](/id/download) serta catatan rilis terbaru sebagai rujukan paket yang didukung.
