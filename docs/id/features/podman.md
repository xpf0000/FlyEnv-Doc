---
layout: doc
titleTemplate: false
title: 'Mesin, Compose, dan Kontainer Podman | FlyEnv'
description: 'Kelola mesin Podman, buat tumpukan Compose, tarik image, dan jalankan kontainer dari FlyEnv.'
head:
  - - meta
    - name: description
      content: 'Kelola mesin Podman, buat tumpukan Compose, tarik image, dan jalankan kontainer dari FlyEnv.'
  - - meta
    - property: og:title
      content: 'Mesin, Compose, dan Kontainer Podman | FlyEnv'
  - - meta
    - property: og:description
      content: 'Kelola mesin Podman, buat tumpukan Compose, tarik image, dan jalankan kontainer dari FlyEnv.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/id/features/podman
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/id/features/podman
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Manajemen Kontainer Podman dengan FlyEnv

Podman adalah mesin kontainer sumber terbuka untuk membangun dan menjalankan kontainer OCI. Podman kompatibel dengan image Docker serta berkas Compose, dan dapat berjalan tanpa root tanpa daemon latar belakang. FlyEnv menjadikannya ruang kerja visual: buat dan sesuaikan mesin Podman, hasilkan proyek Compose dari pustaka tumpukan, tarik image dari katalog resmi, lalu jalankan serta periksa kontainer tanpa menghafal opsi CLI. FlyEnv mendeteksi Podman sistem secara otomatis dan, di macOS serta Linux yang memiliki Homebrew, dapat memasangnya sekali klik dari terminal tertanam. Lihat [panduan modul Podman](/id/guide/podman-module) untuk langkah lengkap dan [FlyEnv vs Docker dan XAMPP](/id/guide/flyenv-vs-docker-xampp) untuk perbandingan pendekatan.

![Ringkasan modul Podman FlyEnv dengan daftar mesin](https://oss.macphpstudy.com/image/features/podman-1.webp)

## Manajemen mesin

Panel kiri mencantumkan setiap mesin Podman, dengan tindakan tambah, sunting, mulai, hentikan, dan hapus. Setiap mesin memiliki tab Dasbor, Compose, Image, dan Kontainer.

- **Tambah dan sunting mesin:** atur nama mesin, jumlah CPU (1–16 inti), memori (512–32768 MB), ukuran disk, dan status mesin bawaan.
- **Mode rootful:** jalankan mesin sebagai rootful bila beban kerja membutuhkannya.
- **Rosetta di macOS:** aktifkan Rosetta agar mesin dapat menjalankan image x86_64 pada Apple Silicon.
- **Rincian koneksi jarak jauh:** konfigurasikan jalur identitas SSH dan nama pengguna jarak jauh per mesin.
- **Linux berjalan native:** di Linux, Podman tidak memerlukan mesin virtual, sehingga tindakan mesin disembunyikan dan kontainer berjalan langsung pada host.
- **Penyiapan mudah:** FlyEnv mendeteksi biner `podman`; jika belum ada dan Homebrew tersedia di macOS atau Linux, tombol pasang menjalankan pemasangan brew di terminal tertanam.

![Menambahkan mesin Podman dengan pengaturan CPU, memori, dan disk](https://oss.macphpstudy.com/image/features/podman-2.webp)

## Proyek Compose dan pembuat tumpukan

Tab **Compose** mengelola proyek docker-compose yang sudah ada; FlyEnv menyimpan daftarnya dan memeriksa status berjalannya. Tab ini juga menyertakan pembuat **Compose Build** yang merakit tumpukan lewat formulir per layanan alih-alih YAML tulisan tangan.

Pembuatnya mencakup sekitar 29 tumpukan teknologi, termasuk [PHP](/id/features/php), [Nginx](/id/features/nginx), Apache, Caddy, [MySQL](/id/features/mysql), MariaDB, PostgreSQL, MongoDB, Redis, Memcached, RabbitMQ, Elasticsearch, Meilisearch, MinIO, Consul, Etcd, Mailpit, NodeJS, Bun, Deno, Go, Java, Python, Ruby, Rust, Perl, Erlang, dan Tomcat. Setiap layanan memiliki formulirnya sendiri agar Anda hanya mengatur opsi yang relevan. Operasi Compose memerlukan `docker-compose` atau plugin `docker compose` terpasang.

![Pembuat Compose Build dengan formulir tumpukan per layanan](https://oss.macphpstudy.com/image/features/podman-3.webp)

## Image

Tab **Image** adalah klien penarikan visual yang memakai katalog image resmi.

- **Katalog image resmi:** jelajahi image standar resmi tanpa meninggalkan aplikasi.
- **Pengambilan tag daring:** tag setiap image diambil daring sehingga Anda dapat memilih versi tepat tanpa menebak nama tag.
- **Tarik sekali klik:** tarik image dan tag pilihan langsung ke penyimpanan image lokal mesin.

![Menarik image dengan katalog resmi dan tag daring](https://oss.macphpstudy.com/image/features/podman-4.webp)

## Kontainer

Tab **Kontainer** menangani siklus hidup harian kontainer pada mesin yang dipilih.

- **Buat kontainer** dari image yang telah ditarik melalui formulir, bukan perintah `podman run` yang panjang.
- **Periksa dan pratinjau** konfigurasi serta status setiap kontainer.
- **Exec terminal tertanam:** buka shell dalam kontainer yang berjalan memakai [terminal bawaan](/id/features/cli-terminal) FlyEnv agar proses debug berlangsung di tempat kontainer berada.

![Daftar kontainer dengan tindakan periksa dan exec terminal](https://oss.macphpstudy.com/image/features/podman-5.webp)

<FeatureRelatedLinks locale="id" slug="podman" />

## Catatan kompatibilitas

FlyEnv mengoperasikan Podman melalui CLI `podman` sistem; FlyEnv tidak menyertakan runtime maupun manajer versi Podman. Di macOS dan Linux, pemasangan sekali klik tersedia bila Homebrew ada; pengguna Windows memasang Podman sendiri. Tindakan mesin Podman berlaku di macOS dan Windows; di Linux, Podman berjalan native tanpa mesin virtual. Periksa [halaman Unduhan](/id/download) dan catatan rilis terbaru untuk rincian dukungan platform.
