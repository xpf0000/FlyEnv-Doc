---
layout: doc
titleTemplate: false
title: 'Penyimpanan Objek Lokal Kompatibel S3 dengan RustFS | FlyEnv'
description: 'Jalankan versi RustFS dengan konfigurasi visual, direktori data per versi, dan konsol RustFS.'
head:
  - - meta
    - name: description
      content: 'Jalankan versi RustFS dengan konfigurasi visual, direktori data per versi, dan konsol RustFS.'
  - - meta
    - property: og:title
      content: 'Penyimpanan Objek Lokal Kompatibel S3 dengan RustFS | FlyEnv'
  - - meta
    - property: og:description
      content: 'Jalankan versi RustFS dengan konfigurasi visual, direktori data per versi, dan konsol RustFS.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/id/features/rustfs
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/id/features/rustfs
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Penyimpanan Objek RustFS Lokal dengan FlyEnv

RustFS adalah sistem penyimpanan objek terdistribusi sumber terbuka yang ditulis dalam Rust dan menyediakan API kompatibel S3. Sistem ini sesuai untuk beban kerja yang membutuhkan penyimpanan objek pada infrastruktur sendiri—dan, saat pengembangan, sebagai pengganti S3 lokal tanpa kontainer atau akun cloud. FlyEnv menjadikan RustFS sebagai layanan lokal terkelola, sehingga Anda memperoleh penyimpanan tersebut tanpa skrip shell. Pasang build RustFS dari aplikasi, bentuk `rustfs.conf` melalui formulir pengaturan berkelompok, simpan objek setiap versi di direktori datanya sendiri, dan buka konsol RustFS di browser dengan satu klik.

![FlyEnv RustFS ikhtisar modul](https://oss.macphpstudy.com/image/features/rustfs-1.webp)

## Manajemen versi

Pasang dan simpan beberapa build RustFS dari **RustFS → Manajer Versi**, lalu pilih build yang dijalankan layanan.

- **Hanya sumber statis:** versi RustFS berasal dari daftar daring FlyEnv berisi build siap pakai, yang dikemas sebagai arsip zip untuk Windows, macOS, dan Linux. Homebrew serta MacPorts tidak tersedia sebagai sumber pemasangan modul ini.
- **Direktori khusus:** arahkan FlyEnv ke folder yang berisi binari RustFS Anda; binari tersebut muncul di daftar terpasang di samping build terkelola.
- **Satu instans aktif:** berkas pid tetap membatasi modul pada satu server RustFS dalam satu waktu.

![Manajer versi RustFS dengan daftar build daring statis](https://oss.macphpstudy.com/image/features/rustfs-2.webp)

## Layanan dan konfigurasi

Tab Layanan meluncurkan build terpilih sebagai `rustfs server` dengan argumen yang diterjemahkan dari kunci `RUSTFS_*` dalam `rustfs/rustfs.conf`; nilai lingkungan juga diteruskan ke proses. Sakelar bilah sisi (yang juga ada di baki sistem) memulai atau menghentikan layanan.

- **Direktori data per versi:** setiap build menyimpan objek di jalur volume sendiri (bawaan `rustfs/data` di bawah folder RustFS FlyEnv). Pilih folder lain dari bilah alat Layanan dan pilihan itu diingat per versi.
- **Formulir pengaturan visual:** tab Berkas Konfigurasi menampilkan sekitar 19 kunci `RUSTFS_*` dalam formulir berkelompok untuk Jaringan, Keamanan, Umum, Lanjutan, dan Performa—alamat serta domain server, kunci akses dan rahasia (atau berkas kunci), pengaktifan serta alamat konsol, endpoint OBS, jalur TLS, wilayah, mode KMS (lokal atau vault), dan profil buffer.
- **Editor mentah:** beralih ke tampilan teks lengkap `rustfs.conf` untuk kunci yang tidak ditampilkan formulir; perubahan berlaku pada permulaan berikutnya.

![Berkas konfigurasi RustFS dengan pengaturan RUSTFS_* terkelompok](https://oss.macphpstudy.com/image/features/rustfs-3.webp)

## Konsol

RustFS menyediakan konsol web sendiri dan FlyEnv menyiapkan alamatnya untuk Anda. Port konsol diurai dari `RUSTFS_CONSOLE_ADDRESS` dalam konfigurasi—secara bawaan `http://127.0.0.1:9001/`—dan tombol konsol di bilah alat Layanan membukanya langsung di browser. Masuklah dengan kredensial akses dari konfigurasi untuk bekerja dengan bucket, objek, dan kebijakan akses di antarmuka web resmi RustFS, tanpa alat tambahan.

![Membuka konsol RustFS di peramban dari tab layanan](https://oss.macphpstudy.com/image/features/rustfs-4.webp)

## Log

RustFS memiliki dua tab log khusus di FlyEnv: **Log** menampilkan keluaran `start-out` per versi dan **Log Error** menampilkan berkas `start-error` pasangannya. Jika build gagal dimulai—port telah digunakan, direktori data tidak dapat dibaca, atau jalur TLS salah—Log Error adalah tempat pertama penyebabnya terlihat.

<FeatureRelatedLinks locale="id" slug="rustfs" />

## Catatan kompatibilitas

Modul ini menjalankan satu instans RustFS dalam satu waktu—satu versi, direktori data, dan alamat konsol—jadi berpindahlah antarbuild dari tab Layanan alih-alih mencoba menjalankan server secara paralel. Build yang dapat dipasang bergantung pada rilis dalam daftar daring statis untuk sistem operasi Anda; Homebrew dan MacPorts bukan sumber RustFS. FlyEnv mengelola proses lokal, berkas `rustfs.conf`, dan direktori data per versi; bucket, objek, serta semua yang berada di balik API kompatibel S3 merupakan milik RustFS sendiri. Aplikasi yang menggunakan S3—seperti penyimpanan eksternal [Nextcloud](/id/solutions/nextcloud) atau unggahan [Strapi](/id/solutions/strapi)—dapat menunjuk endpoint ini selama pengembangan. FlyEnv juga menyediakan [MinIO](/id/features/minio) sebagai modul penyimpanan objek alternatif yang kompatibel S3. Periksa [halaman Unduhan](/id/download) untuk rilis terkini dan telusuri [Demo](/id/demos) untuk melihat modul ini digunakan.
