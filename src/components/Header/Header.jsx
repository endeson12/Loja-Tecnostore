import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import useCartStore from '../../stores/cartStore'
import logoTecnoStore from '../../assets/logo-tecnostore.svg'
import SearchBar from '../SearchBar/SearchBar'
import styles from './Header.module.css'

const Header = () => {
  const { user, signOut } = useAuth()
  const { getCartItemsCount } = useCartStore()

  const handleSignOut = async () => {
    try {
      await signOut()
    } catch (error) {
      console.error('Erro ao fazer logout:', error)
    }
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          {/* Logo */}
          <Link to="/" className={styles.logo}>
            <img src={logoTecnoStore} alt="Logo da TecnoStore" className={styles.logoImage} />
          </Link>

          {/* Barra de Busca */}
          <div className={styles.searchSection}>
            <SearchBar />
          </div>

          {/* Navegação */}
          <nav className={styles.navigation} role="navigation" aria-label="Navegação principal">
            <Link to="/" className={styles.navLink} aria-label="Ir para página inicial">
              Início
            </Link>
            <Link to="/produtos" className={styles.navLink} aria-label="Ver todos os produtos">
              Produtos
            </Link>
            <Link to="/categorias" className={styles.navLink} aria-label="Explorar categorias">
              Categorias
            </Link>
          </nav>

          {/* Ações do usuário */}
          <div className={styles.headerActions}>
            {/* Carrinho */}
            <Link 
              to="/carrinho" 
              className={styles.cartButton}
              aria-label={`Ver carrinho de compras com ${getCartItemsCount()} item${getCartItemsCount() !== 1 ? 's' : ''}`}
            >
              <span className={styles.cartIcon} aria-hidden="true">🛒</span>
              <span className={styles.cartCount} aria-label={`${getCartItemsCount()} item${getCartItemsCount() !== 1 ? 's' : ''} no carrinho`}>
                {getCartItemsCount()}
              </span>
            </Link>

            {/* Autenticação */}
            {user ? (
              <div className={styles.userMenu} role="menu" aria-label="Menu do usuário">
                <span className={styles.userEmail} aria-label={`Usuário logado: ${user.email}`}>
                  {user.email}
                </span>
                <div className={styles.userDropdown} role="menu">
                  <Link to="/perfil" className={styles.dropdownItem} role="menuitem">
                    Meu Perfil
                  </Link>
                  <button 
                    onClick={handleSignOut}
                    className={styles.dropdownItem}
                    role="menuitem"
                    aria-label="Sair da conta"
                  >
                    Sair
                  </button>
                </div>
              </div>
            ) : (
              <div className={styles.authButtons}>
                <Link 
                  to="/login" 
                  className={`${styles.authButton} ${styles.secondaryButton}`} 
                  aria-label="Fazer login"
                >
                  Entrar
                </Link>
                <Link 
                  to="/registro" 
                  className={`${styles.authButton} ${styles.primaryButton}`} 
                  aria-label="Criar nova conta"
                >
                  Cadastrar
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header 
