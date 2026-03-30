import { motion } from 'framer-motion';

export function DataDeletion() {
  return (
    <div className="min-h-screen bg-stone-50 py-20 px-6 font-sans">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto bg-white/70 backdrop-blur-md p-10 rounded-3xl shadow-xl border border-white/50"
      >
        <h1 className="text-4xl md:text-5xl font-serif text-brown-900 mb-8 border-b border-amber-200 pb-4">
          Solicitud de Eliminación de Datos
        </h1>
        
        <div className="space-y-8 text-stone-700 leading-relaxed">
          <section>
            <p className="text-lg">
              Si deseás que eliminemos tus datos personales de nuestros registros, podés solicitarlo de la siguiente manera:
            </p>
          </section>

          <section className="bg-amber-50/50 p-6 rounded-2xl border border-amber-100">
            <h2 className="text-2xl font-serif text-brown-800 mb-4">Instrucciones</h2>
            <ul className="list-disc list-inside space-y-4 text-stone-700">
              <li>
                Enviá un email a <a href="mailto:franbalestra10@gmail.com" className="text-amber-700 font-semibold hover:underline">franbalestra10@gmail.com</a>
              </li>
              <li>
                Incluí el asunto <strong>"Eliminación de datos"</strong>
              </li>
              <li>
                Indicá tu <strong>nombre</strong> y <strong>número de teléfono</strong>.
              </li>
            </ul>
          </section>

          <section>
            <p>
              Procesaremos tu solicitud en un plazo máximo de <strong>30 días</strong> y te confirmaremos vía email cuando tus datos hayan sido eliminados correctamente de nuestra base de datos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brown-800 mb-3">Contacto Directo</h2>
            <p>
              Si tenés dudas adicionales sobre el proceso, no dudes en escribirnos a <a href="mailto:franbalestra10@gmail.com" className="text-amber-700 font-semibold hover:underline">franbalestra10@gmail.com</a>
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
