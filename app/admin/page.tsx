"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

type Produto = {
  id: number;
  nome: string;
  preco: number;
  descricao: string | null;
  categoria: string | null;
  imagem: string | null;
  loja_id: number | null;
};

export default function AdminPage() {

  const router = useRouter()
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  async function verificarLogin() {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    router.replace("/admin/login");
    return false;
  }

  return true;
}

  useEffect(() => {
  async function iniciar() {
    const autenticado = await verificarLogin();

    if (autenticado) {
      await carregarProdutos();
    }

    setCarregando(false);
  }

  iniciar();
}, []);

  async function carregarProdutos() {
    try {
      const resposta = await fetch("/api/produtos");
      const dados = await resposta.json();

      if (Array.isArray(dados)) {
        setProdutos(dados);
      }
    } catch (erro) {
      console.error("Erro ao carregar produtos:", erro);
    } finally {
      setCarregando(false);
    }
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white p-8">
      <div className="max-w-6xl mx-auto">

        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-yellow-400 text-sm uppercase tracking-widest">
              QG da Japa
            </p>

            <h1 className="text-4xl font-bold mt-1">
              Painel Administrativo
            </h1>

            <p className="text-zinc-400 mt-2">
              Gerencie os produtos da loja.
            </p>
          </div>

          <div className="flex items-center gap-3">

  <a
    href="/"
    className="px-5 py-2 rounded-lg border border-zinc-700 hover:border-yellow-400 transition"
  >
    Voltar para loja
  </a>

  <button
    onClick={async () => {
      await supabase.auth.signOut();
      router.replace("/admin/login");
    }}
    className="px-5 py-2 rounded-lg border border-red-900 text-red-400 hover:bg-red-950 transition"
  >
    Sair
  </button>

</div>
        </div>

        <section className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">

          <div className="flex items-center justify-between p-5 border-b border-zinc-800">
            <div>
              <h2 className="text-xl font-bold">
                Produtos
              </h2>

              <p className="text-sm text-zinc-400 mt-1">
                Produtos cadastrados no sistema
              </p>
            </div>

            <button
              onClick={() => setMostrarFormulario(!mostrarFormulario)}
              className="bg-yellow-400 text-black font-bold px-5 py-2.5 rounded-lg hover:bg-yellow-300 transition"
            >
              + Adicionar produto
            </button>
          </div>

          {mostrarFormulario && (
            <div className="p-6 border-b border-zinc-800 bg-zinc-950">

              <h3 className="text-xl font-bold mb-5">
                Novo produto
              </h3>

              <div className="grid md:grid-cols-2 gap-4">

                <div>
                  <label className="block text-sm text-zinc-400 mb-2">
                    Nome
                  </label>

                  <input
                    type="text"
                    placeholder="Nome do produto"
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 outline-none focus:border-yellow-400"
                  />
                </div>

                <div>
                  <label className="block text-sm text-zinc-400 mb-2">
                    Preço
                  </label>

                  <input
                    type="number"
                    step="0.01"
                    placeholder="29.90"
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 outline-none focus:border-yellow-400"
                  />
                </div>

                <div>
                  <label className="block text-sm text-zinc-400 mb-2">
                    Categoria
                  </label>

                  <select
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 outline-none focus:border-yellow-400"
                  >
                    <option value="">Selecione</option>
                    <option value="Essências">Essências</option>
                    <option value="Carvões">Carvões</option>
                    <option value="Rosh">Rosh</option>
                    <option value="Acessórios">Acessórios</option>
                    <option value="Kits">Kits</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-zinc-400 mb-2">
                    Imagem
                  </label>

                  <input
                    type="text"
                    placeholder="/produtos/nome-da-imagem.jpg"
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 outline-none focus:border-yellow-400"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm text-zinc-400 mb-2">
                    Descrição
                  </label>

                  <textarea
                    placeholder="Descrição do produto"
                    rows={4}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 outline-none focus:border-yellow-400 resize-none"
                  />
                </div>

              </div>

              <div className="flex justify-end gap-3 mt-6">

                <button
                  onClick={() => setMostrarFormulario(false)}
                  className="px-5 py-2.5 rounded-lg border border-zinc-700 hover:border-zinc-500 transition"
                >
                  Cancelar
                </button>

                <button
                  className="bg-yellow-400 text-black font-bold px-5 py-2.5 rounded-lg hover:bg-yellow-300 transition"
                >
                  Salvar produto
                </button>

              </div>

            </div>
          )}

          {carregando && (
            <div className="p-8 text-center text-zinc-400">
              Carregando produtos...
            </div>
          )}

          {!carregando && produtos.length > 0 && (
            <div className="divide-y divide-zinc-800">

              {produtos.map((produto) => (
                <div
                  key={produto.id}
                  className="flex items-center justify-between p-5 hover:bg-zinc-800/40 transition"
                >

                  <div>
                    <h3 className="font-bold text-lg">
                      {produto.nome}
                    </h3>

                    <div className="flex gap-3 mt-1">

                      {produto.categoria && (
                        <span className="text-xs text-yellow-400">
                          {produto.categoria}
                        </span>
                      )}

                      {produto.descricao && (
                        <p className="text-sm text-zinc-400">
                          {produto.descricao}
                        </p>
                      )}

                    </div>
                  </div>

                  <div className="flex items-center gap-6">

                    <span className="text-yellow-400 font-bold">
                      R$ {Number(produto.preco).toFixed(2).replace(".", ",")}
                    </span>

                    <button className="px-4 py-2 rounded-lg border border-zinc-700 hover:border-yellow-400 transition">
                      Editar
                    </button>

                    <button className="px-4 py-2 rounded-lg border border-red-900 text-red-400 hover:bg-red-950 transition">
                      Excluir
                    </button>

                  </div>

                </div>
              ))}

            </div>
          )}

          {!carregando && produtos.length === 0 && (
            <div className="p-10 text-center">

              <p className="text-zinc-400">
                Nenhum produto encontrado.
              </p>

            </div>
          )}

        </section>

      </div>
    </main>
  );
}