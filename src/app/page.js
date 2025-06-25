"use client";
import Navbar from "./componentes/Navbar";
import Background from "./componentes/Background";
import Footer from "./componentes/Footer";
import Image from "next/image";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import HorizontalScroll from "./componentes/HorizontalScroll";
import Section3 from "./componentes/Section3";

const Home = () => {
  const [text] = useTypewriter({
    words: ["decisões", "intuições", "soluções"],
    loop: {},
  });

  return (
    <main className="bg-gradient-to-r from-[#FFFCFA] to-white text-[#2D2D2D] dark:bg-black dark:text-gray-100 font-inter">
      <Background>
        <Navbar />

        <div className="absolute w-full h-full bg-gradient-to-br from-blue-50/30 to-purple-50/30 dark:from-gray-800/30 dark:to-gray-900/30 opacity-50"></div>

        <div className="flex flex-col items-center justify-center min-h-screen px-6 lg:px-16 xl:px-24 relative z-10 max-w-7xl mx-auto text-center pt-[12rem]">
          {/* Asterisco Superior Esquerdo */}
          <Image
            src="/assets/images/asterisco-maior.svg"
            width={100}
            height={100}
            alt="Asterisco Superior"
            className="absolute left-[10rem] top-[15rem]"
          />

          {/* Texto Principal */}
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6 dark:text-gray-100">
              Use dados{" "}
              <span className=" inline-block">
                <span className=" inline-block w-full">
                  <span className="relative z-10">otimizados</span>
                  <Image
                    src="/assets/images/Elipse.svg"
                    alt="Círculo"
                    width={10} // Ajuste esse valor conforme necessário
                    height={30} // Mantenha uma proporção adequada
                    className="absolute top-[17.3rem] left-[49%] w-[31%]" // Adicionado width e transformação
                  />
                </span>
              </span>{" "}
              para guiar suas <br />
              <span className="text-orange-400 dark:text-orange-300 relative inline-block">
                {/* <span className=" bottom-0 left-0 w-full h-2 bg-orange-200 z-10 dark:bg-orange-400/50 rounded-full"></span> */}

                {text}

                <Cursor />
              </span>
              <Image
                src="/assets/images/asterisco-menor.svg"
                width={50}
                height={50}
                alt="Asterisco"
                className="inline-block ml-2"
              />
            </h1>

            <p className="mt-[5rem] text-lg md:text-xl text-[#4A4A4A] dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Por meio de análise de dados cognitivos e socioemocionais, a Minds
              Up oferece uma visão integral, personalizada e acionável para seus
              estudantes, além de possibilitar novas formas de engajamento de
              estudantes, pais e professores.
            </p>

            <div className="mt-10">
              <button className="bg-orange-300 text-gray-900 dark:bg-orange-400 dark:text-gray-900 px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:bg-orange-400 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 dark:focus:ring-gray-600">
                Saiba mais
              </button>
              <div className="arrows-animation mt-[5rem] flex flex-col items-center z-10">
               
                <svg
                  className="animate-bounce my-2"
                  style={{ animationDelay: "0.5s", animationDuration: "1.5s" }}
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 6L12 11L7 6M17 13L12 18L7 13"
                    stroke="#383837"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                
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