"use client";
import React from "react";
import Image from "next/image";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [intervalId, setIntervalId] = React.useState(null);

  React.useEffect(() => {
    const handleInterval = () => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % accordionData.length);
    };

    const id = setInterval(handleInterval, 3000);
    setIntervalId(id);

    return () => {
      clearInterval(id);
    };
  }, []); // Dependência vazia para garantir que o useEffect só seja executado uma vez

  const handleAccordionClick = (index) => {
    setActiveIndex(index);
    clearInterval(intervalId); // Limpa o intervalo ao clicar em uma aba
  };

  const accordionData = [
    {
      title: "Tenha um olhar integral dos estudantes",
      description:
        "Por meio dos simulados e análises socioemocionais a equipe da sua escola terá uma visão integral e completa dos estudantes, possibilitando inúmeras opções de planos personalizados de intervenções pedagógicas.",
      imageUrl: "./assets/images/text1-accordion.svg",
    },
    {
      title: "Abandone práticas que não funcionam",
      description:
        "Por meio da nossa plataforma integrada e com o suporte da nossa equipe de dados, a escola poderá observar quais práticas realmente funcionam e para quais estudantes, focando em intervenções que são realmente efetivas para os resultados dos estudantes.",
      imageUrl: "./assets/images/text2-accordion.svg",
    },
    {
      title: "Comunique além do boletim",
      description:
        "Nossas devolutivas para pais e estudantes utilizam ferramentas personalizadas de ciência comportamental, possibilitando maior engajamento de pais e estudantes.",
      imageUrl: "./assets/images/text3-accordion.svg",
    },
    {
      title: "Use dados de forma humanizada",
      description:
        "Abandone a visualização dos seus estudantes apenas pelo número de questões certas ou erradas que eles responderam no último simulado. Tenha uma visão integral, completa e multidimensional do estudantes. Adote Mind's Up na sua escola e vá além!",
      imageUrl: "./assets/images/text4-accordion.svg",
    },
  ];

  return (
    <section id="secao2" className="min-h-screen bg-purple-1 rounded-3xl m-3">
      <div className="grid grid-cols-12 gap-4 lg:gap-8">
        <div className="col-span-12 lg:w-[36rem] min-h-screen z-10 bg-purple-1 lg:col-span-5 lg:col-start-1 pt-28 lg:rounded-3xl">
          <div className="divide-y w-[98%] divide-slate-700/20">
            {accordionData.map((item, index) => (
              <div
                key={index}
                className={`relative py-4 ${
                  activeIndex === index
                    ? "bg-purple-200 rounded-lg"
                    : "hover:bg-purple-100"
                }`}
              >
                <h3
                  className={`flex p-3 justify-start pl-9 ${
                    activeIndex === index
                      ? "text-purple-300"
                      : "hover:bg-purple-100"
                  } text-purple-dark leading-130 text-xl lg:text-22px tracking-tighter`}
                >
                  <button
                    className={`w-full flex text-black`}
                    type="button"
                    aria-expanded={activeIndex === index ? "true" : "false"}
                    aria-controls={`accordion1sect${index}`}
                    onClick={() => handleAccordionClick(index)}
                  >
                    <span className="font-bold">{item.title}</span>
                    {activeIndex === index && (
                      <div className="absolute  text-purple-dark left-[90%]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className={`w-6 h-6 transition-opacity`}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                          />
                        </svg>
                      </div>
                    )}
                  </button>
                </h3>
                <div
                  id={`accordion1sect${index}`}
                  role="region"
                  className={`transition-all duration-100 ease-in-out ${
                    activeIndex === index ? "block" : "hidden"
                  }`}
                  aria-labelledby={`accordion1btn${index}`}
                  style={{
                    height: activeIndex === index ? "auto" : "0px",
                    overflow: "hidden",
                  }}
                >
                  <div className="pl-9 text-black-5">{item.description}</div>
                  <div className="pt-2 lg:hidden">
                    <Image
                      src={item.imageUrl}
                      alt={`Item ${index + 1}`}
                      className="w-full rounded-2xl"
                      width={500}
                      height={500}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden lg:col-span-7 lg:col-start-6 lg:block">
          <div className="h-full">
            <div className="relative pt-18 pl-16 w-[90%]">
              <div className="rounded-3xl aspect-[3/2] h-full">
                {accordionData.map((item, index) => (
                  <div
                    key={index}
                    className={activeIndex === index ? "" : "hidden"}
                  >
                    <Image
                      src={item.imageUrl}
                      alt={`Item ${index + 1}`}
                      className="object-cover"
                      width={600}
                      height={600}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accordion;
