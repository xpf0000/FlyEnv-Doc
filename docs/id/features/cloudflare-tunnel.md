---
layout: doc
titleTemplate: false
title: 'Manajer Cloudflare Tunnel untuk Situs Lokal | FlyEnv'
description: 'Buat tunnel yang dikelola Cloudflare, petakan hostname publik ke layanan lokal, dan periksa log per tunnel di FlyEnv.'
head:
  - - meta
    - name: description
      content: 'Buat tunnel yang dikelola Cloudflare, petakan hostname publik ke layanan lokal, dan periksa log per tunnel di FlyEnv.'
  - - meta
    - property: og:title
      content: 'Manajer Cloudflare Tunnel untuk Situs Lokal | FlyEnv'
  - - meta
    - property: og:description
      content: 'Buat tunnel yang dikelola Cloudflare, petakan hostname publik ke layanan lokal, dan periksa log per tunnel di FlyEnv.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/id/features/cloudflare-tunnel
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/id/features/cloudflare-tunnel
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Cloudflare Tunnel dengan FlyEnv

Cloudflare Tunnel adalah layanan Cloudflare yang menghubungkan layanan lokal ke hostname publik melalui tunnel keluar-saja dari mesin Anda. Tidak diperlukan penerusan port router atau IP publik, sehingga cocok untuk demo dan akses jarak jauh ke lingkungan pengembangan. Modul Cloudflare Tunnel FlyEnv mengekspos layanan lokal pada hostname publik tanpa mengubah router atau firewall. Hubungkan akun Cloudflare sekali, tambahkan aturan DNS yang memetakan subdomain ke target lokal `host:port`, lalu FlyEnv mengelola keseluruhan penyiapan melalui API Cloudflare: membuat tunnel, menulis rekam CNAME, dan mendorong aturan ingress. Setiap tunnel berjalan sebagai proses terkelola dengan lognya sendiri.

![Modul Cloudflare Tunnel FlyEnv dengan daftar tunnel](https://oss.macphpstudy.com/image/features/cloudflare-tunnel-1.webp)

## Penyiapan tunnel

Buka **Cloudflare Tunnel** dari bilah sisi dan tambahkan tunnel. Dialog penyiapan meminta empat hal:

- **Biner cloudflared:** proses tunnel adalah executable `cloudflared`, sehingga setidaknya satu versi [modul Cloudflared](/id/features/cloudflared) harus dipasang lebih dahulu. Pilih versinya dari daftar; bila belum ada, FlyEnv meminta Anda memasangnya sebelum melanjutkan.
- **Token API:** Token API Cloudflare yang berizin mengelola tunnel dan DNS pada akun Anda. FlyEnv memakainya untuk berkomunikasi dengan Cloudflare API v4.
- **ID Akun:** akun Cloudflare pemilik zone.
- **Zone / ID Zone:** domain yang rekam DNS dan subdomainnya digunakan tunnel.

Saat dimulai, FlyEnv mencari atau membuat tunnel yang dikonfigurasi dari jauh pada akun Anda bernama `FlyEnv-Tunnel-<token hash>`, lalu menjalankan `cloudflared tunnel run --token <token>` sebagai proses latar belakang terlepas. Tidak ada berkas konfigurasi tunnel lokal yang perlu dipelihara: konfigurasi berada di Cloudflare dan dikelola sepenuhnya melalui API.

![Menambahkan tunnel dengan biner cloudflared, Token API, ID Akun, dan Zone](https://oss.macphpstudy.com/image/features/cloudflare-tunnel-2.webp)

## Aturan DNS untuk layanan lokal

Setiap baris tunnel dapat diperluas menjadi tabel aturan DNS. Sebuah aturan memetakan hostname publik ke layanan lokal:

- **Subdomain dan zone:** hostname publik, misalnya `demo.example.com`.
- **Protokol dan target:** `http` atau `https`; untuk target `https`, sertifikat dari [modul MkCert](/id/features/mkcert) dapat digunakan, ditambah `host:port` lokal penerima lalu lintas, biasanya situs dari modul [Situs Lokal & HTTPS](/id/features/local-sites-https).

Saat aturan disimpan, FlyEnv menulis kedua sisi konfigurasi lewat API Cloudflare: membuat atau memperbarui rekam CNAME terproksi yang mengarah ke `<tunnelId>.cfargotunnel.com`, lalu mendorong aturan ingress tunnel. Setiap hostname dirutekan ke target `http(s)://host:port` dengan header `Host` disetel, dan diakhiri penangkap semua 404 untuk permintaan yang tidak cocok. Mengubah atau menghapus aturan akan memperbarui entri CNAME dan ingress terkait.

![Aturan DNS yang memetakan subdomain ke host dan port lokal](https://oss.macphpstudy.com/image/features/cloudflare-tunnel-3.webp)

Untuk panduan lengkap mengekspos situs yang dibuat melalui alur [panduan Host](/id/guide/host), lihat [panduan Cloudflare Tunnel untuk pengembangan lokal](/id/guide/cloudflare-tunnel-local-development).

## Log tunnel

Setiap tunnel menyimpan log keluaran dan kesalahannya di direktori data FlyEnv, bersama berkas pid. Penampil log bawaan mencantumkan berkas log per tunnel, sehingga Anda dapat memastikan koneksi ke edge Cloudflare telah terbentuk dan mendiagnosis masalah DNS atau ingress tanpa meninggalkan aplikasi.

![Penampil log keluaran dan kesalahan per tunnel](https://oss.macphpstudy.com/image/features/cloudflare-tunnel-4.webp)

<FeatureRelatedLinks locale="id" slug="cloudflare-tunnel" />

## Catatan kompatibilitas

Modul Cloudflare Tunnel tersedia di macOS, Windows, dan Linux. Modul ini memerlukan modul Cloudflared untuk biner `cloudflared`, serta akun Cloudflare dengan Token API yang dapat mengelola tunnel dan DNS di zone pilihan. Karena seluruh konfigurasi disimpan di Cloudflare, perubahan pada tunnel yang sama di dasbor Cloudflare dapat berinteraksi dengan pengelolaan FlyEnv; jadikan FlyEnv sebagai satu sumber kebenaran untuk tunnel tersebut. Lihat [halaman Unduhan](/id/download) dan catatan rilis untuk platform serta paket yang didukung.
