"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const BtnMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleSubmenu = (menu) =>
    setOpenSubmenu(openSubmenu === menu ? null : menu);

  useEffect(() => {
    // Trava o scroll da página quando o menu está aberto
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup function para garantir que o scroll seja liberado se o componente for desmontado
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navItemClass =
    "flex justify-between items-center w-full px-4 py-3 text-left font-medium text-gray-700 dark:text-gray-200 hover:bg-[#f0f4ff] dark:hover:bg-gray-800 transition-colors";

  const subLinkBaseClass =
    "block py-2 px-2 rounded-md text-sm text-gray-600 dark:text-gray-300 transition";

  return (
    <>
      <button
        onClick={toggleMenu}
        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        aria-label="Abrir menu"
      >
        <Menu size={24} />
      </button>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/40"
            onClick={toggleMenu}
          />
        )}
      </AnimatePresence>

      {/* Menu Lateral */}
      <div
        className={`fixed top-0 right-0 w-80 max-w-[90vw] h-full z-50 bg-white dark:bg-gray-900 shadow-xl transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Cabeçalho do Menu */}
        <div className="flex justify-between items-center px-4 py-4 border-b dark:border-gray-700 flex-shrink-0">
          <span className="text-lg font-semibold text-gray-900 dark:text-white">
          </span>
          <button
            onClick={toggleMenu}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            aria-label="Fechar menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Área de Navegação (com scroll) */}
        <div className="flex-grow overflow-y-auto">
          <nav className="flex flex-col py-2">
            <Link
              href="#produtos"
              onClick={toggleMenu}
              className="px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-[#f0f4ff] dark:hover:bg-gray-800 transition-colors"
            >
              Produtos
            </Link>

            <button
              onClick={() => toggleSubmenu("solucoes")}
              className={navItemClass}
            >
              <span>Soluções</span>
              <ChevronDown
                size={18}
                className={`transition-transform ${openSubmenu === "solucoes" ? "rotate-180" : ""}`}
              />
            </button>
            <AnimatePresence>
              {openSubmenu === "solucoes" && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="pl-6 pb-2 overflow-hidden flex flex-col"
                >
                  {/* ESTILOS DE HOVER APLICADOS AQUI */}
                  <Link href="/Socioemocional" onClick={toggleMenu} className={`${subLinkBaseClass} hover:bg-purple-100 dark:hover:bg-purple-500/10 hover:text-purple-700 dark:hover:text-purple-400`}>MindsUP Socioemocional</Link>
                  <Link href="/Simulados" onClick={toggleMenu} className={`${subLinkBaseClass} hover:bg-blue-100 dark:hover:bg-blue-500/10 hover:text-blue-700 dark:hover:text-blue-400`}>MindsUP Integração</Link>
                  <Link href="/Insights" onClick={toggleMenu} className={`${subLinkBaseClass} hover:bg-orange-100 dark:hover:bg-orange-500/10 hover:text-orange-700 dark:hover:text-orange-400`}>MindsUP Insights</Link>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              onClick={() => toggleSubmenu("quemSomos")}
              className={navItemClass}
            >
              <span>Quem somos</span>
              <ChevronDown
                size={18}
                className={`transition-transform ${openSubmenu === "quemSomos" ? "rotate-180" : ""}`}
              />
            </button>
            <AnimatePresence>
              {openSubmenu === "quemSomos" && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="pl-6 pb-2 overflow-hidden flex flex-col"
                >
                  <Link href="/SobreNos" onClick={toggleMenu} className={subLinkBaseClass}>Sobre nós</Link>
                  <Link href="/Faq" onClick={toggleMenu} className={subLinkBaseClass}>FAQ</Link>
                </motion.div>
              )}
            </AnimatePresence>

            <Link
              href="#contatos"
              onClick={toggleMenu}
              className="px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-[#f0f4ff] dark:hover:bg-gray-800 transition-colors"
            >
              Contatos
            </Link>
          </nav>
        </div>
        
        {/* Seção de Login e Ação (fixa no final) */}
        <div className="flex-shrink-0 p-4 border-t dark:border-gray-700 space-y-2">
          
            <Link href="/cadastro" legacyBehavior passHref>
                <a onClick={toggleMenu} className="block w-full text-center bg-[#7747ff] text-white font-bold py-2.5 rounded-lg hover:bg-[#6a3fdc] transition-colors">
                    Login
                </a>
            </Link>
        </div>

      </div>
    </>
  );
};

export default BtnMenu;