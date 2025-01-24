"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Background from "../components/Background";
import Footer from "../components/Footer";
import Image from "next/image";
import { useEffect } from "react";

const LottieAnimation = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs";
    script.type = "module";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ width: "800px", height: "800px", overflow: "hidden" }}>
      <dotlottie-player
        src="https://lottie.host/13dfd9d8-db0a-4d30-94b5-44de20e20f47/7bY2Jow2s4.json"
        background="transparent"
        speed="1"
        style={{ transform: "scale(1.2)", width: "100%", height: "100%" }} // Aumenta o tamanho sem alterar o layout
        loop
        autoplay
      ></dotlottie-player>
    </div>
  );
};

const Socioemocionais = () => {
  return (
    <Background>
      <Navbar />

      {/* Seção 1 */}
      <section className="flex bg-blue-50 flex-col-reverse lg:flex-row items-center justify-between pt-20 pl-24 p-8">
        <div className="w-full lg:w-1/2 p-4">
          <h1
            class="text-blue-950 font-semibold 
              text-6xl 2xl:text-7xl relative mb-10"
          >
            MUP{" "}
            {/* --------------- Span com a linha sublinhada Azul ------------------ */}
            <span class="relative inline-block ">
              <div class="w-[16.5rem] h-4 bg-gradient-to-r from bg-blue-400 absolute top-10 left-[5px] z-0 2xl:top-[52px] 2xl:w-[22.5rem]"></div>
              <span class="relative z-10 ">Simulados</span>
            </span>
          </h1>

          <p className="text-lg text-blue-900">
            As provas estilo ENEM, como as desenvolvidas pela{" "}
            <strong>Minds Up</strong>, representam uma{" "}
            <strong>nova abordagem </strong>para a avaliação educacional,
            buscando simular as condições reais do exame nacional e oferecer um
            feedback mais preciso sobre o desempenho dos estudantes. Ao reunir
            questões de diferentes edições do ENEM, essas provas proporcionam
            aos alunos a oportunidade de se familiarizar com a estrutura e o
            conteúdo do exame, além de identificar suas principais dificuldades
            e potencialidades.
          </p>
        </div>
        <div className="mr-12">
          <LottieAnimation />
        </div>
      </section>

      {/* Seção 2 */}
      <section className="flex flex-col lg:flex-row items-center justify-between p-8 bg-blue-100 relative">
        <div className="w-full lg:w-1/2 flex justify-center p-4">
          <Image
            className="2xl: "
            src="/assets/images/simulados-ilustration/Professor-e-aluno.svg"
            alt="Imagem de garoto estudando"
            width={450}
            height={450}
          />
        </div>

        <div className="lg:w-1/2 p-6 z-10 text-center lg:text-left lg:pl-12">
          <p className="text-lg text-blue-950">
            <span className="text-9xl font-bold z-40 relative text-justify mr-6">
              A
            </span>
            aplicação dessas provas ocorreria em ciclos regulares nas escolas,
            o que permite <strong>acompanhar</strong> a evolução do aprendizado dos estudantes ao
            longo do tempo. Essa prática contínua de avaliação diagnóstica
            auxilia os professores a ajustar suas metodologias de ensino e a
            oferecer um acompanhamento mais <strong>personalizado</strong> aos alunos. Justamente
            a falta de acesso a resultados individuais detalhados limita o
            potencial dessas avaliações. Ao não conhecerem seus pontos fortes e
            fracos de forma específica, os alunos podem ter dificuldades em
            direcionar seus estudos e desenvolver estratégias eficazes para
            superar suas dificuldades.
          </p>
        </div>
      </section>

      {/* Seção 3 */}
      <section className="flex bg-blue-50 flex-col-reverse lg:flex-row items-center justify-between p-8">
        <div className="w-full lg:w-1/2 p-4">
          <p className="text-lg text-black-4 text-justify">
            Além disso, oferecemos listas de exercícios segmentadas por
            competência, facilitando o reforço de áreas específicas de estudo.
            Após a realização dos simulados, os estudantes recebem uma
            devolutiva personalizada, com ferramentas baseadas em ciência
            comportamental, que incentivam o engajamento contínuo nas atividades
            educacionais. Com o{" "}
            <span className="relative inline-block">
              <span className="w-full h-2 bg-gradient-to-r from bg-blue-300 absolute top-4 z-0 block"></span>
              <span className="relative z-10 text-black-4">
                <strong> MindsUP Simulados </strong>
              </span>
            </span>{" "}
            professores e estudantes têm à disposição recursos poderosos para{" "}
            <span className="relative inline-block">
              <span className="w-full h-2 rounded-lg bg-gradient-to-r from bg-blue-300 absolute -left-1 top-4 z-0 block"></span>
              <span className="relative z-10 text-black-4">
                <strong> potencializar </strong>
              </span>
            </span>{" "}
            o ensino e a aprendizagem.
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center p-4">
          <Image
            className="2xl: "
            src="/assets/images/simulados-ilustration/Simulado-online.svg"
            alt="Imagem de garoto estudando"
            width={450}
            height={450}
          />
        </div>
      </section>
      <Footer />
    </Background>
  );
};

export default Socioemocionais;
