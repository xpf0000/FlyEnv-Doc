# Obfuscation Kode PHP

Obfuscation mengubah bentuk kode sumber agar lebih sulit dibaca manusia, tanpa mengubah perilakunya saat dijalankan. Ini dapat membantu melindungi distribusi kode PHP, tetapi bukan pengganti lisensi, kontrol akses, atau pengelolaan rahasia yang benar.

## Menggunakan Obfuscator PHP di FlyEnv

1. Buka modul **PHP** atau alat yang terkait pada FlyEnv.
2. Pilih versi PHP yang dipakai proyek Anda.
3. Buka alat **PHP Code Obfuscation**.
4. Pilih folder atau berkas sumber, lalu tentukan folder keluaran yang berbeda dari sumber asli.
5. Jalankan proses obfuscation dan uji hasilnya pada lingkungan terpisah.

Jangan menimpa source repository. Simpan kode asli dalam Git dan perlakukan keluaran obfuscation sebagai artefak build.

## Praktik Aman

- Jalankan test suite sebelum dan setelah obfuscation.
- Kecualikan `.env`, kunci privat, sertifikat, token, dan data pengguna. Obfuscation tidak membuat rahasia aman bila berkas tersebut ikut didistribusikan.
- Pastikan autoloader Composer, nama kelas yang direfleksikan, route framework, dan template tetap bekerja.
- Buat artefak untuk setiap versi rilis agar masalah dapat ditelusuri kembali ke source asli.

## Contoh Sederhana

Kode asli yang mudah dibaca:

```php
class Calculator {
    public function add(int $left, int $right): int {
        return $left + $right;
    }
}
```

Setelah obfuscation, nama kelas, variabel, dan struktur kontrol dapat berubah. Jangan mengedit hasilnya secara manual; lakukan perubahan pada source asli kemudian bangun ulang artefak.

## Batasan Obfuscation

PHP tetap harus dapat menjalankan kode, sehingga obfuscation tidak menjamin kode mustahil dibongkar. Gunakan bersama lisensi yang jelas, validasi server-side, kontrol distribusi, dan audit keamanan. Untuk logika yang sangat sensitif, pertimbangkan menjalankannya sebagai layanan terpisah daripada mengirimkannya ke klien.
