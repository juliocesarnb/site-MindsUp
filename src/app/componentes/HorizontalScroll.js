"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const sections = [
    {
      color: "bg-[#FFFCFA] dark:bg-[#1A1A1A]",
      textColor: "text-[#513E30] dark:text-[#F5F5F5]",
      title:
        "Simulados e Análises Socioemocionais: Uma Visão Integral do Estudante",
      subtitle: "PARA UM DESENVOLVIMENTO EDUCACIONAL COMPLETO",
      paragraph: (
        <p className="text-base text-[#7A7A7A] dark:text-[#A0A0A0]">
          Nossa equipe oferece à sua escola uma visão abrangente e detalhada de
          cada estudante, permitindo a criação de planos de intervenção
          pedagógica personalizados e eficazes. Com simulados e análises
          socioemocionais, você pode identificar necessidades específicas e
          promover um desenvolvimento educacional mais equilibrado e
          direcionado.
        </p>
      ),
      image: "/assets/images/garoto-estudando-slider.svg", // Primeira imagem
    },
    {
      color: "bg-[#FFFCFA] dark:bg-[#1A1A1A]",
      textColor: "text-[#5D9C82] dark:text-[#A0D9B4]",
      title: "Plataforma Integrada: Intervenções Eficazes e Personalizadas",
      subtitle: "RESULTADOS REAIS E MENSURÁVEIS",
      paragraph: (
        <p className="text-base text-[#7A7A7A] dark:text-[#A0A0A0]">
          Com nossa plataforma integrada e o suporte especializado da equipe de
          análise de dados, sua escola poderá identificar as práticas mais
          eficazes e para quais estudantes elas funcionam melhor. Focamos em
          intervenções pedagógicas que geram impactos positivos e resultados
          comprovados, garantindo um desenvolvimento educacional mais
          direcionado e eficiente para todos os alunos.
        </p>
      ),
      image: "/assets/images/notebook-dados-slider.svg", // Segunda imagem
    },
    {
      color: "bg-[#FFFCFA] dark:bg-[#1A1A1A]",
      textColor: "text-[#986C6F] dark:text-[#D9A0A5]",
      title: "Visão Multidimensional: Vá Além dos Números",
      subtitle: "COM A MINDS UP",
      paragraph: (
        <p className="text-base text-[#7A7A7A] dark:text-[#A0A0A0]">
          Deixe para trás a visão limitada de apenas contar questões certas ou
          erradas. Com o Minds Up, sua escola adota uma abordagem
          multidimensional, permitindo uma compreensão mais profunda e completa
          do desempenho e do desenvolvimento dos seus estudantes.
        </p>
      ),
      image: "/assets/images/professor-dados-slider.svg", // Terceira imagem
    },
    {
      color: "bg-[#FFFCFA] dark:bg-[#1A1A1A]",
      textColor: "text-[#6D95C1] dark:text-[#A0C1D9]",
      title: "Devolutivas Personalizadas: Engajamento que Transforma",
      subtitle: "PARA PAIS E ESTUDANTES",
      paragraph: (
        <p className="text-base text-[#7A7A7A] dark:text-[#A0A0A0]">
          Utilizamos ferramentas avançadas de ciência comportamental para criar
          devolutivas personalizadas que aumentam o engajamento de pais e
          estudantes. Com abordagens customizadas, promovemos uma conexão mais
          forte e efetiva com o processo educacional.
        </p>
      ),
      image: "/assets/images/professor-devolutiva-slider.svg", // Quarta imagem
    },
  ];

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === sections.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === 0 ? sections.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
  };

  useEffect(() => {
    const handleTransitionEnd = () => {
      setIsTransitioning(false);
    };

    const slider = document.getElementById("secao2");
    if (slider) {
      slider.addEventListener("transitionend", handleTransitionEnd);
    }

    const interval = setInterval(() => {
      if (!isTransitioning) {
        nextSlide();
      }
    }, 6000);

    return () => {
      if (slider) {
        slider.removeEventListener("transitionend", handleTransitionEnd);
      }
      clearInterval(interval);
    };
  }, [currentSlide, isTransitioning]);

  return (
    <div className="relative h-screen max-w-full overflow-x-hidden">
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 rounded-full p-2 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-colors"
        disabled={isTransitioning}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6 text-[#8F8F8F] dark:text-[#A0A0A0]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 rounded-full p-2 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-colors"
        disabled={isTransitioning}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6 text-[#8F8F8F] dark:text-[#A0A0A0]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index
                ? "bg-white dark:bg-gray-200"
                : "bg-white/50 dark:bg-gray-200/50"
            }`}
          />
        ))}
      </div>

      <div
        id="secao2"
        className="h-full flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * (100 / sections.length)}%)`,
          width: `${sections.length * 100}%`,
        }}
      >
        {sections.map((section, index) => (
          <div
            key={index}
            style={{ width: `${100 / sections.length}%` }}
            className={`h-full ${section.color} relative flex items-center justify-center`}
          >
            {/* Background Number */}
            <span
              className="absolute right-[101rem] top-[5rem] font-inter text-[25rem] font-bold opacity-10 select-none"
              style={{ color: section.textColor }}
            >
              {index + 1}
            </span>

            <div className="container mx-auto px-8 flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
              <div className="lg:w-1/2 space-y-6 max-w-xl">
                <h2
                  className={`text-4xl font-bold ${section.textColor} leading-tight`}
                >
                  {section.title}
                </h2>
                <h3 className={`text-xl font-medium ${section.textColor}`}>
                  {section.subtitle}
                </h3>
                <div className="text-lg">{section.paragraph}</div>
              </div>

              <div className="lg:w-1/2 rounded-3xl overflow-hidden ">
                <div className="w-full h-full rounded-3xl">
                  <Image
                    src={section.image} // Usando a imagem específica de cada seção
                    width={680}
                    height={680}
                    className="object-cover w-full h-full transition-opacity"
                    alt={`Imagem do slide ${index + 1}`}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;