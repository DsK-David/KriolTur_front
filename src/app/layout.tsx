import "./globals.css"; // Importa os estilos globais
// import Navbar from "./components/Navbar"; // Importa o componente Navbar

export const metadata = {
  title: "KriolTur",
  description: "Explore os pontos turísticos de Cabo Verde",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="font-sans">
        {/* Navbar será renderizado em todas as páginas */}
        <div className="bg-primary text-white">
          {/* <Navbar /> */}
        </div>
        <main>{children}</main>
      </body>
    </html>
  );
}
