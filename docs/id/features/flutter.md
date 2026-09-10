---
layout: doc
titleTemplate: false
title: 'Flutter di FlyEnv: panduan pengembangan lokal'
description: 'Pasang, konfigurasikan, dan kelola Flutter di FlyEnv untuk pengembangan lokal.'
head:
  - - meta
    - name: description
      content: 'Pasang, konfigurasikan, dan kelola Flutter di FlyEnv untuk pengembangan lokal.'
  - - meta
    - property: og:title
      content: 'Flutter di FlyEnv: panduan pengembangan lokal'
  - - meta
    - property: og:description
      content: 'Pasang, konfigurasikan, dan kelola Flutter di FlyEnv untuk pengembangan lokal.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/id/features/flutter
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/id/features/flutter
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Pengembangan Flutter dengan FlyEnv

Flutter adalah perangkat UI sumber terbuka dari Google untuk membangun aplikasi seluler, web, dan desktop lintas platform dari satu basis kode Dart. FlyEnv mencakup seluruh penyiapan Flutter lokal dalam satu modul: memasang dan mengganti versi Flutter SDK langsung dari daftar rilis resmi Google, ringkasan Flutter Doctor yang telah diurai, Pusat Perintah untuk perintah Flutter dan Dart sehari-hari, pembuatan serta pengeditan proyek terpandu, dan pemeriksa toolchain Android dengan perbaikan otomatis.

![Ikhtisar modul Flutter FlyEnv](https://oss.macphpstudy.com/image/features/flutter-1.webp)

## Manajemen versi Flutter SDK

Tab **Manajer Versi** hanya memasang Flutter SDK dari sumber Statis; Homebrew dan MacPorts tidak tersedia untuk Flutter.

- **Daftar rilis resmi:** versi diambil langsung dari berkas resmi Google `releases_{macos,linux,windows}.json` yang dihosting di `storage.googleapis.com/flutter_infra_release`, bukan dari indeks pihak ketiga.
- **Kanal stabil dan beta:** pemilih kanal memfilter daftar ke kanal stabil dan beta. Di macOS, daftar juga menyesuaikan arsitektur, sehingga komputer Apple Silicon dan Intel masing-masing memperoleh arsip yang tepat.
- **Penanganan checkout Git:** setelah arsip SDK diekstrak, FlyEnv menjalankan `git init` dalam direktori SDK karena Flutter mengharapkan SDK berada dalam checkout Git.
- **Pengalihan PATH:** tab **Layanan** mencantumkan semua SDK yang ditemukan dan memungkinkan Anda menambahkan atau menghapus sebuah versi dari `PATH` terminal, sekaligus menunjukkan apakah entri saat ini ditetapkan oleh FlyEnv atau alat lain.

![Manajer Versi Flutter dengan pemilih kanal stabil dan beta](https://oss.macphpstudy.com/image/features/flutter-2.webp)

## Status dan Flutter Doctor

Tab **Umum** adalah dasbor bagi lingkungan Flutter Anda.

- **Kartu status:** lihat sekilas versi Flutter, versi Dart bawaan, kanal saat ini, status Android SDK, dan jumlah perangkat ADB yang terhubung.
- **Panel detail SDK:** menampilkan versi, kanal, dan sumber SDK—apakah ditemukan di `PATH`, lokasi bawaan, direktori kustom, atau dipasang FlyEnv—beserta direktori pencarian yang dipindai. Pendeteksian mencakup `PATH`, `FLUTTER_ROOT`, `~/development/flutter`, `~/flutter`, `/opt/flutter`, `/usr/local/flutter`, lokasi Windows umum seperti jalur scoop dan AppData, direktori kustom Anda, serta folder SDK yang dikelola FlyEnv.
- **Ringkasan Flutter Doctor:** tampilan hasil `flutter doctor -v` yang telah diurai agar Anda dapat membaca diagnosis lengkap tanpa membuka terminal.

![Tab Umum dengan kartu status dan keluaran Flutter Doctor terurai](https://oss.macphpstudy.com/image/features/flutter-3.webp)

## Command Center

Masih pada tab **Umum**, Pusat Perintah menjalankan perintah harian terhadap SDK atau direktori proyek pilihan, dengan panel konsol bersama yang menampilkan stdout dan stderr asli (menyimpan 120 KB keluaran terakhir).

- **Flutter SDK:** jalankan `flutter upgrade`, lihat kanal yang tersedia, dan beralih di antara stabil, beta, serta master.
- **Alat Pub:** jalankan `pub get`, `pub upgrade`, `pub outdated`, dan `pub deps` pada direktori proyek terpilih.
- **Build:** `flutter build apk --debug` atau `--release`, `flutter build web`, `flutter build windows`, dan `flutter clean`.
- **Kualitas:** `flutter analyze`, `flutter test`, dan `dart format`.
- **Doctor:** jalankan ulang Flutter Doctor dari konsol yang sama saat memerlukan diagnosis terbaru.

![Pusat Perintah menjalankan perintah pub dan build dengan keluaran konsol](https://oss.macphpstudy.com/image/features/flutter-4.webp)

## Pembuatan dan pengeditan proyek

Tab **Proyek Flutter** mencantumkan proyek Anda dan mengikat masing-masing ke versinya sendiri, mengikuti model [lingkungan runtime tingkat proyek](/id/guide/project-level-runtime-environment) seperti modul bahasa lainnya.

**Buat Proyek** membuat kerangka proyek Flutter baru tanpa meninggalkan aplikasi:

1. Tetapkan nama proyek, direktori keluaran, organisasi, dan templat—`app`, `package`, `plugin`, `module`, atau `skeleton`—serta, bila perlu, kunci versi Flutter tertentu.
2. Konfigurasikan identitas tiap platform: nama paket Android, ID bundle iOS, nama aplikasi web, dan ID bundle desktop.
3. Cari pub.dev dan tambahkan dependensi, termasuk dependensi pengembangan, bahkan sebelum proyek dibuat.
4. Lampirkan berkas konfigurasi Firebase serta atur ikon aplikasi untuk setiap platform; proyek jadi akan otomatis ditambahkan ke daftar proyek.

**Edit Proyek** membuka kembali pengaturan yang sama untuk proyek yang sudah ada: perbarui identitas dan nama paketnya, kelola dependensi `pubspec.yaml` dengan laporan paket usang yang membandingkan versi saat ini dan terbaru serta menandai yang dapat diperbarui, lalu ganti berkas Firebase atau ikon aplikasi.

![Membuat proyek Flutter dengan templat, nama paket, dan dependensi pub.dev](https://oss.macphpstudy.com/image/features/flutter-5.webp)

## Toolchain Android

Tab **Android** memeriksa semua yang diperlukan Flutter untuk build Android dan membantu memperbaiki yang belum tersedia.

- **Variabel lingkungan:** menampilkan nilai `ANDROID_HOME`, `ANDROID_SDK_ROOT`, dan `JAVA_HOME` saat ini. [Panduan lingkungan PATH sistem](/id/guide/setup-system-path-environment) menjelaskan cara FlyEnv mengelola jenis variabel dan entri PATH ini di berbagai alat.
- **Pemeriksaan kesiapan:** memverifikasi Android SDK, platform-tools, ADB, cmdline-tools, build-tools, JDK, dan Gradle; setiap item disertai petunjuk perbaikan jika hilang atau salah konfigurasi. Modul [Java](/id/features/java) dan [Gradle](/id/features/gradle) FlyEnv dapat memasang serta mengelola kedua dependensi terakhir tersebut.
- **Perbaikan otomatis:** tindakan sekali klik menetapkan variabel lingkungan SDK dan menambahkan platform-tools ke `PATH` Anda.
- **Perangkat ADB:** mencantumkan perangkat yang terhubung, dengan tindakan untuk menetapkan perangkat target, memutuskan perangkat, atau melihat informasinya.
- **Tindakan cepat:** jalankan `flutter run`, `flutter build apk`, atau `flutter build appbundle` pada proyek pilihan dengan target perangkat yang dipilih.

![Pemeriksaan toolchain Android dengan tindakan perbaikan dan daftar perangkat ADB](https://oss.macphpstudy.com/image/features/flutter-6.webp)

<FeatureRelatedLinks locale="id" slug="flutter" />

## Catatan kompatibilitas

Modul Flutter mengelola pemasangan SDK, variabel lingkungan, dan eksekusi perintah; modul ini tidak menyertakan Android SDK, JDK, atau emulator perangkat, serta tidak menjamin setiap versi Flutter atau Dart dapat dibangun pada setiap sistem operasi. Keluaran perintah ditampilkan di konsol tab Umum, bukan penampil berkas log. Periksa [halaman Unduhan](/id/download) dan catatan rilis terbaru untuk platform serta paket yang didukung.
