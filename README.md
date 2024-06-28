# Asisten Tahfidz

## Overview
Asisten Tahfidz adalah sebuah _platfrom_ pendataan tahfidz _online_ yang berbasis _website_. Proyek ini masih prototipe yang belum disempurnakan. Dengan adanya proyek ini, semoga bisa memicu para _developer_ untuk membuat _platform-platform_ serupa yang jauh lebih matang dan sempurna.

Asisten Tahfidz berfokus pada pendataan tahfidz, seperti data santri, halaqoh, ustadz, laporan dan satu fitur tambahan yaitu artikel. Aplikasi ini juga memanfaatkan _role_. tersedia 3 _role_, yaitu (1)Admin, (2)Ustadz, dan (3)Santri. 

## Techstack

Laravel 10, Tailwind, React, Inertia JS, MySQL.

## Preview

Untuk melihat bagaimana tampilan proyek saat ini, silakan clone atau download repository ini lalu lakukan langkah-langkah berikut

```bash
npm install
```
```bash
npm run dev
```
```bash
php artisan migrate
```
```bash
php artisan db:seed --class=UserSeeder
```
```bash
php artisan serve
```
Lalu, login dengan akun:
```
email    = testemail@gmail.com
password = testpassword123
```

## Planned features

- Autentikasi lengkap
- Role Admin, Ustadz, Santri.
- CRUD Santri, Halaqoh, Laporan, Ustadz, Artikel.

## Footer

Made by Muhammad Faqih Ali in Jonggol.