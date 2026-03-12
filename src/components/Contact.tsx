import { useLayoutEffect, useRef, useState } from 'react';
import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';
import gsap from 'gsap';

const PAIN_OPTIONS = [
  'Cervical', 'Cuello', 'Hombros', 'Espalda Alta',
  'Lumbar', 'Espalda Baja', 'Piernas', 'Pies', 'General'
];

export function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    message: '',
    selectedPain: ''
  });

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal Info Column
      gsap.fromTo(leftColRef.current,
        {
          x: -50,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            invalidateOnRefresh: true
          },
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out"
        }
      );

      // Reveal Form Column
      gsap.fromTo(formRef.current,
        {
          x: 50,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            invalidateOnRefresh: true
          },
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          delay: 0.2
        }
      );

      // Stagger contact info items
      gsap.fromTo('.contact-item',
        {
          y: 20,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
            invalidateOnRefresh: true
          },
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power1.out"
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hola Silvia! Mi nombre es ${formData.name}. Me comunico desde la web porque tengo dolor en: ${formData.selectedPain || 'No especificado'}. ${formData.message ? `\nMensaje adicional: ${formData.message}` : ''}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5491164647433?text=${encodedMessage}`, '_blank');
  };

  return (
    <section ref={containerRef} className="relative pt-24 pb-12" id="contacto">
      {/* Glass Background */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xl rounded-t-[4rem] border-t border-white/10 -z-10" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div ref={leftColRef}>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-amber-200 drop-shadow-lg">
              Reserva tu momento <br /> de paz
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-md font-light">
              Estamos listos para recibirte y brindarte la atención que mereces.
              Contáctanos para agendar tu cita.
            </p>

            <div className="space-y-6">
              <div className="contact-item flex items-start gap-4 group">
                <div className="bg-white/5 p-3 rounded-full border border-white/10 group-hover:bg-amber-400/20 transition-colors">
                  <MapPin className="text-amber-300" size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-1 text-white">
                    Ubicación
                  </h3>
                  <p className="text-white/60">
                    Sede Central Edeen
                    <br />
                    Buenos Aires, Argentina
                  </p>
                </div>
              </div>

              <div className="contact-item flex items-start gap-4 group">
                <div className="bg-white/5 p-3 rounded-full border border-white/10 group-hover:bg-amber-400/20 transition-colors">
                  <Phone className="text-amber-300" size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-1 text-white">
                    WhatsApp
                  </h3>
                  <p className="text-white/60">11 6464-7433</p>
                </div>
              </div>

              <div className="contact-item flex items-start gap-4 group">
                <div className="bg-white/5 p-3 rounded-full border border-white/10 group-hover:bg-amber-400/20 transition-colors">
                  <Clock className="text-amber-300" size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-1 text-white">
                    Horario
                  </h3>
                  <p className="text-white/60">
                    Lun - Vie: 9:00 AM - 8:00 PM
                    <br />
                    Sáb: 10:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex gap-4">
              <a
                href="https://www.instagram.com/edeen_masajes/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-amber-400/20 rounded-full transition-colors text-white border border-white/10">
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="p-3 bg-white/5 hover:bg-amber-400/20 rounded-full transition-colors text-white border border-white/10">
                <Facebook size={24} />
              </a>
            </div>
          </div>

          <div ref={formRef} className="bg-white/5 backdrop-blur-xl rounded-[3rem] p-8 md:p-12 text-white shadow-2xl border border-white/10">
            <h3 className="text-3xl font-serif mb-6 text-amber-200">
              Personaliza tu sesión
            </h3>
            <form className="space-y-6" onSubmit={handleWhatsAppSubmit}>
              <div>
                <label className="block text-sm font-medium mb-3 pl-2 text-white/80">
                  Nombre
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-6 py-4 bg-white/5 rounded-2xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-amber-300/50 text-white placeholder-white/30 transition-all hover:bg-white/10"
                  placeholder="Tu nombre completo" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-3 pl-2 text-white/80">
                  ¿Dónde sentís el dolor actual?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {PAIN_OPTIONS.map((pain) => (
                    <button
                      key={pain}
                      type="button"
                      onClick={() => setFormData({ ...formData, selectedPain: pain })}
                      className={`px-4 py-2 rounded-xl text-xs font-medium border transition-all duration-300 ${formData.selectedPain === pain
                          ? 'bg-amber-400 border-amber-400 text-brown-900 shadow-[0_0_15px_rgba(251,191,36,0.3)]'
                          : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:border-white/20'
                        }`}
                    >
                      {pain}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-3 pl-2 text-white/80">
                  Mensaje adicional
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-6 py-4 bg-white/5 rounded-2xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-amber-300/50 text-white placeholder-white/30 transition-all resize-none hover:bg-white/10"
                  placeholder="Escribe aquí cualquier otro detalle...">
                </textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-400 hover:bg-amber-300 text-brown-900 font-bold py-5 rounded-2xl transition-all shadow-lg hover:shadow-amber-400/30 transform hover:-translate-y-1 active:scale-95 uppercase tracking-widest text-sm"
              >
                Enviar a WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}