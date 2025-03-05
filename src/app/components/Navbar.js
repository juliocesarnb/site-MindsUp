import React, { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";
import BtnMenu from "./BtnMenu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setIsDarkMode(isDark);
    };

    checkDarkMode();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (root.classList.contains("dark")) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  const aboutItems = [
    {
      title: "Sobre nós",
      icon: "/assets/images/navbar-icones/icone-brain-navbar.svg",
      hoverIcon: "/assets/images/navbar-icones/icone-brain-navbar-hover.svg",
    },
    {
      title: "FAQ",
      icon: "/assets/images/navbar-icones/icone-question-navbar.svg",
      hoverIcon: "/assets/images/navbar-icones/icone-question-navbar-hover.svg",
      link: "/faq",
    },
  ];

  const solutions = [
    {
      title: "MindsUP Socioemocional",
      description: "Ferramenta de mensuração das habilidades socioemocionais.",
      icon: "/assets/images/navbar-icones/icone-puzzle-navbar.svg",
      hoverIcon: "/assets/images/navbar-icones/icone-puzzle-navbar-hover.svg",
      link: "/Socioemocional",
    },
    {
      title: "MindsUP Simulados",
      description: "Ferramenta de mensuração das habilidades socioemocionais.",
      icon: "/assets/images/navbar-icones/icone-exam-navbar.svg",
      hoverIcon: "/assets/images/navbar-icones/icone-exam-navbar-hover.svg",
      link: "/Simulados",
    },
    {
      title: "MindsUP Insights",
      description: "Ferramenta de mensuração das habilidades socioemocionais.",
      icon: "/assets/images/navbar-icones/icone-lightning-navbar.svg",
      hoverIcon: "/assets/images/navbar-icones/icone-lightning-navbar-hover.svg",
      link: "/Insights",
    },
  ];

  return (
    <nav
      className={`fixed top-0 w-full h-[6rem] z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg py-2 dark:bg-gray-900"
          : "bg-white py-4 dark:bg-gray-900"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/assets/Logo-MUp.svg"
              alt="Logo da empresa"
              width={220}
              height={220}
              className="dark:invert"
            />
          </Link>
        </div>

        <div className="hidden lg:flex items-center space-x-8">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-8">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-purple-600 transition-colors dark:text-white dark:hover:text-purple-400">
                  Quem somos
                </NavigationMenuTrigger>
                <NavigationMenuContent className="dark:backdrop-blur-[60%] backdrop-blur-[60%] p-4 rounded-xl shadow-lg w-[300px]">
                  <div className="flex flex-col space-y-2">
                    {aboutItems.map((item, index) => (
                      <Link
                        key={index}
                        href={item.link || "#"}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-white dark:hover:bg-gray-700 group transition-all duration-200"
                      >
                        <div className="relative">
                          <Image
                            src={item.icon}
                            alt={item.title}
                            width={38}
                            height={38}
                            className="group-hover:opacity-0 transition-opacity"
                          />
                          <Image
                            src={item.hoverIcon}
                            alt={`${item.title} hover`}
                            width={38}
                            height={38}
                            className="opacity-0 group-hover:opacity-100 transition-opacity absolute top-0 left-0"
                          />
                        </div>
                        <span className="text-gray-800 dark:text-white font-medium ">
                          {item.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-purple-600 transition-colors dark:text-white dark:hover:text-purple-400">
                  Soluções
                </NavigationMenuTrigger>
                <NavigationMenuContent className="dark:backdrop-blur-[60%] backdrop-blur-[60%] p-4 rounded-xl w-[400px]">
                  <div className="flex flex-col space-y-2">
                    {solutions.map((solution, index) => (
                      <Link
                        key={index}
                        href={solution.link || "#"}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-white dark:hover:bg-gray-700 group transition-all duration-200"
                      >
                        <div className="relative">
                          <Image
                            src={solution.icon}
                            alt={solution.title}
                            width={50}
                            height={50}
                            className="group-hover:opacity-0 transition-opacity"
                          />
                          <Image
                            src={solution.hoverIcon}
                            alt={`${solution.title} hover`}
                            width={50}
                            height={50}
                            className="opacity-0 group-hover:opacity-100 transition-opacity absolute top-0 left-0"
                          />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-gray-800 dark:text-white font-medium">
                            {solution.title}
                          </span>
                          <span className="text-sm text-gray-600 dark:text-gray-300">
                            {solution.description}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href="#produtos"
                  className="text-gray-700 hover:text-purple-600 transition-colors dark:text-white dark:hover:text-purple-400"
                >
                  Produtos
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href="#contatos"
                  className="text-gray-700 hover:text-purple-600 transition-colors dark:text-white dark:hover:text-purple-400"
                >
                  Contatos
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <button
                  onClick={toggleTheme}
                  className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full transition-colors hover:bg-gray-300 dark:hover:bg-gray-600"
                  aria-label="Toggle dark mode"
                >
                  {isDarkMode ? (
                    <span className="text-lg">🌙</span>
                  ) : (
                    <span className="text-lg">☀️</span>
                  )}
                </button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <BtnMenu />
      </div>
    </nav>
  );
};

export default Navbar;