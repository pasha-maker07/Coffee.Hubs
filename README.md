# ☕ Kopi Modern - Coffee Hub

Website modern untuk coffee shop dengan desain responsive menggunakan React.js dan DaisyUI.

## 🚀 Fitur

- ✨ Desain modern dan responsive
- 🎨 DaisyUI components dengan tema kustom
- 📱 Mobile-first design
- ⚡ Build dengan Vite untuk performa optimal
- 🌐 Siap deploy ke Netlify

## 🛠️ Teknologi

- **React 18** - Library UI
- **TypeScript** - Type safety
- **Vite** - Build tool modern dan cepat
- **DaisyUI** - Component library berbasis Tailwind CSS
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library

## 📦 Instalasi

```bash
# Install dependencies
npm install

# Jalankan development server
npm run dev

# Build untuk production
npm run build

# Preview build
npm run preview
```

## 🌐 Deploy ke Netlify

### Cara 1: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login ke Netlify
netlify login

# Deploy
netlify deploy --prod
```

### Cara 2: Netlify Web Interface

1. Push kode ke GitHub repository
2. Buka [Netlify](https://netlify.com)
3. Klik "Add new site" → "Import an existing project"
4. Pilih repository GitHub Anda
5. Build settings sudah dikonfigurasi otomatis:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Klik "Deploy site"

### Cara 3: Drag & Drop

```bash
# Build project
npm run build

# Drag folder 'dist' ke Netlify dashboard
```

## 📁 Struktur Project

```
Coffee.Hubs/
├── src/
│   ├── components/
│   │   └── CoffeeLink.tsx    # Komponen link dengan DaisyUI
│   ├── App.tsx                # Main app component
│   ├── main.tsx               # Entry point
│   └── index.css              # Global styles & Tailwind
├── public/
│   └── _redirects             # Netlify redirects untuk SPA
├── index.html                 # HTML template
├── tailwind.config.js         # Tailwind & DaisyUI config
├── netlify.toml               # Netlify configuration
├── package.json               # Dependencies
└── vite.config.ts             # Vite configuration
```

## 🎨 Kustomisasi Tema

Edit tema coffee di `tailwind.config.js`:

```javascript
daisyui: {
  themes: [
    {
      coffee: {
        "primary": "#bb9576",     // Warna utama
        "secondary": "#8b6f47",   // Warna sekunder
        "accent": "#d4c5b3",      // Warna accent
        // ... tema lainnya
      },
    },
  ],
}
```

## 📱 Responsive Design

Website ini dioptimalkan untuk berbagai ukuran layar:
- 📱 Mobile: 320px - 640px
- 📱 Tablet: 641px - 1024px
- 💻 Desktop: 1025px+

## 🔗 Link & Navigasi

Untuk mengubah link di homepage, edit array `links` di `src/App.tsx`:

```typescript
const links = [
  {
    title: 'Judul Link',
    description: 'Deskripsi link',
    icon: <IconName className="w-6 h-6" />,
    url: 'https://your-url.com',
  },
  // ... link lainnya
];
```

## 🌟 Components DaisyUI yang Digunakan

- **Card** - Untuk link cards
- **Avatar** - Untuk logo dan icons
- **Badge** - Untuk status badge
- **Stats** - Untuk menampilkan statistik
- **Footer** - Footer dengan social links
- **Hero** - Header section
- **Divider** - Section dividers

## 📝 Lisensi

© 2025 Kopi Modern. All rights reserved.

---

Dibuat dengan ❤️ dan ☕ by Kopi Modern Team
  