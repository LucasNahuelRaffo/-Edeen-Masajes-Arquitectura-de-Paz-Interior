import { lazy, Suspense } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FloatingParticles } from './components/ui/FloatingParticles';
import { SmoothScroll } from './components/ui/SmoothScroll';
import { CustomCursor } from './components/ui/CustomCursor';
import { motion } from 'framer-motion';
import { LocalBusinessSchema } from './components/seo/LocalBusinessSchema';

const About = lazy(() => import('./components/About').then(m => ({ default: m.About })));
const Services = lazy(() => import('./components/Services').then(m => ({ default: m.Services })));
const Benefits = lazy(() => import('./components/Benefits').then(m => ({ default: m.Benefits })));
const Testimonials = lazy(() => import('./components/Testimonials').then(m => ({ default: m.Testimonials })));
const Contact = lazy(() => import('./components/Contact').then(m => ({ default: m.Contact })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));
const WhatsAppButton = lazy(() => import('./components/WhatsAppButton').then(m => ({ default: m.WhatsAppButton })));

import bgFallbackImg from './img/piedrascalientes.jpeg';

export function App() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <LocalBusinessSchema />
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
              alt="Ambiente relajante en Edeen Masajes Vicente López - Piedras Calientes"
              className="w-full h-full object-cover" 
            />
          </motion.video>
        </div>

        <FloatingParticles />
        <Header />

        <main className="relative z-10">
          <Hero />

          <Suspense fallback={<div className="min-h-screen bg-transparent" />}>
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
          </Suspense>
        </main>

        <div className="relative z-10">
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </div>
        <Suspense fallback={null}>
          <WhatsAppButton />
        </Suspense>
      </motion.div>
    </SmoothScroll>
  );
}