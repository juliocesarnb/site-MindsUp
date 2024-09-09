"use client";
import { useEffect, useState, useRef } from "react";
import Navbar from "../components/Navbar";
import Background from "../components/Background";
import Footer from "../components/Footer";
import Image from "next/image";

const RandomImages = () => {
  const [visibleImages, setVisibleImages] = useState(Array(8).fill(false));
  const containerRef = useRef(null);
  const timeoutIdsRef = useRef([]);

  const showRandomImage = (imageIndexes) => {
    if (imageIndexes.length === 0) return;

    const randomIndex = Math.floor(Math.random() * imageIndexes.length);
    const imageToShow = imageIndexes.splice(randomIndex, 1)[0];

    setVisibleImages((prev) => {
      const newVisibleImages = [...prev];
      newVisibleImages[imageToShow] = true;
      return newVisibleImages;
    });

    timeoutIdsRef.current.push(
      setTimeout(() => showRandomImage(imageIndexes), Math.random() * 500 + 300)
    );
  };

  const resetImages = () => {
    setVisibleImages(Array(8).fill(false));
    timeoutIdsRef.current.forEach(clearTimeout);
    timeoutIdsRef.current = [];

    const imageIndexes = [0, 1, 2, 3, 4, 5, 6, 7];
    showRandomImage(imageIndexes);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          resetImages();
        }
      },
      { threshold: 0.5 } // Torna o observador mais sensível a mudanças na visibilidade
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      timeoutIdsRef.current.forEach(clearTimeout);
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-[500px] h-[500px] mt-10 flex items-center justify-center"
    >
      <Image
        src="/assets/images/ideia-ilustration/ON/ON-LAMP-DEC.svg"
        alt="Ilustração de lâmpada acesa"
        width="400"
        height="400"
        className="absolute"
      />
      <Image
        src="/assets/images/ideia-ilustration/ON/ON-abc.svg"
        alt="abc"
        width="60"
        height="60"
        className={`absolute transition-opacity duration-300 animate-float ${
          visibleImages[1] ? "opacity-100" : "opacity-0"
        }`}
        style={{ top: "32%", left: "0%" }}
      />
      <Image
        src="/assets/images/ideia-ilustration/ON/ON-brain.svg"
        alt="brain"
        width="60"
        height="60"
        className={`absolute transition-opacity duration-300 animate-float ${
          visibleImages[2] ? "opacity-100" : "opacity-0"
        }`}
        style={{ top: "11%", left: "5%" }}
      />
      <Image
        src="/assets/images/ideia-ilustration/ON/ON-roman-number.svg"
        alt="roman number"
        width="45"
        height="45"
        className={`absolute transition-opacity duration-300 animate-float ${
          visibleImages[3] ? "opacity-100" : "opacity-0"
        }`}
        style={{ top: "2%", right: "67%" }}
      />
      <Image
        src="/assets/images/ideia-ilustration/ON/ON-power.svg"
        alt="power"
        width="60"
        height="60"
        className={`absolute transition-opacity duration-300 animate-float ${
          visibleImages[4] ? "opacity-100" : "opacity-0"
        }`}
        style={{ top: "-5%", right: "43%" }}
      />
      <Image
        src="/assets/images/ideia-ilustration/ON/ON-globo.svg"
        alt="globo"
        width="60"
        height="60"
        className={`absolute transition-opacity duration-300 animate-float ${
          visibleImages[5] ? "opacity-100" : "opacity-0"
        }`}
        style={{ bottom: "88%", right: "19%" }}
      />
      <Image
        src="/assets/images/ideia-ilustration/ON/ON-puzzle.svg"
        alt="puzzle"
        width="60"
        height="60"
        className={`absolute transition-opacity duration-300 animate-float ${
          visibleImages[6] ? "opacity-100" : "opacity-0"
        }`}
        style={{ bottom: "76%", left: "85%" }}
      />
      <Image
        src="/assets/images/ideia-ilustration/ON/ON-livro.svg"
        alt="book"
        width="60"
        height="60"
        className={`absolute transition-opacity duration-300 animate-float ${
          visibleImages[7] ? "opacity-100" : "opacity-0"
        }`}
        style={{ bottom: "55%", left: "88%" }}
      />
    </div>
  );
};

const Insights = () => {
  return (
    <Background>
      <Navbar />

      <section className="mt-16 flex flex-col-reverse lg:flex-row items-center justify-between p-8">
        <div className="w-full pl-10 lg:w-1/2 p-4">
          <h1
            class="text-black-4 font-semibold 
               text-6xl 2xl:text-7xl relative mb-10"
          >
            MUP{" "}
            {/* --------------- Span com a linha sublinhada Laranja ------------------ */}
            <span class="relative inline-block ">
              <div class="w-[16.5rem] h-4 bg-gradient-to-r from bg-orange-5 absolute top-10 left-[5px] z-0 2xl:top-[52px] 2xl:w-[16rem]"></div>
              <span class="relative z-10 ">Insights</span>
            </span>
          </h1>

          <p className="text-2xl pb-[92px]">
            A equipe de suporte de dados da Minds Up analisa os dados escolares
            dos simulados e da avaliação socioemocional e fornecem insights para
            toda a gestão escolar sobre competências que devem ser trabalhadas
            nos estudantes.{" "}
            <strong>
              Nossos insights abordam temas tanto cognitivos quanto
              socioemocionais
            </strong>
            , possibilitando um desenvolvimento integral dos estudantes.
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center p-4">
          <RandomImages />
        </div>
      </section>

      <section className="flex flex-col lg:flex-row items-center justify-between p-8 bg-orange-100">
        <div className="w-full lg:w-1/2 flex justify-center p-4">
          <div className="bg-orange-300 h-64 w-64 rounded-lg shadow-lg"></div>
        </div>
        <div className="w-full lg:w-1/2 p-4">
          <p className="text-lg">
            Os Insights fornecidos pela Minds Up permitem uma visão abrangente e
            detalhada das necessidades educacionais dos estudantes. A partir da
            análise de dados, nossa equipe identifica padrões e tendências que
            orientam estratégias pedagógicas mais eficazes, focando tanto no
            desenvolvimento cognitivo quanto no socioemocional.
          </p>
        </div>
      </section>

      <section className="flex flex-col-reverse lg:flex-row items-center justify-between p-8">
        <div className="w-full lg:w-1/2 p-4">
          <p className="text-lg">
            Nossos insights abordam temas tanto cognitivos quanto
            socioemocionais, possibilitando um desenvolvimento integral dos
            estudantes. Com base nos dados coletados, as instituições podem
            adaptar suas estratégias pedagógicas para atender às necessidades
            específicas dos alunos.
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center p-4">
          <div className="bg-orange-400 h-64 w-64 rounded-full shadow-lg"></div>
        </div>
      </section>

      <Footer />
    </Background>
  );
};

export default Insights;
