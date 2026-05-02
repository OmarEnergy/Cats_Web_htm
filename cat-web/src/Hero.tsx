import heroImg from './assets/hero.jpg';

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-white">
      <img src={heroImg} alt="Hero" className="absolute inset-0 object-cover w-full h-full" />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Transformamos actores en leyendas de acción</h1>
        <p className="mb-8 max-w-xl mx-auto">Aprende con fuego. Entrena con alma. Actúa con verdad.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="bg-gold text-black px-6 py-3 rounded-full font-semibold">Solicita plaza</a>
          <a href="#gallery" className="border border-gold text-black px-6 py-3 rounded-full font-semibold bg-white/75">Ver en acción</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
