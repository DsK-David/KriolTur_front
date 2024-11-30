// // components/Navbar.js

// "use client"; // Add this line to mark the component as a client component

// import { useState } from "react";
// import Link from "next/link";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   return (
//     <nav className="bg-gray-900 p-4 shadow-md">
//       <div className="container mx-auto flex justify-between items-center">
//         <Link href="/" className="text-white text-3xl font-bold">
//           KriolTur
//         </Link>
//         <button onClick={toggleMenu} className="text-white lg:hidden">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             className="h-6 w-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 12h16M4 18h16"
//             />
//           </svg>
//         </button>

//         <div className={`lg:flex space-x-8 ${isMenuOpen ? "block" : "hidden"}`}>
//           <Link href="#sobre" className="text-white hover:text-accent">
//             Sobre
//           </Link>
//           <Link href="#grafico" className="text-white hover:text-accent">
//             Estatísticas
//           </Link>
//           <Link href="#contato" className="text-white hover:text-accent">
//             Contato
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg">
          <Link href="/">
            <a>Logo</a>
          </Link>
        </div>
        <div className="space-x-4">
          <Link href="/home">
            <a className="text-gray-400 hover:text-white">Home</a>
          </Link>
          <Link href="/about">
            <a className="text-gray-400 hover:text-white">About</a>
          </Link>
          <Link href="/contact">
            <a className="text-gray-400 hover:text-white">Contact</a>
          </Link>
          <Link href="/login">
            <a className="text-gray-400 hover:text-white">Login</a>
          </Link>
          <Link href="/register">
            <a className="text-gray-400 hover:text-white">Register</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;