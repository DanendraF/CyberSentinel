# Cybersentinel — Analisis Serangan Siber (Colonial Pipeline Case Study)

Ini adalah repository untuk tugas kuliah: membuat hasil analisis serangan siber dalam bentuk website.

Ringkasan:
- Tujuan: Menyajikan hasil analisis kasus Colonial Pipeline secara interaktif.
- Jenis proyek: Frontend React (Vite) dengan endpoint API serverless sederhana untuk demo (folder `api/`).
- Penugasan: Deploy ke hosting gratis (mis. Vercel) dan tunjukkan bahwa ada lapisan "cloud" (serverless API).

File penting:
- `src/` — kode frontend React
- `public/` — aset statis (favicon, logo)
- `api/` — endpoint serverless (mis. `api/members.js`, `api/case-study.js`)
- `scripts/` — utilitas dev (mis. generator favicon)

Menjalankan secara lokal:

1. Install dependensi
```bash
npm install
```
2. Jalankan development server
```bash
npm run dev
```
3. Akses `http://localhost:5173` (atau port yang ditampilkan)

Meng-deploy:
- Saya merekomendasikan **Vercel** untuk frontend + serverless API. Caranya: push repo ke GitHub → Import project di Vercel → Deploy.

API endpoints (contoh):
- `GET /api/members` — daftar anggota kelompok (JSON)
- `GET /api/case-study` — ringkasan case study (JSON)

Catatan tugas:
- Website ini dibuat untuk keperluan tugas kuliah Manajemen Teknologi Informasi.
- © 2024 Analisis Serangan Siber | Colonial Pipeline Case Study

Jika Anda ingin, saya bisa menambahkan instruksi deploy otomatis atau file `README` lebih lengkap berisi link live setelah Anda push ke GitHub dan deploy ke Vercel.
