'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SpinAnimate from './spinAnimate';

const Footer = () => {
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isFormFocused, setIsFormFocused] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Validação
    const errors = {};
    if (!data.nome) errors.nome = 'Por favor, insira seu nome.';
    if (!data.email) errors.email = 'Por favor, insira seu email.';
    if (!data.telefone) errors.telefone = 'Por favor, insira seu telefone.';
    if (!data.nomeDaEscola) errors.nomeDaEscola = 'Por favor, insira o nome da escola.';
    if (!data.TipoDeInstituição) errors.TipoDeInstituição = 'Por favor, selecione o tipo de instituição.';
    
    const telefonePattern = /^\(\d{2}\) \d \d{4}-\d{4}$/;
    if (data.telefone && !telefonePattern.test(data.telefone)) {
      errors.telefone = 'Formato de telefone inválido. Use (99) 9 9999-9999.';
    }

    setFormErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setLoading(true);

    try {
      await fetch('https://api.sheetmonkey.io/form/w7zXeao83t6RZV5nxNdeGk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      form.reset();
      setFormSubmitted(true);
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatPhoneNumber = (value) => {
    if (!value) return '';
    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 3) return `(${phoneNumber}`;
    if (phoneNumberLength < 8) return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2)}`;
    if (phoneNumberLength < 12) return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 3)} ${phoneNumber.slice(3, 7)}-${phoneNumber.slice(7, 11)}`;
    return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 3)} ${phoneNumber.slice(3, 7)}-${phoneNumber.slice(7, 11)}`;
  };

  const handlePhoneChange = (event) => {
    event.target.value = formatPhoneNumber(event.target.value);
  };

  return (
    <footer id="contatos" className="relative bg-slate-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-32 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-32 w-96 h-96 bg-gradient-to-l from-orange-500/10 to-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-radial from-indigo-500/5 to-transparent rounded-full blur-2xl"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-12 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 mb-8 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-2.5 h-2.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-2.5 h-2.5 bg-blue-400 rounded-full animate-ping opacity-20"></div>
              </div>
              <span className="text-sm font-semibold text-white/90 tracking-wide">Vamos Conversar</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
            <span className="text-white">Pronto para </span>
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              transformar
            </span>
            <br />
            <span className="text-white">sua instituição?</span>
          </h2>
          
          <p className="max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed font-light">
            Descubra como nossa plataforma pode revolucionar a experiência educacional 
            da sua escola com tecnologia de ponta e insights acionáveis.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start mt-20">
          
          {/* Left Column - Company Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <Link href="/" className="inline-block mb-6">
                <Image
                  src="/assets/Logo-MUp-Rodape.svg"
                  alt="Logo MindsUp"
                  width={200}
                  height={56}
                  className="h-14 w-auto"
                />
              </Link>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Transformamos dados educacionais em estratégias que impactam positivamente 
                a vida de estudantes e educadores em todo o Brasil.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z" clipRule="evenodd"></path>
                </svg>
                Contatos
              </h4>
              
              <a 
                href="tel:+558599999999" 
                className="flex items-center gap-4 text-gray-300 hover:text-white transition-all duration-300 group p-3 rounded-xl hover:bg-white/5"
              >
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium">+55 (85) 9999-9999</div>
                  <div className="text-sm text-gray-400">Segunda à Sexta, 8h às 18h</div>
                </div>
              </a>
              
              <a 
                href="mailto:MindsUp@gmail.com" 
                className="flex items-center gap-4 text-gray-300 hover:text-white transition-all duration-300 group p-3 rounded-xl hover:bg-white/5"
              >
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium">MindsUp@gmail.com</div>
                  <div className="text-sm text-gray-400">Resposta em até 24h</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-3">
            <div className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 transition-all duration-500 ${isFormFocused ? 'bg-white/10 border-white/20 shadow-2xl' : ''}`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Solicite uma Demonstração</h3>
              </div>
              
              <p className="text-gray-300 mb-8 leading-relaxed">
                Preencha o formulário e nossa equipe especializada entrará em contato para apresentar 
                uma demonstração personalizada das nossas soluções.
              </p>

              {formSubmitted ? (
                <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Formulário Enviado!</h4>
                  <p className="text-gray-300">Nossa equipe entrará em contato em breve para agendar sua demonstração personalizada.</p>
                </div>
              ) : (
                <form 
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                  onFocus={() => setIsFormFocused(true)}
                  onBlur={() => setIsFormFocused(false)}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nome" className="block text-gray-300 text-sm font-medium mb-2">
                        Nome Completo
                      </label>
                      <input 
                        type="text" 
                        name="nome" 
                        id="nome" 
                        placeholder="Seu nome completo" 
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all outline-none"
                      />
                      {formErrors.nome && <span className="text-red-400 text-sm mt-1 block">{formErrors.nome}</span>}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                        Email Profissional
                      </label>
                      <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="seu.email@escola.com" 
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all outline-none"
                      />
                      {formErrors.email && <span className="text-red-400 text-sm mt-1 block">{formErrors.email}</span>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="telefone" className="block text-gray-300 text-sm font-medium mb-2">
                        Telefone de Contato
                      </label>
                      <input 
                        type="tel" 
                        name="telefone" 
                        id="telefone" 
                        placeholder="(99) 9 9999-9999" 
                        maxLength="16"
                        onChange={handlePhoneChange}
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all outline-none"
                      />
                      {formErrors.telefone && <span className="text-red-400 text-sm mt-1 block">{formErrors.telefone}</span>}
                    </div>
                    
                    <div className="relative">
                      <label htmlFor="TipoDeInstituição" className="block text-gray-300 text-sm font-medium mb-2">
                        Tipo de Instituição
                      </label>
                      <select 
                        id="TipoDeInstituição" 
                        name="TipoDeInstituição" 
                        defaultValue=""
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all outline-none appearance-none"
                      >
                        <option value="" disabled className="bg-slate-800">Selecione uma opção</option>
                        <option value="escolaPrivada" className="bg-slate-800">Escola Privada</option>
                        <option value="escolaPublica" className="bg-slate-800">Escola Pública</option>
                        <option value="secretariaDeEducação" className="bg-slate-800">Secretaria de Educação</option>
                      </select>
                      <div className="absolute right-3 top-10 text-gray-400 pointer-events-none">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" clipRule="evenodd" d="M5.46 7.71c.3-.29.77-.29 1.06 0L10 11.17l3.47-3.46a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 010-1.06z"></path>
                        </svg>
                      </div>
                      {formErrors.TipoDeInstituição && <span className="text-red-400 text-sm mt-1 block">{formErrors.TipoDeInstituição}</span>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="nomeDaEscola" className="block text-gray-300 text-sm font-medium mb-2">
                      Nome da Instituição
                    </label>
                    <input 
                      type="text" 
                      name="nomeDaEscola" 
                      id="nomeDaEscola" 
                      placeholder="Nome completo da sua instituição" 
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all outline-none"
                    />
                    {formErrors.nomeDaEscola && <span className="text-red-400 text-sm mt-1 block">{formErrors.nomeDaEscola}</span>}
                  </div>

                  <button 
                    type="submit" 
                    disabled={loading}
                    className="group relative w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold text-lg rounded-xl py-4 px-6 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      {loading ? (
                        <SpinAnimate />
                      ) : (
                        <>
                          Solicitar Demonstração
                          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-20 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-gray-400 text-sm">
              Copyright © {new Date().getFullYear()} MindsUp. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Termos de Uso
              </a>
              <div className="flex items-center gap-3">
                <span className="text-gray-500 text-sm">Siga-nos:</span>
                <a href="#" className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all">
                  <svg className="w-4 h-4 text-gray-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all">
                  <svg className="w-4 h-4 text-gray-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;