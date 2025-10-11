// ./componentes/Navbar.js

"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// Ícones
const SunIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);
const MoonIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);
const ChevronDownIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
);


const Navbar = () => {
  const [theme, setTheme] = useState('light'); // Simulação. Use um Theme Provider.
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const products = [
    { icon: '🧠', name: 'Socioemocional', description: 'Mapeamento de competências', href: '/produtos/socioemocional', gradient: 'from-purple-500 to-indigo-500' },
    { icon: '📊', name: 'Insights', description: 'BI educacional', href: '/produtos/insights', gradient: 'from-blue-500 to-cyan-500' },
    { icon: '📝', name: 'Simulados', description: 'Preparação para vestibulares', href: '/produtos/simulados', gradient: 'from-orange-500 to-amber-500' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border-b border-slate-200/40 dark:border-slate-700/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            <Link href="/" className="flex-shrink-0">
              <Image src="/assets/Logo-MUp.svg" alt="Minds Up Logo" width={140} height={40} className="dark:hidden" />
              <Image src="/assets/Logo-MUp-dark.svg" alt="Minds Up Logo" width={140} height={40} className="hidden dark:block" />
            </Link>

            <div className="hidden md:flex items-center gap-x-8">
              <div className="relative" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
                <button className="flex items-center gap-1 text-slate-600 dark:text-slate-300 font-medium hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-300">
                  Produtos
                  <ChevronDownIcon className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.2 }} className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-96 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700 rounded-xl shadow-xl overflow-hidden">
                      <div className="p-5">
                          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">Nossas Soluções</p>
                          <div className="space-y-1">
                            {products.map(p => (
                              <Link key={p.name} href={p.href} className="group flex items-center gap-4 p-3 rounded-lg hover:bg-orange-50/50 dark:hover:bg-orange-500/10 transition-colors">
                                <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${p.gradient} flex items-center justify-center`}>
                                  <span className="text-xl">{p.icon}</span>
                                </div>
                                <div>
                                  <p className="font-semibold text-slate-700 dark:text-white">{p.name}</p>
                                  <p className="text-sm text-slate-500 dark:text-slate-400">{p.description}</p>
                                </div>
                                <span className="ml-auto text-slate-400 dark:text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
                              </Link>
                            ))}
                          </div>
                          <hr className="my-4 border-slate-200/50 dark:border-slate-700" />
                          <Link href="/plataforma" className="block text-sm font-semibold text-center text-orange-500 dark:text-orange-400 hover:underline">
                            Conheça a plataforma completa
                          </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <Link href="#" className="text-slate-600 dark:text-slate-300 font-medium hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-300">Metodologia</Link>
              <Link href="#" className="text-slate-600 dark:text-slate-300 font-medium hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-300">Resultados</Link>
              <Link href="#" className="text-slate-600 dark:text-slate-300 font-medium hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-300">Contatos</Link>
            </div>

            <div className="hidden md:flex items-center gap-x-5">
              <button onClick={toggleTheme} className="relative flex items-center h-8 w-14 rounded-full bg-slate-200 dark:bg-slate-700 transition-colors duration-300">
                <motion.span className="absolute h-6 w-6 rounded-full bg-white shadow-md" layout transition={{ type: 'spring', stiffness: 700, damping: 30 }} style={{ left: theme === 'light' ? '0.25rem' : 'auto', right: theme === 'dark' ? '0.25rem' : 'auto' }} />
                <SunIcon className="w-5 h-5 absolute left-1.5 text-yellow-500" />
                <MoonIcon className="w-5 h-5 absolute right-1.5 text-slate-300" />
              </button>

              <Link href="#" className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-orange-200/40 dark:hover:shadow-orange-800/40 hover:scale-105">
                Login
              </Link>
            </div>

            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-600 dark:text-slate-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden overflow-hidden">
              <div className="px-6 pt-2 pb-6 space-y-4 border-t border-slate-200/40 dark:border-slate-700/40">
                <p className="font-semibold text-slate-700 dark:text-white mt-2">Produtos</p>
                {products.map(p => <Link key={p.name} href={p.href} className="block text-slate-600 dark:text-slate-300 rounded-md px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800">{p.name}</Link>)}
                <hr className="border-slate-200 dark:border-slate-700"/>
                <Link href="#" className="block text-slate-600 dark:text-slate-300 rounded-md px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800">Metodologia</Link>
                <Link href="#" className="block text-slate-600 dark:text-slate-300 rounded-md px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800">Resultados</Link>
                <Link href="#" className="block text-slate-600 dark:text-slate-300 rounded-md px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800">Contatos</Link>
                <hr className="border-slate-200 dark:border-slate-700"/>
                <div className="flex items-center justify-between pt-4">
                  <button onClick={toggleTheme} className="relative flex items-center h-8 w-14 rounded-full bg-slate-200 dark:bg-slate-700">
                    <motion.span className="absolute h-6 w-6 rounded-full bg-white shadow-md" layout transition={{ type: 'spring', stiffness: 700, damping: 30 }} style={{ left: theme === 'light' ? '0.25rem' : 'auto', right: theme === 'dark' ? '0.25rem' : 'auto' }} />
                  </button>
                  <Link href="#" className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full">
                    Login
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;