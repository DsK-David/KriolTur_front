import Image from "next/image";
const Banner = () => (
  <section className="relative bg-gradient-to-r from-primary via-accent to-secondary text-white py-32 px-6 overflow-hidden">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
      <div className="text-center md:text-left md:max-w-xl animate-fade-in">
        <h1 className="text-5xl font-extrabold mb-6 leading-tight animate-fade-in-down">
          Explore as belezas de Cabo Verde
        </h1>
        <p className="text-lg leading-relaxed mb-6 opacity-80 animate-fade-in">
          Descubra trilhas, praias paradisíacas e cultura local com a KriolTur,
          sua plataforma interativa de turismo.
        </p>
        <div className="flex justify-center md:justify-start space-x-4">
          <button className="bg-sun text-primary px-8 py-4 rounded-full font-semibold shadow-lg transform hover:scale-105 transition duration-300 animate-fade-in-right">
            Comece Agora
          </button>
          <button className="bg-transparent border border-white text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-white hover:text-primary transition duration-300 animate-fade-in-left">
            Saiba Mais
          </button>
        </div>
      </div>
      <div className="animate-float">
        <Image
          src="/icon-darkmode.png"
          width={300}
          height={200}
          alt="Ilustração de Cabo Verde"
          className="w-full max-w-md mx-auto"
        />
      </div>
    </div>
    <div className="absolute -top-16 -left-16 w-64 h-64 bg-sand opacity-20 rounded-full animate-pulse"></div>
    <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-sand opacity-10 rounded-full"></div>
  </section>
);

export default Banner;
