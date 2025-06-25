"use client";
import Navbar from "../componentes/Navbar";
import Background from "../componentes/Background";
import Footer from "../componentes/Footer";
import Image from "next/image";
import HorizontalScroll from "../componentes/HorizontalScroll";

const Home = () => {
  return (
    <main className="relative bg-grid-pattern bg-repeat bg-left-top bg-cover bg-gradient-to-r from-[#FFFCFA] to-white text-[#2D2D2D] dark:bg-black dark:text-gray-100 font-inter">
      <Background>
        {/* Gradiente sobre o grid */}
        <div className="absolute w-full h-full bg-gradient-to-br from-blue-50/30 to-purple-50/30 dark:from-gray-800/30 dark:to-gray-900/30 opacity-50 z-0" />

        <Navbar />

        <div className="flex flex-col items-center justify-center min-h-screen px-6 lg:px-16 xl:px-24 relative z-10 max-w-7xl mx-auto text-center pt-[12rem]">
          {/* Título com asteriscos */}
          <div className="max-w-4xl relative">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6 dark:text-gray-100 relative">
              {/* Asterisco Superior Esquerdo */}
              <Image
                src="/assets/images/socioemocional-assets/asterisco-maior-roxo.svg"
                width={80}
                height={80}
                alt="Asterisco Superior"
                className="absolute left-[-5rem] top-[-5rem] opacity-60"
              />

              Minds Up <br />
              Socioemocional

              {/* Asterisco Inferior Direito */}
              <Image
                src="/assets/images/socioemocional-assets/asterisco-menor-roxo.svg"
                width={60}
                height={60}
                alt="Asterisco Inferior"
                className="absolute right-[-4rem] bottom-[-4rem] opacity-60"
              />
            </h1>

            {/* Grifo SVG decorativo */}
            <div className="flex justify-center mt-4">
              <Image
                src="/assets/images/socioemocional-assets/grifo.svg"
                width={220}
                height={60}
                alt="Grifo decorativo"
                className="opacity-90"
              />
            </div>

            {/* Descrição */}
            <p className="mt-8 text-lg md:text-xl text-[#666666] dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Provas da Minds Up simulam o ENEM, com questões variadas,
              <br />
              feedback preciso e preparação eficiente para os alunos.
            </p>
          </div>
        </div>

        <HorizontalScroll />
        <Footer />
      </Background>
    </main>
  );
};

export default Home;
