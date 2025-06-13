import aboutImg from './assets/about.jpg';

const About = () => {
  return (
    <section className="flex flex-col md:flex-row items-center gap-8 py-16 px-6 bg-black text-white">
      <div className="md:w-1/2">
        <img
          src={aboutImg}
          alt="Mónica de la Nuez"
          className="w-full h-auto rounded-lg shadow-lg object-cover"
        />
      </div>
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold mb-4">
          Nací como policía. Renací como actriz.
        </h2>
        <p className="mb-4 text-lg">
          Hoy formo guerreros de la interpretación. Desde la verdad. Desde el cuerpo. Desde el alma. CATS es más que formación, es transformación.
        </p>
        <p className="text-md italic text-red-400">
          “Lo real no se improvisa”
        </p>
      </div>
    </section>
  );
};

export default About;
