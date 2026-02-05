export function Footer() {
  return (
    <footer className="bg-brown-900 text-cream-100/40 py-8 text-center text-sm">
      <div className="container mx-auto px-6">
        {/* Footer Logo */}
        <div className="flex flex-col items-center mb-6">
          <img
            src="/edeen-logo-official.png"
            alt="Edeen Masajes Official Logo"
            className="w-40 h-auto object-contain brightness-0 invert opacity-40"
          />
        </div>

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
      </div>
    </footer>);

}