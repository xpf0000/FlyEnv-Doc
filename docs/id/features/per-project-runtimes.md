---
layout: doc
titleTemplate: false
title: 'Runtime per Proyek di FlyEnv'
description: 'Ikat setiap proyek pada versi runtime sendiri dengan FlyEnv.'
head:
  - - meta
    - name: description
      content: 'Ikat setiap proyek pada versi runtime sendiri dengan FlyEnv.'
  - - meta
    - property: og:title
      content: 'Runtime per Proyek di FlyEnv'
  - - meta
    - property: og:description
      content: 'Ikat setiap proyek pada versi runtime sendiri dengan FlyEnv.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/id/features/per-project-runtimes
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/id/features/per-project-runtimes
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Runtime per Proyek di FlyEnv

FlyEnv memungkinkan setiap folder proyek membawa versi runtime sendiri, sehingga basis kode PHP lama dan aplikasi Node.js modern dapat hidup berdampingan di komputer yang sama. Lihat [mengelola beberapa versi Node dan PHP](/id/guide/manage-multiple-node-php-versions) untuk sisi manajer versi. Daftarkan proyek di tab **Proyek** modul bahasa apa pun, pilih versi binari yang tepat, dan FlyEnv mencatat pilihan itu di dalam proyek. Sejak saat itu, terminal, editor, dan perintah yang dijalankan untuk proyek tersebut otomatis menggunakan toolchain yang benar. Alur langkah demi langkah tersedia di [panduan lingkungan runtime tingkat proyek](/id/guide/project-level-runtime-environment).

Misalnya, ikat satu proyek ke Node.js 22 dan proyek lain ke Node.js 24. Buka masing-masing dari **Projects**, atau masuk ke direktori terdaftarnya di shell yang didukung dengan hook FlyEnv aktif. Jalankan `node -v` untuk memeriksa versi yang dipakai. [Lihat demo perpindahan proyek](/id/demos?video=project-environment-switching).

![Tab Proyek FlyEnv yang mencantumkan proyek terdaftar dan versi runtime terikat](https://oss.macphpstudy.com/image/flyenv-version-switch.webp)

## Cara kerja .flyenv

Editor atau terminal yang dibuka secara terpisah bisa memakai lingkungan awalnya. Gunakan tindakan buka proyek FlyEnv atau shell yang mendukung pemuatan konfigurasi proyek.

- **Menambahkan PATH di depan:** di macOS dan Linux, berkas berisi baris `export PATH="<bin>:<bin>/bin:<bin>/sbin:$PATH"` yang menunjuk direktori runtime terikat; di Windows digunakan penetapan PowerShell `$env:PATH` yang setara.
- **Bertanda dan idempoten:** setiap baris yang ditulis FlyEnv diberi tag `#FlyEnv-ID-<projectId>`, sehingga pengeditan ulang menulis baris yang sama di tempatnya, bukan menambahkan duplikat.
- **Per modul bahasa:** tab Proyek digunakan bersama modul bahasa—PHP, [NodeJS](/id/features/nodejs), [Python](/id/features/python), Go, Ruby, Rust, Java, .NET, Bun, Deno, dan lainnya—namun setiap modul menyimpan daftar proyek dan versi terikatnya sendiri.
- **Dapat diedit di aplikasi:** berkas `.flyenv` dapat dibuka dan disesuaikan dari tampilan konfigurasi proyek jika Anda memerlukan sesuatu di luar entri PATH bawaan.

![Berkas .flyenv yang ditulis FlyEnv dengan baris ekspor PATH bertanda](https://oss.macphpstudy.com/image/features/per-project-runtimes-2.webp)

## Hook shell untuk zsh, bash, dan PowerShell

Berkas `.flyenv` berlaku melalui hook shell yang dipasang FlyEnv di berkas startup shell.

- **zsh dan bash di macOS/Linux:** FlyEnv mengambil skrip pembantu dari `~/.zshrc` dan `~/.bashrc`. Hook memantau perubahan direktori dan, saat Anda `cd` ke proyek terdaftar, mengambil berkas `.flyenv` proyek itu—sehingga `php -v` atau `node -v` segera melaporkan versi terikat.
- **Hanya direktori dalam daftar izin:** hook hanya mengaktifkan berkas `.flyenv` untuk direktori proyek yang telah didaftarkan dan disinkronkan FlyEnv ke daftar izin; berkas asing di lokasi lain tidak pernah dieksekusi.
- **PowerShell di Windows:** mekanisme yang sama ditautkan ke profil PowerShell, mencakup Windows PowerShell dan PowerShell (pwsh).

![Hook shell memuat berkas .flyenv proyek setelah perubahan direktori](https://oss.macphpstudy.com/image/features/per-project-runtimes-3.webp)

## Integrasi IDE dan terminal

Karena pengikatan berada di proyek, bukan pengaturan global, alat apa pun yang dijalankan pada folder tersebut mewarisi lingkungan yang benar.

- **Tindakan buka:** setiap baris proyek menyediakan pintasan membuka folder di terminal atau IDE—Terminal dan PowerShell, serta editor seperti VSCode, PhpStorm, WebStorm, PyCharm, atau Sublime sesuai modul bahasa—dengan lingkungan proyek sudah diterapkan.
- **Jalankan sebagai layanan:** proyek dapat dijalankan langsung dari FlyEnv dengan perintah mulai atau berkas run khusus, port pilihan (bawaan 3000, ditautkan sebagai `http://127.0.0.1:<port>`), dan variabel lingkungan tambahan yang diberikan sebaris atau melalui berkas env; berguna agar server pengembangan tetap hidup tanpa jendela terminal.
- **Edit cepat:** klik dua kali baris proyek membuka editor ringkas untuk versi terikat, port, dan komentar, sehingga pergantian runtime proyek hanya membutuhkan beberapa detik.

## Pemilihan versi per situs

Setiap situs yang dibuat di [Host](/id/features/local-sites-https) dapat memilih versi PHP terpasang yang melayaninya. Beberapa versi dapat melayani situs berbeda sekaligus. macOS dan Linux memakai soket Unix terpisah, sementara Windows memakai listener FastCGI terpisah. Lihat [fitur PHP](/id/features/php) untuk detail platform.

![Daftar situs modul Host yang menampilkan versi PHP untuk setiap situs](https://oss.macphpstudy.com/image/features/per-project-runtimes-4.webp)

<FeatureRelatedLinks locale="id" slug="per-project-runtimes" />

## Catatan kompatibilitas

Hook shell memerlukan shell login yang didukung: zsh atau bash di macOS/Linux, dan PowerShell (Windows PowerShell atau pwsh) di Windows; shell lain tidak di-hook otomatis. Hook hanya mengambil berkas `.flyenv` untuk direktori yang terdaftar di FlyEnv dan mengubah PATH pada sesi shell saat ini; variabel lingkungan sistem global tidak berubah. Pengikatan versi memilih runtime yang telah dipasang atau ditambahkan di FlyEnv, bukan menyediakan versi yang belum ada di komputer. Pemilihan PHP per situs berlaku untuk situs yang dilayani PHP-FPM (FastCGI di Windows); situs statis dan runtime non-PHP tidak menggunakannya. Perbedaan platform—seperti soket Unix di macOS/Linux dibanding worker FastCGI di Windows—mengikuti perilaku [modul PHP](/id/features/php). [Halaman Unduhan](/id/download) mencerminkan komponen yang tersedia untuk sistem operasi Anda.
