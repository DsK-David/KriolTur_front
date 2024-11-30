// components/Sobre.js
"use client"; // Marcação para o componente de cliente

const Sobre = () => {
  return (
    <section className="bg-gradient-to-r from-[#003366] to-[#005082] py-20 text-center text-white">
      <h2 className="text-4xl font-semibold mb-6 text-[#FF6347]">
        Sobre a KriolTur
      </h2>

      <p className="text-lg max-w-4xl mx-auto mb-8 opacity-0 animate-fadeIn animate-delay-500">
        A <span className="font-bold text-[#FF6347]">KriolTur</span> é a
        plataforma revolucionária para quem deseja explorar Cabo Verde de
        maneira única e autêntica. Com a nossa interface moderna e intuitiva,
        oferecemos um guia completo com informações precisas sobre os melhores
        pontos turísticos, cultura local e experiências inesquecíveis.
      </p>

      <h3 className="text-2xl font-semibold mb-6 text-[#FF6347]">
        Por que escolher Cabo Verde?
      </h3>
      <p className="text-lg max-w-3xl mx-auto mb-8 opacity-0 animate-fadeIn animate-delay-1000">
        Cabo Verde é um destino incrível, conhecido por suas paisagens
        paradisíacas, praias deslumbrantes e cultura vibrante. Cada ilha tem sua
        própria magia, desde as trilhas montanhosas de Santiago até os recantos
        tranquilos de Boa Vista. Em Cabo Verde, o turismo é mais do que viagens,
        é uma imersão em tradições e belezas naturais preservadas.
      </p>

      <h3 className="text-2xl font-semibold mb-6 text-[#FF6347]">
        Benefícios da KriolTur
      </h3>
      <ul className="text-lg max-w-3xl mx-auto mb-8 opacity-0 animate-fadeIn animate-delay-1500">
        <li className="mb-4">
          <strong className="font-semibold">
            Descubra o Melhor de Cabo Verde:
          </strong>{" "}
          Navegue por um catálogo completo de pontos turísticos, atividades
          culturais e belezas naturais.
        </li>
        <li className="mb-4">
          <strong className="font-semibold">Planejamento Simplificado:</strong>{" "}
          Organize sua viagem de forma rápida e eficiente com acesso direto a
          todas as informações necessárias.
        </li>
        <li className="mb-4">
          <strong className="font-semibold">Sustentabilidade e Cultura:</strong>{" "}
          Apoie o turismo sustentável, promovendo a preservação ambiental e o
          incentivo às empresas locais.
        </li>
        <li className="mb-4">
          <strong className="font-semibold">Experiências Autênticas:</strong>{" "}
          Participe de eventos culturais, explore a gastronomia local e vivencie
          o turismo de forma imersiva.
        </li>
      </ul>

      <h3 className="text-2xl font-semibold mb-6 text-[#FF6347]">
        Junte-se a Nós!
      </h3>
      <p className="text-lg max-w-3xl mx-auto mb-8 opacity-0 animate-fadeIn animate-delay-2000">
        Ao escolher a KriolTur, você não está apenas planejando a sua viagem,
        mas também contribuindo para a valorização do turismo sustentável em
        Cabo Verde. Junte-se a nós e seja parte de um movimento que impulsiona a
        economia local, preserva as tradições e promove um turismo consciente e
        de qualidade.
      </p>

      <button className="bg-[#FF6347] text-white py-3 px-10 rounded-full shadow-lg hover:bg-[#FF4500] text-lg transition-all duration-300 transform hover:scale-105">
        Saiba Mais
      </button>
    </section>
  );
};

export default Sobre;
