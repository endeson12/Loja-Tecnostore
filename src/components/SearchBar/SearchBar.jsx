import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './SearchBar.module.css'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (searchTerm.trim()) {
      // Navegar para a página de busca com o termo como parâmetro
      navigate(`/busca?q=${encodeURIComponent(searchTerm.trim())}`)
      setSearchTerm('') // Limpar o campo após a busca
    }
  }

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit} role="search">
      <div className={styles.searchContainer}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Buscar produtos..."
          className={styles.searchInput}
          aria-label="Buscar produtos"
        />
        <button
          type="submit"
          className={styles.searchButton}
          aria-label="Pesquisar"
          disabled={!searchTerm.trim()}
        >
          <svg
            className={styles.searchIcon}
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </button>
      </div>
    </form>
  )
}

export default SearchBar 