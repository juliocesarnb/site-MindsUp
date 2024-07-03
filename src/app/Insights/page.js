"use client";
import Navbar from "../components/Navbar";
import Background from "../components/Background";
import Footer from "../components/Footer";
import Link from "next/link";

const Insights = () => {
  return (
    <Background>
      <Navbar />
      <section className="p-4 sm:p-8 md:p-16 h-full flex items-center justify-center">
        <div className="bg-orange-3 w-full max-w-[100rem] rounded-lg mt-24 min-h-[90vh] flex items-center justify-center" 
        style={{
          background: "linear-gradient(to top right, #F8E0C9, #FEE0C2)"
        }}
      >
          <div className="flex flex-col gap-12 justify-center items-center container mx-auto p-4 sm:p-8 md:p-10 lg:p-12 text-center">
            <h1 className="text-orange-6 font-semibold text-4xl sm:text-5xl md:text-5xl lg:text-6xl">
              Mind&apos;s Up Insights
            </h1>

            <p className="text-black text-sm sm:text-base md:text-lg lg:text-lg">
              A equipe de suporte de dados da Mind&apos;s Up analisa os dados escolares
              dos simulados e da avaliação socioemocional e fornecem insights para
              toda a gestão escolar sobre competências que devem ser trabalhadas
              nos estudantes. Nossos insights abordam temas tanto cognitivos
              quanto socioemocionais, possibilitando um desenvolvimento integral
              dos estudantes.
            </p>

            <button className="bg-orange-400 font-medium w-full sm:w-[15rem] md:w-[15rem] hover:bg-orange-300 p-2 sm:p-3 md:p-4 rounded-2xl">
              <Link href="#contatos">Entre em contato conosco</Link>
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </Background>
  );
};

export default Insights;
