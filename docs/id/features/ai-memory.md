---
layout: doc
titleTemplate: false
title: 'Plugin AI Memory: Memori Lokal Persisten untuk Agen Pemrograman | FlyEnv'
description: 'Berikan memori lokal persisten kepada agen pemrograman AI melalui MCP. Kelola pengetahuan global dan proyek, jelajahi peta memori 3D, hubungkan klien, dan cadangkan data Anda.'
---

# AI Memory di FlyEnv

AI Memory menyediakan tempat bersama bagi agen pemrograman AI untuk menyimpan preferensi, pengetahuan proyek, dan keputusan pengembangan lintas sesi. Simpan konvensi penulisan kode agar tersedia dalam percakapan berikutnya, pertahankan alasan di balik pilihan arsitektur, atau izinkan klien lain yang terhubung mengambil informasi yang disimpan agen sebelumnya.

Memori disimpan secara lokal di direktori data plugin FlyEnv, dengan preferensi global dan pengetahuan proyek dalam cakupan terpisah. Plugin ini menyediakan peta memori 3D, pencarian dan pengeditan, pengaturan koneksi klien, pencadangan dan pemulihan, serta catatan aktivitas alat memori.

Instal **AI Memory** dari **[Pengaturan → Pasar Plugin](/id/features/plugin-market)**, lalu buka entri plugin di bilah samping. Tidak ada runtime terpisah yang perlu diunduh atau versi layanan yang perlu dijalankan. Agen mengakses memori yang tersimpan melalui **[Server MCP](/id/features/mcp-server)** FlyEnv.

![AI Memory di FlyEnv yang menampilkan peta memori 3D interaktif suatu proyek dan kategori memori](https://oss.macphpstudy.com/image/features/plugin/ai-memory-map.webp)

## Pisahkan preferensi global dari pengetahuan proyek

Gunakan **Global** untuk informasi yang berlaku lintas proyek, seperti bahasa atau gaya penulisan kode pilihan Anda. Pilih proyek untuk menyimpan arsitektur, detail penyiapan, keputusan, dan solusi yang dapat digunakan kembali khusus untuk proyek tersebut. Koneksi klien global bekerja lintas proyek; koneksi tersebut tidak menggabungkan koleksi memori setiap proyek.

Memori proyek dikaitkan dengan direktori root proyek yang telah dikonfirmasi. Dua proyek yang tidak berkaitan dengan nama folder yang sama tetap terpisah. Pada tampilan pengelolaan, pilih proyek yang sudah ada atau pilih folder proyek untuk mengelola koleksinya.

Plugin menyimpan konten dan metadata memori di luar repositori kode sumber Anda. Anda dapat menggunakan instruksi proyek untuk mengarahkan perilaku agen tanpa menambahkan memori yang tersimpan ke basis kode.

![Pemilih cakupan AI Memory dengan Global, proyek tersimpan, dan opsi jalur proyek](https://oss.macphpstudy.com/image/features/plugin/ai-memory-project-selection.webp)

## Jelajahi peta memori 3D

Tab **Memori** menampilkan koleksi yang dipilih sebagai peta 3D interaktif. Memori dikelompokkan berdasarkan jenis: preferensi, fakta, peristiwa, prosedur, status proyek, keputusan, pengamatan, dan catatan. Garis penghubung menunjukkan topik atau tag yang sama untuk membantu Anda menjelajahi pengetahuan terkait.

Seret untuk memutar, perbesar atau perkecil, jeda orbit, atau kurangi gerakan. Pilih kategori untuk menelusuri catatannya, lalu pilih memori untuk membuka detailnya di samping peta. Tampilan daftar menyediakan cara lain untuk menemukan dan membuka catatan.

Cari dengan kata kunci untuk mempersempit koleksi. Pencarian agen mencocokkan judul, ringkasan, topik, dan tag; membaca konten Markdown lengkap merupakan operasi terpisah. Berikan judul dan ringkasan yang berguna pada setiap memori agar mudah ditemukan kembali.

![Kategori preferensi AI Memory dengan daftar catatan, hubungan antarmemori terkait, dan detail memori yang dipilih](https://oss.macphpstudy.com/image/features/plugin/ai-memory-detail.webp)

## Buat, edit, dan pelihara memori

Gunakan **Memori baru** untuk menambahkan catatan sendiri, atau izinkan agen yang terhubung menyimpannya melalui MCP. Memori mencakup jenis, judul, ringkasan, topik, tag, konten Markdown, dan informasi sumber.

Buka catatan untuk membaca kontennya, memeriksa sumber dan revisinya, atau mengeditnya. Pembaruan mempertahankan riwayat revisi dan alasan perubahan. **Arsipkan** mengeluarkan memori dari hasil aktif biasa sambil tetap menyimpannya agar dapat dipulihkan nanti. **Hapus permanen** menghapus catatan dan riwayatnya setelah dikonfirmasi.

Setiap isi memori mendukung teks UTF-8 hingga 16 KiB. Fokuskan catatan pada satu fakta, keputusan, atau prosedur yang berguna agar agen dapat mengambil pengetahuan yang relevan tanpa memuat seluruh percakapan.

![Dialog Memori baru AI Memory dengan kolom judul, ringkasan, konten Markdown, jenis, topik, tag, dan sumber](https://oss.macphpstudy.com/image/features/plugin/ai-memory-new-memory.webp)

## Hubungkan agen pemrograman Anda

Buka **Hubungkan agen** dan pilih klien yang sudah terpasang. Penyiapan satu klik tersedia untuk **[Claude Code](/id/features/claude-code)**, **[Antigravity CLI](/id/features/antigravity-cli)**, **[Codex](/id/features/codex)**, **[GitHub Copilot CLI](/id/features/github-copilot-cli)**, **[OpenCode](/id/features/opencode)**, dan **[Kimi](/id/features/kimi)**.

Penyiapan satu klik akan menjalankan server MCP lokal bila perlu, mengaktifkan lima alat memori, mendaftarkan koneksi MCP global untuk klien yang dipilih, dan memasang instruksi memori global. Tinjau hasil setiap langkah dan coba ulang langkah yang belum selesai. Pengaturan lanjutan juga dapat memasang instruksi khusus proyek.

![Halaman Hubungkan agen AI Memory dengan enam klien yang didukung, pengaturan umum, dan tiga langkah penyiapan otomatis untuk Codex](https://oss.macphpstudy.com/image/features/plugin/ai-memory-connect-agent.webp)

Untuk klien MCP lainnya, pilih **Pengaturan umum**. Salin konfigurasi HTTP atau gunakan opsi stdio jika klien Anda memerlukannya. Tambahkan instruksi memori ke berkas instruksi atau prompt sistem yang didukung klien. Koneksi stdio memerlukan Node.js lokal dan jembatan FlyEnv.

Setelah penyiapan, buka sesi baru dari direktori root absolut proyek yang telah dikonfirmasi. Minta klien pertama menyimpan contoh fakta proyek, misalnya “Perintah smoke test adalah `npm test`,” lalu menyebutkan ID dan revisi yang diterima. Pada sesi baru di klien kedua yang sudah terhubung, gunakan root proyek yang sama dan minta klien mencari “smoke test” serta mengambil catatannya. Cocokkan ID dan revisinya dan periksa kedua operasi di **Catatan Panggilan**.

Uji penerimaan pratinjau pengembang FlyEnv memverifikasi pertukaran dua arah antara Codex dan Kimi, serta membaca kembali catatan setelah FlyEnv dimulai ulang. Penyiapan klien menulis pengaturan koneksi dan instruksi. Penyimpanan dan pengambilan pengetahuan bergantung pada instruksi agen dan pemanggilan alat yang benar-benar terjadi.

## Lima alat MCP untuk memori persisten

AI Memory menambahkan lima alat ke server MCP FlyEnv:

- **`flyenv_memory_search`:** menemukan ringkasan memori yang cocok dalam cakupan global atau proyek.
- **`flyenv_memory_get`:** membaca memori lengkap, termasuk revisi yang dipilih.
- **`flyenv_memory_store`:** menyimpan memori baru beserta sumbernya.
- **`flyenv_memory_update`:** merevisi catatan yang sudah ada dengan alasan dan revisi yang diharapkan.
- **`flyenv_memory_forget`:** menghapus catatan dan riwayatnya secara permanen.

Pencarian proyek dapat memakai `include_global=true` untuk menyertakan memori global. Baca setiap hasil sesuai cakupan yang dikembalikan. Jika pembaruan mengalami konflik, baca revisi terakhir sebelum menentukan perubahan. Jika penulisan kehabisan waktu atau mengembalikan `unknown`, ulangi permintaan yang sama dengan `request_id` dan parameter yang sama untuk memastikan hasilnya.

Kelola ketersediaan alat dan kebijakan persetujuan di pengaturan MCP FlyEnv. Biarkan FlyEnv tetap berjalan dengan plugin aktif dan server MCP tersedia saat agen menggunakan alat tersebut. Klien terhubung yang berbeda dapat mengakses koleksi tersimpan yang sama jika menggunakan cakupan dan direktori root proyek yang sama.

![Tab Alat MCP FlyEnv yang menampilkan grup AI Memory, lima sakelar alat memori, dan kebijakan persetujuan](https://oss.macphpstudy.com/image/features/plugin/ai-memory-mcp-tools.webp)

## Cadangkan, pulihkan, dan hubungkan ulang proyek yang dipindahkan

Buka **Pemeliharaan → Cadangkan sekarang** untuk membuat folder cadangan lengkap dengan pemeriksaan integritas. Untuk memindahkan memori ke komputer lain, salin seluruh folder cadangan dan pilih **Pulihkan dari cadangan** pada instalasi AI Memory yang kompatibel.

Pemulihan mengganti koleksi memori saat ini dan terlebih dahulu menyimpan cadangan data yang sudah ada. Cadangan memori mencakup catatan global dan proyek; berkas kode sumber proyek serta konfigurasi klien AI Anda terpisah.

Jika proyek telah dipindahkan, gunakan **Direktori proyek** di Pemeliharaan untuk memilih folder barunya. Pengaitan ulang mempertahankan identitas proyek, memori, dan riwayat revisi sambil memperbarui jalur yang tersimpan. Proyek yang tersedia juga dapat dipindahkan melalui **Tampilkan semua proyek → Ganti folder**.

Jika folder yang dipilih sudah memiliki memori proyek, FlyEnv akan menanyakan apakah kedua koleksi tersebut berasal dari proyek yang sama. Anda dapat menggabungkannya sambil mempertahankan setiap catatan dan revisi, atau tetap memisahkannya dan memilih direktori lain. Penggabungan tidak menimpa atau menghapus duplikat memori secara otomatis.

![Halaman Pemeliharaan AI Memory dengan pencadangan, pemulihan, pemeriksaan tautan proyek, direktori proyek, dan folder data](https://oss.macphpstudy.com/image/features/plugin/ai-memory-maintenance.webp)

## Tinjau aktivitas agen

Tab **Catatan Panggilan** menampilkan aktivitas dan hasil alat memori untuk sesi FlyEnv saat ini. Perbarui daftar setelah menggunakan agen, lalu perluas catatan untuk memeriksa detail permintaan dan respons.

Tampilan ini menyimpan hingga 200 entri terperinci dalam memori dan tidak menyertakan isi memori lengkap. Catatan panggilan dihapus saat FlyEnv ditutup; memori yang disimpan tetap berada di disk. Penyimpanan lokal menjelaskan lokasi plugin menyimpan data: konten yang diambil melalui MCP tetap diteruskan ke klien AI pilihan Anda. Klien Anda dapat mengirim isi yang diambil ke penyedia modelnya. Gunakan catatan contoh yang tidak sensitif untuk memeriksa koneksi.

![Tab Catatan Panggilan AI Memory yang menampilkan aktivitas alat dalam sesi, hasil, durasi, dan tombol perbarui](https://oss.macphpstudy.com/image/features/plugin/ai-memory-call-records.webp)

Gunakan **[Server MCP](/id/features/mcp-server)** untuk alat lingkungan FlyEnv yang lebih luas, atau kembali ke **[ikhtisar fitur](/id/features#plugins)** untuk menjelajahi plugin lain.
