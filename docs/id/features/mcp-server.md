---
layout: doc
titleTemplate: false
title: 'Server MCP FlyEnv'
description: 'Jalankan server MCP bawaan FlyEnv untuk menghubungkan asisten AI ke stack lokal dengan aman.'
head:
  - - meta
    - name: description
      content: 'Jalankan server MCP bawaan FlyEnv untuk menghubungkan asisten AI ke stack lokal dengan aman.'
  - - meta
    - property: og:title
      content: 'Server MCP FlyEnv'
  - - meta
    - property: og:description
      content: 'Jalankan server MCP bawaan FlyEnv untuk menghubungkan asisten AI ke stack lokal dengan aman.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/id/features/mcp-server
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/id/features/mcp-server
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Server MCP FlyEnv

FlyEnv menyertakan server MCP bawaan yang memungkinkan asisten coding AI mengoperasikan stack lokal Anda—mencantumkan dan mengendalikan layanan, memeriksa log dan konfigurasi, serta membaca detail koneksi situs dan basis data—melalui antarmuka yang terkontrol. Server berkomunikasi menggunakan MCP melalui Streamable HTTP pada `127.0.0.1:7682` secara bawaan, diautentikasi dengan token Bearer, dan menyediakan 18 alat dengan kebijakan persetujuan per alat. Setiap panggilan dicatat dalam Log Audit sehingga Anda selalu mengetahui tindakan asisten. [Panduan ruang kerja coding AI](/id/guide/ai-coding-workspace-mcp) menunjukkan penyiapan lengkap pada proyek nyata.

![Ikhtisar modul Server MCP FlyEnv](https://oss.macphpstudy.com/image/features/mcp-server-1.webp)

## Opsi layanan

Server berjalan di dalam aplikasi FlyEnv, jadi tidak ada yang perlu dipasang—tab **Layanan** hanya mengatur cara server mendengarkan dan kapan server dimulai.

- **Host dan port bind:** alamat bawaan adalah `127.0.0.1:7682`; port menerima nilai 1024 hingga 65535. Bind non-loopback ditolak kecuali Anda mengaktifkan akses jarak jauh secara eksplisit, yang terlebih dahulu menampilkan dialog peringatan.
- **Autentikasi token Bearer:** klien harus mengirim token yang dibuat pada setiap permintaan. Buat ulang token dengan satu klik untuk langsung mencabut semua klien yang ada.
- **Mulai otomatis:** server dapat dimulai otomatis setiap kali FlyEnv dibuka, sehingga asisten tidak menunjuk ke endpoint yang mati.
- **Layanan independen:** Server MCP FlyEnv dikecualikan dari grup “mulai semua” global, sehingga memulai seluruh stack tidak menyalakan antarmuka AI tanpa sengaja.
- **Jembatan stdio:** untuk klien yang memilih stdio, FlyEnv menyalin skrip jembatan `flyenv-mcp-stdio.mjs` ke direktori datanya agar siap dijalankan oleh runtime [Node.js](/id/features/nodejs) eksternal.

![Tab Layanan dengan opsi host, port, dan token](https://oss.macphpstudy.com/image/features/mcp-server-1.webp)

## Konfigurasi klien

Tab **Konfigurasi Klien** menghubungkan server ke enam alat CLI AI yang telah dikelola FlyEnv: Claude Code, Antigravity CLI, Codex, GitHub Copilot CLI, OpenCode, dan Kimi.

- **Pendaftaran satu klik:** tombol “Tambahkan ke klien” untuk setiap alat menulis entri server `flyenv` langsung ke konfigurasi MCP CLI tersebut—tanpa mengedit berkas manual, baik klien [Codex](/id/features/codex), [OpenCode](/id/features/opencode), maupun [Kimi](/id/features/kimi).
- **Cuplikan yang dapat disalin:** blok JSON atau TOML siap pakai dalam varian HTTP dan stdio untuk ditempel ke klien yang Anda konfigurasi sendiri atau alat di luar pengelolaan FlyEnv.
- **Berpasangan dengan CLI terkelola:** setiap asisten memiliki modul FlyEnv sendiri; lihat [Claude Code](/id/features/claude-code) sebagai contoh manajemen pemasangan, sesi, dan plugin.

![Tab Konfigurasi Klien dengan pendaftaran satu klik untuk enam CLI](https://oss.macphpstudy.com/image/features/mcp-server-2.webp)

## Alat

Tab **Alat** mencantumkan 18 alat yang disediakan server dan menentukan alat mana yang boleh digunakan asisten.

- **Alat baca**—inventaris dan inspeksi: `list_services`, `service_status`, `list_sites`, `resolve_site_runtime`, `resolve_site_urls`, `get_database_connection_info`, `get_service_exec_info`, `get_managed_file_map`, `list_log_files`, `list_config_files`, dan `list_online_versions`.
- **Alat tindakan**—perubahan pada lingkungan: `start_service`, `stop_service`, `restart_service`, `create_site`, `update_site`, `delete_site`, dan `install_service`.
- **Sakelar per alat:** nonaktifkan alat individual agar tidak tersedia untuk dipanggil klien.
- **Kebijakan persetujuan untuk alat berisiko:** tujuh alat siklus hidup, penulisan situs, dan pemasangan memiliki kebijakan otomatis/konfirmasi. Bawaan adalah konfirmasi, sehingga operasi sensitif menunggu persetujuan Anda kecuali Anda sengaja melonggarkannya.

![Tab Alat dengan sakelar dan kebijakan persetujuan per alat](https://oss.macphpstudy.com/image/features/mcp-server-3.webp)

## Log Audit

Tab **Log Audit** adalah penampil langsung untuk `audit.log` di direktori data MCP FlyEnv—catatan JSON Lines dari setiap panggilan alat yang diproses server.

- **Riwayat panggilan lengkap:** setiap entri merekam alat yang berjalan beserta parameternya, menyediakan jejak yang dapat ditinjau atas semua tindakan asisten AI—konteks penting saat Anda [bekerja dengan asisten AI](/id/guide/flyenv-work-with-ai) sehari-hari.
- **Penyamaran rahasia:** token dan kata sandi disamarkan sebelum masuk log, sehingga meninjau atau membagikan berkas tidak membocorkan kredensial.

![Tab Log Audit yang menampilkan panggilan alat](https://oss.macphpstudy.com/image/features/mcp-server-4.webp)

<FeatureRelatedLinks locale="id" slug="mcp-server" />

## Catatan kompatibilitas

Server MCP FlyEnv berjalan dalam proses utama aplikasi. Artinya, server hanya tersedia selama FlyEnv berjalan; ketika aplikasi ditutup, endpoint untuk semua klien terhubung ikut berhenti. Perilakunya sama di macOS, Windows, dan Linux tanpa perbedaan khusus platform. Jembatan stdio bergantung pada runtime Node.js eksternal untuk menjalankan skrip `flyenv-mcp-stdio.mjs` yang dibuat. Akses jarak jauh tetap nonaktif kecuali Anda mengaktifkannya dengan sengaja—bind ke alamat selain loopback memerlukan pilihan eksplisit dan menampilkan dialog peringatan.
