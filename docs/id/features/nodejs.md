---
layout: doc
titleTemplate: false
title: 'Runtime Node.js Lokal dan Layanan Proyek | FlyEnv'
description: 'Kelola versi Node.js dan jalankan aplikasi proyek sebagai layanan lokal dengan FlyEnv.'
head:
  - - meta
    - name: description
      content: 'Kelola versi Node.js dan jalankan aplikasi proyek sebagai layanan lokal dengan FlyEnv.'
  - - meta
    - property: og:title
      content: 'Runtime Node.js Lokal dan Layanan Proyek | FlyEnv'
  - - meta
    - property: og:description
      content: 'Kelola versi Node.js dan jalankan aplikasi proyek sebagai layanan lokal dengan FlyEnv.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/id/features/nodejs
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/id/features/nodejs
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Node.js di FlyEnv

Node.js adalah runtime JavaScript berbasis mesin V8 yang menjalankan JavaScript di luar browser, biasanya untuk server web, API, dan alat baris perintah. Modul Node.js FlyEnv menggabungkan manajemen versi dengan alur layanan proyek. Pilih runtime yang dibutuhkan proyek, jalankan perintah dari direktori proyek, dan pantau port, variabel lingkungan, serta log di samping layanan lokal lainnya.

## Kelola versi Node.js

Tab **Manajer Versi** mencantumkan versi yang tersedia bagi FlyEnv dan versi yang sudah terpasang di komputer. Di macOS dan Linux, FlyEnv dapat menggunakan alat `fnm` atau `nvm` yang dikonfigurasi; aplikasi juga memiliki alur runtime terkelola bawaan. Di Windows, rilis saat ini menggunakan alur pemasangan bawaan FlyEnv, bukan instalasi NVM atau FNM eksternal.

Gunakan daftar versi untuk memasang runtime sebelum menugaskannya ke proyek. Ketersediaan binari dan paket bergantung pada sistem operasi serta metadata rilis, jadi periksa daftar di build FlyEnv Anda saat ini.

## Ikat runtime ke proyek

Di **Node.js → Proyek**, tambahkan jalur proyek dan pilih binari yang terpasang. Model proyek FlyEnv menyimpan jalur dan versi binari terpilih, lalu integrasi shell memuat lingkungan proyek saat Anda memasuki direktori tersebut. Ini berguna ketika aplikasi klien lama dan aplikasi modern memerlukan versi Node.js berbeda.

[Panduan runtime tingkat proyek](/id/guide/project-level-runtime-environment) menjelaskan penyiapan dan perilaku shell, termasuk proyek PHP, Python, Go, Ruby, dan Java yang menggunakan model isolasi sama.

## Jalankan aplikasi Node.js sebagai layanan

Aktifkan **Jalankan sebagai layanan** di editor proyek agar aplikasi tetap berjalan. Konfigurasikan:

- perintah seperti `npm run dev`, `npm run start`, atau skrip yang didokumentasikan proyek;
- port TCP, misalnya `3000`;
- variabel lingkungan langsung atau melalui berkas env;
- jalur berkas konfigurasi dan log opsional;
- jalur berkas PID bila proses membuatnya.

FlyEnv menyediakan kontrol mulai dan berhenti di daftar proyek serta menampilkan log keluaran dan error proyek. Perintah dijalankan dari jalur proyek, sehingga pemasangan dependensi dan langkah build tetap menjadi tanggung jawab proyek.

Model layanan proyek yang sama dapat menjalankan berkas skrip atau executable lain untuk stack khusus. Ini tidak terbatas pada Express atau Next.js; syarat utamanya adalah perintah mulai yang valid dan port yang dapat didengarkan aplikasi secara lokal.

## Tempatkan Node.js di balik domain lokal

Proses Node dapat mendengarkan `127.0.0.1:3000` sementara Host FlyEnv menyediakan alamat untuk browser. Tambahkan situs, konfigurasikan aturan reverse proxy ke port proyek, dan aktifkan HTTPS saat integrasi memerlukan origin aman. Siklus hidup proses tetap berada di modul Node.js, sedangkan konfigurasi domain/server berada di Host.

Tautan berguna:

- [Penyiapan Reverse Proxy untuk NestJS dan Node.js](/id/guide/reverse-proxy-nestjs-multi-servers)—konfigurasikan Nginx, Apache, atau Caddy.
- [Situs Lokal, Domain Kustom & HTTPS](/id/features/local-sites-https)—pahami root situs, port, sertifikat, dan alias.
- [Deploy Node.js, Python & Go Tanpa Docker](/id/guide/deploy-nodejs-python-go-without-docker)—panduan lengkap layanan proyek.
- [solusi Directus](/id/solutions/directus) dan [solusi Strapi](/id/solutions/strapi)—contoh stack lokal berbasis Node.

## Lihat alurnya

[Demo runtime proyek Node](/id/demos) menunjukkan pemilihan versi, layanan proyek, dan Nginx bekerja bersama. [Demo layanan native Node.js, Python, dan Go](/id/demos) memperlihatkan kontrol layanan yang sama pada beberapa runtime.

<FeatureRelatedLinks locale="id" slug="nodejs" />

## Catatan kompatibilitas

Manajer paket Node.js, CLI kerangka kerja, dan manajer proses produksi tetap merupakan alat terpisah. FlyEnv mengelola pemilihan runtime lokal dan entri proses; FlyEnv tidak menggantikan skrip `package.json`, lockfile, atau platform deployment produksi. Gunakan [halaman Unduhan](/id/download) untuk memasang rilis FlyEnv terbaru bagi sistem operasi Anda.
