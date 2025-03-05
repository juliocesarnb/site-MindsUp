'use client';
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import Footer from "./components/Footer";
import Image from "next/image";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import HorizontalScroll from "./components/HorizontalScroll";
import Section3 from "./components/Section3";

const Home = () => {
  const [text] = useTypewriter({
    words: ["decisões", "intuições", "soluções"],
    loop: {},
  });
  return (
    <main className="">
      <Background>
        {" "}
        {/*Background padrão */}
        <Navbar /> {/* Menu superior */}
        {/* Seção - 1: Primeira Seção  */}
        <div class="w-96 h-96 rounded-full bg-gradient-to-br from-blue-200 to-purple-100 filter blur-3xl  absolute z-0 lg:ml-40 mt-4 2xl:mt-10 2xl:w-[28rem] 2xl:h-[28rem]"></div>
        <div class="w-96 h-96 rounded-full bg-gradient-to-br from-purple-200 to-blue-100 filter blur-3xl absolute z-0 ml-2 mt-44 2xl:mt-26 2xl:w-[28rem] 2xl:h-[28rem]"></div>
        <div class="w-96 h-96 rounded-full bg-gradient-to-br from-purple-100 to-orange-100 filter blur-3xl absolute z-0 lg:ml-96 mt-28 2xl:mt-44 2xl:w-[28rem] 2xl:h-[28rem]"></div>
        <div
          class="flex h-[80vh]
        sm: md:mt-2 lg:mt-[6rem] -pt-28 lg:pl-12   
        relative  z-10"
        >
          {/* ------------------ TEXTO H1 / AO LADO DA IMAGEM NA HOME 768px - responsividade do ipad mini pro footer ----------------- */}

          <div
            class="
            flex
            flex-col
            sm:text-center
            md:text-center
            md:w-4/4
            md:pl-[0rem] 
            lg:-mt-44  
            lg:w-[55rem]
            lg:text-left
            2xl:pl-[5rem]
            text-center 
            justify-center overflow-hidden"
            >
            <h1
              class="text-[#523624] font-semibold 
               text-6xl 2xl:text-7xl relative"
            >
              Use dados para <br />
              guiar suas{" "}

              {/* --------------- Span com Sa linha sublinhada Laranja ------------------ */}
              <span class="relative inline-block ">
                <div class="w-[16.5rem] rounded-xl h-4 bg-gradient-to-r from bg-orange-300 absolute top-10 left-0 z-0 2xl:top-12 2xl:w-[20rem]"></div>
                <span class="relative z-10 ">{text}</span>
                <Cursor />
              </span>
            </h1>

            <p class="text-orange-2  justify-center items-center  mt-8 sm:mt-20 md:mt-12 lg:mt-[3rem] lg:w-[98%] text-lg 2xl:text-xl">
              Por meio de análise de dados, cognitivos e socioemocionais, a
              Mind&apos;s Up oferece uma visão integral, personalizada e
              acionável para seus estudantes, alsém de possibilitar novas formas
              de engajamento de estudantes, pais e professores.
            </p>
          </div>
          {/* ------------------ IMAGEM DA HOME ----------------- */}
          <div className="lg:block hidden ">
            <Image
              className="2xl: w-[640px] ml-[10rem] mt-[4rem]"
              src="/assets/images/estudante-frente-dados.svg"
              alt="Imagem de garoto estudando"
              width={700}
              height={700}
            />
          </div>
        </div>
        {/*segunda seção:: soluções */}
        {/*container dropdown*/}
        {/*Titulo do Dropdown*/}
        {/*dropdown com informações sobre as soluções*/}
        <HorizontalScroll />
        <Section3 />
        <Footer />
      </Background>
    </main>
  );
};

export default Home;
