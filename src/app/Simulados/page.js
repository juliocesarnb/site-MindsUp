"use client";
import Navbar from "../components/Navbar";
import Background from "../components/Background";
import Footer from "../components/Footer";
import Link from "next/link";

const Simulados = () => {
  return (
    <Background>
      <Navbar />
      <section className="p-4 sm:p-8 md:p-16 h-full flex items-center justify-center">
        <div className="bg-blue-100 w-full max-w-[100rem] rounded-lg mt-24 min-h-[90vh] flex items-center justify-center"
        style={{
          background: "linear-gradient(to top right, #E3EEF2, #CEF3F3)"
        }}
        >
          <div className="flex flex-col gap-12 justify-center items-center container mx-auto p-4 sm:p-8 md:p-10 lg:p-12 text-center">
            <h1 className="text-blue-2 font-semibold text-4xl sm:text-5xl md:text-5xl lg:text-6xl">
              Mind&apos;s Up Simulados
            </h1>

            <p className="text-black text-sm sm:text-base md:text-lg lg:text-lg">
              Os simulados Mind&apos;s Up são aplicados aos estudantes do 9º ao 3º ano e são corrigidos com Teoria da Resposta ao Item (TRI), mesmo método de correção do ENEM. Por meio da nossa plataforma, o professor pode entender quais competências devem ser trabalhadas para diferentes tipos de estudantes, permitindo uma abordagem pedagógica mais personalizada. Além disso, disponibilizamos listas de exercícios por competência. Após os simulados, os estudantes recebem uma devolutiva personalizada com ferramentas de ciência comportamental para aumentar o engajamento nas atividades educacionais. Empodere professores e estudantes com Mind&apos;s Up Simulados.
            </p>

            <button className="bg-blue-400 w-full  font-medium sm:w-[15rem] md:w-[15rem] hover:bg-blue-300 p-2 sm:p-3 md:p-4 rounded-2xl">
              <Link href="#contatos">Entre em contato conosco</Link>
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </Background>
  );
};

export default Simulados;
