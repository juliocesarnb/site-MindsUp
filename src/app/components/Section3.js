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
      <h2 className="text-black-4 dark:text-white font-semibold text-6xl 2xl:text-7xl flex justify-center items-center text-5xl text-center mb-10 2xl:text-6xl">
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
        {/*-------------- Card Roxo ------------ */}
        <div className="w-[450px] h-[510px] bg-purple-100 flex flex-col items-center justify-center rounded-[15px] p-9 pb-[4rem]">
          <div className="w-[104px] h-[104px] bg-[#D06BFF] rounded-full flex items-center justify-center mb-6">
            <Image
            className="mr-[0.2rem]"
              src="/assets/images/socioemocional-ilustrations/quebra-cabeca.svg"
              alt="Ícone de quebra-cabeça"
              width={55}
              height={55}
            />
          </div>
          <h2 className="text-3xl text-center font-bold mb-3 text-[#43157A]">
            MindsUP <br /> <span className="text-[#9717AB]"> Socioemocional </span>
          </h2>
          <p className="text-gray-500 text-center text-md mb-6">
            Ferramenta de mensuração das habilidades socioemocionais.
          </p>
          <Link
            href="/Socioemocional"
            className="bg-[#A855F7] text-white px-[5rem] py-3 rounded-full text-lg hover:bg-[#9335D8] transition"
          >
            Saiba mais
          </Link>
        </div>

        {/*-------------- Card Laranja ------------ */}
        <div className="w-[450px] h-[510px] bg-orange-100 flex flex-col items-center justify-center rounded-[15px] p-6 pb-[4rem]">
          <div className="w-[104px] h-[104px] bg-[#FFC66B] rounded-full flex items-center justify-center mb-6">
            <Image
              src="/assets/images/insights-ilustration/lightning.svg"
              alt="Ícone de raio"
              width={60}
              height={60}
            />
          </div>
          <h2 className="text-3xl text-center font-bold mb-3 text-[#63351C]">
            MindsUP <br /> <span className="text-[#AB6117]"> Insights </span>
          </h2>
          <p className="text-gray-500 text-center text-md mb-6">
            Ferramenta de mensuração das habilidades socioemocionais.
          </p>
          <Link
            href="/Insights"
            className="px-[5rem] py-3 bg-[#F59E0B] text-white px-6 py-2 rounded-full text-lg hover:bg-[#D97706] transition"
          >
            Saiba mais
          </Link>
        </div>

        {/*-------------- Card Azul ------------ */}
        <div className="w-[450px] h-[510px] bg-blue-100 flex flex-col items-center justify-center rounded-[15px] p-6 pb-[4rem]">
          <div className="w-[104px] h-[104px] bg-[#6BBDFF] rounded-full flex items-center justify-center mb-6">
            <Image
              src="/assets/images/simulados-ilustration/exame.svg"
              alt="Ícone de exame"
              width={50}
              height={50}
            />
          </div>
          <h2 className="text-3xl text-center font-bold mb-3 text-[#1C4B63]">
            MindsUP <br /> <span className="text-[#1795AB]"> Simulados </span>
          </h2>
          <p className="text-gray-500 text-center text-md mb-6">
            Ferramenta de mensuração das habilidades socioemocionais.
          </p>
          <Link
            href="/Simulados"
            className="px-[5rem] py-3 bg-[#3B82F6] text-white px-6 py-2 rounded-full text-lg hover:bg-[#2563EB] transition"
          >
            Saiba mais
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Section3;