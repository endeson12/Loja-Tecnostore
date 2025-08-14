import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from './contexts/AuthContext'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HomePage from './pages/HomePage'
import ProdutosPage from './pages/ProdutosPage'
import SobreNosPage from './pages/SobreNosPage'
import PoliticaPrivacidadePage from './pages/PoliticaPrivacidadePage'
import FaqPage from './pages/FaqPage'
import ComoComprarPage from './pages/ComoComprarPage'
import FaleConoscoPage from './pages/FaleConoscoPage'
import TrocasDevolucoesPage from './pages/TrocasDevolucoesPage'
import GarantiaPage from './pages/GarantiaPage'
import CartPage from './pages/CartPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ProfilePage from './pages/ProfilePage'
import ProductDetailPage from './pages/ProductDetailPage'
import CategoriasPage from './pages/CategoriasPage'
import BuscaPage from './pages/BuscaPage'
import './App.css'

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/produtos" element={<ProdutosPage />} />
              <Route path="/categorias" element={<CategoriasPage />} />
              <Route path="/sobre" element={<SobreNosPage />} />
              <Route path="/privacidade" element={<PoliticaPrivacidadePage />} />
              <Route path="/faq" element={<FaqPage />} />
              <Route path="/como-comprar" element={<ComoComprarPage />} />
              <Route path="/contato" element={<FaleConoscoPage />} />
              <Route path="/trocas" element={<TrocasDevolucoesPage />} />
              <Route path="/garantia" element={<GarantiaPage />} />
              <Route path="/carrinho" element={<CartPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/registro" element={<RegisterPage />} />
              <Route path="/perfil" element={<ProfilePage />} />
              <Route path="/produto/:id" element={<ProductDetailPage />} />
              <Route path="/busca" element={<BuscaPage />} />
            </Routes>
          </main>
          <Footer />
          
          {/* Configuração do Toaster */}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 3000,
              style: {
                background: '#363636',
                color: '#fff',
              },
              success: {
                duration: 2000,
                iconTheme: {
                  primary: '#4ade80',
                  secondary: '#fff',
                },
              },
              error: {
                duration: 4000,
                iconTheme: {
                  primary: '#ef4444',
                  secondary: '#fff',
                },
              },
            }}
          />
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App
