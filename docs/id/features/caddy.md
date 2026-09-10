---
layout: doc
titleTemplate: false
title: 'Caddy di FlyEnv: panduan pengembangan lokal'
description: 'Pasang, konfigurasikan, dan kelola Caddy di FlyEnv untuk pengembangan lokal.'
head:
  - - meta
    - name: description
      content: 'Pasang, konfigurasikan, dan kelola Caddy di FlyEnv untuk pengembangan lokal.'
  - - meta
    - property: og:title
      content: 'Caddy di FlyEnv: panduan pengembangan lokal'
  - - meta
    - property: og:description
      content: 'Pasang, konfigurasikan, dan kelola Caddy di FlyEnv untuk pengembangan lokal.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/id/features/caddy
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/id/features/caddy
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Caddy di FlyEnv

Caddy adalah server web sumber terbuka yang dikonfigurasi melalui satu Caddyfile dan memiliki HTTPS otomatis. FlyEnv menjadikannya bagian terkelola dari stack lokal Anda: pasang versi dari beberapa sumber, jalankan satu versi sebagai layanan dengan pemuatan ulang konfigurasi otomatis, dan biarkan FlyEnv membuat virtual host untuk setiap situs bertipe PHP. Setiap situs tersebut memiliki port Caddy sendiri, HTTPS internal otomatis, serta aturan reverse proxy per situs yang disatukan oleh Caddyfile terkelola.

![Ikhtisar modul Caddy di FlyEnv](https://oss.macphpstudy.com/image/features/caddy-1.webp)

## Manajemen versi Caddy

Pasang Caddy dari **Caddy → Manajer Versi** dan simpan versi yang Anda perlukan.

- **Beberapa sumber pemasangan:** build Static dari daftar versi online FlyEnv tersedia di semua platform—entri Windows mengarah ke rilis GitHub—ditambah Homebrew di macOS dan Linux serta MacPorts di macOS.
- **Versi kustom:** arahkan FlyEnv ke folder berisi biner Caddy yang dikompilasi sendiri atau dipasang secara eksternal; biner tersebut muncul di daftar versi bersama versi terkelola.
- **Satu versi berjalan:** beberapa versi dapat dipasang, tetapi hanya satu yang berjalan sebagai layanan Caddy pada suatu waktu.

![Manajer Versi Caddy dengan sumber pemasangan](https://oss.macphpstudy.com/image/features/caddy-2.webp)

## Manajemen layanan

Caddy berjalan sebagai proses latar depan yang diawasi FlyEnv, melalui `caddy run --config <baseDir>/caddy/Caddyfile --watch`; di Linux proses dimulai lewat pembantu root FlyEnv agar dapat mengikat port istimewa.

- **Pemuatan ulang otomatis:** tanda `--watch` membuat Caddy memuat ulang konfigurasi setiap kali berubah, sehingga perubahan Caddyfile atau virtual host situs berlaku tanpa memulai ulang secara manual.
- **Kontrol bilah sisi dan baki:** mulai atau hentikan Caddy dari sakelar modul di bilah sisi maupun langsung dari baki sistem tanpa membuka jendela utama.
- **Perbaikan virtual host saat mulai:** ketika layanan mulai, FlyEnv membangun ulang berkas virtual host situs yang hilang agar situs yang baru ditambahkan atau dipulihkan langsung dapat dilayani.

![Tab layanan Caddy dengan kontrol mulai dan henti](https://oss.macphpstudy.com/image/features/caddy-3.webp)

## Konfigurasi

Caddy menggunakan satu **Caddyfile** global yang dibuat FlyEnv dari templat. Berkas tersebut menetapkan direktori penyimpanan SSL dan berkas log, lalu diakhiri baris `import vhost/caddy/*` untuk memuat virtual host setiap situs.

- **Editor sumber:** tab **Berkas Konfigurasi** mengedit Caddyfile langsung dalam editor sumber lengkap; tidak ada formulir pengaturan visual, sehingga seluruh sintaks Caddyfile tetap tersedia.
- **Diterapkan otomatis:** karena layanan berjalan dengan `--watch`, menyimpan berkas sudah cukup agar Caddy menerapkan konfigurasi baru.

## Integrasi situs

Caddy adalah salah satu server web yang dapat melayani situs dari modul Host FlyEnv. Hanya situs bertipe PHP yang memperoleh virtual host Caddy terbuat otomatis dan terhubung ke PHP-FPM dari [modul PHP](/id/features/php). Situs Node, Java, Go, dan Python dijangkau lewat reverse proxy—[panduan reverse proxy multi-server](/id/guide/reverse-proxy-nestjs-multi-servers) memperagakan pola ini—sedangkan situs Tomcat berada dalam `server.xml`.

- **Port per situs:** setiap situs PHP memiliki port Caddy sendiri (bawaan 80/443), terpisah dari port [Nginx](/id/features/nginx), Apache, atau [FrankenPHP](/id/features/frankenphp); satu situs pun dapat dilayani beberapa server web sekaligus.
- **HTTPS otomatis:** virtual host situs menggunakan `tls internal`, sehingga Caddy menerbitkan dan mempercayai sertifikat lokal secara otomatis. Anda juga dapat memilih berkas sertifikat sendiri, misalnya yang dibuat oleh [modul MkCert](/id/features/mkcert). Domain dan HTTPS dijelaskan dalam [Situs Lokal, Domain Kustom & HTTPS](/id/features/local-sites-https).
- **Reverse proxy per situs:** tambahkan aturan reverse proxy pada situs untuk meneruskan jalur ke server aplikasi lokal; FlyEnv menuliskannya ke virtual host Caddy situs tersebut.

![Virtual host situs Caddy dengan aturan reverse proxy](https://oss.macphpstudy.com/image/features/caddy-4.webp)

## Log

Halaman modul Caddy memiliki satu tab **Log** yang menampilkan `caddy/caddy.log` untuk seluruh server. Situs tetap mempunyai log akses dan error sendiri yang dapat dibuka dari penampil log situs di modul Host, sehingga lalu lintas satu domain mudah diisolasi. Tidak tersedia panel administrasi bawaan; tab log dan Caddyfile terkelola adalah seluruh permukaan operasionalnya.

<FeatureRelatedLinks locale="id" slug="caddy" />

## Catatan kompatibilitas

FlyEnv mengelola biner Caddy, siklus prosesnya, dan konfigurasi yang dibuat, tetapi tidak menjamin semua plugin Caddy atau variasi build kustom tersedia pada setiap sistem operasi. Caddyfile diedit mentah tanpa formulir visual; karena layanan memakai `--watch`, perubahan tersimpan diterapkan segera, jadi validasikan edit sebelum digunakan. Sumber pemasangan berbeda menurut platform (MacPorts hanya di macOS dan di Windows hanya ada sumber Static). Gunakan [halaman Unduhan](/id/download) dan catatan rilis terbaru sebagai acuan paket yang didukung.
