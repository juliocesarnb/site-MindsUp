"use client";

import Navbar from "../components/Navbar";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Footer from "../components/Footer";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const imagesRef = useRef([]);
  const rightElementsRef = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const images = imagesRef.current;
    const rightElements = rightElementsRef.current;
    const container = containerRef.current;

    if (!container) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=300%",
        pin: true,
        scrub: true,
        markers: true,
        pinSpacing: true,
      },
    });

    images.forEach((img, i) => {
      if (images[i + 1]) {
        tl.to(img, { opacity: 0 })
          .to(images[i + 1], { opacity: 1 }, "<")
          .to(rightElements, { yPercent: -(100 * (i + 1)), ease: "none" }, "<");
      }
    });

    tl.to({}, {}, "+=0.5");

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      tl.kill();
    };
  }, []);

  return (
    <>
      <Navbar />

      <div className="relative">
        {/* Intro com texto */}
        <div className="w-screen h-screen flex items-center justify-center bg-purple-100 shadow-lg p-6">
          <div className="text-center max-w-2xl">
            <h1 className="text-5xl font-bold text-gray-800">
              MUP <span className="text-purple-600">Socioemocional</span>
            </h1>
            <p className="text-gray-600 mt-6 text-xl leading-relaxed">
              As provas socioemocionais da <strong>Minds Up</strong> ajudam a
              avaliar não apenas habilidades cognitivas, mas também emoções,
              relações interpessoais e autoconhecimento. Um novo olhar para o
              desenvolvimento dos alunos! 🎓✨
            </p>
          </div>
        </div>

        {/* Container com ScrollTrigger + Grid */}
        <div
          ref={containerRef}
          className="container w-full h-screen overflow-hidden flex 
          bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2740%27%20height%3D%2740%27%20viewBox%3D%270%200%2040%2040%27%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%3E%3Cpath%20d%3D%27M40%200H0v40%27%20fill%3D%27none%27%20stroke%3D%27%23E5E7EB%27%20stroke-width%3D%271%27/%3E%3C/svg%3E')] bg-repeat"
        >
          {/* Lado esquerdo com imagens */}
          <div className="left-container w-1/2 h-screen overflow-hidden relative flex justify-center items-center">
            <div className="left-content w-full max-w-[400px] h-full max-h-[400px] relative overflow-hidden">
              <img
                ref={(el) => (imagesRef.current[0] = el)}
                src="https://plus.unsplash.com/premium_photo-1674458852390-ac22d6c502d7?q=40&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="absolute top-0 left-0 right-0 object-cover w-full h-full opacity-100"
              />
              <img
                ref={(el) => (imagesRef.current[1] = el)}
                src="https://images.unsplash.com/photo-1486578077620-8a022ddd481f?q=40&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="absolute top-0 left-0 right-0 object-cover w-full h-full opacity-0"
              />
              <img
                ref={(el) => (imagesRef.current[2] = el)}
                src="https://images.unsplash.com/photo-1512988442538-a42600ac4634?q=40&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="absolute top-0 left-0 right-0 object-cover w-full h-full opacity-0"
              />
            </div>
          </div>

          {/* Lado direito com números */}
          <div className="right-container w-1/2 h-screen overflow-hidden relative">
            <div className="right-content w-full border border-cyan-500">
              <div
                ref={(el) => (rightElementsRef.current[0] = el)}
                className="right-element w-full h-screen border border-red-500 flex justify-center items-center text-[100px]"
              >
                1
              </div>
              <div
                ref={(el) => (rightElementsRef.current[1] = el)}
                className="right-element w-full h-screen border border-red-500 flex justify-center items-center text-[100px]"
              >
                2
              </div>
              <div
                ref={(el) => (rightElementsRef.current[2] = el)}
                className="right-element w-full h-screen border border-red-500 flex justify-center items-center text-[100px]"
              >
                3
              </div>
            </div>
          </div>
        </div>

        {/* Rodapé */}
        <Footer />
      </div>
    </>
  );
}
