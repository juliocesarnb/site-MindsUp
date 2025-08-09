'use client';

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../componentes/Navbar";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "O que é o nosso serviço?",
      answer:
        "Nosso serviço utiliza simulados e análises socioemococionais para oferecer uma visão integral e completa dos estudantes, possibilitando intervenções pedagógicas personalizadas.",
    },
    {
      question: "Como posso começar?",
      answer:
        "Para começar, basta se cadastrar na nossa plataforma e seguir as instruções para utilizar os simulados e análises disponíveis.",
    },
    {
      question: "Como funciona a plataforma?",
      answer:
        "A plataforma Minds Up combina ferramentas de ciência comportamental e análises de dados para gerar insights sobre o desempenho cognitivo e socioemocional dos estudantes, permitindo uma gestão escolar mais eficaz.",
    },
    {
      question: "Quais são os benefícios para professores e escolas?",
      answer:
        "Professores e escolas têm acesso a diagnósticos detalhados sobre os estudantes, que ajudam a ajustar metodologias de ensino e desenvolver estratégias personalizadas, potencializando o ensino e a aprendizagem.",
    },
    {
      question: "As avaliações são regulares?",
      answer:
        "Sim, os simulados e avaliações são aplicados em ciclos regulares, permitindo acompanhar a evolução dos estudantes ao longo do tempo e identificar pontos fortes e fracos.",
    },
    {
      question: "Como os dados são utilizados?",
      answer:
        "Os dados gerados pela plataforma ajudam a criar estratégias pedagógicas mais eficazes, focando em intervenções que realmente funcionam para o desenvolvimento integral dos alunos.",
    },
    {
      question: "Como as habilidades socioemocionais são trabalhadas?",
      answer:
        "A plataforma mapeia competências socioemocionais, permitindo criar intervenções personalizadas para fortalecer áreas onde os alunos apresentam maiores dificuldades e promovendo ambientes de aprendizado mais acolhedores.",
    },
    {
      question: "Quais resultados posso esperar?",
      answer:
        "Com a utilização da nossa plataforma, é possível melhorar o engajamento de pais e estudantes, ajustar estratégias pedagógicas e promover o desenvolvimento cognitivo e socioemocional dos alunos.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-950 min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 pt-[10rem] pb-20">
        <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-200 mb-12">
          FAQ&apos;s
        </h1>

        <div className="space-y-6">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              layout
              className="rounded-xl border border-gray-300 dark:border-gray-700 shadow-md bg-white/80 dark:bg-gray-800/80 backdrop-blur-md transition-colors duration-300"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full p-6 text-left flex justify-between items-center"
                aria-expanded={openIndex === index}
                aria-controls={`faq-content-${index}`}
              >
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  {item.question}
                </h2>
                <motion.div
                  initial={false}
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {openIndex === index ? (
                    <Minus className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  ) : (
                    <Plus className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  )}
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    id={`faq-content-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 pt-0 text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
