---
layout: doc
titleTemplate: false
title: 'Manajer SDK .NET untuk Pengembangan Lokal | FlyEnv'
description: 'Pasang dan ganti versi SDK .NET serta kaitkan runtime ke setiap proyek di FlyEnv.'
head:
  - - meta
    - name: description
      content: 'Pasang dan ganti versi SDK .NET serta kaitkan runtime ke setiap proyek di FlyEnv.'
  - - meta
    - property: og:title
      content: 'Manajer SDK .NET untuk Pengembangan Lokal | FlyEnv'
  - - meta
    - property: og:description
      content: 'Pasang dan ganti versi SDK .NET serta kaitkan runtime ke setiap proyek di FlyEnv.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/id/features/dotnet
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/id/features/dotnet
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Pengembangan .NET Lokal dengan FlyEnv

.NET adalah platform pengembang sumber terbuka dari Microsoft untuk membuat aplikasi web, desktop, seluler, dan cloud dengan C# sebagai bahasa utamanya. FlyEnv mengelola SDK .NET lokal di satu tempat: memasang beberapa versi SDK berdampingan, mengalihkan perintah `dotnet` di antaranya, serta mengaitkan SDK tertentu ke setiap proyek agar terminal dan editor memakai runtime yang tepat. Modul .NET terdiri dari tiga tab: Proyek .NET, Layanan, dan Manajer Versi.

![Modul .NET FlyEnv dengan tab Proyek, Layanan, dan Manajer Versi](https://oss.macphpstudy.com/image/features/dotnet-1.webp)

## Manajemen versi SDK .NET

Pasang beberapa versi SDK .NET secara berdampingan melalui **.NET → Manajer Versi** dan beralihlah di antaranya kapan saja.

- **Metadata rilis Microsoft:** tidak seperti modul bahasa lainnya, daftar Statis .NET diambil langsung dari metadata rilis resmi Microsoft, memilih SDK terbaru per kanal dan membentuk URL unduhan untuk setiap platform (`win-x64`, `osx-arm64`, `osx-x64`, `linux-arm64`, `linux-x64`).
- **Sumber Homebrew:** di macOS dan Linux, .NET juga dapat dipasang dari formula Homebrew `dotnet` untuk SDK yang dikelola manajer paket tersebut.
- **Deteksi versi akurat:** FlyEnv membaca setiap pemasangan dengan `dotnet --version`, dan jika perlu mengurai `dotnet --info`, sehingga versi yang ditampilkan selalu sesuai dengan SDK di disk.
- **Penanganan karantina macOS:** setelah pemasangan statis di macOS, FlyEnv menghapus atribut karantina agar SDK berjalan tanpa peringatan Gatekeeper.

![Manajer Versi .NET dengan daftar kanal Microsoft](https://oss.macphpstudy.com/image/features/dotnet-2.webp)

## Pengalihan versi baris perintah

Tab **Layanan** adalah tabel versi terpasang untuk .NET. Meski namanya demikian, tab ini mengelola versi, entri PATH, dan alias, bukan proses latar belakang yang berjalan.

- **Pengalihan PATH:** tentukan SDK .NET yang akan digunakan perintah `dotnet` di terminal. FlyEnv menambah atau menghapus direktori versi dari `PATH` Anda dan menandai apakah entri saat ini dibuat oleh FlyEnv atau alat lain; [panduan lingkungan PATH sistem](/id/guide/setup-system-path-environment) menjelaskan mekanismenya.
- **Alias dan catatan per versi:** beri setiap pemasangan alias singkat dan catatan agar SDK serupa tetap mudah dibedakan dalam daftar.
- **Versi kustom:** arahkan FlyEnv ke direktori mana pun yang berisi build SDK .NET Anda sendiri agar ditampilkan di samping versi terkelola.

## Runtime .NET tingkat proyek

Di **.NET → Proyek**, daftarkan folder setiap proyek dan kaitkan ke SDK .NET-nya sendiri, atau biarkan menggunakan versi sistem. Lihat [panduan runtime tingkat proyek](/id/guide/project-level-runtime-environment) dan fitur [Runtime per Proyek](/id/features/per-project-runtimes) untuk alur lengkapnya.

- **Runtime per proyek:** pilihan versi disimpan dalam berkas `.flyenv` di direktori proyek, sehingga terminal dan editor yang diluncurkan dari FlyEnv otomatis memakai SDK yang benar.
- **Jalankan sebagai layanan:** tandai proyek sebagai layanan dengan perintah mulai atau berkas jalan kustom, port TCP, variabel lingkungan, dan opsi sudo; sakelar bilah sisi memulai atau menghentikan seluruh proyek .NET yang diaktifkan sebagai layanan sekaligus.
- **Buka di VS Code:** lompat langsung dari baris proyek ke VS Code dengan lingkungan proyek dimuat.

![Daftar Proyek .NET dengan pengaitan SDK per proyek](https://oss.macphpstudy.com/image/features/dotnet-3.webp)

<FeatureRelatedLinks locale="id" slug="dotnet" />

## Catatan kompatibilitas

Sumber pemasangan bergantung pada platform: build Statis tersedia di semua sistem operasi, sedangkan Homebrew tersedia di macOS dan Linux; Windows hanya memakai sumber Statis (zip). FlyEnv mengelola runtime lokal dan konfigurasi PATH; cocokkan kebutuhan SDK proyek dengan build yang terpasang, lalu gunakan [halaman Unduhan](/id/download) dan catatan rilis terbaru sebagai rujukan paket yang didukung.
