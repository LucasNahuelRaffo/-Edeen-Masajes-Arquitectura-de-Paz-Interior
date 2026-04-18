import { trackLead } from '../utils/analytics';

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/5491134115625?text=Hola,%20me%20gustaría%20agendar%20una%20cita%20en%20Edeen%20Masajes"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackLead()}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-sage-400 text-white shadow-lg hover:bg-sage-500 transition-colors duration-300"
      style={{
        borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%' // Organic blob shape
      }}
      whileHover={{
        scale: 1.1
      }}
      whileTap={{
        scale: 0.9
      }}
      initial={{
        scale: 0,
        opacity: 0
      }}
      animate={{
        scale: 1,
        opacity: 1
      }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20
      }}>

      <div
        className="absolute inset-0 rounded-full bg-sage-400 opacity-30 animate-ping"
        style={{
          borderRadius: 'inherit'
        }}>
      </div>
      <MessageCircle size={32} strokeWidth={2} />
      <span className="sr-only">Contactar por WhatsApp</span>
    </motion.a>);
}