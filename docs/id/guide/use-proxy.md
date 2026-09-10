---
description: 'Atur variabel proxy HTTP, HTTPS, dan SOCKS di FlyEnv agar unduhan terminal serta installer dapat memakai proxy lokal.'
---

# Menggunakan Proxy

Referensi ini dibuat khusus untuk pengguna yang mengalami masalah jaringan. Jika koneksi jaringan Anda normal, Anda dapat melewati panduan ini.

Sebagian besar VPN tidak otomatis berlaku di terminal atau FlyEnv. Agar VPN dapat digunakan oleh FlyEnv, lakukan salah satu langkah berikut:

1. Beberapa alat VPN, seperti ClashX, memiliki fitur **Copy terminal proxy command**. Gunakan fitur tersebut, salin perintah proxy, lalu tempelkan ke **FlyEnv -> Settings -> Proxy Setting**.

2. Setiap VPN memiliki port proxy. Buka **FlyEnv -> Settings -> Proxy Setting -> Quick Setup**, masukkan alamat `ip:port` seperti `127.0.0.1:7890`, lalu klik **OK**. FlyEnv akan membuat perintah proxy secara otomatis.
