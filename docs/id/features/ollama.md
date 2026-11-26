---
layout: doc
titleTemplate: false
title: 'Model AI Lokal dengan Ollama | FlyEnv'
description: 'Pasang dan jalankan Ollama, atur lingkungan server, serta unduh dan kelola model lokal di FlyEnv.'
head:
  - - meta
    - name: description
      content: 'Pasang dan jalankan Ollama, atur lingkungan server, serta unduh dan kelola model lokal di FlyEnv.'
  - - meta
    - property: og:title
      content: 'Model AI Lokal dengan Ollama | FlyEnv'
  - - meta
    - property: og:description
      content: 'Pasang dan jalankan Ollama, atur lingkungan server, serta unduh dan kelola model lokal di FlyEnv.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/id/features/ollama
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/id/features/ollama
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Jalankan Ollama Secara Lokal dengan FlyEnv

Ollama adalah alat sumber terbuka untuk menjalankan model bahasa besar di komputer sendiri melalui API lokal yang dapat dipanggil aplikasi apa pun. FlyEnv mengelola Ollama sebagai layanan lokal: pasang dari build statis atau Homebrew, mulai `ollama serve` sekali klik, sesuaikan pengaturan lingkungan `OLLAMA_*` melalui formulir visual, dan kelola model dari tab **Model**. Setelah model diunduh, ikuti [panduan agen AI offline lokal](/id/guide/build-local-offline-ai-agent).

![FlyEnv Ollama ikhtisar modul dengan layanan kontrol](https://oss.macphpstudy.com/image/features/ollama-1.webp)

## Manajemen versi

Tab **Manajer Versi** memasang dan menyimpan beberapa versi Ollama berdampingan; pilih versi yang dijalankan layanan.

- **Unduhan statis:** arsip Ollama (`.zip` / `.tgz`) diambil melalui API versi FlyEnv untuk macOS, Linux, dan Windows.
- **Homebrew:** pasang formula `ollama` melalui Homebrew jika tersedia dan kelola di samping build statis.
- **Direktori khusus:** arahkan FlyEnv ke folder instalasi Ollama Anda; binari `ollama`/`ollama.exe` dipindai dan ditampilkan.
- **Satu versi berjalan:** layanan menjalankan satu versi Ollama pada satu waktu sehingga endpoint API selalu berasal dari build yang diketahui.

![Ollama manajer versi dengan statis dan Homebrew sumber](https://oss.macphpstudy.com/image/features/ollama-2.webp)

## Layanan dan konfigurasi

FlyEnv menjalankan Ollama terlepas sebagai `ollama serve` dan melacak berkas pid untuk memulai serta menghentikan dengan bersih. Sakelar bilah sisi dan baki sistem mengontrol layanan. Konfigurasi awal FlyEnv memakai alamat API bawaan Ollama, `127.0.0.1:11434`.

Variabel lingkungan dibaca dari `ollama.conf` di direktori dasar FlyEnv; setiap baris yang dimulai `OLLAMA_` diteruskan ke proses server. Tab **Berkas Konfigurasi** mengedit berkas ini dengan dua cara:

- **Formulir pengaturan umum:** ubah variabel seperti `OLLAMA_DEBUG`, `OLLAMA_HOST`, dan `OLLAMA_KEEP_ALIVE` melalui formulir visual.
- **Editor mentah:** beralih ke sumber lengkap untuk pengaturan lain; salinan `ollama.conf.default` disimpan sebagai referensi.

![Berkas konfigurasi Ollama dengan pengaturan umum OLLAMA_*](https://oss.macphpstudy.com/image/features/ollama-3.webp)

## Manajemen model

Tab **Model** digunakan untuk mengunduh, mencantumkan, dan menjalankan model.

- **Daftar lokal:** menampilkan model di komputer Anda berdasarkan `ollama list`.
- **Pustaka:** katalog daring model yang diambil dari API FlyEnv dan disimpan dalam cache lokal.
- **Unduh dan jalankan di terminal:** unduh model dari Pustaka atau jalankan dari daftar lokal di terminal tertanam FlyEnv; tombol salin menyalin perintah `ollama`.
- **Laporan perangkat keras:** laporan GPU, CPU, dan RAM membantu menilai ukuran model yang dapat berjalan nyaman.

![Tab model Ollama dengan model lokal dan pustaka daring](https://oss.macphpstudy.com/image/features/ollama-4.webp)

![Menarik model Ollama di terminal tertanam](https://oss.macphpstudy.com/image/features/ollama-5.webp)

Untuk akses dari komputer yang sama, atur `OLLAMA_HOST=127.0.0.1:11434`, lalu mulai ulang layanan. Setelah mengunduh model, buka `http://127.0.0.1:11434/api/tags` untuk memastikan Ollama merespons dan mencantumkan model tersebut. Versi Ollama yang mendukung fitur cloud juga dapat memakai `OLLAMA_NO_CLOUD=1` agar hanya berjalan secara lokal. [Mode lokal Ollama](https://docs.ollama.com/faq#how-do-i-disable-ollamas-cloud-features)

Hubungkan [asisten coding lokal](/id/guide/build-local-offline-ai-agent) ke API ini, atau gunakan API di [webhook n8n yang dihosting sendiri](/id/guide/build-local-ai-workflow-by-n8n). Lihat [demo penyiapan Ollama untuk penggunaan offline](/id/demos?video=offline-ai-agent).

## Log

Tab **Log** membuka log server per versi di FlyEnv: `ollama-<version>-start-out.log` untuk keluaran standar dan `ollama-<version>-start-error.log` untuk error. Periksa berkas ini terlebih dahulu saat versi gagal dimulai atau API berhenti merespons.

<FeatureRelatedLinks locale="id" slug="ollama" />

## Catatan kompatibilitas

FlyEnv mengelola runtime Ollama lokal, berkas konfigurasi, dan alur model; model tidak dibundel karena setiap unduhan berasal dari pustaka Ollama upstream dan memerlukan jaringan serta ruang disk. Pemasangan statis tersedia di macOS, Linux, dan Windows; ketersediaan Homebrew bergantung platform. Hanya satu versi berjalan pada satu waktu, dan perubahan `ollama.conf` berlaku saat layanan dimulai berikutnya.
