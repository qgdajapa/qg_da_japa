export default function Home() {
  return (
    <main
      id="inicio"
      className="min-h-screen bg-fixed bg-center text-white"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.8)), url("/fundo.png")',
      }}
    >
      {/* CABEÇALHO */}
      <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
        <div className="h-[150px] flex items-center px-8">

          {/* LOGO */}
          <img
            src="/Logo.png"
            alt="QG da Japa"
            className="h-[135px] w-auto object-contain"
          />

          {/* SLOGAN */}
          <img
            src="/slogan1.png"
            alt="QG da Japa"
            className="h-[115px] w-auto object-contain ml-2"
          />

          {/* MENU */}
          <nav className="flex items-center gap-6 text-xs ml-auto">
            <a
              href="#inicio"
              className="hover:text-yellow-400 transition"
            >
              Início
            </a>

            <a
              href="#produtos"
              className="hover:text-yellow-400 transition"
            >
              Produtos
            </a>

            <a
              href="#sobre"
              className="hover:text-yellow-400 transition"
            >
              Sobre nós
            </a>

            <a
              href="#contato"
              className="hover:text-yellow-400 transition"
            >
              Contato
            </a>
          </nav>
        </div>
      </header>

      {/* ESPAÇO DO TOPO */}
      <section className="h-[175px] flex items-end justify-center text-center px-6">
        <a
          href="#produtos"
          className="inline-block bg-yellow-400 text-black font-bold px-6 py-2.5 rounded-full text-sm hover:bg-yellow-300 transition"
        >
          Ver produtos
        </a>
      </section>

      {/* PRODUTOS */}
      <section id="produtos" className="px-6 pt-5 pb-4">
        <div className="max-w-6xl mx-auto">

          {/* TÍTULO */}
          <h3 className="text-2xl font-bold text-center text-white">
            Encontre o que você procura
          </h3>

          <p className="text-zinc-400 text-center mt-1 mb-4 text-sm">
            Explore nossas categorias
          </p>

          {/* CATEGORIAS */}
          <div className="flex justify-center gap-5">

            <a
              href="/essencias"
              className="w-[125px] h-[125px] flex flex-col items-center justify-center rounded-xl bg-zinc-900/90 border border-zinc-800 hover:border-yellow-400 transition cursor-pointer"
            >
              <img
                src="/icone1.png"
                alt="Essências"
                className="w-12 h-12 object-contain mb-2"
              />

              <span className="font-semibold text-sm">
                Essências
              </span>
            </a>

            <a
              href="/carvoes"
              className="w-[125px] h-[125px] flex flex-col items-center justify-center rounded-xl bg-zinc-900/90 border border-zinc-800 hover:border-yellow-400 transition cursor-pointer"
            >
              <img
                src="/icone2.png"
                alt="Carvões"
                className="w-12 h-12 object-contain mb-2"
              />

              <span className="font-semibold text-sm">
                Carvões
              </span>
            </a>

            <a
              href="/rosh"
              className="w-[125px] h-[125px] flex flex-col items-center justify-center rounded-xl bg-zinc-900/90 border border-zinc-800 hover:border-yellow-400 transition cursor-pointer"
            >
              <img
                src="/icone3.png"
                alt="Rosh"
                className="w-12 h-12 object-contain mb-2"
              />

              <span className="font-semibold text-sm">
                Rosh
              </span>
            </a>

            <div
              className="w-[125px] h-[125px] flex flex-col items-center justify-center rounded-xl bg-zinc-900/90 border border-zinc-800 hover:border-yellow-400 transition cursor-pointer"
            >
              <img
                src="/icone4.png"
                alt="Acessórios"
                className="w-12 h-12 object-contain mb-2"
              />

              <span className="font-semibold text-sm">
                Acessórios
              </span>
            </div>

            <div
              className="w-[125px] h-[125px] flex flex-col items-center justify-center rounded-xl bg-zinc-900/90 border border-zinc-800 hover:border-yellow-400 transition cursor-pointer"
            >
              <img
                src="/icone5.png"
                alt="Kits"
                className="w-12 h-12 object-contain mb-2"
              />

              <span className="font-semibold text-sm">
                Kits
              </span>
            </div>
          </div>

          {/* PRODUTOS EM DESTAQUE */}
          <section className="pt-8 pb-2">

            <h3 className="text-2xl font-bold text-center text-white">
              Produtos em destaque
            </h3>

            <p className="text-zinc-400 text-center mt-1 mb-4 text-sm">
              Confira alguns dos nossos produtos
            </p>

            <div className="grid grid-cols-3 gap-5 max-w-5xl mx-auto">

              {/* ESSÊNCIAS */}
              {/* ESSÊNCIAS */}
<div className="bg-zinc-900/90 border border-zinc-800 rounded-xl overflow-hidden hover:border-yellow-400 transition">
  <img
    src="/essencia.jpeg"
    alt="Essências"
    className="w-full aspect-square object-cover"
  />

  <div className="p-3">
    <h4 className="text-base font-bold">
      Essências
    </h4>

    <p className="text-zinc-400 text-xs mt-1">
      Diversos sabores para sua sessão.
    </p>

    <button className="mt-2 w-full bg-yellow-400 text-black font-bold py-1.5 rounded-lg text-sm hover:bg-yellow-300 transition">
      Ver produto
    </button>
  </div>
</div>


{/* ROSH */}
<div className="bg-zinc-900/90 border border-zinc-800 rounded-xl overflow-hidden hover:border-yellow-400 transition">
  <img
    src="/rosh.jpeg"
    alt="Rosh"
    className="w-full aspect-square object-cover"
  />

  <div className="p-3">
    <h4 className="text-base font-bold">
      Rosh
    </h4>

    <p className="text-zinc-400 text-xs mt-1">
      Modelos para diferentes estilos de sessão.
    </p>

    <button className="mt-2 w-full bg-yellow-400 text-black font-bold py-1.5 rounded-lg text-sm hover:bg-yellow-300 transition">
      Ver produto
    </button>
  </div>
</div>


{/* CARVÕES */}
<div className="bg-zinc-900/90 border border-zinc-800 rounded-xl overflow-hidden hover:border-yellow-400 transition">
  <img
    src="/carvao.jpeg"
    alt="Carvões"
    className="w-full aspect-square object-cover"
  />

  <div className="p-3">
    <h4 className="text-base font-bold">
      Carvões
    </h4>

    <p className="text-zinc-400 text-xs mt-1">
      Carvões para manter sua sessão acesa.
    </p>

    <button className="mt-2 w-full bg-yellow-400 text-black font-bold py-1.5 rounded-lg text-sm hover:bg-yellow-300 transition">
      Ver produto
    </button>
  </div>
</div>

            </div>
          </section>
        </div>
      </section>

      {/* SOBRE */}
      <section
        id="sobre"
        className="px-6 py-12 bg-black/10"
      >
        <div className="max-w-5xl mx-auto text-center">

          <p className="text-yellow-400 uppercase tracking-[0.3em] text-xs mb-2">
            Sobre nós
          </p>

          <h3 className="text-3xl font-bold text-white">
            O QG da Japa
          </h3>

          <p className="mt-4 text-zinc-300 text-base leading-7 max-w-3xl mx-auto">
            Um espaço criado para quem aprecia uma boa sessão,
            com produtos selecionados e aquele cuidado especial
            em cada detalhe.
          </p>

          <p className="mt-2 text-zinc-400 leading-6 max-w-2xl mx-auto">
            Essências, carvões, roshs e acessórios reunidos em
            um só lugar. Aqui, a ideia é deixar sua experiência
            cada vez melhor.
          </p>

        </div>
      </section>

      {/* CONTATO */}
      <section
        id="contato"
        className="px-6 py-12 bg-transparent"
      >
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-7">

            <p className="text-yellow-400 uppercase tracking-[0.3em] text-xs mb-2">
              Fale com a gente
            </p>

            <h3 className="text-3xl font-bold text-white">
              Entre para o QG
            </h3>

            <p className="text-zinc-400 mt-2 text-sm">
              Acompanhe as novidades ou fale diretamente com a gente.
            </p>

          </div>

          <div className="grid grid-cols-2 gap-5">

            <div className="rounded-xl border border-zinc-800 bg-zinc-950/50 p-5 text-center hover:border-yellow-400 transition">

              <h4 className="text-lg font-bold text-white">
                Instagram
              </h4>

              <p className="text-zinc-400 text-xs mt-2">
                Acompanhe novidades, produtos e promoções.
              </p>

              <button className="mt-3 px-6 py-2 rounded-full bg-yellow-400 text-black font-bold text-sm hover:bg-yellow-300 transition">
                Ver Instagram
              </button>

            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-950/50 p-5 text-center hover:border-yellow-400 transition">

              <h4 className="text-lg font-bold text-white">
                WhatsApp
              </h4>

              <p className="text-zinc-400 text-xs mt-2">
                Tire suas dúvidas e faça seu pedido.
              </p>

              <button className="mt-3 px-6 py-2 rounded-full bg-yellow-400 text-black font-bold text-sm hover:bg-yellow-300 transition">
                Chamar no WhatsApp
              </button>

            </div>

          </div>
        </div>
      </section>

      {/* LOCALIZAÇÃO */}
      <section
        className="px-6 py-12 bg-black/10"
      >
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-7">

            <p className="text-yellow-400 uppercase tracking-[0.3em] text-xs mb-2">
              Visite o QG
            </p>

            <h3 className="text-3xl font-bold text-white">
              Onde estamos
            </h3>

          </div>

          <div className="grid grid-cols-2 gap-5">

            <div className="rounded-xl border border-zinc-800 bg-zinc-950/50 p-5">

              <h4 className="text-lg font-bold text-white">
                📍 Localização
              </h4>

              <p className="text-zinc-400 text-xs mt-3 leading-6">
                Endereço da loja
                <br />
                São Paulo - SP
              </p>

              <button className="mt-3 px-6 py-2 rounded-full bg-yellow-400 text-black font-bold text-sm hover:bg-yellow-300 transition">
                Ver no mapa
              </button>

            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-950/50 p-5">

              <h4 className="text-lg font-bold text-white">
                🕐 Horário de atendimento
              </h4>

              <div className="text-zinc-400 text-xs mt-3 space-y-1.5">
                <p>Segunda a sexta: 09h às 18h</p>
                <p>Sábado: 09h às 14h</p>
                <p>Domingo: Fechado</p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="border-t border-zinc-800 bg-black/40 px-6 py-6">

        <div className="max-w-6xl mx-auto">

          <div className="flex flex-row items-center justify-between gap-6">

            <img
              src="/Logo.png"
              alt="QG da Japa"
              className="h-10 w-auto object-contain"
            />

            <p className="text-zinc-500 text-xs text-center">
              © 2026 QG da Japa. Todos os direitos reservados.
            </p>

            <div className="flex gap-5 text-xs">

              <a
                href="#"
                className="text-zinc-400 hover:text-yellow-400 transition"
              >
                Instagram
              </a>

              <a
                href="#"
                className="text-zinc-400 hover:text-yellow-400 transition"
              >
                WhatsApp
              </a>

            </div>

          </div>

        </div>

      </footer>
    </main>
  );
}