---
layout: doc
titleTemplate: false
title: 'Integrasi Terminal dan Shell | FlyEnv'
description: 'Hubungkan FlyEnv ke terminal Anda: kait shell untuk lingkungan proyek, tindakan buka di terminal, dan terminal tertanam.'
head:
  - - meta
    - name: description
      content: 'Hubungkan FlyEnv ke terminal Anda: kait shell untuk lingkungan proyek, tindakan buka di terminal, dan terminal tertanam.'
  - - meta
    - property: og:title
      content: 'Integrasi Terminal dan Shell | FlyEnv'
  - - meta
    - property: og:description
      content: 'Hubungkan FlyEnv ke terminal Anda: kait shell untuk lingkungan proyek, tindakan buka di terminal, dan terminal tertanam.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/id/features/cli-terminal
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/id/features/cli-terminal
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Integrasi Terminal di FlyEnv

FlyEnv tidak menyediakan aplikasi terminal sendiri; FlyEnv terhubung ke terminal yang sudah Anda pakai. Kait shell memuat lingkungan proyek yang tepat ketika Anda menjalankan `cd` ke proyek, layanan dan proyek dapat diluncurkan di jendela terminal asli sekali klik, pemasangan yang berlangsung lama berjalan di terminal xterm tertanam, dan alat di halaman Tools membuka berkas serta entri PATH di balik variabel lingkungan Anda untuk disunting.

![Daftar proyek FlyEnv dengan versi runtime terikat dan tindakan terminal](https://oss.macphpstudy.com/image/flyenv-version-switch.webp)

## Kait shell dan integrasi PATH

FlyEnv memasang kait shell kecil agar terminal sehari-hari otomatis menggunakan lingkungan proyek. Di macOS dan Linux, `flyenv.sh` dimuat dari `~/.zshrc` atau `~/.bashrc`; di Windows, FlyEnv terintegrasi dengan profil PowerShell klasik maupun `pwsh`.

- **Aktivasi berdasarkan direktori:** kait bereaksi pada perubahan direktori. Saat masuk folder proyek yang dikelola FlyEnv, kait memuat `.flyenv` proyek; direktori di luar daftar sinkronisasi tidak disentuh.
- **Berkas lingkungan `.flyenv`:** setiap proyek terdaftar mendapat `.flyenv` di akarnya yang menambahkan direktori bin runtime terikat ke `PATH`. Setiap baris bertanda ID proyek sehingga FlyEnv dapat menulis ulang berkas secara idempoten saat pengaitan berubah; lihat [Lingkungan Runtime per Proyek](/id/features/per-project-runtimes).
- **Kontrol PATH per versi:** dari tabel versi modul bahasa, pilih versi terpasang yang masuk ke `PATH`; tabel menandai apakah entri dibuat FlyEnv atau alat lain. Lihat [panduan lingkungan PATH sistem](/id/guide/setup-system-path-environment).
- **Penyiapan PATH langkah demi langkah:** [panduan lingkungan PATH sistem](/id/guide/setup-system-path-environment) menjelaskan seluruh alur dengan tangkapan layar.

![Tabel versi dengan sakelar PATH yang menunjukkan entri FlyEnv](https://oss.macphpstudy.com/image/features/cli-terminal-2.webp)

## Buka di Terminal

Proses yang perlu menampilkan keluaran, menerima prompt, atau tetap hidup setelah FlyEnv ditutup dapat dijalankan di jendela terminal asli.

- **Proyek:** aktifkan pilihan jalankan di terminal pada proyek bahasa; perintah atau berkas jalan dibuka di terminal sistem dengan direktori proyek dan lingkungan proyek diterapkan.
- **Peluncuran native platform:** macOS memakai Terminal.app melalui AppleScript, Linux memakai skrip pembantu bawaan, dan Windows meluncurkan jendela PowerShell.
- **Modul kustom dan proses istimewa:** [modul layanan buatan pengguna](/id/features/user-modules) memiliki peluncuran terminal yang sama; item yang memerlukan sudo dapat dibuka di terminal agar prompt kata sandi sistem berjalan normal.

![Buka di Terminal oleh FlyEnv](https://oss.macphpstudy.com/image/features/cli-terminal-3.webp)

## Terminal xterm tertanam

Untuk pekerjaan interaktif sekali jalan, FlyEnv menanamkan sesi terminal berbasis xterm dalam jendelanya agar Anda melihat keluaran perintah asli tanpa meninggalkan aplikasi.

- **Pemasangan sekali klik:** runtime dan alat bootstrap memakai pemasang resminya di terminal tertanam, termasuk rustup, GVM, Podman, dan skrip CLI AI dengan lingkungan proksi FlyEnv.
- **Operasi paket:** membangun pgvector [PostgreSQL](/id/features/postgresql), menarik model [Ollama](/id/features/ollama), memasang [n8n](/id/features/n8n), serta operasi Podman menampilkan keluaran aslinya di tampilan tertanam.
- **Palet perintah:** modul gateway seperti [OpenClaw](/id/features/openclaw) dan [Hermes](/id/features/hermes-agent) menawarkan palet perintah berkategori yang dijalankan di terminal tertanam.
- **Operasi Podman:** sesi exec kontainer serta tindakan image atau kontainer dibuka dalam dialog terminal tertanam khusus.

## Alat variabel lingkungan sistem

Halaman Tools menyediakan alat variabel lingkungan sistem sesuai bentuk tiap platform.

- **Windows—editor PATH:** direktori `PATH` ditampilkan dalam tabel untuk ditambah, disunting, dihapus, dan diurutkan sebelum disimpan; tombol pintas membuka dialog variabel lingkungan bawaan OS.
- **macOS dan Linux—berkas shell:** alat mencantumkan berkas awal seperti `~/.zshrc`, `~/.bashrc`, dan `/etc/paths`, lalu membukanya di editor atau pengelola berkas.
- **Berpasangan dengan kait shell:** berkas dan entri PATH di sini membentuk lapisan lingkungan dasar, sedangkan `.flyenv` dan kait shell menangani lapisan per proyek di atasnya.

![Editor variabel lingkungan sistem di halaman Tools FlyEnv](https://oss.macphpstudy.com/image/features/cli-terminal-4.webp)

<FeatureRelatedLinks locale="id" slug="cli-terminal" />

## Catatan kompatibilitas

Integrasi terminal adalah kumpulan kemampuan di seluruh aplikasi, bukan modul terminal mandiri. Kait shell dipasang untuk zsh dan bash di macOS/Linux serta profil PowerShell di Windows; shell lain tidak dikaitkan. Pemuatan `.flyenv` otomatis hanya berlaku untuk direktori proyek yang terdaftar dan masuk daftar putih FlyEnv. Jendela yang dipakai tindakan buka-di-terminal adalah milik platform—Terminal.app, pembantu terminal Linux, atau PowerShell—sehingga tampilan dan perilakunya mengikuti OS. Sesi xterm tertanam hanya tersedia untuk tugas pemasangan, jalan, dan exec tertentu, bukan shell serbaguna. Gunakan [halaman Unduhan](/id/download) dan perilaku aplikasi di platform Anda sebagai rujukan.
