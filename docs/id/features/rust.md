---
layout: doc
titleTemplate: false
title: 'Rust di FlyEnv: panduan pengembangan lokal'
description: 'Pasang, konfigurasikan, dan kelola Rust di FlyEnv untuk pengembangan lokal.'
head:
  - - meta
    - name: description
      content: 'Pasang, konfigurasikan, dan kelola Rust di FlyEnv untuk pengembangan lokal.'
  - - meta
    - property: og:title
      content: 'Rust di FlyEnv: panduan pengembangan lokal'
  - - meta
    - property: og:description
      content: 'Pasang, konfigurasikan, dan kelola Rust di FlyEnv untuk pengembangan lokal.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/id/features/rust
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/id/features/rust
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Pengembangan Rust Lokal dengan FlyEnv

Rust adalah bahasa pemrograman sistem yang berfokus pada keamanan memori dan performa, dipakai untuk alat baris perintah, komponen sistem, WebAssembly, serta layanan yang kritis terhadap performa. Penyimpanan objek S3-kompatibel [RustFS](/id/features/rustfs) adalah salah satu layanan berbasis Rust yang dikelola FlyEnv. Modul Rust FlyEnv memusatkan pengembangan Rust lokal: pasang toolchain berdampingan, kelola toolchain dan platform target rustup, pilih toolchain untuk perintah terminal `cargo` serta `rustc`, dan ikat setiap proyek ke toolchain sendiri. Tab Proyek Rust, Layanan, Manajer Versi, dan Rustup mencakup pemasangan, PATH, integrasi rustup, dan runtime proyek.

![Ikhtisar modul Rust di FlyEnv](https://oss.macphpstudy.com/image/features/rust-1.webp)

## Manajemen toolchain Rust

Pasang toolchain Rust dari **Rust → Manajer Versi** dan simpan beberapa toolchain agar tersedia bersamaan.

- **macOS:** pasang dari daftar Static online berisi pemasang mandiri `.tar.xz` atau Homebrew (formula `rust`); sumber MacPorts tidak tersedia untuk Rust.
- **Linux:** pasang dari daftar Static online atau Homebrew.
- **Windows:** pasang dari daftar Static online.
- **Toolchain rustup:** FlyEnv otomatis menemukan toolchain yang dipasang rustup di bawah `RUSTUP_HOME` / `~/.rustup/toolchains`, di samping toolchain dalam direktori aplikasi FlyEnv sendiri, sehingga keduanya muncul dalam satu daftar.
- **Direktori kustom:** arahkan FlyEnv ke direktori yang memuat toolchain Rust Anda sendiri agar tampil di samping versi terkelola.

Tab **Rustup** khusus mendeteksi pemasangan rustup yang ada (dengan menghormati `CARGO_HOME` dan `RUSTUP_HOME`) atau menawarkan pemasangan rustup sekali klik di terminal tertanam. Dari sini Anda dapat memasang, menjadikan bawaan, atau menghapus toolchain rustup, serta menambah atau menghapus platform target kompilasi.

![Manajer Versi Rust dan manajemen toolchain rustup](https://oss.macphpstudy.com/image/features/rust-2.webp)

## Pengalihan versi baris perintah

Nama tab **Layanan** hanyalah konvensi lama—Rust tidak memiliki proses latar belakang di FlyEnv, sehingga tidak ada yang dimulai atau dihentikan di sini. Tab ini adalah tabel toolchain terpasang dengan pengelolaan PATH.

- **Pengalihan versi terminal:** pilih toolchain yang digunakan perintah terminal `cargo` dan `rustc`. Pengalihan menambah atau menghapus direktori bin toolchain pada `PATH`; setiap entri ditandai untuk menunjukkan apakah FlyEnv atau alat lain yang membuatnya. [Panduan lingkungan PATH sistem](/id/guide/setup-system-path-environment) menjelaskan mekanismenya.
- **Alias dan catatan per versi:** beri setiap toolchain alias singkat serta catatan agar build serupa mudah dibedakan.
- **Pemeliharaan:** tabel menunjukkan jalur pemasangan setiap toolchain; toolchain yang tidak digunakan dapat dihapus langsung dari sana.

## Toolchain Rust tingkat proyek

Dalam **Rust → Proyek**, daftarkan setiap folder proyek dan ikat ke toolchain Rust tertentu, bukan bergantung pada versi yang kebetulan berada di PATH.

- **Toolchain per proyek:** pilihan versi disimpan pada berkas `.flyenv` di direktori proyek, sehingga terminal dan editor yang dibuka dari FlyEnv otomatis memakai Rust yang benar. Lihat [panduan lingkungan runtime tingkat proyek](/id/guide/project-level-runtime-environment) dan [fitur Runtime per Proyek](/id/features/per-project-runtimes) untuk mekanismenya.
- **Jalankan sebagai layanan:** proyek dapat dijalankan langsung dari FlyEnv dengan perintah mulai kustom, port TCP sebagai tautan `http://127.0.0.1:<port>`, variabel lingkungan dari kolom langsung atau berkas, serta tanda sudo di macOS dan Linux. Sakelar bilah sisi memulai atau menghentikan semua proyek Rust yang diaktifkan sebagai layanan.
- **Buka dengan alat lain:** buka terminal sistem dari baris proyek atau buka proyek di RustRover dengan lingkungan yang telah dimuat.

![Daftar Proyek Rust dengan pengikatan toolchain per proyek](https://oss.macphpstudy.com/image/features/rust-3.webp)

<FeatureRelatedLinks locale="id" slug="rust" />

## Catatan kompatibilitas

FlyEnv mengelola pemasangan toolchain Rust, integrasi rustup, pengalihan PATH, dan runtime proyek; tidak tersedia editor konfigurasi tingkat modul atau penampil log selain kemampuan yang disediakan tiap toolchain Rust. Sumber pemasangan berbeda menurut platform; gunakan [halaman Unduhan](/id/download) dan catatan rilis terbaru sebagai acuan paket yang didukung.
