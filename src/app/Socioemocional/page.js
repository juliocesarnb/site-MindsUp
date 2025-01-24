"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Background from "../components/Background";
import Footer from "../components/Footer";
import Image from "next/image";

const Socioemocional = () => {
  return (
    <Background>
      <Navbar />

      {/* Seção 1 */}
      <section className="flex flex-col-reverse bg-purple-4 lg:flex-row items-center justify-between p-4 lg:pl-[4rem] mt-10 h-auto lg:h-[90vh] relative overflow-hidden">
        <div className="w-full lg:w-1/2 p-4">
          <div className=" font-semibold text-4xl lg:text-6xl 2xl:text-7xl relative mb-10">
            <h1 className="text-black-4 font-semibold text-4xl lg:text-6xl 2xl:text-7xl relative mb-20">
              MUP{" "}
              <span className="relative inline-block">
                <span className="w-[12rem] lg:w-[16.5rem] 2xl:w-[34.5rem] h-2 lg:h-4 bg-gradient-to-r from bg-purple-400 absolute top-5 lg:top-12 left-[5px] z-0 block"></span>
                <span className="relative z-10">Socioemocional</span>
              </span>
            </h1>
          </div>
          <p className="text-lg text-justify text-purple-900">
            As provas socioemocionais, como as desenvolvidas pela{" "}
            <strong>Minds Up</strong>, representam um avanço significativo na
            forma como avaliamos o desenvolvimento dos indivíduos. Ao invés de
            se concentrar apenas nas habilidades cognitivas, essas avaliações
            buscam compreender a complexidade da experiência humana, englobando
            aspectos como emoções, relações interpessoais e autoconhecimento.
          </p>
        </div>

        {/* Caça-palavras e imagens */}
        <div className="relative z-10 flex flex-col items-center">
          <Image
            src="/assets/images/socioemocional-ilustrations/cp.svg"
            alt="Quadro caça palavras com palavras de incentivo"
            width={750}
            height={750}
            className="mt-24 mr-24"
          />
        </div>
      </section>

      {/* Seção 2 */}
      <section className="flex flex-col lg:flex-row items-center justify-between p-4 lg:p-8 bg-purple-100">
        <div className="w-full lg:w-1/2 flex justify-center p-4">
          <Image
            src="/assets/images/socioemocional-ilustrations/Garoto-estudando.svg"
            alt="Garoto estudando"
            width={450}
            height={450}
            className=""
          />
        </div>
        <div className="w-full lg:w-1/2 p-4">
          <p className="text-lg text-purple-900">
            <span className="text-6xl lg:text-9xl font-bold z-0 relative text-justify -mr-4 mr-[0.5px]">
              U
            </span>
            m dos principais desafios que as provas socioemocionais ajudam a
            identificar é a lacuna existente entre o que aprendemos na escola e
            as habilidades necessárias para lidar com os desafios da vida real.
            Muitas vezes, as escolas se concentram no desenvolvimento de
            habilidades cognitivas, como a capacidade de resolver problemas
            matemáticos ou escrever um ensaio, negligenciando a importância de
            habilidades socioemocionais como a empatia, a resiliência e a
            capacidade de trabalhar em equipe.
          </p>
        </div>
      </section>

      {/* Seção 3 */}
      <section className="flex flex-col lg:flex-row items-center justify-between p-4 lg:p-8 bg-purple-4">
        <div className="w-full lg:w-1/2 p-4">
          <p className="text-lg text-purple-900 text-justify">
            Ao mapear as competências {" "}
            <span className="relative inline-block">
              <span className="w-full h-2 bg-gradient-to-r from bg-purple-300 absolute top-4 z-0 block"></span>
              <span className="relative z-10 text-black-4">
                <strong> socioemocionais </strong>
              </span>
            </span>{" "}
            dos alunos, as provas da
            Minds Up oferecem dados valiosos para professores, pais e
            educadores. Com essas informações, é possível desenvolver
            intervenções personalizadas que visam fortalecer as áreas em que os
            alunos apresentam maiores dificuldades. Além disso, essas avaliações
            podem contribuir para a criação de ambientes de aprendizagem mais
            acolhedores e que promovam o bem-estar emocional dos estudantes. Ao
            identificar precocemente os desafios socioemocionais, é possível
            oferecer o apoio necessário para que os alunos desenvolvam todo o
            seu{" "}
            <span className="relative inline-block">
              <span className="w-full h-2 rounded-lg bg-gradient-to-r from bg-purple-300 absolute -left-1 top-4 z-0 block"></span>
              <span className="relative z-10 text-black-4">
                <strong> potencial. </strong>
              </span>
            </span>{" "}
            
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center p-4">
          <Image
            src="/assets/images/socioemocional-ilustrations/quadro-estudante.svg"
            alt="Quadro com estudante"
            width={500}
            height={500}
            className=""
          />
        </div>
      </section>

      <Footer />
    </Background>
  );
};

export default Socioemocional;
