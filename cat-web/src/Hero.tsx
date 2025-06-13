export default function Hero() {
  return (
    <section id="hero" className="relative h-screen flex flex-col items-center justify-center text-center bg-grayLight px-4">
      <img src="/hero.jpg" alt="Imagen de portada" className="absolute inset-0 w-full h-full object-cover opacity-50 -z-10" />
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black font-sans">Transformamos actores en leyendas de acción</h1>
      <p className="text-grayMedium mb-8 max-w-xl">Aprende con fuego. Entrena con alma. Actúa con verdad.</p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a href="#contact" className="bg-gold text-black px-6 py-3 rounded-full font-semibold">Solicita plaza</a>
        <a href="#gallery" className="border border-gold text-black px-6 py-3 rounded-full font-semibold">Ver en acción</a>
      </div>
    </section>
  );
}
