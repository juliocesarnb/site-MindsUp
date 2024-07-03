"use client";
import Navbar from "../components/Navbar";
import Background from "../components/Background";
import Footer from "../components/Footer";
import Link from "next/link";

const Socioemocionais = () => {
  return (
    <Background>
      <Navbar />
      <section className="p-4 sm:p-8 md:p-16 h-full flex items-center justify-center">
        <div
          className="w-full max-w-[100rem] rounded-lg mt-24 min-h-[90vh] flex items-center justify-center"
          style={{
            background: "linear-gradient(to top right, #DCCBF6, #E6CEF2)"
          }}
        >
          <div className="flex flex-col gap-12 justify-center items-center container mx-auto p-4 sm:p-8 md:p-10 lg:p-12 text-center">
            <h1 className="text-purple-3 font-semibold text-4xl sm:text-5xl md:text-5xl lg:text-6xl">
              Mind&apos;s Up Socioemocional
            </h1>

            <p className="text-black max-w-6xl  text-sm sm:text-base md:text-lg lg:text-lg">
              Descubra o potencial completo de seus alunos com Mind&apos;s Up Socioemocional. Nossa plataforma inovadora utiliza dados para desbloquear insights profundos sobre as características socioemocionais de cada estudante. Com uma abordagem personalizada, oferecemos respostas claras e acionáveis, permitindo que educadores e pais compreendam melhor as necessidades individuais de cada aluno. Capacite seus alunos a prosperarem não apenas academicamente, mas também emocionalmente. Junte-se à Mind&apos;s Up Socioemocionais e embarque na jornada para um futuro mais resiliente e conectado.
            </p>

            <button className="bg-purple-500 font-medium w-full sm:w-[15rem] md:w-[15rem] hover:bg-purple-400 p-2 sm:p-3 md:p-4 rounded-2xl">
              <Link href="#contatos">Entre em contato conosco</Link>
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </Background>
  );
};

export default Socioemocionais;
