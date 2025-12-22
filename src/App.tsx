import { useState } from 'react';
import { CoffeeLink } from './components/CoffeeLink';
import { ParticleBackground } from './components/ParticleBackground';
import { ComingSoonPage } from './components/ComingSoonPage';
import MenuList from './components/MenuList';
import { Instagram, MapPin, Clock, Menu, Phone, Mail, Coffee } from 'lucide-react';

export default function App() {
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const links = [
    {
      title: 'Lihat Menu Kami',
      description: 'Jelajahi berbagai pilihan kopi dan makanan',
      icon: <img src="/icons/soft-drink.png" alt="Fast Food Menu" className="w-6 h-6 object-contain" />,
      onClick: () => setShowMenu(true),
    },
    {
      title: 'Lokasi & Jam Operasional',
      description: 'Temukan kami dan waktu kunjungan',
      icon: <img src="/icons/maps-and-flags.png" alt="Map Location" className="w-6 h-6 object-contain" />,
      url: 'https://share.google/xMduyLx2axptAfC7z',
    },
    {
      title: 'Instagram',
      description: '@Coffee.Hubs - Ikuti perjalanan kopi kami',
      icon: <img src="/icons/instagram (2).png" alt="Instagram" className="w-6 h-6 object-contain" />,
      url: 'https://www.instagram.com/coffee.hubs/',
    },
    {
      title: 'Hubungi Kami',
      description: 'Pertanyaan atau catering khusus',
      icon: <img src="/icons/whatsapp.png" alt="WhatsApp" className="w-6 h-6 object-contain" />,
      url: 'https://wa.me/6281380845684',
    },
  ];

  // Show Menu List when user clicks "Lihat Menu Kami"
  if (showMenu) {
    return (
      <div className="relative">
        <button 
          onClick={() => setShowMenu(false)}
          className="absolute top-4 left-4 z-50 btn btn-circle btn-ghost"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <MenuList />
      </div>
    );
  }

  // Show Coming Soon page when needed
  if (showComingSoon) {
    return <ComingSoonPage onBack={() => setShowComingSoon(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 via-base-200 to-accent/20" data-theme="coffee">
      {/* Animated Particle Background */}
      <ParticleBackground />

      {/* Hero Background Pattern */}
      <div className="absolute inset-0 opacity-5 z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23bb9576' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v6h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10 py-8 sm:py-12 lg:py-16 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header Section with Hero */}
          <div className="hero mb-8 sm:mb-12">
            <div className="hero-content text-center flex-col px-0 py-0">
              {/* Logo/Avatar - DaisyUI Avatar with Indicator */}
              <div className="avatar online mb-4 sm:mb-6">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white shadow-2xl ring ring-primary ring-offset-base-100 ring-offset-4 p-2">
                  <img src="/image/LOGO HUBS.png" alt="Coffee Hubs Logo" className="w-full h-full object-contain" />
                </div>
              </div>
              
              {/* Title & Description */}
              <div className="max-w-md">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral mb-3 sm:mb-4">
                  Coffee Hubs
                </h1>
                <p className="text-base sm:text-lg text-neutral/70 mb-4 sm:mb-6">
                Coffee.Hubs, ruang ngopi yang menghadirkan obrolan hangat dan melahirkan kolaborasi, tempat ide, energi, dan inspirasi bertemu dalam satu visi.
                </p>
                
                {/* Status Badge - DaisyUI Badge */}
                <div className="badge badge-lg badge-success gap-2 px-4 sm:px-6 py-4 shadow-lg">
                  <div className="w-2 h-2 bg-base-100 rounded-full animate-pulse"></div>
                  <span className="text-xs sm:text-sm font-medium">Buka Setiap: 08:00 - 21:00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section - DaisyUI Stats */}
          <div className="stats stats-vertical sm:stats-horizontal shadow-xl w-full mb-8 sm:mb-12 bg-base-100">
            <div className="stat place-items-center">
              <div className="stat-title text-neutral/60">Rating</div>
              <div className="stat-value text-primary text-3xl sm:text-4xl">4.8</div>
              <div className="stat-desc">⭐⭐⭐⭐⭐</div>
            </div>
            
            <div className="stat place-items-center">
              <div className="stat-title text-neutral/60">Menu Items</div>
              <div className="stat-value text-secondary text-3xl sm:text-4xl">5+</div>
              <div className="stat-desc">Pilihan Kopi & Makanan</div>
            </div>
            
            <div className="stat place-items-center">
              <div className="stat-title text-neutral/60">Customers</div>
              <div className="stat-value text-accent text-3xl sm:text-4xl">1000</div>
              <div className="stat-desc">Pelanggan Setia</div>
            </div>
          </div>

          {/* Links Section with Divider */}
          <div className="divider text-neutral/60 text-sm sm:text-base">
            <Coffee className="w-5 h-5 inline-block" /> Akses Cepat
          </div>
          
          <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-12">
            {links.map((link, index) => (
              <div 
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s`, animationFillMode: 'backwards' }}
              >
                <CoffeeLink
                  title={link.title}
                  description={link.description}
                  icon={link.icon}
                  url={'url' in link ? link.url : undefined}
                  onClick={'onClick' in link ? link.onClick : undefined}
                />
              </div>
            ))}
          </div>

          {/* Footer with Social Links */}
          <footer className="footer footer-center p-6 sm:p-10 bg-base-100 text-base-content rounded-box shadow-xl">
            <nav className="grid grid-flow-col gap-4">
              <a className="link link-hover text-sm sm:text-base">Tentang</a>
              <a className="link link-hover text-sm sm:text-base">Kontak</a>
              <a className="link link-hover text-sm sm:text-base">Karir</a>
              <a className="link link-hover text-sm sm:text-base">Promo</a>
            </nav> 
            <nav>
              <div className="grid grid-flow-col gap-4">
                <a href="#" className="btn btn-ghost btn-circle">
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a href="#" className="btn btn-ghost btn-circle">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a href="#" className="btn btn-ghost btn-circle">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              </div>
            </nav> 
            <aside>
              <p className="text-sm sm:text-base">© 2025 Coffee Hubs. Dibuat dengan ❤️ dan ☕</p>
              <p className="text-xs sm:text-sm opacity-70">Icons by Freepik - Flaticon</p>
            </aside>
          </footer>
        </div>
      </div>
    </div>
  );
}
