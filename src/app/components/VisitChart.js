// components/Grafico.js
"use client"; // Adicione esta linha para tornar este componente um Componente de Cliente

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registrando os componentes do Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Grafico = () => {
  const data = {
    labels: ["Cidade Velha", "Mindelo", "Santa Maria", "Sal Rei", "Praia"],
    datasets: [
      {
        label: "Pontos Turísticos Visitados",
        data: [1200, 1500, 1800, 1100, 1300], // Dados de exemplo
        backgroundColor: "#48cae4", // Cor do gráfico
        borderColor: "#0077b6", // Cor da borda
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Pontos Turísticos Mais Visitados em Cabo Verde",
      },
    },
  };

  return (
    <section className="py-16 bg-sand text-center">
      <h2 className="text-4xl font-bold text-primary mb-6">
        Estatísticas de Visitação
      </h2>
      <div className="max-w-4xl mx-auto">
        <Bar data={data} options={options} />
      </div>
    </section>
  );
};

export default Grafico;
