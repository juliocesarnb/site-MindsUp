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
      <h2 className="text-black-4 font-semibold text-6xl 2xl:text-7xl flex justify-center items-center text-5xl text-center mb-10 2xl:text-6xl">
        Inteligência de dados voltada <br /> para a melhoria da escola
      </h2>

      <p className="text-black-3 flex justify-center items-center text-center mb-20 2xl:text-xl">
        Nossos instrumentos foram desenvolvidos para traduzirem características
        complexas <br /> dos atores educacionais (estudantes, pais e
        professores) de forma simples, concisa e<br /> focadas na melhoria dos
        resultados.
      </p>

      {/*-------------- Container dos cards ------------ */}
      <div className="flex flex-wrap justify-center lg:flex-nowrap gap-24 mx-5">
        {/*-------------- cards Roxo abaixo ------------ */}
        <div className="group relative w-[450px] h-[470px] bg-purple-200 flex items-center justify-center text-[25px] font-bold rounded-[15px] cursor-pointer overflow-hidden">
          <div className="absolute top-0 right-0 w-[20%] h-[20%] bg-purple-300 rounded-tr-[15px] rounded-bl-[100%] transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:rounded-[15px]" />
          <div className="absolute bottom-0 left-0 w-[20%] h-[20%] bg-purple-300 rounded-bl-[15px] rounded-tr-[100%] transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:rounded-[15px]" />
          <div className="relative z-10 text-center mb-14 group-hover:opacity-0 transition-opacity duration-300">
            <div className="mb-4 flex justify-center items-center">
              <Image
                src="/assets/images/socioemocional-ilustrations/quebracabeca.svg"
                alt="Logo da empresa"
                width={74}
                height={74}
              />
            </div>
            <h2 className="text-2xl 2xl:text-4xl text-purple-400 font-bold mb-3">
              <span className="text-purple-500">Mind&apos;s Up</span> <br />
              <span className="text-purple-500">Socioemocional</span>
            </h2>
          </div>
          <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-purple-400 text-center p-4 transition-all duration-500 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto">
            <p className="text-[#f5e8fc] text-2xl mb-8">
              <span className="text-purple-100">
                Ferramenta de mensuração das habilidades socioemocionais.
              </span>
            </p>
            <Link
              href="/Socioemocional"
              className="inline-block bg-purple-500 z-10 text-white px-6 py-2 rounded-lg text-lg hover:bg-orange-600 transition"
            >
              Saiba Mais
            </Link>
          </div>
        </div>

        {/*-------------- cards Azul abaixo ------------ */}
        <div className="group relative w-[450px] h-[470px] bg-blue-200 flex items-center justify-center text-[25px] font-bold rounded-[15px] cursor-pointer overflow-hidden">
          <div className="absolute top-0 right-0 w-[20%] h-[20%] bg-blue-300 rounded-tr-[15px] rounded-bl-[100%] transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:rounded-[15px]" />
          <div className="absolute bottom-0 left-0 w-[20%] h-[20%] bg-blue-300 rounded-bl-[15px] rounded-tr-[100%] transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:rounded-[15px]" />
          <div className="relative z-10 text-center mb-14 group-hover:opacity-0 transition-opacity duration-300">
            <div className="mb-4 flex justify-center items-center">
              <Image
                src="/assets/images/simulados-ilustration/exam.svg"
                alt="Logo da empresa"
                width={74}
                height={74}
              />
            </div>
            <h2 className="text-2xl 2xl:text-4xl text-purple-400 font-bold mb-3">
              <span className="text-blue-500">Mind&apos;s Up</span> <br />
              <span className="text-blue-500">Simulados</span>
            </h2>
          </div>
          <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-blue-400 text-center p-4 transition-all duration-500 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto">
            <p className="text-[#f5e8fc] text-2xl mb-8">
              <span className="text-blue-100">
                Ferramenta de mensuração das habilidades socioemocionais.
              </span>
            </p>
            <Link
              href="/Simulados"
              className="inline-block bg-blue-500 z-10 text-white px-6 py-2 rounded-lg text-lg hover:bg-orange-600 transition"
            >
              Saiba Mais
            </Link>
          </div>
        </div>

        {/*-------------- cards Laranja abaixo ------------ */}
        <div className="group relative w-[450px] h-[470px] bg-orange-200 flex items-center justify-center text-[25px] font-bold rounded-[15px] cursor-pointer overflow-hidden">
          <div className="absolute top-0 right-0 w-[20%] h-[20%] bg-orange-300 rounded-tr-[15px] rounded-bl-[100%] transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:rounded-[15px]" />
          <div className="absolute bottom-0 left-0 w-[20%] h-[20%] bg-orange-300 rounded-bl-[15px] rounded-tr-[100%] transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:rounded-[15px]" />
          <div className="relative z-10 text-center mb-14 group-hover:opacity-0 transition-opacity duration-300">
            <div className="mb-4 flex justify-center items-center">
              <Image
                src="/assets/images/insights-ilustration/lightning.svg"
                alt="Logo da empresa"
                width={74}
                height={74}
              />
            </div>
            <h2 className="text-2xl 2xl:text-4xl text-purple-400 font-bold mb-3">
              <span className="text-orange-500">Mind&apos;s Up</span> <br />
              <span className="text-orange-500">Insights</span>
            </h2>
          </div>
          <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-orange-400 text-center p-4 transition-all duration-500 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto">
            <p className="text-[#f5e8fc] text-2xl mb-8">
              <span className="text-orange-100">
                Ferramenta de mensuração das habilidades socioemocionais.
              </span>
            </p>
            <Link
              href="/Insights"
              className="inline-block bg-orange-600 z-10 text-white px-6 py-2 rounded-lg text-lg hover:bg-orange-700 transition"
            >
              Saiba Mais
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
