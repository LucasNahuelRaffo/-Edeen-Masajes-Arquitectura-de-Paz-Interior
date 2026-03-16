import { useLayoutEffect, useRef, useState } from 'react';
import { Sparkles, Wind } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ServiceCard } from './ServiceCard';
import { ServiceModal } from './ServiceModal';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    type: 'membership',
    title: 'Membresía Mensual',
    description: 'La forma más completa de mantener tu bienestar de manera constante.',
    longDescription: 'Nuestra membresía mensual está diseñada para quienes priorizan su salud física y mental. Al suscribirte, aseguras un espacio semanal de desconexión total.',
    benefits: [
      '4 Sesiones al mes (una por semana)',
      'Seguimiento personalizado de tu evolución',
      'Prioridad en la agenda de turnos',
      'Acceso a todos los tipos de masajes'
    ],
    price: '$169.999',
    duration: '4 Sesiones / Mes',
    icon: Sparkles
  },
  {
    type: 'individual',
    title: 'Turno Individual',
    description: 'Elegí el momento y el tratamiento que mejor se adapte a tu necesidad de hoy.',
    longDescription: 'Ideal para quienes buscan un alivio puntual o quieren probar nuestra experiencia Edeen. Podés elegir cualquiera de nuestros tratamientos especializados.',
    treatments: [
      'Masajes Relajantes',
      'Descontracturantes',
      'Piedras Calientes',
      'Aromaterapia',
      'Reflexología',
      'Hidratación Corporal'
    ],
    price: '$60.000',
    duration: '60 Minutos',
    icon: Wind
  }
] as const;

type Service = typeof services[number];

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsGridRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  useLayoutEffect(() => {
    // Header fly-in
    gsap.fromTo(
      headerRef.current,
      { y: 40, opacity: 0 },
      {
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 85%',
          once: true,
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
      }
    );

    // Cards: animate the actual DOM refs directly (no global selectors)
    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
    if (cards.length > 0 && cardsGridRef.current) {
      gsap.fromTo(
        cards,
        { y: 50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: cardsGridRef.current,
            start: 'top 80%',
            once: true,
          },
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.9,
          ease: 'power3.out',
        }
      );
    }
  }, []);

  return (
    <section ref={containerRef} className="relative py-24">
      {/* Glass Background Panel */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-lg rounded-t-[4rem] border-t border-white/10 -z-10" />

      <div className="container mx-auto px-6">
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 bg-white/10 backdrop-blur-2xl p-8 rounded-[3rem] border border-white/10 shadow-xl" style={{ opacity: 0 }}>
          <span className="text-amber-300 font-medium tracking-wider uppercase text-sm mb-2 block">
            Nuestros Tratamientos
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Experiencias de{' '}
            <span className="italic text-amber-200">Sanación</span>
          </h2>
          <p className="text-white/80 text-lg font-light">
            Cada terapia está diseñada para restaurar el equilibrio natural de tu cuerpo.
          </p>
        </div>

        <div ref={cardsGridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              ref={(el) => { cardRefs.current[index] = el; }}
              {...service}
              onClick={() => setSelectedService(service)}
            />
          ))}
        </div>
      </div>

      <ServiceModal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        service={selectedService}
      />
    </section>
  );
}