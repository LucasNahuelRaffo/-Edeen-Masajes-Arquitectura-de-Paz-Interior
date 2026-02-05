import type { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  duration: string;
  icon: LucideIcon;
  onClick?: () => void;
}

export function ServiceCard({
  title,
  description,
  price,
  duration,
  icon: Icon,
  onClick
}: ServiceCardProps) {
  return (
    <div
      onClick={onClick}
      className="service-card group relative bg-white/5 backdrop-blur-md rounded-[2rem] p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/10 overflow-hidden cursor-pointer active:scale-95">

      {/* Hover Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

      <div className="flex flex-col h-full">
        <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 text-amber-300 border border-white/20 group-hover:bg-amber-400 group-hover:text-black group-hover:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(251,191,36,0.2)]">
          <Icon size={28} strokeWidth={1.5} />
        </div>

        <h3 className="text-2xl font-serif font-semibold text-white mb-3 group-hover:text-amber-200 transition-colors">
          {title}
        </h3>

        <p className="text-white/70 mb-6 leading-relaxed flex-grow font-light">
          {description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <span className="text-sm font-medium text-white/80 bg-white/10 px-3 py-1 rounded-full border border-white/10">
            {duration}
          </span>
          <span className="text-lg font-bold text-amber-300">{price}</span>
        </div>
      </div>
    </div>
  );
}