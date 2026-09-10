---
layout: doc
titleTemplate: false
title: 'Manajer Versi Erlang/OTP untuk Pengembangan Lokal | FlyEnv'
description: 'Pasang versi Erlang/OTP dari Homebrew, MacPorts, atau build statis, lalu kaitkan satu versi ke setiap proyek.'
head:
  - - meta
    - name: description
      content: 'Pasang versi Erlang/OTP dari Homebrew, MacPorts, atau build statis, lalu kaitkan satu versi ke setiap proyek.'
  - - meta
    - property: og:title
      content: 'Manajer Versi Erlang/OTP untuk Pengembangan Lokal | FlyEnv'
  - - meta
    - property: og:description
      content: 'Pasang versi Erlang/OTP dari Homebrew, MacPorts, atau build statis, lalu kaitkan satu versi ke setiap proyek.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/id/features/erlang
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/id/features/erlang
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Pengembangan Erlang Lokal dengan FlyEnv

Erlang/OTP adalah bahasa pemrograman fungsional dan platform runtime untuk sistem yang sangat konkuren serta toleran kesalahan. Teknologi ini lazim digunakan untuk infrastruktur telekomunikasi, platform pesan, dan layanan lain yang harus tetap tersedia di bawah beban berat. Modul Erlang FlyEnv menyatukan pengembangan Erlang/OTP lokal: pasang beberapa versi, tentukan versi yang akan dipakai perintah `erl` di terminal, dan kaitkan setiap proyek dengan runtime sendiri. Tiga tabnya—Proyek Erlang, Layanan, dan Manajer Versi—berfokus pada pemasangan versi, kontrol PATH, serta runtime proyek.

![Ringkasan modul Erlang FlyEnv](https://oss.macphpstudy.com/image/features/erlang-1.webp)

## Manajemen versi Erlang

Pasang versi Erlang/OTP secara berdampingan melalui **Erlang → Manajer Versi** dan pertahankan semuanya agar tetap tersedia.

- **macOS:** pasang dari Homebrew (formula `erlang` dan formula berversi `erlang@<ver>`) atau MacPorts. FlyEnv juga memindai otomatis direktori pustaka MacPorts untuk pemasangan Erlang yang sudah ada. Ini mencakup kebutuhan lokal umum, termasuk menjalankan layanan berbasis Erlang seperti [RabbitMQ](/id/features/rabbitmq) di samping proyek Anda.
- **Linux:** pasang dari Homebrew; MacPorts hanya tersedia di macOS. Tidak ada sumber Statis di macOS maupun Linux.
- **Windows:** pasang dari daftar daring Statis berisi build paket, masing-masing memuat executable `bin/erl.exe`.
- **Direktori kustom:** arahkan FlyEnv ke direktori berisi build Erlang Anda sendiri agar tampil di daftar di samping versi terkelola.
- **Deteksi versi otomatis:** di macOS dan Linux, setiap pemasangan diperiksa dengan `erl -version`; di Windows, versi dibaca dari nama direktori pemasangan.

![Manajer Versi Erlang dengan sumber Homebrew dan MacPorts](https://oss.macphpstudy.com/image/features/erlang-2.webp)

## Pengalihan versi baris perintah

Tab **Layanan** tidak berisi layanan sama sekali: Erlang tidak memiliki proses daemon di dalam FlyEnv. Tab ini adalah tabel versi terpasang untuk mengelola versi dan PATH.

- **Pengalihan versi terminal:** pilih versi terpasang yang akan digunakan perintah `erl`. FlyEnv memperbarui `PATH` dengan menambahkan atau menghapus direktori bin versi dan menandai apakah entri PATH saat ini disetel oleh FlyEnv atau alat lain. [Panduan lingkungan PATH sistem](/id/guide/setup-system-path-environment) menjelaskan detailnya.
- **Alias dan catatan per versi:** tetapkan alias singkat serta catatan pada setiap pemasangan agar build serupa mudah dibedakan.
- **Pemeliharaan:** jalur pemasangan setiap versi terlihat dalam tabel dan versi yang tidak diperlukan dapat dihapus dari sana.

## Runtime Erlang tingkat proyek

Di **Erlang → Proyek**, daftarkan folder setiap proyek dan kaitkan ke versi Erlang tertentu, bukan bergantung pada versi apa pun yang kebetulan ada di PATH.

- **Runtime per proyek:** pilihan versi disimpan dalam berkas `.flyenv` di direktori proyek, sehingga terminal dan editor yang diluncurkan dari FlyEnv otomatis memakai Erlang yang tepat. Lihat [panduan lingkungan runtime tingkat proyek](/id/guide/project-level-runtime-environment) dan fitur [Runtime per Proyek](/id/features/per-project-runtimes) untuk mekanismenya.
- **Jalankan sebagai layanan:** proyek dapat dijalankan langsung dari FlyEnv dengan perintah mulai kustom, port TCP yang ditampilkan sebagai tautan `http://127.0.0.1:<port>`, variabel lingkungan dari baris atau berkas, serta opsi sudo di macOS dan Linux. Sakelar bilah sisi memulai atau menghentikan semua proyek Erlang yang diaktifkan sebagai layanan sekaligus.
- **Alat buka-cepat:** lompat dari baris proyek ke terminal sistem dengan lingkungan proyek telah dimuat.

![Daftar Proyek Erlang dengan pengaitan versi Erlang per proyek](https://oss.macphpstudy.com/image/features/erlang-3.webp)

<FeatureRelatedLinks locale="id" slug="erlang" />

## Catatan kompatibilitas

FlyEnv mengelola pemasangan versi Erlang, pengalihan PATH, dan runtime proyek. FlyEnv tidak membundel alat build atau framework selain yang disediakan tiap build Erlang/OTP, dan modul ini tidak memiliki editor berkas konfigurasi atau penampil log sendiri. Sumber pemasangan berbeda menurut platform—Homebrew dan MacPorts di macOS, Homebrew di Linux, serta build Statis di Windows—jadi gunakan [halaman Unduhan](/id/download) dan catatan rilis terbaru sebagai rujukan paket yang didukung.
