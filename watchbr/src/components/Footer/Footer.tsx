import React from 'react'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0d0d0d] border-t border-white/10 mt-8">
      <div className="container mx-auto py-6 px-4 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Watch Brasil — Todos os direitos reservados.
      </div>
    </footer>
  )
}
