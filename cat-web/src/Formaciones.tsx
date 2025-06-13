function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="shadow-sm rounded-lg overflow-hidden bg-white">
      <img src="/formations.jpg" alt={title} className="h-40 w-full object-cover" />
      <div className="p-6">
        <h3 className="font-semibold text-black mb-2">{title}</h3>
        <p className="text-grayMedium mb-4 text-sm">{desc}</p>
        <a href="#contact" className="text-gold font-semibold">Solicita plaza</a>
      </div>
    </div>
  );
}

export default function Formaciones() {
  return (
    <section id="formations" className="py-20 px-4 bg-grayLight">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">Nuestras Formaciones</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card title="Arma Corta" desc="Domina el manejo de armas cortas con realismo y seguridad." />
          <Card title="Esgrima Escénica" desc="Coreografía de combate con espada y seguridad en duelos." />
          <Card title="Acting para Acción" desc="Expresión emocional y física para escenas de alto impacto." />
        </div>
      </div>
    </section>
  );
}
