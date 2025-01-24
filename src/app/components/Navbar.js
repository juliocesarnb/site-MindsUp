'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import BtnMenu from './BtnMenu';
import Image from 'next/image';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full h-[6rem]  z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white py-4'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
        {/* LOGO */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/assets/Logo-MUp.svg"
              alt="Logo da empresa"
              width={220}
              height={220}
            />
          </Link>
        </div>

        {/* MENU */}
        <ul className="hidden lg:flex items-center space-x-8 text-xl font-medium">
          <li className="text-purple-900 hover:text-purple-600 transition-colors">
            <Link href="#">Quem Somos</Link>
          </li>
          <li className="text-purple-900 hover:text-purple-600 transition-colors">
            <Link href="#secao2">Soluções</Link>
          </li>
          <li className="text-purple-900 hover:text-purple-600 transition-colors">
            <Link href="#produtos">Produtos</Link>
          </li>
          <li className="text-purple-900 hover:text-purple-600 transition-colors">
            <Link href="#contatos">Contatos</Link>
          </li>
          <li className="text-purple-900 hover:text-purple-600 transition-colors">
            <Link href="/Faq">FAQ</Link>
          </li>
        </ul>

        {/* BOTÃO DE MENU PARA MOBILE */}
        <BtnMenu />
      </div>
    </nav>
  );
};

export default Navbar;