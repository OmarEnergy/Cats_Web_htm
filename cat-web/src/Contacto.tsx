export default function Contacto() {
  return (
    <section id="contact" className="py-20 px-4 bg-grayLight">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <img src="/contact.jpg" alt="Contacto" className="rounded-lg hidden md:block object-cover h-full w-full" />
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <h2 className="text-3xl font-bold text-center mb-8 text-black">Contacto &amp; Colaboraciones</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2" htmlFor="name">Nombre Completo</label>
              <input id="name" type="text" className="w-full border border-grayMedium p-3 rounded" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2" htmlFor="email">Email</label>
              <input id="email" type="email" className="w-full border border-grayMedium p-3 rounded" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2" htmlFor="subject">Asunto</label>
              <input id="subject" type="text" className="w-full border border-grayMedium p-3 rounded" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2" htmlFor="message">Tu Mensaje</label>
              <textarea id="message" rows={5} className="w-full border border-grayMedium p-3 rounded" />
            </div>
            <div className="text-center">
              <button type="submit" className="bg-gold text-black px-6 py-3 rounded-full font-semibold">Enviar Mensaje</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
