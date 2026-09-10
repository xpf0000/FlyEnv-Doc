---
layout: doc
titleTemplate: false
title: 'Elasticsearch Lokal dengan Manajer Versi dan Konfigurasi | FlyEnv'
description: 'Jalankan versi Elasticsearch dan sunting elasticsearch.yml, jvm.options, serta log4j2.properties per versi.'
head:
  - - meta
    - name: description
      content: 'Jalankan versi Elasticsearch dan sunting elasticsearch.yml, jvm.options, serta log4j2.properties per versi.'
  - - meta
    - property: og:title
      content: 'Elasticsearch Lokal dengan Manajer Versi dan Konfigurasi | FlyEnv'
  - - meta
    - property: og:description
      content: 'Jalankan versi Elasticsearch dan sunting elasticsearch.yml, jvm.options, serta log4j2.properties per versi.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/id/features/elasticsearch
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/id/features/elasticsearch
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Elasticsearch di FlyEnv

Elasticsearch adalah mesin pencarian dan analitik terdistribusi berbasis Apache Lucene untuk pencarian teks penuh, analisis log, dan agregasi data besar; ini juga mesin pencarian yang diperlukan tumpukan [Magento](/id/solutions/magento) lokal. Bila klaster penuh terlalu besar untuk proyek Anda, modul [Meilisearch](/id/features/meilisearch), [Typesense](/id/features/typesense), dan [ZincSearch](/id/features/zincsearch) menyediakan pencarian instan yang lebih ringan. FlyEnv menjalankannya sebagai layanan lokal terkelola di macOS, Windows, dan Linux: pasang beberapa versi berdampingan, mulai atau hentikan dari satu jendela, serta sunting `elasticsearch.yml`, `jvm.options`, dan `log4j2.properties` milik setiap versi tanpa mencari direktori pemasangan. Log node berjalan dapat dibuka langsung dari aplikasi.

![Ringkasan modul Elasticsearch FlyEnv](https://oss.macphpstudy.com/image/features/elasticsearch-1.webp)

## Manajemen versi

Pasang dan pertahankan beberapa versi Elasticsearch secara berdampingan melalui **Elasticsearch → Manajer Versi**.

- **Paket statis di semua platform:** Elasticsearch dipasang dari daftar paket statis daring FlyEnv di macOS, Windows, dan Linux; modul ini tidak menawarkan sumber Homebrew atau MacPorts.
- **Lokasi pemasangan terkelola:** setiap versi diekstrak dari arsip tar.gz atau zip ke direktori `elasticsearch/v<version>/` milik FlyEnv, terpisah dari build lain di komputer Anda.
- **Versi kustom:** arahkan FlyEnv ke direktori berisi pemasangan Elasticsearch Anda; FlyEnv mencari biner `bin/elasticsearch` (`elasticsearch.bat` di Windows) dan menampilkannya bersama build terkelola.

![Manajer Versi Elasticsearch dengan daftar paket statis](https://oss.macphpstudy.com/image/features/elasticsearch-2.webp)

## Manajemen layanan

Tab **Layanan** mencantumkan setiap versi terpasang dengan kontrol mulai, hentikan, dan mulai ulang per versi. Sakelar bilah sisi—yang juga tersedia dari baki sistem—memulai atau menghentikan versi saat ini tanpa membuka halaman modul.

- **Satu versi dalam satu waktu:** memulai sebuah versi menghentikan Elasticsearch lain yang sedang berjalan agar node kedua tidak berebut port yang sama.
- **Proses Elasticsearch asli:** FlyEnv menjalankan `bin/elasticsearch` milik versi itu dengan berkas pid, serta menyetel `ES_HOME` dan `ES_PATH_CONF` ke direktorinya agar boot memakai konfigurasi bundel.
- **Port bawaan upstream:** FlyEnv tidak membuat konfigurasi sendiri, sehingga pemasangan baru merespons pada port Elasticsearch bawaan: HTTP 9200 dan transport 9300, sampai Anda mengubahnya.

![Tab Layanan Elasticsearch dengan versi berjalan](https://oss.macphpstudy.com/image/features/elasticsearch-3.webp)

## Konfigurasi

Elasticsearch memiliki tiga tab editor khusus di FlyEnv: **elasticsearch.yml**, **jvm.options**, dan **log4j2.properties**. Masing-masing membuka berkas dalam direktori `config/` versi yang dipilih.

- **Berkas per versi:** perubahan hanya berlaku untuk konfigurasi bundel versi tersebut, sehingga penyesuaian satu pemasangan tidak memengaruhi pemasangan lain.
- **Penyuntingan sumber lengkap:** editor bekerja langsung pada berkas mentah dan mencakup seluruh pengaturan Elasticsearch, JVM, serta logging, bukan hanya sebagian kecil.
- **Tanpa pembuatan ulang:** FlyEnv tidak pernah menulis ulang berkas ini; apa yang Anda simpan adalah tepat yang dibaca node saat mulai berikutnya.

![Menyunting elasticsearch.yml untuk versi terpasang](https://oss.macphpstudy.com/image/features/elasticsearch-4.webp)

## Log

Tab **Log** membuka keluaran log node dari dalam FlyEnv. Tampilan utama menunjukkan `logs/elasticsearch.log` milik versi tersebut, tempat pertama untuk memeriksa kegagalan mulai atau perubahan klaster yang bermasalah. Log server, deprecation, dan garbage collector (`elasticsearch_server.json`, `elasticsearch_deprecation.json`, `gc.log`) juga tersedia.

![Penampil log Elasticsearch yang menunjukkan log node](https://oss.macphpstudy.com/image/features/elasticsearch-5.webp)

<FeatureRelatedLinks locale="id" slug="elasticsearch" />

## Catatan kompatibilitas

FlyEnv mengelola runtime Elasticsearch lokal dan berkas konfigurasi yang dibundel dengan setiap versi; FlyEnv tidak menambahkan panel administrasi serta tidak menjamin setiap rilis Elasticsearch tersedia untuk setiap sistem operasi atau arsitektur CPU. Daftar Manajer Versi mencerminkan paket statis yang benar-benar tersedia bagi platform Anda. Elasticsearch tersedia di macOS, Windows, dan Linux. Unduh aplikasi dari [halaman Unduhan](/id/download) dan lihat modul ini dalam [demo](/id/demos).
