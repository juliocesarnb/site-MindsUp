"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Section3 = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('produtos');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const products = [
    {
      id: "integracao",
      title: "MindsUp",
      titleAccent: "Integração",
      description: "Conecte todos os dados da sua escola em uma plataforma única. Nossa IA avançada transforma informações dispersas em insights acionáveis para uma gestão educacional inteligente e proativa.",
      image: "/assets/images/simulados-ilustration/foto-simulado.svg",
      alt: "Estudante fazendo simulado",
      accent: "from-blue-500 to-indigo-600",
      bgAccent: "from-blue-50/80 to-indigo-50/60",
      textAccent: "text-blue-600",
      buttonAccent: "bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700",
      icon: "🔗",
      features: ["Dashboard Personalizado", "IA Integrada", "Gestão Ativa"],
      link: "/Integracao"
    },
    {
      id: "insights",
      title: "MindsUp",
      titleAccent: "Insights",
      description: "Simulados inteligentes que replicam o ENEM com precisão científica. Oferecemos análises detalhadas de performance e feedback personalizado para maximizar o potencial de cada estudante.",
      image: "/assets/images/insights-ilustration/foto-insights.svg",
      alt: "Alunos olhando para uma tela",
      accent: "from-amber-500 to-orange-600",
      bgAccent: "from-amber-50/80 to-orange-50/60",
      textAccent: "text-amber-600",
      buttonAccent: "bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700",
      icon: "💡",
      features: ["Simulados ENEM", "Feedback Preciso", "Análise Detalhada"],
      link: "/Insights"
    },
    {
      id: "socioemocional",
      title: "MindsUp",
      titleAccent: "Socioemocional",
      description: "Mapeamento completo das competências socioemocionais dos estudantes. Desenvolvemos estratégias personalizadas para fortalecer habilidades essenciais para o século XXI.",
      image: "/assets/images/socioemocional-ilustration/foto-socioemocional.svg",
      alt: "Alunos em uma sala de aula",
      accent: "from-purple-500 to-violet-600",
      bgAccent: "from-purple-50/80 to-violet-50/60",
      textAccent: "text-purple-600",
      buttonAccent: "bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700",
      icon: "🧠",
      features: ["Competências SEL", "Estratégias Personalizadas", "Desenvolvimento Integral"],
      link: "/Socioemocional"
    }
  ];

  return (
    <section
      id="produtos"
      className="relative min-h-screen pt-20 py-24 bg-white overflow-hidden"
    >
      {/* Background consistente com as outras páginas */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-r from-orange-100/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-gradient-to-l from-blue-100/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-orange-50/10 to-transparent rounded-full blur-2xl"></div>
        
        {/* Elementos decorativos flutuantes */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full opacity-20 animate-float"
              style={{
                left: `${10 + (i * 12)}%`,
                top: `${20 + (i % 4) * 20}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${4 + (i % 3)}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Header da seção */}
        <div className="text-center mb-20">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="relative inline-flex items-center gap-4 bg-orange-50/40 backdrop-blur-xl border border-orange-200/40 rounded-full px-7 py-3.5 shadow-lg shadow-orange-100/30">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-2.5 h-2.5 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-2.5 h-2.5 bg-orange-400 rounded-full animate-ping opacity-20"></div>
                </div>
                <span className="text-sm font-semibold text-orange-700 tracking-wide">
                  Produtos Minds Up
                </span>
              </div>
              <div className="w-px h-4 bg-gradient-to-b from-transparent via-orange-300/50 to-transparent"></div>
              <span className="text-sm font-medium text-orange-600/80">
                Soluções Educacionais
              </span>
            </div>
          </div>

          {/* Título principal */}
          <div className={`space-y-8 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              <span className="text-slate-700">Inteligência de dados</span>
              <br />
              <span className="text-slate-700">voltada para a </span>
              <span className="text-orange-500">melhoria da escola</span>
            </h2>

            <p className="max-w-4xl mx-auto text-xl md:text-2xl text-slate-600 leading-relaxed font-light">
              Nossos instrumentos foram desenvolvidos para traduzirem características complexas dos atores educacionais 
              de forma <span className="font-semibold text-slate-700">simples, concisa e focada na melhoria dos resultados.</span>
            </p>
          </div>
        </div>

        {/* Grid de produtos */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`group relative transform transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredCard(product.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card principal */}
              <div className="relative bg-white/80 backdrop-blur-xl border border-white/60 rounded-3xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                {/* Background dinâmico do card */}
                <div className={`absolute inset-0 bg-gradient-to-br ${product.bgAccent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Badge do ícone */}
                <div className="absolute top-6 right-6 z-10">
                  <div className={`w-12 h-12 bg-gradient-to-r ${product.accent} rounded-xl flex items-center justify-center text-xl shadow-lg transform transition-all duration-500 ${
                    hoveredCard === product.id ? 'rotate-12 scale-110' : 'rotate-0'
                  }`}>
                    {product.icon}
                  </div>
                </div>

                {/* Imagem */}
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay gradiente */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                </div>

                {/* Conteúdo */}
                <div className="relative p-8 space-y-6">
                  {/* Título split */}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold leading-tight">
                      <span className="text-slate-800">{product.title}</span>
                      <br />
                      <span className={`bg-gradient-to-r ${product.accent} bg-clip-text text-transparent`}>
                        {product.titleAccent}
                      </span>
                    </h3>
                    <div className={`w-12 h-1 bg-gradient-to-r ${product.accent} rounded-full transition-all duration-500 group-hover:w-20`}></div>
                  </div>

                  {/* Descrição */}
                  <p className="text-slate-600 leading-relaxed font-light">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 bg-gradient-to-r ${product.bgAccent} border border-white/60 rounded-full text-xs font-semibold ${product.textAccent} backdrop-blur-sm`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link href={product.link}>
                    <button className={`group/btn relative w-full px-6 py-4 ${product.buttonAccent} text-white font-semibold rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-${product.textAccent.split('-')[1]}-200/40 overflow-hidden`}>
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        Explorar {product.titleAccent}
                        <svg 
                          className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor" 
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                    </button>
                  </Link>
                </div>

                {/* Efeito de borda animado */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${product.accent} opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`}></div>
              </div>

              {/* Elemento decorativo flutuante */}
              <div className={`absolute -z-10 -top-4 -left-4 w-20 h-20 bg-gradient-to-r ${product.accent} rounded-full opacity-0 group-hover:opacity-10 blur-2xl transition-all duration-500 group-hover:scale-150`}></div>
              <div className={`absolute -z-10 -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r ${product.accent} rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700 group-hover:scale-125`}></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className={`space-y-8 transform transition-all duration-1000 delay-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <p className="text-lg text-slate-600 font-light">
              Pronto para transformar sua gestão educacional?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-lg rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-orange-200/40 hover:scale-105 overflow-hidden">
                <span className="relative z-10 flex items-center gap-3">
                  Agendar Demonstração
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </button>

              <button className="px-6 py-4 bg-white/70 backdrop-blur-sm border-2 border-slate-200/60 hover:border-orange-300/60 text-slate-700 font-semibold text-lg rounded-2xl transition-all duration-300 hover:shadow-lg hover:bg-white/80">
                Falar com Especialista
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(180deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Section3;