import React, { useState } from 'react';
import { ParticleBackground } from './ParticleBackground';

interface MenuItem {
  id: number;
  title: string;
  description: string;
  image: string;
  price: string;
  badge?: string;
  category: string[];
  isNew?: boolean;
}

const MenuList: React.FC = () => {
  const [menuItems] = useState<MenuItem[]>([
    {
      id: 1,
      title: 'Espresso',
      description: 'Kopi murni dengan rasa yang kuat dan pekat, sempurna untuk memulai hari',
      image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400',
      price: 'Rp 15.000',
      badge: 'BEST SELLER',
      category: ['Coffee', 'Hot'],
      isNew: false
    },
    {
      id: 2,
      title: 'Cappuccino',
      description: 'Perpaduan sempurna espresso, susu, dan foam lembut dengan taburan cokelat',
      image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400',
      price: 'Rp 25.000',
      category: ['Coffee', 'Hot'],
      isNew: false
    },
    {
      id: 3,
      title: 'Caffe Latte',
      description: 'Espresso dengan susu steamed yang creamy, cocok untuk pecinta kopi yang lembut',
      image: 'https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=400',
      price: 'Rp 28.000',
      badge: 'POPULAR',
      category: ['Coffee', 'Hot'],
      isNew: false
    },
    {
      id: 4,
      title: 'Iced Americano',
      description: 'Espresso dengan air dingin dan es batu, sempurna untuk cuaca panas',
      image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400',
      price: 'Rp 22.000',
      category: ['Coffee', 'Cold'],
      isNew: false
    },
    {
      id: 5,
      title: 'Croissant',
      description: 'Pastry Perancis dengan lapisan renyah di luar dan lembut di dalam, fresh from oven',
      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400',
      price: 'Rp 18.000',
      category: ['Pastry', 'Breakfast'],
      isNew: false
    },
    {
      id: 6,
      title: 'Matcha Latte',
      description: 'Teh hijau Jepang premium dengan susu, kaya antioksidan dan rasa yang unik',
      image: 'https://images.unsplash.com/photo-1536013564743-5e31c5b1ca4c?w=400',
      price: 'Rp 30.000',
      badge: 'NEW',
      category: ['Non-Coffee', 'Hot'],
      isNew: true
    }
  ]);

  const handleMenuClick = (item: MenuItem) => {
    console.log('Menu clicked:', item.title);
    // Tambahkan logic untuk add to cart atau detail menu
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50" data-theme="coffee">
      {/* Animated Particle Background */}
      <ParticleBackground />

      {/* Decorative Pattern Overlay */}
      <div className="absolute inset-0 opacity-5 z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23bb9576' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v6h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto p-6">
        {/* Header with Avatar */}
        <div className="mb-12 text-center">
          <div className="avatar mb-6">
            <div className="w-20 h-20 rounded-full bg-white shadow-2xl ring ring-primary ring-offset-base-100 ring-offset-4 p-3">
              <img src="/image/LOGO HUBS.png" alt="Coffee Hubs" className="w-full h-full object-contain" />
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-neutral mb-4 animate-fade-in">
            ☕ Menu Kami
          </h1>
          <p className="text-neutral/70 text-lg max-w-2xl mx-auto">
            Pilihan kopi dan makanan terbaik untuk menemani hari Anda
          </p>
          <div className="divider max-w-md mx-auto"></div>
        </div>

        {/* Grid Menu - Responsive with Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div 
              key={item.id} 
              className="card bg-base-100 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 cursor-pointer group animate-fade-in backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'backwards' }}
              onClick={() => handleMenuClick(item)}
            >
              <figure className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {item.badge && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="badge badge-secondary badge-lg shadow-2xl animate-pulse">
                      {item.badge}
                    </div>
                  </div>
                )}
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl">
                  {item.title}
                  {item.isNew && (
                    <div className="badge badge-accent animate-bounce">NEW</div>
                  )}
                </h2>
                <p className="text-sm text-base-content/70 line-clamp-2">{item.description}</p>
                
                {/* Price with Icon */}
                <div className="mt-3 flex items-center gap-2">
                  <span className="text-3xl">💰</span>
                  <p className="text-3xl font-bold text-primary">{item.price}</p>
                </div>

                {/* Categories/Tags */}
                <div className="card-actions justify-start mt-4 flex-wrap">
                  {item.category.map((cat, idx) => (
                    <div key={idx} className="badge badge-outline hover:badge-primary transition-all">{cat}</div>
                  ))}
                </div>

                {/* Order Button with Icon */}
                <div className="card-actions justify-end mt-6">
                  <button className="btn btn-primary w-full group/btn hover:scale-105 transition-transform">
                    <span>Pesan Sekarang</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Info with Enhanced Stats */}
        <div className="mt-16 mb-8">
          <div className="stats stats-vertical sm:stats-horizontal shadow-2xl w-full bg-base-100">
            <div className="stat place-items-center">
              <div className="stat-figure text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div className="stat-title">Total Menu</div>
              <div className="stat-value text-primary">{menuItems.length}</div>
              <div className="stat-desc">Menu tersedia hari ini</div>
            </div>
            
            <div className="stat place-items-center">
              <div className="stat-figure text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="stat-title">Jam Buka</div>
              <div className="stat-value text-secondary">08:00</div>
              <div className="stat-desc">sampai 21:00</div>
            </div>
            
            <div className="stat place-items-center">
              <div className="stat-figure text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div className="stat-title">Rating</div>
              <div className="stat-value text-accent">4.8</div>
              <div className="stat-desc">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuList;
