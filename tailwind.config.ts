import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E2B3D", // Azul marinho profundo - transmite confiança e autoridade
        accent: "#C0B283", // Dourado suave - adiciona o elemento de luxo
        secondary: "#2A4B6C", // Azul royal profundo - complementa o primary mantendo sofisticação
        sand: "#F4F3EF", // Branco off-white - traz leveza e elegância
        sun: "#D4AF37", // Dourado clássico - reforça o aspecto premium
        ocean: "#34495E", // Azul petróleo - adiciona profundidade e seriedade
        lightGreen: "#8E9E9D",
        dark: {
          primary: "#0F172A",
          secondary: "#1E293B",
          text: "#ffffff",
          background: "#0F172A",
        },
      },
      animation: {
        "fade-in": "fadeIn 2s ease-in-out",
        "fade-in-down": "fadeInDown 2s ease-in-out",
        "fade-in-left": "fadeInLeft 2s ease-in-out",
        "fade-in-right": "fadeInRight 2s ease-in-out",
        float: "float 4s infinite ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" }, // Corrigido para string
          "100%": { opacity: "1" }, // Corrigido para string
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInLeft: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeInRight: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
