---
layout: doc
titleTemplate: false
title: 'Gradle di FlyEnv: panduan pengembangan lokal'
description: 'Pasang, konfigurasikan, dan kelola Gradle di FlyEnv untuk pengembangan lokal.'
head:
  - - meta
    - name: description
      content: 'Pasang, konfigurasikan, dan kelola Gradle di FlyEnv untuk pengembangan lokal.'
  - - meta
    - property: og:title
      content: 'Gradle di FlyEnv: panduan pengembangan lokal'
  - - meta
    - property: og:description
      content: 'Pasang, konfigurasikan, dan kelola Gradle di FlyEnv untuk pengembangan lokal.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/id/features/gradle
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/id/features/gradle
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Manajemen Versi Gradle dengan FlyEnv

Gradle adalah alat otomatisasi build yang terutama digunakan untuk proyek Java, Kotlin, dan Android, mencakup kompilasi, pengelolaan dependensi, pengujian, serta pengemasan. Alat ini menjadi standar build di balik framework seperti [Spring Boot](/id/solutions/spring-boot). FlyEnv menyimpan beberapa versi Gradle pada satu komputer dan mengganti versi yang digunakan terminal Anda. Modul Gradle berfokus pada pemasangan versi dari berbagai sumber dan pengendalian biner `gradle` yang ditemukan shell Anda. Tidak ada layanan latar belakang yang dijalankan.

![Ikhtisar modul Gradle FlyEnv](https://oss.macphpstudy.com/image/features/gradle-1.webp)

## Manajemen Versi Gradle

Buka **Gradle → Manajer Versi** untuk memasang dan mengelola distribusi Gradle secara berdampingan.

- **Berbagai sumber pemasangan:** build statis pada macOS, Linux, dan Windows; Homebrew serta MacPorts pada macOS; dan SDKMAN pada macOS serta Linux. Pilih sumber yang telah mengelola alat di komputer Anda.
- **Pendeteksian SDKMAN:** FlyEnv otomatis memindai `~/.sdkman/candidates/gradle`, sehingga versi yang dipasang melalui SDKMAN muncul bersama versi yang dikelola FlyEnv.
- **Versi kustom:** arahkan FlyEnv ke direktori yang memuat distribusi Gradle Anda; FlyEnv mendeteksi biner `bin/gradle` (`gradle.bat` di Windows) dan menampilkannya bersama versi terkelola.
- **Pemasangan bersih:** build statis diekstrak ke direktori aplikasi FlyEnv sebagai `gradle/<version>/`, diverifikasi dengan `gradle --version`, dan atribut karantina macOS dihapus otomatis setelah ekstraksi.

![Manajer Versi Gradle dengan sumber Statis, Homebrew, MacPorts, dan SDKMAN](https://oss.macphpstudy.com/image/features/gradle-2.webp)

## Pengalihan versi baris perintah

Tab **Layanan** adalah tabel versi terpasang. Meski namanya demikian, Gradle bukan layanan yang berjalan, sehingga tab ini mengelola versi dan PATH, bukan proses.

- **Versi terminal bawaan:** tetapkan versi terpasang yang digunakan perintah `gradle` di terminal. FlyEnv menambahkan atau menghapus direktori `bin` versi dari `PATH` dan menandai apakah entri saat ini ditetapkan FlyEnv atau alat lain.
- **Alias per versi:** beri setiap pemasangan alias singkat agar build serupa tetap mudah dibedakan dalam daftar.
- **Catatan per versi:** tambahkan catatan bebas pada versi mana pun untuk mencatat kegunaannya.
- **Penghapusan mudah:** hapus versi yang tidak lagi diperlukan langsung dari tabel.

Gradle memerlukan runtime [Java](/id/features/java) pada `PATH`; [panduan penyiapan lingkungan Java](/id/guide/set-up-java-development-environment) membahas pemasangan JDK dengan FlyEnv. Unduh aplikasinya dari [halaman Unduhan](/id/download).

<FeatureRelatedLinks locale="id" slug="gradle" />

## Catatan kompatibilitas

Halaman Gradle hanya mencakup pengelolaan versi dan PATH; tidak ada pengikatan proyek tersendiri. Pengikatan runtime per proyek disediakan oleh modul bahasa, lihat [panduan lingkungan runtime tingkat proyek](/id/guide/project-level-runtime-environment). Sumber pemasangan yang tersedia berbeda menurut sistem operasi, jadi gunakan Manajer Versi pada build FlyEnv terpasang sebagai daftar definitif.
