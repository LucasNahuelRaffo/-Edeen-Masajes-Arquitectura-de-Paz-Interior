import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Benefits } from './components/Benefits';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { FloatingParticles } from './components/ui/FloatingParticles';
import { SmoothScroll } from './components/ui/SmoothScroll';
import { CustomCursor } from './components/ui/CustomCursor';
import { motion } from 'framer-motion';

import bgFallbackImg from './img/piedrascalientes.jpeg';

export function App() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="min-h-screen font-sans selection:bg-amber-200 selection:text-stone-950 overflow-x-hidden"
      >
        {/* Global Fixed Video Background */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10" />{' '}
          {/* Overlay for contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 z-10" />
          <motion.video
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            autoPlay
            muted
            loop
            playsInline
            poster={bgFallbackImg}
            className="w-full h-full object-cover"
          >
            <source
              src="https://player.vimeo.com/external/384761655.sd.mp4?s=383ab4dbc773cd0d5635d965581f96e4768393d0&profile_id=165&oauth2_token_id=57447761"
              type="video/mp4" 
            />
            {/* Fallback image if video fails */}
            <img
              src={bgFallbackImg}
              alt="Spa Background"
              className="w-full h-full object-cover" 
            />
          </motion.video>
        </div>

        <FloatingParticles />
        <Header />

        <main className="relative z-10">
          <Hero />

          <div id="sobre-nosotros">
            <About />
          </div>

          <div id="servicios">
            <Services />
          </div>

          <Benefits />

          <Testimonials />

          <div id="contacto">
            <Contact />
          </div>
        </main>

        <div className="relative z-10">
          <Footer />
        </div>
        <WhatsAppButton />
      </motion.div>
    </SmoothScroll>
  );
}