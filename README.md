# Ekstra Pacet — Demo Manajemen Ekstrakurikuler

Aplikasi PHP/MySQL server-rendered untuk demo website dan portal pengelolaan ekstrakurikuler SMAN 1 Pacet. `index.php` adalah web root sehingga dapat langsung ditempatkan pada `public_html` hosting PHP biasa.

## Requirements

- PHP 8.1+ dengan `pdo_mysql`, `mbstring`, dan `fileinfo`
- MySQL 8.0+ / MariaDB 10.5+
- Web server dengan `mod_rewrite`/fallback routing (untuk URL bersih). Jika belum ada rewrite, gunakan `/index.php` lalu sesuaikan virtual host.

## Installation

1. Salin `.env.example` ke `.env`, lalu isi kredensial database.
2. Buat database UTF-8: `CREATE DATABASE ekstra_demo CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;`
3. Import berurutan: `mysql -u USER -p ekstra_demo < database/schema.sql` lalu `mysql -u USER -p ekstra_demo < database/seed.sql`.
4. Arahkan document root hosting ke folder repository (yang memuat `index.php`), atau unggah semua file tersebut ke `public_html`.
5. Pastikan `uploads/` writable bila fitur unggah dokumen akan diaktifkan. Buka domain Anda.

Untuk server Apache, konfigurasi rewrite ke `index.php` untuk URL seperti `/ekstrakurikuler/ambalan`. Pada PHP built-in server: `php -S localhost:8000 index.php`.

## Demo accounts

**Kredensial ini hanya untuk demo/pengembangan dan wajib diubah atau dihapus sebelum produksi.** Password database hanya disimpan sebagai hash `password_hash`, bukan plaintext.

| Role | Username | Password |
|---|---|---|
| Siswa | `demo.siswa` | `DemoSiswa123!` |
| Inti | `demo.inti` | `DemoInti123!` |
| Pembina | `demo.pembina` | `DemoPembina123!` |
| Pelatih | `demo.pelatih` | `DemoPelatih123!` |
| Wakasek | `demo.wakasek` | `DemoWakasek123!` |
| Kepala Sekolah | `demo.kepsek` | `DemoKepsek123!` |
| Admin | `demo.admin` | `DemoAdmin123!` |

## Included demo flows

- Public home, directory, and one reusable page for each of 27 seeded extracurriculars.
- Role-based login, protected routes, CSRF forms, PDO prepared statements, output escaping, and audit login events.
- Multi-membership student view; scoped staff/Inti activity, attendance-token, journal, and finance creation.
- E-proposal workflow: Inti submit → Wakasek revision/reject/forward → Kepala Sekolah final decision. Versions/reviews are relational and retained.
- Wakasek monitoring and admin user list.

## Prototype / NEEDS CONFIRMATION

PDF review is a working notes/page-reference review interface, not full visual PDF drawing. Upload UI, full editing/correction screens, reporting charts, and final Activity Score policy require official school rules and are intentionally marked as configurable demo foundations.
