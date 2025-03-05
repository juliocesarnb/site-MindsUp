'use client';
import { useState } from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "O que é o nosso serviço?",
      answer:
        "Nosso serviço utiliza simulados e análises socioemocionais para oferecer uma visão integral e completa dos estudantes, possibilitando intervenções pedagógicas personalizadas.",
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
      
      <div className="bg-purple-100 min-h-screen">
        <Navbar /> {/* Menu superior */}
      <div className="max-w-3xl mx-auto p-6 pt-[12rem]">
        <h1 className="text-4xl font-bold text-purple-700 text-center mb-12">
          Perguntas frequentes
        </h1>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-purple-50 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full p-4 text-left flex justify-between items-center"
              >
                <h2 className="text-lg font-medium text-purple-700">
                  {item.question}
                </h2>
                <motion.div
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Plus className="w-6 h-6 text-purple-700" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="p-4 pt-0 text-gray-600">{item.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
