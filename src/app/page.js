"use client";

import Navbar from "./componentes/Navbar";
import Background from "./componentes/Background";
import Footer from "./componentes/Footer";
import Image from "next/image";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import HorizontalScroll from "./componentes/HorizontalScroll";
import Section3 from "./componentes/Section3";

const Home = () => {
  // 1. Frases do typewriter atualizadas conforme solicitado
  const [text] = useTypewriter({
    words: [
      "guiar suas soluções.",
      "fazer uma gestão ativa e não reativa.",
      "evitar perda de estudantes.",
      "integrar seus dados.",
      "melhorar a satisfação dos pais.",
      "engajar os estudantes.",
    ],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 60,
  });

  return (
    <main className="bg-gradient-to-r from-[#FFFCFA] to-white text-[#2D2D2D] dark:bg-black dark:text-gray-100 font-inter">
      <Background>
        <Navbar />

        <div className="absolute w-full h-full bg-gradient-to-br from-blue-50/30 to-purple-50/30 dark:from-gray-800/30 dark:to-gray-900/30 opacity-50"></div>

        <div className="flex flex-col items-center justify-center min-h-screen w-full px-4 pt-52 sm:px-6 relative z-10 text-center overflow-x-hidden">
          {/* Container Principal para o Título */}
          <div className="relative max-w-6xl w-full flex flex-col items-center">
            {/* TÍTULO SUBSTITUÍDO PELA IMAGEM */}
            <div className="relative z-10 space-y-2 sm:space-y-3 md:space-y-4">
              {/* Imagem do Título com versões para Light e Dark Mode */}
              <div className="px-4">
                {/* 2. Texto 'alt' atualizado. Lembre-se de alterar o conteúdo visual nos arquivos SVG. */}
                <Image
                  src="/assets/images/text-home.svg"
                  alt="Use dados otimizados para"
                  width={1000}
                  height={300}
                  className="dark:hidden w-full h-auto"
                  priority
                />
                <Image
                  src="/assets/images/text-home-dark.svg"
                  alt="Use dados otimizados para"
                  width={1000}
                  height={300}
                  className="hidden dark:block w-full h-auto"
                  priority
                />
              </div>

              {/* Terceira Linha: Typewriter */}
              {/* 3. Estilo ajustado: removido o padding lateral e ajustado o tamanho da fonte para melhor adaptação às novas frases. */}
              <div className="text-center text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold leading-tight tracking-tight min-h-[80px] md:min-h-[100px] flex justify-center items-center">
                <span className="text-orange-400 dark:text-orange-300">
                  {text}
                </span>
                <Cursor cursorColor="#F97316" />
                <Image
                  src="/assets/images/asterisco-menor.svg"
                  width={50}
                  height={50}
                  alt="Asterisco"
                  className="inline-block align-middle ml-1 sm:ml-2 w-[0.5em] h-[0.5em] sm:w-[0.6em] sm:h-[0.6em] md:w-[0.7em] md:h-[0.7em] lg:w-[0.8em] lg:h-[0.8em] pointer-events-none"
                />
              </div>
            </div>

            {/* Seção de Parágrafo e Botão */}
            <div className="mt-16 sm:mt-20 md:mt-24 lg:mt-28">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 dark:text-gray-300 leading-loose max-w-2xl lg:max-w-3xl mx-auto px-2">
                Por meio de análise de dados cognitivos e socioemocionais, a
                Minds Up oferece uma visão integral, personalizada e acionável
                para seus estudantes, além de possibilitar novas formas de
                engajamento de estudantes, pais e professores.
              </p>

              <div className="mt-8 sm:mt-10 flex flex-col items-center">
                <button className="bg-orange-300 text-gray-900 dark:bg-orange-400 dark:text-gray-900 px-6 py-3 sm:px-8 sm:py-3 md:px-10 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-medium transition-all duration-300 hover:bg-orange-400 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 dark:focus:ring-gray-600">
                  Saiba mais
                </button>

                {/* SVG com Animação - Responsivo */}
                <div className="arrows-animation mt-12 sm:mt-16 md:mt-20">
                  <svg
                    className="animate-bounce w-8 h-8 sm:w-10 sm:h-10 text-[#383837] dark:text-gray-100"
                    style={{ animationDuration: "1.5s" }}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 6L12 11L7 6M17 13L12 18L7 13"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <HorizontalScroll />
        <Section3 />
        <Footer />
      </Background>
    </main>
  );
};

export default Home;