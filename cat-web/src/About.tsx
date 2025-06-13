export default function About() {
  return (
    <section id="about" className="py-20 bg-white px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <img className="rounded-lg" src="/about.jpg" alt="Mónica de la Nuez" />
        <div>
          <h2 className="text-3xl font-bold mb-4 text-black">Sobre CATS Production: Donde lo real no se improvisa.</h2>
          <p className="mb-4 text-grayMedium">En CATS Production, liderados por Mónica de la Nuez, convertimos talento en impacto visual...</p>
          <p className="font-semibold mb-4 text-gold">Nací como policía. Renací como actriz. Hoy, formo guerreros de la interpretación.</p>
          <p className="text-grayMedium">Mónica de la Nuez, ex-policía nacional, actriz y entrenadora, ha vivido la acción en carne propia.</p>
        </div>
      </div>
    </section>
  );
}
