'use client'; // Adicione isso para usar hooks e estados

import { Inter } from "next/font/google";
import "./globals.css";
import { useEffect, useState } from "react";
import { metadata } from "./metadata"; // Importe a metadata

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Verifica o tema salvo no localStorage ou a preferência do sistema
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  // Função para alternar o tema
  const toggleTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setIsDarkMode(true);
    }
  };

  return (
    <html lang="pt" className={isDarkMode ? "dark" : ""}>
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-black dark:text-white`}>
        {/* Botão de alternância de tema (opcional) */}
        <button
          onClick={toggleTheme}
          className="fixed bottom-4 right-4 p-2 bg-gray-200 dark:bg-gray-700 rounded-full"
        >
          {isDarkMode ? "🌙" : "☀️"}
        </button>

        {children}
      </body>
    </html>
  );
};