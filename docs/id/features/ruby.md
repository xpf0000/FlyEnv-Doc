---
layout: doc
titleTemplate: false
title: 'Ruby di FlyEnv: panduan pengembangan lokal'
description: 'Pasang, konfigurasikan, dan kelola Ruby di FlyEnv untuk pengembangan lokal.'
head:
  - - meta
    - name: description
      content: 'Pasang, konfigurasikan, dan kelola Ruby di FlyEnv untuk pengembangan lokal.'
  - - meta
    - property: og:title
      content: 'Ruby di FlyEnv: panduan pengembangan lokal'
  - - meta
    - property: og:description
      content: 'Pasang, konfigurasikan, dan kelola Ruby di FlyEnv untuk pengembangan lokal.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/id/features/ruby
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/id/features/ruby
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Pengembangan Ruby lokal dengan FlyEnv

Ruby adalah bahasa pemrograman dinamis berorientasi objek yang dikenal untuk pengembangan web, terutama melalui framework Ruby on Rails. Modul Ruby FlyEnv menyatukan pengembangan Ruby lokal: pasang beberapa versi Ruby, tentukan versi yang digunakan perintah `ruby` di terminal, dan ikat setiap proyek ke runtime masing-masing. Modul ini memiliki tiga tab—Proyek Ruby, Layanan, dan Manajer Versi—yang berfokus pada pemasangan versi, pengendalian PATH, serta runtime proyek.

![Ikhtisar modul Ruby FlyEnv](https://oss.macphpstudy.com/image/features/ruby-1.webp)

## Manajemen versi Ruby

Pasang versi Ruby secara berdampingan dari **Ruby → Manajer Versi** dan simpan semuanya tetap tersedia sekaligus.

- **macOS:** pasang dari Homebrew (formula `ruby` dan formula berversi `ruby@x.y`) atau MacPorts. FlyEnv juga memindai otomatis direktori pustaka MacPorts untuk pemasangan Ruby yang sudah ada.
- **Linux:** pasang dari Homebrew.
- **Windows:** pasang dari daftar daring Statis berisi paket RubyInstaller.
- **Direktori kustom:** arahkan FlyEnv ke direktori yang memuat build Ruby Anda sendiri dan build itu muncul dalam daftar bersama versi terkelola.

![Manajer Versi Ruby dengan sumber Homebrew dan MacPorts](https://oss.macphpstudy.com/image/features/ruby-2.webp)

## Pengalihan versi baris perintah

Terlepas dari namanya, tab **Layanan** tidak menjalankan layanan. Ruby adalah interpreter, sehingga tidak ada daemon yang dikelola FlyEnv. Tab ini adalah tabel versi terpasang untuk pengendalian PATH.

- **Pengalihan versi terminal:** memilih versi di sini menentukan pemasangan yang digunakan perintah `ruby` pada terminal. FlyEnv menambahkan direktori bin versi itu ke `PATH` Anda (atau menghapusnya kembali) dan menandai apakah entri PATH aktif berasal dari FlyEnv atau alat lain. [Panduan lingkungan PATH sistem](/id/guide/setup-system-path-environment) menjelaskan mekanisme ini secara rinci.
- **Alias dan catatan per versi:** setiap pemasangan dapat memiliki alias singkat serta catatan agar build yang hampir serupa tetap mudah dibedakan.
- **Pemeliharaan:** setiap baris menampilkan jalur pemasangan versi dan menyediakan tindakan hapus untuk versi yang tidak lagi diperlukan.

## Runtime Ruby per proyek

Dalam **Ruby → Proyek**, daftarkan setiap folder proyek dan ikatkan ke versi Ruby tertentu, bukan mengandalkan versi apa pun yang kebetulan berada di PATH.

- **Runtime per proyek:** pilihan versi disimpan dalam berkas `.flyenv` di direktori proyek, sehingga terminal dan editor yang diluncurkan dari FlyEnv otomatis menggunakan Ruby yang tepat. Lihat [panduan lingkungan runtime tingkat proyek](/id/guide/project-level-runtime-environment), fitur [Runtime Per Proyek](/id/features/per-project-runtimes), dan [demo video](/id/demos) untuk cara kerja mekanisme ini.
- **Jalankan sebagai layanan:** secara opsional, jalankan proyek langsung dari FlyEnv dengan perintah mulai kustom, port TCP yang diekspos sebagai tautan `http://127.0.0.1:<port>`, variabel lingkungan sebaris atau dari berkas, serta tanda sudo di macOS dan Linux. Sakelar bilah samping memulai atau menghentikan semua proyek Ruby yang mengaktifkan layanan sekaligus.
- **Alat buka:** lompat dari baris proyek ke terminal sistem atau buka proyek di RubyMine dengan lingkungan telah dimuat.

![Daftar proyek Ruby dengan pengikatan versi Ruby per proyek](https://oss.macphpstudy.com/image/features/ruby-3.webp)

<FeatureRelatedLinks locale="id" slug="ruby" />

## Catatan kompatibilitas

FlyEnv mengelola pemasangan versi Ruby, pengalihan PATH, dan runtime proyek. FlyEnv tidak menyertakan gem, bundler, atau alat framework selain yang disediakan masing-masing build Ruby. Sumber pemasangan yang tersedia berbeda per platform; tidak ada sumber Statis di macOS serta Linux. Gunakan [halaman Unduhan](/id/download) dan catatan rilis terbaru sebagai rujukan paket yang didukung.
