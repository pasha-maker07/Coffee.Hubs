import { ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';

interface CoffeeLinkProps {
  title: string;
  description: string;
  icon: ReactNode;
  url?: string;
  onClick?: () => void;
  delay?: number;
}

export function CoffeeLink({ title, description, icon, url, onClick, delay = 0 }: CoffeeLinkProps) {
  const isButton = !!onClick;
  const Component = isButton ? 'button' : 'a';
  
  return (
    <Component
      {...(isButton ? { onClick, type: 'button' as const } : { href: url })}
      className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group border border-primary/10 hover:border-primary/30 w-full text-left block"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="card-body p-5 sm:p-6">
        <div className="flex items-center gap-4">
          {/* Icon Container - DaisyUI Avatar */}
          <div className="flex-shrink-0">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <div className="text-base-100 w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center">
                {icon}
              </div>
            </div>
          </div>
          
          {/* Text Content */}
          <div className="flex-grow min-w-0">
            <h3 className="card-title text-neutral text-base sm:text-lg group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>
            <p className="text-sm text-neutral/60 line-clamp-1">
              {description}
            </p>
          </div>
          
          {/* Arrow Icon */}
          <div className="flex-shrink-0">
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </Component>
  );
}
