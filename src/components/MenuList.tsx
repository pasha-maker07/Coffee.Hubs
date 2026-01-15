import React, { useState } from 'react';
import { ParticleBackground } from './ParticleBackground';
import { Coffee, Star, ShoppingCart, Heart, TrendingUp, Award, Users, MessageCircle, Sparkles, Clock, MapPin, Flame, Zap, CheckCircle, Package, Truck, Shield, ArrowRight, Minus, Plus, X, Leaf, Timer } from 'lucide-react';

interface MenuItem {
  id: number;
  title: string;
  description: string;
  image: string;
  price: string;
  originalPrice?: string;
  badge?: string;
  category: string[];
  isNew?: boolean;
  rating?: number;
  reviews?: number;
  stock?: number;
  ordered?: number;
  sku?: string;
  tags?: string[];
}

interface Feature {
  id: number;
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const MenuList: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<MenuItem | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  
  const [menuItems] = useState<MenuItem[]>([
    {
      id: 1,
      title: 'Golden',
      description: 'Kopi espesso dengan campuran gula aren dan susu segar yang lembut',
      image: '/image/17.png',
      price: 'Rp 18.000',
      badge: 'BEST SELLER',
      category: ['Coffee', 'Hot', 'Cold'],
      isNew: false,
      rating: 4.9,
      reviews: 127,
      stock: 45,
      ordered: 156,
      sku: 'GOLD-001',
      tags: ['Premium', 'Best Seller', 'Gula Aren']
    },
    {
      id: 2,
      title: 'Pure',
      description: 'Percampuran kopi espresso dengan susu segar tanpa tambahan gula',
      image: '/image/COFFEE.HUBS (16 x 9 inci) (1).png',
      price: 'Rp 15.000',
      category: ['Coffee', 'Hot', 'Cold'],
      isNew: false,
      rating: 4.8,
      reviews: 98,
      stock: 60,
      ordered: 89,
      sku: 'PURE-002',
      tags: ['Sugar Free', 'Healthy', 'Organic']
    },
    {
      id: 3,
      title: 'Coco',
      description: 'Espresso dengan kelapa muda dan susu segar, memberikan rasa tropis yang unik',
      image: '/image/COFFEE.HUBS (16 x 9 inci).png',
      price: 'Rp 18.000',
      originalPrice: 'Rp 22.000',
      badge: 'POPULAR',
      category: ['Coffee', 'Hot', 'Cold'],
      isNew: false,
      rating: 4.9,
      reviews: 145,
      stock: 30,
      ordered: 203,
      sku: 'COCO-003',
      tags: ['Tropical', 'Kelapa Muda', 'Limited']
    }
  ]);

  const [features] = useState<Feature[]>([
    {
      id: 1,
      number: '01',
      title: 'Biji Kopi Premium',
      description: 'Hanya menggunakan biji kopi Arabica pilihan dari perkebunan terbaik Indonesia dengan proses roasting sempurna.',
      icon: <Coffee className="w-8 h-8" />
    },
    {
      id: 2,
      number: '02',
      title: 'Racikan Inovatif',
      description: 'Formula unik hasil riset barista profesional kami yang menghasilkan cita rasa khas dan tak terlupakan.',
      icon: <Sparkles className="w-8 h-8" />
    },
    {
      id: 3,
      number: '03',
      title: 'Bahan Alami 100%',
      description: 'Tanpa pengawet, pewarna, atau pemanis buatan. Semua bahan dipilih secara natural dan berkualitas tinggi.',
      icon: <Leaf className="w-8 h-8" />
    },
    {
      id: 4,
      number: '04',
      title: 'Nutrisi Seimbang',
      description: 'Mengandung antioksidan tinggi dan nutrisi penting yang baik untuk kesehatan tubuh Anda.',
      icon: <Award className="w-8 h-8" />
    },
    {
      id: 5,
      number: '05',
      title: 'Proses Higienis',
      description: 'Diproduksi dalam lingkungan steril dengan standar food safety internasional untuk keamanan Anda.',
      icon: <Shield className="w-8 h-8" />
    },
    {
      id: 6,
      number: '06',
      title: 'Pengiriman Cepat',
      description: 'Sistem delivery yang efisien memastikan kopi Anda sampai dengan cepat dan tetap fresh.',
      icon: <Truck className="w-8 h-8" />
    }
  ]);

  const categories = [
    { name: 'All', icon: <Coffee className="w-4 h-4" /> },
    { name: 'Coffee', icon: <Flame className="w-4 h-4" /> },
    { name: 'Hot', icon: <Zap className="w-4 h-4" /> },
    { name: 'Cold', icon: <Sparkles className="w-4 h-4" /> }
  ];

  const filteredItems = selectedCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category.includes(selectedCategory));

  const handleMenuClick = (item: MenuItem) => {
    setSelectedProduct(item);
    setQuantity(1);
  };

  const handleAddToCart = (item: MenuItem, qty: number = 1) => {
    const message = `Halo, saya mau pesan ${qty}x ${item.title} (${item.price})%0ATotal: Rp ${parseInt(item.price.replace(/\D/g, '')) * qty}.000`;
    window.open(`https://wa.me/6281380845684?text=${message}`, '_blank');
  };

  const increaseQuantity = () => {
    if (selectedProduct && quantity < (selectedProduct.stock || 99)) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]" data-theme="coffee">
      {/* Animated Particle Background */}
      <ParticleBackground />

      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 opacity-[0.015] pointer-events-none z-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section - Ultra Modern */}
        <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          {/* Animated Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-950 via-stone-900 to-black"></div>
          
          {/* Glowing Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            {/* Floating Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-200 text-sm mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4" />
              <span>Premium Coffee Experience</span>
              <Sparkles className="w-4 h-4" />
            </div>

            {/* Logo with Glow Effect */}
            <div className="relative inline-block mb-10">
              <div className="absolute inset-0 bg-amber-500/30 blur-2xl rounded-full scale-150"></div>
              <div className="relative w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-amber-100 to-white p-4 shadow-2xl ring-4 ring-amber-500/50">
                <img src="/image/LOGO HUBS.png" alt="Coffee Hubs" className="w-full h-full object-contain" />
              </div>
            </div>

            {/* Main Heading with Gradient */}
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-300 mb-6 tracking-tight animate-fade-in">
              COFFEE HUBS
            </h1>
            
            <p className="text-xl sm:text-2xl text-amber-100/80 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
              Rasakan sensasi kopi premium dengan sentuhan <span className="text-amber-400 font-semibold">cita rasa lokal</span> yang tak terlupakan
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm border border-amber-500/30 text-amber-100">
                <Award className="w-5 h-5 text-amber-400" />
                <span className="font-medium">100% Arabica</span>
              </div>
              <div className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm border border-amber-500/30 text-amber-100">
                <TrendingUp className="w-5 h-5 text-amber-400" />
                <span className="font-medium">Fresh Roasted</span>
              </div>
              <div className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm border border-amber-500/30 text-amber-100">
                <Users className="w-5 h-5 text-amber-400" />
                <span className="font-medium">1000+ Happy Customers</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#menu" 
                className="group relative px-10 py-5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-lg shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center justify-center gap-3">
                  <Coffee className="w-6 h-6" />
                  Explore Menu
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
              <a 
                href="https://wa.me/6281380845684" 
                className="px-10 py-5 rounded-2xl bg-white/5 backdrop-blur-sm border-2 border-white/20 text-white font-bold text-lg hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center justify-center gap-3">
                  <ShoppingCart className="w-6 h-6" />
                  Order Now
                </span>
              </a>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
              <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
                <div className="w-1.5 h-3 bg-amber-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="relative py-20 bg-gradient-to-b from-black to-stone-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { icon: <Shield className="w-8 h-8" />, title: '100% Organic', description: 'Bahan alami tanpa pengawet', color: 'from-green-500 to-emerald-600' },
                { icon: <Truck className="w-8 h-8" />, title: 'Fast Delivery', description: 'Pengiriman cepat & aman', color: 'from-blue-500 to-cyan-600' },
                { icon: <Award className="w-8 h-8" />, title: 'Best Quality', description: 'Kualitas terjamin premium', color: 'from-amber-500 to-orange-600' },
                { icon: <CheckCircle className="w-8 h-8" />, title: 'Satisfaction', description: 'Jaminan 100% puas', color: 'from-purple-500 to-pink-600' }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="group relative p-6 rounded-2xl bg-gradient-to-br from-stone-900/50 to-stone-950/50 border border-white/10 hover:border-amber-500/30 transition-all duration-500 overflow-hidden"
                >
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${item.color} text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-stone-400 text-sm">{item.description}</p>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 to-orange-500/0 group-hover:from-amber-500/5 group-hover:to-orange-500/5 transition-all duration-500 pointer-events-none rounded-2xl"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section - Numbered */}
        <div className="relative py-24 bg-gradient-to-b from-stone-950 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-amber-500/10 text-amber-400 text-sm font-semibold tracking-wide uppercase mb-4">
                Our Features
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Why <span style={{ color: '#BB9577' }} className="font-bold">Coffee Hubs?</span>
              </h2>
              <p className="text-stone-400 text-lg max-w-2xl mx-auto">
                Keunggulan yang membuat Coffee Hubs menjadi pilihan terbaik untuk pengalaman kopi Anda
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={feature.id}
                  className="group relative p-8 rounded-3xl bg-gradient-to-br from-stone-900/50 to-stone-950/50 border border-white/10 hover:border-amber-500/30 transition-all duration-500 overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'backwards' }}
                >
                  {/* Number Badge */}
                  <div className="absolute top-6 right-6 w-16 h-16 rounded-2xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 flex items-center justify-center">
                    <span className="text-2xl font-black text-amber-400">{feature.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-white font-bold text-xl mb-3 group-hover:text-amber-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-stone-400 leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  {/* Read More Link */}
                  <button className="flex items-center gap-2 text-amber-400 font-semibold group-hover:gap-4 transition-all">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 to-orange-500/0 group-hover:from-amber-500/5 group-hover:to-orange-500/5 transition-all duration-500 pointer-events-none rounded-3xl"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Category Filter Section */}
        <div className="relative py-20 bg-gradient-to-b from-black via-stone-950 to-stone-900" id="menu">
          {/* Section Header */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
            <div className="text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-amber-500/10 text-amber-400 text-sm font-semibold tracking-wide uppercase mb-4">
                Our Collection
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Coffee</span> Menu
              </h2>
              <p className="text-stone-400 text-lg max-w-2xl mx-auto">
                Pilihan kopi terbaik dengan cita rasa yang khas dan berkualitas tinggi
              </p>
            </div>
          </div>

          {/* Category Pills */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    selectedCategory === category.name
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/30 scale-105'
                      : 'bg-white/5 text-stone-300 hover:bg-white/10 border border-white/10'
                  }`}
                >
                  {category.icon}
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, index) => (
                <div 
                  key={item.id} 
                  className="group relative rounded-3xl bg-gradient-to-br from-stone-900 to-stone-950 border border-white/10 overflow-hidden transition-all duration-500 hover:border-amber-500/50 hover:shadow-2xl hover:shadow-amber-500/10 animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s`, animationFillMode: 'backwards' }}
                  onMouseEnter={() => setHoveredCard(item.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Image Container */}
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent"></div>
                    
                    {/* Badges */}
                    {item.badge && (
                      <div className="absolute top-4 left-4">
                        <span className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider ${
                          item.badge === 'BEST SELLER' 
                            ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white'
                            : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                        }`}>
                          {item.badge}
                        </span>
                      </div>
                    )}

                    {/* Discount Badge */}
                    {item.originalPrice && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-2 rounded-xl bg-red-500 text-white text-xs font-bold">
                          -18%
                        </span>
                      </div>
                    )}

                    {/* Wishlist Button */}
                    <button className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/20 hover:scale-110">
                      <Heart className="w-5 h-5 text-white" />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(item.rating || 0)
                                ? 'fill-amber-400 text-amber-400'
                                : 'text-stone-600'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-stone-400">
                        {item.rating} <span className="text-stone-500">({item.reviews})</span>
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-stone-400 text-sm line-clamp-2 mb-4">
                      {item.description}
                    </p>

                    {/* Categories */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {item.category.slice(0, 3).map((cat, idx) => (
                        <span 
                          key={idx} 
                          className="px-3 py-1 rounded-lg bg-white/5 text-stone-400 text-xs font-medium border border-white/10"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>

                    {/* Price & Action */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div>
                        {item.originalPrice && (
                          <p className="text-stone-500 text-sm line-through">{item.originalPrice}</p>
                        )}
                        <p className="text-3xl font-black" style={{ color: '#BB9577' }}>
                          {item.price}
                        </p>
                      </div>
                      
                      <button 
                        onClick={() => handleMenuClick(item)}
                        className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-all hover:scale-105"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        Order
                      </button>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  {hoveredCard === item.id && (
                    <div className="absolute inset-0 rounded-3xl border-2 border-amber-500/50 pointer-events-none"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="relative py-24 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: <Coffee className="w-10 h-10" />, value: '3+', label: 'Premium Menu', color: 'from-amber-500 to-orange-500' },
                { icon: <Users className="w-10 h-10" />, value: '1000+', label: 'Happy Customers', color: 'from-purple-500 to-pink-500' },
                { icon: <Star className="w-10 h-10" />, value: '4.9', label: 'Average Rating', color: 'from-green-500 to-emerald-500' },
                { icon: <Clock className="w-10 h-10" />, value: '13h', label: 'Daily Hours', color: 'from-blue-500 to-cyan-500' },
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="relative p-8 rounded-3xl bg-gradient-to-br from-stone-900 to-stone-950 border border-white/10 text-center group hover:border-amber-500/30 transition-all duration-500"
                >
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${stat.color} text-white mb-4 shadow-lg`}>
                    {stat.icon}
                  </div>
                  
                  {/* Value */}
                  <p className="text-4xl sm:text-5xl font-black text-white mb-2">
                    {stat.value}
                  </p>
                  
                  {/* Label */}
                  <p className="text-stone-400 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="relative py-24 bg-gradient-to-b from-black to-stone-900 overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            {/* Badge */}
            <span className="inline-block px-4 py-2 rounded-full bg-amber-500/10 text-amber-400 text-sm font-semibold tracking-wide uppercase mb-6">
              Stay Updated
            </span>

            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Get Special <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Promos</span> 🎉
            </h2>
            
            <p className="text-stone-400 text-lg mb-10 max-w-2xl mx-auto">
              Subscribe untuk mendapatkan info promo eksklusif, menu baru, dan diskon langsung ke WhatsApp Anda
            </p>

            {/* Subscribe Form */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <div className="relative flex-1">
                <input 
                  type="tel" 
                  placeholder="Nomor WhatsApp (08xxx)" 
                  className="w-full px-6 py-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/20 text-white placeholder:text-stone-500 focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 transition-all"
                />
              </div>
              <button className="px-8 py-5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 transition-all hover:scale-105">
                Subscribe
              </button>
            </div>

            <p className="text-stone-500 text-sm mt-6 flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              Privasi Anda terjamin. Tidak akan ada spam.
            </p>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="relative py-24 bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-600 overflow-hidden">
          {/* Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6bTAtMzBWMGgtMnY0aC00djJoNHY0aDJWNmg0VjRoLTR6TTYgMzR2LTRINHY0SDB2Mmg0djRoMnYtNGg0di0ySDZ6TTYgNFYwSDR2NEgwdjZoNHY0aDJWNmg0VjRINnoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
          </div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl sm:text-6xl font-black text-white mb-6">
              Ready for Amazing Coffee? ☕
            </h2>
            <p className="text-xl sm:text-2xl text-amber-50 mb-10 font-light">
              Pesan sekarang dan rasakan sensasi kopi yang tak terlupakan
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <a 
                href="https://wa.me/6281380845684" 
                className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-white text-amber-900 font-bold text-lg shadow-2xl hover:shadow-amber-500/50 transition-all hover:scale-105"
              >
                <ShoppingCart className="w-6 h-6" />
                Order via WhatsApp
              </a>
              <a 
                href="https://share.google/xMduyLx2axptAfC7z" 
                className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold text-lg hover:bg-white/20 transition-all hover:scale-105"
              >
                <MapPin className="w-6 h-6" />
                Visit Our Store
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-stone-950 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
              {/* Brand */}
              <div className="md:col-span-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 p-2">
                    <img src="/image/LOGO HUBS.png" alt="Logo" className="w-full h-full object-contain" />
                  </div>
                  <span className="text-2xl font-bold text-white">Coffee Hubs</span>
                </div>
                <p className="text-stone-400 text-sm leading-relaxed mb-6">
                  Ruang ngopi yang menghadirkan obrolan hangat, kolaborasi inspiratif, dan cita rasa kopi premium.
                </p>
                <div className="flex gap-3">
                  <a href="https://www.instagram.com/coffee.hubs/" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-stone-400 hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="https://wa.me/6281380845684" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-stone-400 hover:bg-green-500 hover:text-white hover:border-green-500 transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="font-bold text-white text-lg mb-6">Menu</h3>
                <ul className="space-y-4">
                  {['Coffee', 'Hot Drinks', 'Cold Drinks', 'Special Menu'].map((item) => (
                    <li key={item}>
                      <a href="#menu" className="text-stone-400 hover:text-amber-400 transition-colors flex items-center gap-2 group">
                        <span className="w-1.5 h-1.5 rounded-full bg-stone-600 group-hover:bg-amber-400 transition-colors"></span>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="font-bold text-white text-lg mb-6">Contact</h3>
                <ul className="space-y-4 text-stone-400">
                  <li className="flex items-center gap-3">
                    <span className="text-lg">📞</span>
                    <span>+62 813-8084-5684</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-lg">📧</span>
                    <span>info@coffeehubs.com</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-lg">⏰</span>
                    <span>08:00 - 21:00 WIB</span>
                  </li>
                  <li>
                    <a href="https://share.google/xMduyLx2axptAfC7z" className="flex items-center gap-3 hover:text-amber-400 transition-colors">
                      <span className="text-lg">📍</span>
                      <span>View Location</span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Hours */}
              <div>
                <h3 className="font-bold text-white text-lg mb-6">Opening Hours</h3>
                <ul className="space-y-4 text-stone-400">
                  <li className="flex justify-between">
                    <span>Senin - Jumat</span>
                    <span className="text-white font-medium">08:00 - 21:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sabtu - Minggu</span>
                    <span className="text-white font-medium">08:00 - 22:00</span>
                  </li>
                  <li className="pt-4">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-green-500/20 text-green-400 border border-green-500/30 text-sm font-medium">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                      Open Now
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-stone-500 text-sm">
                © 2025 Coffee Hubs. All rights reserved.
              </p>
              <p className="text-stone-500 text-sm flex items-center gap-2">
                Made with <span className="text-red-500">❤️</span> and <span className="text-amber-500">☕</span>
              </p>
            </div>
          </div>
        </footer>

        {/* Product Detail Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
            <div className="relative max-w-4xl w-full bg-gradient-to-br from-stone-900 to-stone-950 rounded-3xl border border-white/20 shadow-2xl overflow-hidden animate-scale-in">
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                {/* Product Image */}
                <div className="relative rounded-2xl overflow-hidden">
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.title}
                    className="w-full h-full object-cover"
                  />
                  {selectedProduct.badge && (
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold uppercase">
                        {selectedProduct.badge}
                      </span>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="flex flex-col">
                  {/* Title & Rating */}
                  <h2 className="text-3xl font-black text-white mb-3">
                    {selectedProduct.title}
                  </h2>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(selectedProduct.rating || 0)
                              ? 'fill-amber-400 text-amber-400'
                              : 'text-stone-600'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-stone-400">
                      ({selectedProduct.reviews} Reviews)
                    </span>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    {selectedProduct.originalPrice && (
                      <p className="text-stone-500 line-through text-lg">{selectedProduct.originalPrice}</p>
                    )}
                    <p className="text-5xl font-black" style={{ color: '#BB9577' }}>
                      {selectedProduct.price}
                    </p>
                  </div>

                  {/* Stock Info */}
                  <div className="flex items-center gap-6 mb-6 p-4 rounded-xl bg-white/5 border border-white/10">
                    <div>
                      <p className="text-stone-400 text-sm mb-1">In Stock</p>
                      <p className="text-white font-bold text-xl">{selectedProduct.stock} items</p>
                    </div>
                    <div className="h-10 w-px bg-white/20"></div>
                    <div>
                      <p className="text-stone-400 text-sm mb-1">Ordered</p>
                      <p className="text-white font-bold text-xl">{selectedProduct.ordered}x</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-stone-300 mb-6 leading-relaxed">
                    {selectedProduct.description}
                  </p>

                  {/* Stock Progress */}
                  <div className="mb-6">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-stone-400">Availability</span>
                      <span className="text-amber-400 font-semibold">
                        {Math.round((selectedProduct.ordered! / (selectedProduct.ordered! + selectedProduct.stock!)) * 100)}% Sold
                      </span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"
                        style={{ width: `${Math.round((selectedProduct.ordered! / (selectedProduct.ordered! + selectedProduct.stock!)) * 100)}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Quantity Selector */}
                  <div className="mb-6">
                    <p className="text-stone-400 text-sm mb-3">Quantity</p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-3 p-2 rounded-xl bg-white/5 border border-white/10">
                        <button 
                          onClick={decreaseQuantity}
                          className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all"
                        >
                          <Minus className="w-4 h-4 text-white" />
                        </button>
                        <span className="text-white font-bold text-xl w-12 text-center">{quantity}</span>
                        <button 
                          onClick={increaseQuantity}
                          className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all"
                        >
                          <Plus className="w-4 h-4 text-white" />
                        </button>
                      </div>
                      <p className="text-stone-400 text-sm">
                        Max {selectedProduct.stock} items
                      </p>
                    </div>
                  </div>

                  {/* Product Meta */}
                  <div className="space-y-2 mb-6 p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex justify-between">
                      <span className="text-stone-400">SKU:</span>
                      <span className="text-white font-mono">{selectedProduct.sku}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-400">Category:</span>
                      <span className="text-white">{selectedProduct.category[0]}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-stone-400">Tags:</span>
                      <div className="flex gap-2">
                        {selectedProduct.tags?.map((tag, idx) => (
                          <span key={idx} className="px-2 py-1 rounded-lg bg-amber-500/20 text-amber-400 text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <button 
                    onClick={() => handleAddToCart(selectedProduct, quantity)}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 transition-all hover:scale-105 flex items-center justify-center gap-3"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart - {selectedProduct.price.replace(/Rp\s*/, 'Rp ')} x {quantity}
                  </button>

                  {/* Additional Info */}
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="flex items-center gap-2 text-sm text-stone-400">
                      <Truck className="w-4 h-4 text-green-400" />
                      <span>Free Shipping</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-stone-400">
                      <Shield className="w-4 h-4 text-blue-400" />
                      <span>Money Back Guarantee</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuList;
