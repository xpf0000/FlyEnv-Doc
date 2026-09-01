# Mengatur Variabel Lingkungan PATH Sistem

## Apa Tepatnya Variabel PATH Itu?

### Penjelasan Cepat

**PATH** adalah daftar lokasi pencarian sistem. Saat Anda mengetik perintah seperti `python` atau `javac`, sistem mencari program terkait di setiap direktori yang tercantum dalam PATH.

### Penjelasan Teknis

1. **Apa itu PATH?** Variabel lingkungan yang berisi beberapa jalur direktori, dipisahkan oleh titik koma di Windows atau titik dua di macOS/Linux.
   - Contoh Windows:
     ```
     C:\Python39\Scripts;C:\Program Files\Java\jdk-17\bin
     ```
2. **Cara kerjanya:** saat Anda mengetik `python`, sistem memeriksa setiap jalur secara berurutan:
   1. `C:\Python39\Scripts\python.exe` (ditemukan? jalankan)
   2. `C:\Program Files\Java\jdk-17\bin\python.exe` (tidak ditemukan? lanjutkan atau tampilkan galat)

## Mengapa PATH Sering Menimbulkan Masalah?

1. **Salah ketik jalur:** garis miring, spasi, atau nama folder yang salah membuat sistem tidak menemukan program.
   - Contoh salah: `C:\Program  Files\Python\python.exe`; jalur sebenarnya mungkin `C:\Program Files\Python39\python.exe`.
2. **Perilaku IDE:** terminal VS Code tidak menemukan perintah karena PATH milik IDE dan terminal sistem dapat berbeda.
3. **Jebakan installer:** sebagian installer tidak mencentang opsi **Add to PATH** secara default.

## Mengelola PATH dengan Benar

1. **Pengguna FlyEnv:** Anda tidak perlu mengaturnya secara manual. Jalur versi yang dikelola dapat dikonfigurasi otomatis.
2. **Konfigurasi manual:**
   - **Windows:**
     ```
     Control Panel → System → Advanced Settings → Environment Variables → Edit PATH
     ```
   - **macOS/Linux:**
     ```bash
     export PATH=$PATH:/your/new/path   # Sementara
     echo 'export PATH=$PATH:/your/new/path' >> ~/.zshrc  # Permanen
     ```

## Tips Praktis

- **Periksa PATH saat ini:**
  - Windows: `echo %PATH%`
  - macOS/Linux: `echo $PATH`
- **Mencari sumber masalah:**
  - macOS/Linux:
    ```bash
    which python   # Menunjukkan python yang sedang digunakan
    ```
  - Windows:
    ```
    where.exe python
    ```

Ingatlah bahwa PATH seharusnya menjadi alat, bukan hambatan. Bila PATH masih menyulitkan, gunakan pengelolaan tanpa konfigurasi dari **FlyEnv**.

## Mengatur PATH dengan FlyEnv

Mengonfigurasi PATH melalui FlyEnv hanya membutuhkan dua langkah:

1. Pasang versi yang diperlukan.

![Antarmuka pemasangan versi](https://oss.macphpstudy.com/image/set-env-1.png)

2. Aktifkan sakelar untuk menambahkan atau menghapus jalur versi dari PATH.

![Antarmuka konfigurasi PATH](https://oss.macphpstudy.com/image/set-env-2.png)

FlyEnv juga menyediakan alat akses cepat untuk melihat dan mengelola variabel PATH.

### macOS

![Antarmuka pengelolaan PATH](https://oss.macphpstudy.com/image/set-env-3.png)

![Antarmuka pengelolaan PATH](https://oss.macphpstudy.com/image/set-env-4.png)

### Windows

![Antarmuka pengelolaan PATH](https://oss.macphpstudy.com/image/set-env-5.png)

## Video Demo

<iframe style="width: 100%; aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/47I5nZK3rjo?si=Ubfp765OcuVbzT58" title="Pemutar video YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
