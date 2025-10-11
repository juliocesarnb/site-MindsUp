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
    lightImage: "/assets/images/insights-ilustration/professora-analisando-tela.svg",
    darkImage: "/assets/images/insights-ilustration/professora-analisando-tela.svg",
    title: "Dashboards",
    titleAccent: "Intuitivos",
    subtitle: "Visualização clara e interativa",
    description: "Transformamos dados complexos em dashboards visuais e interativos que revelam o desempenho de alunos e turmas de forma clara e acionável. Nossa interface intuitiva permite que educadores naveguem facilmente entre métricas essenciais e identifiquem oportunidades de melhoria.",
    accent: "from-blue-500 to-indigo-600",
    bgAccent: "from-blue-50/80 to-indigo-50/60",
    textAccent: "text-blue-600",
    icon: "📊",
    metrics: ["Interface intuitiva", "Visualização clara", "Dados acionáveis"],
  },
  {
    id: 2,
    lightImage: "/assets/images/insights-ilustration/professora-analisando-documentos.svg",
    darkImage: "/assets/images/insights-ilustration/professora-analisando-documentos.svg",
    title: "Análise de",
    titleAccent: "Tendências",
    subtitle: "Padrões de aprendizagem revelados",
    description: "Nossos algoritmos avançados identificam padrões de aprendizagem ao longo do tempo, revelando pontos fortes e áreas que necessitam intervenção. Essa análise longitudinal permite um planejamento pedagógico proativo e estratégico baseado em evidências sólidas.",
    accent: "from-emerald-500 to-teal-600",
    bgAccent: "from-emerald-50/80 to-teal-50/60",
    textAccent: "text-emerald-600",
    icon: "📈",
    metrics: ["Análise longitudinal", "Padrões ocultos", "Planejamento proativo"],
  },
  {
    id: 3,
    lightImage: "/assets/images/insights-ilustration/analista-de-dados.svg",
    darkImage: "/assets/images/insights-ilustration/analista-de-dados.svg",
    title: "Benchmarking",
    titleAccent: "de Desempenho",
    subtitle: "Comparações estratégicas inteligentes",
    description: "Compare resultados entre turmas, escolas ou períodos para compreender o impacto real de diferentes abordagens pedagógicas. Nosso sistema de benchmarking identifica e compartilha as melhores práticas educacionais, potencializando o sucesso em toda a rede.",
    accent: "from-purple-500 to-violet-600",
    bgAccent: "from-purple-50/80 to-violet-50/60",
    textAccent: "text-purple-600",
    icon: "🎯",
    metrics: ["Comparações inteligentes", "Melhores práticas", "Impacto mensurado"],
  },
];

const Insights = () => {
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
            const progress = self.progress;
            const section = Math.floor(progress * totalSections);
            setCurrentSection(Math.min(section, totalSections - 1));
          },
        },
      });

      scrollContent.slice(0, -1).forEach((_, i) => {
        tl.to(imageContainers[i], { autoAlpha: 0, ease: "power2.inOut", duration: 0.5 })
          .to(imageContainers[i + 1], { autoAlpha: 1, ease: "power2.inOut", duration: 0.5 }, "<0.2")
          .to(rightContent, { yPercent: -100 * (i + 1), ease: "power2.inOut", duration: 0.8 }, "<");
      });
    }, animationContainerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="relative bg-white text-slate-800 font-inter overflow-x-hidden">
      {/* Background consistente */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-r from-blue-100/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-gradient-to-l from-purple-100/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-blue-50/10 to-transparent rounded-full blur-2xl"></div>
      </div>

      <Background>
        <Navbar />

        {/* HERO SECTION */}
        <section className="relative min-h-screen flex flex-col items-center justify-center px-8 pt-32 pb-20 bg-gradient-to-b from-orange-50/30 to-white">
      {/* Badge */}
      <div className={`flex justify-center mb-14 transform transition-all duration-1000 ${
        isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <div className="relative inline-flex items-center gap-4 bg-orange-50/40 backdrop-blur-xl border border-orange-200/40 rounded-full px-7 py-3.5 shadow-lg shadow-orange-100/30">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-2.5 h-2.5 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 w-2.5 h-2.5 bg-orange-400 rounded-full animate-ping opacity-20"></div>
            </div>
            <span className="text-sm font-semibold text-orange-700 tracking-wide">
              MindsUp Insights
            </span>
          </div>
          <div className="w-px h-4 bg-gradient-to-b from-transparent via-orange-300/50 to-transparent"></div>
          <span className="text-sm font-medium text-orange-600/80">
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
          <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
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
          <button className="group relative px-12 py-5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-lg rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-orange-200/40 hover:scale-105 overflow-hidden">
            <span className="relative z-10 flex items-center gap-3">
              Explorar Dashboards
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          </button>

          <button className="px-8 py-5 bg-white/70 backdrop-blur-sm border-2 border-slate-200/60 hover:border-orange-300/60 text-slate-700 font-semibold text-lg rounded-2xl transition-all duration-300 hover:shadow-lg hover:bg-white/80">
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
          <div className="relative w-8 h-14 rounded-full border-2 border-orange-400/80 overflow-hidden flex justify-center items-start">
            <span className="absolute top-4 w-2 h-5 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );


        {/* SCROLL ANIMATION SECTION */}
        <div
          ref={animationContainerRef}
          className="w-full h-screen overflow-hidden relative"
        >
          {/* Background dinâmico baseado na seção atual */}
          <div className={`absolute inset-0 transition-all duration-1000 ease-out bg-gradient-to-br ${scrollContent[currentSection]?.bgAccent || 'from-blue-50/80 to-indigo-50/60'}`}></div>
          
          {/* Indicador de progresso superior */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 z-30">
            <div className="flex items-center gap-4 bg-white/80 backdrop-blur-xl border border-white/40 rounded-2xl px-6 py-3 shadow-lg">
              <span className="text-2xl">{scrollContent[currentSection]?.icon}</span>
              <div className="w-px h-6 bg-slate-200"></div>
              <div className="text-sm font-semibold text-slate-700">
                Recurso {currentSection + 1} de {scrollContent.length}
              </div>
              <div className="w-px h-6 bg-slate-200"></div>
              <div className="text-sm font-medium text-slate-500">
                {scrollContent[currentSection]?.title} {scrollContent[currentSection]?.titleAccent}
              </div>
            </div>
          </div>

          {/* Indicadores laterais */}
          <div className="absolute left-8 top-1/2 -translate-y-1/2 z-30">
            <div className="bg-white/80 backdrop-blur-xl border border-white/40 rounded-2xl p-4 shadow-lg">
              <div className="flex flex-col gap-4">
                {scrollContent.map((item, index) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 p-3 rounded-xl transition-all duration-300"
                  >
                    <div className="relative">
                      <div
                        className={`w-3 h-3 rounded-full transition-all duration-500 ${
                          currentSection === index 
                            ? `bg-gradient-to-r ${item.accent} shadow-lg` 
                            : "bg-slate-300"
                        }`}
                      />
                      {currentSection === index && (
                        <div className={`absolute inset-0 w-3 h-3 bg-gradient-to-r ${item.accent} rounded-full animate-ping opacity-30`}></div>
                      )}
                    </div>
                    <div className="text-left">
                      <div className={`text-xs font-semibold transition-all duration-300 ${
                        currentSection === index ? item.textAccent : "text-slate-500"
                      }`}>
                        {item.title}
                      </div>
                      <div className={`text-xs transition-all duration-300 ${
                        currentSection === index ? item.textAccent : "text-slate-400"
                      }`}>
                        {item.titleAccent}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex h-full">
            {/* LADO ESQUERDO - IMAGENS */}
            <div className="w-full md:w-1/2 h-full relative flex justify-center items-center p-8">
              <div className="relative w-full h-full max-w-lg max-h-lg aspect-square">
                {scrollContent.map((item, index) => (
                  <div
                    key={item.id}
                    ref={(el) => (imageContainersRef.current[index] = el)}
                    className="absolute inset-0 w-full h-full rounded-3xl invisible overflow-hidden"
                  >
                    {/* Background decorativo da imagem */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.bgAccent} rounded-3xl`}></div>
                    
                    {/* Container da imagem */}
                    <div className="relative w-full h-full p-8 flex items-center justify-center">
                      <Image
                        src={item.lightImage}
                        alt={item.title}
                        fill
                        className="object-contain drop-shadow-2xl"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={index === 0}
                      />
                    </div>

                    {/* Elementos decorativos flutuantes */}
                    <div className={`absolute top-4 right-4 w-16 h-16 bg-gradient-to-r ${item.accent} rounded-full opacity-10 blur-xl animate-float`}></div>
                    <div className={`absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-r ${item.accent} rounded-full opacity-20 blur-lg animate-float`} style={{animationDelay: '1s'}}></div>
                  </div>
                ))}
              </div>
            </div>

            {/* LADO DIREITO - CONTEÚDO */}
            <div className="w-full md:w-1/2 h-full overflow-hidden">
              <div ref={rightContentRef} className="w-full h-full flex flex-col">
                {scrollContent.map((item) => (
                  <div
                    key={item.id}
                    className="w-full h-full flex-shrink-0 flex flex-col justify-center px-8 md:px-12 lg:px-16 py-12"
                  >
                    <div className="max-w-2xl w-full space-y-8">
                      {/* Badge do recurso */}
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${item.accent} rounded-xl flex items-center justify-center text-xl shadow-lg`}>
                          {item.icon}
                        </div>
                        <div className={`px-4 py-2 bg-gradient-to-r ${item.bgAccent} border border-white/60 rounded-full text-sm font-semibold ${item.textAccent} backdrop-blur-sm`}>
                          Recurso {item.id}
                        </div>
                      </div>

                      {/* Título split */}
                      <div className="space-y-4">
                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                          <span className="text-slate-800">{item.title}</span>
                          <br />
                          <span className={`bg-gradient-to-r ${item.accent} bg-clip-text text-transparent`}>
                            {item.titleAccent}
                          </span>
                        </h3>
                        <div className={`w-20 h-1 bg-gradient-to-r ${item.accent} rounded-full`}></div>
                      </div>

                      {/* Subtítulo */}
                      <h4 className="text-xl font-medium text-slate-600 leading-relaxed">
                        {item.subtitle}
                      </h4>

                      {/* Descrição */}
                      <p className="text-lg text-slate-600 leading-relaxed font-light">
                        {item.description}
                      </p>

                      {/* Métricas */}
                      <div className="flex flex-wrap gap-3">
                        {item.metrics.map((metric, idx) => (
                          <div
                            key={idx}
                            className={`px-4 py-2 bg-gradient-to-r ${item.bgAccent} border border-white/60 rounded-full text-sm font-semibold ${item.textAccent} backdrop-blur-sm`}
                          >
                            {metric}
                          </div>
                        ))}
                      </div>

                      {/* CTA específico */}
                      <div className="pt-4">
                        <button className={`group relative px-8 py-4 bg-gradient-to-r ${item.accent} text-white font-semibold rounded-2xl transition-all duration-300 hover:shadow-xl hover:scale-105 overflow-hidden`}>
                          <span className="relative z-10 flex items-center gap-3">
                            Explorar {item.titleAccent}
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </span>
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Barra de progresso inferior */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-100">
            <div
              className={`h-full bg-gradient-to-r ${scrollContent[currentSection]?.accent || 'from-blue-500 to-indigo-600'} transition-all duration-300 ease-out`}
              style={{ width: `${((currentSection + 1) / scrollContent.length) * 100}%` }}
            />
          </div>
        </div>

        <Footer />
      </Background>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
};

export default Insights;