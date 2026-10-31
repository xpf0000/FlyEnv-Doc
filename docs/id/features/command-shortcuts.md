---
layout: doc
titleTemplate: false
title: 'Pintasan Perintah: Simpan dan Jalankan Perintah per Folder | FlyEnv'
description: 'Kelompokkan perintah terminal dalam kartu folder, ubah urutannya dengan menyeret, dan jalankan di direktori yang tepat melalui plugin Pintasan Perintah FlyEnv.'
---

# Pintasan Perintah di FlyEnv

Pintasan Perintah atau **Command Shortcuts** menyimpan perintah terminal yang sering dipakai bersama folder tempat menjalankannya. Setiap folder memiliki kartu yang menampilkan jalur dan daftar perintah tersimpan, sehingga Anda dapat menjalankan tugas proyek tanpa terus mencari direktori dan mengetik perintah yang sama.

Instal **Command Shortcuts** melalui **[Settings → Plugin Market](/id/features/plugin-market)**, lalu buka modulnya di bilah samping. Plugin menggunakan terminal sistem yang sudah tersedia pada macOS, Windows, atau Linux dan tidak memerlukan runtime layanan tambahan.

![Kartu folder Pintasan Perintah dengan perintah tersimpan, tombol eksekusi, dan tindakan folder](https://oss.macphpstudy.com/image/features/plugin/command-shortcuts-folder-cards.png)

## Video demo

Lihat cara menyimpan perintah berdasarkan folder proyek, menjalankannya di terminal sistem, serta mengatur ulang urutan folder dan perintah dengan menyeretnya.

<iframe style="width: 100%; aspect-ratio: 16 / 9;" src="https://www.youtube-nocookie.com/embed/Iz60XAzo7Us?rel=0" title="Menyimpan perintah per proyek dan menjalankannya dengan satu klik" loading="lazy" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Tonton di [YouTube](https://www.youtube.com/watch?v=Iz60XAzo7Us) atau [Bilibili](https://www.bilibili.com/video/BV1QKJR6xEGQ/).

## Menambahkan folder dan perintah

Klik **Add folder**, masukkan nama, lalu pilih atau ketik jalur absolut folder yang sudah ada. Ikon kartu otomatis menggunakan karakter pertama nama folder.

Di dalam kartu folder, klik **Add command**. Isi deskripsi dan teks perintah; perintah beberapa baris juga didukung. Satu kartu dapat menampung beberapa tugas, misalnya menjalankan server pengembangan, membangun proyek, dan menjalankan pengujian.

Gunakan tombol edit untuk mengganti nama atau jalur folder, serta mengubah deskripsi dan isi perintah. Perintah dijalankan pada folder yang saat itu terkait dengan kartunya.

![Dialog Edit command dengan deskripsi, teks perintah, dan petunjuk PowerShell pada Windows](https://oss.macphpstudy.com/image/features/plugin/command-shortcuts-edit-command.png)

## Menjalankan perintah di terminal sistem

Klik **Run in terminal** pada sebuah perintah untuk membuka terminal sistem di direktori folder dan menjalankan perintah tersebut. FlyEnv memverifikasi direktori sebelum menyerahkan tugas. Jika perpindahan direktori gagal, perintah tidak dijalankan.

Gunakan sintaks yang sesuai dengan shell pada platform Anda:

- **macOS:** Terminal dengan shell bawaannya.
- **Windows:** PowerShell.
- **Linux:** Bash di terminal sistem yang tersedia dan didukung.

Lihat keluaran, tanggapi prompt, dan periksa status keluar perintah di jendela terminal. Pemberitahuan FlyEnv mengonfirmasi bahwa permintaan telah dikirim ke terminal; keberhasilan perintah itu sendiri terlihat dari hasil di terminal.

Perintah hanya dijalankan ketika tombol eksekusinya diklik. Terminal yang terbuka tetap berada di bawah kendali Anda; meninggalkan modul atau menutup FlyEnv tidak menghentikannya.

## Membuka folder tanpa menjalankan perintah

Klik jalur folder berwarna kuning untuk membuka direktori di pengelola berkas sistem. Gunakan **Open in terminal** pada bagian bawah kartu untuk membuka terminal di direktori tersebut tanpa menjalankan perintah tersimpan. Tindakan ini juga tersedia pada kartu yang belum berisi perintah.

## Mengatur urutan dan merawat koleksi

Seret pegangan di samping judul folder untuk mengubah urutan kartu. Seret pegangan perintah untuk mengatur urutannya di dalam folder yang sama. Kedua urutan disimpan otomatis; menyeret tidak memindahkan perintah ke folder lain.

Menghapus perintah hanya menghapus entri yang disimpan. Menghapus folder memerlukan konfirmasi dan menghapus kartu beserta perintah di dalamnya, tanpa menghapus berkas di disk. Catatan folder, teks perintah, dan urutannya dipertahankan saat pembaruan plugin. Plugin juga tidak secara aktif menghapus data tersebut ketika dinonaktifkan atau dihapus.

Gunakan **[Grup Startup](/id/features/startup-groups)** untuk menjalankan kelompok layanan ruang kerja, atau **[Modul Pengguna](/id/features/user-modules)** untuk perintah yang memerlukan kontrol siklus hidup layanan. Pintasan Perintah ditujukan untuk tugas yang Anda jalankan dan gunakan secara interaktif di terminal.
