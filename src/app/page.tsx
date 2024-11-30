import Banner from "./components/Banner";
import Plans from "./components/Plans";
import Sobre from "./components/Sobre"
import VisitChart from "./components/VisitChart"
import Contacto from "./components/Contacto"
import  Navbar from "./components/Navbar"
// import AnimatedCard from "./components/AnimatedCard";
// import ThreeDScene from "./components/ThreeDScene"

export default function HomePage() {
  return (
    <div>
      <Navbar/>
      <Banner />
      <VisitChart />
      <Sobre />
      <Plans />
      <Contacto/>

      {/* <AnimatedCard /> */}
      {/* <ThreeDScene /> */}

      {/* Outras seções podem ser adicionadas */}
    </div>
  );
}
// "use client";
// import React, {
//   createContext,
//   useState,
//   useContext,
//   useEffect,
//   ReactNode,
// } from "react";
// import { motion } from "framer-motion";
// import { Zap, Rocket, Check, Sun, Moon } from "lucide-react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";
// import Image from "next/image";
// interface ThemeContextType {
//   isDarkMode: boolean;
//   toggleTheme: () => void;
// }
// // Theme Context
// const ThemeContext = createContext<ThemeContextType>({
//   isDarkMode: true,
//   toggleTheme: () => {},
// });
// interface ThemeProviderProps {
//   children: ReactNode;
// }
// // Theme Provider Component
// export function ThemeProvider({ children }: ThemeProviderProps) {
//   const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

//   const toggleTheme = () => {
//     setIsDarkMode((prev) => !prev);
//   };

//   useEffect(() => {
//     document.documentElement.classList.toggle("dark", isDarkMode);
//   }, [isDarkMode]);

//   return (
//     <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }

// // Theme Toggle Component
// function ThemeToggle() {
//   const { isDarkMode, toggleTheme } = useContext(ThemeContext);

//   return (
//     <motion.button
//       onClick={toggleTheme}
//       whileHover={{ scale: 1.1 }}
//       whileTap={{ scale: 0.9 }}
//       className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-3 rounded-full shadow-xl hover:brightness-110"
//     >
//       {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
//     </motion.button>
//   );
// }

// const TopDestinationsData = [
//   { name: "Sal Island", visits: 85000 },
//   { name: "Mindelo", visits: 62000 },
//   { name: "Santa Maria", visits: 55000 },
//   { name: "Santiago", visits: 48000 },
//   { name: "Fogo Island", visits: 40000 },
// ];

// export default function Page() {
//   const { isDarkMode } = useContext(ThemeContext);

//   return (
//     <div
//       className={`${
//         isDarkMode
//           ? "bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white"
//           : "bg-white text-black"
//       } min-h-screen overflow-hidden`}
//     >
//       <ThemeToggle />

//       <nav
//         className={`fixed w-full z-50 ${
//           isDarkMode ? "bg-[#1E293B]/70" : "bg-gray-100/70"
//         } backdrop-blur-md shadow-xl`}
//       >
//         <div className="container mx-auto flex justify-between items-center p-4">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="flex items-center space-x-3"
//           >
//             <Rocket
//               className={`${isDarkMode ? "text-cyan-400" : "text-blue-600"}`}
//               size={32}
//             />
//             <span
//               className={`font-bold text-2xl ${
//                 isDarkMode ? "text-cyan-300" : "text-blue-600"
//               }`}
//             >
//               KriolTur
//             </span>
//           </motion.div>
//           <div className="space-x-6">
//             {["Home", "Sobre", "Planos", "Começar"].map((item) => (
//               <a
//                 key={item}
//                 href={`#${item.toLowerCase()}`}
//                 className={`hover:text-cyan-300 transition-colors tracking-wider uppercase text-sm ${
//                   isDarkMode ? "text-white" : "text-black"
//                 }`}
//               >
//                 {item}
//               </a>
//             ))}
//           </div>
//         </div>
//       </nav>

//       <header
//         id="home"
//         className="pt-24 container mx-auto grid md:grid-cols-2 gap-10 relative"
//       >
//         <div
//           className={`absolute top-0 left-0 w-full h-full ${
//             isDarkMode
//               ? "bg-gradient-to-r from-[#0F172A]/50 to-transparent"
//               : "bg-gradient-to-r from-gray-200/50 to-transparent"
//           } opacity-70 pointer-events-none`}
//         ></div>
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="space-y-6 relative z-10"
//         >
//           <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
//             Explore Cabo Verde
//             <br />
//             Além dos Limites
//           </h1>
//           <p
//             className={`${
//               isDarkMode ? "text-gray-300" : "text-gray-700"
//             } tracking-wide`}
//           >
//             Uma plataforma tecnológica que transforma sua experiência de viagem
//             em uma jornada digital imersiva e inteligente.
//           </p>
//           <div className="flex space-x-4">
//             <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full hover:scale-105 transition-transform">
//               Começar Agora
//             </button>
//             <button
//               className={`border ${
//                 isDarkMode
//                   ? "border-cyan-400 text-cyan-400"
//                   : "border-blue-600 text-blue-600"
//               } px-6 py-3 rounded-full hover:bg-cyan-400/10 transition`}
//             >
//               Saiba Mais
//             </button>
//           </div>
//         </motion.div>
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           className="relative z-10"
//         >
//           <div
//             className={`${
//               isDarkMode
//                 ? "bg-gradient-to-br from-cyan-600/30 to-blue-900/30"
//                 : "bg-gradient-to-br from-cyan-200/30 to-blue-300/30"
//             } absolute inset-0 rounded-xl blur-2xl`}
//           ></div>
//           <Image
//             src="/icon-darkmode.png"
//             alt="Cabo Verde Landscape"
//             width={250}
//             height={200}
//             className="relative z-10 rounded-xl shadow-2xl border-4 border-cyan-400/20"
//             loading="lazy"
//           />
//         </motion.div>
//       </header>

//       <section id="sobre" className="container mx-auto py-24 relative">
//         <div className="grid md:grid-cols-2 gap-10 items-center">
//           <div className="space-y-6">
//             <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
//               Tecnologia em Exploração
//             </h2>
//             <p
//               className={`${
//                 isDarkMode ? "text-gray-300" : "text-gray-700"
//               } mb-4`}
//             >
//               CaboTracks revoluciona o turismo digital com inteligência de
//               ponta, mapeamento precisão e experiências personalizadas.
//             </p>
//             <div className="space-y-4">
//               {[
//                 "Mapeamento Digital Inteligente",
//                 "Rotas Personalizadas com IA",
//                 "Experiências Imersivas em Tempo Real",
//               ].map((feature, index) => (
//                 <div key={index} className="flex items-center space-x-3">
//                   <Zap className="text-cyan-400" />
//                   <span
//                     className={`${
//                       isDarkMode ? "text-gray-200" : "text-gray-700"
//                     }`}
//                   >
//                     {feature}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <ResponsiveContainer width="100%" height={400}>
//             <BarChart data={TopDestinationsData}>
//               <XAxis dataKey="name" stroke="#4ade80" />
//               <YAxis stroke="#4ade80" />
//               <Tooltip />
//               <Bar dataKey="visits" fill="#22d3ee" />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//       </section>

//       <section
//         id="planos"
//         className={`${isDarkMode ? "bg-[#1E293B]" : "bg-gray-100"} py-24`}
//       >
//         <div className="container mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
//             Planos de Exploração
//           </h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 name: "Free",
//                 price: "0",
//                 features: ["5 Trilhas", "Mapa Básico", "Suporte Limitado"],
//                 color: "border-gray-600",
//               },
//               {
//                 name: "Pro",
//                 price: "9.99",
//                 features: [
//                   "Trilhas Ilimitadas",
//                   "Mapa Detalhado",
//                   "Suporte Prioritário",
//                 ],
//                 color: "border-cyan-500",
//               },
//               {
//                 name: "Premium",
//                 price: "19.99",
//                 features: [
//                   "Acesso Total",
//                   "Rotas Personalizadas",
//                   "Suporte 24/7",
//                 ],
//                 color: "border-blue-600",
//               },
//             ].map((plan) => (
//               <div
//                 key={plan.name}
//                 className={`border-2 ${plan.color} rounded-xl p-6 ${
//                   isDarkMode ? "bg-[#0F172A]/50" : "bg-white/50"
//                 } backdrop-blur-lg hover:scale-105 transition-transform`}
//               >
//                 <h3
//                   className={`text-xl font-bold mb-4 ${
//                     isDarkMode ? "text-cyan-300" : "text-blue-600"
//                   }`}
//                 >
//                   {plan.name}
//                 </h3>
//                 <p className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
//                   €{plan.price}/mês
//                 </p>
//                 <ul className="space-y-3 mb-6">
//                   {plan.features.map((feature) => (
//                     <li key={feature} className="flex items-center space-x-2">
//                       <Check className="text-cyan-400" />
//                       <span
//                         className={`${
//                           isDarkMode ? "text-gray-300" : "text-gray-700"
//                         }`}
//                       >
//                         {feature}
//                       </span>
//                     </li>
//                   ))}
//                 </ul>
//                 <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-full hover:brightness-110">
//                   Escolher {plan.name}
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section id="contato" className="container mx-auto py-24">
//         <div
//           className={`max-w-2xl mx-auto ${
//             isDarkMode ? "bg-[#1E293B]" : "bg-white"
//           } p-10 rounded-xl border-2 border-cyan-400/20`}
//         >
//           <h2 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
//             Conecte-se Conosco
//           </h2>
//           <form className="space-y-6">
//             <div className="grid md:grid-cols-2 gap-6">
//               <input
//                 type="text"
//                 placeholder="Nome"
//                 className={`w-full p-3 ${
//                   isDarkMode ? "bg-[#0F172A]" : "bg-gray-100"
//                 } border border-cyan-400/20 rounded-lg focus:outline-none focus:border-cyan-400`}
//               />
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className={`w-full p-3 ${
//                   isDarkMode ? "bg-[#0F172A]" : "bg-gray-100"
//                 } border border-cyan-400/20 rounded-lg focus:outline-none focus:border-cyan-400`}
//               />
//             </div>
//             <textarea
//               placeholder="Sua Mensagem"
//               className={`w-full p-3 ${
//                 isDarkMode ? "bg-[#0F172A]" : "bg-gray-100"
//               } border border-cyan-400/20 rounded-lg h-32 focus:outline-none focus:border-cyan-400`}
//             />
//             <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-full hover:brightness-110">
//               Enviar Mensagem
//             </button>
//           </form>
//         </div>
//       </section>
//     </div>
//   );
// }