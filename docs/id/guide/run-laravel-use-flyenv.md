---
title: 'Menjalankan Laravel Secara Lokal: Panduan Lengkap dengan FlyEnv'
head:
  - - meta
    - name: description
      content: Siapkan lingkungan Laravel dalam beberapa menit dengan FlyEnv. Pemasangan Laravel sekali klik, URL rewrite otomatis, SSL, dan konfigurasi basis data untuk macOS, Windows, serta Linux.
---

# Menjalankan Laravel Secara Lokal: Panduan Lengkap dengan FlyEnv

Menyiapkan Laravel biasanya melibatkan pemilihan versi PHP, aturan rewrite Nginx, dan masalah izin folder. Dengan FlyEnv, Anda dapat membuat proyek, menyiapkan situs, serta menjalankan layanan yang diperlukan dari satu aplikasi.

Panduan ini mencakup pembuatan proyek baru dan penyiapan proyek Laravel yang sudah ada.

## Mulai Cepat: Buat Proyek Laravel di FlyEnv

### Metode 1: Pemasangan Laravel Sekali Klik

FlyEnv dapat membuat proyek Laravel baru beserta dependensinya secara otomatis.

#### Langkah 1: Buat Proyek Baru

1. Buka FlyEnv dan pilih modul **Host**.
2. Klik tombol **New Project**.

<img src="https://oss.macphpstudy.com/image/F74AA939C46A.png" data-x-image-preview="">

#### Langkah 2: Konfigurasikan Proyek

Pilih jalur proyek, versi PHP, dan versi Laravel. Laravel 10+ membutuhkan PHP 8.1+, sedangkan Laravel 11 umumnya memakai PHP 8.2+.

<img src="https://oss.macphpstudy.com/image/8E783623E2F8.png" data-x-image-preview="">

Klik **OK**. FlyEnv akan memasang Laravel melalui Composer, menyiapkan struktur proyek dan koneksi basis data, serta membuat konfigurasi situs awal.

#### Langkah 3: Proyek Dibuat

Setelah selesai, proyek berada pada folder yang Anda pilih. Klik **Create Host** untuk membuat situs secara otomatis, atau ikuti penyiapan manual berikut.

<img src="https://oss.macphpstudy.com/image/BAAB108613E2.png" data-x-image-preview="">

### Metode 2: Proyek Laravel yang Sudah Ada

Jika Anda sudah mempunyai repositori Laravel, lanjutkan ke bagian [Membuat Situs](#membuat-situs).

## Membuat Situs

Baik proyek dibuat dari FlyEnv maupun di-clone dari Git, Anda perlu membuat situs untuk menyajikannya.

### Langkah 1: Tambahkan Situs

1. Buka modul **Host**.
2. Klik **Add**, atau pilih **Create Host** dari proses pembuatan proyek.

### Langkah 2: Konfigurasikan Situs

Untuk Laravel, root harus menunjuk ke folder `public`, bukan root proyek.

| Bidang | Nilai | Contoh |
| --- | --- | --- |
| Host Name | Domain lokal | `laravel.test` |
| Root Path | Jalur menuju `public` | `/Users/you/projects/example-app/public` |
| PHP Version | Sesuai kebutuhan proyek | 8.2 atau 8.3 |
| Port | Port HTTP | 80 |

<img src="https://oss.macphpstudy.com/image/E53248FED5BC.png" data-x-image-preview="">

`index.php` Laravel berada dalam `public/`. Mengarah ke root proyek dapat mengekspos berkas sensitif seperti `.env`.

### Langkah 3: Atur URL Rewrite

Laravel membutuhkan rewrite agar semua request aplikasi diarahkan ke `index.php`.

#### Nginx

Pilih **Laravel** dari daftar **Nginx URL Rewrite** di FlyEnv. Konfigurasinya setara dengan:

```nginx
location / {
    try_files $uri $uri/ /index.php$is_args$query_string;
}
```

Aturan tersebut menyajikan berkas atau direktori bila ada, dan selain itu meneruskan request beserta query string ke front controller Laravel.

#### Apache

Apache memakai `.htaccess`. FlyEnv dapat membuatnya saat proyek baru dibuat. Untuk penyiapan manual, buat `public/.htaccess`:

```apache
<IfModule mod_rewrite.c>
    <IfModule mod_negotiation.c>
        Options -MultiViews -Indexes
    </IfModule>

    RewriteEngine On

    # Handle Authorization Header
    RewriteCond %{HTTP:Authorization} .
    RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]

    # Redirect Trailing Slashes If Not A Folder...
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_URI} (.+)/$
    RewriteRule ^ %1 [L,R=301]

    # Send Requests To Front Controller...
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^ index.php [L]
</IfModule>
```

#### Caddy

Caddy tidak memerlukan konfigurasi tambahan untuk banyak proyek Laravel; pengaturan default Caddy biasanya sudah menangani front controller dengan benar.

### Langkah 4: Konfigurasikan Basis Data

Jika aplikasi menggunakan basis data:

1. Jalankan **MySQL** atau **PostgreSQL** pada FlyEnv.
2. Buat basis data dari antarmuka Database.
3. Perbarui `.env`:

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=your_database_name
DB_USERNAME=root
DB_PASSWORD=root
```

4. Jalankan migrasi:

```bash
php artisan migrate
```

## Menjalankan Aplikasi Laravel

### Jalankan Layanan yang Diperlukan

Nyalakan modul berikut:

- PHP dengan versi yang cocok untuk proyek.
- Nginx, Apache, atau Caddy.
- MySQL atau PostgreSQL bila proyek memakai basis data.

### Buka Situs

Klik tautan situs pada panel Host atau buka domain lokal di browser. Halaman sambutan Laravel akan tampil bila konfigurasi telah benar.

<img src="https://oss.macphpstudy.com/image/4373D117408E.png" data-x-image-preview="">

<img src="https://oss.macphpstudy.com/image/4FCCC65341EC.png" data-x-image-preview="">

## Debug dan Log

### Log Aplikasi

Log Laravel berada pada `storage/logs/laravel.log`:

```bash
tail -f storage/logs/laravel.log
```

### Log Server Web

Pilih situs pada modul Host dan buka tab **Logs** untuk melihat access log serta error log secara langsung.

<img src="https://oss.macphpstudy.com/image/14C9AD3814FA.png" data-x-image-preview="">

Masalah yang umum diperiksa:

- Galat 500: baca log Laravel.
- Galat 404: periksa aturan URL rewrite.
- Permission denied: periksa izin `storage/` dan `bootstrap/cache/`.

## Masalah Laravel yang Umum

### The Stream or File Could Not Be Opened

Penyebabnya biasanya izin pada folder `storage/`. Pada macOS/Linux, jalankan:

```bash
chmod -R 775 storage
chmod -R 775 bootstrap/cache
```

Di Windows, pastikan pengguna Anda memiliki izin tulis pada kedua folder tersebut.

### No Application Encryption Key Has Been Specified

```bash
php artisan key:generate
```

### Koneksi Basis Data Ditolak

- Pastikan MySQL/PostgreSQL berjalan di FlyEnv.
- Pastikan basis data ada dan kredensial `.env` benar.
- Gunakan `127.0.0.1`, bukan `localhost`, bila koneksi lokal mengalami masalah socket atau IPv6.

### CSS atau JavaScript Tidak Dimuat

Jalankan Vite development server atau build aset:

```bash
npm install
npm run dev
```

Untuk build produksi:

```bash
npm run build
```

Jika muncul `Vite manifest not found`, jalankan `npm run build` untuk menghasilkan manifest.

## Konfigurasi Lanjutan

### Banyak Versi PHP

Untuk menguji upgrade Laravel, pasang beberapa versi PHP di FlyEnv, edit pengaturan situs, pilih versi yang ingin diuji, lalu mulai ulang layanan.

### SSL atau HTTPS Lokal

Edit situs, aktifkan **Use SSL**, pilih **Auto SSL**, lalu buka `https://laravel.test`. HTTPS penting untuk service worker, secure cookie, integrasi pembayaran, dan fitur PWA.

### Queue Worker

```bash
php artisan queue:work
```

Gunakan Supervisor atau service FlyEnv bila worker harus tetap berjalan.

### Scheduler

Tambahkan ke cron sistem setiap menit:

```bash
* * * * * cd /path/to/project && php artisan schedule:run >> /dev/null 2>&1
```

Atau gunakan fitur scheduler FlyEnv bila tersedia pada konfigurasi Anda.

## Checklist Deployment Produksi

Sebelum memindahkan proyek dari lingkungan lokal:

- [ ] Atur `APP_ENV=production` dan `APP_DEBUG=false` pada `.env`.
- [ ] Gunakan `APP_KEY` yang kuat.
- [ ] Atur kredensial basis data produksi.
- [ ] Konfigurasikan worker antrean serta scheduler.
- [ ] Jalankan `composer install --optimize-autoloader --no-dev`.
- [ ] Jalankan `php artisan config:cache`, `route:cache`, dan `view:cache`.
- [ ] Atur izin berkas dan sertifikat SSL dengan benar.

## Pertanyaan Umum

**T: Versi PHP mana yang dipakai Laravel?**

J: Laravel 11 memerlukan PHP 8.2+, sedangkan Laravel 10 bekerja dengan PHP 8.1+. Gunakan versi stabil terbaru yang didukung proyek Anda.

**T: Dapatkah Laravel Sail dipakai bersama FlyEnv?**

J: Ya, tetapi untuk lingkungan lokal native biasanya tidak diperlukan karena FlyEnv sudah menyediakan PHP, MySQL, Redis, dan Host tanpa Docker.

**T: Bagaimana berpindah dari XAMPP atau Laragon?**

J: Ekspor basis data, hentikan layanannya, impor proyek dan basis data ke FlyEnv, lalu perbarui kredensial `.env`.

**T: Dapatkah beberapa aplikasi Laravel berjalan bersamaan?**

J: Ya. Buat situs terpisah dengan domain atau port berbeda, misalnya `project1.test` dan `project2.test`.

**T: Apakah FlyEnv mendukung Horizon?**

J: Ya. Jalankan Redis pada FlyEnv kemudian gunakan `php artisan horizon`.

**T: Apa perbedaan `php artisan serve` dengan FlyEnv?**

J: `php artisan serve` memakai server bawaan PHP. FlyEnv memberikan setup Nginx, Apache, atau Caddy yang lebih mendekati lingkungan web nyata, lengkap dengan layanan dan log terkelola.

## Langkah Berikutnya

- [Isolasi Versi per Proyek](/id/guide/project-level-runtime-environment)
- [Debug PHP dengan Xdebug](/id/guide/php-debug-with-xdebug)
- [Pengujian Email Lokal](/id/guide/local-email-testing-mailpit)
- [Cloudflare Tunnel untuk membagikan progres](/id/guide/cloudflare-tunnel-local-development)
