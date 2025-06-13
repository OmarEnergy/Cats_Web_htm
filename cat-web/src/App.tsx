import './index.css';
import Hero from './Hero.tsx';
import About from './About.tsx';
import Formaciones from './Formaciones.tsx';
import Testimonios from './Testimonios.tsx';
import Galeria from './Galeria.tsx';
import Blog from './Blog.tsx';
import Contacto from './Contacto.tsx';

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center font-sans">
        <div className="text-2xl font-bold">CATS</div>
        <div className="hidden md:flex space-x-6 text-sm uppercase">
          <a href="#hero" className="hover:text-gold">Inicio</a>
          <a href="#about" className="hover:text-gold">Sobre CATS</a>
          <a href="#formations" className="hover:text-gold">Formaciones</a>
          <a href="#testimonials" className="hover:text-gold">Testimonios</a>
          <a href="#gallery" className="hover:text-gold">Galería</a>
          <a href="#blog" className="hover:text-gold">Blog</a>
          <a href="#contact" className="hover:text-gold">Contacto</a>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-black text-white text-sm text-center py-8">
      <p>&copy; 2025 CATS Production. Todos los derechos reservados.</p>
    </footer>
  );
}

function App() {
  return (
    <div className="font-sans text-black scroll-smooth">
      <Nav />
      <main className="pt-16">
        <Hero />
        <About />
        <Formaciones />
        <Testimonios />
        <Galeria />
        <Blog />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}

export default App;
