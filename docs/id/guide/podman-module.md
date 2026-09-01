---
title: 'Manajemen Kontainer Podman di FlyEnv: Alternatif Docker Tanpa Root'
head:
  - - meta
    - name: description
      content: Kelola Podman, image, container, dan proyek Compose dari FlyEnv. Gunakan kontainer saat diperlukan tanpa menjadikan seluruh lingkungan lokal bergantung pada Docker Desktop.
---

# Manajemen Kontainer Podman di FlyEnv: Alternatif Docker Tanpa Root

Podman adalah engine kontainer yang kompatibel dengan banyak alur Docker tetapi dirancang untuk bekerja tanpa daemon pusat dan dapat menjalankan container rootless. FlyEnv menyediakan modul untuk memasang, menjalankan, serta memeriksa Podman di samping runtime lokal native.

## Kapan Menggunakan Podman

Gunakan kontainer untuk stack lama, software yang tidak ingin dipasang ke sistem, reproduksi konfigurasi tertentu, atau kode yang perlu diisolasi. Untuk pekerjaan PHP, Node.js, Python, dan Go sehari-hari, runtime native FlyEnv dapat lebih ringan dan lebih cepat dijalankan.

## Memulai Podman di FlyEnv

1. Buka modul **Podman** pada FlyEnv dan pasang versi yang tersedia.
2. Pada macOS atau Windows, buat dan jalankan VM Podman jika diminta.
3. Periksa status dari FlyEnv atau terminal:

```bash
podman info
podman machine list
```

## Proyek Docker Compose

Podman dapat menjalankan banyak proyek Compose yang ada. Impor direktori berisi `docker-compose.yml` atau file Compose kompatibel ke modul Podman, lalu gunakan kontrol FlyEnv untuk start, stop, restart, dan melihat log.

Contoh stack lama:

```yaml
services:
  app:
    image: php:5.5-apache
    ports:
      - "8080:80"
```

Periksa port yang sudah dipakai sebelum menjalankan proyek tambahan.

## Mengelola Kontainer

Operasi umum melalui terminal tetap tersedia:

```bash
podman ps
podman images
podman pull nginx
podman run -d --name demo-nginx -p 8080:80 nginx
podman logs demo-nginx
podman exec -it demo-nginx sh
```

Tambahkan path log dan konfigurasi proyek ke FlyEnv bila Anda ingin membukanya langsung dari antarmuka.

## Image dan Volume

Tarik hanya image yang dibutuhkan dan hapus image atau container yang sudah tidak dipakai setelah memastikan tidak ada data penting di volume. Cadangkan volume basis data sebelum menghapus proyek kontainer. Hindari me-mount seluruh home directory ke container.

## Contoh Penggunaan

- Menjalankan PHP 5.5 atau dependensi lama tanpa memasangnya secara global.
- Mengisolasi kode atau demo yang tidak tepercaya dalam container sementara.
- Menguji server dan alat sebelum dipasang secara native.
- Menjalankan stack Compose yang sudah digunakan tim.

## Pemecahan Masalah

**VM tidak mulai di macOS/Windows:** periksa virtualisasi sistem, ruang disk, dan status `podman machine`.

**Tidak dapat tersambung ke daemon Docker:** gunakan command Podman atau periksa layer kompatibilitas Docker bila proyek secara eksplisit mengharapkannya.

**Port sudah dipakai:** ubah mapping port atau hentikan proses yang sudah menggunakan port tersebut.

**Izin volume ditolak:** periksa ownership dan gunakan path proyek yang diizinkan untuk dibagikan ke VM/container.

**Lambat di macOS:** batasi mount file besar dan gunakan proyek native FlyEnv bila kontainer tidak diperlukan.

## Podman dan Docker Desktop

Podman menawarkan alur rootless dan tidak memerlukan daemon Docker pusat. Kompatibilitas setiap image, Compose feature, atau integrasi IDE tetap perlu diuji sesuai proyek. Pilih pendekatan yang memenuhi kebutuhan runtime dan kolaborasi tim Anda.

## Ringkasan

Gunakan modul Podman FlyEnv saat kontainer benar-benar memberi nilai, dan pertahankan runtime lokal native untuk alur yang tidak memerlukannya. Dengan begitu, Anda dapat memakai stack lama tanpa membawa overhead kontainer ke setiap proyek.
