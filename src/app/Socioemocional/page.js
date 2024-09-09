import React from "react";
import Navbar from "../components/Navbar";
import Background from "../components/Background";
import Footer from "../components/Footer";
import Image from "next/image";

const Socioemocionais = () => {
  return (
    <Background>
      <Navbar />


      {/* Seção 1 */}
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between ml-[50px] mt-[30px]">
        <div className="w-full lg:w-1/2">
        <div className="text-black-4 font-semibold text-6xl 2xl:text-7xl relative mb-10">

        <h1
              class="text-black-4 font-semibold 
               text-6xl 2xl:text-7xl relative"
            >
              MUP {" "}
              {/* --------------- Span com a linha sublinhada Laranja ------------------ */}
              <span class="relative inline-block ">
                <div class="w-[16.5rem] h-4 bg-gradient-to-r from bg-purple-400 absolute top-10 left-[5px] z-0 2xl:top-[52px] 2xl:w-[32rem]"></div>
                <span class="relative z-10 ">Socioemocional</span>
                
              </span>
            </h1>

          </div>
          <p className="text-xl">
            <strong>Os simulados Minds Up</strong> são aplicados aos estudantes
            do 9º ano do Ensino Fundamental ao 3º ano do Ensino Médio e utilizam
            a Teoria da Resposta ao Item (TRI) para a correção, o mesmo método
            utilizado pelo ENEM. Isso garante uma avaliação precisa do
            desempenho dos estudantes, permitindo uma análise detalhada de suas
            habilidades e conhecimentos.
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center p-24">
          {/* Inserir decoração ou SVG */}
          <div className="bg-purple-200 h-72 w-72 rounded-full shadow-lg">
            <div className="pl-7 pt-5">
              
            </div>
          </div>
        </div>
      </section>

      {/* Seção 2 */}
      <section className="flex flex-col lg:flex-row items-center justify-between p-8 bg-purple-100">
        <div className="w-full lg:w-1/2 flex justify-center p-4">
          {/* Inserir decoração ou SVG */}
          <div className="bg-purple-300 h-[700px] w-[700px] rounded-full">
            <Image
              src="/assets/images/socioemocional-ilustrations/Webinar-amico.svg"
              alt="Professora ensinando atráves do computador"
              width="550"
              height="550"
              className="ml-[80px] pt-[50px]"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 p-4">
          <p className="text-2xl text-purple-900">
            <span className="text-9xl font-bold z-0 relative -mr-10">
              P
            </span>
            <span className="relative z-50">
              or meio da nossa plataforma, os professores têm acesso a
              informações valiosas sobre quais competências precisam ser
              trabalhadas em diferentes grupos de estudantes. Essa abordagem
              permite uma personalização do ensino, adaptando as estratégias
              pedagógicas às necessidades específicas de cada aluno, o que
              resulta em um aprendizado mais eficaz e direcionado.
            </span>
          </p>
        </div>
      </section>

      {/* Seção 3 */}
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between p-8">
        <div className="w-full lg:w-1/2 p-4">
          <p className="text-lg text-">
            Além disso, oferecemos listas de exercícios segmentadas por
            competência, facilitando o reforço de áreas específicas de estudo.
            Após a realização dos simulados, os estudantes recebem uma
            devolutiva personalizada, com ferramentas baseadas em ciência
            comportamental, que incentivam o engajamento contínuo nas atividades
            educacionais. Com o Minds Up Simulados, professores e estudantes têm
            à disposição recursos poderosos para potencializar o ensino e a
            aprendizagem.
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center p-4">
          {/* Inserir decoração ou SVG */}
          <div className="bg-purple-400 h-64 w-64 rounded-full shadow-lg"></div>
        </div>
      </section>
      <Footer />
    </Background>
  );
};

export default Socioemocionais;
