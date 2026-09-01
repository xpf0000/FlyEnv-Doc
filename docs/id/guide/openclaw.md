---
title: 'Panduan OpenClaw + Ollama: Membangun Agen AI Self-Hosted Tanpa Biaya API'
head:
  - - meta
    - name: description
      content: Siapkan OpenClaw dengan Ollama untuk membuat agen AI self-hosted yang terhubung ke WhatsApp, Telegram, dan Discord. Jalankan pada perangkat sendiri dengan FlyEnv dan kontrol aksesnya dengan hati-hati.
---

# Panduan OpenClaw + Ollama: Membangun Agen AI Self-Hosted Tanpa Biaya API

OpenClaw adalah gateway AI open-source yang menghubungkan aplikasi pesan dengan agen yang dapat melakukan tindakan nyata: membaca dan menulis berkas, menjalankan perintah, mengirim pesan, dan memanggil HTTP API. Dipadukan dengan Ollama, pemrosesan model dapat dilakukan secara lokal tanpa biaya token cloud.

Karena OpenClaw dapat mengakses mesin Anda, ikuti langkah keamanan pada halaman ini sebelum menghubungkannya ke aplikasi pesan.

## Yang Akan Dibangun

- Gateway agen self-hosted di komputer Anda.
- Integrasi WhatsApp, Telegram, Discord, iMessage, atau layanan lain yang didukung.
- Pemrosesan model lokal melalui Ollama.
- Agen yang dapat mengotomatiskan berkas, perintah, dan tugas terpilih.

![Dasbor OpenClaw](https://oss.macphpstudy.com/image/openclaw-1.webp)

## Perbandingan Singkat

| Kemampuan | ChatGPT | OpenClaw + Ollama |
| --- | --- | --- |
| Eksekusi tindakan | Respons teks | Berkas, perintah, dan pesan |
| Integrasi pesan | Tidak | WhatsApp, Telegram, Discord, dan lainnya |
| Privasi data | Diproses cloud | Dapat diproses lokal |
| Biaya API | Berdasarkan penggunaan | Tidak ada setelah penyiapan lokal |

## Prasyarat

- FlyEnv ([unduh](/id/download)).
- Minimum 8 GB RAM; 16 GB direkomendasikan untuk model lebih besar.
- Sekitar 10 GB ruang disk untuk model.
- Akun aplikasi pesan yang akan dihubungkan.

## Langkah 1: Pasang Node.js 24

OpenClaw memerlukan Node.js 24, atau Node.js 22 LTS `22.16+` untuk kompatibilitas. Pada modul Node.js FlyEnv, pilih Node.js 24, klik **Install**, lalu jadikan versi aktif.

![Pemasangan Node.js](https://oss.macphpstudy.com/image/openclaw-2.webp)

## Langkah 2: Pasang Ollama dan Model

Pasang serta jalankan **Ollama** dari Library/Tools FlyEnv. Pilih model berdasarkan perangkat Anda:

| Perangkat | Model awal |
| --- | --- |
| 8-16 GB RAM | `qwen2.5-coder:7b`, `llama3.2`, atau `deepseek-r1:7b` |
| 16 GB+ atau GPU | `qwen2.5-coder:32b`, `gpt-oss:20b`, atau `glm-4.7-flash` |

Untuk pengujian, `qwen2.5-coder:7b` adalah pilihan awal yang ringan dan cukup baik.

## Langkah 3: Pasang dan Konfigurasikan OpenClaw

Pada Library FlyEnv, temukan **OpenClaw**, klik **Install**, kemudian **Start**. Gateway lokal membuka Control UI pada `http://127.0.0.1:18789/`.

Pada wizard awal, pilih Quick Start, pilih provider **Ollama** atau Local/Self-Hosted, isi endpoint `http://localhost:11434`, lalu pilih model yang telah diunduh.

Konfigurasi tersimpan di `~/.openclaw/openclaw.json`. Pastikan provider Ollama memakai `http://127.0.0.1:11434` dan model yang tepat.

## Langkah 4: Hubungkan Aplikasi Pesan

**WhatsApp:**

```bash
openclaw configure --section channels
```

Pilih WhatsApp dan pindai kode QR. Untuk Telegram, buat bot melalui [@BotFather](https://t.me/botfather) lalu masukkan token. Untuk Discord, buat aplikasi dan bot lalu tambahkan tokennya ke OpenClaw.

Batasi siapa yang dapat berbicara dengan agen:

```json
{
  "channels": {
    "whatsapp": {
      "allowFrom": ["+15555550123"],
      "groups": { "*": { "requireMention": true } }
    }
  },
  "messages": {
    "groupChat": { "mentionPatterns": ["@openclaw"] }
  }
}
```

## Langkah 5: Uji Agen

Kirim perintah yang terbatas dan mudah diverifikasi, seperti membaca berkas, membuat skrip Fibonacci, atau menampilkan daftar berkas. Anda juga dapat memakai TUI:

```bash
openclaw
```

## Pemecahan Masalah

| Masalah | Tindakan |
| --- | --- |
| Model lambat atau crash | Gunakan model/quantization lebih kecil |
| Tool call gagal | Coba set `"reasoning": false` untuk model lokal tertentu |
| Tidak tersambung ke Ollama | Periksa `curl http://localhost:11434/api/tags` |
| Pesan tidak masuk | Periksa konfigurasi channel dan izin bot |

## Praktik Keamanan

1. Jalankan pada lingkungan terisolasi bila memungkinkan.
2. Pakai allowlist `allowFrom`.
3. Periksa skill pihak ketiga sebelum diaktifkan.
4. Wajibkan mention pada grup untuk mencegah pemicu tidak sengaja.
5. Audit izin sistem berkas dan tindakan agen secara berkala.

OpenClaw bersifat eksperimental dan kuat. Gunakan hanya pada skenario yang Anda pahami dan kontrol.

## Video Panduan

<iframe style="width: 100%; aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/j7_B-VzIyEU?si=20WeZTZMPIAYcXpJ" title="Penyiapan OpenClaw dan Ollama" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Langkah Berikutnya

- [Pengujian email lokal dengan Mailpit](/id/guide/local-email-testing-mailpit)
- [Mengekspos localhost dengan Cloudflare Tunnel](/id/guide/cloudflare-tunnel-local-development)
- [Agen AI offline lokal](/id/guide/build-local-offline-ai-agent)
- [Unduh FlyEnv](/id/download)
