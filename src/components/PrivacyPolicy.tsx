import { motion } from 'framer-motion';

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-stone-50 py-20 px-6 font-sans">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto bg-white/70 backdrop-blur-md p-10 rounded-3xl shadow-xl border border-white/50"
      >
        <h1 className="text-4xl md:text-5xl font-serif text-brown-900 mb-8 border-b border-amber-200 pb-4">
          Política de Privacidad
        </h1>
        
        <div className="space-y-8 text-stone-700 leading-relaxed">
          <section>
            <p className="text-lg">
              En Edeen Masajes, respetamos tu privacidad y nos comprometemos a proteger tus datos personales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brown-800 mb-3">¿Qué datos recopilamos?</h2>
            <p>
              Recopilamos únicamente tu nombre y número de teléfono cuando te comunicás con nosotros a través de WhatsApp, con el fin de gestionar tu reserva y brindarte atención personalizada.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brown-800 mb-3">¿Cómo usamos tus datos?</h2>
            <p>
              Tus datos se utilizan exclusivamente para coordinar turnos y enviarte información sobre nuestros servicios. No los compartimos con terceros.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brown-800 mb-3">¿Cómo podés solicitar la eliminación de tus datos?</h2>
            <p>
              Podés enviarnos un email a <a href="mailto:franbalestra10@gmail.com" className="text-amber-700 font-semibold hover:underline">franbalestra10@gmail.com</a> solicitando la eliminación de tus datos. Procesaremos tu solicitud en un plazo máximo de 30 días.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brown-800 mb-3">Contacto</h2>
            <p>
              Para cualquier consulta sobre privacidad escribinos a: <a href="mailto:franbalestra10@gmail.com" className="text-amber-700 font-semibold hover:underline">franbalestra10@gmail.com</a>
            </p>
          </section>
        </div>

        <div className="mt-12 text-center">
          <a 
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState({}, '', '/');
              window.dispatchEvent(new PopStateEvent('popstate'));
              window.scrollTo(0, 0);
            }}
            className="inline-block px-8 py-3 bg-amber-400 text-brown-900 rounded-full font-semibold hover:bg-amber-500 transition-all hover:scale-105 shadow-md"
          >
            Volver al inicio
          </a>
        </div>
      </motion.div>
    </div>
  );
}
