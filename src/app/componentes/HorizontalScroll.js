"use client";
import { useState, useEffect, useRef, useCallback } from "react";

const TRANSITION_DURATION = 900;

const HorizontalScroll = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoplayTimerRef = useRef(null);

  const sections = [
    {
      title: "Análises",
      titleAccent: "Socioemocionais",
      subtitle: "Uma visão integral do estudante",
      description: "Nossa plataforma mapeia as dimensões cognitivas e emocionais de cada estudante, criando perfis detalhados que revelam potenciais, desafios e oportunidades de crescimento através de análises comportamentais avançadas.",
      accent: "from-violet-500 to-purple-600",
      bgAccent: "from-violet-50/80 to-purple-50/60",
      textAccent: "text-violet-600",
      icon: "🧠",
      metrics: ["95% precisão", "360° visão", "Real-time"],
    },
    {
      title: "Plataforma",
      titleAccent: "Integrada",
      subtitle: "Intervenções eficazes e personalizadas",
      description: "Conectamos dados, insights e ações em um ecossistema único. Nossa tecnologia identifica padrões de aprendizagem e sugere intervenções pedagógicas personalizadas baseadas em evidências científicas.",
      accent: "from-emerald-500 to-teal-600",
      bgAccent: "from-emerald-50/80 to-teal-50/60",
      textAccent: "text-emerald-600",
      icon: "🔗",
      metrics: ["100+ escolas", "50k estudantes", "24/7 suporte"],
    },
    {
      title: "Visão",
      titleAccent: "Multidimensional",
      subtitle: "Vá além dos números tradicionais",
      description: "Analisamos múltiplas camadas do desenvolvimento: competências acadêmicas, habilidades socioemocionais, padrões comportamentais e contexto familiar para uma compreensão holística de cada estudante.",
      accent: "from-rose-500 to-pink-600",
      bgAccent: "from-rose-50/80 to-pink-50/60",
      textAccent: "text-rose-600",
      icon: "👁️",
      metrics: ["15 dimensões", "AI avançada", "Insights únicos"],
    },
    {
      title: "Devolutivas",
      titleAccent: "Personalizadas",
      subtitle: "Engajamento que transforma resultados",
      description: "Utilizamos princípios de ciência comportamental para criar comunicações efetivas e envolventes. Cada família recebe relatórios personalizados que promovem maior participação no processo educativo.",
      accent: "from-amber-500 to-orange-600",
      bgAccent: "from-amber-50/80 to-orange-50/60",
      textAccent: "text-amber-600",
      icon: "💬",
      metrics: ["87% engajamento", "Linguagem clara", "Ação prática"],
    },
  ];

  const handleSlideChange = useCallback((newIndex) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(newIndex);
    setTimeout(() => setIsTransitioning(false), TRANSITION_DURATION);
  }, [isTransitioning]);

  const nextSlide = useCallback(() => {
    const newIndex = (currentSlide + 1) % sections.length;
    handleSlideChange(newIndex);
  }, [currentSlide, handleSlideChange, sections.length]);

  const prevSlide = useCallback(() => {
    const newIndex = (currentSlide - 1 + sections.length) % sections.length;
    handleSlideChange(newIndex);
  }, [currentSlide, handleSlideChange, sections.length]);

  const goToSlide = useCallback((index) => {
    if (index === currentSlide) return;
    handleSlideChange(index);
  }, [currentSlide, handleSlideChange]);

  useEffect(() => {
    if (autoplayTimerRef.current) clearTimeout(autoplayTimerRef.current);
    autoplayTimerRef.current = setTimeout(nextSlide, 6000);
    return () => {
      if (autoplayTimerRef.current) clearTimeout(autoplayTimerRef.current);
    };
  }, [currentSlide, nextSlide]);

  return (
    <div className="relative min-h-screen w-full bg-white overflow-hidden">
      {/* Background dinâmico baseado no slide atual */}
      <div className="absolute inset-0 overflow-hidden transition-all duration-1000 ease-out">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-r from-orange-100/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-gradient-to-l from-blue-100/20 to-transparent rounded-full blur-3xl"></div>
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br ${sections[currentSlide].bgAccent} rounded-full blur-3xl transition-all duration-1000`}></div>
        
        {/* Partículas flutuantes */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-gradient-to-r ${sections[currentSlide].accent} rounded-full opacity-20 animate-float`}
              style={{
                left: `${20 + (i * 15)}%`,
                top: `${30 + (i % 3) * 20}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + (i % 2)}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Header com informações do slide */}
      <div className="absolute top-0 left-0 right-0 z-30 pt-8">
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          {/* Info do slide atual */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-xl border border-white/40 rounded-2xl px-6 py-3 shadow-lg">
              <span className="text-2xl">{sections[currentSlide].icon}</span>
              <div className="w-px h-6 bg-slate-200"></div>
              <span className="text-sm font-semibold text-slate-700">
                {sections[currentSlide].title} {sections[currentSlide].titleAccent}
              </span>
            </div>
          </div>

          {/* Navegação */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 bg-slate-900/90 backdrop-blur-xl rounded-full px-4 py-2">
              <span className="text-sm font-mono text-white">
                {String(currentSlide + 1).padStart(2, "0")}
              </span>
              <div className="w-8 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent mx-2"></div>
              <span className="text-sm font-mono text-white/60">
                {String(sections.length).padStart(2, "0")}
              </span>
            </div>
            
            <div className="flex items-center bg-white/80 backdrop-blur-xl border border-white/40 rounded-full p-1">
              <button
                onClick={prevSlide}
                disabled={isTransitioning}
                className="w-10 h-10 flex items-center justify-center text-slate-600 hover:text-orange-500 hover:bg-orange-50 rounded-full transition-all duration-300 disabled:opacity-50"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                disabled={isTransitioning}
                className="w-10 h-10 flex items-center justify-center text-slate-600 hover:text-orange-500 hover:bg-orange-50 rounded-full transition-all duration-300 disabled:opacity-50"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Indicadores laterais modernos */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 z-30">
        <div className="bg-white/80 backdrop-blur-xl border border-white/40 rounded-2xl p-4 shadow-lg">
          <div className="flex flex-col gap-4">
            {sections.map((section, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isTransitioning}
                className="group flex items-center gap-4 p-3 rounded-xl hover:bg-white/60 transition-all duration-300"
              >
                <div className="relative">
                  <div
                    className={`w-3 h-3 rounded-full transition-all duration-500 ${
                      currentSlide === index 
                        ? `bg-gradient-to-r ${section.accent} shadow-lg` 
                        : "bg-slate-300 group-hover:bg-slate-400"
                    }`}
                  />
                  {currentSlide === index && (
                    <div className={`absolute inset-0 w-3 h-3 bg-gradient-to-r ${section.accent} rounded-full animate-ping opacity-30`}></div>
                  )}
                </div>
                <div className="text-left">
                  <div className={`text-xs font-semibold transition-all duration-300 ${
                    currentSlide === index ? section.textAccent : "text-slate-500 group-hover:text-slate-700"
                  }`}>
                    {section.title}
                  </div>
                  <div className={`text-xs transition-all duration-300 ${
                    currentSlide === index ? section.textAccent : "text-slate-400"
                  }`}>
                    {section.titleAccent}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Slides com layout único */}
      <div
        className="h-full flex transition-transform duration-900 ease-out"
        style={{
          transform: `translateX(-${currentSlide * (100 / sections.length)}%)`,
          width: `${sections.length * 100}%`,
        }}
      >
        {sections.map((section, index) => (
          <div
            key={index}
            style={{ width: `${100 / sections.length}%` }}
            className="h-full relative flex items-center justify-center"
          >
            <div className="relative z-10 max-w-6xl mx-auto px-8 py-24">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Coluna esquerda - Conteúdo principal */}
                <div className="space-y-8">
                  {/* Título com design split */}
                  <div className="space-y-4">
                    <h1 className="text-6xl md:text-7xl font-bold leading-[0.9] tracking-tight">
                      <span className="text-slate-800">{section.title}</span>
                      <br />
                      <span className={`bg-gradient-to-r ${section.accent} bg-clip-text text-transparent`}>
                        {section.titleAccent}
                      </span>
                    </h1>
                    <div className={`w-20 h-1 bg-gradient-to-r ${section.accent} rounded-full`}></div>
                  </div>

                  {/* Subtítulo */}
                  <h2 className="text-2xl font-medium text-slate-600 leading-relaxed">
                    {section.subtitle}
                  </h2>

                  {/* Descrição */}
                  <p className="text-lg text-slate-600 leading-relaxed font-light max-w-lg">
                    {section.description}
                  </p>

                  {/* Métricas */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    {section.metrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className={`px-4 py-2 bg-gradient-to-r ${section.bgAccent} border border-white/60 rounded-full text-sm font-semibold ${section.textAccent} backdrop-blur-sm`}
                      >
                        {metric}
                      </div>
                    ))}
                  </div>

                  {/* CTA específico para slider */}
                  <div className="pt-6">
                    <button className={`group relative px-8 py-4 bg-gradient-to-r ${section.accent} text-white font-semibold text-base rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-${section.textAccent.split('-')[1]}-200/40 hover:scale-105 overflow-hidden`}>
                      <span className="relative z-10 flex items-center gap-3">
                        Explorar {section.titleAccent}
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    </button>
                  </div>
                </div>

                {/* Coluna direita - Visual interativo */}
                <div className="relative">
                  <div className={`relative bg-gradient-to-br ${section.bgAccent} backdrop-blur-sm border border-white/40 rounded-3xl p-8 shadow-2xl`}>
                    {/* Ícone principal */}
                    <div className="absolute -top-6 -right-6">
                      <div className={`w-20 h-20 bg-gradient-to-r ${section.accent} rounded-2xl flex items-center justify-center text-3xl shadow-lg rotate-12 hover:rotate-0 transition-transform duration-500`}>
                        {section.icon}
                      </div>
                    </div>

                    {/* Conteúdo do card */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 bg-gradient-to-r ${section.accent} rounded-full animate-pulse`}></div>
                        <span className="text-sm font-semibold text-slate-700 uppercase tracking-wider">
                          Funcionalidade Principal
                        </span>
                      </div>

                      {/* Mini métricas visuais */}
                      <div className="grid grid-cols-3 gap-4">
                        {section.metrics.map((metric, idx) => (
                          <div key={idx} className="text-center">
                            <div className={`w-12 h-12 bg-gradient-to-r ${section.accent} rounded-xl flex items-center justify-center text-white font-bold text-sm mx-auto mb-2`}>
                              {idx + 1}
                            </div>
                            <div className="text-xs font-medium text-slate-600">
                              {metric}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Elemento decorativo */}
                      <div className="relative">
                        <div className={`h-2 bg-gradient-to-r ${section.accent} rounded-full overflow-hidden`}>
                          <div className="h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Elementos flutuantes decorativos */}
                  <div className={`absolute -z-10 top-8 -left-8 w-32 h-32 bg-gradient-to-r ${section.accent} rounded-full opacity-10 blur-2xl animate-float`}></div>
                  <div className={`absolute -z-10 bottom-8 -right-8 w-24 h-24 bg-gradient-to-r ${section.accent} rounded-full opacity-20 blur-xl animate-float animation-delay-1000`}></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer com progresso sofisticado */}
      <div className="absolute bottom-0 left-0 right-0 z-30">
        <div className="max-w-7xl mx-auto px-8 pb-8">
          <div className="flex items-center justify-between">
            {/* Info adicional */}
            <div className="flex items-center gap-4 text-sm text-slate-500">
              <span className="font-mono tracking-wider">MINDS UP</span>
              <div className="w-px h-4 bg-slate-300"></div>
              <span>Análise Educacional Avançada</span>
            </div>

            {/* Autoplay control */}
            <button
              onClick={() => {
                if (autoplayTimerRef.current) {
                  clearTimeout(autoplayTimerRef.current);
                  autoplayTimerRef.current = null;
                } else {
                  autoplayTimerRef.current = setTimeout(nextSlide, 6000);
                }
              }}
              className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-xl border border-white/40 rounded-full text-sm font-medium text-slate-600 hover:text-orange-500 transition-colors duration-300"
            >
              <div className={`w-2 h-2 rounded-full ${autoplayTimerRef.current ? 'bg-green-500' : 'bg-slate-400'}`}></div>
              {autoplayTimerRef.current ? 'Auto' : 'Manual'}
            </button>
          </div>

          {/* Barra de progresso principal */}
          <div className="mt-6 h-1 bg-slate-100 rounded-full overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-700 ease-out shadow-lg`}
              style={{ width: `${((currentSlide + 1) / sections.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

export default HorizontalScroll;