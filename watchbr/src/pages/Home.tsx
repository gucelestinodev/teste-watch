import React from 'react'
import { Container } from '../components/Container/Container.tsx'

export const Home: React.FC = () => {
  return (
    <main className="flex flex-col gap-6 py-8">
      <Container>
        <h2 className="text-2xl font-semibold mb-2">Bem-vindo(a) à Watch Brasil 🎬</h2>
        <p className="text-white/70">
          Aqui você encontra transmissões ao vivo, filmes, séries e shows — tudo em um só lugar.
        </p>
      </Container>

      <Container>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition">
            <h3 className="text-lg font-medium mb-1">Catálogo</h3>
            <p className="text-sm text-white/60">Explore os títulos disponíveis.</p>
          </div>
          <div className="bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition">
            <h3 className="text-lg font-medium mb-1">Novidades</h3>
            <p className="text-sm text-white/60">Veja os lançamentos da semana.</p>
          </div>
          <div className="bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition">
            <h3 className="text-lg font-medium mb-1">Eventos ao vivo</h3>
            <p className="text-sm text-white/60">Assista aos shows e festivais em tempo real.</p>
          </div>
        </div>
      </Container>
    </main>
  )
}

export default Home;