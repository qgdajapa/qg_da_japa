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
      <header className="fixed top-0 left-0 w-full z-50 border-b border-yellow-500/20 bg-transparent">
  <div className="h-[350px] flex items-center px-6">

    {/* LOGO */}
    <img
      src="/Logo.png"
      alt="QG da Japa"
      className="h-[250px] w-auto object-contain -translate-y-15"
    />

    {/* SLOGAN */}
    <img
      src="/slogan1.png"
      alt="QG da Japa"
      className="h-[250px] w-auto object-contain ml-3"
    />

    {/* MENU */}
    <nav className="hidden md:flex items-center gap-8 text-base ml-auto">
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

      {/* ÁREA PRINCIPAL */}
      <section className="min-h-[10vh] flex items-center justify-center text-center px-6 pt-32">
        <div>
          <a
            href="#produtos"
            className="inline-block mt-8 bg-yellow-400 text-black font-bold px-8 py-3 rounded-full hover:bg-yellow-300 transition"
          >
            Ver produtos
          </a>
        </div>
      </section>

      {/* PRODUTOS */}
      <section id="produtos" className="px-6 py-20 bg-transparent">
        <div className="max-w-6xl mx-auto">

          <h3 className="text-3xl md:text-4xl font-bold text-center text-white">
            Encontre o que você procura
          </h3>

          <p className="text-zinc-400 text-center mt-3 mb-12">
            Explore nossas categorias
          </p>

          {/* CATEGORIAS */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-5">

            {/* ESSÊNCIAS */}
            <a
              href="/essencias"
              className="flex flex-col items-center justify-center p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-yellow-400 transition cursor-pointer"
            >
              <img
                src="/icone1.png"
                alt="Essências"
                className="w-20 h-20 object-contain mb-4"
              />
              <span className="font-semibold">
                Essências
              </span>
            </a>

            {/* CARVÕES */}
            <a
              href="/carvoes"
              className="flex flex-col items-center justify-center p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-yellow-400 transition cursor-pointer"
            >
              <img
                src="/icone2.png"
                alt="Carvões"
                className="w-20 h-20 object-contain mb-4"
              />
              <span className="font-semibold">
                Carvões
              </span>
            </a>

            {/* ROSH */}
            <a
              href="/rosh"
              className="flex flex-col items-center justify-center p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-yellow-400 transition cursor-pointer"
            >
              <img
                src="/icone3.png"
                alt="Rosh"
                className="w-20 h-20 object-contain mb-4"
              />
              <span className="font-semibold">
                Rosh
              </span>
            </a>

            {/* ACESSÓRIOS */}
            <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-yellow-400 transition cursor-pointer">
              <img
                src="/icone4.png"
                alt="Acessórios"
                className="w-20 h-20 object-contain mb-4"
              />
              <span className="font-semibold">
                Acessórios
              </span>
            </div>

            {/* KITS */}
            <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-yellow-400 transition cursor-pointer">
              <img
                src="/icone5.png"
                alt="Kits"
                className="w-20 h-20 object-contain mb-4"
              />
              <span className="font-semibold">
                Kits
              </span>
            </div>

          </div>
        </div>

        {/* PRODUTOS EM DESTAQUE */}
        <section className="px-6 py-20 bg-zinc-950/20">
          <div className="max-w-6xl mx-auto">

            <h3 className="text-3xl md:text-4xl font-bold text-center text-white">
              Produtos em destaque
            </h3>

            <p className="text-zinc-400 text-center mt-3 mb-12">
              Confira alguns dos nossos produtos
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              {/* ESSÊNCIAS */}
              <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl overflow-hidden hover:border-yellow-400 transition">

                <img
                  src="/essencia.jpeg"
                  alt="Essências"
                  className="w-full h-64 object-cover"
                />

                <div className="p-5">

                  <h4 className="text-xl font-bold">
                    Essências
                  </h4>

                  <p className="text-zinc-400 mt-2">
                    Diversos sabores para sua sessão.
                  </p>

                  <button className="mt-5 w-full bg-yellow-400 text-black font-bold py-3 rounded-xl hover:bg-yellow-300 transition">
                    Ver produto
                  </button>

                </div>
              </div>

              {/* CARVÕES */}
              <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl overflow-hidden hover:border-yellow-400 transition">

                <img
                  src="/carvao.jpeg"
                  alt="Carvões"
                  className="w-full h-64 object-cover"
                />

                <div className="p-5">

                  <h4 className="text-xl font-bold">
                    Carvões
                  </h4>

                  <p className="text-zinc-400 mt-2">
                    Carvões para manter sua sessão acesa.
                  </p>

                  <button className="mt-5 w-full bg-yellow-400 text-black font-bold py-3 rounded-xl hover:bg-yellow-300 transition">
                    Ver produto
                  </button>

                </div>
              </div>

              {/* ROSH */}
              <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl overflow-hidden hover:border-yellow-400 transition">

                <img
                  src="/rosh.jpeg"
                  alt="Rosh"
                  className="w-full h-64 object-cover"
                />

                <div className="p-5">

                  <h4 className="text-xl font-bold">
                    Rosh
                  </h4>

                  <p className="text-zinc-400 mt-2">
                    Modelos para diferentes estilos de sessão.
                  </p>

                  <button className="mt-5 w-full bg-yellow-400 text-black font-bold py-3 rounded-xl hover:bg-yellow-300 transition">
                    Ver produto
                  </button>

                </div>
              </div>

            </div>
          </div>
        </section>
      </section>

      {/* SOBRE */}
      <section
        id="sobre"
        className="px-6 py-20 bg-black/10"
      >
        <div className="max-w-5xl mx-auto text-center">

          <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-4">
            Sobre nós
          </p>

          <h3 className="text-3xl md:text-5xl font-bold text-white">
            O QG da Japa
          </h3>

          <p className="mt-6 text-zinc-300 text-base md:text-lg leading-8 max-w-3xl mx-auto">
            Um espaço criado para quem aprecia uma boa sessão,
            com produtos selecionados e aquele cuidado especial
            em cada detalhe.
          </p>

          <p className="mt-4 text-zinc-400 leading-7 max-w-2xl mx-auto">
            Essências, carvões, roshs e acessórios reunidos em
            um só lugar. Aqui, a ideia é deixar sua experiência
            cada vez melhor.
          </p>

        </div>
      </section>

      {/* CONTATO */}
      <section
        id="contato"
        className="px-6 py-20 bg-transparent"
      >
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-12">

            <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-4">
              Fale com a gente
            </p>

            <h3 className="text-3xl md:text-5xl font-bold text-white">
              Entre para o QG
            </h3>

            <p className="text-zinc-400 mt-4">
              Acompanhe as novidades ou fale diretamente com a gente.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* INSTAGRAM */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/50 p-8 text-center hover:border-yellow-400 transition">

              <h4 className="text-2xl font-bold text-white">
                Instagram
              </h4>

              <p className="text-zinc-400 mt-3">
                Acompanhe novidades, produtos e promoções.
              </p>

              <button className="mt-6 px-8 py-3 rounded-full bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition">
                Ver Instagram
              </button>

            </div>

            {/* WHATSAPP */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/50 p-8 text-center hover:border-yellow-400 transition">

              <h4 className="text-2xl font-bold text-white">
                WhatsApp
              </h4>

              <p className="text-zinc-400 mt-3">
                Tire suas dúvidas e faça seu pedido.
              </p>

              <button className="mt-6 px-8 py-3 rounded-full bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition">
                Chamar no WhatsApp
              </button>

            </div>

          </div>
        </div>
      </section>

      {/* LOCALIZAÇÃO E HORÁRIO */}
      <section className="px-6 py-20 bg-black/10">
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-12">

            <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-4">
              Visite o QG
            </p>

            <h3 className="text-3xl md:text-5xl font-bold text-white">
              Onde estamos
            </h3>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* LOCALIZAÇÃO */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/50 p-8">

              <h4 className="text-2xl font-bold text-white">
                📍 Localização
              </h4>

              <p className="text-zinc-400 mt-4 leading-7">
                Endereço da loja
                <br />
                São Paulo - SP
              </p>

              <button className="mt-6 px-8 py-3 rounded-full bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition">
                Ver no mapa
              </button>

            </div>

            {/* HORÁRIO */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/50 p-8">

              <h4 className="text-2xl font-bold text-white">
                🕐 Horário de atendimento
              </h4>

              <div className="text-zinc-400 mt-4 space-y-2">
                <p>Segunda a sexta: 09h às 18h</p>
                <p>Sábado: 09h às 14h</p>
                <p>Domingo: Fechado</p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="border-t border-zinc-800 bg-black/40 px-6 py-10">
        <div className="max-w-6xl mx-auto">

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            <img
              src="/Logo.png"
              alt="QG da Japa"
              className="h-12 w-auto object-contain"
            />

            <p className="text-zinc-500 text-sm text-center">
              © 2026 QG da Japa. Todos os direitos reservados.
            </p>

            <div className="flex gap-6 text-sm">

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