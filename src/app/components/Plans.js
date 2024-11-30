const planos = [
  {
    title: "Grátis",
    price: "€0",
    features: ["Acesso básico", "Visualização de mapas", "Pontos turísticos"],
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
    buttonColor: "bg-blue-600 text-white hover:bg-blue-700",
  },
  {
    title: "Pro",
    price: "€10/mês",
    features: ["Guias interativos", "Recomendações", "Suporte premium"],
    bgColor: "bg-teal-50",
    textColor: "text-teal-600",
    buttonColor: "bg-teal-600 text-white hover:bg-teal-700",
  },
  {
    title: "Empresa",
    price: "€30/mês",
    features: ["Múltiplos usuários", "Relatórios detalhados", "Integrações"],
    bgColor: "bg-sky-50",
    textColor: "text-sky-600",
    buttonColor: "bg-sky-600 text-white hover:bg-sky-700",
  },
];

const Planos = () => (
  <section id="planos" className="py-16 px-6">
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold text-primary mb-12">
        Escolha o Plano Ideal
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {planos.map((plano, idx) => (
          <div
            key={idx}
            className={`${plano.bgColor} p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300`}
          >
            <h3 className={`text-2xl font-bold ${plano.textColor} mb-4`}>
              {plano.title}
            </h3>
            <p className="text-xl font-bold mb-4">{plano.price}</p>
            <ul className="text-left mb-6">
              {plano.features.map((feature, index) => (
                <li key={index} className="mb-2">
                  ✅ {feature}
                </li>
              ))}
            </ul>
            <button
              className={`px-6 py-3 rounded-full font-semibold ${plano.buttonColor}`}
            >
              Selecionar
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Planos;
