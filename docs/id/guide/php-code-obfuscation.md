---
description: 'Bandingkan teknik obfuscation PHP, dampaknya terhadap pemeliharaan, dan cara praktis melindungi kode sumber sebelum distribusi.'
---

# Obfuscation Kode PHP

Obfuscation membuat kode sumber yang didistribusikan lebih sulit dibaca. Simpan sumber asli dalam version control dan perlakukan hasilnya sebagai artefak build. Keluarkan rahasia dan konfigurasi pribadi dari berkas distribusi.

## Jalankan Php Obfuscator pada salinan uji

Buat cadangan atau salinan sementara. Di **Tools → Php Obfuscator**, pilih versi PHP terpasang, pilih berkas atau folder sumber, lalu tentukan lokasi keluaran terpisah. Buka **Config** untuk menyesuaikan transformasi jika perlu, lalu klik **Generate**.

<img src="https://oss.macphpstudy.com/image/98d80872b153.png" data-x-image-preview="">

<img src="https://oss.macphpstudy.com/image/003391cd543e.png" data-x-image-preview="">

## Verifikasi perilaku berkas keluaran

Gunakan versi PHP yang sama untuk menjalankan contoh asli dan salinan yang dihasilkan. Simpan keduanya sebagai `source.php` dan `output.php` di folder sementara, lalu bandingkan hasilnya.

```php
<?php

class Calculator {
    public function add(int $left, int $right): int {
        return $left + $right;
    }
}

echo (new Calculator())->add(2, 3);
```

```text
php source.php
php output.php
```

Kedua perintah harus mencetak hasil yang sama. Untuk proyek, jalankan juga rangkaian pengujian pada berkas yang dihasilkan, termasuk autoloading Composer serta rute, templat, atau kelas yang dirujuk secara dinamis. Simpan sumber asli untuk debugging. Runtime PHP masih bisa menjalankan dan memeriksa hasilnya, sehingga obfuscation hanya membuat kode lebih sulit dibaca.
