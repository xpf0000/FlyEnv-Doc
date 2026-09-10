---
title: 'Ruang Kerja Coding AI Lokal dengan MCP'
head:
  - - meta
    - name: description
      content: Bangun ruang kerja coding AI lokal dengan FlyEnv. Kelola runtime, layanan, Claude Code, Codex, serta FlyEnv MCP Server dalam satu alur kerja native.
---

# Membangun Ruang Kerja Coding AI Lokal dengan MCP untuk Claude Code, Codex, dan Lainnya

Claude Code, Codex, dan klien coding AI lain dapat membaca repositori, tetapi proyek nyata juga membutuhkan versi runtime, layanan lokal, URL situs, log, dan konfigurasi yang dikelola. FlyEnv menyatukan bagian tersebut dalam satu alur kerja lokal native: mengelola stack, menjalankan CLI AI, dan membuka lingkungan yang sama lewat **FlyEnv MCP Server**.

## Mengapa Klien AI Membutuhkan Lingkungan Lokal Nyata

AI lebih berguna bila bekerja dengan konteks yang sama seperti Anda:

- versi PHP, Node.js, atau Python yang aktif
- status MySQL, Redis, serta layanan web
- URL situs lokal, konfigurasi, berkas terkelola, dan log
- cara terstruktur dan aman untuk memeriksa atau menjalankan tindakan

| Kebutuhan AI | Penyiapan shell biasa | Tambahan dari FlyEnv |
| --- | --- | --- |
| Versi runtime benar | Pergantian manual | Runtime per proyek |
| Layanan berjalan | Mulai satu per satu | Pengelolaan dalam aplikasi yang sama |
| Situs, konfigurasi, log | Tersebar di terminal dan berkas | Akses MCP terstruktur |
| Kontrol mesin aman | Terlalu banyak atau tidak ada akses shell | Sakelar alat, persetujuan, dan audit log |

## Menyiapkan Alur MCP FlyEnv

### 1. Kelola CLI Coding AI dalam Satu Ruang Kerja

FlyEnv menyediakan modul untuk Claude Code, Codex, OpenCode, Kimi Code CLI, GitHub Copilot CLI, dan Antigravity CLI. Runtime proyek dan klien AI tidak lagi memerlukan installer serta profil shell terpisah.

### 2. Jalankan FlyEnv MCP Server

Buka panel **MCP Server** lalu atur Host, Port, Token, Auto Start, akses jarak jauh, Enabled Tools, dan kebijakan persetujuan. Untuk pengembangan lokal, gunakan `127.0.0.1`, aktifkan bearer token, nyalakan hanya alat yang dibutuhkan, dan periksa audit log.

### 3. Hubungkan Klien AI

FlyEnv dapat membuat potongan konfigurasi HTTP MCP secara langsung untuk Claude Code, Codex, OpenCode, Kimi, GitHub Copilot CLI, dan Antigravity CLI.

Contoh konfigurasi Claude Code:

```json
{
  "mcpServers": {
    "flyenv": {
      "type": "http",
      "url": "http://127.0.0.1:7682",
      "headers": {
        "Authorization": "Bearer <your-token>"
      }
    }
  }
}
```

Contoh konfigurasi Codex:

```toml
[features]
rmcp_client = true

[mcp_servers.flyenv]
url = "http://127.0.0.1:7682"

[mcp_servers.flyenv.http_headers]
Authorization = "Bearer <your-token>"
```

Untuk klien desktop yang memakai stdio, gunakan bridge yang dibuat FlyEnv:

```json
{
  "mcpServers": {
    "flyenv": {
      "command": "node",
      "args": ["<FlyEnv>/mcp/flyenv-mcp-stdio.mjs"],
      "env": {
        "FLYENV_MCP_URL": "http://127.0.0.1:7682",
        "FLYENV_MCP_TOKEN": "<your-token>"
      }
    }
  }
}
```

### 4. Tentukan Akses yang Diizinkan untuk AI

Alat baca dapat mencantumkan layanan dan versi terpasang, memeriksa status layanan, melihat situs lokal, menemukan konfigurasi dan log, serta membaca detail koneksi basis data atau cache. Tindakan seperti menyalakan layanan, mengubah situs, menghapus situs, atau memasang versi memiliki dampak lebih besar.

Gunakan sakelar alat, mode persetujuan, dan audit log untuk menjaga agen tetap berguna tanpa memberi kontrol tanpa batas.

### 5. Jalankan Alur Kerja Praktis

1. Buka proyek pada FlyEnv.
2. Biarkan FlyEnv memuat runtime yang tepat.
3. Nyalakan layanan yang diperlukan.
4. Jalankan atau konfigurasikan CLI AI.
5. Nyalakan MCP Server.
6. Tambahkan konfigurasi MCP yang dibuat FlyEnv ke klien AI.
7. Biarkan AI memeriksa layanan, situs, konfigurasi, dan log lokal yang sama.

## Video Demo

<iframe style="width: 100%; aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/frprHkD1_rQ" title="Demo FlyEnv AI CLI dan MCP" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Catatan Keamanan

- Biarkan MCP mendengar pada `127.0.0.1`.
- Aktifkan token autentikasi.
- Aktifkan hanya alat yang diperlukan.
- Gunakan persetujuan untuk tindakan berisiko.
- Aktifkan akses jarak jauh hanya jika Anda memahami paparan jaringan yang ditimbulkan.

## Pertanyaan Umum

**T: Dapatkah FlyEnv menjadi alternatif Docker untuk coding AI lokal?**

J: Dalam banyak alur lokal, FlyEnv mengelola runtime native, layanan, situs, dan akses MCP tanpa penyiapan yang mengutamakan kontainer.

**T: Klien mana yang dapat terhubung?**

J: FlyEnv dapat membuat konfigurasi HTTP untuk CLI AI populer dan konfigurasi stdio untuk klien seperti Cursor, Cline, Windsurf, serta Claude Desktop.

**T: Dapatkah akses agen dibatasi?**

J: Ya. Gunakan pengaktifan alat per alat, mode persetujuan, dan audit log.

## Langkah Berikutnya

- [Unduh FlyEnv](/id/download)
- [Alur kerja asisten coding AI](/id/guide/flyenv-work-with-ai)
- [Bangun agen AI offline lokal](/id/guide/build-local-offline-ai-agent)
- [Alur AI self-hosted dengan n8n](/id/guide/build-local-ai-workflow-by-n8n)
