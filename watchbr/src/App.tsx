import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { Home } from './pages/Home'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#1E1E22] text-white">
      <Header />
      <div className="flex-1">
        <Home />
      </div>
      <Footer />
    </div>
  )
}

export default App
