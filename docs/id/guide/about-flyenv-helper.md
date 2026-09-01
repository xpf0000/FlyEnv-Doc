# Panduan Lengkap FlyEnv Helper

Saat menggunakan FlyEnv, sistem biasanya meminta Anda memasang **FlyEnv Helper**. Artikel ini menjelaskan alasan FlyEnv memerlukan program pembantu tersebut, fungsi-fungsinya, serta cara pemasangan dan penghapusannya di setiap sistem operasi.

## 1. Mengapa perlu memasang FlyEnv Helper?

Program utama FlyEnv secara bawaan berjalan dengan **hak pengguna standar**. Namun, agar pengalaman pengembangan lokal tetap lengkap dan mulus, beberapa fitur inti memerlukan **hak administrator (Administrator/Root)**. Fitur tersebut meliputi:

### Membaca dan menulis berkas hosts sistem

- **Path berkas:** macOS (`/private/etc/hosts`), Windows (`C:\Windows\System32\drivers\etc\hosts`), Linux (`/etc/hosts`).
- **Alasan:** pengguna standar tidak dapat mengubah berkas ini secara bawaan. Agar dapat mensimulasikan lingkungan produksi secara dekat, FlyEnv tidak membatasi nama domain situs, misalnya hanya pada domain `.test`. Karena itu, FlyEnv harus menulis domain kustom ke berkas hosts sistem agar dapat diurai secara lokal.

### Mengikat port jaringan di bawah 1024

- **Alasan:** di macOS dan Linux, mekanisme keamanan tidak mengizinkan program pengguna standar mengikat port istimewa 1-1023 secara langsung. Agar situs dapat dibuka dengan nama domain tanpa memasukkan nomor port di browser ketika menggunakan Apache, Nginx, Caddy, atau Tomcat, FlyEnv harus mengikat port bawaan 80 dan 443, yang membutuhkan hak administrator.

### Mengelola variabel lingkungan Windows `$PATH`

- **Alasan:** salah satu fitur inti FlyEnv adalah konfigurasi sekali klik PHP, Node.js, Python, Java, Go, dan Ruby ke `$PATH` global sistem. Alat pengelolaan variabel lingkungan FlyEnv untuk melihat, menambah, mengubah, dan menghapus nilai juga memerlukan hak administrator untuk mengubah variabel lingkungan tingkat sistem.

### Menambahkan sertifikat root HTTPS ke keychain sistem secara otomatis

- **Alasan:** FlyEnv menyediakan dukungan HTTPS otomatis. Ketika situs dibuat atau diedit, sistem menghasilkan sertifikat SSL lokal. Agar browser mempercayai sertifikat tersebut, "sertifikat root" terkait harus dipasang dan dipercaya di keychain sistem (Keychain / Credential Manager), dan tindakan ini juga memerlukan hak administrator.

**Keunggulan skema pemisahan hak istimewa:**

Tanpa program pembantu ini, FlyEnv harus membatasi fiturnya, misalnya hanya mengizinkan akses IP dengan nomor port, atau memaksa pengguna mengonfigurasi variabel lingkungan dan sertifikat SSL secara manual. Alternatif lainnya adalah menampilkan jendela otorisasi berulang kali untuk setiap operasi sensitif, yang akan sangat mengganggu pengalaman pengembangan.

Karena itu, FlyEnv menggunakan **skema pemisahan hak istimewa** yang lazim di industri: operasi yang memerlukan hak lebih tinggi dipindahkan ke FlyEnv Helper. Pengguna **hanya perlu memberikan otorisasi sekali saat inisialisasi**; operasi sensitif berikutnya ditangani Helper di latar belakang. Pendekatan ini menjaga kelengkapan fitur sekaligus pengalaman pengguna yang baik.

---

## 2. Panduan Pemasangan dan Penghapusan

Cara FlyEnv Helper berada di sistem berbeda menurut sistem operasi. Jika pemasangannya gagal, coba buka direktori di bawah dan jalankan berkas yang dapat dieksekusi secara manual dengan hak administrator. Untuk menghapusnya, ikuti petunjuk sistem yang sesuai.

### Windows

Di Windows, FlyEnv membuat **Scheduled Task** agar Helper berjalan di latar belakang secara otomatis setelah pengguna masuk.

- **Lokasi executable:** `[FlyEnv Installation Directory]\resources\helper\flyenv-helper.exe`

**Cara menghapus:** buka PowerShell sebagai Administrator, lalu jalankan perintah berikut untuk menghapus scheduled task:

```powershell
schtasks.exe /delete /tn "FlyEnvHelperTask" /f
schtasks.exe /delete /tn "flyenv-helper" /f
```

### macOS

Di macOS, FlyEnv membuat startup item melalui `launchd`.

- **Lokasi executable:** `/Library/Application Support/FlyEnv/Helper/flyenv-helper`
- **Catatan khusus:** saat pemasangan, sistem menampilkan pemberitahuan **Background Items Added**; pastikan Anda memilih **Allow**.

**Cara menghapus:** buka Terminal dan jalankan perintah berikut untuk menghapus startup item dan berkas program:

```bash
sudo launchctl enable "system/com.flyenv.helper"
sudo launchctl bootout system "/Library/LaunchDaemons/com.flyenv.helper.plist"
sudo rm -rf "/Library/LaunchDaemons/com.flyenv.helper.plist"
sudo rm -rf "/Library/Application Support/FlyEnv/Helper"
```

### Linux

Di Linux, FlyEnv mendaftarkan layanan sistem melalui `systemd` dan mengaturnya untuk berjalan saat boot.

- **Lokasi executable:** `/usr/local/bin/flyenv-helper`

**Cara menghapus:** buka Terminal dan jalankan perintah berikut untuk menghentikan layanan dan membersihkan berkas:

```bash
sudo systemctl stop "flyenv-helper"
sudo systemctl disable "flyenv-helper"
sudo rm -f "/etc/systemd/system/flyenv-helper.service"
sudo rm -rf "/usr/local/bin/flyenv-helper"
```

---

## Ringkasan

FlyEnv Helper memastikan fitur inti FlyEnv seperti resolusi domain kustom, HTTPS lokal, akses tanpa nomor port, dan konfigurasi variabel lingkungan otomatis dapat berjalan dengan lancar. Dengan otorisasi aman satu kali, Helper menghilangkan konfigurasi manual yang rumit dan permintaan kata sandi berulang, sehingga lingkungan pengembangan lokal tetap bersih dan efisien.
