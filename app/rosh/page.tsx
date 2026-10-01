export default function Rosh() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      
      <div className="max-w-6xl mx-auto">

        <a
          href="/"
          className="inline-block mb-10 text-yellow-400 hover:text-yellow-300 transition"
        >
          ← Voltar para o início
        </a>

        <h1 className="text-4xl md:text-5xl font-bold text-center">
          Rosh
        </h1>

        <p className="text-zinc-400 text-center mt-3 mb-12">
          Confira nossos roshs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-yellow-400 transition">
            <img
              src="/ro1.jpeg"
              alt="Rosh"
              className="w-full h-80 object-cover"
            />

            <div className="p-6">
              <h2 className="text-2xl font-bold">
                Rosh 1
              </h2>

              <p className="text-zinc-400 mt-2">
                Descrição do rosh.
              </p>

              <button className="mt-6 w-full bg-yellow-400 text-black font-bold py-3 rounded-xl hover:bg-yellow-300 transition">
                Ver produto
              </button>
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-yellow-400 transition">
            <img
              src="/ro2.jpeg"
              alt="Rosh"
              className="w-full h-80 object-cover"
            />

            <div className="p-6">
              <h2 className="text-2xl font-bold">
                Rosh 2
              </h2>

              <p className="text-zinc-400 mt-2">
                Descrição do rosh.
              </p>

              <button className="mt-6 w-full bg-yellow-400 text-black font-bold py-3 rounded-xl hover:bg-yellow-300 transition">
                Ver produto
              </button>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}