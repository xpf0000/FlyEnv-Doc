---
layout: doc
titleTemplate: false
title: 'Plugin SamWaf: Firewall Aplikasi Web untuk Situs Lokal | FlyEnv'
description: 'Instal dan jalankan SamWaf di FlyEnv, kelola versi firewall, edit konfigurasi YAML, periksa log, dan buka panel admin web untuk melindungi situs lokal.'
---

# SamWaf di FlyEnv

SamWaf menambahkan firewall aplikasi web ke ruang kerja pengembangan lokal Anda. SamWaf berada di depan situs web sebagai reverse proxy, memeriksa permintaan masuk, dan menerapkan aturan perlindungan yang Anda konfigurasikan. Gunakan bersama server web lokal untuk mencoba perlindungan situs dan memeriksa lalu lintas sebelum menerapkan pendekatan yang sama di lingkungan yang sudah diterapkan.

Plugin FlyEnv menyatukan pengelolaan versi, kontrol layanan, berkas konfigurasi, dan log runtime SamWaf dalam satu modul. Pendaftaran situs, aturan perlindungan, dan analisis permintaan dikelola melalui panel administrasi web SamWaf sendiri.

Instal **SamWaf** dari **[Pengaturan → Pasar Plugin](/id/features/plugin-market)**, lalu buka **SamWaf** di bilah samping. Plugin ini mendukung macOS, Windows, dan Linux; unduhan runtime yang tersedia bergantung pada sistem operasi dan arsitektur komputer Anda.

## Instal runtime dan mulai firewall

Buka **Pengelola Versi** untuk mengunduh rilis SamWaf yang sesuai dengan komputer Anda. FlyEnv menampilkan paket rilis stabil yang sesuai dari proyek upstream, dengan GitHub sebagai sumber utama dan Gitee sebagai cadangan.

Setelah instalasi, kembali ke **Layanan** untuk memilih versi yang terpasang dan menjalankannya. Gunakan tampilan layanan yang sama untuk menghentikan atau memulai ulang firewall dan memeriksa statusnya. Plugin ini juga menyediakan SamWaf melalui kontrol layanan FlyEnv di baki sistem.

Setiap versi yang terpasang memiliki konfigurasi, data, dan log sendiri di dalam direktori instalasinya. Perlakukan semuanya sebagai bagian dari instalasi tersebut saat merencanakan pergantian versi; memasang berkas biner lain tidak otomatis memigrasikan pengaturan situs Anda.

![Tab Layanan SamWaf di FlyEnv dengan versi terpasang, status berjalan, dan kontrol layanan](https://oss.macphpstudy.com/image/features/plugin/samwaf-service.webp)

## Buka panel administrasi web

Setelah SamWaf berjalan, klik ikon panel web di **Layanan**. FlyEnv membaca port administrasi dari konfigurasi versi yang dipilih dan membuka panel di browser Anda. Alamat bawaannya adalah `http://127.0.0.1:26666`.

Pada instalasi baru, SamWaf membuat kata sandi awal acak untuk akun `admin`. FlyEnv menampilkannya saat Anda pertama kali membuka panel. Masuk dan segera ubah kata sandi tersebut. Kredensial awal juga disimpan dalam `data/initial_password.txt` di dalam direktori instalasi versi tersebut.

Konfigurasi awal FlyEnv membatasi akses administrasi ke alamat loopback lokal. Port administrasi terpisah dari port HTTP atau HTTPS yang Anda pilih untuk situs yang dilindungi.

## Tempatkan SamWaf di depan situs lokal

Di panel web SamWaf, tambahkan situs yang ingin Anda lindungi dan arahkan upstream-nya ke alamat aplikasi yang sudah ada. Permintaan masuk harus mencapai listener SamWaf terlebih dahulu; membuat situs di FlyEnv tidak otomatis mengarahkan lalu lintasnya melalui firewall.

Misalnya, hostname lokal yang dilindungi dapat mengirim permintaan ke SamWaf, yang kemudian meneruskan lalu lintas yang diizinkan ke backend yang dilayani oleh **[Nginx](/id/features/nginx)**, **[Apache](/id/features/apache)**, atau **[Caddy](/id/features/caddy)** pada port berbeda. Gunakan alamat atau port terpisah untuk listener firewall dan listener backend agar tidak terjadi konflik dan loop proxy. Modul **[Situs Lokal & HTTPS](/id/features/local-sites-https)** FlyEnv mengelola domain dan pengaturan server web situs backend.

Gunakan panel SamWaf untuk mengelola aturan perlindungan situs dan meninjau permintaan. SamWaf mencakup deteksi injeksi SQL dan XSS, daftar IP yang diizinkan dan diblokir, aturan khusus, serta log perlindungan. Lihat [dokumentasi SamWaf](https://doc.samwaf.com/en/) untuk kontrol situs dan aturannya.

## Edit konfigurasi dan periksa log

Tab **Berkas Konfigurasi** membuka `conf/config.yml` dari versi yang dipilih di editor YAML FlyEnv. Berkas ini mencakup port administrasi (`local_port`), daftar IP yang diizinkan mengakses administrasi, serta pengaturan database, cache, dan pencatatan log. FlyEnv membuat konfigurasi awal bila diperlukan dan mempertahankan berkas yang sudah ada.

Konfigurasi awal menggunakan SQLite dan cache dalam memori, sehingga Anda dapat memulai tanpa layanan database atau cache terpisah. Pengaturan khusus setiap situs tetap dikelola melalui panel SamWaf.

![Editor konfigurasi YAML SamWaf di FlyEnv yang menampilkan pengaturan database, cache, port administrasi, dan keamanan](https://oss.macphpstudy.com/image/features/plugin/samwaf-configuration.webp)

Buka **Log** untuk memeriksa log runtime. Jika log utama belum dibuat, tampilan ini menggunakan keluaran atau galat saat startup sebagai cadangan. Gunakan log ini ketika suatu versi gagal dijalankan atau panel tidak dapat diakses; gunakan panel web SamWaf untuk catatan permintaan situs dan perlindungan.

Kembali ke **[Pasar Plugin](/id/features/plugin-market)** untuk memperbarui integrasi FlyEnv, atau jelajahi **[ikhtisar fitur](/id/features#plugins)** untuk modul tambahan lainnya.
