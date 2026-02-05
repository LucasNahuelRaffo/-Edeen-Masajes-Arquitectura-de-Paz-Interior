import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Leaf, Coffee, Music, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);

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
          <div className="intro-text">
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
          <div className="intro-image relative">
            <div className="relative rounded-[2rem] overflow-hidden aspect-[3/4] shadow-2xl border border-white/10 group">
              <img
                src="/src/img/room-main.png"
                alt="Main Spa Room"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
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
                <img src="/therapist-ana.png" alt="Silvia - Directora" className="w-full h-full object-cover" />
              </div>
              <div className="bg-white/5 backdrop-blur-xl p-10 md:p-16 rounded-[3rem] border border-white/10 order-2">
                <span className="text-amber-400 text-xs tracking-widest uppercase mb-3 block">Directora & Profesional Senior</span>
                <h3 className="text-3xl md:text-4xl font-serif mb-6">Silvia</h3>
                <p className="text-white/60 mb-8 leading-relaxed">
                  Como alma y fundadora de Edeen, Silvia lidera el centro con una maestría forjada en años de práctica y estudio de las artes curativas. Su enfoque combina la precisión técnica con una sensibilidad intuitiva que permite una sanación profunda y personalizada para cada alma que cruza nuestra puerta.
                </p>
                <div className="flex gap-4">
                  <span className="px-4 py-1 rounded-full border border-white/10 text-[10px] uppercase text-white/40">Maestría Holística</span>
                  <span className="px-4 py-1 rounded-full border border-white/10 text-[10px] uppercase text-white/40">Liderazgo Re-Evolutivo</span>
                </div>
              </div>
            </div>

            {/* Therapist 2 - Vicky - Reverse */}
            <div className="therapist-card grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              <div className="bg-white/5 backdrop-blur-xl p-10 md:p-16 rounded-[3rem] border border-white/10 order-2 lg:order-1">
                <span className="text-amber-400 text-xs tracking-widest uppercase mb-3 block">Terapeuta Asociada</span>
                <h3 className="text-3xl md:text-4xl font-serif mb-6">Vicky</h3>
                <p className="text-white/60 mb-8 leading-relaxed">
                  Mano derecha de Silvia y pieza fundamental de Edeen. Vicky ha crecido profesionalmente bajo la mentoría de Silvia, desarrollando una técnica impecable y una conexión única con los clientes. Su dedicación y frescura aportan una energía vital esencial al equipo, manteniendo la excelencia que nos define.
                </p>
                <div className="flex gap-4">
                  <span className="px-4 py-1 rounded-full border border-white/10 text-[10px] uppercase text-white/40">Sinergia curativa</span>
                  <span className="px-4 py-1 rounded-full border border-white/10 text-[10px] uppercase text-white/40">Técnica Superior</span>
                </div>
              </div>
              <div className="rounded-[2.5rem] overflow-hidden aspect-square border border-white/10 shadow-2xl order-1 lg:order-2">
                <img src="/therapist-elena.png" alt="Vicky - Terapeuta" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. El Escenario del Silencio (Gallery) */}
      <section className="gallery-section py-32 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif text-center mb-4">El Escenario del Silencio</h2>
          <p className="text-amber-500/60 text-center mb-20 text-sm tracking-widest">Un recorrido visual por nuestras instalaciones</p>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[250px] md:auto-rows-[300px]">
            {/* Tall Item */}
            <div className="gallery-item md:col-span-8 md:row-span-2 relative group rounded-[2rem] overflow-hidden border border-white/10">
              <img src="/room-main.png" alt="Santuario Principal" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                <h4 className="text-2xl font-serif mb-2">Santuario Principal</h4>
                <p className="text-white/60 text-sm">El centro neurálgico de la paz, diseñado con materiales nobles y luz tenue para una desconexión total.</p>
              </div>
            </div>

            {/* Square Item */}
            <div className="gallery-item md:col-span-4 md:row-span-1 relative group rounded-[2rem] overflow-hidden border border-white/10">
              <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop" alt="La Biocosmética" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white border border-white/40 px-6 py-2 rounded-full text-xs uppercase tracking-widest">La Biocosmética</span>
              </div>
            </div>

            {/* Small Item */}
            <div className="gallery-item md:col-span-4 md:row-span-1 relative group rounded-[2rem] overflow-hidden border border-white/10">
              <img src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=2070&auto=format&fit=crop" alt="Bienvenida Atenta" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white border border-white/40 px-6 py-2 rounded-full text-xs uppercase tracking-widest">Bienvenida</span>
              </div>
            </div>

            {/* Bottom Row Items */}
            <div className="gallery-item md:col-span-4 md:row-span-1 border border-white/10 rounded-[2rem] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecee?q=80&w=2070&auto=format&fit=crop" alt="Rincón de calma" className="w-full h-full object-cover" />
            </div>
            <div className="gallery-item md:col-span-4 md:row-span-1 border border-white/10 rounded-[2rem] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop" alt="Óleos" className="w-full h-full object-cover" />
            </div>
            <div className="gallery-item md:col-span-4 md:row-span-1 border border-white/10 rounded-[2rem] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1507652313519-d45301827498?q=80&w=2070&auto=format&fit=crop" alt="Piedras" className="w-full h-full object-cover" />
            </div>
          </div>
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
              href={`https://wa.me/5491164647433?text=${encodeURIComponent("Hola Silvia! Me gustaría reservar una cita. ¿Qué turnos tenés disponibles?")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-12 py-5 bg-amber-400 text-brown-900 rounded-full font-bold uppercase tracking-widest hover:bg-amber-300 transition-all hover:scale-105 hover:shadow-2xl shadow-amber-400/20"
            >
              Reservar Mi Cita
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}