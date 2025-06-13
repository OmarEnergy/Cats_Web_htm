export default function Galeria() {
  return (
    <section id="gallery" className="py-20 px-4 bg-grayLight">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">Galería en acción</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <img className="rounded-lg object-cover h-56 w-full" src="/gallery.jpg" alt="Escena" />
          <img className="rounded-lg object-cover h-56 w-full" src="/gallery.jpg" alt="Detrás" />
          <img className="rounded-lg object-cover h-56 w-full" src="/gallery.jpg" alt="Entrenamiento" />
          <img className="rounded-lg object-cover h-56 w-full" src="/gallery.jpg" alt="Dirección" />
        </div>
      </div>
    </section>
  );
}
