import { useLayoutEffect, useRef } from 'react';
import { Leaf, Heart, ShieldCheck, Clock } from 'lucide-react';
import gsap from 'gsap';

const benefits = [
  {
    icon: Leaf,
    title: 'Productos 100% Naturales',
    description:
      'Utilizamos aceites y esencias libres de químicos agresivos, respetando tu piel y el medio ambiente.'
  },
  {
    icon: Heart,
    title: 'Atención Personalizada',
    description:
      'Cada cuerpo es único. Adaptamos la presión y técnica a tus necesidades específicas.'
  },
  {
    icon: ShieldCheck,
    title: 'Ambiente Seguro',
    description:
      'Espacios sanitizados y protocolos de higiene estrictos para tu tranquilidad total.'
  },
  {
    icon: Clock,
    title: 'Tiempo para Ti',
    description:
      'Sin prisas. Respetamos tu tiempo de relajación antes y después de cada sesión.'
  }];

export function Benefits() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Background gradient pulse
      gsap.to('.amber-pulse', {
        scale: 1.1,
        opacity: 0.3,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Stagger benefits cards
      gsap.fromTo('.benefit-card',
        {
          y: 40,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            invalidateOnRefresh: true
          },
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power2.out"
        }
      );

      // Image parallax
      gsap.fromTo(imageRef.current,
        {
          scale: 1.1,
          rotate: 5,
        },
        {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            scrub: true,
            invalidateOnRefresh: true
          },
          scale: 1,
          rotate: 0,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative py-24">
      {/* Glass Background */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-t-[4rem] border-t border-white/10 -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="amber-pulse absolute inset-0 bg-amber-400 rounded-full opacity-20 blur-3xl transform scale-90" />
              <div
                ref={imageRef}
                className="relative rounded-[40%_60%_70%_30%/40%_50%_60%_50%] overflow-hidden shadow-2xl border border-white/20 animate-blob"
              >
                <img
                  src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070&auto=format&fit=crop"
                  alt="Relaxing spa detail"
                  className="w-full h-full object-cover aspect-square" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl font-serif text-white mb-12 drop-shadow-lg">
              ¿Por qué elegir a <br />
              <span className="text-amber-300 italic">Edeen Masajes?</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
              {benefits.map((item, index) =>
                <div
                  key={index}
                  className="benefit-card flex flex-col items-start bg-white/5 p-6 rounded-3xl border border-white/5 hover:bg-white/10 transition-colors">
                  <div className="p-3 bg-amber-400/20 rounded-2xl shadow-sm text-amber-300 mb-4 border border-amber-400/20">
                    <item.icon size={24} />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);
}