'use client'

import React, { useState } from "react";
import { Link } from "react-scroll";

const BtnMenu = () => {
  const [mostrarMenu, setMostrarMenu] = useState(false);

  const toggleMenu = () => {
    setMostrarMenu(!mostrarMenu);
  };

  return (
    <div className="lg:hidden">
      <div onClick={toggleMenu} className="cursor-pointer p-4">
        {mostrarMenu ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-7 h-7"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-7 h-7"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>

      {mostrarMenu && (
        <div className="fixed inset-0 backdrop-blur-xl z-20">
          <div className="flex justify-end p-4">
            <div onClick={toggleMenu} className="cursor-pointer mt-4 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-7 h-7"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <ul className="text-3xl text-purple-2 font-semibold flex flex-col items-center m-[-20px]  justify-center h-full gap-8">
            <li className=" cursor-pointer hover:text-purple-1">
              <Link
                to="quem-somos"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
                onClick={toggleMenu}
              >
                Quem Somos
              </Link>
            </li>
            <li className="hover:text-purple-1 cursor-pointer">
              <Link
                to="solucoes"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
                onClick={toggleMenu}
              >
                Soluções
              </Link>
            </li>
            <li className="hover:text-purple-1 cursor-pointer ">
              <Link
                to="produtos"
                spy={true}
                smooth={true}
                offset={-10}
                duration={500}
                onClick={toggleMenu}
              >
                Produtos
              </Link>
            </li>
            <li className="cursor-pointer hover:text-purple-1">
              <Link
                to="contatos"
                spy={true}
                smooth={true}
                offset={10}
                duration={500}
                onClick={toggleMenu}
              >
                Contatos
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default BtnMenu;
