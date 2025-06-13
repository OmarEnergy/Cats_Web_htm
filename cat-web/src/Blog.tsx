function BlogCard({ title, desc, img }: { title: string; desc: string; img: string }) {
  return (
    <article className="bg-white rounded-lg shadow-sm overflow-hidden">
      <img src={img} alt={title} className="h-40 w-full object-cover" />
      <div className="p-6">
        <h3 className="font-semibold text-black mb-2">{title}</h3>
        <p className="text-sm text-grayMedium mb-4">{desc}</p>
        <a href="#" className="text-gold font-semibold">Leer más</a>
      </div>
    </article>
  );
}

export default function Blog() {
  return (
    <section id="blog" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">Diario de Rodaje</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <BlogCard title="Cómo resurgir cuando todo se rompe" desc="La vida a veces te derriba. Aquí se forja el verdadero carácter." img="/blog1.jpg" />
          <BlogCard title="Por qué no gritar te hace más fuerte" desc="La fuerza reside en la contención y la mirada." img="/blog2.jpg" />
          <BlogCard title="El día que un gigante me hizo temblar" desc="Anécdotas de rodaje que forjan el carácter." img="/blog3.jpg" />
        </div>
      </div>
    </section>
  );
}
