import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="bg-brown-900 text-cream-100/40 py-8 text-center text-sm overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto px-6"
      >
        {/* Footer Logo */}
        <div className="flex flex-col items-center mb-6">
          <img
            src="/edeen-logo-official.png"
            alt="Edeen Masajes Official Logo"
            loading="lazy"
            className="w-40 h-auto object-contain brightness-0 invert opacity-40 hover:opacity-80 transition-opacity duration-300"
          />
        </div>

        {/* NAP — Name / Address / Phone */}
        <address className="not-italic text-cream-100/30 text-xs leading-relaxed mb-4">
          Gral. José de San Martín 3468, Florida Oeste, Buenos Aires, Argentina
          <br />
          <a href="https://wa.me/5491134115625" className="hover:text-cream-50 transition-colors">
            +54 9 11 3411-5625
          </a>
        </address>

        <p>
          &copy; {new Date().getFullYear()} Edeen Masajes. Todos los derechos
          reservados.
        </p>
        <div className="mt-2 flex justify-center gap-4">
          <a href="#" className="hover:text-cream-50 transition-colors">
            Aviso de Privacidad
          </a>
          <span>|</span>
          <a href="#" className="hover:text-cream-50 transition-colors">
            Términos y Condiciones
          </a>
        </div>
      </motion.div>
    </footer>
  );
}