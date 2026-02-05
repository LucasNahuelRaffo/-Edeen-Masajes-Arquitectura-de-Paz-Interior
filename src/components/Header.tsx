import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
    {
      name: 'Sobre Nosotros',
      href: '#sobre-nosotros'
    },
    {
      name: 'Servicios',
      href: '#servicios'
    }];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm py-2' : 'bg-transparent py-4'}`}
      initial={{
        y: -100
      }}
      animate={{
        y: 0
      }}
      transition={{
        duration: 0.5
      }}>

      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="relative z-50 group flex items-center">
          <div className={`transition-all duration-300 ${isScrolled ? 'w-24' : 'w-32'}`}>
            <img
              src="/src/img/edeen-logo-official.png"
              alt="Edeen Masajes Official Logo"
              className={`w-full h-auto object-contain transition-all duration-300 ${isScrolled ? 'brightness-0' : 'brightness-0 invert'}`}
            />
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              className={`group relative text-sm font-medium transition-colors ${isScrolled ? 'text-brown-800' : 'text-white/90'}`}>

              {link.name}

              {/* Animated Underline */}
              <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-amber-400 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out`} />
            </a>
          )}

          <a
            href={`https://wa.me/5491164647433?text=${encodeURIComponent("Hola Silvia! Me comunico desde la web, me gustaría solicitar un turno y recibir más información.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105 hover:shadow-lg ${isScrolled ? 'bg-amber-300 text-brown-900 hover:bg-amber-400' : 'bg-white text-brown-900 hover:bg-amber-100'}`}>

            Contacto
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative z-50 p-2 text-amber-400"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu">

          {isMobileMenuOpen ?
            <X size={28} /> :

            <Menu
              size={28}
              className={isScrolled ? 'text-brown-900' : 'text-white'} />

          }
        </button>

        {/* Mobile Navigation Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen &&
            <motion.div
              initial={{
                opacity: 0,
                clipPath: 'circle(0% at 100% 0%)'
              }}
              animate={{
                opacity: 1,
                clipPath: 'circle(150% at 100% 0%)'
              }}
              exit={{
                opacity: 0,
                clipPath: 'circle(0% at 100% 0%)'
              }}
              transition={{
                duration: 0.5,
                ease: 'easeInOut'
              }}
              className="fixed inset-0 bg-brown-900/95 backdrop-blur-xl z-40 flex items-center justify-center">

              <nav className="flex flex-col items-center gap-8 p-8">
                {navLinks.map((link, index) =>
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{
                      opacity: 0,
                      y: 20
                    }}
                    animate={{
                      opacity: 1,
                      y: 0
                    }}
                    transition={{
                      delay: 0.1 + index * 0.1
                    }}
                    className="text-2xl font-serif text-white hover:text-amber-300 transition-colors">

                    {link.name}
                  </motion.a>
                )}
                <motion.a
                  href="https://wa.me/5491164647433"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{
                    opacity: 0,
                    y: 20
                  }}
                  animate={{
                    opacity: 1,
                    y: 0
                  }}
                  transition={{
                    delay: 0.3
                  }}
                  className="mt-4 px-8 py-3 bg-amber-400 text-brown-900 rounded-full text-lg font-semibold hover:bg-amber-300 transition-colors">

                  Contacto
                </motion.a>
              </nav>
            </motion.div>
          }
        </AnimatePresence>
      </div>
    </motion.header>);

}