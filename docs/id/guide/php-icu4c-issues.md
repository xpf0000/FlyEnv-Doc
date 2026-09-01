# Masalah PHP icu4c

Pada PHP yang dipasang menggunakan Homebrew, kadang layanan terlihat di panel Services tetapi berwarna merah dan tidak dapat dimulai. Pesan kesalahannya dapat terlihat seperti berikut:

```sh
/opt/homebrew/Cellar/php/8.2.10/sbin/php-fpm -n -v
Error: Command failed: /opt/homebrew/Cellar/php/8.2.10/sbin/php-fpm -n -v
dyld[1578]: Library not loaded: @loader_path/../../../../opt/icu4c/lib/libicuio.73.dylib
Referenced from: <8225FD7D-2159-3B46-AB67-18AFF8F24255> /opt/homebrew/Cellar/php/8.2.10/sbin/php-fpm
Reason: tried: '/opt/homebrew/Cellar/php/8.2.10/sbin/../../../../opt/icu4c/lib/libicuio.73.dylib' (no such file), '/usr/local/lib/libicuio.73.dylib' (no such file), '/usr/lib/libicuio.73.dylib' (no such file, not in dyld cache)
```

Ini adalah masalah umum pada paket yang dipasang melalui Homebrew. Beberapa perangkat lunak dapat bergantung pada versi berbeda dari dependensi yang sama; dependensinya sudah diperbarui, sedangkan perangkat lunak yang memakainya belum.

Jalankan perintah berikut untuk memperbarui Homebrew dan paket yang sudah usang:

```sh
brew update && brew upgrade
```

Jika masalah masih ada setelah pembaruan, pasang ulang perangkat lunak yang bermasalah.
