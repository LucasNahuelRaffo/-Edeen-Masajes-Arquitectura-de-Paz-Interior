import { useLayoutEffect, useRef, useState } from 'react';
import { Star, Play, Pause, Mic } from 'lucide-react';
import gsap from 'gsap';

const testimonials = [
  {
    name: 'Ana García',
    duration: '0:14',
    audioUrl: '/Audio-1.ogg',
    date: 'Hoy',
    rating: 5
  },
  {
    name: 'Carlos Méndez',
    duration: '1:12',
    date: 'Ayer',
    rating: 5
  },
  {
    name: 'Sofía Torres',
    duration: '0:58',
    date: 'Hace 2 días',
    rating: 5
  }
];

function VoiceNoteCard({ testimonial, index }: { testimonial: typeof testimonials[0], index: number }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const currentProgress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(currentProgress);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
  };

  return (
    <div
      className={`testimonial-card bg-white/5 backdrop-blur-md p-8 rounded-[2.5rem] shadow-xl border border-white/10 relative group hover:bg-white/10 transition-all duration-500 ${index % 2 === 1 ? 'md:-translate-y-6' : ''}`}>

      {testimonial.audioUrl && (
        <audio
          ref={audioRef}
          src={testimonial.audioUrl}
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleEnded}
        />
      )}

      <div className="flex items-center justify-between mb-6">
        <div className="flex gap-1 text-amber-400">
          {[...Array(testimonial.rating)].map((_, idx) => (
            <Star key={idx} size={14} fill="currentColor" />
          ))}
        </div>
        <div className="bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
          <span className="text-[10px] text-amber-200 uppercase tracking-widest font-bold">Audio Testimonio</span>
        </div>
      </div>

      <div className="flex items-center gap-6 mb-8">
        <button
          onClick={togglePlay}
          className={`w-16 h-16 rounded-full flex items-center justify-center text-brown-900 shadow-lg hover:scale-110 active:scale-95 transition-all shadow-amber-400/20 ${testimonial.audioUrl ? 'bg-amber-400 opacity-100' : 'bg-gray-600 opacity-50 cursor-not-allowed'}`}
          disabled={!testimonial.audioUrl}
        >
          {isPlaying ? <Pause size={28} fill="currentColor" /> : <Play size={28} fill="currentColor" className="ml-1" />}
        </button>

        <div className="flex-1 space-y-2">
          <div className="flex items-center justify-between text-[11px] text-white/40 uppercase tracking-tighter">
            <div className="flex items-center gap-1">
              <Mic size={12} />
              <span>Enviado a Silvia</span>
            </div>
            <span>{testimonial.duration}</span>
          </div>
          <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden relative">
            <div
              className="absolute top-0 left-0 h-full bg-amber-400 transition-all duration-100 ease-linear shadow-[0_0_10px_rgba(251,191,36,0.5)]"
              style={{ width: `${progress}%` }}
            />
            {/* Waveform visualizer placeholder */}
            <div className="absolute inset-0 flex items-center justify-around px-1 opacity-20 group-hover:opacity-40 transition-opacity">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="w-1 bg-white rounded-full" style={{ height: `${20 + Math.random() * 60}%` }} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-end justify-between">
        <div>
          <div className="font-serif font-bold text-xl text-amber-200">
            {testimonial.name}
          </div>
          <div className="text-xs text-white/30 italic">Cliente Verificado</div>
        </div>
        <div className="text-[10px] text-white/30 uppercase tracking-widest">{testimonial.date}</div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.testimonial-card',
        {
          y: 60,
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
          stagger: 0.2,
          duration: 1,
          ease: "power3.out"
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Glass Background Panel */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-xl rounded-t-[5rem] border-t border-white/5 -z-10" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-amber-500/80 text-[10px] uppercase tracking-[0.6em] font-bold mb-4 block">
            VOCES REALES
          </span>
          <h2 className="text-5xl md:text-6xl font-serif text-white mb-6">
            Experiencias en <span className="italic text-amber-200">Primera Persona.</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto text-lg leading-relaxed">
            Escuchá los mensajes que nuestros clientes le envían a Silvia tras sus sesiones de sanación.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t, i) =>
            <VoiceNoteCard key={i} testimonial={t} index={i} />
          )}
        </div>
      </div>
    </section>
  );
}