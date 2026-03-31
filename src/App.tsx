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
    <div className="min-h-screen bg-gradient-to-br from-neutral via-base-300 to-primary/30 relative overflow-hidden" data-theme="coffee">
      {/* Animated Particle Background */}
      <ParticleBackground />

      {/* Modern Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 z-0"></div>

      {/* Animated Background Blobs */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      {/* Hero Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23bb9576' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v6h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10 py-8 sm:py-12 lg:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header Section with Hero */}
          <div className="hero mb-10 sm:mb-16">
            <div className="hero-content text-center flex-col px-0 py-0">
              {/* Logo/Avatar with Modern Glassmorphism */}
              <div className="relative mb-6 sm:mb-8 group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                <div className="avatar online relative">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-full bg-base-100/80 backdrop-blur-xl shadow-2xl ring-4 ring-primary/30 ring-offset-4 ring-offset-base-300 p-3 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <img src="/image/LOGO HUBS.png" alt="Coffee Hubs Logo" className="w-full h-full object-contain drop-shadow-2xl" />
                  </div>
                </div>
              </div>
              
              {/* Title & Description with Gradient Text */}
              <div className="max-w-2xl space-y-4 sm:space-y-6">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4 sm:mb-6 animate-gradient tracking-tight">
                  Coffee Hubs
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-base-content/80 leading-relaxed mb-6 sm:mb-8 px-4 font-medium">
                  Coffee.Hubs, ruang ngopi yang menghadirkan obrolan hangat dan melahirkan kolaborasi, tempat ide, energi, dan inspirasi bertemu dalam satu visi.
                </p>
                
                {/* Modern Status Badge with Glassmorphism */}
                <div className="inline-flex items-center gap-3 bg-success/20 backdrop-blur-xl border border-success/30 rounded-full px-6 sm:px-8 py-3 sm:py-4 shadow-2xl hover:shadow-success/20 hover:bg-success/30 transition-all duration-300 group">
                  <div className="relative">
                    <div className="w-3 h-3 bg-success rounded-full animate-ping absolute"></div>
                    <div className="w-3 h-3 bg-success rounded-full relative"></div>
                  </div>
                  <span className="text-sm sm:text-base font-bold text-success-content">Buka Setiap Hari: 08:00 - 21:00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section with Glassmorphism */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-16">
            <div className="group bg-base-100/40 backdrop-blur-xl border border-base-content/10 rounded-3xl p-6 sm:p-8 shadow-2xl hover:shadow-primary/20 hover:border-primary/30 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              <div className="text-center space-y-2">
                <div className="text-xs sm:text-sm font-semibold text-base-content/60 uppercase tracking-wider">Rating</div>
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">4.8</div>
                <div className="text-2xl">⭐⭐⭐⭐⭐</div>
                <div className="text-xs sm:text-sm text-base-content/60">Dari Pelanggan Kami</div>
              </div>
            </div>
            
            <div className="group bg-base-100/40 backdrop-blur-xl border border-base-content/10 rounded-3xl p-6 sm:p-8 shadow-2xl hover:shadow-secondary/20 hover:border-secondary/30 transition-all duration-500 hover:scale-105 hover:-translate-y-2" style={{ transitionDelay: '100ms' }}>
              <div className="text-center space-y-2">
                <div className="text-xs sm:text-sm font-semibold text-base-content/60 uppercase tracking-wider">Menu Items</div>
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-br from-secondary to-accent bg-clip-text text-transparent">5+</div>
                <div className="text-xl sm:text-2xl">☕🍰🥪</div>
                <div className="text-xs sm:text-sm text-base-content/60">Pilihan Premium</div>
              </div>
            </div>
            
            <div className="group bg-base-100/40 backdrop-blur-xl border border-base-content/10 rounded-3xl p-6 sm:p-8 shadow-2xl hover:shadow-accent/20 hover:border-accent/30 transition-all duration-500 hover:scale-105 hover:-translate-y-2" style={{ transitionDelay: '200ms' }}>
              <div className="text-center space-y-2">
                <div className="text-xs sm:text-sm font-semibold text-base-content/60 uppercase tracking-wider">Customers</div>
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-br from-accent to-primary bg-clip-text text-transparent">1000+</div>
                <div className="text-xl sm:text-2xl">❤️💯🎉</div>
                <div className="text-xs sm:text-sm text-base-content/60">Pelanggan Setia</div>
              </div>
            </div>
          </div>

          {/* Links Section with Modern Divider */}
          <div className="flex items-center gap-4 mb-8 sm:mb-10">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-base-content/20 to-transparent"></div>
            <div className="flex items-center gap-2 text-base-content/70 font-semibold">
              <Coffee className="w-5 h-5" />
              <span>Akses Cepat</span>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-base-content/20 to-transparent"></div>
          </div>
          
          <div className="space-y-4 sm:space-y-5 mb-10 sm:mb-16">
            {links.map((link, index) => (
              <div 
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'backwards' }}
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

          {/* Footer with Modern Glassmorphism */}
          <footer className="bg-base-100/40 backdrop-blur-xl border border-base-content/10 text-base-content rounded-3xl shadow-2xl p-8 sm:p-12 space-y-8">
            <nav className="flex flex-wrap justify-center gap-6 sm:gap-8">
              <a className="link link-hover text-sm sm:text-base font-medium hover:text-primary transition-colors">Tentang</a>
              <a className="link link-hover text-sm sm:text-base font-medium hover:text-primary transition-colors">Kontak</a>
              <a className="link link-hover text-sm sm:text-base font-medium hover:text-primary transition-colors">Karir</a>
              <a className="link link-hover text-sm sm:text-base font-medium hover:text-primary transition-colors">Promo</a>
            </nav>
            
            <div className="flex justify-center gap-4">
              <a 
                href="https://www.instagram.com/coffee.hubs/" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost btn-circle btn-lg hover:bg-primary/20 hover:scale-110 hover:rotate-12 transition-all duration-300 group"
              >
                <Instagram className="w-6 h-6 group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="https://wa.me/6285962872969" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost btn-circle btn-lg hover:bg-secondary/20 hover:scale-110 hover:rotate-12 transition-all duration-300 group"
              >
                <Phone className="w-6 h-6 group-hover:text-secondary transition-colors" />
              </a>
              <a 
                href="mailto:info@coffeehubs.com"
                className="btn btn-ghost btn-circle btn-lg hover:bg-accent/20 hover:scale-110 hover:rotate-12 transition-all duration-300 group"
              >
                <Mail className="w-6 h-6 group-hover:text-accent transition-colors" />
              </a>
            </div>
            
            <div className="text-center space-y-2 pt-6 border-t border-base-content/10">
              <p className="text-sm sm:text-base font-medium">© 2025 Coffee Hubs. Dibuat dengan ❤️ dan ☕</p>
              <p className="text-xs sm:text-sm opacity-60">Icons by Freepik - Flaticon</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
