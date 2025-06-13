import './index.css';
import Hero from './Hero';
import About from './About';

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


function Card({title, desc, img}:{title:string; desc:string; img:string}) {
  return (
    <div className="shadow-sm rounded-lg overflow-hidden bg-white">
      <img src={img} alt={title} className="h-40 w-full object-cover" />
      <div className="p-6">
        <h3 className="font-semibold text-black mb-2">{title}</h3>
        <p className="text-grayMedium mb-4 text-sm">{desc}</p>
        <a href="#contact" className="text-gold font-semibold">Solicita plaza</a>
      </div>
    </div>
  );
}

function Formations() {
  return (
    <section id="formations" className="py-20 px-4 bg-grayLight">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">Nuestras Formaciones</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card title="Arma Corta" desc="Domina el manejo de armas cortas con realismo y seguridad." img="https://images.unsplash.com/photo-1623348123012-70603f0b0c60?q=80&w=2070&auto=format&fit=crop" />
          <Card title="Esgrima Escénica" desc="Coreografía de combate con espada y seguridad en duelos." img="https://images.unsplash.com/photo-1579624536294-f203875323a6?q=80&w=2070&auto=format&fit=crop" />
          <Card title="Acting para Acción" desc="Expresión emocional y física para escenas de alto impacto." img="https://images.unsplash.com/photo-1596700812903-888e7a0a6a24?q=80&w=2070&auto=format&fit=crop" />
        </div>
      </div>
    </section>
  );
}

function Testimonial({text,name,role,img}:{text:string;name:string;role:string;img:string}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <p className="italic mb-4 text-grayMedium">{text}</p>
      <div className="flex items-center gap-4">
        <img src={img} className="w-12 h-12 rounded-full object-cover" />
        <div>
          <p className="font-semibold text-black">{name}</p>
          <p className="text-sm text-grayMedium">{role}</p>
        </div>
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">Lo que dicen nuestros guerreros</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Testimonial text="No solo aprendí a portar un arma. Aprendí a sostener mi presencia." name="Javier R." role="Actor" img="https://images.unsplash.com/photo-1507003211169-69fe1c5a392?q=80&w=1974&auto=format&fit=crop" />
          <Testimonial text="La energía de Mónica es contagiosa. Te empuja a superar tus límites." name="Sofía M." role="Actriz de Acción" img="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop" />
          <Testimonial text="Cada entrenamiento es un reto, pero la recompensa es inmensa." name="Carlos G." role="Intérprete" img="https://images.unsplash.com/photo-1547425260-76bc0fafa2d9?q=80&w=2070&auto=format&fit=crop" />
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="py-20 px-4 bg-grayLight">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">Galería en acción</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <img className="rounded-lg object-cover h-56 w-full" src="https://images.unsplash.com/photo-1542831835-f71661647413?q=80&w=2070&auto=format&fit=crop" alt="Escena" />
          <img className="rounded-lg object-cover h-56 w-full" src="https://images.unsplash.com/photo-1589823908901-443b74542d1f?q=80&w=2070&auto=format&fit=crop" alt="Detrás" />
          <img className="rounded-lg object-cover h-56 w-full" src="https://images.unsplash.com/photo-1549476465-b778d91f24e9?q=80&w=2070&auto=format&fit=crop" alt="Entrenamiento" />
          <img className="rounded-lg object-cover h-56 w-full" src="https://images.unsplash.com/photo-1542831835-f71661647413?q=80&w=2070&auto=format&fit=crop" alt="Dirección" />
        </div>
      </div>
    </section>
  );
}

function BlogCard({title,desc,img}:{title:string;desc:string;img:string}) {
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

function Blog() {
  return (
    <section id="blog" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">Diario de Rodaje</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <BlogCard title="Cómo resurgir cuando todo se rompe" desc="La vida a veces te derriba. Aquí se forja el verdadero carácter." img="https://images.unsplash.com/photo-1550505193-c0032f6b1e7c?q=80&w=2070&auto=format&fit=crop" />
          <BlogCard title="Por qué no gritar te hace más fuerte" desc="La fuerza reside en la contención y la mirada." img="https://images.unsplash.com/photo-1550505193-c0032f6b1e7c?q=80&w=2070&auto=format&fit=crop" />
          <BlogCard title="El día que un gigante me hizo temblar" desc="Anécdotas de rodaje que forjan el carácter." img="https://images.unsplash.com/photo-1550505193-c0032f6b1e7c?q=80&w=2070&auto=format&fit=crop" />
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-grayLight">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-sm">
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
    </section>
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
        <Formations />
        <Testimonials />
        <Gallery />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
