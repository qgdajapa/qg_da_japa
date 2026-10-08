"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AdminLogin() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function entrar(event: React.FormEvent) {
    event.preventDefault();

    setErro("");
    setCarregando(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password: senha,
    });

    if (error) {
      setErro("E-mail ou senha incorretos.");
      setCarregando(false);
      return;
    }

    router.push("/admin");
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white flex items-center justify-center px-6">

      <div className="w-full max-w-md">

        <div className="text-center mb-8">

          <img
            src="/Logo.png"
            alt="QG da Japa"
            className="w-28 mx-auto mb-6"
          />

          <p className="text-yellow-400 text-sm uppercase tracking-widest">
            QG da Japa
          </p>

          <h1 className="text-3xl font-bold mt-2">
            Painel Administrativo
          </h1>

          <p className="text-zinc-400 mt-2">
            Entre para gerenciar sua loja.
          </p>

        </div>

        <form
          onSubmit={entrar}
          className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
        >

          <div className="mb-5">

            <label className="block text-sm text-zinc-400 mb-2">
              E-mail
            </label>

            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="seu@email.com"
              required
              className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 outline-none focus:border-yellow-400 transition"
            />

          </div>

          <div className="mb-5">

            <label className="block text-sm text-zinc-400 mb-2">
              Senha
            </label>

            <input
              type="password"
              value={senha}
              onChange={(event) => setSenha(event.target.value)}
              placeholder="••••••••"
              required
              className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 outline-none focus:border-yellow-400 transition"
            />

          </div>

          {erro && (
            <div className="bg-red-950/40 border border-red-900 text-red-400 rounded-lg px-4 py-3 mb-5 text-sm">
              {erro}
            </div>
          )}

          <button
            type="submit"
            disabled={carregando}
            className="w-full bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-300 transition disabled:opacity-50"
          >
            {carregando ? "Entrando..." : "Entrar"}
          </button>

        </form>

        <a
          href="/"
          className="block text-center text-zinc-500 hover:text-yellow-400 transition mt-6"
        >
          ← Voltar para a loja
        </a>

      </div>

    </main>
  );
}