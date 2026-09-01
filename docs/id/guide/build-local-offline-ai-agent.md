---
title: 'Membangun Agen AI Offline yang Mengutamakan Privasi (Qwen, DeepSeek, Llama)'
head:
  - - meta
    - name: description
      content: Jalankan model AI secara lokal tanpa API cloud dan kekhawatiran privasi data. Siapkan Ollama bersama FlyEnv untuk bantuan coding offline dengan model Qwen, DeepSeek, dan Llama.
---

# Membangun Agen AI Offline yang Mengutamakan Privasi (Qwen, DeepSeek, Llama)

Kode yang dikirim ke layanan AI cloud meninggalkan komputer Anda. Untuk basis kode proprietary, aplikasi kesehatan, atau sistem keuangan, hal ini dapat menjadi risiko. Dengan Ollama dan FlyEnv, model bahasa dapat berjalan sepenuhnya secara lokal tanpa penyiapan machine learning yang rumit.

## Mengapa AI Offline

| Aspek | AI cloud | AI lokal dengan Ollama |
| --- | --- | --- |
| Privasi data | Dikirim ke pihak ketiga | Tetap di mesin Anda |
| Internet | Diperlukan | Tidak diperlukan setelah model diunduh |
| Biaya | Biaya langganan atau token | Tanpa biaya API |
| Kendali model | Terbatas | Pilih dan kelola model sendiri |

Asisten lokal dapat menjawab pertanyaan coding, menjelaskan fungsi, membuat contoh kode, dan mereview perubahan tanpa mengirim isi proyek ke cloud.

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

J: Ya. Setelah model diunduh, pemrosesan tidak membutuhkan internet dan data tidak meninggalkan komputer Anda.

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
