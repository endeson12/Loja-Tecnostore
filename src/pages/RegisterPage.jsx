import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import toast from 'react-hot-toast'
import styles from './AuthPages.module.css'

const RegisterPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const { signUp } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    if (password !== confirmPassword) {
      toast.error('As senhas não coincidem')
      setLoading(false)
      return
    }

    if (password.length < 6) {
      toast.error('A senha deve ter pelo menos 6 caracteres')
      setLoading(false)
      return
    }

    try {
      const { error } = await signUp(email, password)
      
      if (error) {
        toast.error(error.message || 'Erro ao criar conta')
      } else {
        toast.success('Conta criada com sucesso! Verifique seu e-mail para confirmar.')
        navigate('/login')
      }
    } catch (error) {
      toast.error('Erro inesperado ao criar conta')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={styles.authContainer}>
      <div className={styles.authCard}>
        <h2>Criar nova conta</h2>
        <p className={styles.authSubtitle}>
          Cadastre-se para começar a comprar
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
              placeholder="Mínimo 6 caracteres"
              minLength={6}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="confirmPassword">Confirmar Senha</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="Confirme sua senha"
            />
          </div>

          <button 
            type="submit" 
            className={styles.authButton}
            disabled={loading}
          >
            {loading ? 'Criando conta...' : 'Criar conta'}
          </button>
        </form>

        <div className={styles.authLinks}>
          <p>
            Já tem uma conta?{' '}
            <Link to="/login" className={styles.authLink}>
              Fazer login
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage 