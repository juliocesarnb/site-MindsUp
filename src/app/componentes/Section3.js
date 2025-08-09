"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Section3 = () => {
  return (
    <section
      id="produtos"
      className="min-h-screen pt-[5rem] mt-12 mb-12 2xl:mb-1"
    >
      <h2 className="text-black-4 dark:text-white font-semibold text-5xl text-center mb-10 2xl:text-6xl">
        Inteligência de dados voltada <br /> para a melhoria da escola
      </h2>

      <p className="text-black-3 dark:text-black-1 flex justify-center items-center text-center mb-20 2xl:text-xl">
        Nossos instrumentos foram desenvolvidos para traduzirem características
        complexas <br /> dos atores educacionais (estudantes, pais e
        professores) de forma simples, concisa e<br /> focadas na melhoria dos
        resultados.
      </p>

      {/*-------------- Container dos cards ------------ */}
      <div className="flex flex-wrap justify-center lg:flex-nowrap gap-8 mx-5">
        {/*-------------- Card Simulados (Azul) ------------ */}
        <div className="w-full max-w-[400px] bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col">
          <div className="w-full h-[220px] relative">
            <Image
              src="/assets/images/simulados-ilustration/foto-simulado.svg"
              alt="Estudante fazendo simulado"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h2 className="text-2xl text-gray-800 dark:text-white font-bold mb-3">
              MindsUp Integração
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 flex-grow">
              Integre os dados de sua escola e personalize seus dashboards. Por
              meio das nossas soluções de IA promova uma gestão ativa da sua
              escola.
            </p>
            <Link href="/Simulados">
              <span className="block w-full bg-blue-200 text-blue-800 text-center py-3 rounded-lg font-semibold hover:bg-blue-300 transition">
                Saiba mais
              </span>
            </Link>
          </div>
        </div>

        {/*-------------- Card Insights (Amarelo) ------------ */}
        <div className="w-full max-w-[400px] bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col">
          <div className="w-full h-[220px] relative">
            <Image
              src="/assets/images/insights-ilustration/foto-insights.svg"
              alt="Alunos olhando para uma tela"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h2 className="text-2xl text-gray-800 dark:text-white font-bold mb-3">
              MindsUp Insights
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 flex-grow">
              Provas da Minds Up simulam o ENEM, com questões variadas, feedback
              preciso e preparação eficiente para os alunos.
            </p>
            <Link href="/Insights">
              <span className="block w-full bg-yellow-200 text-yellow-800 text-center py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
                Saiba mais
              </span>
            </Link>
          </div>
        </div>

        {/*-------------- Card Socioemocional (Roxo) ------------ */}
        <div className="w-full max-w-[400px] bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col">
          <div className="w-full h-[220px] relative">
            <Image
              src="/assets/images/socioemocional-ilustration/foto-socioemocional.svg"
              alt="Alunos em uma sala de aula"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h2 className="text-2xl text-gray-800 dark:text-white font-bold mb-3">
              MindsUp Socioemocional
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 flex-grow">
              Provas da Minds Up simulam o ENEM, com questões variadas, feedback
              preciso e preparação eficiente para os alunos.
            </p>
            <Link href="/Socioemocional">
              <span className="block w-full bg-purple-200 text-purple-800 text-center py-3 rounded-lg font-semibold hover:bg-purple-300 transition">
                Saiba mais
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
