import { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { X } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Leaf, Coffee, Music, Zap } from 'lucide-react';
import { trackLead } from '../utils/analytics';

type GalleryItem = {
  id: string;
  img: string;
  alt: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
};

import silviaImg from '../img/silvia.jpeg';
import cremasImg from '../img/Imagen_Cremas.jpeg';
import sopapasImg from '../img/sopapas.jpeg';
import maderoterapia2Img from '../img/maderoteparia2.jpeg';
import piedracalienteImg from '../img/piedracaliente.jpeg';
import piedrascalientesImg from '../img/piedrascalientes.jpeg';
import limpiezaFacialImg from '../img/imagen_limpieza_facial.jpeg';

gsap.registerPlugin(ScrollTrigger);

const galleryItems: GalleryItem[] = [
  {
    id: 'limpieza-facial-1',
    img: limpiezaFacialImg,
    alt: 'Limpieza Facial',
    title: 'Limpieza Facial Profunda',
    subtitle: 'Renovación y frescura',
    description: 'Tratamiento diseñado para limpiar a profundidad, equilibrar y devolver la luminosidad natural al rostro utilizando productos biocompatibles de alta calidad que respetan tu piel.',
    tags: ['Cuidado Facial', 'Luminosidad', 'Biocosmética'],
  },
  {
    id: 'biocosmetica',
    img: cremasImg,
    alt: 'Biocosmética Premium',
    title: 'Biocosmética & Activos Puros',
    subtitle: 'Nutrición celular profunda',
    description: 'Trabajamos con líneas de biocosmética de alta gama que fusionan la ciencia con la naturaleza. Cada producto es seleccionado por sus activos biocompatibles que penetran en las capas profundas de la piel, garantizando una nutrición real y resultados visibles desde la primera sesión.',
    tags: ['Activos Naturales', 'Nutrición Cutánea', 'Ciencia & Naturaleza'],
  },
  {
    id: 'bienvenida',
    img: sopapasImg,
    alt: 'Bienvenida Atenta',
    title: 'Bienvenida & Sopapas',
    subtitle: 'Calor que sana desde el primer contacto',
    description: 'Nuestra bienvenida incluye la aplicación de sopapas, ventosas de plastico que generan vacío sobre la piel para liberar tensiones superficiales, mejorar la microcirculación y preparar el cuerpo para recibir el tratamiento principal con mayor profundidad.',
    tags: ['Ventosaterapia', 'Descontracturante', 'Preparación corporal'],
  },
  {
    id: 'rincon',
    img: maderoterapia2Img,
    alt: 'Rincón de calma',
    title: 'Rincón de Calma',
    subtitle: 'Donde el tiempo se detiene',
    description: 'Un espacio íntimo pensado para la transición entre el mundo exterior y el estado de bienestar. Aquí comenzamos el proceso de soltar el ritmo cotidiano a través de respiración guiada y aromas terapéuticos seleccionados para cada sesión.',
    tags: ['Aromaterapia', 'Respiración consciente', 'Transición sensorial'],
  },
  {
    id: 'oleos',
    img: piedracalienteImg,
    alt: 'Óleos Terapéuticos',
    title: 'Óleos & Piedra Caliente',
    subtitle: 'Calor profundo con aceites puros',
    description: 'La combinación de piedras basálticas calientes con óleos esenciales biocompatibles potencia la absorción de nutrientes en la piel, relaja la musculatura profunda y genera una sensación de calidez que permanece horas después de la sesión.',
    tags: ['Termoterapia', 'Óleos esenciales', 'Relajación muscular'],
  },
  {
    id: 'piedras',
    img: piedrascalientesImg,
    alt: 'Piedras Calientes',
    title: 'Masaje con Piedras Calientes',
    subtitle: 'Equilibrio entre fuego y piedra',
    description: 'Las piedras de basalto volcánico retienen el calor de forma uniforme y, al deslizarse sobre el cuerpo, liberan tensiones que las manos solas no pueden alcanzar. Es uno de los tratamientos más solicitados en Edeen por su efecto profundamente restaurador.',
    tags: ['Basalto volcánico', 'Tensión profunda', 'Restauración total'],
  },
];

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (selectedItem) {
      requestAnimationFrame(() => setIsAnimating(true));
    }
  }, [selectedItem]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => setSelectedItem(null), 300);
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Intro Section Animations
      gsap.from('.intro-text', {
        x: -100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.intro-section',
          start: 'top 80%',
        }
      });

      gsap.from('.intro-image', {
        x: 100,
        opacity: 0,
        scale: 1.1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.intro-section',
          start: 'top 80%',
        }
      });

      // Narrative Section
      gsap.from('.narrative-box', {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.narrative-section',
          start: 'top 80%',
        }
      });

      // Therapist Cards
      gsap.from('.therapist-card', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.therapists-section',
          start: 'top 70%',
        }
      });

      // Gallery Items
      gsap.from('.gallery-item', {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.gallery-section',
          start: 'top 70%',
        }
      });

      // Feature Icons
      gsap.from('.feature-icon', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.features-section',
          start: 'top 85%',
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-[#0f0a07] text-cream-50 overflow-hidden">

      {/* 1. Intro Section: Arquitectura de Paz Interior */}
      <section className="intro-section relative py-24 md:py-32 border-b border-white/5">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="intro-text pl-8 md:pl-16">
            <span className="text-amber-500/80 text-[10px] uppercase tracking-[0.5em] font-bold mb-4 block">
              EL ARTE del descando
            </span>
            <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-8">
              Arquitectura de<br />
              <span className="italic text-amber-200">Paz Interior.</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-md">
              Un viaje sensorial diseñado para el equilibrio moderno. Donde cada momento está diseñado para desconectarte del mundo y conectarte contigo mismo.
            </p>
          </div>
          <div className="intro-image relative max-w-md mx-auto lg:mx-0">
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl border border-white/10 group">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              >
                <source src="/Video-Masajes.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-black/20" />
            </div>
            {/* Floating Circle Interaction Marker */}
            <div className="absolute -bottom-10 -left-10 w-24 h-24 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm animate-pulse">
              <div className="w-2 h-2 bg-amber-400 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Narrative Section: La Curación como Narrativa */}
      <section className="narrative-section py-32 flex justify-center px-6">
        <div className="narrative-box max-w-4xl w-full bg-white/5 backdrop-blur-2xl p-12 md:p-20 rounded-[3rem] border border-white/10 text-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-20 transition-opacity group-hover:opacity-40">
            <Sparkles size={40} className="text-amber-300" />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif mb-10 leading-snug">
            La <span className="italic">Curación</span> como Narrativa
          </h2>
          <p className="text-white/70 text-lg md:text-xl leading-relaxed font-light">
            En nuestro santuario, cada tratamiento es un diálogo silencioso entre la mente y el cuerpo. No es solo un masaje; es un relato escrito en la piel sobre la resiliencia y el bienestar holístico que trasciende lo meramente físico.
          </p>
        </div>
      </section>

      {/* 3. Maestros Terapeutas Section */}
      <section className="therapists-section py-24 bg-black/40">
        <div className="container mx-auto px-6">
          <span className="text-amber-500/80 text-[10px] uppercase tracking-[0.5em] font-bold mb-4 block text-center lg:text-left">
            EXPERIENCIA PROFESIONAL
          </span>
          <h2 className="text-4xl md:text-5xl font-serif mb-20 text-center lg:text-left">
            Maestros Terapeutas
          </h2>

          <div className="space-y-32">
            {/* Therapist 1 - Silvia */}
            <div className="therapist-card grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              <div className="rounded-[2.5rem] overflow-hidden aspect-square border border-white/10 shadow-2xl order-1">
                <img src={silviaImg} alt="Silvia, terapeuta senior y fundadora de Edeen Masajes en Vicente López" loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="bg-white/5 backdrop-blur-xl p-10 md:p-16 rounded-[3rem] border border-white/10 order-2">
                <span className="text-amber-400 text-xs tracking-widest uppercase mb-3 block text-center lg:text-left">Directora & Profesional Senior</span>
                <h3 className="text-3xl md:text-5xl font-serif mb-6 text-center lg:text-left">Silvia</h3>
                <p className="text-white/70 mb-8 leading-relaxed text-center lg:text-left text-sm md:text-base">
                  Como alma y fundadora de Edeen, Silvia lidera el centro con una maestría forjada en años de práctica y estudio de las artes curativas. Su enfoque comienza con una precisión técnica con una sensibilidad intuitiva que permite una sanación profunda y personalizada para cada alma que cruza nuestra puerta.
                </p>
                <div className="flex gap-4 justify-center lg:justify-start">
                  <span className="px-5 py-2 rounded-full border border-white/10 text-[10px] uppercase text-white/50 tracking-widest">Maestría Holística</span>
                  <span className="px-5 py-2 rounded-full border border-white/10 text-[10px] uppercase text-white/50 tracking-widest">Liderazgo Re-Evolutivo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. El Escenario del Silencio (Gallery) */}
      <section className="gallery-section py-32 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif text-center mb-4">El Escenario del Silencio <span className="text-2xl md:text-4xl block md:inline opacity-50">en Vicente López</span></h2>
          <p className="text-amber-500/60 text-center mb-20 text-sm tracking-widest">Un recorrido visual por nuestras instalaciones</p>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[250px] md:auto-rows-[300px]">
            {galleryItems.map((item, idx) => {
              // Defining column and row spans for complex grid
              const layout = [
                "md:col-span-4 md:row-span-1", // Facial 1
                "md:col-span-4 md:row-span-1", // Biocosmética
                "md:col-span-4 md:row-span-1", // Sopapas
                "md:col-span-4 md:row-span-1", // Rincón
                "md:col-span-4 md:row-span-1", // Óleos
                "md:col-span-4 md:row-span-1", // Piedras
              ];
              
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className={`gallery-item ${layout[idx]} relative group rounded-[2rem] overflow-hidden border border-white/10 cursor-pointer`}>
                  <img loading="lazy" src={item.img} alt={`${item.title} - ${item.subtitle} en Edeen Masajes Vicente López`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                    <h4 className="text-2xl font-serif mb-2">{item.title}</h4>
                    <p className="text-white/60 text-sm">{item.subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Gallery Info Panel */}
          {selectedItem && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-6 md:p-12 pt-32"
              onClick={handleClose}
              style={{ transition: 'opacity 0.3s ease', opacity: isAnimating ? 1 : 0 }}>
              <div
                className="absolute inset-0 bg-black/80 backdrop-blur-md"
                style={{ transition: 'opacity 0.3s ease', opacity: isAnimating ? 1 : 0 }} />
              <div
                className="relative z-10 bg-[#0f0a07] border border-white/10 rounded-[2.5rem] overflow-hidden max-w-xl w-full shadow-2xl"
                onClick={e => e.stopPropagation()}
                style={{
                  transition: 'opacity 0.35s ease, transform 0.35s cubic-bezier(0.16,1,0.3,1)',
                  opacity: isAnimating ? 1 : 0,
                  transform: isAnimating ? 'translateY(60px) scale(1)' : 'translateY(92px) scale(0.97)',
                }}>
                <button
                  onClick={handleClose}
                  className="absolute top-6 right-6 z-50 w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white hover:border-white/50 transition-all duration-200 hover:scale-110">
                  <X size={18} />
                </button>
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Image */}
                  <div className="relative aspect-square md:aspect-auto md:min-h-[340px]">
                    <img loading="lazy" src={selectedItem.img} alt={selectedItem.alt} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0f0a07]/60 hidden md:block" />
                  </div>
                  {/* Info */}
                  <div className="p-8 md:p-10 pt-16 md:pt-16 flex flex-col justify-center">
                    <span className="text-amber-500/70 text-[10px] uppercase tracking-[0.4em] font-bold mb-3 block">{selectedItem.subtitle}</span>
                    <h3 className="text-xl md:text-2xl font-serif mb-4 leading-snug">{selectedItem.title}</h3>
                    <p className="text-white/60 text-[13px] leading-relaxed mb-6">{selectedItem.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedItem.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-full border border-white/10 text-[10px] uppercase text-white/40 tracking-wider">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 5. Features Section: Icons Row */}
      <section className="features-section py-32 bg-white/[0.02] border-y border-white/5 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="container mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 text-center relative z-10">
          <div className="feature-icon group cursor-default">
            <div className="w-24 h-24 bg-white/5 rounded-[2rem] flex items-center justify-center mx-auto text-amber-400 border border-white/10 mb-8 transition-all duration-500 group-hover:bg-amber-400/10 group-hover:border-amber-400/40 group-hover:-translate-y-3 group-hover:shadow-[0_20px_40px_rgba(251,191,36,0.15)] relative">
              <div className="absolute inset-0 bg-amber-400/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <Zap size={32} className="relative z-10 transition-transform duration-500 group-hover:scale-110" />
            </div>
            <h5 className="font-serif text-2xl text-amber-50 mb-3">Digital Detox</h5>
            <p className="text-[10px] text-white/30 uppercase tracking-[0.4em] font-medium group-hover:text-amber-300 transition-colors">Desconecta para vivir</p>
          </div>

          <div className="feature-icon group cursor-default">
            <div className="w-24 h-24 bg-white/5 rounded-[2rem] flex items-center justify-center mx-auto text-amber-400 border border-white/10 mb-8 transition-all duration-500 group-hover:bg-amber-400/10 group-hover:border-amber-400/40 group-hover:-translate-y-3 group-hover:shadow-[0_20px_40px_rgba(251,191,36,0.15)] relative">
              <div className="absolute inset-0 bg-amber-400/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <Leaf size={32} className="relative z-10 transition-transform duration-500 group-hover:scale-110" />
            </div>
            <h5 className="font-serif text-2xl text-amber-50 mb-3">Lo Orgánico</h5>
            <p className="text-[10px] text-white/30 uppercase tracking-[0.4em] font-medium group-hover:text-amber-300 transition-colors">Óleos biocompatibles</p>
          </div>

          <div className="feature-icon group cursor-default">
            <div className="w-24 h-24 bg-white/5 rounded-[2rem] flex items-center justify-center mx-auto text-amber-400 border border-white/10 mb-8 transition-all duration-500 group-hover:bg-amber-400/10 group-hover:border-amber-400/40 group-hover:-translate-y-3 group-hover:shadow-[0_20px_40px_rgba(251,191,36,0.15)] relative">
              <div className="absolute inset-0 bg-amber-400/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <Coffee size={32} className="relative z-10 transition-transform duration-500 group-hover:scale-110" />
            </div>
            <h5 className="font-serif text-2xl text-amber-50 mb-3">Amenities</h5>
            <p className="text-[10px] text-white/30 uppercase tracking-[0.4em] font-medium group-hover:text-amber-300 transition-colors">Infusiones Especiales</p>
          </div>

          <div className="feature-icon group cursor-default">
            <div className="w-24 h-24 bg-white/5 rounded-[2rem] flex items-center justify-center mx-auto text-amber-400 border border-white/10 mb-8 transition-all duration-500 group-hover:bg-amber-400/10 group-hover:border-amber-400/40 group-hover:-translate-y-3 group-hover:shadow-[0_20px_40px_rgba(251,191,36,0.15)] relative">
              <div className="absolute inset-0 bg-amber-400/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <Music size={32} className="relative z-10 transition-transform duration-500 group-hover:scale-110" />
            </div>
            <h5 className="font-serif text-2xl text-amber-50 mb-3">Conciergerie</h5>
            <p className="text-[10px] text-white/30 uppercase tracking-[0.4em] font-medium group-hover:text-amber-300 transition-colors">Todo está diseñado</p>
          </div>
        </div>
      </section>

      {/* 6. CTA Section: Solicitar Turno */}
      <section className="py-32 px-6 relative overflow-hidden">
        {/* Background Lights */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-amber-500/10 blur-[100px] rounded-full animate-pulse" />
        <div className="absolute top-1/2 right-1/2 -translate-y-1/2 w-96 h-96 bg-amber-200/5 blur-[120px] rounded-full animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 bg-amber-600/10 blur-[100px] rounded-full animate-pulse delay-500" />

        <div className="max-w-5xl mx-auto bg-gradient-to-b from-white/10 to-transparent p-[1px] rounded-[3rem] relative z-10">
          <div className="bg-white/5 backdrop-blur-2xl py-24 px-10 rounded-[3rem] text-center relative overflow-hidden">
            {/* Inner Glows */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-amber-400/10 blur-[60px] rounded-full" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-amber-600/10 blur-[60px] rounded-full" />

            <span className="text-amber-500/80 text-[10px] uppercase tracking-[0.6em] font-bold mb-6 block border-b border-amber-500/20 pb-2 mx-auto w-fit">
              TU TIEMPO ES AHORA
            </span>
            <h2 className="text-5xl md:text-7xl font-serif text-white mb-8">
              Solicitar Turno
            </h2>
            <p className="text-white/40 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
              Tratamientos personalizados, masajes descontracturantes, piedras calientes y mucho más. Tu experiencia de bienestar comienza aquí.
            </p>
            <a
              href={`https://wa.me/5491134115625?text=${encodeURIComponent("Hola Silvia! Me gustaría reservar una cita. ¿Qué turnos tenés disponibles?")}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackLead()}
              className="inline-flex px-12 py-5 bg-amber-400 text-brown-900 rounded-full font-bold uppercase tracking-widest hover:bg-amber-300 transition-all hover:scale-105 hover:shadow-2xl shadow-amber-400/20"
            >
              Reservar Mi Cita
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}    </a>
          </div>
        </div>
      </section>

    </div>
  );
}