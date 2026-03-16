import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Entry Animation
      const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.5 } });

      tl.fromTo(cardRef.current,
        {
          y: 100,
          opacity: 0,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
        }
      )
        .fromTo('.hero-text-item',
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            stagger: 0.2
          }, "-=1");

      // Scroll Parallax Effect
      gsap.to(cardRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true,
        },
        y: 100,
        scale: 0.98,
        immediateRender: false // Crucial to prevent initial state jump
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-10">
      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center mb-6">
        <div
          ref={cardRef}
          className="max-w-4xl mx-auto bg-white/5 backdrop-blur-lg p-8 md:p-16 rounded-[3rem] border border-white/10 shadow-2xl ring-1 ring-white/20">

          <span className="hero-text-item inline-block text-amber-200 tracking-[0.2em] text-sm uppercase mb-4 font-medium">
            Bienestar Natural
          </span>

          <h1 className="hero-text-item text-4xl md:text-6xl font-serif text-white mb-6 leading-tight drop-shadow-lg">
            Reconecta con tu bienestar <span className="italic text-amber-300">en Vicente López</span>
          </h1>

          <p className="hero-text-item text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
            Un espacio de paz diseñado para armonizar tu cuerpo y mente a través
            de terapias holísticas y masajes relajantes.
          </p>

          <div className="hero-text-item">
            <a
              href="#servicios"
              className="group inline-flex items-center gap-2 bg-amber-400/90 hover:bg-amber-300 text-brown-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(251,191,36,0.4)] transform hover:-translate-y-1 backdrop-blur-sm">
              Reserva tu sesión
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/70 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2 backdrop-blur-sm">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
}