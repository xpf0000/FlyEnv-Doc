---
layout: doc
titleTemplate: false
title: 'Java di FlyEnv: panduan pengembangan lokal'
description: 'Pasang, konfigurasikan, dan kelola Java di FlyEnv untuk pengembangan lokal.'
head:
  - - meta
    - name: description
      content: 'Pasang, konfigurasikan, dan kelola Java di FlyEnv untuk pengembangan lokal.'
  - - meta
    - property: og:title
      content: 'Java di FlyEnv: panduan pengembangan lokal'
  - - meta
    - property: og:description
      content: 'Pasang, konfigurasikan, dan kelola Java di FlyEnv untuk pengembangan lokal.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/id/features/java
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/id/features/java
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Pengembangan Java lokal dengan FlyEnv

Java adalah bahasa pemrograman serbaguna berbasis JVM yang banyak digunakan untuk backend perusahaan, aplikasi Android, dan layanan berskala besar; Maven merupakan salah satu alat build standarnya. FlyEnv mengelola sisi Java dari tumpukan lokal Anda dalam satu aplikasi: beberapa versi JDK dari berbagai sumber pemasangan, Manajer Versi Maven khusus, pengalihan versi pada terminal, dan pengikatan runtime Java per proyek. Modul Java memiliki empat tab: Proyek Java, Layanan, Manajer Versi, dan Maven.

![Ikhtisar modul Java FlyEnv](https://oss.macphpstudy.com/image/features/java-1.webp)

## Manajemen versi JDK

Pasang beberapa JDK secara berdampingan dari **Java → Manajer Versi** dan beralih di antaranya kapan saja.

- **Berbagai sumber pemasangan:** di macOS, pilih build JDK `.tar.gz` statis, formula Homebrew (`jdk` / `openjdk`), port JDK MacPorts, atau SDKMAN. Di Linux tersedia build statis, Homebrew, dan SDKMAN. Di Windows, JDK dipasang dari daftar daring statis sebagai arsip zip. Header manajer menaut langsung ke halaman unduh Microsoft OpenJDK.
- **Pendeteksian otomatis:** di macOS, FlyEnv memindai `/Library/Java/JavaVirtualMachines` dan `~/.sdkman/candidates/java`, sehingga JDK yang telah dipasang melalui sistem atau SDKMAN muncul tanpa penyiapan manual.
- **Versi kustom:** arahkan FlyEnv ke direktori yang berisi build JDK Anda sendiri untuk menampilkannya bersama versi terkelola.
- **Alias dan catatan per versi:** beri setiap pemasangan alias singkat dan catatan agar build serupa tetap mudah dibedakan dalam daftar.

![Manajer Versi Java dengan sumber pemasangan](https://oss.macphpstudy.com/image/features/java-2.webp)

![Pemasangan JDK yang ditemukan dari direktori sistem dan SDKMAN](https://oss.macphpstudy.com/image/features/java-3.webp)

## Versi Maven

Tab **Maven** di dalam modul Java memiliki Manajer Versi lengkap sendiri, sehingga alat build Anda dikelola bersama JDK.

- Pasang dan simpan beberapa versi Maven secara berdampingan.
- Pemasangan Maven tersedia dari Homebrew, MacPorts, build statis, dan SDKMAN, tergantung platform Anda.
- Tambahkan pemasangan Maven sendiri dari direktori kustom.
- Tim yang menggunakan Gradle memperoleh manajemen versi multi-sumber serupa dari [modul Gradle](/id/features/gradle) khusus.

![Manajer Versi Maven di dalam modul Java](https://oss.macphpstudy.com/image/features/java-4.webp)

## Pengalihan versi baris perintah

Tab **Layanan** mencantumkan setiap JDK terpasang. Untuk Java, tab ini mengelola versi dan lingkungan terminal Anda, bukan tabel layanan latar belakang yang berjalan karena JDK sendiri tidak menjalankan daemon.

- **Tetapkan versi terminal:** pilih JDK yang digunakan perintah `java` dan `javac`. FlyEnv menambahkan atau menghapus direktori bin versi dari `PATH` dan menandai apakah entri saat ini ditetapkan FlyEnv atau alat lain.
- **Alias serta catatan perintah:** tetapkan alias singkat per versi dan tambahkan catatan agar build serupa mudah dibedakan.
- **Direktori pencarian kustom:** perluas lokasi yang dipindai FlyEnv untuk pemasangan JDK yang sudah ada.

## Runtime Java per proyek

Proyek yang berbeda sering memerlukan JDK berbeda. Pada **Java → Proyek Java**, daftarkan setiap folder proyek dan ikatkan ke versi Java masing-masing.

- **Runtime per proyek:** JDK terikat disimpan dalam berkas `.flyenv` di direktori proyek, sehingga terminal dan editor yang diluncurkan dari FlyEnv otomatis menggunakan Java yang tepat.
- **Jalankan sebagai layanan:** mulai proyek dengan perintah jalan kustom atau berkas jalan langsung dari FlyEnv, dengan port proyek yang dapat diatur, sudo opsional, pilihan menjalankan di terminal, serta variabel lingkungan sebaris atau dari berkas env.
- **Konfigurasi dan log proyek:** daftarkan berkas konfigurasi serta log per proyek dan lihat melalui penampil bawaan.
- **Buka di IDE:** lompat dari baris proyek langsung ke IntelliJ IDEA dengan lingkungan proyek telah dimuat.

[Panduan lingkungan pengembangan Java](/id/guide/set-up-java-development-environment) membahas penyiapan lengkap, dan [solusi Spring Boot](/id/solutions/spring-boot) menunjukkan bagaimana JDK tingkat proyek masuk ke tumpukan framework lengkap. Untuk deployment kontainer servlet, [modul Tomcat](/id/features/tomcat) menjalankan aplikasi bergaya WAR dengan JDK yang dikelola di sini; [solusi Metabase](/id/solutions/metabase) adalah contoh tumpukan aplikasi Java siap pakai.

![Daftar proyek Java dengan pengikatan JDK per proyek](https://oss.macphpstudy.com/image/features/java-5.webp)

<FeatureRelatedLinks locale="id" slug="java" />

## Catatan kompatibilitas

FlyEnv mengelola versi JDK dan Maven lokal beserta konfigurasi lingkungan di sekitarnya, tetapi tidak menjamin setiap distribusi JDK, versi Maven, atau alat pihak ketiga tersedia pada setiap sistem operasi. Sumber pemasangan berbeda antara macOS, Linux, dan Windows, dan JDK yang dikelola SDKMAN bergantung pada pemasangan SDKMAN Anda. Verifikasi kebutuhan proyek terhadap JDK terpasang, lalu gunakan [halaman Unduhan](/id/download) dan catatan rilis terbaru sebagai rujukan paket yang didukung.
