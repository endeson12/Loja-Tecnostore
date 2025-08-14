import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import toast from 'react-hot-toast'
import styles from './AuthPages.module.css'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const { signIn } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const { error } = await signIn(email, password)
      
      if (error) {
        toast.error(error.message || 'Erro ao fazer login')
      } else {
        toast.success('Login realizado com sucesso!')
        navigate('/')
      }
    } catch (error) {
      toast.error('Erro inesperado ao fazer login')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={styles.authContainer}>
      <div className={styles.authCard}>
        <h2>Entrar na sua conta</h2>
        <p className={styles.authSubtitle}>
          Acesse sua conta para continuar comprando
        </p>

        <form onSubmit={handleSubmit} className={styles.authForm}>
          <div className={styles.formGroup}>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="seu@email.com"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Sua senha"
            />
          </div>

          <button 
            type="submit" 
            className={styles.authButton}
            disabled={loading}
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>

        <div className={styles.authLinks}>
          <p>
            Não tem uma conta?{' '}
            <Link to="/registro" className={styles.authLink}>
              Criar conta
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage 