"use client";

import Navbar from "../componentes/Navbar";
import Background from "../componentes/Background";
import Footer from "../componentes/Footer";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const scrollContent = [
  {
    id: 1,
    lightImage: "/assets/images/simulados-ilustration/online-simulated.svg",
    darkImage: "/assets/images/simulados-ilustration/online-simulated.svg",
    title: "Questões Abrangentes",
    description:
      "Nossos simulados cobrem todas as áreas do conhecimento do ENEM, com questões cuidadosamente selecionadas para refletir o estilo e a dificuldade da prova real.",
  },
  {
    id: 2,
    lightImage: "/assets/images/simulados-ilustration/teacher-explication-data.svg",
    darkImage: "/assets/images/simulados-ilustration/teacher-explication-data.svg",
    title: "Feedback Detalhado",
    description:
      "Receba uma análise completa do seu desempenho, com relatórios que apontam seus pontos fortes e áreas que precisam de mais atenção para um estudo direcionado.",
  },
  {
    id: 3,
    lightImage: "/assets/images/simulados-ilustration/test.svg",
    darkImage: "/assets/images/simulados-ilustration/test.svg",
    title: "Ambiente Realista",
    description:
      "Simule as condições reais do dia da prova, com tempo cronometrado e uma interface limpa, para você se preparar não apenas no conteúdo, mas também na gestão do tempo.",
  },
];

const Simulados = () => {
  const imageContainersRef = useRef([]);
  const rightContentRef = useRef(null);
  const animationContainerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const imageContainers = imageContainersRef.current;
      const rightContent = rightContentRef.current;
      const container = animationContainerRef.current;
      const totalSections = scrollContent.length;

      if (!container || !rightContent || imageContainers.length === 0) return;

      gsap.set(imageContainers[0], { autoAlpha: 1 });
      gsap.set(imageContainers.slice(1), { autoAlpha: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: `+=${(totalSections - 1) * 100}%`,
          pin: true,
          scrub: 1,
          pinSpacing: true,
        },
      });

      scrollContent.slice(0, -1).forEach((_, i) => {
        tl.to(imageContainers[i], { autoAlpha: 0, ease: "power1.inOut" })
          .to(imageContainers[i + 1], { autoAlpha: 1, ease: "power1.inOut" }, "<")
          .to(rightContent, { yPercent: -100 * (i + 1), ease: "power1.inOut" }, "<");
      });
    }, animationContainerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="relative bg-gradient-to-r from-[#FFFCFA] to-white text-[#2D2D2D] dark:bg-black dark:text-gray-100 font-inter overflow-x-hidden">
      <Background>
        <Navbar />

        {/* HERO */}
        <div className="relative flex flex-col items-center justify-center min-h-screen px-4 text-center sm:px-6 lg:px-16 xl:px-24 pt-[6rem] sm:pt-[8rem]">
          <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
            <Image
              src="/assets/images/grid.svg"
              alt="Grid claro"
              fill
              className="object-cover opacity-25 dark:hidden"
            />
            <Image
              src="/assets/images/grid-dark.svg"
              alt="Grid escuro"
              fill
              className="hidden object-cover opacity-100 dark:block"
            />
          </div>

          <div className="relative z-10 w-full max-w-4xl px-4 mx-auto sm:px-6 lg:px-5 pb-32">
            <div>
              <Image
                src="/assets/images/simulados-ilustration/text-home-integracao.svg"
                alt="Minds Up Simulados"
                width={1000}
                height={400}
                className="w-full h-auto dark:hidden"
                priority
              />
              <Image
                src="/assets/images/simulados-ilustration/text-home-integracao-dark.svg"
                alt="Minds Up Simulados"
                width={1000}
                height={400}
                className="hidden w-full h-auto dark:block"
                priority
              />
            </div>
            <p className="mt-12 text-base sm:text-lg md:text-xl text-[#666666] dark:text-gray-300 leading-relaxed">
              Provas da Minds Up simulam o ENEM, com questões variadas,
              <br className="hidden sm:block" />
              feedback preciso e preparação eficiente para os alunos.
            </p>
          </div>

          <div className="absolute z-10 arrows-animation bottom-20 sm:bottom-16 dark:stroke-white">
            <svg
              className="animate-bounce my-2"
              style={{ animationDelay: "0.5s", animationDuration: "1.5s" }}
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M17 6L12 11L7 6M17 13L12 18L7 13"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* SEÇÃO COM SCROLL ANIMADO */}
        <div
          ref={animationContainerRef}
          className="w-full h-screen overflow-hidden flex flex-col md:flex-row"
        >
          {/* IMAGENS */}
          <div className="w-full md:w-1/2 h-1/2 md:h-screen relative flex justify-center items-center p-4">
            <div className="relative w-full h-full max-w-lg max-h-lg aspect-square transform -translate-y-6 md:-translate-y-12 transition-transform duration-300">
              {scrollContent.map((item, index) => (
                <div
                  key={item.id}
                  ref={(el) => (imageContainersRef.current[index] = el)}
                  className="absolute top-0 left-0 w-full h-full rounded-lg invisible"
                >
                  <img
                    src={item.lightImage}
                    alt={item.title}
                    className="w-full h-full object-contain rounded-lg dark:hidden"
                  />
                  <img
                    src={item.darkImage}
                    alt={item.title}
                    className="hidden w-full h-full object-contain rounded-lg dark:block"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* TEXTOS */}
          <div className="w-full md:w-1/2 h-1/2 md:h-screen overflow-hidden">
            <div ref={rightContentRef} className="w-full h-full flex flex-col">
              {scrollContent.map((item) => (
                <div
                  key={item.id}
                  className="w-full h-full flex-shrink-0 flex flex-col justify-center items-center p-8 md:p-12 lg:p-16"
                >
                  {/* FORMATAÇÃO ALINHADA: Título e descrição alinhados à esquerda em telas maiores (md:text-left) */}
                  <div className="max-w-xl w-full">
                    <h3 className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-[#3F3F3F] dark:bg-[#F3F4F6] text-center md:text-left leading-normal py-2">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 text-center md:text-left">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </Background>
    </main>
  );
};

export default Simulados;