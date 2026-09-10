---
layout: doc
titleTemplate: false
title: 'OpenClaw di FlyEnv'
description: 'Pasang dan kelola asisten AI pribadi OpenClaw serta gateway-nya secara lokal di FlyEnv.'
head:
  - - meta
    - name: description
      content: 'Pasang dan kelola asisten AI pribadi OpenClaw serta gateway-nya secara lokal di FlyEnv.'
  - - meta
    - property: og:title
      content: 'OpenClaw di FlyEnv'
  - - meta
    - property: og:description
      content: 'Pasang dan kelola asisten AI pribadi OpenClaw serta gateway-nya secara lokal di FlyEnv.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/id/features/openclaw
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/id/features/openclaw
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# OpenClaw di FlyEnv

OpenClaw adalah asisten AI pribadi sumber terbuka yang berjalan di komputer Anda sendiri. Gateway lokal menghubungkan kanal chat seperti WhatsApp dan Telegram ke agen coding, sehingga Anda dapat mengirim pesan kepada asisten dari mana saja. FlyEnv membungkus CLI OpenClaw dalam panel kendali ringkas: memasang OpenClaw melalui skrip resmi, mendaftarkan dan mengelola gateway sebagai layanan sistem operasi nyata, serta menampilkan sekitar 110 subperintah CLI dalam palet berkategori yang dijalankan di terminal tertanam FlyEnv. Modul ini sengaja tipis—FlyEnv tetap tidak mengganggu dan menggerakkan binari `openclaw` yang sama seperti saat digunakan manual. Lihat [panduan OpenClaw](/id/guide/openclaw) untuk alur tugas lengkap dan [FlyEnv bekerja dengan AI](/id/guide/flyenv-work-with-ai) untuk gambaran asisten AI di FlyEnv.

![Modul OpenClaw FlyEnv dengan status gateway pada tab Layanan](https://oss.macphpstudy.com/image/features/openclaw-1.webp)

## Pemasangan

OpenClaw dipasang dengan menjalankan skrip pemasangan resmi di terminal tertanam FlyEnv, sehingga Anda dapat melihat keluaran pemasang sebenarnya.

- **Hanya skrip resmi:** di macOS dan Linux FlyEnv menjalankan `curl -fsSL https://openclaw.ai/install.sh | bash`; di Windows digunakan pemasang PowerShell yang sesuai (`iwr ... install.ps1 | iex`). FlyEnv tidak mengunduh binari sendiri.
- **Tanpa manajer versi:** modul OpenClaw sengaja tidak memiliki daftar versi atau perpindahan multi-versi. Versi terpasang dibaca langsung dari `openclaw --version`.
- **Sakelar gateway di bilah sisi:** entri OpenClaw memiliki sakelar hidup/mati untuk gateway. Sakelar dinonaktifkan sampai CLI dan gateway terpasang, sehingga panel tidak menawarkan tindakan yang belum dapat dilakukan komputer.

## Manajemen gateway

Gateway adalah komponen OpenClaw yang berjalan lama. FlyEnv mendaftarkannya ke sistem operasi, bukan menjaga proses secara manual.

- **Pendaftaran layanan tingkat OS:** pemasangan gateway menjalankan `openclaw gateway install --force`, lalu mendaftarkannya sebagai layanan sistem—LaunchAgent di macOS (`ai.openclaw.gateway.plist` melalui `launchctl bootstrap`) atau unit systemd tingkat pengguna di Linux (`openclaw-gateway.service` melalui `systemctl --user enable/start`). Gateway tetap berjalan setelah restart tanpa FlyEnv aktif.
- **Mulai, berhenti, dan status dari panel:** sakelar bilah sisi dan tab Layanan menjalankan `openclaw gateway start/stop`, dengan fallback mematikan proses jika CLI gagal menghentikannya secara bersih.
- **Status langsung dan tautan dasbor:** FlyEnv membaca keluaran `openclaw gateway status` untuk menampilkan status saat ini dan mengambil URL dasbor yang dibuka di browser eksternal.

![Kontrol gateway OpenClaw dengan status layanan di FlyEnv](https://oss.macphpstudy.com/image/features/openclaw-2.webp)

## Palet perintah

Tab Layanan menyertakan palet perintah berkategori yang mencakup sekitar 110 perintah OpenClaw dalam 13 kategori—informasi dasar, konfigurasi, gateway, agen, browser, kanal, node dan perangkat, model, skill, sistem, sesi, pencadangan dan pembaruan, serta plugin. Kategori model cocok dipadukan dengan runtime model lokal seperti [Ollama](/id/features/ollama); lihat [panduan agen AI offline lokal](/id/guide/build-local-offline-ai-agent) jika ingin gateway menjawab tanpa model cloud.

- **Berjalan di terminal tertanam:** setiap perintah dieksekusi di xterm bawaan FlyEnv, sehingga keluaran CLI lengkap tetap terlihat dan dapat digulir.
- **Pengisian argumen:** perintah yang memerlukan parameter diketikkan ke terminal untuk Anda, siap dilengkapi dan dijalankan.
- **Pemetaan CLI langsung:** palet mencerminkan CLI OpenClaw sebenarnya—tidak ada yang diimplementasikan ulang; perintah yang diklik sama dengan yang dapat Anda ketik sendiri.

![Palet perintah OpenClaw berkategori di FlyEnv](https://oss.macphpstudy.com/image/features/openclaw-3.webp)

## Konfigurasi

Tab **Berkas Konfigurasi** mengedit berkas milik OpenClaw langsung; tidak ada formulir pengaturan, hanya editor mentah.

- **`~/.openclaw/openclaw.json`:** berkas konfigurasi utama OpenClaw yang dapat diedit sebagai sumber teks biasa.
- **Berkas layanan gateway di macOS:** `ai.openclaw.gateway.plist` yang dibuat juga tersedia untuk diedit langsung.
- Perubahan ditulis kembali ke berkas yang sama dengan yang dibaca CLI OpenClaw, sehingga edit manual di luar FlyEnv tidak berbenturan dengan salinan lain.

![Konfigurasi OpenClaw](https://oss.macphpstudy.com/image/features/openclaw-4.webp)

<FeatureRelatedLinks locale="id" slug="openclaw" />

## Catatan kompatibilitas

Modul OpenClaw adalah pembungkus tipis untuk CLI, bukan modul layanan latar belakang dan tidak memiliki entri baki. Satu-satunya proses persisten adalah gateway, yang dimiliki pengelola layanan sistem operasi setelah didaftarkan. Pendaftaran gateway mengandalkan `launchctl` di macOS dan unit systemd tingkat pengguna di Linux; di Windows tidak ada pendaftaran layanan OS dan gateway dikendalikan sepenuhnya melalui perintah CLI `openclaw gateway start/stop`. FlyEnv tidak menyediakan penampil log OpenClaw (informasi runtime berasal dari `openclaw gateway status` dan keluaran CLI), serta tidak memiliki manajer versi—apa pun yang diberikan skrip pemasangan resmi adalah versi yang Anda jalankan. Lihat [halaman Unduhan](/id/download) untuk rilis FlyEnv yang menyertakan modul ini. FlyEnv mengelola asisten pribadi berbasis gateway lain dengan cara serupa; lihat modul [Hermes Agent](/id/features/hermes-agent).
