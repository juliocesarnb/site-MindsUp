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
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDarkMode(!isDarkMode);
  };

  const navLinkClasses =
    "font-medium text-gray-700 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-300 transition-colors";

  const aboutItems = [
    {
      title: "Sobre nós",
      description: "Conheça nossa história e missão.",
      link: "/SobreNos",
    },
    {
      title: "FAQ",
      description: "Perguntas frequentes e respostas.",
      link: "/Faq",
    },
  ];

  const solutions = [
    {
      title: "MindsUP Socioemocional",
      description: "Mensuração de habilidades socioemocionais.",
      link: "/Socioemocional",
    },
    {
      title: "MindsUP Integração",
      description: "Simulados e preparação para o ENEM.",
      link: "/Simulados",
    },
    {
      title: "MindsUP Insights",
      description: "Inteligência de dados para sua escola.",
      link: "/Insights",
    },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FFFCFA] shadow-md dark:bg-[#121928] dark:border-b dark:border-slate-800"
          : ""
      }`}
    >
      <div className="container mx-auto isolate flex items-center justify-between px-4 lg:px-8 h-[6rem]">
        <Link href="/">
          {/* ===== INÍCIO DA ALTERAÇÃO ===== */}
          {/* A imagem agora é escolhida com base no tema (isDarkMode) */}
          {/* A classe 'dark:invert' foi removida pois não é mais necessária */}
          <Image
            src={isDarkMode ? "/assets/Logo-MUp-Rodape.svg" : "/assets/Logo-MUp.svg"}
            alt="Logo MindsUp"
            width={180}
            height={50}
            priority
          />
          {/* ===== FIM DA ALTERAÇÃO ===== */}
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-4">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <NavigationMenuTrigger className={navLinkClasses}>
                  Quem somos
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-1 p-2 w-[300px]">
                    {aboutItems.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.link}
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className={navLinkClasses}>
                  Soluções
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[350px] gap-1 p-2 lg:w-[400px]">
                    {solutions.map((solution) => (
                      <ListItem
                        key={solution.title}
                        title={solution.title}
                        href={solution.link}
                      >
                        {solution.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="#produtos" legacyBehavior passHref>
                  <a className={navLinkClasses}>Produtos</a>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="#contatos" legacyBehavior passHref>
                  <a className={navLinkClasses}>Contatos</a>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="w-px h-6 bg-gray-200 dark:bg-gray-700" />
          <Link href="/Login" legacyBehavior passHref>
            <a className="bg-[#7747ff] text-white font-medium px-4 py-2 rounded-full hover:bg-[#6a3fdc] transition-colors text-sm">
              Login
            </a>
          </Link>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Mudar tema"
          >
            <Image
              src={
                isDarkMode ? "/assets/images/sol.svg" : "/assets/images/lua.svg"
              }
              alt="Alternar tema"
              width={24}
              height={24}
              priority
            />
          </button>
        </div>

        {/* Mobile Nav */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Mudar tema"
          >
            <Image
              src={
                isDarkMode ? "/assets/images/sol.svg" : "/assets/images/lua.svg"
              }
              alt="Alternar tema"
              width={24}
              height={24}
              priority
            />
          </button>
          <BtnMenu />
        </div>
      </div>
    </nav>
  );
};

const ListItem = React.forwardRef(
  ({ className, title, href, children, ...props }, ref) => {
    return (
      <li>
        <Link href={href || "#"} legacyBehavior passHref>
          <a
            ref={ref}
            className="block w-full px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            {...props}
          >
            <div className="text-sm font-medium leading-none text-gray-900 dark:text-white">
              {title}
            </div>
            {children && (
              <p className="text-sm leading-snug text-gray-600 dark:text-gray-400 mt-1">
                {children}
              </p>
            )}
          </a>
        </Link>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";

export default Navbar;
