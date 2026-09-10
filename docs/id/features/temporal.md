---
layout: doc
titleTemplate: false
title: 'Server Temporal Lokal dengan UI Web | FlyEnv'
description: 'Jalankan server Temporal lokal berbasis SQLite dengan namespace yang dibuat otomatis dan UI Web terkelola.'
head:
  - - meta
    - name: description
      content: 'Jalankan server Temporal lokal berbasis SQLite dengan namespace yang dibuat otomatis dan UI Web terkelola.'
  - - meta
    - property: og:title
      content: 'Server Temporal Lokal dengan UI Web | FlyEnv'
  - - meta
    - property: og:description
      content: 'Jalankan server Temporal lokal berbasis SQLite dengan namespace yang dibuat otomatis dan UI Web terkelola.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/id/features/temporal
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/id/features/temporal
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Pengembangan Temporal lokal dengan FlyEnv

Temporal adalah platform orkestrasi alur kerja tahan lama: platform ini menyimpan status alur kerja sehingga proses jangka panjang dan bertahap dapat bertahan dari crash, percobaan ulang, serta deployment. Aplikasi memodelkan saga, tugas terjadwal, dan proses bisnis lain sebagai kode, alih-alih merangkai [antrean](/id/features/rabbitmq) dan [tugas cron](/id/features/cron-jobs) secara manual. FlyEnv menjadikan penyiapan Temporal lokal sebagai layanan sekali klik: memasang `temporal-server`, membuat konfigurasi siap jalan berbasis SQLite, membuat namespace `default` setelah pertama kali dimulai, serta dapat meluncurkan UI Web Temporal sebagai proses pendamping terkelola—semuanya terikat pada `127.0.0.1` demi pengembangan lokal yang aman.

![Ikhtisar modul Temporal FlyEnv dengan tab layanan](https://oss.macphpstudy.com/image/features/temporal-1.webp)

## Manajemen versi

Pasang versi server Temporal dari **Temporal → Manajer Versi** dan simpan beberapa versi berdampingan.

- **Build daring statis:** FlyEnv mengambil rilis `temporal-server` yang tersedia dari daftar versi daring untuk sistem operasi dan arsitektur Anda. Arsip dibongkar otomatis, izin eksekusi diperbaiki, lalu pemeriksaan `--version` dijalankan setelah pemasangan.
- **Direktori khusus:** arahkan FlyEnv ke folder berisi binari `temporal-server` Anda; binari tersebut dicantumkan di samping pemasangan terkelola.
- **Satu versi aktif dalam satu waktu:** mulai, hentikan, atau mulai ulang versi terpilih dari tab Layanan atau sakelar bilah sisi; untuk beralih versi, hentikan versi yang berjalan terlebih dahulu.

![Manajer versi Temporal dengan daftar versi daring statis](https://oss.macphpstudy.com/image/features/temporal-2.webp)

## Layanan dan konfigurasi

Memulai Temporal menjalankan `temporal-server` dengan berkas konfigurasi per versi yang dibuat FlyEnv pada penggunaan pertama: `config/temporal-v<version>.yaml`.

- **Persistensi SQLite siap pakai:** konfigurasi yang dibuat memakai penyimpanan ganda SQLite—`default.db` untuk penyimpanan utama dan `visibility.db` untuk data visibilitas—dengan penyiapan skema otomatis, jadi tidak diperlukan basis data eksternal.
- **Port khusus lokal:** endpoint gRPC frontend mendengarkan **7233**, HTTP di 7243, matching di 7235, history di 7234, dan pprof di 7936—setiap layanan terikat pada `127.0.0.1`.
- **Pembuatan namespace otomatis:** setelah server dimulai, FlyEnv menggunakan binari CLI Temporal terpasang yang terbaru untuk mendaftarkan namespace `default`, dan mencoba ulang beberapa kali selama server menyelesaikan booting.
- **Konfigurasi ganda server/UI:** tab Berkas Konfigurasi memiliki dua subtab—**Server** mengedit `config/temporal-v<version>.yaml`, **UI** mengedit `config/temporal-ui.yaml`—keduanya dalam editor YAML mentah dengan salinan `.default` sebagai referensi. FlyEnv hanya membuat berkas yang belum ada dan tidak pernah menimpa edit Anda.

![Tab berkas konfigurasi Temporal dengan subtab Server dan UI](https://oss.macphpstudy.com/image/features/temporal-3.webp)

## Antarmuka web Temporal

Tab Layanan menyertakan tombol **Temporal UI** yang mengelola UI Web Temporal resmi sebagai proses terpisah.

- **Unduhan sesuai kebutuhan:** UI Web dilayani binari mandiri `ui-server`, yang tidak terikat pada versi server Temporal mana pun. Saat pertama kali dibuka, FlyEnv mencari rilis `temporalio/ui-server` terbaru di GitHub dan mengunduh aset yang sesuai untuk platform Anda (macOS, Linux, atau Windows; amd64 atau arm64).
- **Siklus hidup terkelola:** FlyEnv memulai `ui-server` dengan berkas pid dan konfigurasinya sendiri (`temporal-ui.yaml`: port **8233**, endpoint gRPC `127.0.0.1:7233`), lalu membuka `http://127.0.0.1:8233/` di browser.
- **Berhenti bersama server:** menghentikan layanan Temporal juga menghentikan proses UI, sehingga tidak ada proses yang tertinggal.
- Tombol menampilkan status pemuatan dan error ketika server UI sedang dipasang atau dimulai.

![Antarmuka web Temporal dibuka dari FlyEnv di peramban](https://oss.macphpstudy.com/image/features/temporal-4.webp)

## Log

Tab Log menyediakan empat penampil agar keluaran server dan UI dapat dibedakan:

- **Keluaran server** — keluaran standar dari `temporal-server` yang berjalan.
- **Error server** — aliran error server, tempat pertama untuk diperiksa saat proses mulai gagal.
- **Keluaran UI** — keluaran standar proses `ui-server`.
- **Error UI** — aliran error UI Web, berguna ketika UI tidak dapat menjangkau endpoint gRPC di 7233.

![Penampil log Temporal dengan pilihan log Server dan UI](https://oss.macphpstudy.com/image/features/temporal-5.webp)

<FeatureRelatedLinks locale="id" slug="temporal" />

## Catatan kompatibilitas

Modul Temporal hanya memasang build daring statis—tanpa sumber Homebrew atau MacPorts—di macOS, Windows, dan Linux; daftar versi tepatnya bergantung pada rilis untuk platform serta arsitektur Anda. Mengunduh binari `ui-server` UI Web memerlukan akses jaringan ke rilis GitHub. Semua port server dan UI terikat pada `127.0.0.1`; sesuaikan konfigurasi YAML jika memerlukan alamat lain. Pembuatan namespace otomatis bergantung pada binari CLI Temporal yang dipasang di FlyEnv.

Jika lebih memilih server pengembangan terpadu, modul **Temporal CLI** terpisah di FlyEnv menjalankan `temporal server start-dev`—mode pengembangan bawaan Temporal dengan UI Web terintegrasi sendiri (port bawaan 7233/8233, berkas SQLite `dev.db`), tanpa unduhan UI terpisah. Worker yang ditulis dengan Node.js, Python, atau Go terhubung ke endpoint frontend di 7233; [panduan menjalankan layanan Node.js, Python, dan Go tanpa Docker](/id/guide/deploy-nodejs-python-go-without-docker) membahas cara menjalankannya secara lokal di samping server. Lihat [Demo](/id/demos) untuk panduan modul layanan FlyEnv dan dapatkan build terbaru dari [halaman Unduhan](/id/download).
