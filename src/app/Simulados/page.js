import React from 'react';
import Navbar from "../components/Navbar";
import Background from "../components/Background";
import Footer from "../components/Footer";
import AnimatedBarChart from "../components/AnimatedBarChart"; // Importe o componente aqui

const Socioemocionais = () => {
  return (
    <Background>
      <Navbar />
      <header className="p-2 flex justify-between items-center bg-blue-600 text-white">
        <h1 className="text-3xl font-bold">Minds Up Simulados</h1>
        <button className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Acessar
        </button>
      </header>

      {/* Seção 1 */}
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between p-8">
        <div className="w-full lg:w-1/2 p-4">
        <h1
            class="text-black-4 font-semibold 
               text-6xl 2xl:text-7xl relative mb-10"
          >
            MUP{" "}
            {/* --------------- Span com a linha sublinhada Laranja ------------------ */}
            <span class="relative inline-block ">
              <div class="w-[16.5rem] h-4 bg-gradient-to-r from bg-blue-400 absolute top-10 left-[5px] z-0 2xl:top-[52px] 2xl:w-[21rem]"></div>
              <span class="relative z-10 ">Simulados</span>
            </span>
          </h1>

          <p className="text-lg">
            <strong>Os simulados Minds Up</strong> são aplicados aos estudantes do 9º ano do Ensino Fundamental ao 3º ano do Ensino Médio e utilizam a Teoria da Resposta ao Item (TRI) para a correção, o mesmo método utilizado pelo ENEM. Isso garante uma avaliação precisa do desempenho dos estudantes, permitindo uma análise detalhada de suas habilidades e conhecimentos.
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center p-4">
          <div className="bg-blue-200 h-72 w-72 rounded-full shadow-lg flex items-center justify-center">
            <AnimatedBarChart />
          </div>
        </div>
      </section>

      {/* Seção 2 */}
      <section className="flex flex-col lg:flex-row items-center justify-between p-8 bg-blue-100">
        <div className="w-full lg:w-1/2 flex justify-center p-4">
          <div className="bg-blue-300 h-64 w-64 rounded-lg shadow-lg"></div>
        </div>
        <div className="w-full lg:w-1/2 p-4">
          <p className="text-lg">
            Por meio da nossa plataforma, os professores têm acesso a informações valiosas sobre quais competências precisam ser trabalhadas em diferentes grupos de estudantes. Essa abordagem permite uma personalização do ensino, adaptando as estratégias pedagógicas às necessidades específicas de cada aluno, o que resulta em um aprendizado mais eficaz e direcionado.
          </p>
        </div>
      </section>

      {/* Seção 3 */}
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between p-8">
        <div className="w-full lg:w-1/2 p-4">
          <p className="text-lg">
            Além disso, oferecemos listas de exercícios segmentadas por competência, facilitando o reforço de áreas específicas de estudo. Após a realização dos simulados, os estudantes recebem uma devolutiva personalizada, com ferramentas baseadas em ciência comportamental, que incentivam o engajamento contínuo nas atividades educacionais. Com o Minds Up Simulados, professores e estudantes têm à disposição recursos poderosos para potencializar o ensino e a aprendizagem.
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center p-4">
          <div className="bg-blue-400 h-64 w-64 rounded-full shadow-lg"></div>
        </div>
      </section>
      <Footer />
    </Background>
  );
};

export default Socioemocionais;
