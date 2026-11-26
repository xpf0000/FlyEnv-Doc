---
title: 'Alur AI Lokal dengan n8n dan Ollama'
head:
  - - meta
    - name: description
      content: Bangun otomasi AI privat secara lokal dengan n8n dan Ollama. FlyEnv menyediakan binary native, SSL otomatis, serta Cloudflare Tunnel untuk akses jarak jauh yang aman.
---

# Membangun Alur AI Self-Hosted dengan n8n dan Ollama Tanpa Docker

Jalankan n8n dan Ollama di FlyEnv, lalu kirim permintaan POST lokal yang meneruskan prompt ke model yang telah diunduh dan mengembalikan jawabannya. Anda perlu koneksi untuk memasang kedua layanan dan mengunduh model. Webhook loopback dan inferensi bisa berjalan offline setelah penyiapan.

## Mengapa Self-Hosted

FlyEnv mengelola kedua proses layanan. Anda merakit workflow di n8n dan memilih model di node Ollama. Contoh ini memakai penyimpanan SQLite bawaan n8n dan API Ollama lokal. Node yang memanggil API pihak ketiga tetap perlu internet.

Siapkan FlyEnv terlebih dahulu dan sediakan minimal 8 GB RAM; 16 GB lebih nyaman untuk model yang lebih besar.

## Langkah 1: Pasang dan Jalankan n8n

Pasang versi [Node.js](/id/features/nodejs) yang didukung rilis n8n pilihan Anda dan pastikan `node` serta `npm` bisa dijalankan di terminal.

1. Buka [modul n8n](/id/features/n8n) di FlyEnv dan pilih **Version Manager**.
2. Pasang salah satu versi. FlyEnv menjalankan npm di terminal sehingga Anda bisa memeriksa keluarannya.
3. Jalankan versi yang sudah dipasang melalui modul.

4. Buka `http://127.0.0.1:5678`.

![Modul n8n](https://oss.macphpstudy.com/image/n8n-1.webp)

## Langkah 2: Pasang Ollama dan Model

Pasang dan jalankan Ollama melalui FlyEnv. Unduh model yang sesuai dengan komputer Anda dan pastikan tag model muncul di `http://127.0.0.1:11434/api/tags`. Pilih model lokal tersebut di workflow. [Penyiapan model Ollama](/id/guide/build-local-offline-ai-agent)

![Modul Ollama](https://oss.macphpstudy.com/image/n8n-4.webp)

## Langkah 3: Buat Alur Pertama

1. Pada n8n, klik **Add Workflow**, tambah node **Webhook**, dan atur method `POST`, path `ai-assistant`, serta response **When Last Node Finishes**.
2. Tambah node **Ollama** setelah webhook.
3. Atur Base URL menjadi `http://127.0.0.1:11434`, lalu pilih model yang telah diunduh.
4. Untuk isi pesan, gunakan ekspresi berikut:

```text
{{ $json.query?.q ?? $json.body?.q ?? 'Hello' }}
```

Untuk pengujian di editor, pilih **Listen for Test Event**, lalu salin **Test URL**. Untuk memakai endpoint tetap seperti contoh di bawah, publikasikan workflow atau atur ke **Active** pada versi lama. Salin **Production URL**. Dengan port bawaan dan path contoh, URL-nya `http://127.0.0.1:5678/webhook/ai-assistant`.

```bash
curl -X POST "http://127.0.0.1:5678/webhook/ai-assistant" \
  -H "Content-Type: application/json" \
  -d '{"q": "Explain the benefits of local AI workflows"}'
```

Periksa keluaran model pada respons HTTP, lalu buka **Executions** di n8n untuk memeriksa prosesnya. Jika muncul `404`, periksa URL yang disalin serta status publikasi workflow atau listener uji. Jika node Ollama gagal, pastikan `/api/tags` mencantumkan model pilihan. [URL Webhook n8n](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook/#webhook-urls)

## Langkah 4: Tambahkan HTTPS Lokal

Contoh tadi sudah berjalan melalui loopback. Langkah proxy ini opsional jika Anda ingin alamat HTTPS lokal. Jika n8n menampilkan URL internal setelah dipasang di balik proxy, atur alamat webhook eksternal pada editor environment n8n dan mulai ulang layanan. [Pengaturan reverse proxy n8n](https://docs.n8n.io/hosting/configuration/configuration-examples/webhook-url/)

1. Pada bagian **Site** FlyEnv, klik **Add Site**.
2. Gunakan domain seperti `n8n.test`.
3. Pilih tipe Reverse Proxy dan target `http://127.0.0.1:5678`.
4. Aktifkan **Auto SSL**.

Anda dapat membuka n8n melalui `https://n8n.test` tanpa mengelola sertifikat secara manual.

## Langkah 5: Akses dari Internet dengan Cloudflare Tunnel

Lewati langkah ini untuk penggunaan offline. Cloudflare Tunnel memerlukan internet. Atur autentikasi pada node Webhook sebelum membagikan endpoint. Lindungi editor n8n dengan kontrol akses dan biarkan API Ollama di loopback.

Gunakan modul Cloudflare Tunnel FlyEnv untuk membuat domain publik yang mengarah ke `http://localhost:5678`:

1. Buat Cloudflare API Token dengan izin Tunnel Edit, Zone Read, dan DNS Edit.
2. Tempel token pada modul Cloudflare Tunnel.
3. Pilih domain dan subdomain, misalnya `ai.yourdomain.com`.
4. Masukkan URL lokal dan klik **Start**.

Untuk langkah lebih rinci, baca [panduan Cloudflare Tunnel](/id/guide/cloudflare-tunnel-local-development).

## Ide Alur Kerja

- Analisis percakapan dukungan pelanggan tanpa mengirim data ke API eksternal.
- Bot code review yang dipicu webhook Git dan memakai model coding lokal.
- Pipeline dokumen untuk OCR, rangkuman, klasifikasi, dan penyimpanan lokal.
- Otomasi Home Assistant dengan perintah bahasa alami.

## Video Panduan

<iframe style="width: 100%; aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/YnA1B3qmDJU?si=8trvnWn7JUxDQeLA" title="Alur AI self-hosted n8n dan Ollama" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Lihat [demo workflow n8n dan Ollama](/id/demos?video=n8n-ollama-workflow).

## Pertanyaan Umum

**T: Apakah penggunaan RAM lebih rendah dari Docker?**

J: FlyEnv menjalankan n8n dan Ollama langsung di sistem. Penggunaan RAM bergantung pada model, workflow, basis data, dan konfigurasi Docker.

**T: Dapatkah alur bekerja sepenuhnya offline?**

J: Webhook lokal dan model Ollama yang sudah diunduh dapat berjalan offline setelah pemasangan. Cloudflare Tunnel dan node yang memanggil layanan jarak jauh masih membutuhkan internet.

**T: Dapatkah beberapa model dipakai dalam satu alur?**

J: Ya. n8n mendukung percabangan dan logika kondisional untuk memilih model berdasarkan jenis tugas.

## Langkah Berikutnya

- [Bangun agen AI offline lokal](/id/guide/build-local-offline-ai-agent)
- [Mengekspos localhost dengan Cloudflare Tunnel](/id/guide/cloudflare-tunnel-local-development)
- [Unduh FlyEnv](/id/download)
