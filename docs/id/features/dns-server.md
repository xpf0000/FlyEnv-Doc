---
layout: doc
titleTemplate: false
title: 'Server DNS Bawaan untuk Domain Lokal | FlyEnv'
description: 'Jalankan DNS lokal FlyEnv untuk domain situs, berkas hosts, dan pemetaan statis dengan log kueri langsung.'
head:
  - - meta
    - name: description
      content: 'Jalankan DNS lokal FlyEnv untuk domain situs, berkas hosts, dan pemetaan statis dengan log kueri langsung.'
  - - meta
    - property: og:title
      content: 'Server DNS Bawaan untuk Domain Lokal | FlyEnv'
  - - meta
    - property: og:description
      content: 'Jalankan DNS lokal FlyEnv untuk domain situs, berkas hosts, dan pemetaan statis dengan log kueri langsung.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/id/features/dns-server
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/id/features/dns-server
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Server DNS bawaan di FlyEnv

Server DNS bawaan FlyEnv menyediakan resolver lokal untuk domain situs pengembangan. Layanan ini dapat menjawab nama domain dari situs lokal FlyEnv, berkas hosts sistem, atau peta statis Anda sendiri, lalu meneruskan permintaan lain ke resolver publik. Jalankan server dari modul DNS Server untuk mengelola resolusi domain lokal tanpa mengubah berkas hosts satu per satu.

![Modul DNS Server dengan layanan berjalan di port 53](https://oss.macphpstudy.com/image/features/dns-server-1.webp)

## Cara kerja resolusi

FlyEnv menggabungkan beberapa sumber nama dan meminta internet hanya jika tidak ada yang cocok:

- **Domain situs FlyEnv:** setiap nama host dan alias dari [situs lokal](/id/features/local-sites-https) otomatis diurai ke IP lokal utama. Daftar dipantau langsung sehingga situs baru segera dapat diakses tanpa mulai ulang atau pemetaan manual.
- **Berkas hosts sistem:** entri dari berkas hosts OS bergabung ke peta yang sama; berkas dibaca ulang paling sering setiap 60 detik agar perubahan eksternal ikut terambil.
- **Peta statis di `dns.json`:** peta `resolveIP` mengikat nama tertentu ke alamat tetap pilihan Anda.
- **Urutan konflik:** domain situs mengalahkan berkas hosts, dan berkas hosts mengalahkan `resolveIP`. Nama persis dijawab lebih dahulu; bila tidak ada, pola wildcard seperti `*.test` dicoba.
- **Penerusan upstream:** nama yang tidak cocok dengan nama persis atau wildcard diteruskan ke resolver publik—1.1.1.1 dan 8.8.8.8 secara bawaan—agar DNS dapat menjadi satu-satunya resolver mesin tanpa mengganggu perambanan. Untuk DNS lokal pemblokir iklan, gunakan modul [Numa](/id/features/numa).

Arahkan pengaturan DNS sistem operasi ke alamat lokal tempat FlyEnv terikat agar aturan ini berlaku di seluruh sistem. [Panduan pengelolaan host](/id/guide/host) membahas sisi situs dari penyiapan tersebut.

## Log kueri langsung

Tab Layanan bukan sekadar sakelar mulai/henti; tab ini juga memantau lalu lintas server.

- **Tabel kueri:** setiap pencarian ditampilkan sebagai baris berisi host yang diminta, IP hasil resolusi, dan TTL yang dikembalikan.
- **Kontrol siklus hidup lengkap:** mulai, hentikan, atau mulai ulang server dari bilah alat yang sama di samping log.
- **Hapus sekali klik:** kosongkan tabel untuk melihat proses debug sebuah domain secara bersih.

Karena log diperbarui saat kueri tiba, inilah cara tercepat memastikan bahwa peramban atau perangkat benar-benar menggunakan FlyEnv sebagai resolver.

![Log kueri DNS langsung yang menunjukkan host, IP hasil resolusi, dan TTL](https://oss.macphpstudy.com/image/features/dns-server-1.webp)

## Konfigurasi

Server DNS menyimpan pengaturannya dalam satu berkas JSON, `dns.json`, dengan `dns.default.json` sebagai referensi pabrik. Tab Berkas Konfigurasi menawarkan dua cara untuk mengubahnya:

- **Menu IP ikat:** satu pengaturan visual untuk memilih alamat lokal yang didengarkan server. Nilai bawaan `0.0.0.0` menerima kueri pada semua antarmuka, sesuai ketika perangkat lain di jaringan juga perlu mengurai domain situs; memilih IP tertentu membatasi server ke antarmuka itu.
- **Editor JSON mentah:** untuk seluruh pengaturan lain, sunting berkas langsung, termasuk peta statis `resolveIP` yang menetapkan nama tertentu ke alamat pilihan.

![Tab konfigurasi DNS dengan menu IP ikat dan editor dns.json](https://oss.macphpstudy.com/image/features/dns-server-2.webp)

<FeatureRelatedLinks locale="id" slug="dns-server" />

## Catatan kompatibilitas

Server DNS bawaan berjalan di macOS, Windows, dan Linux, melayani UDP maupun TCP pada port 53. Port 53 adalah port istimewa pada sistem mirip Unix, sehingga mungkin memerlukan izin tinggi; resolver lain tidak dapat memakai port itu pada saat yang sama. Jika pengikatan gagal, proses mulai hanya melaporkan kesalahan. Server menjawab kueri hanya saat berjalan; riwayat kueri tampil langsung di tab Layanan dan tidak ditulis ke berkas log. Gunakan modul dalam aplikasi serta catatan rilis [halaman Unduhan](/id/download) sebagai rujukan perilaku rilis tertentu.
