# Panduan Modul Kustom

## Pendahuluan

FlyEnv sudah menyertakan banyak modul bawaan, tetapi masih ada modul yang umum dipakai dalam pengembangan dan belum terintegrasi. Bila Anda memerlukan modul tertentu di FlyEnv, kami menyarankan Anda mengajukan permintaan terlebih dahulu melalui [Discussions](https://github.com/xpf0000/FlyEnv/discussions) atau [Issues](https://github.com/xpf0000/FlyEnv/issues).

Untuk kebutuhan tersebut, FlyEnv menyediakan **Custom Modules**, sehingga pengguna dapat menambahkan modul sendiri sambil mempertahankan pengalaman yang sama dengan modul sistem bawaan.

Panduan ini menggunakan [etcd](https://github.com/etcd-io/etcd) sebagai contoh. Pada saat panduan ini ditulis, FlyEnv belum memiliki modul etcd bawaan, walaupun permintaannya sudah ada (#307). Kami menghargai setiap masukan pengguna; setiap saran membantu menyempurnakan FlyEnv untuk semua orang.

<iframe style="width: 100%; aspect-ratio: 16 / 9;" src="https://www.youtube-nocookie.com/embed/ViKMVkh3TL8?si=whaQ5nXE1fhiT5gw" title="Pemutar video YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Menambahkan Modul Kustom

### Langkah 1: Siapkan Biner

Unduh paket biner etcd dan ekstrak berkasnya.

![Menyiapkan biner modul kustom](https://oss.macphpstudy.com/image/custom-module-screen1.png)

### Langkah 2: Buat Konfigurasi

Buat berkas konfigurasi `etcd.yaml`:

```yaml
name: "etcd-flyenv-test"
listen-client-urls: "http://0.0.0.0:2379"
listen-peer-urls: "http://0.0.0.0:2380"
advertise-client-urls: "http://127.0.0.1:2379"
initial-advertise-peer-urls: "http://127.0.0.1:2380"
log-level: "info"
log-outputs: ["stdout"]
```

### Langkah 3: Buat Kategori Modul

1. Buka **Settings -> Modules**.
2. Klik ikon di samping **Site** untuk membuat kategori modul baru.

![Membuat kategori modul](https://oss.macphpstudy.com/image/custom-module-screen2.png)

### Langkah 4: Tambahkan Modul Baru

Di dalam kategori baru, klik **Add** untuk membuat modul.

Pilihan konfigurasinya:

- **Is Module a Service?**: FlyEnv mengelola proses mulai/berhenti dan menambahkan kontrol sakelar.
- **Only one service can run at a time**: untuk layanan yang tidak boleh menjalankan beberapa versi sekaligus.
- **Module Execution Items**: versi atau konfigurasi modul yang berbeda.
- **Configuration Files**: tampil sebagai tab di panel utama.
- **Log Files**: tampil sebagai tab di panel utama.

![Menambahkan modul baru](https://oss.macphpstudy.com/image/custom-module-screen3.png)

### Langkah 5: Tambahkan Item Eksekusi

Klik **Add** di bawah Execution Items untuk mengonfigurasi:

- **Run with sudo** (khusus macOS): untuk perintah yang membutuhkan hak istimewa.
- **Command/File**: perintah yang dapat dieksekusi atau berkas skrip (`.sh`/`.ps1`/`.cmd`/`.bat`).
- **PID File Path**: untuk pemantauan status layanan.
- **Configuration Files**: dapat diedit lewat popup operasi.
- **Log Files**: dapat dilihat lewat popup operasi.

Untuk contoh etcd:

```shell
cd "/Users/x/Downloads/etcd-v3.6.0-darwin-amd64" && ./etcd --config-file "/Users/x/Downloads/etcd-v3.6.0-darwin-amd64/etcd.yaml"
```

![Menambahkan item eksekusi](https://oss.macphpstudy.com/image/custom-module-screen4.png)

### Langkah 6: Buka Modul Anda

Modul kustom kini muncul di sidebar kiri. Klik modul tersebut untuk membuka antarmukanya.

![Mengakses modul kustom](https://oss.macphpstudy.com/image/custom-module-screen5.png)

Lihat dan edit berkas konfigurasi:

![Mengedit konfigurasi modul](https://oss.macphpstudy.com/image/custom-module-screen6.png)

### Langkah 7: Jalankan Layanan

Klik tombol **Start** pada item eksekusi Anda.

![Menjalankan layanan](https://oss.macphpstudy.com/image/custom-module-screen7.png)

### Langkah 8: Verifikasi Operasi

Buka **Tools -> Process Kill** untuk memastikan etcd sedang berjalan.

![Memverifikasi layanan](https://oss.macphpstudy.com/image/custom-module-screen8.png)

### Langkah 9: Pantau Log

Lihat log keluaran dan kesalahan menggunakan tombol operasi.

![Log keluaran modul](https://oss.macphpstudy.com/image/custom-module-screen9.png)
![Log kesalahan modul](https://oss.macphpstudy.com/image/custom-module-screen10.png)

## Kesimpulan

Anda telah berhasil menambahkan modul kustom ke FlyEnv. Kami menyambut masukan dan pengalaman Anda. Untuk pertanyaan atau permintaan fitur, kunjungi [Discussions](https://github.com/xpf0000/FlyEnv/discussions) atau [Issues](https://github.com/xpf0000/FlyEnv/issues).
