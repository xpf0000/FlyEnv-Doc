---
layout: doc
titleTemplate: false
title: 'Pengelola Sertifikat MkCert untuk HTTPS Lokal | FlyEnv'
description: 'Pasang mkcert, percayai CA lokalnya, dan buat sertifikat HTTPS tepercaya untuk situs FlyEnv Anda.'
head:
  - - meta
    - name: description
      content: 'Pasang mkcert, percayai CA lokalnya, dan buat sertifikat HTTPS tepercaya untuk situs FlyEnv Anda.'
  - - meta
    - property: og:title
      content: 'Pengelola Sertifikat MkCert untuk HTTPS Lokal | FlyEnv'
  - - meta
    - property: og:description
      content: 'Pasang mkcert, percayai CA lokalnya, dan buat sertifikat HTTPS tepercaya untuk situs FlyEnv Anda.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/id/features/mkcert
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/id/features/mkcert
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Sertifikat HTTPS Lokal dengan FlyEnv

mkcert membuat otoritas sertifikat lokal untuk pengembangan. Peramban harus memercayai CA tersebut dan sertifikat harus mencakup nama host yang dibuka. FlyEnv mengintegrasikan [mkcert](https://github.com/FiloSottile/mkcert) untuk memasang CA dan membuat sertifikat bagi [situs lokal](/id/features/local-sites-https) Anda.

![FlyEnv MkCert ikhtisar modul](https://oss.macphpstudy.com/image/features/mkcert-1.webp)

## Manajemen versi

Tab **Manajer Versi** memasang dan menjaga binari mkcert tetap mutakhir.

- **Build statis:** pasang rilis resmi mkcert dari daftar versi daring FlyEnv, yang diunduh langsung dari rilis GitHub proyek tersebut.
- **Homebrew:** di macOS dan Linux, versi yang dipasang dengan `brew install mkcert` dideteksi dan dicantumkan bersama build terkelola.
- **Direktori khusus:** arahkan FlyEnv ke folder mana pun yang berisi binari `mkcert` Anda sendiri; folder tersebut juga akan dipindai.
- **Siap dijalankan:** binari yang diunduh dibongkar ke direktori FlyEnv sendiri, dengan atribut karantina macOS dihapus dan izin eksekusi diatur otomatis.

![MkCert manajer versi dengan statis dan Homebrew build](https://oss.macphpstudy.com/image/features/mkcert-2.webp)

## CA lokal dan tab Sertifikat

Tab **Sertifikat** adalah inti modul ini. Tab tersebut menampilkan **Jalur Root CA** mkcert (dibaca langsung dari `mkcert -CAROOT`; klik untuk membuka foldernya di pengelola berkas) dan menyediakan tindakan **Pasang CA** yang menjalankan `mkcert -install` di terminal tertanam FlyEnv. Tindakan ini mendaftarkan CA root lokal di penyimpanan kepercayaan yang didukung pada perangkat Anda.

- **Pemilih binari:** pilih build mkcert terpasang yang menjalankan perintah; FlyEnv mengutamakan versi pada PATH lingkungannya sendiri.
- **Eksekusi transparan:** pemasangan CA dan pembuatan sertifikat berjalan terlihat di terminal tertanam, sehingga Anda dapat melihat persis apa yang dilakukan mkcert.

## Pembuatan sertifikat per situs

Tab Sertifikat mencantumkan situs yang Anda buat di FlyEnv, masing-masing beserta jalur sertifikat dan kuncinya serta tindakan **Buat**.

- **Domain dan alias tercakup:** sertifikat yang dibuat menyertakan domain situs dan setiap alias yang Anda konfigurasi, melalui `mkcert -cert-file … -key-file …`.
- **Penyimpanan terkelola:** sertifikat dan kunci ditulis ke direktori `CA` milik FlyEnv, satu folder untuk setiap situs.
- **SSL diaktifkan otomatis:** jika HTTPS belum aktif pada situs, FlyEnv akan mengaktifkannya memakai sertifikat yang baru dibuat setelah pembuatan selesai—tanpa menghubungkannya secara manual ke [pengaturan situs](/id/guide/host). Berkas sertifikat dirujuk langsung oleh vhost situs di [Nginx](/id/features/nginx), [Apache](/id/features/apache), dan [Caddy](/id/features/caddy).

![Generating HTTPS certificate untuk FlyEnv situs](https://oss.macphpstudy.com/image/features/mkcert-3.webp)

Jika muncul peringatan nama host atau kepercayaan, periksa DNS, nama dalam sertifikat, dan kepercayaan peramban dengan [panduan Host](/id/guide/host). Simpan kunci privat CA di perangkat Anda.

<FeatureRelatedLinks locale="id" slug="mkcert" />

## Catatan kompatibilitas

- mkcert adalah alat baris perintah sekali jalan, bukan layanan latar belakang: tidak ada yang perlu dimulai atau dihentikan, dan modul ini memang tidak memiliki editor berkas konfigurasi maupun penampil log.
- Pada perangkat pengembangan lain, pasang `rootCA.pem` publik di penyimpanan kepercayaan perangkat. Jaga kerahasiaan `rootCA-key.pem` dan gunakan sertifikat ini hanya untuk pengembangan.
- Mempercayai CA root (`mkcert -install`) mengubah penyimpanan kepercayaan sistem dan mungkin meminta persetujuan administrator di terminal tertanam.
- Sumber pemasangan berbeda menurut platform: build statis tersedia di semua platform, sedangkan Homebrew tersedia di macOS dan Linux. Lihat [halaman Unduhan](/id/download) untuk platform yang didukung FlyEnv.
