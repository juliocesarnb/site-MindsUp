"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const sections = [
    {
      color: "bg-[#FEF3E7]",
      textColor: "text-[#C6853A]",
      images: {
        bolhaEsquerda: "/assets/assets-horizontalScroll/doodles-p1/bolhas-amarelas-esquerda-1.svg",
        bolhaDireita: "/assets/assets-horizontalScroll/doodles-p1/bolhas-amarelas-direita-1.svg",
        brilho: "/assets/assets-horizontalScroll/doodles-p1/brilho-1.svg",
        emoji: "/assets/assets-horizontalScroll/doodles-p1/emoji.svg",
        estrela: "/assets/assets-horizontalScroll/doodles-p1/estrela-1.svg",
        seta: "/assets/assets-horizontalScroll/doodles-p1/seta-1.svg",
        texto: "/assets/assets-horizontalScroll/doodles-p1/texto-1.svg"
      },
    },
    {
      color: "bg-[#E8F5E9]",
      textColor: "text-purple-600",
      images: {
        bolhaEsquerda: "/assets/assets-horizontalScroll/doodles-p2/bolhas-verdes-esquerda.svg",
        bolhaDireita: "/assets/assets-horizontalScroll/doodles-p2/bolhas-verde-direita.svg",
        brilho: "/assets/assets-horizontalScroll/doodles-p2/brilho-2.svg",
        checkbox: "/assets/assets-horizontalScroll/doodles-p2/checkbox-no.svg",
        hashtag: "/assets/assets-horizontalScroll/doodles-p2/hashtag.svg",
        seta: "/assets/assets-horizontalScroll/doodles-p2/seta-2.svg",
        texto: "/assets/assets-horizontalScroll/doodles-p2/texto-2.svg",
      },
    },
    {
      color: "bg-[#FFE4E6]",
      textColor: "text-purple-600",
      images: {
        bolhaEsquerda: "/assets/assets-horizontalScroll/doodles-p3/bolhas-roxas-esquerda.svg",
        bolhaDireita: "/assets/assets-horizontalScroll/doodles-p3/bolhas-roxas-direita.svg",
        checkbox: "/assets/assets-horizontalScroll/doodles-p3/checkbox-yes.svg",
        mais: "/assets/assets-horizontalScroll/doodles-p3/mais.svg",
        pipa: "/assets/assets-horizontalScroll/doodles-p3/pipa.svg",
        seta: "/assets/assets-horizontalScroll/doodles-p3/seta-3.svg",
        texto: "/assets/assets-horizontalScroll/doodles-p3/texto-2.svg"
      },
    },
    {
      color: "bg-[#EFF6FF]",
      textColor: "text-blue-600",
      images: {
        bolhaEsquerda: "/assets/assets-horizontalScroll/doodles-p4/bolha-esquerda-azul.svg",
        bolhaDireita: "/assets/assets-horizontalScroll/doodles-p4/bolha-direita-azul.svg",
        brilho: "/assets/assets-horizontalScroll/doodles-p4/brilho-4.svg",
        correto: "/assets/assets-horizontalScroll/doodles-p4/correto.svg",
        estrela: "/assets/assets-horizontalScroll/doodles-p4/estrela-4.svg",
        seta: "/assets/assets-horizontalScroll/doodles-p4/seta-4.svg",
        texto: "/assets/assets-horizontalScroll/doodles-p4/texto-4.svg"
      },
    },
  ];

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === sections.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 800);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === 0 ? sections.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 800);
  };

  const goToSlide = (index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 800);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        nextSlide();
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [isTransitioning]);

  const renderSubtitle = (index) => {
    if (index === 0) {
      return (
        <p className={`text-lg md:text-xl text-center text-[#C6853A] max-w-3xl`}>
          Por meio dos{" "}
          <span className="relative inline-block">
            <span className="w-full h-2 bg-[#FCD5A7] absolute top-4 z-0 block"></span>
            <span className="relative z-10 text-[#C6853A]">
              <strong>simulados</strong>
            </span>
          </span>{" "}
          e{" "}
          <span className="relative inline-block">
            <span className="w-full h-2 bg-[#FCD5A7] absolute top-4 z-0 block"></span>
            <span className="relative z-10 text-[#C6853A]">
              <strong>análises socioemocionais</strong>
            </span>
          </span>{" "}
          a equipe da sua escola terá uma{" "}
          <span className="relative inline-block">
            <span className="w-full h-2 bg-[#FCD5A7] absolute top-4 z-0 block"></span>
            <span className="relative z-10 text-[#C6853A]">
              <strong>visão integral e completa dos estudantes</strong>
            </span>
          </span>
          , possibilitando inúmeras opções de planos personalizados de intervenções pedagógicas.
        </p>
      );
    }
    if (index === 1) {
      return (
        <p className={`text-lg md:text-xl text-center text-[#5D9C82] max-w-3xl`}>
          Por meio da nossa{" "}
          <span className="relative inline-block">
            <span className="w-full h-2 bg-[#bbeeb2] absolute top-4 z-0 block"></span>
            <span className="relative z-10 text-[#5D9C82]">
              <strong>plataforma integrada</strong>
            </span>
          </span>{" "}
          e com o suporte da nossa equipe de dados, a escola poderá observar quais práticas realmente funcionam e para quais estudantes,{" "}
          <span className="relative inline-block">
            <span className="w-full h-2 bg-[#bbeeb2] absolute top-4 z-0 block"></span>
            <span className="relative z-10 text-[#5D9C82]">
              <strong>focando em intervenções que são realmente efetivas</strong>
            </span>
          </span>{" "}
          para os resultados dos estudantes.
        </p>
      );
    }
    if (index === 2) {
      return (
        <p className={`text-lg md:text-xl text-center text-[#7E54BA] max-w-3xl`}>
          Abandone a visualização dos seus estudantes apenas pelo número de questões certas ou erradas que eles responderam no último simulado. Tenha uma{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-[#7E54BA]">
              visão integral, completa e multidimensional
            </span>
          </span>{" "}
          do estudantes.{" "}
          <span className="relative inline-block">
            <span className="w-full h-2 bg-[#fdc2f9] absolute top-4 z-0 block"></span>
            <span className="relative z-10 text-[#7E54BA]">
              <strong>Adote Minds Up na sua escola e vá além!</strong>
            </span>
          </span>
        </p>
      );
    }
    if (index === 3) {
      return (
        <p className={`text-lg md:text-xl text-center text-[#6290C3] max-w-3xl`}>
          Nossas devolutivas para pais e estudantes utilizam{" "}
          <span className="relative inline-block">
            <span className="w-full h-2 bg-[#afeed4] absolute top-4 z-0 block"></span>
            <span className="relative z-10 text-[#6290C3]">
              <strong>ferramentas personalizadas de ciência comportamental</strong>
            </span>
          </span>
          , possibilitando maior{" "}
          <span className="relative inline-block">
            <span className="w-full h-2 bg-[#afeed4] absolute top-4 z-0 block"></span>
            <span className="relative z-10 text-[#6290C3]">
              <strong>engajamento</strong>
            </span>
          </span>{" "}
          de pais e estudantes.
        </p>
      );
    }
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20  rounded-full p-2 hover:bg-white/80 transition-colors"
        disabled={isTransitioning}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#8F8F8F" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg>


      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20  rounded-full p-2 hover:bg-white/80 transition-colors"
        disabled={isTransitioning}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#8F8F8F" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg>


      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Slides */}
      <div
            id="secao2"

        className="h-full transition-transform duration-500 ease-in-out flex"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
          width: `${sections.length * 25.2}%`,
        }}
      >
        {sections.map((section, index) => (
          <div
            key={index}
            className={`w-screen h-full flex-shrink-0 flex flex-col items-center justify-center relative ${section.color}`}
          >
            {/* Bolhas à esquerda */}
            <div className="absolute left-[12%] top-10 w-[140px] h-full">
              <Image
                src={section.images.bolhaEsquerda}
                alt="Bolhas esquerda"
                fill
                className="object-contain"
              />
            </div>

            {/* Bolhas à direita */}
            <div className="absolute right-[12%] top-10 w-[140px] h-full">
              <Image
                src={section.images.bolhaDireita}
                alt="Bolhas direita"
                fill
                className="object-contain"
              />
            </div>

            {/* Seta */}
            <div className="absolute left-[10%] top-24">
              <Image
                src={section.images.seta}
                alt="Seta"
                width={270}
                height={80}
                className="object-contain opacity-80"
              />
            </div>

            {/* Container central para texto e subtítulo */}
            <div className="z-10 flex flex-col items-center justify-center gap-14 px-8 max-w-4xl mx-auto">
              {/* Texto principal */}
              <div className="relative w-full flex justify-center">
                <Image
                  src={section.images.texto}
                  alt="Texto principal"
                  width={850}
                  height={200}
                  className="object-contain"
                />
              </div>

              {/* Subtítulo */}
              {renderSubtitle(index)}
            </div>

            {/* Elementos decorativos específicos para cada seção */}
            {index === 0 && (
              <>
                <div className="absolute left-[10%] bottom-[5%]">
                  <Image
                    src={section.images.brilho}
                    alt="Brilho"
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </div>
                <div className="absolute right-[10%] top-[18%]">
                  <Image
                    src={section.images.estrela}
                    alt="Estrela"
                    width={110}
                    height={100}
                    className="object-contain"
                  />
                </div>
                <div className="absolute right-[10%] bottom-24">
                  <Image
                    src={section.images.emoji}
                    alt="Emoji"
                    width={110}
                    height={100}
                    className="object-contain"
                  />
                </div>
              </>
            )}

            {index === 1 && (
              <>
                <div className="absolute right-[10%] top-[18%]">
                  <Image
                    src={section.images.hashtag}
                    alt="Hashtag"
                    width={110}
                    height={100}
                    className="object-contain"
                  />
                </div>
                <div className="absolute right-[10%] bottom-24">
                  <Image
                    src={section.images.checkbox}
                    alt="Checkbox"
                    width={90}
                    height={90}
                    className="object-contain"
                  />
                </div>
                <div className="absolute left-[10%] bottom-[5%]">
                  <Image
                    src={section.images.brilho}
                    alt="Brilho"
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </div>
              </>
            )}

            {index === 2 && (
              <>
                <div className="absolute left-[12%] bottom-24">
                  <Image
                    src={section.images.checkbox}
                    alt="Checkbox"
                    width={130}
                    height={130}
                    className="object-contain"
                  />
                </div>
                <div className="absolute right-[6%] bottom-[6%]">
                  <Image
                    src={section.images.pipa}
                    alt="Pipa"
                    width={215}
                    height={215}
                    className="object-contain"
                  />
                </div>
                <div className="absolute right-[10%] top-[18%]">
                  <Image
                    src={section.images.mais}
                    alt="Mais"
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>
              </>
            )}

            {index === 3 && (
              <>
                <div className="absolute right-[10%] bottom-[7rem]">
                  <Image
                    src={section.images.correto}
                    alt="Correto"
                    width={150}
                    height={150}
                    className="object-contain"
                  />
                </div>
                <div className="absolute left-[10%] bottom-[5rem]">
                  <Image
                    src={section.images.brilho}
                    alt="Brilho"
                    width={180}
                    height={180}
                    className="object-contain"
                  />
                </div>
                <div className="absolute right-[12%] top-[18%]">
                  <Image
                    src={section.images.estrela}
                    alt="Estrela"
                    width={110}
                    height={110}
                    className="object-contain"
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;