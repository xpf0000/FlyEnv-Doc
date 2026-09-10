---
layout: doc
titleTemplate: false
title: 'Penyimpanan Objek S3 Lokal dengan MinIO | FlyEnv'
description: 'Jalankan versi MinIO dengan konfigurasi visual, direktori data per versi, dan MinIO Console di port 9001.'
head:
  - - meta
    - name: description
      content: 'Jalankan versi MinIO dengan konfigurasi visual, direktori data per versi, dan MinIO Console di port 9001.'
  - - meta
    - property: og:title
      content: 'Penyimpanan Objek S3 Lokal dengan MinIO | FlyEnv'
  - - meta
    - property: og:description
      content: 'Jalankan versi MinIO dengan konfigurasi visual, direktori data per versi, dan MinIO Console di port 9001.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/id/features/minio
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/id/features/minio
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Penyimpanan Objek Lokal dengan FlyEnv

MinIO adalah server penyimpanan objek sumber terbuka yang menggunakan API Amazon S3. Pengembang memakainya ketika aplikasi memerlukan penyimpanan yang kompatibel dengan S3 selama pengembangan dan pengujian tanpa membuat bucket cloud sungguhan. FlyEnv menjalankan MinIO sebagai layanan lokal terkelola, menyediakan penyimpanan tersebut tanpa Docker atau penyiapan manual. Pasang versi MinIO dari aplikasi, edit `minio.conf` melalui formulir pengaturan visual, berikan direktori data untuk setiap versi, dan buka MinIO Console di browser dengan satu klik.

![Ikhtisar modul MinIO FlyEnv](https://oss.macphpstudy.com/image/features/minio-1.webp)

## Manajemen versi

Pasang dan simpan beberapa versi MinIO melalui **MinIO → Manajer Versi**, lalu pilih versi yang dijalankan layanan.

- **Sumber pemasangan:** daftar daring statis build MinIO siap pakai, ditambah Homebrew pada platform yang menyediakannya.
- **Versi khusus:** tambahkan direktori yang berisi instalasi MinIO Anda; FlyEnv menampilkannya di samping versi terkelola.
- **Pemasangan tertangani:** setelah pemasangan di macOS, FlyEnv memperbaiki izin binari (`chmod 0755`) dan menghapus atribut karantina agar server segera dapat dijalankan.

![Manajer Versi MinIO dengan sumber pemasangan](https://oss.macphpstudy.com/image/features/minio-2.webp)

## Layanan dan konfigurasi

Tab Layanan memulai versi MinIO terpilih sebagai proses latar depan nyata—`minio server <dataDir>` dengan flag `--address`, `--console-address`, dan `--certs-dir` yang dibentuk dari konfigurasi. Berkas pid tetap membatasi modul pada satu instans aktif, sedangkan sakelar bilah sisi (juga tersedia di baki sistem) memulai atau menghentikan layanan.

- **Direktori data per versi:** setiap versi MinIO menyimpan objek di direktori sendiri (bawaan `minio/data` di bawah folder MinIO FlyEnv). Ubah melalui pemilih folder di bilah alat Layanan; pilihan diingat per versi.
- **Formulir Pengaturan Umum visual:** tab Berkas Konfigurasi mengedit `minio/minio.conf` melalui formulir sekitar 30 kunci dalam kategori Jaringan, Keamanan, Penyimpanan, Klaster, Performa, dan Umum—`MINIO_ADDRESS`, `MINIO_CONSOLE_ADDRESS`, `MINIO_ROOT_USER`, `MINIO_ROOT_PASSWORD` (bawaan `minioadmin`/`minioadmin`), direktori sertifikat, browser aktif/nonaktif, kelas kode erasure, [etcd](/id/features/etcd), dan opsi penyetelan API.
- **Editor mentah:** beralih ke sumber lengkap `minio.conf` untuk opsi yang tidak dicakup formulir; baris `MINIO_*` diterapkan ke server pada start berikutnya.

![Berkas konfigurasi MinIO dengan formulir Pengaturan Umum](https://oss.macphpstudy.com/image/features/minio-3.webp)

## MinIO Console

MinIO menyediakan Console web sendiri dan FlyEnv menghubungkannya untuk Anda. Alamat console dinormalisasi ke `127.0.0.1:9001` secara bawaan (dapat diubah melalui `MINIO_CONSOLE_ADDRESS`), dan tombol Console di bilah alat Layanan membukanya langsung di browser—tanpa pemasangan terpisah atau mencari port. Masuk dengan kredensial root dari konfigurasi untuk mengelola bucket, objek, dan kebijakan akses melalui UI web MinIO resmi.

![MinIO Console](https://oss.macphpstudy.com/image/features/minio-4.webp)

## Log

Tab Log membuka berkas log per versi langsung di FlyEnv: `minio-<version>-start-out.log` untuk keluaran standar dan `minio-<version>-start-error.log` untuk error. Ketika versi gagal dimulai, periksa log error terlebih dahulu—konflik port dan masalah direktori data langsung terlihat di sana.

![Penampil log per versi MinIO](https://oss.macphpstudy.com/image/features/minio-5.webp)

<FeatureRelatedLinks locale="id" slug="minio" />

## Catatan kompatibilitas

Modul MinIO menjalankan satu instans pada satu waktu—satu versi, satu direktori data, satu alamat console. Ganti versi atau direktori data dari tab Layanan, bukan dengan memulai beberapa server. Versi di Manajer Versi bergantung pada daftar daring statis dan publikasi Homebrew untuk platform Anda; MacPorts bukan sumber pemasangan MinIO. FlyEnv mengelola proses MinIO lokal, berkas konfigurasi, dan direktori data; isi bucket, kebijakan akses, serta semua hal di dalam API kompatibel S3 merupakan milik MinIO. Aplikasi berbahasa S3 seperti penyedia unggahan situs [Strapi](/id/solutions/strapi) atau penyimpanan eksternal instans [Nextcloud](/id/solutions/nextcloud) dapat menargetkan endpoint lokal ini selama pengembangan. [RustFS](/id/features/rustfs) tersedia sebagai modul alternatif kompatibel S3 jika Anda memilih implementasi Rust. Jadikan daftar versi dalam aplikasi dan [halaman Unduhan](/id/download) sebagai acuan, serta lihat [Demos](/id/demos) untuk contoh penggunaan modul.
