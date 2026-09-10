---
layout: doc
titleTemplate: false
title: 'Manajer Versi Tomcat dan Hosting Situs Java | FlyEnv'
description: 'Jalankan versi Tomcat dengan CATALINA_BASE per versi, edit server.xml dan web.xml, serta host situs Java secara langsung.'
head:
  - - meta
    - name: description
      content: 'Jalankan versi Tomcat dengan CATALINA_BASE per versi, edit server.xml dan web.xml, serta host situs Java secara langsung.'
  - - meta
    - property: og:title
      content: 'Manajer Versi Tomcat dan Hosting Situs Java | FlyEnv'
  - - meta
    - property: og:description
      content: 'Jalankan versi Tomcat dengan CATALINA_BASE per versi, edit server.xml dan web.xml, serta host situs Java secara langsung.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/id/features/tomcat
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/id/features/tomcat
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Tomcat di FlyEnv

Apache Tomcat adalah kontainer servlet Java sumber terbuka: Tomcat menjalankan aplikasi web Java yang dikemas sebagai berkas WAR, sehingga dibutuhkan ketika proyek dikirim sebagai aplikasi web berbasis servlet, bukan jar mandiri. FlyEnv menjalankan Apache Tomcat sebagai layanan terkelola: pasang beberapa versi Tomcat berdampingan, berikan CATALINA_BASE sendiri pada setiap versi, edit `server.xml` dan `web.xml` dari editor bawaan, serta pantau `catalina.out` tanpa membuka terminal. Karena Tomcat memerlukan JDK, FlyEnv mengambil JAVA_HOME dari lingkungan modul Java. Situs lokal bertipe Tomcat ditulis langsung ke `server.xml` sebagai entri Host, sehingga aplikasi web Java dilayani oleh Tomcat sendiri, bukan melalui server web lain.

![FlyEnv Tomcat ikhtisar modul](https://oss.macphpstudy.com/image/features/tomcat-1.webp)

## Manajemen versi Tomcat

Pasang beberapa versi Tomcat berdampingan dari tab **Manajer Versi** dan beralihlah di antaranya kapan saja.

- **Sumber pemasangan:** build statis di macOS, Linux, dan Windows, ditambah Homebrew di macOS serta Linux (FlyEnv mencari formula `tomcat` dan `tomcat@x`). MacPorts dan SDKMAN tidak digunakan untuk Tomcat.
- **Direktori basis per versi:** setiap versi memperoleh CATALINA_BASE sendiri (secara bawaan folder per versi mayor di bawah direktori data FlyEnv), sehingga beberapa versi Tomcat menyimpan konfigurasi independen.

![Tomcat manajer versi dengan statis dan Homebrew instal sumber](https://oss.macphpstudy.com/image/features/tomcat-2.webp)

## Manajemen layanan

Mulai, hentikan, dan mulai ulang setiap versi Tomcat dari tab **Layanan**, dengan penanganan lingkungan per versi bawaan.

- **CATALINA_BASE per versi:** tab Layanan menampilkan baris kepala tambahan dengan jalur CATALINA_BASE versi tersebut, yang dapat Anda ubah; pilihan disimpan per versi. Pada awal pertama, FlyEnv membuat direktori basis dengan menyalin berkas `conf` dari instalasi.
- **JAVA_HOME dari modul Java:** Tomcat memerlukan Java, dan FlyEnv menyediakan JAVA_HOME melalui lingkungan yang disinkronkan dari [modul Java](/id/features/java), sehingga Tomcat yang berjalan memakai JDK yang Anda kelola di FlyEnv. [Panduan lingkungan pengembangan Java](/id/guide/set-up-java-development-environment) membahas pemasangan dan pergantian JDK.
- **Awal khusus platform:** di macOS, Tomcat berjalan di latar depan melalui `catalina.sh run` dengan CATALINA_BASE, CATALINA_PID, dan JAVA_HOME ditetapkan; keluaran konsol ditangkap ke `logs/catalina.out`. Di Windows, Tomcat dimulai melalui `startup.bat` dan FlyEnv menemukan proses JVM; di Linux, Tomcat berjalan melalui helper root.

![Tab layanan Tomcat dengan baris CATALINA_BASE yang dapat diedit](https://oss.macphpstudy.com/image/features/tomcat-3.webp)

## Konfigurasi

Setiap versi Tomcat menyimpan konfigurasinya di CATALINA_BASE sendiri, yang dapat diedit dari FlyEnv tanpa mencari-cari direktori.

- **Tab `server.xml` dan `web.xml`:** modul ini memiliki tab khusus dengan editor mentah untuk dua berkas yang paling sering diubah.
- **Berkas konfigurasi lain:** dukungan konfigurasi di baliknya juga mencakup `context.xml`, `tomcat-users.xml`, `logging.properties`, `catalina.properties`, dan `catalina.policy`.

![Mengedit server.xml untuk versi Tomcat](https://oss.macphpstudy.com/image/features/tomcat-4.webp)

## Integrasi situs

Situs yang Anda buat di FlyEnv dengan tipe **Tomcat** bukan vhost yang diproksikan balik—situs tersebut menjadi entri `<Host>` Tomcat nyata yang diselaraskan langsung ke `server.xml` versi itu. Pembuatan situs bekerja sama seperti tipe lain; lihat [panduan Host](/id/guide/host).

- **Diselaraskan dengan pemulihan:** saat situs disimpan, FlyEnv menulis ulang `server.xml` dengan entri Host situs sambil menyimpan snapshot agar berkas dapat dipulihkan jika pembaruan gagal.
- **SSL per situs:** situs Tomcat mendukung HTTPS dengan sertifikat dan kunci, termasuk sertifikat otomatis FlyEnv; menghapus situs juga membersihkan sertifikat yang dibuat otomatis.
- **Di luar alur server web lain:** situs Tomcat tidak ikut dalam pembuatan vhost Nginx, Apache, Caddy, dan FrankenPHP—Tomcat melayaninya sendiri. Untuk situs pada server lain, lihat [Situs Lokal, Domain Kustom & HTTPS](/id/features/local-sites-https); untuk panduan lengkap stack web Java, lihat [solusi Spring Boot](/id/solutions/spring-boot).

![Situs jenis Tomcat disinkronkan ke server.xml sebagai entri Host](https://oss.macphpstudy.com/image/features/tomcat-5.webp)

## Log

Tab **Log** membuka log konsol Tomcat dengan pencarian dan penyegaran bawaan. Di macOS dan Linux, log ini adalah `logs/catalina.out` di bawah CATALINA_BASE versi; di Windows, FlyEnv membaca berkas `catalina.<yyyy-MM-dd>.log` bertanggal.

<FeatureRelatedLinks locale="id" slug="tomcat" />

## Catatan kompatibilitas

FlyEnv mengelola runtime Tomcat lokal, konfigurasi per versi, dan entri Host situsnya; FlyEnv tidak membundel aplikasi web pengelola Tomcat atau menjamin setiap versi Tomcat tersedia dari setiap sumber pemasangan pada semua sistem operasi. Verifikasikan JDK yang diperlukan versi Tomcat Anda terhadap versi Java terpasang, lalu jadikan [halaman Unduhan](/id/download) dan catatan rilis terkini sebagai sumber paket yang didukung.
