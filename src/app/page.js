"use client";
import { useState, useEffect } from "react";
import Navbar from "./componentes/Navbar";
import HorizontalScroll from "./componentes/HorizontalScroll";
import Section3 from "./componentes/Section3";
import Footer from "./componentes/Footer";
  

const Home = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const words = [
    "insights precisos.",
    "resultados reais.",
    "decisões inteligentes.",
    "impacto educacional.",
    "sucesso estudantil.",
    "transformação digital.",
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = words[currentIndex];

      if (!isDeleting) {
        setCurrentText(current.substring(0, currentText.length + 1));
        if (currentText === current) {
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else {
        setCurrentText(current.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 40 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, words]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-r from-orange-100/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-gradient-to-l from-blue-100/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-orange-50/10 to-transparent rounded-full blur-2xl"></div>
        </div>

        {/* Hero */}
        <section className="relative z-10 max-w-7xl mx-auto px-8 pt-32 pb-40">
          {/* Badge */}
          <div className="flex justify-center mb-14">
            <div className="relative inline-flex items-center gap-4 bg-orange-50/40 backdrop-blur-xl border border-orange-200/40 rounded-full px-7 py-3.5 shadow-lg shadow-orange-100/30">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-2.5 h-2.5 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-2.5 h-2.5 bg-orange-400 rounded-full animate-ping opacity-20"></div>
                </div>
                <span className="text-sm font-semibold text-orange-700 tracking-wide">
                  EdTech Brasileira
                </span>
              </div>
              <div className="w-px h-4 bg-gradient-to-b from-transparent via-orange-300/50 to-transparent"></div>
              <span className="text-sm font-medium text-orange-600/80">
                Ensino Fundamental ao Médio
              </span>
            </div>
          </div>

          {/* Headline */}
          <div className="text-center space-y-12">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              <span className="text-slate-700">Transforme </span>
              <span className="text-slate-700 ">
                dados educacionais
              </span>
              <span className="text-slate-700"> em </span>
              <span className="text-orange-500">{currentText}</span>
              <span className="animate-pulse text-orange-400 ml-2">|</span>
            </h1>

            {/* Value Prop */}
            <p className="max-w-4xl mx-auto text-xl md:text-2xl text-slate-600 leading-relaxed font-light">
              A <span className="font-semibold text-slate-700">Minds Up</span> utiliza inteligência artificial e análise de dados socioemocionais
              para identificar necessidades específicas de cada estudante, oferecendo insights acionáveis que permitem intervenções pedagógicas
              mais eficazes.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col items-center mt-16 space-y-8">
            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <button className="group relative px-12 py-5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-lg rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-orange-200/40 hover:scale-105 overflow-hidden">
                <span className="relative z-10 flex items-center gap-3">
                  Descobrir a Plataforma
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </button>

              <button className="px-8 py-5 bg-white/70 backdrop-blur-sm border-2 border-slate-200/60 hover:border-orange-300/60 text-slate-700 font-semibold text-lg rounded-2xl transition-all duration-300 hover:shadow-lg hover:bg-white/80">
                Ver Demonstração
              </button>
            </div>
          </div>

          {/* Scroll Indicator - versão corrigida */}
          <div className="flex justify-center mt-24">
            <div className="flex flex-col items-center gap-3 cursor-pointer">
              <div className="text-xs font-medium text-slate-500 tracking-[0.2em] uppercase">
                Explorar Mais
              </div>
              <div className="relative w-8 h-14 rounded-full border-2 border-orange-400/80 overflow-hidden flex justify-center items-start">
                <span className="absolute top-4 w-2 h-5 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full animate-bounce" />
              </div>
            </div>
          </div>
        </section>
        {/* HorizontalScroll component should be rendered here if needed */}
        <HorizontalScroll />
        <Section3 />
        <Footer />
      </main>
    </>
  );
};

export default Home;
