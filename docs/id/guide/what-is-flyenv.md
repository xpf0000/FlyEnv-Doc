---
title: 'Apa Itu FlyEnv? Lingkungan Pengembangan Lokal Native Terpadu'
head:
  - - meta
    - name: description
      content: 'Pelajari cara FlyEnv menyatukan runtime bahasa, server web, basis data, lingkungan proyek, plugin, dan alat pengembangan AI dalam satu ruang kerja native untuk Windows, macOS, dan Linux.'
---

# Apa Itu FlyEnv?

FlyEnv adalah **lingkungan pengembangan lokal native** yang terpadu dan bersifat open source untuk Windows, macOS, dan Linux.

FlyEnv menyatukan runtime bahasa, server web, basis data, layanan lokal, alat pengembangan, serta fitur pengembangan AI dalam satu ruang kerja desktop yang dapat diperluas.

Dari satu tempat, Anda dapat memilih perangkat lunak yang dibutuhkan proyek, mengonfigurasi lingkungannya, dan mengatur dependensinya dalam Grup Startup yang bisa digunakan kembali. Untuk pengembangan lokal sehari-hari, FlyEnv menjalankan layanan langsung di komputer Anda tanpa memerlukan kontainer.

**Beragam alat dalam satu ruang kerja.**

[Unduh FlyEnv](/id/download) · [Panduan Mulai Cepat](/id/guide/getting-started) · [Tonton Demo](/id/demos)

<div id="mengapa-developer-menggunakannya"></div>

## Mengapa FlyEnv Dibuat

Lingkungan pengembangan modern mencakup runtime, layanan, dan alat yang perlu bekerja bersama.

Sebuah aplikasi web bisa menggunakan PHP untuk backend, Node.js untuk frontend, MySQL untuk penyimpanan, Redis untuk cache, Mailpit untuk pengujian email, dan Nginx untuk menyajikan aplikasi. Proyek lain di komputer yang sama mungkin memerlukan versi runtime dan layanan yang sama sekali berbeda.

Setiap alat punya kegunaannya sendiri. Tantangannya adalah mengelola semua alat tersebut secara bersamaan, mulai dari memasang versi, mengedit berkas konfigurasi, mencatat port, berpindah antarproyek, menyiapkan HTTPS lokal, hingga mengingat layanan mana saja yang perlu berjalan.

FlyEnv menyatukan tugas-tugas harian tersebut dalam satu lapisan pengelolaan. Anda tetap menggunakan bahasa pemrograman, basis data, dan server web yang sama, dengan FlyEnv untuk membantu semuanya bekerja bersama sebagai satu lingkungan pengembangan.

<div id="dukungan-platform"></div>

## Cara Kerja FlyEnv

Ruang kerja FlyEnv menghubungkan proyek Anda dengan perangkat lunak yang berjalan di komputer.

```text
Proyek Anda
  Laravel · WordPress · Node.js · Python · Java · AI
                         │
                 Ruang kerja FlyEnv
                         │
  ┌────────────────────────────────────────────────┐
  │ Lingkungan proyek                              │
  │ Versi runtime · Situs lokal · HTTPS            │
  ├────────────────────────────────────────────────┤
  │ Grup Startup                                   │
  │ Atur dan jalankan dependensi proyek            │
  ├────────────────────────────────────────────────┤
  │ Pengelolaan modul                              │
  │ Pasang · Konfigurasi · Jalankan · Perbarui     │
  ├────────────────────────┬───────────────────────┤
  │ Pasar Plugin           │ Alat AI & MCP         │
  │ Perluas ruang kerja    │ Hubungkan agen AI     │
  └────────────────────────┴───────────────────────┘
                         │
          Windows · macOS · Linux
```

*Gambaran konseptual ruang kerja FlyEnv yang menunjukkan bagaimana bagian-bagiannya saling terhubung.*

Empat prinsip berikut mendasari cara kerja FlyEnv.

### Jalankan layanan secara native

FlyEnv mengelola runtime native dan layanan lokal. Anda dapat mengakses langsung berkas konfigurasi, log, dan port jaringan dengan alat yang biasa Anda gunakan di sistem operasi. Alur kerja ini berjalan tanpa lapisan kontainer.

### Pasang sesuai kebutuhan

Anda bisa mulai dengan lingkungan PHP atau Node.js yang sederhana. Tambahkan basis data, cache, server web, dan alat lain saat proyek membutuhkannya.

### Gunakan runtime yang sesuai untuk setiap proyek

Proyek yang berbeda bisa memerlukan versi bahasa yang berbeda. Untuk bahasa yang didukung, FlyEnv memungkinkan Anda memasang beberapa versi dan memilih runtime per proyek, sehingga tidak perlu sering mengubah lingkungan global.

Lihat [Runtime per Proyek](/id/features/per-project-runtimes) dan [panduan runtime per proyek](/id/guide/project-level-runtime-environment).

Pengaturan per proyek ini berlaku untuk versi runtime. Keamanan dan isolasi sistem berkas pada tingkat kontainer berada di luar cakupannya.

### Jalankan dependensi proyek bersama-sama

Selain runtime, lingkungan sebuah proyek mungkin memerlukan server web, basis data, cache, dan layanan latar belakang lainnya.

Dengan [Grup Startup](/id/features/startup-groups), Anda dapat menata layanan yang dikelola ke dalam grup yang bisa digunakan kembali, lalu menjalankan atau menghentikan semuanya sekaligus. Cukup siapkan satu grup untuk proyek agar Anda bisa menjalankan rangkaian layanan yang sama setiap hari dalam satu langkah.

<div id="apa-yang-sebenarnya-dilakukan-flyenv"></div>

## Ruang Kerja yang Berkembang Sesuai Kebutuhan {#what-flyenv-actually-does}

FlyEnv mendukung stack web lokal yang sederhana hingga alur pengembangan yang lebih luas. Ruang kerja Anda berkembang sesuai dengan alat yang Anda pilih untuk dipasang dan digunakan.

| Kategori | Contoh |
| --- | --- |
| Runtime bahasa | PHP, Node.js, Python, Java, Go, Rust |
| Server web dan situs | Nginx, Apache, Caddy, FrankenPHP, domain lokal dan HTTPS |
| Basis data dan layanan lokal | MySQL, PostgreSQL, MariaDB, Redis, RabbitMQ, Mailpit |
| Alur kerja proyek | Runtime per proyek, Grup Startup, modul kustom |
| Pengembangan AI | CLI coding AI, Server MCP, Ollama, CLIProxyAPI, plugin AI Memory |
| Plugin opsional | Kafka, OpenSearch, MySQL Cluster, llama.cpp, Command Shortcuts |

Tabel ini memuat beberapa contoh. Versi perangkat lunak, ketersediaan di tiap platform, dan persyaratan lisensi berbeda menurut modul. Lihat [ringkasan fitur](/id/features) untuk daftar terkini.

### Perluas ruang kerja dengan plugin

Pemasangan sesuai kebutuhan dan [Pasar Plugin](/id/features/plugin-market) memberi Anda dua cara untuk menyesuaikan ruang kerja.

- Pemasangan sesuai kebutuhan memungkinkan Anda memilih runtime dan layanan yang akan dipasang.
- Pasar Plugin memungkinkan Anda menambahkan integrasi opsional ke FlyEnv, termasuk panel pengelolaan khusus dan alat untuk tugas tertentu.

Anda bisa mulai dengan PHP, Nginx, dan MySQL. Nantinya Anda dapat menambahkan Node.js dan Redis untuk aplikasi baru, atau memasang Kafka, OpenSearch, atau AI Memory sesuai kebutuhan pekerjaan.

Anda dapat mengelola plugin dari katalog resmi maupun dari sumber pihak ketiga yang tepercaya. Pemasangan dan pembaruan plugin memerlukan lisensi FlyEnv yang aktif. Periksa halaman setiap plugin untuk mengetahui persyaratan dan dukungan platform.

**Banyak kemampuan, ruang kerja tetap ringkas.**

Ruang kerja sehari-hari bisa tetap sederhana dan dapat diperluas kapan pun diperlukan.

<div id="kekuatan-sebenarnya-saat-semuanya-bekerja-bersama"></div>

## Contoh Alur Kerja Pengembangan {#the-real-power-when-everything-works-together}

Sebuah aplikasi Laravel dengan frontend Vue bisa menggunakan lingkungan lokal seperti berikut.

| Komponen | Peran dalam proyek |
| --- | --- |
| PHP 8.4 | Runtime backend |
| Node.js | Alat pengembangan dan build frontend |
| Nginx dan PHP-FPM | Menyajikan aplikasi PHP |
| MySQL | Basis data aplikasi |
| Redis | Cache dan antrean |
| Mailpit | Pengujian email lokal |
| `https://myapp.test` | URL lokal aplikasi dengan HTTPS |

Konfigurasi ini merupakan contoh. Pilih versi dan layanan yang sesuai dengan proyek Anda.

Berikut langkah-langkahnya di FlyEnv.

1. Pasang versi perangkat lunak yang diperlukan.
2. Konfigurasikan lingkungan PHP dan Node.js untuk proyek.
3. Siapkan basis data dan perbarui konfigurasi lingkungan aplikasi.
4. Buat situs lokal dengan domain kustom dan HTTPS.
5. Masukkan layanan yang dikelola ke dalam satu Grup Startup.
6. Jalankan perintah penyiapan dan pengembangan aplikasi sesuai kebutuhan proyek.

Setelah dikonfigurasi, grup layanan ini bisa digunakan setiap kali Anda kembali mengerjakan proyek. Dari ruang kerja yang sama, Anda dapat mengakses situs lokal, mengelola dependensi, dan memeriksa log layanan.

FlyEnv mempermudah penyiapan, pengelolaan, dan penggunaan kembali lingkungan pengembangan. Jalankan perintah penyiapan yang diperlukan oleh framework Anda seperti biasa.

Baca panduan [Menjalankan Laravel dengan FlyEnv](/id/guide/run-laravel-use-flyenv), pelajari [Situs Lokal dan HTTPS](/id/features/local-sites-https), atau jelajahi [solusi untuk proyek lain](/id/solutions).

<div id="lihat-fitur-inti-flyenv-dalam-13-menit"></div>

### Lihat Fitur Inti FlyEnv dalam 13 Menit {#watch-flyenv-s-core-features-in-13-minutes}

Video ini memperlihatkan cara memasang modul, mengelola versi, mengendalikan layanan, memakai Grup Startup, menyiapkan situs lokal, dan menggunakan alat pengembangan di FlyEnv.

<div style="position: relative; width: 100%; aspect-ratio: 16 / 9; overflow: hidden; border-radius: 8px; background: #111827;">
  <iframe src="https://www.youtube.com/embed/TA2NA0JeGdo" title="Ringkasan Fitur FlyEnv - Pengembangan Lokal Native Tanpa Docker" style="position: absolute; inset: 0; width: 100%; height: 100%; border: 0;" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

[Tonton di YouTube](https://www.youtube.com/watch?v=TA2NA0JeGdo) · [Jelajahi demo singkat lainnya](/id/demos)

<div id="mengapa-ai-mengubah-definisi-lingkungan-lokal"></div>

## Dirancang untuk Era AI {#why-ai-changes-the-definition-of-a-local-environment}

Selain akses ke kode sumber, agen coding AI mungkin perlu mengetahui runtime yang aktif, basis data, URL lokal, status layanan, konfigurasi, dan log agar bisa bekerja dengan efektif pada sebuah proyek.

FlyEnv mendukung alur kerja AI di ruang kerja pengembangan lokal yang sama. Anda tetap bisa menggunakannya untuk pengembangan sehari-hari tanpa fitur AI.

### Pengelolaan CLI coding AI

FlyEnv membantu Anda mengelola klien coding yang didukung, termasuk Claude Code, Codex, OpenCode, dan Kimi, bersama alat pengembangan lainnya.

### Server MCP bawaan

[Server MCP FlyEnv](/id/features/mcp-server) memberi agen yang kompatibel akses terstruktur ke informasi lingkungan yang dikelola dan operasi tertentu. Ketersediaan alat dan pengaturan persetujuan menentukan apa saja yang dapat diperiksa atau diubah oleh agen.

Dengan akses ini, agen dapat membantu menyiapkan lingkungan, memeriksa layanan, dan mencari penyebab masalah pada aplikasi lokal sambil bekerja dengan kode.

### AI Memory bersama

[Plugin AI Memory](/id/features/ai-memory) bersifat opsional dan menyediakan penyimpanan lokal yang bertahan antarsesi bagi agen yang terhubung. Anda dapat menyimpan preferensi pengembangan, keputusan proyek, prosedur penyiapan, dan perbaikan yang bisa dipakai kembali. Memori global dan memori proyek memiliki cakupan tersendiri.

Agen dapat mengambil pengetahuan yang disimpan oleh klien lain yang terhubung jika keduanya menggunakan koleksi memori yang sesuai. Penyimpanan dan pengambilan pengetahuan bergantung pada instruksi klien serta pemanggilan alat.

**AI menulis kode Anda. FlyEnv membantu agen AI menjalankan stack Anda.**

Untuk petunjuk penyiapan, baca [Panduan Ruang Kerja AI dan MCP di FlyEnv](/id/guide/ai-coding-workspace-mcp).

<div id="perbedaan-flyenv-dengan-stack-docker-dan-xampp"></div>

## Perbandingan FlyEnv dengan Alat Lain {#how-flyenv-differs-from-docker-and-xampp-style-stacks}

FlyEnv berfokus pada alur pengembangan native yang dapat diperluas untuk berbagai framework. Anda dapat memilih sendiri perangkat lunak yang akan dijalankan langsung di komputer.

| Model pengembangan | Fokus utama |
| --- | --- |
| Bundel stack tradisional | Menjalankan stack web lokal dengan sekumpulan komponen yang sudah dikenal |
| Lingkungan berbasis kontainer | Lingkungan kontainer yang terisolasi dan dapat direproduksi, serta alur deployment |
| FlyEnv | Mengelola runtime proyek, layanan lokal, situs, dan alat pengembangan dalam satu ruang kerja native |

Jika saat ini Anda menggunakan XAMPP, Laragon, MAMP, Laravel Herd, atau ServBay, FlyEnv menawarkan cara lain untuk menata dan memperluas lingkungan lokal saat kebutuhan proyek berubah.

FlyEnv juga bisa digunakan bersama Docker. Layanan lokal native praktis untuk banyak pekerjaan sehari-hari. Kontainer tetap berguna saat Anda memerlukan isolasi kontainer, image yang dapat direproduksi, atau lingkungan yang setara dengan target deployment.

Jelajahi [halaman perbandingan](/id/compare/) atau baca [FlyEnv vs Docker & XAMPP](/id/guide/flyenv-vs-docker-xampp) untuk penjelasan lebih lengkap.

<div id="dibangun-dan-digerakkan-oleh-komunitas"></div>

## Open Source dan Lisensi Fleksibel {#built-and-driven-by-its-community}

FlyEnv dikembangkan secara terbuka. Permintaan dari komunitas, laporan bug, terjemahan, dan pull request membentuk produk ini sekaligus memperluas alur kerja yang didukung.

Anda dapat melihat [kode sumber di GitHub](https://github.com/xpf0000/FlyEnv), [mengusulkan fitur](https://github.com/xpf0000/FlyEnv/issues), atau [mengirim pull request](https://github.com/xpf0000/FlyEnv/pulls).

Fitur inti pengembangan lokal tersedia gratis. Lisensi berbayar menghapus batasan versi gratis yang berlaku dan membuka fitur berlisensi. FlyEnv menawarkan lisensi dengan pembayaran sekali dan cara memperoleh lisensi melalui kontribusi komunitas atau berbagi konten yang memenuhi syarat.

Lihat [halaman Lisensi](/id/license) untuk ketentuan dan pilihan terkini.

## Pertanyaan Umum {#pertanyaan-umum}

### Apakah FlyEnv hanya untuk developer PHP?

Tidak. PHP adalah salah satu dari banyak runtime yang didukung. FlyEnv juga mendukung pengembangan dengan Node.js, Python, Java, Go, dan bahasa lain, beserta basis data dan layanan lokal.

### Apakah saya perlu Docker untuk menggunakan FlyEnv?

Tidak. Layanan native FlyEnv berjalan tanpa memerlukan Docker. Anda tetap dapat menggunakan Docker bersama FlyEnv untuk proyek yang memerlukan kontainer.

### Apakah saya harus memasang semua alat yang didukung?

Tidak. Pasang alat yang Anda perlukan, lalu tambahkan alat lain ketika dibutuhkan oleh proyek. Plugin opsional memungkinkan Anda memperluas ruang kerja lebih jauh.

### Bisakah proyek yang berbeda menggunakan versi runtime yang berbeda?

Bisa, untuk bahasa dan alur kerja yang didukung. Anda dapat memasang beberapa versi dan menentukan runtime untuk setiap proyek. Lihat [panduan runtime](/id/guide/project-level-runtime-environment) untuk rinciannya.

### Bisakah saya menggunakan FlyEnv tanpa alat coding AI?

Bisa. Klien coding AI, integrasi MCP, dan AI Memory bersifat opsional. Anda dapat menggunakan FlyEnv hanya sebagai lingkungan pengembangan lokal.

### Apakah FlyEnv gratis dan open source?

FlyEnv bersifat open source dan menyediakan fitur inti pengembangan secara gratis. Beberapa alat dan batas penggunaan yang lebih tinggi memerlukan lisensi. Ketentuan terkini tersedia di [halaman Lisensi](/id/license).

<div id="langkah-berikutnya"></div>

<div id="untuk-siapa-flyenv"></div>

## Langkah Berikutnya {#next-steps}

Pilih langkah selanjutnya sesuai dengan tujuan Anda.

| Saya ingin… | Ke mana harus pergi |
| --- | --- |
| Memasang FlyEnv dan menyiapkan lingkungan pertama | [Unduh](/id/download) dan [Panduan Mulai Cepat](/id/guide/getting-started) |
| Memeriksa apakah alat yang saya gunakan didukung | [Fitur](/id/features) |
| Menjalankan aplikasi yang sudah ada | [Solusi](/id/solutions) |
| Melihat cara kerja FlyEnv | [Demo](/id/demos) |
| Beralih dari lingkungan pengembangan lain | [Perbandingan](/id/compare/) |
| Memperluas ruang kerja | [Pasar Plugin](/id/features/plugin-market) |
| Menghubungkan agen coding AI | [Panduan Ruang Kerja AI dan MCP](/id/guide/ai-coding-workspace-mcp) |

Mulai dari satu proyek beserta alat yang dibutuhkannya. Seiring berkembangnya alur pengembangan, Anda dapat memperluas ruang kerja FlyEnv sesuai kebutuhan.
