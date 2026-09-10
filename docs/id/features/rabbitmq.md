---
layout: doc
titleTemplate: false
title: 'RabbitMQ di FlyEnv: panduan pengembangan lokal'
description: 'Pasang, konfigurasikan, dan kelola RabbitMQ di FlyEnv untuk pengembangan lokal.'
head:
  - - meta
    - name: description
      content: 'Pasang, konfigurasikan, dan kelola RabbitMQ di FlyEnv untuk pengembangan lokal.'
  - - meta
    - property: og:title
      content: 'RabbitMQ di FlyEnv: panduan pengembangan lokal'
  - - meta
    - property: og:description
      content: 'Pasang, konfigurasikan, dan kelola RabbitMQ di FlyEnv untuk pengembangan lokal.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/id/features/rabbitmq
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/id/features/rabbitmq
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# RabbitMQ di FlyEnv

RabbitMQ adalah broker pesan sumber terbuka: aplikasi mengirim pesan kepadanya melalui protokol seperti AMQP, lalu RabbitMQ merutekannya ke antrean agar layanan lain dapat mengonsumsinya secara asinkron. Ini merupakan pilihan umum untuk memisahkan layanan—tugas latar belakang, antrean tugas, dan alur kerja berbasis peristiwa—misalnya driver antrean aplikasi [Laravel](/id/solutions/laravel). Untuk kebutuhan antrean yang lebih ringan, [Redis](/id/features/redis) juga dapat menjadi backend antrean. FlyEnv menjalankannya sebagai broker lokal terkelola: pasang versi dari Manajer Versi, mulai broker dengan konfigurasi lingkungan yang dibuat otomatis, aktifkan plugin manajemen secara bawaan, dan baca log server per versi utama, semuanya dari tab Layanan, Manajer Versi, Berkas Konfigurasi, serta Log modul RabbitMQ.

![Ikhtisar modul RabbitMQ FlyEnv](https://oss.macphpstudy.com/image/features/rabbitmq-1.webp)

## Manajemen versi

Pasang dan simpan beberapa versi RabbitMQ dari **RabbitMQ → Manajer Versi**, lalu pilih versi yang dijalankan layanan.

- **Sumber pemasangan per platform:** Homebrew (`rabbitmq`) dan MacPorts (`rabbitmq-server`) pada macOS, Homebrew pada Linux, serta paket statis pada Windows.
- **Versi kustom:** tambahkan direktori berisi pemasangan RabbitMQ Anda sendiri; FlyEnv memindainya dan mencantumkan build tersebut bersama versi terkelola.
- **Satu versi layanan aktif:** tab Layanan menjalankan satu versi terpilih sebagai broker RabbitMQ utama.

![Manajer Versi RabbitMQ dengan sumber pemasangan](https://oss.macphpstudy.com/image/features/rabbitmq-2.webp)

## Layanan dan konfigurasi

FlyEnv memulai broker dengan `rabbitmq-server -detached`, sambil mengarahkan `RABBITMQ_CONF_ENV_FILE` ke `rabbitmq-<major>.conf` yang dibuat otomatis (`rabbitmq-<major>.bat` di Windows). Berkas ini mengunci node ke `NODE_IP_ADDRESS=127.0.0.1` dan `NODENAME=rabbit@localhost`, beserta direktori log serta mnesia. Broker membuat daemon sendiri melalui epmd [Erlang](/id/features/erlang), dan FlyEnv mendeteksi keberhasilan mulai dengan memantau berkas pid node. AMQP mendengarkan port bawaan 5672.

Setiap versi utama memperoleh kumpulan berkas sendiri di direktori RabbitMQ FlyEnv, yang dapat diedit dari tab **Berkas Konfigurasi** dengan editor mentah:

- **`rabbitmq-<major>.conf` / `.bat`:** konfigurasi lingkungan yang dibuat otomatis dan digunakan broker saat mulai.
- **`rabbitmq-<major>-default.conf`:** konfigurasi bawaan untuk versi utama tersebut.
- **`enabled_plugins-<major>`:** daftar plugin aktif, tempat FlyEnv menulis `[rabbitmq_management].` agar plugin manajemen aktif.

![Editor berkas konfigurasi RabbitMQ](https://oss.macphpstudy.com/image/features/rabbitmq-3.webp)

## Antarmuka manajemen (15672)

Plugin manajemen diaktifkan untuk Anda. FlyEnv menulis `[rabbitmq_management].` ke `enabled_plugins-<major>` dan, pada macOS, juga menjalankan `rabbitmq-plugins enable rabbitmq_management`; konsol pun siap begitu broker berjalan.

- **Akses sekali klik:** tab Layanan menampilkan tombol yang membuka UI manajemen pada `http://localhost:15672/` selama broker berjalan.
- **Konsol upstream:** antrean, exchange, koneksi, dan pengguna dikelola di antarmuka manajemen RabbitMQ sendiri; FlyEnv tidak menambahkan UI administrasi lain.

![Tombol UI manajemen RabbitMQ pada tab layanan](https://oss.macphpstudy.com/image/features/rabbitmq-4.webp)

## Log

Tab **Log** membuka `log-<major>/rabbit@localhost.log` langsung di FlyEnv. Karena log disimpan per versi utama, setiap lini RabbitMQ yang terpasang memiliki berkas log sendiri; inilah tempat pertama untuk diperiksa jika versi gagal dimulai atau antrean berperilaku tidak semestinya.

![Penampil log server RabbitMQ](https://oss.macphpstudy.com/image/features/rabbitmq-5.webp)

<FeatureRelatedLinks locale="id" slug="rabbitmq" />

## Catatan kompatibilitas

Di Windows, RabbitMQ memerlukan Erlang. FlyEnv menemukan `ERLANG_HOME` dari lingkungan, `PATH`, atau direktori aplikasi dan memulai `epmd.exe` otomatis. Jika epmd tidak berjalan, pemeriksaan versi gagal dengan kesalahan “no epmd”, sehingga pemasangan Erlang harus tersedia. RabbitMQ tersedia di macOS, Windows, dan Linux, tetapi sumber pemasangannya berbeda: Homebrew dan MacPorts di macOS, hanya Homebrew di Linux, serta paket statis di Windows. Konfigurasi dibatasi per versi utama, dan FlyEnv tidak menyediakan UI administrasi selain konsol manajemen upstream maupun integrasi proyek. Gunakan daftar versi di aplikasi dan [halaman Unduhan](/id/download) sebagai rujukan ketersediaan pemasangan di komputer Anda; lihat [demo](/id/demos) untuk penggunaan modul.
