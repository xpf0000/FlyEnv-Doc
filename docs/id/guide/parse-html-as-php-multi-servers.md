---
title: 'Memproses HTML sebagai PHP di Nginx, Apache, dan Caddy'
head:
  - - meta
    - name: description
      content: Pelajari cara memproses berkas HTML sebagai PHP pada Nginx, Apache, dan Caddy, beserta pemeriksaan keamanan dan pemecahan masalah.
---

# Memproses HTML sebagai PHP di Nginx, Apache, dan Caddy

Secara normal, server menyajikan `.html` sebagai berkas statis dan hanya mengeksekusi `.php`. Beberapa proyek lama atau CMS menyimpan template PHP dalam berkas HTML. Panduan ini menunjukkan konfigurasi yang diperlukan, tetapi gunakan hanya pada direktori yang tepercaya karena perubahan ini memperbesar area eksekusi kode.

## Kapan Diperlukan

- Migrasi aplikasi lama yang memakai ekstensi `.html` untuk template PHP.
- Kompatibilitas dengan aturan URL lama.
- Pengujian kode warisan sebelum menamai ulang berkas menjadi `.php`.

Untuk proyek baru, gunakan ekstensi `.php` secara eksplisit agar perilaku dan risiko keamanan lebih jelas.

## Prasyarat

Pasang serta jalankan server web dan PHP pada FlyEnv. Buat salinan konfigurasi sebelum mengedit, lalu mulai ulang layanan setelah setiap perubahan.

## Nginx

### 1. Izinkan Ekstensi HTML pada PHP-FPM

Pada konfigurasi PHP-FPM, periksa `security.limit_extensions`; tambahkan `.html` hanya bila perlu:

```ini
security.limit_extensions = .php .html
```

### 2. Tambahkan Blok Location Nginx

Tambahkan konfigurasi yang setara dengan blok PHP yang sudah dipakai situs Anda:

```nginx
location ~ \.(php|html)$ {
    try_files $uri =404;
    fastcgi_pass 127.0.0.1:9000;
    fastcgi_index index.php;
    include fastcgi_params;
    fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
}
```

Sesuaikan `fastcgi_pass` dengan versi dan socket PHP-FPM pada FlyEnv. Mulai ulang Nginx dan PHP-FPM, lalu uji berkas yang diketahui aman.

## Apache

### Metode 1: `.htaccess`

Tambahkan ke document root bila `AllowOverride` mengizinkan:

```apache
# Proses file HTML sebagai PHP
AddType application/x-httpd-php .html .htm
```

Untuk PHP 7+ pada beberapa konfigurasi, gunakan handler yang sesuai dengan modul atau PHP-FPM Anda. Jangan menerapkan aturan ini pada direktori upload.

### Metode 2: Virtual Host

Letakkan aturan `AddType` pada konfigurasi VirtualHost bila Anda tidak ingin memakai `.htaccess`. Pastikan modul PHP atau proxy PHP-FPM telah aktif, kemudian mulai ulang Apache.

## Caddy

Pada `Caddyfile`, perluas matcher PHP agar mencakup ekstensi HTML dan teruskan ke PHP-FPM:

```caddy
@phpFiles path *.php *.html *.htm
php_fastcgi @phpFiles 127.0.0.1:9000
file_server
```

Gunakan alamat socket atau port PHP-FPM yang benar untuk konfigurasi FlyEnv Anda, lalu reload Caddy.

## Pemecahan Masalah

**Berkas diunduh, bukan dieksekusi:** periksa handler atau blok location dan pastikan PHP-FPM aktif.

**502 Bad Gateway di Nginx:** periksa alamat `fastcgi_pass`, status PHP-FPM, dan log error.

**500 di Apache:** periksa sintaks `.htaccess`, modul yang aktif, serta log Apache.

**Halaman putih:** aktifkan log galat PHP pada lingkungan pengembangan dan periksa syntax error.

## Peringatan Keamanan

Jangan pernah mengizinkan eksekusi `.html` di direktori upload, cache, atau data pengguna. Tolak eksekusi PHP pada direktori tersebut, misalnya dengan aturan server web yang hanya menyajikan berkas statis. Validasi nama dan tipe berkas yang diunggah, dan pisahkan upload dari document root jika memungkinkan.

## Ringkasan

Memproses HTML sebagai PHP dapat menyelesaikan kebutuhan kompatibilitas, tetapi sebaiknya bersifat terbatas per situs dan per direktori. Gunakan ekstensi PHP normal pada kode baru, uji setelah mengubah konfigurasi, dan selalu lindungi direktori upload.
