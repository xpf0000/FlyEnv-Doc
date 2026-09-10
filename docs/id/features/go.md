---
layout: doc
titleTemplate: false
title: 'Manajer Versi dan Runtime Proyek Go | FlyEnv'
description: 'Pasang dan alihkan versi Go dari build Static, Homebrew, atau GVM, serta jalankan proyek dengan runtime per proyek.'
head:
  - - meta
    - name: description
      content: 'Pasang dan alihkan versi Go dari build Static, Homebrew, atau GVM, serta jalankan proyek dengan runtime per proyek.'
  - - meta
    - property: og:title
      content: 'Manajer Versi dan Runtime Proyek Go | FlyEnv'
  - - meta
    - property: og:description
      content: 'Pasang dan alihkan versi Go dari build Static, Homebrew, atau GVM, serta jalankan proyek dengan runtime per proyek.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/id/features/go
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/id/features/go
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Pengembangan Go Lokal dengan FlyEnv

Go adalah bahasa pemrograman terkompilasi dan bertipe statis yang lazim digunakan untuk layanan jaringan, alat baris perintah, dan perangkat lunak infrastruktur cloud. FlyEnv mengatur pengembangan Go lokal dalam satu aplikasi: pasang beberapa versi Go berdampingan, tentukan versi untuk perintah terminal `go`, integrasikan GVM di macOS dan Linux, serta ikat setiap proyek ke runtime Go sendiri. Modul Go memiliki lima tab—Proyek Go, Layanan, Manajer Versi, Proyek Baru, dan GVM—untuk pemasangan versi, pengelolaan PATH, runtime proyek, serta pembuatan kerangka proyek.

![Ikhtisar modul Go di FlyEnv](https://oss.macphpstudy.com/image/features/go-1.webp)

## Manajemen versi Go

Pasang versi Go berdampingan dari **Go → Manajer Versi** dan sediakan semuanya sekaligus.
[gradle.md](gradle.md)
- **Build Static di semua platform:** FlyEnv mengunduh rilis Go resmi—arsip `.tar.gz` dari daftar rilis go.dev di macOS dan Linux, serta paket zip di Windows—kemudian mengekstraknya ke direktori terkelola sendiri.
- **Sumber manajer paket:** di macOS Anda juga dapat memasang formula `go` dari Homebrew atau MacPorts; di Linux, Homebrew tersedia sebagai sumber tambahan.
- **Direktori kustom:** arahkan FlyEnv ke direktori yang memuat build Go Anda sendiri agar tampil di samping versi terkelola.
- **Deteksi GVM:** di macOS dan Linux, FlyEnv otomatis menemukan versi Go yang dipasang lewat GVM dan menampilkannya bersama versi terkelola.

![Manajer Versi Go dengan sumber Static, Homebrew, dan MacPorts](https://oss.macphpstudy.com/image/features/go-2.webp)

Di macOS dan Linux, tab **GVM** khusus terintegrasi langsung dengan pemasangan GVM yang sudah ada: FlyEnv mendeteksi GVM dalam `~/.gvm` atau melalui `GVM_ROOT`, menawarkan pemasangan GVM sekali klik pada terminal tertanam jika belum ada, serta menampilkan versi yang dikelola GVM dengan tindakan pasang dan gunakan.

![Tab GVM yang menampilkan versi Go terkelola GVM](https://oss.macphpstudy.com/image/features/go-3.webp)

## Pengalihan versi baris perintah

Nama **Layanan** agak menyesatkan untuk Go: tab ini tidak pernah memulai atau menghentikan apa pun karena FlyEnv tidak menjalankan daemon Go. Isinya adalah tabel versi terpasang dengan pengelolaan PATH bawaan.

- **Pengalihan versi terminal:** pilih versi terpasang yang dipakai perintah terminal `go`. FlyEnv menulis ulang `PATH` dengan menambah atau menghapus direktori bin versi serta memberi label setiap entri agar Anda tahu apakah FlyEnv atau alat lain yang menambahkannya.
- **Alias dan catatan per versi:** tambahkan alias singkat dan catatan bebas pada setiap pemasangan agar build serupa mudah dibedakan dalam daftar.
- **Pemeliharaan:** jalur pemasangan ditampilkan langsung pada tabel dan versi yang tidak lagi diperlukan dapat dihapus dari tempat yang sama.

## Runtime Go tingkat proyek

Dalam **Go → Proyek**, daftarkan setiap folder proyek dan ikat ke versi Go tertentu, bukan bergantung pada versi yang kebetulan ada di PATH. [Panduan lingkungan runtime tingkat proyek](/id/guide/project-level-runtime-environment) menjelaskan mekanismenya secara rinci.

- **Runtime per proyek:** pilihan versi disimpan dalam berkas `.flyenv` di direktori proyek sehingga terminal dan editor yang dibuka dari FlyEnv otomatis memakai toolchain Go yang benar.
- **Jalankan sebagai layanan:** proyek dapat dijalankan langsung dari FlyEnv memakai perintah atau berkas jalan kustom, port proyek sebagai tautan `http://127.0.0.1:<port>`, variabel lingkungan dari kolom langsung atau berkas env, serta sakelar sudo di macOS dan Linux. Untuk memasang port tersebut di belakang domain lokal ber-HTTPS, lihat pengaturan Nginx, Apache, dan Caddy dalam [panduan reverse proxy](/id/guide/reverse-proxy-nestjs-multi-servers).
- **Buka dengan alat lain:** buka terminal sistem dari baris proyek atau buka proyek di GoLand dengan lingkungan yang telah dimuat.
- **Templat Proyek Baru:** buat kerangka modul `go mod init` biasa atau proyek berbasis Gin, Echo, Fiber, Iris, GoFrame, atau Buffalo tanpa meninggalkan aplikasi. [Solusi Gitea](/id/solutions/gitea) memperlihatkan aplikasi Go tingkat produksi yang disajikan melalui pengelolaan situs FlyEnv.

![Daftar Proyek Go dengan pengikatan versi Go per proyek](https://oss.macphpstudy.com/image/features/go-4.webp)

Untuk menjalankan proyek ini sebagai layanan latar belakang yang tetap aktif, lihat panduan [menerapkan proyek Node.js, Python, dan Go tanpa Docker](/id/guide/deploy-nodejs-python-go-without-docker).

<FeatureRelatedLinks locale="id" slug="go" />

## Catatan kompatibilitas

FlyEnv mengelola pemasangan versi Go, pengalihan PATH, dan runtime proyek; FlyEnv tidak menyertakan perkakas framework selain yang disediakan build Go serta ekosistem modul Go. Sumber pemasangan berbeda menurut platform—tab dan deteksi otomatis GVM hanya ada di macOS dan Linux, sedangkan Windows memakai build Static—jadi gunakan [halaman Unduhan](/id/download) serta catatan rilis terbaru sebagai acuan paket yang didukung.
