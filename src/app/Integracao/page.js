"use client";

import Navbar from "../componentes/Navbar";
import Background from "../componentes/Background";
import Footer from "../componentes/Footer";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const scrollContent = [
  {
    id: 1,
    lightImage: "/assets/images/simulados-ilustration/online-simulated.svg",
    darkImage: "/assets/images/simulados-ilustration/online-simulated.svg",
    title: "Questões",
    titleAccent: "Abrangentes",
    subtitle: "Cobertura completa do ENEM",
    description:
      "Nossos simulados cobrem todas as áreas do conhecimento do ENEM com questões cuidadosamente selecionadas que refletem fielmente o estilo, complexidade e dificuldade da prova real. Cada questão é desenvolvida por especialistas para garantir máxima qualidade e representatividade.",
    accent: "from-orange-500 to-red-600",
    bgAccent: "from-orange-50/80 to-red-50/60",
    textAccent: "text-orange-600",
    icon: "📝",
    metrics: ["Todas as áreas", "Estilo ENEM", "Qualidade garantida"],
  },
  {
    id: 2,
    lightImage:
      "/assets/images/simulados-ilustration/teacher-explication-data.svg",
    darkImage:
      "/assets/images/simulados-ilustration/teacher-explication-data.svg",
    title: "Feedback",
    titleAccent: "Detalhado",
    subtitle: "Análise completa do desempenho",
    description:
      "Receba relatórios abrangentes que analisam minuciosamente seu desempenho, identificando pontos fortes e mapeando áreas que necessitam maior atenção. Nosso sistema inteligente oferece recomendações personalizadas para otimizar seu plano de estudos.",
    accent: "from-emerald-500 to-teal-600",
    bgAccent: "from-emerald-50/80 to-teal-50/60",
    textAccent: "text-emerald-600",
    icon: "📊",
    metrics: ["Análise completa", "Pontos fortes", "Estudo direcionado"],
  },
  {
    id: 3,
    lightImage: "/assets/images/simulados-ilustration/test.svg",
    darkImage: "/assets/images/simulados-ilustration/test.svg",
    title: "Ambiente",
    titleAccent: "Realista",
    subtitle: "Prepare-se para o dia da prova",
    description:
      "Simule as condições reais do ENEM com cronômetro preciso, interface limpa e ambiente controlado. Desenvolvemos uma experiência autêntica que prepara você não apenas no conteúdo, mas também na gestão eficiente do tempo e controle da ansiedade durante a prova.",
    accent: "from-blue-500 to-indigo-600",
    bgAccent: "from-blue-50/80 to-indigo-50/60",
    textAccent: "text-blue-600",
    icon: "⏱️",
    metrics: ["Tempo cronometrado", "Interface limpa", "Condições reais"],
  },
];

const Integracao = () => {
  const imageContainersRef = useRef([]);
  const rightContentRef = useRef(null);
  const animationContainerRef = useRef(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

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
          onUpdate: (self) => {
            const section = Math.floor(self.progress * totalSections);
            setCurrentSection(Math.min(section, totalSections - 1));
          },
        },
      });

      scrollContent.slice(0, -1).forEach((_, i) => {
        tl.to(imageContainers[i], {
          autoAlpha: 0,
          duration: 0.5,
          ease: "power2.inOut",
        })
          .to(
            imageContainers[i + 1],
            { autoAlpha: 1, duration: 0.5, ease: "power2.inOut" },
            "<0.2"
          )
          .to(
            rightContent,
            { yPercent: -100 * (i + 1), duration: 0.8, ease: "power2.inOut" },
            "<"
          );
      });
    }, animationContainerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="relative bg-[#F8FAFC] text-slate-800 font-inter overflow-x-hidden">
      {/* EFEITOS DE FUNDO AZUIS */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
      </div>

      <Background>
        <Navbar />

        {/* HERO MODERNA */}
        <section className="relative min-h-screen flex flex-col items-center justify-center px-8 pt-32 pb-20">
          {/* Badge */}
          <div className={`flex justify-center mb-14 transform transition-all duration-1000 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="relative inline-flex items-center gap-4 bg-blue-50/40 backdrop-blur-xl border border-blue-200/40 rounded-full px-7 py-3.5 shadow-lg shadow-blue-100/30">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-2.5 h-2.5 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-2.5 h-2.5 bg-blue-400 rounded-full animate-ping opacity-20"></div>
                </div>
                <span className="text-sm font-semibold text-blue-700 tracking-wide">
                  MindsUp Insights
                </span>
              </div>
              <div className="w-px h-4 bg-gradient-to-b from-transparent via-blue-300/50 to-transparent"></div>
              <span className="text-sm font-medium text-blue-600/80">
                Inteligência Educacional
              </span>
            </div>
          </div>

          {/* Título principal */}
          <div className={`text-center space-y-12 max-w-6xl mx-auto transform transition-all duration-1000 delay-300 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              <span className="text-slate-700">Transformamos dados em </span>
              <br />
              <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
                ações estratégicas
              </span>
              <br />
              <span className="text-slate-700">que geram valor real</span>
            </h1>

            <p className="max-w-4xl mx-auto text-xl md:text-2xl text-slate-600 leading-relaxed font-light">
              Nossa plataforma de <span className="font-semibold text-slate-700">business intelligence educacional</span> 
              converte informações complexas em insights claros e acionáveis, 
              empoderando gestores e educadores com decisões baseadas em evidências.
            </p>
          </div>

          {/* CTAs */}
          <div className={`flex flex-col items-center mt-16 space-y-8 transform transition-all duration-1000 delay-600 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <button className="group relative px-12 py-5 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold text-lg rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-blue-200/40 hover:scale-105 overflow-hidden">
                <span className="relative z-10 flex items-center gap-3">
                  Explorar Dashboards
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </button>

              <button className="px-8 py-5 bg-white/70 backdrop-blur-sm border-2 border-slate-200/60 hover:border-blue-300/60 text-slate-700 font-semibold text-lg rounded-2xl transition-all duration-300 hover:shadow-lg hover:bg-white/80">
                Ver Relatórios Demo
              </button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className={`flex justify-center mt-24 transform transition-all duration-1000 delay-900 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="flex flex-col items-center gap-3 cursor-pointer">
              <div className="text-xs font-medium text-slate-500 tracking-[0.2em] uppercase">
                Descobrir Recursos
              </div>
              <div className="relative w-8 h-14 rounded-full border-2 border-blue-400/80 overflow-hidden flex justify-center items-start">
                <span className="absolute top-4 w-2 h-5 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full animate-bounce" />
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO DE SCROLL (inalterada) */}
        <div
          ref={animationContainerRef}
          className="w-full h-screen overflow-hidden relative"
        >
          <div
            className={`absolute inset-0 transition-all duration-1000 bg-gradient-to-br ${
              scrollContent[currentSection]?.bgAccent
            }`}
          />

          <div className="absolute top-8 left-1/2 -translate-x-1/2 z-30 bg-white/80 backdrop-blur-xl border border-white/40 rounded-2xl px-6 py-3 shadow-lg flex items-center gap-4">
            <span className="text-2xl">
              {scrollContent[currentSection]?.icon}
            </span>
            <div className="w-px h-6 bg-slate-200" />
            <div className="text-sm font-semibold text-slate-700">
              Recurso {currentSection + 1} de {scrollContent.length}
            </div>
          </div>

          <div className="flex h-full">
            {/* Imagem */}
            <div className="w-full md:w-1/2 h-full relative flex justify-center items-center p-8">
              <div className="relative w-full h-full max-w-lg">
                {scrollContent.map((item, index) => (
                  <div
                    key={item.id}
                    ref={(el) => (imageContainersRef.current[index] = el)}
                    className="absolute inset-0 invisible"
                  >
                    <Image
                      src={item.lightImage}
                      alt={item.title}
                      fill
                      className="object-contain drop-shadow-2xl"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Conteúdo */}
            <div className="w-full md:w-1/2 h-full overflow-hidden">
              <div ref={rightContentRef} className="w-full h-full flex flex-col">
                {scrollContent.map((item) => (
                  <div
                    key={item.id}
                    className="w-full h-full flex-shrink-0 flex flex-col justify-center px-8 md:px-12 lg:px-16 py-12"
                  >
                    <div className="max-w-2xl space-y-8">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-12 h-12 bg-gradient-to-r ${item.accent} rounded-xl flex items-center justify-center text-xl shadow-lg`}
                        >
                          {item.icon}
                        </div>
                        <span
                          className={`px-4 py-2 bg-gradient-to-r ${item.bgAccent} border border-white/60 rounded-full text-sm font-semibold ${item.textAccent}`}
                        >
                          Recurso {item.id}
                        </span>
                      </div>

                      <h3 className="text-5xl font-bold leading-tight">
                        <span className="text-slate-800">{item.title}</span>
                        <br />
                        <span
                          className={`bg-gradient-to-r ${item.accent} bg-clip-text text-transparent`}
                        >
                          {item.titleAccent}
                        </span>
                      </h3>

                      <h4 className="text-xl text-slate-600">
                        {item.subtitle}
                      </h4>
                      <p className="text-lg text-slate-600 font-light">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Barra inferior */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-100">
            <div
              className={`h-full bg-gradient-to-r ${
                scrollContent[currentSection]?.accent
              } transition-all duration-300`}
              style={{
                width: `${
                  ((currentSection + 1) / scrollContent.length) * 100
                }%`,
              }}
            />
          </div>
        </div>

        <Footer />
      </Background>
    </main>
  );
};

export default Integracao;
