---
title: 'Pengujian Email Lokal Tanpa Mailhog: Panduan Mailpit'
head:
  - - meta
    - name: description
      content: 'Ganti Mailhog dengan Mailpit untuk pengujian email lokal. Tangkap, pratinjau, dan uji email selama pengembangan tanpa mengirim pesan nyata atau memakai layanan eksternal.'
---

# Pengujian Email Lokal Tanpa Mailhog: Panduan Mailpit

Menguji fungsi email saat pengembangan bisa merepotkan. Anda tidak ingin mengirim email sungguhan karena risiko spam, API email eksternal lambat, dan proyek Mailhog yang sudah tidak aktif sering tidak berjalan pada Mac baru.

**Mailpit** adalah alat pengujian email modern yang aktif dipelihara, lebih cepat, tampil lebih baik, dan berjalan pada Apple Silicon. Mailpit sudah terintegrasi di FlyEnv.

## Masalah Mailhog

Mailhog dahulu menjadi alat pengujian email lokal yang umum, tetapi memiliki keterbatasan:

- proyek tidak lagi aktif dikembangkan, dengan pembaruan berarti terakhir pada 2021;
- tidak mendukung Apple Silicon secara native dan membutuhkan Rosetta di Mac M1/M2/M3;
- dapat mengalami kebocoran memori;
- antarmuka webnya sudah ketinggalan zaman.

Mailpit adalah pengganti modern dengan konsep yang sama dan implementasi lebih baik.

## Apa itu Mailpit?

Mailpit adalah alat pengujian email dan SMTP yang menyediakan server SMTP palsu. Mailpit:

- menangkap email keluar dari aplikasi Anda;
- menampilkannya di antarmuka web untuk pratinjau;
- mendukung rendering HTML, melihat lampiran, dan akses API;
- berjalan sepenuhnya lokal sehingga tidak ada data yang meninggalkan komputer Anda.

Anggap Mailpit sebagai "lubang hitam" untuk email pengembangan.

## Perbandingan Mailpit dan Mailhog

| Fitur | Mailhog (lama) | **Mailpit** |
| --- | --- | --- |
| Pengembangan aktif | Tidak | Ya |
| Apple Silicon | Emulasi | ARM64 native |
| UI modern | Lama | Bersih dan responsif |
| Pratinjau HTML | Dasar | Lanjutan dengan tampilan seluler |
| Mode gelap | Tidak | Ya |
| API | Terbatas | REST API + WebSocket |
| Persistensi pesan | Hanya memori | SQLite/database |
| SMTP relay | Tidak | Teruskan ke SMTP nyata |

## Menyiapkan Mailpit di FlyEnv

### Langkah 1: Pasang Mailpit

1. Buka **FlyEnv -> Mailpit**.
2. Pilih versi, disarankan versi terbaru.
3. Klik **Install**.

![Pemasangan Mailpit](https://oss.macphpstudy.com/image/mailpit-1.webp)

### Langkah 2: Konfigurasikan Aplikasi Anda

Arahkan pengaturan SMTP aplikasi ke Mailpit.

**PHP (Laravel/Symfony/WordPress):**

```ini
MAIL_MAILER=smtp
MAIL_HOST=127.0.0.1
MAIL_PORT=1025
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null
```

**Node.js (Nodemailer):**

```javascript
const transporter = nodemailer.createTransport({
  host: '127.0.0.1',
  port: 1025,
  secure: false
});
```

**Python (Django):**

```python
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = '127.0.0.1'
EMAIL_PORT = 1025
```

**Ruby on Rails:**

```yaml
config.action_mailer.delivery_method = :smtp
config.action_mailer.smtp_settings = {
  address: '127.0.0.1',
  port: 1025
}
```

### Langkah 3: Jalankan Layanan Mailpit

Di modul Mailpit FlyEnv, klik tombol mulai.

![Layanan Mailpit](https://oss.macphpstudy.com/image/mailpit-2.webp)

Titik akses bawaan:

- **Server SMTP**: `127.0.0.1:1025` untuk menangkap email.
- **Antarmuka web**: `http://127.0.0.1:8025` untuk melihat email.

### Langkah 4: Uji Penangkapan Email

Kirim email percobaan dari aplikasi, lalu buka `http://127.0.0.1:8025` untuk melihat pesan yang tertangkap.

## Menggunakan Mailpit untuk Pengujian Email

### Pratinjau Email HTML

Klik pesan untuk melihat:

- pratinjau HTML seperti yang dilihat penerima;
- tampilan teks biasa sebagai fallback;
- tampilan source untuk header dan isi email mentah;
- pratinjau seluler untuk pengujian responsif.

### Penanganan Lampiran

Mailpit menampilkan lampiran secara inline:

- gambar sebagai thumbnail;
- PDF dan dokumen untuk diunduh;
- batas ukuran yang dapat dikonfigurasi.

### Akses API

Otomatiskan pengujian email di test suite Anda:

```javascript
// Contoh: memastikan email telah terkirim
const waitForEmail = async () => {
  const response = await fetch('http://127.0.0.1:8025/api/v1/messages');
  const data = await response.json();
  return data.messages.find(m => m.To[0].Address === 'user@example.com');
};
```

## Fitur Lanjutan

### Relay Pesan

Perlu benar-benar menerima email? Konfigurasikan relay pada pengaturan FlyEnv untuk meneruskan email tertentu ke server SMTP nyata.

### Persistensi Pesan

Berbeda dengan penyimpanan Mailhog yang hanya di memori, Mailpit menggunakan SQLite secara bawaan:

- email tetap ada setelah layanan dimulai ulang;
- Anda dapat mengonfigurasi kebijakan retensi;
- riwayat pesan dapat diekspor.

## Integrasi dengan Framework Populer

### Laravel

Pastikan `.env` mengarah ke Mailpit:

```ini
MAIL_HOST=127.0.0.1
MAIL_PORT=1025
```

### WordPress

Tambahkan ke `wp-config.php` atau plugin:

```php
add_action('phpmailer_init', function($phpmailer) {
    $phpmailer->isSMTP();
    $phpmailer->Host = '127.0.0.1';
    $phpmailer->Port = 1025;
    $phpmailer->SMTPAuth = false;
});
```

### Symfony

```yaml
framework:
    mailer:
        dsn: 'smtp://127.0.0.1:1025'
```

## Pemecahan Masalah

### Kesalahan koneksi ditolak

1. Pastikan Mailpit berjalan di FlyEnv.
2. Periksa apakah port `1025` dipakai layanan lain.
3. Pastikan firewall mengizinkan koneksi localhost.

### Email tidak muncul

1. Periksa pengaturan SMTP aplikasi.
2. Periksa log Mailpit untuk percobaan koneksi.
3. Pastikan port yang digunakan benar: `1025` untuk SMTP, bukan `8025`.

## Pertanyaan yang Sering Diajukan

**Apakah Mailpit gratis?**  
Ya. Mailpit sepenuhnya gratis dan open-source, tetapi tetap aktif dipelihara.

**Apakah Mailpit berjalan di Windows?**  
Ya. FlyEnv menyediakan biner Windows native, selain dukungan macOS dan Linux.

**Dapatkah email diteruskan ke inbox sungguhan?**  
Ya. Mailpit mendukung SMTP relay untuk meneruskan email tertentu ke alamat nyata.

**Berapa lama email disimpan?**  
Secara bawaan Mailpit menyimpan email di SQLite tanpa batas waktu; Anda dapat mengatur retensi pada pengaturan.

**Apakah lampiran didukung?**  
Ya. Gambar, PDF, dan dokumen dapat dipratinjau serta diunduh.

**Dapatkah Mailpit dipakai untuk load testing?**  
Ya. Mailpit menangani volume tinggi dengan lebih baik daripada Mailhog.

## Siap Memperbarui Pengujian Email?

Hentikan perjuangan dengan perangkat lunak yang tidak lagi aktif. Mailpit di FlyEnv menyediakan pengujian email modern dan andal yang langsung berfungsi.

[Unduh FlyEnv](/id/download) untuk memulai dengan dukungan Mailpit bawaan.

Jelajahi alat lain di bagian [AI & Alat Produktivitas](/id/guide/build-local-offline-ai-agent).
