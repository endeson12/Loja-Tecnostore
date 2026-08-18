import { Link } from 'react-router-dom'
import { motion as Motion } from 'framer-motion'
import logoTecnoStore from '../../assets/logo-tecnostore.svg'
import styles from './Footer.module.css'

const Footer = () => {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    // Implementar lógica de newsletter aqui
    console.log('Newsletter inscrição')
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          {/* Coluna 1 - Institucional */}
          <div className={styles.footerColumn}>
            <div className={styles.footerLogo}>
              <img src={logoTecnoStore} alt="Logo da TecnoStore" className={styles.logoImage} />
            </div>
            <p className={styles.footerDescription}>
              A TecnoStore é sua loja de confiança para produtos de tecnologia. 
              Oferecemos qualidade, preços competitivos e o melhor atendimento.
            </p>
            <div className={styles.footerContact}>
              <p>📧 contato@tecnostore.com</p>
              <p>📞 (11) 9999-9999</p>
            </div>
          </div>

          {/* Coluna 2 - Navegação */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerTitle}>Navegação</h3>
            <nav className={styles.footerNav}>
              <Link to="/" className={styles.footerLink}>Início</Link>
              <Link to="/produtos" className={styles.footerLink}>Todos os Produtos</Link>
              <Link to="/produtos" className={styles.footerLink}>Categorias</Link>
              <Link to="/sobre" className={styles.footerLink}>Sobre Nós</Link>
              <Link to="/privacidade" className={styles.footerLink}>Política de Privacidade</Link>
            </nav>
          </div>

          {/* Coluna 3 - Ajuda e Suporte */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerTitle}>Ajuda e Suporte</h3>
            <nav className={styles.footerNav}>
              <Link to="/faq" className={styles.footerLink}>Dúvidas Frequentes (FAQ)</Link>
              <Link to="/como-comprar" className={styles.footerLink}>Como Comprar</Link>
              <Link to="/contato" className={styles.footerLink}>Fale Conosco</Link>
              <Link to="/trocas" className={styles.footerLink}>Trocas e Devoluções</Link>
              <Link to="/garantia" className={styles.footerLink}>Garantia</Link>
            </nav>
          </div>

          {/* Coluna 4 - Social e Newsletter */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerTitle}>Redes Sociais</h3>
            <div className={styles.socialLinks}>
              <Motion.a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialLink}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Siga-nos no Facebook"
              >
                📘 Facebook
              </Motion.a>
              <Motion.a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialLink}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Siga-nos no Instagram"
              >
                📷 Instagram
              </Motion.a>
              <Motion.a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialLink}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Siga-nos no Twitter"
              >
                🐦 Twitter
              </Motion.a>
            </div>

            <div className={styles.newsletter}>
              <h4 className={styles.newsletterTitle}>Newsletter</h4>
              <p className={styles.newsletterDescription}>
                Receba ofertas exclusivas e novidades!
              </p>
              <form onSubmit={handleNewsletterSubmit} className={styles.newsletterForm}>
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className={styles.newsletterInput}
                  required
                  aria-label="E-mail para newsletter"
                />
                <Motion.button
                  type="submit"
                  className={styles.newsletterButton}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Inscrever-se
                </Motion.button>
              </form>
            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer 
