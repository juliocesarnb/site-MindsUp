'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SpinAnimate from './spinAnimate'; // Certifique-se que este componente existe

const Footer = () => {
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

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
      // URL do formulário atualizada
      await fetch('https://api.sheetmonkey.io/form/w7zXeao83t6RZV5nxNdeGk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      form.reset();
      setFormSubmitted(true);
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
      // Opcional: Adicionar um estado de erro para mostrar ao usuário
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

  const inputClasses = "w-full bg-white/10 text-white placeholder:text-gray-400 border border-transparent rounded-md p-3 focus:ring-2 focus:ring-[#7747ff] bg-[#2A313F] outline-none transition";
  const labelClasses = "block text-gray-200 text-sm font-medium mb-2";

  return (
    <footer id="contatos" className="bg-[#121A29]">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Coluna da Esquerda: Informações */}
          <div className="flex flex-col justify-between">
            <div>
              <Link href="/">
                <Image
                  src="/assets/Logo-MUp-Rodape.svg"
                  alt="Logo MindsUp"
                  width={180}
                  height={50}
                />
              </Link>
              <h3 className="text-4xl text-white font-bold mt-8 mb-4">
                Quer saber mais?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Ajude-nos a conhecer sua escola e entender como podemos construir um caso de sucesso! Preencha o formulário e nossa equipe entrará em contato.
              </p>
            </div>
            <div className="mt-8 space-y-4">
              <a href="tel:+558599999999" className="flex items-center gap-4 text-gray-200 hover:text-white transition">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>
                <span>+55 (85) 9999-9999</span>
              </a>
              <a href="mailto:MindsUp@gmail.com" className="flex items-center gap-4 text-gray-200 hover:text-white transition">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" /></svg>
                <span>MindsUp@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Coluna da Direita: Formulário */}
          <div>
            {formSubmitted ? (
              <div className="bg-white/10 rounded-lg p-10 flex flex-col items-center justify-center h-full text-center">
                 <h3 className="text-2xl font-bold text-white">Obrigado!</h3>
                 <p className="text-gray-200 mt-2">Seu formulário foi enviado com sucesso. <br/> Entraremos em contato em breve.</p>
              </div>
            ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label htmlFor="nome" className={labelClasses}>Nome</label>
                <input type="text" name="nome" id="nome" placeholder="Seu nome completo" className={inputClasses} />
                {formErrors.nome && <span className="text-red-400 text-sm mt-1">{formErrors.nome}</span>}
              </div>
              <div>
                <label htmlFor="email" className={labelClasses}>Email</label>
                <input type="email" name="email" id="email" placeholder="seu.email@exemplo.com" className={inputClasses} />
                {formErrors.email && <span className="text-red-400 text-sm mt-1">{formErrors.email}</span>}
              </div>
              <div>
                <label htmlFor="telefone" className={labelClasses}>Telefone</label>
                <input type="tel" name="telefone" id="telefone" placeholder="(99) 9 9999-9999" className={inputClasses} maxLength="16" onChange={handlePhoneChange} />
                {formErrors.telefone && <span className="text-red-400 text-sm mt-1">{formErrors.telefone}</span>}
              </div>
              <div>
                <label htmlFor="nomeDaEscola" className={labelClasses}>Nome da escola</label>
                <input type="text" name="nomeDaEscola" id="nomeDaEscola" placeholder="Nome da sua instituição" className={inputClasses} />
                {formErrors.nomeDaEscola && <span className="text-red-400 text-sm mt-1">{formErrors.nomeDaEscola}</span>}
              </div>
              <div className="relative">
                <label htmlFor="TipoDeInstituição" className={labelClasses}>Tipo de instituição</label>
                <select id="TipoDeInstituição" name="TipoDeInstituição" defaultValue="" className={`${inputClasses} appearance-none`}>
                  <option value="" disabled>Selecione uma opção</option>
                  <option value="escolaPrivada">Escola Privada</option>
                  <option value="escolaPublica">Escola Pública</option>
                  <option value="secretariaDeEducação">Secretaria de Educação</option>
                </select>
                <div className="absolute right-3 top-10 text-gray-400 pointer-events-none">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M5.46 7.71c.3-.29.77-.29 1.06 0L10 11.17l3.47-3.46a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 010-1.06z"></path></svg>
                </div>
                {formErrors.TipoDeInstituição && <span className="text-red-400 text-sm mt-1">{formErrors.TipoDeInstituição}</span>}
              </div>

              <button type="submit" disabled={loading} className="w-full bg-[#7747ff] hover:bg-[#6a3fdc] text-white font-bold rounded-md py-3 px-4 mt-4 transition-colors duration-300 flex items-center justify-center">
                {loading ? <SpinAnimate /> : 'Enviar contato'}
              </button>
            </form>
            )}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
          Copyright © {new Date().getFullYear()} MindsUp. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;