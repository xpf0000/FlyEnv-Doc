---
title: 'Agen AI Offline Privat dengan Ollama'
head:
  - - meta
    - name: description
      content: 'Jalankan model AI secara lokal dengan Ollama dan FlyEnv untuk bantuan coding offline memakai Qwen, DeepSeek, atau Llama pada perangkat sendiri.'
---

# Membangun Agen AI Offline yang Mengutamakan Privasi (Qwen, DeepSeek, Llama)

Jalankan model Ollama yang sudah diunduh untuk menjawab pertanyaan coding, menjelaskan kode, dan meninjau perubahan kecil. FlyEnv mengelola layanan Ollama dan menghubungkan antarmuka chat ke API lokal.

Pemasangan Ollama dan pengunduhan model memerlukan koneksi jaringan. Setelah model diunduh, arahkan asisten ke `http://127.0.0.1:11434` dan pilih model lokal tersebut. Model cloud, pencarian web, dan alat yang memanggil layanan jarak jauh tetap memerlukan internet.

## Mengapa AI Offline

Dengan penyiapan ini, model pilihan memproses prompt pada komputer yang menjalankan Ollama. Kecepatan inferensi dan penggunaan memori bergantung pada model serta perangkat keras. Inferensi lokal tidak dikenai biaya API per permintaan.

## Persyaratan

| Ukuran model | RAM minimum | Cocok untuk |
| --- | --- | --- |
| 3B | 4 GB | Bantuan dasar |
| 7B | 8 GB | Pengembangan umum |
| 13B | 16 GB | Penalaran lebih rumit |
| 70B | 64 GB+ | Beban kerja besar |

Gunakan 16 GB RAM atau lebih untuk pengalaman coding yang serbaguna dan sediakan sekitar 10 GB ruang disk bagi model.

## Penyiapan Langkah demi Langkah

### 1. Pasang Ollama

Pada FlyEnv, buka modul **Ollama** lalu klik **Install**. Ollama dipasang sebagai layanan native tanpa kontainer dan tanpa environment Python tambahan.

![Pemasangan Ollama](https://oss.macphpstudy.com/image/ollama-1.webp)

### 2. Jalankan Layanan

Klik **Start** pada modul Ollama. API akan tersedia pada `http://127.0.0.1:11434`.

![Layanan Ollama](https://oss.macphpstudy.com/image/ollama-2.png)

### 3. Unduh Model

Pada tab **Models**, pilih model dan klik **Pull**. Mulailah dengan model 7B untuk mesin 16 GB RAM.

| Model | Kekuatan umum |
| --- | --- |
| DeepSeek-R1 | Pembuatan kode dan penalaran |
| Llama 3.3 | Tugas umum yang seimbang |
| Qwen 2.5 | Multibahasa dan coding |
| Phi-4 | Model riset Microsoft |
| Mixtral | Model mixture-of-experts |

![Pemasangan model](https://oss.macphpstudy.com/image/ollama-3.png)

### 4. Aktifkan Asisten AI

Pada FlyEnv **Settings**, aktifkan **AI Assistant**. Buka ikon asisten di kanan bawah, masuk ke pengaturan, lalu gunakan API URL `http://127.0.0.1:11434` dan pilih model yang sudah dipasang.

![Pengaturan Asisten AI](https://oss.macphpstudy.com/image/ollama-4.png)

Untuk memeriksa inferensi offline, jalankan `curl http://127.0.0.1:11434/api/tags` dan pastikan model yang diunduh tercantum. Putuskan koneksi internet, lalu kirim prompt singkat melalui chat FlyEnv. Pertahankan endpoint dan model lokal yang sama setelah tersambung kembali. Jika memakai klien lain, periksa penyedia dan alat yang digunakannya. [API daftar model Ollama](https://docs.ollama.com/api/tags)

Lihat [demo penyiapan Ollama untuk penggunaan offline](/id/demos?video=offline-ai-agent). Lihat [Ollama di FlyEnv](/id/features/ollama) untuk pengaturan modul dan log layanan.

## Menggunakannya untuk Pengembangan

Gunakan asisten untuk menjelaskan kode, membuat boilerplate, mereview fungsi, atau membantu belajar:

```text
Jelaskan query Laravel Eloquent ini.
Tulis controller NestJS untuk CRUD pengguna.
Review fungsi ini untuk masalah keamanan.
Ajarkan dependency injection pada PHP.
```

Gunakan preset Role seperti Code Reviewer, Teacher, Architect, atau Debugger. Anda juga dapat membuat prompt peran sendiri untuk pola proyek tertentu.

## Optimasi Performa

Pilih ukuran model sesuai tugas: model kecil untuk pertanyaan cepat, model 7B untuk coding sehari-hari, dan model lebih besar untuk review atau arsitektur. Ollama menggunakan akselerasi GPU bila tersedia. Untuk mengelola ruang disk:

```bash
ollama rm llama2:13b
ollama list
```

## Pertanyaan Umum

**T: Apakah benar-benar offline?**

J: Pemasangan Ollama dan pengunduhan model memerlukan koneksi jaringan. Setelah model diunduh, arahkan asisten ke `http://127.0.0.1:11434` dan pilih model lokal tersebut. Model cloud, pencarian web, dan alat yang memanggil layanan jarak jauh tetap memerlukan internet.

**T: Dapatkah model fine-tuned dipakai?**

J: Ollama mendukung model berformat GGUF; simpan pada direktori model Ollama sesuai dokumentasinya.

**T: Mengapa kualitasnya tidak selalu seperti ChatGPT?**

J: Model lokal kecil memiliki parameter lebih sedikit. Model 13B hingga 70B biasanya memberi hasil lebih baik tetapi membutuhkan memori lebih besar.

## Alur Kerja yang Mengutamakan Privasi

Gunakan AI lokal untuk kode proprietary dan pekerjaan klien. Untuk proyek open source, Anda dapat memilih AI lokal atau cloud berdasarkan kebutuhan. Tinjau lisensi model sebelum penggunaan komersial.

## Langkah Berikutnya

- [Bangun otomasi AI dengan n8n dan Ollama](/id/guide/build-local-ai-workflow-by-n8n)
- [Panduan OpenClaw + Ollama](/id/guide/openclaw)
- [Cloudflare Tunnel](/id/guide/cloudflare-tunnel-local-development)
- [Unduh FlyEnv](/id/download)
