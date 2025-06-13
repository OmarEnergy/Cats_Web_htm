function Testimonial({ text, name, role }: { text: string; name: string; role: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <p className="italic mb-4 text-grayMedium">{text}</p>
      <div className="flex items-center gap-4">
        <img src="/testimonials.jpg" className="w-12 h-12 rounded-full object-cover" alt={name} />
        <div>
          <p className="font-semibold text-black">{name}</p>
          <p className="text-sm text-grayMedium">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonios() {
  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">Lo que dicen nuestros guerreros</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Testimonial text="No solo aprendí a portar un arma. Aprendí a sostener mi presencia." name="Javier R." role="Actor" />
          <Testimonial text="La energía de Mónica es contagiosa. Te empuja a superar tus límites." name="Sofía M." role="Actriz de Acción" />
          <Testimonial text="Cada entrenamiento es un reto, pero la recompensa es inmensa." name="Carlos G." role="Intérprete" />
        </div>
      </div>
    </section>
  );
}
