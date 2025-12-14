import { Coffee } from 'lucide-react';

export function ParticleBackground() {
  // Generate random particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 30 + 20,
    left: Math.random() * 100,
    animationDuration: Math.random() * 20 + 15,
    animationDelay: Math.random() * 5,
    opacity: Math.random() * 0.3 + 0.1,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Floating Coffee Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute animate-float"
          style={{
            left: `${particle.left}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDuration: `${particle.animationDuration}s`,
            animationDelay: `${particle.animationDelay}s`,
            opacity: particle.opacity,
            top: '100%',
          }}
        >
          <Coffee className="w-full h-full text-primary rotate-12" />
        </div>
      ))}

      {/* Animated Bubbles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={`bubble-${i}`}
          className="absolute rounded-full bg-primary/10 animate-bubble"
          style={{
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
            animationDuration: `${Math.random() * 15 + 10}s`,
            animationDelay: `${Math.random() * 5}s`,
            bottom: '-100px',
          }}
        />
      ))}

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/15 rounded-full blur-3xl animate-pulse-slower" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />
    </div>
  );
}
