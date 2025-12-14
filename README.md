# TaskFlow - Aplikasi To-Do List

Aplikasi manajemen tugas berbasis web yang dibuat dengan React, Tailwind CSS, dan LocalStorage.

## Deskripsi

TaskFlow adalah aplikasi to-do list sederhana yang membantu pengguna mengorganisir tugas harian, meningkatkan produktivitas, dan mencapai tujuan. Aplikasi ini saya dibuat sebagai project Ujian Praktikum PWeb.

## Fitur

- ✅ **CRUD Lengkap**: Create, Read, Update, Delete tugas
- ✅ **Toggle Status**: Tandai tugas selesai/belum selesai dengan checkbox
- ✅ **Edit Tugas**: Edit nama tugas secara inline
- ✅ **Filter Tugas**: Filter berdasarkan status (Semua, Aktif, Selesai)
- ✅ **Statistik Real-time**: Lihat total tugas, selesai, dan belum selesai
- ✅ **LocalStorage**: Data tersimpan meskipun browser ditutup
- ✅ **Responsive Design**: Tampilan optimal di berbagai ukuran layar
- ✅ **Landing Page**: Halaman informasi sebelum masuk ke dashboard

## Yang Digunakan

- **React 18+** - Library JavaScript untuk membangun UI.
- **Tailwind CSS 3.4** - Framework CSS.
- **Lucide React** - Icon library.
- **LocalStorage API** - Penyimpanan data lokal.
- **Vite** - Build tool yang cepat.

## Cara Menjalankan Project

### Prerequisites

Menginstall:
- Node.js (v16 atau lebih baru)
- npm atau yarn

### Instalasi
```bash
# 1. Clone repository
git clone https://github.com/yuuddp/taskflow-app.git

# 2. Masuk ke folder project
cd taskflow-app

# 3. Install dependencies
npm install

# 4. Jalankan development server
npm run dev
```

Aplikasi akan berjalan di `http://localhost:5173/`

### Build untuk Production
```bash
npm run build
```

File hasil build akan tersimpan.

## Implementasi CRUD

### Create (Tambah Tugas)
- Input field untuk menulis tugas baru.
- Tombol "Tambah" atau tekan Enter untuk menyimpan.

### Read (Lihat Tugas)
- Menampilkan semua tugas.
- Filter berdasarkan status (Semua/Aktif/Selesai).
- Statistik di bagian atas dashboard.

### Update (Edit Tugas)
- Toggle status selesai dengan checkbox.
- Edit teks tugas dengan klik icon pensil.
- Simpan perubahan dengan klik icon centang.

### Delete (Hapus Tugas)
- Hapus tugas dengan klik icon tempat sampah.
- Tugas langsung terhapus dari daftar.

## Storage

Aplikasi menggunakan **LocalStorage** untuk menyimpan data:
- Data tersimpan di browser pengguna.
- Otomatis load saat aplikasi dibuka.
- Otomatis save setiap ada perubahan.
- Data tetap ada meskipun browser ditutup.

## Developer

**Yudha Pratama Lemi Syahputra Pasaribu**  
NPM: 51423486  
Praktikum Pemrograman Web - Semester 5

## Lisensi

Project ini dibuat untuk keperluan pembelajaran dan ujian praktikum.

---

**Jangan lupa beri ⭐ jika project ini bermanfaat!**
