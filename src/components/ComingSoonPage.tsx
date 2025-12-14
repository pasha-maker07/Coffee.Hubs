import { Coffee, ArrowLeft, Clock, Sparkles } from 'lucide-react';

interface ComingSoonPageProps {
  onBack: () => void;
}

export function ComingSoonPage({ onBack }: ComingSoonPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 via-base-200 to-accent/20" data-theme="coffee">
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-2xl w-full">
          {/* Back Button */}
          <button 
            onClick={onBack}
            className="btn btn-circle btn-ghost mb-8 hover:scale-110 transition-transform"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>

          {/* Coming Soon Card */}
          <div className="card bg-base-100 shadow-2xl animate-fade-in">
            <div className="card-body items-center text-center p-8 sm:p-12">
              {/* Animated Icon */}
              <div className="relative mb-8">
                <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center shadow-2xl animate-pulse-slow ring-4 ring-primary/30 p-3">
                  <img src="/image/LOGO HUBS.png" alt="Coffee Hubs Logo" className="w-full h-full object-contain" />
                </div>
                <div className="absolute -top-2 -right-2">
                  <Sparkles className="w-8 h-8 text-warning animate-bounce" />
                </div>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral mb-4">
                Coming Soon
              </h1>

              {/* Description */}
              <p className="text-lg sm:text-xl text-neutral/70 mb-6 max-w-md">
                Kami sedang menyiapkan menu digital yang lebih lengkap dan interaktif untuk Anda!
              </p>

              {/* Features List */}
              <div className="w-full max-w-md mb-8">
                <div className="space-y-4 text-left">
                  <div className="flex items-start gap-3 p-4 bg-base-200 rounded-lg">
                    <div className="text-2xl">☕</div>
                    <div>
                      <h3 className="font-semibold text-neutral">Menu Interaktif</h3>
                      <p className="text-sm text-neutral/60">Lihat foto dan detail setiap menu</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-base-200 rounded-lg">
                    <div className="text-2xl">🛒</div>
                    <div>
                      <h3 className="font-semibold text-neutral">Pemesanan Online</h3>
                      <p className="text-sm text-neutral/60">Pesan langsung dari aplikasi</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-base-200 rounded-lg">
                    <div className="text-2xl">🎁</div>
                    <div>
                      <h3 className="font-semibold text-neutral">Promo Eksklusif</h3>
                      <p className="text-sm text-neutral/60">Dapatkan diskon spesial</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status Badge */}
              <div className="badge badge-lg badge-warning gap-2 px-6 py-4 shadow-lg mb-6">
                <Clock className="w-4 h-4" />
                <span className="font-medium">Segera Hadir!</span>
              </div>

              {/* Call to Action */}
              <div className="divider">Sementara Itu</div>
              
              <div className="card-actions flex-col sm:flex-row gap-3">
                <a 
                  href="https://wa.me/6281380845684" 
                  className="btn btn-primary gap-2"
                >
                  <Coffee className="w-5 h-5" />
                  Hubungi Kami
                </a>
                <a 
                  href="https://www.instagram.com/coffee.hubs/" 
                  className="btn btn-outline btn-primary gap-2"
                >
                  <Sparkles className="w-5 h-5" />
                  Follow Instagram
                </a>
              </div>

              {/* Footer Note */}
              <p className="text-xs text-neutral/50 mt-8">
                Ikuti Instagram kami untuk update terbaru!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
