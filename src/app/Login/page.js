"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Navbar from "../componentes/Navbar";
const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [form, setForm] = useState({ email: "", password: "", name: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar lógica de autenticação ou integração com backend
    if (!form.email || !form.password || (isSignUp && !form.name)) {
      setError("Preencha todos os campos.");
      return;
    }
    alert(isSignUp ? "Cadastro realizado!" : "Login realizado!");
    setForm({ email: "", password: "", name: "" });
  };

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
    setError("");
    setForm({ email: "", password: "", name: "" });
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="w-full max-w-md p-6 bg-white rounded-md shadow-md dark:bg-gray-800">
          <h2 className="text-2xl font-semibold text-center text-gray-900 dark:text-white mb-6 pt-12">
            {isSignUp ? 'Cadastrar' : 'Entrar'}
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            {isSignUp && (
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Nome
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="w-full px-3 py-2 mt-1 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent text-gray-900 dark:text-white"
                  placeholder="Seu Nome"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
            )}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Endereço de e-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full px-3 py-2 mt-1 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent text-gray-900 dark:text-white"
                placeholder="seu.email@exemplo.com"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Senha
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="w-full px-3 py-2 mt-1 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent text-gray-900 dark:text-white"
                placeholder="••••••••"
                value={form.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-2.5 px-4 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-md hover:bg-gray-800 dark:hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-offset-2 transition-colors duration-200"
              >
                {isSignUp ? 'Cadastrar' : 'Entrar'}
              </button>
            </div>
          </form>

          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-500 dark:bg-gray-800">
                Ou continue com
              </span>
            </div>
          </div>

          <div>
            <button
              type="button"
              onClick={() => signIn('google')}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Google
            </button>
          </div>

          <div className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
            <button
              type="button"
              onClick={toggleSignUp}
              className="font-medium text-black dark:text-white hover:underline focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
            >
              {isSignUp ? 'Já tem uma conta? Entrar' : 'Não tem uma conta? Cadastrar'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
