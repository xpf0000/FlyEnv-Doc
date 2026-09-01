---
title: 'Debug PHP dengan Xdebug: Panduan untuk PhpStorm dan VS Code'
head:
  - - meta
    - name: description
      content: Pasang dan konfigurasi Xdebug pada PHP FlyEnv, lalu hubungkan dengan PhpStorm atau VS Code untuk breakpoint, inspeksi variabel, dan profiling.
---

# Debug PHP dengan Xdebug: Panduan untuk PhpStorm dan VS Code

Xdebug memungkinkan Anda menghentikan proses PHP pada breakpoint, memeriksa variabel, melihat stack trace, dan mengeksekusi ekspresi. Ini lebih akurat daripada menambah `var_dump()` berulang kali pada aplikasi yang kompleks.

## Pasang Xdebug di FlyEnv

Pada macOS dan Linux, pilih versi PHP pada FlyEnv lalu gunakan pemasangan ekstensi Xdebug dari antarmuka. Pada Windows, unduh DLL yang cocok dengan versi PHP, arsitektur, thread safety, dan compiler, lalu masukkan ke direktori ekstensi PHP. Selalu cocokkan build Xdebug dengan keluaran `php -i`.

## Konfigurasi Dasar

Tambahkan atau sesuaikan bagian berikut pada `php.ini` untuk lingkungan pengembangan:

```ini
zend_extension=xdebug
xdebug.mode=debug,develop
xdebug.start_with_request=yes
xdebug.client_host=127.0.0.1
xdebug.client_port=9003
xdebug.log_level=0
```

Mulai ulang PHP-FPM atau server web dari FlyEnv. Konfirmasi modul aktif dengan:

```bash
php -v
php --ri xdebug
```

Jangan aktifkan mode debug pada produksi karena berdampak pada keamanan dan performa.

## PhpStorm

1. Pada **Settings -> PHP**, pilih interpreter PHP FlyEnv.
2. Buka **Settings -> PHP -> Debug** dan pastikan port adalah `9003`.
3. Atur server serta path mapping jika proyek berjalan melalui remote/container; untuk FlyEnv lokal, path biasanya sama.
4. Aktifkan **Listen for PHP Debug Connections**.
5. Tambahkan breakpoint dan kirim permintaan ke situs lokal.

## VS Code

Pasang ekstensi PHP Debug, lalu buat `.vscode/launch.json`:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Listen for Xdebug",
      "type": "php",
      "request": "launch",
      "port": 9003
    }
  ]
}
```

Jalankan konfigurasi **Listen for Xdebug**, pasang breakpoint, lalu akses halaman atau command PHP yang ingin diperiksa.

## Teknik Debug Penting

- **Conditional breakpoint:** berhenti hanya saat ekspresi memenuhi kondisi.
- **Watch expression:** pantau nilai saat eksekusi berhenti.
- **Evaluate:** jalankan ekspresi kecil dalam konteks breakpoint.
- **Stack trace:** telusuri alur pemanggilan untuk menemukan sumber nilai atau galat.

## Pemecahan Masalah

**Xdebug tidak muncul di `phpinfo()`:** pastikan `zend_extension` menunjuk build yang tepat, lalu mulai ulang proses PHP yang benar.

**IDE tidak menerima koneksi:** pastikan IDE mendengar pada port 9003 dan `xdebug.client_host`/`xdebug.client_port` benar. Periksa firewall bila IDE dan PHP tidak berada pada mesin yang sama.

**Breakpoint tidak terpanggil:** periksa path mapping, pastikan request memakai PHP yang telah dikonfigurasi, dan hapus cache OPcache bila perlu.

**Koneksi timeout:** uji bahwa PHP dapat mencapai host IDE; untuk Docker atau VM gunakan alamat host yang sesuai, bukan selalu `127.0.0.1`.

## Profiling

Gunakan mode `profile` atau profiler FlyEnv hanya untuk investigasi terukur. Berkas profile dapat besar dan memperlambat aplikasi; nonaktifkan kembali setelah analisis.

## Ringkasan

Pasang build Xdebug yang cocok, gunakan port 9003, mulai ulang PHP, lalu dengarkan koneksi pada IDE. Setelah alur dasar berfungsi, gunakan breakpoint dan stack trace untuk menggantikan debugging berbasis output sementara.

- [Menjalankan Laravel dengan FlyEnv](/id/guide/run-laravel-use-flyenv)
- [Unduh FlyEnv](/id/download)
