---
layout: doc
titleTemplate: false
title: 'Plugin NTP Server untuk Simulasi Waktu Lokal | FlyEnv'
description: 'Jalankan server NTP lokal di FlyEnv. Sajikan waktu tersinkronisasi, waktu yang terus berjalan dengan selisih tetap, atau waktu yang dibekukan untuk pengujian.'
---

# NTP Server di FlyEnv

Gunakan plugin NTP Server saat aplikasi atau perangkat yang diuji mengambil waktu lewat NTP. Majukan jam uji tujuh hari untuk memeriksa bagaimana perangkat menangani masa berlaku yang habis, atau bekukan waktu pada satu titik untuk mereproduksi galat yang bergantung pada tanggal. Waktu simulasi dikirim melalui respons NTP, sementara komputer yang menjalankan FlyEnv tetap memakai waktu sistemnya seperti biasa.

## Instal plugin dan jalankan layanan

1. Instal **NTP Server** dari **[Pengaturan → Pasar Plugin](/id/features/plugin-market)**, lalu buka modulnya di bilah samping FlyEnv.
2. Buka **Versi** dan instal salah satu rilis server. FlyEnv menyediakan paket x64 dan ARM64 yang sesuai untuk Windows, macOS, dan Linux, serta memverifikasi setiap unduhan dengan checksum SHA-256.
3. Buka **Konfigurasi** untuk mengatur mode jam, alamat, dan port penerima. Simpan perubahan, lalu pilih versi yang sudah terinstal dan jalankan dari **Layanan**. Jika konfigurasi disimpan saat layanan berjalan, FlyEnv akan memulai ulang layanan untuk menerapkan pengaturan.

![NTP Server berstatus terinstal di tab resmi Pasar Plugin FlyEnv](https://oss.macphpstudy.com/image/features/plugin/ntp-server-plugin-market.webp)

Gunakan **Layanan** untuk memeriksa status server, menghentikannya, atau memulai ulang. Pembaruan plugin dikelola di Pasar Plugin.

## Pilih waktu yang dikirim ke klien

Di **Konfigurasi**, alihkan ke **Pengaturan Umum** dan pilih mode jam (**Clock mode**). Tampilan **File Mentah (RAW)** memungkinkan Anda mengedit konfigurasi JSON yang sama secara langsung.

- **Real time** menyajikan waktu saat ini. Sinkronisasi dengan sumber waktu hulu (**Upstream synchronization**) aktif secara bawaan. Untuk mengubah sumbernya, isi **Upstream servers** dengan nama host atau entri `host:port` yang dipisahkan koma. Jika sinkronisasi belum tercapai, server dapat melaporkan bahwa jamnya belum tersinkronisasi dan beberapa klien akan mengabaikan respons itu.
- **Offset** menyajikan jam yang terus berjalan dengan selisih tetap terhadap jam komputer host. Masukkan jumlah detik dalam bilangan bulat positif atau negatif, atau pilih preset **+7 days**, **−2 hours**, atau **+365 days**.
- **Frozen** mengirim waktu yang sama pada setiap permintaan. Pilih tanggal dan jam sesuai zona waktu lokal Anda. FlyEnv menyimpan waktu tersebut dalam UTC.

![Pengaturan Umum NTP Server menampilkan mode Offset, preset waktu, alamat penerima, dan port UDP](https://oss.macphpstudy.com/image/features/plugin/ntp-server-configuration.webp)

**Reset to real time** mengembalikan mode jam di editor ke waktu saat ini. Simpan konfigurasi untuk menerapkannya. Beberapa klien NTP sistem menolak loncatan waktu yang besar atau stempel waktu berulang. Gunakan klien uji yang dapat menampilkan stempel waktu dalam respons NTP untuk memeriksa kedua mode simulasi.

## Hubungkan klien lokal atau klien di LAN

Secara bawaan, server menerima permintaan di `0.0.0.0` melalui port UDP `12300`. Saat server berjalan, klik ikon jaringan hijau di **Layanan** untuk membuka **How to use NTP Server** dan melihat alamat serta port yang dikonfigurasi.

![Tab Layanan NTP Server menampilkan versi yang sedang berjalan dan tombol hijau untuk melihat detail koneksi](https://oss.macphpstudy.com/image/features/plugin/ntp-server-service.webp)

- **Di komputer yang menjalankan FlyEnv**, gunakan `127.0.0.1` dengan port UDP `12300` pada konfigurasi bawaan. Atur **Listen IP restriction** ke `127.0.0.1` jika server hanya boleh menerima permintaan lokal.
- **Dari perangkat lain di LAN**, gunakan IP LAN komputer FlyEnv sebagai alamat penerima atau pertahankan pengaturan bawaan yang menerima permintaan di semua antarmuka IPv4. Masukkan IP LAN komputer FlyEnv dan port UDP yang dikonfigurasi di pengaturan klien.
- **Jika klien memerlukan port NTP standar**, atur **UDP port** ke `123` dan pastikan port tersebut tersedia di antarmuka yang dipilih.

## Periksa permintaan dan galat saat server dijalankan

Di **Konfigurasi**, gunakan **Log client requests** untuk mengatur apakah server mencatat permintaan klien dan waktu yang dikirim dalam respons. Buka **Log → Service log** untuk memeriksa apakah klien uji berhasil menghubungi server dan melihat stempel waktu yang dikembalikan. Jika layanan gagal dijalankan, buka **Log → Startup errors** untuk melihat penyebabnya, misalnya port yang sudah dipakai.

![Log layanan NTP Server menampilkan informasi saat server dimulai, mode jam, dan alamat penerima UDP](https://oss.macphpstudy.com/image/features/plugin/ntp-server-log.webp)

FlyEnv menyimpan `config.json`, `ntp.log`, dan `ntp-start-error.log` di `server/ntp-server` dalam direktori datanya. Konfigurasi tetap tersimpan jika program server diinstal ulang.

Lihat [dokumentasi proyek NTP Server](https://github.com/xpf0000/ntp-server#local-test-clock-and-flyenv-configuration) untuk mengetahui pengaturan jam dalam konfigurasi JSON server.
