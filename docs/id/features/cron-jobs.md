---
layout: doc
titleTemplate: false
title: 'Tugas Cron di FlyEnv | FlyEnv'
description: 'Buat tugas terjadwal visual, jalankan lewat scheduler OS, dan periksa riwayat pelaksanaannya di FlyEnv.'
head:
  - - meta
    - name: description
      content: 'Buat tugas terjadwal visual, jalankan lewat scheduler OS, dan periksa riwayat pelaksanaannya di FlyEnv.'
  - - meta
    - property: og:title
      content: 'Tugas Cron di FlyEnv | FlyEnv'
  - - meta
    - property: og:description
      content: 'Buat tugas terjadwal visual, jalankan lewat scheduler OS, dan periksa riwayat pelaksanaannya di FlyEnv.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/id/features/cron-jobs
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/id/features/cron-jobs
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Tugas Cron di FlyEnv

Modul **Tugas Cron** FlyEnv menjadikan scheduler bawaan sistem operasi sebagai alat visual. Tentukan nama, ekspresi cron lima bidang, perintah shell, dan direktori kerja; FlyEnv memasang tugas ke `crontab` pengguna di macOS/Linux atau Task Scheduler di Windows. Setiap eksekusi dibungkus skrip yang merekam keluaran, kode keluar, serta durasi, sehingga setiap tugas memiliki riwayat yang dapat ditelusuri tanpa penyiapan tambahan. [Panduan memulai](/id/guide/getting-started) menjelaskan cara membuka modul dari bilah sisi.

![Tab Tugas Cron FlyEnv yang mencantumkan tugas terjadwal, ekspresi, dan perintah](https://oss.macphpstudy.com/image/features/cron-jobs-1.webp)

## Membuat tugas

Klik **Tambah** pada tab Tugas Cron untuk membuka editor tugas.

- **Nama dan sakelar aktif:** setiap tugas memiliki nama tampilan dan dapat diaktifkan atau dinonaktifkan tanpa dihapus.
- **Ekspresi dengan validasi langsung:** ekspresi cron lima bidang diperiksa saat diketik, lengkap dengan pratinjau makna jadwal, tag preset, dan pemilih jadwal agar Anda tidak perlu menghafal urutan bidang.
- **Preset perintah:** area perintah menyediakan titik awal untuk `php artisan schedule:run`, node, python, dan bash; sesuaikan dengan proyek Anda. Untuk Laravel, lihat [menjalankan Laravel dengan FlyEnv](/id/guide/run-laravel-use-flyenv).
- **Direktori kerja dan cakupan:** tugas dapat bersifat global atau terikat ke situs tertentu; untuk tugas situs, direktori kerja terisi otomatis dari akar situs di daftar [situs lokal](/id/features/local-sites-https).
- **Uji jalan sebelum menjadwalkan:** tombol uji menjalankan perintah langsung dalam direktori kerja dan menampilkan keluaran, kode keluar, serta durasi untuk menemukan kesalahan kutip atau jalur sebelum tugas masuk scheduler.

![Editor tugas cron dengan validasi ekspresi, tag preset, dan area perintah](https://oss.macphpstudy.com/image/features/cron-jobs-2.webp)

## Integrasi scheduler OS

FlyEnv tidak menjalankan daemon sendiri; tugas dipasang ke scheduler sistem sehingga tetap berjalan ketika FlyEnv ditutup.

- **macOS dan Linux:** tugas ditulis ke `crontab` pengguna dalam blok penanda `# FlyEnv Cron Start/End <id>`.
- **Windows:** setiap tugas menjadi entri Task Scheduler bernama `FlyEnv-Cron-<id>` yang memanggil pembungkus PowerShell terenkode base64.
- **Skrip pembungkus:** scheduler tidak memanggil perintah langsung; pembungkus merekam stdout, stderr, kode keluar, dan durasi dalam log JSON Lines, serta memegang berkas kunci agar eksekusi lambat tidak bertumpang tindih dengan jadwal berikutnya.

## Riwayat jalan dan Jalankan Sekarang

Setiap eksekusi meninggalkan rekaman, baik dijalankan oleh jadwal maupun manual.

- **Riwayat per tugas:** setiap tugas menyimpan hingga 50 eksekusi terbaru, lengkap dengan keluaran, kode keluar, dan durasi.
- **Jalankan Sekarang:** pemicu manual menjalankan tugas lewat pembungkus yang sama untuk mengonfirmasi perilaku sebelum menunggu jadwal berikutnya.
- **Kegagalan terlihat:** kode keluar dan stderr yang direkam membuat perintah gagal muncul di riwayat, bukan hilang dalam log sistem.

![Riwayat jalan tugas cron dengan keluaran, kode keluar, dan durasi](https://oss.macphpstudy.com/image/features/cron-jobs-3.webp)

## Tab Tugas Sistem

Tab kedua, **Tugas Sistem**, menampilkan scheduler OS yang sebenarnya.

- Daftar memperlihatkan entri nyata pada mesin: baris `crontab` pengguna di macOS/Linux atau tugas terdaftar di Windows.
- Entri yang dibuat FlyEnv diberi tanda kepemilikan FlyEnv agar mudah dibedakan dari tugas perangkat lunak lain.
- Entri milik FlyEnv dapat dihapus langsung dari tab ini tanpa membuka `crontab -e` atau konsol Windows Task Scheduler.

![Tab Tugas Sistem yang menampilkan entri scheduler OS dengan tugas milik FlyEnv bertanda](https://oss.macphpstudy.com/image/features/cron-jobs-4.webp)

<FeatureRelatedLinks locale="id" slug="cron-jobs" />

## Catatan kompatibilitas

Modul ini menyunting scheduler pengguna OS saat ini: `crontab` pengguna di macOS dan Linux, serta Task Scheduler di Windows. Karena itu tugas berjalan dengan izin akun Anda dan dukungan ekspresi mengikuti format cron klasik lima bidang; tidak ada bidang detik maupun ekstensi seperti `@reboot`. Definisi tugas disimpan di `cron-jobs.json` FlyEnv dan riwayat dibatasi hingga 50 entri per tugas. [Halaman Unduhan](/id/download) mencantumkan platform yang didukung setiap rilis FlyEnv.
