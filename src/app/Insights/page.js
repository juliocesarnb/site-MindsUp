'use client';
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
    const imageToShow = imageIndexes.splice(randomIndex, 1)[0]; //Não entendi essa linha

    setVisibleImages((prev) => {
      const newVisibleImages = [...prev]; //Não entendi essa linha
      newVisibleImages[imageToShow] = true;
      return newVisibleImages;
    });

    timeoutIdsRef.current.push( //Não entendi essa linha
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
      { threshold: 0.5 }
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
        src="/assets/images/insights-ilustration/ideia-ilustration/ON-LAMP-DEC.svg"
        alt="Ilustração de lâmpada acesa"
        width={400}
        height={400}
        className="absolute"
      />
      <Image
        src="/assets/images/insights-ilustration/ideia-ilustration/ON-abc.svg"
        alt="abc"
        width={60}
        height={60}
        className={`absolute transition-opacity duration-300 animate-float ${
          visibleImages[1] ? "opacity-100" : "opacity-0"
        }`}
        style={{ top: "32%", left: "0%" }}
      />
      <Image
        src="/assets/images/insights-ilustration/ideia-ilustration/ON-brain.svg"
        alt="brain"
        width={60}
        height={60}
        className={`absolute transition-opacity duration-300 animate-float ${
          visibleImages[2] ? "opacity-100" : "opacity-0"
        }`}
        style={{ top: "11%", left: "5%" }}
      />
      <Image
        src="/assets/images/insights-ilustration/ideia-ilustration/ON-roman-number.svg"
        alt="roman number"
        width={45}
        height={45}
        className={`absolute transition-opacity duration-300 animate-float ${
          visibleImages[3] ? "opacity-100" : "opacity-0"
        }`}
        style={{ top: "2%", right: "67%" }}
      />
      <Image
        src="/assets/images/insights-ilustration/ideia-ilustration/ON-power.svg"
        alt="power"
        width={60}
        height={60}
        className={`absolute transition-opacity duration-300 animate-float ${
          visibleImages[4] ? "opacity-100" : "opacity-0"
        }`}
        style={{ top: "-5%", right: "43%" }}
      />
      <Image
        src="/assets/images/insights-ilustration/ideia-ilustration/ON-globo.svg"
        alt="globo"
        width={60}
        height={60}
        className={`absolute transition-opacity duration-300 animate-float ${
          visibleImages[5] ? "opacity-100" : "opacity-0"
        }`}
        style={{ bottom: "88%", right: "19%" }}
      />
      <Image
        src="/assets/images/insights-ilustration/ideia-ilustration/ON-puzzle.svg"
        alt="puzzle"
        width={60}
        height={60}
        className={`absolute transition-opacity duration-300 animate-float ${
          visibleImages[6] ? "opacity-100" : "opacity-0"
        }`}
        style={{ bottom: "76%", left: "85%" }}
      />
      <Image
        src="/assets/images/insights-ilustration/ideia-ilustration/ON-livro.svg"
        alt="book"
        width={60}
        height={60}
        className={`absolute transition-opacity duration-300 animate-float ${
          visibleImages[7] ? "opacity-100" : "opacity-0"
        }`}
        style={{ bottom: "55%", left: "88%" }}
      />
    </div>
  );
};

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
    <dotlottie-player
      src="https://lottie.host/8f35dbd3-8fa9-41d9-9aa4-d9d804b249f6/emt0XVnJwb.json"
      background="transparent"
      speed="1"
      style={{ width: "1500px", height: "1500px" }}
      loop
      autoplay
    ></dotlottie-player>
  );
};

const Insights = () => {
  return (
    <Background>
      <Navbar />

      {/* Seção 1 */}
      <section className="pt-40 bg-orange-8 pl-28 flex flex-col-reverse lg:flex-row items-center justify-between p-8">
        <div className="w-full pl-10 lg:w-1/2 p-4">
          <h1 className="text-orange-950 font-semibold 
              text-6xl 2xl:text-7xl relative mb-10">
            MUP{" "}
            {/* --------------- Span com a linha sublinhada Laranja ------------------ */}
            <span className="relative inline-block">
              <div className="w-[16.5rem] h-4 bg-gradient-to-r from bg-orange-5 absolute top-10 left-[5px] z-0 2xl:top-[52px] 2xl:w-[17rem]"></div>
              <span className="relative z-10">Insights</span>
            </span>
          </h1>

          <p className="text-lg text-orange-900 pt-8 pb-[5rem]">
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
          <div className="w-96 h-96 rounded-full bg-gradient-to-br from-red-50 to-purple-50 filter absolute z-0 lg:ml-5 blur-3xl mt-4 2xl:mt-[-3rem] 2xl:w-[28rem] 2xl:h-[28rem]"></div>
          <div className="w-96 h-96 rounded-full bg-gradient-to-br from-orange-50 to-blue-50 filter absolute z-0 ml-[-10rem] blur-3xl mt-44 2xl:mt-26 2xl:w-[28rem] 2xl:h-[28rem]"></div>
          <div className="w-96 h-96 rounded-full bg-gradient-to-br from-yellow-50 to-orange-50 filter absolute z-0 lg:ml-96 blur-3xl mt-28 2xl:mt-44 2xl:w-[28rem] 2xl:h-[28rem]"></div>

          <RandomImages />
        </div>
      </section>

      {/* Seção 2 */}
      <section className="flex flex-col lg:flex-row items-center justify-between p-8 bg-orange-7 relative">
        <div className="w-full lg:w-1/2 flex justify-center p-4">
          <Image
            src="/assets/images/insights-ilustration/tela-insights.svg"
            alt="Tela de insights"
            width={450}
            height={450}
          />
        </div>

        <div className="lg:w-1/2 p-6 z-10 text-center lg:text-left lg:pl-12">
          <p className="text-lg text-orange-900">
            <span className="text-9xl font-bold z-40 relative text-justify -mr-3">
              O
            </span>
            s Insights fornecidos pela <strong>Minds Up</strong> permitem uma
            visão abrangente e detalhada das necessidades educacionais dos
            estudantes. A partir da análise de dados, nossa equipe identifica
            padrões e tendências que orientam estratégias pedagógicas mais
            eficazes, focando tanto no desenvolvimento cognitivo quanto no
            socioemocional.
          </p>
        </div>
      </section>

      {/* Seção 3 */}
      <section className="flex bg-orange-8 flex-col-reverse lg:flex-row h-[80vh] items-center justify-between p-8">
        <div className="w-full lg:w-1/2 p-4">
          <p className="text-lg text-orange-900 text-justify">
            Nossos insights abordam temas tanto{" "}
            <span className="relative inline-block">
              <span className="w-full h-2 bg-gradient-to-r from bg-orange-300 absolute top-4 z-0 block"></span>
              <span className="relative z-10 text-orange-900">
                <strong>cognitivos</strong>
              </span>
            </span>{" "}
            quanto{" "}
            <span className="relative inline-block">
              <span className="w-full h-2 rounded-lg bg-gradient-to-r from bg-orange-300 absolute -left-1 top-4 z-0 block"></span>
              <span className="relative z-10 text-orange-900">
                <strong>socioemocionais</strong>
              </span>
            </span>{" "}
            possibilitando um desenvolvimento integral dos estudantes. Com base
            nos dados coletados, as instituições podem adaptar suas estratégias
            pedagógicas para atender às necessidades específicas dos alunos.
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center p-4">
          <Image
            src="/assets/images/insights-ilustration/arvore-cerebro.svg"
            alt="Ilustração de árvore cérebro"
            width={450}
            height={450}
            className="ml-[20px] pt-[50px]"
          />
        </div>
      </section>

      <Footer />
    </Background>
  );
};

export default Insights;
