// app/Sobre/page.jsx

"use client";
import Navbar from "../componentes/Navbar";
import Footer from "../componentes/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react"; // Um ícone sutil para o CTA

const Sobre = () => {
  return (
    // Fundo único para um visual mais limpo
    <main className="bg-white dark:bg-black font-inter">
      <Navbar />

      {/* Conteúdo da Página */}
      <div className="animate-fade-in">
        {/* Seção Hero Minimalista */}
        <section className="pt-40 pb-24 text-center">
          <div className="container mx-auto px-6 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-slate-900 dark:text-white">
              Nós usamos dados para construir o futuro da educação.
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              A Minds Up nasceu de uma convicção simples: cada estudante tem um potencial único. Nossa missão é fornecer as ferramentas para que educadores possam descobrir e nutrir esse potencial de forma integral e personalizada.
            </p>
          </div>
        </section>

        {/* Seção de Pilares (Missão, Visão, Valores) */}
        <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
              {/* Pilar 1: Missão */}
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Nossa Missão</h2>
                <p className="text-slate-600 dark:text-slate-400">
                  Empoderar escolas com insights acionáveis para promover o desenvolvimento integral e personalizado de cada aluno.
                </p>
              </div>
              {/* Pilar 2: Visão */}
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Nossa Visão</h2>
                <p className="text-slate-600 dark:text-slate-400">
                  Ser a principal referência no Brasil em inteligência de dados educacionais, transformando a forma como a aprendizagem é gerenciada.
                </p>
              </div>
              {/* Pilar 3: Inovação */}
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Nosso Compromisso</h2>
                <p className="text-slate-600 dark:text-slate-400">
                  Inovação com propósito, foco no desenvolvimento individual e uma parceria genuína com cada instituição de ensino.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Seção de fundadores/história */}
        <section className="py-24">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Como tudo começou</h2>
                    <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                        Uma jornada que une educação e tecnologia.
                    </p>
                </div>
                <div className="mt-12 prose prose-lg prose-slate mx-auto dark:prose-invert">
                    <p>
                        A Minds Up foi fundada por um grupo de educadores e cientistas de dados que viam uma lacuna entre o potencial dos alunos e as ferramentas disponíveis para as escolas. Em um mundo cada vez mais orientado por dados, a educação parecia operar com base em métricas do passado.
                    </p>
                    <p>
                        Nós nos propusemos a mudar isso. Passamos anos desenvolvendo e validando uma plataforma que não apenas mede o desempenho acadêmico, mas também compreende as nuances do desenvolvimento socioemocional, oferecendo uma visão completa que serve como base para uma pedagogia verdadeiramente eficaz e humana.
                    </p>
                </div>
                 <div className="mt-12 text-center text-slate-500 dark:text-slate-400">
                    <p>Fundado por <strong className="font-semibold text-slate-700 dark:text-slate-200">Nome do Fundador 1</strong> e <strong className="font-semibold text-slate-700 dark:text-slate-200">Nome do Fundador 2</strong></p>
                </div>
            </div>
        </section>

        {/* Seção CTA Final */}
        <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
          <div className="container mx-auto px-6 text-center max-w-2xl">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Vamos conversar?</h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              Estamos prontos para mostrar como a Minds Up pode se tornar a maior aliada no sucesso da sua escola.
            </p>
            <div className="mt-8">
              <Link href="/#contatos">
                <span className="group inline-flex items-center justify-center bg-purple-600 text-white px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:bg-purple-700">
                  Fale com um especialista
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
};

export default Sobre;