import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import styles from './ProfilePage.module.css'

const ProfilePage = () => {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()

  const handleSignOut = async () => {
    try {
      const { error } = await signOut()
      if (error) {
        toast.error('Erro ao sair da conta')
      } else {
        toast.success('Logout realizado com sucesso!')
        navigate('/')
      }
    } catch (error) {
      toast.error('Erro inesperado ao sair da conta')
    }
  }

  if (!user) {
    return (
      <div className={styles.profileContainer}>
        <div className={styles.profileCard}>
          <h2>Acesso Negado</h2>
          <p>Você precisa estar logado para acessar esta página.</p>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileCard}>
        <h2>Meu Perfil</h2>
        
        <div className={styles.profileInfo}>
          <div className={styles.infoGroup}>
            <label>E-mail:</label>
            <span>{user.email}</span>
          </div>
          
          <div className={styles.infoGroup}>
            <label>ID do Usuário:</label>
            <span>{user.id}</span>
          </div>
          
          <div className={styles.infoGroup}>
            <label>Data de Criação:</label>
            <span>
              {new Date(user.created_at).toLocaleDateString('pt-BR')}
            </span>
          </div>
        </div>

        <div className={styles.profileActions}>
          <button 
            onClick={handleSignOut}
            className={styles.logoutButton}
          >
            Sair da Conta
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage 