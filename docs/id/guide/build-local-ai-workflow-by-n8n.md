---
title: 'Alur AI Lokal dengan n8n dan Ollama'
head:
  - - meta
    - name: description
      content: Bangun otomasi AI privat secara lokal dengan n8n dan Ollama. FlyEnv menyediakan binary native, SSL otomatis, serta Cloudflare Tunnel untuk akses jarak jauh yang aman.
---

# Membangun Alur AI Self-Hosted dengan n8n dan Ollama Tanpa Docker

n8n adalah alternatif otomasi open-source untuk Zapier, sedangkan Ollama menjalankan LLM secara lokal. Dengan FlyEnv, keduanya dapat dijalankan sebagai layanan native tanpa kontainer, sehingga data, biaya, dan alur kerja tetap berada di bawah kendali Anda.

## Mengapa Self-Hosted

| Alat otomasi cloud | n8n dan Ollama pada FlyEnv |
| --- | --- |
| Biaya langganan bulanan | Penyiapan lokal tanpa biaya per penggunaan |
| Data ke server pihak ketiga | Data diproses lokal |
| Kustomisasi terbatas | Alur kerja dan model dikendalikan sendiri |
| Bergantung pada internet | Dapat berjalan offline setelah model diunduh |

Siapkan FlyEnv terlebih dahulu dan sediakan minimal 8 GB RAM; 16 GB lebih nyaman untuk model yang lebih besar.

## Langkah 1: Pasang dan Jalankan n8n

1. Pada FlyEnv, buka bagian **Tools**.
2. Temukan **n8n**, klik **Install**, lalu klik **Start**.
3. Buka antarmuka pada `http://localhost:5678`.

![Modul n8n](https://oss.macphpstudy.com/image/n8n-1.webp)

FlyEnv mengelola runtime Node.js yang dipakai n8n, sehingga Anda tidak perlu memasang paket npm global atau menyelesaikan konflik versi.

## Langkah 2: Pasang Ollama dan Model

Pada bagian AI Tools, pasang serta jalankan **Ollama**, lalu unduh model yang sesuai. Qwen, Kimi, Gemma, Llama, dan DeepSeek Coder adalah pilihan umum; pilih model berdasarkan memori dan jenis tugas.

![Modul Ollama](https://oss.macphpstudy.com/image/n8n-4.webp)

## Langkah 3: Buat Alur Pertama

1. Pada n8n, klik **Add Workflow**, tambah node **Webhook**, dan atur method `POST`, path `ai-assistant`, serta response **When Last Node Finishes**.
2. Tambah node **Ollama** setelah webhook.
3. Atur Base URL menjadi `http://localhost:11434`, lalu pilih model yang telah diunduh.
4. Untuk isi pesan, gunakan ekspresi berikut:

```text
{{ $json.query?.q ?? $json.body?.q ?? 'Hello' }}
```

Simpan, aktifkan alur kerja, lalu uji:

```bash
curl -X POST "http://localhost:5678/webhook/ai-assistant" \
  -H "Content-Type: application/json" \
  -d '{"q": "Explain the benefits of local AI workflows"}'
```

Respons harus berasal dari model lokal Anda.

## Langkah 4: Tambahkan HTTPS Lokal

1. Pada bagian **Site** FlyEnv, klik **Add Site**.
2. Gunakan domain seperti `n8n.test`.
3. Pilih tipe Reverse Proxy dan target `http://127.0.0.1:5678`.
4. Aktifkan **Auto SSL**.

Anda dapat membuka n8n melalui `https://n8n.test` tanpa mengelola sertifikat secara manual.

## Langkah 5: Akses dari Internet dengan Cloudflare Tunnel

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

## Pertanyaan Umum

**T: Apakah penggunaan RAM lebih rendah dari Docker?**

J: Ya. FlyEnv menjalankan n8n dan Ollama sebagai binary native dan menghindari overhead VM Docker Desktop.

**T: Dapatkah alur bekerja sepenuhnya offline?**

J: Ya, setelah n8n dan model Ollama terpasang. Cloudflare Tunnel tentu memerlukan internet karena menyediakan akses publik.

**T: Dapatkah beberapa model dipakai dalam satu alur?**

J: Ya. n8n mendukung percabangan dan logika kondisional untuk memilih model berdasarkan jenis tugas.

## Langkah Berikutnya

- [Bangun agen AI offline lokal](/id/guide/build-local-offline-ai-agent)
- [Mengekspos localhost dengan Cloudflare Tunnel](/id/guide/cloudflare-tunnel-local-development)
- [Unduh FlyEnv](/id/download)
