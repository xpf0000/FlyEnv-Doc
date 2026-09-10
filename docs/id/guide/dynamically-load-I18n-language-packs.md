---
description: 'Buat, validasi, dan muat paket bahasa JSON kustom di FlyEnv, lengkap dengan lokasi file dan langkah pemecahan masalah tiap platform.'
---

# Memuat Paket Bahasa I18n Secara Dinamis

## Gambaran Umum

FlyEnv versi 4.9.1 dan yang lebih baru mendukung pemuatan dinamis paket bahasa I18n lokal. Panduan ini menjelaskan cara membuat dan menggunakan paket bahasa kustom.

## Prasyarat

1. Pastikan FlyEnv sudah diperbarui ke **versi 4.9.1 atau lebih baru**.
2. Anda perlu memiliki kemampuan dasar mengedit berkas JSON.

## Petunjuk Langkah demi Langkah

### 1. Buka Pengaturan Bahasa

- Buka `Settings` -> `Setting`.
- Area pengaturan bahasa memiliki dua tombol:
  - `Load Local Language Pack`: menyegarkan dan memuat paket bahasa.
  - `Open Language Pack Folder`: membuka direktori paket bahasa.

![Antarmuka pengaturan bahasa](https://oss.macphpstudy.com/image/dynamica-i18n-1.png)

### 2. Membuat Paket Bahasa

1. Klik `Open Language Pack Folder`.
2. Lihat struktur contoh paket bahasa.

![Contoh folder paket bahasa](https://oss.macphpstudy.com/image/dynamica-i18n-2.png)

3. Gandakan folder contoh. Sebaiknya gunakan kode bahasa tujuan sebagai nama, misalnya `id` untuk Bahasa Indonesia.

![Contoh folder paket bahasa](https://oss.macphpstudy.com/image/dynamica-i18n-3.png)

4. Ubah berkas `index.json`:

```json
{
  "lang": "id",
  "label": "Bahasa Indonesia"
}
```

### 3. Menerjemahkan Berkas Bahasa

Edit berkas JSON terjemahan, seperti `base.json`:

```json
{
  "add": "Tambah",
  "open": "Buka",
  "enable": "Aktifkan",
  "disable": "Nonaktifkan"
  // Item terjemahan lainnya...
}
```

### 4. Memuat dan Menggunakan Paket Bahasa

1. Kembali ke FlyEnv dan klik `Load Local Language Pack`.
2. Pilih bahasa yang baru ditambahkan dari menu tarik-turun.

![Antarmuka pemilihan bahasa](https://oss.macphpstudy.com/image/dynamica-i18n-4.png)

3. Antarmuka akan langsung beralih ke bahasa yang dipilih.

![Contoh antarmuka bahasa Jepang](https://oss.macphpstudy.com/image/dynamica-i18n-5.png)

### 5. Debugging dan Pembaruan

- Setelah mengubah berkas terjemahan, klik `Load Local Language Pack` lagi untuk menyegarkan.
- Lihat perubahan secara langsung.

## Praktik Terbaik

1. **Cadangan**: selalu cadangkan berkas asli sebelum mengubahnya.
2. **Terjemahan bertahap**: mulai dari istilah yang paling sering dipakai, lalu perluas secara bertahap.
3. **Kontrol versi**: gunakan Git untuk mengelola berkas terjemahan.

## Bagikan Terjemahan Anda

Kami menyambut kontribusi melalui:

- [Repositori GitHub](https://github.com/xpf0000/FlyEnv) (melalui PR)
- [GitHub Issues](https://github.com/xpf0000/FlyEnv/issues)
- [Komunitas Discord](https://discord.gg/u5SuMGxjPE)
- [GitHub Discussions](https://github.com/xpf0000/FlyEnv/discussions)

## Catatan Penting

- Sebaiknya gunakan kode bahasa standar untuk nama folder paket bahasa, misalnya `en`, `id`, atau `zh`.
- Pastikan format JSON tetap benar saat mengedit berkas.
- Ubah nilai saja, jangan mengubah nama key.
