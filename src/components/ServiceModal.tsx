import { useEffect, useRef, useState } from 'react';
import { X, Clock, Calendar, Play, Sparkles, Wind } from 'lucide-react';
import gsap from 'gsap';

interface ServiceModalProps {
    isOpen: boolean;
    onClose: () => void;
    service: {
        type?: 'membership' | 'individual';
        title: string;
        description: string;
        longDescription?: string;
        price: string;
        duration: string;
        icon: any;
        benefits?: readonly string[];
        treatments?: readonly string[];
    } | null;
}

export function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
    const overlayRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            const lenis = (window as any).lenis;
            if (lenis) lenis.stop();

            const tl = gsap.timeline();
            tl.to(overlayRef.current, {
                opacity: 1,
                duration: 0.4,
                display: 'flex',
                ease: 'power2.out'
            })
                .fromTo(contentRef.current,
                    { scale: 0.9, opacity: 0, y: 30 },
                    { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: 'back.out(1.2)' },
                    "-=0.2"
                );
        } else {
            document.body.style.overflow = 'unset';
            const lenis = (window as any).lenis;
            if (lenis) lenis.start();

            if (overlayRef.current) {
                gsap.to(overlayRef.current, {
                    opacity: 0,
                    duration: 0.3,
                    display: 'none',
                    ease: 'power2.in'
                });
            }
            setIsPlaying(false);
            if (videoRef.current) {
                videoRef.current.pause();
                videoRef.current.currentTime = 0;
            }
        }
    }, [isOpen]);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    if (!service) return null;

    return (
        <div
            ref={overlayRef}
            className="fixed inset-0 z-[999] hidden items-center justify-center p-4 md:p-12 md:pt-28 bg-black/90 backdrop-blur-md opacity-0"
            onClick={(e) => e.target === overlayRef.current && onClose()}
        >
            <div
                ref={contentRef}
                className="relative w-full max-w-4xl bg-[#0a0a0a] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 flex flex-col md:flex-row h-full max-h-[75vh]"
            >
                <button
                    onClick={onClose}
                    className="absolute top-5 right-5 z-[100] p-2.5 bg-black/60 hover:bg-black/80 backdrop-blur-md rounded-full text-white transition-all hover:scale-110 border border-white/10"
                >
                    <X size={20} />
                </button>

                <div className="flex flex-col md:flex-row w-full h-full overflow-hidden">
                    {/* Left Column: Info - FIXED SCROLL */}
                    <div
                        data-lenis-prevent
                        className="w-full md:w-[60%] p-8 md:p-10 overflow-y-auto bg-gradient-to-b from-[#141414] to-[#0a0a0a] custom-modal-scroll flex flex-col min-h-0"
                    >
                        <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-amber-400 text-black shadow-lg flex-shrink-0">
                            <service.icon size={24} strokeWidth={1.5} />
                        </div>

                        <h2 className="text-2xl md:text-3xl font-serif text-white mb-5 leading-tight flex-shrink-0">
                            {service.title}
                        </h2>

                        <div className="flex flex-wrap gap-3 mb-8 flex-shrink-0">
                            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl text-amber-200 border border-white/5">
                                <Clock size={16} className="text-amber-400" />
                                <span className="font-medium text-sm tracking-wide">{service.duration}</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl text-amber-200 border border-white/5">
                                <span className="text-amber-400 font-bold text-sm">$</span>
                                <span className="font-bold text-base tracking-tight">{service.price.replace('$', '')}</span>
                            </div>
                        </div>

                        <div className="space-y-6 text-white/70 leading-relaxed font-light text-lg mb-12">
                            <p className="font-medium text-white italic border-l-4 border-amber-400 pl-6 py-2 bg-white/5 rounded-r-xl">
                                {service.description}
                            </p>

                            <div className="text-white/60 leading-relaxed">
                                {service.longDescription}
                            </div>

                            {/* Conditional Content: Membership Benefits */}
                            {service.type === 'membership' && service.benefits && (
                                <div className="bg-white/5 rounded-2xl p-6 border border-white/10 mt-6">
                                    <h4 className="text-amber-400 font-bold mb-4 flex items-center gap-2">
                                        <Sparkles size={20} /> Beneficios Incluidos:
                                    </h4>
                                    <ul className="space-y-3">
                                        {service.benefits.map((benefit, i) => (
                                            <li key={i} className="flex items-start gap-3 text-white/80 text-base">
                                                <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2.5 flex-shrink-0" />
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Conditional Content: Individual Treatments */}
                            {service.type === 'individual' && service.treatments && (
                                <div className="bg-white/5 rounded-2xl p-6 border border-white/10 mt-6">
                                    <h4 className="text-amber-400 font-bold mb-4 flex items-center gap-2">
                                        <Wind size={20} /> Tratamientos Disponibles:
                                    </h4>
                                    <div className="grid grid-cols-1 gap-3">
                                        {service.treatments.map((treatment, i) => (
                                            <div key={i} className="flex items-center gap-3 text-white/80 text-base bg-white/5 p-4 rounded-xl border border-white/5 overflow-hidden">
                                                <div className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                                                <span className="font-medium">{treatment}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="mt-auto pt-6 pb-2">
                            <a
                                href={`https://wa.me/5491134115625?text=${encodeURIComponent(
                                    `Hola Silvia! Me interesa ${service.type === 'membership' ? `la Membresía Mensual de: ${service.price}` : `un Turno Individual de: ${service.price}`}. Me gustaría recibir más información.`
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full md:w-auto px-10 py-5 bg-amber-400 hover:bg-amber-300 text-black font-black rounded-2xl transition-all shadow-xl hover:shadow-amber-400/30 transform hover:-translate-y-1 flex items-center justify-center gap-3 active:scale-95 uppercase tracking-widest text-sm"
                            >
                                <Calendar size={20} />
                                Reservar ahora
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Video - MANUAL PLAYBACK */}
                    <div
                        className="w-full md:w-[40%] bg-black relative flex items-center justify-center cursor-pointer group"
                        onClick={togglePlay}
                    >
                        <video
                            ref={videoRef}
                            loop
                            playsInline
                            preload="none"
                            className="w-full h-full object-cover"
                        >
                            <source src="/Video-Masajes.mp4" type="video/mp4" />
                        </video>

                        <div className={`absolute inset-0 bg-black/40 transition-opacity duration-500 ${isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <div className="w-24 h-24 rounded-full bg-amber-400/20 backdrop-blur-xl flex items-center justify-center border border-amber-400/40 text-amber-400 mb-4 transition-transform group-hover:scale-110 shadow-2xl">
                                    <Play size={40} fill="currentColor" />
                                </div>
                                <span className="text-amber-200 uppercase tracking-[0.3em] text-sm font-bold font-serif bg-black/40 px-6 py-2 rounded-full backdrop-blur-md border border-white/10">
                                    Ver Procedimiento
                                </span>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />
                        </div>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        .custom-modal-scroll {
          scrollbar-width: thin;
          scrollbar-color: rgba(251, 191, 36, 0.3) transparent;
        }
        .custom-modal-scroll::-webkit-scrollbar {
          width: 5px;
        }
        .custom-modal-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-modal-scroll::-webkit-scrollbar-thumb {
          background: rgba(251, 191, 36, 0.3);
          border-radius: 10px;
        }
      `}} />
        </div>
    );
}
